import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Search, ShoppingCart, User, Menu, Trash2, Plus, Minus, CreditCard, Lock } from "lucide-react"
import Chatbot from "@/components/chatbot"

export default function CartPage() {
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
                <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </a>
                <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
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
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                  4
                </Badge>
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">Shopping Cart</h1>
              <span className="text-muted-foreground">4 items</span>
            </div>

            <div className="space-y-4">
              {/* Course Items */}
              {[
                {
                  id: 1,
                  type: "course",
                  title: "Music Theory Fundamentals",
                  instructor: "Dr. Robert Taylor",
                  price: 69.99,
                  originalPrice: 89.99,
                  image: "/music-theory-basics.png",
                  duration: "9 total hours",
                  level: "Beginner",
                },
                {
                  id: 2,
                  type: "course",
                  title: "Bass Guitar Basics",
                  instructor: "Thomas Evans",
                  price: 54.99,
                  originalPrice: null,
                  image: "/colorful-bass-guitars.png",
                  duration: "7 total hours",
                  level: "Beginner",
                },
              ].map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-muted-foreground">{item.instructor}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                              <span>{item.duration}</span>
                              <span>•</span>
                              <span>{item.level}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {item.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">${item.originalPrice}</span>
                            )}
                            <span className="text-xl font-bold">${item.price}</span>
                            {item.originalPrice && (
                              <Badge variant="destructive" className="text-xs">
                                Save ${(item.originalPrice - item.price).toFixed(2)}
                              </Badge>
                            )}
                          </div>
                          <Button variant="outline" size="sm">
                            Move to Wishlist
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Product Items */}
              {[
                {
                  id: 3,
                  type: "product",
                  title: "AKAI MPK MINI",
                  description: "25-Key Ultra-Portable USB MIDI Keyboard Controller",
                  price: 119.99,
                  originalPrice: 149.99,
                  image: "/placeholder-iirya.png",
                  quantity: 1,
                  color: "Black",
                },
                {
                  id: 4,
                  type: "product",
                  title: "Roland TR-808",
                  description: "Rhythm Composer Drum Machine",
                  price: 899.99,
                  originalPrice: null,
                  image: "/placeholder-iirya.png",
                  quantity: 1,
                  color: "Red",
                },
              ].map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                            <p className="text-sm text-muted-foreground mt-1">Color: {item.color}</p>
                          </div>
                          <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {item.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">${item.originalPrice}</span>
                            )}
                            <span className="text-xl font-bold">${item.price}</span>
                            {item.originalPrice && (
                              <Badge variant="destructive" className="text-xs">
                                Save ${(item.originalPrice - item.price).toFixed(2)}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="icon" className="w-8 h-8 bg-transparent">
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button variant="outline" size="icon" className="w-8 h-8 bg-transparent">
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                            <Button variant="outline" size="sm">
                              Save for Later
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="mt-8">
              <Button variant="outline" size="lg">
                Continue Shopping
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Courses (2 items)</span>
                    <span>$124.98</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Products (2 items)</span>
                    <span>$1,019.98</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Course Discount</span>
                    <span>-$20.00</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Product Discount</span>
                    <span>-$30.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$1,094.96</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$87.60</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>$1,182.56</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Button className="w-full" size="lg">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Proceed to Checkout
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    <Lock className="w-4 h-4 mr-2" />
                    Secure Checkout with PayPal
                  </Button>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="text-sm text-muted-foreground">
                    <h4 className="font-semibold mb-2">What's included:</h4>
                    <ul className="space-y-1">
                      <li>• Lifetime access to courses</li>
                      <li>• 30-day money-back guarantee</li>
                      <li>• Certificate of completion</li>
                      <li>• Free shipping on products</li>
                      <li>• 24/7 customer support</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="bg-muted p-3 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Promo Code</h4>
                    <div className="flex gap-2">
                      <Input placeholder="Enter code" className="flex-1" />
                      <Button variant="outline" size="sm">
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recommended Items */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You might also like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Vocal Training for Beginners",
                instructor: "Lisa Anderson",
                price: "$39.99",
                image: "/female-singer-blue.png",
                type: "course",
              },
              {
                title: "DJ Fundamentals",
                instructor: "Sarah Johnson",
                price: "$79.99",
                image: "/placeholder-iirya.png",
                type: "course",
              },
              {
                title: "Native Instruments Maschine",
                description: "Groovebox and Sampler",
                price: "$599.99",
                image: "/placeholder-iirya.png",
                type: "product",
              },
              {
                title: "Ableton Push 3",
                description: "Standalone Music Creation Device",
                price: "$799.99",
                image: "/placeholder-iirya.png",
                type: "product",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-40 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.type === "course" ? item.instructor : item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{item.price}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
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
