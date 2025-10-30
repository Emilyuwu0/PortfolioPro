"use client";

import Image from "next/image";
import Kitty from "@/assets/code.webp";
import Profile from "@/assets/profile_icon.webp";
import Button from "@/components/Ui/Button";
import "../../app/globals.css";
import SlideUpSection from "../Util";

export default function LeftBack() {
  return (

    <section className="flex flex-col items-center justify-center h-full w-full p-2 xl:px-10">
      <SlideUpSection delay={350}>
        <article className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm xl:max-w-sm bg-gradient-to-br from-[#000000] to-[#230c47]   p-6  backdrop-blur-xl rounded-3xl border border-[#392e4e] hover:border-purple-500/30 transition-all duration-500 shadow-lg">
          {/* Header */}
          <header className="flex items-center gap-3 mb-6 mt-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3a1b6f] to-[#2e194e] flex items-center justify-center">
              <span className="text-white font-bold text-lg"><Image
                src={Kitty}
                alt="Icon Profile"

              /> </span>
            </div>
            <h1 className="text-white text-2xl font-[900] tracking-wide">
              Emily Orduz
            </h1>
          </header>

          {/* Imagen principal */}
          <figure className="relative mb-8">
            <Image
              src={Profile}
              alt="Foto de perfil"
              className="w-full h-auto rounded-2xl object-cover brightness-[0.9] contrast-[1.05]"
              priority
            />
          </figure>

          {/* Info */}
          <div className="mb-8 text-white font-light space-y-4">
            <div className="flex items-center gap-3 group">
              {/* 🎨 UX Designer Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-purple-400/70 group-hover:text-purple-400 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.75v4.5m4.5-4.5v4.5M4.5 9.75h15m-10.5 0v10.5h6V9.75"
                />
              </svg>
              <span className="text-base leading-relaxed">UI/UX Designer</span>
            </div>

            <div className="flex items-center gap-3 group mb-6">
              {/* 💻 Frontend Developer Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-purple-400/70 group-hover:text-purple-400 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5h18M3 19h18M9 9l-3 3 3 3m6-6 3 3-3 3"
                />
              </svg>
              <span className="text-base leading-relaxed">Frontend Developer</span>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />

            <div className="flex items-center gap-3 group mt-6">
              {/* 📍 Location Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-purple-400/70 group-hover:text-purple-400 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21c-4.418 0-8-3.582-8-8a8 8 0 1 1 16 0c0 4.418-3.582 8-8 8zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
              <span className="text-sm tracking-wide opacity-90">Colombia</span>
            </div>
          </div>
          {/* Botón */}
          <div>
            <a href="/assets/doc/Cv-EmilyOrduzB.docx" download>
              <Button
                colorClass="mr-6 mb-6 w-full cursor-pointer font-medium text-center py-4 rounded-2xl text-white font-light text-base tracking-wide transition-all duration-300 relative overflow-hidden group bg-[#3a1b6f]/40 border border-purple-500/30 hover:bg-gradient-to-br hover:from-purple-500/30 hover:to-[#2e194e]/50 hover:-translate-y-[2px] hover:shadow-[0_10px_25px_-5px_rgba(168,85,247,0.4)] backdrop-blur-lg"
              >
                Ver Currículum
              </Button>
            </a>
          </div>

          {/* Glow ambiental */}
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#2e194e]/30 rounded-full blur-3xl opacity-50" />
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#3a1b6f]/30 rounded-full blur-3xl opacity-40" />
        </article></SlideUpSection>
    </section>
  );
}
