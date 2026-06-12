import React from 'react';
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#1B5E6E] to-[#0f3d4f]">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join Our Community Health Initiative
        </h2>
        <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
          Together, we can raise awareness about sickle cell disease and improve health outcomes for our community.
        </p>
        <Button className="bg-[#E8704A] hover:bg-[#d45a35] text-white px-8 py-6 text-lg">
          Get Involved Today
        </Button>
      </div>
    </section>
  );
};
