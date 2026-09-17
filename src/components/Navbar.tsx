import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/portfolio";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "about", "work", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 160 && rect.bottom >= 160;
      });

      if (current) {
        setActive(current.charAt(0).toUpperCase() + current.slice(1));
      }
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (item: string) => {
    setActive(item);
    setOpen(false);

    document
      .getElementById(item.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
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
        <button
          onClick={() => handleNav("Home")}
          className="mono font-bold text-base tracking-wider flex items-center gap-2"
        >
          <span className="w-5 h-5 bg-[#E83A2C] block" />
          <span>rmdhn.</span>
        </button>

        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleNav(item)}
                className={`nav-link hover-underline ${
                  active === item ? "text-[#E83A2C]" : "text-[#0A0A0A]"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="mail to :rmdh.16.18@gmail.com"
          className="hidden md:flex items-center gap-2 bg-[#0A0A0A] text-[#F0EFEC] px-5 py-2 text-xs font-bold tracking-widest uppercase hover:bg-[#E83A2C] transition-colors duration-300"
        >
          Hire Me <ArrowUpRight size={12} />
        </a>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#F0EFEC] border-t border-[#D4D4D0] px-6 py-8">
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNav(item)}
                  className={`nav-link text-lg ${
                    active === item ? "text-[#E83A2C]" : ""
                  }`}
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
