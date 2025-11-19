import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Agent",
      description:
        "Build your AI voice agent in minutes. Customize personality, voice, and conversation flows with our intuitive interface.",
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Connect & Integrate",
      description:
        "Seamlessly connect with your existing tools. Integrate with CRM, databases, and APIs to access real-time information.",
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
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Deploy & Scale",
      description:
        "Go live instantly. Handle unlimited calls simultaneously, scale automatically, and monitor performance in real-time.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            How <span className="text-accent">Agent Dial</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps. No coding required, no
            complexity—just powerful AI voice agents ready to transform your
            business.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent/30 to-transparent z-0"
                  style={{ width: "calc(100% - 4rem)" }}
                ></div>
              )}

              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 group-hover:scale-105">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-accent-foreground shadow-lg shadow-accent/30">
                  {step.number}
                </div>

                <div className="mb-6 text-accent">{step.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20 text-lg">
            Start Building Now
          </button>
        </div>
      </div>
    </section>
  );
}
