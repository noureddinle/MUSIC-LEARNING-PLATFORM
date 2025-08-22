const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { query, body, validationResult } = require('express-validator');
const { getCollections, ObjectId } = require('../utils/db');
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Authentication middleware
const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const { users } = await getCollections();
    const user = await users.findOne({ _id: new ObjectId(decoded.userId) });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = { userId: decoded.userId };
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Register a new user
router.post(
  '/signup',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('lastName').optional().trim(),
    body('role').optional().isIn(['student', 'instructor', 'admin']).withMessage('Invalid role')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, lastName, email, password, role = 'student' } = req.body;
    const { users } = await getCollections();

    try {
      const existingUser = await users.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already registered' });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = {
        name,
        lastName: lastName || null,
        email,
        password: hashedPassword,
        role,
        progress: [],
        createdAt: new Date()
      };

      const result = await users.insertOne(newUser);
      const user = { ...newUser, _id: result.insertedId };
      delete user.password;

      const authToken = jwt.sign({ userId: user._id.toString() }, JWT_SECRET, { expiresIn: '1h' });
      res.status(201).json({ authToken, user });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

// Login user
router.post(
  '/login',
  [
    body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const { users } = await getCollections();

    try {
      const user = await users.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }

      const userData = { ...user };
      delete userData.password;
      const authToken = jwt.sign({ userId: user._id.toString() }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ authToken, user: userData });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

// Get user profile
router.get(
  '/profile/:id',
  [query('id').isMongoId().withMessage('Invalid user ID')],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { users } = await getCollections();
      const userId = new ObjectId(req.params.id);
      const user = await users.findOne({ _id: userId });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const userData = { ...user };
      delete userData.password;
      res.json(userData);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

// Forgot password
router.post(
  '/forgot-password',
  [body('email').isEmail().normalizeEmail().withMessage('Invalid email address')],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;
    const { users } = await getCollections();

    try {
      const user = await users.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'Email not found' });
      }

      // Placeholder: Send reset email (implement email service like nodemailer)
      console.log(`Password reset requested for ${email}`);
      res.json({ message: 'Password reset instructions sent to your email' });
    } catch (error) {
      console.error('Error requesting password reset:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

// Export both the router and the authenticate middleware
module.exports = { router, authenticate };