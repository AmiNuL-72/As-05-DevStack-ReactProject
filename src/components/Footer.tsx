import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Top Footer Content */}
        <div className="grid grid-cols-12 gap-10 pb-12">
          
          {/* Brand Block */}
          <div className="col-span-6 space-y-4 text-left ">
            <a href="#">
              <img src={Logo} alt="DevStack Logo" className="h-8 w-auto" />
            </a>
            <p className="text-gray-600 text-sm max-w-sm pt-5">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-6 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm text-gray-700 hover:text-gray-900">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-sm text-gray-700 hover:text-gray-900">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm text-gray-700 hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* 3 Link Groups: Product, Company, Legal */}
          <div className="col-span-6 grid grid-cols-3 gap-8 text-left">
            {/* Product */}
            <div>
              <h4 className="text-xs font-bold uppercase text-gray-900 mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Home</a></li>
                <li><a href="#technologies" className="hover:text-gray-900">Technologies</a></li>
                <li><a href="#projects" className="hover:text-gray-900">Projects</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold uppercase text-gray-900 mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#about" className="hover:text-gray-900">About</a></li>
                <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#careers" className="hover:text-gray-900">Careers</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-bold uppercase text-gray-900 mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#privacy" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-gray-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Quick Links */}
        <div className="border-t border-gray-100 pt-8 flex items-center justify-between text-sm text-gray-500">
          <p>&copy; 2026 DevStack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-900">Privacy</a>
            <a href="#terms" className="hover:text-gray-900">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;