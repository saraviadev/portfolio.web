"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Server, Database, Code, Cpu, Workflow } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ArchitectureModal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Mi Arquitectura de Trabajo</h2>
              <p className="text-muted-foreground text-lg">
                Cómo diseño y construyo sistemas desde cero para garantizar escalabilidad, seguridad y alto rendimiento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Box 1 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] group-hover:bg-primary/20 transition-colors" />
                <Server className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">1. Capa de Red y API</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Utilizo Next.js para el enrutamiento frontend y Express/Node.js para microservicios.
                  Implemento validación estricta con Zod/Joi, limitación de tasa (Rate Limiting) y 
                  headers de seguridad OWASP con Helmet.
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] group-hover:bg-purple-500/20 transition-colors" />
                <Cpu className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">2. Lógica de Negocio</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Aplico Arquitectura Limpia (Clean Architecture). Separo controladores, servicios y repositorios 
                  para que la lógica de negocio sea testeable de forma aislada y no dependa del framework.
                </p>
              </div>

              {/* Box 3 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[50px] group-hover:bg-green-500/20 transition-colors" />
                <Database className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">3. Persistencia de Datos</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Uso MongoDB con Mongoose para flexibilidad, implementando la regla ESR (Equality, Sort, Range) 
                  para índices eficientes. Redis para caché en memoria de consultas frecuentes y sesiones.
                </p>
              </div>

              {/* Box 4 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] group-hover:bg-blue-500/20 transition-colors" />
                <Workflow className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">4. Integración de IA</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Para acelerar el desarrollo y reducir el código repetitivo, utilizo agentes de IA y automatización.
                  Esto me permite enfocarme en resolver problemas arquitectónicos complejos y entregar valor más rápido.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-lg mb-1 text-primary">¿Listo para ver el código?</h4>
                <p className="text-sm text-muted-foreground">Explora los repositorios en la sección de proyectos.</p>
              </div>
              <button 
                onClick={() => {
                  onClose();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Ir a Proyectos
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
