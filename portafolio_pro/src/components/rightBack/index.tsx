import Image from "next/image";
import Button from "@/components/Ui/Button";
import Navbar from "@/components/rightBack/Navbar";
import "../../app/globals.css";

export default function RightBack() {
  return (
    <div className="">
      <Navbar />
      <div>
        <button className="meet-button mb-4">
          <span>⋆ </span>
          Comenzemos
        </button>

        <div className="hero-section">
          <h1 className="hero-title text-6xl font-semibold">
            I'm Emily Orduz
            <br />
            Ux and
            <br />
            Frontend Developer.
          </h1>

          <div className="flex justify-start w-52 mt-10">
            <Button colorClass="backgroundButtons">Trabajos</Button>
            <Button colorClass="backgroundButtons mr-4">Curriculum</Button>
          </div>
        </div>

        <div className="scroll-indicator">
          <svg viewBox="0 0 100 100">
            <path
              d="M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
              fill="none"
              stroke="#f0f0f0"
              stroke-width="2"
            />
            <text
              x="50%"
              y="50%"
              text-anchor="middle"
              dominant-baseline="middle"
              fill="#f0f0f0"
              font-size="8"
            >
              SCROLL FOR MORE
            </text>
            <path
              d="M50,86 L50,94 L45,89 M50,94 L55,89"
              stroke="#f0f0f0"
              stroke-width="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
