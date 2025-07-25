import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { servicesData } from "../data/servicesData";
import logo from "../assets/logo.png";
import Sticky from "../pages/Sticky"; // Adjust the import path as necessary
const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 active:scale-100 transition-all duration-500 overflow-visible"
    >
      <div  className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
    
      </div>
      <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-0 flex-grow">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-maroon mb-3">{service.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
          <ul className="space-y-2 mb-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-4 h-4 text-maroon-light mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
          <div>
            <span className="text-sm font-semibold text-maroon">{service.price}</span>
            <span className="text-xs sm:text-sm text-gray-500 ml-2">{service.duration}</span>
          </div>
          <Link
            to={`/services/${service.id}`}
            className="group inline-flex items-center bg-white text-[#800000] border-2 border-[#800000] px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-[#800000] hover:text-white active:bg-[#800000] active:text-white hover:shadow-lg w-full sm:w-auto text-center"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceCategory = ({ category, headerImage, services }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-12">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full text-left relative h-24 sm:h-28 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={headerImage}
          alt={`${category} header`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-maroon/60 flex items-center justify-between px-4 sm:px-8">
         <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#800000]">{category}</h2>
          <svg
            className={`w-6 h-6 sm:w-7 sm:h-7 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""} text-white`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </motion.button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8">
          {services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white-custom min-h-screen" >
      {/* Intro Section with Header Image */}
      <section id="why-choose-section" className="relative bg-gradient-to-r from-maroon to-maroon-dark">
        <Sticky />
        <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
         <img
        src={logo}
        alt="Dental Care Banner"
       className="w-32 h-32 object-contain mx-auto"
     loading="lazy"
      />

          <div className="absolute inset-0 bg-maroon/60 flex items-center justify-center">
            <div className="text-center px-4 sm:px-6 md:px-8">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-4 leading-tight"
              >
                Our Dental Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl text-white-custom max-w-3xl mx-auto"
              >
                Discover our comprehensive dental care services, designed to provide you with a healthy and confident smile through expert treatment and personalized care.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {servicesData.map((category, index) => (
            <ServiceCategory
              key={index}
              category={category.category}
              headerImage={category.headerImage}
              services={category.services}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-maroon mb-6"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12"
          >
            Our commitment to excellence ensures you receive the highest quality dental care in a comfortable and welcoming environment.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              { icon: "🏆", title: "Expert Care", text: "Our skilled team uses advanced techniques for exceptional results." },
              { icon: "💝", title: "Patient Comfort", text: "We create a relaxing environment with a compassionate approach." },
              { icon: "🔬", title: "Advanced Technology", text: "Cutting-edge equipment for precise and comfortable treatments." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl active:shadow-md transition-shadow duration-500"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-maroon-light rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl text-white">{item.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-maroon mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-50 to-white">
  <div className="container-custom text-center">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
      Ready to Experience Exceptional Dental Care?
    </h2>
    <p className="text-base sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
      Join our family of satisfied patients and discover the SORA difference.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/appointments"
        className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-white text-[#800000] border border-[#800000] rounded-full font-semibold text-sm sm:text-base 
                   transition-all duration-500 ease-in-out 
                   hover:bg-[#800000] hover:text-white hover:shadow-[0_0_15px_rgba(128,0,0,0.6)] hover:scale-105"
      >
        Schedule Your Visit
      </a>
      <a
        href="/contact"
        className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-white text-[#800000] border border-[#800000] rounded-full font-semibold text-sm sm:text-base 
                   transition-all duration-500 ease-in-out 
                   hover:bg-[#800000] hover:text-white hover:shadow-[0_0_15px_rgba(128,0,0,0.6)] hover:scale-105"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>

    </div>
  );
};

export default Services;