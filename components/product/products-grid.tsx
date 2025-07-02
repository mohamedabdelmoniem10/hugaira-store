"use client";

import { useState, useEffect } from "react";
import ProductCard from "./product-card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface ProductWithCategory {
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
  subcategory?: string;
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

interface ProductsResponse {
  products: ProductWithCategory[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

interface ProductsGridProps {
  category?: string;
  featured?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
  limit?: number;
}

export default function ProductsGrid({
  category,
  featured,
  newArrival,
  bestSeller,
  limit = 12,
}: ProductsGridProps) {
  const [products, setProducts] = useState<ProductWithCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchProducts = async (
    pageNum: number = 1,
    append: boolean = false
  ) => {
    try {
      if (pageNum === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const params = new URLSearchParams();
      if (category) params.append("category", category);
      if (featured) params.append("featured", "true");
      if (newArrival) params.append("newArrival", "true");
      if (bestSeller) params.append("bestSeller", "true");
      if (limit) params.append("limit", limit.toString());
      params.append("page", pageNum.toString());

      const response = await fetch(`/api/products?${params.toString()}`);
      const data: ProductsResponse = await response.json();

      if (append) {
        setProducts((prev) => [...prev, ...data.products]);
      } else {
        setProducts(data.products);
      }

      setHasMore(pageNum < data.pagination.pages);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchProducts(1, false);
  }, [category, featured, newArrival, bestSeller, limit]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProducts(nextPage, true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading products...</span>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-semibold mb-2">No products found</h3>
        <p className="text-muted-foreground">
          We couldn't find any products matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center">
          <Button
            onClick={loadMore}
            disabled={loadingMore}
            size="lg"
            className="min-w-40"
          >
            {loadingMore ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Loading...
              </>
            ) : (
              "Load More Products"
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
