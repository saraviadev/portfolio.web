import { Database, Layout, Server, Settings, ShieldAlert, Cpu } from "lucide-react";

const stackGroups = [
  {
    title: "Backend & Core",
    icon: <Server className="w-5 h-5 text-primary" />,
    skills: ["Node.js", "Express.js", "TypeScript", "REST APIs", "GraphQL"]
  },
  {
    title: "Databases & Storage",
    icon: <Database className="w-5 h-5 text-primary" />,
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Redis", "Cloudinary"]
  },
  {
    title: "Frontend & UI",
    icon: <Layout className="w-5 h-5 text-primary" />,
    skills: ["Next.js (App Router)", "React.js", "TailwindCSS", "shadcn/ui", "Framer Motion"]
  },
  {
    title: "Architecture & Security",
    icon: <ShieldAlert className="w-5 h-5 text-primary" />,
    skills: ["JWT / OAuth2", "Microservices", "Clean Architecture", "OWASP Best Practices", "Zod / Joi"]
  },
  {
    title: "DevOps & Tooling",
    icon: <Settings className="w-5 h-5 text-primary" />,
    skills: ["Docker", "Git / GitHub Actions", "Vercel", "Render", "Postman"]
  },
  {
    title: "AI & Automation",
    icon: <Cpu className="w-5 h-5 text-primary" />,
    skills: ["Puppeteer", "LLM Integration", "Agentic Workflows", "Prompt Engineering", "Custom Scripts"]
  }
];

export function TechStack() {
  return (
    <section id="stack" className="py-32 bg-background border-t border-white/5 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Technology <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A curated stack selected for building high-performance, scalable, and secure systems. No fluff, just production-tested technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stackGroups.map((group, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl glass border border-white/5 hover:border-primary/20 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold">{group.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
