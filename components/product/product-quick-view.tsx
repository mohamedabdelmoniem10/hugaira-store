"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ShoppingBag, Heart, Share2 } from "lucide-react";
import { cn, formatCurrency, getDiscountPercentage } from "@/lib/utils";
import { useCart } from "@/contexts/cart-context";
import { useToast } from "@/hooks/use-toast";
import QuantitySelector from "./quantity-selector";

interface ProductQuickViewProps {
  product: Product;
}

export default function ProductQuickView({ product }: ProductQuickViewProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { addItem } = useCart();
  const { toast } = useToast();

  const hasDiscount =
    product.salePrice !== undefined && product.salePrice < product.price;
  const finalPrice = hasDiscount ? product.salePrice! : product.price;

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedColor}-${selectedSize}`,
      productId: product.id,
      name: product.name,
      price: finalPrice,
      image: product.images[0],
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
    });

    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Product Images */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.images[currentImageIndex]}
            alt={`${product.name} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Thumbnail Images */}
        {product.images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={cn(
                  "relative aspect-square rounded-md overflow-hidden border-2 transition-all",
                  index === currentImageIndex
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-transparent hover:border-gray-300"
                )}
              >
                <Image
                  src={image}
                  alt={`${product.name} - Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 12vw"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            {product.newArrival && (
              <Badge variant="secondary">New Arrival</Badge>
            )}
            {product.bestSeller && <Badge variant="default">Best Seller</Badge>}
            {product.featured && <Badge variant="outline">Featured</Badge>}
          </div>
          <DialogTitle className="text-2xl font-playfair text-left">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-medium">
            {formatCurrency(finalPrice)}
          </span>
          {hasDiscount && (
            <>
              <span className="text-lg text-muted-foreground line-through">
                {formatCurrency(product.price)}
              </span>
              <Badge className="bg-destructive text-destructive-foreground">
                -{getDiscountPercentage(product.price, product.salePrice!)}% OFF
              </Badge>
            </>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {product.description}
        </p>

        <Separator />

        {/* Color Selection */}
        {product.colors.length > 1 && (
          <div className="space-y-2">
            <h4 className="font-medium text-sm">
              Color: <span className="font-normal">{selectedColor}</span>
            </h4>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    "px-3 py-1 border rounded-md text-sm transition-all",
                    selectedColor === color
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-gray-300 hover:border-gray-400"
                  )}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Size Selection */}
        {product.sizes.length > 1 && (
          <div className="space-y-2">
            <h4 className="font-medium text-sm">
              Size: <span className="font-normal">{selectedSize}</span>
            </h4>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "px-3 py-1 border rounded-md text-sm transition-all",
                    selectedSize === size
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-gray-300 hover:border-gray-400"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Quantity</h4>
          <QuantitySelector
            quantity={quantity}
            onIncrease={() =>
              setQuantity((prev) => Math.min(prev + 1, product.stockQuantity))
            }
            onDecrease={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            max={product.stockQuantity}
            small
          />
        </div>

        <Separator />

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full gap-2"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </Button>

          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="gap-2">
              <Heart className="h-4 w-4" />
              Wishlist
            </Button>

            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2 text-sm">
          <div
            className={cn(
              "w-2 h-2 rounded-full",
              product.inStock ? "bg-green-500" : "bg-red-500"
            )}
          />
          <span
            className={cn(
              "font-medium",
              product.inStock ? "text-green-700" : "text-red-700"
            )}
          >
            {product.inStock
              ? `In Stock (${product.stockQuantity} available)`
              : "Out of Stock"}
          </span>
        </div>
      </div>
    </div>
  );
}
