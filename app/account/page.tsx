import { Metadata } from "next";
import MainLayout from "@/components/layouts/main-layout";
import { User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "My Account | Hugaira Store",
  description: "Manage your account, orders, and preferences.",
  robots: "noindex, nofollow",
};

export default function AccountPage() {
  return (
    <MainLayout>
      <div className="container-custom py-8">
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-beige-light rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="h-12 w-12 text-brown-medium" />
          </div>

          <h1 className="text-3xl md:text-4xl font-playfair mb-4">
            My Account
          </h1>

          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Sign in to access your account, view orders, and manage your
            preferences.
          </p>

          <div className="space-y-4">
            <Button size="lg">Sign In</Button>

            <div>
              <Button variant="outline" size="lg">
                Create Account
              </Button>
            </div>

            <div className="pt-4">
              <Button variant="link" asChild>
                <a href="/products" className="gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  Continue Shopping
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
