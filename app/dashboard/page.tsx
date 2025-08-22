import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ShoppingCart, User, Menu, Play, Clock, Award, BookOpen, TrendingUp, Star } from "lucide-react"
import Chatbot from "@/components/chatbot"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">M</span>
                </div>
                <span className="font-bold text-xl">MusicLearn</span>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
                  Courses
                </a>
                <a href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  Products
                </a>
                <a href="/dashboard" className="text-foreground font-medium">
                  Dashboard
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg px-3 py-2 w-80">
                <Search className="w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search your courses..."
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">Continue your musical journey and track your progress.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Enrolled Courses</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">68%</p>
                  <p className="text-sm text-muted-foreground">Average Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">24h</p>
                  <p className="text-sm text-muted-foreground">Hours Learned</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Certificates</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            {/* Continue Learning */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Continue Learning</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Music Theory Fundamentals",
                    instructor: "Dr. Robert Taylor",
                    progress: 75,
                    timeLeft: "2h 15m left",
                    image: "/music-theory-basics.png",
                    lastWatched: "Introduction to Scales",
                  },
                  {
                    title: "Bass Guitar Basics",
                    instructor: "Thomas Evans",
                    progress: 45,
                    timeLeft: "4h 30m left",
                    image: "/colorful-bass-guitars.png",
                    lastWatched: "Finger Positioning",
                  },
                  {
                    title: "Music Production Essentials",
                    instructor: "David Lee",
                    progress: 90,
                    timeLeft: "1h 45m left",
                    image: "/placeholder-iirya.png",
                    lastWatched: "Final Mix Review",
                  },
                ].map((course) => (
                  <Card key={course.title} className="overflow-hidden">
                    <div className="relative">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-40 object-cover"
                      />
                      <Button size="icon" className="absolute top-4 right-4 bg-black/50 hover:bg-black/70">
                        <Play className="w-4 h-4" />
                      </Button>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <Progress value={course.progress} className="mb-2" />
                        <p className="text-white text-sm">{course.progress}% complete</p>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-1">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>
                      <p className="text-sm text-muted-foreground mb-3">Last watched: {course.lastWatched}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{course.timeLeft}</span>
                        <Button size="sm">Continue</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Enrolled Courses */}
            <div>
              <h2 className="text-2xl font-bold mb-4">All Enrolled Courses</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Vocal Training for Beginners",
                    instructor: "Lisa Anderson",
                    progress: 100,
                    status: "Completed",
                    image: "/female-singer-blue.png",
                    rating: 5,
                  },
                  {
                    title: "DJ Fundamentals",
                    instructor: "Sarah Johnson",
                    progress: 25,
                    status: "In Progress",
                    image: "/placeholder-iirya.png",
                    rating: null,
                  },
                ].map((course) => (
                  <Card key={course.title}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-bold">{course.title}</h3>
                              <p className="text-sm text-muted-foreground">{course.instructor}</p>
                            </div>
                            <Badge variant={course.status === "Completed" ? "default" : "secondary"}>
                              {course.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 mb-2">
                            <div className="flex-1">
                              <Progress value={course.progress} className="mb-1" />
                              <p className="text-sm text-muted-foreground">{course.progress}% complete</p>
                            </div>
                            {course.rating && (
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                                <span className="text-sm">{course.rating}</span>
                              </div>
                            )}
                          </div>
                          <Button size="sm" variant={course.status === "Completed" ? "outline" : "default"}>
                            {course.status === "Completed" ? "Review" : "Continue"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Learning Progress</h2>

              {/* Weekly Progress Chart */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>This Week's Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { day: "Monday", hours: 2.5, progress: 80 },
                      { day: "Tuesday", hours: 1.5, progress: 50 },
                      { day: "Wednesday", hours: 3.0, progress: 100 },
                      { day: "Thursday", hours: 0, progress: 0 },
                      { day: "Friday", hours: 2.0, progress: 65 },
                      { day: "Saturday", hours: 4.0, progress: 100 },
                      { day: "Sunday", hours: 1.0, progress: 30 },
                    ].map((day) => (
                      <div key={day.day} className="flex items-center gap-4">
                        <div className="w-20 text-sm font-medium">{day.day}</div>
                        <div className="flex-1">
                          <Progress value={day.progress} className="mb-1" />
                        </div>
                        <div className="w-16 text-sm text-muted-foreground text-right">{day.hours}h</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Course Progress Details */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Music Theory Fundamentals",
                    totalLessons: 12,
                    completedLessons: 9,
                    progress: 75,
                    nextLesson: "Advanced Harmony",
                  },
                  {
                    title: "Bass Guitar Basics",
                    totalLessons: 10,
                    completedLessons: 4,
                    progress: 40,
                    nextLesson: "Slap Bass Technique",
                  },
                  {
                    title: "Music Production Essentials",
                    totalLessons: 15,
                    completedLessons: 14,
                    progress: 93,
                    nextLesson: "Final Project",
                  },
                  {
                    title: "Vocal Training for Beginners",
                    totalLessons: 8,
                    completedLessons: 8,
                    progress: 100,
                    nextLesson: "Course Completed!",
                  },
                ].map((course) => (
                  <Card key={course.title}>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">{course.title}</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>
                            {course.completedLessons} of {course.totalLessons} lessons
                          </span>
                          <span>Next: {course.nextLesson}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Certificates</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Music Theory Fundamentals",
                    instructor: "Dr. Robert Taylor",
                    completedDate: "March 15, 2024",
                    certificateId: "MT-2024-001",
                  },
                  {
                    title: "Vocal Training for Beginners",
                    instructor: "Lisa Anderson",
                    completedDate: "February 28, 2024",
                    certificateId: "VT-2024-002",
                  },
                  {
                    title: "Basic Music Production",
                    instructor: "David Lee",
                    completedDate: "January 20, 2024",
                    certificateId: "MP-2024-003",
                  },
                ].map((cert) => (
                  <Card key={cert.certificateId} className="overflow-hidden">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-6 h-6" />
                        <span className="font-bold">Certificate of Completion</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                      <p className="text-blue-100">{cert.instructor}</p>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Completed:</span>
                          <span>{cert.completedDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Certificate ID:</span>
                          <span className="font-mono">{cert.certificateId}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-transparent" variant="outline">
                        Download Certificate
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="wishlist" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Advanced Jazz Theory",
                    instructor: "Prof. Michael Johnson",
                    price: "$89.99",
                    rating: 4.9,
                    image: "/placeholder-iirya.png",
                  },
                  {
                    title: "Electronic Music Production",
                    instructor: "Alex Rodriguez",
                    price: "$149.99",
                    rating: 4.7,
                    image: "/placeholder-iirya.png",
                  },
                  {
                    title: "Classical Piano Masterclass",
                    instructor: "Elena Petrov",
                    price: "$199.99",
                    rating: 4.8,
                    image: "/placeholder-iirya.png",
                  },
                ].map((course) => (
                  <Card key={course.title} className="overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-40 object-cover"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-1">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${star <= Math.floor(course.rating) ? "text-orange-500 fill-orange-500" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">{course.rating}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-lg">{course.price}</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Remove
                          </Button>
                          <Button size="sm">Enroll Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Fixed Contact Button */}
      <Button className="fixed bottom-6 right-6 rounded-full px-6 py-3 shadow-lg z-50" size="lg">
        Contact
      </Button>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  )
}
