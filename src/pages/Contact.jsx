import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
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
    // Here you would typically send the form data to your backend
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

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              We're here to help! Get in touch with us for appointments,
              questions, or any dental concerns. Our friendly team is ready to
              assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto">
                  <info.icon className="w-8 h-8 text-primary-800" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-neutral-600">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <a
                    href={info.action}
                    className="inline-block text-primary-800 hover:text-primary-900 font-medium text-sm"
                  >
                    Contact Now
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-neutral-600">
                    Thank you for your message. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-700 mb-2"
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
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                      placeholder="Tell us about your dental needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Visit Our Office
              </h2>
              <div className="bg-neutral-100 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                  <p className="text-neutral-600">Interactive Map</p>
                  <p className="text-sm text-neutral-500 mt-2">
                    Map integration would go here
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="font-semibold text-neutral-900">
                  SORA Dental Clinic
                </h3>
                <p className="text-neutral-600">123 Dental Street</p>
                <p className="text-neutral-600">City, State 12345</p>
                <div className="pt-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-800 hover:text-primary-900 font-medium text-sm"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                Office Hours
              </h2>
              <p className="text-xl text-neutral-600">
                We're here when you need us. Emergency care available 24/7.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                  Regular Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">Monday - Friday</span>
                    <span className="font-semibold text-neutral-900">
                      8:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">Saturday</span>
                    <span className="font-semibold text-neutral-900">
                      9:00 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">Sunday</span>
                    <span className="font-semibold text-neutral-900">
                      Emergency Only
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                  Emergency Care
                </h3>
                <p className="text-neutral-600 mb-4">
                  Dental emergencies don't wait for business hours. We provide
                  24/7 emergency care for urgent situations.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-700">
                    <strong>Emergency Phone:</strong> (555) 123-4568
                  </p>
                  <p className="text-sm text-neutral-700">
                    <strong>Available:</strong> 24/7 for emergencies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Don't wait to achieve your best smile. Contact us today to schedule
            your appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointments"
              className="bg-white text-primary-800 hover:bg-neutral-100 font-medium py-3 px-8 rounded-xl transition-colors duration-200"
            >
              Book Appointment
            </a>
            <a
              href="tel:(555) 123-4567"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-medium py-3 px-8 rounded-xl transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
