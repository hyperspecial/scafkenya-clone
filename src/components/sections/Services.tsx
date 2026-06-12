import React from 'react';
import { Heart, Users, Zap } from "lucide-react";
import { IMAGES } from "@/constants/images";

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-[#1B5E6E] mb-16 text-center">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src={IMAGES.SERVICES}
              alt="Our Services"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E8704A] flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1B5E6E] mb-2">Health Screening</h3>
                <p className="text-gray-700">Comprehensive sickle cell screening and health assessments for early detection and management.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B5E6E] flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1B5E6E] mb-2">Community Education</h3>
                <p className="text-gray-700">Awareness campaigns and educational programs about sickle cell disease and prevention.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F4C430] flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#1B5E6E]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1B5E6E] mb-2">Patient Support</h3>
                <p className="text-gray-700">Ongoing support and resources for patients and families managing sickle cell disease.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
