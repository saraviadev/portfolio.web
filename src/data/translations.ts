export type Language = "en" | "es";

export const translations = {
  en: {
    nav: {
      projects: "Projects",
      philosophy: "Philosophy",
      certifications: "Certifications",
      stack: "Tech Stack",
      contact: "Contact Me"
    },
    hero: {
      available: "Available for new opportunities",
      title_1: "Next-generation",
      title_2: "web development.",
      subtitle: "Junior Fullstack Developer | Accelerated learning & AI integration to build fast, modern solutions.",
      view_architecture: "View Architecture",
      github_profile: "GitHub Profile"
    },
    projects: {
      title_1: "Featured",
      title_2: "Systems",
      subtitle: "Showcasing backend architectures and scalable APIs built during the UTN program and independent freelance work. Focused on performance, security, and clean code.",
      items: [
        {
          title: "UTN E-Commerce Backend Architecture",
          description: "A production-ready e-commerce API built with Node.js, Express, and MongoDB. Implements complete authentication, role-based access control, cart management, and secure checkout workflows.",
          architecture: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
          metrics: ["100% Test Coverage", "RESTful", "Modular"]
        },
        {
          title: "Secure Identity Provider Microservice",
          description: "Standalone authentication service using OAuth2 and JWT. Features rate limiting, payload validation (Joi/Zod), centralized error handling, and robust middleware pipelines.",
          architecture: ["TypeScript", "Express", "Redis", "Argon2"],
          metrics: ["OWASP 2025", "Stateless", "High Performance"]
        },
        {
          title: "High-Frequency Data Aggregator",
          description: "Complex MongoDB aggregation pipelines optimizing read-heavy operations. Implements advanced indexing (ESR rule) reducing query times by 85%.",
          architecture: ["MongoDB", "Mongoose", "Node.js", "Jest"],
          metrics: ["Sub-50ms Queries", "Aggregations", "Scalable"]
        }
      ]
    },
    philosophy: {
      title_1: "Engineering",
      title_2: "Philosophy",
      subtitle: "Web development has evolved. My approach combines the speed of AI tooling with solid programming foundations to build innovative products.",
      items: [
        {
          title: "Clean Architecture",
          description: "Separation of concerns is non-negotiable. I design systems with distinct boundaries between UI, business logic, and data layers, ensuring maintainability and scalability."
        },
        {
          title: "Performance First",
          description: "From React compiler optimizations to MongoDB ESR indexing rules, every architectural decision is weighed against its impact on latency and throughput."
        },
        {
          title: "AI Automation",
          description: "I leverage AI agents, Puppeteer scripts, and automated workflows to reduce manual toil, supercharging development velocity and operational efficiency."
        },
        {
          title: "Production Ready",
          description: "Strict linting, centralized error handling, robust middleware pipelines, and OWASP security standards are built-in from day one, not treated as afterthoughts."
        }
      ]
    },
    certifications: {
      title_1: "Academic",
      title_2: "Excellence",
      subtitle: "Formal education and specialized certifications backing practical technical skills.",
      completed: "Completed"
    },
    stack: {
      title_1: "My",
      title_2: "Tools",
      subtitle: "A curated stack selected for building high-performance, scalable, and secure systems. No fluff, just production-tested technologies.",
      groups: {
        backend: "Backend & Core",
        database: "Databases & Storage",
        frontend: "Frontend & UI",
        architecture: "Architecture & Security",
        devops: "DevOps & Tooling",
        ai: "AI & Automation"
      }
    },
    contact: {
      title_1: "Let's build something",
      title_2: "extraordinary.",
      subtitle: "Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      button: "Say Hello"
    },
    modal: {
      title: "Select Language",
      english: "English",
      spanish: "Español"
    }
  },
  es: {
    nav: {
      projects: "Proyectos",
      philosophy: "Filosofía",
      certifications: "Certificaciones",
      stack: "Tecnologías",
      contact: "Contacto"
    },
    hero: {
      available: "Disponible para nuevas oportunidades",
      title_1: "Desarrollo web",
      title_2: "de nueva generación.",
      subtitle: "Desarrollador Fullstack Junior | Aprendizaje acelerado e integración de IA para crear soluciones rápidas y modernas.",
      view_architecture: "Ver Arquitectura",
      github_profile: "Perfil de GitHub"
    },
    projects: {
      title_1: "Sistemas",
      title_2: "Destacados",
      subtitle: "Exhibiendo arquitecturas backend y APIs escalables construidas durante el programa de la UTN y trabajo freelance independiente. Enfocado en rendimiento, seguridad y código limpio.",
      items: [
        {
          title: "Arquitectura Backend E-Commerce UTN",
          description: "Una API de e-commerce lista para producción construida con Node.js, Express y MongoDB. Implementa autenticación completa, control de acceso por roles, manejo de carrito y flujos de pago seguros.",
          architecture: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
          metrics: ["100% Cobertura de Tests", "RESTful", "Modular"]
        },
        {
          title: "Microservicio Proveedor de Identidad Seguro",
          description: "Servicio de autenticación independiente usando OAuth2 y JWT. Cuenta con limitación de tasa, validación de carga útil (Joi/Zod), manejo centralizado de errores y pipelines de middleware robustos.",
          architecture: ["TypeScript", "Express", "Redis", "Argon2"],
          metrics: ["OWASP 2025", "Sin Estado", "Alto Rendimiento"]
        },
        {
          title: "Agregador de Datos de Alta Frecuencia",
          description: "Pipelines de agregación complejos en MongoDB optimizando operaciones intensivas de lectura. Implementa indexación avanzada (regla ESR) reduciendo los tiempos de consulta en un 85%.",
          architecture: ["MongoDB", "Mongoose", "Node.js", "Jest"],
          metrics: ["Consultas < 50ms", "Agregaciones", "Escalable"]
        }
      ]
    },
    philosophy: {
      title_1: "Filosofía de",
      title_2: "Ingeniería",
      subtitle: "El desarrollo web cambió. Mi enfoque une la velocidad de las herramientas de IA con bases sólidas de programación para crear productos que innovan.",
      items: [
        {
          title: "Arquitectura Limpia",
          description: "La separación de responsabilidades no es negociable. Diseño sistemas con límites claros entre UI, lógica de negocio y capas de datos, asegurando mantenibilidad y escalabilidad."
        },
        {
          title: "Rendimiento Primero",
          description: "Desde optimizaciones del compilador de React hasta reglas de indexación ESR en MongoDB, cada decisión arquitectónica se evalúa según su impacto en la latencia y el rendimiento."
        },
        {
          title: "Automatización con IA",
          description: "Aprovecho agentes de IA, scripts de Puppeteer y flujos de trabajo automatizados para reducir el esfuerzo manual, potenciando la velocidad de desarrollo y la eficiencia operativa."
        },
        {
          title: "Listo para Producción",
          description: "Linting estricto, manejo de errores centralizado, pipelines de middleware robustos y estándares de seguridad OWASP están integrados desde el primer día, no son un agregado de último momento."
        }
      ]
    },
    certifications: {
      title_1: "Excelencia",
      title_2: "Académica",
      subtitle: "Educación formal y certificaciones especializadas que respaldan habilidades técnicas prácticas.",
      completed: "Completado"
    },
    stack: {
      title_1: "Mis",
      title_2: "Herramientas",
      subtitle: "Un stack seleccionado para construir sistemas de alto rendimiento, escalables y seguros. Nada de relleno, solo tecnologías probadas en producción.",
      groups: {
        backend: "Backend y Core",
        database: "Bases de Datos",
        frontend: "Frontend y UI",
        architecture: "Arquitectura y Seguridad",
        devops: "DevOps y Herramientas",
        ai: "IA y Automatización"
      }
    },
    contact: {
      title_1: "Construyamos algo",
      title_2: "extraordinario.",
      subtitle: "Actualmente abierto a nuevas oportunidades. Ya sea que tengas una pregunta o solo quieras saludar, haré lo posible por responderte.",
      button: "Decir Hola"
    },
    modal: {
      title: "Selecciona tu Idioma",
      english: "English",
      spanish: "Español"
    }
  }
};
