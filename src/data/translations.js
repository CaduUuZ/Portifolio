export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Carlos Eduardo.",
      roles: [
        "Desenvolvedor Full-stack",
        "Backend Developer",
        "Frontend Developer",
        "Java Developer",
        "React Developer",
        "DBA",
        "Service Desk",
      ],
      cta_projects: "Ver Projetos",
      cta_contact: "Contato",
      languages: "Português • English • Español",
    },
    about: {
      title: "Sobre Mim",
      p1: "Desenvolvedor apaixonado por tecnologia, com experiência em suporte internacional e desenvolvimento de aplicações web utilizando React, Node.js, Java e bancos de dados relacionais.",
      p2: "Atualmente atuo com suporte técnico multilíngue para mais de 10 países, enquanto desenvolvo projetos full-stack focados em performance, usabilidade e escalabilidade.",
      p3: "Tenho habilidade para comunicar soluções técnicas em diferentes idiomas e culturas, o que me torna um profissional diferenciado tanto em desenvolvimento quanto em ambientes globais.",
      download_cv: "Download CV",
    },
    skills: {
      title: "Stack & Tecnologias",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Banco de Dados",
        tools: "Ferramentas",
      },
    },
    projects: {
      title: "Projetos",
      subtitle: "Cada projeto representa um problema real resolvido com tecnologia.",
      github: "GitHub",
      demo: "Ver Demo",
      items: [
        {
          id: 1,
          title: "Sistema de Service Desk",
          description:
            "Sistema completo de chamados técnicos com autenticação, dashboard, níveis de prioridade e gerenciamento de tickets. Inspirado na experiência real de suporte multilíngue.",
          stack: [
            "React", 
            "Node.js", 
            "MySQL", 
            "JWT"
          ],

          images: [
            "/desk/1.png",
            "/desk/2.png",
            "/desk/3.png",
            "/desk/4.png",
            "/desk/5.png",
            "/desk/6.png",
          ],
          
          github: "https://github.com/CaduUuZ/NexusDesk",
          demo: "#",
        },
        {
          id: 2,
          title: "Sistema Financeiro",
          description:
            "Dashboard financeiro com controle de entradas e saídas, gráficos interativos, autenticação JWT e relatórios por período.",
          stack: [
              "React", 
              "Node.js", 
              "PostgreSQL", 
              "Chart.js"
            ],

            images: [
              "/fin/1.png",
              "/fin/2.png",
              "/fin/3.png",
              "/fin/4.png",
              "/fin/5.png",
            ],

            github: "https://github.com/CaduUuZ/FinanceSystem",
            
            demo: "#",
        },
        {
        id: 3,
        title: "Sistema de Laboratório",
        description: "Sistema completo para gerenciamento de pacientes, exames e dashboards laboratoriais.",
        
        stack: [
          "PHP",
          "MySQL",
          "HTML/CSS",
          "JavaScript",
          "Bootstrap"
        ],

        images: [
          "/lab/1.png",
          "/lab/2.png",
          "/lab/3.png",
          "/lab/4.png",
          "/lab/5.png",
          "/lab/6.png",
        ],

        github: "https://github.com/CaduUuZ/DevMotors",
        demo: "#",
        },
        {
          id: 4,
          title: "App Mobile — Hábitos",
          description:
            "Aplicativo mobile para controle de hábitos diários com streak, notificações e visualização de progresso semanal.",
          
            stack: [
              "React Native",
              "Node.js",
              "Tailwind", 
              "babel"
            ],

            images: [
          "/hab/1.png",
          "/hab/2.png",
          "/hab/3.png",
          "/hab/4.png",
          "/hab/5.png",
          "/hab/6.png",
          ],
          github: "https://github.com/CaduUuZ/HabitsApp",
          demo: "#",
        },

        {
          id: 5,
          title: "QuickFood",
          description:
            "Sistma inspirado no app iFood, com funcionalidades de cardápio, carrinho, checkout e painel administrativo.",
          
            stack: [
              "Typescript",
              "Vite",
              "CSS", 
            ],

            images: [
          "/ifood/1.png",
          "/ifood/2.png",
          "/ifood/3.png",
          "/ifood/4.png",
          "/ifood/5.png",
          "/ifood/6.png",
          ],
          github: "https://github.com/CaduUuZ/QuickFood",
          demo: "#",
        },

        {
          id: 6,
          title: "Sistema de Ecommerce",
          description:
            "Sistema de ecommerce sendo aprimorado. Projeto com foco no back, validação de tokens e etc.",
          
            stack: [
              "Next.js",
              "Node.js",
              "Typescript",
              "Tailwind", 
              "MongoDB"
            ],

            images: [
          "/mar/1.png",
          "/mar/2.png",
          "/mar/3.png",
          "/mar/4.png",
          ],
          github: "https://github.com/CaduUuZ/SistemaFullStack",
          demo: "sistema-full-stack.vercel.app/login",
        },
      ],

      moreProjects: "E muito mais projetos disponíveis no meu GitHub.",
      visitGithub: "Visitar GitHub",
    },
    contact: {
      title: "Contato",
      subtitle: "Vamos conversar sobre oportunidades ou projetos.",
      email_label: "E-mail",
      linkedin_label: "LinkedIn",
      github_label: "GitHub",
      name_placeholder: "Seu nome",
      email_placeholder: "Seu e-mail",
      message_placeholder: "Sua mensagem",
      send: "Enviar Mensagem",
    },
    footer: {
      made: "Feito com",
      by: "por Carlos Eduardo",
    },
  },

  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Carlos Eduardo.",
      roles: [
        "Full-stack Developer",
        "Backend Developer",
        "Frontend Developer",
        "Java Developer",
        "React Developer",
        "DBA",
        "Service Desk",
      ],
      cta_projects: "View Projects",
      cta_contact: "Contact",
      languages: "Português • English • Español",
    },
    about: {
      title: "About Me",
      p1: "Passionate developer with experience in international support and web application development using React, Node.js, Java and relational databases.",
      p2: "I currently work with multilingual technical support for over 10 countries, while developing full-stack projects focused on performance, usability and scalability.",
      p3: "I'm skilled at communicating technical solutions across different languages and cultures, making me a standout professional in both development and global environments.",
      download_cv: "Download CV",
    },
    skills: {
      title: "Stack & Technologies",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        tools: "Tools",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Each project represents a real problem solved with technology.",
      github: "GitHub",
      demo: "Live Demo",
      items: [
        {
          id: 1,
          title: "Service Desk System",
          description:
            "Complete ticket management system with authentication, dashboard, priority levels and ticket tracking. Inspired by real multilingual support experience.",
          stack: [
            "React", 
            "Node.js", 
            "MySQL", 
            "JWT"
          ],

          images: [
            "/desk/1.png",
            "/desk/2.png",
            "/desk/3.png",
            "/desk/4.png",
            "/desk/5.png",
            "/desk/6.png",
          ],

          github: "https://github.com/CaduUuZ/NexusDesk",
          demo: "#",
        },
        {
          id: 2,
          title: "Financial System",
          description:
            "Financial dashboard with income/expense control, interactive charts, JWT authentication and period reports.",
          stack: [
              "React", 
              "Node.js", 
              "PostgreSQL", 
              "Chart.js"
            ],

            images: [
              "/fin/1.png",
              "/fin/2.png",
              "/fin/3.png",
              "/fin/4.png",
              "/fin/5.png",
            ],

            github: "https://github.com/CaduUuZ/FinanceSystem",
            
            demo: "#",
        },
        {
          id: 3,
          title: "Laboratory System",
          description:
            "Complete lab report management, patient registration, exam control and results with admin panel.",
          stack: [
          "PHP",
          "MySQL",
          "HTML/CSS",
          "JavaScript",
          "Bootstrap"
        ],

        images: [
          "/lab/1.png",
          "/lab/2.png",
          "/lab/3.png",
          "/lab/4.png",
          "/lab/5.png",
          "/lab/6.png",
        ],

        github: "https://github.com/CaduUuZ/DevMotors",
        demo: "https://demo.com",
        },
        {
          id: 4,
          title: "Mobile App — Habits",
          description:
            "Mobile app for daily habit tracking with streak, notifications and weekly progress visualization.",
          stack: [
              "React Native",
              "Node.js",
              "Tailwind", 
              "babel"
            ],

            images: [
          "/hab/1.png",
          "/hab/2.png",
          "/hab/3.png",
          "/hab/4.png",
          "/hab/5.png",
          "/hab/6.png",
          ],
          github: "https://github.com/CaduUuZ/HabitsApp",
          demo: "#",
        },

        {
          id: 5,
          title: "QuickFood",
          description:
            "iFood-inspired system with menu, cart, checkout and admin panel functionalities.",
          
            stack: [
              "Typescript",
              "Vite",
              "CSS", 
            ],

            images: [
          "/ifood/1.png",
          "/ifood/2.png",
          "/ifood/3.png",
          "/ifood/4.png",
          "/ifood/5.png",
          "/ifood/6.png",
          ],
          github: "https://github.com/CaduUuZ/QuickFood",
          demo: "#",
        },

        {
          id: 6,
          title: "Ecommerce System",
          description:
            "Ecommerce system being improved. Project focused on backend, token validation, etc.",
          
            stack: [
              "Next.js",
              "Node.js",
              "Typescript",
              "Tailwind", 
              "MongoDB"
            ],

            images: [
          "/mar/1.png",
          "/mar/2.png",
          "/mar/3.png",
          "/mar/4.png",
          ],
          github: "https://github.com/CaduUuZ/SistemaFullStack",
          demo: "sistema-full-stack.vercel.app/login",
        },
      ],

      moreProjects: "And many more projects available on my GitHub.",
      visitGithub: "Visit GitHub",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's talk about opportunities or projects.",
      email_label: "Email",
      linkedin_label: "LinkedIn",
      github_label: "GitHub",
      name_placeholder: "Your name",
      email_placeholder: "Your email",
      message_placeholder: "Your message",
      send: "Send Message",
    },
    footer: {
      made: "Made with",
      by: "by Carlos Eduardo",
    },
  },

  es: {
    nav: {
      about: "Sobre mí",
      skills: "Skills",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Carlos Eduardo.",
      roles: [
        "Desarrollador Full-stack",
        "Backend Developer",
        "Frontend Developer",
        "Java Developer",
        "React Developer",
        "DBA",
        "Service Desk",
      ],
      cta_projects: "Ver Proyectos",
      cta_contact: "Contacto",
      languages: "Português • English • Español",
    },
    about: {
      title: "Sobre Mí",
      p1: "Desarrollador apasionado por la tecnología, con experiencia en soporte internacional y desarrollo de aplicaciones web con React, Node.js, Java y bases de datos relacionales.",
      p2: "Actualmente trabajo en soporte técnico multilingüe para más de 10 países, mientras desarrollo proyectos full-stack enfocados en rendimiento, usabilidad y escalabilidad.",
      p3: "Tengo habilidad para comunicar soluciones técnicas en diferentes idiomas y culturas, lo que me hace un profesional diferenciado tanto en desarrollo como en entornos globales.",
      download_cv: "Descargar CV",
    },
    skills: {
      title: "Stack & Tecnologías",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Base de Datos",
        tools: "Herramientas",
      },
    },
    projects: {
      title: "Proyectos",
      subtitle: "Cada proyecto representa un problema real resuelto con tecnología.",
      github: "GitHub",
      demo: "Ver Demo",
      items: [
        {
          id: 1,
          title: "Sistema de Service Desk",
          description:
            "Sistema completo de tickets técnicos con autenticación, dashboard, niveles de prioridad y gestión de tickets. Inspirado en experiencia real de soporte multilingüe.",
          stack: [
            "React", 
            "Node.js", 
            "MySQL", 
            "JWT"
          ],

          images: [
            "/desk/1.png",
            "/desk/2.png",
            "/desk/3.png",
            "/desk/4.png",
            "/desk/5.png",
            "/desk/6.png",
          ],

          github: "https://github.com/CaduUuZ/NexusDesk",
          demo: "#",
        },
        {
          id: 2,
          title: "Sistema Financiero",
          description:
            "Dashboard financiero con control de ingresos y gastos, gráficos interactivos, autenticación JWT e informes por período.",
          
            stack: [
              "React", 
              "Node.js", 
              "PostgreSQL", 
              "Chart.js"
            ],

            images: [
              "/fin/1.png",
              "/fin/2.png",
              "/fin/3.png",
              "/fin/4.png",
              "/fin/5.png",
            ],

            github: "https://github.com/CaduUuZ/FinanceSystem",

            demo: "#",
        },
        {
          id: 3,
          title: "Sistema de Laboratorio",
          description:
            "Gestión completa de informes de laboratorio, registro de pacientes, control de exámenes y resultados con panel administrativo.",
          stack: [
            "PHP",
            "MySQL",
            "HTML/CSS",
            "JavaScript",
            "Bootstrap"
        ],

        images: [
          "/lab/1.png",
          "/lab/2.png",
          "/lab/3.png",
          "/lab/4.png",
          "/lab/5.png",
          "/lab/6.png",
        ],

        github: "https://github.com/CaduUuZ/DevMotors",
        demo: "https://demo.com",
        },
        {
          id: 4,
          title: "App Móvil — Hábitos",
          description:
            "Aplicación móvil para control de hábitos diarios con racha, notificaciones y visualización del progreso semanal.",
          stack: [
              "React Native",
              "Node.js",
              "Tailwind", 
              "babel"
            ],

            images: [
          "/hab/1.png",
          "/hab/2.png",
          "/hab/3.png",
          "/hab/4.png",
          "/hab/5.png",
          "/hab/6.png",
          ],
          github: "https://github.com/CaduUuZ/HabitsApp",
          demo: "#",
        },

        {
          id: 5,
          title: "QuickFood",
          description:
            "Sistema inspirado en iFood, con funcionalidades de menú, carrito, checkout y panel administrativo.",

          stack: [
              "Typescript",
              "Vite",
              "CSS", 
            ],

            images: [
          "/ifood/1.png",
          "/ifood/2.png",
          "/ifood/3.png",
          "/ifood/4.png",
          "/ifood/5.png",
          "/ifood/6.png",
          ],
          github: "https://github.com/CaduUuZ/QuickFood",
          demo: "#",

        },

        {
          id: 6,
          title: "Sistema de Ecommerce",
          description:
            "Sistema de ecommerce en proceso de mejora. Proyecto con enfoque en backend, validación de tokens, etc.",
          
            stack: [
              "Next.js",
              "Node.js",
              "Typescript",
              "Tailwind", 
              "MongoDB"
            ],

            images: [
          "/mar/1.png",
          "/mar/2.png",
          "/mar/3.png",
          "/mar/4.png",
          ],

          github: "shttps://github.com/CaduUuZ/SistemaFullStack",
          demo: "sistema-full-stack.vercel.app/login",
        },
      ],

      moreProjects: "Y muchos más proyectos disponibles en mi GitHub.",
      visitGithub: "Visitar GitHub",
    },
    contact: {
      title: "Contacto",
      subtitle: "Hablemos sobre oportunidades o proyectos.",
      email_label: "Correo",
      linkedin_label: "LinkedIn",
      github_label: "GitHub",
      name_placeholder: "Tu nombre",
      email_placeholder: "Tu correo",
      message_placeholder: "Tu mensaje",
      send: "Enviar Mensaje",
    },
    footer: {
      made: "Hecho con",
      by: "por Carlos Eduardo",
    },
  },
};
