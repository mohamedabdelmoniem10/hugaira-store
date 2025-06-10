"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import TranslatedProductCard from "@/components/product/translated-product-card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/types";

// Real product data with actual images from public folder
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Black Niqab", // This will be translated in the component
    slug: "premium-black-niqab",
    price: 1999,
    salePrice: 1499,
    images: [
      "/495393153_122131519268757034_895403878562772653_n.jpg",
      "/496213813_122131519322757034_2075497425163874416_n.jpg",
    ],
    description:
      "Our premium quality niqab made from breathable fabric for all-day comfort.",
    category: "niqab",
    colors: ["black", "dark gray", "navy"],
    sizes: ["S", "M", "L"],
    material: ["cotton", "polyester"],
    featured: true,
    newArrival: true,
    bestSeller: true,
    inStock: true,
    stockQuantity: 25,
    createdAt: "2023-01-15T00:00:00Z",
    updatedAt: "2023-01-15T00:00:00Z",
  },
  {
    id: "2",
    name: "Elegant Abaya",
    slug: "elegant-abaya",
    price: 2499,
    images: [
      "/495863746_122131519214757034_1831303817126661184_n.jpg",
      "/496231219_122131519172757034_3692982369783111534_n.jpg",
    ],
    description: "A beautiful abaya with subtle embroidery details.",
    category: "abaya",
    colors: ["black", "dark brown"],
    sizes: ["S", "M", "L", "XL"],
    material: ["crepe", "polyester"],
    featured: true,
    bestSeller: true,
    inStock: true,
    stockQuantity: 15,
    createdAt: "2023-02-10T00:00:00Z",
    updatedAt: "2023-02-10T00:00:00Z",
  },
  {
    id: "3",
    name: "Soft Jersey Hijab",
    slug: "soft-jersey-hijab",
    price: 599,
    salePrice: 449,
    images: [
      "/496299081_122131521434757034_4954869532230496614_n.jpg",
      "/495401473_122131521386757034_7673535385038127665_n.jpg",
    ],
    description: "Soft jersey hijab that drapes beautifully.",
    category: "hijab",
    colors: ["black", "white", "blush pink", "navy", "burgundy"],
    sizes: ["standard"],
    material: ["jersey", "cotton"],
    featured: true,
    newArrival: true,
    inStock: true,
    stockQuantity: 50,
    createdAt: "2023-03-20T00:00:00Z",
    updatedAt: "2023-03-20T00:00:00Z",
  },
  {
    id: "4",
    name: "Flowy Isdalat",
    slug: "flowy-isdalat",
    price: 1799,
    images: [
      "/495366796_122131521284757034_5184805204367262052_n.jpg",
      "/495833175_122131521242757034_2465283231872783116_n.jpg",
    ],
    description: "Beautiful and flowy isdalat for a modest look.",
    category: "isdalat",
    colors: ["black", "navy", "dark gray"],
    sizes: ["S", "M", "L"],
    material: ["polyester", "chiffon"],
    featured: true,
    bestSeller: true,
    inStock: true,
    stockQuantity: 20,
    createdAt: "2023-04-05T00:00:00Z",
    updatedAt: "2023-04-05T00:00:00Z",
  },
  {
    id: "5",
    name: "Classic Black Abaya",
    slug: "classic-black-abaya",
    price: 1899,
    images: [
      "/495347431_122131523366757034_1160375165264339560_n.jpg",
      "/495199314_122131523318757034_5711690915345995115_n.jpg",
    ],
    description: "Timeless black abaya with elegant design.",
    category: "abaya",
    colors: ["black"],
    sizes: ["S", "M", "L", "XL"],
    material: ["crepe", "polyester"],
    featured: true,
    newArrival: false,
    bestSeller: true,
    inStock: true,
    stockQuantity: 30,
    createdAt: "2023-05-01T00:00:00Z",
    updatedAt: "2023-05-01T00:00:00Z",
  },
  {
    id: "6",
    name: "Luxury Niqab Set",
    slug: "luxury-niqab-set",
    price: 2999,
    salePrice: 2399,
    images: [
      "/496159702_122131523264757034_8928197628154764516_n.jpg",
      "/495319371_122131523216757034_7407042861886818665_n.jpg",
    ],
    description: "Premium niqab set with matching accessories.",
    category: "niqab",
    colors: ["black", "navy"],
    sizes: ["S", "M", "L"],
    material: ["silk", "cotton"],
    featured: true,
    newArrival: true,
    bestSeller: false,
    inStock: true,
    stockQuantity: 12,
    createdAt: "2023-06-15T00:00:00Z",
    updatedAt: "2023-06-15T00:00:00Z",
  },
  {
    id: "7",
    name: "Modern Hijab Collection",
    slug: "modern-hijab-collection",
    price: 799,
    images: [
      "/496011663_122131530062757034_5703052451881743383_n.jpg",
      "/495359896_122131532516757034_1759886587744043059_n.jpg",
    ],
    description: "Contemporary hijab designs for everyday wear.",
    category: "hijab",
    colors: ["black", "white", "gray", "beige"],
    sizes: ["standard"],
    material: ["chiffon", "cotton"],
    featured: true,
    newArrival: true,
    bestSeller: false,
    inStock: true,
    stockQuantity: 40,
    createdAt: "2023-07-01T00:00:00Z",
    updatedAt: "2023-07-01T00:00:00Z",
  },
  {
    id: "8",
    name: "Elegant Isdalat Set",
    slug: "elegant-isdalat-set",
    price: 2299,
    images: [
      "/495803917_122131532468757034_2576542633686605228_n.jpg",
      "/495582983_122131532372757034_579046869759330740_n.jpg",
    ],
    description: "Complete isdalat set for special occasions.",
    category: "isdalat",
    colors: ["black", "dark blue", "charcoal"],
    sizes: ["S", "M", "L", "XL"],
    material: ["crepe", "chiffon"],
    featured: true,
    newArrival: false,
    bestSeller: true,
    inStock: true,
    stockQuantity: 18,
    createdAt: "2023-08-10T00:00:00Z",
    updatedAt: "2023-08-10T00:00:00Z",
  },
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("featured");
  const t = useTranslations("home");
  const tCommon = useTranslations("common");

  const tabs = [
    { id: "featured", label: t("featuredProducts") },
    { id: "bestsellers", label: t("bestSellers") },
    { id: "new", label: t("newArrivals") },
  ];

  const filteredProducts = mockProducts.filter((product) => {
    if (activeTab === "featured") return product.featured;
    if (activeTab === "bestsellers") return product.bestSeller;
    if (activeTab === "new") return product.newArrival;
    return true;
  });

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">
            {t("ourCollection")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("collectionDescription")}
          </p>

          <div className="flex flex-wrap justify-center mt-8 gap-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "secondary" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className="min-w-[120px]"
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <TranslatedProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/products">
            <Button variant="outline" size="lg">
              {tCommon("viewAll")}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
