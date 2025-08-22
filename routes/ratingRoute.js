const express = require('express');
const { param, body, validationResult } = require('express-validator');
const { getCollections, ObjectId } = require('../utils/database');
const { authenticate } = require('../routes/authRoute');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { ratings, courses } = await getCollections();
    const ratingsList = await ratings.aggregate([
      {
        $lookup: {
          from: 'courses',
          localField: 'courseId',
          foreignField: '_id',
          as: 'course',
          pipeline: [{ $project: { title: 1 } }]
        }
      },
      { $unwind: '$course' }
    ]).toArray();
    res.json(ratingsList);
  } catch (error) {
    console.error('Error fetching ratings:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get(
  '/course/:courseId',
  [param('courseId').isMongoId().withMessage('Invalid course ID')],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { ratings, courses } = await getCollections();
      const courseId = new ObjectId(req.params.courseId);
      const ratingsList = await ratings.aggregate([
        { $match: { courseId } },
        {
          $lookup: {
            from: 'courses',
            localField: 'courseId',
            foreignField: '_id',
            as: 'course',
            pipeline: [{ $project: { title: 1 } }]
          }
        },
        { $unwind: '$course' }
      ]).toArray();

      if (!ratingsList.length) {
        return res.status(404).json({ error: 'No ratings found for this course' });
      }
      res.json(ratingsList);
    } catch (error) {
      console.error('Error fetching course ratings:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

router.post(
  '/:id',
  authenticate,
  [
    param('id').isMongoId().withMessage('Invalid course ID'),
    body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
    body('review').optional().isString().withMessage('Review must be a string')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { ratings, courses } = await getCollections();
      const courseId = new ObjectId(req.params.id);
      const userId = new ObjectId(req.user.userId);
      const { rating, review } = req.body;

      console.log('Adding rating for course:', courseId, 'by user:', userId);

      const course = await courses.findOne({ _id: courseId });
      if (!course) return res.status(404).json({ error: 'Course not found' });

      const existingRating = await ratings.findOne({ courseId, userId });
      if (existingRating) {
        await ratings.updateOne(
          { courseId, userId },
          {
            $set: {
              rating,
              review: review || existingRating.review,
              updatedAt: new Date()
            }
          }
        );
        res.json({ message: 'Rating updated successfully' });
      } else {
        const result = await ratings.insertOne({
          courseId,
          userId,
          rating,
          review: review || '',
          createdAt: new Date(),
          updatedAt: new Date()
        });
        res.status(201).json({ message: 'Rating added successfully', ratingId: result.insertedId });
      }
    } catch (error) {
      console.error('Add rating error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

module.exports = router;