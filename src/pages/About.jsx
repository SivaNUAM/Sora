import { CheckCircle, Heart, Camera, Cpu, Radiation, Workflow, Stethoscope, ThumbsUp, Shield, Globe, Smile, Clock, Award, Users, HeartHandshake, ShieldCheck, Sparkles, Target, Microscope, Star, Activity } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState, useEffect } from "react";
import Ai from "../assets/images/Ai.jpg";
import Laaser from "../assets/images/Laaser.jpg";
import Advanced from "../assets/images/Advanced.png";
import three from "../assets/images/three.jpg";
import soraimg from "../assets/images/soraimg.png";
import Sticky from "../pages/Sticky";
// Define container-custom in your CSS or Tailwind config
// Example CSS (add to your global stylesheet or Tailwind config):
// .container-custom {
//   @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
// }

const About = () => {
  const values = [
    {
      icon: HeartHandshake,
      title: "Compassion",
      description: "We treat every patient with empathy and kindness, making them feel at home.",
      color: "from-pink-500 to-red-400",
    },
    {
      icon: ShieldCheck,
      title: "Trust",
      description: "Your safety and trust are our top priorities in every treatment.",
      color: "from-blue-500 to-teal-400",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "We embrace the latest technologies to provide advanced and painless care.",
      color: "from-purple-500 to-indigo-400",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaboration and dedication ensure the best possible patient outcomes.",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "We follow world-class hygiene and treatment protocols for your safety.",
      color: "from-orange-500 to-yellow-400",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning dental care with a focus on precision and quality.",
      color: "from-pink-500 to-purple-400",
    },
    {
      icon: Clock,
      title: "Timely Care",
      description: "We respect your time by ensuring quick appointments and minimal wait times.",
      color: "from-teal-500 to-cyan-400",
    },
    {
      icon: Smile,
      title: "Happy Patients",
      description: "We go the extra mile to ensure your visit is stress-free and comfortable.",
      color: "from-red-400 to-pink-400",
    },
  ];

  const stats = [
    { number: 5000, label: "Happy Patients" },
    { number: 15, label: "Years of Excellence" },
    { number: 1200, label: "Successful Implants" },
    { number: "24×7", label: "Emergency Care" },
  ];

  const points = [
    {
      icon: Heart,
      title: "Compassion-First Approach",
      description:
        "We understand that visiting the dentist can be stressful. That’s why our care philosophy centers around kindness and empathy. Every consultation starts with listening to your concerns, understanding your history, and creating a treatment plan that makes you feel comfortable and secure.",
    },
    {
      icon: Stethoscope,
      title: "Comprehensive & Holistic Care",
      description:
        "We go beyond simple dental treatments to focus on the big picture—your long-term oral health and overall well-being. From regular cleanings and cavity prevention to complex restorative procedures, every service is designed to improve your smile for years to come.",
    },
    {
      icon: Users,
      title: "Inclusive & Family-Friendly",
      description:
        "Our clinic welcomes patients of all ages and backgrounds. Whether it’s a child’s first dental visit, a teenager’s orthodontic check-up, or specialized senior care, we create an environment where every patient feels valued, respected, and understood.",
    },
    {
      icon: Clock,
      title: "Convenience and Accessibility",
      description:
        "We know life gets busy, so we make dental care simple and accessible. With early morning, late evening, and weekend appointments, plus 24×7 emergency support, we ensure you always get the care you need without compromising your schedule.",
    },
    {
      icon: ShieldCheck,
      title: "Safety and Trust First",
      description:
        "We follow international sterilization standards and maintain a completely transparent process. Our advanced hygiene protocols and top-tier equipment mean you can trust that your health and safety are always our top priority.",
    },
    {
      icon: Smile,
      title: "Lifelong Patient Relationships",
      description:
        "We don’t just treat teeth; we build long-term relationships. Every milestone in your dental journey matters to us, and we strive to make each visit a positive experience that keeps you smiling confidently for life.",
    },
    {
      icon: ThumbsUp,
      title: "Empowering Patients with Knowledge",
      description:
        "We take time to explain every treatment option and educate you on preventive care. Our goal is to help you feel fully informed and empowered to make the best choices for your dental health, both now and in the future.",
    },
  ];

  const techItems = [
    {
      title: "Digital 3D Imaging",
      description:
        "High-precision 3D scans that reduce radiation exposure while providing detailed visuals for accurate treatment planning.",
      image: three,
    },
    {
      title: "AI-Powered Diagnostics",
      description:
        "Advanced AI systems that analyze scans for early detection and smarter, more personalized treatment strategies.",
      image: Ai,
    },
    {
      title: "Painless Laser Dentistry",
      description:
        "State-of-the-art laser technology for quick, comfortable procedures with minimal recovery time.",
      image: Laaser,
    },
    {
      title: "Advanced Sterilization Systems",
      description:
        "Cutting-edge sterilization and infection control for the safest, cleanest environment possible.",
      image: Advanced,
    },
  ];

  const AnimatedStat = ({ number, label, delay }) => {
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const [count, setCount] = useState(
      typeof number === "number" ? 0 : number
    );

    useEffect(() => {
      if (typeof number === "string") return;

      let start = 0;
      const end = number;
      const duration = 2000;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);

      return () => clearInterval(counter);
    }, [number]);

    return (
      <motion.div
        className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
      >
        <div className="text-3xl sm:text-4xl font-bold text-primary-800 mb-2">
          {typeof number === "number" ? `${count}+` : number}
        </div>
        <div className="text-neutral-600 font-medium text-center text-sm sm:text-base">
          {label}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen">
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
                  About Us
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
      <Sticky />
      <section id="why-choose-section" className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-white via-primary-50 to-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 px-4 sm:px-6 md:px-8 lg:px-12"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-snug">
                Discover the Heart of <span className="text-primary-600">SORA Dental</span>
              </h1>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                At SORA Dental Clinic, we blend advanced technology with compassionate care 
                to create a dental experience like no other. Our mission is to help 
                you achieve not only a healthy smile but also confidence and comfort 
                at every visit.
              </p>
              <ul className="space-y-3 text-neutral-700 text-sm sm:text-base">
                <li className="flex items-start space-x-3">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 bg-primary-500 rounded-full flex-shrink-0 mt-1"></span>
                  <span>Cutting-edge technology for precise diagnostics and treatments.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 bg-primary-500 rounded-full flex-shrink-0 mt-1"></span>
                  <span>Personalized treatment plans for every patient.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 bg-primary-500 rounded-full flex-shrink-0 mt-1"></span>
                  <span>Friendly and experienced dental professionals.</span>
                </li>
              </ul>
            </motion.div>

            {/* Rectangle Image with Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative mx-auto w-full max-w-[400px] sm:max-w-[500px] h-[240px] sm:h-[320px] lg:w-[600px] lg:h-[380px] overflow-hidden rounded-xl"
            >
              <motion.img
                src={soraimg}
                alt="SORA Dental Clinic"
                className="w-full h-full object-cover"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
<section className="py-16 sm:py-20 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-neutral-900">
            Our Mission
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-neutral-600 max-w-2xl mx-auto">
            At SORA Dental Clinic, we believe that everyone deserves access to exceptional dental care.
            Our mission is to provide comprehensive, personalized dental services in a comfortable and
            welcoming environment, helping our patients achieve optimal oral health and beautiful smiles.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-900">
              Advanced Technology Meets Compassionate Care
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed">
              We combine advanced technology with compassionate care to deliver
              outstanding results while ensuring each patient feels valued and
              comfortable throughout their dental journey.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 mb-4">
                Our Vision
              </h3>
              <p className="text-neutral-600 mb-6 text-sm sm:text-base lg:text-lg">
                To be the leading dental practice in our community, known for exceptional care,
                innovative treatments, and patient satisfaction.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Advanced dental technology",
                  "Compassionate patient care",
                  "Comprehensive dental services",
                  "Lifelong oral health"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-800" />
                    <span className="text-neutral-700 text-sm sm:text-base lg:text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-neutral-50 to-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-pink-200/30 via-purple-200/20 to-transparent blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
        />
        <div className="container-custom relative">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the way we care for our patients.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative p-6 sm:p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-neutral-600 text-center text-sm sm:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary-900 to-primary-700 relative overflow-hidden">
        <motion.svg
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.path
            d="M0,50 L100,50 M50,0 L50,100"
            stroke="white"
            strokeWidth="0.2"
            strokeDasharray="2 2"
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          />
        </motion.svg>
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              SORA Dental by the Numbers
            </h2>
            <p className="text-base sm:text-xl text-primary-100 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in our achievements and patient satisfaction.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                number={stat.number}
                label={stat.label}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Patient-Centered Care */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
        <div className="container-custom relative">
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6">
              Patient-Centered Care
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              At SORA Dental, every decision we make starts with you in mind. We go
              beyond treating dental issues—we build experiences where patients
              feel comfortable, informed, and supported. From your first visit to
              long-term follow-ups, our team focuses on understanding your unique
              needs, minimizing anxiety, and making your care journey as seamless
              as possible.
            </p>
          </motion.div>
          <div className="relative border-l-2 border-primary-200 ml-6 sm:ml-8 space-y-12 sm:space-y-16">
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="ml-8 sm:ml-10 relative"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-8 sm:-left-10 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center shadow-md">
                  <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-800" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-lg">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="text-center text-base sm:text-xl text-neutral-700 max-w-3xl mx-auto mt-12 sm:mt-16 md:mt-20 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We’re committed to giving you more than just dental care—we provide an
            experience built on trust, comfort, and lasting results. Your smile is
            our passion, and your confidence is our ultimate goal.
          </motion.p>
        </div>
      </section>

      {/* Clinical Excellence */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-pink-100/20 to-transparent blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        />
        <div className="container-custom relative">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-4">
              Clinical Excellence at SORA Dental
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              Our commitment to world-class dental care ensures you get the safest, 
              most advanced, and compassionate treatments available.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={450}>
                <div className="p-6 sm:p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 group relative overflow-hidden">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                    <Microscope className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-neutral-900">
                    Cutting-Edge Technology
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base">
                    We use the most advanced dental tools and equipment to ensure precision, comfort, and lasting results.
                  </p>
                </div>
              </Tilt>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={450}>
                <div className="p-6 sm:p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 group relative overflow-hidden">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center mb-6">
                    <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-neutral-900">
                    Unmatched Expertise
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base">
                    Our highly qualified dental professionals bring years of experience and dedication to patient care.
                  </p>
                </div>
              </Tilt>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={450}>
                <div className="p-6 sm:p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 group relative overflow-hidden">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-400 flex items-center justify-center mb-6">
                    <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-neutral-900">
                    Comprehensive Care
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base">
                    From preventive to advanced treatments, we ensure holistic dental care for every patient.
                  </p>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Technology */}
      <section className="py-16 sm:py-20 md:py-28 bg-neutral-50">
        <div className="container-custom space-y-12 sm:space-y-16 md:space-y-20">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Advanced Technology, Exceptional Care
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Each innovation we use is carefully selected to make your dental
              experience faster, safer, and more comfortable. Explore the tools that
              set SORA Dental apart.
            </p>
          </motion.div>
          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {techItems.map((item, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="rounded-3xl overflow-hidden shadow-lg group relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="space-y-4 px-4 sm:px-0">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-base sm:text-xl text-neutral-600 max-w-3xl mx-auto">
              Our team of experienced dental professionals is dedicated to
              providing you with the highest quality care in a comfortable and
              welcoming environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">
                Experienced Dentists
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base">
                Our dentists have years of experience and stay current with the
                latest dental techniques and technology.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">
                Caring Staff
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base">
                Our friendly staff is committed to making your visit comfortable
                and stress-free.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">
                Specialized Care
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base">
                From general dentistry to specialized procedures, we offer
                comprehensive dental care.
              </p>
            </div>
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="/team"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-neutral-200 text-neutral-900 rounded-full font-semibold text-sm sm:text-base hover:bg-red-900 hover:text-white transition duration-300"

            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
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

    </div>
  );
};

export default About;