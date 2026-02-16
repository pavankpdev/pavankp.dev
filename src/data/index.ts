export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  impact: string[];
}

export interface BlogPostMeta {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

export const SKILLS: SkillGroup[] = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "GraphQL"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Express.js", "Go", "MongoDB", "PostgreSQL", "Prisma"] },
  { category: "Blockchain", items: ["Ethereum", "Solidity", "HardHat", "ethers.js", "Polygon", "Solana"] },
  { category: "DevOps & Tools", items: ["Docker", "AWS", "Serverless", "Git", "CI/CD"] },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Full Stack & Blockchain Developer",
    company: "HeimLabs",
    duration: "2023 - Present",
    description: "Building blockchain solutions and full-stack platforms at a trusted blockchain solutions provider.",
    impact: [
      "Developing and shipping decentralized applications on Ethereum and Polygon networks.",
      "Building full-stack platforms using React, TypeScript, NestJS, and GraphQL.",
      "Leading development of EVMIndex — an open-source EVM chain data indexer with real-time Webhooks."
    ]
  },
  {
    id: 2,
    role: "Technical Program Manager & Blockchain Consultant",
    company: "NonceBlox",
    duration: "2022 - 2023",
    description: "Managed blockchain programs and provided technical consulting for Web3 projects.",
    impact: [
      "Served as Technical Program Manager, Blockchain Consultant, and Solidity Engineer.",
      "Led hiring and technical evaluation for Solana developer positions.",
      "Consulted on smart contract architecture using Solidity, HardHat, and ethers.js."
    ]
  },
  {
    id: 3,
    role: "Co-Founder",
    company: "Duolearn",
    duration: "2021 - Present",
    description: "Co-founded a gamified learning platform to help aspiring developers succeed in tech.",
    impact: [
      "Built and launched duolearn.tech — a gamified platform with MERN stack, Redux, and GraphQL.",
      "Designed the learning experience and curriculum for web development and blockchain tracks.",
    ]
  }
];
