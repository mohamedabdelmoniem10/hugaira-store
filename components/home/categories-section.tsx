"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  titleKey: string;
  image: string;
  href: string;
  position?: "left" | "right" | "center";
}

function CategoryCard({
  titleKey,
  image,
  href,
  position = "center",
}: CategoryCardProps) {
  const t = useTranslations("categories");
  const tHome = useTranslations("home");

  return (
    <Link
      href={href}
      className="group block relative overflow-hidden rounded-lg aspect-[3/4]"
    >
      <Image
        src={image}
        alt={t(titleKey)}
        fill
        className={cn(
          "object-cover transition-transform duration-700 ease-in-out group-hover:scale-105",
          position === "left" && "object-left",
          position === "right" && "object-right"
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex flex-col items-center text-center">
        <h3 className="text-white text-xl md:text-2xl font-playfair mb-2">
          {t(titleKey)}
        </h3>
        <span className="inline-flex items-center text-white/90 text-sm transition-all group-hover:text-white group-hover:translate-x-1">
          {tHome("shopNow")} <ChevronRight className="h-4 w-4 ml-1" />
        </span>
      </div>
    </Link>
  );
}

export default function CategoriesSection() {
  const t = useTranslations("navigation");

  return (
    <section className="py-16 bg-beige-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">
            {t("categories")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("categoriesDescription") ||
              "Explore our curated categories of modest fashion essentials, designed for style and comfort."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard
            titleKey="niqab"
            image="/495624155_122131807946757034_5370809766094691797_n.jpg"
            href="/products/niqab"
          />
          <CategoryCard
            titleKey="abaya"
            image="/496483246_122131807904757034_777982778893133253_n.jpg"
            href="/products/abaya"
            position="right"
          />
          <CategoryCard
            titleKey="hijab"
            image="/496148700_122131809410757034_4543543866679005130_n.jpg"
            href="/products/hijab"
          />
          <CategoryCard
            titleKey="isdalat"
            image="/496254006_122131809368757034_1149604367999000288_n.jpg"
            href="/products/isdalat"
            position="left"
          />
        </div>
      </div>
    </section>
  );
}
