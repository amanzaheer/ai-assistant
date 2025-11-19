import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main content - Left text, Right robot image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Text content */}
          <div className="flex flex-col space-y-6 text-center lg:text-left">
            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Unlock the Future with <span className="text-accent">AI</span>
            </h1>

            {/* Subheadline */}
            <p className="text-2xl sm:text-3xl text-foreground font-medium">
              Transforming Possibilities into Reality!
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl">
              Transform your digital reality with cutting-edge artificial
              intelligence. Build powerful voice agents that handle calls,
              automate conversations, and scale your business effortlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-accent text-accent-foreground font-medium rounded-md hover:opacity-90 transition-opacity">
                Get Started
              </button>
              <button className="px-8 py-3 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-colors">
                Learn more
              </button>
            </div>
          </div>

          {/* Right side - Robot image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-[500px] lg:h-[600px] group">
              {/* Placeholder for robot image - Replace with your actual robot image */}
              <img
                src="/ai-hero.png"
                alt="Futuristic AI Robot"
                className="w-full h-full object-contain brightness-90 dark:brightness-100 contrast-110 dark:contrast-100 animate-float transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 dark:group-hover:brightness-110"
                onMouseEnter={(e) => {
                  e.target.style.animation =
                    "float-hover 4s ease-in-out infinite";
                }}
                onMouseLeave={(e) => {
                  e.target.style.animation = "float 6s ease-in-out infinite";
                }}
                onError={(e) => {
                  // Fallback to SVG if image fails to load
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "block";
                }}
              />
              {/* SVG Fallback Robot - Theme aware */}
              <svg
                className="w-full h-full object-contain hidden animate-float transition-all duration-300 group-hover:scale-105"
                onMouseEnter={(e) => {
                  e.target.style.animation =
                    "float-hover 4s ease-in-out infinite";
                }}
                onMouseLeave={(e) => {
                  e.target.style.animation = "float 6s ease-in-out infinite";
                }}
                viewBox="0 0 400 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Robot head - theme aware colors */}
                <rect
                  x="150"
                  y="50"
                  width="100"
                  height="120"
                  rx="10"
                  className="fill-gray-200 dark:fill-gray-300"
                />
                <rect
                  x="170"
                  y="70"
                  width="20"
                  height="20"
                  rx="5"
                  className="fill-gray-800 dark:fill-gray-900"
                />
                <rect
                  x="210"
                  y="70"
                  width="20"
                  height="20"
                  rx="5"
                  className="fill-gray-800 dark:fill-gray-900"
                />
                <rect
                  x="180"
                  y="110"
                  width="40"
                  height="10"
                  rx="5"
                  className="fill-gray-800 dark:fill-gray-900"
                />

                {/* Hood */}
                <path
                  d="M 140 50 Q 200 20, 260 50 L 250 170 Q 200 190, 150 170 Z"
                  className="fill-gray-400 dark:fill-gray-500"
                />

                {/* Neck/body */}
                <rect
                  x="180"
                  y="170"
                  width="40"
                  height="80"
                  className="fill-gray-800 dark:fill-gray-900"
                />

                {/* Details - accent green */}
                <circle cx="200" cy="200" r="3" fill="#16a34a" />
                <circle cx="200" cy="220" r="3" fill="#16a34a" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
