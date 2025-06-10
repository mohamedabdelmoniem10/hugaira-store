import { Metadata } from "next";
import MainLayout from "@/components/layouts/main-layout";
import CheckoutForm from "@/components/checkout/checkout-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Checkout | Hugaira Store",
  description: "Complete your purchase securely and safely.",
  robots: "noindex, nofollow", // Don't index checkout pages
};

export default function CheckoutPage() {
  return (
    <MainLayout>
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>Checkout</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-playfair mb-4">
            Secure Checkout
          </h1>
          <p className="text-muted-foreground">
            Complete your order safely and securely
          </p>
        </div>

        {/* Checkout Form */}
        <CheckoutForm />
      </div>
    </MainLayout>
  );
}
