import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFloat from "@/components/ui/ScrollFloat";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  ChevronDown,
  AlertCircle,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const SERVICES = ["Software Development", "Software Testing", "DevOps", "IT Staffing", "Other"];

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Software Development",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value) error = "Name is required";
        else if (!/^[a-zA-Z\s]+$/.test(value)) error = "Name can only contain alphabets";
        break;
      case "email":
        if (!value) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email format";
        break;
      case "phone":
        if (!value) error = "Phone number is required";
        else if (!/^\d+$/.test(value)) error = "Phone number must be numeric";
        else if (value.length < 10) error = "Phone number must be at least 10 digits";
        break;
      case "message":
        if (!value) error = "Message is required";
        else if (value.length < 10) error = "Message must be at least 10 characters";
        break;
    }
    return error;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formState[field as keyof typeof formState]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsSelectOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    Object.keys(formState).forEach((key) => {
      const field = key as keyof FormErrors;
      const error = validateField(key, formState[key as keyof typeof formState]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        name: true,
        email: true,
        phone: true,
        message: true,
      });
      return;
    }

    console.log("Form submitted successfully:", formState);
    alert("Thank you! We'll get back to you soon.");
    setFormState({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "Software Development",
      message: "",
    });
    setErrors({});
    setTouched({});
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-[0.3em] text-primary font-bold"
            >
              Innovating solutions for a connected world
            </motion.span>
            <ScrollFloat
              animationDuration={1.2}
              ease="back.inOut(2)"
              stagger={0.04}
              containerClassName="mt-6 px-4 max-w-[90vw] mx-auto"
              textClassName="font-display text-2xl sm:text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight"
            >
              Get in Touch with Truevex Technologies
            </ScrollFloat>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              We’re eager to hear about your next big idea. Reach out to us, and let’s explore how
              our expertise can drive your success.
            </motion.p>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Contact Info & Social Card - 5 Columns */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="brutalist-card p-6 sm:p-10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MessageSquare size={120} className="rotate-12" />
                </div>

                <h3 className="font-display text-3xl font-bold mb-8">Contact Information</h3>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group/item">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-white/40 bg-white/5 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-white">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                        Email us
                      </p>
                      <a
                        href="mailto:info@truevextech.com"
                        className="text-xl font-bold hover:text-primary transition-colors"
                      >
                        info@truevextech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group/item">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-white/40 bg-white/5 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-white">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                        Call us
                      </p>
                      <a
                        href="tel:+918332917737"
                        className="text-xl font-bold hover:text-primary transition-colors"
                      >
                        +91 8332917737
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group/item">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-white/40 bg-white/5 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-white">
                      <MapPin size={20} />
                    </div>
                    <div className="pt-1.5">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                        Visit us
                      </p>
                      <p className="text-xl font-bold leading-tight">
                        Plot No. 132, Opp Prasanthi Bhavan,
                        <br />
                        Karmel Nagar, Gunadala, Vijayawada,
                        <br />
                        Andhra Pradesh
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Creative Socials Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center md:justify-start"
              >
                <div className="social-interactive-card group relative h-[250px] w-[250px] overflow-hidden rounded-[30px] border-2 border-white/40 bg-[#0A0A0A] shadow-2xl transition-all duration-700 hover:scale-105 hover:border-[#0D7E92]/60">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#0D7E92,transparent_60%)] opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#054d5a]/20 to-[#0A0A0A]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#0D7E92,transparent_50%)] opacity-20" />

                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:translate-x-[70px] group-hover:-translate-y-[52px]">
                    <span className="text-2xl font-bold tracking-[3px] text-white group-hover:tracking-normal group-hover:text-[#0D7E92] transition-colors">
                      SOCIALS
                    </span>
                  </div>

                  {/* Social Boxes - TrueVex Branded Colors */}
                  <a
                    href="https://www.instagram.com/truevextech/"
                    target="_blank"
                    className="social-box box-1 absolute -bottom-[70%] -left-[70%] h-[70%] w-[70%] overflow-hidden rounded-tr-[42%] border-r border-t-2 border-white/40 bg-white/10 p-4 text-right shadow-lg transition-all duration-700 hover:bg-gradient-to-br hover:from-[#0D7E92] hover:to-[#054d5a] group-hover:bottom-[-1px] group-hover:left-[-1px]"
                  >
                    <Instagram
                      size={24}
                      className="ml-auto text-white transition-all hover:drop-shadow-[0_0_8px_rgba(13,126,146,0.8)]"
                    />
                  </a>

                  <a
                    href="https://x.com/truevextech"
                    target="_blank"
                    className="social-box box-2 absolute -bottom-[50%] -left-[50%] h-[50%] w-[50%] overflow-hidden rounded-tr-[42%] border-r border-t-2 border-white/40 bg-white/10 p-4 text-right shadow-lg transition-all duration-700 delay-[0.2s] hover:bg-gradient-to-br hover:from-[#1E293B] hover:to-[#0D7E92] group-hover:bottom-[-1px] group-hover:left-[-1px]"
                  >
                    <Twitter
                      size={20}
                      className="ml-auto text-white transition-all hover:drop-shadow-[0_0_8px_rgba(13,126,146,0.8)]"
                    />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61585918391755"
                    target="_blank"
                    className="social-box box-3 absolute -bottom-[30%] -left-[30%] h-[30%] w-[30%] overflow-hidden rounded-tr-[42%] border-r border-t-2 border-white/40 bg-white/10 p-3 text-right shadow-lg transition-all duration-700 delay-[0.4s] hover:bg-gradient-to-br hover:from-[#0f172a] hover:to-[#0D7E92]/50 group-hover:bottom-[-1px] group-hover:left-[-1px]"
                  >
                    <Facebook
                      size={16}
                      className="ml-auto text-white transition-all hover:drop-shadow-[0_0_8px_rgba(13,126,146,0.8)]"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/truevex-technologies-pvt-ltd/"
                    target="_blank"
                    className="social-box box-4 absolute -bottom-[15%] -left-[15%] h-[15%] w-[15%] overflow-hidden rounded-tr-[42%] border-r border-t-2 border-white/40 bg-white/10 p-2 text-right shadow-lg transition-all duration-700 delay-[0.6s] hover:bg-[#0D7E92] group-hover:bottom-[-1px] group-hover:left-[-1px]"
                  >
                    <Linkedin
                      size={12}
                      className="ml-auto text-white transition-all hover:drop-shadow-[0_0_8px_rgba(13,126,146,0.8)]"
                    />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Contact Form - 7 Columns */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="brutalist-card p-6 sm:p-10 md:p-12"
              >
                <h3 className="font-display text-3xl font-bold mb-8">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">
                        Your Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          className={`w-full rounded-xl border-2 bg-white/5 px-6 py-4 text-white placeholder:text-white/20 outline-none transition-all focus:bg-white/10 ${
                            touched.name && errors.name
                              ? "border-red-500/50 focus:border-red-500"
                              : "border-white/40 focus:border-primary"
                          }`}
                          placeholder="John Doe"
                          value={formState.name}
                          onBlur={() => handleBlur("name")}
                          onChange={(e) => handleChange("name", e.target.value)}
                        />
                        {touched.name && errors.name && (
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                            <AlertCircle size={18} />
                          </div>
                        )}
                      </div>
                      <AnimatePresence>
                        {touched.name && errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1 mt-1"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border-2 border-white/40 bg-white/5 px-6 py-4 text-white placeholder:text-white/20 outline-none transition-all focus:border-primary focus:bg-white/10"
                        placeholder="Company Ltd."
                        value={formState.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          className={`w-full rounded-xl border-2 bg-white/5 px-6 py-4 text-white placeholder:text-white/20 outline-none transition-all focus:bg-white/10 ${
                            touched.email && errors.email
                              ? "border-red-500/50 focus:border-red-500"
                              : "border-white/40 focus:border-primary"
                          }`}
                          placeholder="john@example.com"
                          value={formState.email}
                          onBlur={() => handleBlur("email")}
                          onChange={(e) => handleChange("email", e.target.value)}
                        />
                        {touched.email && errors.email && (
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                            <AlertCircle size={18} />
                          </div>
                        )}
                      </div>
                      <AnimatePresence>
                        {touched.email && errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1 mt-1"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          className={`w-full rounded-xl border-2 bg-white/5 px-6 py-4 text-white placeholder:text-white/20 outline-none transition-all focus:bg-white/10 ${
                            touched.phone && errors.phone
                              ? "border-red-500/50 focus:border-red-500"
                              : "border-white/40 focus:border-primary"
                          }`}
                          placeholder="+91 00000 00000"
                          value={formState.phone}
                          onBlur={() => handleBlur("phone")}
                          onChange={(e) => handleChange("phone", e.target.value)}
                        />
                        {touched.phone && errors.phone && (
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                            <AlertCircle size={18} />
                          </div>
                        )}
                      </div>
                      <AnimatePresence>
                        {touched.phone && errors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1 mt-1"
                          >
                            {errors.phone}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Custom Dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">
                      Service Interest
                    </label>
                    <div className="relative" ref={selectRef}>
                      <button
                        type="button"
                        onClick={() => setIsSelectOpen(!isSelectOpen)}
                        className="flex w-full items-center justify-between rounded-xl border-2 border-white/40 bg-white/5 px-6 py-4 text-left text-white outline-none transition-all hover:border-primary/60 focus:border-primary"
                      >
                        <span className={formState.service ? "text-white" : "text-white/20"}>
                          {formState.service || "Select a service"}
                        </span>
                        <motion.div
                          animate={{ rotate: isSelectOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={20} className="text-muted-foreground" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isSelectOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border-2 border-white/40 bg-[#0A0A0A]/95 backdrop-blur-xl shadow-2xl"
                          >
                            <div className="py-2">
                              {SERVICES.map((service) => (
                                <button
                                  key={service}
                                  type="button"
                                  onClick={() => {
                                    handleChange("service", service);
                                    setIsSelectOpen(false);
                                  }}
                                  className={`flex w-full items-center px-6 py-3 text-sm transition-colors hover:bg-primary/20 hover:text-primary ${
                                    formState.service === service
                                      ? "bg-primary/10 text-primary"
                                      : "text-white/80"
                                  }`}
                                >
                                  {service}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        required
                        rows={4}
                        className={`w-full rounded-xl border-2 bg-white/5 px-6 py-4 text-white placeholder:text-white/20 outline-none transition-all focus:bg-white/10 resize-none ${
                          touched.message && errors.message
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-white/40 focus:border-primary"
                        }`}
                        placeholder="Tell us about your project..."
                        value={formState.message}
                        onBlur={() => handleBlur("message")}
                        onChange={(e) => handleChange("message", e.target.value)}
                      />
                    </div>
                    <AnimatePresence>
                      {touched.message && errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1 mt-1"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="submit"
                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-primary py-5 text-lg font-bold text-white transition-all hover:bg-primary-glow active:scale-[0.98]"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Send Message
                      <Send
                        size={20}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 overflow-hidden rounded-[2rem] border-2 border-white/40 bg-[#0A0A0A] shadow-2xl"
          >
            <div className="relative h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1817.8340535931309!2d80.66324597229226!3d16.530031799999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e595dc0d10df%3A0xb2ecbc4622693537!2sPrashanti%20Bhavan!5e1!3m2!1sen!2sin!4v1776865483698!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) contrast(90%) brightness(90%)",
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.5] transition-all duration-500 hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .social-box {
           transform-origin: bottom left;
        }
      `,
        }}
      />
    </div>
  );
}
