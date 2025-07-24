import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock, Menu, X } from "lucide-react";
import logo from '../assets/logo.png'
// Placeholder logo URL (replace with actual logo.png URL or base64 data)


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

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px px 24px rgba(59, 130, 246, 0.4)", rotate: 2 },
    tap: { scale: 0.95, rotate: -2 },
  };

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        {/* <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm text-neutral-600">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary-600" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-primary-600" />
              <span>123 Dental Street, City, State 12345</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <Clock className="w-4 h-4 text-primary-600" />
            <span>Mon-Fri: 8AM-6PM | Sat: 9AM-2PM</span>
          </div>
        </div> */}
      </motion.div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className={`fixed top-[-4px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center gap-4 py-4 relative">
          {/* Clinic Name */}
          <Link to="/" className="text-xl font-bold text-neutral-900 hidden lg:block">
            SORA Dental
          </Link>

          {/* Centered Logo */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="absolute left-1/2 transform -translate-x-1/2 flex items-center"
          >
            <Link to="/">
              <img
                src={logo}
                alt="SORA Dental Logo"
                className="w-12 h-12 object-contain"
              />
            </Link>
          </motion.div>

          {/* Right-Side Book Appointment Button (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.5 }}
            className="ml-auto hidden lg:block"
          >
            <Link
              to="/appointments"
             className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-neutral-200 text-neutral-900 rounded-full font-semibold text-sm sm:text-base hover:bg-red-900 hover:text-white transition duration-300"

            >
              Book Appointment
            </Link>
          </motion.div>

          {/* Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(true)}
            className="p-3 rounded-xl hover:bg-neutral-100 transition-colors duration-200"
          >
            <Menu className="w-8 h-8 text-neutral-700" />
          </motion.button>
        </div>
      </motion.header>

      {/* Right-Side Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
              className="fixed top-0 right-0 h-full w-72 bg-white/90 backdrop-blur-lg shadow-2xl z-[9999]"
            >
              <div className="flex justify-between items-center px-4 py-4 border-b border-neutral-200">
                <h2 className="text-lg font-semibold text-neutral-900"> SORA Dental</h2>
                <motion.button
                  whileHover={{ rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-neutral-100 rounded-full"
                >
                  <X className="w-6 h-6 text-neutral-700" />
                </motion.button>
              </div>
              <nav className="flex flex-col p-6 space-y-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`font-medium text-lg transition-colors duration-200 ${
                        isActive(item.href)
                          ? "text-accent-800"
                          : "text-neutral-600 hover:text-accent-800"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <Link
                    to="/appointments"
                    onClick={() => setIsMenuOpen(false)}
                   className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-neutral-200 text-neutral-900 rounded-full font-semibold text-sm sm:text-base hover:bg-red-900 hover:text-white transition duration-300"
                  >
                    Book Appointment
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            />
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      {/* <div className="h-28 sm:h-32"></div> */}
    </>
  );
};

export default Header;