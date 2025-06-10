import { Metadata } from "next";
import MainLayout from "@/components/layouts/main-layout";
import ProductsGrid from "@/components/product/products-grid";
import ProductFilters from "@/components/product/product-filters";
import ProductSort from "@/components/product/product-sort";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "All Products | Hugaira Store - Modest Fashion for Muslim Women",
  description:
    "Browse our complete collection of modest fashion including niqabs, abayas, hijabs, and isdalat. Quality Islamic clothing for modern Muslim women.",
  keywords:
    "modest fashion, islamic clothing, niqab, abaya, hijab, isdalat, muslim women clothing",
};

export default function ProductsPage() {
  return (
    <MainLayout>
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>All Products</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-playfair mb-4">
            All Products
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our complete collection of elegant, modest fashion designed
            for the modern Muslim woman.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <ProductFilters />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort and Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-muted-foreground">
                Showing 1-24 of 156 products
              </p>
              <ProductSort />
            </div>

            {/* Products Grid */}
            <ProductsGrid />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
