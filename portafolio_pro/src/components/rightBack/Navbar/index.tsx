

import Button from "@/components/Ui/Button";
import SlideUpSection from "@/components/Util";

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About Me", href: "#about" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <>
      {/* Navbar fijo */}
      <div className="top-10 fixed w-full max-w-7xl px-6 z-50">
      <nav className="-lg text-white">
        <div className="flex items-center justify-between">
          <ul className="flex space-x-8 items-center font-medium">
            {navItems.map((item, i) => (
              <li key={item.href} className="relative">
                <input
                  type="radio"
                  name="nav"
                  id={`nav-${i}`}
                  defaultChecked={i === 0}
                  className="hidden peer"
                />
                <label
                  htmlFor={`nav-${i}`}
                  className="cursor-pointer px-4 py-2 rounded-full transition-all
                    peer-checked:border peer-checked:border-white peer-checked:text-white
                    text-gray-400 hover:text-white"
                >
                  <a href={item.href}>{item.label}</a>
                </label>
              </li>
            ))}
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
                <Button colorClass="backgroundButtons">Trabajos</Button>
                <Button colorClass="backgroundButtons mr-4">Curriculum</Button>
              </div>       
                  </SlideUpSection>
            </div>
 
         
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
