import { Activity, Bot, Cpu, Database, FileText, Globe, LayoutGrid, Plus, Search, Server, Settings, Terminal } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="flex w-full h-auto md:h-[750px] max-w-5xl mt-16 md:mt-32 mr-auto ml-auto relative items-center justify-center scroll-item scroll-blur-in delay-500 px-4 md:px-0">
      {/* Floating Element: Offline Pipeline (Top Left) */}
      <div className="absolute left-0 lg:left-12 top-20 z-20 hidden md:flex items-center gap-3 p-2.5 pr-4 bg-[#111] border border-white/10 rounded-lg shadow-2xl animate-[bounce_6s_infinite]">
        <div className="w-8 h-8 rounded bg-green-900/30 flex items-center justify-center border border-green-500/20">
          <Database className="w-4 h-4 text-green-400" />
        </div>
        <span className="text-xs font-medium text-gray-400 font-sans">
          Offline Pipeline Active
        </span>
      </div>

      {/* Floating Element: Online Pipeline (Left Middle) */}
      <div className="absolute left-4 lg:-left-4 top-64 z-10 hidden md:flex items-center gap-3 p-2.5 pr-4 bg-[#111] border border-white/10 rounded-lg shadow-2xl animate-[pulse_5s_infinite]">
        <div className="w-8 h-8 rounded bg-blue-900/30 flex items-center justify-center border border-blue-500/20">
          <Globe className="w-4 h-4 text-blue-400" />
        </div>
        <span className="text-xs font-medium text-gray-400 font-sans">
          Online Inference Ready
        </span>
      </div>

      {/* Floating Element: Docker (Left Bottom) */}
      <div className="absolute left-8 lg:left-0 bottom-48 z-20 hidden md:flex items-center gap-3 p-2.5 pr-4 bg-[#111] border border-white/10 rounded-lg shadow-2xl animate-[bounce_8s_infinite]">
        <div className="w-8 h-8 rounded bg-purple-900/30 flex items-center justify-center border border-purple-500/20">
          <Server className="w-4 h-4 text-purple-400" />
        </div>
        <span className="text-xs font-medium text-gray-400 font-sans">
          Docker Infra Running
        </span>
      </div>

      {/* Floating Element: Cost (Top Right) */}
      <div className="absolute right-0 lg:right-24 top-10 z-20 hidden md:flex items-center gap-3 p-2.5 pr-4 bg-[#111] border border-white/10 rounded-lg shadow-2xl animate-[bounce_7s_infinite]">
        <div className="w-8 h-8 rounded bg-teal-900/30 flex items-center justify-center border border-teal-500/20">
          <Cpu className="w-4 h-4 text-teal-400" />
        </div>
        <span className="text-xs font-medium text-gray-400 font-sans">
          OpenAI API &lt; $0.5
        </span>
      </div>

      {/* Floating Element: Agentic (Right Middle) */}
      <div className="absolute right-4 lg:right-0 top-48 z-10 hidden md:flex items-center gap-3 p-2.5 pr-4 bg-[#111] border border-white/10 rounded-lg shadow-2xl animate-[pulse_4s_infinite]">
        <div className="w-8 h-8 rounded bg-pink-900/30 flex items-center justify-center border border-pink-500/20">
          <Bot className="w-4 h-4 text-pink-400" />
        </div>
        <span className="text-xs font-medium text-gray-400 font-sans">
          Agentic Support
        </span>
      </div>

      {/* Floating Element: Terminal (Right Bottom) */}
      <div className="absolute right-8 lg:-right-4 bottom-32 z-10 hidden md:flex items-center gap-3 p-2.5 pr-4 bg-[#111] border border-white/10 rounded-lg shadow-2xl animate-[pulse_6s_infinite]">
        <div className="w-8 h-8 rounded bg-orange-900/30 flex items-center justify-center border border-orange-500/20">
          <Terminal className="w-4 h-4 text-orange-400" />
        </div>
        <span className="text-xs font-medium text-gray-400 font-sans">
          RAG Pipeline
        </span>
      </div>

      {/* Phone Frame */}
      <div className="border-[8px] border-[#222] overflow-hidden flex flex-col h-[700px] md:min-h-[820px] bg-[#050505] w-full max-w-[340px] md:max-w-[380px] md:max-h-[720px] ring-white/10 ring-1 rounded-[2.5rem] md:rounded-[3rem] mr-auto ml-auto relative shadow-2xl">
        {/* Status Bar */}
        <div className="h-12 w-full flex justify-between items-end px-8 pb-2 z-20 bg-[#050505]">
          <span className="text-[13px] font-semibold text-white tracking-widest font-sans">
            12:00
          </span>
          <div className="flex gap-1.5 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="currentColor" className="text-white">
              <path d="M14.6 2.4C14.2 2 13.5 2 13.1 2.4L8 7.5 2.9 2.4C2.5 2 1.8 2 1.4 2.4C1 2.8 1 3.5 1.4 3.9L7.3 9.8C7.7 10.2 8.3 10.2 8.7 9.8L14.6 3.9C15 3.5 15 2.8 14.6 2.4Z"></path>
              <path d="M12.4 0.2C12 0.6 12 1.3 12.4 1.7L8 6.1 3.6 1.7C4 1.3 4 0.6 3.6 0.2C3.2 -0.2 2.5 -0.2 2.1 0.2L7.3 5.4C7.7 5.8 8.3 5.8 8.7 5.4L13.9 0.2C13.5 -0.2 12.8 -0.2 12.4 0.2Z"></path>
              <path d="M8 8.2C8.4 8.2 8.7 8.5 8.7 8.9C8.7 9.3 8.4 9.6 8 9.6C7.6 9.6 7.3 9.3 7.3 8.9C7.3 8.5 7.6 8.2 8 8.2Z"></path>
            </svg>
            <div className="w-6 h-3 rounded-[4px] border border-white/30 relative ml-0.5 p-0.5">
              <div className="h-full bg-white rounded-[2px] w-full"></div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="px-6 pt-2 pb-4 flex items-center justify-between z-10 bg-[#050505]">
          <h1 className="text-2xl text-white font-oswald font-light tracking-tight">
            Integrations
          </h1>
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-gray-300 transition-colors">
              <Search size={22} />
            </button>
            <button className="w-9 h-9 rounded-full bg-[#27272A] flex items-center justify-center text-white hover:bg-[#3F3F46] transition-colors">
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 pb-[120px]" style={{ scrollbarWidth: "none" }}>
          {/* Chart Card */}
          <div className="overflow-visible border-white/[0.08] bg-[#101018] border rounded-[2rem] mb-6 pt-5 pr-5 pb-5 pl-5 relative shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/5 rounded-[2rem] pointer-events-none"></div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <h2 className="text-xl font-semibold text-white tracking-tight font-sans">
                  Query Volume
                </h2>
                <p className="text-[13px] text-gray-400 mt-1 font-medium font-sans">
                  Last 24 hours
                </p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></div>
                <span className="text-[11px] font-medium text-gray-400 font-sans">
                  System Healthy
                </span>
              </div>
            </div>

            <div className="relative h-64 w-full pl-6">
              {/* Y Axis Labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[11px] text-gray-500 font-medium pb-8 pt-2">
                <span className="font-sans">100</span>
                <span className="font-sans">75</span>
                <span className="font-sans">50</span>
                <span className="font-sans">25</span>
                <span className="font-sans">0</span>
              </div>

              {/* Grid Lines */}
              <div className="absolute left-8 right-0 top-0 h-full flex flex-col justify-between pb-8 pt-2 pointer-events-none">
                <div className="w-full h-px border-t border-dashed border-white/10"></div>
                <div className="w-full h-px border-t border-dashed border-white/10"></div>
                <div className="w-full h-px border-t border-dashed border-white/10"></div>
                <div className="w-full h-px border-t border-dashed border-white/10"></div>
                <div className="w-full h-px border-t border-dashed border-white/10"></div>
              </div>

              {/* Bars */}
              <div className="flex justify-between items-end h-full pl-3 pb-8 relative z-10">
                {/* Bar 1 */}
                <div className="flex flex-col items-center gap-3 w-1/4 group cursor-pointer relative h-full justify-end">
                  <div className="w-12 h-[75%] bg-gradient-to-b from-[#4F46E5] to-[#4F46E5]/10 rounded-t-lg relative overflow-hidden group-hover:brightness-110 transition-all origin-bottom opacity-0" style={{ animation: "bar-grow 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.1s" }}>
                    <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/10 to-transparent"></div>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap absolute -bottom-6 font-sans">Support</span>
                </div>

                {/* Bar 2 */}
                <div className="flex flex-col items-center gap-3 w-1/4 group cursor-pointer relative h-full justify-end">
                  <div className="w-12 h-[60%] bg-gradient-to-b from-[#6366F1] to-[#6366F1]/10 rounded-t-lg relative overflow-hidden group-hover:brightness-110 transition-all origin-bottom opacity-0" style={{ animation: "bar-grow 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.2s" }}>
                    <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/10 to-transparent"></div>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap absolute -bottom-6 font-sans">Docs</span>
                </div>

                {/* Bar 3 */}
                <div className="flex flex-col items-center gap-3 w-1/4 group cursor-pointer relative h-full justify-end">
                   <div className="w-12 h-[60%] bg-gradient-to-b from-[#8B5CF6] to-[#8B5CF6]/10 rounded-t-lg relative overflow-hidden group-hover:brightness-110 transition-all origin-bottom opacity-0" style={{ animation: "bar-grow 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.3s" }}>
                    <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/10 to-transparent"></div>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap absolute -bottom-6 font-sans">Admin</span>
                </div>

                {/* Bar 4 */}
                <div className="flex flex-col items-center gap-3 w-1/4 group cursor-pointer relative h-full justify-end">
                   <div className="w-12 h-[70%] bg-gradient-to-b from-[#8B5CF6] to-[#8B5CF6]/10 rounded-t-lg relative overflow-hidden group-hover:brightness-110 transition-all origin-bottom opacity-0" style={{ animation: "bar-grow 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.4s" }}>
                    <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/10 to-transparent"></div>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap absolute -bottom-6 font-sans">General</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-blue-500/10 blur-xl rounded-full pointer-events-none"></div>
          </div>

          {/* Top Content Card */}
          <div className="border-white/[0.08] bg-[#101018] border rounded-[2rem] pt-5 pr-5 pb-5 pl-5 relative">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-lg font-semibold text-white tracking-tight font-sans">
                  Tech Stack
                </h2>
                <p className="text-[13px] text-gray-400 mt-1 font-medium font-sans">
                  Usage
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex gap-4 items-start group cursor-pointer">
                <div className="w-12 h-12 rounded-[10px] overflow-hidden bg-gray-800 shrink-0 shadow-lg ring-1 ring-white/5 flex items-center justify-center">
                   <Bot className="text-blue-400" />
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-white truncate pr-2 font-sans">
                      Agentic Action
                    </h3>
                  </div>
                  <div className="w-full h-1.5 bg-[#2A2A35] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full" style={{ width: "70%", animation: "progress-loop 3s cubic-bezier(0.4, 0, 0.2, 1) infinite", "--target-width": "70%" } as any}></div>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 items-start group cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                 <div className="w-12 h-12 rounded-[10px] overflow-hidden bg-gray-800 shrink-0 shadow-lg ring-1 ring-white/5 flex items-center justify-center">
                    <Database className="text-purple-400" />
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-white truncate pr-2 font-sans">
                      RAG Retrieval
                    </h3>
                  </div>
                   <div className="w-full h-1.5 bg-[#2A2A35] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: "40%", animation: "progress-loop 3s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.2s", "--target-width": "40%" } as any}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full h-[90px] z-30 px-4">
          <div className="absolute inset-x-0 bottom-0 h-[80px] bg-[#12121A]/95 backdrop-blur-2xl border-t border-white/[0.08] rounded-t-[2.5rem]"></div>
          
          <div className="relative h-full flex items-end justify-between px-2 pb-5">
             <button className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors w-16 group mb-1">
              <LayoutGrid className="w-[22px] h-[22px] group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-medium font-sans">Dashboard</span>
            </button>
             <button className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors w-16 group mb-1">
              <FileText className="w-[22px] h-[22px] group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-medium font-sans">Logs</span>
            </button>
             <div className="relative -top-5 flex flex-col items-center justify-center w-16 group cursor-pointer z-50">
               <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-gradient-to-tr from-[#6366F1] to-[#A855F7] flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.5)] border-[5px] border-[#050505] group-hover:scale-105 transition-transform duration-300 ring-1 ring-white/10">
                 <Activity className="w-[22px] h-[22px] text-white" strokeWidth={2.5} />
               </div>
                <span className="text-[10px] font-semibold text-white mt-2 drop-shadow-md font-sans">
                  Monitor
                </span>
             </div>
             <button className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors w-16 group mb-1">
              <Terminal className="w-[22px] h-[22px] group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-medium font-sans">Console</span>
            </button>
             <button className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors w-16 group mb-1">
              <Settings className="w-[22px] h-[22px] group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-medium font-sans">Config</span>
            </button>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-40 hover:bg-white/40 transition-colors"></div>
        </div>
      
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none"></div>
      </div>
    </div>
  );
}
