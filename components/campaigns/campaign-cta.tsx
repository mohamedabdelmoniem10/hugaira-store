"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CampaignCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  urgency?: string;
  backgroundColor?: string;
}

export default function CampaignCTA({
  title,
  description,
  buttonText,
  buttonLink,
  urgency,
  backgroundColor = "bg-gradient-to-r from-brown-medium to-brown-dark",
}: CampaignCTAProps) {
  return (
    <section
      className={`py-16 ${backgroundColor} text-white relative overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          {urgency && (
            <Badge className="bg-destructive text-destructive-foreground mb-6 text-sm px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              {urgency}
            </Badge>
          )}

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-playfair mb-6">{title}</h2>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* CTA Button */}
          <Link href={buttonLink}>
            <Button
              size="lg"
              className="bg-white text-brown-dark hover:bg-white/90 text-lg px-8 py-4 h-auto group"
            >
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold">Free Shipping</div>
              <div className="text-sm text-white/80">On orders over $75</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">30-Day Returns</div>
              <div className="text-sm text-white/80">Hassle-free returns</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">24/7 Support</div>
              <div className="text-sm text-white/80">Always here to help</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
