"use client";

import { useState } from "react";
import ProductCard from "./product-card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Product } from "@/lib/types";

// Mock product data - in real app this would come from API
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Elegant Black Niqab",
    slug: "elegant-black-niqab",
    price: 45.99,
    salePrice: 39.99,
    images: [
      "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    description:
      "Elegant and comfortable black niqab made from premium breathable fabric.",
    category: "niqab",
    colors: ["Black", "Navy"],
    sizes: ["One Size"],
    material: ["Cotton", "Polyester"],
    newArrival: true,
    inStock: true,
    stockQuantity: 50,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "2",
    name: "Premium Abaya - Navy Blue",
    slug: "premium-abaya-navy-blue",
    price: 89.99,
    salePrice: 79.99,
    images: [
      "https://images.pexels.com/photos/8533364/pexels-photo-8533364.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8533364/pexels-photo-8533364.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    description:
      "Premium quality navy blue abaya with elegant design and comfortable fit.",
    category: "abaya",
    colors: ["Navy", "Black", "Brown"],
    sizes: ["S", "M", "L", "XL"],
    material: ["Crepe", "Polyester"],
    bestSeller: true,
    inStock: true,
    stockQuantity: 30,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "3",
    name: "Soft Cotton Hijab Set",
    slug: "soft-cotton-hijab-set",
    price: 24.99,
    salePrice: 19.99,
    images: [
      "https://images.pexels.com/photos/8460850/pexels-photo-8460850.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8460850/pexels-photo-8460850.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    description: "Set of 3 soft cotton hijabs in beautiful colors.",
    category: "hijab",
    colors: ["Beige", "Pink", "White"],
    sizes: ["One Size"],
    material: ["Cotton"],
    newArrival: true,
    inStock: true,
    stockQuantity: 100,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "4",
    name: "Traditional Isdalat",
    slug: "traditional-isdalat",
    price: 65.99,
    images: [
      "https://images.pexels.com/photos/11811803/pexels-photo-11811803.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/11811803/pexels-photo-11811803.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    description:
      "Traditional isdalat with authentic design and premium quality.",
    category: "isdalat",
    colors: ["Black", "Brown"],
    sizes: ["S", "M", "L"],
    material: ["Cotton", "Linen"],
    inStock: true,
    stockQuantity: 25,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "5",
    name: "Luxury Silk Hijab",
    slug: "luxury-silk-hijab",
    price: 39.99,
    images: [
      "https://images.pexels.com/photos/8460850/pexels-photo-8460850.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8460850/pexels-photo-8460850.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    description:
      "Luxurious silk hijab with beautiful drape and elegant finish.",
    category: "hijab",
    colors: ["Gold", "Silver", "Rose"],
    sizes: ["One Size"],
    material: ["Silk"],
    featured: true,
    inStock: true,
    stockQuantity: 40,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "6",
    name: "Modest Prayer Dress",
    slug: "modest-prayer-dress",
    price: 75.99,
    images: [
      "https://images.pexels.com/photos/6169054/pexels-photo-6169054.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6169054/pexels-photo-6169054.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    description:
      "Comfortable and modest prayer dress perfect for daily prayers.",
    category: "abaya",
    colors: ["White", "Beige", "Light Blue"],
    sizes: ["S", "M", "L", "XL"],
    material: ["Cotton", "Modal"],
    inStock: true,
    stockQuantity: 35,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "7",
    name: "Breathable Summer Niqab",
    slug: "breathable-summer-niqab",
    price: 35.99,
    images: [
      "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    description: "Lightweight and breathable niqab perfect for summer weather.",
    category: "niqab",
    colors: ["Black", "Brown"],
    sizes: ["One Size"],
    material: ["Cotton", "Bamboo"],
    newArrival: true,
    inStock: true,
    stockQuantity: 60,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "8",
    name: "Embroidered Abaya",
    slug: "embroidered-abaya",
    price: 129.99,
    images: [
      "https://images.pexels.com/photos/8533364/pexels-photo-8533364.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8533364/pexels-photo-8533364.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    description:
      "Beautiful embroidered abaya with intricate details and premium quality.",
    category: "abaya",
    colors: ["Black", "Navy", "Burgundy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: ["Crepe", "Silk"],
    featured: true,
    inStock: true,
    stockQuantity: 20,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
];

export default function ProductsGrid() {
  const [products, setProducts] = useState(mockProducts);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In real app, this would fetch more products
    const moreProducts = mockProducts.map((product) => ({
      ...product,
      id: product.id + products.length.toString(),
    }));

    setProducts((prev) => [...prev, ...moreProducts]);
    setLoading(false);

    // Simulate no more products after 3 loads
    if (products.length >= 24) {
      setHasMore(false);
    }
  };

  return (
    <div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center">
          <Button
            onClick={loadMore}
            disabled={loading}
            variant="outline"
            size="lg"
            className="min-w-[200px]"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Load More Products"
            )}
          </Button>
        </div>
      )}

      {!hasMore && products.length > 8 && (
        <div className="text-center text-muted-foreground">
          <p>You've seen all our products!</p>
        </div>
      )}
    </div>
  );
}
