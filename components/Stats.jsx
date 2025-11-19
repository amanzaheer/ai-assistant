import React from "react";

export default function Stats() {
  const stats = [
    {
      number: "10M+",
      label: "Calls Handled",
      description: "Successfully processed conversations",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Reliable service availability",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: "50K+",
      label: "Active Agents",
      description: "AI agents deployed worldwide",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      number: "24/7",
      label: "Support",
      description: "Always here to help",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="stats" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Trusted by Businesses{" "}
            <span className="text-accent">Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of companies using Agent Dial to automate
            conversations and scale their operations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:scale-105"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 text-accent group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="text-5xl font-bold text-foreground mb-2 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>

              {/* Decorative glow */}
              <div className="absolute inset-0 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

