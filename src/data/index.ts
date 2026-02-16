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
    role: "Senior Full Stack Developer",
    company: "HeimLabs",
    duration: "Sep 2025 - Present",
    description: "Building AI-driven products and agentic systems for next-gen financial platforms.",
    impact: [
      "Developing agentic AI experiences that autonomously reason, plan, and execute complex workflows.",
      "Building an AI-powered wealth management solution spanning perps trading and prediction markets, leveraging the x402 payment protocol."
    ]
  },
  {
    id: 2,
    role: "Senior Software Developer",
    company: "Fidociary",
    duration: "Jan 2025 - Aug 2025",
    description: "Led end-to-end product development driving the company's core vision and technical roadmap.",
    impact: [
      "Spearheaded the BETA launch at Dubai FinTech Summit, gaining early adopters and raising awareness about trustless identity and decentralized compliance.",
      "Designed and developed a decentralized identity (DiD) platform with reusable KYC solutions, empowering users with data ownership and enabling privacy-preserving verification via ZK proofs."
    ]
  },
  {
    id: 3,
    role: "Senior Full Stack Developer",
    company: "LanceSoft India (Client: Bosch)",
    duration: "Mar 2024 - Dec 2024",
    description: "Contributing to the Decarbonisation Index (DKI) for Porsche, building a tool to visualize carbon emissions across the Volkswagen group.",
    impact: [
      "Leveraging Angular, AWS Lambdas, and Terraform CDK to build a scalable, serverless architecture.",
      "Building a system to visualize and handle a large dataset with over 300K+ rows to provide comprehensive insights into vehicle emissions.",
      "Supporting Volkswagen's sustainability initiatives by aiding strategic planning and efforts to reduce carbon footprints."
    ]
  },
  {
    id: 4,
    role: "Technical Manager",
    company: "Nonceblox",
    duration: "Jan 2023 - Jan 2024",
    description: "Led blockchain projects and managed a team of 5-6 professionals.",
    impact: [
      "Led the project to tokenize real-world assets, enhancing liquidity and fostering innovation in the blockchain space.",
      "Actively developed a metaverse aggregator with a focus on games and PFP NFTs, contributing to the growth of the virtual world ecosystem.",
      "Led a team of 5-6 professionals, ensuring effective collaboration and successful project execution."
    ]
  },
  {
    id: 5,
    role: "Full Stack Developer",
    company: "Nonceblox",
    duration: "Aug 2021 - Jan 2023",
    description: "Led high-profile Web3 projects, orchestrated a layer 1 Blockchain, and managed associated applications.",
    impact: [
      "Demonstrated proficiency with AWS services like SES, SQS, and Lambdas, optimizing cloud-based solutions.",
      "Actively involved in Solidity smart contract development, audits, and created innovative DApps using MERN and Hardhat.",
      "Architected a robust waitlisting system to efficiently handle surges in requests for a limited NFT minting DApp.",
      "Led the creation of a node provider system using Kubernetes and Docker."
    ]
  },
  {
    id: 6,
    role: "Full Stack Developer",
    company: "DevTown",
    duration: "Feb 2021 - Aug 2021",
    description: "Built and maintained the DevTown Smart Edtech platform for students and administrators.",
    impact: [
      "Utilized MERN and GraphQL to create a robust and efficient platform with progress tracking and analytics.",
      "Successfully delivered the MVP platform within an impressive 30-day timeframe."
    ]
  }
];
