import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-primary/5 clip-path-polygon-[0_0,_100%_10vw,_100%_100%,_0_100%] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-16 text-center border-primary/20 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 relative z-10">
            {t.contact.title_1} <br />
            <span className="text-primary">{t.contact.title_2}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto relative z-10">
            {t.contact.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link 
              href="mailto:46theosaravia46@gmail.com"
              className="h-14 px-8 w-full sm:w-auto rounded-full bg-primary text-primary-foreground font-medium flex items-center justify-center space-x-2 hover:bg-primary/90 transition-transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>{t.contact.button}</span>
            </Link>
            
            <div className="flex gap-4">
              <Link 
                href="https://github.com/46theosaravia46-cyber"
                target="_blank"
                className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link 
                href="https://linkedin.com/in/tu-perfil"
                target="_blank"
                className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
