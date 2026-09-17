import { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import fotoSaya from "./a ssets/foto saya.jpg";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Home", "About", "Work", "Contact"];

const SKILLS = [
  "UI/UX Design",
  "Brand Identity",
  "Web Development",
  "Art Direction",
  "Typography",
  "Editorial Design",
  "Illustration",
];

const WORKS = [
  {
    id: "01",
    title: "LAB. Rebrand",
    category: "Brand Identity",
    year: "2024",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    accent: "#E83A2C",
  },
  {
    id: "02",
    title: "Urban Streetwear",
    category: "Editorial / Photography",
    year: "2024",
    image:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
    accent: "#0A0A0A",
  },
  {
    id: "03",
    title: "Motion System AW25",
    category: "Motion Design",
    year: "2025",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    accent: "#E83A2C",
  },
  {
    id: "04",
    title: "Digital Product Lab",
    category: "Web Development",
    year: "2025",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    accent: "#0A0A0A",
  },
  {
    id: "05",
    title: "Minimal Type System",
    category: "Typography",
    year: "2025",
    image:
      "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800",
    accent: "#E83A2C",
  },
  {
    id: "06",
    title: "Noir Collection",
    category: "Art Direction",
    year: "2026",
    image:
      "https://images.pexels.com/photos/2220337/pexels-photo-2220337.jpeg?auto=compress&cs=tinysrgb&w=800",
    accent: "#0A0A0A",
  },
];

const MARQUEE_ITEMS = [
  "Design",
  "•",
  "Development",
  "•",
  "Direction",
  "•",
  "Design",
  "•",
  "Development",
  "•",
  "Direction",
  "•",
  "Design",
  "•",
  "Development",
  "•",
  "Direction",
  "•",
  "Design",
  "•",
  "Development",
  "•",
  "Direction",
  "•",
];

// ─── Intersection Observer hook ───────────────────────────────────────────────

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

// ─── Components ───────────────────────────────────────────────────────────────

function Navbar({
  active,
  onNav,
}: {
  active: string;
  onNav: (s: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (item: string) => {
    onNav(item);
    setOpen(false);
    const el = document.getElementById(item.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F0EFEC]/95 backdrop-blur-md border-b border-[#D4D4D0]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("Home")}
          className="mono font-bold text-base tracking-wider flex items-center gap-2"
        >
          <span className="w-5 h-5 bg-[#E83A2C] block" />
          <span>rmdhn.</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleNav(item)}
                className={`nav-link hover-underline ${active === item ? "text-[#E83A2C]" : "text-[#0A0A0A]"}`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:ramadha4164@gmail.com"
          className="hidden md:flex items-center gap-2 bg-[#0A0A0A] text-[#F0EFEC] px-5 py-2 text-xs font-bold tracking-widest uppercase hover:bg-[#E83A2C] transition-colors duration-300"
        >
          Hire Me <ArrowUpRight size={12} />
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F0EFEC] border-t border-[#D4D4D0] px-6 py-8">
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNav(item)}
                  className={`nav-link text-lg ${active === item ? "text-[#E83A2C]" : ""}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="mail to :ramadha4164@gmail.com"
            className="mt-8 flex items-center gap-2 bg-[#0A0A0A] text-[#F0EFEC] px-5 py-3 text-xs font-bold tracking-widest uppercase w-fit"
          >
            Hire Me <ArrowUpRight size={12} />
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#F0EFEC] flex flex-col overflow-hidden pt-16"
    >
      {/* Top meta bar */}
      <div className="hidden md:flex items-center justify-between px-12 pt-8 pb-4 border-b border-[#D4D4D0]/60">
        <span className="section-label">Portfolio — 2026</span>
        <div className="flex items-center gap-8">
          <span className="section-label">Available for work</span>
          <span className="w-2 h-2 rounded-full bg-[#E83A2C] animate-pulse" />
        </div>
        <span className="section-label">Based in Central Java, IND</span>
      </div>

      {/* Main hero content */}
      <div className="flex-1 grid md:grid-cols-2 items-center px-6 md:px-12 py-12 md:py-0 gap-8">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <div className="initial-hidden animate-fade-up">
            <span className="section-label">Creative Developer</span>
          </div>

          <h1 className="initial-hidden animate-fade-up delay-100">
            <span
              className="block font-bold leading-none tracking-tighter"
              style={{ fontSize: "clamp(72px, 10vw, 140px)", lineHeight: 0.88 }}
            >
              r.
            </span>
            <div className="flex items-end gap-4 mt-3">
              <span
                className="font-bold leading-none tracking-tighter"
                style={{
                  fontSize: "clamp(72px, 10vw, 140px)",
                  lineHeight: 0.88,
                }}
              >
                mdhn
              </span>
              <span
                className="text-[#E83A2C] font-bold leading-none tracking-tighter"
                style={{
                  fontSize: "clamp(72px, 10vw, 140px)",
                  lineHeight: 0.88,
                }}
              >
                .
              </span>
            </div>
          </h1>

          <p className="initial-hidden animate-fade-up delay-200 text-[#8A8A8A] text-sm leading-relaxed max-w-sm">
            Crafting bold digital experiences through design systems, motion,
            and code. Where creativity meets precision.
          </p>

          <div className="initial-hidden animate-fade-up delay-300 flex items-center gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-3 bg-[#0A0A0A] text-[#F0EFEC] px-7 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-[#E83A2C] transition-colors duration-300"
            >
              View Work <ArrowRight size={14} />
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-3 border border-[#0A0A0A] px-7 py-3.5 text-xs font-bold tracking-widest uppercase hover:border-[#E83A2C] hover:text-[#E83A2C] transition-colors duration-300"
            >
              About Me
            </button>
          </div>

          {/* Counter row */}
          <div className="initial-hidden animate-fade-up delay-400 flex items-center gap-10 pt-4 border-t border-[#D4D4D0]">
            {[
              ["9+", "Projects"],
              ["2+", "Years Exp."],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="mono text-2xl font-bold">{num}</div>
                <div className="section-label mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image block */}
        <div className="relative initial-hidden animate-scale-in delay-200">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Creative work"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Red accent block */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#E83A2C] mix-blend-multiply" />
            {/* Label overlay */}
            <div className="absolute top-6 right-0 bg-[#0A0A0A] text-[#F0EFEC] px-5 py-4 flex flex-col gap-1">
              <span className="section-label text-[#8A8A8A]">X-LAB</span>
              <span className="section-label text-[#F0EFEC]">MATERIALS OF</span>
              <span className="section-label text-[#F0EFEC]">
                CREATION 2026
              </span>
            </div>
          </div>

          {/* Bottom number */}
          <div className="absolute -bottom-4 -left-4 mono font-bold text-7xl text-[#0A0A0A]/10 select-none pointer-events-none leading-none">
            001
          </div>
        </div>
      </div>

      {/* Arrow nav button */}
      <div className="hidden md:flex justify-end px-12 pb-8">
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="w-12 h-12 bg-[#E83A2C] flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Scroll down"
        >
          <ArrowRight size={18} className="text-white rotate-90" />
        </button>
      </div>
    </section>
  );
}

// ─── Marquee ──────────────────────────────────────────────────────────────────

function MarqueeBanner() {
  return (
    <div className="bg-[#E83A2C] py-4 overflow-hidden">
      <div className="marquee-track">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span
            key={i}
            className="mono text-[#F0EFEC] text-sm font-bold tracking-widest uppercase mx-6 whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────

function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="bg-[#F0EFEC] py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 flex items-end justify-between transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <span className="section-label">002 — About Me</span>
            <h2
              className="mt-3 font-bold tracking-tighter leading-none"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              Who I Am
            </h2>
          </div>
          <div className="hidden md:block w-24 h-px bg-[#0A0A0A]" />
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: portrait */}
          <div
            className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={fotoSaya}
                  alt="foto saya"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Accent frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#E83A2C] -z-10" />
              {/* Year badge */}
              <div className="absolute top-6 -left-4 bg-[#E83A2C] text-white px-4 py-2 mono text-sm font-bold">
                SINCE 2018
              </div>
            </div>
          </div>

          {/* Right: text + skills */}
          <div
            className={`flex flex-col gap-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="flex flex-col gap-5">
              <p className="text-lg leading-relaxed text-[#0A0A0A]">
                Hi — I'm <strong>r ramadhan</strong>, a multidisciplinary
                creative developer based in Central Java. I bridge the gap
                between bold visual design and precise, performant code.
              </p>
              <p className="text-[#8A8A8A] leading-relaxed">
                With 8+ years of experience working with brands, startups, and
                independent artists, I bring ideas to life through intentional
                design systems, expressive motion, and clean, scalable web
                development.
              </p>
              <p className="text-[#8A8A8A] leading-relaxed">
                My work lives at the intersection of editorial aesthetics and
                technical execution — every pixel intentional, every interaction
                considered.
              </p>
            </div>

            {/* Skills */}
            <div>
              <span className="section-label mb-4 block">Disciplines</span>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools row */}
            <div className="border-t border-[#D4D4D0] pt-6">
              <span className="section-label mb-4 block">Education</span>
              <div className="flex flex-col gap-2">
                {[
                  ["BFA Graphic Design", "Parsons School of Design, 2018"],
                  ["MA Interaction Design", "SVA New York, 2019"],
                ].map(([degree, school]) => (
                  <div
                    key={degree}
                    className="flex justify-between items-baseline"
                  >
                    <span className="text-sm font-semibold">{degree}</span>
                    <span className="text-xs text-[#8A8A8A] mono">
                      {school}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-3 w-fit border-b-2 border-[#E83A2C] pb-1 text-sm font-bold tracking-wider uppercase hover:text-[#E83A2C] transition-colors"
            >
              Get in touch <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Work Section ─────────────────────────────────────────────────────────────

function WorkCard({ item, index }: { item: (typeof WORKS)[0]; index: number }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`work-card cursor-pointer transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-105"
        />
        {/* Overlay */}
        <div className="card-overlay absolute inset-0 bg-[#0A0A0A]/80 flex items-center justify-center">
          <div className="flex items-center gap-2 text-white text-sm font-bold tracking-widest uppercase">
            View Project <ExternalLink size={14} />
          </div>
        </div>
        {/* Corner accent */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#E83A2C] transition-all duration-500 group-hover:w-full" />
      </div>

      <div className="pt-4 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="mono text-xs text-[#8A8A8A]">{item.id}</span>
            <span className="text-xs text-[#8A8A8A] uppercase tracking-widest">
              {item.category}
            </span>
          </div>
          <h3 className="font-bold text-xl tracking-tight">{item.title}</h3>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="mono text-xs text-[#8A8A8A]">{item.year}</span>
          <div className="w-3 h-3" style={{ backgroundColor: item.accent }} />
        </div>
      </div>
    </div>
  );
}

function Work() {
  const { ref, visible } = useReveal();
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    "Brand Identity",
    "Motion Design",
    "Web Development",
    "Editorial / Photography",
    "Art Direction",
    "Typography",
  ];

  const filtered =
    filter === "All" ? WORKS : WORKS.filter((w) => w.category === filter);

  return (
    <section id="work" className="bg-[#0A0A0A] py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <span className="section-label text-[#8A8A8A]">
              003 — Selected Work
            </span>
            <h2
              className="mt-3 font-bold tracking-tighter leading-none text-[#F0EFEC]"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              My Work
            </h2>
          </div>
          <p className="text-[#8A8A8A] text-sm max-w-xs leading-relaxed">
            A curated selection of recent projects spanning branding, motion,
            and digital experiences.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className={`flex flex-wrap gap-2 mb-12 transition-all duration-700 delay-100 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          {categories.slice(0, 5).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all border ${
                filter === cat
                  ? "bg-[#E83A2C] border-[#E83A2C] text-white"
                  : "border-[#8A8A8A]/40 text-[#8A8A8A] hover:border-[#E83A2C] hover:text-[#E83A2C]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <WorkCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="border border-[#F0EFEC]/20 text-[#F0EFEC] px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#E83A2C] hover:border-[#E83A2C] transition-all duration-300">
            View All Projects <ArrowUpRight size={14} className="inline ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────

function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const INFO = [
    {
      icon: MapPin,
      label: "Address",
      value: " Sidorejo, Bendosari, SKH 57571",
      sub: "Jawa Tengah, IND",
    },
    {
      icon: Mail,
      label: "Email",
      value: "ramadha4164@gmail.com",
      href: "mailto:ramadha4164@gmail.com",
    },

    {
      icon: Phone,
      label: "WhatsApp",
      value: "+62 (85) 713-458...",
      href: "https://wa.me/+6285713458...",
    },
  ];

  const SOCIALS = [
    { icon: Instagram, label: "Instagram", href: "#", handle: "@aksara_bhumi" },
    { icon: Twitter, label: "Twitter", href: "#", handle: "" },
    { icon: Linkedin, label: "LinkedIn", href: "#", handle: "" },
    { icon: Github, label: "GitHub", href: "#", handle: "r.mdn" },
  ];

  return (
    <section id="contact" className="bg-[#F0EFEC] py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label">004 — Get in Touch</span>
          <h2
            className="mt-3 font-bold tracking-tighter leading-none"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            Contact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: form */}
          <div
            className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <p className="text-[#8A8A8A] leading-relaxed mb-10 max-w-sm">
              Have a project in mind? Let's collaborate. Send a message and I'll
              get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div>
                <label className="section-label block mb-2">Your Name</label>
                <input
                  className="contact-input"
                  placeholder="r rmdhn"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="section-label block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="contact-input"
                  placeholder="rmdhn@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="section-label block mb-2">Message</label>
                <textarea
                  className="contact-input resize-none"
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className={`self-start flex items-center gap-3 px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  sent
                    ? "bg-green-600 text-white"
                    : "bg-[#0A0A0A] text-[#F0EFEC] hover:bg-[#E83A2C]"
                }`}
              >
                {sent ? "Message Sent!" : "Send Message"}{" "}
                <ArrowRight size={14} />
              </button>
            </form>
          </div>

          {/* Right: info */}
          <div
            className={`flex flex-col gap-12 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {/* Contact info */}
            <div className="flex flex-col gap-8">
              {INFO.map(({ icon: Icon, label, value, sub, href }) => (
                <div key={label} className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-[#0A0A0A] flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#F0EFEC]" />
                  </div>
                  <div>
                    <span className="section-label block mb-1">{label}</span>
                    {href ? (
                      <a
                        href={href}
                        className="font-semibold hover-underline hover:text-[#E83A2C] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-semibold">{value}</span>
                    )}
                    {sub && (
                      <div className="text-xs text-[#8A8A8A] mt-0.5">{sub}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-[#D4D4D0]" />

            {/* Social media */}
            <div>
              <span className="section-label block mb-6">Follow Along</span>
              <div className="grid grid-cols-2 gap-4">
                {SOCIALS.map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 group p-3 border border-[#D4D4D0] hover:border-[#E83A2C] hover:bg-[#E83A2C]/5 transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon
                      size={16}
                      className="group-hover:text-[#E83A2C] transition-colors"
                    />
                    <div>
                      <div className="text-xs font-bold group-hover:text-[#E83A2C] transition-colors">
                        {label}
                      </div>
                      <div className="mono text-[10px] text-[#8A8A8A]">
                        {handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="bg-[#0A0A0A] p-6 text-[#F0EFEC]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#E83A2C] animate-pulse" />
                <span className="mono text-xs tracking-widest text-[#8A8A8A]">
                  CURRENTLY AVAILABLE
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[#D4D4D0]">
                Open to new freelance projects and full-time opportunities
                starting July 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F0EFEC] px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 bg-[#E83A2C]" />
          <span className="mono font-bold tracking-wider text-sm">r.mdhn</span>
        </div>
        <p className="mono text-xs text-[#8A8A8A] text-center">
          &copy; 2026 rmdhn. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["Instagram", "Twitter", "LinkedIn"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs text-[#8A8A8A] hover:text-[#E83A2C] transition-colors tracking-widest uppercase"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const sections = ["home", "about", "work", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
          }
        },
        { threshold: 0.4 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <div>
      <Navbar active={activeSection} onNav={setActiveSection} />
      <Hero />
      <MarqueeBanner />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
