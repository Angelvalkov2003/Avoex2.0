"use client";

interface ServiceDetails {
  title: string;
  description: string;
  details: string[];
  ideal: string;
  price: string;
}

export default function ServiceModal({
  service,
  onClose,
}: {
  service: ServiceDetails | null;
  onClose: () => void;
}) {
  if (!service) return null;

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-900 text-2xl transition-colors"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {service.title}
        </h2>

        <p className="text-lg text-gray-600 mb-6">{service.description}</p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            What's included:
          </h3>
          <ul className="space-y-2">
            {service.details.map((detail: string, index: number) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Ideal for:
          </h3>
          <p className="text-gray-600">{service.ideal}</p>
        </div>

        <div className="border-t pt-6">
          <a
            href="#contact"
            onClick={(e) => {
              handleSmoothScroll(e, "#contact");
              onClose();
            }}
            className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full hover:scale-105 transition-transform"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}


