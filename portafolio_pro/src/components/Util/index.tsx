"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
    children: React.ReactNode;
    delay?: number; // en milisegundos
  };
  
  export default function SlideUpSection({ children, delay = 0 }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setIsVisible(true);
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);
  
    return (
      <div
        ref={ref}
        style={{ transitionDelay: `${delay}ms` }}
        className={`transition-all duration-700 ease-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {children}
      </div>
    );
  }