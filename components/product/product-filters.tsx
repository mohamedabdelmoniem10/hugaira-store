"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { X, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  colors: string[];
  sizes: string[];
  materials: string[];
  inStock: boolean;
}

const initialFilters: FilterState = {
  categories: [],
  priceRange: [0, 200],
  colors: [],
  sizes: [],
  materials: [],
  inStock: false,
};

const categories = [
  { id: "niqab", label: "Niqabs", count: 24 },
  { id: "abaya", label: "Abayas", count: 45 },
  { id: "hijab", label: "Hijabs", count: 67 },
  { id: "isdalat", label: "Isdalat", count: 18 },
  { id: "accessories", label: "Accessories", count: 32 },
];

const colors = [
  { id: "black", label: "Black", hex: "#000000" },
  { id: "navy", label: "Navy", hex: "#1e3a8a" },
  { id: "brown", label: "Brown", hex: "#92400e" },
  { id: "beige", label: "Beige", hex: "#d2b48c" },
  { id: "white", label: "White", hex: "#ffffff" },
  { id: "gray", label: "Gray", hex: "#6b7280" },
];

const sizes = [
  { id: "xs", label: "XS" },
  { id: "s", label: "S" },
  { id: "m", label: "M" },
  { id: "l", label: "L" },
  { id: "xl", label: "XL" },
  { id: "xxl", label: "XXL" },
  { id: "one-size", label: "One Size" },
];

const materials = [
  { id: "cotton", label: "Cotton" },
  { id: "silk", label: "Silk" },
  { id: "polyester", label: "Polyester" },
  { id: "crepe", label: "Crepe" },
  { id: "chiffon", label: "Chiffon" },
  { id: "linen", label: "Linen" },
];

export default function ProductFilters() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, categoryId]
        : prev.categories.filter((id) => id !== categoryId),
    }));
  };

  const handleColorChange = (colorId: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      colors: checked
        ? [...prev.colors, colorId]
        : prev.colors.filter((id) => id !== colorId),
    }));
  };

  const handleSizeChange = (sizeId: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      sizes: checked
        ? [...prev.sizes, sizeId]
        : prev.sizes.filter((id) => id !== sizeId),
    }));
  };

  const handleMaterialChange = (materialId: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      materials: checked
        ? [...prev.materials, materialId]
        : prev.materials.filter((id) => id !== materialId),
    }));
  };

  const handlePriceChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: [value[0], value[1]],
    }));
  };

  const clearAllFilters = () => {
    setFilters(initialFilters);
  };

  const getActiveFiltersCount = () => {
    return (
      filters.categories.length +
      filters.colors.length +
      filters.sizes.length +
      filters.materials.length +
      (filters.inStock ? 1 : 0)
    );
  };

  const removeFilter = (type: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [type]: Array.isArray(prev[type])
        ? (prev[type] as string[]).filter((item) => item !== value)
        : prev[type],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between"
        >
          <span className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
            {getActiveFiltersCount() > 0 && (
              <Badge variant="secondary" className="ml-2">
                {getActiveFiltersCount()}
              </Badge>
            )}
          </span>
        </Button>
      </div>

      {/* Filter Content */}
      <div
        className={cn(
          "space-y-6",
          "lg:block",
          isOpen ? "block" : "hidden lg:block"
        )}
      >
        {/* Active Filters */}
        {getActiveFiltersCount() > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Active Filters</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear All
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.categories.map((category) => (
                <Badge key={category} variant="secondary" className="gap-1">
                  {categories.find((c) => c.id === category)?.label}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeFilter("categories", category)}
                  />
                </Badge>
              ))}
              {filters.colors.map((color) => (
                <Badge key={color} variant="secondary" className="gap-1">
                  {colors.find((c) => c.id === color)?.label}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeFilter("colors", color)}
                  />
                </Badge>
              ))}
              {filters.sizes.map((size) => (
                <Badge key={size} variant="secondary" className="gap-1">
                  {sizes.find((s) => s.id === size)?.label}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeFilter("sizes", size)}
                  />
                </Badge>
              ))}
              {filters.materials.map((material) => (
                <Badge key={material} variant="secondary" className="gap-1">
                  {materials.find((m) => m.id === material)?.label}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeFilter("materials", material)}
                  />
                </Badge>
              ))}
            </div>
            <Separator />
          </div>
        )}

        {/* Categories */}
        <div className="space-y-3">
          <h3 className="font-medium">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={filters.categories.includes(category.id)}
                    onCheckedChange={(checked) =>
                      handleCategoryChange(category.id, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={category.id}
                    className="text-sm cursor-pointer"
                  >
                    {category.label}
                  </label>
                </div>
                <span className="text-xs text-muted-foreground">
                  ({category.count})
                </span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Price Range */}
        <div className="space-y-3">
          <h3 className="font-medium">Price Range</h3>
          <div className="px-2">
            <Slider
              value={filters.priceRange}
              onValueChange={handlePriceChange}
              max={200}
              min={0}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Colors */}
        <div className="space-y-3">
          <h3 className="font-medium">Colors</h3>
          <div className="grid grid-cols-3 gap-2">
            {colors.map((color) => (
              <div key={color.id} className="flex items-center space-x-2">
                <Checkbox
                  id={color.id}
                  checked={filters.colors.includes(color.id)}
                  onCheckedChange={(checked) =>
                    handleColorChange(color.id, checked as boolean)
                  }
                />
                <label
                  htmlFor={color.id}
                  className="flex items-center space-x-2 text-sm cursor-pointer"
                >
                  <div
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span>{color.label}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Sizes */}
        <div className="space-y-3">
          <h3 className="font-medium">Sizes</h3>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <div key={size.id} className="flex items-center space-x-2">
                <Checkbox
                  id={size.id}
                  checked={filters.sizes.includes(size.id)}
                  onCheckedChange={(checked) =>
                    handleSizeChange(size.id, checked as boolean)
                  }
                />
                <label htmlFor={size.id} className="text-sm cursor-pointer">
                  {size.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Materials */}
        <div className="space-y-3">
          <h3 className="font-medium">Materials</h3>
          <div className="space-y-2">
            {materials.map((material) => (
              <div key={material.id} className="flex items-center space-x-2">
                <Checkbox
                  id={material.id}
                  checked={filters.materials.includes(material.id)}
                  onCheckedChange={(checked) =>
                    handleMaterialChange(material.id, checked as boolean)
                  }
                />
                <label htmlFor={material.id} className="text-sm cursor-pointer">
                  {material.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* In Stock */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="in-stock"
              checked={filters.inStock}
              onCheckedChange={(checked) =>
                setFilters((prev) => ({ ...prev, inStock: checked as boolean }))
              }
            />
            <label htmlFor="in-stock" className="text-sm cursor-pointer">
              In Stock Only
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
