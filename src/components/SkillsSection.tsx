import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { SKILLS } from "../data";

export default function SkillsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Skills"
        subtitle="Tools and technologies I use to build robust applications."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-neutral-900/50 border border-white/5 p-6 rounded-xl hover:border-cyan-500/30 transition-colors group"
          >
            <h3 className="text-xl font-bold font-orbitron text-white mb-4 group-hover:text-cyan-400 transition-colors">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-neutral-300 border border-white/10 group-hover:border-cyan-500/20 group-hover:text-cyan-200 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
