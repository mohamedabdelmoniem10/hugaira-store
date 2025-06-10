"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, Share2, ShoppingBag, Star } from "lucide-react";
import { formatCurrency, getDiscountPercentage } from "@/lib/utils";
import { useCart } from "@/contexts/cart-context";
import { useToast } from "@/hooks/use-toast";
import QuantitySelector from "./quantity-selector";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

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
    <div className="space-y-6">
      {/* Product Badges */}
      <div className="flex flex-wrap gap-2">
        {product.newArrival && <Badge variant="secondary">New Arrival</Badge>}
        {product.bestSeller && <Badge variant="default">Best Seller</Badge>}
        {product.featured && <Badge variant="outline">Featured</Badge>}
      </div>

      {/* Product Title */}
      <div>
        <h1 className="text-3xl md:text-4xl font-playfair mb-2">
          {product.name}
        </h1>
        <p className="text-muted-foreground capitalize">{product.category}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          (4.0) • 24 reviews
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-3xl font-medium">
          {formatCurrency(finalPrice)}
        </span>
        {hasDiscount && (
          <>
            <span className="text-xl text-muted-foreground line-through">
              {formatCurrency(product.price)}
            </span>
            <Badge className="bg-destructive text-destructive-foreground">
              -{getDiscountPercentage(product.price, product.salePrice!)}% OFF
            </Badge>
          </>
        )}
      </div>

      {/* Description */}
      <div>
        <p className="text-muted-foreground leading-relaxed">
          {product.description}
        </p>
      </div>

      <Separator />

      {/* Color Selection */}
      {product.colors.length > 1 && (
        <div className="space-y-3">
          <h3 className="font-medium">
            Color:{" "}
            <span className="font-normal text-muted-foreground">
              {selectedColor}
            </span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 border rounded-md text-sm transition-all ${
                  selectedColor === color
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Size Selection */}
      {product.sizes.length > 1 && (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">
              Size:{" "}
              <span className="font-normal text-muted-foreground">
                {selectedSize}
              </span>
            </h3>
            <button className="text-sm text-primary hover:underline">
              Size Guide
            </button>
          </div>
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {product.sizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Quantity */}
      <div className="space-y-3">
        <h3 className="font-medium">Quantity</h3>
        <QuantitySelector
          quantity={quantity}
          onIncrease={() =>
            setQuantity((prev) => Math.min(prev + 1, product.stockQuantity))
          }
          onDecrease={() => setQuantity((prev) => Math.max(prev - 1, 1))}
          max={product.stockQuantity}
        />
      </div>

      <Separator />

      {/* Action Buttons */}
      <div className="space-y-4">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full gap-2"
          size="lg"
        >
          <ShoppingBag className="h-5 w-5" />
          Add to Cart
        </Button>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="gap-2">
            <Heart className="h-4 w-4" />
            Add to Wishlist
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
          className={`w-2 h-2 rounded-full ${
            product.inStock ? "bg-green-500" : "bg-red-500"
          }`}
        />
        <span
          className={`font-medium ${
            product.inStock ? "text-green-700" : "text-red-700"
          }`}
        >
          {product.inStock
            ? `In Stock (${product.stockQuantity} available)`
            : "Out of Stock"}
        </span>
      </div>

      {/* Product Features */}
      <div className="bg-beige-light/30 rounded-lg p-4 space-y-2">
        <h4 className="font-medium text-brown-dark">Product Features</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Premium quality materials</li>
          <li>• Comfortable all-day wear</li>
          <li>• Easy care and maintenance</li>
          <li>• Elegant and modest design</li>
        </ul>
      </div>

      {/* Shipping Info */}
      <div className="text-sm text-muted-foreground space-y-1">
        <p>🚚 Free shipping on orders over $75</p>
        <p>📦 Ships within 1-2 business days</p>
        <p>↩️ 30-day return policy</p>
      </div>
    </div>
  );
}
