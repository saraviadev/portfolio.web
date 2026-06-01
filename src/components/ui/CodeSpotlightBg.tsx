"use client";

import { useEffect, useRef, useState } from "react";

// Real project code files mapped to each active section!
const CODE_SNIPPETS: Record<string, { plain: string; colored: React.ReactNode }> = {
  hero: {
    plain: `"use client";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function HeroSection() {
  const { t, language } = useLanguage();
  return (
    <section className="hero-cinematic" id="hero">
      <div className="hero-overlay" />
      <div className="relative z-10 w-full px-6 md:px-12">
        <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        <h1 className="section-title-cinema leading-[1.1]">
          <span>{language === "en" ? "Building " : "Creamos "}</span>
        </h1>
      </div>
    </section>
  );
}`,
    colored: (
      <>
        <span className="text-purple-400">"use client"</span>;<br />
        <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">useLanguage</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"@/context/LanguageContext"</span>;<br />
        <span className="text-purple-400">import</span> <span className="text-blue-300">Link</span> <span className="text-purple-400">from</span> <span className="text-green-300">"next/link"</span>;<br />
        <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">FaWhatsapp</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"react-icons/fa"</span>;<br /><br />
        <span className="text-purple-400">export function</span> <span className="text-yellow-300">HeroSection</span>() &#123;<br />
        &nbsp;&nbsp;<span className="text-purple-400">const</span> &#123; <span className="text-blue-300">t</span>, <span className="text-blue-300">language</span> &#125; = <span className="text-yellow-300">useLanguage</span>();<br />
        &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">section</span> <span className="text-red-400">className</span>=<span className="text-green-300">"hero-cinematic"</span> <span className="text-red-400">id</span>=<span className="text-green-300">"hero"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">div</span> <span className="text-red-400">className</span>=<span className="text-green-300">"hero-overlay"</span> /&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">div</span> <span className="text-red-400">className</span>=<span className="text-green-300">"relative z-10 w-full"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">span</span> <span className="text-red-400">className</span>=<span className="text-green-300">"flex h-2 w-2 bg-green-400 animate-pulse"</span> /&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">h1</span> <span className="text-red-400">className</span>=<span className="text-green-300">"section-title-cinema"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">span</span>&gt;&#123;language === <span className="text-green-300">"en"</span> ? <span className="text-green-300">"Building "</span> : <span className="text-green-300">"Creamos "</span>&#125;&lt;/<span className="text-blue-400">span</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">h1</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">div</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">section</span>&gt;<br />
        &nbsp;&nbsp;);<br />
        &#125;
      </>
    )
  },
  about: {
    plain: `"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 bg-black overflow-hidden" id="about">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xs font-mono tracking-widest text-primary">
          {t.about.title}
        </h2>
        <p className="text-xl md:text-3xl font-light text-white/95 mt-8">
          {t.about.text}
        </p>
      </div>
    </section>
  );
}`,
    colored: (
      <>
        <span className="text-purple-400">"use client"</span>;<br />
        <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">motion</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"framer-motion"</span>;<br />
        <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">useLanguage</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"@/context/LanguageContext"</span>;<br /><br />
        <span className="text-purple-400">export function</span> <span className="text-yellow-300">AboutSection</span>() &#123;<br />
        &nbsp;&nbsp;<span className="text-purple-400">const</span> &#123; <span className="text-blue-300">t</span> &#125; = <span className="text-yellow-300">useLanguage</span>();<br />
        &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">section</span> <span className="text-red-400">className</span>=<span className="text-green-300">"relative py-24"</span> <span className="text-red-400">id</span>=<span className="text-green-300">"about"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">div</span> <span className="text-red-400">className</span>=<span className="text-green-300">"max-w-5xl mx-auto"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">h2</span> <span className="text-red-400">className</span>=<span className="text-green-300">"text-xs font-mono text-primary"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;t.about.title&#125;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">h2</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">p</span> <span className="text-red-400">className</span>=<span className="text-green-300">"text-xl md:text-3xl font-light text-white"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;t.about.text&#125;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">p</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">div</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">section</span>&gt;<br />
        &nbsp;&nbsp);<br />
        &#125;
      </>
    )
  },
  services: {
    plain: `"use client";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-[#0a0a0c]" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-card-premium">
            <span className="s-num">01</span>
            <h3>Frontend Premium</h3>
            <p>React, Next.js, and smooth anims.</p>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    colored: (
      <>
        <span className="text-purple-400">"use client"</span>;<br />
        <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">useLanguage</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"@/context/LanguageContext"</span>;<br /><br />
        <span className="text-purple-400">export function</span> <span className="text-yellow-300">ServicesSection</span>() &#123;<br />
        &nbsp;&nbsp;<span className="text-purple-400">const</span> &#123; <span className="text-blue-300">t</span> &#125; = <span className="text-yellow-300">useLanguage</span>();<br />
        &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">section</span> <span className="text-red-400">className</span>=<span className="text-green-300">"py-24 bg-[#0a0a0c]"</span> <span className="text-red-400">id</span>=<span className="text-green-300">"services"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">div</span> <span className="text-red-400">className</span>=<span className="text-green-300">"max-w-7xl mx-auto"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">div</span> <span className="text-red-400">className</span>=<span className="text-green-300">"grid grid-cols-1 md:grid-cols-3 gap-8"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">div</span> <span className="text-red-400">className</span>=<span className="text-green-300">"service-card-premium"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">span</span> <span className="text-red-400">className</span>=<span className="text-green-300">"s-num"</span>&gt;<span className="text-red-300">01</span>&lt;/<span className="text-blue-400">span</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">h3</span>&gt;Frontend Premium&lt;/<span className="text-blue-400">h3</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">p</span>&gt;React, Next.js, and smooth anims.&lt;/<span className="text-blue-400">p</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">div</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">div</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">div</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">section</span>&gt;<br />
        &nbsp;&nbsp);<br />
        &#125;
      </>
    )
  },
  projects: {
    plain: `"use client";
import { useLanguage } from "@/context/LanguageContext";

export function FeaturedProjects() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-black border-t border-white/[0.04]" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-16">
          {t.projects.title}
        </h2>
      </div>
    </section>
  );
}`,
    colored: (
      <>
        <span className="text-purple-400">"use client"</span>;<br />
        <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">useLanguage</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"@/context/LanguageContext"</span>;<br /><br />
        <span className="text-purple-400">export function</span> <span className="text-yellow-300">FeaturedProjects</span>() &#123;<br />
        &nbsp;&nbsp;<span className="text-purple-400">const</span> &#123; <span className="text-blue-300">t</span> &#125; = <span className="text-yellow-300">useLanguage</span>();<br />
        &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">section</span> <span className="text-red-400">className</span>=<span className="text-green-300">"py-24 bg-black"</span> <span className="text-red-400">id</span>=<span className="text-green-300">"projects"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">div</span> <span className="text-red-400">className</span>=<span className="text-green-300">"max-w-7xl mx-auto"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">h2</span> <span className="text-red-400">className</span>=<span className="text-green-300">"text-3xl font-bold"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;t.projects.title&#125;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">h2</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">div</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">section</span>&gt;<br />
        &nbsp;&nbsp);<br />
        &#125;
      </>
    )
  },
  workflow: {
    plain: `"use client";
import { useLanguage } from "@/context/LanguageContext";

export function WorkflowSection() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-[#050508]" id="workflow">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xs font-mono tracking-widest text-primary uppercase">
          {t.workflow.subtitle}
        </h2>
      </div>
    </section>
  );
}`,
    colored: (
      <>
        <span className="text-purple-400">"use client"</span>;<br />
        <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">useLanguage</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"@/context/LanguageContext"</span>;<br /><br />
        <span className="text-purple-400">export function</span> <span className="text-yellow-300">WorkflowSection</span>() &#123;<br />
        &nbsp;&nbsp;<span className="text-purple-400">const</span> &#123; <span className="text-blue-300">t</span> &#125; = <span className="text-yellow-300">useLanguage</span>();<br />
        &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">section</span> <span className="text-red-400">className</span>=<span className="text-green-300">"py-24 bg-[#050508]"</span> <span className="text-red-400">id</span>=<span className="text-green-300">"workflow"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">div</span> <span className="text-red-400">className</span>=<span className="text-green-300">"max-w-7xl mx-auto"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">h2</span> <span className="text-red-400">className</span>=<span className="text-green-300">"text-xs font-mono text-primary"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;t.workflow.subtitle&#125;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">h2</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">div</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">section</span>&gt;<br />
        &nbsp;&nbsp);<br />
        &#125;
      </>
    )
  },
  stack: {
    plain: `"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Database, Layout, Server, Settings, Cpu } from "lucide-react";

export function TechStack() {
  const { t } = useLanguage();
  return (
    <section id="stack" className="section-padding relative">
      <h2 className="section-title-cinema">
        {t.stack.title_1} <span>{t.stack.title_2}</span>
      </h2>
    </section>
  );
}`,
    colored: (
      <>
        <span className="text-purple-400">"use client"</span>;<br />
        <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">useLanguage</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"@/context/LanguageContext"</span>;<br />
        <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">Server</span>, <span className="text-blue-300">Database</span>, <span className="text-blue-300">Layout</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"lucide-react"</span>;<br /><br />
        <span className="text-purple-400">export function</span> <span className="text-yellow-300">TechStack</span>() &#123;<br />
        &nbsp;&nbsp;<span className="text-purple-400">const</span> &#123; <span className="text-blue-300">t</span> &#125; = <span className="text-yellow-300">useLanguage</span>();<br />
        &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">section</span> <span className="text-red-400">id</span>=<span className="text-green-300">"stack"</span> <span className="text-red-400">className</span>=<span className="text-green-300">"section-padding relative"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">h2</span> <span className="text-red-400">className</span>=<span className="text-green-300">"section-title-cinema"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;t.stack.title_1&#125; &lt;<span className="text-blue-400">span</span>&gt;&#123;t.stack.title_2&#125;&lt;/<span className="text-blue-400">span</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">h2</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">section</span>&gt;<br />
        &nbsp;&nbsp);<br />
        &#125;
      </>
    )
  },
  philosophy: {
    plain: `"use client";
import { useLanguage } from "@/context/LanguageContext";

export function EngineeringPhilosophy() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-[#060609]" id="philosophy">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xs font-mono tracking-widest text-primary uppercase">
          {t.philosophy.title}
        </h2>
      </div>
    </section>
  );
}`,
    colored: (
      <>
        <span className="text-purple-400">"use client"</span>;<br />
        <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">useLanguage</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"@/context/LanguageContext"</span>;<br /><br />
        <span className="text-purple-400">export function</span> <span className="text-yellow-300">EngineeringPhilosophy</span>() &#123;<br />
        &nbsp;&nbsp;<span className="text-purple-400">const</span> &#123; <span className="text-blue-300">t</span> &#125; = <span className="text-yellow-300">useLanguage</span>();<br />
        &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">section</span> <span className="text-red-400">className</span>=<span className="text-green-300">"py-24 bg-[#060609]"</span> <span className="text-red-400">id</span>=<span className="text-green-300">"philosophy"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">div</span> <span className="text-red-400">className</span>=<span className="text-green-300">"max-w-5xl mx-auto"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">h2</span> <span className="text-red-400">className</span>=<span className="text-green-300">"text-xs font-mono text-primary"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;t.philosophy.title&#125;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">h2</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">div</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">section</span>&gt;<br />
        &nbsp;&nbsp);<br />
        &#125;
      </>
    )
  },
  contact: {
    plain: `"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-black" id="contact">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2>{t.contact.title}</h2>
      </div>
    </section>
  );
}`,
    colored: (
      <>
        <span className="text-purple-400">"use client"</span>;<br />
        <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">useState</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"react"</span>;<br />
        <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">useLanguage</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"@/context/LanguageContext"</span>;<br /><br />
        <span className="text-purple-400">export function</span> <span className="text-yellow-300">Contact</span>() &#123;<br />
        &nbsp;&nbsp;<span className="text-purple-400">const</span> &#123; <span className="text-blue-300">t</span> &#125; = <span className="text-yellow-300">useLanguage</span>();<br />
        &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">section</span> <span className="text-red-400">className</span>=<span className="text-green-300">"py-24 bg-black"</span> <span className="text-red-400">id</span>=<span className="text-green-300">"contact"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">div</span> <span className="text-red-400">className</span>=<span className="text-green-300">"max-w-5xl mx-auto text-center"</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">h2</span>&gt;&#123;t.contact.title&#125;&lt;/<span className="text-blue-400">h2</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">div</span>&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">section</span>&gt;<br />
        &nbsp;&nbsp);<br />
        &#125;
      </>
    )
  }
};

export function CodeSpotlightBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Section Observer logic to dynamically detect which section is currently active
  useEffect(() => {
    if (!mounted) return;

    const sections = ["hero", "about", "services", "projects", "workflow", "stack", "philosophy", "contact"];
    
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      }, {
        threshold: 0.15, // Trigger when 15% of the section is visible
        rootMargin: "-15% 0px -40% 0px" // Shift center slightly up to detect earlier
      });

      observer.observe(el);
      return { observer, el };
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        containerRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        containerRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };

    // Text hover listener to hide spotlight when cursor is on readable text
    const handleTextEnter = () => setIsHoveringText(true);
    const handleTextLeave = () => setIsHoveringText(false);

    const attachTextListeners = () => {
      // Find all text blocks, cards, headings and standard buttons
      document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, a, button, .glass-card, .service-card-premium, .social-btn-fez").forEach(el => {
        el.removeEventListener("mouseenter", handleTextEnter);
        el.removeEventListener("mouseleave", handleTextLeave);
        el.addEventListener("mouseenter", handleTextEnter);
        el.addEventListener("mouseleave", handleTextLeave);
      });
    };

    // Initialize position in the center
    if (containerRef.current) {
      containerRef.current.style.setProperty("--mouse-x", "50%");
      containerRef.current.style.setProperty("--mouse-y", "50%");
    }

    window.addEventListener("mousemove", handleMouseMove);
    attachTextListeners();

    // Set up a MutationObserver to listen to new elements being dynamically rendered/swapped
    const textObserver = new MutationObserver(attachTextListeners);
    textObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      textObserver.disconnect();
      observers.forEach(obs => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [mounted]);

  if (!mounted) return null;

  const currentSnippet = CODE_SNIPPETS[activeSection] || CODE_SNIPPETS.hero;

  // Crucial: Spotlight code is only rendered from 'services' section downwards!
  const isVisibleSection = ["services", "projects", "workflow", "stack", "philosophy", "contact"].includes(activeSection);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[-1] overflow-hidden bg-[#020204] select-none pointer-events-none transition-opacity duration-1000 ease-in-out"
      style={{
        opacity: isVisibleSection ? 1 : 0,
      }}
    >
      {/* Code Text Background container with faint, blurred, mono color styling */}
      <div 
        key={`plain-${activeSection}`} 
        className="absolute inset-0 flex flex-wrap gap-12 p-8 opacity-[0.05] blur-[2.5px] scale-105 font-mono text-[0.65rem] leading-relaxed select-none transition-opacity duration-1000 ease-in-out"
      >
        <div className="w-[85%] max-w-[800px] text-neutral-400 overflow-hidden h-[85vh] pl-12 pt-16">
          <pre><code>{currentSnippet.plain}</code></pre>
        </div>
      </div>

      {/* Spotlight Mask Layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle 220px at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 10%, rgba(2, 2, 4, 0.97) 80%)",
        }}
      />

      {/* Spotlight revealed colored code (masked locally to the mouse cursor area, zero blur) */}
      <div 
        key={`colored-${activeSection}`}
        className="absolute inset-0 flex flex-wrap gap-12 p-8 font-mono text-[0.65rem] leading-relaxed select-none pointer-events-none transition-all duration-500 ease-out"
        style={{
          opacity: isHoveringText ? 0.05 : 1, // Smoothly dissolve when hovering text
          maskImage: "radial-gradient(circle 220px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 40%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(circle 220px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 40%, transparent 95%)",
        }}
      >
        <div className="w-[85%] max-w-[800px] text-blue-400/90 overflow-hidden h-[85vh] pl-12 pt-16">
          <pre>
            <code>
              {currentSnippet.colored}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
