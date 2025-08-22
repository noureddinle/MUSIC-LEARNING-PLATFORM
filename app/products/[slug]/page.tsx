import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw, Music } from "lucide-react"
import { Chatbot } from "@/components/chatbot"

// Mock product data
const product = {
  id: 1,
  name: "AKAI MPK Mini MK3",
  price: 1749.99,
  originalPrice: 1999.99,
  rating: 4.8,
  reviewCount: 324,
  colors: [
    { name: "White", value: "#FFFFFF", available: true },
    { name: "Black", value: "#000000", available: true },
    { name: "Red", value: "#DC2626", available: false },
    { name: "Blue", value: "#2563EB", available: true },
  ],
  images: [
    "/placeholder.svg?height=500&width=500&text=AKAI+MPK+Mini+Front",
    "/placeholder.svg?height=500&width=500&text=AKAI+MPK+Mini+Side",
    "/placeholder.svg?height=500&width=500&text=AKAI+MPK+Mini+Back",
    "/placeholder.svg?height=500&width=500&text=AKAI+MPK+Mini+Detail",
  ],
  description:
    "The AKAI MPK Mini MK3 is a compact, portable MIDI controller that delivers the essential features you need to create music anywhere. With 25 velocity-sensitive mini keys, 8 backlit MPC-style pads, and 8 assignable knobs, this controller provides hands-on control over your music software.",
  features: [
    "25 velocity-sensitive mini keys",
    "8 backlit MPC-style pads with Note Repeat and Full Level",
    "8 assignable knobs for tweaking your sounds in real time",
    "4-way thumbstick for dynamic pitch and modulation control",
    "Compact and portable design",
    "USB-powered - no external power supply needed",
    "Includes MPC Beats software",
  ],
  specifications: {
    Dimensions: "12.6 x 7.1 x 1.6 inches",
    Weight: "1.5 lbs",
    Keys: "25 velocity-sensitive mini keys",
    Pads: "8 backlit MPC-style pads",
    Knobs: "8 assignable knobs",
    Connectivity: "USB",
    Power: "USB bus-powered",
    Software: "MPC Beats included",
  },
  inStock: true,
  stockCount: 15,
  shipping: "Free shipping on orders over $50",
  warranty: "2-year manufacturer warranty",
}

const relatedProducts = [
  {
    id: 2,
    name: "AKAI APC 64",
    price: 1749.99,
    image: "/placeholder.svg?height=200&width=200&text=APC+64",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Roland TR-8S",
    price: 899.99,
    image: "/placeholder.svg?height=200&width=200&text=Roland+TR-8S",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Native Instruments Maschine",
    price: 599.99,
    image: "/placeholder.svg?height=200&width=200&text=Maschine",
    rating: 4.6,
  },
]

export default function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Music className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">MusicLearn</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="/courses" className="text-slate-300 hover:text-white transition-colors">
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
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-400 mb-8">
          <a href="/" className="hover:text-white">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/products" className="hover:text-white">
            Products
          </a>
          <span className="mx-2">/</span>
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-slate-800 rounded-lg overflow-hidden">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className="aspect-square bg-slate-800 rounded-lg overflow-hidden border-2 border-transparent hover:border-orange-500 transition-colors"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-red-600 text-white mb-2">SALE</Badge>
              <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-slate-600"}`}
                    />
                  ))}
                  <span className="text-slate-300 ml-2">({product.reviewCount} reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-white">${product.price}</span>
                <span className="text-xl text-slate-400 line-through">${product.originalPrice}</span>
                <Badge className="bg-green-600 text-white">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </Badge>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    disabled={!color.available}
                    className={`w-10 h-10 rounded-full border-2 border-slate-600 hover:border-orange-500 transition-colors ${!color.available ? "opacity-50 cursor-not-allowed" : ""}`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-400">In Stock ({product.stockCount} available)</span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Add to Wishlist
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="space-y-3 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-3 text-slate-300">
                <Truck className="h-5 w-5 text-orange-500" />
                <span>{product.shipping}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <RotateCcw className="h-5 w-5 text-orange-500" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Shield className="h-5 w-5 text-orange-500" />
                <span>{product.warranty}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800">
              <TabsTrigger value="description" className="text-slate-300 data-[state=active]:text-white">
                Description
              </TabsTrigger>
              <TabsTrigger value="features" className="text-slate-300 data-[state=active]:text-white">
                Features
              </TabsTrigger>
              <TabsTrigger value="specifications" className="text-slate-300 data-[state=active]:text-white">
                Specifications
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-slate-300 data-[state=active]:text-white">
                Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="p-6">
                  <p className="text-slate-300 leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="mt-6">
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-slate-800 last:border-b-0">
                        <span className="font-medium text-white">{key}</span>
                        <span className="text-slate-300">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="p-6">
                  <div className="text-center text-slate-400">
                    <p>Reviews coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors"
              >
                <CardContent className="p-4">
                  <img
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    className="w-full aspect-square object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-white mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">${relatedProduct.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-slate-300 text-sm">{relatedProduct.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Chatbot />
    </div>
  )
}
