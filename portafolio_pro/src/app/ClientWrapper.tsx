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
      <div className="flex h-screen items-center justify-center ">
        <div className="w-full gap-x-2 flex justify-center items-center">
          <div
            className="w-5 bg-[#cfc6ff] animate-pulse h-5 rounded-full animate-bounce"
          ></div>
          <div
            className="w-5 animate-pulse h-5 bg-[#8d7af5] rounded-full animate-bounce"
          ></div>
          <div
            className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"
          ></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
