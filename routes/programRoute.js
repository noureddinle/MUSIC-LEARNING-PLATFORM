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
    try {
      const { musicPrograms } = await getCollections();
      const page = req.query.page || 1;
      const limit = req.query.limit || 10;
      const skip = (page - 1) * limit;
      const programList = await musicPrograms.find().sort({ createdAt: -1 }).skip(skip).limit(limit).toArray();
      const total = await musicPrograms.countDocuments();
      res.json({ programs: programList, total, page, limit });
    } catch (error) {
      console.error('Get music programs error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

router.get(
  '/:id',
  [
    param('id').isMongoId().withMessage('Invalid music program ID')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { musicPrograms } = await getCollections();
      const program = await musicPrograms.findOne({ _id: new ObjectId(req.params.id) });
      if (!program) {
        return res.status(404).json({ error: 'Music program not found' });
      }
      res.json(program);
    } catch (error) {
      console.error('Get music program by ID error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

module.exports = router;