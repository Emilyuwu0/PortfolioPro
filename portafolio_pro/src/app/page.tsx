"use client";

import { useRef } from "react";
import LeftBack from "@/components/leftBack";
import RightBack from "@/components/rightBack";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <div className="md:grid md:grid-cols-[1.5fr_3fr] h-full overflow-hidden pt-2 overflow-mobile ">
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
        className="  overflow-y-auto 
    scroll-transparent 
    min-h-screen 
    px-2 
    pr-0
    sm:pr-0 
    md:pr-10 
    lg:pr-14 
    xl:pr-16"
        ref={scrollRef}
      >
        <RightBack scrollContainerRef={scrollRef as React.RefObject<HTMLElement>} />
      </div>
    </div>
  );
}
