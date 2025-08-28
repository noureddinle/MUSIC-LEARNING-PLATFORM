export interface UserProfile {
  firstName: string;
  lastName: string;
  avatar?: string;
  bio?: string;
  dateOfBirth?: string; 
  country?: string;
  timezone?: string;
}

export interface MusicProfile {
  instruments: string[];
  skillLevel: string;
  musicalGenres: string[];
  learningGoals: string[];
  practiceTimeGoal?: number;
}

export interface Subscription {
  plan: string;
  status: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  currentPeriodStart?: string;
  currentPeriodEnd?: string;
  trialEnd?: string;
}

export interface Preferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
  practiceReminders: boolean;
  language: string;
}

export interface User {
  _id: string;  
  email: string;    
  password: string; 
  profile: UserProfile;
  musicProfile: MusicProfile;
  subscription: Subscription;
  preferences: Preferences;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface Instructor {
  userId: string; 
  name: string;
  bio?: string;
  avatar?: string;
  credentials?: string;
}

export interface Pricing {
  type: string;
  price: number;
  currency?: string;
  discountPrice?: number;
  subscriptionTiers?: string[];
  installments?: number; 
}

export interface Media {
  thumbnail?: string;
  trailer?: string;
  images?: string[];
  banner?: string;
  videos?: string[];
}

export interface CourseReference {
  courseId: string; 
  order: number;
  isRequired: boolean;
  unlockAfter: string[]; 
}

export interface LessonReference {
  lessonId: string;
  courseId: string;
  order: number;
  isBonus: boolean;
}

export interface CompletionCriteria {
  requiredCourses: number;
  requiredLessons: number;
  minimumScore: number;
  practiceHours: number;
}

export interface MusicProgram {
  _id: string; 
  title: string;
  description: string;
  type: string;
  genre: string;
  instrument: string;
  difficulty: string;
  duration: number;
  courses: CourseReference[];
  lessons: LessonReference[];
  pricing: Pricing;
  instructor: Instructor;
  media: Media;
  completionCriteria: CompletionCriteria;
  isActive: boolean;
  createdAt: string; 
}

export interface Prerequisite {
  courseId: string;
  completionRequired: number;
}

export interface LessonContent {
  videoUrl?: string;
  audioUrl?: string;
  sheetMusic?: string;
  tabs?: string;
  interactiveElements?: Record<string, any>;
  resources?: string[];
  transcript?: string;
}

export interface LessonPrerequisite {
  type: string;
  id: string; 
  completionRequired: number;
}

export interface QuizQuestion {
  question: string;
  type: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Quiz {
  questions: QuizQuestion[];
  passingScore: number;
  maxAttempts: number;
}

export interface Lesson {
  _id: string;
  courseId: string;
  title: string;
  description: string;
  order: number;
  duration: number;
  type: string;
  content: LessonContent;
  prerequisites: LessonPrerequisite[];
  programs: string[]; 
  isPreview: boolean;
  isFree: boolean;
  quiz: Quiz;
  createdAt: string;
  updatedAt: string;
}

export interface CourseLesson {
  lessonId: string;
  order: number;
  isRequired: boolean;
}

export interface Stats {
  enrollments: number;
  completions: number;
  avgRating: number;
  totalRatings: number;
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  instructor: Instructor;
  category: string;
  subcategory: string;
  difficulty: string;
  duration: number;
  lessonsCount: number;
  programs: string[];
  lessons: CourseLesson[];
  prerequisites: Prerequisite[];
  pricing: Pricing;
  media: Media;
  requirements: string[];
  learningOutcomes: string[];
  tags: string[];
  isPublished: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  stats: Stats;
}

export interface UserProgress {
  _id: string;
  userId: string; 
  contentType: string;
  contentId: string;
  progress: number;
  status: string;
  timeSpent: number;
  lastAccessed?: string;
  completedAt?: string;
  notes?: string;
  bookmarks: number[];
  createdAt: string;
  updatedAt: string;    
}

export interface PracticeLog {
  _id: string;
  userId: string; 
  date: string; 
  duration: number;
  instrument: string;
  practiceType: string;
  contentId?: string; 
  notes?: string;
  mood?: string;
  difficultyRating?: number;
  createdAt: string;
}

export interface Enrollment {
  _id: string;
  userId: string;
  contentType: string;
  contentId: string;
  paymentId: string;
  enrolledAt: string;
  expiresAt?: string;
  isActive: boolean;
}

export interface SubscriptionRecord {
  _id: string;
  userId: string;
  plan: string;
  status: string;
  stripeSubscriptionId: string;
  stripePriceId: string;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  trialStart?: string;
  trialEnd?: string;
  metadata: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface Payment {
  _id: string;
  userId: string;
  type: string;
  itemId: string; 
  amount: number;
  currency: string;
  status: string;
  stripePaymentIntentId?: string;
  stripeChargeId?: string;
  paymentMethod: string;
  refundAmount?: number;
  metadata: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface RelatedContent {
  type: string;
  id: string; 
}

export interface Achievement {
  _id: string;
  userId: string;
  type: string;
  title: string;
  description: string;
  badgeIcon: string;
  points: number;
  unlockedAt: string; 
  relatedContent?: RelatedContent;
}

export interface Inventory {
  stock: number;
  sku: string;
  trackInventory: boolean;
}

export interface Shipping {
  weight?: number;
  dimensions?: Record<string, any>;
  shippingClass?: string;
}

export interface Product {
  _id: string; 
  name: string;
  description: string;
  brand: string;
  category: string;
  colors: string[];
  subcategory: string;
  price: number;
  salePrice?: number;
  discount?: number;
  currency: string;
  inventory: Inventory;
  media: Media;
  specifications: Record<string, any>;
  shipping: Shipping;
  isActive: boolean;
  createdAt: string; 
}

export interface Review {
  _id: string; 
  userId: string;
  contentType: string;
  contentId: string; 
  rating: number;
  title: string;
  review: string;
  isVerified: boolean;
  helpfulVotes: number;
  createdAt: string; 
  updatedAt: string; 
}
