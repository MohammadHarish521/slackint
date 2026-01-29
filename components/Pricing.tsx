export default function Pricing() {
  return (
    <div className="flex flex-col bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl mt-24 mb-24 pt-8 pr-8 pb-16 pl-8 gap-x-16 gap-y-16">
       {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full">
        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="flex gap-3 items-center scroll-item scroll-fade-up">
            <span className="flex items-center justify-center text-[11px] font-medium text-blue-400 font-mono bg-blue-500/10 w-7 h-7 border-blue-500/20 border rounded-lg shadow-[0_0_10px_rgba(59,130,246,0.2)]">
              04
            </span>
            <span className="uppercase text-sm font-medium text-gray-500 tracking-widest font-sans">
              COST STRUCTURE
            </span>
          </div>
          <h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-white font-oswald font-light tracking-tight scroll-item scroll-fade-up delay-100">
            Open Source &
            <span className="text-gray-600 font-oswald font-light tracking-tight ml-2">
              Free forever.
            </span>
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-xl leading-relaxed font-sans scroll-item scroll-fade-up delay-200">
            The project is open-source and free! You'll only need &lt;$0.5 for tools like OpenAI's API if you run the code.
          </p>
        </div>

        <div className="z-10 flex flex-col items-center md:items-end relative">
          <div className="flex bg-[#111111] border-white/10 border rounded-full p-1.5 backdrop-blur-sm items-center">
            <button className="transition-transform hover:scale-[1.02] text-sm font-semibold text-black bg-[#ffffff] rounded-full px-8 py-2.5 shadow-[0_0_15px_rgba(14,165,233,0.3)] font-sans">
              Open Source
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Card Section */}
      <section className="flex flex-col overflow-hidden pt-0 pr-0 pb-0 pl-0 relative gap-x-12 gap-y-12 items-center justify-center">
        {/* Background Glow Effects */}
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 gap-x-12 gap-y-12 scroll-item scroll-blur-in delay-300">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>
          <div className="w-px bg-gradient-to-b from-transparent via-purple-500/10 to-transparent opacity-50 absolute top-0 bottom-0 left-1/4 gap-x-12 gap-y-12"></div>
          <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/10 to-transparent opacity-50"></div>
          <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-purple-900/10 to-transparent opacity-30"></div>
        </div>

        {/* Pricing Card */}
        <div className="overflow-hidden z-10 group bg-[#0A0A0C] w-full max-w-6xl border-white/10 border rounded-[3rem] relative shadow-2xl gap-x-12 gap-y-12">
          {/* Card Background */}
          <div className="pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C] absolute top-0 right-0 bottom-0 left-0 gap-x-12 gap-y-12"></div>
          {/* Stars Effect */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(circle, black 40%, transparent 100%)", WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 100%)" }}></div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:p-16 min-h-[450px] pt-10 pr-10 pb-10 pl-10 relative gap-x-12 gap-y-12">
            {/* Left Column */}
            <div className="flex flex-col gap-8 h-full gap-x-12 gap-y-12 items-start justify-between">
              {/* Icon & Title */}
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1s.25 2.25 0 4z"></path>
                  <path d="M15 13v5s3.03-.55 4-2c1.1-1.62 1-4 1-4s-2.25-.25-4 0z"></path>
                </svg>
                <span className="text-3xl font-light text-white tracking-tight font-oswald">
                  Community Edition
                </span>
              </div>

              {/* Price */}
              <div className="mt-auto gap-x-12 gap-y-12">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-9xl font-light text-white tracking-tight font-oswald">
                    Free
                  </span>
                </div>
                <p className="text-gray-400 text-lg font-light font-sans">
                  Best for developers and hobbyists
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between h-full gap-10">
              {/* Features List */}
              <ul className="space-y-6 pt-2">
                {[
                  "Full Source Code Access",
                  "Automated Offline Pipeline",
                  "Live Inference Agent",
                  "Minimal API Usage Cost"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white text-xl font-light font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="flex justify-start md:justify-end mt-auto pt-4">
                <a href="https://github.com/karthikponna/slack_integrations/tree/main" target="_blank" rel="noopener noreferrer" className="sm:w-auto hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.6),inset_0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all duration-300 flex group text-base font-medium text-white bg-black/60 w-full border-blue-500 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_0_20px_rgba(59,130,246,0.5),inset_0_0_10px_rgba(59,130,246,0.2)] gap-x-2 gap-y-2 items-center justify-center font-sans">
                  Deploy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
