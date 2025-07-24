import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Sticky from "../pages/Sticky";
import {
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle,
  Users,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Award,
  Shield,
} from "lucide-react";
import video2 from "../assets/video/video2.mp4";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { news } from "../data/news";

const Home = () => {
  const featuredServices = services.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 8);
  const autoSlideInterval = 5000;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length
    );
  };

  const currentTestimonial = featuredTestimonials[currentIndex];

  return (
    <div>
    //   {/* Hero Section */}
    {/* //   <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
    //     <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 scale-110 transition-transform duration-[25s] ease-in-out hover:scale-100 opacity-70">
    //       <source src={video2} type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>
    //     <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 z-10 animate-pulse-slow"></div>
    //     <div className="container mx-auto relative z-20 text-center px-4 sm:px-6 lg:px-8 animate-slide-up">
    //       <div className="flex justify-center mb-6">
    //         <Sparkles className="w-12 h-12 text-primary-400 animate-spin-slow" />
    //       </div>
    //       <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-300">
    //         Your Smile, Our <span className="animate-glow">Priority</span>
    //       </h1>
    //       <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in-delay">
    //         Experience exceptional dental care in a comfortable, modern environment. 
    //         Our team of experts is dedicated to crafting beautiful, healthy smiles that last.
    //       </p>
    //       <div className="flex flex-col sm:flex-row justify-center gap-6">
    //         <a href="/appointments" className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 text-lg font-bold rounded-full bg-primary-500 text-white hover:bg-primary-600 hover:scale-105 hover:-rotate-1 focus:scale-105 focus:ring-4 focus:ring-primary-300/50 transition-all duration-300 ease-out shadow-2xl hover:shadow-primary-500/60 overflow-hidden" aria-label="Book an appointment">
    //           <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
    //           <span className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-ripple pointer-events-none"></span>
    //           <span className="relative z-10 flex items-center">
    //             Book Appointment
    //             <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
    //           </span>
    //         </a>
    //         <a href="/services" className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 text-lg font-bold rounded-full bg-transparent border-2 border-primary-400 text-primary-300 hover:border-primary-200 hover:text-primary-100 hover:bg-primary-900/20 hover:scale-105 focus:scale-105 focus:ring-4 focus:ring-primary-300/50 transition-all duration-300 ease-out shadow-md hover:shadow-primary-400/40 overflow-hidden" aria-label="View our services">
    //           <span className="absolute inset-0 border-4 border-transparent group-hover:border-primary-300/30 animate-neon-border"></span>
    //           <span className="relative z-10">Our Services</span>
    //         </a>
    //       </div>
    //       <div className="mt-8 opacity-0 animate-fade-in-delay-2">
    //         <p className="text-neutral-400 text-sm sm:text-base">
    //           Questions?{' '}
    //           <a href="/contact" className="underline hover:text-primary-300 transition-colors duration-200">
    //             Contact us today
    //           </a>
    //         </p>
    //       </div>
    //     </div>
    //     <style jsx>{`
    //       @keyframes slide-up { 0% { transform: translateY(60px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
    //       @keyframes fade-in-delay { 0% { opacity: 0; } 60% { opacity: 0; } 100% { opacity: 1; } }
    //       @keyframes fade-in-delay-2 { 0% { opacity: 0; } 80% { opacity: 0; } 100% { opacity: 1; } }
    //       @keyframes glow { 0% { text-shadow: 0 0 8px rgba(255, 255, 255, 0.6); } 50% { text-shadow: 0 0 25px rgba(255, 255, 255, 0.9); } 100% { text-shadow: 0 0 8px rgba(255, 255, 255, 0.6); } }
    //       @keyframes pulse-slow { 0% { opacity: 1; } 50% { opacity: 0.8; } 100% { opacity: 1; } }
    //       @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    //       @keyframes ripple { 0% { transform: scale(0); opacity: 0.5; background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 10%, transparent 10.01%); } 100% { transform: scale(3); opacity: 0; } }
    //       @keyframes neon-border { 0% { border-color: transparent; box-shadow: 0 0 10px rgba(129, 140, 248, 0); } 50% { border-color: rgba(165, 180, 252, 0.5); box-shadow: 0 0 15px rgba(129, 140, 248, 0.5); } 100% { border-color: transparent; box-shadow: 0 0 10px rgba(129, 140, 248, 0); } }
    //       .animate-slide-up { animation: slide-up 0.9s ease-out forwards; }
    //       .animate-fade-in-delay { animation: fade-in-delay 1.4s ease-out forwards; }
    //       .animate-fade-in-delay-2 { animation: fade-in-delay-2 1.8s ease-out forwards; }
    //       .animate-glow { animation: glow 3.5s infinite ease-in-out; }
    //       .animate-pulse-slow { animation: pulse-slow 12s infinite ease-in-out; }
    //       .animate-spin-slow { animation: spin-slow 10s linear infinite; }
    //       .animate-ripple { animation: ripple 0.6s ease-out; }
    //       .animate-neon-border { animation: neon-border 2s infinite ease-in-out; }
    //     `}</style>
    //   </section> */}

          <Sticky />
      {/* Why Choose Us */}
      <section id="why-choose-section" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Why Choose SORA Dental</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">We combine advanced technology with compassionate care to deliver exceptional dental experiences.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div className="text-center space-y-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }}>
              <div className="w-16 h-16 bg-[#f72585]/10 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-[#f72585]" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Expert Team</h3>
              <p className="text-neutral-600">Our experienced dentists and specialists are committed to providing the highest quality care.</p>
            </motion.div>
            <motion.div className="text-center space-y-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="w-16 h-16 bg-[#f72585]/10 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-[#f72585]" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Advanced Technology</h3>
              <p className="text-neutral-600">State-of-the-art equipment and modern techniques for precise, comfortable treatments.</p>
            </motion.div>
            <motion.div className="text-center space-y-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
              <div className="w-16 h-16 bg-[#f72585]/10 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-[#f72585]" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Patient Comfort</h3>
              <p className="text-neutral-600">Relaxing environment with amenities designed to make your visit stress-free and enjoyable.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section  className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Our Services</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">Comprehensive dental care for the whole family, from routine checkups to advanced procedures.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <motion.div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }}>
                <div className="h-48 w-full overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">{service.title}</h3>
                  <p className="text-neutral-600 mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-800" />
                        <span className="text-sm text-neutral-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-800 font-semibold">{service.price}</span>
                    <Link to={`/services/${service.id}`} className="text-primary-800 hover:text-primary-900 font-medium text-sm flex items-center">
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="btn-primary inline-flex items-center justify-center">See All Services</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section  className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">What Our Patients Say</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">Hear from our happy patients about their experiences with SORA Dental.</p>
          </div>
          <div className="relative max-w-xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div key={currentTestimonial.id} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="bg-neutral-50 rounded-2xl p-8 shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic text-base leading-relaxed">"{currentTestimonial.text}"</p>
                <p className="font-semibold text-neutral-900 text-lg">{currentTestimonial.name}</p>
                <p className="text-sm text-neutral-600">{currentTestimonial.service}</p>
              </motion.div>
            </AnimatePresence>
            <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-neutral-100 transition">
              <ChevronLeft className="w-5 h-5 text-neutral-700" />
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-neutral-100 transition">
              <ChevronRight className="w-5 h-5 text-neutral-700" />
            </button>
          </div>
        </div>
      </section>

      {/* News */}
      <section  className="py-20 bg-gradient-to-b from-white via-pink-50 to-white relative">
        <div className="container-custom">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-4">Latest News & Updates</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">Stay informed with the latest happenings, advancements, and special events at SORA Dental.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
                <div className="overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-pink-600 font-medium mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-neutral-600 mb-4">{item.description}</p>
                  <a href={item.link} className="inline-flex items-center text-pink-600 font-semibold hover:underline">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">Schedule your appointment today and take the first step towards a healthier, more beautiful smile.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments" className="bg-white text-primary-800 hover:bg-neutral-100 font-medium py-3 px-8 rounded-xl transition-colors duration-200">Book Appointment</Link>
            <Link to="/contact"  className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-medium py-3 px-8 rounded-xl transition-colors duration-200">Contact Us</Link>
          </div>
        </div>
      </section>
    </div >
    
  );
};

export default Home;