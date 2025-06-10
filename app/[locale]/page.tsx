import HeroSection from "@/components/home/hero-section";
import FeaturedProducts from "@/components/home/featured-products";
import CategoriesSection from "@/components/home/categories-section";
import BenefitsSection from "@/components/home/benefits-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import InstagramSection from "@/components/home/instagram-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <BenefitsSection />
      <TestimonialsSection />
      <InstagramSection />
    </>
  );
}
