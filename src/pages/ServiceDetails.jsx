import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { servicesData } from "../data/servicesData";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";
import Sticky from "./Sticky";
export default function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxImg, setLightboxImg] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);

  const service = servicesData
    .flatMap((category) => category.services)
    .find((service) => service.id.toString() === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-700 bg-gradient-to-br from-gray-100 to-gray-200">
        Service not found.
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 20 
      }
    }
  };

  return (
    <motion.div 
     id="why-choose-section" 
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-16 px-6 md:px-16 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
     <Sticky />
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-6xl w-full overflow-hidden border border-gray-100"
      >
        {/* Service Image */}
        <motion.div 
          variants={itemVariants} 
          className="relative w-full h-72 md:h-96 overflow-hidden"
        >
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
        
        {/* Text Content */}
        <div  className="p-8 md:p-16">
         <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#800000] via-gray-600 to-gray-900 drop-shadow-md"
            >
             {service.title}
        </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed max-w-3xl"
          >
            {service.description}
          </motion.p>

          {/* Features */}
          <motion.h2 
            variants={itemVariants} 
            className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800"
          >
            Features
          </motion.h2>
          <motion.ul 
            variants={containerVariants} 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {service.features.map((feature, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03, backgroundColor: "#f8fafc" }}
                className="bg-white rounded-2xl shadow-md p-6 text-gray-700 hover:shadow-xl transition-all duration-300 flex items-start gap-3"
              >
                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Advanced Details Section */}
          {service.details && (
            <div className="space-y-10 mb-12">
              <motion.h2 
                variants={itemVariants} 
                className="text-2xl md:text-3xl font-bold text-gray-900"
              >
                {service.details.heading}
              </motion.h2>
              {service.details.betweenImage && (
                <motion.img
                  src={service.details.betweenImage}
                  alt="Detail"
                  className="w-full rounded-2xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )}
              {service.details.subSections?.map((sub, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{sub.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{sub.description}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Image Gallery */}
          {service.galleryImages && service.galleryImages.length > 0 && (
            <div className="mb-12">
              <motion.h2 
                variants={itemVariants} 
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                Gallery
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {service.galleryImages.map((img, idx) => (
                  <motion.img
                    key={idx}
                    src={img}
                    alt={`Gallery ${idx}`}
                    className="w-full h-48 object-cover rounded-xl cursor-pointer shadow-md hover:shadow-lg"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setLightboxImg(img)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {service.faq && service.faq.length > 0 && (
            <div>
              <motion.h2 
                variants={itemVariants} 
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                Frequently Asked Questions
              </motion.h2>
              <div className="space-y-4">
                {service.faq.map((faqItem, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all duration-300"
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800 text-lg">{faqItem.question}</h3>
                      <motion.svg
                        className="w-5 h-5 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: openFAQ === idx ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>
                    {openFAQ === idx && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="text-gray-600 mt-3 leading-relaxed"
                      >
                        {faqItem.answer}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
      {/* Main Content */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl max-w-5xl w-full overflow-hidden mb-12"
>
  {/* ... all your service details ... */}
</motion.div>

{/* Back Button at Bottom */}
<motion.button
  whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
  whileTap={{ scale: 0.9 }}
  onClick={() => navigate(-1)}
  className="mt-6 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
>
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
  </svg>
  Back
</motion.button>

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

      {/* Lightbox Modal */}
      {lightboxImg && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxImg(null)}
        >
          <motion.img
            src={lightboxImg}
            alt="Full view"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          />
          <motion.button
            className="absolute top-4 right-4 text-white bg-gray-800/80 rounded-full p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setLightboxImg(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
  
}