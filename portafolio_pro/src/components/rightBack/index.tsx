"use client";

/* import SplitText from "../Ui/RBits/SplitText";
import AnimatedContent from "@/components/Ui/RBits/AnimatedContent"; */
import Navbar from "@/components/rightBack/Navbar";
import Projects from "@/components/rightBack/Sections/projects";
import AboutMe from "@/components/rightBack/Sections/aboutMe";
import Timeline from "@/components/rightBack/Sections/timeline";
import Tools from "@/components/rightBack/Sections/toolsFav";
import Contact from "@/components/rightBack/Sections/contact";
/* import Button from "@/components/Ui/Button"; */
/* import SlideUpSection from "@/components/Util"; */
import "../../app/globals.css";
/* import ShinyText from '../Ui/RBits/ShinyText'; */




export default function RightBack() {
  return (
    <div className="w-full">

      <div className=" mt-10 sm:mt-32 xl:mt-44 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">



        {/*   <div className="pt-20 sm:pt-32 pb-16 sm:pb-32" id="home">
          <div className="w-full rounded-lg">
            <AnimatedContent
              blur={true} duration={1000} easing="ease-out" initialOpacity={0}
            >
              <ShinyText
                text="⋆ Comencemos"
                disabled={false}
                speed={3}
                className='shiny-button text-base sm:text-base mb-6'
              />
            </AnimatedContent>


            <div className="hero-section">
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold leading-snug sm:leading-tight text-center">
                <div className="mb-2 sm:mb-4 text-left">
                  <SplitText
                    tag="h1"
                    style={{ fontSize: '4rem' }}
                    text={[
                      <span key="l1" style={{ display: 'block', marginBottom: 8 }}>I&apos;m Emily Orduz</span>,
                      <span key="l2" style={{ display: 'block', marginBottom: 6, fontSize: "3rem" }}>Ux | Ui</span>,
                      <span key="l3" style={{ display: 'block', fontSize: "3rem" }}>Frontend Developer.</span>,
                    ]}
                    className="font-semibold text-left block bg-gradient-to-r from-[#9f9aff] to-[#6600ff] bg-clip-text text-transparent"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left"
           
                  />

                </div>

              </h1>


              <div className="flex justify-start mt-10 sm:mt-14 w-full max-w-[220px]">
                <a href="../../../assets/doc/CV-EmilyOrduz.docx" download>
                  <Button colorClass="backgroundButtons mr-6 mb-6">
                    Curriculum
                  </Button>
                </a>
              </div>

            </div>
          </div>
        </div> */}
        <div className='ml-2'>
          <Navbar />
          <Projects />
          <AboutMe />
          <Timeline />
          <Tools />
          <Contact />
        </div>

      </div>
    </div>
  );
}
