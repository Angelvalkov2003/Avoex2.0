"use client";

const features = [
  {
    title: "Get More Clients",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
  {
    title: "Build Trust & Credibility",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    ),
  },
  {
    title: "Increase Sales",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    ),
  },
  {
    title: "Automations Save Time",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

export default function HeroSection() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document
      .querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="py-20 px-6 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-12 drop-shadow-[0_0_30px_rgba(0,0,0,0.4),0_0_50px_rgba(0,0,0,0.2),3px_3px_6px_rgba(255,255,255,0.2)]">
          Web Design & Digital Marketing That Drives Results
        </h1>
        <p className="text-xl text-black/90 max-w-2xl mx-auto mb-16 drop-shadow-[0_0_20px_rgba(0,0,0,0.3),0_2px_4px_rgba(255,255,255,0.2)]">
          We build stunning, high-performing websites and marketing campaigns
          that help your business grow, attract more clients, and stand out
          online. From design to digital strategy — we make your brand
          unforgettable.
        </p>
        <div className="inline-block p-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-xl">
          <a
            href="#contact"
            onClick={handleSmoothScroll}
            className="inline-block px-8 py-4 bg-white rounded-full font-semibold text-lg text-gray-900 hover:bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 transition-colors"
          >
            Book a Free Consultation
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-20 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl p-5">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-2 bg-black/20 rounded-lg">
                  <svg
                    className="w-7 h-7 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-black leading-tight px-1">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
