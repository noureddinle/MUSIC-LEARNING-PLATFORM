import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, User, Menu, Star, Play, Filter, Grid, List } from "lucide-react"
import Chatbot from "@/components/chatbot"

export default function CoursesPage() {
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
                <a href="/courses" className="text-foreground font-medium">
                  Courses
                </a>
                <a href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  Products
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
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
                  placeholder="What can we help you find?"
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

      {/* Page Header */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Courses to get you started</h1>
          <p className="text-lg text-muted-foreground">Explore courses from experienced, real-world experts.</p>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4 items-center">
              <Button variant="default">Most popular</Button>
              <Button variant="ghost">Trending</Button>
              <Button variant="ghost">Newest</Button>
              <Button variant="ghost">Price: Low to High</Button>
            </div>

            <div className="flex gap-2 items-center">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <div className="flex border border-border rounded-lg">
                <Button variant="ghost" size="sm" className="rounded-r-none">
                  <Grid className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-l-none">
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Music Theory Fundamentals",
                instructor: "Dr. Robert Taylor",
                duration: "9 total hours",
                level: "Beginner",
                rating: 4.8,
                reviews: 1247,
                price: "$69.99",
                image: "/music-theory-basics.png",
                topics: ["Read Musical Notation", "Understand Scales and Keys", "Basic Harmony Concepts"],
                bestseller: true,
              },
              {
                title: "Bass Guitar Basics",
                instructor: "Thomas Evans",
                duration: "7 total hours",
                level: "Beginner",
                rating: 4.6,
                reviews: 892,
                price: "$54.99",
                image: "/colorful-bass-guitars.png",
                topics: ["Introduction to Bass Techniques", "Scales and Arpeggios", "Groove and Rhythm Basics"],
              },
              {
                title: "Music Production Essentials",
                instructor: "David Lee",
                duration: "15.5 total hours",
                level: "Intermediate",
                rating: 4.9,
                reviews: 2156,
                price: "$129.99",
                image: "/placeholder-iirya.png",
                topics: ["DAW Setup and Navigation", "Mixing and Mastering Basics", "Sound Design Techniques"],
                bestseller: true,
              },
              {
                title: "Vocal Training for Beginners",
                instructor: "Lisa Anderson",
                duration: "6 total hours",
                level: "Beginner",
                rating: 4.7,
                reviews: 1543,
                price: "$39.99",
                image: "/female-singer-blue.png",
                topics: ["Breathing Techniques", "Vocal Warm-ups", "Pitch Control"],
              },
              {
                title: "DJ Fundamentals",
                instructor: "Sarah Johnson",
                duration: "8 total hours",
                level: "Beginner",
                rating: 4.5,
                reviews: 678,
                price: "$79.99",
                image: "/placeholder-iirya.png",
                topics: ["Beatmatching", "Mixing Techniques", "Equipment Setup"],
              },
              {
                title: "Synthesizer Sound Design",
                instructor: "Oliver Brooks",
                duration: "12 total hours",
                level: "Advanced",
                rating: 4.8,
                reviews: 934,
                price: "$149.99",
                image: "/placeholder-iirya.png",
                topics: ["Oscillator Programming", "Filter Design", "Modulation Techniques"],
              },
            ].map((course) => (
              <Card key={course.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <Button size="icon" className="absolute top-4 right-4 bg-black/50 hover:bg-black/70">
                    <Play className="w-4 h-4" />
                  </Button>
                  {course.bestseller && (
                    <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-600">Bestseller</Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                  <p className="text-muted-foreground mb-3">{course.instructor}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span>{course.duration}</span>
                    <span>•</span>
                    <span>{course.level}</span>
                    <span>•</span>
                    <span>Subtitles</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-orange-500 font-bold">{course.rating}</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= Math.floor(course.rating) ? "text-orange-500 fill-orange-500" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground">({course.reviews})</span>
                  </div>
                  <ul className="space-y-1 mb-6">
                    {course.topics.map((topic) => (
                      <li key={topic} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{course.price}</span>
                    <Button>Add to cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed Contact Button */}
      <Button className="fixed bottom-6 right-6 rounded-full px-6 py-3 shadow-lg z-50" size="lg">
        Contact
      </Button>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  )
}
