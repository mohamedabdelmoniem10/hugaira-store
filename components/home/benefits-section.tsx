"use client";

import { ShieldCheck, Truck, RotateCcw, CreditCard } from "lucide-react";
import { useTranslations } from "next-intl";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brown/10 text-brown mb-4">
        {icon}
      </div>
      <h3 className="font-playfair text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

export default function BenefitsSection() {
  const t = useTranslations("benefits");

  const benefits = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: t("qualityTitle"),
      description: t("qualityDesc"),
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: t("shippingTitle"),
      description: t("shippingDesc"),
    },
    {
      icon: <RotateCcw className="h-6 w-6" />,
      title: t("returnsTitle"),
      description: t("returnsDesc"),
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: t("paymentTitle"),
      description: t("paymentDesc"),
    },
  ];

  return (
    <section className="py-16 floral-bg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">
            {t("title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
