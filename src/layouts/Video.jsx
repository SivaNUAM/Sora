import React, { useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import video1 from "../assets/video/video1.mp4"; // adjust path as needed

const Video = () => {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-110 transition-transform duration-[25s] ease-in-out hover:scale-100 opacity-70"
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 z-10 animate-pulse-slow"></div>

      {/* Content */}
      <div className="container mx-auto relative z-20 text-center px-4 sm:px-6 lg:px-8 animate-slide-up">
        <div className="flex justify-center mb-6">
          <Sparkles className="w-12 h-12 text-primary-400 animate-spin-slow" />
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-300">
          Your Smile, Our <span className="animate-glow">Priority</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in-delay">
          Experience exceptional dental care in a comfortable, modern environment.
          Our team of experts is dedicated to crafting beautiful, healthy smiles that last.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/appointments"
            className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 text-lg font-bold rounded-full bg-primary-500 text-white hover:bg-primary-600 hover:scale-105 hover:-rotate-1 focus:scale-105 focus:ring-4 focus:ring-primary-300/50 transition-all duration-300 ease-out shadow-2xl hover:shadow-primary-500/60 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-ripple pointer-events-none"></span>
            <span className="relative z-10 flex items-center">
              Book Appointment
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </a>
          <a
            href="/services"
            className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 text-lg font-bold rounded-full bg-transparent border-2 border-primary-400 text-primary-300 hover:border-primary-200 hover:text-primary-100 hover:bg-primary-900/20 hover:scale-105 focus:scale-105 focus:ring-4 focus:ring-primary-300/50 transition-all duration-300 ease-out shadow-md hover:shadow-primary-400/40 overflow-hidden"
          >
            <span className="absolute inset-0 border-4 border-transparent group-hover:border-primary-300/30 animate-neon-border"></span>
            <span className="relative z-10">Our Services</span>
          </a>
        </div>

        <div className="mt-8 opacity-0 animate-fade-in-delay-2">
          <p className="text-neutral-400 text-sm sm:text-base">
            Questions?{" "}
            <a href="/contact" className="underline hover:text-primary-300 transition-colors duration-200">
              Contact us today
            </a>
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-up { 0% { transform: translateY(60px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes fade-in-delay { 0% { opacity: 0; } 60% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes fade-in-delay-2 { 0% { opacity: 0; } 80% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes glow { 0% { text-shadow: 0 0 8px rgba(255, 255, 255, 0.6); } 50% { text-shadow: 0 0 25px rgba(255, 255, 255, 0.9); } 100% { text-shadow: 0 0 8px rgba(255, 255, 255, 0.6); } }
        @keyframes pulse-slow { 0% { opacity: 1; } 50% { opacity: 0.8; } 100% { opacity: 1; } }
        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes ripple { 0% { transform: scale(0); opacity: 0.5; background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 10%, transparent 10.01%); } 100% { transform: scale(3); opacity: 0; } }
        @keyframes neon-border { 0% { border-color: transparent; box-shadow: 0 0 10px rgba(129, 140, 248, 0); } 50% { border-color: rgba(165, 180, 252, 0.5); box-shadow: 0 0 15px rgba(129, 140, 248, 0.5); } 100% { border-color: transparent; box-shadow: 0 0 10px rgba(129, 140, 248, 0); } }
        .animate-slide-up { animation: slide-up 0.9s ease-out forwards; }
        .animate-fade-in-delay { animation: fade-in-delay 1.4s ease-out forwards; }
        .animate-fade-in-delay-2 { animation: fade-in-delay-2 1.8s ease-out forwards; }
        .animate-glow { animation: glow 3.5s infinite ease-in-out; }
        .animate-pulse-slow { animation: pulse-slow 12s infinite ease-in-out; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-ripple { animation: ripple 0.6s ease-out; }
        .animate-neon-border { animation: neon-border 2s infinite ease-in-out; }
      `}</style>
    </section>
  );
};

export default Video;
