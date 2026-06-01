"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Send, X, Terminal, Loader2 } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  "¿Cuáles son tus tecnologías principales?",
  "Háblame de tus últimos proyectos",
  "¿Tienes experiencia con IA?",
];

export function FloatingAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Sistema XEO iniciado. ¿En qué puedo asistirte?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();

      if (data.message) {
        setMessages((prev) => [
          ...prev,
          { id: Date.now().toString(), role: "assistant", content: data.message },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { id: Date.now().toString(), role: "assistant", content: "Error en el sistema central." },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: "assistant", content: "Conexión interrumpida." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button (Bottom Left) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-primary hover:border-primary hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] group hover-target ${
          isOpen ? "opacity-0 pointer-events-none" : ""
        }`}
        aria-label="Open ZYAX AI"
      >
        <Cpu className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
        <span className="absolute left-14 bg-black/90 text-[10px] font-bold text-white px-2.5 py-1 rounded border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono tracking-wider">
          XEO AI
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-[100] w-[calc(100vw-3rem)] sm:w-[380px] h-[500px] max-h-[80vh] flex flex-col bg-[#08080c] border border-white/[0.08] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.04] bg-white/[0.01]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-white tracking-widest">
                    XEO<span className="text-primary">.ai</span>
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-white/40 uppercase tracking-wider font-mono">
                      Systems Online
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/[0.05] transition-colors hover-target"
              >
                <X className="w-4 h-4 text-white/50 hover:text-white" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <div className="flex flex-col gap-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col max-w-[85%] ${
                      msg.role === "user" ? "self-end items-end" : "self-start items-start"
                    }`}
                  >
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-1 px-1">
                      {msg.role === "user" ? "GUEST" : "XEO"}
                    </span>
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-white/[0.05] border border-white/[0.08] text-white rounded-tr-sm"
                          : "bg-primary/[0.05] border border-primary/10 text-white/80 rounded-tl-sm font-mono"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="self-start flex flex-col max-w-[85%]">
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-1 px-1">
                      XEO
                    </span>
                    <div className="px-4 py-3 rounded-2xl bg-primary/[0.05] border border-primary/10 rounded-tl-sm flex items-center gap-2">
                      <Loader2 className="w-3 h-3 animate-spin text-primary" />
                      <span className="text-xs text-white/40 font-mono tracking-widest uppercase">
                        Procesando...
                      </span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/[0.01] border-t border-white/[0.04]">
              {/* Suggestions */}
              {messages.length === 1 && (
                <div className="flex gap-2 overflow-x-auto pb-3 mb-1 scrollbar-none">
                  {SUGGESTIONS.map((sug, i) => (
                    <button
                      key={i}
                      onClick={() => handleSubmit(sug)}
                      className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] text-white/50 hover:text-white hover:border-white/20 transition-all font-mono hover-target"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              )}
              
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(input);
                }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Inicia comando..."
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-full pl-4 pr-12 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors font-mono"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1 w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white disabled:opacity-50 disabled:hover:bg-primary/10 disabled:hover:text-primary transition-all hover-target"
                >
                  <Send className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
