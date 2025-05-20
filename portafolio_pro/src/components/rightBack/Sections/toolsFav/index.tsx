import SlideUpSection from "@/components/Util";
export default function Tools() {
  const toolsArray = [
    {
      name: "React",
      icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "Vue",
      icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    },
    {
      name: "Unity",
      icon: "https://cdn.worldvectorlogo.com/logos/unity-69.svg",
    },
  ];
  return (
<section className="py-6 px-4 mt-20">
  <SlideUpSection delay={200}>
    <span className="text-center text-2xl sm:text-3xl lg:text-3xl font-semibold leading-tight sm:leading-tight lg:leading-tight mb-8 md:text-left sm:text-center block">
      Mis herramientas favoritas
    </span>
  </SlideUpSection>

  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-6 mt-8 justify-center">
    {toolsArray.map((tool, index) => (
      <SlideUpSection key={tool.name} delay={index * 100}>
        <div className="m-auto w-32 h-24 backgroundTools rounded-xl flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform">
          <img
            src={tool.icon}
            alt={tool.name}
            loading="lazy"
            className="w-10 h-10 mb-2"
          />
          <span className="text-sm text-white">{tool.name}</span>
        </div>
      </SlideUpSection>
    ))}
  </div>
</section>

  );
}
