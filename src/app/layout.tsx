import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { BackgroundAnimation } from "@/components/ui/BackgroundAnimation";
import { LanguagePromptModal } from "@/components/sections/LanguagePromptModal";
import { FloatingContact } from "@/components/ui/FloatingContact";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "saravia.dev | Portfolio",
  description: "Portfolio of Theo Saravia, specializing in Modern Web Architecture, Next.js, Node.js, and AI Automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <BackgroundAnimation />
        <LanguageProvider>
          <LanguagePromptModal />
          <FloatingContact />
          <div className="flex min-h-screen flex-col relative overflow-x-hidden">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
