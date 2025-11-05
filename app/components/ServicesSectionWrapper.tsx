"use client";

import { useState } from "react";
import ServicesSection from "./ServicesSection";
import ServiceModal from "./ServiceModal";

interface ServiceDetails {
  title: string;
  description: string;
  details: string[];
  ideal: string;
  price: string;
}

export default function ServicesSectionWrapper() {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(
    null
  );

  return (
    <>
      <ServicesSection onServiceSelect={setSelectedService} />
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </>
  );
}


