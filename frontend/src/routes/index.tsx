import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { Products } from "@/components/sections/Products";
import MagicBento from "@/components/ui/MagicBento";
import { OmniChannel } from "@/components/sections/OmniChannel";
import { Careers } from "@/components/sections/Careers";
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
        <div className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8 mb-16 text-center">
            <h2 className="font-display text-4xl font-bold md:text-6xl mb-6">
              Platform Highlights
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the power of our next-generation ecosystem, designed for speed, security,
              and absolute performance.
            </p>
          </div>
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="13, 126, 146"
          />
        </div>
        <OmniChannel />
        <Careers />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
