import { Github, Server, Database, Shield } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "UTN E-Commerce Backend Architecture",
    description: "A production-ready e-commerce API built with Node.js, Express, and MongoDB. Implements complete authentication, role-based access control, cart management, and secure checkout workflows.",
    architecture: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    metrics: ["100% Test Coverage", "RESTful", "Modular"],
    icon: <Server className="w-6 h-6 text-primary" />,
    github: "https://github.com/46theosaravia46-cyber",
  },
  {
    title: "Secure Identity Provider Microservice",
    description: "Standalone authentication service using OAuth2 and JWT. Features rate limiting, payload validation (Joi/Zod), centralized error handling, and robust middleware pipelines.",
    architecture: ["TypeScript", "Express", "Redis", "Argon2"],
    metrics: ["OWASP 2025", "Stateless", "High Performance"],
    icon: <Shield className="w-6 h-6 text-primary" />,
    github: "https://github.com/46theosaravia46-cyber",
  },
  {
    title: "High-Frequency Data Aggregator",
    description: "Complex MongoDB aggregation pipelines optimizing read-heavy operations. Implements advanced indexing (ESR rule) reducing query times by 85%.",
    architecture: ["MongoDB", "Mongoose", "Node.js", "Jest"],
    metrics: ["Sub-50ms Queries", "Aggregations", "Scalable"],
    icon: <Database className="w-6 h-6 text-primary" />,
    github: "https://github.com/46theosaravia46-cyber",
  }
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-24 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Featured <span className="text-primary">Systems</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing backend architectures and scalable APIs built during the UTN program and independent freelance work. Focused on performance, security, and clean code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative glass-card p-8 rounded-2xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300"
            >
              <div>
                <div className="mb-6 bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.architecture.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-primary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {metric}
                    </span>
                  ))}
                </div>
                <Link 
                  href={project.github} 
                  target="_blank"
                  className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
