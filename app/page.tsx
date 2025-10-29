"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [contactForm, setContactForm] = useState({
    email: "",
    serviceType: "",
    budget: "",
    description: "",
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const servicesDetails = {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(contactForm);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Avoex
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-gray-900">
                Services
              </a>
              <a href="#process" className="text-gray-700 hover:text-gray-900">
                Process
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900">
                About Us
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
              <a href="#faq" className="text-gray-700 hover:text-gray-900">
                Q&A
              </a>
              <div className="flex space-x-3 ml-4 pl-4 border-l border-gray-300">
                <a
                  href="mailto:avoex.contact@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61579585838703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=359877836667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/avoex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.025H3.555V9h3.564v11.458zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col space-y-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="block w-6 h-0.5 bg-gray-700 transition-all"></span>
              <span className="block w-6 h-0.5 bg-gray-700 transition-all"></span>
              <span className="block w-6 h-0.5 bg-gray-700 transition-all"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6">
          <button
            className="self-end mb-6 text-2xl text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ×
          </button>
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#process"
              className="text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Q&A
            </a>
          </div>
          <div className="flex justify-center space-x-4 mt-8 pt-8 border-t border-gray-200">
            <a
              href="mailto:avoex.contact@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579585838703"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=359877836667"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/avoex/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.025H3.555V9h3.564v11.458zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section - Home */}
      <section
        id="home"
        className="py-20 px-6 animate-gradient"
        style={{
          backgroundImage: `linear-gradient(135deg, 
            rgba(59, 130, 246, 0.85) 0%, 
            rgba(139, 92, 246, 0.85) 33%, 
            rgba(236, 72, 153, 0.85) 66%, 
            rgba(59, 130, 246, 0.85) 100%)`,
        }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2
            className="text-5xl md:text-6xl font-bold text-white mb-12"
            style={{
              textShadow:
                "0 0 30px rgba(255,255,255,0.4), 0 0 50px rgba(255,255,255,0.2), 3px 3px 6px rgba(0,0,0,0.2)",
            }}
          >
            Your digital growth starts here
          </h2>
          <p
            className="text-xl text-white/90 max-w-2xl mx-auto mb-16"
            style={{
              textShadow:
                "0 0 20px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            We design and build your websites, software, automation systems, and
            digital marketing — everything your business needs to scale.
          </p>
          <div className="inline-block p-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white rounded-full font-semibold text-lg text-gray-900 hover:bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 transition-colors"
            >
              Book a Free Consultation
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-20 max-w-4xl mx-auto">
            <div className="rounded-2xl p-5 transition-all hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-2 bg-white/20 rounded-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white leading-tight px-1">
                  Reach More Customers
                </h3>
              </div>
            </div>
            <div className="rounded-2xl p-5 transition-all hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-2 bg-white/20 rounded-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white leading-tight px-1">
                  Build Trust & Credibility
                </h3>
              </div>
            </div>
            <div className="rounded-2xl p-5 transition-all hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-2 bg-white/20 rounded-lg">
                  <svg
                    className="w-7 h-7 text-white"
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
                </div>
                <h3 className="text-sm font-semibold text-white leading-tight px-1">
                  Increase Sales
                </h3>
              </div>
            </div>
            <div className="rounded-2xl p-5 transition-all hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-2 bg-white/20 rounded-lg">
                  <svg
                    className="w-7 h-7 text-white"
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
                </div>
                <h3 className="text-sm font-semibold text-white leading-tight px-1">
                  Automations Save Time
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Services
            </h2>
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
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-4 space-y-2">
                      {data.services.map((serviceName) => {
                        const service =
                          servicesDetails[
                            serviceName as keyof typeof servicesDetails
                          ];
                        return (
                          <div
                            key={serviceName}
                            onClick={() => {
                              setSelectedService(service);
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

      {/* Process */}
      <section id="process" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Process
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Initial Consultation
                </h3>
                <p className="text-gray-600">
                  Meeting or chat for an estimated price
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Requirements Meeting
                </h3>
                <p className="text-gray-600">
                  Meeting to clarify the final product
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Demo Creation
                </h3>
                <p className="text-gray-600">Building a demo</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Revisions
                </h3>
                <p className="text-gray-600">Changes</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Finalization
                </h3>
                <p className="text-gray-600">Finalization</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                6
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Maintenance
                </h3>
                <p className="text-gray-600">Maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            About Us
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              We are Avoex, a company dedicated to helping businesses achieve
              their goals through technology and digital solutions. Our team
              combines expertise in web development, design, and digital
              marketing to deliver results that drive growth.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Our Strengths
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Experienced team with proven track record</li>
                  <li>✓ Custom solutions tailored to your needs</li>
                  <li>✓ Modern technology stack</li>
                  <li>✓ Ongoing support and maintenance</li>
                </ul>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Why Choose Us
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Transparent communication throughout</li>
                  <li>✓ Competitive pricing</li>
                  <li>✓ Fast turnaround times</li>
                  <li>✓ Results-focused approach</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Avoex
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <a
                  href="mailto:avoex.contact@gmail.com"
                  className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="text-blue-600 mb-3">
                    <svg
                      className="w-12 h-12"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">
                    avoex.contact@gmail.com
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61579585838703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="text-blue-600 mb-3">
                    <svg
                      className="w-12 h-12"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Facebook</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=359877836667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="text-green-600 mb-3">
                    <svg
                      className="w-12 h-12"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">WhatsApp</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/avoex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="text-blue-700 mb-3">
                    <svg
                      className="w-12 h-12"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.025H3.555V9h3.564v11.458zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Questions & Answers
          </h2>
          <div className="space-y-6">
            <FAQItem
              question="Is there a monthly fee?"
              answer="It depends on the service. Static websites usually don't have a monthly fee after development. Management software and maintenance may have a monthly fee for hosting and updates. Everything is discussed in advance."
            />
            <FAQItem
              question="How long does project development take?"
              answer="Time varies depending on the project's complexity. A static website can be ready in 2-4 weeks, while e-commerce or custom software can take 6-12 weeks. We always provide realistic timelines after analyzing the requirements."
            />
            <FAQItem
              question="Can I make changes after the project is complete?"
              answer="Yes, we include a certain number of free changes after the project completion. After that, an additional fee may be required depending on the volume of changes."
            />
            <FAQItem
              question="Do you work with international clients?"
              answer="Yes, we work with clients from different countries. We work online and are available for consultations and communication at your convenience."
            />
            <FAQItem
              question="What are the payment options?"
              answer="We typically work with 50% advance before starting and 50% after completion, but we always discuss the terms for appropriate distribution based on your project."
            />
            <FAQItem
              question="Do you provide training for using the product?"
              answer="Yes, we provide documentation and video instructions. Upon request, we can also conduct personalized training for your team."
            />
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Contact Us
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 rounded-lg shadow-lg"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({ ...contactForm, email: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="serviceType"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Service Type
              </label>
              <select
                id="serviceType"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={contactForm.serviceType}
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    serviceType: e.target.value,
                  })
                }
              >
                <option value="">Select a service</option>
                <option value="static">Static Website</option>
                <option value="booking">Booking Site</option>
                <option value="ecommerce">E-commerce</option>
                <option value="management">Management Software</option>
                <option value="automations">Automations</option>
                <option value="ads">Social Media Ads</option>
                <option value="design">Custom Banners & Posts</option>
                <option value="seo">SEO</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Budget
              </label>
              <input
                type="text"
                id="budget"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={contactForm.budget}
                onChange={(e) =>
                  setContactForm({ ...contactForm, budget: e.target.value })
                }
                placeholder="Example: $500-1000"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Describe the end result you envision
              </label>
              <textarea
                id="description"
                required
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={contactForm.description}
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    description: e.target.value,
                  })
                }
                placeholder="Describe your project and what you expect us to achieve together..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Send Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="mailto:avoex.contact@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579585838703"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=359877836667"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/avoex/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.025H3.555V9h3.564v11.458zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <p>&copy; 2024 Avoex. All rights reserved.</p>
        </div>
      </footer>

      {/* Service Details Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-900 text-2xl transition-colors"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {selectedService.title}
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              {selectedService.description}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What's included:
              </h3>
              <ul className="space-y-2">
                {selectedService.details.map(
                  (detail: string, index: number) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>{detail}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ideal for:
              </h3>
              <p className="text-gray-600">{selectedService.ideal}</p>
            </div>

            <div className="border-t pt-6">
              <p className="text-2xl font-bold text-blue-600">
                {selectedService.price}
              </p>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full hover:scale-105 transition-transform"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/50 transition-colors"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <span className="text-2xl text-gray-500">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="px-6 pb-4 text-gray-700">{answer}</div>}
    </div>
  );
}
