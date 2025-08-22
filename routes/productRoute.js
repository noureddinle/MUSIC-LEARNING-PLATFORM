const express = require('express');
const { param, query, validationResult } = require('express-validator');
const { getCollections, ObjectId } = require('../utils/db');
const { MUSIC_CATEGORIES } = require('../utils/constants');

const router = express.Router();

router.get(
  '/',
  [
    query('page').optional().isInt({ min: 1 }).toInt(),
    query('limit').optional().isInt({ min: 1 }).toInt()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { products } = await getCollections();
    try {
      const page = req.query.page || 1;
      const limit = req.query.limit || 10;
      const skip = (page - 1) * limit;

      const productList = await products.find().skip(skip).limit(limit).toArray();
      const total = await products.countDocuments();

      res.json({ products: productList, total, page, limit });
    } catch (error) {
      console.error('Get products error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

router.get(
  '/category/:category',
  [
    param('category').isIn(Object.values(MUSIC_CATEGORIES)).withMessage(`Invalid category. Available categories: ${Object.values(MUSIC_CATEGORIES).join(', ')}`)
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { products } = await getCollections();
    try {
      const page = req.query.page || 1;
      const limit = req.query.limit || 10;
      const skip = (page - 1) * limit;

      const productList = await products.find({ category: req.params.category }).skip(skip).limit(limit).toArray();
      const total = await products.countDocuments({ category: req.params.category });

      res.json({ products: productList, total, page, limit });
    } catch (error) {
      console.error('Get products by category error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

router.get(
  '/categories',
  async (req, res) => {
    try {
      const { products } = await getCollections();
      const categoryCounts = await products.aggregate([
        { $group: { _id: '$category', count: { $sum: 1 }, availableCount: { $sum: { $cond: [{ $eq: ['$available', true] }, 1, 0] } } } },
        { $sort: { _id: 1 } }
      ]).toArray();

      res.json({
        categories: categoryCounts,
        availableCategories: Object.values(MUSIC_CATEGORIES)
      });
    } catch (error) {
      console.error('Get categories error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

router.get(
  '/:id',
  [
    param('id').isMongoId().withMessage('Invalid product ID')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { products } = await getCollections();
    try {
      const product = await products.findOne({ _id: new ObjectId(req.params.id) });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      console.error('Get product by ID error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

module.exports = router;