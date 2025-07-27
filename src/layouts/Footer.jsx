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
import logo from '../assets/logo.png'
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      {/* Main footer content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
           <div className="flex items-center space-x-2 mb-6">
         <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-transparent overflow-hidden">
        <img
          src={logo}
          alt="SORA Logo"
          className="w-full h-full object-contain"
        />
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
  {[
    { Icon: Facebook, link: "https://www.facebook.com/people/Sora-Dental/100068991856553/#" },
    { Icon: Instagram, link: "https://www.instagram.com/soradental_hyd/?igsh=YTFlZWh0b2lrOWpl#" },
    // { Icon: Twitter, link: "#" },
    { Icon: Linkedin, link: "https://www.linkedin.com/in/dr-sonica-raju-355270178/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" },
  ].map(({ Icon, link }, i) => (
    <a
      key={i}
      href={link}
      className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#800000] text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(128,0,0,0.6)] hover:scale-110"
    >
      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-125" />
    </a>
  ))}
</div>

          </div>

          {/* Quick Links */}
        <div>
  <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
  <ul className="space-y-3">
    {[
      { to: "/", label: "Home" },
      { to: "/about", label: "About Us" },
      { to: "/services", label: "Services" },
      { to: "/team", label: "Our Team" },
      { to: "/faqs", label: "FAQs" },
      { to: "/contact", label: "Contact" },
    ].map(({ to, label }, i) => (
      <li key={i} className="transition-transform duration-300 hover:-translate-y-1">
        <Link
          to={to}
          className="text-neutral-300 hover:text-[#800000] transition-colors"
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
</div>

{/* Services */}
<div>
  <h4 className="text-lg font-semibold mb-6">Our Services</h4>
  <ul className="space-y-3">
    {[
      "General Dentistry",
      "Cosmetic Dentistry",
      "Orthodontics",
      "Dental Implants",
      "Emergency Care",
      "Pediatric Dentistry",
    ].map((service, i) => (
      <li key={i} className="transition-transform duration-300 hover:-translate-y-1">
        <Link
          to="/services"
          className="text-neutral-300 hover:text-[#800000] transition-colors"
        >
          {service}
        </Link>
      </li>
    ))}
  </ul>
</div>


          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#800000] mt-0.5" />
                <div>
                  <p className="text-neutral-300">Third Floor, Plot no 8-1 & 8-2, Khajaguda - Nanakramguda Rd, Prashant Hills, Rai Durg</p>
                  <p className="text-neutral-300">Hyderabad, Telangana 500032</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#800000]" />
                <span className="text-neutral-300">+91 093987 20680</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#800000]" />
                <span className="text-neutral-300">info@soradental.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#800000] mt-0.5" />
                <div>
                  <p className="text-neutral-300">Mon-Sat: 10AM-8PM</p>
                  <p className="text-neutral-300">Sun: 10AM-2PM</p>
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
