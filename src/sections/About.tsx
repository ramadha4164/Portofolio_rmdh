import { ArrowUpRight } from "lucide-react";
import fotoSaya from "../assets/foto saya.jpg";
import { SKILLS } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="bg-[#F0EFEC] py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`mb-16 flex items-end justify-between transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
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

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* FOTO — STICKY */}
          <div
            className={`md:sticky md:top-20 self-start transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative group">
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden bg-[#D4D4D0]">
                <img
                  src={fotoSaya}
                  alt="R. Ramadhan"
                  className="
            w-full
            h-full
            object-cover
            grayscale
            scale-100
            group-hover:scale-[1.03]
            group-hover:grayscale-0
            transition-all
            duration-1000
            ease-out
          "
                />
              </div>

              {/* Red frame */}
              <div
                className="
          absolute
          -bottom-4
          -right-4
          w-full
          h-full
          border-2
          border-[#E83A2C]
          -z-10
          transition-transform
          duration-700
          group-hover:translate-x-2
          group-hover:translate-y-2
        "
              />

              {/* Label */}
              <div
                className="
          absolute
          top-6
          -left-4
          bg-[#E83A2C]
          text-white
          px-4
          py-2
          mono
          text-sm
          font-bold
        "
              >
                SINCE 2024
              </div>
            </div>
          </div>

          {/* TEXT — SCROLL NATURAL */}
          <div
            className={`flex flex-col gap-14 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* INTRO */}
            <div className="relative pl-6 border-l border-[#D4D4D0]">
              <span className="section-label mb-5 block">Profile</span>

              <p className="text-xl md:text-2xl leading-relaxed tracking-tight text-[#0A0A0A]">
                Hi — I'm <strong>R. Ramadhan</strong>, a creative individual
                living in Sukoharjo with an interest in visual design, graphic
                arts, and creative problem-solving.
              </p>
            </div>

            {/* EXPERIENCE */}
            <div className="flex flex-col gap-5">
              <span className="section-label">Perspective</span>

              <p className="text-[#8A8A8A] leading-relaxed text-justify">
                My experience spans various sectors, including retail, community
                engagement, and economics-related fields. While my professional
                journey is still evolving, each work environment has taught me
                unique ways to understand people, identify issues, and devise
                practical solutions.
              </p>

              <p className="text-[#8A8A8A] leading-relaxed text-justify">
                Di luar pekerjaan profesional, saya juga terlibat dalam kegiatan
                sosial, termasuk World Clean up Day di Solo, di mana saya turut
                berkontribusi dalam upaya bersama untuk menciptakan lingkungan
                yang lebih bersih dan meningkatkan kesadaran masyarakat terhadap
                lingkungan.
              </p>
            </div>

            {/* PHILOSOPHY */}
            <div className="flex flex-col gap-5">
              <span className="section-label">Creative Philosophy</span>

              <p className="text-lg leading-relaxed text-[#0A0A0A]">
                I believe creativity is more than making something visually
                appealing.
              </p>

              <p className="text-[#8A8A8A] leading-relaxed text-justify">
                It is about understanding problems, adapting to change, and
                turning ideas into something useful. Every experience provides a
                new perspective, and every challenge is an opportunity to create
                better solutions.
              </p>
            </div>

            {/* DISCIPLINES */}
            <div className="border-t border-[#D4D4D0] pt-8">
              <span className="section-label mb-5 block">Disciplines</span>

              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="
              skill-tag
              transition-all
              duration-300
              hover:bg-[#0A0A0A]
              hover:text-white
            "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();

                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="
    group
    flex
    w-fit
    items-center
    gap-3
    border-b-2
    border-[#E83A2C]
    pb-2
    text-sm
    font-bold
    uppercase
    tracking-wider
    transition-all
    duration-300
    hover:text-[#E83A2C]
  "
            >
              Hubungi Kami
              <ArrowUpRight
                size={16}
                className="
      transition-transform
      duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-1
    "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
