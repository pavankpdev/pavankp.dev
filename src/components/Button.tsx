const Button = ({ children, variant = "primary", className = "", onClick, icon: Icon }: any) => {
  const baseStyle = "relative px-6 py-3 font-orbitron font-bold text-sm uppercase tracking-wider transition-all duration-300 clip-path-slant flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]";
  const variants = {
    primary: "bg-cyan-950/30 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]",
    secondary: "bg-magenta-950/30 text-magenta-400 border border-magenta-500/50 hover:bg-magenta-500/20 hover:border-magenta-400 hover:shadow-[0_0_15px_rgba(232,121,249,0.4)]",
    ghost: "bg-transparent text-neutral-400 hover:text-white hover:bg-neutral-800/50"
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}
      onClick={onClick}
    >
      {children}
      {Icon && <Icon size={16} />}
    </button>
  );
};

export default Button;
