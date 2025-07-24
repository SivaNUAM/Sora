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
export const services = [
  {
    id: 1,
    title: "General Dentistry",
    description:
      "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
    image: general,
    features: [
      "Dental Cleanings & Exams",
      "Cavity Fillings",
      "Root Canal Therapy",
      "Tooth Extractions",
      "Gum Disease Treatment",
    ],
    price: "From $150",
    duration: "30-90 minutes",
  },
  {
    id: 2,
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with our advanced cosmetic dental procedures.",
    image: cosmetic,
    features: [
      "Teeth Whitening",
      "Porcelain Veneers",
      "Dental Bonding",
      "Smile Makeovers",
      "Invisalign Treatment",
    ],
    price: "From $500",
    duration: "1-3 visits",
  },
  {
    id: 3,
    title: "Orthodontics",
    description: "Straighten your teeth with modern orthodontic solutions.",
    image: ortho,
    features: [
      "Traditional Braces",
      "Clear Aligners",
      "Retainers",
      "Early Orthodontic Treatment",
      "Adult Orthodontics",
    ],
    price: "From $2,500",
    duration: "12-24 months",
  },
  {
    id: 4,
    title: "Dental Implants",
    description:
      "Permanent tooth replacement with natural-looking dental implants.",
   image: implants,
    features: [
      "Single Tooth Implants",
      "Multiple Tooth Implants",
      "Full Arch Implants",
      "Implant-Supported Dentures",
      "All-on-4 Treatment",
    ],
    price: "From $3,500",
    duration: "3-6 months",
  },
  {
    id: 5,
    title: "Emergency Dentistry",
    description: "24/7 emergency dental care when you need it most.",
    image: care,
    features: [
      "Toothache Relief",
      "Broken Tooth Repair",
      "Lost Filling/Crown",
      "Dental Trauma",
      "Severe Pain Treatment",
    ],
    price: "From $200",
    duration: "Immediate",
  },
  {
    id: 6,
    title: "Pediatric Dentistry",
    description: "Gentle dental care designed specifically for children.",
    image: pedia,
    features: [
      "Child-Friendly Environment",
      "Early Dental Education",
      "Preventive Treatments",
      "Sealants & Fluoride",
      "Growth Monitoring",
    ],
    price: "From $100",
    duration: "30-60 minutes",
  },
  {
  id: 7,
  title: "Painless Root Canal Treatment",
  description: "Advanced root canal therapy designed to save your tooth while ensuring a pain-free experience.",
  image: root, // replace with your actual image path
  features: [
    "Modern Pain-Free Techniques",
    "Single-Visit Procedure",
    "Preserves Natural Tooth",
    "High Success Rate",
    "Quick Recovery"
  ],
  price: "From $200",
  duration: "60-90 minutes",
},

  {
  id: 8,
  title: "Teeth Whitening",
  description: "Professional whitening treatments to brighten your smile safely and effectively.",
  image: white,
  features: [
    "Safe & Effective Whitening",
    "Quick In-Office Treatment",
    "Long-Lasting Results",
    "Minimal Sensitivity",
    "Custom At-Home Kits"
  ],
  price: "From $150",
  duration: "45-60 minutes",
},

];
