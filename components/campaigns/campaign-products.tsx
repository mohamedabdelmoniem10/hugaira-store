"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/product/product-card";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice?: number;
  images: string[];
  description: string;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  colors: string[];
  sizes: string[];
  materials: string[];
  featured?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
  inStock: boolean;
  stockQuantity: number;
  createdAt: string;
  updatedAt: string;
}

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const params = new URLSearchParams();
        if (category) params.append("category", category);
        params.append("limit", limit.toString());

        const response = await fetch(`/api/products?${params.toString()}`);
        const data = await response.json();

        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching campaign products:", error);
      } finally {
        setLoading(false);
      }
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
        {products.length > 0 ? (
          <>
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
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No products available for this campaign at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
