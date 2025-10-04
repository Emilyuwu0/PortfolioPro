import { useState } from "react";
import Image from 'next/image';
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

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const current = projects[currentIndex];

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center px-4"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-3xl flex flex-col items-center">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute rounded-full  z-40 top-4 right-4 px-3 py-1 bg-gradient-to-br from-[#b09ffc] to-[#6d60ff] text-white outline-none border-none cursor-pointer hover:translate-y-1 hover:shadow-none active:opacity-50 transition-all flex items-center justify-center text-lg font-bold hover:scale-110 transition"
        >
          ×
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm ">
          {currentIndex + 1} / {projects.length}
        </div>

        {/* Image */}
        <div className="relative w-full h-[500px] mb-4">
          <Image
            src={current.imgProject}
            alt={current.name}
            fill
            className="object-contain color-bg p-6 rounded-xl"
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, 600px"
            priority
          />
        </div>

        {/* Content */}
        <div className="color-bg text-white p-6 rounded-2xl shadow-lg w-full">
          <h2 className="text-xl font-semibold mb-2">{current.name}</h2>
          <p className="text-sm text-neutral-400 mb-2">{current.date}</p>
          <p className="text-sm text-neutral-300 mb-6">{current.description}</p>
          <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full z-40 px-4 py-2 bg-gradient-to-br from-[#b09ffc] to-[#6d60ff] text-white font-semibold text-sm outline-none border-none cursor-pointer hover:translate-y-1 hover:shadow-none active:opacity-50 transition-all"
          >
            Ver más
          </a>
        </div>


        <button
          onClick={prev}
          className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-[#b09ffc] to-[#6d60ff] text-white w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          ←
        </button>
        <button
          onClick={next}
          className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-[#b09ffc] to-[#6d60ff] text-white w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          →
        </button>
      </div>
    </div>
  );
}
