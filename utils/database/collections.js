const { connectDB } = require('./connection');

async function getCollections() {
  const db = await connectDB();
  return {
    users: db.collection('users'),
    courses: db.collection('courses'),
    lessons: db.collection('lessons'),
    products: db.collection('products'),
    musicPrograms: db.collection('musicPrograms'),
    userProgress: db.collection('userProgress'),
    enrollments: db.collection('enrollments'),
    achievements: db.collection('achievements'),
    practiceLog: db.collection('practiceLog'),
    subscriptions: db.collection('subscriptions'),
    payments: db.collection('payments'),
    cart: db.collection('cart'),
    orders: db.collection('orders'),
    ratings: db.collection('ratings'),
    reviews: db.collection('reviews'),
    notifications: db.collection('notifications'),
    supportTickets: db.collection('supportTickets')
  };
}

module.exports = { getCollections };