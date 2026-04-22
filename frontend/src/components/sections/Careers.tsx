import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Careers() {
  const jobs = [
    {
      title: "Senior Full Stack Engineer",
      location: "Vijayawada (On-site)",
      type: "Full-time · Senior",
      description: "Lead the development of user-facing features using modern React frameworks.",
      details: {
        overview: "Detailed overview of the role and application process.",
        tags: ["Vijayawada, India", "In-Office", "Senior", "Full-time"],
        jobDescription:
          "Join our dynamic development team as a Senior Full Stack Engineer. In this role, you will be responsible for designing, developing, and maintaining scalable web applications. You will work closely with product managers, UX designers, and other engineers to deliver exceptional user experiences in a fast-paced, agile environment.",
        responsibilities: [
          "Write clean, maintainable, and efficient web applications.",
          "Develop cross-functional APIs and database schemas.",
          "Troubleshoot, debug, and upgrade existing systems.",
        ],
        requirements: [
          "Bachelor's or Master's in Computer Science or related field.",
          "5+ years experience in full stack web development or related role.",
          "Strong proficiency with frontend languages (React, Angular, Vue.js).",
          "Experience with backend languages (Node.js, Python, Java) and frameworks.",
          "Solid understanding of APIs, microservices, GCP/CI/CD systems.",
          "Excellent problem-solving, communication, and collaboration skills.",
        ],
        benefits: [
          "Competitive salary and performance bonuses.",
          "Comprehensive health, dental, and vision insurance.",
          "Generous paid time off and flexible working hours.",
          "401(k) retirement plan with company match.",
          "Professional development opportunities and conference attendance.",
          "Stock options and equity grants.",
          "Paid parental leave.",
          "Dynamic and inclusive company culture.",
          "Modern office space with amenities.",
        ],
      },
    },
    {
      title: "QA Automation Engineer",
      location: "Vijayawada (On-site)",
      type: "Full-time · Senior",
      description: "Design and implement automated tests for web and mobile applications.",
      details: {
        overview: "Detailed overview of the role and application process.",
        tags: ["Vijayawada, India", "On-Site", "Senior", "Full-time"],
        jobDescription:
          "We are seeking a skilled and detail-oriented QA Automation Engineer to join our growing engineering team. In this role, you will ensure the quality, performance, and reliability of our software products through automated testing frameworks. You will collaborate with developers, product managers, and UX designers throughout the development lifecycle to deliver high-quality software.",
        responsibilities: [
          "Design, develop, and maintain automated test frameworks for web and backend applications.",
          "Create and execute cross-functional test scripts to understand requirements and API integration testing.",
          "Analyze test results and CI/CD pipeline failures to resolve issues.",
          "Participate in Agile ceremonies such as sprint planning, reviews, and retrospectives.",
        ],
        requirements: [
          "Experience in QA automation and test planning.",
          "Proficiency with automation frameworks like Selenium, Cypress, Playwright.",
          "Experience with CI/CD tools like Jenkins, GitHub Actions.",
          "Strong programming skills in Java, Python, or JavaScript.",
        ],
        benefits: [
          "Competitive salary and performance bonuses.",
          "Comprehensive health, dental, and vision insurance.",
          "Generous paid time off and flexible working hours.",
          "401(k) retirement plan with company match.",
          "Professional development opportunities and conference attendance.",
          "Stock options and equity grants.",
          "Paid parental leave.",
          "Dynamic and inclusive company culture.",
          "Modern office space with amenities.",
        ],
      },
    },
    {
      title: "DevOps Engineer",
      location: "Vijayawada (On-site)",
      type: "Full-time · Mid-level",
      description: "Manage cloud infrastructure, CI/CD pipelines, and deployment strategies.",
    },
    {
      title: "HR Associate",
      location: "Vijayawada (On-site)",
      type: "Full-time · Entry-level",
      description: "Finding Talent",
    },
  ];

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
          {jobs.map((job, i) => (
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
                <div className="flex flex-wrap gap-2">
                  {job.details && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-bold text-white transition-all hover:bg-white/10 active:scale-95">
                          View
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-white/10 p-0 shadow-2xl">
                        <div className="p-8 md:p-12">
                          <DialogHeader className="mb-8">
                            <DialogTitle className="text-4xl font-bold tracking-tight md:text-5xl">
                              {job.title}
                            </DialogTitle>
                            <DialogDescription className="text-lg text-muted-foreground mt-2">
                              {job.details.overview}
                            </DialogDescription>
                            <div className="flex flex-wrap gap-4 mt-6">
                              {job.details.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="flex items-center gap-2 text-sm text-gray-400"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#0D7E92]" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </DialogHeader>

                          <div className="grid gap-12 lg:grid-cols-[1fr,320px]">
                            <div className="space-y-10">
                              <section>
                                <h4 className="text-2xl font-bold mb-4">Job Description</h4>
                                <p className="text-gray-400 leading-relaxed">
                                  {job.details.jobDescription}
                                </p>
                              </section>

                              <section>
                                <h4 className="text-2xl font-bold mb-4">Responsibilities</h4>
                                <ul className="space-y-3 list-disc pl-5 text-gray-400">
                                  {job.details.responsibilities.map((r) => (
                                    <li key={r}>{r}</li>
                                  ))}
                                </ul>
                              </section>

                              <section>
                                <h4 className="text-2xl font-bold mb-4">Requirements</h4>
                                <ul className="space-y-3 list-disc pl-5 text-gray-400">
                                  {job.details.requirements.map((r) => (
                                    <li key={r}>{r}</li>
                                  ))}
                                </ul>
                              </section>
                            </div>

                            <aside className="space-y-10">
                              <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
                                <h4 className="text-xl font-bold mb-6">Benefits</h4>
                                <ul className="space-y-4">
                                  {job.details.benefits.map((b) => (
                                    <li key={b} className="flex gap-3 text-sm text-gray-400">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        className="text-[#0D7E92] shrink-0"
                                      >
                                        <polyline points="20 6 9 17 4 12" />
                                      </svg>
                                      {b}
                                    </li>
                                  ))}
                                </ul>
                                <button className="w-full mt-10 rounded-xl bg-primary py-4 text-sm font-bold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-primary-glow">
                                  Apply Now
                                </button>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                  <button className="rounded-full bg-white px-6 py-2 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95">
                    Apply
                  </button>
                </div>
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
