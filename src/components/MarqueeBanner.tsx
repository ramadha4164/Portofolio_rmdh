import { MARQUEE_ITEMS } from "../data/portfolio";

export default function MarqueeBanner() {
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
