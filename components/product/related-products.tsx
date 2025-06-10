"use client";

import { useState, useEffect } from "react";
import { Product } from "@/lib/types";
import ProductCard from "./product-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RelatedProductsProps {
  currentProduct: Product;
}

export default function RelatedProducts({
  currentProduct,
}: RelatedProductsProps) {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock related products data
  const mockRelatedProducts: Product[] = [
    {
      id: "related-1",
      name: "Premium Black Niqab",
      slug: "premium-black-niqab",
      price: 42.99,
      salePrice: 35.99,
      images: [
        "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      description:
        "Premium quality black niqab with superior comfort and coverage.",
      category: "niqab",
      colors: ["Black", "Navy"],
      sizes: ["One Size"],
      material: ["Cotton", "Modal"],
      bestSeller: true,
      inStock: true,
      stockQuantity: 40,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    {
      id: "related-2",
      name: "Elegant Flowing Abaya",
      slug: "elegant-flowing-abaya",
      price: 95.99,
      salePrice: 79.99,
      images: [
        "https://images.pexels.com/photos/8533364/pexels-photo-8533364.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      description: "Elegant flowing abaya perfect for special occasions.",
      category: "abaya",
      colors: ["Black", "Navy", "Brown"],
      sizes: ["S", "M", "L", "XL"],
      material: ["Crepe", "Polyester"],
      featured: true,
      inStock: true,
      stockQuantity: 25,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    {
      id: "related-3",
      name: "Soft Silk Hijab",
      slug: "soft-silk-hijab",
      price: 39.99,
      images: [
        "https://images.pexels.com/photos/8460850/pexels-photo-8460850.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      description: "Luxurious silk hijab with beautiful drape and feel.",
      category: "hijab",
      colors: ["Cream", "Pink", "Blue"],
      sizes: ["One Size"],
      material: ["Silk"],
      newArrival: true,
      inStock: true,
      stockQuantity: 60,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    {
      id: "related-4",
      name: "Traditional White Isdalat",
      slug: "traditional-white-isdalat",
      price: 85.99,
      images: [
        "https://images.pexels.com/photos/11811803/pexels-photo-11811803.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      description: "Traditional white isdalat with authentic design.",
      category: "isdalat",
      colors: ["White", "Cream"],
      sizes: ["S", "M", "L"],
      material: ["Cotton", "Linen"],
      inStock: true,
      stockQuantity: 20,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    {
      id: "related-5",
      name: "Modest Prayer Set",
      slug: "modest-prayer-set",
      price: 65.99,
      images: [
        "https://images.pexels.com/photos/8533364/pexels-photo-8533364.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      description: "Complete prayer set with hijab and prayer dress.",
      category: "abaya",
      colors: ["White", "Light Blue"],
      sizes: ["S", "M", "L", "XL"],
      material: ["Cotton", "Modal"],
      inStock: true,
      stockQuantity: 35,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
  ];

  useEffect(() => {
    // Filter products by same category or similar products
    const filtered = mockRelatedProducts.filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
    );

    // If not enough products in same category, add products from other categories
    if (filtered.length < 4) {
      const otherProducts = mockRelatedProducts.filter(
        (product) =>
          product.category !== currentProduct.category &&
          product.id !== currentProduct.id
      );
      filtered.push(...otherProducts.slice(0, 4 - filtered.length));
    }

    setRelatedProducts(filtered.slice(0, 4));
  }, [currentProduct]);

  const itemsPerView = 4;
  const maxIndex = Math.max(0, relatedProducts.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-playfair mb-2">
            You Might Also Like
          </h2>
          <p className="text-muted-foreground">
            Discover more beautiful pieces from our collection
          </p>
        </div>

        {relatedProducts.length > itemsPerView && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="h-10 w-10"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous products</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="h-10 w-10"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next products</span>
            </Button>
          </div>
        )}
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2"
            >
              <ProductCard product={product} compact />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <Button variant="outline" asChild>
          <a href="/products">View All Products</a>
        </Button>
      </div>
    </section>
  );
}
