export interface Experience {
  role: string;
  company: string;
  duration: string;
  impact: string[];
}

export const SITE = {
  name: "Pavan Kumar",
  role: "Full Stack AI Engineer",
  headline:
    "Building AI systems, scalable backend infrastructure, and performant frontend experiences.",
  summary:
    "Full stack engineer working across AI, distributed systems, cloud infrastructure, and product-grade interfaces.",
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || "your-email@example.com",
  substackUrl: import.meta.env.PUBLIC_SUBSTACK_URL || "https://substack.com",
};

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/pavankpdev" },
  { label: "LinkedIn", href: "https://linkedin.com/in/pavan-kumar-2000" },
  { label: "X", href: "https://x.com/pavank38" },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Full Stack Developer",
    company: "HeimLabs",
    duration: "Sep 2025 - Present",
    impact: [
      "Building agentic AI workflows that reason, plan, and execute multi-step financial operations.",
      "Developing backend services for AI-powered wealth workflows across trading, prediction markets, and payment protocol integrations.",
      "Designing product surfaces where AI behavior stays inspectable, recoverable, and useful to operators.",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "Fidociary",
    duration: "Jan 2025 - Aug 2025",
    impact: [
      "Drove the beta launch at Dubai FinTech Summit, shaping the product narrative and technical roadmap.",
      "Designed reusable identity and KYC flows with privacy-preserving verification patterns and clear backend contracts.",
      "Led end-to-end product development across compliance workflows, frontend delivery, and service architecture.",
    ],
  },
  {
    role: "Senior Full Stack Developer",
    company: "LanceSoft India, Client: Bosch",
    duration: "Mar 2024 - Dec 2024",
    impact: [
      "Used Angular, AWS Lambda, and Terraform CDK to support a scalable serverless architecture.",
      "Built tools for analyzing 300K+ rows of vehicle emissions data for operational decision-making.",
      "Improved the usability of dense emissions data by turning raw datasets into readable product workflows.",
    ],
  },
  {
    role: "Technical Manager",
    company: "Nonceblox",
    duration: "Jan 2023 - Jan 2024",
    impact: [
      "Led a team of 5-6 engineers through architecture, delivery planning, and production execution.",
      "Shipped systems involving digital assets, high-throughput onboarding, and cross-functional stakeholder delivery.",
      "Balanced hands-on engineering with reviews, planning, and technical unblockers across parallel workstreams.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Nonceblox",
    duration: "Aug 2021 - Jan 2023",
    impact: [
      "Used AWS SES, SQS, Lambda, Kubernetes, and Docker to improve cloud reliability and operations.",
      "Architected a waitlisting system built to absorb launch spikes and protect downstream services.",
      "Built backend-heavy web applications with MERN, service queues, infrastructure tooling, and selective blockchain integrations.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "DevTown",
    duration: "Feb 2021 - Aug 2021",
    impact: [
      "Delivered the MVP in 30 days using MERN and GraphQL.",
      "Built product surfaces for learning progress, administration, and operational visibility.",
      "Maintained admin and student workflows with emphasis on practical delivery speed and product clarity.",
    ],
  },
];
