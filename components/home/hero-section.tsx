"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
  id: number;
  titleKey: string;
  subtitleKey: string;
  imageUrl: string;
  buttonTextKey: string;
  buttonLink: string;
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations("home");

  const slides: Slide[] = [
    {
      id: 1,
      titleKey: "heroTitle",
      subtitleKey: "heroSubtitle",
      imageUrl: "/495779171_122131808096757034_238734371631782777_n.jpg",
      buttonTextKey: "shopNow",
      buttonLink: "/products",
    },
    {
      id: 2,
      titleKey: "heroTitle",
      subtitleKey: "heroSubtitle",
      imageUrl: "/495812652_122131808048757034_6126676246664496983_n.jpg",
      buttonTextKey: "shopNow",
      buttonLink: "/products/niqab",
    },
    {
      id: 3,
      titleKey: "heroTitle",
      subtitleKey: "heroSubtitle",
      imageUrl: "/495197779_122131807988757034_5860193144837878143_n.jpg",
      buttonTextKey: "shopNow",
      buttonLink: "/products/abaya",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image
            src={slide.imageUrl}
            alt={t(slide.titleKey)}
            fill
            className="object-cover"
            priority={index === 0}
          />

          <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair mb-4 max-w-4xl fade-in">
              {t(slide.titleKey)}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl slide-up">
              {t(slide.subtitleKey)}
            </p>
            <Link href={slide.buttonLink}>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 transition-all duration-300 font-medium px-8 py-3"
              >
                {t(slide.buttonTextKey)}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
