import { useState,useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      const [isSubmitted, setIsSubmitted] = useState(false);

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      };

      const contactInfo = [
        {
          icon: Phone,
          title: "Phone",
          details: ["(555) 123-4567", "(555) 123-4568 (Emergency)"],
          action: "tel:(555) 123-4567",
        },
        {
          icon: Mail,
          title: "Email",
          details: ["info@soradental.com", "appointments@soradental.com"],
          action: "mailto:info@soradental.com",
        },
        {
          icon: MapPin,
          title: "Address",
          details: ["123 Dental Street", "City, State 12345"],
          action: "https://maps.google.com",
        },
        {
          icon: Clock,
          title: "Hours",
          details: ["Mon-Fri: 8AM-6PM", "Sat: 9AM-2PM", "Sun: Emergency Only"],
          action: null,
        },
      ];

      // Animation variants
      const sectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, type: "spring", stiffness: 80, damping: 20 },
        },
      };

      const cardVariants = {
        hidden: { opacity: 0, scale: 0.85, rotateX: 15 },
        visible: (i) => ({
          opacity: 1,
          scale: 1,
          rotateX: 0,
          transition: { duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 100 },
        }),
      };

      const inputVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: (i) => ({
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
        }),
      };

      const buttonVariants = {
        hover: { scale: 1.05, boxShadow: "0px 8px 24px rgba(59, 130, 246, 0.4)", rotate: 2 },
        tap: { scale: 0.95, rotate: -2 },
      };

      return (
        <div>
          {/* Hero Section */}

        <motion.section
        className="bg-gradient-to-b from-maroon-900 to-gray-800 py-20"
        // variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
           Contact Us
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Experience top-quality dental care with our expert team. Book your visit today with ease and convenience.
          </motion.p>
        </div>
      </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="relative bg-gradient-to-br from-primary-100 to-white py-24 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent"
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, type: "spring" }}
              >
                <h1 className="text-5xl lg:text-6xl font-extrabold text-neutral-900 mb-6 tracking-tight">
                  Contact Us
                </h1>
                <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed">
                  We're here to help! Reach out for appointments, questions, or dental concerns. Our friendly team is ready to assist you.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Contact Info */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-20 bg-white"
          >
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center space-y-4 p-6 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <motion.div
                      className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <info.icon className="w-8 h-8 text-primary-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-neutral-900">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-neutral-600 text-sm">{detail}</p>
                      ))}
                    </div>
                    {info.action && (
                      <motion.a
                        href={info.action}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="inline-block text-primary-600 hover:text-primary-800 font-semibold text-sm transition-colors duration-200"
                      >
                        Contact Now
                      </motion.a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Contact Form & Map */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-20 bg-neutral-50"
          >
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                  variants={cardVariants}
                  className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
                >
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                    Send Us a Message
                  </h2>
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.7, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
                        className="text-center py-12"
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
                        >
                          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-neutral-600">
                          Thank you for your message. We'll get back to you within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          {[
                            { id: "name", label: "Full Name *", type: "text", placeholder: "Your full name" },
                            { id: "email", label: "Email *", type: "email", placeholder: "your.email@example.com" },
                          ].map((field, index) => (
                            <motion.div
                              key={field.id}
                              custom={index}
                              variants={inputVariants}
                              initial="hidden"
                              animate="visible"
                              className="relative"
                            >
                              <label
                                htmlFor={field.id}
                                className="block text-sm font-medium text-neutral-600 mb-2 transition-all duration-300"
                              >
                                {field.label}
                              </label>
                              <input
                                type={field.type}
                                id={field.id}
                                name={field.id}
                                value={formData[field.id]}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                                placeholder={field.placeholder}
                              />
                            </motion.div>
                          ))}
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          {[
                            { id: "phone", label: "Phone Number", type: "tel", placeholder: "(555) 123-4567" },
                            { id: "subject", label: "Subject *", type: "text", placeholder: "How can we help?" },
                          ].map((field, index) => (
                            <motion.div
                              key={field.id}
                              custom={index + 2}
                              variants={inputVariants}
                              initial="hidden"
                              animate="visible"
                              className="relative"
                            >
                              <label
                                htmlFor={field.id}
                                className="block text-sm font-medium text-neutral-600 mb-2 transition-all duration-300"
                              >
                                {field.label}
                              </label>
                              <input
                                type={field.type}
                                id={field.id}
                                name={field.id}
                                value={formData[field.id]}
                                onChange={handleChange}
                                required={field.id === "subject"}
                                className="w-full px-4 py-3 bg-white/50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                                placeholder={field.placeholder}
                              />
                            </motion.div>
                          ))}
                        </div>
                        <motion.div
                          custom={4}
                          variants={inputVariants}
                          initial="hidden"
                          animate="visible"
                          className="relative"
                        >
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-neutral-600 mb-2 transition-all duration-300"
                          >
                            Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full px-4 py-3 bg-white/50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                            placeholder="Tell us about your dental needs..."
                          />
                        </motion.div>
                        <motion.button
                          type="submit"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          className="w-full flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-800 text-white py-3 rounded-xl hover:from-primary-800 hover:to-primary-600 transition-all duration-300"
                        >
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Map */}
                <motion.div
                  variants={cardVariants}
                  className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
                >
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                    Visit Our Office
                  </h2>
                  <div className="bg-neutral-50 rounded-xl h-80 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-100/30 to-neutral-50"
                      initial={{ y: 50 }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                    <div className="text-center relative z-10">
                      <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                      <p className="text-neutral-600 font-semibold">Interactive Map</p>
                      <p className="text-sm text-neutral-600 mt-2">
                        Map integration would go here
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <h3 className="font-bold text-neutral-900">SORA Dental Clinic</h3>
                    <p className="text-neutral-600">123 Dental Street</p>
                    <p className="text-neutral-600">City, State 12345</p>
                    <div className="pt-4">
                      <motion.a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="inline-block text-primary-600 hover:text-primary-800 font-semibold text-sm transition-colors duration-200"
                      >
                        Get Directions →
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Office Hours */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-20 bg-white"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                    Office Hours
                  </h2>
                  <p className="text-xl lg:text-2xl text-neutral-600">
                    We're here when you need us. Emergency care available 24/7.
                  </p>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    variants={cardVariants}
                    className="bg-neutral-50/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-neutral-900 mb-6">
                      Regular Hours
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Monday - Friday</span>
                        <span className="font-semibold text-neutral-900">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Saturday</span>
                        <span className="font-semibold text-neutral-900">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Sunday</span>
                        <span className="font-semibold text-neutral-900">Emergency Only</span>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={cardVariants}
                    className="bg-primary-100/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-neutral-900 mb-6">
                      Emergency Care
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      Dental emergencies don't wait for business hours. We provide 24/7 emergency care for urgent situations.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-neutral-600">
                        <strong>Emergency Phone:</strong> (555) 123-4568
                      </p>
                      <p className="text-sm text-neutral-600">
                        <strong>Available:</strong> 24/7 for emergencies
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
               <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-50 to-white">
   <div className="container-custom text-center">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
     Don't wait to achieve your best smile. Contact us today to schedule your appointment.
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

export default Contact;