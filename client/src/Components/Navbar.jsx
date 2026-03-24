import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const RESUME_LINK = import.meta.env.VITE_RESUME_URL;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isDarkTheme = location.pathname === "/" || location.pathname === "/contact" || location.pathname === "/admin";

  const textColorClass = isDarkTheme ? "text-white" : "text-black";

  return (
    <nav className={`font-mono text-sm tracking-wide w-full z-50 fixed top-0 bg-transparent backdrop-blur-sm transition-all duration-300 ${textColorClass}`}>
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 h-16">

        <div className="flex items-center gap-x-6 sm:gap-x-12">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <span className="text-yellow-400 text-xs">●</span>
            <Link
              to="/"
              className={`font-semibold ${isDarkTheme ? "text-white" : "text-black"} hover:text-yellow-300 transition`}
            >
              JAISAL M
            </Link>
          </div>

   
          <div className="hidden md:flex gap-x-6 ml-12 md:ml-20 lg:ml-40">
            <Link to="/projects" className="hover:text-yellow-300 transition">
              SELECTED WORKS
            </Link>
            <Link to="/about" className="hover:text-yellow-300 transition">
              ABOUT ME
            </Link>
           
          </div>
        </div>

       
        <div className="hidden md:flex gap-x-4">
          <a
            href={RESUME_LINK}
            className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-yellow-300 hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <ArrowUpRight size={14} />
          </a>
          <Link
            to="/contact"
            className={`flex ${isHome ? "bg-white text-black" : "bg-gray-500 text-white"} items-center gap-1  hover:text-black   px-4 py-2 rounded-full hover:bg-yellow-300 transition`}
          >
            WORK WITH ME <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="md:hidden">
          <a
            href={RESUME_LINK}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs transition ${textColorClass} hover:bg-yellow-300 hover:text-black`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden absolute top-16 left-0 w-full h-[calc(100vh-4rem)] backdrop-blur-3xl px-6 py-12 flex flex-col items-center gap-y-8 z-40 ${isDarkTheme ? "bg-black/95 text-white" : "bg-white/95 text-black"}`}>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-xl font-medium tracking-widest hover:text-yellow-400 transition-colors">
            SELECTED WORKS
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-xl font-medium tracking-widest hover:text-yellow-400 transition-colors">
            ABOUT ME
          </Link>
          <a
            href={RESUME_LINK}
            className="text-xl font-medium tracking-widest hover:text-yellow-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            MY RESUME ↗
          </a>
          <Link
            to="/contact"
            className="text-xl font-medium tracking-widest hover:text-yellow-400 transition-colors mt-auto mb-10 border border-current px-6 py-2 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            WORK WITH ME ↗
          </Link>
        </div>
      )}
    </nav>
  );
}
