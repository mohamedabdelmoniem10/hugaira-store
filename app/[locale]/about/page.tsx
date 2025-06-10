import { Metadata } from "next";
import MainLayout from "@/components/layouts/main-layout";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Truck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Hugaira Store - Our Story & Mission",
  description:
    "Learn about Hugaira Store's mission to provide elegant, modest fashion for Muslim women. Discover our story, values, and commitment to quality.",
  keywords:
    "about hugaira store, modest fashion story, islamic clothing brand, muslim women fashion, our mission",
  openGraph: {
    title: "About Hugaira Store - Our Story & Mission",
    description: "Elegant modest fashion for the modern Muslim woman",
    images: ["/images/about-hero.jpg"],
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-brown-medium" />,
      title: "Passion for Modesty",
      description:
        "We believe that modesty is beautiful and empowering. Every piece we create celebrates the elegance of modest fashion.",
    },
    {
      icon: <Shield className="h-8 w-8 text-brown-medium" />,
      title: "Quality Commitment",
      description:
        "We use only the finest materials and craftsmanship to ensure our garments are both beautiful and durable.",
    },
    {
      icon: <Users className="h-8 w-8 text-brown-medium" />,
      title: "Community First",
      description:
        "Our customers are at the heart of everything we do. We listen, learn, and grow together as a community.",
    },
    {
      icon: <Truck className="h-8 w-8 text-brown-medium" />,
      title: "Reliable Service",
      description:
        "From fast shipping to excellent customer service, we're committed to providing an exceptional experience.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/6169054/pexels-photo-6169054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About Hugaira Store"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-playfair mb-6">
                Our Story
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                Empowering Muslim women through elegant, modest fashion that
                celebrates both tradition and modernity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Hugaira Store, we believe that every Muslim woman deserves
                  to feel confident, beautiful, and comfortable in her clothing.
                  Our mission is to provide high-quality, elegant modest fashion
                  that honors Islamic values while embracing contemporary style.
                </p>
                <p>
                  Founded with love and dedication, we understand the unique
                  needs of Muslim women when it comes to modest clothing. From
                  breathable niqabs to flowing abayas, from versatile hijabs to
                  traditional isdalat, every piece in our collection is
                  carefully designed and selected.
                </p>
                <p>
                  We're more than just a clothing store – we're a community of
                  women supporting women, celebrating our faith, and expressing
                  our individual style through modest fashion.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/8533364/pexels-photo-8533364.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-beige-light/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do, from design to customer
              service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-lg font-medium mb-3 text-brown-dark">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-playfair mb-6">
                How We Started
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hugaira Store was born from a simple yet powerful vision: to
                  create a space where Muslim women could find beautiful,
                  high-quality modest clothing that truly understands their
                  needs.
                </p>
                <p>
                  Our founder, inspired by her own journey of finding the
                  perfect modest wear, decided to create a brand that would
                  serve the diverse and beautiful Muslim community. Starting
                  with a small collection of carefully curated pieces, we've
                  grown into a trusted destination for modest fashion.
                </p>
                <p>
                  Today, we're proud to serve thousands of women worldwide,
                  helping them express their faith and style with confidence and
                  grace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-brown-medium to-brown-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">
            Join Our Community
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Become part of our growing family of confident, stylish Muslim
            women. Follow us on social media and stay updated with our latest
            collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-white text-brown-dark hover:bg-white/90 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Shop Our Collection
            </a>
            <a
              href="#"
              className="border border-white text-white hover:bg-white hover:text-brown-dark px-8 py-3 rounded-md font-medium transition-colors"
            >
              Follow Us
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
