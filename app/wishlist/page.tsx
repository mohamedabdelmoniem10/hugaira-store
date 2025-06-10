import { Metadata } from "next";
import MainLayout from "@/components/layouts/main-layout";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Wishlist | Hugaira Store",
  description: "Save your favorite modest fashion items for later.",
  robots: "noindex, nofollow",
};

export default function WishlistPage() {
  return (
    <MainLayout>
      <div className="container-custom py-8">
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-beige-light rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-12 w-12 text-brown-medium" />
          </div>

          <h1 className="text-3xl md:text-4xl font-playfair mb-4">
            Your Wishlist
          </h1>

          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Save your favorite items here and shop them later. Sign in to sync
            your wishlist across devices.
          </p>

          <div className="space-y-4">
            <Button asChild size="lg">
              <a href="/products" className="gap-2">
                <ShoppingBag className="h-5 w-5" />
                Start Shopping
              </a>
            </Button>

            <div>
              <Button variant="link" asChild>
                <a href="/account">Sign in to save items</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
