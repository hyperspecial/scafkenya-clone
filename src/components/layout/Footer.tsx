import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">SCAFKENYA</h3>
            <p className="text-sm">
              Sickle Cell Awareness Foundation Kenya - Dedicated to community health and sickle cell awareness in Mombasa.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-[#E8704A] transition">About Us</a></li>
              <li><a href="#services" className="hover:text-[#E8704A] transition">Services</a></li>
              <li><a href="#contact" className="hover:text-[#E8704A] transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <p className="text-sm mb-2">Phone: +254 726 931 076</p>
            <p className="text-sm">Email: info@scafkenya.org</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SCAFKENYA Community Outreach Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
