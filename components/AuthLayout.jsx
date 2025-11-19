import React from "react";

export default function AuthLayout({
  children,
  title,
  subtitle,
  imageSide = "left",
}) {
  return (
    <div className="min-h-screen flex">
      <div
        className={`hidden lg:flex lg:w-1/2 relative overflow-hidden ${
          imageSide === "left" ? "order-1" : "order-2"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center p-6 lg:p-8">
          <div className="max-w-md w-full">
            <h1 className="text-3xl lg:text-4xl font-bold text-accent mb-3 text-center">
              AgentDial
            </h1>

            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 text-center">
              {title}
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-center mb-4">
              {subtitle}
            </p>

            <div className="mb-4 flex items-center justify-center">
              <div className="relative w-full max-w-xs">
                <img
                  src="/auth.png"
                  alt="AI Bot"
                  className="w-full h-auto object-contain animate-float rounded-2xl"
                  style={{
                    filter: "drop-shadow(0 10px 30px rgba(22, 163, 74, 0.3))",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    const fallback = e.target.nextElementSibling;
                    if (fallback) {
                      fallback.style.display = "block";
                    }
                  }}
                />
                <svg
                  className="hidden w-full h-auto object-contain animate-float"
                  viewBox="0 0 400 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
                  <path
                    d="M 140 50 Q 200 20, 260 50 L 250 170 Q 200 190, 150 170 Z"
                    className="fill-gray-400 dark:fill-gray-500"
                  />
                  <rect
                    x="180"
                    y="170"
                    width="40"
                    height="80"
                    className="fill-gray-800 dark:fill-gray-900"
                  />
                  <circle cx="200" cy="200" r="3" fill="#16a34a" />
                  <circle cx="200" cy="220" r="3" fill="#16a34a" />
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-accent"
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
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div
        className={`w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-12 ${
          imageSide === "left" ? "order-2" : "order-1"
        }`}
      >
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
