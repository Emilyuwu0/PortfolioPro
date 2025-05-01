import Image from "next/image";
import Button from "@/components/Ui/Button";
import Navbar from "@/components/rightBack/Navbar";
import "../../app/globals.css";

export default function RightBack() {
  return (
    <div className="mt-10   ">
      <Navbar />

      <div className="mt-40 ml-8">
        {/*   Second Section */}

        <div>
          <button className="meet-button mb-4 text-sm sm:text-base">
            <span>⋆ </span>
            Portafolio
          </button>
          <h3 className="hero-title text-3xl sm:text-5xl lg:text-5xl font-semibold leading-tight sm:leading-tight lg:leading-tight mb-8">Mis proyectos destacados</h3>

          <div className="grid grid-cols-2 grid-rows-2 gap-6">
            <div className="w-full rounded-lg p-6 backgroundSecondary radius">1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>

        <div>
          <button className="meet-button mb-4 text-sm sm:text-base">
            <span>⋆ </span>
            Sobre mi
          </button>
          <h2>NAme</h2>
          <div className="grid grid-cols-3 grid-rows-1 gap-6">
            <div>1</div>
            <div>2</div>
            <div>5</div>
          </div>

          <div className="grid grid-cols-3 grid-rows-1 gap-6">
            <div>1</div>
            <div>2</div>
          </div>
        </div>

        <div>
        <button className="meet-button mb-4 text-sm sm:text-base">
            <span>⋆ </span>
           Educación
          </button>  

          <h2>asdsad</h2>
        </div>
        
        
        
             </div>
    </div>
  );
}
