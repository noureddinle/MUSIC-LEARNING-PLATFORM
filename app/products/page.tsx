import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, User, Menu, Filter, Grid, List } from "lucide-react"
import Chatbot from "@/components/chatbot"

export default function ProductsPage() {
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
                <a href="/products" className="text-foreground font-medium">
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
          <h1 className="text-4xl font-bold mb-4">Available Products</h1>
          <p className="text-lg text-muted-foreground">Professional music equipment and instruments for every level.</p>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4 items-center">
              <Button variant="default">Featured</Button>
              <Button variant="ghost">Price: Low to High</Button>
              <Button variant="ghost">Price: High to Low</Button>
              <Button variant="ghost">Newest</Button>
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

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "AKAI MPK MINI",
                colors: "4 Colors",
                price: "1749.99",
                image: "/placeholder-iirya.png",
                sale: true,
                colorOptions: ["#f3f4f6", "#9ca3af", "#374151", "#1f2937"],
              },
              {
                name: "AKAI APC 64",
                colors: "2 Colors",
                price: "1749.99",
                image: "/placeholder-iirya.png",
                sale: true,
                colorOptions: ["#000000", "#374151"],
              },
              {
                name: "Roland TR-808",
                colors: "1 Color",
                price: "899.99",
                image: "/placeholder-iirya.png",
                colorOptions: ["#ef4444"],
              },
              {
                name: "Native Instruments Maschine",
                colors: "2 Colors",
                price: "599.99",
                image: "/placeholder-iirya.png",
                colorOptions: ["#000000", "#ffffff"],
              },
              {
                name: "Ableton Push 3",
                colors: "1 Color",
                price: "799.99",
                image: "/placeholder-iirya.png",
                colorOptions: ["#000000"],
              },
              {
                name: "Pioneer DDJ-SX3",
                colors: "1 Color",
                price: "1299.99",
                image: "/placeholder-iirya.png",
                colorOptions: ["#000000"],
              },
            ].map((product) => (
              <Card key={product.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  {product.sale && <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">SALE</Badge>}
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover bg-muted"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.colors}</p>

                  <div className="flex gap-2 mb-6">
                    {product.colorOptions.map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <Button>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to cart
                    </Button>
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
