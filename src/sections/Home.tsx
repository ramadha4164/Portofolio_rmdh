import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#F0EFEC] flex flex-col overflow-hidden pt-16"
    >
      <div className="hidden md:flex items-center justify-between px-12 pt-8 pb-4 border-b border-[#D4D4D0]/60">
        <span className="section-label">Portfolio — 2026</span>

        <div className="flex items-center gap-8">
          <span className="section-label">Available for work</span>
          <span className="w-2 h-2 rounded-full bg-[#E83A2C] animate-pulse" />
        </div>

        <span className="section-label">Based in Central Java, IND</span>
      </div>

      <div className="flex-1 grid md:grid-cols-2 items-center px-6 md:px-12 py-12 md:py-0 gap-8">
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

          <div className="initial-hidden animate-fade-up delay-400 flex items-center gap-10 pt-4 border-t border-[#D4D4D0]">
            {[
              ["7+", "Projects"],
              ["1+", "Years Exp."],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="mono text-2xl font-bold">{num}</div>
                <div className="section-label mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative initial-hidden animate-scale-in delay-200">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Creative work"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />

            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#E83A2C] mix-blend-multiply" />

            <div className="absolute top-6 right-0 bg-[#0A0A0A] text-[#F0EFEC] px-5 py-4 flex flex-col gap-1">
              <span className="section-label text-[#8A8A8A]">Me.</span>
              <span className="section-label text-[#F0EFEC]">
                Do what you want,
              </span>
              <span className="section-label text-[#F0EFEC]">
                and get started.
              </span>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 mono font-bold text-7xl text-[#0A0A0A]/10 select-none pointer-events-none leading-none">
            001
          </div>
        </div>
      </div>

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
