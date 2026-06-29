"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, ExternalLink, X, Image as ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

type ProjectIndex = number | null;

export function FeaturedProjects() {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectIndex>(null);

  const handleClose = () => setSelectedProject(null);

  // Mocking links and image placeholders for the modal
  const projectDetails = [
    {
      liveUrl: "https://looserfit.com",
      githubUrl: "https://github.com/saraviadev/looserfit-web",
      image: "/projects/looserfit.jpg",
      imagePlaceholder: "Captura de Looserfit.com",
      isBackend: false,
    },
    {
      liveUrl: null,
      githubUrl: "https://github.com/saraviadev/ecommerce-api-utn",
      image: "/projects/backend_ecommerce.png",
      imagePlaceholder: "Diagrama de Arquitectura de Microservicios (UTN)",
      isBackend: true,
    },
    {
      liveUrl: null,
      githubUrl: "https://github.com/saraviadev/identity-provider-service",
      image: "/projects/backend_identity.png",
      imagePlaceholder: "Flujo de Autenticación OAuth2 & Redis",
      isBackend: true,
    },
    {
      liveUrl: null,
      githubUrl: "https://github.com/saraviadev/high-frequency-data-aggregator",
      image: "/projects/backend_data.png",
      imagePlaceholder: "Estructura de Base de Datos y Pipelines ESR",
      isBackend: true,
    },
  ];

  return (
    <>
      <section id="projects" className="section-padding relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-title-cinema mb-6"
              >
                {t.projects.title_1} <span className="gradient-text-accent">{t.projects.title_2}</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="section-subtitle-cinema"
              >
                {t.projects.subtitle}
              </motion.p>
            </div>
            <motion.a
              href="https://github.com/saraviadev"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs font-mono tracking-widest uppercase text-white/50 hover:text-white transition-colors flex items-center gap-2 pb-2"
            >
              <FaGithub className="w-4 h-4" />
              {language === "en" ? "View GitHub Profile" : "Ver Perfil de GitHub"}
            </motion.a>
          </div>

          <div className="flex flex-col gap-4">
            {t.projects.items.map((project: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer relative"
                onClick={() => setSelectedProject(index)}
              >
                <div className="p-8 md:p-10 bg-white/[0.02] border border-white/[0.04] rounded-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 overflow-hidden relative">
                  
                  {/* Hover indicator (Arrow) */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-white/40 group-hover:text-primary">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>

                  <div className="flex flex-col md:flex-row gap-8 justify-between relative z-10">
                    <div className="max-w-xl">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors duration-300 pr-12">
                        {project.title}
                      </h3>
                      <p className="text-white/40 leading-relaxed mb-8">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.architecture.map((tech: string, i: number) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-xs font-mono text-white/50 bg-white/5 rounded border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 justify-end md:items-end">
                      {project.metrics.map((metric: string, i: number) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                          <span className="text-sm font-mono tracking-wide text-white/60">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-[#050505] border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Placeholder for Architecture / Web Screenshot */}
              <div className="w-full h-48 md:h-64 bg-gradient-to-br from-white/5 to-transparent border-b border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
                {projectDetails[selectedProject].image ? (
                  <img
                    src={projectDetails[selectedProject].image}
                    alt={t.projects.items[selectedProject].title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                ) : (
                  <>
                    <ImageIcon className="w-12 h-12 text-white/10 mb-3" />
                    <p className="text-white/30 font-mono text-sm uppercase tracking-widest text-center px-6">
                      {projectDetails[selectedProject].imagePlaceholder}
                    </p>
                    {projectDetails[selectedProject].isBackend && (
                      <p className="text-white/20 text-xs mt-2 max-w-sm text-center px-6">
                        {language === "en" 
                          ? "(A future architecture diagram goes here as requested by your professor)" 
                          : "(Aquí irá el diagrama de arquitectura sugerido por tu profesor)"}
                      </p>
                    )}
                    {/* Decorative lines to simulate a diagram space */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  </>
                )}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t.projects.items[selectedProject].title}
                </h3>
                <p className="text-white/50 mb-8">
                  {language === "en" ? "Select a destination to explore this system:" : "Selecciona un destino para explorar este sistema:"}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projectDetails[selectedProject].liveUrl && (
                    <a
                      href={projectDetails[selectedProject].liveUrl as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <ExternalLink className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-primary group-hover:text-white transition-colors">
                          {language === "en" ? "Live Website" : "Web Oficial"}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-primary group-hover:text-white" />
                    </a>
                  )}

                  <a
                    href={projectDetails[selectedProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group ${!projectDetails[selectedProject].liveUrl ? 'sm:col-span-2' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <FaGithub className="w-5 h-5 text-white/70 group-hover:text-white" />
                      <span className="font-semibold text-white/70 group-hover:text-white transition-colors">
                        {language === "en" ? "Source Code / GitHub" : "Ver Código (GitHub)"}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
