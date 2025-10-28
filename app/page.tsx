"use client";

import { useState } from "react";

export default function Home() {
  const [contactForm, setContactForm] = useState({
    email: "",
    serviceType: "",
    budget: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(contactForm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
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
              <a href="#faq" className="text-gray-700 hover:text-gray-900">
                Q&A
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Home */}
      <section id="home" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            We grow your business so you can achieve better results.
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Websites, management software, automations, social media ads, custom
            banners & posts, and SEO — all designed to help you attract more
            clients.
          </p>
          <div className="inline-block p-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white rounded-full font-semibold text-lg"
              style={{
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(135deg, #2563eb, #9333ea, #db2777)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section
        id="services"
        className="py-20 px-6 bg-white/10 backdrop-blur-sm"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Static Website */}
            <div className="p-6 bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Static Website
              </h3>
              <p className="text-gray-600">
                Perfect for businesses that need a professional online presence
                with basic information. Ideal for: Small businesses,
                professionals, local shops.
              </p>
            </div>

            {/* Booking Site */}
            <div className="p-6 bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Booking Site
              </h3>
              <p className="text-gray-600">
                Online scheduling and appointment booking system. Ideal for:
                Salons, clinics, consultants, service providers with
                appointments.
              </p>
            </div>

            {/* E-commerce */}
            <div className="p-6 bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                E-commerce
              </h3>
              <p className="text-gray-600">
                Complete online store with shopping cart, payments, and
                inventory management. Ideal for: Retailers, product sellers,
                boutiques.
              </p>
            </div>

            {/* Management Software */}
            <div className="p-6 bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Management Software
              </h3>
              <p className="text-gray-600">
                Custom software solutions to streamline your business
                operations. Ideal for: Growing businesses, agencies, teams
                needing custom tools.
              </p>
            </div>

            {/* Automations */}
            <div className="p-6 bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Automations
              </h3>
              <p className="text-gray-600">
                Automate repetitive tasks to save time and increase efficiency.
                Ideal for: Any business looking to reduce manual work.
              </p>
            </div>

            {/* Social Media Ads */}
            <div className="p-6 bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Social Media Ads
              </h3>
              <p className="text-gray-600">
                Strategic paid advertising campaigns to reach your target
                audience. Ideal for: Businesses wanting to increase brand
                awareness and sales.
              </p>
            </div>

            {/* Custom Banners & Posts */}
            <div className="p-6 bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Custom Banners & Posts
              </h3>
              <p className="text-gray-600">
                Professional graphic design for your social media and marketing
                materials. Ideal for: Brands needing consistent visual identity.
              </p>
            </div>

            {/* SEO */}
            <div className="p-6 bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                SEO
              </h3>
              <p className="text-gray-600">
                Search engine optimization to improve your website's visibility
                and rankings. Ideal for: Businesses wanting organic traffic
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-6 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Process
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Initial Consultation
                </h3>
                <p className="text-white/80">
                  Meeting or chat for an estimated price
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Requirements Meeting
                </h3>
                <p className="text-white/80">
                  Meeting to clarify the final product
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Demo Creation
                </h3>
                <p className="text-white/80">Building a demo</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Revisions
                </h3>
                <p className="text-white/80">Changes</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Finalization
                </h3>
                <p className="text-white/80">Finalization</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
                6
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Maintenance
                </h3>
                <p className="text-white/80">Maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-6 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            About Us
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg text-white/90 mb-6">
              We are Avoex, a company dedicated to helping businesses achieve
              their goals through technology and digital solutions. Our team
              combines expertise in web development, design, and digital
              marketing to deliver results that drive growth.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/95 rounded-lg backdrop-blur-sm">
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
              <div className="p-6 bg-white/95 rounded-lg backdrop-blur-sm">
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
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section id="faq" className="py-20 px-6 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
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
      <section id="contact" className="py-20 px-6 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Contact Us
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg"
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
      <footer className="bg-black/20 backdrop-blur-sm text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Avoex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/20 rounded-lg bg-white/95 backdrop-blur-sm">
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
