import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { motion } from "framer-motion";

export const Route = createFileRoute("/career")({
  component: Career,
});

function Career() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl font-bold tracking-tight md:text-7xl"
            >
              Join Our Team, <br />
              <span className="text-[#0D7E92]">Innovate the Future</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-400"
            >
              Innovate with us and shape the future of technology through groundbreaking solutions and collaborative teamwork.
            </motion.p>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mt-32 mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <h2 className="font-display text-3xl font-bold md:text-5xl">Explore Open Positions</h2>
            <div className="h-px flex-1 bg-white/10 hidden md:block mx-8" />
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Senior Full Stack Engineer",
                location: "Vijayawada (On-site)",
                type: "Full-time · Mid-level",
                description: "Lead the development of user-facing features using modern React frameworks."
              },
              {
                title: "QA Automation Engineer",
                location: "Vijayawada (On-site)",
                type: "Full-time · Mid-level",
                description: "Design and implement automated tests for web and mobile applications."
              },
              {
                title: "DevOps Engineer",
                location: "Vijayawada (On-site)",
                type: "Full-time · Mid-level",
                description: "Manage cloud infrastructure, CI/CD pipelines, and deployment strategies."
              },
              {
                title: "HR Associate",
                location: "Vijayawada (On-site)",
                type: "Full-time · Entry-level",
                description: "Finding Talent"
              }
            ].map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="brutalist-card p-8 group hover:border-[#0D7E92] transition-colors"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{job.title}</h3>
                    <p className="mt-2 text-[#0D7E92] font-medium">{job.location}</p>
                    <p className="text-sm text-gray-400">{job.type}</p>
                  </div>
                  <button className="w-full sm:w-auto rounded-full bg-white px-6 py-2 text-sm font-bold text-black transition-transform group-hover:scale-105 active:scale-95">
                    Apply
                  </button>
                </div>
                <p className="mt-6 text-gray-400 leading-relaxed">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section className="mt-32 mx-auto max-w-7xl px-5 md:px-8">
          <div className="brutalist-card overflow-hidden bg-gradient-to-br from-card to-background relative p-10 md:p-20">
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="100" fill="#0D7E92" />
              </svg>
            </div>
            
            <h2 className="font-display text-3xl font-bold md:text-5xl relative z-10">Our Culture & Teams</h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-2 relative z-10">
              <p className="text-lg text-gray-400 leading-relaxed">
                At Innovate, we foster a dynamic and inclusive environment where every voice is heard, and innovation thrives. Our diverse teams collaborate to tackle complex challenges, pushing the boundaries of technology.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We believe in continuous learning, mutual respect, and celebrating successes. Join a team where your contributions are valued and your growth is prioritized. We work hard, support each other, and have fun along the way.
              </p>
            </div>
          </div>
        </section>

        {/* Perks Section */}
        <section className="mt-32 mx-auto max-w-7xl px-5 md:px-8 pb-20">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold md:text-5xl">Perks & Benefits</h2>
            <p className="mt-4 text-gray-400 uppercase tracking-widest text-xs">Why you'll love working with us</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision plans." },
              { title: "Generous PTO", desc: "Flexible paid time off and holidays." },
              { title: "Career Growth", desc: "Learning and development opportunities." },
              { title: "Work-Life Balance", desc: "Supportive policies for personal and family life." },
              { title: "Competitive Salary", desc: "Attractive compensation packages and bonuses." },
              { title: "Innovation Culture", desc: "Work on cutting-edge projects and technologies." },
              { title: "Retirement Plans", desc: "401(k) matching and financial planning." },
              { title: "Global Opportunities", desc: "Connect with diverse teams worldwide." }
            ].map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0D7E92]/50 transition-all group"
              >
                <h4 className="text-lg font-bold text-[#0D7E92] group-hover:text-white transition-colors">{perk.title}</h4>
                <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
