import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { CodeSpotlightBg } from "@/components/ui/CodeSpotlightBg";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SRV | Fullstack Developer Portfolio",
  description:
    "Portfolio of SRV — Fullstack Developer specializing in Modern Web Architecture, Next.js, Node.js, AI Integration & Automation. Buenos Aires, Argentina.",
  keywords: [
    "fullstack developer",
    "web developer",
    "next.js",
    "node.js",
    "react",
    "typescript",
    "AI automation",
    "Buenos Aires",
    "Argentina",
    "portfolio",
  ],
  authors: [{ name: "Theo Saravia" }],
  openGraph: {
    title: "SRV | Fullstack Developer Portfolio",
    description:
      "Fullstack Developer specializing in Modern Web Architecture, Next.js, Node.js, and AI Automation.",
    type: "website",
    locale: "es_AR",
  },
  icons: {
    icon: "/srv_logo_3d.png",
    shortcut: "/srv_logo_3d.png",
    apple: "/srv_logo_3d.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased`}
        style={{ background: "#000000", color: "#f5f5f5" }}
      >
        <LanguageProvider>
          <Preloader />
          <CodeSpotlightBg />
          <SmoothScroll>
            <CustomCursor />
            <div className="flex min-h-screen flex-col relative overflow-x-hidden">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
