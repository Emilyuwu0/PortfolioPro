"use client";
import { useState } from "react";
import Modal from "@/components/rightBack/Modal";
import IPCOM from "@/assets/projects/ipcom.webp";
import INNOVA from "@/assets/projects/innvoa.webp";
import Lil from "@/assets/projects/lilIn.webp";
import Shipyard from "@/assets/projects/ship.webp";
import Ces from "@/assets/projects/ces.webp";
import GWS from "@/assets/projects/gws.webp";
import LoanCheetah from "@/assets/projects/loancheetah.jpg";
import Arcadia from "@/assets/projects/arcadia.webp";
import EzCar from "@/assets/projects/ezcar.jpg";
import AllMan from "@/assets/projects/allman.jpg";
import Enfok2 from "@/assets/projects/enfoka2.png";
import DragonBall from "@/assets/projects/dragonBall.jpg";

import Portok from "@/assets/projects/portok.jpg";
import Vole from "@/assets/projects/vole.jpg";
import Respect from "@/assets/projects/xrespect2.png";
import SlideUpSection from "@/components/Util";
type Project = {
  imgProject: string;
  name: string;
  date: string;
  description: string;
  url: string;
};

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState<Project[] | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string>("");
  const frontendProjects: Project[] = [
    {
      imgProject: IPCOM.src,
      name: "Página Web IPCOM",
      date: "Sept. 2021 - Feb. 2022",
      description: "Desarrollo de la página web principal de IPCOM, una plataforma de soluciones de comunicación omnicanal con enfoque en inteligencia artificial, automatización y análisis conversacional.",
      url: "https://ipcom.ai",
    },
    {
      imgProject: INNOVA.src,
      name: "Página Web INNOVA",
      date: "Sept. 2022",
      description: "Desarrollo freelance del sitio web corporativo de INNOVA, enfocado en soluciones tecnológicas para negocios en Paraguay.",
      url: "https://innovapya.com/#!/-bienvenido/",
    },
    {
      imgProject: Lil.src,
      name: "Página Web Lil Interns",
      date: "Dic. 2022 - Ene. 2023",
      description: "Desarrollo web en colaboración con AntPack para Lil Interns, una plataforma educativa enfocada en conectar estudiantes con oportunidades laborales.",
      url: "https://www.lilinterns.com",
    },
    {
      imgProject: Shipyard.src,
      name: "Intranet Shipyard",
      date: "Oct. 2022 - Ene. 2023",
      description: "Desarrollo de plataforma interna para gestión operativa y automatización de procesos, en colaboración con AntPack.",
      url: "https://tryshipyard.com",
    },
    {
      imgProject: Ces.src,
      name: "Página Web Ceslegal",
      date: "Abr. 2023",
      description: "Diseño y desarrollo freelance del sitio web institucional para la firma de abogados Ceslegal, enfocado en usabilidad y presencia profesional.",
      url: "https://ceslegal.co",
    },
    {
      imgProject: GWS.src,
      name: "Intranet GWS",
      date: "Feb. 2023 - Dic. 2023",
      description: "Desarrollo de intranet corporativa para gestión de procesos internos en GWS, realizada en colaboración con AntPack.",
      url: "https://gws.antpk.co/login",
    },
    {
      imgProject: LoanCheetah.src,
      name: "Loan Cheetah",
      date: "Sept. 2024 - Dic. 2024",
      description: "Desarrollo web en colaboración con Kickoff Advertising para Loan Cheetah, una plataforma de préstamos rápidos en línea.",
      url: "https://gws.antpk.co/login",
    },
    {
      imgProject: EzCar.src,
      name: "Ez Car Title Loans",
      date: "Nov. 2024",
      description: "Desarrollo del sitio web para Ez Car Title Loans junto a Kickoff Advertising, enfocado en servicios financieros accesibles.",
      url: "https://www.ezcartitleloans.com/",
    },
    {
      imgProject: AllMan.src,
      name: "All Man Title Loans",
      date: "Nov. 2024",
      description: "Colaboración con Kickoff Advertising en el desarrollo de la plataforma web para All Man Title Loans, especializada en préstamos con título de auto.",
      url: "https://www.allmantitleloans.com/",
    },
    {
      imgProject: DragonBall.src,
      name: "Dragon Ball Lore",
      date: "May 2025",
      description: "Desarrollo del sitio web para Dragon Ball Lore, una plataforma dedicada a la comunidad de fans de Dragon Ball, con recursos y contenido exclusivo.",
      url: "https://dragon-ball-uwu.vercel.app/",
    },

    {
      imgProject: Enfok2.src,
      name: "Enfoka2 RP",
      date: "Agt. 2025",
      description: "Desarrollo y Diseño del sitio web para Enfoka2 RP, un servidor de roleplay en FiveM, enfocado en brindar una experiencia de usuario atractiva e informativa.",
      url: "https://enfok2rp.com/",
    }




  ];

  const uxProjects: Project[] = [
    {
      imgProject: Arcadia.src,
      name: "Arcadia RP",
      date: "Dic. 2023",
      description: "Diseño y desarrollo del sitio web para Arcadia RP, un servidor de roleplay en FiveM, enfocado en brindar una experiencia de usuario atractiva e informativa.",
      url: "https://arcadiarp.vercel.app",
    },
    {
      imgProject: Portok.src,
      name: "Portafolios",
      date: "2023 - 2024",
      description: "Diseño y desarrollo freelance de múltiples propuestas de portafolios profesionales, presentadas como conceptos en Figma.",
      url: "https://www.figma.com/design/5BpO2pFdMnuN5eu4WSpKN9/Portafolio-Emily-%F0%9F%92%9C?node-id=1166-320",
    },
    {
      imgProject: Vole.src,
      name: "Volé",
      date: "Dic. 2024",
      description: "Diseño de interfaz web y móvil para Volé, una plataforma conceptual creada en colaboración con Kickoff Advertising, con enfoque en experiencia de usuario y branding.",
      url: "https://www.figma.com/design/h4nl60i9V2bAYkusUwIC9Q/Vol%C3%A9-Mobile?node-id=55-284",
    },
    {
      imgProject: Respect.src,
      name: "XRespect",
      date: "Abr. 2025",
      description: "Diseño e implementación de la interfaz de usuario para XRespect (Inventario, menus y demás), una plataforma creada para un servidor de FiveM, enfocada en la gestión de comunidad y experiencia inmersiva.",
      url: "https://www.figma.com/design/YuujVkhM9LJp2xhRsApdiB/XRespect?node-id=0-1",
    }

  ];



  const handleOpenModal = (projects: Project[], label: string) => {
    setSelectedProjects(projects);
    setModalOpen(true); setSelectedLabel(label);
  };

  return (
    <div id="portfolio" className="mt-20">
      <SlideUpSection>
        <button className="meet-button mb-4 text-sm sm:text-base">
          <span>⋆ </span>
          Portafolio
        </button>
      </SlideUpSection>

      <SlideUpSection delay={550}>
        <h4 className="hero-title text-3xl sm:text-5xl font-semibold mb-8" id="works">
          Mis proyectos destacados
        </h4>
      </SlideUpSection>
      <SlideUpSection delay={600}>
        <p>Mis trabajos más recientes, donde aplico nuevas tecnologías y soluciones creativas para resolver problemas reales mediante diseño y código.</p>
      </SlideUpSection>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-16 mb-36 mt-10">
        {[
          { label: "Frontend Dev", data: frontendProjects },
          { label: "UX / UI", data: uxProjects },
        ].map(({ label, data }) => (
          <div
            key={label}
            onClick={() => handleOpenModal(data, label)}
            className="color-bg cursor-pointer group relative inline-block rounded-xl transition-transform duration-300 hover:scale-105 min-h-[350px] sm:min-h-[500px] md:min-h-[500px]"
          >
            <SlideUpSection delay={650}>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
              <div
                className={`relative z-10 p-2 h-full ${label === "Frontend Dev"
                    ? "backgroundCardPort"
                    : label === "UX / UI"
                      ? "backgroundCardPortTwo"
                      : ""
                  }`}
              >
                <div className="flex flex-row items-end h-full p-2 w-full justify-between">
                  <div>
                    <p className="text-2xl font-bold">{label}</p>
                    <p>Ver más</p>
                  </div>
                  <svg
                    className="w-8 h-8 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M13 18l6-6"></path>
                    <path d="M13 6l6 6"></path>
                  </svg>
                </div>
              </div>
            </SlideUpSection>
          </div>

        ))}
      </div>


      {modalOpen && selectedProjects && (
        <Modal
          projects={selectedProjects}
          onClose={() => setModalOpen(false)}
          label={selectedLabel}
        />
      )}
    </div>
  );
}
