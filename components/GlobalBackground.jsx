import React, { useMemo } from "react";

export default function GlobalBackground() {
  // Generate stable star positions
  const stars = useMemo(() => {
    const starArray = [];
    for (let i = 0; i < 50; i++) {
      // Use a seeded random-like function for consistent positions
      const seed = i * 137.508; // Golden angle approximation
      starArray.push({
        left: ((seed * 7.3) % 100).toFixed(2),
        top: ((seed * 11.7) % 100).toFixed(2),
        size: (((seed * 2) % 3) + 1).toFixed(1),
        delay: ((seed * 3) % 3).toFixed(1),
        duration: (((seed * 3) % 3) + 2).toFixed(1),
      });
    }
    return starArray;
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blurry nebula/galaxy clouds - reduced blur, visible in light mode */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 dark:bg-accent/15 rounded-full blur-xl dark:blur-2xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/18 dark:bg-accent/12 rounded-full blur-xl dark:blur-2xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/3 w-80 h-80 bg-accent/15 dark:bg-accent/10 rounded-full blur-xl dark:blur-2xl animate-pulse-slow"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Animated Stars - more visible in light mode */}
      {stars.map((star, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-accent/60 dark:bg-accent/40 animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Moving Satellites - reduced blur, more visible */}
      <div className="absolute top-1/4 left-0 w-2 h-2 bg-accent/80 dark:bg-accent/70 rounded-full blur-[1px] dark:blur-sm animate-satellite-1"></div>
      <div
        className="absolute top-1/4 left-0 w-1 h-1 bg-accent/60 dark:bg-accent/50 rounded-full blur-[1px] dark:blur-sm animate-satellite-1"
        style={{ animationDelay: "0.5s" }}
      ></div>

      <div className="absolute bottom-1/3 right-0 w-2 h-2 bg-accent/80 dark:bg-accent/70 rounded-full blur-[1px] dark:blur-sm animate-satellite-2"></div>
      <div
        className="absolute bottom-1/3 right-0 w-1 h-1 bg-accent/60 dark:bg-accent/50 rounded-full blur-[1px] dark:blur-sm animate-satellite-2"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-accent/70 dark:bg-accent/60 rounded-full blur-[1px] dark:blur-sm animate-satellite-3"></div>
      <div
        className="absolute top-1/2 left-1/4 w-1 h-1 bg-accent/50 dark:bg-accent/40 rounded-full blur-[1px] dark:blur-sm animate-satellite-3"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Orbital rings/particles - more visible */}
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent/60 dark:bg-accent/40 rounded-full blur-[1px] dark:blur-sm animate-orbit-1"></div>
      <div
        className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-accent/50 dark:bg-accent/30 rounded-full blur-[1px] dark:blur-sm animate-orbit-1"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Planets with orbital paths */}
      {/* Planet 1 - Large planet with orbit */}
      <div className="absolute top-1/5 right-1/5">
        <div className="relative w-32 h-32">
          {/* Orbital ring */}
          <div className="absolute inset-0 border border-accent/30 dark:border-accent/20 rounded-full"></div>
          {/* Decorative rounded lines around planet */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
            <path
              d="M 64 0 Q 96 32, 128 64 Q 96 96, 64 128 Q 32 96, 0 64 Q 32 32, 64 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-accent/20 dark:text-accent/15"
              strokeLinecap="round"
            />
            <path
              d="M 64 16 Q 88 40, 112 64 Q 88 88, 64 112 Q 40 88, 16 64 Q 40 40, 64 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-accent/15 dark:text-accent/10"
              strokeLinecap="round"
            />
          </svg>
          {/* Planet */}
          <div className="absolute top-1/2 left-0 w-8 h-8 -translate-y-1/2 -translate-x-1/2 bg-gradient-to-br from-accent/60 to-accent/35 dark:from-accent/50 dark:to-accent/25 rounded-full blur-[2px] dark:blur-sm shadow-lg shadow-accent/40 dark:shadow-accent/30 animate-orbit-planet-1">
            <div className="absolute inset-0 bg-accent/40 dark:bg-accent/30 rounded-full blur-[1px] dark:blur-xs"></div>
          </div>
          {/* Moon/Orbiting element */}
          <div className="absolute top-1/2 left-0 w-2 h-2 -translate-y-1/2 -translate-x-1/2 bg-accent/70 dark:bg-accent/60 rounded-full blur-[1px] dark:blur-xs animate-orbit-moon-1"></div>
        </div>
      </div>

      {/* Planet 2 - Medium planet with orbit */}
      <div className="absolute bottom-1/4 left-1/6">
        <div className="relative w-24 h-24">
          {/* Orbital ring */}
          <div className="absolute inset-0 border border-accent/25 dark:border-accent/15 rounded-full"></div>
          {/* Decorative rounded lines around planet */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 96 96">
            <path
              d="M 48 0 Q 72 24, 96 48 Q 72 72, 48 96 Q 24 72, 0 48 Q 24 24, 48 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-accent/20 dark:text-accent/12"
              strokeLinecap="round"
            />
            <path
              d="M 48 12 Q 66 30, 84 48 Q 66 66, 48 84 Q 30 66, 12 48 Q 30 30, 48 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-accent/15 dark:text-accent/8"
              strokeLinecap="round"
            />
          </svg>
          {/* Planet */}
          <div className="absolute top-0 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-accent/55 to-accent/35 dark:from-accent/45 dark:to-accent/25 rounded-full blur-[2px] dark:blur-sm shadow-lg shadow-accent/35 dark:shadow-accent/25 animate-orbit-planet-2">
            <div className="absolute inset-0 bg-accent/30 dark:bg-accent/20 rounded-full blur-[1px] dark:blur-xs"></div>
          </div>
          {/* Moon/Orbiting element */}
          <div className="absolute top-0 left-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 bg-accent/60 dark:bg-accent/50 rounded-full blur-[1px] dark:blur-xs animate-orbit-moon-2"></div>
        </div>
      </div>

      {/* Planet 3 - Small planet with orbit */}
      <div className="absolute top-2/3 right-1/3">
        <div className="relative w-20 h-20">
          {/* Orbital ring */}
          <div className="absolute inset-0 border border-accent/20 dark:border-accent/10 rounded-full"></div>
          {/* Decorative rounded lines around planet */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
            <path
              d="M 40 0 Q 60 20, 80 40 Q 60 60, 40 80 Q 20 60, 0 40 Q 20 20, 40 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-accent/18 dark:text-accent/10"
              strokeLinecap="round"
            />
          </svg>
          {/* Planet */}
          <div className="absolute bottom-0 left-1/2 w-5 h-5 -translate-x-1/2 translate-y-1/2 bg-gradient-to-br from-accent/50 to-accent/30 dark:from-accent/40 dark:to-accent/25 rounded-full blur-[2px] dark:blur-sm shadow-md shadow-accent/30 dark:shadow-accent/20 animate-orbit-planet-3">
            <div className="absolute inset-0 bg-accent/35 dark:bg-accent/25 rounded-full blur-[1px] dark:blur-xs"></div>
          </div>
          {/* Moon/Orbiting element */}
          <div className="absolute bottom-0 left-1/2 w-1 h-1 -translate-x-1/2 translate-y-1/2 bg-accent/50 dark:bg-accent/40 rounded-full blur-[1px] dark:blur-xs animate-orbit-moon-3"></div>
        </div>
      </div>

      {/* Floating planet-like elements - reduced blur, more visible */}
      <div className="absolute top-1/3 left-2/3 w-12 h-12 bg-gradient-to-br from-accent/30 to-accent/15 dark:from-accent/25 dark:to-accent/12 rounded-full blur-md dark:blur-lg animate-float-planet"></div>
      <div
        className="absolute bottom-1/3 right-1/6 w-10 h-10 bg-gradient-to-br from-accent/25 to-accent/12 dark:from-accent/20 dark:to-accent/10 rounded-full blur-md dark:blur-xl animate-float-planet"
        style={{ animationDelay: "3s" }}
      ></div>
    </div>
  );
}
