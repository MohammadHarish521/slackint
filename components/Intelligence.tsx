"use client";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Counter({ target, prefix = "", suffix = "", duration = 1500, triggerKey }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 20);
    setCount(0); // Reset on key change
    
    // Tiny delay to ensure reset is perceived if needed, or just start
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.ceil(start)); 
    }, 20);
    return () => clearInterval(timer);
  }, [triggerKey, target, duration]);

  return <>{prefix}{count}{suffix}</>;
}

export default function Intelligence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [triggerKey, setTriggerKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
       if(entry.isIntersecting) {
         containerRef.current?.classList.add('in-view');
       } else {
         containerRef.current?.classList.remove('in-view');
       }
    }, { threshold: 0.2 });

    if(containerRef.current) observer.observe(containerRef.current);

    const interval = setInterval(() => {
        if(containerRef.current?.classList.contains('in-view')) {
            setTriggerKey(prev => prev + 1);
        }
    }, 6000);

    return () => {
        observer.disconnect();
        clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl pt-8 px-6 pb-12 md:pr-8 md:pb-16 md:pl-8 gap-10 md:gap-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full">
        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="flex gap-3 gap-x-3 gap-y-3 items-center scroll-item scroll-fade-up">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-500/10 text-[11px] font-mono font-medium text-blue-400 border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)] font-sans">
              01
            </span>
            <span className="text-sm font-medium tracking-widest uppercase text-gray-500 font-sans">
              Structure
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] font-oswald font-light tracking-tight scroll-item scroll-fade-up delay-100">
            Project Architecture
            <span className="text-gray-600 font-oswald font-light tracking-tight ml-2">
              & Infrastructure
            </span>
          </h2>
          <p className="leading-relaxed text-lg font-light text-gray-400 max-w-xl scroll-item scroll-fade-up delay-200">
            Built with two separate Python applications for offline data processing and online real-time inference, backed by robust Docker infrastructure.
          </p>
        </div>
        <button className="group flex items-center gap-2 pl-6 pr-5 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-200 font-sans whitespace-nowrap scroll-item scroll-fade-up delay-300">
          <span className="font-sans">View Documentation</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[400px] gap-6" id="dashboard-grid" ref={containerRef}>
        
        {/* ROI Prediction -> Infrastructure */}
        <div className="relative h-auto min-h-[400px] md:h-[400px] rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-8 overflow-hidden flex flex-col justify-between group hover:border-white/[0.15] transition-colors scroll-item scroll-fade-up delay-100">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
          <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

          {/* Header */}
          <div className="relative z-10">
            <h3 className="text-4xl font-light text-white tracking-tight font-oswald">
              Infrastructure
            </h3>
            <p className="mt-2 text-lg font-light leading-relaxed text-gray-400">
              Dockerized environments for both offline and online applications.
            </p>
          </div>

          {/* Visual */}
          <div className="relative z-10 h-32 w-full mt-8 md:mt-0">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
              <path d="M0 45 L100 45" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4"></path>
              <path d="M0 25 L100 25" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4"></path>

              <defs>
                <linearGradient id="gradient-area" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.2 }}></stop>
                  <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 0 }}></stop>
                </linearGradient>
              </defs>

              <path d="M0 40 C 20 40, 30 35, 50 20 C 70 5, 80 10, 100 0 V 50 H 0 Z" fill="url(#gradient-area)" className="animate-fade-up" style={{ animationDelay: "0.1s" } as any}></path>
              <path d="M0 40 C 20 40, 30 35, 50 20 C 70 5, 80 10, 100 0" fill="none" stroke="#3b82f6" strokeWidth="2" className="animate-draw"></path>

              <foreignObject x="60" y="-10" width="40" height="25" className="animate-scale" style={{ animationDelay: "0.8s" } as any}>
                <div className="px-2 py-1 rounded bg-blue-500 text-white text-[10px] text-center shadow-[0_0_10px_rgba(59,130,246,0.5)] transform scale-75 origin-center font-sans font-semibold">
                  <span>
                    <Counter target={100} prefix="" suffix="%" triggerKey={triggerKey} />
                  </span>
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>

        {/* CASHFLOW -> Offline Pipeline */}
        <div className="relative rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-8 overflow-hidden flex flex-col h-auto min-h-[400px] md:h-[400px] lg:h-[824px] lg:row-span-2 group hover:border-white/[0.15] transition-colors scroll-item scroll-fade-up delay-200">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
          <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(circle, black 40%, transparent 100%)", WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 100%)" }}></div>

          <div className="relative z-10">
            <h3 className="text-4xl font-light text-white tracking-tight font-oswald">
              Offline Pipeline
            </h3>
            <p className="mt-2 text-lg font-light leading-relaxed text-gray-400 max-w-[26rem]">
              Data Pipelines, ETL, and RAG processes handled asynchronously for maximum efficiency.
            </p>
          </div>

          <div className="relative z-10 flex-1 flex items-center justify-center pt-6 mt-8 md:mt-0">
            <svg viewBox="0 0 300 300" className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[380px] lg:h-[380px] overflow-visible" preserveAspectRatio="xMidYMid meet">
              <defs>
                <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"></feGaussianBlur>
                   <feMerge>
                    <feMergeNode in="coloredBlur"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
                <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"></feGaussianBlur>
                  <feMerge>
                    <feMergeNode in="coloredBlur"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
                <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d946ef"></stop>
                  <stop offset="100%" stopColor="#a855f7"></stop>
                </linearGradient>
                <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee"></stop>
                  <stop offset="100%" stopColor="#06b6d4"></stop>
                </linearGradient>
              </defs>

              <g fill="none" stroke="#ffffff" strokeOpacity="0.10" strokeWidth="1" strokeDasharray="3 3">
                <circle cx="150" cy="150" r="22" className="animate-scale" style={{ animationDelay: "0.1s" } as any}></circle>
                <circle cx="150" cy="150" r="44" className="animate-scale" style={{ animationDelay: "0.2s" } as any}></circle>
                <circle cx="150" cy="150" r="66" className="animate-scale" style={{ animationDelay: "0.3s" } as any}></circle>
                <circle cx="150" cy="150" r="88" className="animate-scale" style={{ animationDelay: "0.4s" } as any}></circle>
                <circle cx="150" cy="150" r="110" className="animate-scale" style={{ animationDelay: "0.5s" } as any}></circle>
              </g>

              <g stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" className="animate-fade-up" style={{ animationDelay: "0.3s" } as any}>
                <line x1="150" y1="150" x2="150" y2="40"></line>
                <line x1="150" y1="150" x2="245" y2="95"></line>
                <line x1="150" y1="150" x2="245" y2="205"></line>
                <line x1="150" y1="150" x2="150" y2="260"></line>
                <line x1="150" y1="150" x2="55" y2="205"></line>
                <line x1="150" y1="150" x2="55" y2="95"></line>
              </g>

              <g className="fill-white font-sans text-[11px] font-medium animate-fade-up" textAnchor="middle" dominantBaseline="middle" style={{ animationDelay: "0.4s" } as any}>
                <text x="150" y="25">Data</text>
                <text x="268" y="85">ETL</text>
                <text x="268" y="215">RAG</text>
                <text x="150" y="278">Embed</text>
                <text x="32" y="215">Store</text>
                <text x="32" y="85">Sync</text>
              </g>

              <path d="M150 62 L197 122 L188 172 L150 249 L102 177 L74 106 Z" fill="none" stroke="url(#grad-purple)" strokeWidth="2" filter="url(#glow-purple)" strokeLinejoin="round" strokeLinecap="round" className="animate-draw" style={{ animationDelay: "0.3s" } as any}></path>
              <path d="M150 95 L240 102 L230 196 L150 254 L80 190 L107 125 Z" fill="none" stroke="url(#grad-cyan)" strokeWidth="2" filter="url(#glow-cyan)" strokeLinejoin="round" strokeLinecap="round" className="animate-draw" style={{ animationDelay: "0.6s" } as any}></path>
            </svg>
          </div>
        </div>

        {/* Engagement -> Online Pipeline */}
        <div className="relative h-auto min-h-[400px] md:h-[400px] rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-8 overflow-hidden flex flex-col group hover:border-white/[0.15] transition-colors scroll-item scroll-fade-up delay-300">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
          <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(circle, black 40%, transparent 100%)", WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 100%)" }}></div>

          <div className="relative z-10">
            <h3 className="text-4xl font-light text-white tracking-tight font-oswald">
              Online Inference
            </h3>
            <p className="mt-2 text-lg font-light leading-relaxed text-gray-400">
              Agentic App providing real-time responses directly in Slack.
            </p>
          </div>

          <div className="relative z-10 flex-1 flex items-center justify-center mt-8 md:mt-0">
            <div className="absolute w-32 h-32 rounded-3xl bg-white/[0.03] border border-white/[0.05] animate-[spin-slow_20s_linear_infinite]" style={{ animationDuration: "25s" }}></div>
            <div className="absolute w-24 h-24 rounded-2xl bg-white/[0.05] border border-white/[0.05] animate-[spin-slow-reverse_15s_linear_infinite]" style={{ animationDuration: "15s" }}></div>
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_12px_30px_-10px_rgba(59,130,246,0.4)] animate-scale relative z-10">
              <span className="text-4xl text-white font-oswald font-light tracking-tight flex items-baseline">
                <span>
                 AI
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Conversion -> Tech Stack / Accuracy */}
        <div className="relative h-auto min-h-[400px] md:h-[400px] rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-8 overflow-hidden flex flex-col justify-end group hover:border-white/[0.15] transition-colors scroll-item scroll-fade-up delay-500">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
          <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(circle, black 40%, transparent 100%)", WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 100%)" }}></div>

          <div className="absolute inset-0 flex items-center justify-center -translate-y-10 z-10">
            <div className="relative animate-fade-up">
              <span className="text-[8rem] text-white/10 select-none font-oswald font-light tracking-tight flex">
                <Counter target={100} suffix="%" triggerKey={triggerKey} />
              </span>
              <div className="absolute top-1/2 left-0 h-[4px] bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_18px_rgba(59,130,246,0.6)] animate-width" style={{ "--target-width": "100%" } as any}></div>
            </div>
          </div>

          <div className="relative z-10 mt-8 md:mt-0">
            <h3 className="text-4xl font-light text-white tracking-tight font-oswald">
              Open Source
            </h3>
            <p className="mt-2 text-lg font-light leading-relaxed text-gray-400">
              Totally free to use and customize.
            </p>
          </div>
        </div>

        {/* Channel Performance -> Cost Structure */}
        <div className="relative h-auto min-h-[400px] md:h-[400px] rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-8 overflow-hidden flex flex-col justify-end group hover:border-white/[0.15] transition-colors">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
          <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(circle, black 40%, transparent 100%)", WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 100%)" }}></div>

          <div className="relative z-10 mb-10 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold text-white tracking-tight font-sans">
                Service Costs
              </h4>
             
            </div>

            <div className="flex flex-col gap-5">
              {[
                { name: "OpenAI API", color: "#d946ef", val: "<$0.5", width: "10%", delay: "0.1s" },
                { name: "Docker", color: "#22d3ee", val: "Free", width: "0%", delay: "0.2s" },
                { name: "Python", color: "#f87171", val: "Free", width: "0%", delay: "0.3s" },
                { name: "Slack App", color: "#6366f1", val: "Free", width: "0%", delay: "0.4s" },
              ].map((item, i) => (
                <div key={item.name} className="flex items-center gap-4">
                  <span className="w-[110px] shrink-0 text-sm text-gray-300 font-medium truncate font-sans">
                    {item.name}
                  </span>
                  <div className="h-3 flex-1 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full animate-width" style={{ backgroundColor: item.color, "--target-width": item.width, animationDelay: item.delay } as any}></div>
                  </div>
                  <span className="w-12 shrink-0 text-right text-sm text-white font-medium font-sans animate-fade-up" style={{ animationDelay: item.delay }}>
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-4xl font-light text-white tracking-tight font-oswald">
              Cost Structure
            </h3>
            <p className="mt-2 text-lg font-light leading-relaxed text-gray-400">
              Only pay for the tools you use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
