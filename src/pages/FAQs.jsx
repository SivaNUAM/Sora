import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data/faqs";

const FAQs = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
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
            Frequently Asked Questions
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
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              Find answers to common questions about our dental services,
              appointments, and procedures. If you don’t see what you’re looking
              for, feel free to contact us.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Search Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-12 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 transition-colors group-focus-within:text-primary-800" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-neutral-900 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent transition-all duration-300 placeholder-neutral-400"
              aria-label="Search FAQs"
            />
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-md border border-neutral-100 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-800 rounded-2xl"
                      aria-expanded={openFaq === faq.id}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-neutral-900 pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {openFaq === faq.id ? (
                          <ChevronUp className="w-6 h-6 text-primary-800 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-neutral-400 flex-shrink-0" />
                        )}
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaq === faq.id && (
                        <motion.div
                          id={`faq-answer-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 md:px-8">
                            <p className="text-neutral-600 leading-relaxed text-base md:text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <p className="text-lg text-neutral-600">
                  No FAQs found matching your search. Try a different search term
                  or contact us directly.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              We're here to help! Contact our team for personalized answers to
              your specific questions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="bg-neutral-50 rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Contact Us
                </h3>
                <p className="text-neutral-600 mb-6">
                  Call or email us for immediate assistance with your questions.
                </p>
                <div className="space-y-3 text-left">
                  <p className="text-neutral-700">
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                  <p className="text-neutral-700">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:info@soradental.com"
                      className="text-primary-800 hover:underline"
                    >
                      info@soradental.com
                    </a>
                  </p>
                  <p className="text-neutral-700">
                    <strong>Hours:</strong> Mon-Fri: 8AM-6PM | Sat: 9AM-2PM
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="bg-neutral-50 rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Book Appointment
                </h3>
                <p className="text-neutral-600 mb-6">
                  Schedule a consultation to discuss your dental needs in person.
                </p>
                <a
                  href="/appointments"
                  className="inline-block bg-primary-800 text-white font-medium py-3 px-6 rounded-xl hover:bg-primary-900 transition-colors duration-200"
                >
                  Schedule Consultation
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-16 bg-primary-800"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Don't let questions hold you back from achieving your best smile.
            Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <motion.a
              href="/appointments"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-800 font-medium py-3 px-8 rounded-xl hover:bg-neutral-100 transition-colors duration-200"
            >
              Book Appointment
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-black font-medium py-3 px-8 rounded-xl hover:bg-white hover:text-primary-800 transition-colors duration-200"
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FAQs;