/* import Image from "next/image"; */

import LeftBack from "@/components/leftBack";
import RightBack from "@/components/rightBack";

export default function Home() {
  return (
  <div className="md:grid md:grid-cols-[1.5fr_3fr] h-full overflow-hidden pt-2 md: overflow-y-auto">

      <div className="md:relative hidden md:block h-full overflow-y-auto">
        <div className="fixed top-0 left-0 h-screen w-[35%] lg:w-[30%] xl:w-[33%] z-10">
          <LeftBack />
        </div>
      </div>

      <div className="block md:hidden h-full overflow-y-auto px-4">
        <LeftBack />
      </div>

<div className="overflow-y-auto md:overflow-y-auto px-4 min-h-screen">
  <RightBack />
</div>
    </div>


  );
}
