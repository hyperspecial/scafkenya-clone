import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1B5E6E] mb-6">About SCAFKENYA</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            The Sickle Cell Awareness Foundation Kenya (SCAFKENYA) is a community health center dedicated to providing comprehensive sickle cell awareness, education, and support services to the people of Mombasa and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition">
            <CardHeader className="bg-gradient-to-br from-[#E8704A] to-[#d45a35] text-white rounded-t-lg">
              <Heart className="w-8 h-8 mb-2" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700">
                To provide accessible, high-quality sickle cell awareness and healthcare services to improve community health outcomes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition">
            <CardHeader className="bg-gradient-to-br from-[#1B5E6E] to-[#0f3d4f] text-white rounded-t-lg">
              <Users className="w-8 h-8 mb-2" />
              <CardTitle>Community Focus</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700">
                We believe in empowering communities through education, support, and access to quality healthcare services for all.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition">
            <CardHeader className="bg-gradient-to-br from-[#F4C430] to-[#d4a820] text-[#1B5E6E] rounded-t-lg">
              <Zap className="w-8 h-8 mb-2" />
              <CardTitle>Our Impact</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700">
                Through awareness campaigns and community outreach, we're making a real difference in sickle cell health outcomes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
