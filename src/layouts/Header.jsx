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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // triggers after 50px
    };

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
      </motion.div>

      {/* Main Header */}
  <motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
  className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
    isScrolled
      ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
      : "bg-transparent"
  }`}
>
  <div className="container mx-auto px-4 flex items-center gap-4 py-4 relative">
    {/* Clinic Name */}
    <Link
      to="/"
      className={`relative text-2xl font-extrabold tracking-wide hidden lg:block group ${
        isScrolled ? "text-[#800000]" : "text-white"
      }`}
    >
      SORA Dental
      {/* underline animation */}
      <span
        className={`absolute left-0 -bottom-1 w-0 h-0.5 transition-all duration-500 group-hover:w-full ${
          isScrolled ? "bg-[#800000]" : "bg-white"
        }`}
      ></span>
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
          className="w-16 h-16 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
        />
      </Link>
    </motion.div>

    {/* Right-Side Book Appointment Button (Desktop Only) */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        delay: 0.5,
      }}
      className="ml-auto hidden lg:block"
    >
      <Link
        to="/appointments"
        className={`inline-block px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#800000] ${
          isScrolled
            ? "text-[#800000] hover:bg-[#800000] hover:text-white"
            : "text-white hover:bg-[#800000]"
        }`}
      >
        Book Appointment
      </Link>
    </motion.div>

    {/* Menu Toggle */}
    <motion.button
      whileHover={{
        scale: 1.1,
        rotate: 90,
        backgroundColor: "rgba(255,255,255,0.2)",
      }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsMenuOpen(true)}
      className="p-3 rounded-xl transition-colors duration-300 backdrop-blur-sm border border-[#800000]/30"
    >
      <Menu
        className={`w-8 h-8 transition-colors duration-300 ${
          isScrolled ? "text-[#800000]" : "text-white"
        }`}
      />
    </motion.button>
  </div>
</motion.header>



      {/* Right-Side Menu Panel */}
    <AnimatePresence>
  {isMenuOpen && (
    <>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
        className="fixed top-0 right-0 h-full w-72 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-l border-white/20 rounded-l-2xl z-[9999]"
      >
        {/* Header with Logo */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="SORA Dental Logo"
              className="w-10 h-10 object-contain drop-shadow-[0_0_6px_rgba(128,0,0,0.5)]"
            />
            <h2 className="text-lg font-semibold text-white">SORA Dental</h2>
          </div>

          <motion.button
            whileHover={{ rotate: 180, scale: 1.2, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Navigation */}
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
                className={`relative inline-block font-medium text-lg text-white transition-all duration-300 group ${
                  isActive(item.href)
                    ? "text-[#800000]"
                    : "hover:text-[#800000]"
                }`}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#800000] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <Link
              to="/appointments"
              onClick={() => setIsMenuOpen(false)}
              className="inline-block px-6 py-3 bg-[#800000] text-white rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#800000]"
            >
              Book Appointment
            </Link>
          </motion.div>
        </nav>
      </motion.div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsMenuOpen(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
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