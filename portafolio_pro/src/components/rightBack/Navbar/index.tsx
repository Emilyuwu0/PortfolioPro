/*************  ✨ Windsurf Command ⭐  *************/
import Link from 'next/link';
import Button from "@/components/Ui/Button";

export default function Navbar() {

  return (
    <>
      {/* Navbar fijo */}
      <div className="top-10 fixed w-full max-w-7xl px-6 z-50">
  <nav className="-lg text-white">
    <div className="flex items-center justify-between">
      <ul className="flex space-x-8 items-center font-medium">
        <li>
          <a
            href="#"
            className="px-4 py-2 rounded-full  text-white font-semibold focus:border-2 focus:border-white"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-4 py-2 rounded-full text-gray-400 hover:text-white focus:border-2 focus:border-white"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-4 py-2 rounded-full text-gray-400 hover:text-white focus:border-2 focus:border-white"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-4 py-2 rounded-full text-gray-400 hover:text-white focus:border-2 focus:border-white"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-4 py-2 rounded-full text-gray-500 hover:text-white focus:border-2 focus:border-white"
          >
            Contact
          </a>
        </li>
      </ul>
      <button className="bg-white text-black px-4 py-2 rounded-full font-semibold">
        ¡Vamos!
      </button>
    </div>
  </nav>
</div>


      {/* Contenido debajo del navbar fijo */}
      <div className="pt-60 px-6">

              {/*Primera seccion*/}
        <div >
          <div className="w-full rounded-lg ">
          <div>
            <button className="meet-button mb-4 text-sm sm:text-base">
              <span>⋆ </span>
              Comenzemos
            </button>
  
            <div className="hero-section">
              <h1 className="hero-title text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight sm:leading-tight lg:leading-tight">
                I'm Emily Orduz
                <br />
                Ux and
                <br />
                Frontend Developer.
              </h1>
  
              <div className="flex justify-start w-52 mt-12">
                <Button colorClass="backgroundButtons">Trabajos</Button>
                <Button colorClass="backgroundButtons mr-4">Curriculum</Button>
              </div>
            </div>
  
         
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
