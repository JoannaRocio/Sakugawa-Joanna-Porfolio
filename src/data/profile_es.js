export const profileData = {
  name: "Sakugawa Joanna Rocio",
  shortName: "Joanna Sakugawa",
  role: "Especialista Frontend",
  location: "Minamikurihashi, Ciudad de Kuki, Saitama, Japón",
  contact: {
    email: "jrsakugawa@gmail.com",
    phone: "+81 70-9294-0470",
    github: "https://github.com/JoannaRocio",
    linkedin: null
  },
  visaStatusTitle: "Estado de Visa",
  visaStatus: "Residente de Larga Duración (定住者) - Sin restricciones laborales",
  cvFiles: {
    en: "/cv/CV_Joanna_Sakugawa_English.pdf",
    ja: "/cv/CV_Joanna_Sakugawa_Japanese.pdf",
    es: "/cv/CV_Joanna_Sakugawa_Spanish.pdf"
  },
  experience: [
    {
      id: "gire",
      company: "Gire S.A.",
      role: "Desarrolladora Full-Stack",
      period: "Julio 2025 – Noviembre 2025",
      location: "Buenos Aires, Argentina",
      description: "Refactorización de sistemas legacy hacia arquitecturas frontend modernas con React y desarrollo de APIs REST backend.",
      responsibilities: [
        "Refactoricé sistemas legacy hacia arquitecturas frontend modernas con React.",
        "Desarrollé funcionalidades de pago y módulos del sistema para códigos QR, tarjetas y terminales POS.",
        "Desarrollé endpoints de APIs REST utilizando Java y Spring Boot.",
        "Configuré entornos de desarrollo local utilizando Docker (Redis, bases de datos y servicios de autenticación)."
      ],
      technologies: ["React", "Java", "Spring Boot", "Docker", "REST API", "Postman", "Scrum"]
    },
    {
      id: "nonconformist",
      company: "Nonconformist",
      role: "Desarrolladora Frontend",
      period: "Abril 2024 – Junio 2025",
      location: "Buenos Aires, Argentina",
      description: "Desarrollo de plataformas web empresariales y estandarización de librerías de componentes.",
      responsibilities: [
        "Desarrollé desde cero el sitio web de Andina ART con React y Bootstrap a partir de diseños realizados en Figma.",
        "Creé una librería de componentes UI reutilizables para la aplicación de banca online de Banco Macro.",
        "Documenté los diseños de los componentes en Storybook para los equipos de diseño y desarrollo.",
        "Estructuré los estilos SCSS utilizando Design Tokens y variables CSS para facilitar la actualización de temas."
      ],
      technologies: ["React", "TypeScript", "Bootstrap", "Storybook", "Next.js", "SASS/SCSS", "Figma"]
    },
    {
      id: "huenei",
      company: "Huenei IT Services",
      role: "Desarrolladora Frontend",
      period: "Marzo 2023 – Marzo 2024",
      location: "Buenos Aires, Argentina",
      description: "Mantenimiento y desarrollo de aplicaciones web para gestión comercial y financiera.",
      responsibilities: [
        "Desarrollé interfaces de usuario responsive para aplicaciones de gestión comercial y ventas.",
        "Integré las interfaces frontend con servicios backend desarrollados en .NET y Java.",
        "Optimicé el rendimiento de las aplicaciones y solucioné errores para mejorar la estabilidad de los sistemas."
      ],
      technologies: ["Angular", "React", "TypeScript", "Java", "Spring Boot", "Figma", "Kanban"]
    },
    {
      id: "fyo",
      company: "FYO",
      role: "Desarrolladora Frontend",
      period: "Diciembre 2021 – Febrero 2023",
      location: "Santa Fe, Argentina",
      description: "Desarrollo de interfaces de datos de alto rendimiento y herramientas internas de gestión.",
      responsibilities: [
        "Desarrollé herramientas web internas con tablas de datos complejas y sistemas de control de permisos de usuarios.",
        "Implementé pruebas unitarias utilizando Jasmine y gestioné flujos de despliegue mediante Azure DevOps.",
        "Desarrollé diseños responsive a partir de prototipos de Adobe XD dentro de ciclos iterativos de Scrum."
      ],
      technologies: ["Angular", "TypeScript", "Jasmine", "Adobe XD", "Azure DevOps", "Scrum"]
    },
    {
      id: "baufest",
      company: "Baufest",
      role: "Desarrolladora Full-Stack",
      period: "Julio 2019 – Diciembre 2021",
      location: "Buenos Aires, Argentina",
      description: "Desarrollo Full-Stack para clientes internacionales de Norteamérica y empresas del sector de medios.",
      responsibilities: [
        "Trabajé como desarrolladora Full-Stack utilizando ASP.NET, .NET Core y SQL Server para el cliente estadounidense BCycle.",
        "Desarrollé pantallas web utilizando React, HTML5 y CSS3, además de funcionalidades web para dispositivos móviles.",
        "Desarrollé interfaces responsive para WarnerMedia a partir de diseños realizados en Figma y utilizando herramientas de gestión de contenidos."
      ],
      technologies: ["Angular", ".NET Core", "ASP.NET MVC", "Webflow", "C#", "SQL Server", "Docker", "Jira"]
    }
  ],
  education: [
    {
      institution: "Universidad Nacional de Lomas de Zamora",
      degree: "Técnica Universitaria en Programación",
      period: "Agosto 2022 – Agosto 2025",
      status: "Completado"
    }
  ],
  courses: [
    {
      title: "6.º Año de Inglés y Certificado de Inglés B2",
      institution: "Cambridge International School of English",
      period: "Marzo 2006 – Diciembre 2012",
      status: "Completado"
    }
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Intermedio Alto / B2 Certificado" },
    { name: "Japonés", level: "Básico" }
  ],
  skills: {
    Frontend: ["React (v18-19)", "Angular (v7-v18)", "Webflow", "TypeScript", "JavaScript", "Next.js", "RxJS", "Redux", "HTML5", "CSS3", "SASS/SCSS", "Material UI", "Bootstrap", "Storybook"],
    Backend: ["Java", "Spring Boot", "C#", ".NET Core", "ASP.NET MVC", "SQL Server", "MySQL", "REST APIs"],
    Tools: ["Git", "Docker", "Azure DevOps", "Postman", "Figma", "Adobe XD", "Jira", "Scrum", "Kanban", "Jest", "Jasmine"]
  }
};
