import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { Products } from "@/components/sections/Products";
import { OmniChannel } from "@/components/sections/OmniChannel";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "TrueVex Technologies — Innovate. Develop. Accelerate.",
      },
      {
        name: "description",
        content:
          "Leading software consultancy delivering cutting-edge applications, testing, DevOps, and IT staffing solutions to drive business growth.",
      },
      {
        property: "og:title",
        content: "TrueVex Technologies — Your Software Future Starts Here",
      },
      {
        property: "og:description",
        content:
          "Custom software development, comprehensive testing, and cloud infrastructure optimization for global enterprises.",
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
        <OmniChannel />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
