"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [contactForm, setContactForm] = useState({
    email: "",
    serviceType: "",
    budget: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (submitMessage && submitMessage.type === "success") {
      const timer = setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".service-dropdown-container")) {
        setIsServiceDropdownOpen(false);
      }
    };

    if (isServiceDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isServiceDropdownOpen]);

  const serviceOptions = [
    {
      value: "static",
      label: "Static Website",
      icon: (
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
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      value: "booking",
      label: "Booking Site",
      icon: (
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
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      value: "ecommerce",
      label: "E-commerce",
      icon: (
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
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      value: "management",
      label: "Management Software",
      icon: (
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      value: "automations",
      label: "Automations",
      icon: (
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      value: "ads",
      label: "Social Media Ads",
      icon: (
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
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      value: "design",
      label: "Custom Banners & Posts",
      icon: (
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
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      value: "seo",
      label: "SEO",
      icon: (
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
      ),
    },
  ];

  const selectedServiceOption = serviceOptions.find(
    (opt) => opt.value === contactForm.serviceType
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: "Email sent successfully",
        });
        // Reset form
        setContactForm({
          email: "",
          serviceType: "",
          budget: "",
          description: "",
        });
      } else {
        setSubmitMessage({
          type: "error",
          text: data.message || "An error occurred while sending the request.",
        });
      }
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "An error occurred while sending the request. Please try again.",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Success notification with checkmark - slides down from top */}
      {submitMessage && submitMessage.type === "success" && (
        <div className="fixed top-0 left-0 right-0 z-50 animate-slide-down">
          <div className="max-w-md mx-auto mt-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
            <svg
              className="w-6 h-6 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-medium">{submitMessage.text}</span>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-8 bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white/20 relative overflow-hidden"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

        <div className="relative z-10 space-y-8">
          {/* Email Field */}
          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-3 transition-colors group-focus-within:text-blue-600"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Address
              </span>
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white transition-all duration-300 outline-none text-gray-800 placeholder-gray-400 hover:border-gray-300 hover:bg-white/90"
              value={contactForm.email}
              onChange={(e) =>
                setContactForm({ ...contactForm, email: e.target.value })
              }
              placeholder="your.email@example.com"
            />
          </div>

          {/* Service Type Field - Custom Dropdown */}
          <div className="group service-dropdown-container relative">
            <label
              htmlFor="serviceType"
              className="block text-sm font-semibold text-gray-700 mb-3 transition-colors group-focus-within:text-purple-600"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Service Type
              </span>
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                className={`w-full px-5 py-4 bg-white/70 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 outline-none text-left flex items-center justify-between group-hover:border-purple-300 ${
                  isServiceDropdownOpen
                    ? "border-purple-500 ring-4 ring-purple-500/20 bg-white"
                    : "border-gray-200 hover:border-gray-300 hover:bg-white/90"
                } ${
                  !contactForm.serviceType ? "text-gray-400" : "text-gray-800"
                }`}
              >
                <span className="flex items-center gap-3">
                  {selectedServiceOption ? (
                    <>
                      <span className="text-gray-700">
                        {selectedServiceOption.icon}
                      </span>
                      <span className="font-medium">
                        {selectedServiceOption.label}
                      </span>
                    </>
                  ) : (
                    <span>Select a service</span>
                  )}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    isServiceDropdownOpen ? "rotate-180 text-purple-600" : ""
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
              </button>

              {/* Dropdown Menu */}
              {isServiceDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsServiceDropdownOpen(false)}
                  ></div>
                  <div className="absolute z-50 w-full mt-2 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 backdrop-blur-xl border-2 border-purple-200/50 rounded-xl shadow-2xl overflow-hidden animate-dropdown-slide">
                    <div className="max-h-80 overflow-y-auto custom-scrollbar">
                      {serviceOptions.map((option, index) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setContactForm({
                              ...contactForm,
                              serviceType: option.value,
                            });
                            setIsServiceDropdownOpen(false);
                          }}
                          className={`w-full px-5 py-4 flex items-center gap-4 transition-all duration-200 group ${
                            contactForm.serviceType === option.value
                              ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border-l-4 border-white/50"
                              : "hover:bg-gradient-to-r hover:from-blue-100 hover:via-purple-100 hover:to-pink-100 text-gray-700 hover:pl-6"
                          }`}
                          style={{
                            animationDelay: `${index * 30}ms`,
                          }}
                        >
                          <span
                            className={`transition-all duration-200 group-hover:scale-110 ${
                              contactForm.serviceType === option.value
                                ? "scale-110 text-white"
                                : "text-gray-700"
                            }`}
                          >
                            {option.icon}
                          </span>
                          <span
                            className={`flex-1 text-left font-medium transition-colors ${
                              contactForm.serviceType === option.value
                                ? "text-white"
                                : "text-gray-700 group-hover:text-purple-600"
                            }`}
                          >
                            {option.label}
                          </span>
                          {contactForm.serviceType === option.value && (
                            <svg
                              className="w-5 h-5 text-white animate-check-in"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* Hidden input for form validation */}
            <input type="hidden" value={contactForm.serviceType} required />
          </div>

          {/* Budget Field */}
          <div className="group">
            <label
              htmlFor="budget"
              className="block text-sm font-semibold text-gray-700 mb-3 transition-colors group-focus-within:text-pink-600"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Budget (Optional)
              </span>
            </label>
            <input
              type="text"
              id="budget"
              className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 focus:bg-white transition-all duration-300 outline-none text-gray-800 placeholder-gray-400 hover:border-gray-300 hover:bg-white/90"
              value={contactForm.budget}
              onChange={(e) =>
                setContactForm({ ...contactForm, budget: e.target.value })
              }
              placeholder="1000$"
            />
          </div>

          {/* Description Field */}
          <div className="group">
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-700 mb-3 transition-colors group-focus-within:text-indigo-600"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Project Description
              </span>
            </label>
            <textarea
              id="description"
              required
              rows={6}
              className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white transition-all duration-300 outline-none text-gray-800 placeholder-gray-400 resize-none hover:border-gray-300 hover:bg-white/90"
              value={contactForm.description}
              onChange={(e) =>
                setContactForm({
                  ...contactForm,
                  description: e.target.value,
                })
              }
              placeholder="Describe your project vision and what you'd like to achieve..."
            />
          </div>

          {/* Error Message */}
          {submitMessage && submitMessage.type === "error" && (
            <div className="p-4 rounded-xl bg-red-50 text-red-700 border-2 border-red-200 flex items-center gap-3 animate-shake">
              <svg
                className="w-5 h-5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{submitMessage.text}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
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
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Send Request
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </form>
    </>
  );
}
