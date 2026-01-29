import { Tweet } from 'react-tweet';

export default function TweetEmbed() {
  const timelineEvents = [
    {
      id: "2016568734933275140",
      title: "Launch",
      description: "Project officially launched."
    },
    {
      id: "2016597284201648432",
      title: "Liquidity Locked",
      description: "Locked 40M tokens for security."
    },
    {
      id: "2016605476965011547",
      title: "DEX Paid",
      description: "Payment completed for DEX listing."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full mt-0 mb-24 scroll-item scroll-fade-up relative">
       {/* Timeline Line */}
       <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent hidden md:block"></div>
       <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent md:hidden"></div>

      <div className="w-full max-w-5xl flex flex-col gap-12 relative z-10 px-4 md:px-0">
        {timelineEvents.map((event, index) => (
          <div key={event.id} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
             
             {/* Content Side */}
             <div className="w-full md:w-1/2 flex justify-center md:items-center">
               <div className={`w-full max-w-[500px] bg-[#0A0A0C] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C] opacity-50"></div>
                  <div className="relative z-10 p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white font-oswald tracking-tight">{event.title}</h3>
                      <p className="text-gray-400 text-sm font-sans">{event.description}</p>
                    </div>
                    <div className="flex justify-center theme-dark">
                        <Tweet id={event.id} />
                    </div>
                  </div>
               </div>
             </div>

             {/* Timeline Marker */}
             <div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] z-20 mt-3 md:mt-0">
                <div className="absolute inset-0 w-full h-full bg-blue-400 animate-ping opacity-75 rounded-full"></div>
             </div>
             
             {/* Empty Side for alignment (only for desktop) */}
             <div className="hidden md:block w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
