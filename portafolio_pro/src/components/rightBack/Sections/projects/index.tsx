"use client";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Modal from "@/components/rightBack/Modal";
import IPCOM from "@/assets/projects/ipcom.webp";
import INNOVA from "@/assets/projects/innvoa.webp";
import Lil from "@/assets/projects/lilIn.webp";
import Shipyard from "@/assets/projects/ship.webp";
import Ces from "@/assets/projects/ces.webp";
import GWS from "@/assets/projects/gws.webp";

import LoanCheetah from "@/assets/projects/loancheetah.webp";
import Arcadia from "@/assets/projects/arcadia.webp";
import EzCar from "@/assets/projects/ezcar.webp";
import AllMan from "@/assets/projects/allman.webp";
import Enfok2 from "@/assets/projects/enfoka2.webp";
import DragonBall from "@/assets/projects/dragonBall.webp";

import Portok from "@/assets/projects/portok.webp";
import Vole from "@/assets/projects/vole.webp";
import Respect from "@/assets/projects/xrespect2.webp";
import SlideUpSection from "@/components/Util";
import ShinyText from "@/components/Ui/RBits/ShinyText";
import AnimatedContent from "@/components/Ui/RBits/AnimatedContent";

type Project = {
  imgProject: string;
  name: string;
  date: string;
  description: string;
  url: string;
};

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState<Project[] | null>(
    null
  );
  const [selectedLabel, setSelectedLabel] = useState<string>("");

  const frontendProjects: Project[] = [
    {
      imgProject: IPCOM.src,
      name: "Página Web IPCOM",
      date: "Sept. 2021 - Feb. 2022",
      description:
        "Desarrollo de la página web principal de IPCOM, una plataforma de soluciones de comunicación omnicanal con enfoque en inteligencia artificial, automatización y análisis conversacional.",
      url: "https://ipcom.ai",
    },
    {
      imgProject: INNOVA.src,
      name: "Página Web INNOVA",
      date: "Sept. 2022",
      description:
        "Desarrollo freelance del sitio web corporativo de INNOVA, enfocado en soluciones tecnológicas para negocios en Paraguay.",
      url: "https://innovapya.com/#!/-bienvenido/",
    },
    {
      imgProject: Lil.src,
      name: "Página Web Lil Interns",
      date: "Dic. 2022 - Ene. 2023",
      description:
        "Desarrollo web en colaboración con AntPack para Lil Interns, una plataforma educativa enfocada en conectar estudiantes con oportunidades laborales.",
      url: "https://www.lilinterns.com",
    },
    {
      imgProject: Shipyard.src,
      name: "Intranet Shipyard",
      date: "Oct. 2022 - Ene. 2023",
      description:
        "Desarrollo de plataforma interna para gestión operativa y automatización de procesos, en colaboración con AntPack.",
      url: "https://tryshipyard.com",
    },
    {
      imgProject: Ces.src,
      name: "Página Web Ceslegal",
      date: "Abr. 2023",
      description:
        "Diseño y desarrollo freelance del sitio web institucional para la firma de abogados Ceslegal, enfocado en usabilidad y presencia profesional.",
      url: "https://ceslegal.co",
    },
    {
      imgProject: GWS.src,
      name: "Intranet GWS",
      date: "Feb. 2023 - Dic. 2023",
      description:
        "Desarrollo de intranet corporativa para gestión de procesos internos en GWS, realizada en colaboración con AntPack.",
      url: "https://gws.antpk.co/login",
    },
    {
      imgProject: LoanCheetah.src,
      name: "Loan Cheetah",
      date: "Sept. 2024 - Dic. 2024",
      description:
        "Desarrollo web en colaboración con Kickoff Advertising para Loan Cheetah, una plataforma de préstamos rápidos en línea.",
      url: "https://gws.antpk.co/login",
    },
    {
      imgProject: EzCar.src,
      name: "Ez Car Title Loans",
      date: "Nov. 2024",
      description:
        "Desarrollo del sitio web para Ez Car Title Loans junto a Kickoff Advertising, enfocado en servicios financieros accesibles.",
      url: "https://www.ezcartitleloans.com/",
    },
    {
      imgProject: AllMan.src,
      name: "All Man Title Loans",
      date: "Nov. 2024",
      description:
        "Colaboración con Kickoff Advertising en el desarrollo de la plataforma web para All Man Title Loans, especializada en préstamos con título de auto.",
      url: "https://www.allmantitleloans.com/",
    },
    {
      imgProject: DragonBall.src,
      name: "Dragon Ball Lore",
      date: "May 2025",
      description:
        "Desarrollo del sitio web para Dragon Ball Lore, una plataforma dedicada a la comunidad de fans de Dragon Ball, con recursos y contenido exclusivo.",
      url: "https://dragon-ball-uwu.vercel.app/",
    },

    {
      imgProject: Enfok2.src,
      name: "Enfoka2 RP",
      date: "Agt. 2025",
      description:
        "Desarrollo y Diseño del sitio web para Enfoka2 RP, un servidor de roleplay en FiveM, enfocado en brindar una experiencia de usuario atractiva e informativa.",
      url: "https://enfok2rp.com/",
    },
  ];

  const uxProjects: Project[] = [
    {
      imgProject: Arcadia.src,
      name: "Arcadia RP",
      date: "Dic. 2023",
      description:
        "Diseño y desarrollo del sitio web para Arcadia RP, un servidor de roleplay en FiveM, enfocado en brindar una experiencia de usuario atractiva e informativa.",
      url: "https://arcadiarp.vercel.app",
    },
    {
      imgProject: Portok.src,
      name: "Portafolios",
      date: "2023 - 2024",
      description:
        "Diseño y desarrollo freelance de múltiples propuestas de portafolios profesionales, presentadas como conceptos en Figma.",
      url: "https://www.figma.com/design/5BpO2pFdMnuN5eu4WSpKN9/Portafolio-Emily-%F0%9F%92%9C?node-id=1166-320",
    },
    {
      imgProject: Vole.src,
      name: "Volé",
      date: "Dic. 2024",
      description:
        "Diseño de interfaz web y móvil para Volé, una plataforma conceptual creada en colaboración con Kickoff Advertising, con enfoque en experiencia de usuario y branding.",
      url: "https://www.figma.com/design/h4nl60i9V2bAYkusUwIC9Q/Vol%C3%A9-Mobile?node-id=55-284",
    },
    {
      imgProject: Respect.src,
      name: "XRespect",
      date: "Abr. 2025",
      description:
        "Diseño e implementación de la interfaz de usuario para XRespect (Inventario, menus y demás), una plataforma creada para un servidor de FiveM, enfocada en la gestión de comunidad y experiencia inmersiva.",
      url: "https://www.figma.com/design/YuujVkhM9LJp2xhRsApdiB/XRespect?node-id=0-1",
    },
  ];
  const handleOpenModal = (projects: Project[], label: string) => {
    setSelectedProjects(projects);
    setModalOpen(true);
    setSelectedLabel(label);
  };

  return (
    <section className="mt-0 md:mt-24 pt-6 ">
      <SlideUpSection delay={300}>
        <div id="portfolio" className="scroll-mt-60">
          <AnimatedContent
            blur
            duration={800}
            easing="ease-out"
            initialOpacity={0}
          >
            <ShinyText
              text="⋆ Portafolio"
              disabled={false}
              speed={3}
              className="shiny-button text-base sm:text-lg mb-6"
            />
          </AnimatedContent>
        </div>
      </SlideUpSection>
      <SlideUpSection delay={450}>
        <p
          className="text-2xl lg:text-5xl mb-4 font-bold 
          bg-gradient-to-r from-[#6b5ea1] via-[#8605ff] to-[#9445dd]
          bg-clip-text text-transparent gradient-animate"
        >
          Mis proyectos destacados
        </p>
      </SlideUpSection>
      <SlideUpSection delay={550}>
        <p className="font-light text-[#a194b8e6] max-w-3xl">
          Mis trabajos más recientes, donde aplico nuevas tecnologías y
          soluciones creativas para resolver problemas reales mediante diseño y
          código.
        </p>
      </SlideUpSection>

      <SlideUpSection delay={750}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-14 mt-16 sm:mt-6 xl:mt-16 mb-6 sm:mb-16 xl:mb-36 ">
          {[
            { label: "Frontend Dev", data: frontendProjects },
            { label: "UX / UI", data: uxProjects },
          ].map(({ label, data }) => (
            <article
              key={label}
              onClick={() => handleOpenModal(data, label)}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg min-h-[20em]
                        border border-[#392e4e] rounded-2xl 
                         bg-gradient-to-br from-[#060010] via-[#060010] to-[#060010]/40 
                         text-white font-nunito p-6 flex flex-col justify-between 
                         backdrop-blur-[10px] transition-all duration-500 
                         hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30
                         cursor-pointer overflow-hidden group/card will-change-transform"
            >
              {/* Gradiente animado */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-fuchsia-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,190,0.08),transparent_60%)] group-hover/card:animate-pulse" />

              {/* Luces decorativas */}
              <div className="absolute top-3 right-3 flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-300/40" />
                <span className="w-2 h-2 rounded-full bg-purple-300/25" />
                <span className="w-2 h-2 rounded-full bg-purple-300/10" />
              </div>

              {/* Contenido */}
              <div className="relative z-10 space-y-3 transition-transform duration-300 group-hover/card:-translate-y-[2px] ">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
                  {label}
                </h2>
                <p className="text-sm text-[#a194b8e6] leading-relaxed font-light">
                  {label === "Frontend Dev"
                    ? "Proyectos donde transformo ideas en interfaces funcionales usando React y Next.js."
                    : "Diseños centrados en experiencia y estética, con enfoque UX/UI y prototipado en Figma."}
                </p>
              </div>

              {/* Botón */}
              <button
                className="relative mt-6 w-fit px-5 py-2.5 border border-purple-300/30 rounded-full
                           flex items-center gap-2 text-sm font-medium backdrop-blur-md
                           bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-400/40
                           hover:shadow-md hover:shadow-purple-500/20 active:scale-95
                           transition-all duration-300 overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-purple-500/40 to-purple-600/30 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700" />
                <span className="relative z-10">Ver más</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>

              {/* Glow inferior */}
              <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent blur-sm group-hover/card:animate-pulse" />
            </article>
          ))}
        </div>
      </SlideUpSection>
<AnimatePresence>
  {modalOpen && selectedProjects && (
    <Modal
      projects={selectedProjects}
      onClose={() => setModalOpen(false)}
      label={selectedLabel}
    />
  )}
</AnimatePresence>
    </section>
  );
}
