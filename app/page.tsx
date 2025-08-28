'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, User, Menu, Star, Play } from "lucide-react"
import Chatbot from "@/components/chatbot"
import CartSidebar from "@/components/cart-sidebar"
import { useState, useEffect } from "react"
import Image from "next/image"
import ableton from "@/public/ableton_logo_black.webp"
import pioneer from "@/public/pioneer-dj.webp"
import roland from "@/public/roland.webp"
import universal from "@/public/ua_logo_stacked_black.webp"
import waves from "@/public/waves-logo-black.webp"
import { Product, Course } from "@/lib/types" 
import { fetchCourses, fetchProducts } from "@/lib/api"
import { PathwayCards } from "@/components/program-card"



export default function HomePage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [fetchedCourses, fetchedProducts] = await Promise.all([
          fetchCourses(),
          fetchProducts()
        ]);
        setCourses(fetchedCourses.courses);
        setProducts(fetchedProducts.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-none bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">M</span>
                </div>
                <span className="font-bold text-xl">MusicLearn</span>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Courses
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
              <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg px-3 py-1 w-80">
                <Search className="w-4 h-4 border-none text-muted-foreground" />
                <Input
                  placeholder="What can we help you find?"
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <CartSidebar />
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

      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden pt-8">
        <div className="absolute inset-0 bg-cover bg-center">
          <video src="/pb_landingvid_03_q20.mp4" autoPlay loop muted className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">create.</h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-slate-200">STEP INSIDE MUSIC INDUSTRY</h2>
            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Learn from industry professionals and master your craft with our comprehensive courses and premium
              equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 text-lg">
                Find your course
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg bg-transparent"
              >
                Browse Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Vocals",
              "DJ",
              "Keyboards & Synthesizers",
              "Music Theory",
              "Basses",
              "Production",
              "Microphones & Audio Equipment",
            ].map((topic) => (
              <Card key={topic} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg">{topic}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <PathwayCards />
      </section>

      <section className="py-16 bg-muted/30 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Learn At Your Own Pace</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            We'll give you access to course content, videos, guides and even a knowledge quiz helping you to track your
            progress as you go through the content.
          </p>

          <div className="grid md:grid-cols-3 gap-8 px-10">
            {products.map((product) => (
              <Card key={product.name} className="overflow-hidden bg-white border-rounded-xs cursor-pointer transition-all duration-300 hover:shadow-lg max-w-sm relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs font-medium text-gray-600">
                    Web Exclusive
                  </span>
                </div>
                <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden bg-white">
                  <img
                    src={product.media.thumbnail || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 p-8"
                  />
                </div>
                <CardContent className="bg-white pt-4">
                  <h3 className="font-normal text-base mb-1 text-gray-600 leading-tight text-left">
                    {product.name}
                  </h3>
                  <div className="flex">
                    <span className="text-muted-foreground">
                      {product.colors} colors
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100 pt-8">
            <div className="text-center">
              <h3 className="font-bold text-4xl mt-25 mb-15">PARTNERS</h3>
              <div className="flex flex-wrap justify-center items-center gap-25 opacity-60 mb-25">
                <span className="text-sm font-medium"><Image src={ableton} alt="Ableton" width={100} height={100} /></span>
                <span className="text-sm font-medium"><Image src={pioneer} alt="Pioneer DJ" width={100} height={100} /></span>
                <span className="text-sm font-medium"><Image src={roland} alt="Roland" width={100} height={100} /></span>
                <span className="text-sm font-medium"><Image src={universal} alt="Universal Audio" width={100} height={100} /></span>
                <span className="text-sm font-medium"><Image src={waves} alt="Waves" width={100} height={100} /></span>
              </div>
            </div>
      </div>  

      {/* Footer */}
      <footer className="bg-background border-t border-gray-100 py-16">
        <div className="container mx-auto px-10">
          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div>
              <h3 className="font-bold text-lg mb-4">Don't miss out!</h3>
              <p className="text-muted-foreground mb-6">
                Be the first to know about new products, featured content, exclusive offers and giveaways.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email address" className="flex-1" />
                <Button>Sign up</Button>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Global</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Open Days & Tours
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers in the Music Industry
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Expert Teaching Staff
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Alumni
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Newsroom
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Account</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Order Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Returns & Exchanges
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </footer>

      <Button className="fixed bottom-6 right-6 rounded-full px-6 py-3 shadow-lg z-50" size="lg">
        Contact
      </Button>

      <Chatbot />
    </div>
  )
}
