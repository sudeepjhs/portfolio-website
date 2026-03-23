export interface Project {
  title: string;
  description: string;
  tags: string[];
  spanSize?: number;
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
  about: string;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: {
    degree: string;
    school: string;
    period: string;
    gpa: string;
  }[];
  languages: string[];
  certifications: string[];
  heroRoles: string[];
}


export const portfolioData: PortfolioData = {
  name: "Sudeep Agarwal",
  title: "Full-Stack Developer · AI Integration Specialist",
  email: "sudeepagarwaljhs@gmail.com",
  linkedin: "https://linkedin.com/in/sudeepagarwaljhs",
  github: "https://github.com/sudeepjhs",
  portfolio: "https://www.sudeepagarwal.dev/",
  about:
    `Full-Stack Developer with ${new Date().getFullYear() - 2022}+ years of experience building scalable React, Next.js, and Node.js applications and integrating GPT-4 into production workflows to automate recruitment and operations.`,
  skills: [
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Chakra UI", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "ASP.NET", ".NET Core", "REST APIs"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "Microsoft SQL Server"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (S3, Lambda, SQS, SNS, EventBridge)", "GCP", "Firebase Cloud Messaging", "CI/CD", "Git", "Agile"]
    },
    {
      category: "Security & AI",
      skills: ["GPT-4", "Agentic AI", "FIDO2", "WebAuthn (Passkeys)", "OAuth2", "OIDC", "RBAC", "JSON Prompting"]
    },
    {
      category: "Low-code & APIs",
      skills: ["OutSystems (O11, ODC)", "Gmail API", "Google Calendar API", "Microsoft Graph API"]
    }
  ],
  experience: [
    {
      company: "Valantic LCS",
      role: "Software Developer",
      location: "Indore, India",
      period: "Sep 2023 – Present",
      description: [
        "Engineered GPT-4 recruitment application on OutSystems, automating ~70% of hiring tasks including resume parsing and candidate screening.",
        "Integrated Gmail and Google Calendar APIs to orchestrate interview scheduling and eliminate double bookings.",
        "Implemented passwordless authentication using FIDO2 and WebAuthn, strengthening security and improving login experience.",
        "Architected modular RBAC and audit logging aligned with GDPR for enterprise data protection.",
        "Delivered AI-driven expense management application with OCR-based data extraction.",
        "Received Extra Mile Award for creating innovative solutions beyond project scope."
      ]
    },
    {
      company: "WeP Solutions",
      role: "Software Engineer",
      location: "Bengaluru, India",
      period: "Aug 2021 – Sep 2023",
      description: [
        "Optimized React and Next.js applications, improving performance by 15% and reducing critical bugs by 25%.",
        "Developed Node.js and Microsoft Graph API email automation engine, boosting handling efficiency by 30%.",
        "Designed React.js Contract Management front-end with digital workflows and e-signatures, cutting manual handling by 35%."
      ]
    },
    {
      company: "MicroTechnologies",
      role: "Full Stack Developer",
      location: "Remote",
      period: "Mar 2021 – Aug 2021",
      description: [
        "Built high-performance SPAs using React and Node.js for production use.",
        "Launched Ride-Lelo taxi application with real-time driver tracking, achieving 40% faster response time."
      ]
    }
  ],
  projects: [
    {
      title: "AI Recruitment Platform",
      description:
        "Architected GPT-4 and OutSystems-based hiring platform automating resume parsing, candidate scoring, and interview scheduling.",
      tags: ["GPT-4", "OutSystems", "Gmail API", "Google Calendar API", "OAuth2"],
      spanSize: 2
    },
    {
      title: "WebAuthn-FIDO2 Integration",
      description:
        "Integrated FIDO2.NET with OutSystems to deliver passwordless and MFA authentication using passkeys.",
      tags: ["FIDO2", "WebAuthn", "OutSystems", ".NET"],
      spanSize: 1
    },
    {
      title: "AWS EventBridge System",
      description:
        "Designed event-driven architecture integrating S3, Lambda, SQS, and SNS with real-time Firebase notifications.",
      tags: ["AWS", "Lambda", "EventBridge", "SQS", "SNS", "Firebase"],
      spanSize: 1
    },
    {
      title: "Email Automation Engine",
      description:
        "Implemented rule-based email sorting engine with Node.js and Microsoft Graph API, improving efficiency by 30%.",
      tags: ["Node.js", "Microsoft Graph API", "Automation"],
      spanSize: 2
    },
    {
      title: "TublianX Dashboards",
      description:
        "Delivered pixel-perfect onboarding and community dashboards in Next.js from Figma designs using MVVM.",
      tags: ["Next.js", "MVVM", "Figma", "Responsive Design"],
      spanSize: 1
    },
    {
      title: "Contract Management",
      description:
        "Engineered React.js front-end for digital contract workflows and e-signatures, reducing manual work by 35%.",
      tags: ["React.js", "Automation", "E-Signatures"],
      spanSize: 2
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      school: "Sagar Institute of Science and Technology (RGPV)",
      period: "2018 – 2022",
      gpa: "8.86 / 10.0"
    }
  ],
  languages: ["English (Fluent)", "Hindi (Native)"],
  certifications: [
    "OutSystems Associate Reactive Developer",
    "OutSystems Web Developer",
    "Gen AI Academy (Google & H2S)"
  ],
  heroRoles: [
    "Software Engineer",
    "Software Developer",
    "AI Integration Specialist",
    "Agentic AI Engineer",
    "Full-Stack Architect",
    "Automation Strategist"
  ]
};
