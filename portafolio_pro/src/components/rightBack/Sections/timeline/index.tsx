import SlideUpSection from "@/components/Util";
export default function Timeline() {
  const Activity = [
    {

        id: "0",
        name: " UX/UI, Frontend Developer",
        date: "Ene. 2025 - Actualidad",
        item: "Freelance",
  
    },

    {
        id: "1",
        name: "CMS, UX/UI, Frontend Developer",
        date: "Sept. 2024 - Dic. 2024",
        item: "Kickoff Advertising  · Jornada completa",
    },
    {
      id: "2",
      name: "Frontend Developer",
      date: "Oct. 2022 - Ene, 2024",
      item: "AntPack · Jornada completa"
    },
    {
      id: "3",
      name: "Frontend Developer",
      date: "Ene. 2021 - Oct. 2022",
      item: "IPCOM · Jornada completa", 
    },
    {
      id: "4",
      name: "Junior Frontend",
      date: "Setp. 2020 - Nov. 2020",
      item: "Pyra Lab · Jornada completa",  
    },
    {
      id: "5",
      name: "Junior Frontend",
      date: "Mar. 2020 - Sept. 2020",
      item: "Chefmenu · Jornada completa", 
    },
  ];
  return (
    <div id="resume">
      <SlideUpSection>
            <button className="meet-button mb-4 text-sm sm:text-base">
        <span>⋆ </span>
        Resumen
      </button>
      </SlideUpSection>      <SlideUpSection delay={200}>
      <h3 className="hero-title text-3xl sm:text-5xl lg:text-5xl font-semibold leading-tight sm:leading-tight lg:leading-tight mb-8">
        Educación
      </h3>

      <section className="py-10">
        <div className="space-y-8">
          <div className="grid grid-cols-3 border-t border-gray-600 pt-6">
            <div className="text-sm text-gray-400">2016 – 2020</div>
            <div>
              <h3 className="font-semibold text-white">
                Tecnología en Desarrollo <br /> de Software
              </h3>
            </div>
            <div className="text-gray-400">Universidad Agustiniana</div>
          </div>

          <div className="grid grid-cols-3 border-t border-gray-600 pt-6">
            <div className="text-sm text-gray-400">2000 – 2015</div>
            <div>
              <h3 className="font-semibold text-white">Educación Secundaria</h3>
            </div>
            <div className="text-gray-400">Colegio Brasilia Bosa IED</div>
          </div>
        </div>
      </section>
      </SlideUpSection>  <SlideUpSection delay={400}>
      <h3 className="mt-20 hero-title text-3xl sm:text-5xl lg:text-5xl font-semibold leading-tight sm:leading-tight lg:leading-tight mb-8">
        Experiencia Laboral
      </h3>

    
      <section className="py-10">
        <div className="space-y-8">
          {Activity.map(({ id, name, date, item , description}) => (
            <div
              key={id}
              className="grid grid-cols-3 border-t border-gray-600 pt-6 text-sm text-gray-300"
            >
              <div className="text-gray-400">{date}</div>

              <div className="flex items-start gap-2">
                <div>
                  <h3 className="font-semibold text-md text-white">{name}</h3>

                </div>
              </div>

              <p className="text-sm text-gray-400">{item}</p>
            </div>
          ))}
        </div>
      </section>
      </SlideUpSection>
    </div>
  );
}
