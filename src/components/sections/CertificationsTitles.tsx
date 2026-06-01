"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function CertificationsTitles() {
  const { t, language } = useLanguage();

  const certifications = [
    {
      title: language === "en" ? "Diploma in Full Stack Web Programming" : "Diplomatura en Programación Web Full Stack",
      institution: "Universidad Tecnológica Nacional (UTN)",
      date: "2024 - 2025",
      icon: <GraduationCap className="w-7 h-7 text-primary" />,
      skills: ["Fullstack Architecture", "System Design", "Advanced Node.js", "React.js"],
      status: t.certifications.completed,
      link: "/certificates/Diplomatura_en_Programaci_n_Web_Full_Stack_-_Turno_Noche.pdf",
    },
    {
      title: language === "en" ? "Backend Developer Specialization" : "Especialización en Desarrollo Backend",
      institution: "Universidad Tecnológica Nacional (UTN)",
      date: "2024",
      icon: <Award className="w-7 h-7 text-white/60" />,
      skills: ["Node.js", "Express", "MongoDB", "API REST", "Security"],
      status: t.certifications.completed,
      link: "/certificates/Curso_de_Backend_Developer_-_Turno_Noche.pdf",
    },
    {
      title: language === "en" ? "Frontend React Developer" : "Desarrollo Frontend con React",
      institution: "Universidad Tecnológica Nacional (UTN)",
      date: "2023 - 2024",
      icon: <Award className="w-7 h-7 text-white/60" />,
      skills: ["React", "JavaScript", "HTML/CSS", "State Management"],
      status: t.certifications.completed,
      link: "/certificates/Curso_de_Programador_Web_Inicial_-_Front_End_Developer_-_Turno_Noche.pdf",
    },
  ];

  return (
    <section id="certifications" className="section-padding relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title-cinema mb-6"
          >
            {t.certifications.title_1}{" "}
            <span className="gradient-text-accent">{t.certifications.title_2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle-cinema mx-auto"
          >
            {t.certifications.subtitle}
          </motion.p>
        </div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            const isClickable = !!cert.link;
            const Wrapper = isClickable ? "a" : "div";
            const wrapperProps = isClickable
              ? { href: cert.link, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className={`group p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-primary/15 transition-all duration-300 ${
                    isClickable ? "cursor-pointer hover:bg-white/[0.03]" : ""
                  }`}
                >
                  <div className="flex items-start gap-5 w-full">
                    <div className="mt-1 p-3 bg-white/[0.03] rounded-xl border border-white/[0.04] group-hover:border-primary/15 transition-colors shrink-0">
                      {cert.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-lg md:text-xl font-bold">{cert.title}</h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/[0.08] text-primary text-[0.65rem] font-semibold flex items-center gap-1 border border-primary/15">
                          <CheckCircle2 className="w-3 h-3" />
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-white/40 font-medium text-sm mb-1">{cert.institution}</p>
                      <p className="text-white/25 text-xs mb-3">{cert.date}</p>

                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[0.65rem] font-medium bg-white/[0.03] px-2.5 py-1 rounded-full text-white/40 border border-white/[0.04]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {cert.link && (
                        <span className="text-xs font-medium text-primary mt-4 inline-block group-hover:underline">
                          {language === "en" ? "View Certificate →" : "Ver Certificado →"}
                        </span>
                      )}
                    </div>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

