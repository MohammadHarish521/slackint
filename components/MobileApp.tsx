import { ArrowRight, Bell, Plus } from "lucide-react";

export default function MobileApp() {
  return (
    <div className="flex flex-col bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl pt-8 px-6 pb-12 md:pr-8 md:pb-16 md:pl-8 gap-10 md:gap-16">
      {/* Hero Section */}
      <div className="flex flex-col overflow-hidden lg:flex-row lg:gap-24 lg:pt-0 lg:pb-0 mt-8 md:mt-12 mb-0 pt-0 md:pt-10 md:pr-10 md:pb-10 md:pl-10 relative gap-10 md:gap-16 items-center justify-between">
        
        {/* Phone Mockup (Left) */}
        <div className="z-10 shrink-0 lg:mx-0 w-full max-w-[340px] mr-auto ml-auto relative">
          <div className="border-[8px] overflow-hidden h-[700px] max-w-[400px] border-[#1a1a1a] ring-white/10 ring-1 rounded-[3rem] mr-auto ml-auto relative shadow-2xl bg-[#050505]">
            <div className="absolute top-0 w-full h-12 px-6 flex justify-between items-center z-20 pt-2">
              <span className="text-[13px] font-semibold text-white tracking-wide font-sans">9:41</span>
              <div className="flex gap-1.5 items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="currentColor" className="text-white"><path d="M14.6 2.4C14.2 2 13.5 2 13.1 2.4L8 7.5 2.9 2.4C2.5 2 1.8 2 1.4 2.4C1 2.8 1 3.5 1.4 3.9L7.3 9.8C7.7 10.2 8.3 10.2 8.7 9.8L14.6 3.9C15 3.5 15 2.8 14.6 2.4Z"></path><path d="M12.4 0.2C12 0.6 12 1.3 12.4 1.7L8 6.1 3.6 1.7C4 1.3 4 0.6 3.6 0.2C3.2 -0.2 2.5 -0.2 2.1 0.2L7.3 5.4C7.7 5.8 8.3 5.8 8.7 5.4L13.9 0.2C13.5 -0.2 12.8 -0.2 12.4 0.2Z"></path><path d="M8 8.2C8.4 8.2 8.7 8.5 8.7 8.9C8.7 9.3 8.4 9.6 8 9.6C7.6 9.6 7.3 9.3 7.3 8.9C7.3 8.5 7.6 8.2 8 8.2Z"></path></svg>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="currentColor" className="text-white"><path d="M15 2H3C1.3 2 0 3.3 0 5V7C0 8.7 1.3 10 3 10H15C16.7 10 18 8.7 18 7V5C18 3.3 16.7 2 15 2ZM3 3H15C16.1 3 17 3.9 17 5V7C17 8.1 16.1 9 15 9H3C1.9 9 1 8.1 1 7V5C1 3.9 1.9 3 3 3Z"></path><path d="M11.5 4H6.5C5.7 4 5 4.7 5 5.5V6.5C5 7.3 5.7 8 6.5 8H11.5C12.3 8 13 7.3 13 6.5V5.5C13 4.7 12.3 4 11.5 4Z"></path></svg>
              </div>
            </div>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 pointer-events-none"></div>

            <div className="flex flex-col bg-[#050505] w-full h-full pt-14 relative overflow-hidden font-sans">
               <div className="px-6 pb-4 flex justify-between items-center shrink-0 z-10">
                 <div>
                   <h1 className="text-2xl font-normal text-white tracking-tight font-oswald">Agent Status</h1>
                   <p className="text-xs text-gray-400 mt-0.5">Online • v1.2.0</p>
                 </div>
                 <button className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white ring-1 ring-white/10 scroll-item scroll-fade-up delay-300">
                   <Bell size={18} />
                 </button>
               </div>
               
               {/* Main Scroll Area */}
               <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24 no-scrollbar z-0" style={{ scrollbarWidth: "none" }}>
                 <div className="border-white/[0.08] overflow-hidden bg-[#121215] border rounded-3xl p-6 relative group">
                   <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
                   <div className="flex justify-between items-start mb-6 relative z-10">
                     <div>
                       <p className="text-xs text-gray-400 font-medium mb-1">Active Threads</p>
                       <h2 className="text-3xl font-light text-white tracking-tight font-oswald">1,248</h2>
                     </div>
                     <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                        <span className="text-[10px] font-semibold text-green-400">+12%</span>
                     </div>
                   </div>
                   <div className="flex gap-3 h-32 relative z-10 items-end justify-between px-1">
                      {/* Bars */}
                      <div className="w-1/6 h-[40%] bg-white/5 rounded-t-md"></div>
                      <div className="w-1/6 h-[60%] bg-white/5 rounded-t-md"></div>
                      <div className="w-1/6 h-[50%] bg-white/5 rounded-t-md"></div>
                      <div className="w-1/6 h-[75%] bg-white/5 rounded-t-md"></div>
                      <div className="w-1/6 h-[100%] bg-indigo-500 rounded-t-md shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                      <div className="w-1/6 h-[65%] bg-white/5 rounded-t-md"></div>
                   </div>
                 </div>

                 {/* Quick Actions */}
                 <div className="grid grid-cols-4 gap-2">
                    {['Logs', 'Deploy', 'Config', 'Reset'].map((action, i) => (
                       <button key={i} className="flex flex-col items-center gap-2 p-3 bg-[#121215] rounded-2xl border border-white/5 hover:bg-[#1A1A1E] transition-colors">
                         <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"><Plus size={18} /></div>
                         <span className="text-[10px] font-medium text-gray-400">{action}</span>
                       </button>
                    ))}
                 </div>
                 
                 {/* Recent Activity */}
                 <div className="bg-[#121215] rounded-3xl p-5 border border-white/[0.08] relative">
                    <div className="flex justify-between items-center mb-5">
                       <h2 className="text-base font-semibold text-white tracking-tight">Recent Queries</h2>
                       <button className="text-xs font-medium text-blue-400 hover:text-blue-300">View all</button>
                    </div>
                    <div className="space-y-4">
                       {/* Query 1 */}
                       <div className="flex items-center justify-between group cursor-pointer">
                          <div className="flex items-center gap-3">
                             <div className="w-9 h-9 rounded-full bg-[#1E1E22] flex items-center justify-center ring-1 ring-white/10 group-hover:ring-orange-500/50 transition-all">
                                <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-[8px] text-white font-semibold">AI</div>
                             </div>
                             <div><h3 className="text-sm font-medium text-white">Setup Issue</h3><p className="text-[10px] text-gray-500">Resolved</p></div>
                          </div>
                          <div className="text-right"><p className="text-sm font-medium text-white">2m ago</p><p className="text-[10px] text-green-400">98% conf</p></div>
                       </div>
                    </div>
                 </div>
               </div>

               {/* Navigation */}
               <div className="w-full z-20 pt-0 px-6 pb-6 absolute bottom-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent pointer-events-none"></div>
                  <div className="relative flex justify-between items-end">
                     <button className="flex flex-col items-center gap-1.5 -mb-2 text-white">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-white/10 ring-4 ring-[#050505] transform -translate-y-2">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </div>
                        <span className="text-[10px] font-semibold tracking-wide">Home</span>
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Text Content (Right) */}
        <div className="flex flex-col md:flex-row md:items-end w-full gap-8 justify-between">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="flex gap-3 gap-x-3 gap-y-3 items-center scroll-item scroll-fade-up">
              <span className="flex items-center justify-center text-[11px] font-medium text-blue-400 font-mono bg-blue-500/10 w-7 h-7 border-blue-500/20 border rounded-lg shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                02
              </span>
              <span className="uppercase text-sm font-medium text-gray-500 tracking-widest font-sans">
                Slack Agent
              </span>
            </div>
            <h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-white font-oswald font-light tracking-tight scroll-item scroll-fade-up delay-100">
              Intelligent Support.
              <span className="text-gray-600 font-oswald font-light tracking-tight ml-2">
                Right in Slack.
              </span>
            </h2>
            <p className="leading-relaxed text-lg font-light text-gray-400 text-left mt-2 scroll-item scroll-fade-up delay-200">
              Integrate the Online Inference Pipeline directly into your workspace. Automate responses and streamline support without leaving Slack.
            </p>
          </div>
          <button className="group flex items-center gap-2 pl-6 pr-5 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-200 font-sans whitespace-nowrap">
            <span className="font-sans">View Demo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-0 gap-4">
        {[
          { title: "Real-time Inference", desc: "Agentic app responding instantly within your Slack workspace." },
          { title: "Seamless Integration", desc: "Works directly where your team communicates, no context switching." },
          { title: "Automated Support", desc: "Replaces human support engineers for handling routine queries." },
          { title: "Production Ready", desc: "Robust online pipeline designed for stability and clear logs." }
        ].map((feature, i) => (
          <div key={i} className={`md:p-12 transition-colors group overflow-hidden z-0 bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl p-6 relative scroll-item scroll-fade-up delay-${i*100}`}>
             <div className="pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C] absolute top-0 right-0 bottom-0 left-0"></div>
             <div className="z-0 opacity-20 rounded-3xl absolute top-0 right-0 bottom-0 left-0" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
             <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>

             <div className="flex gap-6 items-start relative z-20">
               <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
                  <div className="text-gray-300 group-hover:text-white"><Plus /></div>
               </div>
               <div>
                  <h3 className="text-2xl font-medium text-white tracking-tight mb-2">{feature.title}</h3>
                  <p className="text-[15px] leading-relaxed font-light text-gray-400">{feature.desc}</p>
               </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
