"use client";

import { useState, useEffect } from "react";
import ProductCard from "./product-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

interface RelatedProductsProps {
  currentProduct: Product;
}

export default function RelatedProducts({
  currentProduct,
}: RelatedProductsProps) {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        setLoading(true);

        // Fetch products from the same category
        const response = await fetch(
          `/api/products?category=${currentProduct.category.slug}&limit=8`
        );
        const data = await response.json();

        // Filter out the current product
        const filtered = (data.products || []).filter(
          (product: Product) => product.id !== currentProduct.id
        );
        setRelatedProducts(filtered.slice(0, 4));
      } catch (error) {
        console.error("Error fetching related products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [currentProduct]);

  if (loading) {
    return (
      <section className="py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-playfair">
            Related Products
          </h2>
          <p className="text-muted-foreground mt-2">
            You might also like these products
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
      </section>
    );
  }

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-playfair">
            Related Products
          </h2>
          <p className="text-muted-foreground mt-2">
            You might also like these products
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
