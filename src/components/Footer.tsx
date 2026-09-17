import { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<
    "privacy" | "terms" | null
  >(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="bg-[#0A0A0A] text-[#F0EFEC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* MAIN FOOTER */}
          <div className="border-t border-[#252525] py-10 md:py-12">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

              {/* LEFT — GET IN TOUCH */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2 h-2 bg-[#E83A2C]" />

                  <span className="mono text-[9px] uppercase tracking-[0.25em] text-[#666]">
                    Get in touch
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.05em] leading-[0.95]">
                    Have an idea?
                    <br />
                    <span className="text-[#666]">
                      Let's make it real.
                    </span>
                  </h2>

                  <a
                    href="#contact"
                    className="group flex items-center gap-2 w-fit text-xs whitespace-nowrap border-b border-[#444] pb-1.5 hover:border-[#E83A2C] transition-colors"
                  >
                    Start a conversation

                    <ArrowUpRight
                      size={14}
                      className="text-[#E83A2C] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </div>

              {/* RIGHT — BRAND */}
              <div className="flex flex-col justify-between">

                {/* Brand */}
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-9 h-9 bg-[#E83A2C] text-black font-bold text-sm">
                    r
                  </span>

                  <div>
                    <p className="text-sm font-semibold tracking-tight">
                      r.mdhn
                    </p>

                    <p className="mono text-[8px] text-[#555] uppercase tracking-[0.2em]">
                      Creative Portfolio
                    </p>
                  </div>
                </div>

                {/* Social + Back */}
                <div className="flex items-center justify-between mt-8">

                  <div className="flex items-center gap-2">

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex items-center justify-center w-9 h-9 rounded-full border border-[#292929] text-[#777] hover:border-[#E83A2C] hover:text-[#E83A2C] transition-all hover:-translate-y-1"
                    >
                      <FaInstagram size={15} />
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X"
                      className="flex items-center justify-center w-9 h-9 rounded-full border border-[#292929] text-[#777] hover:border-[#E83A2C] hover:text-[#E83A2C] transition-all hover:-translate-y-1"
                    >
                      <FaXTwitter size={14} />
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex items-center justify-center w-9 h-9 rounded-full border border-[#292929] text-[#777] hover:border-[#E83A2C] hover:text-[#E83A2C] transition-all hover:-translate-y-1"
                    >
                      <FaLinkedinIn size={15} />
                    </a>

                  </div>

                  <button
                    onClick={scrollToTop}
                    className="group flex items-center gap-2 text-[9px] mono uppercase tracking-[0.15em] text-[#555] hover:text-[#F0EFEC] transition-colors"
                  >
                    Back to top

                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#292929] group-hover:border-[#F0EFEC] transition-colors">
                      <ArrowUp
                        size={12}
                        className="group-hover:-translate-y-1 transition-transform"
                      />
                    </span>
                  </button>

                </div>
              </div>

            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-[#252525] py-5">

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

              <p className="mono text-[8px] text-[#555] tracking-wider">
                © 2026 rmdhn. All rights reserved.
              </p>

              <div className="flex items-center gap-4">

                <button
                  onClick={() => setActiveModal("privacy")}
                  className="mono text-[8px] uppercase tracking-wider text-[#555] hover:text-[#F0EFEC] transition-colors"
                >
                  Privacy
                </button>

                <span className="text-[#333]">•</span>

                <button
                  onClick={() => setActiveModal("terms")}
                  className="mono text-[8px] uppercase tracking-wider text-[#555] hover:text-[#F0EFEC] transition-colors"
                >
                  Terms
                </button>

              </div>

              <p className="mono text-[8px] text-[#444] tracking-wider">
                Created with intent.
              </p>

            </div>
          </div>

        </div>
      </footer>

      {/* PRIVACY / TERMS MODAL */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-5"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#111] border border-[#292929] p-7 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#292929] text-[#777] hover:border-[#E83A2C] hover:text-[#E83A2C] transition-all"
              aria-label="Close"
            >
              ×
            </button>

            {activeModal === "privacy" ? (
              <article>
                <span className="mono text-[9px] text-[#E83A2C] uppercase tracking-[0.3em]">
                  Legal / 01
                </span>

                <h2 className="mt-4 text-3xl font-medium">
                  Privacy Policy
                </h2>

                <div className="mt-8 space-y-6 text-sm leading-7 text-[#888]">

                  <section>
                    <h3 className="mb-2 text-[#F0EFEC]">
                      Introduction
                    </h3>
                    <p>
                      This website is a personal portfolio belonging to
                      rmdhn. It is created to showcase creative work,
                      projects, experience, skills, and provide a way for
                      visitors to get in touch.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-[#F0EFEC]">
                      Information We Collect
                    </h3>
                    <p>
                      This website does not actively collect personal
                      information from visitors. Information may only be
                      provided voluntarily through the contact feature.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-[#F0EFEC]">
                      How We Use Information
                    </h3>
                    <p>
                      Information provided through the contact feature is used
                      only to respond to inquiries and communications.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-[#F0EFEC]">
                      External Links
                    </h3>
                    <p>
                      This website may contain links to Instagram, X, LinkedIn,
                      and other third-party services.
                    </p>
                  </section>

                </div>
              </article>
            ) : (
              <article>
                <span className="mono text-[9px] text-[#E83A2C] uppercase tracking-[0.3em]">
                  Legal / 02
                </span>

                <h2 className="mt-4 text-3xl font-medium">
                  Terms of Use
                </h2>

                <div className="mt-8 space-y-6 text-sm leading-7 text-[#888]">

                  <section>
                    <h3 className="mb-2 text-[#F0EFEC]">
                      Introduction
                    </h3>
                    <p>
                      By accessing this website, you agree to use it
                      responsibly and in accordance with these Terms of Use.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-[#F0EFEC]">
                      Website Content
                    </h3>
                    <p>
                      This website contains portfolio materials including
                      written content, graphic designs, images, and project
                      presentations.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-[#F0EFEC]">
                      Intellectual Property
                    </h3>
                    <p>
                      Original creative works, designs, images, text, and
                      graphics may not be copied, redistributed, or used
                      commercially without permission.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-[#F0EFEC]">
                      External Links
                    </h3>
                    <p>
                      This website may contain links to third-party websites
                      and social media platforms.
                    </p>
                  </section>

                </div>
              </article>
            )}

          </div>
        </div>
      )}
    </>
  );
}
