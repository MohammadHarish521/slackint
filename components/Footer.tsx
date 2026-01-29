import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] relative z-10 pt-20 pb-10">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div className="max-w-sm scroll-item scroll-fade-up">
            <a href="#" className="inline-flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-white tracking-tight font-oswald">slackint</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
              slackint delivers intelligent AI support directly in your Slack workspace,
              replacing the need for human support engineers entirely.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
             <a href="https://github.com/karthikponna/slack_integrations/tree/main" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full font-sans">
            <div className="scroll-item scroll-fade-up delay-100">
               <h4 className="text-white font-medium mb-4 font-sans">Project</h4>
               <ul className="space-y-3 text-sm text-gray-400">
                 <li><a href="https://github.com/karthikponna/slack_integrations/tree/main" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors font-sans">Source Code</a></li>
                 <li><a href="#" className="hover:text-blue-400 transition-colors font-sans">Offline Pipeline</a></li>
                 <li><a href="#" className="hover:text-blue-400 transition-colors font-sans">Online Inference</a></li>
                 <li><a href="#" className="hover:text-blue-400 transition-colors font-sans">Changelog</a></li>
               </ul>
            </div>
             <div className="scroll-item scroll-fade-up delay-200">
               <h4 className="text-white font-medium mb-4 font-sans">Resources</h4>
               <ul className="space-y-3 text-sm text-gray-400">
                 <li><a href="#" className="hover:text-blue-400 transition-colors font-sans">Documentation</a></li>
                 <li><a href="#" className="hover:text-blue-400 transition-colors font-sans">Infrastructure</a></li>
                 <li><a href="#" className="hover:text-blue-400 transition-colors font-sans">GitHub Issues</a></li>
                 <li><a href="#" className="hover:text-blue-400 transition-colors font-sans">FAQ</a></li>
               </ul>
            </div>
            <div className="scroll-item scroll-fade-up delay-300">
               <h4 className="text-white font-medium mb-4 font-sans">Participate</h4>
               <ul className="space-y-3 text-sm text-gray-400">
                 <li><a href="#" className="hover:text-blue-400 transition-colors font-sans">Contributing</a></li>
                 <li><a href="#" className="hover:text-blue-400 transition-colors font-sans">Report a Bug</a></li>
                 <li><a href="#" className="hover:text-blue-400 transition-colors font-sans">Request Feature</a></li>
                 <li><a href="#" className="hover:text-blue-400 transition-colors font-sans">Code of Conduct</a></li>
               </ul>
            </div>
             <div className="scroll-item scroll-fade-up delay-500">
               <h4 className="text-white font-medium mb-4 font-sans">Legal</h4>
               <ul className="space-y-3 text-sm text-gray-400">
                 <li><a href="#" className="hover:text-blue-400 transition-colors font-sans">MIT License</a></li>
                 <li><a href="#" className="hover:text-blue-400 transition-colors font-sans">Privacy Policy</a></li>
                 <li><a href="#" className="hover:text-blue-400 transition-colors font-sans">Terms of Use</a></li>
               </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-sans">
            © 2024 slackint. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-gray-400 font-sans">
              All systems normal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
