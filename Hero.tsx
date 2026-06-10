import React from 'react';
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/images";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        {/* Text Content */}
        <div className="px-6 md:px-12 py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-lg">
            <div className="inline-block mb-4 px-4 py-2 bg-[#F4C430] rounded-full">
              <span className="text-sm font-semibold text-[#1B5E6E]">Community Health Care</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E6E] mb-6 leading-tight">
              Sickle Cell Awareness & Community Care
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              SCAFKENYA is dedicated to providing real-time visibility into your health journey through comprehensive sickle cell awareness, education, and community support services in Mombasa.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#E8704A] hover:bg-[#d45a35] text-white px-8 py-6 text-lg">
                Learn More
              </Button>
              <Button variant="outline" className="border-[#1B5E6E] text-[#1B5E6E] hover:bg-[#1B5E6E] hover:text-white px-8 py-6 text-lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 md:h-full min-h-[500px]">
          <img
            src={IMAGES.HERO}
            alt="SCAFKENYA Community Care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-20"></div>
        </div>
      </div>
    </section>
  );
};
