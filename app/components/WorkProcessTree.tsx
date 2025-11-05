"use client";

import React, { memo, useMemo, useCallback } from "react";

const WorkProcessTree = memo(() => {
  const scrollToContact = useCallback(() => {
    const el = document.querySelector("section#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const processSteps = useMemo(
    () => [
      {
        id: 1,
        title: "Book Consultation",
        description:
          "Schedule a free consultation to share your project idea and receive an initial price range.",
        icon: "📅",
        color: "from-blue-600 via-purple-600 to-pink-600",
        bgColor: "bg-blue-100",
        borderColor: "border-blue-600",
        iconBgColor: "bg-blue-600",
      },
      {
        id: 2,
        title: "Clarification Meeting",
        description:
          "We discuss all details, features, and design preferences. Once everything is clear, we prepare a final project proposal.",
        icon: "💬",
        color: "from-blue-600 via-purple-600 to-pink-600",
        bgColor: "bg-indigo-100",
        borderColor: "border-indigo-600",
        iconBgColor: "bg-indigo-600",
      },
      {
        id: 3,
        title: "Deposit & Project Start",
        description:
          "After approval of the proposal, a 40% deposit is made to secure the project. We then begin development.",
        icon: "📝",
        color: "from-blue-600 via-purple-600 to-pink-600",
        bgColor: "bg-purple-100",
        borderColor: "border-purple-600",
        iconBgColor: "bg-purple-600",
      },
      {
        id: 4,
        title: "Development & Demo",
        description:
          "We build your website using modern technologies. You receive a demo version and can request revisions and adjustments.",
        icon: "💻",
        color: "from-blue-600 via-purple-600 to-pink-600",
        bgColor: "bg-fuchsia-100",
        borderColor: "border-fuchsia-600",
        iconBgColor: "bg-fuchsia-600",
      },
      {
        id: 5,
        title: "Final Payment & Launch",
        description:
          "Once the final version is approved, the remaining 60% is paid. We launch your website and provide hosting & support options.",
        icon: "🚀",
        color: "from-blue-600 via-purple-600 to-pink-600",
        bgColor: "bg-pink-100",
        borderColor: "border-pink-600",
        iconBgColor: "bg-pink-600",
      },
    ],
    []
  );

  return (
    <div className="py-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Mobile vertical */}
        <div className="block lg:hidden">
          <div className="space-y-8 pt-4">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="relative group transition-transform duration-200 hover:scale-[1.02]"
              >
                {index < processSteps.length - 1 && (
                  <div
                    className={`absolute left-[1.75rem] -translate-x-1/2 w-1.5 z-0 rounded-full ${
                      processSteps[index + 1].iconBgColor
                    }`}
                    style={{
                      top: "3.5rem",
                      bottom: "-2rem",
                    }}
                  ></div>
                )}
                <div className="flex items-start gap-4">
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`w-14 h-14 ${step.iconBgColor} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl relative z-10 flex-shrink-0 group-hover:scale-110 transition-all duration-300`}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                      <span className="relative z-10">{step.id}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div
                      className={`${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-5 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="flex items-start gap-4 relative z-10">
                        <div
                          className={`w-12 h-12 ${step.iconBgColor} rounded-xl flex items-center justify-center text-xl shadow-lg flex-shrink-0`}
                        >
                          <div className="absolute inset-0 bg-white/30 rounded-xl animate-pulse"></div>
                          <span className="relative z-10">{step.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-bold text-gray-800 mb-2">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop tree */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-2 h-full rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"
              style={{ animation: "shimmer 3s ease-in-out infinite" }}
            ></div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 h-full rounded-full"></div>
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="relative group transition-transform duration-300 hover:scale-[1.02]"
              >
                {index < processSteps.length - 1 && (
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-2 h-12 top-20 z-0 rounded-full ${
                      index === 0
                        ? "bg-gradient-to-b from-blue-600 to-indigo-600"
                        : index === 1
                        ? "bg-gradient-to-b from-indigo-600 to-purple-600"
                        : index === 2
                        ? "bg-gradient-to-b from-purple-600 to-fuchsia-600"
                        : "bg-gradient-to-b from-fuchsia-600 to-pink-600"
                    }`}
                  ></div>
                )}
                <div
                  className={`relative z-10 flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                  >
                    <div
                      className={`${step.bgColor} ${step.borderColor} border-2 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
                      <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                      <div className="flex items-start gap-6 relative z-10">
                        <div
                          className={`w-20 h-20 ${step.iconBgColor} rounded-2xl flex items-center justify-center text-3xl shadow-2xl relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-2xl"></div>
                          <span className="relative z-10">{step.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-3">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-16 h-16 ${step.iconBgColor} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
                    <span className="relative z-10">{step.id}</span>
                  </div>
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

WorkProcessTree.displayName = "WorkProcessTree";

export default WorkProcessTree;


