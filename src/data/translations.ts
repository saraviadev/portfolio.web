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
      view_architecture: "View Highlights",
      github_profile: "GitHub Profile"
    },
    about: {
      title_1: "Architecting the",
      title_2: "digital future.",
      subtitle: "Who is Saravia Dev?",
      content: "I am Theo Saravia, a Fullstack Developer dedicated to engineering high-performance interactive interfaces and robust, scalable backend systems. I balance modern design aesthetics with clean code practices to deliver stable, ultra-fast software solutions optimized for the digital era."
    },
    services: {
      title_1: "Elite",
      title_2: "Solutions",
      subtitle: "A professional suite of development services designed to construct stable, scalable, and responsive software architectures.",
      items: [
        {
          title: "Frontend Engineering",
          description: "Stunning, high-performance user interfaces using React, Next.js, and TypeScript. Styled with Tailwind CSS and animated smoothly with Framer Motion for premium user experience."
        },
        {
          title: "Backend Architectures",
          description: "Ultra-fast servers and robust APIs developed in Node.js, Express, and TypeScript. Secure database integrations, authentication pipelines, and real-time connectivity."
        },
        {
          title: "AI Integration & Automation",
          description: "Supercharging software with AI capabilities. Integrating Large Language Models (LLMs), Puppeteer web-scrapers, and automated background tasks to scale operations."
        }
      ]
    },
    projects: {
      title_1: "Featured",
      title_2: "Systems",
      subtitle: "Showcasing backend architectures, fullstack products, and scalable APIs built during the UTN program and independent freelance work.",
      items: [
        {
          title: "Looserfit Web & E-Commerce",
          description: "A premium high-performance interactive fitness brand and e-commerce platform. Features dynamic cataloging, secure payment gateways, and a custom administrative dashboard.",
          architecture: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
          metrics: ["Production Live", "Payment Gateway", "Admin Panel"]
        },
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
    experience: {
      title_1: "Professional",
      title_2: "Timeline",
      subtitle: "A solid technical foundation built through structured education, real-world logistics, and specialized software engineering.",
      items: [
        {
          role: "Software Engineering & Full Stack Diplomatura",
          company: "UTN (Universidad Tecnológica Nacional)",
          period: "2024 - 2025",
          description: "Intensive backend and frontend specialization. Mastered RESTful APIs, database design, JWT authentication, security, and React/Node.js architecture with an Excellent grade."
        },
        {
          role: "Logistics Specialist & Customer Support",
          company: "Coto C.I.C.S.A.",
          period: "2023 - Present",
          description: "Managing complex internal logistics, product cataloging, and quick customer support in a high-volume retail center. Developed strong teamwork, conflict resolution, and multitasking under pressure."
        },
        {
          role: "Técnico - Maestro Mayor de Obras",
          company: "Escuela Técnica N° 1 de Escobar",
          period: "2016 - 2023",
          description: "7-year comprehensive technical education. Focus on mathematical logic, structural calculations, detailed blueprints, and rigorous project planning. Cultivated deep analytical thinking and attention to detail."
        }
      ]
    },
    skills: {
      title_1: "Technical",
      title_2: "Skills",
      subtitle: "Practical capabilities categorized for constructing high-value digital systems.",
      categories: {
        frontend: "Frontend & UI",
        backend: "Backend & Systems",
        soft: "Habilidades Blandas"
      },
      items: [
        { name: "React / Next.js", value: 90, category: "frontend" },
        { name: "Tailwind CSS / Framer Motion", value: 85, category: "frontend" },
        { name: "TypeScript / JavaScript", value: 88, category: "frontend" },
        { name: "Node.js / Express", value: 92, category: "backend" },
        { name: "MongoDB / Redis", value: 87, category: "backend" },
        { name: "Python / Scripting", value: 75, category: "backend" },
        { name: "Logical Problem Solving", value: 95, category: "soft" },
        { name: "Teamwork under pressure", value: 92, category: "soft" },
        { name: "Autodidact & Fast Learning", value: 98, category: "soft" }
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
    workflow: {
      title_1: "Development",
      title_2: "Workflow",
      subtitle: "A systematic 4-step process ensuring that code is stable, optimized, and ready to scale.",
      steps: [
        {
          num: "01",
          title: "Diagnosis & Discovery",
          description: "Analyzing system requirements, mapping database schemas, and selecting the optimal technology stack to align with the core business logic."
        },
        {
          num: "02",
          title: "Architecture & Design",
          description: "Structuring clean, decoupled folders, defining safe API endpoints, modeling authentication models, and laying out the responsive UI layout."
        },
        {
          num: "03",
          title: "Development & Testing",
          description: "Writing strict, typed code (TypeScript), implementing state management, building fast layouts, and verifying systems with tests (Jest)."
        },
        {
          num: "04",
          title: "Deployment & Scaling",
          description: "Deploying to secure cloud hosting, configuring CI/CD pipelines, optimizing loading speeds (SEO/Lighthouse), and establishing logs."
        }
      ]
    },
    ai: {
      title_1: "AI &",
      title_2: "Automation",
      subtitle: "Integrating artificial intelligence and automated background tasks to scale operation speeds.",
      features: [
        {
          title: "LLM Orchestration & APIs",
          description: "Connecting custom OpenAI, Anthropic, or local Ollama endpoints to build intelligent systems, automated chat interfaces, and natural language processors."
        },
        {
          title: "Automated Web Scraping",
          description: "Developing robust Puppeteer or Playwright browser automation scripts to crawl, extract, and monitor web data continuously in the background."
        },
        {
          title: "AI Voice & TTS Integration",
          description: "Integrating Text-to-Speech (TTS) and Speech-to-Text (STT) services, enabling voice-controlled daemons and audio processing (similar to Jarvis voice modules)."
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
      subtitle: "Interested in working together or proposing a project? Feel free to reach out via email or WhatsApp. I'll get back to you as soon as possible.",
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
      subtitle: "Junior Fullstack Developer | Aprendizaje acelerado e integración de IA para crear soluciones rápidas y modernas.",
      view_architecture: "Ver Destacados",
      github_profile: "Perfil de GitHub"
    },
    about: {
      title_1: "Arquitectando el",
      title_2: "futuro digital.",
      subtitle: "¿Quién es Saravia Dev?",
      content: "Soy Theo Saravia, un Desarrollador Fullstack apasionado por programar interfaces interactivas de alto rendimiento y arquitecturas de servidor robustas y escalables. Equilibro la estética del diseño moderno con prácticas de código limpio para entregar soluciones de software estables, rápidas y optimizadas para la era digital."
    },
    services: {
      title_1: "Soluciones de",
      title_2: "Élite",
      subtitle: "Un conjunto profesional de servicios de desarrollo diseñados para construir arquitecturas de software estables, escalables y adaptables.",
      items: [
        {
          title: "Ingeniería Frontend",
          description: "Interfaces de usuario hermosas y de alto rendimiento utilizando React, Next.js y TypeScript. Estilizadas con Tailwind CSS y animadas de forma fluida con Framer Motion para una experiencia premium."
        },
        {
          title: "Arquitecturas Backend",
          description: "Servidores rápidos y APIs robustas desarrolladas en Node.js, Express y TypeScript. Integración segura de bases de datos, flujos de autenticación y conectividad en tiempo real."
        },
        {
          title: "Integración de IA & Automatización",
          description: "Potenciando el software con capacidades de Inteligencia Artificial. Integración de Modelos de Lenguaje (LLMs), scrapers web con Puppeteer y tareas en segundo plano automatizadas para escalar operaciones."
        }
      ]
    },
    projects: {
      title_1: "Sistemas",
      title_2: "Destacados",
      subtitle: "Exhibiendo arquitecturas backend, productos fullstack y APIs escalables construidas durante el programa de la UTN y trabajo freelance independiente.",
      items: [
        {
          title: "Looserfit Web & E-Commerce",
          description: "Una plataforma e-commerce completa y marca interactiva de fitness de alto rendimiento. Cuenta con catálogo dinámico de productos, pasarela de pagos segura y un panel de administración personalizado.",
          architecture: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
          metrics: ["En Producción", "Pasarela de Pago", "Panel Admin"]
        },
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
    experience: {
      title_1: "Línea de",
      title_2: "Tiempo",
      subtitle: "Una base técnica sólida construida a través de educación técnica estructurada, logística real y desarrollo de software especializado.",
      items: [
        {
          role: "Diplomatura en Programación Web & Full Stack",
          company: "UTN (Universidad Tecnológica Nacional)",
          period: "2024 - 2025",
          description: "Especialización intensiva en backend y frontend. Dominio de APIs RESTful, diseño de bases de datos, autenticación JWT, seguridad y arquitectura React/Node.js con calificación de Excelente."
        },
        {
          role: "Especialista en Logística y Atención al Cliente",
          company: "Coto C.I.C.S.A.",
          period: "2023 - Presente",
          description: "Gestión de logística interna, catalogación de mercadería y soporte rápido al cliente en un supermercado de alto volumen. Desarrollo de trabajo en equipo, resolución de problemas y multitasking bajo presión."
        },
        {
          role: "Técnico - Maestro Mayor de Obras",
          company: "Escuela de Educación Secundaria Técnica N° 1 de Escobar",
          period: "2016 - 2023",
          description: "Formación técnica integral de 7 años. Enfoque en lógica matemática, cálculo de estructuras, planos técnicos detallados y rigurosa planificación de proyectos. Fuerte pensamiento analítico y atención al detalle."
        }
      ]
    },
    skills: {
      title_1: "Mis",
      title_2: "Habilidades",
      subtitle: "Capacidades prácticas categorizadas para la construcción de sistemas digitales de alto valor.",
      categories: {
        frontend: "Frontend y UI",
        backend: "Backend y Sistemas",
        soft: "Habilidades Blandas"
      },
      items: [
        { name: "React / Next.js", value: 90, category: "frontend" },
        { name: "Tailwind CSS / Framer Motion", value: 85, category: "frontend" },
        { name: "TypeScript / JavaScript", value: 88, category: "frontend" },
        { name: "Node.js / Express", value: 92, category: "backend" },
        { name: "MongoDB / Redis", value: 87, category: "backend" },
        { name: "Python / Scripting", value: 75, category: "backend" },
        { name: "Resolución Lógica de Problemas", value: 95, category: "soft" },
        { name: "Trabajo en Equipo bajo Presión", value: 92, category: "soft" },
        { name: "Autoaprendizaje y Rapidez", value: 98, category: "soft" }
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
    workflow: {
      title_1: "Flujo de",
      title_2: "Trabajo",
      subtitle: "Un proceso sistemático de 4 pasos que garantiza que el código sea estable, optimizado y esté listo para escalar.",
      steps: [
        {
          num: "01",
          title: "Diagnóstico y Descubrimiento",
          description: "Análisis detallado de los requerimientos, mapeo de esquemas de bases de datos y selección de la arquitectura óptima adaptada al negocio."
        },
        {
          num: "02",
          title: "Diseño y Arquitectura",
          description: "Estructuración de carpetas limpias, definición segura de endpoints de API, modelado de autenticación y diseño responsivo de la interfaz web."
        },
        {
          num: "03",
          title: "Desarrollo y Pruebas",
          description: "Escritura de código tipado estricto (TypeScript), desarrollo de layouts rápidos y fluidos y validación de sistemas con pruebas (Jest)."
        },
        {
          num: "04",
          title: "Despliegue y Optimización",
          description: "Publicación en servidores seguros en la nube, configuración de pipelines CI/CD, optimización técnica (SEO/Lighthouse) y monitoreo de logs."
        }
      ]
    },
    ai: {
      title_1: "IA &",
      title_2: "Automatización",
      subtitle: "Integración de inteligencia artificial y automatización de tareas en segundo plano para potenciar operaciones.",
      features: [
        {
          title: "Orquestación de LLMs & APIs",
          description: "Conexión de APIs de OpenAI, Anthropic o local Ollama para construir sistemas inteligentes, interfaces de chat automatizadas y análisis de datos en lenguaje natural."
        },
        {
          title: "Web Scraping Automatizado",
          description: "Creación de scripts robustos en Puppeteer o Playwright para navegar, extraer y monitorear datos de sitios web de forma automatizada y periódica."
        },
        {
          title: "Automatización de Voz & TTS",
          description: "Integración de servicios de Text-to-Speech (TTS) y procesamiento de voz para automatizaciones en segundo plano y disparadores inteligentes (estilo módulos de voz de Jarvis)."
        }
      ]
    },
    certifications: {
      title_1: "Excelencia",
      title_2: "Académica",
      subtitle: "Formal educación y certificaciones especializadas que respaldan habilidades técnicas prácticas.",
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
      subtitle: "¿Interesado en trabajar conmigo o proponerme un proyecto? Hablemos por correo o por WhatsApp. Te responderé a la brevedad.",
      button: "Decir Hola"
    },
    modal: {
      title: "Selecciona tu Idioma",
      english: "English",
      spanish: "Español"
    }
  }
};
