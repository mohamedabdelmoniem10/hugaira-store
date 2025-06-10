"use client";

import { ReactNode, useState } from 'react';
import AdminSidebar from '@/components/navigation/admin-sidebar';
import AdminHeader from '@/components/navigation/admin-header';
import { cn } from '@/lib/utils';

interface AdminLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function AdminLayout({ children, className }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-beige-light">
      <AdminSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminHeader toggleSidebar={toggleSidebar} />
        <main className={cn("flex-1 overflow-y-auto p-4 md:p-6", className)}>
          {children}
        </main>
      </div>
    </div>
  );
}