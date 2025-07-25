import { Link } from "react-router-dom";
import { useRef, useEffect,useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { servicesData } from "../data/servicesData";
import pedia from '../assets/images/pedia.png'
import {motion,useInView} from "framer-motion"
  const ServiceCard = ({ service, index }) => {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true, margin: "-50px" });

      return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500"
        >
          <div className="relative w-full h-56 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="p-6 flex flex-col justify-between h-[320px]">
            <div>
              <h3 className="text-xl font-serif font-bold text-maroon mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-maroon-light mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm font-semibold text-maroon">{service.price}</span>
                <span className="text-sm text-gray-500 ml-2">{service.duration}</span>
              </div>
              <Link
                to={`/services/${service.id}`}
                  className="group inline-flex items-center bg-white text-[#800000] border-2 border-[#800000] px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#800000] hover:text-white hover:shadow-lg"

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
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
            className="w-full text-left relative h-28 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={headerImage}
              alt={`${category} header`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-maroon/60 flex items-center justify-between px-8">
              <h2 className="text-3xl font-serif font-bold text-white">{category}</h2>
              <svg
                className={`w-7 h-7 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-white`}
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
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
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
        <div className="font-sans bg-white-custom min-h-screen">
          {/* Intro Section with Header Image */}
          <section className="relative bg-gradient-to-r from-maroon to-maroon-dark">
            <div className="relative w-full h-[400px] overflow-hidden">
              {/* <img
                src={pedia}
                alt="Dental Care Banner"
                className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 bg-maroon/60 flex items-center justify-center">
                <div className="text-center px-6">
                  <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-6xl font-serif font-bold text-white mb-4"
                  >
                    Our Dental Services
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl text-white-custom max-w-3xl mx-auto"
                  >
                    Discover our comprehensive dental care services, designed to provide you with a healthy and confident smile through expert treatment and personalized care.
                  </motion.p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
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
          <section className="py-20 bg-white-custom">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl font-serif font-bold text-maroon mb-6"
              >
                Why Choose Us
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
              >
                Our commitment to excellence ensures you receive the highest quality dental care in a comfortable and welcoming environment.
              </motion.p>
              <div className="grid md:grid-cols-3 gap-10">
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
                    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-500"
                  >
                    <div className="w-14 h-14 bg-maroon-light rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl text-white">{item.icon}</span>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-maroon mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
<section className="py-20 bg-white text-[#800000]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl font-serif font-bold mb-6"
    >
      Transform Your Smile Today
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="text-lg mb-8 max-w-xl mx-auto"
    >
      Book a consultation to start your journey toward a healthier, more confident smile.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      {/* Button 1 */}
      <Link
        to="/appointments"
        className="bg-white text-[#800000] font-semibold py-3 px-8 rounded-full border-2 border-[#800000] transition-all duration-300 hover:bg-[#800000] hover:text-white"
      >
        Book Consultation
      </Link>
      {/* Button 2 */}
      <Link
        to="/contact"
        className="bg-white text-[#800000] font-semibold py-3 px-8 rounded-full border-2 border-[#800000] transition-all duration-300 hover:bg-[#800000] hover:text-white"
      >
        Contact Us
      </Link>
    </motion.div>
  </div>
</section>


        </div>
      );
    };
export default Services;
