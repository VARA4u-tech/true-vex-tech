import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { Products } from "@/components/sections/Products";
import { OmniChannel } from "@/components/sections/OmniChannel";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <BrandMarquee />
        <Products variant="full" />
        <OmniChannel />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
