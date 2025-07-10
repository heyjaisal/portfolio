import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const RESUME_LINK = import.meta.env.VITE_RESUME_URL;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const textColorClass = isHome ? "text-white" : "text-black";

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
              className={`font-semibold ${isHome ? "text-white" : "text-black"} hover:text-yellow-300 transition`}
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
        <div className={`md:hidden absolute top-16 left-0 w-full backdrop-blur-3xl px-4 pb-4 pt-6 space-y-4 z-40 ${isHome ? "bg-black/90 text-white" : "bg-gray-500 text-white"}  `}>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">
            SELECTED WORKS
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">
            ABOUT ME
          </Link>
          
          <a
            href={RESUME_LINK}
            className="block hover:text-yellow-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            MY RESUME ↗
          </a>
          <Link
            to="/contact"
            className=" block hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            WORK WITH ME ↗
          </Link>
        </div>
      )}
    </nav>
  );
}
