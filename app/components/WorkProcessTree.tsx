"use client";

const processSteps = [
  {
    id: 1,
    title: "Book Consultation",
    description:
      "Schedule a free consultation to share your project idea and receive an initial price range.",
    icon: "📅",
  },
  {
    id: 2,
    title: "Clarification Meeting",
    description:
      "We discuss all details, features, and design preferences. Once everything is clear, we prepare a final project proposal.",
    icon: "💬",
  },
  {
    id: 3,
    title: "Deposit & Project Start",
    description:
      "After approval of the proposal, a 40% deposit is made to secure the project. We then begin development.",
    icon: "📝",
  },
  {
    id: 4,
    title: "Development & Demo",
    description:
      "We build your website using modern technologies. You receive a demo version and can request revisions and adjustments.",
    icon: "💻",
  },
  {
    id: 5,
    title: "Final Payment & Launch",
    description:
      "Once the final version is approved, the remaining 60% is paid. We launch your website and provide hosting & support options.",
    icon: "🚀",
  },
];

export default function WorkProcessTree() {
  return (
    <div className="py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </span>
                  <h4 className="text-xl font-semibold text-black">
                    {step.title}
                  </h4>
                </div>
                <p className="text-black text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
