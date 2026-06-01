"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.04] blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold tracking-[0.2em] text-primary uppercase mb-6"
          >
            {language === "en" ? "READY TO START?" : "¿LISTO PARA EMPEZAR?"}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title-cinema mb-6"
          >
            {t.contact.title_1}
            <br />
            <span className="gradient-text-accent">{t.contact.title_2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle-cinema mx-auto"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="https://wa.me/5491127537746"
            target="_blank"
            className="w-full sm:w-auto h-14 px-8 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium flex items-center justify-center gap-3 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 hover-target"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span className="font-mono text-sm">+54 9 11 2753-7746</span>
          </Link>

          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=46theosaravia46@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-14 px-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium flex items-center justify-center gap-3 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover-target"
          >
            <Mail className="w-5 h-5" />
            <span className="font-mono text-sm">46theosaravia46@gmail.com</span>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-6"
        >
          <Link
            href="https://github.com/saraviadev"
            target="_blank"
            className="social-btn-fez github hover-target"
          >
            <div className="icon-wrapper">
              <FaGithub className="w-5 h-5 text-white" />
            </div>
            <span className="social-text">GitHub</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/theo-saravia-239688364/"
            target="_blank"
            className="social-btn-fez linkedin hover-target"
          >
            <div className="icon-wrapper">
              <FaLinkedin className="w-5 h-5 text-white" />
            </div>
            <span className="social-text">LinkedIn</span>
          </Link>

          <Link
            href="https://instagram.com/saravia.devv"
            target="_blank"
            className="social-btn-fez instagram hover-target"
          >
            <div className="icon-wrapper">
              <FaInstagram className="w-5 h-5 text-white" />
            </div>
            <span className="social-text">Instagram</span>
          </Link>

          <Link
            href="https://wa.me/5491127537746"
            target="_blank"
            className="social-btn-fez whatsapp hover-target"
          >
            <div className="icon-wrapper">
              <FaWhatsapp className="w-5 h-5 text-white" />
            </div>
            <span className="social-text">WhatsApp</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
