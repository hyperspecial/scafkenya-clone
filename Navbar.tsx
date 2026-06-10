import React from 'react';
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/images";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <img src={IMAGES.ICON} alt="SCAFKENYA Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-[#1B5E6E]">SCAFKENYA</h1>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-gray-700 hover:text-[#E8704A] transition">About</a>
          <a href="#services" className="text-gray-700 hover:text-[#E8704A] transition">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-[#E8704A] transition">Contact</a>
        </nav>
        <Button className="bg-[#E8704A] hover:bg-[#d45a35] text-white">Get Help</Button>
      </div>
    </header>
  );
};
