import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-16 mt-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-white text-lg tracking-[-0.04em] mb-2 uppercase">
              SARAVIA<span className="text-primary">.dev</span>
            </p>
            <p className="text-white/25 text-sm">
              © {new Date().getFullYear()} Theo Saravia. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="https://github.com/saraviadev"
              target="_blank"
              className="text-white/25 hover:text-white transition-colors flex items-center gap-2 text-sm hover-target"
            >
              <FaGithub className="w-4 h-4" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/theo-saravia-239688364/"
              target="_blank"
              className="text-white/25 hover:text-white transition-colors flex items-center gap-2 text-sm hover-target"
            >
              <FaLinkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="https://instagram.com/saravia.devv"
              target="_blank"
              className="text-white/25 hover:text-white transition-colors flex items-center gap-2 text-sm hover-target"
            >
              <FaInstagram className="w-4 h-4" />
              <span>Instagram</span>
            </Link>
            <Link
              href="https://wa.me/5491127537746"
              target="_blank"
              className="text-white/25 hover:text-green-400 transition-colors flex items-center gap-2 text-sm hover-target"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp</span>
            </Link>
          </div>
        </div>

        {/* Gradient separator */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <p className="mt-6 text-center text-[0.65rem] text-white/15 tracking-wider uppercase">
          Designed & Engineered by Saravia.dev
        </p>
      </div>
    </footer>
  );
}
