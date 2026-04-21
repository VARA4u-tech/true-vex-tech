import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const SERVICES = [
  {
    title: "Software Development",
    description:
      "Building robust, scalable, and secure software solutions tailored to your unique business requirements. Our expertise spans across various domains and technologies, ensuring your vision becomes a reality.",
    subServices: [
      "Web Applications",
      "Mobile Apps (iOS & Android)",
      "Cloud-native (AWS, Azure, GCP)",
      "API Development",
      "Frontend Development",
      "Backend Development",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Software Testing",
    description:
      "Ensuring the quality, reliability, and security of your software through rigorous testing methodologies and advanced tools.",
    subServices: [
      "Functional & Automation Testing",
      "Performance & Load Testing",
      "Security & Usability Testing",
      "Compatibility & Regression Testing",
    ],
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop",
  },
  {
    title: "DevOps Consulting",
    description:
      "Streamlining your software development lifecycle with best practices in DevOps to ensure smooth, predictable releases and optimal infrastructure.",
    subServices: [
      "CI/CD Pipelines",
      "Infrastructure as Code (IaC)",
      "Monitoring & Observability",
      "Containerization (Docker, K8s)",
      "Cloud Migration",
    ],
    image:
      "https://images.unsplash.com/photo-1667372333374-0d449ac7bc0b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "IT Staffing",
    description:
      "Access top-tier IT talent exactly when you need it. Our staffing solutions help you build dynamic and skilled teams to accelerate your projects.",
    subServices: [
      "Contract Staffing",
      "Dedicated Teams",
      "Contract-to-Hire",
      "Permanent Placement",
      "Skill Assessment",
    ],
    image:
      "https://images.unsplash.com/photo-1521737706234-2803fcaf542a?q=80&w=2070&auto=format&fit=crop",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-[0.25em] text-primary"
            >
              Our Expertise
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display mt-4 text-5xl font-bold md:text-7xl"
            >
              Comprehensive <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
            >
              Empowering your business with cutting-edge technology solutions and strategic IT
              expertise.
            </motion.p>
          </div>

          <div className="mt-24 space-y-32">
            {SERVICES.map((s, i) => (
              <section
                key={s.title}
                className={`flex flex-col gap-12 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <div className="relative aspect-video overflow-hidden rounded-3xl border border-border shadow-2xl">
                    <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 py-4"
                >
                  <h2 className="font-display text-4xl font-bold md:text-5xl">{s.title}</h2>
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {s.subServices.map((sub) => (
                      <div key={sub} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium">{sub}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-10 rounded-full bg-primary/10 px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/20">
                    Discuss this service
                  </button>
                </motion.div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
