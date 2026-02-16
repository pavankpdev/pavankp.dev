import { useCallback, useEffect, useId, useRef, useState } from "react";
import { cn } from "./utils";

interface AnimatedGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: number;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  className?: string;
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  maxOpacity = 0.5,
  duration = 4,
  className,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<Array<{ id: number; pos: [number, number] }>>(() =>
    generateSquares(numSquares)
  );

  function getPos(): [number, number] {
    return [
      Math.floor((Math.random() * (dimensions.width || 800)) / width),
      Math.floor((Math.random() * (dimensions.height || 600)) / height),
    ];
  }

  function generateSquares(count: number) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: [
        Math.floor(Math.random() * 20),
        Math.floor(Math.random() * 15),
      ] as [number, number],
    }));
  }

  const updateSquarePosition = useCallback(
    (id: number) => {
      setSquares((prev) =>
        prev.map((sq) =>
          sq.id === id ? { ...sq, pos: getPos() } : sq
        )
      );
    },
    [dimensions.width, dimensions.height, width, height]
  );

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [sqX, sqY], id: sqId }, index) => (
          <rect
            key={`${sqId}-${index}`}
            width={width - 1}
            height={height - 1}
            x={sqX * width + 1}
            y={sqY * height + 1}
            fill="currentColor"
            strokeWidth="0"
            style={{
              opacity: 0,
              animation: `gridFadeInOut ${duration}s ease-in-out infinite`,
              animationDelay: `${index * 0.1}s`,
            }}
            onAnimationIteration={() => updateSquarePosition(sqId)}
          />
        ))}
      </svg>
      <style>{`
        @keyframes gridFadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: ${maxOpacity}; }
        }
      `}</style>
    </svg>
  );
}
