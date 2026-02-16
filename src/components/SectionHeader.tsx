const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white mb-2">
      {title}
    </h2>
    {subtitle && <p className="text-neutral-400 font-mono text-sm md:text-base max-w-2xl">{subtitle}</p>}
    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mt-4 rounded-full" />
  </div>
);

export default SectionHeader;
