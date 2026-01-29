"use client";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "As an open-source project, we may not be able to fix all the bugs that arise. Support future readers by contributing!",
      name: "Fork & Contribute",
      role: "Step 1",
      img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1000&auto=format&fit=crop"
    },
    {
      quote: "If you find any bugs and know how to fix them, you can help by fixing the bug and supporting the project.",
      name: "Fix Bugs",
      role: "Step 2",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
    },
    {
      quote: "We will deeply appreciate your support for future readers. Create a pull request with your improvements.",
      name: "Create Pull Request",
      role: "Step 3",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setFade(false);
    }, 300);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setFade(false);
    }, 300);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="flex flex-col bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl mt-24 mb-24 pt-8 pr-8 pb-16 pl-8 gap-x-16 gap-y-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end gap-8 w-full gap-x-8 gap-y-8 justify-between">
         <div className="flex flex-col gap-6 max-w-3xl">
           <div className="flex gap-3 gap-x-3 gap-y-3 items-center scroll-item scroll-fade-up">
              <span className="flex items-center justify-center text-[11px] font-medium text-blue-400 font-mono bg-blue-500/10 w-7 h-7 border-blue-500/20 border rounded-lg shadow-[0_0_10px_rgba(59,130,246,0.2)]">03</span>
              <span className="uppercase text-sm font-medium text-gray-500 tracking-widest font-sans">Community</span>
           </div>
           <h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-white font-oswald font-light tracking-tight scroll-item scroll-fade-up delay-100">
             Contributing <span className="text-gray-600 font-oswald font-light tracking-tight ml-2">to the Project.</span>
           </h2>
           <p className="text-lg text-gray-400 font-light max-w-xl leading-relaxed font-sans scroll-item scroll-fade-up delay-200">
             Join us in building the future of Slack Integrations. Whether it's fixing bugs or adding features, your contributions matter.
           </p>
         </div>
         <button className="group flex items-center gap-2 pl-6 pr-5 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-200 font-sans whitespace-nowrap">
            <span className="font-sans">Start Contributing</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
         </button>
      </div>

      {/* Testimonials Carousel */}
      <div className="overflow-hidden flex flex-col md:p-16 lg:flex-row lg:gap-20 lg:pt-4 lg:pb-4 lg:pl-4 lg:pr-8 bg-[#0A0A0C] w-full max-w-6xl border-white/10 border rounded-3xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative shadow-2xl gap-x-12 gap-y-12 items-center scroll-item scroll-blur-in delay-300">
         <div className="pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C] absolute top-0 right-0 bottom-0 left-0 z-0"></div>
         <div className="z-0 opacity-20 absolute top-0 right-0 bottom-0 left-0" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
         
         {/* Image Section */}
         <div className="lg:w-[55%] flex min-h-[420px] md:min-h-[520px] w-full relative items-center justify-center z-10">
            <div className="z-10 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] group cursor-pointer overflow-hidden bg-white/5 w-80 h-80 border-0 rounded-[2.5rem] pt-1 pr-1 pb-1 pl-1 relative shadow-2xl">
               <img src={current.img} alt="User Profile" className={`transform transition-all duration-700 group-hover:scale-105 w-full h-full object-cover rounded-[2.2rem] ${fade ? 'opacity-0' : 'opacity-100'}`} />
            </div>
         </div>

         {/* Content Section */}
         <div className="lg:w-1/2 flex flex-col z-10 w-full relative">
            <div className="mb-6 text-indigo-500">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z"></path></svg>
            </div>
            <blockquote className={`leading-tight transition-opacity duration-300 md:text-5xl text-2xl font-light text-white font-oswald mb-8 ${fade ? 'opacity-0' : 'opacity-100'}`}>
              "{current.quote}"
            </blockquote>
            <div className="flex flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
               <div>
                  <h4 className={`leading-none text-xl font-semibold text-white transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>{current.name}</h4>
                  <p className={`text-sm md:text-base text-gray-500 mt-2 font-light transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>{current.role}</p>
               </div>
               <div className="flex items-center gap-3">
                  <button onClick={handlePrev} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-indigo-600 transition-all duration-300">
                     <ChevronLeft size={20} />
                  </button>
                  <button onClick={handleNext} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-indigo-600 transition-all duration-300">
                     <ChevronRight size={20} />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
