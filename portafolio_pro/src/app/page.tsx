"use client";

import { useRef } from "react";
import LeftBack from "@/components/leftBack";
import RightBack from "@/components/rightBack";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <div className="md:grid md:grid-cols-[1.5fr_3fr] h-full overflow-hidden pt-2 overflow-mobile  scroll-transparent">
      <div className="hidden md:block md:relative h-full">
        <div className="fixed top-0 left-6 sm:left-12 h-screen w-[35%] lg:w-[30%] xl:w-[30%] z-10 ">
          <LeftBack />
        </div>
      </div>

      {/* En móvil: LeftBack se muestra arriba en flujo normal */}
      <div className="block md:hidden w-full px-4 pb-6">
        <LeftBack />
      </div>
      <div
        ref={scrollRef}
        className="
        mt-10 md:mt-24
    max-h-screen
    lg:h-full
    xl:h-[90%]
    overflow-visible md:overflow-y-auto
    px-2
    md:pr-6
    lg:pr-8
    xl:pr-12
    scroll-transparent
  "
      >
        <RightBack />
      </div>

    </div>
  );
}
