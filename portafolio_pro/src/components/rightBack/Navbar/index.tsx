"use client";
import { useState, useEffect, RefObject } from "react";

interface NavbarProps {
  scrollContainerRef: RefObject<HTMLElement>;
}

export default function Navbar({ scrollContainerRef }: NavbarProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Portafolio", href: "#portfolio" },
    { label: "Sobre mí", href: "#about" },
    { label: "Resumen", href: "#resume" },
  ];

  useEffect(() => {
    const container = scrollContainerRef?.current;
    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > 50);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  return (
    <div>
      {/* Navbar */}
      <div
        className={`fixed top-0 w-full z-50 transition-colors duration-300 navBar ${
          scrolled ? "bg-gray/80 backdrop-blur-lg " : ""
        }`}
      >
        <nav className="text-black px-6">
          <div className="ml-4 flex flex-col md:flex-row md:items-center pb-6 pt-8 md:pt-12 md:pb-6 md:px-0">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-start md:items-center font-medium">
              {navItems.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndex(i);
                      document
                        .querySelector(item.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`px-4 py-2 rounded-full transition-all hover:text-violet-200 ${
                      activeIndex === i
                        ? "border border-white text-white"
                        : "text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="hidden md:block bg-black text-white px-4 py-2 rounded-full font-semibold mt-4 md:mt-0"
            >
              ¡Contáctame!
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}