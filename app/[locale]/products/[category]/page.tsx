import { Metadata } from "next";
import { notFound } from "next/navigation";
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

interface PageProps {
  params: {
    category: string;
    locale: string;
  };
}

// Define valid categories
const validCategories = {
  niqab: {
    name: "Niqab",
    description: "Premium quality niqabs for modest fashion and daily wear.",
  },
  abaya: {
    name: "Abaya",
    description: "Elegant abayas with intricate details and premium quality.",
  },
  hijab: {
    name: "Hijab",
    description:
      "Beautiful hijabs in various styles and colors for every occasion.",
  },
  isdalat: {
    name: "Isdalat",
    description: "Traditional isdalat with modern comfort and style.",
  },
  accessories: {
    name: "Accessories",
    description:
      "Complete your modest look with our carefully curated accessories.",
  },
};

export async function generateStaticParams() {
  return Object.keys(validCategories).map((category) => ({
    category: category,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const categoryInfo =
    validCategories[params.category as keyof typeof validCategories];

  if (!categoryInfo) {
    return {
      title: "Category Not Found | Hugaira Store",
    };
  }

  return {
    title: `${categoryInfo.name} | Hugaira Store - Modest Fashion`,
    description: categoryInfo.description,
    keywords: `modest fashion, islamic clothing, ${params.category}, muslim women clothing`,
  };
}

export default function CategoryPage({ params }: PageProps) {
  const categoryInfo =
    validCategories[params.category as keyof typeof validCategories];

  if (!categoryInfo) {
    notFound();
  }

  return (
    <MainLayout>
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${params.locale}`}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${params.locale}/products`}>
                Products
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>{categoryInfo.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-playfair mb-4">
            {categoryInfo.name}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {categoryInfo.description}
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
                Showing products in {categoryInfo.name.toLowerCase()} category
              </p>
              <ProductSort />
            </div>

            {/* Products Grid */}
            <ProductsGrid category={params.category} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
