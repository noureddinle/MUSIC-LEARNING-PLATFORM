const SCHEMAS = {
    users: {
      _id: 'ObjectId',
      email: 'string (unique)',
      password: 'string (hashed)',
      profile: {
        firstName: 'string',
        lastName: 'string',
        avatar: 'string (url)',
        bio: 'string',
        dateOfBirth: 'Date',
        country: 'string',
        timezone: 'string'
      },
      musicProfile: {
        instruments: ['string'],
        skillLevel: 'string',
        musicalGenres: ['string'],
        learningGoals: ['string'],
        practiceTimeGoal: 'number',
      },
      subscription: {
        plan: 'string',
        status: 'string',
        stripeCustomerId: 'string',
        stripeSubscriptionId: 'string',
        currentPeriodStart: 'Date',
        currentPeriodEnd: 'Date',
        trialEnd: 'Date'
      },
      preferences: {
        emailNotifications: 'boolean',
        pushNotifications: 'boolean',
        practiceReminders: 'boolean',
        language: 'string'
      },
      lastLogin: 'Date',
      createdAt: 'Date',
      updatedAt: 'Date',
      isActive: 'boolean'
    },
    courses: {
      _id: 'ObjectId',
      title: 'string',
      description: 'string',
      instructor: {
        userId: 'ObjectId',
        name: 'string',
        bio: 'string',
        avatar: 'string'
      },
      category: 'string',
      subcategory: 'string',
      difficulty: 'string',
      duration: 'number',
      lessonsCount: 'number',
      programs: ['ObjectId'],
      lessons: [{
        lessonId: 'ObjectId',
        order: 'number',
        isRequired: 'boolean'
      }],
      prerequisites: [{
        courseId: 'ObjectId',
        completionRequired: 'number'
      }],
      pricing: {
        type: 'string',
        price: 'number',
        currency: 'string',
        discountPrice: 'number',
        subscriptionTiers: ['string']
      },
      media: {
        thumbnail: 'string',
        trailer: 'string',
        images: ['string']
      },
      requirements: ['string'],
      learningOutcomes: ['string'],
      tags: ['string'],
      isPublished: 'boolean',
      publishedAt: 'Date',
      createdAt: 'Date',
      updatedAt: 'Date',
      stats: {
        enrollments: 'number',
        completions: 'number',
        avgRating: 'number',
        totalRatings: 'number'
      }
    },
    lessons: {
      _id: 'ObjectId',
      courseId: 'ObjectId',
      title: 'string',
      description: 'string',
      order: 'number',
      duration: 'number',
      type: 'string',
      content: {
        videoUrl: 'string',
        audioUrl: 'string',
        sheetMusic: 'string',
        tabs: 'string',
        interactiveElements: {},
        resources: ['string'],
        transcript: 'string'
      },
      prerequisites: [{
        type: 'string',
        id: 'ObjectId',
        completionRequired: 'number'
      }],
      programs: ['ObjectId'],
      isPreview: 'boolean',
      isFree: 'boolean',
      quiz: {
        questions: [{
          question: 'string',
          type: 'string',
          options: ['string'],
          correctAnswer: 'string',
          explanation: 'string'
        }],
        passingScore: 'number',
        maxAttempts: 'number'
      },
      createdAt: 'Date',
      updatedAt: 'Date'
    },
    musicPrograms: {
      _id: 'ObjectId',
      title: 'string',
      description: 'string',
      type: 'string',
      genre: 'string',
      instrument: 'string',
      difficulty: 'string',
      duration: 'number',
      courses: [{
        courseId: 'ObjectId',
        order: 'number',
        isRequired: 'boolean',
        unlockAfter: ['ObjectId']
      }],
      lessons: [{
        lessonId: 'ObjectId',
        courseId: 'ObjectId',
        order: 'number',
        isBonus: 'boolean'
      }],
      pricing: {
        type: 'string',
        price: 'number',
        installments: 'number'
      },
      instructor: {
        userId: 'ObjectId',
        name: 'string',
        credentials: 'string'
      },
      media: {
        thumbnail: 'string',
        banner: 'string'
      },
      completionCriteria: {
        requiredCourses: 'number',
        requiredLessons: 'number',
        minimumScore: 'number',
        practiceHours: 'number'
      },
      isActive: 'boolean',
      createdAt: 'Date'
    },
    userProgress: {
      _id: 'ObjectId',
      userId: 'ObjectId',
      contentType: 'string',
      contentId: 'ObjectId',
      progress: 'number',
      status: 'string',
      timeSpent: 'number',
      lastAccessed: 'Date',
      completedAt: 'Date',
      notes: 'string',
      bookmarks: ['number'],
      createdAt: 'Date',
      updatedAt: 'Date'
    },
    practiceLog: {
      _id: 'ObjectId',
      userId: 'ObjectId',
      date: 'Date',
      duration: 'number',
      instrument: 'string',
      practiceType: 'string',
      contentId: 'ObjectId',
      notes: 'string',
      mood: 'string',
      difficultyRating: 'number',
      createdAt: 'Date'
    },
    enrollments: {
      _id: 'ObjectId',
      userId: 'ObjectId',
      contentType: 'string',
      contentId: 'ObjectId',
      paymentId: 'ObjectId',
      enrolledAt: 'Date',
      expiresAt: 'Date',
      isActive: 'boolean'
    },
    subscriptions: {
      _id: 'ObjectId',
      userId: 'ObjectId',
      plan: 'string',
      status: 'string',
      stripeSubscriptionId: 'string',
      stripePriceId: 'string',
      currentPeriodStart: 'Date',
      currentPeriodEnd: 'Date',
      cancelAtPeriodEnd: 'boolean',
      trialStart: 'Date',
      trialEnd: 'Date',
      metadata: {},
      createdAt: 'Date',
      updatedAt: 'Date'
    },
    payments: {
      _id: 'ObjectId',
      userId: 'ObjectId',
      type: 'string',
      itemId: 'ObjectId',
      amount: 'number',
      currency: 'string',
      status: 'string',
      stripePaymentIntentId: 'string',
      stripeChargeId: 'string',
      paymentMethod: 'string',
      refundAmount: 'number',
      metadata: {},
      createdAt: 'Date',
      updatedAt: 'Date'
    },
    achievements: {
      _id: 'ObjectId',
      userId: 'ObjectId',
      type: 'string',
      title: 'string',
      description: 'string',
      badgeIcon: 'string',
      points: 'number',
      unlockedAt: 'Date',
      relatedContent: {
        type: 'string',
        id: 'ObjectId'
      }
    },
    products: {
      _id: 'ObjectId',
      name: 'string',
      description: 'string',
      brand: 'string',
      category: 'string',
      subcategory: 'string',
      price: 'number',
      salePrice: 'number',
      discount: 'number',
      currency: 'string',
      colors: ['string'],
      inventory: {
        stock: 'number',
        sku: 'string',
        trackInventory: 'boolean'
      },
      media: {
        thumbnail: 'string',
        images: ['string'],
        videos: ['string']
      },
      specifications: {},
      shipping: {
        weight: 'number',
        dimensions: {},
        shippingClass: 'string'
      },
      isActive: 'boolean',
      createdAt: 'Date'
    },
    reviews: {
      _id: 'ObjectId',
      userId: 'ObjectId',
      contentType: 'string',
      contentId: 'ObjectId',
      rating: 'number',
      title: 'string',
      review: 'string',
      isVerified: 'boolean',
      helpfulVotes: 'number',
      createdAt: 'Date',
      updatedAt: 'Date'
    }
  };
  
  module.exports = { SCHEMAS };