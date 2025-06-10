"use client";

import { Card, CardContent } from "@/components/ui/card";

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface CampaignBenefitsProps {
  benefits: Benefit[];
}

export default function CampaignBenefits({ benefits }: CampaignBenefitsProps) {
  return (
    <section className="py-16 bg-beige-light/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">
            Why Choose Our Summer Collection?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the unique benefits that make our summer collection perfect
            for the modern Muslim woman.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="text-4xl mb-4">{benefit.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-medium mb-3 text-brown-dark">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto border border-beige-medium/20">
            <h3 className="text-xl font-playfair mb-3 text-brown-dark">
              Crafted with Care
            </h3>
            <p className="text-muted-foreground">
              Every piece in our summer collection is thoughtfully designed with
              the needs of Muslim women in mind. From breathable fabrics to
              elegant cuts, we ensure comfort without compromising on style or
              modesty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
