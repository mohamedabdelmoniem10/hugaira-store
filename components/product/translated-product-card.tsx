"use client";

import { useTranslations } from "next-intl";
import ProductCard from "./product-card";
import { Product } from "@/lib/types";

interface TranslatedProductCardProps {
  product: Product;
  compact?: boolean;
}

export default function TranslatedProductCard({
  product,
  compact = false,
}: TranslatedProductCardProps) {
  const t = useTranslations("products");

  // Create a mapping of product slugs to translation keys
  const getTranslatedName = (slug: string) => {
    const translationMap: Record<string, string> = {
      "premium-black-niqab": t("premiumBlackNiqab"),
      "elegant-abaya": t("elegantAbaya"),
      "soft-jersey-hijab": t("softJerseyHijab"),
      "flowy-isdalat": t("flowyIsdalat"),
      "classic-black-abaya": t("classicBlackAbaya"),
      "luxury-niqab-set": t("luxuryNiqabSet"),
      "modern-hijab-collection": t("modernHijabCollection"),
      "elegant-isdalat-set": t("elegantIsdatatSet"),
    };

    return translationMap[slug] || product.name;
  };

  const getTranslatedDescription = (slug: string) => {
    const translationMap: Record<string, string> = {
      "premium-black-niqab": t("premiumBlackNiqabDesc"),
      "elegant-abaya": t("elegantAbayaDesc"),
      "soft-jersey-hijab": t("softJerseyHijabDesc"),
      "flowy-isdalat": t("flowyIsdatatDesc"),
      "classic-black-abaya": t("classicBlackAbayaDesc"),
      "luxury-niqab-set": t("luxuryNiqabSetDesc"),
      "modern-hijab-collection": t("modernHijabCollectionDesc"),
      "elegant-isdalat-set": t("elegantIsdatatSetDesc"),
    };

    return translationMap[slug] || product.description;
  };

  // Create translated product object
  const translatedProduct: Product = {
    ...product,
    name: getTranslatedName(product.slug),
    description: getTranslatedDescription(product.slug),
  };

  return <ProductCard product={translatedProduct} compact={compact} />;
}
