import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-[#1B5E6E] mb-16 text-center">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="pt-8">
              <MapPin className="w-10 h-10 text-[#E8704A] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1B5E6E] mb-2">Location</h3>
              <p className="text-gray-700 text-sm">
                Magongo Kwa-hola Magongo Mwisho, Next to SHOFCO Airport Rd, Mombasa
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardContent className="pt-8">
              <Phone className="w-10 h-10 text-[#1B5E6E] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1B5E6E] mb-2">Phone</h3>
              <p className="text-gray-700 text-sm">
                <a href="tel:+254726931076" className="hover:text-[#E8704A] transition">
                  +254 726 931 076
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardContent className="pt-8">
              <Clock className="w-10 h-10 text-[#F4C430] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1B5E6E] mb-2">Hours</h3>
              <p className="text-gray-700 text-sm">
                Open Daily<br />
                Closes 5:00 PM
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
