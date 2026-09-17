import { useState } from "react";
import {
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const { ref, visible } = useReveal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "085713458141";

    const text = `Hello R. Ramadhan,

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank");

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const INFO = [
    {
      icon: MapPin,
      label: "Address",
      value: "Sidorejo, Bendosari, SKH 57571",
      sub: "Jawa Tengah, Indonesia",
    },
    {
      icon: Mail,
      label: "Email",
      value: "rmdh.16.18@gmail.com",
      href: "mail to :rmdh.16.18@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: " 0857 1345 8141",
      href: "https://wa.me/085713458141",
    },
  ];

  const SOCIALS = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/r.mdh_16.18",
      handle: "r.mdh_16.18",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      handle: "Coming soon",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      handle: "Coming soon",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ramadha4164",
      handle: "ramadha4164",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F0EFEC] px-6 py-24 md:px-12 md:py-36"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#E83A2C]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-black/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="section-label">004 — Get in Touch</span>

          <h2
            className="mt-3 font-bold tracking-tighter leading-none"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            Contact
          </h2>

          <div className="mt-6 h-px w-full bg-[#D4D4D0]" />
        </div>

        {/* Main Grid */}
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {/* Left — Form */}
          <div
            className={`transition-all duration-700 delay-100 ease-out ${
              visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="mb-10 max-w-md">
              <span className="mono mb-3 block text-[10px] tracking-[0.2em] text-[#8A8A8A]">
                START A CONVERSATION
              </span>

              <p className="text-sm leading-relaxed text-[#6F6F6F] md:text-base">
                Have a project in mind? Let's collaborate. Send me a message and
                I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              {/* Name */}
              <div className="group">
                <label className="section-label mb-2 block">Your Name</label>

                <input
                  type="text"
                  className="contact-input w-full border-b border-[#CFCFCB] bg-transparent px-0 py-3 outline-none transition-all duration-300 placeholder:text-[#A8A8A8] focus:border-[#0A0A0A]"
                  placeholder="r.mdhn"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="section-label mb-2 block">
                  Email Address
                </label>

                <input
                  type="email"
                  className="contact-input w-full border-b border-[#CFCFCB] bg-transparent px-0 py-3 outline-none transition-all duration-300 placeholder:text-[#A8A8A8] focus:border-[#0A0A0A]"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* Message */}
              <div className="group">
                <label className="section-label mb-2 block">Message</label>

                <textarea
                  className="contact-input w-full resize-none border-b border-[#CFCFCB] bg-transparent px-0 py-3 outline-none transition-all duration-300 placeholder:text-[#A8A8A8] focus:border-[#0A0A0A]"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`group mt-2 flex w-fit items-center gap-4 px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                  sent
                    ? "bg-green-600 text-white"
                    : "bg-[#0A0A0A] text-[#F0EFEC] hover:-translate-y-1 hover:bg-[#E83A2C] hover:shadow-xl"
                }`}
              >
                <span>{sent ? "Message Ready" : "Send Message"}</span>

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="text-[10px] leading-relaxed text-[#8A8A8A]">
                Your message will open directly in WhatsApp for a faster
                response.
              </p>
            </form>
          </div>

          {/* Right — Contact Information */}
          <div
            className={`flex flex-col gap-12 transition-all duration-700 delay-200 ease-out ${
              visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            {/* Contact Information */}
            <div className="flex flex-col gap-7">
              {INFO.map(({ icon: Icon, label, value, sub, href }, index) => (
                <div
                  key={label}
                  className="group flex items-start gap-5 border-b border-[#D4D4D0] pb-7 last:border-b-0"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-[#0A0A0A] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#E83A2C]">
                    <Icon size={16} className="text-[#F0EFEC]" />
                  </div>

                  <div className="min-w-0">
                    <span className="section-label mb-1 block">{label}</span>

                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="block break-words text-sm font-semibold transition-colors duration-300 hover:text-[#E83A2C] md:text-base"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="block text-sm font-semibold md:text-base">
                        {value}
                      </span>
                    )}

                    {sub && (
                      <div className="mt-1 text-xs text-[#8A8A8A]">{sub}</div>
                    )}

                    <span className="mono mt-2 block text-[9px] text-[#B0B0AD]">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-[#D4D4D0]" />

            {/* Social */}
            <div>
              <span className="section-label mb-6 block">Follow Along</span>

              <div className="grid grid-cols-2 gap-3">
                {SOCIALS.map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-3 border border-[#D4D4D0] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#E83A2C] hover:bg-[#E83A2C]/5"
                    aria-label={label}
                  >
                    <Icon
                      size={16}
                      className="transition-colors duration-300 group-hover:text-[#E83A2C]"
                    />

                    <div className="min-w-0">
                      <div className="text-xs font-bold transition-colors duration-300 group-hover:text-[#E83A2C]">
                        {label}
                      </div>

                      <div className="mono mt-1 truncate text-[10px] text-[#8A8A8A]">
                        {handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="relative overflow-hidden bg-[#0A0A0A] p-6 text-[#F0EFEC]">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[#E83A2C]/10 blur-2xl" />

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E83A2C] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E83A2C]" />
                  </span>

                  <span className="mono text-[10px] tracking-[0.2em] text-[#8A8A8A]">
                    CURRENTLY AVAILABLE
                  </span>
                </div>

                <p className="max-w-md text-sm leading-relaxed text-[#D4D4D0]">
                  Open to new freelance projects, creative collaborations, and
                  full-time opportunities.
                </p>

                <div className="mt-6 h-px bg-white/10" />

                <div className="mt-4 flex items-center justify-between">
                  <span className="mono text-[9px] tracking-widest text-[#666]">
                    RESPONSE TIME
                  </span>

                  <span className="mono text-[9px] tracking-widest text-[#D4D4D0]">
                    WITHIN 24H
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
