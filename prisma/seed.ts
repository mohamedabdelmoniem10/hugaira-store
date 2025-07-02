import { PrismaClient } from "../lib/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: "niqab" },
      update: {},
      create: {
        name: "Niqab",
        slug: "niqab",
        description: "High-quality niqabs for modest coverage",
        image: "/categories/niqab.jpg",
      },
    }),
    prisma.category.upsert({
      where: { slug: "abaya" },
      update: {},
      create: {
        name: "Abaya",
        slug: "abaya",
        description: "Elegant abayas for everyday wear",
        image: "/categories/abaya.jpg",
      },
    }),
    prisma.category.upsert({
      where: { slug: "hijab" },
      update: {},
      create: {
        name: "Hijab",
        slug: "hijab",
        description: "Beautiful hijabs in various styles and colors",
        image: "/categories/hijab.jpg",
      },
    }),
    prisma.category.upsert({
      where: { slug: "isdalat" },
      update: {},
      create: {
        name: "Isdalat",
        slug: "isdalat",
        description: "Traditional isdalat with modern touches",
        image: "/categories/isdalat.jpg",
      },
    }),
    prisma.category.upsert({
      where: { slug: "accessories" },
      update: {},
      create: {
        name: "Accessories",
        slug: "accessories",
        description: "Modest fashion accessories",
        image: "/categories/accessories.jpg",
      },
    }),
  ]);

  console.log("✅ Categories created");

  // Create products
  const products = [
    {
      name: "Elegant Black Niqab",
      slug: "elegant-black-niqab",
      price: 45.99,
      salePrice: 39.99,
      images: [
        "/495197779_122131807988757034_5860193144837878143_n.jpg",
        "/495199314_122131523318757034_5711690915345995115_n.jpg",
      ],
      description:
        "Elegant and comfortable black niqab made from premium breathable fabric. Perfect for daily wear with superior comfort and coverage.",
      categoryId: categories.find((c) => c.slug === "niqab")!.id,
      colors: ["Black", "Navy"],
      sizes: ["One Size"],
      materials: ["Cotton", "Polyester"],
      newArrival: true,
      inStock: true,
      stockQuantity: 50,
    },
    {
      name: "Premium Abaya - Navy Blue",
      slug: "premium-abaya-navy-blue",
      price: 89.99,
      salePrice: 79.99,
      images: [
        "/495225934_122131532288757034_6018468506385611880_n.jpg",
        "/495243056_122131532234757034_6798505256414445517_n.jpg",
      ],
      description:
        "Premium quality navy blue abaya with elegant design and comfortable fit. Made from high-quality fabrics for durability and style.",
      categoryId: categories.find((c) => c.slug === "abaya")!.id,
      colors: ["Navy", "Black", "Brown"],
      sizes: ["S", "M", "L", "XL"],
      materials: ["Crepe", "Polyester"],
      bestSeller: true,
      inStock: true,
      stockQuantity: 30,
    },
    {
      name: "Soft Cotton Hijab Set",
      slug: "soft-cotton-hijab-set",
      price: 24.99,
      salePrice: 19.99,
      images: [
        "/495274758_122131882922757034_654105958105104116_n.jpg",
        "/495301897_122131886492757034_385987443618006442_n.jpg",
      ],
      description:
        "Set of 3 soft cotton hijabs in beautiful colors. Breathable and comfortable for all-day wear.",
      categoryId: categories.find((c) => c.slug === "hijab")!.id,
      colors: ["Beige", "Pink", "White"],
      sizes: ["One Size"],
      materials: ["Cotton"],
      newArrival: true,
      featured: true,
      inStock: true,
      stockQuantity: 100,
    },
    {
      name: "Traditional Isdalat",
      slug: "traditional-isdalat",
      price: 65.99,
      images: [
        "/495306007_122131884902757034_8762825755598924476_n.jpg",
        "/495307407_122131809236757034_1387679476519515910_n.jpg",
      ],
      description:
        "Traditional isdalat with authentic design and premium quality. Perfect for special occasions and daily wear.",
      categoryId: categories.find((c) => c.slug === "isdalat")!.id,
      colors: ["Black", "Brown"],
      sizes: ["S", "M", "L"],
      materials: ["Cotton", "Linen"],
      inStock: true,
      stockQuantity: 25,
    },
    {
      name: "Luxury Silk Hijab",
      slug: "luxury-silk-hijab",
      price: 39.99,
      images: [
        "/495319371_122131523216757034_7407042861886818665_n.jpg",
        "/495328619_122131881890757034_3161630345429672025_n.jpg",
      ],
      description:
        "Luxurious silk hijab with beautiful drape and elegant finish. Premium quality for special occasions.",
      categoryId: categories.find((c) => c.slug === "hijab")!.id,
      colors: ["Gold", "Silver", "Rose"],
      sizes: ["One Size"],
      materials: ["Silk"],
      featured: true,
      inStock: true,
      stockQuantity: 40,
    },
    {
      name: "Embroidered Abaya",
      slug: "embroidered-abaya",
      price: 129.99,
      images: [
        "/495336960_122131881842757034_8503108548056249884_n.jpg",
        "/495347431_122131523366757034_1160375165264339560_n.jpg",
      ],
      description:
        "Beautiful embroidered abaya with intricate details and premium quality. Perfect for special occasions.",
      categoryId: categories.find((c) => c.slug === "abaya")!.id,
      colors: ["Black", "Navy", "Burgundy"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      materials: ["Crepe", "Silk"],
      featured: true,
      bestSeller: true,
      inStock: true,
      stockQuantity: 20,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    });
  }

  console.log("✅ Products created");

  // Create a sample admin user
  await prisma.user.upsert({
    where: { email: "admin@hugaira.com" },
    update: {},
    create: {
      email: "admin@hugaira.com",
      name: "Admin User",
      role: "ADMIN",
    },
  });

  console.log("✅ Admin user created");
  console.log("🎉 Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
