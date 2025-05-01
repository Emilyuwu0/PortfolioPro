import Arcadia from "@/assets/projects/arcadia.webp";
import Ces from "@/assets/projects/ces.webp";
import DragonBall from "@/assets/projects/dragonBall.jpg";
import GWS from "@/assets/projects/gws.webp";
import INNOVA from "@/assets/projects/innvoa.webp";
import IPCOM from "@/assets/projects/ipcom.webp";
import Lil from "@/assets/projects/lilIn.webp";
import Portf from "@/assets/projects/portfo.webp";
import Shipyard from "@/assets/projects/ship.webp";

export default function Projects() {

      const myprojects = [
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
          date: "Sept. 2022 ",
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
          date: "Abr. 2023 ",
          description: "Freelance",
          url: "https://ceslegal.co",
        },
        {
          imgProject: GWS.src,
          name: "Intranet Gws",
          date: "Feb. 2024 - Dic. 2023",
          description: "Asociada con AntPack",
          url: "https://gws.antpk.co/login",
        },
      ];
  return (
    <div>
      <button className="meet-button mb-4 text-sm sm:text-base">
        <span>⋆ </span>
        Portafolio
      </button>
      <h3 className="hero-title text-3xl sm:text-5xl lg:text-5xl font-semibold leading-tight sm:leading-tight lg:leading-tight mb-8">
        Mis proyectos destacados
      </h3>

      <div className="grid grid-cols-2 grid-rows-2 gap-6  mb-36">
        <div className="group relative inline-block rounded-xl transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
          <div className="relative backgroundCardPort z-10 p-8">
            <div className="flex justify-between w-full items-center">
              <div className="">
                <p className="text-2xl font-bold mt-60">Frontend Dev</p>
                <p className="">Ver más</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-8 h-8 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all mt-60"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
                <path d="M13 18l6 -6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </div>
            {/*       <span className="text-2xl mt-60 block font-semibold">Frontend Dev</span> */}
          </div>
        </div>

        <div className="group relative inline-block rounded-xl transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
          <div className="relative backgroundCardPortTwo z-10 p-8">
            <div className="flex justify-between w-full items-center">
              <div className="">
                <p className="text-2xl font-bold mt-60">UX / UI</p>
                <p className="">Ver más</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-8 h-8 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all mt-60"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
                <path d="M13 18l6 -6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </div>
            {/*       <span className="text-2xl mt-60 block font-semibold">Frontend Dev</span> */}
          </div>
        </div>
        <div className="group relative inline-block rounded-xl transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
          <div className="relative backgroundCardPortTwo z-10 p-8">
            <div className="flex justify-between w-full items-center">
              <div className="">
                <p className="text-2xl font-bold mt-60">Others</p>
                <p className="">Ver más</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-8 h-8 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all mt-60"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
                <path d="M13 18l6 -6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
