db = db.getSiblingDB('fornow');

db.createCollection('users');
db.createCollection('courses');
db.createCollection('lessons');
db.createCollection('products');
db.createCollection('musicPrograms');
db.createCollection('userProgress');
db.createCollection('enrollments');
db.createCollection('achievements');
db.createCollection('practiceLog');
db.createCollection('subscriptions');
db.createCollection('payments');
db.createCollection('cart');
db.createCollection('orders');
db.createCollection('ratings');
db.createCollection('reviews');
db.createCollection('notifications');
db.createCollection('supportTickets');
try {
    db.products.createIndex({ name: 'text', description: 'text', brand: 'text' });
    db.courses.createIndex({ title: 'text', description: 'text', instructor: 'text' });
    db.musicPrograms.createIndex({ title: 'text', description: 'text', genre: 'text' });
    db.users.createIndex({ email: 1 }, { unique: true });
    db.users.createIndex({ stripeCustomerId: 1 });
    db.subscriptions.createIndex({ userId: 1, status: 1 });
    db.userProgress.createIndex({ userId: 1, contentType: 1, contentId: 1 });
    db.payments.createIndex({ userId: 1, status: 1, createdAt: -1 });
    db.enrollments.createIndex({ userId: 1, contentType: 1 });

    print('Indexes created successfully');
} catch (e) {
    print('Index already exists or creation failed: ' + e);
}

print('Collections and indexes created successfully!');