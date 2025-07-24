import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
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
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Find answers to common questions about our dental services,
              appointments, and procedures. If you don't see what you're looking
              for, feel free to contact us.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl shadow-sm border border-neutral-100"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors rounded-2xl"
                    >
                      <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                        {faq.question}
                      </h3>
                      {openFaq === faq.id ? (
                        <ChevronUp className="w-6 h-6 text-primary-800 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-neutral-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === faq.id && (
                      <div className="px-8 pb-6">
                        <p className="text-neutral-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-neutral-600">
                  No FAQs found matching your search. Try a different search
                  term or contact us directly.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              We're here to help! Contact our team for personalized answers to
              your specific questions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Contact Us
                </h3>
                <p className="text-neutral-600 mb-6">
                  Call or email us for immediate assistance with your questions.
                </p>
                <div className="space-y-3">
                  <p className="text-neutral-700">
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                  <p className="text-neutral-700">
                    <strong>Email:</strong> info@soradental.com
                  </p>
                  <p className="text-neutral-700">
                    <strong>Hours:</strong> Mon-Fri: 8AM-6PM | Sat: 9AM-2PM
                  </p>
                </div>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Book Appointment
                </h3>
                <p className="text-neutral-600 mb-6">
                  Schedule a consultation to discuss your dental needs in
                  person.
                </p>
                <a href="/appointments" className="btn-primary inline-block">
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Don't let questions hold you back from achieving your best smile.
            Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointments"
              className="bg-white text-primary-800 hover:bg-neutral-100 font-medium py-3 px-8 rounded-xl transition-colors duration-200"
            >
              Book Appointment
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-medium py-3 px-8 rounded-xl transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
