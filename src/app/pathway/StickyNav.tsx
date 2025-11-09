"use client";

import { useEffect, useState } from "react";

export default function StickyNav() {
  const [activeId, setActiveId] = useState<string>("overview");

  useEffect(() => {
    const sectionIds = [
      "overview",
      "how-it-works",
      "levels",
      "session",
      "introverts",
      "join",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-16 z-30 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex gap-3 sm:gap-6 text-sm overflow-x-auto py-3 -mx-4 px-4">
          {[
            { id: "how-it-works", label: "How it works" },
            { id: "levels", label: "Levels" },
            { id: "session", label: "Weekly session" },
            { id: "introverts", label: "For introverts" },
            { id: "join", label: "Join" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "page" : undefined}
                className={`px-2 py-1 border-b-2 transition-colors ${
                  activeId === item.id
                    ? "text-gray-900 border-blue-600 font-semibold"
                    : "text-gray-600 border-transparent hover:text-gray-900"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

