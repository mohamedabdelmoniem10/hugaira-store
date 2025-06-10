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
import { Product } from "@/lib/types";

// Mock product data - in real app this would come from API
const getProduct = async (slug: string): Promise<Product | null> => {
  const mockProducts: Record<string, Product> = {
    "elegant-black-niqab": {
      id: "1",
      name: "Elegant Black Niqab",
      slug: "elegant-black-niqab",
      price: 45.99,
      salePrice: 39.99,
      images: [
        "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "Experience the perfect blend of elegance and comfort with our premium black niqab. Crafted from high-quality, breathable fabric.",
      category: "niqab",
      colors: ["Black", "Navy", "Brown"],
      sizes: ["One Size"],
      material: ["Cotton", "Polyester"],
      newArrival: true,
      inStock: true,
      stockQuantity: 50,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    "premium-abaya-navy-blue": {
      id: "2",
      name: "Premium Navy Blue Abaya",
      slug: "premium-abaya-navy-blue",
      price: 89.99,
      salePrice: 69.99,
      images: [
        "https://images.pexels.com/photos/8533364/pexels-photo-8533364.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8533364/pexels-photo-8533364.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "Elegant navy blue abaya with flowing design and premium fabric. Perfect for special occasions and daily wear.",
      category: "abaya",
      colors: ["Navy Blue", "Black", "Burgundy"],
      sizes: ["S", "M", "L", "XL"],
      material: ["Crepe", "Polyester"],
      featured: true,
      inStock: true,
      stockQuantity: 30,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    "soft-cotton-hijab-set": {
      id: "3",
      name: "Soft Cotton Hijab Set",
      slug: "soft-cotton-hijab-set",
      price: 29.99,
      images: [
        "https://images.pexels.com/photos/8460850/pexels-photo-8460850.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "Set of 3 soft cotton hijabs in beautiful colors. Breathable and comfortable for all-day wear.",
      category: "hijab",
      colors: ["Pink", "Beige", "White"],
      sizes: ["One Size"],
      material: ["Cotton"],
      bestSeller: true,
      inStock: true,
      stockQuantity: 100,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    "traditional-isdalat": {
      id: "4",
      name: "Traditional Isdalat",
      slug: "traditional-isdalat",
      price: 79.99,
      images: [
        "https://images.pexels.com/photos/11811803/pexels-photo-11811803.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "Traditional isdalat with authentic design and comfortable fit. Made with high-quality materials.",
      category: "isdalat",
      colors: ["Cream", "Light Gray", "Beige"],
      sizes: ["S", "M", "L"],
      material: ["Cotton", "Linen"],
      inStock: true,
      stockQuantity: 25,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    "luxury-silk-hijab": {
      id: "5",
      name: "Luxury Silk Hijab",
      slug: "luxury-silk-hijab",
      price: 49.99,
      images: [
        "https://images.pexels.com/photos/8460850/pexels-photo-8460850.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "Premium silk hijab with elegant drape and luxurious feel. Perfect for special occasions.",
      category: "hijab",
      colors: ["Gold", "Silver", "Rose Gold"],
      sizes: ["One Size"],
      material: ["Silk"],
      featured: true,
      inStock: true,
      stockQuantity: 40,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    "modest-prayer-dress": {
      id: "6",
      name: "Modest Prayer Dress",
      slug: "modest-prayer-dress",
      price: 59.99,
      images: [
        "https://images.pexels.com/photos/8533364/pexels-photo-8533364.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "Comfortable prayer dress with easy-to-wear design. Perfect for daily prayers and religious occasions.",
      category: "abaya",
      colors: ["White", "Light Blue", "Cream"],
      sizes: ["S", "M", "L", "XL"],
      material: ["Cotton", "Modal"],
      inStock: true,
      stockQuantity: 60,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    "breathable-summer-niqab": {
      id: "7",
      name: "Breathable Summer Niqab",
      slug: "breathable-summer-niqab",
      price: 35.99,
      images: [
        "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "Lightweight summer niqab with breathable fabric. Perfect for warm weather while maintaining modesty.",
      category: "niqab",
      colors: ["Black", "Brown", "Navy"],
      sizes: ["One Size"],
      material: ["Bamboo", "Cotton"],
      newArrival: true,
      inStock: true,
      stockQuantity: 45,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    "embroidered-abaya": {
      id: "8",
      name: "Embroidered Abaya",
      slug: "embroidered-abaya",
      price: 129.99,
      salePrice: 99.99,
      images: [
        "https://images.pexels.com/photos/8533364/pexels-photo-8533364.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "Beautiful embroidered abaya with intricate details. A statement piece for special occasions.",
      category: "abaya",
      colors: ["Black", "Navy", "Burgundy"],
      sizes: ["S", "M", "L", "XL"],
      material: ["Crepe", "Silk"],
      featured: true,
      inStock: true,
      stockQuantity: 20,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
  };

  return mockProducts[slug] || null;
};

export async function generateStaticParams() {
  // In a real app, this would fetch all product slugs from your API/database
  const productSlugs = [
    "elegant-black-niqab",
    "premium-abaya-navy-blue",
    "soft-cotton-hijab-set",
    "traditional-isdalat",
    "luxury-silk-hijab",
    "modest-prayer-dress",
    "breathable-summer-niqab",
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
    title: `${product.name} | Hugaira Store - Modest Fashion`,
    description: product.description,
    keywords: `${product.name}, ${product.category}, modest fashion, islamic clothing, hugaira store`,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
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
              <BreadcrumbLink href={`/products/${product.category}`}>
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Product Images */}
          <div>
            <ProductImageGallery
              images={product.images}
              productName={product.name}
            />
          </div>

          {/* Product Info */}
          <div>
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mb-16">
          <ProductTabs product={product} />
        </div>

        {/* Related Products */}
        <div>
          <RelatedProducts currentProduct={product} />
        </div>
      </div>
    </MainLayout>
  );
}
