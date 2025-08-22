"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ShoppingCart, User, Star, Clock, Users, Award, ChevronDown, Heart, Music } from "lucide-react"
import { Chatbot } from "@/components/chatbot"
import { VideoPlayer } from "@/components/video-player"
import { AuthModal } from "@/components/auth-modal"
import { useState } from "react"

export default function CourseDetailPage() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [courseProgress, setCourseProgress] = useState(25) // Mock progress

  const handleProgressUpdate = (progress: number) => {
    setCourseProgress(progress)
    // In a real app, this would sync with backend
    console.log("[v0] Course progress updated:", progress)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Music className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold text-white">MusicLearn</span>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="/courses" className="text-white font-medium">
                  Courses
                </a>
                <a href="/products" className="text-slate-300 hover:text-white transition-colors">
                  Products
                </a>
                <a href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2 w-80">
                <Search className="w-4 h-4 text-slate-400" />
                <Input
                  placeholder="What can we help you find?"
                  className="border-0 bg-transparent text-white placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
                <ShoppingCart className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-white"
                onClick={() => setShowAuthModal(true)}
              >
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-slate-800 text-slate-300">Music Theory</Badge>
                <Badge className="bg-orange-600 text-white hover:bg-orange-700">Bestseller</Badge>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">Music Theory Fundamentals</h1>
              <p className="text-lg text-slate-300 mb-6">
                Master the essential building blocks of music theory. Learn to read notation, understand scales, keys,
                and harmony concepts that will enhance your musical understanding and performance.
              </p>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-orange-500 font-bold text-lg">4.8</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-orange-500 fill-orange-500" />
                    ))}
                  </div>
                  <span className="text-slate-400">(1,247 ratings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-slate-400" />
                  <span className="text-slate-300">3,456 students</span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>9 total hours</span>
                </div>
                <span>•</span>
                <span>Beginner level</span>
                <span>•</span>
                <span>Subtitles available</span>
                <span>•</span>
                <span>Created by Dr. Robert Taylor</span>
              </div>
            </div>

            <div className="mb-8">
              <VideoPlayer
                src="/placeholder-video.mp4"
                title="Music Theory Fundamentals - Introduction"
                onProgressUpdate={handleProgressUpdate}
                initialProgress={courseProgress}
              />
            </div>

            {/* Course Content Tabs */}
            <Tabs defaultValue="content" className="mb-8">
              <TabsList className="grid w-full grid-cols-4 bg-slate-800">
                <TabsTrigger
                  value="content"
                  className="text-slate-300 data-[state=active]:text-white data-[state=active]:bg-slate-700"
                >
                  Course content
                </TabsTrigger>
                <TabsTrigger
                  value="description"
                  className="text-slate-300 data-[state=active]:text-white data-[state=active]:bg-slate-700"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="instructor"
                  className="text-slate-300 data-[state=active]:text-white data-[state=active]:bg-slate-700"
                >
                  Instructor
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="text-slate-300 data-[state=active]:text-white data-[state=active]:bg-slate-700"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="mt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Course content</h3>
                    <span className="text-slate-400">4 sections • 12 lectures • 8h 0m total length</span>
                  </div>

                  {[
                    {
                      title: "Core Concepts",
                      lectures: 3,
                      duration: "2h 0m",
                      progress: 100,
                    },
                    {
                      title: "Practical Examples",
                      lectures: 3,
                      duration: "2h 0m",
                      progress: 67,
                    },
                    {
                      title: "Hands-on Projects",
                      lectures: 3,
                      duration: "2h 0m",
                      progress: 0,
                    },
                    {
                      title: "Real-world Applications",
                      lectures: 3,
                      duration: "2h 0m",
                      progress: 0,
                    },
                  ].map((section) => (
                    <Card key={section.title} className="bg-slate-900 border-slate-800">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                            <div>
                              <h4 className="font-semibold text-white">{section.title}</h4>
                              <p className="text-sm text-slate-400">
                                {section.lectures} lectures • {section.duration}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-orange-500 transition-all duration-300"
                                style={{ width: `${section.progress}%` }}
                              />
                            </div>
                            <span className="text-sm text-slate-400">{section.progress}%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="description" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Description</h3>
                  <p className="text-slate-300">
                    This comprehensive course covers all the fundamental aspects of music theory that every musician
                    should know. Whether you're a complete beginner or looking to solidify your understanding, this
                    course will provide you with the essential knowledge to enhance your musical journey.
                  </p>

                  <h4 className="text-lg font-semibold text-white mt-6">Requirements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-slate-300">Basic knowledge of Technology</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-slate-300">No prior music theory knowledge required</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="instructor" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Instructor</h3>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">DR</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Dr. Robert Taylor</h4>
                      <p className="text-slate-400">Music Theory Professor & Composer</p>
                      <p className="mt-2 text-slate-300">
                        Dr. Taylor has over 20 years of experience teaching music theory at prestigious institutions. He
                        has composed numerous pieces and has helped thousands of students master the fundamentals of
                        music.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Student Reviews</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((review) => (
                      <Card key={review} className="bg-slate-900 border-slate-800">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                              <span className="font-semibold text-white">JS</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-semibold text-white">John Smith</span>
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-4 h-4 text-orange-500 fill-orange-500" />
                                  ))}
                                </div>
                              </div>
                              <p className="text-slate-300">
                                Excellent course! Dr. Taylor explains complex concepts in a very understandable way.
                                Highly recommended for anyone starting their music theory journey.
                              </p>
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Your Progress</span>
                    <span className="text-orange-500 font-bold">{Math.round(courseProgress)}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-500 transition-all duration-500"
                      style={{ width: `${courseProgress}%` }}
                    />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="w-full h-48 bg-slate-800 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-slate-400">Course Preview</span>
                  </div>
                  <Button className="w-full mb-2 bg-orange-600 hover:bg-orange-700">Preview this course</Button>
                </div>

                <Tabs defaultValue="personal" className="mb-6">
                  <TabsList className="grid w-full grid-cols-2 bg-slate-800">
                    <TabsTrigger
                      value="personal"
                      className="text-slate-300 data-[state=active]:text-white data-[state=active]:bg-slate-700"
                    >
                      Personal
                    </TabsTrigger>
                    <TabsTrigger
                      value="teams"
                      className="text-slate-300 data-[state=active]:text-white data-[state=active]:bg-slate-700"
                    >
                      Teams
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="personal" className="mt-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Personal Plan</h3>
                      <p className="text-slate-400 mb-4">Access this course and thousands more</p>

                      <Button className="w-full mb-3 bg-orange-600 hover:bg-orange-700" size="lg">
                        Start subscription
                      </Button>
                      <p className="text-sm text-slate-400 mb-4">7-day free trial</p>
                      <p className="text-center text-slate-400">or</p>

                      <div className="text-3xl font-bold text-white my-4">$49.99</div>

                      <Button
                        variant="outline"
                        className="w-full mb-3 border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                        size="lg"
                      >
                        Add to cart
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full mb-4 border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                        size="lg"
                      >
                        Buy now
                      </Button>

                      <p className="text-sm text-slate-400">30-Day Money-Back Guarantee</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="teams" className="mt-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Teams Plan</h3>
                      <p className="text-slate-400 mb-4">Perfect for organizations</p>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700" size="lg">
                        Contact Sales
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300">9 hours on-demand video</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300">Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300">Full lifetime access</span>
                  </div>
                </div>

                <Button variant="ghost" className="w-full mt-4 text-slate-300 hover:text-white hover:bg-slate-800">
                  <Heart className="w-4 h-4 mr-2" />
                  Add to wishlist
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Students also bought */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Students also bought</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Music Production Essentials",
                instructor: "David Lee",
                rating: 4.9,
                price: "$129.99",
                image: "/placeholder-iirya.png",
              },
              {
                title: "Vocal Training for Beginners",
                instructor: "Lisa Anderson",
                rating: 4.7,
                price: "$39.99",
                image: "/female-singer-blue.png",
              },
              {
                title: "Bass Guitar Basics",
                instructor: "Thomas Evans",
                rating: 4.6,
                price: "$54.99",
                image: "/colorful-bass-guitars.png",
              },
            ].map((course) => (
              <Card key={course.title} className="overflow-hidden">
                <div className="flex gap-4 p-4">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-orange-500 font-bold text-sm">{course.rating}</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 text-orange-500 fill-orange-500" />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">{course.price}</span>
                      <Button size="sm" variant="ghost">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed Contact Button */}
      <Button className="fixed bottom-6 right-6 rounded-full px-6 py-3 shadow-lg z-50" size="lg">
        Contact
      </Button>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  )
}
