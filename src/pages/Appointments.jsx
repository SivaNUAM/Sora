import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, CheckCircle } from "lucide-react";

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
    // Here you would typically send the form data to your backend
    console.log("Appointment submitted:", formData);
    setIsSubmitted(true);
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

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Schedule your dental visit with our expert team. We offer flexible
              appointment times and personalized care for all your dental needs.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                    Schedule Your Visit
                  </h2>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        Appointment Requested!
                      </h3>
                      <p className="text-neutral-600 mb-4">
                        Thank you for scheduling your appointment. We'll contact
                        you within 24 hours to confirm your visit.
                      </p>
                      <p className="text-sm text-neutral-500">
                        If you need immediate assistance, please call us at
                        (555) 123-4567
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-neutral-700 mb-2"
                          >
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-neutral-700 mb-2"
                          >
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="grid md:grid-cols-2 gap-6">
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
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-neutral-700 mb-2"
                          >
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      {/* Appointment Details */}
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label
                            htmlFor="date"
                            className="block text-sm font-medium text-neutral-700 mb-2"
                          >
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="time"
                            className="block text-sm font-medium text-neutral-700 mb-2"
                          >
                            Preferred Time *
                          </label>
                          <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                          >
                            <option value="">Select a time</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="service"
                            className="block text-sm font-medium text-neutral-700 mb-2"
                          >
                            Service *
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                          placeholder="Tell us about your dental concerns or any special requests..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full flex items-center justify-center"
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Schedule Appointment
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Information Sidebar */}
              <div className="space-y-6">
                {/* Office Hours */}
                <div className="bg-neutral-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary-800" />
                    Office Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Saturday</span>
                      <span className="font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Sunday</span>
                      <span className="font-medium">Emergency Only</span>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-primary-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary-800" />
                      <span className="text-neutral-700">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary-800" />
                      <span className="text-neutral-700">
                        appointments@soradental.com
                      </span>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-white rounded-2xl p-6 border border-neutral-100">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                    What to Expect
                  </h3>
                  <div className="space-y-3 text-sm text-neutral-600">
                    <p>• Comprehensive dental examination</p>
                    <p>• Personalized treatment plan</p>
                    <p>• Comfortable, modern facility</p>
                    <p>• Experienced dental team</p>
                    <p>• Flexible payment options</p>
                  </div>
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
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            For urgent dental care or questions, don't hesitate to call us
            directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(555) 123-4567"
              className="bg-white text-primary-800 hover:bg-neutral-100 font-medium py-3 px-8 rounded-xl transition-colors duration-200"
            >
              Call Now
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

export default Appointments;
