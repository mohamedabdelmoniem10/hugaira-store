"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";

interface CampaignProductsProps {
  title: string;
  subtitle: string;
  category?: string;
  limit?: number;
}

export default function CampaignProducts({
  title,
  subtitle,
  category,
  limit = 8,
}: CampaignProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock products data - in real app this would come from API
  const mockProducts: Product[] = [
    {
      id: "summer-1",
      name: "Breathable Summer Niqab",
      slug: "breathable-summer-niqab",
      price: 35.99,
      salePrice: 26.99,
      images: [
        "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      description:
        "Lightweight and breathable niqab perfect for summer weather.",
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
      id: "summer-2",
      name: "Lightweight Summer Abaya",
      slug: "lightweight-summer-abaya",
      price: 79.99,
      salePrice: 59.99,
      images: [
        "https://images.pexels.com/photos/8533364/pexels-photo-8533364.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      description:
        "Elegant lightweight abaya with breathable fabric for summer.",
      category: "abaya",
      colors: ["Beige", "Light Blue", "White"],
      sizes: ["S", "M", "L", "XL"],
      material: ["Linen", "Cotton"],
      featured: true,
      inStock: true,
      stockQuantity: 40,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    {
      id: "summer-3",
      name: "Cooling Hijab Collection",
      slug: "cooling-hijab-collection",
      price: 29.99,
      salePrice: 22.49,
      images: [
        "https://images.pexels.com/photos/8460850/pexels-photo-8460850.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      description: "Set of 3 cooling hijabs with moisture-wicking technology.",
      category: "hijab",
      colors: ["Mint", "Sky Blue", "Lavender"],
      sizes: ["One Size"],
      material: ["Bamboo", "Modal"],
      bestSeller: true,
      inStock: true,
      stockQuantity: 80,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    {
      id: "summer-4",
      name: "UV Protection Isdalat",
      slug: "uv-protection-isdalat",
      price: 69.99,
      salePrice: 52.49,
      images: [
        "https://images.pexels.com/photos/11811803/pexels-photo-11811803.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      description:
        "Traditional isdalat with built-in UV protection for summer.",
      category: "isdalat",
      colors: ["Cream", "Light Gray"],
      sizes: ["S", "M", "L"],
      material: ["Cotton", "Polyester"],
      inStock: true,
      stockQuantity: 30,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
  ];

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      let filteredProducts = mockProducts;
      if (category) {
        filteredProducts = mockProducts.filter(
          (product) =>
            product.category === category ||
            product.name.toLowerCase().includes(category.toLowerCase())
        );
      }

      setProducts(filteredProducts.slice(0, limit));
      setLoading(false);
    };

    fetchProducts();
  }, [category, limit]);

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair mb-4">{title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="bg-card border rounded-lg p-4 animate-pulse"
              >
                <div className="aspect-[3/4] bg-muted rounded-md mb-4" />
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
