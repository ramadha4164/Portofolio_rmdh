import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import WorkCard from "../components/WorkCard";
import { WORKS } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Work() {
  const { ref, visible } = useReveal();
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Architectural Designer",
    "Web Development",
    "Social",
    "Photography",
    "Art Direction",
    "Typography",
    "Editorial",
  ];

  const filtered =
    filter === "All" ? WORKS : WORKS.filter((w) => w.category === filter);

  return (
    <section id="work" className="bg-[#0A0A0A] py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
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

        <div
          className={`flex flex-wrap gap-2 mb-12 transition-all duration-700 delay-100 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, index) => (
            <WorkCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="border border-[#F0EFEC]/20 text-[#F0EFEC] px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#E83A2C] hover:border-[#E83A2C] transition-all duration-300">
            View All Projects <ArrowUpRight size={14} className="inline ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
