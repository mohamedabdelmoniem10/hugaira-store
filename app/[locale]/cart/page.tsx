import { Metadata } from "next";
import MainLayout from "@/components/layouts/main-layout";
import CartContent from "@/components/cart/cart-content";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Shopping Cart | Hugaira Store",
  description: "Review your selected items and proceed to checkout.",
};

export default function CartPage() {
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
              <BreadcrumbPage>Shopping Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-playfair mb-4">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground">
            Review your items and proceed to checkout
          </p>
        </div>

        {/* Cart Content */}
        <CartContent />
      </div>
    </MainLayout>
  );
}
