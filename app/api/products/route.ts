import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const newArrival = searchParams.get("newArrival");
    const bestSeller = searchParams.get("bestSeller");
    const limit = searchParams.get("limit");
    const page = searchParams.get("page") || "1";

    const take = limit ? parseInt(limit) : undefined;
    const skip = take ? (parseInt(page) - 1) * take : undefined;

    // Build where clause
    const where: any = {};

    if (category) {
      where.category = {
        slug: category,
      };
    }

    if (featured === "true") {
      where.featured = true;
    }

    if (newArrival === "true") {
      where.newArrival = true;
    }

    if (bestSeller === "true") {
      where.bestSeller = true;
    }

    const products = await db.product.findMany({
      where,
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take,
      skip,
    });

    // Get total count for pagination
    const total = await db.product.count({ where });

    return NextResponse.json({
      products,
      pagination: {
        page: parseInt(page),
        limit: take || total,
        total,
        pages: take ? Math.ceil(total / take) : 1,
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
