import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { services } from "../data/services";

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
            entry.target.classList.remove("opacity-0", "translate-y-12", "scale-95");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // Rectangle → Square → Square → Rectangle
  const getCardStyle = (rowIndex, cardIndex) => {
    const isEvenRow = rowIndex % 2 === 0;
    if ((isEvenRow && cardIndex === 0) || (!isEvenRow && cardIndex === 1)) {
      return "h-[380px]"; // Rectangle - a bit taller
    }
    return "h-[400px]"; // Square
  };

  const rows = services.reduce((acc, service, index) => {
    const row = Math.floor(index / 2);
    if (!acc[row]) acc[row] = [];
    acc[row].push(service);
    return acc;
  }, []);

  return (
    <div>
      {/* Intro */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-12">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Our Dental Services
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Comprehensive dental care for the whole family. From routine checkups to advanced procedures, we provide all the services you need for a healthy, beautiful smile.
          </p>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex flex-col gap-8">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-col md:flex-row gap-6 justify-center w-full">
                {row.map((service, cardIndex) => {
                  const globalIndex = rowIndex * 2 + cardIndex;
                  return (
                    <div
                      key={service.id}
                      ref={(el) => (cardsRef.current[globalIndex] = el)}
                      className={`bg-white rounded-xl overflow-hidden border border-neutral-200 flex flex-col opacity-0 translate-y-12 scale-95 transition-all duration-700 ease-out hover:shadow-[0_0_15px_rgba(0,170,255,0.3),0_0_30px_rgba(0,170,255,0.15)] hover:scale-105 hover:z-10 w-full ${getCardStyle(rowIndex, cardIndex)}`}
                    >
                      {/* Image */}
                      <div className="relative w-full h-48 md:h-52 lg:h-[65%] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                      </div>

                      {/* Details */}
                      <div className="p-5 pb-20 relative flex flex-col justify-start h-full box-border">
                        <h3 className="text-base font-semibold text-neutral-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-xs text-neutral-600 mb-2">{service.description}</p>

                        {/* Features */}
                        <ul className="mb-2 space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center text-xs text-neutral-600">
                              <CheckCircle className="w-3.5 h-3.5 text-primary-800 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        {/* Price & Duration */}
                        <div className="flex justify-between text-xs text-neutral-700 mb-2">
                          <span className="font-semibold text-primary-800">{service.price}</span>
                          <span>{service.duration}</span>
                        </div>

                        {/* Arrow */}
                        <button
                          onClick={() => (window.location.href = `/services/${service.id}`)}
                          className="absolute bottom-3 right-3 bg-black text-white p-1.5 rounded-full shadow-md hover:bg-neutral-800 transition-colors"
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We combine advanced technology with compassionate care to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏆", title: "Expert Care", text: "Our experienced team uses the latest techniques and technology to ensure the best possible outcomes." },
              { icon: "💝", title: "Patient Comfort", text: "We prioritize your comfort with a relaxing environment and gentle, caring approach to treatment." },
              { icon: "🔬", title: "Advanced Technology", text: "State-of-the-art equipment and modern techniques for precise, efficient, and comfortable treatments." }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary-800">
        <div className="container-custom text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg text-primary-100 mb-6 max-w-xl mx-auto">
            Schedule a consultation to discuss your dental needs and create a personalized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/appointments"
              className="bg-white text-primary-800 hover:bg-neutral-100 font-medium py-2.5 px-6 rounded-lg transition-colors duration-200"
            >
              Book Consultation
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-medium py-2.5 px-6 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
