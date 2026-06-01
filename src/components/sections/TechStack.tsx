"use client";

import { motion } from "framer-motion";
import { Database, Layout, Server, Settings, ShieldAlert, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function TechStack() {
  const { t } = useLanguage();

  const stackGroups = [
    {
      title: t.stack.groups.backend,
      icon: <Server className="w-5 h-5 text-primary" />,
      skills: ["Node.js", "Express.js", "TypeScript", "REST APIs", "GraphQL"],
    },
    {
      title: t.stack.groups.database,
      icon: <Database className="w-5 h-5 text-primary" />,
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "Redis", "Cloudinary"],
    },
    {
      title: t.stack.groups.frontend,
      icon: <Layout className="w-5 h-5 text-primary" />,
      skills: ["Next.js (App Router)", "React.js", "TailwindCSS", "shadcn/ui", "Framer Motion"],
    },
    {
      title: t.stack.groups.architecture,
      icon: <ShieldAlert className="w-5 h-5 text-primary" />,
      skills: ["JWT / OAuth2", "Microservices", "Clean Architecture", "OWASP Best Practices", "Zod / Joi"],
    },
    {
      title: t.stack.groups.devops,
      icon: <Settings className="w-5 h-5 text-primary" />,
      skills: ["Docker", "Git / GitHub Actions", "Vercel", "Render", "Postman"],
    },
    {
      title: t.stack.groups.ai,
      icon: <Cpu className="w-5 h-5 text-primary" />,
      skills: ["Puppeteer", "LLM Integration", "Agentic Workflows", "Prompt Engineering", "Custom Scripts"],
    },
  ];

  return (
    <section id="stack" className="section-padding border-t border-white/[0.04] relative">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title-cinema mb-6"
          >
            {t.stack.title_1}{" "}
            <span className="gradient-text-accent">{t.stack.title_2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle-cinema mx-auto"
          >
            {t.stack.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stackGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/15 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-white/[0.03] rounded-lg group-hover:bg-primary/[0.08] transition-colors border border-white/[0.04]">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold">{group.title}</h3>
              </div>

              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-white/40 text-sm font-medium"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
