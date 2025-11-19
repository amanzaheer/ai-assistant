import React from "react";

export default function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Remove background to show global animation clearly */}
      {/* Background decorative elements - removed to not interfere with global animation */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* First Feature: Smarter Conversations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40">
          {/* Left side - Visual element */}
          <div className="order-2 lg:order-1 flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-lg group">
              {/* Glow effect wrapper */}
              {/* <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

              {/* External image for conversation visual */}
              <img
                src="/feauture1.png"
                alt="AI Conversations Interface"
                className="relative w-full h-auto rounded-xl animate-float transition-all duration-300"
                onMouseEnter={(e) => {
                  e.target.style.animation =
                    "float-hover 4s ease-in-out infinite";
                }}
                onMouseLeave={(e) => {
                  e.target.style.animation = "float 6s ease-in-out infinite";
                }}
                onError={(e) => {
                  // Fallback visual if image doesn't exist
                  e.target.style.display = "none";
                  const fallback = e.target.nextElementSibling;
                  if (fallback) {
                    fallback.style.display = "block";
                    fallback.classList.remove("hidden");
                  }
                }}
              />
              {/* Fallback SVG visual */}
              <div
                className="hidden w-full bg-card/80 backdrop-blur-sm border border-accent/30 rounded-xl p-8 shadow-2xl"
                style={{ boxShadow: "0 0 40px rgba(22, 163, 74, 0.3)" }}
              >
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-accent/20"></div>
                      </div>
                      <div className="flex-1 bg-muted rounded-lg p-3">
                        <div className="h-4 bg-foreground/20 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-foreground/10 rounded w-1/2"></div>
                      </div>
                      <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                        <div className="w-4 h-4 rounded bg-accent/30"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="order-1 lg:order-2 flex flex-col space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
                AI Powered
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Smarter Conversations with{" "}
              <span className="text-accent">AI Assistance</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Discover how intelligent chatbots transform customer experiences
              across industries, business functions.
            </p>
            <button className="self-center lg:self-start px-8 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20">
              Sign up free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
