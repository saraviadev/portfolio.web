"use client";

import { Award, GraduationCap, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function CertificationsTitles() {
  const { t } = useLanguage();

  const certifications = [
    {
      title: "Backend Development Specialization",
      institution: "Universidad Tecnológica Nacional (UTN)",
      date: "2024 - 2025",
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      skills: ["Node.js Architecture", "MongoDB", "Express", "API Security", "Design Patterns"],
      status: t.certifications.completed,
    },
    {
      title: "Frontend React Development",
      institution: "Universidad Tecnológica Nacional (UTN)",
      date: "2024",
      icon: <Award className="w-8 h-8 text-secondary-foreground" />,
      skills: ["React.js", "State Management", "Component Architecture", "Hooks", "Performance"],
      status: t.certifications.completed,
      link: "/certificates/frontend.pdf"
    }
  ];

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {t.certifications.title_1} <span className="text-primary">{t.certifications.title_2}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.certifications.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="group glass p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:bg-white/[0.03] transition-colors border border-white/5 hover:border-primary/20"
            >
              <div className="flex items-start gap-6 w-full">
                <div className="mt-1 p-4 bg-background rounded-2xl border border-white/5 group-hover:border-primary/30 transition-colors">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3 mb-2 w-full">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl md:text-2xl font-bold">{cert.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center gap-1 border border-primary/20">
                        <CheckCircle2 className="w-3 h-3" />
                        {cert.status}
                      </span>
                    </div>
                    {cert.link && (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors hidden md:block"
                      >
                        Ver Original
                      </a>
                    )}
                  </div>
                  <p className="text-muted-foreground font-medium mb-1">{cert.institution}</p>
                  <p className="text-sm text-muted-foreground/70 mb-4">{cert.date}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="text-xs font-medium bg-white/5 px-3 py-1 rounded-full text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline mt-4 inline-block md:hidden"
                    >
                      Ver Certificado Original
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
