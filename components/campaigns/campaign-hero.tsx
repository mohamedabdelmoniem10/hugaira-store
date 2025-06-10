"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CampaignHeroProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  discount?: string;
  discountCode?: string;
  validUntil?: string;
}

export default function CampaignHero({
  title,
  subtitle,
  description,
  heroImage,
  discount,
  discountCode,
  validUntil,
}: CampaignHeroProps) {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl text-white">
            {discount && (
              <Badge className="bg-destructive text-destructive-foreground mb-4 text-lg px-4 py-2">
                {discount}
              </Badge>
            )}

            <h1 className="text-4xl md:text-6xl font-playfair mb-4">{title}</h1>

            <h2 className="text-xl md:text-2xl mb-6 text-white/90">
              {subtitle}
            </h2>

            <p className="text-lg mb-8 text-white/80 leading-relaxed">
              {description}
            </p>

            {discountCode && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 border border-white/20">
                <p className="text-sm mb-2">Use code:</p>
                <p className="text-2xl font-bold tracking-wider">
                  {discountCode}
                </p>
                {validUntil && (
                  <p className="text-sm text-white/80 mt-2">
                    Valid until {validUntil}
                  </p>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-brown-dark hover:bg-white/90"
              >
                Shop Collection
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brown-dark"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
