import Image from "next/image";
import Button from "@/components/Ui/Button";
import Navbar from "@/components/rightBack/Navbar";

import Projects from "@/components/rightBack/Sections/projects";
import AboutMe from "@/components/rightBack/Sections/aboutMe";
import Timeline from "@/components/rightBack/Sections/timeline";
import Tools from "@/components/rightBack/Sections/toolsFav";
import Contact from "@/components/rightBack/Sections/contact";

import "../../app/globals.css";

export default function RightBack() {
  return (
    <div className="mt-10">
  <Navbar />

  <div className="mt-40 ml-8 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10 paddingContainer">
    {/* Second Section */}
    <div>
      <Projects />
    </div>
    <div>
      <AboutMe />
    </div>
    <div>
      <Timeline />
    </div>
    <Tools />
    <Contact />
  </div>
</div>

  );
}
