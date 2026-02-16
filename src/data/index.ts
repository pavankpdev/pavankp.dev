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

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Ultimate Deep Dive into React Server Components",
    excerpt: "Unleashing the power of RSCs — exploring how they reshape frontend architecture and unlock new performance paradigms.",
    content: `
      <h2>Introduction</h2>
      <p>React Server Components (RSC) represent a paradigm shift in how we build React applications. By moving the component rendering logic to the server, we can significantly reduce the amount of JavaScript sent to the client.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Zero bundle size for server components</li>
        <li>Direct access to backend resources</li>
        <li>Automatic code splitting</li>
      </ul>

      <pre><code>// Example Server Component
async function Note({ id }) {
  const note = await db.notes.get(id);
  return (
    &lt;div&gt;
      &lt;h1&gt;{note.title}&lt;/h1&gt;
      &lt;section&gt;{note.body}&lt;/section&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <p>This allows us to write components that fetch data directly without needing useEffect or external data fetching libraries on the client.</p>
    `,
    date: "2023-10-15",
    readTime: "5 min read",
    tags: ["React", "Performance", "Web"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2670"
  },
  {
    id: 2,
    title: "Web Developer to Blockchain Developer",
    excerpt: "A roadmap for web developers looking to transition into blockchain development and build decentralized applications.",
    content: `
      <h2>The Transition</h2>
      <p>Moving from traditional web development to blockchain doesn't require starting from scratch. Your existing JavaScript and TypeScript skills form a strong foundation for building dApps.</p>

      <h3>Key Concepts to Learn</h3>
      <ul>
        <li>Smart Contracts and Solidity</li>
        <li>Web3.js and Ethers.js libraries</li>
        <li>Decentralized storage (IPFS)</li>
        <li>Token standards (ERC-20, ERC-721)</li>
      </ul>

      <p>The blockchain ecosystem is rapidly evolving, and developers who bridge the gap between traditional web and Web3 are in high demand.</p>
    `,
    date: "2023-09-22",
    readTime: "8 min read",
    tags: ["Blockchain", "Web3", "Career"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832"
  },
  {
    id: 3,
    title: "Understand Docker — The Simple Way",
    excerpt: "Breaking down Docker concepts into digestible pieces for developers who want to containerize their applications.",
    content: `
      <h2>What is Docker?</h2>
      <p>Docker is a platform for developing, shipping, and running applications inside containers. Think of containers as lightweight, standalone packages that include everything needed to run your code.</p>

      <h3>Core Concepts</h3>
      <ul>
        <li>Images vs Containers</li>
        <li>Dockerfiles and build stages</li>
        <li>Docker Compose for multi-container apps</li>
        <li>Volume mounting and networking</li>
      </ul>

      <p>Understanding Docker fundamentals transforms how you think about deployment and development environments.</p>
    `,
    date: "2023-11-05",
    readTime: "6 min read",
    tags: ["Docker", "DevOps", "Containers"],
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80&w=2670"
  },
  {
    id: 4,
    title: "Understand useEffect() — React Hooks Series",
    excerpt: "A deep dive into React's useEffect hook, understanding its lifecycle, cleanup functions, and common pitfalls.",
    content: `
      <h2>The useEffect Hook</h2>
      <p>useEffect is one of the most powerful and commonly misused hooks in React. Understanding when and how effects run is crucial for building performant applications.</p>

      <h3>Key Patterns</h3>
      <ul>
        <li>Dependency arrays and re-runs</li>
        <li>Cleanup functions for subscriptions</li>
        <li>Avoiding infinite loops</li>
        <li>Data fetching patterns</li>
      </ul>

      <p>Mastering useEffect means understanding the React component lifecycle and how side effects interact with the rendering process.</p>
    `,
    date: "2023-08-10",
    readTime: "10 min read",
    tags: ["React", "Hooks", "JavaScript"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2670"
  },
];
