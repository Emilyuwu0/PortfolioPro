"use client";
import { useState, useEffect } from "react";
import Button from "@/components/Ui/Button";
import SlideUpSection from "@/components/Util";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false); 

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Portafolio", href: "#portfolio" },
    { label: "Sobre mí", href: "#about" },
    { label: "Resumen", href: "#resume" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="pt-12">
<div className="fixed top-0 w-5xl px-4 sm:px-6 z-50 transition-colors duration-300 md:block hidden">
  <nav className="text-white">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between colorPrincipal pb-6 pt-8 md:pt-12 md:pb-10 md:px-0">
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
              className={`px-4 py-2 rounded-full transition-all hover:text-white ${
                activeIndex === i
                  ? "border border-white text-white"
                  : "text-gray-400"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="hidden md:block bg-white text-black px-4 py-2 rounded-full font-semibold mt-4 md:mt-0"
      >
        ¡Contáctame!
      </a>
    </div>
  </nav>
</div>

      <div className="overflow-y-auto h-full">
        <div className="md:pt-80 px-6 sm:pt-8">
          <div className="w-full rounded-lg">
            <div>
              <SlideUpSection>
                <button className="meet-button mb-4 text-sm sm:text-base">
                  <span>⋆ </span>
                  Comenzemos
                </button>
              </SlideUpSection>

              <div className="hero-section">
                <SlideUpSection delay={300}>
                  <h1 className="hero-title text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight sm:leading-tight lg:leading-tight">
                    I'm Emily Orduz
                    <br />
                    Ux and
                    <br />
                    Frontend Developer.
                  </h1>
                </SlideUpSection>

                <SlideUpSection delay={600}>
                  <div className="flex justify-start w-52 mt-12" id="home">
                    {/*                  <Button colorClass="backgroundButtons" href="#works">Trabajos</Button> */}
                    <a href="../../../assets/doc/CV-EmilyOrduz.docx" download>
                      <Button colorClass="backgroundButtons mr-4 mb-4">
                        Curriculum
                      </Button>
                    </a>
                  </div>
                </SlideUpSection>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
    </div>
  );
}
