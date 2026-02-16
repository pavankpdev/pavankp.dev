import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.15}
          duration={3}
          width={48}
          height={48}
          className="fill-cyan-500/20 stroke-cyan-500/10 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_70%,transparent_100%)]"
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-magenta-500/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold font-orbitron text-white leading-tight"
          >
            Pavan Kumar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-magenta-600 animate-gradient-x">
              Full Stack & Web3
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-neutral-400 text-lg md:text-xl max-w-lg font-mono"
          >
            MERN Stack Developer who also happens to work with Blockchain &
            Cloud. I also{" "}
            <a
              href="/blog"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-500/30 hover:decoration-cyan-400 transition-colors"
            >
              write blogs
            </a>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            {[
              {
                href: "https://github.com/pavankpdev",
                label: "GitHub",
                icon: <Github size={18} />,
              },
              {
                href: "https://linkedin.com/in/pavan-kumar-2000",
                label: "LinkedIn",
                icon: <Linkedin size={18} />,
              },
              {
                href: "https://x.com/pavank38",
                label: "@pavank38",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social relative px-5 py-2.5 font-mono text-sm tracking-wide flex items-center gap-2.5 text-neutral-400 border border-white/10 rounded-lg bg-white/[0.02] backdrop-blur-sm hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.08)] transition-all duration-300"
              >
                <span className="transition-colors duration-300">
                  {social.icon}
                </span>
                {social.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-magenta-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
              <ImageWithFallback
                src="https://avatars.githubusercontent.com/u/52795191?v=4"
                alt="Pavan Kumar"
                className="w-full h-full object-cover opacity-80 mix-blend-overlay hover:mix-blend-normal transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
