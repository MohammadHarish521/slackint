import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] relative z-10 py-12">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-xl font-bold text-white tracking-tight font-oswald">slackint</h3>
            <p className="text-sm text-gray-500 font-sans">
              Intelligent AI support for your workspace.
            </p>
          </div>

          <div className="flex items-center gap-6">
              <a href="https://github.com/karthikponna/slack_integrations/tree/main" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://x.com/karthikponna19" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>

          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
            <p className="text-xs text-gray-600 font-sans">
                © 2024 slackint. Open Source.
            </p>
            
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                <span className="text-xs text-gray-500 font-mono">All systems normal</span>
            </div>
        </div>
      </div>
    </footer>
  );
}
