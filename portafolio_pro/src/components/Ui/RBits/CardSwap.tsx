import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

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
      "Hola, soy Emily Orduz. Soy desarrolladora frontend especializada en React y TypeScript, creando interfaces web accesibles, rápidas y escalables.",
    value: "👩‍💻 Emily Orduz",
  },
  {
    indicates: "02",
    title: "Experiencia y Proyectos",
    subtitle:
      "He trabajado en proyectos con autenticación, rutas protegidas y conexión a backend (Node.js y Express) para ofrecer soluciones completas.",
    value: "12+ Proyectos completados",
  },
  {
    indicates: "03",
    title: "Creatividad y Pasión",
    subtitle:
      "Me enfoco en la experiencia de usuario, rendimiento y SEO técnico. Amante del diseño, la música y los videojuegos, siempre en busca de nuevos retos.",
    value: "Disponible para nuevos proyectos",
  },
]

const StatGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".stat-card");
    if (!cards) return;

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
          duration: 0.2,
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
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 250px;
        }

        .stat-card:hover {
          box-shadow: 0 8px 25px rgba(132, 0, 255, 0.3);
          transform: translateY(-4px);
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
              <div className="stat-title">{stat.title}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
            <div className="stat-subtitle">{stat.subtitle}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatGrid;
