"use client";

import { Product } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const reviews = [
    {
      id: 1,
      name: "Fatima A.",
      rating: 5,
      comment:
        "Beautiful quality and perfect fit. Very comfortable to wear all day.",
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Aisha M.",
      rating: 4,
      comment:
        "Love the fabric quality. The color is exactly as shown in the pictures.",
      date: "2024-01-10",
    },
    {
      id: 3,
      name: "Khadija S.",
      rating: 5,
      comment: "Excellent product! Fast shipping and great customer service.",
      date: "2024-01-05",
    },
  ];

  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="materials">Materials</TabsTrigger>
        <TabsTrigger value="reviews">Reviews (24)</TabsTrigger>
        <TabsTrigger value="shipping">Shipping</TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-6">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Product Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-medium">Key Features:</h4>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>• Premium quality materials for lasting comfort</li>
                  <li>• Elegant design that complements any modest wardrobe</li>
                  <li>• Breathable fabric suitable for all-day wear</li>
                  <li>• Easy care and maintenance</li>
                  <li>• Available in multiple colors and sizes</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Care Instructions:</h4>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>• Machine wash cold with like colors</li>
                  <li>• Use gentle cycle and mild detergent</li>
                  <li>• Hang dry or tumble dry on low heat</li>
                  <li>• Iron on low temperature if needed</li>
                  <li>• Do not bleach or dry clean</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="materials" className="mt-6">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Materials & Composition</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2">Fabric Composition:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.material.map((material) => (
                      <Badge
                        key={material}
                        variant="outline"
                        className="text-sm"
                      >
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Fabric Properties:</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Breathable and lightweight</li>
                    <li>• Soft and comfortable against skin</li>
                    <li>• Wrinkle-resistant for easy care</li>
                    <li>• Colorfast and fade-resistant</li>
                    <li>• Hypoallergenic and skin-friendly</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Quality Standards:</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• OEKO-TEX Standard 100 certified</li>
                    <li>• Ethically sourced materials</li>
                    <li>• Quality tested for durability</li>
                    <li>• Meets international safety standards</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="reviews" className="mt-6">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Customer Reviews</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < 4
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    4.0 out of 5
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b pb-4 last:border-b-0"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-beige-light rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-brown-medium" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{review.name}</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {review.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="text-primary hover:underline text-sm">
                  View all reviews
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="shipping" className="mt-6">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Shipping & Returns</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Shipping Options:</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Standard Shipping (5-7 business days)</span>
                      <span>$9.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Express Shipping (2-3 business days)</span>
                      <span>$19.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Free Standard Shipping</span>
                      <span>On orders over $75</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Return Policy:</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>• 30-day return window from delivery date</li>
                    <li>• Items must be unworn and in original condition</li>
                    <li>• Original tags and packaging required</li>
                    <li>• Free returns for defective items</li>
                    <li>• Return shipping costs apply for exchanges</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">International Shipping:</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 text-sm">
                    <li>• Available to select countries</li>
                    <li>• Delivery time: 7-14 business days</li>
                    <li>• Customs duties may apply</li>
                    <li>• Tracking provided for all orders</li>
                  </ul>
                </div>

                <div className="bg-beige-light/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Need Help?</h4>
                  <p className="text-sm text-muted-foreground">
                    Contact our customer service team at{" "}
                    <a
                      href="mailto:support@hugairastore.com"
                      className="text-primary hover:underline"
                    >
                      support@hugairastore.com
                    </a>{" "}
                    or call us at{" "}
                    <a
                      href="tel:+1-555-123-4567"
                      className="text-primary hover:underline"
                    >
                      +1 (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
