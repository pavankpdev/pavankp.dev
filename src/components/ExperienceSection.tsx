import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { EXPERIENCE } from "../data";

export default function ExperienceSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Experience"
        subtitle="Professional experience and career milestones."
      />

      <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 overflow-hidden">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

            <div className="flex flex-col md:flex-row gap-4 md:items-center mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-white font-orbitron break-words">
                {exp.role}
              </h3>
              <span className="hidden md:block text-neutral-600">/</span>
              <span className="text-cyan-400 font-mono">{exp.company}</span>
            </div>

            <div className="text-sm font-mono text-magenta-400 mb-4 flex items-center gap-2">
              <Calendar size={14} />
              {exp.duration}
            </div>

            <p className="text-neutral-300 mb-4 max-w-3xl">
              {exp.description}
            </p>

            <ul className="space-y-2">
              {exp.impact.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-neutral-400 text-sm"
                >
                  <span className="mt-1.5 w-1 h-1 bg-cyan-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
