import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const sections = [
    { name: "Home", id: "hero" },
    { name: "Features", id: "features" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Use Cases", id: "use-cases" },
    { name: "Stats", id: "stats" },
  ];

  const scrollToSection = (id) => {
    // Add blur animation to menu
    const menu = document.querySelector("[data-menu]");
    if (menu) {
      menu.style.filter = "blur(10px)";
      menu.style.opacity = "0.5";
    }

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const startPosition = window.pageYOffset;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + startPosition - 100;
        const distance = offsetPosition - startPosition;
        const duration = 1500;
        let start = null;

        const easeInOutCubic = (t) => {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const animateScroll = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const progressRatio = Math.min(progress / duration, 1);
          const ease = easeInOutCubic(progressRatio);

          window.scrollTo({
            top: startPosition + distance * ease,
            behavior: "auto",
          });

          if (progress < duration) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      }
      setIsMenuOpen(false);

      setTimeout(() => {
        if (menu) {
          menu.style.filter = "none";
          menu.style.opacity = "1";
        }
      }, 300);
    }, 200);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-sm mt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4 relative">
              <button
                ref={buttonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 text-foreground hover:text-accent transition-colors relative z-50"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span className="text-sm font-medium">Menu</span>
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <>
                  <div
                    className="fixed inset-0  transition-opacity duration-300 z-[90]"
                    style={{ backdropFilter: "none" }}
                    onClick={() => setIsMenuOpen(false)}
                  ></div>

                  {/* Dropdown Menu */}
                  <div
                    ref={menuRef}
                    data-menu
                    className="absolute top-full left-0 mt-2 w-64 bg-card/95  border border-border rounded-2xl shadow-2xl shadow-black/20 z-[95] overflow-hidden transform transition-all duration-500 ease-out"
                    style={{
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen
                        ? "translateY(0) scale(1)"
                        : "translateY(-10px) scale(0.95)",
                    }}
                  >
                    {/* Menu Items */}
                    <nav className="p-3">
                      <div className="space-y-1">
                        {sections.map((section, index) => (
                          <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className="w-full group relative overflow-hidden"
                            style={{
                              animationDelay: `${index * 50}ms`,
                            }}
                          >
                            {/* Menu Item */}
                            <div className="relative p-4 rounded-xl bg-gradient-to-r from-transparent via-accent/5 to-transparent border border-transparent hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10 hover:scale-[1.02]">
                              {/* Animated background gradient */}
                              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-0"></div>

                              <div className="relative flex items-center justify-between">
                                <span className="text-base font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                                  {section.name}
                                </span>
                                <svg
                                  className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all duration-300 opacity-0 group-hover:opacity-100"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                  />
                                </svg>
                              </div>

                              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </nav>
                  </div>
                </>
              )}
              <div className="flex items-center gap-2">
                <button className="p-2 text-foreground hover:text-accent transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                <button className="p-2 text-foreground hover:text-accent transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <span className="text-sm font-medium text-foreground ml-1">
                  Tools
                </span>
              </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-xl font-bold  text-accent">AgentDial</h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 text-foreground hover:text-accent transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
              <Link
                href="/signup"
                className="px-4 py-2 text-sm font-medium text-accent-foreground bg-accent rounded-md hover:opacity-90 transition-opacity"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
