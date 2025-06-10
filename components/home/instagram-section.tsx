"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { useTranslations } from "next-intl";

export default function InstagramSection() {
  const t = useTranslations("instagram");

  const instagramPosts = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/6044228/pexels-photo-6044228.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://instagram.com",
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/8533241/pexels-photo-8533241.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://instagram.com",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://instagram.com",
    },
    {
      id: 4,
      imageUrl:
        "https://images.pexels.com/photos/8460848/pexels-photo-8460848.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://instagram.com",
    },
    {
      id: 5,
      imageUrl:
        "https://images.pexels.com/photos/6169054/pexels-photo-6169054.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://instagram.com",
    },
    {
      id: 6,
      imageUrl:
        "https://images.pexels.com/photos/11811802/pexels-photo-11811802.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://instagram.com",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">
            {t("title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-md"
            >
              <Image
                src={post.imageUrl}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brown-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white h-6 w-6" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="gap-2">
              <Instagram className="h-4 w-4" />
              @hugairastore
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
