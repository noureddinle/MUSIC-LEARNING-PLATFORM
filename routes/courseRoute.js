const express = require('express');
const { param, query, validationResult } = require('express-validator');
const { getCollections, ObjectId } = require('../utils/database/collections');
const router = express.Router();

router.get(
  '/',
  [
    query('page').optional().isInt({ min: 1 }).toInt(),
    query('limit').optional().isInt({ min: 1, max: 100 }).toInt()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { courses } = await getCollections();
    try {
      const page = req.query.page || 1;
      const limit = req.query.limit || 10;
      const skip = (page - 1) * limit;
      const courseList = await courses.find().sort({ createdAt: -1 }).skip(skip).limit(limit).toArray();
      const total = await courses.countDocuments();
      res.json({ courses: courseList, total, page, limit });
    } catch (error) {
      console.error('Get courses error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

router.get(
  '/:id',
  [
    param('id').isMongoId().withMessage('Invalid course ID')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { courses } = await getCollections();
    try {
      const course = await courses.findOne({ _id: new ObjectId(req.params.id) });
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
      res.json(course);
    } catch (error) {
      console.error('Get course by ID error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

module.exports = router;