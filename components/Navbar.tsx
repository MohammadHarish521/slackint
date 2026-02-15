"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex z-50 w-full pt-6 pr-4 pl-4 fixed top-0 left-0 right-0 items-center justify-center">
        <div className="flex bg-black/90 backdrop-blur-md w-full max-w-5xl border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-6 relative shadow-2xl items-center justify-between scroll-item scroll-fade-up">
          {/* Logo */}
          <a href="#" className="inline-flex items-center gap-2 relative z-50">
            <span className="text-xl font-bold text-white tracking-tight font-oswald">slackint</span>
          </a>

          {/* Centered Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {["Platform", "Solutions", "Pricing", "Developers", "Company"].map((item) => (
               <a key={item} href="#" className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors font-sans tracking-wide">
                 {item}
               </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-4 relative z-50">
            {/* Mobile Menu Trigger */}
            <button 
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Button */}
            <a href="#" className="hidden md:block bg-white text-black hover:bg-gray-200 transition-colors px-6 py-2.5 rounded-full text-sm font-semibold tracking-tight font-sans">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {["Platform", "Solutions", "Pricing", "Developers", "Company"].map((item, index) => (
            <a 
              key={item} 
              href="#" 
              className={`text-2xl font-light font-oswald text-white hover:text-blue-400 transition-all transform ${
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className={`mt-8 w-full px-8 transition-all duration-500 delay-300 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <a href="#" className="flex w-full items-center justify-center bg-white text-black px-8 py-3 rounded-full text-lg font-semibold font-sans">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
