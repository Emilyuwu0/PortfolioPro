"use client";

import { useRef } from "react";
import LeftBack from "@/components/leftBack";
import RightBack from "@/components/rightBack";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <div className="fixed z-20 top-0 left-1/2 -translate-x-1/2 flex items-center justify-between w-screen h-[160px] px-16 ] bg-gradient-to-b from-[#060010] to-transparent"></div>
      <div className="md:grid md:grid-cols-[1.5fr_3fr] h-full overflow-hidden pt-2 overflow-mobile  scroll-transparent">
        {/*       v> */}
        <div className="hidden md:block md:relative h-full">
          <div className="fixed top-0 left-6 sm:left-12 h-screen w-[35%] lg:w-[30%] xl:w-[30%] z-10 ">
            <LeftBack />
          </div>
        </div>

        <div className="block md:hidden w-full px-4 pb-6">
          <LeftBack />
        </div>
        <div /*   mt-10 md:mt-14 */ /*    lg:h-full
        xl:h-[90%] */
          ref={scrollRef}
          className="    overflow-y-auto scroll-transparent px-2 min-h-screen"
        >
          <RightBack />
        </div>
      </div>
    </div>
  );
}
