"use client";
import SlideUpSection from "@/components/Util";
import CardSwap from "../../../Ui/RBits/CardSwap";
import AnimatedContent from "@/components/Ui/RBits/AnimatedContent";
import ShinyText from "@/components/Ui/RBits/ShinyText";
export default function AboutMe() {
  return (<div className="xl:mb-32 scroll-mt-40" id="about" >
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
    <CardSwap />
  </div>)
}
