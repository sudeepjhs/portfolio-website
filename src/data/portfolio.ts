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
  about: `Full-Stack Developer with ${new Date().getFullYear() - 2021}+ years of experience architecting scalable React, Next.js, and Node.js applications — integrating GPT-4 and agentic AI into production workflows to automate recruitment, operations, and business management.`,

  skills: [
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "React Native",
        "TypeScript",
        "Chakra UI",
        "Tailwind CSS",
        "Framer Motion",
        "HTML5",
        "CSS3"
      ]
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Prisma ORM",
        "NextAuth.js",
        "ASP.NET",
        ".NET Core"
      ]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "SQLite", "MySQL", "Microsoft SQL Server"]
    },
    {
      category: "State & Data",
      skills: ["Zustand", "React Query (TanStack)", "Zod", "Axios"]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS (S3, Lambda, SQS, SNS, EventBridge)",
        "GCP",
        "Firebase Cloud Messaging",
        "CI/CD",
        "Git",
        "Agile"
      ]
    },
    {
      category: "Security & AI",
      skills: [
        "GPT-4",
        "Agentic AI",
        "FIDO2",
        "WebAuthn (Passkeys)",
        "JWT",
        "OAuth2",
        "OIDC",
        "RBAC",
        "JSON Prompting"
      ]
    },
    {
      category: "Low-code & APIs",
      skills: [
        "OutSystems (O11, ODC)",
        "Gmail API",
        "Google Calendar API",
        "Microsoft Graph API"
      ]
    }
  ],

  experience: [
    {
      company: "Valantic LCS",
      role: "Software Developer",
      location: "Indore, India",
      period: "Sep 2023 – Present",
      description: [
        "Engineered GPT-4 recruitment app automating ~70% of hiring tasks — resume parsing, candidate scoring, and interview scheduling.",
        "Implemented JWT + RBAC permission matrices shared across web and mobile, with NextAuth.js session management.",
        "Integrated Firebase FCM for real-time push notifications across iOS & Android.",
        "Built passwordless auth using FIDO2 & WebAuthn, eliminating password-based attack vectors.",
        "Delivered OCR-powered expense management app with AI-driven data extraction.",
        "Awarded Extra Mile Award for shipping innovative solutions beyond project scope."
      ]
    },
    {
      company: "WeP Solutions",
      role: "Software Engineer",
      location: "Bengaluru, India",
      period: "Aug 2021 – Sep 2023",
      description: [
        "Optimized React & Next.js apps, boosting performance by 15% and cutting critical bugs by 25%.",
        "Built Node.js + Microsoft Graph API email automation engine, increasing handling efficiency by 30%.",
        "Designed React.js Contract Management UI with digital workflows and e-signatures, reducing manual effort by 35%."
      ]
    },
    {
      company: "MicroTechnologies",
      role: "Full Stack Developer",
      location: "Remote",
      period: "Mar 2021 – Aug 2021",
      description: [
        "Shipped production-grade SPAs using React and Node.js.",
        "Launched Ride-Lelo real-time taxi app with live driver tracking, achieving 40% faster response time."
      ]
    }
  ],

  projects: [
    {
      title: "BizManage — Web Platform",
      description:
        "Architected a full-stack business management platform with Next.js, Prisma, and NextAuth.js — delivering RBAC, employee management, time & attendance, and inventory via a unified JWT-authenticated REST API.",
      tags: ["Next.js", "TypeScript", "Prisma", "NextAuth.js", "React Query", "Chakra UI", "JWT", "RBAC"],
      link: "https://github.com/sudeepjhs/biz-manage-app",
      spanSize: 2
    },
    {
      title: "BizManage — Mobile",
      description:
        "Shipped cross-platform iOS & Android app consuming the BizManage REST API — JWT auth, Zustand persistence, Firebase FCM push notifications, and Zod schema validation.",
      tags: ["React Native", "TypeScript", "Zustand", "JWT", "Firebase FCM", "Zod", "React Query", "Axios"],
      link: "https://github.com/sudeepjhs/biz-manage-mobile",
      spanSize: 1
    },
    {
      title: "AI Recruitment Platform",
      description:
        "Engineered GPT-4 + OutSystems hiring platform automating resume parsing, candidate scoring, and interview scheduling — cutting manual recruitment effort by 70%.",
      tags: ["GPT-4", "OutSystems", "Gmail API", "Google Calendar API", "OAuth2"],
      spanSize: 2
    },
    {
      title: "WebAuthn-FIDO2 Integration",
      description:
        "Implemented FIDO2.NET with OutSystems to deliver passwordless and MFA authentication via passkeys, eliminating password-based attack vectors.",
      tags: ["FIDO2", "WebAuthn", "OutSystems", ".NET"],
      spanSize: 1
    },
    {
      title: "AWS EventBridge System",
      description:
        "Designed event-driven microservices architecture integrating S3, Lambda, SQS, and SNS with real-time Firebase push notifications.",
      tags: ["AWS", "Lambda", "EventBridge", "SQS", "SNS", "Firebase"],
      spanSize: 1
    },
    {
      title: "Email Automation Engine",
      description:
        "Built rule-based email processing engine with Node.js and Microsoft Graph API, boosting operational handling efficiency by 30%.",
      tags: ["Node.js", "Microsoft Graph API", "REST APIs", "Automation"],
      spanSize: 2
    },
    {
      title: "TublianX Dashboards",
      description:
        "Delivered pixel-perfect onboarding and community dashboards in Next.js from Figma specs using MVVM architecture.",
      tags: ["Next.js", "TypeScript", "Chakra UI", "MVVM", "Figma"],
      link: "https://github.com/sudeepjhs/Frontend-Challenge-Tublian",
      spanSize: 1
    },
    {
      title: "Contract Management UI",
      description:
        "Engineered React.js front-end for digital contract workflows with e-signature integration, reducing manual processing effort by 35%.",
      tags: ["React.js", "TypeScript", "E-Signatures", "Automation"],
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