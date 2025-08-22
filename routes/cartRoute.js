const express = require('express');
const { body, param, validationResult } = require('express-validator');
const { getCollections, ObjectId } = require('../utils/db');
const { authenticate } = require('./authRoutes');

const router = express.Router();

router.get('/', authenticate, async (req, res) => {
  const { cart, courses, products } = await getCollections();
  try {
    const userId = new ObjectId(req.user.userId);
    const userCart = await cart.aggregate([
      { $match: { userId } },
      {
        $lookup: {
          from: 'courses',
          localField: 'courseId',
          foreignField: '_id',
          as: 'course'
        }
      },
      {
        $lookup: {
          from: 'products',
          localField: 'productId',
          foreignField: '_id',
          as: 'product'
        }
      },
      {
        $addFields: {
          item: {
            $cond: {
              if: { $gt: [{ $size: '$course' }, 0] },
              then: { $arrayElemAt: ['$course', 0] },
              else: { $arrayElemAt: ['$product', 0] }
            }
          },
          itemType: {
            $cond: {
              if: { $gt: [{ $size: '$course' }, 0] },
              then: 'course',
              else: 'product'
            }
          }
        }
      },
      { $project: { course: 0, product: 0 } }
    ]).toArray();

    const total = userCart.reduce((sum, item) => sum + (item.item?.price || 0), 0);
    res.json({ cart: userCart, total, itemCount: userCart.length });
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post(
  '/',
  authenticate,
  [
    body('courseId').optional().isMongoId().withMessage('Invalid course ID'),
    body('productId').optional().isMongoId().withMessage('Invalid product ID')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { cart, courses, products } = await getCollections();
    try {
      const userId = new ObjectId(req.user.userId);
      const { courseId, productId } = req.body;

      if (!courseId && !productId) return res.status(400).json({ error: 'Either courseId or productId is required' });
      if (courseId && productId) return res.status(400).json({ error: 'Cannot add both course and product in single request' });

      let itemId, collection, itemType;
      if (courseId) {
        itemId = new ObjectId(courseId);
        collection = courses;
        itemType = 'course';
      } else {
        itemId = new ObjectId(productId);
        collection = products;
        itemType = 'product';
      }

      const item = await collection.findOne({ _id: itemId });
      if (!item) return res.status(404).json({ error: `${itemType} not found` });

      const existingCartItem = await cart.findOne({
        userId,
        ...(courseId ? { courseId: itemId } : { productId: itemId })
      });

      if (existingCartItem) return res.status(400).json({ error: `${itemType} already in cart` });

      const cartItem = {
        userId,
        ...(courseId ? { courseId: itemId } : { productId: itemId }),
        addedAt: new Date()
      };

      await cart.insertOne(cartItem);
      res.status(201).json({ message: `${itemType} added to cart successfully` });
    } catch (error) {
      console.error('Add to cart error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

router.delete('/:id', authenticate, [param('id').isMongoId().withMessage('Invalid cart item ID')], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { cart } = await getCollections();
  try {
    const userId = new ObjectId(req.user.userId);
    const cartItemId = new ObjectId(req.params.id);

    const result = await cart.deleteOne({ _id: cartItemId, userId });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Cart item not found' });

    res.json({ message: 'Item removed from cart successfully' });
  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/', authenticate, async (req, res) => {
  const { cart } = await getCollections();
  try {
    const userId = new ObjectId(req.user.userId);
    await cart.deleteMany({ userId });
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Clear cart error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;