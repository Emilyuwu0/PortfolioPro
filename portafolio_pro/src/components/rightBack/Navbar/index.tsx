"use client";
import SlideUpSection from "@/components/Util";
import { useState } from "react";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { label: "Portafolio", href: "#portfolio" },
    { label: "Sobre mí", href: "#about" },
    { label: "Resumen", href: "#resume" },
    { label: "Contáctame", href: "#contact" },
  ];

  return (
    <div>

      <div className="fixed top-16 z-50">     <SlideUpSection delay={350}>
        <div className="hidden md:flex text-white h-15 px-[2.4rem] pl-[calc(2.4rem+6px)] rounded-[50px] border border-white/7 bg-white/5 shadow-[0_8px_32px_#1f268726] backdrop-blur-[15px]">
          <SlideUpSection delay={350}>
            <nav className="flex items-center mt-2 justify-center gap-8">
              {navItems.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveIndex(i);
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`px-4 py-2 rounded-3xl transition-all hover:text-violet-200 ${activeIndex === i
                      ? " text-white"
                      : "text-[#86848c]"
                    }`}
                >
                  {item.label}
                </a>
              ))}


            </nav>
          </SlideUpSection>
        </div></SlideUpSection>
      </div>
    </div>

  );
}
