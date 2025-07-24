import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NewsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-pink-50 to-white relative">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Stay informed with the latest happenings, advancements, and special events at SORA Dental.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-pink-600 font-medium mb-2">{item.date}</p>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="inline-flex items-center text-pink-600 font-semibold hover:underline"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;