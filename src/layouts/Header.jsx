import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Team", href: "/team" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <>
      {/* Top bar */}
      {/* <div className="bg-white py-2 fixed top-0 left-0 right-0 z-40 border-b border-neutral-200">
        <div className="container-custom flex flex-wrap items-center justify-between text-sm text-neutral-800">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>123 Dental Street, City, State 12345</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <Clock className="w-4 h-4" />
            <span>Mon-Fri: 8AM-6PM | Sat: 9AM-2PM</span>
          </div>
        </div>
      </div> */}

      {/* Main header */}
      <header
        className={`fixed top-[-5px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center gap-4 py-3 relative">
          {/* Clinic Name */}
          <Link to="/" className="text-xl font-bold text-neutral-800 hidden lg:block">
            SORA Dental
          </Link>

          {/* Logo centered */}
          <Link
            to="/"
            className="absolute left-1/2 transform -translate-x-1/2 flex items-center"
          >
            <img
              src={logo}
              alt="SORA Dental Logo"
              className="w-12 h-12 object-contain"
            />
          </Link>

          {/* Book Appointment Button */}
          <Link to="/appointments" className="btn-primary ml-auto hidden lg:block">
            Book Appointment
          </Link>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-3 sm:p-4 rounded-xl hover:bg-neutral-100 transition-colors duration-200"
          >
            <Menu className="w-8 h-8 sm:w-10 sm:h-10 text-neutral-700" />
          </button>
        </div>
      </header>

      {/* Right-side menu panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[9999] transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-neutral-200">
          <h2 className="text-lg font-semibold text-neutral-800">Sora Dental</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:bg-neutral-100 rounded-full"
          >
            <X className="w-6 h-6 text-neutral-700" />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col p-6 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? "text-[#800000]"
                  : "text-neutral-700 hover:text-[#800000]"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/appointments"
            onClick={() => setIsMenuOpen(false)}
            className="btn-primary text-center mt-6"
          >
            Book Appointment
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
        />
      )}

      {/* Spacer for fixed header */}
      <div className="h-32 sm:h-36"></div>
    </>
  );
};

export default Header;
