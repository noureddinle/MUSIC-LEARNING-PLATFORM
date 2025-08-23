const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/fornow'; 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const musicPrograms = [
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e70",
    "title": "Beginner Electric Guitar Pathway",
    "description": "A comprehensive pathway for beginners to master the basics of electric guitar playing, including chords, scales, and basic riffs.",
    "type": "Pathway",
    "genre": "Rock",
    "instrument": "Electric Guitar",
    "difficulty": "Beginner",
    "duration": 240,
    "courses": [
      {
        "courseId": "670b1c2a3f8e9a1b2c3d4e71",
        "order": 1,
        "isRequired": true,
        "unlockAfter": []
      },
      {
        "courseId": "670b1c2a3f8e9a1b2c3d4e72",
        "order": 2,
        "isRequired": true,
        "unlockAfter": ["670b1c2a3f8e9a1b2c3d4e71"]
      }
    ],
    "lessons": [
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e73",
        "courseId": "670b1c2a3f8e9a1b2c3d4e71",
        "order": 1,
        "isBonus": false
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e74",
        "courseId": "670b1c2a3f8e9a1b2c3d4e71",
        "order": 2,
        "isBonus": false
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e75",
        "courseId": "670b1c2a3f8e9a1b2c3d4e72",
        "order": 1,
        "isBonus": false
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e76",
        "courseId": "670b1c2a3f8e9a1b2c3d4e72",
        "order": 2,
        "isBonus": false
      }
    ],
    "pricing": {
      "type": "One-time",
      "price": 99.99,
      "installments": 3
    },
    "instructor": {
      "userId": "670b1c2a3f8e9a1b2c3d4e77",
      "name": "John Smith",
      "credentials": "Professional Guitarist with 10 years of teaching experience"
    },
    "media": {
      "thumbnail": "https://example.com/guitar-pathway-thumbnail.jpg",
      "banner": "https://example.com/guitar-pathway-banner.jpg"
    },
    "completionCriteria": {
      "requiredCourses": 2,
      "requiredLessons": 4,
      "minimumScore": 80,
      "practiceHours": 20
    },
    "isActive": true,
    "createdAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e78",
    "title": "Intermediate Piano Pathway",
    "description": "A pathway for intermediate pianists to enhance their skills with advanced techniques, music theory, and expressive playing.",
    "type": "Pathway",
    "genre": "Classical",
    "instrument": "Piano",
    "difficulty": "Intermediate",
    "duration": 300,
    "courses": [
      {
        "courseId": "670b1c2a3f8e9a1b2c3d4e79",
        "order": 1,
        "isRequired": true,
        "unlockAfter": []
      },
      {
        "courseId": "670b1c2a3f8e9a1b2c3d4e7a",
        "order": 2,
        "isRequired": true,
        "unlockAfter": ["670b1c2a3f8e9a1b2c3d4e79"]
      }
    ],
    "lessons": [
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e7b",
        "courseId": "670b1c2a3f8e9a1b2c3d4e79",
        "order": 1,
        "isBonus": false
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e7c",
        "courseId": "670b1c2a3f8e9a1b2c3d4e79",
        "order": 2,
        "isBonus": false
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e7d",
        "courseId": "670b1c2a3f8e9a1b2c3d4e7a",
        "order": 1,
        "isBonus": false
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e7e",
        "courseId": "670b1c2a3f8e9a1b2c3d4e7a",
        "order": 2,
        "isBonus": false
      }
    ],
    "pricing": {
      "type": "Subscription",
      "price": 29.99,
      "installments": 0
    },
    "instructor": {
      "userId": "670b1c2a3f8e9a1b2c3d4e7f",
      "name": "Emily Davis",
      "credentials": "Concert Pianist with a Master's in Music Education"
    },
    "media": {
      "thumbnail": "https://example.com/piano-pathway-thumbnail.jpg",
      "banner": "https://example.com/piano-pathway-banner.jpg"
    },
    "completionCriteria": {
      "requiredCourses": 2,
      "requiredLessons": 4,
      "minimumScore": 85,
      "practiceHours": 30
    },
    "isActive": true,
    "createdAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e80",
    "title": "Advanced Drum Pathway",
    "description": "A pathway for advanced drummers to master complex rhythms, improvisation, and advanced drumming techniques for various genres.",
    "type": "Pathway",
    "genre": "Jazz",
    "instrument": "Drums",
    "difficulty": "Advanced",
    "duration": 360,
    "courses": [
      {
        "courseId": "670b1c2a3f8e9a1b2c3d4e81",
        "order": 1,
        "isRequired": true,
        "unlockAfter": []
      },
      {
        "courseId": "670b1c2a3f8e9a1b2c3d4e82",
        "order": 2,
        "isRequired": true,
        "unlockAfter": ["670b1c2a3f8e9a1b2c3d4e81"]
      }
    ],
    "lessons": [
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e83",
        "courseId": "670b1c2a3f8e9a1b2c3d4e81",
        "order": 1,
        "isBonus": false
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e84",
        "courseId": "670b1c2a3f8e9a1b2c3d4e81",
        "order": 2,
        "isBonus": false
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e85",
        "courseId": "670b1c2a3f8e9a1b2c3d4e82",
        "order": 1,
        "isBonus": false
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e86",
        "courseId": "670b1c2a3f8e9a1b2c3d4e82",
        "order": 2,
        "isBonus": false
      }
    ],
    "pricing": {
      "type": "One-time",
      "price": 149.99,
      "installments": 4
    },
    "instructor": {
      "userId": "670b1c2a3f8e9a1b2c3d4e87",
      "name": "Mike Johnson",
      "credentials": "Professional Drummer with 15 years of touring experience"
    },
    "media": {
      "thumbnail": "https://example.com/drum-pathway-thumbnail.jpg",
      "banner": "https://example.com/drum-pathway-banner.jpg"
    },
    "completionCriteria": {
      "requiredCourses": 2,
      "requiredLessons": 4,
      "minimumScore": 90,
      "practiceHours": 40
    },
    "isActive": true,
    "createdAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e88",
    "title": "Beatmaking Fundamentals Pathway",
    "description": "A beginner-friendly pathway to learn beatmaking using hardware MIDI controllers and drum machines, focusing on hip-hop and electronic music.",
    "type": "Pathway",
    "genre": "Hip-Hop",
    "instrument": "MIDI Controller",
    "difficulty": "Beginner",
    "duration": 200,
    "courses": [
      {
        "courseId": "670b1c2a3f8e9a1b2c3d4e89",
        "order": 1,
        "isRequired": true,
        "unlockAfter": []
      },
      {
        "courseId": "670b1c2a3f8e9a1b2c3d4e8a",
        "order": 2,
        "isRequired": true,
        "unlockAfter": ["670b1c2a3f8e9a1b2c3d4e89"]
      }
    ],
    "lessons": [
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e8b",
        "courseId": "670b1c2a3f8e9a1b2c3d4e89",
        "order": 1,
        "isBonus": false
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e8c",
        "courseId": "670b1c2a3f8e9a1b2c3d4e89",
        "order": 2,
        "isBonus": false
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e8d",
        "courseId": "670b1c2a3f8e9a1b2c3d4e8a",
        "order": 1,
        "isBonus": false
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e8e",
        "courseId": "670b1c2a3f8e9a1b2c3d4e8a",
        "order": 2,
        "isBonus": false
      }
    ],
    "pricing": {
      "type": "One-time",
      "price": 89.99,
      "installments": 3
    },
    "instructor": {
      "userId": "670b1c2a3f8e9a1b2c3d4e8f",
      "name": "Alex Carter",
      "credentials": "Hip-Hop Producer with 8 years of beatmaking experience"
    },
    "media": {
      "thumbnail": "https://example.com/beatmaking-pathway-thumbnail.jpg",
      "banner": "https://example.com/beatmaking-pathway-banner.jpg"
    },
    "completionCriteria": {
      "requiredCourses": 2,
      "requiredLessons": 4,
      "minimumScore": 80,
      "practiceHours": 15
    },
    "isActive": true,
    "createdAt": new Date("2025-08-23T15:12:00Z")
  }
];

const courses = [
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e71",
    "title": "Guitar Fundamentals",
    "description": "Learn the basics of electric guitar, including tuning, basic chords, and strumming patterns.",
    "instructor": {
      "userId": "670b1c2a3f8e9a1b2c3d4e77",
      "name": "John Smith",
      "bio": "Professional guitarist with a passion for teaching beginners.",
      "avatar": "https://example.com/john-smith-avatar.jpg"
    },
    "category": "Instrument",
    "subcategory": "Guitar",
    "difficulty": "Beginner",
    "duration": 120,
    "lessonsCount": 2,
    "programs": ["670b1c2a3f8e9a1b2c3d4e70"],
    "lessons": [
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e73",
        "order": 1,
        "isRequired": true
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e74",
        "order": 2,
        "isRequired": true
      }
    ],
    "prerequisites": [],
    "pricing": {
      "type": "One-time",
      "price": 49.99,
      "currency": "USD",
      "discountPrice": 39.99,
      "subscriptionTiers": ["Basic", "Premium"]
    },
    "media": {
      "thumbnail": "https://example.com/guitar-fundamentals-thumbnail.jpg",
      "trailer": "https://example.com/guitar-fundamentals-trailer.mp4",
      "images": ["https://example.com/guitar-fundamentals-img1.jpg"]
    },
    "requirements": ["Electric Guitar", "Amplifier"],
    "learningOutcomes": ["Tune a guitar", "Play basic chords", "Understand strumming patterns"],
    "tags": ["guitar", "beginner", "rock"],
    "isPublished": true,
    "publishedAt": new Date("2025-08-23T15:12:00Z"),
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z"),
    "stats": {
      "enrollments": 100,
      "completions": 20,
      "avgRating": 4.5,
      "totalRatings": 50
    }
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e72",
    "title": "Guitar Chords and Scales",
    "description": "Build on basic guitar skills by learning major and minor scales and advanced chord progressions.",
    "instructor": {
      "userId": "670b1c2a3f8e9a1b2c3d4e77",
      "name": "John Smith",
      "bio": "Professional guitarist with a passion for teaching beginners.",
      "avatar": "https://example.com/john-smith-avatar.jpg"
    },
    "category": "Instrument",
    "subcategory": "Guitar",
    "difficulty": "Beginner",
    "duration": 120,
    "lessonsCount": 2,
    "programs": ["670b1c2a3f8e9a1b2c3d4e70"],
    "lessons": [
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e75",
        "order": 1,
        "isRequired": true
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e76",
        "order": 2,
        "isRequired": true
      }
    ],
    "prerequisites": [
      {
        "courseId": "670b1c2a3f8e9a1b2c3d4e71",
        "completionRequired": 100
      }
    ],
    "pricing": {
      "type": "One-time",
      "price": 49.99,
      "currency": "USD",
      "discountPrice": 39.99,
      "subscriptionTiers": ["Basic", "Premium"]
    },
    "media": {
      "thumbnail": "https://example.com/guitar-chords-scales-thumbnail.jpg",
      "trailer": "https://example.com/guitar-chords-scales-trailer.mp4",
      "images": ["https://example.com/guitar-chords-scales-img1.jpg"]
    },
    "requirements": ["Electric Guitar", "Amplifier"],
    "learningOutcomes": ["Play major and minor scales", "Understand chord progressions"],
    "tags": ["guitar", "beginner", "rock"],
    "isPublished": true,
    "publishedAt": new Date("2025-08-23T15:12:00Z"),
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z"),
    "stats": {
      "enrollments": 80,
      "completions": 15,
      "avgRating": 4.7,
      "totalRatings": 40
    }
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e79",
    "title": "Piano Technique Mastery",
    "description": "Develop advanced piano techniques, including finger independence and dynamic control.",
    "instructor": {
      "userId": "670b1c2a3f8e9a1b2c3d4e7f",
      "name": "Emily Davis",
      "bio": "Concert pianist with extensive teaching experience.",
      "avatar": "https://example.com/emily-davis-avatar.jpg"
    },
    "category": "Instrument",
    "subcategory": "Piano",
    "difficulty": "Intermediate",
    "duration": 150,
    "lessonsCount": 2,
    "programs": ["670b1c2a3f8e9a1b2c3d4e78"],
    "lessons": [
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e7b",
        "order": 1,
        "isRequired": true
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e7c",
        "order": 2,
        "isRequired": true
      }
    ],
    "prerequisites": [],
    "pricing": {
      "type": "Subscription",
      "price": 19.99,
      "currency": "USD",
      "discountPrice": 14.99,
      "subscriptionTiers": ["Premium"]
    },
    "media": {
      "thumbnail": "https://example.com/piano-technique-thumbnail.jpg",
      "trailer": "https://example.com/piano-technique-trailer.mp4",
      "images": ["https://example.com/piano-technique-img1.jpg"]
    },
    "requirements": ["Piano or Keyboard"],
    "learningOutcomes": ["Master finger independence", "Improve dynamic control"],
    "tags": ["piano", "intermediate", "classical"],
    "isPublished": true,
    "publishedAt": new Date("2025-08-23T15:12:00Z"),
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z"),
    "stats": {
      "enrollments": 120,
      "completions": 25,
      "avgRating": 4.8,
      "totalRatings": 60
    }
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e7a",
    "title": "Piano Music Theory",
    "description": "Explore intermediate music theory concepts tailored for pianists, including chord progressions and harmonization.",
    "instructor": {
      "userId": "670b1c2a3f8e9a1b2c3d4e7f",
      "name": "Emily Davis",
      "bio": "Concert pianist with extensive teaching experience.",
      "avatar": "https://example.com/emily-davis-avatar.jpg"
    },
    "category": "Music Theory",
    "subcategory": "Piano",
    "difficulty": "Intermediate",
    "duration": 150,
    "lessonsCount": 2,
    "programs": ["670b1c2a3f8e9a1b2c3d4e78"],
    "lessons": [
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e7d",
        "order": 1,
        "isRequired": true
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e7e",
        "order": 2,
        "isRequired": true
      }
    ],
    "prerequisites": [
      {
        "courseId": "670b1c2a3f8e9a1b2c3d4e79",
        "completionRequired": 100
      }
    ],
    "pricing": {
      "type": "Subscription",
      "price": 19.99,
      "currency": "USD",
      "discountPrice": 14.99,
      "subscriptionTiers": ["Premium"]
    },
    "media": {
      "thumbnail": "https://example.com/piano-theory-thumbnail.jpg",
      "trailer": "https://example.com/piano-theory-trailer.mp4",
      "images": ["https://example.com/piano-theory-img1.jpg"]
    },
    "requirements": ["Piano or Keyboard"],
    "learningOutcomes": ["Understand chord progressions", "Apply harmonization techniques"],
    "tags": ["piano", "music theory", "intermediate"],
    "isPublished": true,
    "publishedAt": new Date("2025-08-23T15:12:00Z"),
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z"),
    "stats": {
      "enrollments": 90,
      "completions": 10,
      "avgRating": 4.6,
      "totalRatings": 30
    }
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e81",
    "title": "Advanced Drumming Techniques",
    "description": "Master complex drumming techniques, including polyrhythms and advanced rudiments.",
    "instructor": {
      "userId": "670b1c2a3f8e9a1b2c3d4e87",
      "name": "Mike Johnson",
      "bio": "Professional drummer with extensive touring and recording experience.",
      "avatar": "https://example.com/mike-johnson-avatar.jpg"
    },
    "category": "Instrument",
    "subcategory": "Drums",
    "difficulty": "Advanced",
    "duration": 180,
    "lessonsCount": 2,
    "programs": ["670b1c2a3f8e9a1b2c3d4e80"],
    "lessons": [
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e83",
        "order": 1,
        "isRequired": true
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e84",
        "order": 2,
        "isRequired": true
      }
    ],
    "prerequisites": [],
    "pricing": {
      "type": "One-time",
      "price": 79.99,
      "currency": "USD",
      "discountPrice": 69.99,
      "subscriptionTiers": ["Basic", "Premium"]
    },
    "media": {
      "thumbnail": "https://example.com/drum-techniques-thumbnail.jpg",
      "trailer": "https://example.com/drum-techniques-trailer.mp4",
      "images": ["https://example.com/drum-techniques-img1.jpg"]
    },
    "requirements": ["Drum Kit"],
    "learningOutcomes": ["Master polyrhythms", "Apply advanced rudiments"],
    "tags": ["drums", "advanced", "jazz"],
    "isPublished": true,
    "publishedAt": new Date("2025-08-23T15:12:00Z"),
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z"),
    "stats": {
      "enrollments": 50,
      "completions": 5,
      "avgRating": 4.9,
      "totalRatings": 20
    }
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e82",
    "title": "Jazz Drumming Improvisation",
    "description": "Learn advanced jazz drumming improvisation techniques, focusing on swing and syncopation.",
    "instructor": {
      "userId": "670b1c2a3f8e9a1b2c3d4e87",
      "name": "Mike Johnson",
      "bio": "Professional drummer with extensive touring and recording experience.",
      "avatar": "https://example.com/mike-johnson-avatar.jpg"
    },
    "category": "Instrument",
    "subcategory": "Drums",
    "difficulty": "Advanced",
    "duration": 180,
    "lessonsCount": 2,
    "programs": ["670b1c2a3f8e9a1b2c3d4e80"],
    "lessons": [
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e85",
        "order": 1,
        "isRequired": true
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e86",
        "order": 2,
        "isRequired": true
      }
    ],
    "prerequisites": [
      {
        "courseId": "670b1c2a3f8e9a1b2c3d4e81",
        "completionRequired": 100
      }
    ],
    "pricing": {
      "type": "One-time",
      "price": 79.99,
      "currency": "USD",
      "discountPrice": 69.99,
      "subscriptionTiers": ["Basic", "Premium"]
    },
    "media": {
      "thumbnail": "https://example.com/jazz-drumming-thumbnail.jpg",
      "trailer": "https://example.com/jazz-drumming-trailer.mp4",
      "images": ["https://example.com/jazz-drumming-img1.jpg"]
    },
    "requirements": ["Drum Kit"],
    "learningOutcomes": ["Improvise in jazz styles", "Master swing rhythms"],
    "tags": ["drums", "advanced", "jazz"],
    "isPublished": true,
    "publishedAt": new Date("2025-08-23T15:12:00Z"),
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z"),
    "stats": {
      "enrollments": 40,
      "completions": 3,
      "avgRating": 4.8,
      "totalRatings": 15
    }
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e89",
    "title": "Intro to Beatmaking",
    "description": "Learn the essentials of beatmaking using hardware MIDI controllers and drum machines, including setup and basic beat creation.",
    "instructor": {
      "userId": "670b1c2a3f8e9a1b2c3d4e8f",
      "name": "Alex Carter",
      "bio": "Hip-Hop producer with extensive experience in beatmaking.",
      "avatar": "https://example.com/alex-carter-avatar.jpg"
    },
    "category": "Production",
    "subcategory": "Beatmaking",
    "difficulty": "Beginner",
    "duration": 100,
    "lessonsCount": 2,
    "programs": ["670b1c2a3f8e9a1b2c3d4e88"],
    "lessons": [
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e8b",
        "order": 1,
        "isRequired": true
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e8c",
        "order": 2,
        "isRequired": true
      }
    ],
    "prerequisites": [],
    "pricing": {
      "type": "One-time",
      "price": 44.99,
      "currency": "USD",
      "discountPrice": 34.99,
      "subscriptionTiers": ["Basic", "Premium"]
    },
    "media": {
      "thumbnail": "https://example.com/intro-beatmaking-thumbnail.jpg",
      "trailer": "https://example.com/intro-beatmaking-trailer.mp4",
      "images": ["https://example.com/intro-beatmaking-img1.jpg"]
    },
    "requirements": ["MIDI Controller", "Audio Interface"],
    "learningOutcomes": ["Set up a MIDI controller", "Create basic drum patterns"],
    "tags": ["beatmaking", "beginner", "hip-hop"],
    "isPublished": true,
    "publishedAt": new Date("2025-08-23T15:12:00Z"),
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z"),
    "stats": {
      "enrollments": 70,
      "completions": 10,
      "avgRating": 4.6,
      "totalRatings": 25
    }
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e8a",
    "title": "Advanced Beat Construction",
    "description": "Dive deeper into beatmaking with layering techniques, sample manipulation, and groove creation using hardware.",
    "instructor": {
      "userId": "670b1c2a3f8e9a1b2c3d4e8f",
      "name": "Alex Carter",
      "bio": "Hip-Hop producer with extensive experience in beatmaking.",
      "avatar": "https://example.com/alex-carter-avatar.jpg"
    },
    "category": "Production",
    "subcategory": "Beatmaking",
    "difficulty": "Beginner",
    "duration": 100,
    "lessonsCount": 2,
    "programs": ["670b1c2a3f8e9a1b2c3d4e88"],
    "lessons": [
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e8d",
        "order": 1,
        "isRequired": true
      },
      {
        "lessonId": "670b1c2a3f8e9a1b2c3d4e8e",
        "order": 2,
        "isRequired": true
      }
    ],
    "prerequisites": [
      {
        "courseId": "670b1c2a3f8e9a1b2c3d4e89",
        "completionRequired": 100
      }
    ],
    "pricing": {
      "type": "One-time",
      "price": 44.99,
      "currency": "USD",
      "discountPrice": 34.99,
      "subscriptionTiers": ["Basic", "Premium"]
    },
    "media": {
      "thumbnail": "https://example.com/advanced-beatmaking-thumbnail.jpg",
      "trailer": "https://example.com/advanced-beatmaking-trailer.mp4",
      "images": ["https://example.com/advanced-beatmaking-img1.jpg"]
    },
    "requirements": ["MIDI Controller", "Audio Interface"],
    "learningOutcomes": ["Layer drum patterns", "Apply sample manipulation techniques"],
    "tags": ["beatmaking", "beginner", "hip-hop"],
    "isPublished": true,
    "publishedAt": new Date("2025-08-23T15:12:00Z"),
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z"),
    "stats": {
      "enrollments": 50,
      "completions": 5,
      "avgRating": 4.7,
      "totalRatings": 20
    }
  }
];

const lessons = [
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e73",
    "courseId": "670b1c2a3f8e9a1b2c3d4e71",
    "title": "Tuning and Basic Chords",
    "description": "Learn to tune your electric guitar and play basic open chords.",
    "order": 1,
    "duration": 30,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/guitar-tuning-chords-video.mp4",
      "audioUrl": "",
      "sheetMusic": "",
      "tabs": "https://example.com/guitar-tuning-chords-tabs.pdf",
      "interactiveElements": {},
      "resources": ["https://example.com/guitar-tuning-guide.pdf"],
      "transcript": "This lesson covers tuning and basic chords..."
    },
    "prerequisites": [],
    "programs": ["670b1c2a3f8e9a1b2c3d4e70"],
    "isPreview": true,
    "isFree": true,
    "quiz": {
      "questions": [
        {
          "question": "What is the standard tuning for a guitar?",
          "type": "Multiple Choice",
          "options": ["EADGBE", "DADGBE", "EADF#BE", "DADF#AD"],
          "correctAnswer": "EADGBE",
          "explanation": "Standard tuning for a 6-string guitar is EADGBE."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e74",
    "courseId": "670b1c2a3f8e9a1b2c3d4e71",
    "title": "Strumming Patterns",
    "description": "Master basic strumming patterns to enhance your guitar playing.",
    "order": 2,
    "duration": 30,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/guitar-strumming-video.mp4",
      "audioUrl": "",
      "sheetMusic": "",
      "tabs": "",
      "interactiveElements": {},
      "resources": ["https://example.com/strumming-patterns.pdf"],
      "transcript": "This lesson introduces strumming patterns..."
    },
    "prerequisites": [
      {
        "type": "Lesson",
        "id": "670b1c2a3f8e9a1b2c3d4e73",
        "completionRequired": 100
      }
    ],
    "programs": ["670b1c2a3f8e9a1b2c3d4e70"],
    "isPreview": false,
    "isFree": false,
    "quiz": {
      "questions": [
        {
          "question": "What is a common strumming pattern?",
          "type": "Multiple Choice",
          "options": ["Down-Down-Up", "Up-Up-Down", "Down-Up-Down", "All of the above"],
          "correctAnswer": "All of the above",
          "explanation": "Various strumming patterns can be used depending on the song."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e75",
    "courseId": "670b1c2a3f8e9a1b2c3d4e72",
    "title": "Major and Minor Scales",
    "description": "Learn to play major and minor scales on the guitar.",
    "order": 1,
    "duration": 30,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/guitar-scales-video.mp4",
      "audioUrl": "",
      "sheetMusic": "",
      "tabs": "https://example.com/guitar-scales-tabs.pdf",
      "interactiveElements": {},
      "resources": ["https://example.com/scales-guide.pdf"],
      "transcript": "This lesson covers major and minor scales..."
    },
    "prerequisites": [],
    "programs": ["670b1c2a3f8e9a1b2c3d4e70"],
    "isPreview": true,
    "isFree": true,
    "quiz": {
      "questions": [
        {
          "question": "How many notes are in a major scale?",
          "type": "Multiple Choice",
          "options": ["5", "6", "7", "8"],
          "correctAnswer": "7",
          "explanation": "A major scale consists of 7 notes."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e76",
    "courseId": "670b1c2a3f8e9a1b2c3d4e72",
    "title": "Chord Progressions",
    "description": "Explore common chord progressions for rock music.",
    "order": 2,
    "duration": 30,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/guitar-progressions-video.mp4",
      "audioUrl": "",
      "sheetMusic": "",
      "tabs": "https://example.com/guitar-progressions-tabs.pdf",
      "interactiveElements": {},
      "resources": ["https://example.com/chord-progressions-guide.pdf"],
      "transcript": "This lesson covers chord progressions..."
    },
    "prerequisites": [
      {
        "type": "Lesson",
        "id": "670b1c2a3f8e9a1b2c3d4e75",
        "completionRequired": 100
      }
    ],
    "programs": ["670b1c2a3f8e9a1b2c3d4e70"],
    "isPreview": false,
    "isFree": false,
    "quiz": {
      "questions": [
        {
          "question": "What is a common chord progression in rock?",
          "type": "Multiple Choice",
          "options": ["I-IV-V", "I-VI-IV", "II-V-I", "I-III-VI"],
          "correctAnswer": "I-IV-V",
          "explanation": "I-IV-V is a widely used chord progression in rock music."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e7b",
    "courseId": "670b1c2a3f8e9a1b2c3d4e79",
    "title": "Finger Independence Exercises",
    "description": "Develop finger independence through targeted piano exercises.",
    "order": 1,
    "duration": 40,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/piano-finger-exercises-video.mp4",
      "audioUrl": "",
      "sheetMusic": "https://example.com/piano-finger-exercises-sheet.pdf",
      "tabs": "",
      "interactiveElements": {},
      "resources": ["https://example.com/finger-exercises-guide.pdf"],
      "transcript": "This lesson focuses on finger independence..."
    },
    "prerequisites": [],
    "programs": ["670b1c2a3f8e9a1b2c3d4e78"],
    "isPreview": true,
    "isFree": true,
    "quiz": {
      "questions": [
        {
          "question": "Why is finger independence important for pianists?",
          "type": "Multiple Choice",
          "options": ["Improves speed", "Enhances control", "Both A and B", "Neither"],
          "correctAnswer": "Both A and B",
          "explanation": "Finger independence improves both speed and control."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e7c",
    "courseId": "670b1c2a3f8e9a1b2c3d4e79",
    "title": "Dynamic Control",
    "description": "Learn to control dynamics for expressive piano playing.",
    "order": 2,
    "duration": 40,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/piano-dynamics-video.mp4",
      "audioUrl": "",
      "sheetMusic": "https://example.com/piano-dynamics-sheet.pdf",
      "tabs": "",
      "interactiveElements": {},
      "resources": ["https://example.com/dynamics-guide.pdf"],
      "transcript": "This lesson covers dynamic control..."
    },
    "prerequisites": [
      {
        "type": "Lesson",
        "id": "670b1c2a3f8e9a1b2c3d4e7b",
        "completionRequired": 100
      }
    ],
    "programs": ["670b1c2a3f8e9a1b2c3d4e78"],
    "isPreview": false,
    "isFree": false,
    "quiz": {
      "questions": [
        {
          "question": "What does 'forte' mean in music?",
          "type": "Multiple Choice",
          "options": ["Soft", "Loud", "Fast", "Slow"],
          "correctAnswer": "Loud",
          "explanation": "Forte indicates a loud dynamic in music."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e7d",
    "courseId": "670b1c2a3f8e9a1b2c3d4e7a",
    "title": "Chord Progressions for Piano",
    "description": "Learn common chord progressions used in classical piano music.",
    "order": 1,
    "duration": 40,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/piano-chord-progressions-video.mp4",
      "audioUrl": "",
      "sheetMusic": "https://example.com/piano-chord-progressions-sheet.pdf",
      "tabs": "",
      "interactiveElements": {},
      "resources": ["https://example.com/chord-progressions-guide.pdf"],
      "transcript": "This lesson covers chord progressions..."
    },
    "prerequisites": [],
    "programs": ["670b1c2a3f8e9a1b2c3d4e78"],
    "isPreview": true,
    "isFree": true,
    "quiz": {
      "questions": [
        {
          "question": "What is a common chord progression in classical music?",
          "type": "Multiple Choice",
          "options": ["I-IV-V-I", "I-VI-IV-V", "II-V-I", "All of the above"],
          "correctAnswer": "All of the above",
          "explanation": "These are all common chord progressions in classical music."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e7e",
    "courseId": "670b1c2a3f8e9a1b2c3d4e7a",
    "title": "Harmonization Techniques",
    "description": "Apply harmonization techniques to enhance piano compositions.",
    "order": 2,
    "duration": 40,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/piano-harmonization-video.mp4",
      "audioUrl": "",
      "sheetMusic": "https://example.com/piano-harmonization-sheet.pdf",
      "tabs": "",
      "interactiveElements": {},
      "resources": ["https://example.com/harmonization-guide.pdf"],
      "transcript": "This lesson covers harmonization techniques..."
    },
    "prerequisites": [
      {
        "type": "Lesson",
        "id": "670b1c2a3f8e9a1b2c3d4e7d",
        "completionRequired": 100
      }
    ],
    "programs": ["670b1c2a3f8e9a1b2c3d4e78"],
    "isPreview": false,
    "isFree": false,
    "quiz": {
      "questions": [
        {
          "question": "What is harmonization in music?",
          "type": "Multiple Choice",
          "options": ["Adding chords to a melody", "Playing scales", "Improvising solos", "Tuning an instrument"],
          "correctAnswer": "Adding chords to a melody",
          "explanation": "Harmonization involves adding chords to support a melody."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e83",
    "courseId": "670b1c2a3f8e9a1b2c3d4e81",
    "title": "Polyrhythms for Drummers",
    "description": "Master polyrhythms to enhance your drumming complexity.",
    "order": 1,
    "duration": 45,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/drum-polyrhythms-video.mp4",
      "audioUrl": "",
      "sheetMusic": "https://example.com/drum-polyrhythms-sheet.pdf",
      "tabs": "",
      "interactiveElements": {},
      "resources": ["https://example.com/polyrhythms-guide.pdf"],
      "transcript": "This lesson covers polyrhythms..."
    },
    "prerequisites": [],
    "programs": ["670b1c2a3f8e9a1b2c3d4e80"],
    "isPreview": true,
    "isFree": true,
    "quiz": {
      "questions": [
        {
          "question": "What is a polyrhythm?",
          "type": "Multiple Choice",
          "options": ["Two rhythms played simultaneously", "A single rhythm", "A fast tempo", "A slow tempo"],
          "correctAnswer": "Two rhythms played simultaneously",
          "explanation": "Polyrhythms involve playing two or more rhythms at the same time."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e84",
    "courseId": "670b1c2a3f8e9a1b2c3d4e81",
    "title": "Advanced Rudiments",
    "description": "Learn advanced drum rudiments for technical proficiency.",
    "order": 2,
    "duration": 45,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/drum-rudiments-video.mp4",
      "audioUrl": "",
      "sheetMusic": "https://example.com/drum-rudiments-sheet.pdf",
      "tabs": "",
      "interactiveElements": {},
      "resources": ["https://example.com/rudiments-guide.pdf"],
      "transcript": "This lesson covers advanced rudiments..."
    },
    "prerequisites": [
      {
        "type": "Lesson",
        "id": "670b1c2a3f8e9a1b2c3d4e83",
        "completionRequired": 100
      }
    ],
    "programs": ["670b1c2a3f8e9a1b2c3d4e80"],
    "isPreview": false,
    "isFree": false,
    "quiz": {
      "questions": [
        {
          "question": "What is a paradiddle?",
          "type": "Multiple Choice",
          "options": ["A single stroke", "A double stroke", "A rudiment pattern", "A cymbal technique"],
          "correctAnswer": "A rudiment pattern",
          "explanation": "A paradiddle is a rudiment pattern combining single and double strokes."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e85",
    "courseId": "670b1c2a3f8e9a1b2c3d4e82",
    "title": "Swing Rhythms in Jazz",
    "description": "Learn to play swing rhythms for jazz drumming.",
    "order": 1,
    "duration": 45,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/jazz-swing-video.mp4",
      "audioUrl": "",
      "sheetMusic": "https://example.com/jazz-swing-sheet.pdf",
      "tabs": "",
      "interactiveElements": {},
      "resources": ["https://example.com/swing-rhythms-guide.pdf"],
      "transcript": "This lesson covers swing rhythms..."
    },
    "prerequisites": [],
    "programs": ["670b1c2a3f8e9a1b2c3d4e80"],
    "isPreview": true,
    "isFree": true,
    "quiz": {
      "questions": [
        {
          "question": "What characterizes a swing rhythm?",
          "type": "Multiple Choice",
          "options": ["Even eighth notes", "Triplet-based feel", "Fast tempo", "Slow tempo"],
          "correctAnswer": "Triplet-based feel",
          "explanation": "Swing rhythms are characterized by a triplet-based feel."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e86",
    "courseId": "670b1c2a3f8e9a1b2c3d4e82",
    "title": "Jazz Improvisation",
    "description": "Develop skills for improvising in a jazz drumming context.",
    "order": 2,
    "duration": 45,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/jazz-improv-video.mp4",
      "audioUrl": "",
      "sheetMusic": "https://example.com/jazz-improv-sheet.pdf",
      "tabs": "",
      "interactiveElements": {},
      "resources": ["https://example.com/jazz-improv-guide.pdf"],
      "transcript": "This lesson covers jazz improvisation..."
    },
    "prerequisites": [
      {
        "type": "Lesson",
        "id": "670b1c2a3f8e9a1b2c3d4e85",
        "completionRequired": 100
      }
    ],
    "programs": ["670b1c2a3f8e9a1b2c3d4e80"],
    "isPreview": false,
    "isFree": false,
    "quiz": {
      "questions": [
        {
          "question": "What is a key aspect of jazz improvisation?",
          "type": "Multiple Choice",
          "options": ["Strict adherence to sheet music", "Spontaneous creation", "Slow tempos only", "Single rhythms"],
          "correctAnswer": "Spontaneous creation",
          "explanation": "Jazz improvisation involves spontaneous creation within a structure."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e8b",
    "courseId": "670b1c2a3f8e9a1b2c3d4e89",
    "title": "Setting Up Your Beatmaking Station",
    "description": "Learn to set up your MIDI controller and drum machine for beatmaking.",
    "order": 1,
    "duration": 30,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/beatmaking-setup-video.mp4",
      "audioUrl": "",
      "sheetMusic": "",
      "tabs": "",
      "interactiveElements": {},
      "resources": ["https://example.com/beatmaking-setup-guide.pdf"],
      "transcript": "This lesson covers setting up your beatmaking station..."
    },
    "prerequisites": [],
    "programs": ["670b1c2a3f8e9a1b2c3d4e88"],
    "isPreview": true,
    "isFree": true,
    "quiz": {
      "questions": [
        {
          "question": "What is a MIDI controller used for in beatmaking?",
          "type": "Multiple Choice",
          "options": ["Recording vocals", "Triggering sounds", "Mixing tracks", "Mastering audio"],
          "correctAnswer": "Triggering sounds",
          "explanation": "A MIDI controller is used to trigger sounds and control parameters in beatmaking."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e8c",
    "courseId": "670b1c2a3f8e9a1b2c3d4e89",
    "title": "Creating Basic Drum Patterns",
    "description": "Learn to create basic drum patterns using a MIDI controller.",
    "order": 2,
    "duration": 30,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/beatmaking-drum-patterns-video.mp4",
      "audioUrl": "",
      "sheetMusic": "",
      "tabs": "",
      "interactiveElements": {},
      "resources": ["https://example.com/drum-patterns-guide.pdf"],
      "transcript": "This lesson covers creating basic drum patterns..."
    },
    "prerequisites": [
      {
        "type": "Lesson",
        "id": "670b1c2a3f8e9a1b2c3d4e8b",
        "completionRequired": 100
      }
    ],
    "programs": ["670b1c2a3f8e9a1b2c3d4e88"],
    "isPreview": false,
    "isFree": false,
    "quiz": {
      "questions": [
        {
          "question": "What is a common tempo range for hip-hop beats?",
          "type": "Multiple Choice",
          "options": ["60-80 BPM", "80-100 BPM", "100-120 BPM", "120-140 BPM"],
          "correctAnswer": "80-100 BPM",
          "explanation": "Hip-hop beats commonly fall in the 80-100 BPM range."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e8d",
    "courseId": "670b1c2a3f8e9a1b2c3d4e8a",
    "title": "Layering Drum Patterns",
    "description": "Learn to layer multiple drum patterns to create complex beats.",
    "order": 1,
    "duration": 30,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/beatmaking-layering-video.mp4",
      "audioUrl": "",
      "sheetMusic": "",
      "tabs": "",
      "interactiveElements": {},
      "resources": ["https://example.com/layering-guide.pdf"],
      "transcript": "This lesson covers layering drum patterns..."
    },
    "prerequisites": [],
    "programs": ["670b1c2a3f8e9a1b2c3d4e88"],
    "isPreview": true,
    "isFree": true,
    "quiz": {
      "questions": [
        {
          "question": "What does layering add to a beat?",
          "type": "Multiple Choice",
          "options": ["Simplicity", "Complexity and texture", "Higher pitch", "Lower volume"],
          "correctAnswer": "Complexity and texture",
          "explanation": "Layering adds complexity and texture to a beat by combining multiple drum sounds."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  },
  {
    "_id": "670b1c2a3f8e9a1b2c3d4e8e",
    "courseId": "670b1c2a3f8e9a1b2c3d4e8a",
    "title": "Sample Manipulation Techniques",
    "description": "Explore techniques for manipulating samples to enhance your beats.",
    "order": 2,
    "duration": 30,
    "type": "Video",
    "content": {
      "videoUrl": "https://example.com/beatmaking-sample-manipulation-video.mp4",
      "audioUrl": "",
      "sheetMusic": "",
      "tabs": "",
      "interactiveElements": {},
      "resources": ["https://example.com/sample-manipulation-guide.pdf"],
      "transcript": "This lesson covers sample manipulation techniques..."
    },
    "prerequisites": [
      {
        "type": "Lesson",
        "id": "670b1c2a3f8e9a1b2c3d4e8d",
        "completionRequired": 100
      }
    ],
    "programs": ["670b1c2a3f8e9a1b2c3d4e88"],
    "isPreview": false,
    "isFree": false,
    "quiz": {
      "questions": [
        {
          "question": "What is a common sample manipulation technique?",
          "type": "Multiple Choice",
          "options": ["Chopping", "Tuning the guitar", "Playing chords", "Adjusting dynamics"],
          "correctAnswer": "Chopping",
          "explanation": "Chopping involves cutting a sample into smaller segments to create new patterns."
        }
      ],
      "passingScore": 80,
      "maxAttempts": 3
    },
    "createdAt": new Date("2025-08-23T15:12:00Z"),
    "updatedAt": new Date("2025-08-23T15:12:00Z")
  }
];

async function seedDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db();

    // Clear existing data
    await db.collection('musicPrograms').deleteMany({});
    await db.collection('courses').deleteMany({});
    await db.collection('lessons').deleteMany({});

    // Insert new data
    await db.collection('musicPrograms').insertMany(musicPrograms);
    console.log('Inserted musicPrograms');
    await db.collection('courses').insertMany(courses);
    console.log('Inserted courses');
    await db.collection('lessons').insertMany(lessons);
    console.log('Inserted lessons');

    console.log('Database seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
}

seedDatabase();