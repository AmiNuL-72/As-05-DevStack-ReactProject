import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
         <div className="hidden md:flex items-center justify-between h-20">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center">
            <a href="#">
              <img src={Logo} alt="DevStack Logo" className="h-8 w-auto" />
            </a>
          </div>

          {/* Center: Navigation Links */}
          <ul className="flex items-center gap-8 text-[15px] font-medium">
            <li>
              <a href="#" className="text-brand-primary font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#technologies" className="text-gray-600 hover:text-gray-900 transition-colors">
                Technologies
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </li>
          </ul>

          {/* Right: Sign In & Sign Up buttons */}
          <div className="flex items-center gap-6">
            <a href="#signin" className="text-[15px] font-medium text-gray-700 hover:text-gray-900">
              Sign In
            </a>
            <a
              href="#signup"
              className="px-6 py-2 rounded-full text-sm font-medium text-white bg-brand-gradient hover:opacity-95 shadow-sm transition-all"
            >
              Sign Up
            </a>
          </div>
        </div>
        
        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between h-16">
          
          {/*Left: Hamburger Menu*/}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Center: Brand Logo */}
          <a href="#">
            <img src={Logo} alt="DevStack Logo" className="h-6 w-auto" />
          </a>

          {/* Right: Sign In & Sign Up */}
          <div className="flex items-center gap-2">
            <a href="#signin" className="text-xs font-medium text-gray-700 px-1">
              Sign In
            </a>
            <a
              href="#signup"
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-white bg-brand-gradient"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu- Conditional Rendering */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 shadow-md">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="block text-brand-primary font-medium py-1"
          >
            Home
          </a>
          <a
            href="#technologies"
            onClick={() => setIsOpen(false)}
            className="block text-gray-600 hover:text-gray-900 py-1"
          >
            Technologies
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block text-gray-600 hover:text-gray-900 py-1"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-600 hover:text-gray-900 py-1"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-600 hover:text-gray-900 py-1"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;