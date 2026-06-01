"use client";

import { useEffect, useRef, useState } from "react";

export function CodeSpotlightBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        containerRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        containerRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };

    // Initialize position in the center
    if (containerRef.current) {
      containerRef.current.style.setProperty("--mouse-x", "50%");
      containerRef.current.style.setProperty("--mouse-y", "50%");
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted]);

  if (!mounted) return null;

  // Real code snippets from this project to make it authentic!
  const codeSnippet1 = `import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SRV | Fullstack Developer Portfolio",
  description: "Fullstack Developer specializing in Modern Web Architecture, Next.js, Node.js & AI",
  authors: [{ name: "Theo Saravia" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body className="font-sans antialiased bg-black text-neutral-200">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}`;

  const codeSnippet2 = `"use client";

import { useEffect, useRef } from "react";

export function CodeSpotlightBg() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        containerRef.current.style.setProperty("--mouse-x", \`\${e.clientX}px\`);
        containerRef.current.style.setProperty("--mouse-y", \`\${e.clientY}px\`);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
}`;

  const codeSnippet3 = `const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/product');

router.post('/create-preference', async (req, res) => {
  try {
    const { orderId } = req.body;
    const order = await Order.findById(orderId);
    
    if (!order) return res.status(404).json({ message: 'Order not found' });
    
    // Verify stock before sending to payment gateway
    for (const item of order.products) {
      const productDB = await Product.findById(item.productId);
      if (productDB.stock < item.quantity) {
        return res.status(400).json({ message: 'Insufficient stock' });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});`;

  const codeSnippet4 = `import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (product, size, qty = 1) => {
    setItems(prev => {
      const exists = prev.find(i => i._id === product._id && i.size === size);
      if (exists) {
        return prev.map(i => i._id === product._id && i.size === size ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { ...product, size, qty }];
    });
  };
}`;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[-1] overflow-hidden bg-[#020204] select-none pointer-events-none"
    >
      {/* Code Text Background container with faint colors */}
      <div className="absolute inset-0 flex flex-wrap gap-12 p-8 opacity-[0.05] blur-[2px] scale-105 font-mono text-[0.65rem] leading-relaxed select-none transition-opacity duration-700">
        <div className="w-[45%] min-w-[320px] text-neutral-400 overflow-hidden h-[45vh]">
          <pre><code className="language-typescript">{codeSnippet1}</code></pre>
        </div>
        <div className="w-[45%] min-w-[320px] text-neutral-400 overflow-hidden h-[45vh]">
          <pre><code className="language-typescript">{codeSnippet2}</code></pre>
        </div>
        <div className="w-[45%] min-w-[320px] text-neutral-400 overflow-hidden h-[45vh]">
          <pre><code className="language-javascript">{codeSnippet3}</code></pre>
        </div>
        <div className="w-[45%] min-w-[320px] text-neutral-400 overflow-hidden h-[45vh]">
          <pre><code className="language-javascript">{codeSnippet4}</code></pre>
        </div>
      </div>

      {/* Spotlight Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle 220px at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 10%, rgba(2, 2, 4, 0.97) 80%)",
        }}
      />

      {/* Spotlight revealed colored code (high opacity, blur-none, and masked to only show near the mouse) */}
      <div 
        className="absolute inset-0 flex flex-wrap gap-12 p-8 font-mono text-[0.65rem] leading-relaxed select-none pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle 220px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 40%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(circle 220px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 40%, transparent 95%)",
        }}
      >
        <div className="w-[45%] min-w-[320px] text-blue-400/90 overflow-hidden h-[45vh]">
          <pre>
            <code>
              <span className="text-purple-400">import</span> type &#123; <span className="text-yellow-300">Metadata</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"next"</span>;<br />
              <span className="text-purple-400">import</span> <span className="text-green-300">"./globals.css"</span>;<br />
              <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">Navbar</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"@/components/layout/Navbar"</span>;<br />
              <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">Footer</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"@/components/layout/Footer"</span>;<br /><br />
              <span className="text-purple-400">export const</span> <span className="text-blue-300">metadata</span>: <span className="text-yellow-300">Metadata</span> = &#123;<br />
              &nbsp;&nbsp;title: <span className="text-green-300">"SRV | Fullstack Developer Portfolio"</span>,<br />
              &nbsp;&nbsp;description: <span className="text-green-300">"Fullstack Developer specializing in Modern Web Architecture, Next.js, Node.js & AI"</span>,<br />
              &nbsp;&nbsp;authors: [&#123; name: <span className="text-green-300">"Theo Saravia"</span> &#125;],<br />
              &#125;;<br /><br />
              <span className="text-purple-400">export default function</span> <span className="text-yellow-300">RootLayout</span>(&#123; <span className="text-red-300">children</span> &#125;) &#123;<br />
              &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">html</span> <span className="text-red-400">lang</span>=<span className="text-green-300">"es"</span> <span className="text-red-400">className</span>=<span className="text-green-300">"dark"</span>&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">body</span> <span className="text-red-400">className</span>=<span className="text-green-300">"font-sans antialiased bg-black text-neutral-200"</span>&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">Navbar</span> /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">main</span> <span className="text-red-400">className</span>=<span className="text-green-300">"flex-1"</span>&gt;&#123children&#125;&lt;/<span className="text-blue-400">main</span>&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">Footer</span> /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">body</span>&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">html</span>&gt;<br />
              &nbsp;&nbsp;);<br />
              &#125;
            </code>
          </pre>
        </div>

        <div className="w-[45%] min-w-[320px] text-blue-400/90 overflow-hidden h-[45vh]">
          <pre>
            <code>
              <span className="text-green-400">// Client component for interactive experience</span><br />
              <span className="text-green-300">"use client"</span>;<br /><br />
              <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">useEffect</span>, <span className="text-blue-300">useRef</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-300">"react"</span>;<br /><br />
              <span className="text-purple-400">export function</span> <span className="text-yellow-300">CodeSpotlightBg</span>() &#123;<br />
              &nbsp;&nbsp;<span className="text-purple-400">const</span> <span className="text-blue-300">containerRef</span> = <span className="text-yellow-300">useRef</span>&lt;<span className="text-yellow-300">HTMLDivElement</span>&gt;(<span className="text-purple-400">null</span>);<br /><br />
              &nbsp;&nbsp;<span className="text-yellow-300">useEffect</span>(() <span className="text-purple-400">=&gt;</span> &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">const</span> <span className="text-yellow-300">handleMouseMove</span> = (<span className="text-red-300">e</span>: <span className="text-yellow-300">MouseEvent</span>) <span className="text-purple-400">=&gt;</span> &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> (containerRef.current) &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;containerRef.current.style.setProperty(<span className="text-green-300">"--mouse-x"</span>, <span className="text-green-300">{"`\\${e.clientX}px`"}</span>);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;containerRef.current.style.setProperty(<span className="text-green-300">"--mouse-y"</span>, <span className="text-green-300">{"`\\${e.clientY}px`"}</span>);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;window.addEventListener(<span className="text-green-300">"mousemove"</span>, handleMouseMove);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> () <span className="text-purple-400">=&gt;</span> window.removeEventListener(<span className="text-green-300">"mousemove"</span>, handleMouseMove);<br />
              &nbsp;&nbsp;&#125;, []);<br />
              &#125;
            </code>
          </pre>
        </div>

        <div className="w-[45%] min-w-[320px] text-blue-400/90 overflow-hidden h-[45vh]">
          <pre>
            <code>
              <span className="text-green-400">// Backend order check routing (Looser Fit)</span><br />
              <span className="text-purple-400">const</span> <span className="text-blue-300">express</span> = require(<span className="text-green-300">'express'</span>);<br />
              <span className="text-purple-400">const</span> <span className="text-blue-300">router</span> = express.Router();<br />
              <span className="text-purple-400">const</span> <span className="text-blue-300">Order</span> = require(<span className="text-green-300">'../models/Order'</span>);<br />
              <span className="text-purple-400">const</span> <span className="text-blue-300">Product</span> = require(<span className="text-green-300">'../models/product'</span>);<br /><br />
              router.post(<span className="text-green-300">'/create-preference'</span>, <span className="text-purple-400">async</span> (req, res) <span className="text-purple-400">=&gt;</span> &#123;<br />
              &nbsp;&nbsp;<span className="text-purple-400">try</span> &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">const</span> &#123; orderId &#125; = req.body;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">const</span> order = <span className="text-purple-400">await</span> Order.findById(orderId);<br /><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> (!order) <span className="text-purple-400">return</span> res.status(<span className="text-red-300">404</span>).json(&#123; message: <span className="text-green-300">'Order not found'</span> &#125;);<br /><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">for</span> (<span className="text-purple-400">const</span> item <span className="text-purple-400">of</span> order.products) &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">const</span> productDB = <span className="text-purple-400">await</span> Product.findById(item.productId);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> (productDB.stock &lt; item.quantity) &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> res.status(<span className="text-red-300">400</span>).json(&#123; message: <span className="text-green-300">'Insufficient stock'</span> &#125;);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
              &nbsp;&nbsp;&#125; <span className="text-purple-400">catch</span> (error) &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;res.status(<span className="text-red-300">500</span>).json(&#123; message: error.message &#125;);<br />
              &nbsp;&nbsp;&#125;<br />
              &#125;);
            </code>
          </pre>
        </div>

        <div className="w-[45%] min-w-[320px] text-blue-400/90 overflow-hidden h-[45vh]">
          <pre>
            <code>
              <span className="text-green-400">// React state-based cart context manager (Looser Fit)</span><br />
              <span className="text-purple-400">import</span> &#123; createContext, useContext, useState &#125; <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span>;<br /><br />
              <span className="text-purple-400">const</span> <span className="text-blue-300">CartContext</span> = <span className="text-yellow-300">createContext</span>(<span className="text-purple-400">null</span>);<br /><br />
              <span className="text-purple-400">export function</span> <span className="text-yellow-300">CartProvider</span>(&#123; <span className="text-red-300">children</span> &#125;) &#123;<br />
              &nbsp;&nbsp;<span className="text-purple-400">const</span> [items, setItems] = <span className="text-yellow-300">useState</span>([]);<br /><br />
              &nbsp;&nbsp;<span className="text-purple-400">const</span> <span className="text-yellow-300">addItem</span> = (<span className="text-red-300">product, size, qty = 1</span>) <span className="text-purple-400">=&gt;</span> &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">setItems</span>(<span className="text-red-300">prev =&gt;</span> &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">const</span> exists = prev.find(<span className="text-red-300">i =&gt;</span> i._id === product._id && i.size === size);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> (exists) &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> prev.map(<span className="text-red-300">i =&gt;</span> i._id === product._id && i.size === size ? &#123; ...i, qty: i.qty + qty &#125; : i);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> [...prev, &#123; ...product, size, qty &#125;];<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;);<br />
              &nbsp;&nbsp;&#125;;<br />
              &#125;
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
