import { Metadata } from "next";
import MainLayout from "@/components/layouts/main-layout";
import ContactForm from "@/components/contact/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Hugaira Store - Get in Touch",
  description:
    "Contact Hugaira Store for any questions about our modest fashion collection. We're here to help with orders, sizing, and product information.",
  keywords:
    "contact hugaira store, customer service, modest fashion help, islamic clothing support",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-brown-medium" />,
      title: "Visit Our Store",
      details: [
        "123 Fashion Street",
        "Modest District, MD 12345",
        "United States",
      ],
    },
    {
      icon: <Phone className="h-6 w-6 text-brown-medium" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Toll-free: 1-800-HUGAIRA"],
    },
    {
      icon: <Mail className="h-6 w-6 text-brown-medium" />,
      title: "Email Us",
      details: ["info@hugairastore.com", "support@hugairastore.com"],
    },
    {
      icon: <Clock className="h-6 w-6 text-brown-medium" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <MainLayout>
      <div className="container-custom py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-playfair mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions about our
            products, need sizing help, or want to share feedback, we're here to
            help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <h3 className="font-medium mb-2 text-brown-dark">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-sm text-muted-foreground"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-playfair mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-2 text-brown-dark">
                  What are your shipping options?
                </h3>
                <p className="text-sm text-muted-foreground">
                  We offer free standard shipping on orders over $75. Express
                  shipping is available for $9.99. International shipping is
                  available to select countries.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-2 text-brown-dark">
                  What is your return policy?
                </h3>
                <p className="text-sm text-muted-foreground">
                  We accept returns within 30 days of purchase. Items must be
                  unworn, unwashed, and in original condition with tags
                  attached.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-2 text-brown-dark">
                  How do I find my size?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Each product page includes a detailed size chart. If you need
                  additional help, our customer service team is happy to assist
                  with sizing recommendations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-2 text-brown-dark">
                  Do you offer custom sizing?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes! We offer custom sizing for select items. Contact us with
                  your measurements and we'll help create the perfect fit for
                  you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
