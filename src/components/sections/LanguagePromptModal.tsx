"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";

export function LanguagePromptModal() {
  const { showLanguagePrompt, setLanguage } = useLanguage();

  return (
    <AnimatePresence>
      {showLanguagePrompt && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="glass-card p-8 rounded-3xl w-full max-w-md mx-4 text-center border-primary/20"
          >
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl font-bold mb-2">Select your language</h2>
            <p className="text-muted-foreground mb-8">Selecciona tu idioma preferido</p>
            
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => setLanguage("en")}
                className="w-full h-14 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-[1.02]"
              >
                English
              </button>
              <button 
                onClick={() => setLanguage("es")}
                className="w-full h-14 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all hover:scale-[1.02]"
              >
                Español
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
