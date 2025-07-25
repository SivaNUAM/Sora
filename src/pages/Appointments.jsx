import { useState,useEffect } from "react";
import { Calendar, Clock, User, Phone, Mail, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Appointments = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
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
    console.log("Appointment submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      message: "",
    });
  };

  const services = [
    "General Checkup & Cleaning",
    "Cosmetic Consultation",
    "Emergency Visit",
    "Orthodontic Consultation",
    "Dental Implant Consultation",
    "Teeth Whitening",
    "Root Canal Therapy",
    "Crown & Bridge",
    "Pediatric Visit",
    "Other",
  ];

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.03,
      borderColor: "#9b2c2c",
      boxShadow: "0 0 0 3px rgba(155, 44, 44, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#7f1d1d",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-b from-maroon-900 to-gray-800 py-20"
        variants={sectionVariants}
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
            Schedule Your Dental Appointment
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

      {/* Appointment Form & Sidebar */}
      <motion.section
        className="py-16 bg-gray-100"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Form */}
            <motion.div
              className="md:col-span-3 bg-white rounded-xl p-8 shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <h2 className="text-2xl font-bold text-maroon-900 mb-6">
                Book Your Visit
              </h2>

              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-16 h-16 text-maroon-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Appointment Booked!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for your request. We'll confirm your appointment within 24 hours.
                    </p>
                    <p className="text-sm text-gray-500">
                      Need help? Call us at (555) 123-4567
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          First Name *
                        </label>
                        <motion.input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-maroon-600"
                          placeholder="First name"
                          whileFocus="focus"
                          variants={inputVariants}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Last Name *
                        </label>
                        <motion.input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-maroon-600"
                          placeholder="Last name"
                          whileFocus="focus"
                          variants={inputVariants}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email *
                        </label>
                        <motion.input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-maroon-600"
                          placeholder="your.email@example.com"
                          whileFocus="focus"
                          variants={inputVariants}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number *
                        </label>
                        <motion.input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-maroon-600"
                          placeholder="(555) 123-4567"
                          whileFocus="focus"
                          variants={inputVariants}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                      <div>
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Date *
                        </label>
                        <motion.input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-maroon-600"
                          whileFocus="focus"
                          variants={inputVariants}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="time"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Time *
                        </label>
                        <motion.select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-maroon-600"
                          whileFocus="focus"
                          variants={inputVariants}
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </motion.select>
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Service *
                        </label>
                        <motion.select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-maroon-600"
                          whileFocus="focus"
                          variants={inputVariants}
                        >
                          <option value="">Select service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </motion.select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Additional Information
                      </label>
                      <motion.textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-maroon-600"
                        placeholder="Any special requests or concerns..."
                        whileFocus="focus"
                        variants={inputVariants}
                      />
                    </div>

                    <motion.button
                      type="submit"
                     className="w-full flex items-center justify-center bg-white text-[#800000] border border-[#800000] py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-[#800000] hover:text-white"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Appointment
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-6">
              <motion.div
                className="bg-gray-50 rounded-xl p-6 shadow-sm"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <h3 className="text-lg font-semibold text-maroon-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-maroon-600" />
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Emergency Only</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-maroon-50 rounded-xl p-6 shadow-sm"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-maroon-900 mb-4">
                  Contact Us
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-maroon-600" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-maroon-600" />
                    <span>appointments@soradental.com</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-maroon-900 mb-4">
                  Why Choose Us
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-maroon-600" />
                    Comprehensive dental care
                  </p>
                  <p className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-maroon-600" />
                    Modern, comfortable facility
                  </p>
                  <p className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-maroon-600" />
                    Expert dental team
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
     <motion.section
  className="py-16 bg-white"
  variants={sectionVariants}
  initial="hidden"
  animate="visible"
>
  <div className="container max-w-6xl mx-auto px-4 text-center">
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-red-900 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      Urgent Dental Care?
    </motion.h2>
    <motion.p
      className="text-lg text-red-900 mb-6 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      Contact us immediately for emergency services or any questions.
    </motion.p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <motion.a
        href="tel:(555) 123-4567"
        className="bg-red-900 text-white font-medium py-3 px-6 rounded-lg hover:bg-red-900"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Call Now
      </motion.a>
      <motion.a
        href="/contact"
        className="bg-red-900 text-white font-medium py-3 px-6 rounded-lg hover:bg-red-900"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Contact Us
      </motion.a>
    </div>
  </div>
</motion.section>

    </div>
  );
};

export default Appointments;