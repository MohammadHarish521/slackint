import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex z-50 w-full pt-6 pr-4 pl-4 fixed top-0 left-0 right-0 items-center justify-center">
      <div className="flex bg-black/90 backdrop-blur-md w-full max-w-5xl border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-6 relative shadow-2xl items-center justify-between scroll-item scroll-fade-up">
        {/* Logo */}
        {/* Logo */}
        <a href="#" className="inline-flex items-center gap-2">
          <span className="text-xl font-bold text-white tracking-tight font-oswald">slackint</span>
        </a>

        {/* Centered Links */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {["Platform", "Solutions", "Pricing", "Developers", "Company"].map((item) => (
             <a key={item} href="#" className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors font-sans tracking-wide">
               {item}
             </a>
          ))}
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Trigger */}
          <button className="md:hidden p-2 text-white">
            <Menu size={24} />
          </button>

          {/* Button */}
          <a href="#" className="hidden md:block bg-white text-black hover:bg-gray-200 transition-colors px-6 py-2.5 rounded-full text-sm font-semibold tracking-tight font-sans">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
