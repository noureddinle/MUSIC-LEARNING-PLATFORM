const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017';
const dbName = 'fornow';
const client = new MongoClient(uri);
let db = null;

async function connectDB() {
  if (db) return db;
  try {
    console.log('Attempting to connect to MongoDB...');
    await client.connect();
    db = client.db(dbName);
    console.log('Connected to MongoDB successfully!');

    // Create text indexes
    try {
      await db.collection('products').createIndex({ name: 'text', description: 'text', brand: 'text' });
      await db.collection('courses').createIndex({ title: 'text', description: 'text', instructor: 'text' });
      await db.collection('musicPrograms').createIndex({ title: 'text', description: 'text', genre: 'text' });

      // Performance indexes
      await db.collection('users').createIndex({ email: 1 }, { unique: true });
      await db.collection('users').createIndex({ stripeCustomerId: 1 });
      await db.collection('subscriptions').createIndex({ userId: 1, status: 1 });
      await db.collection('userProgress').createIndex({ userId: 1, contentType: 1, contentId: 1 });
      await db.collection('payments').createIndex({ userId: 1, status: 1, createdAt: -1 });
      await db.collection('enrollments').createIndex({ userId: 1, contentType: 1 });

      console.log('Indexes created successfully');
    } catch (indexError) {
      console.log('Index already exists or creation failed:', indexError.message);
    }

    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

async function closeDB() {
  try {
    if (db) {
      await client.close();
      db = null;
      console.log('Connection to MongoDB closed.');
    }
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
  }
}

module.exports = { connectDB, closeDB };