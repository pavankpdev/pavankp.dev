export interface SkillGroup {
  category: string;
  summary: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  impact: string[];
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
}

export const SITE = {
  name: "Pavan Kumar",
  role: "Full Stack AI Engineer",
  headline:
    "Full Stack AI Engineer specializing in distributed systems, cloud infrastructure, and scalable backend architectures.",
  summary:
    "I build production-grade AI systems, data-heavy backends, and cloud-native platforms where reliability, latency, and maintainability matter.",
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || "your-email@example.com",
  substackUrl: import.meta.env.PUBLIC_SUBSTACK_URL || "https://substack.com",
};

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/pavankpdev" },
  { label: "LinkedIn", href: "https://linkedin.com/in/pavan-kumar-2000" },
  { label: "X", href: "https://x.com/pavank38" },
];

export const STATS = [
  { label: "Backend and full stack delivery", value: "5+ yrs" },
  { label: "Large-row analytical datasets", value: "300K+" },
  { label: "Teams led across product builds", value: "5-6" },
];

export const SKILLS: SkillGroup[] = [
  {
    category: "AI Systems",
    summary: "Agent workflows, AI product surfaces, prompt orchestration, evaluation-minded delivery.",
    items: ["Agentic workflows", "LLM integration", "AI product engineering", "Workflow automation"],
  },
  {
    category: "Backend",
    summary: "Backend-heavy systems with clear contracts, durable data models, and scalable APIs.",
    items: ["Node.js", "NestJS", "Express.js", "Go", "GraphQL", "Prisma"],
  },
  {
    category: "Cloud and Infrastructure",
    summary: "Serverless, containerized, and infrastructure-as-code deployments for production teams.",
    items: ["AWS", "Lambda", "Docker", "Kubernetes", "Terraform CDK", "CI/CD"],
  },
  {
    category: "Data and Product",
    summary: "Interfaces and services for complex operational data, analytics, and internal tooling.",
    items: ["PostgreSQL", "MongoDB", "React", "Next.js", "Angular", "TypeScript"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Full Stack Developer",
    company: "HeimLabs",
    duration: "Sep 2025 - Present",
    description:
      "Building AI-driven product experiences and agentic systems for financial workflows.",
    impact: [
      "Developing autonomous AI experiences that reason, plan, and execute multi-step workflows.",
      "Building an AI-powered wealth management platform spanning trading workflows, prediction markets, and payment protocol integrations.",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "Fidociary",
    duration: "Jan 2025 - Aug 2025",
    description:
      "Led end-to-end product development across identity, compliance, and privacy-oriented systems.",
    impact: [
      "Drove the beta launch at Dubai FinTech Summit, shaping the product narrative and technical roadmap.",
      "Designed reusable identity and KYC flows with privacy-preserving verification patterns.",
    ],
  },
  {
    role: "Senior Full Stack Developer",
    company: "LanceSoft India, Client: Bosch",
    duration: "Mar 2024 - Dec 2024",
    description:
      "Built cloud-native software for Porsche's Decarbonisation Index across the Volkswagen group.",
    impact: [
      "Used Angular, AWS Lambda, and Terraform CDK to support a scalable serverless architecture.",
      "Built tools for analyzing 300K+ rows of vehicle emissions data for operational decision-making.",
    ],
  },
  {
    role: "Technical Manager",
    company: "Nonceblox",
    duration: "Jan 2023 - Jan 2024",
    description:
      "Managed a product engineering team and delivered complex platform work across emerging technology programs.",
    impact: [
      "Led a team of 5-6 engineers through architecture, delivery planning, and production execution.",
      "Shipped systems involving digital assets, high-throughput onboarding, and cross-functional stakeholder delivery.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Nonceblox",
    duration: "Aug 2021 - Jan 2023",
    description:
      "Built backend-heavy web platforms, infrastructure services, and high-traffic product workflows.",
    impact: [
      "Used AWS SES, SQS, Lambda, Kubernetes, and Docker to improve cloud reliability and operations.",
      "Architected a waitlisting system built to absorb launch spikes and protect downstream services.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "DevTown",
    duration: "Feb 2021 - Aug 2021",
    description:
      "Built and maintained an edtech platform for students, administrators, progress tracking, and analytics.",
    impact: [
      "Delivered the MVP in 30 days using MERN and GraphQL.",
      "Built product surfaces for learning progress, administration, and operational visibility.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "AI Wealth Workflows",
    description:
      "Agentic finance product work combining planning, execution, and user-facing decision support.",
    stack: ["AI systems", "TypeScript", "Backend architecture", "Payments"],
  },
  {
    name: "Decarbonisation Index",
    description:
      "Cloud-native emissions analytics tooling for large vehicle datasets across enterprise stakeholders.",
    stack: ["Angular", "AWS Lambda", "Terraform CDK", "Data systems"],
  },
  {
    name: "Launch-Scale Waitlisting",
    description:
      "A traffic-aware onboarding system designed to protect services during constrained high-demand launches.",
    stack: ["Node.js", "AWS", "Queues", "Distributed systems"],
  },
];
