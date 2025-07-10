"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Mail, Download } from "lucide-react";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* 背景装飾テキスト */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Buzz: 上部に大きく、右→左に移動 */}
        <span
          className="block font-extrabold text-gray-200 leading-none absolute left-0 right-0"
          style={{
            top: 0,
            height: '66vh',
            fontSize: '18vw',
            letterSpacing: '0.04em',
            lineHeight: 1.1,
            animation: 'buzz-move 30s linear infinite',
            animationDelay: '0s',
            zIndex: 1,
            opacity: 0.7,
          }}
        >
          <span className="hidden sm:inline">Buzz</span>
          <span className="inline sm:hidden text-[60vw] leading-none">Buzz</span>
        </span>
        {/* Lab: Buzzのすぐ下に表示 */}
        <span
          className="block font-extrabold text-gray-200 leading-none absolute left-0 right-0"
          style={{
            top: '66vh',
            height: '34vh',
            fontSize: '18vw',
            letterSpacing: '0.04em',
            lineHeight: 1.1,
            animation: 'lab-move 30s linear infinite',
            animationDelay: '0s',
            zIndex: 1,
            opacity: 0.7,
          }}
        >
          <span className="hidden sm:inline">Lab.</span>
          <span className="inline sm:hidden text-[60vw] leading-none">Lab.</span>
        </span>
        {/* Lab: 画像エリアに表示 */}
        <span
          className="block font-extrabold text-gray-200 leading-none absolute left-0 right-0"
          style={{
            bottom: '10vh',
            height: '50vh',
            fontSize: '16vw',
            letterSpacing: '0.04em',
            lineHeight: 1.1,
            animation: 'lab-move 30s linear infinite',
            animationDelay: '0s',
            zIndex: 1,
            opacity: 0.6,
          }}
        >
          <span className="hidden sm:inline">Lab.</span>
          <span className="inline sm:hidden text-[50vw] leading-none">Lab.</span>
        </span>
      </div>
      {/* アニメーションCSS */}
      <style>{`
        @keyframes buzz-move {
          0% { transform: translateX(40vw); }
          100% { transform: translateX(-100%); }
        }
        @keyframes lab-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(40vw); }
        }
      `}</style>
      {/* Upper Content Section */}
      <div className="pt-[10.5rem] lg:pt-[7rem] pb-6 px-4 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Text Content */}
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight" style={{ letterSpacing: '0.01em' }}>
                価値あるものを、<br />求める人へ
              </h1>
              <div className="space-y-4 text-xl text-gray-700 leading-relaxed font-normal mb-8" style={{ letterSpacing: '0.01em', lineHeight: '0.85' }}>
                <p className="font-bold">本当にいいものを作る人たちと</p>
                <p className="font-bold">それを求める人たちを繋ぐ</p>
                <p className="font-bold">美容・健康領域特化のマーケティングカンパニー</p>
              </div>
            </div>

            {/* Right: CTA Buttons */}
            <div className="lg:col-span-4 flex flex-col space-y-6 lg:items-end">
              <Button
                size="lg"
                className="w-full lg:w-56 h-16 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold text-lg tracking-wide"
                style={{ letterSpacing: '0.02em', padding: '16px 32px', borderRadius: '12px' }}
                onClick={() => setIsContactFormOpen(true)}
              >
                <Mail className="w-5 h-5 mb-1" />
                <span className="block text-base font-semibold">お問い合わせ</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Image Section */}
      <div className="relative">
        <div className="h-[60vh] lg:h-[70vh] overflow-hidden">
          <img
            src="/images/hero-image.jpg"
            alt="モダンなオフィス会議室"
            className="w-full h-full object-cover object-left lg:object-center"
          />
        </div>

        {/* Scroll Indicator */}
      </div>

      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;
