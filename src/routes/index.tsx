import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { Products } from "@/components/sections/Products";
import { GoogleRating } from "@/components/sections/GoogleRating";
import { StatBlocks } from "@/components/sections/StatBlocks";
import { MarketingCTA } from "@/components/sections/MarketingCTA";
import { Resources } from "@/components/sections/Resources";
import { GrowthMarquee } from "@/components/sections/GrowthMarquee";
import { OmniChannel } from "@/components/sections/OmniChannel";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "PayJustNow for Business — Increase revenue with our retail solutions",
      },
      {
        name: "description",
        content:
          "Boost sales with interest-free instalments and retail credit. Get paid upfront, expand your reach to 2.6M shoppers, and convert more browsers into buyers.",
      },
      {
        property: "og:title",
        content: "PayJustNow for Business — Get paid upfront, sell more",
      },
      {
        property: "og:description",
        content:
          "Split payment options, performance marketing, and seamless checkout — online and in-store.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <BrandMarquee />
        <Products />
        <GoogleRating />
        <StatBlocks />
        <MarketingCTA />
        <Resources />
        <GrowthMarquee />
        <OmniChannel />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
