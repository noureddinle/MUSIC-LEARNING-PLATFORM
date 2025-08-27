Music Learning Platform

Overview
The Music Learning Platform is a web application designed to help users learn music across various categories through video-based courses and music tools. Users can purchase courses or tools directly or opt for a monthly subscription, with progress tracking and course enrollment features. The platform provides a seamless experience for discovering and acquiring music-related resources.
Features

Course Enrollment: Browse and enroll in video-based music courses across multiple categories (e.g., guitar, piano, music theory).
Subscription & Payments: Supports one-time purchases or monthly subscriptions via Stripe for secure payments.
Progress Tracking: Tracks user progress and course completions.
User Authentication: Secure login and registration system for personalized user experiences.
Music Tools Marketplace: Purchase music tools and instruments directly through the platform.
Responsive Design: Optimized for both desktop and mobile devices.

Technologies Used

Frontend: Next.js (React framework for server-side rendering and static site generation)
Backend: Node.js (with Express for API development)
Database: MongoDB (NoSQL database for storing user data, courses, and transactions)
Payment Processing: Stripe API for secure payments
Authentication: JSON Web Tokens (JWT) for user authentication

Installation
To run the Music Learning Platform locally, follow these steps:

Clone the repository:git clone https://github.com/your-username/music-learning-platform.git


Navigate to the project directory:cd music-learning-platform


Install dependencies:pnpm install


Set up environment variables:
Create a .env.local file in the root directory.

PORT=5000
MONGO_URI=mongodb://localhost:27017
JWT_SECRET=youcandoit
STRIPE_SECRET_KEY=sk_test_51Rl9qhFtougrNRzTki7KVUaDCV8dP750sQwNMZkuOcPZD92l9JYW2kJWq94yHaqGvMyqdqEeH4KouzpMv7wdXcYr004CPNXl1n
PUBLIC_STRIPE_KEY=pk_test_51Rl9qhFtougrNRzTm7pQIPFzrYhHGwV6Vvqx9ICFmfNjf8upvTqvvViWyUU1GtZEdOF1n3NfI1Iq2Tkxc4vJJlT500KfPGFKRJ
MONGODB_URI=mongodb://localhost:27017/fornow
FRONTEND_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000

Run the development server:pnpm run dev


Access the application:
Open your browser and navigate to http://localhost:3000.



Usage

Visit http://localhost:3000 to access the platform.
Sign up or log in to create a user account.
Browse available courses and tools, enroll in courses, or purchase items using Stripe.
Track your progress through the user dashboard.
Explore subscription options for unlimited access to courses.

Live Demo: [Link to deployed site, if applicable]Screenshots:
Project Structure
music-learning-platform/
├── components/        # Reusable React components
├── pages/             # Next.js pages (routes)
├── api/               # API routes for backend logic
├── models/            # MongoDB schemas (e.g., User, Course, Order)
├── public/            # Static assets (images, etc.)
├── styles/            # Tailwind CSS or other styles
├── .env.local         # Environment variables (not tracked)
├── package.json       # Project dependencies and scripts
└── README.md          # This file

License
This project is licensed under the MIT License.

Contact
For questions or feedback, reach out to nordnlexe@gmail.com or visit my portfolio.
