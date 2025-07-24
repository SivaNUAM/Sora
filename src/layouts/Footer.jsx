import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main footer content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#800000] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">SORA</h3>
                <p className="text-sm text-neutral-400">Dental Clinic</p>
              </div>
            </div>
            <p className="text-neutral-300 mb-6">
              Providing exceptional dental care with a focus on patient comfort
              and advanced technology. Your smile is our priority.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-[#f87171] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-[#f87171] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-[#f87171] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-[#f87171] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-neutral-300 hover:text-[#f87171] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-neutral-300 hover:text-[#f87171] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-300 hover:text-[#f87171] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-neutral-300 hover:text-[#f87171] transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-neutral-300 hover:text-[#f87171] transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-300 hover:text-[#f87171] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-neutral-300 hover:text-[#f87171] transition-colors"
                >
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-300 hover:text-[#f87171] transition-colors"
                >
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-300 hover:text-[#f87171] transition-colors"
                >
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-300 hover:text-[#f87171] transition-colors"
                >
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-300 hover:text-[#f87171] transition-colors"
                >
                  Emergency Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-300 hover:text-[#f87171] transition-colors"
                >
                  Pediatric Dentistry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#f87171] mt-0.5" />
                <div>
                  <p className="text-neutral-300">123 Dental Street</p>
                  <p className="text-neutral-300">City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#f87171]" />
                <span className="text-neutral-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#f87171]" />
                <span className="text-neutral-300">info@soradental.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#f87171] mt-0.5" />
                <div>
                  <p className="text-neutral-300">Mon-Fri: 8AM-6PM</p>
                  <p className="text-neutral-300">Sat: 9AM-2PM</p>
                  <p className="text-neutral-300">Sun: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} SORA Dental Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-neutral-400 hover:text-[#f87171] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-neutral-400 hover:text-[#f87171] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-neutral-400 hover:text-[#f87171] transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
