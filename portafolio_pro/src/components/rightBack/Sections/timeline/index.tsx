"use client";
import SlideUpSection from "@/components/Util";
import AnimatedList from "@/components/Ui/RBits/AnimeList";

export default function Timeline() {
  const experience = [
    {
      id: "7",
      name: "UX/UI & Frontend Developer",
      date: "Ene. 2025 – Actualidad",
      company: "Freelance · Proyectos internacionales",
    },
    {
      id: "6",
      name: "CMS, UX/UI & Frontend Developer",
      date: "Sept. 2024 – Dic. 2024",
      company: "Kickoff Advertising · Jornada completa",
    },
    {
      id: "5",
      name: "Frontend Developer",
      date: "Oct. 2022 – Ene. 2024",
      company: "AntPack · Jornada completa",
    },
    {
      id: "4",
      name: "Frontend Developer",
      date: "Ene. 2021 – Oct. 2022",
      company: "IPCOM · Jornada completa",
    },
    {
      id: "3",
      name: "Junior Frontend Developer",
      date: "Sept. 2020 – Nov. 2020",
      company: "Pyra Lab · Jornada completa",
    },
    {
      id: "2",
      name: "Junior Frontend Developer",
      date: "Mar. 2020 – Sept. 2020",
      company: "Chefmenu · Jornada completa",
    },
    {
      id: "1",
      name: "2016 – 2020",
      date: "Tecnología en Desarrollo de Software",
      company: "Universidad Agustiniana",
    },
    {
      id: "0",
      name: "2000 – 2015",
      date: "Educación Secundaria",
      company: "Colegio Brasilia Bosa IED",
    },
  ];

  return (
    <div id="resume" className="scroll-mt-20 mt-20 lg:mt-10">
      <div className="bg-[#060010] border border-[#271e37] rounded-[20px] flex flex-col lg:flex-row justify-center items-center overflow-hidden lg:pt-4 pt-14 pb-2 lg:pb-4 px-9 gap-8">
        {/* Columna de texto */}

        <div className="flex flex-col justify-center  text-left w-full lg:w-1/2 space-y-6">

          {/* 
          <SlideUpSection>
            <AnimatedContent blur duration={800} easing="ease-out" initialOpacity={0}>
              <ShinyText
                text="⋆ Resumen"
                disabled={false}
                speed={3}
                className="shiny-button text-base sm:text-lg  ml-10"
              />
            </AnimatedContent>
          </SlideUpSection> */}
          <SlideUpSection delay={200}>
            <h2 className="hero-title text-3xl sm:text-4xl font-bold leading-tight ml-10 -mt-4 ">
              Trayectoria
            </h2>
          </SlideUpSection>

          <SlideUpSection delay={210}>
            <h3 className="hero-title -mt-6 text-3xl sm:text-5xl font-bold leading-tight ml-10">
              Profesional y formación académica.
            </h3>
          </SlideUpSection>

          <SlideUpSection delay={250}>
            <p className="text-[#a194b8e6] -mt-2 text-left ml-10">Frontend Developer & UX/UI</p>
          </SlideUpSection>
        </div>

        {/* Columna de lista */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2 ml-8">
          <AnimatedList
            items={experience.map(
              (exp) => `${exp.date} - ${exp.name} at ${exp.company}`
            )}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients={true}
            enableArrowNavigation={true}
            displayScrollbar={true}
          />
        </div>
      </div>
    </div>
  );
}
