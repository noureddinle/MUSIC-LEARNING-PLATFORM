'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw, Music } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // For Next.js dynamic routing
import { Product } from "@/lib/types";
import { fetchProduct, fetchProducts } from "@/lib/api";


export default function ProductDetailPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loadingProduct, setLoadingProduct] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    const loadProduct = async () => {
      if (!productId || typeof productId !== "string") return;

      setLoadingProduct(true);
      setError(null);
      try {
        const productData = await fetchProduct(productId);
        setProduct(productData);

        const relatedData = await fetchProducts(1, 3);
        setRelatedProducts(relatedData.products.filter((p) => p.id !== productId));
      } catch (err) {
        setError("Failed to load product. Please try again.");
      } finally {
        setLoadingProduct(false);
      }
    };

    loadProduct();
  }, [productId]);

  if (loadingProduct) {
    return <div className="min-h-screen bg-slate-950 text-white">Loading...</div>;
  }

  if (error || !product) {
    return <div className="min-h-screen bg-slate-950 text-white">{error || "Product not found."}</div>;
  }

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
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-slate-800 rounded-lg overflow-hidden">
              <img
                src={product.media.images?.[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {(product.media.images || []).map((image, index) => (
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
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-white">${product.price?.toFixed(2)}</span>
                {product.price && (
                  <>
                    <span className="text-xl text-slate-400 line-through">${product.price.toFixed(2)}</span>
                    <Badge className="bg-green-600 text-white">
                      Save ${(product.price * product.discount).toFixed(2)}
                    </Badge>
                  </>
                )}
              </div>
            </div>

            

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-400">{product.inStock ? "In Stock" : "Out of Stock"}</span>
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
                <span>{product.shipping || "Free shipping on orders over $50"}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <RotateCcw className="h-5 w-5 text-orange-500" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Shield className="h-5 w-5 text-orange-500" />
                <span>{product.warranty || "1-year warranty"}</span>
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
                  <p className="text-slate-300 leading-relaxed">{product.description || "No description available."}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="features" className="mt-6">
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {(product.features || []).map((feature, index) => (
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
                    {product.specifications
                      ? Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b border-slate-800 last:border-b-0">
                            <span className="font-medium text-white">{key}</span>
                            <span className="text-slate-300">{value}</span>
                          </div>
                        ))
                      : <p className="text-slate-300">No specifications available.</p>}
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
            {relatedProducts.length > 0 ? (
              relatedProducts.map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <CardContent className="p-4">
                    <img
                      src={relatedProduct.media.thumbnail || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="w-full aspect-square object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold text-white mb-2">{relatedProduct.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-white">${relatedProduct.price?.toFixed(2)}</span>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-slate-300">No related products available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}