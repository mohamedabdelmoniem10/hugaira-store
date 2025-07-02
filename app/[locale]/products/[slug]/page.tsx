import { Metadata } from "next";
import { notFound } from "next/navigation";
import MainLayout from "@/components/layouts/main-layout";
import ProductImageGallery from "@/components/product/product-image-gallery";
import ProductInfo from "@/components/product/product-info";
import ProductTabs from "@/components/product/product-tabs";
import RelatedProducts from "@/components/product/related-products";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

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

const getProduct = async (slug: string): Promise<Product | null> => {
  try {
    const response = await fetch(
      `${
        process.env.NEXTAUTH_URL || "http://localhost:3000"
      }/api/products/${slug}`,
      {
        cache: "no-store", // Ensure we get fresh data
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export async function generateStaticParams() {
  // For now, return static paths. In production, this would fetch all slugs from API
  const productSlugs = [
    "elegant-black-niqab",
    "premium-abaya-navy-blue",
    "soft-cotton-hijab-set",
    "traditional-isdalat",
    "luxury-silk-hijab",
    "embroidered-abaya",
  ];

  return productSlugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProduct(params.slug);

  if (!product) {
    return {
      title: "Product Not Found | Hugaira Store",
    };
  }

  return {
    title: `${product.name} | Hugaira Store`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images.map((image) => ({
        url: image,
        alt: product.name,
      })),
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

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
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/products?category=${product.category.slug}`}
              >
                {product.category.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <ProductImageGallery
            images={product.images}
            productName={product.name}
          />
          <ProductInfo product={product} />
        </div>

        {/* Product Tabs */}
        <ProductTabs product={product} />

        {/* Related Products */}
        <RelatedProducts currentProduct={product} />
      </div>
    </MainLayout>
  );
}
