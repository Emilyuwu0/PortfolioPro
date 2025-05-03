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
      name: "Pagina Web IPCOM",
      date: "Sept. 2021 - Feb. 2022",
      description: "Asociada con IPCOM",
      url: "https://ipcom.ai",
    },
    {
      imgProject: INNOVA.src,
      name: "Pagina Web INNOVA",
      date: "Sept. 2022",
      description: "Freelance",
      url: "https://innovapya.com/#!/-bienvenido/",
    },
    {
      imgProject: Lil.src,
      name: "Pagina Web Lil Interns",
      date: "Dic. 2022 - Ene. 2023",
      description: "Asociada con AntPack",
      url: "https://www.lilinterns.com",
    },
    {
      imgProject: Shipyard.src,
      name: "Intranet Shipyard",
      date: "Oct. 2022 - Ene. 2023",
      description: "Asociada con AntPack",
      url: "https://tryshipyard.com",
    },
    {
      imgProject: Ces.src,
      name: "Pagina Web Ceslegal",
      date: "Abr. 2023",
      description: "Freelance",
      url: "https://ceslegal.co",
    },
    {
      imgProject: GWS.src,
      name: "Intranet Gws",
      date: "Feb. 2023 - Dic. 2023",
      description: "Asociada con AntPack",
      url: "https://gws.antpk.co/login",
    },
    {
      imgProject: LoanCheetah.src,
      name: "Loan Cheetah",
      date: "Sept. 2024 - Dic. 2024",
      description: "Asociada con Kickoffadvertising",
      url: "https://gws.antpk.co/login",
    },
    {
      imgProject: Arcadia.src,
      name: "Ez Car Title Loans",
      date: "Nov. 2023",
      description: "Asociada con Kickoffadvertising",
      url: "https://www.ezcartitleloans.com/",
    },
    {
      imgProject: Arcadia.src,
      name: "All Man Title Loans",
      date: "Nov. 2023",
      description: "Asociada con Kickoffadvertising",
      url: "https://www.allmantitleloans.com/",
    },
  ];

  const uxProjects: Project[] = [
    {
      imgProject: Arcadia.src,
      name: "Arcadia Rp",
      date: "Dic. 2023",
      description: "Freelance",
      url: "https://arcadiarp.vercel.app",
    },
    {
      imgProject: Arcadia.src,
      name: "Portafolios",
      date: "2023 - 2024",
      description: "Freelance",
      url: "https://www.figma.com/design/5BpO2pFdMnuN5eu4WSpKN9/Portafolio-Emily-%F0%9F%92%9C?node-id=1166-320",
    },
    {
      imgProject: Arcadia.src,
      name: "Vole",
      date: "Dic. 2024",
      description: "KickOff",
      url: "https://www.figma.com/design/h4nl60i9V2bAYkusUwIC9Q/Vol%C3%A9-Mobile?node-id=55-284",
    },
    {
      imgProject: Arcadia.src,
      name: "XRespect",
      date: "Abril. 2025",
      description: "Freelance",
      url: "https://www.figma.com/design/YuujVkhM9LJp2xhRsApdiB/XRespect?node-id=0-1",
    },
  ];

  const otherProjects: Project[] = []; // Puedes llenar si tienes más categorías

  const handleOpenModal = (projects: Project[], label: string) => {
    setSelectedProjects(projects);
    setModalOpen(true); setSelectedLabel(label);
  };

  return (
    <div id="portfolio">
         <SlideUpSection>
      <button className="meet-button mb-4 text-sm sm:text-base">
        <span>⋆ </span>
        Portafolio
      </button>
    </SlideUpSection> 
      <h3 className="hero-title text-3xl sm:text-5xl font-semibold mb-8">
        Mis proyectos destacados
      </h3>

      <div className="grid grid-cols-2 grid-rows-1 gap-6 mb-36">
        {[
          { label: "Frontend Dev", data: frontendProjects },
          { label: "UX / UI", data: uxProjects },
  
        ].map(({ label, data }) => (
          <div
            key={label}
            onClick={() => handleOpenModal(data, label)}
            className="cursor-pointer group relative inline-block rounded-xl transition-transform duration-300 hover:scale-105"
          >   
          <SlideUpSection delay={650}> 
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
            <div className="relative backgroundCardPort z-10 p-4">
              <div className="flex justify-between w-full items-end">
                <div>
                  <p className="text-2xl font-bold mt-20">{label}</p>
                  <p className="">Ver más</p>
                </div>
                <svg
                  className="w-8 h-8 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all mt-60"
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
