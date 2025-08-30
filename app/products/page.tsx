'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, User, Menu, Filter, Grid, List } from "lucide-react"
import Chatbot from "@/components/chatbot"
import { Product } from "@/lib/types"
import { useState, useEffect } from "react"
import { fetchProducts } from "@/lib/api"
import { useRouter } from "next/navigation"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts()
        setProducts(fetchedProducts.products)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  // Handler for product card click
  const handleProductClick = (slug: string) => {
    router.push(`/products/${slug}`)
  }

  // Handlers for header navigation
  const handleCoursesClick = () => {
    router.push('/courses')
  }

  const handleAboutClick = () => {
    router.push('/about')
  }

  const handleContactClick = () => {
    router.push('/contact')
  }

  // Handlers for header buttons
  const handleCartClick = () => {
    router.push('/cart')
  }

  const handleAccountClick = () => {
    router.push('/account')
  }

  const handleMenuClick = () => {
    // Optional: Handle mobile menu toggle or redirect
    router.push('/menu')
  }

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
                <button
                  onClick={handleCoursesClick}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Courses
                </button>
                <button
                  className="text-foreground font-medium"
                  disabled // Highlight current page
                >
                  Products
                </button>
                <button
                  onClick={handleAboutClick}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </button>
                <button
                  onClick={handleContactClick}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </button>
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
              <Button variant="ghost" size="icon" onClick={handleCartClick}>
                <ShoppingCart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleAccountClick}>
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={handleMenuClick}>
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Page Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Available Products</h1>
          <p className="text-lg text-muted-foreground">Professional music equipment and instruments for every level.</p>
        </div>
      </section>
      {/* Products Grid */}
      <section className="">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <Card
                onClick={() => handleProductClick(product.slug)}
                key={product.name}
                className="h-110 w-70 group cursor-pointer overflow-hidden transition-transform transform hover:scale-105 border rounded-none"
              >
                <div className="relative">
                  <img
                    src={product.media.thumbnail || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain bg-muted"
                  />
                </div>
                <CardContent className="p-3 mt-20">
                  <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.colors?.length ?? 0} colors</p>
                  <span className="text-2xl font-bold z-10 opacity-0 group-hover:opacity-100 text-black transition-opacity duration-300">
                    ${product.price}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Fixed Contact Button */}
      <Button
        className="fixed bottom-6 right-6 rounded-full px-6 py-3 shadow-lg z-50"
        size="lg"
        onClick={handleContactClick}
      >
        Contact
      </Button>
      {/* Chatbot Component */}
      <Chatbot />
    </div>
  )
}