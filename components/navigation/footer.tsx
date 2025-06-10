import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-beige text-foreground">
      <div className="container-custom py-12">
        {/* Newsletter Section */}
        <div className="floral-bg rounded-lg p-6 mb-10 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-playfair mb-3">Join Our Community</h3>
          <p className="text-muted-foreground mb-4">
            Subscribe to receive updates on new arrivals, special offers and styling tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="input-field"
              required
            />
            <Button type="submit" className="btn-primary">
              Subscribe
            </Button>
          </form>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="font-playfair text-lg mb-4">About Hugaira</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Hugaira Store offers elegant, modest fashion for Muslim women. Our collections are designed with quality, comfort, and style in mind.
            </p>
            <div className="flex space-x-3">
              <a href="https://instagram.com" className="text-brown hover:text-brown-dark transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" className="text-brown hover:text-brown-dark transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" className="text-brown hover:text-brown-dark transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="mailto:contact@hugairastore.com" className="text-brown hover:text-brown-dark transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/niqab" className="text-muted-foreground hover:text-foreground transition-colors">Niqabs</Link>
              </li>
              <li>
                <Link href="/products/abaya" className="text-muted-foreground hover:text-foreground transition-colors">Abayas</Link>
              </li>
              <li>
                <Link href="/products/hijab" className="text-muted-foreground hover:text-foreground transition-colors">Hijabs</Link>
              </li>
              <li>
                <Link href="/products/isdalat" className="text-muted-foreground hover:text-foreground transition-colors">Isdalat</Link>
              </li>
              <li>
                <Link href="/products/accessories" className="text-muted-foreground hover:text-foreground transition-colors">Accessories</Link>
              </li>
              <li>
                <Link href="/products/new-arrivals" className="text-muted-foreground hover:text-foreground transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link href="/products/best-sellers" className="text-muted-foreground hover:text-foreground transition-colors">Best Sellers</Link>
              </li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/customer-care" className="text-muted-foreground hover:text-foreground transition-colors">Customer Care</Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-muted-foreground hover:text-foreground transition-colors">Shipping Policy</Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-foreground transition-colors">Returns & Exchanges</Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-muted-foreground hover:text-foreground transition-colors">Size Guide</Link>
              </li>
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-foreground transition-colors">FAQs</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/our-story" className="text-muted-foreground hover:text-foreground transition-colors">Our Story</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hugaira Store. All rights reserved.</p>
          <p className="mt-1">Designed with ♥ for modest fashion.</p>
        </div>
      </div>
    </footer>
  );
}