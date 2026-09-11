import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">
        
        {/* Brand Logo */}
        <div className="flex items-center">
          <a href="#">
            <img src={Logo} alt="DevStack Logo" className="h-8 w-auto" />
          </a>
        </div>

        {/* Navigation Links */}
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

        {/* Sign In & Sign Up buttons */}
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
    </nav>
  );
};

export default Nav;