/*************  ✨ Windsurf Command ⭐  *************/
import Link from 'next/link';
import Button from "@/components/Ui/Button";

export default function Navbar() {
  return (
    <>
      {/* Navbar fijo */}
      <div className=" top-10  fixed w-full max-w-7xl px-6 z-50">
        <nav className="-lg  text-white ">
          <div className="flex items-center justify-between">
            <ul className="flex space-x-8 items-center font-medium">
              <li>
                <a
                  href="#"
                  className="px-4 py-2 rounded-full border border-white text-white font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Me
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  Contact
                </a>
              </li>
             
            </ul>
            <Button>Vamos!</Button>
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
  
            <div className=" mt-16 flex justify-center">
              <svg viewBox="0 0 100 100" className="w-24 h-24">
                <path
                  d="M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
                  fill="none"
                  stroke="#f0f0f0"
                  strokeWidth="2"
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#f0f0f0"
                  fontSize="8"
                >
                  SCROLL FOR MORE
                </text>
                <path
                  d="M50,86 L50,94 L45,89 M50,94 L55,89"
                  stroke="#f0f0f0"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
