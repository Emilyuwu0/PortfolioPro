/* import Image from "next/image"; */

import LeftBack from "@/components/leftBack";
import RightBack from "@/components/rightBack";

export default function Home() {
  return (
<div className="md:grid md:grid-cols-[1.5fr_3fr] h-screen overflow-hidden pt-2">

  <div className="md:relative hidden md:block">
  <div className="fixed top-0 left-0 h-screen w-[35%] lg:w-[30%] xl:w-[33%] z-10">
    <LeftBack />
  </div>
</div>

  <div className="block md:hidden">
    <LeftBack />
  </div>

  <div className="h-full overflow-y-auto  px-4">
    <RightBack />
  </div>
</div>


  );
}
