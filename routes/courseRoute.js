const express = require('express');
const { param, query, validationResult } = require('express-validator');
const { getCollections, ObjectId } = require('../utils/db');

const router = express.Router();

// GET all courses
router.get('/', async (req, res) => {
  try {
    const { courses } = await getCollections();
    
    // Manually convert query parameters to ensure they're the right type
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, parseInt(req.query.limit) || 10);
    const skip = (page - 1) * limit;
    const random = req.query.random === 'true';
    
    console.log('Query params (converted):', { 
      page: `${page} (${typeof page})`, 
      limit: `${limit} (${typeof limit})`,
      skip: `${skip} (${typeof skip})`,
      random 
    });
    
    // Build aggregation pipeline
    let pipeline = [
      {
        $lookup: {
          from: 'ratings',
          localField: '_id',
          foreignField: 'courseId',
          as: 'courseRatings'
        }
      },
      {
        $addFields: {
          averageRating: {
            $cond: {
              if: { $gt: [{ $size: '$courseRatings' }, 0] },
              then: { $avg: '$courseRatings.rating' },
              else: 0
            }
          },
          totalRatings: { $size: '$courseRatings' },
          enrolledCount: { $ifNull: ['$enrolledCount', 0] }
        }
      },
      { $project: { courseRatings: 0 } }
    ];
    
    // Add pagination or sampling - ensure numbers are integers
    if (random) {
      pipeline.push({ $sample: { size: limit } });
    } else {
      pipeline.push({ $skip: skip });
      pipeline.push({ $limit: limit });
    }
    
    console.log('Pipeline limit stage:', pipeline[pipeline.length - 1]);
    
    const courseList = await courses.aggregate(pipeline).toArray();
    const total = await courses.countDocuments();
    
    console.log(`Found ${courseList.length} courses out of ${total} total`);
    
    res.json({ 
      courses: courseList, 
      total, 
      page, 
      limit 
    });
    
  } catch (error) {
    console.error('Get courses error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message 
    });
  }
});

// GET single course by ID
router.get('/:id', async (req, res) => {
  try {
    // Validate ObjectId format manually
    const courseIdString = req.params.id;
    if (!/^[0-9a-fA-F]{24}$/.test(courseIdString)) {
      return res.status(400).json({ 
        error: 'Invalid course ID format',
        message: 'Course ID must be a valid 24-character hex string'
      });
    }
    
    const { courses } = await getCollections();
    const courseId = new ObjectId(courseIdString);
    
    console.log('Searching for course with ID:', courseId);
    
    const courseResult = await courses.aggregate([
      { $match: { _id: courseId } },
      {
        $lookup: {
          from: 'ratings',
          localField: '_id',
          foreignField: 'courseId',
          as: 'courseRatings'
        }
      },
      {
        $addFields: {
          averageRating: {
            $cond: {
              if: { $gt: [{ $size: '$courseRatings' }, 0] },
              then: { $avg: '$courseRatings.rating' },
              else: 0
            }
          },
          totalRatings: { $size: '$courseRatings' },
          enrolledCount: { $ifNull: ['$enrolledCount', 0] }
        }
      },
      { $project: { courseRatings: 0 } }
    ]).toArray();
    
    console.log('Aggregation result:', {
      found: courseResult.length,
      courseId: courseIdString
    });
    
    if (courseResult.length === 0) {
      return res.status(404).json({ 
        error: 'Course not found',
        message: `No course found with ID: ${courseIdString}`
      });
    }
    
    const course = courseResult[0];
    console.log('Returning course:', {
      id: course._id,
      title: course.title,
      hasRating: !!course.averageRating,
      rating: course.averageRating
    });
    
    res.json(course);
    
  } catch (error) {
    console.error('Get course by ID error:', error);
    
    // Handle MongoDB ObjectId errors
    if (error.message.includes('ObjectId')) {
      return res.status(400).json({
        error: 'Invalid course ID',
        message: 'The provided course ID format is invalid'
      });
    }
    
    res.status(500).json({ 
      error: 'Internal Server Error',
      message: error.message 
    });
  }
});

module.exports = router;