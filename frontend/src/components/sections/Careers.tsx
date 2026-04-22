import { motion } from "framer-motion";

export function Careers() {
  return (
    <section id="careers" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <svg
          width="400"
          height="400"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="100" fill="#0D7E92" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold tracking-tight md:text-6xl"
          >
            Join Our Team, <br />
            <span className="text-[#0D7E92]">Innovate the Future</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Innovate with us and shape the future of technology through groundbreaking solutions and
            collaborative teamwork.
          </motion.p>
        </div>

        {/* Open Positions */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Senior Full Stack Engineer",
              location: "Vijayawada (On-site)",
              type: "Full-time · Mid-level",
              description:
                "Lead the development of user-facing features using modern React frameworks.",
            },
            {
              title: "QA Automation Engineer",
              location: "Vijayawada (On-site)",
              type: "Full-time · Mid-level",
              description: "Design and implement automated tests for web and mobile applications.",
            },
            {
              title: "DevOps Engineer",
              location: "Vijayawada (On-site)",
              type: "Full-time · Mid-level",
              description:
                "Manage cloud infrastructure, CI/CD pipelines, and deployment strategies.",
            },
            {
              title: "HR Associate",
              location: "Vijayawada (On-site)",
              type: "Full-time · Entry-level",
              description: "Finding Talent",
            },
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

        {/* Culture & Perks */}
        <div className="mt-32 grid gap-12 lg:grid-cols-2">
          <div className="brutalist-card p-10 bg-gradient-to-br from-card to-background">
            <h3 className="font-display text-3xl font-bold">Our Culture</h3>
            <p className="mt-6 text-gray-400 leading-relaxed">
              At Innovate, we foster a dynamic and inclusive environment where every voice is heard,
              and innovation thrives. Our diverse teams collaborate to tackle complex challenges,
              pushing the boundaries of technology.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              We believe in continuous learning, mutual respect, and celebrating successes. Join a
              team where your contributions are valued and your growth is prioritized.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Health & Wellness", desc: "Comprehensive medical plans." },
              { title: "Generous PTO", desc: "Flexible paid time off." },
              { title: "Career Growth", desc: "Development opportunities." },
              { title: "Work-Life Balance", desc: "Supportive policies." },
            ].map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0D7E92]/50 transition-all group"
              >
                <h4 className="font-bold text-[#0D7E92] group-hover:text-white transition-colors">
                  {perk.title}
                </h4>
                <p className="mt-2 text-xs text-gray-400 leading-snug">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
