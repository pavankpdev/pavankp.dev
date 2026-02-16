import { useMotionValue, motion, useMotionTemplate, useSpring } from "motion/react";
import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import { cn } from "./utils";

interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  radius?: number;
  color?: string;
  className?: string;
}

export function CardSpotlight({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: CardSpotlightProps) {
  const mouseX = useMotionValue(-radius);
  const mouseY = useMotionValue(-radius);
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 200 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mousePos = useRef({ x: -radius, y: -radius });
  const filterId = useId();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const { left, top } = cardRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      mouseX.set(x);
      mouseY.set(y);
      mousePos.current = { x, y };
    },
    [mouseX, mouseY]
  );

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    mouseX.set(-radius);
    mouseY.set(-radius);
    mousePos.current = { x: -radius, y: -radius };
  }, [mouseX, mouseY, radius]);

  // Particle system on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();

    const observer = new ResizeObserver(resizeCanvas);
    if (cardRef.current) observer.observe(cardRef.current);

    // Initialize particles
    const PARTICLE_COUNT = 60;
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(canvas.width, canvas.height)
    );

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mousePos.current.x;
      const my = mousePos.current.y;
      const isActive = mx > 0 && my > 0;

      for (const p of particlesRef.current) {
        // Distance from cursor
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = radius * 0.8;

        // Particles glow & drift toward cursor when nearby
        if (isActive && dist < maxDist) {
          const force = 1 - dist / maxDist;
          const angle = Math.atan2(dy, dx);
          // Gentle repulsion so they orbit, not collapse
          p.vx += Math.cos(angle + Math.PI / 2) * force * 0.3;
          p.vy += Math.sin(angle + Math.PI / 2) * force * 0.3;
          p.targetAlpha = 0.15 + force * 0.7;
          p.targetSize = p.baseSize * (1 + force * 2.5);
        } else {
          p.targetAlpha = 0.03;
          p.targetSize = p.baseSize;
        }

        // Ease toward target
        p.alpha += (p.targetAlpha - p.alpha) * 0.08;
        p.size += (p.targetSize - p.size) * 0.1;

        // Drift
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.driftX;
        p.y += p.driftY;

        // Wrap edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Cyan-tinted particles
        ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha})`;
        ctx.fill();
      }

      // Draw connecting lines between nearby active particles
      if (isActive) {
        for (let i = 0; i < particlesRef.current.length; i++) {
          const a = particlesRef.current[i];
          if (a.alpha < 0.08) continue;
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const b = particlesRef.current[j];
            if (b.alpha < 0.08) continue;
            const d = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
            if (d < 80) {
              const lineAlpha = Math.min(a.alpha, b.alpha) * (1 - d / 80) * 0.5;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(34, 211, 238, ${lineAlpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      observer.disconnect();
    };
  }, [radius]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group/spotlight relative rounded-xl border border-white/10 bg-neutral-900/50 overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Particle canvas layer */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-[1] rounded-xl"
      />
      {/* Distorted glow with SVG turbulence filter */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="3"
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="35"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      {/* Distorted radial glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${radius}px circle at ${smoothX}px ${smoothY}px, rgba(34, 211, 238, 0.08), transparent 70%)
          `,
          filter: `url(#${filterId})`,
        }}
      />
      {/* Sharper inner glow (no distortion) for readability */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${radius * 0.5}px circle at ${smoothX}px ${smoothY}px, rgba(34, 211, 238, 0.04), transparent 70%)
          `,
        }}
      />
      {/* Border spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${radius * 0.6}px circle at ${smoothX}px ${smoothY}px, rgba(34, 211, 238, 0.15), transparent 70%)
          `,
          maskImage: `linear-gradient(white, white) content-box, linear-gradient(white, white)`,
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
          borderRadius: "inherit",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseSize: number;
  size: number;
  targetSize: number;
  alpha: number;
  targetAlpha: number;
  driftX: number;
  driftY: number;
}

function createParticle(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: 0,
    vy: 0,
    baseSize: 0.8 + Math.random() * 1.5,
    size: 1,
    targetSize: 1,
    alpha: 0.03,
    targetAlpha: 0.03,
    driftX: (Math.random() - 0.5) * 0.15,
    driftY: (Math.random() - 0.5) * 0.15,
  };
}
