import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-16 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-muted-foreground text-sm gap-6">
        <div>
          <p className="font-bold text-white text-base tracking-tight mb-2">SARAVIA DEV</p>
          <p>© {new Date().getFullYear()} Theo Saravia. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-6">
          <Link 
            href="https://github.com/46theosaravia46-cyber" 
            target="_blank" 
            className="hover:text-primary transition-all duration-300 flex items-center gap-2"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </Link>
          
          <Link 
            href="https://linkedin.com/in/theo-saravia-239688364" 
            target="_blank" 
            className="hover:text-primary transition-all duration-300 flex items-center gap-2"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </Link>
          
          <Link 
            href="mailto:46theosaravia46@gmail.com" 
            className="hover:text-primary transition-all duration-300 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
