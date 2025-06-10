import { Metadata } from "next";
import MainLayout from "@/components/layouts/main-layout";
import CampaignHero from "@/components/campaigns/campaign-hero";
import CampaignProducts from "@/components/campaigns/campaign-products";
import CampaignBenefits from "@/components/campaigns/campaign-benefits";
import CampaignCTA from "@/components/campaigns/campaign-cta";

export const metadata: Metadata = {
  title: "Summer Collection 2024 | Hugaira Store - Breathable Modest Fashion",
  description:
    "Discover our breathable summer collection featuring lightweight niqabs, abayas, and hijabs perfect for warm weather. Shop now with special summer discounts!",
  keywords:
    "summer modest fashion, breathable niqab, lightweight abaya, summer hijab, muslim women clothing",
  openGraph: {
    title: "Summer Collection 2024 | Hugaira Store",
    description: "Breathable and elegant modest fashion for summer",
    images: ["/images/summer-collection-hero.jpg"],
  },
};

export default function SummerCollectionPage() {
  const campaignData = {
    title: "Summer Collection 2024",
    subtitle: "Breathable Elegance for Warm Days",
    description:
      "Stay cool and elegant with our specially curated summer collection featuring breathable fabrics and lightweight designs.",
    heroImage:
      "https://images.pexels.com/photos/6169054/pexels-photo-6169054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    discount: "25% OFF",
    discountCode: "SUMMER25",
    validUntil: "August 31, 2024",
  };

  return (
    <MainLayout>
      {/* Campaign Hero */}
      <CampaignHero {...campaignData} />

      {/* Campaign Benefits */}
      <CampaignBenefits
        benefits={[
          {
            title: "Breathable Fabrics",
            description:
              "Made with lightweight, breathable materials perfect for summer weather",
            icon: "🌬️",
          },
          {
            title: "UV Protection",
            description:
              "Our fabrics provide natural protection from harmful UV rays",
            icon: "☀️",
          },
          {
            title: "Quick Dry",
            description:
              "Moisture-wicking properties keep you comfortable all day",
            icon: "💧",
          },
          {
            title: "Easy Care",
            description:
              "Machine washable and wrinkle-resistant for easy maintenance",
            icon: "✨",
          },
        ]}
      />

      {/* Featured Products */}
      <CampaignProducts
        title="Summer Essentials"
        subtitle="Handpicked pieces for the perfect summer wardrobe"
        category="summer"
      />

      {/* Call to Action */}
      <CampaignCTA
        title="Don't Miss Out!"
        description="Limited time offer - Get 25% off your entire summer collection purchase"
        buttonText="Shop Summer Collection"
        buttonLink="/products?category=summer"
        urgency="Offer ends in 15 days"
      />
    </MainLayout>
  );
}
