import SlideUpSection from "@/components/Util";
export default function AboutMe() {
  return (
    <div className="mb-24 sm:mt-60 sm:mb-60" id="about">
      <SlideUpSection>
        <button className="meet-button mb-4 text-sm sm:text-base">
          <span>⋆ </span>
          Sobre mi
        </button>
      </SlideUpSection>
      <SlideUpSection delay={200}>
        <h3 className="hero-title text-3xl sm:text-5xl lg:text-5xl font-semibold leading-tight sm:leading-tight lg:leading-tight mb-8">
          Transformo ideas complejas en interfaces simples y funcionales
        </h3>
      </SlideUpSection>
      <div className="grid grid-cols-3 grid-rows-1 gap-6">
        <SlideUpSection delay={400}>
          <div className="backgroundDivAbout mb-10 p-8">
            <span className="block hero-title text-5xl font-semibold leading-tight sm:leading-tight lg:leading-tight text-center">
              {" "}
              12+
            </span>
            <span className="text-center">Proyectos realizados</span>
          </div>
        </SlideUpSection>
        <SlideUpSection delay={600}>
          <div className="backgroundDivAbout mb-10  p-8">
            <span className="block hero-title text-5xl font-semibold leading-tight sm:leading-tight lg:leading-tight text-center">
              {" "}
              2+
            </span>
            <span className="text-center"> Años de experiencia</span>{" "}
          </div>
        </SlideUpSection>
        <SlideUpSection delay={800}>
          <div className="backgroundDivAbout  mb-10  p-8">
            <span className="block hero-title text-5xl font-semibold leading-tight sm:leading-tight lg:leading-tight text-center">
              {" "}
              4+{" "}
            </span>
            <span className="text-center">Empresas colaboradoras</span>{" "}
          </div>
        </SlideUpSection>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 text-center md:text-left">
          <SlideUpSection delay={900}>
            <span className="block bg-pink-soft-color">
              Soy una desarrolladora frontend con una sólida experiencia en la
              creación de interfaces de usuario intuitivas y visualmente
              atractivas. Utilizo tecnologías modernas como React, Vue y Gatsby
              para desarrollar aplicaciones web responsivas, centradas en la 
              accesibilidad y el rendimiento.
              <br /> <br />
              Mi objetivo es aplicar mis habilidades técnicas y conocimientos en
              diseño para crear productos digitales de alta calidad que no solo
              cumplan con los requisitos funcionales, sino que también
              proporcionen una experiencia de usuario excepcional.
            </span>
            <br /> <br />
            <span>
              Amante de la tecnología y la creatividad, disfruto explorar nuevas tendencias en diseño digital y desarrollo web. Me apasiona el aprendizaje continuo, la música indie, los videojuegos y la fotografía urbana. Dedico tiempo a participar en comunidades tech y a colaborar en proyectos sociales donde el diseño impacta positivamente la vida de las personas.
            </span>
          </SlideUpSection>
        </div>
        <div className="text-center md:text-left">
          <SlideUpSection delay={1100}>
            <ul className="ml-2">
              <li>
                <span className="text-sm">Nombre:</span>
                <span className="text-md font-bold block mb-4"> Emily Orduz</span>
              </li>

              <li>
                <span className="text-sm">Correo: </span>
                <span className="text-md font-bold block mb-4">
                  {" "}
                  imemilyorduz@gmail.com
                </span>
              </li>
              <li>
                <span className="text-sm"> Idiomas: </span>
                <span className="text-md font-bold block">
                  {" "}
                  Español (nativo){" "}
                </span>
                <span className="text-md font-bold block"> Inglés A2</span>
              </li>
            </ul>
          </SlideUpSection>
        </div>
      </div>
    </div>
  );
}
