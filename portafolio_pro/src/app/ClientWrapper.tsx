"use client";
import { useEffect, useState } from "react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
    <div className="loader-wrapper center-viewport">
  <div className="loader"></div>
  <div className="loader-text">
    <span className="loader-letter">C</span>
    <span className="loader-letter">a</span>
    <span className="loader-letter">r</span>
    <span className="loader-letter">g</span>
    <span className="loader-letter">a</span>
    <span className="loader-letter">n</span>
    <span className="loader-letter">d</span>
    <span className="loader-letter">o</span>
  </div>
</div>
    );
  }

  return <>{children}</>;
}
