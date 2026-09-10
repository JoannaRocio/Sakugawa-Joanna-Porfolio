export const profileData = {
  name: "Sakugawa Joanna Rocio",
  shortName: "Joanna Sakugawa",
  role: "Frontend Specialist",
  location: "Minamikurihashi, Kuki City, Saitama, Japan",
  contact: {
    email: "jrsakugawa@gmail.com",
    phone: "070-9294-0470",
    github: "https://github.com/JoannaRocio",
    linkedin: null // Omitido según indicación
  },
  visaStatusTitle: "Visa Status",
  visaStatus: "Long-Term Resident (定住者) - No work restrictions",
  cvFiles: {
    en: "/cv/CV_Joanna_Sakugawa_English.pdf",
    ja: "/cv/CV_Joanna_Sakugawa_Japanese.pdf",
    es: "/cv/CV_Joanna_Sakugawa_Spanish.pdf"
  },
  experience: [
    {
      id: "gire",
      company: "Gire S.A.",
      role: "Full-Stack Developer",
      period: "July 2025 – November 2025",
      location: "Buenos Aires, Argentina",
      description: "Help refactor legacy systems into modern React frontend setups and build backend REST APIs.",
      responsibilities: [
        "Refactored legacy systems into modern React frontend architectures.",
        "Built payment features and system modules for QR codes, cards, and POS terminals.",
        "Developed REST API endpoints using Java and Spring Boot.",
        "Configured local development environments using Docker (Redis, Databases, Login services)."
      ],
      technologies: ["React", "Java", "Spring Boot", "Docker", "REST API", "Postman", "Scrum"]
    },
    {
      id: "nonconformist",
      company: "Nonconformist",
      role: "Frontend Developer",
      period: "April 2024 – June 2025",
      location: "Buenos Aires, Argentina",
      description: "Developed enterprise web platforms and standardized component libraries.",
      responsibilities: [
        "Built the Andina ART website from scratch with React and Bootstrap based on Figma designs.",
        "Created a reusable UI component library for Banco Macro's online banking app.",
        "Documented component designs in Storybook for cross-functional design and dev teams.",
        "Structured SCSS styling with Design Tokens and CSS variables for flexible theme updates."
      ],
      technologies: ["React", "TypeScript", "Bootstrap", "Storybook", "Next.js", "SASS/SCSS", "Figma"]
    },
    {
      id: "huenei",
      company: "Huenei IT Services",
      role: "Frontend Developer",
      period: "March 2023 – March 2024",
      location: "Buenos Aires, Argentina",
      description: "Maintained and created web applications for commercial and financial management.",
      responsibilities: [
        "Built responsive user interfaces for trade management and sales applications.",
        "Connected frontend interfaces with backend services built in .NET and Java.",
        "Optimized application speed and fixed software bugs to enhance system stability."
      ],
      technologies: ["Angular", "React","TypeScript", "Java", "Spring Boot", "Figma", "Kanban"]
    },
    {
      id: "fyo",
      company: "FYO",
      role: "Frontend Developer",
      period: "December 2021 – February 2023",
      location: "Santa Fe, Argentina",
      description: "Focused on high-performance data interfaces and internal management tools.",
      responsibilities: [
        "Developed internal web tools with complex data tables and user permission controls.",
        "Implemented unit tests using Jasmine and managed deployment workflows in Azure DevOps.",
        "Built responsive designs from Adobe XD prototypes in iterative Scrum cycles."
      ],
      technologies: ["Angular", "TypeScript", "Jasmine", "Adobe XD", "Azure DevOps", "Scrum"]
    },
    {
      id: "baufest",
      company: "Baufest",
      role: "Full-Stack Developer",
      period: "July 2019 – December 2021",
      location: "Buenos Aires, Argentina",
      description: "Full-stack development for international clients in North America and media enterprises.",
      responsibilities: [
        "Worked as full-stack engineer using ASP.NET, .NET Core, SQL Server for US client (BCycle).",
        "Built web screens with React, HTML5, and CSS3, and developed mobile web features.",
        "Created responsive screens for WarnerMedia using Figma designs and content management tools."
      ],
      technologies: ["Angular", ".NET Core", "ASP.NET MVC", "Webflow", "C#", "SQL Server", "Docker", "Jira"]
    }
  ],
  education: [
    {
      institution: "National University of Lomas de Zamora",
      degree: "Computer Programming Technician",
      period: "Aug 2022 – Aug 2025",
      status: "Completed"
    }
  ],
  courses: [
    {
      title: "6th Year English Language & English B2 Certificate",
      institution: "Cambridge International School of English",
      period: "Mar 2006 -  Dec 2012",
      status: "Completed"
    }
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Upper-Intermediate / B2 Certified" },
    { name: "Japanese", level: "Elementary" }
  ],
  skills: {
    Frontend: ["React (v18-19)", "Angular (v7-v18)", "Webflow", "TypeScript", "JavaScript", "Next.js", "RxJS", "Redux", "HTML5", "CSS3", "SASS/SCSS", "Material UI", "Bootstrap", "Storybook"],
    Backend: ["Java", "Spring Boot", "C#", ".NET Core", "ASP.NET MVC", "SQL Server", "MySQL", "REST APIs"],
    Tools: ["Git", "Docker", "Azure DevOps", "Postman", "Figma", "Adobe XD", "Jira", "Scrum", "Kanban", "Jest", "Jasmine"]
  }
};