import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Theo Saravia | Senior Fullstack Engineer",
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
        <div className="flex min-h-screen flex-col relative overflow-x-hidden">
          {/* Subtle background noise/grid can go here if needed */}
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
