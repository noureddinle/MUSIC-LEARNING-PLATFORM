'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, User, Menu, Star, Play, Filter, Grid, List, Check, Bell, Heart } from "lucide-react"
import Chatbot from "@/components/chatbot"
import { Course } from "@/lib/types"
import { fetchCourses } from "@/lib/api"
import { useEffect, useState } from "react"

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const loadCourses = async () => {
      const fetchedCourses = await fetchCourses();
      setCourses(fetchedCourses.courses);
      setLoading(false);
    
    };

    loadCourses();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-2 py-1">
          <div className="flex items-center justify-between">
            {/* Left side - Logo and navigation */}
            <div className="flex items-center gap-2">
              {/* Logo */}
              <div className="text-lg font-bold">Logo</div>
              {/* Navigation */}
              
            </div>

            {/* Center - Search bar */}
            <div className="flex-1 max-w-lg mx-8 hidden md:block">
              <div className="relative">
                <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-3">
                  <Search className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="music production"
                    className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Navigation links and icons */}
            <div className="flex items-center gap-6">
              <nav className="hidden lg:flex items-center gap-6">
                <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                  Business
                </a>
                <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                  My learning
                </a>
              </nav>
              
              {/* Icons */}
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ShoppingCart className="w-5 h-5 text-gray-700" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bell className="w-5 h-5 text-gray-700" />
                </button>
                
                {/* Profile */}
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">J</span>
                </div>
                
                {/* Mobile menu button */}
                <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Menu className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-15">
          <h1 className="text-4xl font-bold mb-4">Courses to get you started</h1>
          <p className="text-lg text-muted-foreground">Explore courses from experienced, real-world experts.</p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-3 justify-center">
              {courses.map((course, index) => (
                <div onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} key={course.title}>
                  <Card key={course.title} className="overflow-hidden shadow-none group border border-muted p-2 cursor-pointer">
                    <div className="relative">
                      <img
                        src={course.media.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-48 object-cover border-0 rounded-xl group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <CardContent className="py-0 px-2 group-hover:scale-105 transition-transform duration-200">
                      <h3 className="font-bold text-xl ">{course.title}</h3>
                        <div className="font-small text-gray-700 mb-1 overflow-hidden">
                        {course.description}
                        </div>
                      <p className="text-muted-foreground text-sm mb-3">{course.instructor.name}</p>
                      <div className="flex flex-wrap items-center mb-4 gap-2">
                        <div className="border border-gray-100 rounded-md px-1 text-sm">
                          <Star className="inline-block w-4 h-4 mr-1 text-orange-400" />
                          <span className="text-muted-foreground font-small">
                            {course.stats.avgRating}
                          </span>
                        </div>
                        <div className="border border-gray-100 rounded-md px-1 text-sm font-small">
                          <span className="text-muted-foreground font-small">
                            {course.duration} <span className="text-muted-foreground">hours</span>
                          </span>
                        </div>
                        <div className="border border-gray-100 rounded-md px-1 text-sm font-small">
                          <span className="text-muted-foreground font-small">
                            {course.difficulty}
                          </span>
                        </div>
                        <div className="border border-gray-100 rounded-md px-1 text-sm font-small">
                          <span className="text-muted-foreground font-small">
                            {course.stats.completions} <span className="text-muted-foreground">completions</span>
                          </span>
                        </div>
                        <div className="border border-gray-100 rounded-md px-1 text-sm font-small">
                          <span className="text-muted-foreground font-small">
                            {course.stats.enrollments} <span className="text-muted-foreground">enrollments</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-start gap-2 mb-4">
                        <span className="text-2xl font-bold">{course.pricing.price}</span>
                        <span className="text-sm text-muted-foreground mt-2">{course.pricing.discountPercent ? `-${course.pricing.discountPercent}%` : ''}</span>
                      </div>
                    </CardContent>
                  </Card>
                  {hoveredIndex === index && (
                    <div className="absolute left-0 top-50 h-48 w-70 inset-0 bg-white border rounded-md border-gray-100 flex items-center justify-center">
                      <div className="p-4">
                        <h3 className="mb-2 font-bold">What you'll learn</h3>
                        <ul className="list-disc list-inside">
                          {course.learningOutcomes.map((objective, i) => (
                            <li key={i} className="text-sm text-gray-700 list-none">
                              <Check className="inline-block w-4 h-4 mr-1 text-green-700" />
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
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
