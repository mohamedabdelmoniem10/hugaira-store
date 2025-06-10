"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Order {
  id: string;
  customer: string;
  email: string;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  date: string;
}

const mockOrders: Order[] = [
  {
    id: "ORD-001",
    customer: "Fatima Ahmed",
    email: "fatima@example.com",
    total: 89.99,
    status: "processing",
    date: "2024-01-15",
  },
  {
    id: "ORD-002",
    customer: "Aisha Mohammed",
    email: "aisha@example.com",
    total: 45.99,
    status: "shipped",
    date: "2024-01-14",
  },
  {
    id: "ORD-003",
    customer: "Khadija Hassan",
    email: "khadija@example.com",
    total: 129.99,
    status: "delivered",
    date: "2024-01-13",
  },
  {
    id: "ORD-004",
    customer: "Maryam Ali",
    email: "maryam@example.com",
    total: 65.99,
    status: "pending",
    date: "2024-01-12",
  },
  {
    id: "ORD-005",
    customer: "Zainab Omar",
    email: "zainab@example.com",
    total: 24.99,
    status: "processing",
    date: "2024-01-11",
  },
];

function getStatusColor(status: Order["status"]) {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "processing":
      return "bg-blue-100 text-blue-800";
    case "shipped":
      return "bg-purple-100 text-purple-800";
    case "delivered":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export default function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{order.id}</span>
                  <Badge className={getStatusColor(order.status)}>
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {order.customer}
                </p>
                <p className="text-xs text-muted-foreground">{order.email}</p>
              </div>

              <div className="text-right space-y-1">
                <p className="font-medium">{formatCurrency(order.total)}</p>
                <p className="text-xs text-muted-foreground">{order.date}</p>
                <Button variant="outline" size="sm">
                  <Eye className="h-3 w-3 mr-1" />
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Button variant="outline">View All Orders</Button>
        </div>
      </CardContent>
    </Card>
  );
}
