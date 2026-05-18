import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-12 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Theo Saravia. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="https://github.com/46theosaravia46-cyber" target="_blank" className="hover:text-primary transition-colors">GitHub</Link>
          <Link href="https://linkedin.com/in/tu-perfil" target="_blank" className="hover:text-primary transition-colors">LinkedIn</Link>
          <Link href="mailto:46theosaravia46@gmail.com" className="hover:text-primary transition-colors">Email</Link>
        </div>
      </div>
    </footer>
  );
}
