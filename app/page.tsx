import Image from "next/image";
import Script from "next/script";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ServicesSectionWrapper from "./components/ServicesSectionWrapper";
import WorkProcessTree from "./components/WorkProcessTree";
import ContactForm from "./components/ContactForm";
import FAQItem from "./components/FAQItem";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Avoex",
    description:
      "Professional website design, marketing agency services, digital advertising, and web development. We help businesses attract more clients through custom websites, marketing campaigns, and automation solutions.",
    url: "https://avoex.vercel.app",
    logo: "https://avoex.vercel.app/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "avoex.contact@gmail.com",
      contactType: "Customer Service",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61579585838703",
      "https://www.linkedin.com/company/avoex/",
    ],
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    knowsAbout: [
      "Website Design",
      "Web Development",
      "Digital Marketing",
      "Marketing Agency",
      "SEO",
      "E-commerce",
      "Social Media Advertising",
      "Business Automation",
      "Website Development",
      "Custom Websites",
    ],
    offers: [
      {
        "@type": "Service",
        name: "Website Design",
        description: "Professional website design and development services",
      },
      {
        "@type": "Service",
        name: "Marketing Agency",
        description: "Digital marketing and advertising services",
      },
      {
        "@type": "Service",
        name: "SEO Services",
        description: "Search engine optimization to attract more clients",
      },
    ],
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Website Design and Marketing Services",
    provider: {
      "@type": "Organization",
      name: "Avoex",
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    description:
      "Professional website design, marketing agency services, digital advertising, and web development to help businesses attract more clients.",
    offers: {
      "@type": "Offer",
      description: "Professional website design and marketing services",
    },
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Avoex",
    description:
      "Professional website design and marketing agency helping businesses attract more clients",
    url: "https://avoex.vercel.app",
    email: "avoex.contact@gmail.com",
    priceRange: "$$",
    areaServed: "Worldwide",
    serviceArea: {
      "@type": "Country",
      name: "Worldwide",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <Script
        id="local-business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData),
        }}
      />

      <Navigation />

      <HeroSection />

      <ServicesSectionWrapper />

      <section
        id="process"
        className="py-20 px-6"
        style={{
          backgroundImage: "url(/background2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          fontFamily: '"Cy Grotesk Grand", sans-serif',
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our Work Process
            </h2>
          </div>
          <WorkProcessTree />
        </div>
      </section>

      <section
        id="about"
        className="py-20 px-6"
        style={{
          backgroundColor: "#fffaea",
          fontFamily: '"Cy Grotesk Grand", sans-serif',
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              About Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-4">
              <p className="text-lg text-black">
                We are a digital marketing agency and web design company
                specializing in helping businesses grow through digitalization.
                Our goal is to help you attract more clients and achieve better
                results. We can help with professional website design and
                development to make your business discoverable online. Our
                marketing agency services help you reach more customers and
                establish a professional online presence. We also create custom
                management software and automation solutions to streamline your
                operations, or help you realize your digital ideas through
                expert web development.
              </p>
              <p className="text-lg text-black">
                And why choose us - our work process is the best, because we
                don't work with unnecessary people and one programmer will also
                be your project manager, and this will ensure that everyone in
                the process is familiar with everything, there is no delay and
                no gaps in quality.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src="/photo1.png"
                  alt="Avoex - Professional Website Design and Marketing Agency"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center rounded-full shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a
                href="mailto:avoex.contact@gmail.com"
                className="flex flex-col items-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-black mb-3">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-black font-medium text-sm">
                  avoex.contact@gmail.com
                </span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579585838703"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-black mb-3">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span className="text-black font-medium">Facebook</span>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=359877836667"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-black mb-3">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span className="text-black font-medium">WhatsApp</span>
              </a>
              <a
                href="https://www.linkedin.com/company/avoex/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-black mb-3">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.025H3.555V9h3.564v11.458zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-black font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 px-6"
        style={{
          backgroundImage: "url(/background3.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          fontFamily: '"Cy Grotesk Grand", sans-serif',
        }}
      >
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Contact Us
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>

      <section
        id="faq"
        className="py-20 px-6"
        style={{
          backgroundColor: "#44a3ff",
          fontFamily: '"Cy Grotesk Grand", sans-serif',
        }}
      >
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Questions & Answers
            </h2>
          </div>
          <div className="space-y-4">
            <FAQItem
              question="Is there a monthly fee?"
              answer="The monthly cost depends on three factors: Hosting, Domain, and Maintenance. For hosting, you can choose to manage it yourself or we can assist you. We offer plans on Vercel or any platform you prefer, and there's always a free option available. For domains, you can choose a free option (e.g., <your-company-name>.vercel.app), or we can help you purchase a custom domain for your business. For maintenance, the cost varies by project, and there's a possibility of free maintenance for very small projects."
            />
            <FAQItem
              question="How long does project development take?"
              answer="Everything depends on our team's availability. A small project can be delivered to you in as little as 2 days, and the time increases depending on the project's complexity. However, our timing is always the best - we work efficiently to deliver quality results as quickly as possible."
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
    </div>
  );
}
