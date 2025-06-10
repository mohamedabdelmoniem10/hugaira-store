"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Product } from "@/lib/types";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn, formatCurrency, getDiscountPercentage } from "@/lib/utils";
import ProductQuickView from "@/components/product/product-quick-view";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export default function ProductCard({
  product,
  compact = false,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = useTranslations("common");
  const tCategories = useTranslations("categories");
  const locale = useLocale();

  const hasDiscount =
    product.salePrice !== undefined && product.salePrice < product.price;
  const isNew = product.newArrival;
  const isBestSeller = product.bestSeller;

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (product.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };

  return (
    <div
      className={cn(
        "product-card group",
        compact ? "max-w-[220px]" : "max-w-none"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        {/* Product Image */}
        <Link href={`/products/${product.slug}`}>
          <div className="relative h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-105">
            <Image
              src={product.images[currentImageIndex]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        </Link>

        {/* Product Badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
          {hasDiscount && (
            <Badge className="bg-destructive text-destructive-foreground">
              -{getDiscountPercentage(product.price, product.salePrice!)}%
            </Badge>
          )}
          {isNew && !hasDiscount && (
            <Badge className="bg-secondary text-secondary-foreground">
              {t("newArrival")}
            </Badge>
          )}
          {isBestSeller && !hasDiscount && !isNew && (
            <Badge className="bg-primary text-primary-foreground">
              {t("bestSeller")}
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div
          className={cn(
            "absolute right-2 top-2 z-10 flex flex-col gap-2 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full shadow-sm bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <Heart className="h-4 w-4" />
            <span className="sr-only">{t("addToWishlist")}</span>
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 rounded-full shadow-sm bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                <Eye className="h-4 w-4" />
                <span className="sr-only">{t("quickView")}</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] p-0">
              <ProductQuickView product={product} />
            </DialogContent>
          </Dialog>
        </div>

        {/* Add to Cart Button - Appears on Hover */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-2 transition-transform duration-300 ease-out",
            isHovered ? "translate-y-0" : "translate-y-full"
          )}
        >
          <Button className="w-full gap-2">
            <ShoppingBag className="h-4 w-4" />
            {t("addToCart")}
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3 flex flex-col">
        <Link href={`/products/${product.slug}`}>
          <h3
            className={cn(
              "font-medium hover:text-brown transition-colors line-clamp-1",
              compact ? "text-sm" : "text-base"
            )}
          >
            {product.name}
          </h3>
        </Link>

        {!compact && (
          <p className="text-muted-foreground text-sm line-clamp-1 mb-1">
            {tCategories(product.category) ||
              product.category.charAt(0).toUpperCase() +
                product.category.slice(1)}
          </p>
        )}

        <div
          className={cn(
            "flex items-center gap-2",
            compact ? "text-sm" : "text-base"
          )}
        >
          {hasDiscount ? (
            <>
              <span className="font-medium text-destructive">
                {formatCurrency(product.salePrice!, locale)}
              </span>
              <span className="text-muted-foreground line-through text-sm">
                {formatCurrency(product.price, locale)}
              </span>
            </>
          ) : (
            <span className="font-medium">
              {formatCurrency(product.price, locale)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
