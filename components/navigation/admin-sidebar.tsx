"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, ShoppingBag, Users, Package, 
  BarChart2, Settings, Tag, FileText, 
  ImageIcon, LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface AdminSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function AdminSidebar({ isOpen, toggleSidebar }: AdminSidebarProps) {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/products', label: 'Products', icon: ShoppingBag },
    { href: '/admin/orders', label: 'Orders', icon: Package },
    { href: '/admin/customers', label: 'Customers', icon: Users },
    { href: '/admin/promotions', label: 'Promotions', icon: Tag },
    { href: '/admin/analytics', label: 'Analytics', icon: BarChart2 },
    { href: '/admin/banners', label: 'Banners', icon: ImageIcon },
    { href: '/admin/content', label: 'Content', icon: FileText },
    { href: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-40 h-screen bg-card transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-0 md:w-20",
        "md:relative md:block"
      )}
    >
      <div className="h-full flex flex-col">
        {/* Logo & Close Button */}
        <div className={cn(
          "flex items-center h-16 px-6",
          !isOpen && "md:justify-center"
        )}>
          <Link href="/admin" className={cn(
            "text-xl font-playfair font-medium",
            !isOpen && "md:hidden"
          )}>
            Hugaira Admin
          </Link>
          {!isOpen && (
            <span className="hidden md:block text-lg font-playfair">H</span>
          )}
        </div>
        
        <Separator />
        
        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              const Icon = item.icon;
              
              return (
                <li key={item.href}>
                  <Link href={item.href}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start",
                        isOpen ? "px-3" : "md:px-0 md:justify-center"
                      )}
                    >
                      <Icon className={cn(
                        "h-5 w-5",
                        isActive ? "text-secondary-foreground" : "text-muted-foreground"
                      )} />
                      <span className={cn(
                        "ml-3",
                        !isOpen && "md:hidden"
                      )}>
                        {item.label}
                      </span>
                    </Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Logout */}
        <div className="p-3">
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start",
              isOpen ? "px-3" : "md:px-0 md:justify-center"
            )}
          >
            <LogOut className="h-5 w-5 text-muted-foreground" />
            <span className={cn(
              "ml-3",
              !isOpen && "md:hidden"
            )}>
              Logout
            </span>
          </Button>
        </div>
      </div>
    </aside>
  );
}