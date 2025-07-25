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
import Advanced from '../assets/images/Advanced.jpg'
import prev from "../assets/images/prev.jpg"
import Rest from "../assets/images/Rest.jpg"
import cos from "../assets/images/cos.jpg"
  export const servicesData = [
    {
        category: "Preventive Care",
        headerImage: prev,
        services: [
            {
                id: 1,
                title: "Dental Exams",
                description: "Comprehensive dental examinations to proactively monitor and maintain your oral health. Our thorough assessments identify early signs of dental issues, ensuring timely intervention and personalized care for a healthy smile.",
                image: exam,
                features: [
                    "Detailed oral health evaluation",
                    "Early detection of dental issues",
                    "Customized preventive strategies"
                ],
                details: {
                    heading: "Your Guide to Comprehensive Dental Exams",
                    betweenImage: exam,
                    subSections: [
                        {
                            title: "Initial Consultation & History Review",
                            description: "We begin by discussing your dental and medical history, addressing concerns, and setting goals for your oral health. This ensures a tailored approach to your care.",
                            points: ["Detailed health history review", "Discussion of dental concerns", "Patient-centered communication"]
                        },
                        {
                            title: "Comprehensive Oral Examination",
                            description: "A meticulous inspection of your teeth, gums, and oral tissues to identify cavities, gum disease, or other abnormalities.",
                            points: ["Visual tooth inspection", "Gum health assessment", "Oral cancer screening"]
                        },
                        {
                            title: "Advanced Diagnostic Imaging",
                            description: "Using state-of-the-art digital X-rays, we detect hidden issues such as tooth decay, bone loss, or impacted teeth.",
                            points: ["Low-radiation digital X-rays", "Real-time imaging results", "Precise diagnostics"]
                        },
                        {
                            title: "Personalized Preventive Plan",
                            description: "Based on our findings, we craft a customized plan to address your unique needs and prevent future dental issues.",
                            points: ["Tailored treatment recommendations", "Preventive care strategies", "Follow-up care scheduling"]
                        },
                        {
                            title: "Oral Hygiene Education",
                            description: "Our team provides expert advice on brushing, flossing, and dietary habits to maintain optimal oral health between visits.",
                            points: ["Advanced brushing techniques", "Flossing best practices", "Nutrition counseling for dental health"]
                        }
                    ]
                },
                galleryImages: [
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
                    "https://images.unsplash.com/photo-1579157473638-d0b7d8087e3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
                    "https://images.unsplash.com/photo-1598252976387-80e12c4fc9b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
                ],
                faq: [
                    {
                        question: "How often should I schedule a dental exam?",
                        answer: "We recommend a dental exam every 6 months for most patients. Those with specific conditions may need more frequent visits."
                    },
                    {
                        question: "Are dental exams uncomfortable?",
                        answer: "Dental exams are non-invasive and designed for comfort. We use gentle techniques to ensure a pleasant experience."
                    },
                    {
                        question: "Are X-rays safe during dental exams?",
                        answer: "Yes, our digital X-rays use minimal radiation and are safe. They’re only performed when necessary to monitor your oral health."
                    },
                    {
                        question: "What should I expect after my exam?",
                        answer: "You’ll receive a detailed report of findings, a personalized care plan, and recommendations for maintaining your oral health."
                    }
                ]
            },
            {
                id: 2,
                title: "Professional Cleanings",
                description: "Expert dental cleanings to remove plaque, tartar, and surface stains, promoting healthy gums and a radiant smile. Our cleanings help prevent cavities, gum disease, and bad breath.",
                image: "https://images.unsplash.com/photo-1598252976387-80e12c4fc9b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                features: [
                    "Tartar and plaque removal",
                    "Teeth polishing for a bright smile",
                    "Fluoride application for enamel strength"
                ],
                details: {
                    heading: "The Professional Dental Cleaning Experience",
                    betweenImage: "https://images.unsplash.com/photo-1598252976387-80e12c4fc9b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                    subSections: [
                        {
                            title: "Pre-Cleaning Assessment",
                            description: "We evaluate your oral health to identify areas of concern and tailor the cleaning process to your needs.",
                            points: ["Gum health evaluation", "Plaque and tartar identification", "Customized cleaning plan"]
                        },
                        {
                            title: "Ultrasonic Scaling",
                            description: "Using advanced ultrasonic tools, we remove hardened tartar and plaque with precision and comfort.",
                            points: ["Non-invasive scaling", "Effective tartar removal", "Gentle on gums"]
                        },
                        {
                            title: "Polishing for a Bright Smile",
                            description: "We polish your teeth to remove surface stains, leaving them smooth, shiny, and resistant to plaque buildup.",
                            points: ["High-grade polishing paste", "Stain removal", "Enhanced smile aesthetics"]
                        },
                        {
                            title: "Fluoride Treatment",
                            description: "A protective fluoride application strengthens enamel and reduces the risk of future cavities.",
                            points: ["Quick and painless application", "Long-term cavity protection", "Safe for all ages"]
                        },
                        {
                            title: "Post-Cleaning Guidance",
                            description: "We provide personalized tips to maintain your clean smile, including brushing techniques and dietary advice.",
                            points: ["Oral hygiene best practices", "Dietary recommendations", "Scheduling follow-up cleanings"]
                        }
                    ]
                },
                galleryImages: [
                    "https://images.unsplash.com/photo-1598252976387-80e12c4fc9b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
                    "https://images.unsplash.com/photo-1579157473638-d0b7d8087e3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
                ],
                faq: [
                    {
                        question: "Why do I need professional cleanings if I brush daily?",
                        answer: "Brushing and flossing at home can’t remove hardened tartar or deep plaque, which professional cleanings effectively address."
                    },
                    {
                        question: "Will the cleaning process hurt?",
                        answer: "Most patients find cleanings comfortable. Mild sensitivity may occur, but we use gentle techniques to minimize discomfort."
                    },
                    {
                        question: "How often should I get a professional cleaning?",
                        answer: "Twice a year is standard, but your dentist may recommend more frequent cleanings based on your oral health needs."
                    },
                    {
                        question: "Can cleanings whiten my teeth?",
                        answer: "Cleanings remove surface stains, which can brighten your smile. For more dramatic whitening, consider our teeth whitening service."
                    }
                ]
            }
        ]
    },
    // Other categories (Restorative Care, Cosmetic Procedures, Advanced Services) remain unchanged
    {
        category: "Restorative Care",
        headerImage: Rest,
        services: [
            {
                id: 6,
                title: "Fillings",
                description: "Repair cavities with durable materials.",
                image: "https://via.placeholder.com/400x300?text=Fillings",
                features: ["Composite material", "Pain-free", "Quick recovery"],
                price: "$150",
                duration: "45 min"
            },
            {
                id: 7,
                title: "Crowns",
                description: "Protect and strengthen damaged teeth.",
                image: "https://via.placeholder.com/400x300?text=Crowns",
                features: ["Custom fit", "Durable", "Natural look"],
                price: "$800",
                duration: "1 hr"
            },
            {
                id: 8,
                title: "Bridges",
                description: "Replace missing teeth with a bridge.",
                image: "https://via.placeholder.com/400x300?text=Bridges",
                features: ["Permanent solution", "Natural appearance", "Comfortable"],
                price: "$1200",
                duration: "1.5 hr"
            },
            {
                id: 9,
                title: "Dentures",
                description: "Custom dentures for missing teeth.",
                image: "https://via.placeholder.com/400x300?text=Dentures",
                features: ["Custom fit", "Removable", "Affordable"],
                price: "$1000",
                duration: "2 hr"
            },
            {
                id: 10,
                title: "Root Canal",
                description: "Treat infected tooth pulp.",
                image: "https://via.placeholder.com/400x300?text=Root+Canal",
                features: ["Pain relief", "Saves tooth", "Quick recovery"],
                price: "$700",
                duration: "1 hr"
            }
        ]
    },
    {
        category: "Cosmetic Procedures",
        headerImage: cos,
        services: [
            {
                id: 11,
                title: "Teeth Whitening",
                description: "Brighten your smile with whitening.",
                image: "https://via.placeholder.com/400x300?text=Teeth+Whitening",
                features: ["Fast results", "Safe procedure", "Long-lasting"],
                price: "$300",
                duration: "1 hr"
            },
            {
                id: 12,
                title: "Veneers",
                description: "Custom shells for perfect teeth.",
                image: "https://via.placeholder.com/400x300?text=Veneers",
                features: ["Natural look", "Durable", "Stain-resistant"],
                price: "$900",
                duration: "2 hr"
            },
            {
                id: 13,
                title: "Invisalign",
                description: "Clear aligners for straighter teeth.",
                image: "https://via.placeholder.com/400x300?text=Invisalign",
                features: ["Invisible", "Comfortable", "Removable"],
                price: "$4000",
                duration: "Varies"
            },
            {
                id: 14,
                title: "Braces",
                description: "Repair chipped or discolored teeth.",
                image: "https://via.placeholder.com/400x300?text=Braces",
                features: ["Quick procedure", "Affordable", "Natural look"],
                price: "$200",
                duration: "30 min"
            },
            {
                id: 15,
                title: "Clear Aligners",
                description: "Comprehensive smile enhancement.",
                image: "https://via.placeholder.com/400x300?text=Clear+Aligners",
                features: ["Custom plan", "Multiple treatments", "Transformative"],
                price: "$5000",
                duration: "Varies"
            }
        ]
    },
    {
        category: "Advanced Services",
        headerImage: Advanced,
        services: [
            {
                id: 16,
                title: "Dental Implants",
                description: "Permanent replacements for missing teeth, restoring function and aesthetics with natural-looking implants.",
                image: "https://via.placeholder.com/400x300?text=Implants",
                features: ["Permanent", "Natural look", "Durable"]
            },
            {
                id: 17,
                title: "Root Canals (Endodontics)",
                description: "Specialized treatment to save severely decayed or infected teeth and alleviate pain.",
                image: "https://via.placeholder.com/400x300?text=Root+Canal",
                features: ["Pain relief", "Tooth preservation", "Advanced techniques"]
            },
            {
                id: 18,
                title: "Extractions (Oral Surgery)",
                description: "Safe and effective removal of problematic teeth, including wisdom teeth and damaged teeth.",
                image: "https://via.placeholder.com/400x300?text=Extractions",
                features: ["Painless", "Quick recovery", "Expert care"]
            },
            {
                id: 19,
                title: "Gum Disease (Periodontics)",
                description: "Advanced care for gum disease, including deep cleanings and surgical options for healthier gums.",
                image: "https://via.placeholder.com/400x300?text=Gum+Disease",
                features: ["Healthy gums", "Disease control", "Preventive care"]
            },
            {
                id: 20,
                title: "Obstructive Sleep Apnea Treatment",
                description: "Oral appliance therapy to improve breathing during sleep and reduce sleep apnea symptoms.",
                image: "https://via.placeholder.com/400x300?text=Sleep+Apnea",
                features: ["Better sleep", "Comfortable devices", "Custom fit"]
            },
            {
                id: 21,
                title: "TMJ Treatment",
                description: "Relief from jaw pain, headaches, and bite problems with advanced TMJ therapies.",
                image: "https://via.placeholder.com/400x300?text=TMJ",
                features: ["Jaw pain relief", "Improved bite", "Non-surgical"]
            },
            {
                id: 22,
                title: "Bad Breath Treatment",
                description: "Professional treatment to identify and eliminate the causes of persistent bad breath.",
                image: "https://via.placeholder.com/400x300?text=Bad+Breath",
                features: ["Fresh breath", "Cause diagnosis", "Personalized care"]
            },
            {
                id: 23,
                title: "Sedation (Sleep) Dentistry",
                description: "Relaxing, anxiety-free dental care for patients with dental phobia or complex procedures.",
                image: "https://via.placeholder.com/400x300?text=Sedation",
                features: ["Stress-free", "Safe sedation", "Comfort-focused"]
            },
            {
                id: 24,
                title: "Emergency Dental Care",
                description: "Prompt treatment for urgent dental issues like severe pain, fractures, or lost teeth.",
                image: "https://via.placeholder.com/400x300?text=Emergency",
                features: ["Immediate care", "Pain management", "Same-day solutions"]
            }
        ]
    }
];