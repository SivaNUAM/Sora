import { Images } from "lucide-react";
import general from "../assets/images/general.jpg";
import cosmetic from "../assets/images/cosmetic.jpg";
import ortho from "../assets/images/ortho.png";
import dental from "../assets/images/dental.png";
import care from "../assets/images/care.png";
import pedia from "../assets/images/pedia.png";
import white from "../assets/images/white.png";
import root from "../assets/images/root.png";
import implants from "../assets/images/implants.jpg";
import exam from "../assets/images/exam.jpg"
import cleaning from '../assets/images/cleaning.jpg'
import Xray from "../assets/images/Xray.jpg"
   export const servicesData = [
       {
        category: "Preventive Care",
        headerImage: root,
       services: [
  { 
    id: 1, 
    title: "Dental Exams", 
    description: "Comprehensive oral evaluations to detect early signs of dental issues, ensuring your teeth and gums stay healthy. Includes a thorough checkup, gum health analysis, and personalized care recommendations.", 
    image: exam, 
    features: ["Oral health assessment", "Gum disease screening", "Personalized treatment plan"], 
    // price: "$100", 
    // duration: "30 min" 
  },
  { 
    id: 2, 
    title: "Cleanings", 
    description: "Professional deep cleaning that removes plaque and tartar buildup, leaving your teeth fresh, bright, and healthy. Helps prevent cavities, gum disease, and bad breath.", 
    image: cleaning, 
    features: ["Plaque removal", "Polishing", "Fluoride treatment"], 
    // price: "$80", 
    // duration: "45 min" 
  },
  { 
    id: 3, 
    title: "X-ray Imaging", 
    description: "Advanced digital X-ray imaging for accurate diagnosis and early detection of hidden dental issues. Safe, fast, and essential for creating a personalized treatment plan.", 
    image: Xray, 
    features: ["High-resolution images", "Low radiation exposure", "Detailed diagnostics"], 
    // price: "$50", 
    // duration: "20 min" 
  },
  { 
    id: 4, 
    title: "Children's Care Programs", 
    description: "Specialized dental care designed for kids, focusing on prevention, education, and comfort. We make dental visits fun and stress-free, building healthy habits early on.", 
    image: "https://via.placeholder.com/400x300?text=Children%27s+Care", 
    features: ["Kid-friendly environment", "Preventive care", "Gentle treatments"], 
    // price: "$40", 
    // duration: "15 min" 
  },
  { 
    id: 5, 
    title: "Sealants", 
    description: "Protective tooth coatings that prevent cavities by sealing grooves and pits in your teeth. A quick, painless treatment that provides long-lasting protection, especially for children and teens.", 
    image: "https://via.placeholder.com/400x300?text=Sealants", 
    features: ["Cavity prevention", "Quick application", "Durable protection"], 
    // price: "$60", 
    // duration: "10 min" 
  }
],

      },
      {
        category: "Restorative Care",
        headerImage: "https://via.placeholder.com/64?text=Restorative",
        services: [
          { id: 6, title: "Fillings", description: "Repair cavities with durable materials.", image: "https://via.placeholder.com/400x300?text=Fillings", features: ["Composite material", "Pain-free", "Quick recovery"], price: "$150", duration: "45 min" },
          { id: 7, title: "Crowns", description: "Protect and strengthen damaged teeth.", image: "https://via.placeholder.com/400x300?text=Crowns", features: ["Custom fit", "Durable", "Natural look"], price: "$800", duration: "1 hr" },
          { id: 8, title: "Bridges", description: "Replace missing teeth with a bridge.", image: "https://via.placeholder.com/400x300?text=Bridges", features: ["Permanent solution", "Natural appearance", "Comfortable"], price: "$1200", duration: "1.5 hr" },
          { id: 9, title: "Dentures", description: "Custom dentures for missing teeth.", image: "https://via.placeholder.com/400x300?text=Dentures", features: ["Custom fit", "Removable", "Affordable"], price: "$1000", duration: "2 hr" },
          { id: 10, title: "Root Canal", description: "Treat infected tooth pulp.", image: "https://via.placeholder.com/400x300?text=Root+Canal", features: ["Pain relief", "Saves tooth", "Quick recovery"], price: "$700", duration: "1 hr" },
        ],
      },
      {
        category: "Cosmetic Procedures",
        headerImage: "https://via.placeholder.com/64?text=Cosmetic",
        services: [
          { id: 11, title: "Teeth Whitening", description: "Brighten your smile with whitening.", image: white, features: ["Fast results", "Safe procedure", "Long-lasting"], price: "$300", duration: "1 hr" },
          { id: 12, title: "Veneers", description: "Custom shells for perfect teeth.", image: "https://via.placeholder.com/400x300?text=Veneers", features: ["Natural look", "Durable", "Stain-resistant"], price: "$900", duration: "2 hr" },
          { id: 13, title: "Invisalign", description: "Clear aligners for straighter teeth.", image: '', features: ["Invisible", "Comfortable", "Removable"], price: "$4000", duration: "Varies" },
          { id: 14, title: "Braces", description: "Repair chipped or discolored teeth.", image: "https://via.placeholder.com/400x300?text=Bonding", features: ["Quick procedure", "Affordable", "Natural look"], price: "$200", duration: "30 min" },
          { id: 15, title: "clear Aligners", description: "Comprehensive smile enhancement.", image: "https://via.placeholder.com/400x300?text=Smile+Makeover", features: ["Custom plan", "Multiple treatments", "Transformative"], price: "$5000", duration: "Varies" },
        ],
      },
        {
    category: "Advanced Services",
    headerImage: "https://via.placeholder.com/64?text=Advanced",
    services: [
      { id: 16, title: "Dental Implants", description: "Permanent replacements for missing teeth, restoring function and aesthetics with natural-looking implants.", image: "https://via.placeholder.com/400x300?text=Implants", features: ["Permanent", "Natural look", "Durable"] },
      { id: 17, title: "Root Canals (Endodontics)", description: "Specialized treatment to save severely decayed or infected teeth and alleviate pain.", image: "https://via.placeholder.com/400x300?text=Root+Canal", features: ["Pain relief", "Tooth preservation", "Advanced techniques"] },
      { id: 18, title: "Extractions (Oral Surgery)", description: "Safe and effective removal of problematic teeth, including wisdom teeth and damaged teeth.", image: "https://via.placeholder.com/400x300?text=Extractions", features: ["Painless", "Quick recovery", "Expert care"] },
      { id: 19, title: "Gum Disease (Periodontics)", description: "Advanced care for gum disease, including deep cleanings and surgical options for healthier gums.", image: "https://via.placeholder.com/400x300?text=Gum+Disease", features: ["Healthy gums", "Disease control", "Preventive care"] },
      { id: 20, title: "Obstructive Sleep Apnea Treatment", description: "Oral appliance therapy to improve breathing during sleep and reduce sleep apnea symptoms.", image: "https://via.placeholder.com/400x300?text=Sleep+Apnea", features: ["Better sleep", "Comfortable devices", "Custom fit"] },
      { id: 21, title: "TMJ Treatment", description: "Relief from jaw pain, headaches, and bite problems with advanced TMJ therapies.", image: "https://via.placeholder.com/400x300?text=TMJ", features: ["Jaw pain relief", "Improved bite", "Non-surgical"] },
      { id: 22, title: "Bad Breath Treatment", description: "Professional treatment to identify and eliminate the causes of persistent bad breath.", image: "https://via.placeholder.com/400x300?text=Bad+Breath", features: ["Fresh breath", "Cause diagnosis", "Personalized care"] },
      { id: 23, title: "Sedation (Sleep) Dentistry", description: "Relaxing, anxiety-free dental care for patients with dental phobia or complex procedures.", image: "https://via.placeholder.com/400x300?text=Sedation", features: ["Stress-free", "Safe sedation", "Comfort-focused"] },
      { id: 24, title: "Emergency Dental Care", description: "Prompt treatment for urgent dental issues like severe pain, fractures, or lost teeth.", image: "https://via.placeholder.com/400x300?text=Emergency", features: ["Immediate care", "Pain management", "Same-day solutions"] }
    ]
  }
    ];