"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Package,
  Users,
  BarChart3,
  Settings,
  ImageIcon,
} from "lucide-react";
import Link from "next/link";

const quickActions = [
  {
    title: "Add New Product",
    description: "Create a new product listing",
    icon: <Plus className="h-5 w-5" />,
    href: "/admin/products/new",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    title: "Manage Inventory",
    description: "Update stock levels",
    icon: <Package className="h-5 w-5" />,
    href: "/admin/products",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "View Customers",
    description: "Manage customer accounts",
    icon: <Users className="h-5 w-5" />,
    href: "/admin/customers",
    color: "bg-purple-500 hover:bg-purple-600",
  },
  {
    title: "Analytics",
    description: "View sales reports",
    icon: <BarChart3 className="h-5 w-5" />,
    href: "/admin/analytics",
    color: "bg-orange-500 hover:bg-orange-600",
  },
  {
    title: "Manage Banners",
    description: "Update homepage banners",
    icon: <ImageIcon className="h-5 w-5" />,
    href: "/admin/banners",
    color: "bg-pink-500 hover:bg-pink-600",
  },
  {
    title: "Settings",
    description: "Store configuration",
    icon: <Settings className="h-5 w-5" />,
    href: "/admin/settings",
    color: "bg-gray-500 hover:bg-gray-600",
  },
];

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {quickActions.map((action) => (
            <Link key={action.title} href={action.href}>
              <Button
                variant="outline"
                className="w-full justify-start h-auto p-4 hover:bg-accent"
              >
                <div
                  className={`p-2 rounded-md text-white mr-3 ${action.color}`}
                >
                  {action.icon}
                </div>
                <div className="text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {action.description}
                  </div>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
