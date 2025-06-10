"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useCart } from "@/contexts/cart-context";
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  Heart,
  User,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import CartDrawer from "@/components/cart/cart-drawer";
import LanguageSwitcher from "@/components/navigation/language-switcher";

export default function MainNavbar() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const { itemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const t = useTranslations("navigation");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/products", label: t("allProducts") },
    { href: "/products/niqab", label: t("niqabs") },
    { href: "/products/abaya", label: t("abayas") },
    { href: "/products/hijab", label: t("hijabs") },
    { href: "/products/isdalat", label: t("isdalat") },
    { href: "/products/accessories", label: t("accessories") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-playfair font-medium">
            <span className="text-brown-dark">Hugaira</span>
            <span className="text-brown-light"> Store</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-foreground/80 hover:text-foreground transition-colors text-sm font-medium",
                pathname === link.href && "text-brown font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-3">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-foreground/80 hover:text-foreground"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Search */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground/80 hover:text-foreground"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="pt-16">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-full max-w-lg mx-auto">
                  <h2 className="text-2xl font-playfair mb-4 text-center">
                    {t("searchProducts") || "Search Products"}
                  </h2>
                  <div className="flex">
                    <Input
                      placeholder={
                        t("searchPlaceholder") || "Search for products..."
                      }
                      className="rounded-r-none"
                    />
                    <Button className="rounded-l-none">{t("search")}</Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Wishlist */}
          <Link href="/wishlist">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground/80 hover:text-foreground"
            >
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
          </Link>

          {/* Account */}
          <Link href="/account">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground/80 hover:text-foreground"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>

          {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground/80 hover:text-foreground relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-foreground/80 hover:text-foreground"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col h-full py-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-playfair">
                    {t("menu") || "Menu"}
                  </h2>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "py-2 px-4 rounded-md hover:bg-accent transition-colors",
                          pathname === link.href && "bg-accent font-medium"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto">
                  <div className="mb-4 flex justify-center">
                    <LanguageSwitcher />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link href="/account">
                      <Button variant="outline" className="w-full">
                        {t("account")}
                      </Button>
                    </Link>
                    <Link href="/orders">
                      <Button variant="outline" className="w-full">
                        Orders
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
