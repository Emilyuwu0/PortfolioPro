import type { Metadata } from "next";
import ClientWrapper from "./ClientWrapper";
import { Figtree } from 'next/font/google';
import "./globals.css";

const poppins = Figtree({
  subsets: ['latin'],
  weight: ['400', '600', '700','900'], 
  display: 'swap',
});

export const metadata: Metadata = {
title: "Emily Orduz | Desarrolladora Frontend",
  description: "Desarrolladora Frontend con 2+ años creando interfaces intuitivas y accesibles con React, Vue y Astro. Especialista en rendimiento web, UI/UX y código limpio. ¿Necesitas un sitio web responsivo o aplicación optimizada? Contáctame.",
  keywords: [
    "desarrolladora frontend",
    "portafolio React",
    "experta en accesibilidad web",
    "desarrollo web",
    "UI/UX",
    "CMS",
    "Emily Orduz"
  ],
  robots: "index, follow",
  authors: [{ name: "Emily Orduz" }],
  alternates: {
    canonical: "https://portfolio-pro-seven.vercel.app/"
  },
  openGraph: {
    title: "Emily Orduz | Portafolio Frontend - Soluciones Web de Alto Impacto",
    description: "Desarrolladora Frontend especializada en React, Vue y Astro. Proyectos con foco en accesibilidad, rendimiento y experiencia de usuario excepcional.",
    type: "website",
    url: "https://portfolio-pro-seven.vercel.app",
    images: [
      {
        url: "https://portfolio-pro-seven.vercel.app/orduz.png",
        width: 1200,
        height: 630,
        alt: "Portafolio de Emily Orduz - Desarrolladora Frontend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emily Orduz | Desarrolladora Frontend",
    description: "Transformo ideas en productos web rápidos, accesibles y visualmente atractivos. ¡Conoce mi trabajo!",
    images: ["https://portfolio-pro-seven.vercel.app/orduz.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="es" className="h-full">
   <body className={`${poppins.className} h-full overflow-y-hidden`}>
   <div className="gradient-background">
  <div
    className="blur"
    style={{
      transform: 'translate3d(-387.248px, -27.082px, 0) rotate(14.8028deg)',
    }}
  />
  <div
    className="blur"
    style={{
      transform: 'translate3d(188.13px, 9.0605px, 0) rotate(136.926deg)',
    }}
  />
  <div
    className="blur"
    style={{
      transform: 'translate3d(-247.968px, 122.203px, 0) rotate(-6.2694deg)',
    }}
  />
</div>


       <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
