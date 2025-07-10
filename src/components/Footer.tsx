"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import ContactForm from "./ContactForm";

const Footer = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <footer className="bg-slate-900 text-white">
      {/* Company and Request Section */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Company Section */}
          <div
            className="relative py-20 px-8 lg:px-12 flex items-center justify-center"
            style={{
              backgroundImage: "url('https://ext.same-assets.com/3990791590/2282482080.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-4">COMPANY</h2>
              <p className="text-lg mb-6">会社概要</p>
              <div className="w-12 h-0.5 bg-white mx-auto mb-6"></div>
              <Button
                variant="ghost"
                className="text-white border border-white/30 rounded-full px-8 py-2 hover:bg-white hover:text-gray-900"
              >
                詳しく見る
              </Button>
            </div>
          </div>

          {/* Contact Section */}
          <div
            className="relative py-20 px-8 lg:px-12 flex items-center justify-center"
            style={{
              backgroundImage: "url('https://ext.same-assets.com/3990791590/4191258369.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-4">CONTACT</h2>
              <p className="text-lg mb-6">お問い合わせ</p>
              <div className="w-12 h-0.5 bg-white mx-auto mb-6"></div>
              <Button
                variant="ghost"
                className="text-white border border-white/30 rounded-full px-8 py-2 hover:bg-white hover:text-gray-900"
                onClick={() => setIsContactFormOpen(true)}
              >
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 border-t border-gray-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <p className="text-sm text-gray-400">
                美容・健康領域特化で
                <br />
                想いを届けるマーケティング
              </p>
            </div>

            {/* Navigation */}
            <div>
              <div>
                <h4 className="text-white font-medium mb-4">サービス</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <span className="block">潜在市場発掘</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <span className="block">クリエイティブ最適化</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <span className="block">マーケティングプランニング</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 border-t border-gray-700">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-sm text-gray-400">
            Copyright © Buzz Lab. All Rights Reserved.
          </p>
        </div>
      </div>

      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </footer>
  );
};

export default Footer;
