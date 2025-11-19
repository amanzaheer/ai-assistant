import React from "react";

export default function UseCases() {
  const useCases = [
    {
      title: "Customer Support",
      description:
        "Handle customer inquiries 24/7 with intelligent voice agents that understand context and provide instant solutions.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      ),
      features: ["24/7 Availability", "Multi-language", "Instant Response"],
    },
    {
      title: "Sales & Lead Generation",
      description:
        "Qualify leads, schedule appointments, and close deals with AI agents that never miss an opportunity.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      features: ["Lead Qualification", "Appointment Booking", "Follow-ups"],
    },
    {
      title: "Appointment Reminders",
      description:
        "Reduce no-shows with automated reminder calls that confirm appointments and send updates to your calendar.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      features: ["Auto Reminders", "Calendar Sync", "Rescheduling"],
    },
    {
      title: "Order Processing",
      description:
        "Streamline order confirmations, track shipments, and handle returns with conversational AI agents.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      features: ["Order Tracking", "Payment Processing", "Returns"],
    },
  ];

  return (
    <section id="use-cases" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full">
              Use Cases
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Transform Your Business with{" "}
            <span className="text-accent">Voice AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how businesses across industries leverage Agent Dial to
            automate conversations and scale operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {useCase.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {useCase.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
