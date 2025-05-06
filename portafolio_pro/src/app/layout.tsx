import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Elige los que vayas a usar
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio Emi",
  description: "Portfolio web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
   <body className={`${poppins.className} gradient-background`}>
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


   {/*     <div className="gradient-background">
      <div
        className="blur"
        style={{
          transform: "translate3d(-136.214px, 152.225px, 0px) rotate(-97.2017deg)"
        }}
      />
      <div
        className="blur"
        style={{
          transform: "translate3d(337.967px, 144.716px, 0px) rotate(-93.1699deg)"
        }}
      />
      <div
        className="blur"
        style={{
          transform: "translate3d(-149.624px, -64.569px, 0px) rotate(-94.1389deg)"
        }}
      />
    </div> */}
        {children}
      </body>
    </html>
  );
}
