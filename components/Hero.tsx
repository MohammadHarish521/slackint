import { ArrowRight, PlayCircle } from "lucide-react";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <>
      {/* Version Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-pointer group scroll-item scroll-fade-up">
        <span className="bg-blue-500/20 text-blue-400 rounded px-1.5 py-0.5 text-[10px] font-medium tracking-wide font-sans">
          OPEN SOURCE
        </span>
        <span className="text-xs text-gray-300 font-medium group-hover:text-white transition-colors pr-1 font-sans">
          Project V1.0 is live
        </span>
        <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-white transition-colors" />
      </div>

      {/* Headline */}
      <h1 className="text-center text-5xl md:text-7xl leading-[1.1] max-w-5xl mx-auto font-oswald font-light tracking-tight scroll-item scroll-blur-in delay-100">
        Tired of digging through endless
        <span className="text-blue-500 font-oswald font-light tracking-tight ml-3">
           documentation?
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-center text-xl text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed font-light font-sans scroll-item scroll-fade-up delay-200">
        That's exactly what Slack Integrations solves - delivering intelligent AI support directly in your Slack workspace, replacing the need for human support engineers entirely.
      </p>

      {/* CA Address */}
      <div className="mt-6 text-center scroll-item scroll-fade-up delay-200">
          <code className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-md text-gray-400 font-mono">
            CA: FCGLv72C18362Ent3BDNqToracaaM2sYukjTXS7hBAGS
          </code>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 scroll-item scroll-fade-up delay-300">
        <a href="https://github.com/karthikponna/slack_integrations/tree/main" target="_blank" rel="noopener noreferrer" className="group inline-flex overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] focus:outline-none sm:w-auto text-sm font-medium text-white w-full h-[54px] rounded-full pt-4 pr-8 pb-4 pl-8 relative items-center justify-center cursor-pointer" style={{ position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', '--border-radius-before': '9999px' } as any}>
            
          {/* Full Border Beam */}
          <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)]" style={{ animation: "beam-spin 3s linear infinite" }}></div>
            <div className="absolute inset-[1px] rounded-full bg-[#050505]"></div>
          </div>

          {/* Inner Background & Effects */}
          <div className="overflow-hidden bg-[#0A0A0A] rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
            <div className="bg-gradient-to-b from-blue-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
            <div className="opacity-[0.07] mix-blend-plus-lighter absolute top-0 right-0 bottom-0 left-0" style={{ backgroundImage: "repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 8px)", backgroundSize: "24px 100%", animation: "lines-slide 1.5s linear infinite" }}></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/20 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-blue-500/40"></div>
          </div>

          {/* Content */}
          <span className="transition-colors group-hover:text-white uppercase font-semibold text-white/90 tracking-tight z-10 relative font-sans">
            Get Code
          </span>
          <ArrowRight className="w-4 h-4 ml-2 z-10 relative transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <button className="sm:w-auto hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.6),inset_0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all duration-300 flex group text-base font-medium text-white bg-black/60 w-full border-blue-500 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_0_20px_rgba(59,130,246,0.5),inset_0_0_10px_rgba(59,130,246,0.2)] gap-x-2 gap-y-2 items-center justify-center">
          <PlayCircle className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
          Watch Demo
        </button>
      </div>
      
      <HeroVisual />
    </>
  );
}
