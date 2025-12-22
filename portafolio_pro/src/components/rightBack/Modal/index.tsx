"use client";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import Image from "next/image";

type Project = {
  imgProject: string;
  name: string;
  date: string;
  description: string;
  url: string;
};

type ModalProps = {
  projects: Project[];
  onClose: () => void;
  label: string;
};

export default function Modal({ projects, onClose }: ModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

const [direction, setDirection] = useState(0);
  const next = () => {
      setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
      setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const current = projects[currentIndex];

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
  }),
};
  return (
    <div>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="w-[90%] max-w-5xl max-h-[85vh]
                   bg-[#060010] border border-purple-500/30
                   rounded-2xl p-6"
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
        >
          <div
            className="fixed inset-0 bg-black/90 bg-opacity-90 z-50 flex items-center justify-center px-4"
            onClick={handleOverlayClick}
          >
            <div className="relative w-full max-w-3xl flex flex-col items-center">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute rounded-full  cursor-pointer z-40 top-4 right-4 px-3 py-1 border border-purple-300/30 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-400/40
                           hover:shadow-md hover:shadow-purple-500/20 
                           transition-all duration-300 overflow-hidden group/btn"
              >
                ×
              </button>
<AnimatePresence mode="wait" custom={direction}>
  <motion.div
    key={currentIndex}
    custom={direction}
    variants={slideVariants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{
      duration: 0.35,
      ease: "easeOut",
    }}
    className="w-full"
  >
              {/* Image */}
              <div
                className="
                  relative
                  w-full h-[500px]
                  mb-4
                  rounded-2xl
                  border border-[#392e4e]
                  shadow-lg
                  bg-gradient-to-br from-[#060010] via-[#060010] to-[#060010]/40
                  [mask-image:linear-gradient(white,white)]
                  [mask-mode:alpha]
                  overflow-hidden"
              >
                <Image
                  src={current.imgProject}
                  alt={current.name}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                />
              </div>

              {/* Content */}
              <div className="bg-gradient-to-br from-[#060010] via-[#060010] to-[#060010]/40  border border-[#392e4e] text-white p-6 rounded-2xl shadow-lg w-full">
                <h2 className="text-xl font-semibold mb-2">{current.name}</h2>
                <p className="text-sm text-neutral-400 mb-2">{current.date}</p>
                <p className="text-sm text-neutral-300 mb-6">
                  {current.description}
                </p>
                {/*  <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full z-40 px-4 py-2 bg-gradient-to-br from-[#b09ffc] to-[#6d60ff] text-white font-semibold text-sm outline-none border-none cursor-pointer hover:translate-y-1 hover:shadow-none active:opacity-50 transition-all"
          >
            Ver más
          </a> */}
              </div>
  </motion.div>
</AnimatePresence>
              <button
                onClick={prev}
                className="cursor-pointer absolute -left-20 top-1/2 transform -translate-y-1/2 px-5 py-2.5 border border-purple-300/30 rounded-full
                            text-sm font-medium backdrop-blur-md
                           bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-400/40
                           hover:shadow-md hover:shadow-purple-500/20 
                           transition-all duration-300 overflow-hidden group/btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="relative z-10 w-5 h-5 rotate-180 transition-transform duration-300 group-hover/btn:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              <button
                onClick={next}
                className="cursor-pointer absolute -right-20 top-1/2 transform -translate-y-1/2 px-5 py-2.5 border border-purple-300/30 rounded-full
                            text-sm font-medium backdrop-blur-md
                           bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-400/40
                           hover:shadow-md hover:shadow-purple-500/20 
                           transition-all duration-300 overflow-hidden group/btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>{" "}
        </motion.div>
      </motion.div>{" "}
    </div>
  );
}
