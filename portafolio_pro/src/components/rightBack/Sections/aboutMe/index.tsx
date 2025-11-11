"use client";

import ShinyText from "@/components/Ui/RBits/ShinyText";
import SlideUpSection from "@/components/Util";
import AnimatedContent from "@/components/Ui/RBits/AnimatedContent";
export default function AboutMe() {
  const metrics = [
    { id: 1, value: "12+", label: "Proyectos completados", delay: 400 },
    { id: 2, value: "2+", label: "Años de experiencia", delay: 600 },
    { id: 3, value: "4+", label: "Empresas colaboradoras", delay: 800 },
  ];

  return (
    <div className="mb-20 xl:mb-24 mt-20  sm:mt-40 sm:mb-60 scroll-mt-16" id="about">
      {/* Título seccional */}
      <SlideUpSection>
        <AnimatedContent blur duration={800} easing="ease-out" initialOpacity={0}>
          <ShinyText
            text="⋆ Sobre mí"
            disabled={false}
            speed={3}
            className="shiny-button text-base sm:text-lg mb-6"
          />
        </AnimatedContent>
      </SlideUpSection>

      {/* Título principal SEO-friendly */}
      <SlideUpSection delay={200}>
        <h3 className="hero-title text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight lg:leading-tight mb-10">
          Transformo ideas complejas en interfaces <br />simples y funcionales.
        </h3>
      </SlideUpSection>

      {/* Métricas destacadas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-10 max-w-6xl pr-4 sm:pr-8">
        {metrics.map((metric) => (
          <SlideUpSection key={metric.id} delay={metric.delay}>
            <div
              className="relative w-full max-w-sm sm:max-w-sm lg:max-w-xl min-h-[10em]
              border border-[#392e4e] rounded-2xl 
              bg-gradient-to-br from-[#060010] via-[#060010] to-[#060010]/40 
              text-white font-nunito p-6 flex flex-col justify-center items-center
              backdrop-blur-[10px] transition-all duration-500 
              hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30
              cursor-pointer overflow-hidden group/card will-change-transform backgroundTools "
            >
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-fuchsia-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,190,0.08),transparent_60%)] group-hover/card:animate-pulse" />

              {/* Luces decorativas */}
              <div className="absolute top-3 right-3 flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-300/40" />
                <span className="w-2 h-2 rounded-full bg-purple-300/25" />
                <span className="w-2 h-2 rounded-full bg-purple-300/10" />
              </div>

              {/* Contenido */}
              <div className="relative z-10 text-center space-y-3 transition-transform duration-300 group-hover/card:-translate-y-[2px]">
                <h3 className="text-5xl font-[900] bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
                  {metric.value}
                </h3>
                <p className="text-md text-[#a194b8e6] leading-relaxed font-light">
                  {metric.label}
                </p>
              </div>
            </div>
          </SlideUpSection>
        ))}
      </div>

      {/* Contenido descriptivo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
        {/* Texto principal */}
        <div className="md:col-span-2 text-center md:text-left max-w-2xl mx-auto md:mx-0">
          <SlideUpSection delay={900}>
            <p className="text-base leading-relaxed text-white/70  text-left">
              Soy <strong className="text-white">Emily Orduz</strong>, una <strong className="text-white">desarrolladora frontend</strong> apasionada por crear
              <strong className="text-white"> interfaces web modernas, accesibles y funcionales</strong>.
              Combino la tecnología y el diseño para transformar ideas en experiencias digitales claras y atractivas.
            </p>

            <p className="mt-5 text-base leading-relaxed text-white/70 text-left">
              Trabajo con <strong className="text-white">React</strong>, <strong className="text-white">Vue</strong> y <strong className="text-white">Gatsby</strong>,
              priorizando el <strong className="text-white">rendimiento</strong>, la <strong className="text-white">accesibilidad</strong>
              y la <strong className="text-white">experiencia de usuario</strong>.
              Mi objetivo es crear productos digitales que destaquen por su calidad y fluidez.
            </p>

            <p className="mt-5 text-base leading-relaxed text-white/70  text-left" >
              Apasionada por la <strong className="text-white">tecnología</strong> y la <strong className="text-white">creatividad</strong>,
              disfruto explorar tendencias en diseño digital, la <strong className="text-white">música indie</strong>, los <strong className="text-white">videojuegos</strong>
              y la <strong className="text-white">fotografía urbana</strong>.
              También participo en <strong className="text-white">comunidades tecnológicas</strong> y proyectos donde el diseño genera un impacto positivo.
            </p>
          </SlideUpSection>


          {/* Datos personales */}

        </div>


        {/* Info personal */}
        {/* Info personal minimalista */}
        <div className="text-center md:text-left text-white/70">
          <SlideUpSection delay={1100}>
            <ul className="grid grid-cols-1 gap-4 text-left">
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">Nombre</span>
                <span className="text-base font-semibold text-white">Emily Orduz</span>
              </li>

              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">Correo</span>
                <a
                  href="mailto:imemilyorduz@gmail.com"
                  className="text-base font-semibold text-white hover:text-pink-soft-color transition-colors"
                >
                  imemilyorduz@gmail.com
                </a>
              </li>

              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">Idiomas</span>
                <span className="text-base font-semibold text-white">Español (nativo)</span>
                <span className="block text-base font-semibold text-white">Inglés (A2)</span>
              </li>

              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">Ubicación</span>
                <span className="text-base font-semibold text-white">Colombia · Trabajo remoto</span>
              </li>
            </ul>
          </SlideUpSection>
        </div>

      </div>
    </div>
  );
}
