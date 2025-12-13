import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatCardProps {
  indicates: string;
  title: string;
  subtitle: string;
  value: string;
}

const data: StatCardProps[] = [
  {
    indicates: "01",
    title: "Frontend Developer",
    subtitle:
      "Soy desarrolladora frontend enfocada en crear interfaces digitales claras, accesibles y escalables. Transformo necesidades complejas en experiencias intuitivas centradas en el usuario.",
    value: "👩‍💻 Emily Orduz",
  },
  {
    indicates: "02",
    title: "Experiencia y Proyectos",
    subtitle:
      "He trabajado en el desarrollo y mejora de productos digitales reales, colaborando con equipos y empresas. Acompaño los procesos desde la idea hasta la implementación, cuidando funcionalidad y experiencia de usuario.",
    value: "12+ Proyectos completados",
  },
  {
    indicates: "03",
    title: "Creatividad y Enfoque",
    subtitle:
      "Me enfoco en crear experiencias digitales bien pensadas, cuidando usabilidad, rendimiento y coherencia visual. Disfruto colaborar, aprender continuamente y aportar criterio tanto técnico como creativo en cada proyecto.",
    value: "Disponible para nuevos proyectos",
  },
];

const StatGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".stat-card");
    if (!cards) return;

    // 🔹 Animación on scroll
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    // 🔹 Hover 3D
    cards.forEach((card) => {
      const el = card as HTMLElement;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        gsap.to(el, {
          rotateX,
          rotateY,
          duration: 0.25,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <>
      <style>
        {`
        .stat-grid {
          display: grid;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
          .stat-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .stat-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .stat-card {
          background: #0a0013;
          border: 1px solid #281a3f;
          border-radius: 1rem;
          padding: 2.5rem;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 260px;

          opacity: 0;
          transform: translateY(60px);
          will-change: transform;
        }

        .stat-card:hover {
          box-shadow: 0 8px 25px rgba(132, 0, 255, 0.3);
        }

        .stat-indicates {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(90deg, #a855f7, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .stat-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.25rem;
        }

        .stat-value {
          font-size: 1.1rem;
          font-weight: 500;
          color: #c7bce6;
          margin-bottom: 0.75rem;
        }

        .stat-subtitle {
          color: #9b8cb7;
          font-size: 0.95rem;
          line-height: 1.4;
        }
      `}
      </style>

      <div className="stat-grid" ref={gridRef}>
        {data.map((stat, i) => (
          <div className="stat-card" key={i}>
            <div>
              <div className="stat-indicates">{stat.indicates}</div>
              <h4 className="stat-title">{stat.title}</h4>
              <p className="stat-value">{stat.value}</p>
            </div>
            <p className="stat-subtitle">{stat.subtitle}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatGrid;
