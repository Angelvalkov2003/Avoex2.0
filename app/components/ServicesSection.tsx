"use client";

import { useState } from "react";

interface ServiceDetails {
  title: string;
  description: string;
  details: string[];
  ideal: string;
  price: string;
}

export default function ServicesSection({
  onServiceSelect,
}: {
  onServiceSelect: (service: ServiceDetails) => void;
}) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const servicesDetails: Record<string, ServiceDetails> = {
    "Static Website": {
      title: "Static Website",
      description:
        "Perfect for businesses that need a professional online presence with basic information.",
      details: [
        "Fast loading times and better SEO performance",
        "Easy to maintain and cost-effective hosting",
        "Mobile-responsive design included",
        "Basic contact forms and integration options",
      ],
      ideal: "Small businesses, professionals, local shops, consultants",
      price: "Starting from €500",
    },
    "Booking Site": {
      title: "Booking Site",
      description: "Online scheduling and appointment booking system.",
      details: [
        "Real-time calendar integration",
        "Automated confirmations and reminders",
        "Payment processing integration",
        "Admin dashboard for managing bookings",
        "Multi-service support",
      ],
      ideal:
        "Salons, clinics, consultants, service providers with appointments",
      price: "Starting from €800",
    },
    "E-commerce": {
      title: "E-commerce",
      description:
        "Complete online store with shopping cart, payments, and inventory management.",
      details: [
        "Secure payment gateway integration",
        "Product catalog and inventory management",
        "Shopping cart and checkout process",
        "Order management system",
        "Customer accounts and order history",
      ],
      ideal: "Retailers, product sellers, boutiques, online retailers",
      price: "Starting from €1,200",
    },
    "Management Software": {
      title: "Management Software",
      description:
        "Custom software solutions to streamline your business operations.",
      details: [
        "Tailored to your specific business needs",
        "Data management and reporting",
        "User access control and permissions",
        "Integration with existing tools",
        "Scalable and maintainable architecture",
      ],
      ideal: "Growing businesses, agencies, teams needing custom tools",
      price: "Custom pricing",
    },
    Automations: {
      title: "Automations",
      description:
        "Automate repetitive tasks to save time and increase efficiency.",
      details: [
        "Workflow automation",
        "Data synchronization between systems",
        "Email and notification automation",
        "Scheduled reports and backups",
        "Integration with popular tools and platforms",
      ],
      ideal:
        "Any business looking to reduce manual work and increase productivity",
      price: "Starting from €400",
    },
    "Social Media Ads": {
      title: "Social Media Ads",
      description:
        "Strategic paid advertising campaigns to reach your target audience.",
      details: [
        "Campaign strategy and planning",
        "Ad creative design and copywriting",
        "Multi-platform campaign management (Facebook, Instagram, LinkedIn)",
        "Target audience analysis and optimization",
        "Performance tracking and reporting",
      ],
      ideal: "Businesses wanting to increase brand awareness and sales",
      price: "Starting from €300/month",
    },
    "Custom Banners & Posts": {
      title: "Custom Banners & Posts",
      description:
        "Professional graphic design for your social media and marketing materials.",
      details: [
        "Custom design tailored to your brand",
        "Social media posts for all platforms",
        "Marketing banners and promotional materials",
        "Consistent visual identity",
        "Stock photo sourcing and editing",
      ],
      ideal:
        "Brands needing consistent visual identity and marketing materials",
      price: "Starting from €25/post",
    },
    SEO: {
      title: "SEO",
      description:
        "Search engine optimization to improve your website's visibility and rankings.",
      details: [
        "Keyword research and strategy",
        "On-page and off-page optimization",
        "Technical SEO audit and improvements",
        "Content optimization",
        "Monthly performance reports",
      ],
      ideal:
        "Businesses wanting organic traffic growth and better search rankings",
      price: "Starting from €400/month",
    },
  };

  const serviceCategories = {
    Websites: {
      services: ["Static Website", "Booking Site", "E-commerce"],
      description: "Professional websites tailored to your business needs",
    },
    Software: {
      services: ["Management Software", "Automations"],
      description: "Custom software solutions and automation systems",
    },
    Marketing: {
      services: ["Social Media Ads", "Custom Banners & Posts", "SEO"],
      description: "Digital marketing services to grow your business",
    },
  };

  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-3xl"></div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-gradient opacity-50"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Professional website design, marketing agency services, and
            digital solutions to help your business attract more clients and
            grow online
          </p>
        </div>
        {/* Main Categories with Dropdown */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(serviceCategories).map(([category, data]) => {
            const isOpen = openCategory === category;
            return (
              <div key={category} className="relative">
                {/* Category Card */}
                <div
                  onClick={() => setOpenCategory(isOpen ? null : category)}
                  className="p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {category}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {data.description}
                  </p>
                </div>

                {/* Dropdown Menu */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-96 opacity-100 mt-4"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <div className="p-4 space-y-2">
                    {data.services.map((serviceName) => {
                      const service =
                        servicesDetails[
                          serviceName as keyof typeof servicesDetails
                        ];
                      return (
                        <div
                          key={serviceName}
                          onClick={() => {
                            onServiceSelect(service);
                            setOpenCategory(null);
                          }}
                          className="p-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-blue-200"
                        >
                          <h4 className="text-lg font-semibold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {service.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {service.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


