"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CompanySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <img
              src="https://ext.same-assets.com/3990791590/2282482080.jpeg"
              alt="モダンなオフィススペース"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Right: Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              COMPANY
            </h2>
            <p className="text-gray-700 mb-6 text-sm">
              会社概要
            </p>

            <div className="space-y-4 text-gray-700 text-sm leading-relaxed mb-8">
              <p>
                バズラボは、美容・健康領域に特化したマーケティングカンパニーとして、本当にいいものを作る人たちとそれを求める人たちを繋いでいます。
              </p>
              <p>
                私たちは、お客様と共に持続可能な社会の実現に向けて、革新的なマーケティングソリューションを提供し続けています。
              </p>
              <p>
                想いが、ちゃんと届く世界を目指して、企業の成長と消費者の満足度向上に貢献しています。
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoSections = () => {
  return (
    <>
      <CompanySection />
    </>
  );
};

export default InfoSections;
