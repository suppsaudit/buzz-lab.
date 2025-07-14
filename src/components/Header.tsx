"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ContactForm from "./ContactForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactButton, setShowContactButton] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const serviceSection = document.getElementById('service');
      if (serviceSection) {
        const rect = serviceSection.getBoundingClientRect();
        setShowContactButton(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: "サービス",
      href: "#service"
    },
    { name: "お知らせ", href: "#news" },
    { name: "会社概要", href: "/company" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 pt-4">
          <div className="flex items-center justify-between bg-[#f3f4f6]/80 backdrop-blur-sm border border-gray-100 shadow-none rounded-2xl px-6 py-2" style={{ height: '91px' }}>
            <div className="flex items-center overflow-hidden" style={{ height: '91px' }}>
              <img 
                src="/logo.png" 
                alt="Buzz Lab. ロゴ" 
                style={{ 
                  height: '160px', 
                  width: 'auto',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }} 
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block rounded-2xl px-6 py-2">
              <nav className="flex items-center space-x-6 ml-0">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <a
                      href={item.href}
                      className="flex items-center text-base font-medium tracking-wide text-gray-700 hover:text-gray-900 transition-colors px-3 py-2 rounded-xl"
                      style={{ letterSpacing: '0.04em', transition: 'box-shadow 0.2s' }}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </nav>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              {showContactButton && (
                <Button 
                  size="sm" 
                  className="bg-gray-900 hover:bg-gray-800 rounded-full border-none text-white transition-all duration-300"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  お問い合わせ
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gray-900 rounded-full mr-2"></div>
                      <h2 className="text-xl font-bold tracking-wider" style={{ letterSpacing: '0.05em' }}>Buzz Lab.</h2>
                    </div>
                  </div>

                  <nav className="flex flex-col space-y-4 mt-8">
                    {navigationItems.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          className="text-base font-medium tracking-wide text-white hover:text-gray-200 transition-colors py-2 block"
                          style={{ letterSpacing: '0.04em' }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      </div>
                    ))}
                  </nav>

                  <div className="mt-auto pb-8 space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full rounded-full"
                      onClick={() => {
                        setIsContactFormOpen(true);
                        setIsMenuOpen(false);
                      }}
                    >
                      お問い合わせ
                    </Button>
                    <Button 
                      className="w-full bg-gray-900 hover:bg-gray-800 rounded-full"
                      onClick={() => {
                        setIsContactFormOpen(true);
                        setIsMenuOpen(false);
                      }}
                    >
                      お問い合わせ
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  );
};

export default Header;
