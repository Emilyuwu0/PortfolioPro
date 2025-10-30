"use client";
import ShinyText from "@/components/Ui/RBits/ShinyText";
import SlideUpSection from "@/components/Util";
import AnimatedContent from "@/components/Ui/RBits/AnimatedContent";
export default function Timeline() {
  const experience = [
    {
      id: "0",
      name: "UX/UI & Frontend Developer",
      date: "Ene. 2025 – Actualidad",
      company: "Freelance · Proyectos internacionales",
    },
    {
      id: "1",
      name: "CMS, UX/UI & Frontend Developer",
      date: "Sept. 2024 – Dic. 2024",
      company: "Kickoff Advertising · Jornada completa",
    },
    {
      id: "2",
      name: "Frontend Developer",
      date: "Oct. 2022 – Ene. 2024",
      company: "AntPack · Jornada completa",
    },
    {
      id: "3",
      name: "Frontend Developer",
      date: "Ene. 2021 – Oct. 2022",
      company: "IPCOM · Jornada completa",
    },
    {
      id: "4",
      name: "Junior Frontend Developer",
      date: "Sept. 2020 – Nov. 2020",
      company: "Pyra Lab · Jornada completa",
    },
    {
      id: "5",
      name: "Junior Frontend Developer",
      date: "Mar. 2020 – Sept. 2020",
      company: "Chefmenu · Jornada completa",
    },
  ];

  const education = [
    {
      id: "0",
      period: "2016 – 2020",
      title: "Tecnología en Desarrollo de Software",
      place: "Universidad Agustiniana",
    },
    {
      id: "1",
      period: "2000 – 2015",
      title: "Educación Secundaria",
      place: "Colegio Brasilia Bosa IED",
    },
  ];

  return (
    <div id="resume" className="scroll-mt-40">
      {/* Sección título */}
      <SlideUpSection>
       <AnimatedContent blur duration={800} easing="ease-out" initialOpacity={0}>
          <ShinyText
            text="⋆ Resumen"
            disabled={false}
            speed={3}
            className="shiny-button text-base sm:text-lg mb-6"
          />
        </AnimatedContent>
      </SlideUpSection>

      <SlideUpSection delay={200}>
        <h2 className="hero-title text-3xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-8">
          Trayectoria profesional y formación
        </h2>

        {/* Educación */}
        <section className="py-10 pr-4 sm:pr-2">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
            Formación Académica
          </h3>
          <div className="space-y-8">
            {education.map(({ id, period, title, place }) => (
              <div
                key={id}
                className="grid grid-cols-3 border-t border-[#524a5fe6] pt-6 text-gray-300 text-sm"
              >
                <span className="text-[#a194b8e6] ">{period}</span>
                <div>
                  <h4 className="font-semibold text-white">{title}</h4>
                </div>
                <span className="text-[#a194b8e6] ">{place}</span>
              </div>
            ))}
          </div>
        </section>
      </SlideUpSection>

      {/* Experiencia */}
      <SlideUpSection delay={400}>
        <section className="py-10 sm:pr-2">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
            Experiencia Profesional
          </h3>
          <div className="space-y-9">
            {experience.map(({ id, name, date, company }) => (
              <div
                key={id}
                className="grid grid-cols-3 border-t border-[#524a5fe6] pt-6 text-gray-300 text-sm"
              >
                <span className="text-[#a194b8e6] ">{date}</span>
                <div>
                  <h4 className="font-semibold text-white">{name}</h4>
                </div>
                <span className="text-[#a194b8e6] ">{company}</span>
              </div>
            ))}
          </div>
        </section>
      </SlideUpSection>
    </div>
  );
}
