import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Lato, Amiri, Cairo } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/contexts/cart-context";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-lato",
});

// Arabic fonts
const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-amiri",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Hugaira Store | Modern Fashion for Muslim Women",
  description:
    "Discover elegant, modest fashion for Muslim women. Shop our collection of niqabs, abayas, hijabs, and modest clothing.",
  keywords:
    "modest fashion, muslim clothing, hijab, niqab, abaya, isdalat, islamic clothing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${lato.variable} ${amiri.variable} ${cairo.variable} font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <CartProvider>
            {children}
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
