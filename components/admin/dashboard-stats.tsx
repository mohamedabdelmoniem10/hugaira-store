"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  Users,
  Package,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: React.ReactNode;
}

function StatCard({ title, value, change, changeType, icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div
          className={cn(
            "text-xs flex items-center gap-1",
            changeType === "positive" ? "text-green-600" : "text-red-600"
          )}
        >
          {changeType === "positive" ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          {change} from last month
        </div>
      </CardContent>
    </Card>
  );
}

export default function DashboardStats() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      changeType: "positive" as const,
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Orders",
      value: "2,350",
      change: "+180.1%",
      changeType: "positive" as const,
      icon: <ShoppingBag className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Customers",
      value: "1,234",
      change: "+19%",
      changeType: "positive" as const,
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Products",
      value: "156",
      change: "+5.2%",
      changeType: "positive" as const,
      icon: <Package className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
