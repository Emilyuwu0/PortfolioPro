"use client";
import { RefObject } from 'react';
import Navbar from "@/components/rightBack/Navbar";

import Projects from "@/components/rightBack/Sections/projects";
import AboutMe from "@/components/rightBack/Sections/aboutMe";
import Timeline from "@/components/rightBack/Sections/timeline";
import Tools from "@/components/rightBack/Sections/toolsFav";
import Contact from "@/components/rightBack/Sections/contact";
import Button from "@/components/Ui/Button";
import SlideUpSection from "@/components/Util";
interface RightBackProps {
  scrollContainerRef: RefObject<HTMLElement>;
}
export default function RightBack({ scrollContainerRef }: RightBackProps) {
  return (
    <div className="w-full">
      <Navbar scrollContainerRef={scrollContainerRef} />

      <div className="mt-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">

        {/* Hero Section */}
        <div className="pt-20 sm:pt-32 pb-16 sm:pb-32" id="home">
          <div className="w-full rounded-lg">
            <SlideUpSection>
              <button className="meet-button mb-4 text-sm sm:text-base text-white">
                <span>⋆ </span>
                Comencemos
              </button>
            </SlideUpSection>

            <div className="hero-section">
              <SlideUpSection delay={300}>
                <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug sm:leading-tight">
                 I&apos;m Emily Orduz
                  <br />
                  Ux | Ui 
                  <br />
                  Frontend Developer.
                </h1>
              </SlideUpSection>

              <SlideUpSection delay={600}>
                <div className="flex justify-start mt-8 sm:mt-12 w-full max-w-[220px]">
                  <a href="../../../assets/doc/CV-EmilyOrduz.docx" download>
                    <Button colorClass="backgroundButtons mr-6 mb-6">
                      Curriculum
                    </Button>
                  </a>
                </div>
              </SlideUpSection>
            </div>
          </div>
        </div>

        {/* Secciones */}
        <Projects />
        <AboutMe />
        <Timeline />
        <Tools />
        <Contact />
      </div>
    </div>
  );
}
