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
import dentalcheckup from '../assets/images/dentalcheckup.png'
import cleaning from '../assets/images/cleaning.jpg'
import Xray from "../assets/images/Xray.jpg"
import Advanced from '../assets/images/Advanced.jpg'
import prev from "../assets/images/prev.jpg"
import Rest from "../assets/images/Rest.jpg"
import cos from "../assets/images/cos.jpg"
import gum from "../assets/images/gum.jpg"
import filling from "../assets/images/filling.jpg"
import oral from "../assets/images/oral.jpg"
import dentures from "../assets/images/dentures.jpg"
import tmj from "../assets/images/tmj.jpg"
import veneers from '../assets/images/veneers.jpg'
import crowns from '../assets/images/crowns.jpg'
import braces from "../assets/images/braces.jpg"
import bridges from '../assets/images/bridges.jpg'

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
                image: cleaning,
                features: [
                    "Tartar and plaque removal",
                    "Teeth polishing for a bright smile",
                    "Fluoride application for enamel strength"
                ],
                details: {
                    heading: "The Professional Dental Cleaning Experience",
                    betweenImage: cleaning,
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
            },
            {
                id: 3,
                title: "Cleanings",
                description: "Professional dental cleanings to remove plaque and tartar, keeping your smile healthy and bright.",
                image: cleaning,
                features: [
                    "Plaque removal",
                    "Tartar control",
                    "Polished finish"
                ],
                details: {
                    heading: "Your Guide to Dental Cleanings",
                    betweenImage: cleaning,
                    subSections: [
                        {
                            title: "Initial Examination",
                            description: "A thorough check of your teeth and gums to assess your oral health.",
                            points: [
                                "Oral health assessment",
                                "Gum evaluation",
                                "Cavity check"
                            ]
                        },
                        {
                            title: "Scaling",
                            description: "Removing plaque and tartar buildup from teeth surfaces and below the gumline.",
                            points: [
                                "Ultrasonic scaling",
                                "Hand scaling",
                                "Gumline focus"
                            ]
                        },
                        {
                            title: "Polishing",
                            description: "Smoothing and shining your teeth for a clean, refreshed feel.",
                            points: [
                                "Prophy paste",
                                "Smooth finish",
                                "Stain removal"
                            ]
                        },
                        {
                            title: "Fluoride Treatment",
                            description: "Strengthening your teeth with a fluoride application to prevent cavities.",
                            points: [
                                "Cavity prevention",
                                "Enamel strengthening",
                                "Quick application"
                            ]
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
                        question: "How often should I get a dental cleaning?",
                        answer: "Most patients benefit from cleanings every 6 months, but we tailor recommendations to your needs."
                    },
                    {
                        question: "Is dental cleaning painful?",
                        answer: "Cleanings are typically painless, though some sensitivity may occur, which we manage carefully."
                    },
                    {
                        question: "What’s the difference between cleaning and deep cleaning?",
                        answer: "Regular cleanings maintain oral health, while deep cleanings address gum disease with more intensive care."
                    },
                    {
                        question: "Can cleanings whiten my teeth?",
                        answer: "Cleanings remove surface stains, but for deeper whitening, consider our whitening services."
                    }
                ],
                price: "$100",
                duration: "30 min"
            },
             {
                id: 4,
                title: "Children’s Care Program",
                description: "Fun, gentle dental care designed for kids to promote lifelong healthy habits.",
                image: pedia,
                features: [
                    "Kid-friendly approach",
                    "Preventive focus",
                    "Education for kids"
                ],
                details: {
                    heading: "Your Guide to Children’s Dental Care",
                    betweenImage: pedia,
                    subSections: [
                        {
                            title: "First Visit",
                            description: "A welcoming introduction to dental care to make kids feel comfortable.",
                            points: [
                                "Gentle exam",
                                "Fun environment",
                                "Parent consultation"
                            ]
                        },
                        {
                            title: "Cleaning and Fluoride",
                            description: "Gentle cleaning and fluoride treatment to protect young teeth from cavities.",
                            points: [
                                "Plaque removal",
                                "Fluoride application",
                                "Kid-safe tools"
                            ]
                        },
                        {
                            title: "Education",
                            description: "Teaching kids proper brushing and flossing techniques in a fun way.",
                            points: [
                                "Brushing demos",
                                "Flossing tips",
                                "Healthy habits"
                            ]
                        },
                        {
                            title: "Follow-Up Plan",
                            description: "Regular check-ups to monitor growth and maintain oral health.",
                            points: [
                                "Growth monitoring",
                                "Cavity prevention",
                                "Parent guidance"
                            ]
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
                        question: "At what age should my child see a dentist?",
                        answer: "We recommend the first visit by age 1 or when the first tooth appears."
                    },
                    {
                        question: "Is the children’s program fun for kids?",
                        answer: "Yes, we create a welcoming, playful environment to make visits enjoyable."
                    },
                    {
                        question: "What if my child is scared of the dentist?",
                        answer: "Our team is trained to ease fears with gentle care and a friendly approach."
                    },
                    {
                        question: "Do kids need fluoride treatments?",
                        answer: "Fluoride strengthens young teeth and helps prevent cavities, tailored to your child’s needs."
                    }
                ],
                price: "$80",
                duration: "30 min"
            },
            {
                id: 5,
                title: "Sealants",
                description: "Protective coatings applied to teeth to prevent cavities, especially for kids and teens.",
                image: "sealants",
                features: [
                    "Cavity prevention",
                    "Quick application",
                    "Long-lasting protection"
                ],
                details: {
                    heading: "Your Guide to Dental Sealants",
                    betweenImage: "sealants",
                    subSections: [
                        {
                            title: "Tooth Evaluation",
                            description: "We assess your teeth to identify areas that would benefit from sealants.",
                            points: [
                                "Molar inspection",
                                "Cavity risk assessment",
                                "Sealant suitability"
                            ]
                        },
                        {
                            title: "Tooth Preparation",
                            description: "Teeth are cleaned and prepared to ensure the sealant bonds properly.",
                            points: [
                                "Gentle cleaning",
                                "Dry tooth prep",
                                "Etching for bonding"
                            ]
                        },
                        {
                            title: "Sealant Application",
                            description: "A thin protective coating is applied and hardened to shield teeth from decay.",
                            points: [
                                "Quick application",
                                "UV light curing",
                                "Smooth finish"
                            ]
                        },
                        {
                            title: "Sealant Maintenance",
                            description: "We provide tips to care for sealants and schedule regular check-ups.",
                            points: [
                                "Oral hygiene advice",
                                "Sealant checks",
                                "Long-term protection"
                            ]
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
                        question: "How long do sealants last?",
                        answer: "Sealants can last 5-10 years with proper care and regular check-ups."
                    },
                    {
                        question: "Are sealants only for kids?",
                        answer: "While common for kids, adults at high risk for cavities can also benefit."
                    },
                    {
                        question: "Is sealant application painful?",
                        answer: "No, it’s a quick, painless process with no drilling or discomfort."
                    },
                    {
                        question: "Do sealants change how teeth feel?",
                        answer: "Sealants are thin and smooth, so they feel natural and unnoticeable."
                    }
                ],
                price: "$50 per tooth",
                duration: "20 min"
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
                description: "Repair cavities with durable, tooth-colored materials to restore function and aesthetics.",
                image: filling,
                features: [
                    "Composite material",
                    "Pain-free procedure",
                    "Quick recovery"
                ],
                details: {
                    heading: "Your Guide to Dental Fillings",
                    betweenImage: filling,
                    subSections: [
                        {
                            title: "Initial Assessment",
                            description: "We evaluate the cavity's extent and discuss material options to ensure the best restoration approach.",
                            points: [
                                "Cavity size evaluation",
                                "Material selection consultation",
                                "Patient comfort focus"
                            ]
                        },
                        {
                            title: "Cavity Preparation",
                            description: "The decayed area is carefully removed, and the tooth is prepared for the filling material.",
                            points: [
                                "Precise decay removal",
                                "Tooth structure preservation",
                                "Sterile preparation"
                            ]
                        },
                        {
                            title: "Filling Application",
                            description: "High-quality composite resin is applied, shaped, and hardened to restore the tooth's natural appearance.",
                            points: [
                                "Tooth-colored composite",
                                "Custom shaping",
                                "UV light curing"
                            ]
                        },
                        {
                            title: "Post-Treatment Care",
                            description: "Guidance on maintaining your filling and preventing future cavities with proper oral hygiene.",
                            points: [
                                "Oral hygiene tips",
                                "Follow-up recommendations",
                                "Long-term care advice"
                            ]
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
                        question: "How long do dental fillings last?",
                        answer: "With proper care, composite fillings can last 5-10 years or more, depending on oral hygiene and diet."
                    },
                    {
                        question: "Is the filling procedure painful?",
                        answer: "The procedure is typically pain-free with local anesthesia, ensuring a comfortable experience."
                    },
                    {
                        question: "Can I eat normally after a filling?",
                        answer: "You can resume normal eating after the anesthesia wears off, usually within a few hours."
                    },
                    {
                        question: "Are composite fillings safe?",
                        answer: "Yes, composite fillings are safe, mercury-free, and designed to blend seamlessly with your teeth."
                    }
                ],
                price: "$150",
                duration: "45 min"
            },
            {
                id: 7,
                title: "Crowns",
                description: "Protect and strengthen damaged teeth with custom-made crowns for a natural look and lasting durability.",
                image: crowns,
                features: [
                    "Custom fit",
                    "Durable materials",
                    "Natural appearance"
                ],
                details: {
                    heading: "Your Guide to Dental Crowns",
                    betweenImage: crowns,
                    subSections: [
                        {
                            title: "Tooth Evaluation",
                            description: "We assess the damaged tooth to determine if a crown is the best restoration option.",
                            points: [
                                "Comprehensive tooth inspection",
                                "X-ray diagnostics",
                                "Treatment planning"
                            ]
                        },
                        {
                            title: "Tooth Preparation",
                            description: "The tooth is shaped to accommodate the crown, ensuring a secure and comfortable fit.",
                            points: [
                                "Precise reshaping",
                                "Minimal tooth reduction",
                                "Temporary crown placement"
                            ]
                        },
                        {
                            title: "Crown Fabrication",
                            description: "A custom crown is crafted using high-quality materials to match your natural teeth.",
                            points: [
                                "Digital impressions",
                                "Color matching",
                                "Lab-crafted precision"
                            ]
                        },
                        {
                            title: "Crown Placement",
                            description: "The final crown is securely bonded to the tooth, restoring function and aesthetics.",
                            points: [
                                "Permanent bonding",
                                "Bite alignment check",
                                "Polishing for natural look"
                            ]
                        },
                        {
                            title: "Aftercare Guidance",
                            description: "We provide tips to maintain your crown and ensure its longevity with proper care.",
                            points: [
                                "Oral hygiene instructions",
                                "Diet recommendations",
                                "Regular check-ups"
                            ]
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
                        question: "How long does a crown last?",
                        answer: "With proper care, crowns can last 10-15 years or longer."
                    },
                    {
                        question: "Is getting a crown painful?",
                        answer: "The procedure is performed under anesthesia, ensuring minimal discomfort."
                    },
                    {
                        question: "Can crowns stain?",
                        answer: "Porcelain crowns are highly stain-resistant, maintaining their natural look."
                    },
                    {
                        question: "How soon can I eat after crown placement?",
                        answer: "Avoid hard or sticky foods for 24 hours, but normal eating can typically resume soon after."
                    }
                ],
                price: "$800",
                duration: "1 hr"
            },
            {
                id: 8,
                title: "Bridges",
                description: "Replace missing teeth with a custom dental bridge for a seamless, natural-looking smile.",
                image: bridges,
                features: [
                    "Permanent solution",
                    "Natural appearance",
                    "Comfortable fit"
                ],
                details: {
                    heading: "Your Guide to Dental Bridges",
                    betweenImage: bridges,
                    subSections: [
                        {
                            title: "Initial Consultation",
                            description: "We discuss your needs and evaluate the gap to design a suitable bridge solution.",
                            points: [
                                "Oral health assessment",
                                "Bridge type selection",
                                "Treatment planning"
                            ]
                        },
                        {
                            title: "Tooth Preparation",
                            description: "Adjacent teeth are prepared to support the bridge, ensuring a stable foundation.",
                            points: [
                                "Minimal reshaping",
                                "Impression collection",
                                "Temporary bridge placement"
                            ]
                        },
                        {
                            title: "Bridge Fabrication",
                            description: "A custom bridge is crafted to match your natural teeth in color and shape.",
                            points: [
                                "High-quality materials",
                                "Precise fit design",
                                "Aesthetic matching"
                            ]
                        },
                        {
                            title: "Bridge Placement",
                            description: "The bridge is securely bonded, restoring your smile and chewing function.",
                            points: [
                                "Permanent attachment",
                                "Bite adjustment",
                                "Comfort verification"
                            ]
                        },
                        {
                            title: "Maintenance Tips",
                            description: "Guidance on cleaning and caring for your bridge to ensure long-term success.",
                            points: [
                                "Specialized cleaning tools",
                                "Oral hygiene advice",
                                "Regular dental visits"
                            ]
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
                        question: "How long do dental bridges last?",
                        answer: "With proper care, bridges can last 10-15 years or more."
                    },
                    {
                        question: "Are bridges comfortable to wear?",
                        answer: "Yes, bridges are designed for comfort and feel like natural teeth."
                    },
                    {
                        question: "How do I clean my bridge?",
                        answer: "Use floss threaders or interdental brushes and maintain regular oral hygiene."
                    },
                    {
                        question: "Will my bridge look natural?",
                        answer: "Yes, bridges are custom-made to blend seamlessly with your natural teeth."
                    }
                ],
                price: "$1200",
                duration: "1.5 hr"
            },
            {
                id: 9,
                title: "Dentures",
                description: "Custom-made dentures to replace missing teeth, offering comfort and affordability.",
                image: dentures,
                features: [
                    "Custom fit",
                    "Removable design",
                    "Affordable solution"
                ],
                details: {
                    heading: "Your Guide to Dentures",
                    betweenImage: dentures,
                    subSections: [
                        {
                            title: "Denture Consultation",
                            description: "We assess your oral health and discuss denture options to meet your needs.",
                            points: [
                                "Oral health evaluation",
                                "Denture type selection",
                                "Patient preferences"
                            ]
                        },
                        {
                            title: "Impression Collection",
                            description: "Precise impressions are taken to create dentures that fit comfortably.",
                            points: [
                                "Digital impressions",
                                "Comfort-focused design",
                                "Accurate fit"
                            ]
                        },
                        {
                            title: "Denture Fabrication",
                            description: "Custom dentures are crafted to match your natural appearance and function.",
                            points: [
                                "High-quality materials",
                                "Natural aesthetics",
                                "Lab precision"
                            ]
                        },
                        {
                            title: "Denture Fitting",
                            description: "Your dentures are fitted and adjusted for optimal comfort and functionality.",
                            points: [
                                "Fit adjustments",
                                "Bite alignment",
                                "Comfort testing"
                            ]
                        },
                        {
                            title: "Denture Care Education",
                            description: "We provide instructions on cleaning, storing, and maintaining your dentures.",
                            points: [
                                "Cleaning techniques",
                                "Storage tips",
                                "Regular check-ups"
                            ]
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
                        question: "How long do dentures last?",
                        answer: "Dentures typically last 5-8 years with proper care and may need relining."
                    },
                    {
                        question: "Are dentures comfortable?",
                        answer: "Modern dentures are designed for comfort, with adjustments for a perfect fit."
                    },
                    {
                        question: "Can I eat normally with dentures?",
                        answer: "Yes, after an adjustment period, most patients eat comfortably with dentures."
                    },
                    {
                        question: "How do I clean my dentures?",
                        answer: "Use a soft brush and denture cleaner, and soak them overnight in solution."
                    }
                ],
                price: "$1000",
                duration: "2 hr"
            },
            {
                id: 10,
                title: "Root Canal",
                description: "Treat infected tooth pulp to relieve pain and save the tooth with advanced techniques.",
                image: root,
                features: [
                    "Pain relief",
                    "Saves natural tooth",
                    "Quick recovery"
                ],
                details: {
                    heading: "Your Guide to Root Canal Therapy",
                    betweenImage: root,
                    subSections: [
                        {
                            title: "Diagnosis",
                            description: "We use X-rays and clinical evaluation to confirm infection and plan treatment.",
                            points: [
                                "Digital X-rays",
                                "Symptom assessment",
                                "Treatment planning"
                            ]
                        },
                        {
                            title: "Pulp Removal",
                            description: "The infected pulp is carefully removed, and the tooth's interior is cleaned.",
                            points: [
                                "Local anesthesia",
                                "Precision cleaning",
                                "Infection elimination"
                            ]
                        },
                        {
                            title: "Canal Filling",
                            description: "The cleaned canals are filled with biocompatible material to seal the tooth.",
                            points: [
                                "Gutta-percha filling",
                                "Permanent sealing",
                                "Tooth preservation"
                            ]
                        },
                        {
                            title: "Tooth Restoration",
                            description: "A crown or filling is placed to restore the tooth's strength and function.",
                            points: [
                                "Crown placement option",
                                "Restored functionality",
                                "Aesthetic restoration"
                            ]
                        },
                        {
                            title: "Recovery Guidance",
                            description: "We provide post-treatment care instructions to ensure a smooth recovery.",
                            points: [
                                "Pain management tips",
                                "Oral hygiene advice",
                                "Follow-up visits"
                            ]
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
                        question: "Is a root canal painful?",
                        answer: "With modern anesthesia, root canals are generally pain-free during the procedure."
                    },
                    {
                        question: "How long does recovery take?",
                        answer: "Most patients recover within a few days, with minimal discomfort."
                    },
                    {
                        question: "Can a root canal fail?",
                        answer: "While rare, failures can occur, but we use advanced techniques to ensure success."
                    },
                    {
                        question: "Do I need a crown after a root canal?",
                        answer: "A crown is often recommended to protect the treated tooth and restore strength."
                    }
                ],
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
                description: "Brighten your smile with professional whitening for fast, safe, and long-lasting results.",
                image: white,
                features: [
                    "Fast results",
                    "Safe procedure",
                    "Long-lasting brightness"
                ],
                details: {
                    heading: "Your Guide to Teeth Whitening",
                    betweenImage: white,
                    subSections: [
                        {
                            title: "Smile Assessment",
                            description: "We evaluate your teeth to determine the best whitening approach for your needs.",
                            points: [
                                "Stain type analysis",
                                "Whitening suitability check",
                                "Personalized plan"
                            ]
                        },
                        {
                            title: "Whitening Application",
                            description: "A professional-grade whitening gel is applied to safely brighten your teeth.",
                            points: [
                                "High-potency gel",
                                "Protective barriers",
                                "Controlled application"
                            ]
                        },
                        {
                            title: "Light Activation",
                            description: "Advanced light technology enhances the whitening process for optimal results.",
                            points: [
                                "LED light activation",
                                "Faster whitening",
                                "Safe for enamel"
                            ]
                        },
                        {
                            title: "Post-Treatment Care",
                            description: "We provide tips to maintain your bright smile and avoid staining.",
                            points: [
                                "Diet recommendations",
                                "Oral hygiene tips",
                                "Touch-up options"
                            ]
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
                        question: "How long does teeth whitening last?",
                        answer: "Results can last 6 months to 2 years, depending on diet and oral hygiene."
                    },
                    {
                        question: "Is teeth whitening safe?",
                        answer: "Yes, our professional whitening is safe and protects your enamel."
                    },
                    {
                        question: "Will whitening cause sensitivity?",
                        answer: "Some patients may experience mild sensitivity, which typically resolves quickly."
                    },
                    {
                        question: "Can I whiten my teeth at home?",
                        answer: "We offer take-home kits for maintenance, but in-office whitening is most effective."
                    }
                ],
                price: "$300",
                duration: "1 hr"
            },
            {
                id: 12,
                title: "Veneers",
                description: "Custom porcelain shells to perfect your smile, covering imperfections for a natural look.",
                image: veneers,
                features: [
                    "Natural appearance",
                    "Durable material",
                    "Stain-resistant"
                ],
                details: {
                    heading: "Your Guide to Veneers",
                    betweenImage: veneers,
                    subSections: [
                        {
                            title: "Smile Evaluation",
                            description: "We assess your teeth to design veneers that enhance your smile's aesthetics.",
                            points: [
                                "Tooth shape analysis",
                                "Color matching",
                                "Smile goal discussion"
                            ]
                        },
                        {
                            title: "Tooth Preparation",
                            description: "Minimal enamel is removed to prepare your teeth for veneer placement.",
                            points: [
                                "Conservative enamel removal",
                                "Digital impressions",
                                "Temporary veneers"
                            ]
                        },
                        {
                            title: "Veneer Fabrication",
                            description: "Custom veneers are crafted in a lab to match your desired look.",
                            points: [
                                "Porcelain material",
                                "Precise fit",
                                "Natural aesthetics"
                            ]
                        },
                        {
                            title: "Veneer Bonding",
                            description: "Veneers are permanently bonded to your teeth for a flawless smile.",
                            points: [
                                "Secure adhesion",
                                "Bite adjustment",
                                "Polishing for shine"
                            ]
                        },
                        {
                            title: "Care Instructions",
                            description: "We provide tips to maintain your veneers and keep your smile radiant.",
                            points: [
                                "Oral hygiene advice",
                                "Diet recommendations",
                                "Regular check-ups"
                            ]
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
                        question: "How long do veneers last?",
                        answer: "Veneers can last 10-15 years with proper care."
                    },
                    {
                        question: "Are veneers reversible?",
                        answer: "Veneers are not reversible due to enamel removal, but they are durable."
                    },
                    {
                        question: "Do veneers require special care?",
                        answer: "Maintain them with regular brushing, flossing, and dental visits."
                    },
                    {
                        question: "Will veneers look natural?",
                        answer: "Yes, veneers are custom-designed to blend seamlessly with your smile."
                    }
                ],
                price: "$900",
                duration: "2 hr"
            },
            {
                id: 13,
                title: "Invisalign",
                description: "Straighten your teeth with clear, removable aligners for a discreet and comfortable experience.",
                image: dentalcheckup,
                features: [
                    "Invisible aligners",
                    "Comfortable fit",
                    "Removable design"
                ],
                details: {
                    heading: "Your Guide to Invisalign",
                    betweenImage: dentalcheckup,
                    subSections: [
                        {
                            title: "Orthodontic Evaluation",
                            description: "We assess your teeth to determine if Invisalign is right for you.",
                            points: [
                                "Bite analysis",
                                "Digital scanning",
                                "Treatment planning"
                            ]
                        },
                        {
                            title: "Custom Aligner Creation",
                            description: "Custom aligners are designed to gradually shift your teeth into place.",
                            points: [
                                "3D-printed aligners",
                                "Personalized treatment plan",
                                "Multiple aligner sets"
                            ]
                        },
                        {
                            title: "Aligner Usage",
                            description: "Wear your aligners for 20-22 hours daily, switching sets as directed.",
                            points: [
                                "Comfortable wear",
                                "Easy removal for eating",
                                "Progress monitoring"
                            ]
                        },
                        {
                            title: "Progress Check-Ups",
                            description: "Regular visits ensure your treatment is on track and adjustments are made.",
                            points: [
                                "Treatment monitoring",
                                "Aligner adjustments",
                                "Smile progress tracking"
                            ]
                        },
                        {
                            title: "Post-Treatment Retention",
                            description: "Retainers maintain your new smile after Invisalign treatment is complete.",
                            points: [
                                "Custom retainers",
                                "Long-term results",
                                "Care instructions"
                            ]
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
                        question: "How long does Invisalign take?",
                        answer: "Treatment typically takes 12-18 months, depending on case complexity."
                    },
                    {
                        question: "Are Invisalign aligners comfortable?",
                        answer: "Yes, they are smooth and custom-fit for minimal discomfort."
                    },
                    {
                        question: "Can I eat with Invisalign?",
                        answer: "Aligners are removed for eating, allowing you to enjoy all foods."
                    },
                    {
                        question: "How often do I change aligners?",
                        answer: "You typically switch to a new set every 1-2 weeks, as directed."
                    }
                ],
                price: "$4000",
                duration: "Varies"
            },
            {
                id: 14,
                title: "Braces",
                description: "Traditional braces to straighten teeth and correct bite issues with reliable results.",
                image: braces,
                features: [
                    "Effective alignment",
                    "Customizable options",
                    "Proven results"
                ],
                details: {
                    heading: "Your Guide to Braces",
                    betweenImage: braces,
                    subSections: [
                        {
                            title: "Orthodontic Assessment",
                            description: "We evaluate your teeth and bite to create a personalized braces plan.",
                            points: [
                                "Bite and alignment check",
                                "X-ray diagnostics",
                                "Treatment goal setting"
                            ]
                        },
                        {
                            title: "Braces Installation",
                            description: "Brackets and wires are carefully placed to begin tooth alignment.",
                            points: [
                                "Precise bracket placement",
                                "Comfort-focused installation",
                                "Wire adjustments"
                            ]
                        },
                        {
                            title: "Regular Adjustments",
                            description: "Periodic visits to adjust wires and monitor progress for optimal results.",
                            points: [
                                "Wire tightening",
                                "Progress tracking",
                                "Comfort adjustments"
                            ]
                        },
                        {
                            title: "Braces Removal",
                            description: "Once aligned, braces are removed, revealing your new smile.",
                            points: [
                                "Safe removal process",
                                "Tooth polishing",
                                "Smile reveal"
                            ]
                        },
                        {
                            title: "Retention Phase",
                            description: "Retainers are provided to maintain your new smile long-term.",
                            points: [
                                "Custom retainers",
                                "Retention instructions",
                                "Follow-up care"
                            ]
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
                        question: "How long do I need to wear braces?",
                        answer: "Treatment typically lasts 1-3 years, depending on your case."
                    },
                    {
                        question: "Are braces painful?",
                        answer: "Mild discomfort may occur after adjustments, but it’s temporary."
                    },
                    {
                        question: "Can I eat normally with braces?",
                        answer: "Avoid sticky or hard foods, but most foods are manageable with care."
                    },
                    {
                        question: "How do I clean my braces?",
                        answer: "Use a toothbrush, floss, and interdental brushes for thorough cleaning."
                    }
                ],
                price: "$200",
                duration: "30 min"
            },
            {
                id: 15,
                title: "Clear Aligners",
                description: "Comprehensive smile enhancement with clear aligners for discreet teeth straightening.",
                image: dentalcheckup,
                features: [
                    "Custom treatment plan",
                    "Multiple aligner sets",
                    "Transformative results"
                ],
                details: {
                    heading: "Your Guide to Clear Aligners",
                    betweenImage: dentalcheckup,
                    subSections: [
                        {
                            title: "Smile Assessment",
                            description: "We analyze your teeth to create a custom aligner treatment plan.",
                            points: [
                                "Digital scanning",
                                "Bite evaluation",
                                "Goal setting"
                            ]
                        },
                        {
                            title: "Aligner Fabrication",
                            description: "Custom aligners are crafted to gradually move your teeth into alignment.",
                            points: [
                                "3D-printed aligners",
                                "Precise fit",
                                "Multiple sets"
                            ]
                        },
                        {
                            title: "Aligner Usage",
                            description: "Wear aligners for 20-22 hours daily, switching sets as prescribed.",
                            points: [
                                "Comfortable design",
                                "Removable for eating",
                                "Progress monitoring"
                            ]
                        },
                        {
                            title: "Progress Monitoring",
                            description: "Regular check-ups ensure your treatment stays on track.",
                            points: [
                                "Alignment checks",
                                "Adjustments as needed",
                                "Smile progress tracking"
                            ]
                        },
                        {
                            title: "Retention Phase",
                            description: "Retainers maintain your new smile after treatment completion.",
                            points: [
                                "Custom retainers",
                                "Long-term care",
                                "Follow-up visits"
                            ]
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
                        question: "How long do clear aligners take?",
                        answer: "Treatment typically takes 12-18 months, depending on complexity."
                    },
                    {
                        question: "Are clear aligners noticeable?",
                        answer: "They are nearly invisible, making them a discreet option."
                    },
                    {
                        question: "Can I eat with clear aligners?",
                        answer: "Aligners are removed for eating, allowing dietary freedom."
                    },
                    {
                        question: "How do I clean my aligners?",
                        answer: "Rinse and brush aligners gently with a soft toothbrush."
                    }
                ],
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
                image: implants,
                features: [
                    "Permanent solution",
                    "Natural appearance",
                    "Durable material"
                ],
                details: {
                    heading: "Your Guide to Dental Implants",
                    betweenImage: "implants",
                    subSections: [
                        {
                            title: "Implant Consultation",
                            description: "We assess your oral health and bone structure to plan implant placement.",
                            points: [
                                "Bone density evaluation",
                                "X-ray diagnostics",
                                "Treatment planning"
                            ]
                        },
                        {
                            title: "Implant Placement",
                            description: "A titanium post is surgically placed in the jawbone to act as a tooth root.",
                            points: [
                                "Minimally invasive surgery",
                                "Local anesthesia",
                                "Precise placement"
                            ]
                        },
                        {
                            title: "Osseointegration",
                            description: "The implant fuses with the jawbone over several months for stability.",
                            points: [
                                "Natural bone integration",
                                "Healing period",
                                "Temporary restoration"
                            ]
                        },
                        {
                            title: "Crown Attachment",
                            description: "A custom crown is placed on the implant, completing the restoration.",
                            points: [
                                "Custom crown design",
                                "Secure attachment",
                                "Natural aesthetics"
                            ]
                        },
                        {
                            title: "Implant Care",
                            description: "Guidance on maintaining your implant for long-term success.",
                            points: [
                                "Oral hygiene tips",
                                "Regular check-ups",
                                "Longevity advice"
                            ]
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
                        question: "How long do dental implants last?",
                        answer: "Implants can last a lifetime with proper care and maintenance."
                    },
                    {
                        question: "Is implant surgery painful?",
                        answer: "The procedure is performed under anesthesia, ensuring minimal discomfort."
                    },
                    {
                        question: "How long is the implant process?",
                        answer: "The full process, including healing, typically takes 3-6 months."
                    },
                    {
                        question: "Can anyone get implants?",
                        answer: "Most patients with sufficient bone density are candidates, but we assess each case."
                    }
                ]
            },
            {
                id: 17,
                title: "Root Canals (Endodontics)",
                description: "Specialized treatment to save severely decayed or infected teeth and alleviate pain.",
                image: root,
                features: [
                    "Pain relief",
                    "Tooth preservation",
                    "Advanced techniques"
                ],
                details: {
                    heading: "Your Guide to Root Canal Therapy",
                    betweenImage: root,
                    subSections: [
                        {
                            title: "Infection Diagnosis",
                            description: "We use advanced diagnostics to confirm infection and plan treatment.",
                            points: [
                                "Digital X-rays",
                                "Symptom evaluation",
                                "Treatment planning"
                            ]
                        },
                        {
                            title: "Pulp Removal",
                            description: "The infected pulp is removed, and the tooth's interior is cleaned thoroughly.",
                            points: [
                                "Local anesthesia",
                                "Precision cleaning",
                                "Infection removal"
                            ]
                        },
                        {
                            title: "Canal Filling",
                            description: "The cleaned canals are filled with biocompatible material to seal the tooth.",
                            points: [
                                "Gutta-percha filling",
                                "Permanent sealing",
                                "Tooth preservation"
                            ]
                        },
                        {
                            title: "Tooth Restoration",
                            description: "A crown or filling restores the tooth's strength and appearance.",
                            points: [
                                "Crown placement option",
                                "Restored functionality",
                                "Aesthetic restoration"
                            ]
                        },
                        {
                            title: "Recovery Guidance",
                            description: "We provide tips for a smooth recovery and long-term tooth health.",
                            points: [
                                "Pain management advice",
                                "Oral hygiene tips",
                                "Follow-up care"
                            ]
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
                        question: "Is a root canal painful?",
                        answer: "With modern anesthesia, root canals are generally pain-free during treatment."
                    },
                    {
                        question: "How long does recovery take?",
                        answer: "Most patients recover within a few days with minimal discomfort."
                    },
                    {
                        question: "Can a root canal fail?",
                        answer: "Failures are rare, but we use advanced techniques to ensure success."
                    },
                    {
                        question: "Do I need a crown after a root canal?",
                        answer: "A crown is often recommended to protect the treated tooth."
                    }
                ]
            },
            {
                id: 18,
                title: "Extractions (Oral Surgery)",
                description: "Safe and effective removal of problematic teeth, including wisdom teeth and damaged teeth.",
                image: oral,
                features: [
                    "Painless procedure",
                    "Quick recovery",
                    "Expert surgical care"
                ],
                details: {
                    heading: "Your Guide to Tooth Extractions",
                    betweenImage: oral,
                    subSections: [
                        {
                            title: "Extraction Evaluation",
                            description: "We assess the tooth to determine if extraction is necessary and plan the procedure.",
                            points: [
                                "X-ray diagnostics",
                                "Tooth condition analysis",
                                "Treatment planning"
                            ]
                        },
                        {
                            title: "Extraction Procedure",
                            description: "The tooth is carefully removed using minimally invasive techniques.",
                            points: [
                                "Local anesthesia",
                                "Gentle extraction",
                                "Patient comfort focus"
                            ]
                        },
                        {
                            title: "Post-Extraction Care",
                            description: "We provide instructions to promote healing and prevent complications.",
                            points: [
                                "Wound care tips",
                                "Pain management",
                                "Healing monitoring"
                            ]
                        },
                        {
                            title: "Replacement Options",
                            description: "We discuss options like implants or bridges to replace the extracted tooth.",
                            points: [
                                "Implant consultation",
                                "Bridge options",
                                "Aesthetic solutions"
                            ]
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
                        question: "Is tooth extraction painful?",
                        answer: "With anesthesia, the procedure is typically pain-free, with mild post-op discomfort."
                    },
                    {
                        question: "How long does recovery take?",
                        answer: "Recovery usually takes a few days to a week, depending on the extraction."
                    },
                    {
                        question: "Can I replace an extracted tooth?",
                        answer: "Yes, options like implants or bridges can restore your smile."
                    },
                    {
                        question: "What are the risks of extraction?",
                        answer: "Risks are minimal but include infection or dry socket, which we help prevent."
                    }
                ]
            },
            {
                id: 19,
                title: "Gum Disease (Periodontics)",
                description: "Advanced care for gum disease, including deep cleanings and surgical options for healthier gums.",
                image: gum,
                features: [
                    "Healthy gums",
                    "Disease control",
                    "Preventive care"
                ],
                details: {
                    heading: "Your Guide to Gum Disease Treatment",
                    betweenImage: gum,
                    subSections: [
                        {
                            title: "Gum Health Assessment",
                            description: "We evaluate your gums to diagnose the extent of gum disease.",
                            points: [
                                "Periodontal probing",
                                "X-ray diagnostics",
                                "Disease staging"
                            ]
                        },
                        {
                            title: "Deep Cleaning",
                            description: "Scaling and root planing remove plaque and tartar to promote gum healing.",
                            points: [
                                "Non-surgical cleaning",
                                "Tartar removal",
                                "Root smoothing"
                            ]
                        },
                        {
                            title: "Surgical Options",
                            description: "Advanced cases may require surgical intervention to restore gum health.",
                            points: [
                                "Gum flap surgery",
                                "Bone grafting",
                                "Tissue regeneration"
                            ]
                        },
                        {
                            title: "Maintenance Plan",
                            description: "We create a plan to prevent gum disease recurrence and maintain oral health.",
                            points: [
                                "Regular cleanings",
                                "Oral hygiene tips",
                                "Follow-up visits"
                            ]
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
                        question: "Can gum disease be reversed?",
                        answer: "Early-stage gum disease can often be reversed with proper treatment."
                    },
                    {
                        question: "Is gum treatment painful?",
                        answer: "Treatments are performed with anesthesia for a comfortable experience."
                    },
                    {
                        question: "How do I prevent gum disease?",
                        answer: "Regular brushing, flossing, and dental visits help prevent gum disease."
                    },
                    {
                        question: "What happens if gum disease is untreated?",
                        answer: "Untreated gum disease can lead to tooth loss and other health issues."
                    }
                ]
            },
            {
                id: 20,
                title: "Obstructive Sleep Apnea Treatment",
                description: "Oral appliance therapy to improve breathing during sleep and reduce sleep apnea symptoms.",
                image: "https://via.placeholder.com/400x300?text=Sleep+Apnea",
                features: [
                    "Better sleep quality",
                    "Comfortable devices",
                    "Custom fit"
                ],
                details: {
                    heading: "Your Guide to Sleep Apnea Treatment",
                    betweenImage: "https://via.placeholder.com/400x300?text=Sleep+Apnea",
                    subSections: [
                        {
                            title: "Sleep Apnea Diagnosis",
                            description: "We collaborate with sleep specialists to confirm your diagnosis and plan treatment.",
                            points: [
                                "Sleep study referral",
                                "Symptom evaluation",
                                "Oral health check"
                            ]
                        },
                        {
                            title: "Appliance Design",
                            description: "A custom oral appliance is created to keep your airway open during sleep.",
                            points: [
                                "Digital impressions",
                                "Custom-fit device",
                                "Comfort-focused design"
                            ]
                        },
                        {
                            title: "Appliance Fitting",
                            description: "The appliance is fitted and adjusted for optimal comfort and effectiveness.",
                            points: [
                                "Fit adjustments",
                                "Function testing",
                                "Patient feedback"
                            ]
                        },
                        {
                            title: "Treatment Monitoring",
                            description: "Regular check-ups ensure the appliance is working and improving your sleep.",
                            points: [
                                "Effectiveness checks",
                                "Adjustments as needed",
                                "Sleep quality tracking"
                            ]
                        },
                        {
                            title: "Care Instructions",
                            description: "We provide guidance on using and maintaining your oral appliance.",
                            points: [
                                "Cleaning tips",
                                "Storage advice",
                                "Long-term care"
                            ]
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
                        question: "How effective are oral appliances for sleep apnea?",
                        answer: "They are highly effective for mild to moderate sleep apnea and improve sleep quality."
                    },
                    {
                        question: "Are oral appliances comfortable?",
                        answer: "Yes, they are custom-fit for comfort and easy to wear during sleep."
                    },
                    {
                        question: "How do I clean my appliance?",
                        answer: "Clean with a soft brush and mild soap, and store in a dry case."
                    },
                    {
                        question: "Will insurance cover sleep apnea treatment?",
                        answer: "Many plans cover oral appliances; we can assist with verification."
                    }
                ]
            },
            {
                id: 21,
                title: "TMJ Treatment",
                description: "Relief from jaw pain, headaches, and bite problems with advanced TMJ therapies.",
                image: tmj,
                features: [
                    "Jaw pain relief",
                    "Improved bite",
                    "Non-surgical options"
                ],
                details: {
                    heading: "Your Guide to TMJ Treatment",
                    betweenImage: tmj,
                    subSections: [
                        {
                            title: "TMJ Evaluation",
                            description: "We assess your jaw function and symptoms to diagnose TMJ disorders.",
                            points: [
                                "Jaw movement analysis",
                                "Symptom review",
                                "Diagnostic imaging"
                            ]
                        },
                        {
                            title: "Custom Splint Therapy",
                            description: "A custom oral splint is designed to reduce jaw strain and improve alignment.",
                            points: [
                                "Custom-fit splint",
                                "Nighttime wear option",
                                "Pain relief focus"
                            ]
                        },
                        {
                            title: "Physical Therapy",
                            description: "Targeted exercises and therapies to improve jaw function and reduce pain.",
                            points: [
                                "Jaw exercises",
                                "Muscle relaxation techniques",
                                "Pain management"
                            ]
                        },
                        {
                            title: "Lifestyle Adjustments",
                            description: "We provide guidance on habits to minimize TMJ stress and symptoms.",
                            points: [
                                "Stress management tips",
                                "Diet recommendations",
                                "Posture advice"
                            ]
                        },
                        {
                            title: "Follow-Up Care",
                            description: "Regular visits to monitor progress and adjust treatment as needed.",
                            points: [
                                "Symptom tracking",
                                "Splint adjustments",
                                "Long-term relief plan"
                            ]
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
                        question: "What causes TMJ disorders?",
                        answer: "Causes include stress, teeth grinding, arthritis, or jaw misalignment."
                    },
                    {
                        question: "Is TMJ treatment painful?",
                        answer: "Non-surgical treatments are gentle and focus on relieving discomfort."
                    },
                    {
                        question: "How long does TMJ treatment take?",
                        answer: "Relief can begin within weeks, but full treatment varies by case."
                    },
                    {
                        question: "Can TMJ be cured?",
                        answer: "Many patients achieve significant relief with proper treatment and care."
                    }
                ]
            },
            {
                id: 22,
                title: "Bad Breath Treatment",
                description: "Professional treatment to identify and eliminate the causes of persistent bad breath.",
                image: "https://via.placeholder.com/400x300?text=Bad+Breath",
                features: [
                    "Fresh breath",
                    "Cause diagnosis",
                    "Personalized care"
                ],
                details: {
                    heading: "Your Guide to Bad Breath Treatment",
                    betweenImage: "https://via.placeholder.com/400x300?text=Bad+Breath",
                    subSections: [
                        {
                            title: "Cause Assessment",
                            description: "We identify the root causes of bad breath, such as oral or systemic issues.",
                            points: [
                                "Oral health evaluation",
                                "Medical history review",
                                "Breath analysis"
                            ]
                        },
                        {
                            title: "Oral Hygiene Plan",
                            description: "A tailored plan to improve oral hygiene and eliminate bad breath causes.",
                            points: [
                                "Advanced brushing techniques",
                                "Tongue cleaning",
                                "Flossing guidance"
                            ]
                        },
                        {
                            title: "Professional Cleaning",
                            description: "Deep cleaning to remove plaque and bacteria contributing to bad breath.",
                            points: [
                                "Scaling and polishing",
                                "Bacteria removal",
                                "Gum health improvement"
                            ]
                        },
                        {
                            title: "Lifestyle Recommendations",
                            description: "Guidance on diet and habits to maintain fresh breath long-term.",
                            points: [
                                "Hydration tips",
                                "Dietary adjustments",
                                "Smoking cessation advice"
                            ]
                        },
                        {
                            title: "Follow-Up Care",
                            description: "Regular visits to monitor progress and ensure lasting results.",
                            points: [
                                "Breath checks",
                                "Hygiene adjustments",
                                "Ongoing support"
                            ]
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
                        question: "What causes bad breath?",
                        answer: "Causes include poor oral hygiene, gum disease, diet, or medical conditions."
                    },
                    {
                        question: "How quickly can bad breath be treated?",
                        answer: "Many patients see improvement within days with proper treatment."
                    },
                    {
                        question: "Do I need special products for bad breath?",
                        answer: "We recommend specific hygiene products tailored to your needs."
                    },
                    {
                        question: "Can bad breath indicate health issues?",
                        answer: "Yes, it can sometimes signal underlying dental or medical conditions."
                    }
                ]
            },
            {
                id: 23,
                title: "Sedation (Sleep) Dentistry",
                description: "Relaxing, anxiety-free dental care for patients with dental phobia or complex procedures.",
                image: "https://via.placeholder.com/400x300?text=Sedation",
                features: [
                    "Stress-free experience",
                    "Safe sedation",
                    "Comfort-focused"
                ],
                details: {
                    heading: "Your Guide to Sedation Dentistry",
                    betweenImage: "https://via.placeholder.com/400x300?text=Sedation",
                    subSections: [
                        {
                            title: "Sedation Consultation",
                            description: "We assess your needs and medical history to choose the best sedation option.",
                            points: [
                                "Medical history review",
                                "Anxiety assessment",
                                "Sedation planning"
                            ]
                        },
                        {
                            title: "Sedation Administration",
                            description: "Safe sedation methods, like oral or IV sedation, ensure a relaxed experience.",
                            points: [
                                "Oral sedation option",
                                "IV sedation option",
                                "Monitored safety"
                            ]
                        },
                        {
                            title: "Dental Procedure",
                            description: "Your dental treatment is performed while you’re comfortably sedated.",
                            points: [
                                "Pain-free treatment",
                                "Relaxed state",
                                "Expert care"
                            ]
                        },
                        {
                            title: "Recovery Process",
                            description: "We monitor your recovery and provide post-sedation care instructions.",
                            points: [
                                "Safe recovery monitoring",
                                "Post-sedation guidance",
                                "Comfort assurance"
                            ]
                        },
                        {
                            title: "Follow-Up Care",
                            description: "We ensure your recovery is smooth and address any concerns post-treatment.",
                            points: [
                                "Follow-up visits",
                                "Recovery tips",
                                "Ongoing support"
                            ]
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
                        question: "Is sedation dentistry safe?",
                        answer: "Yes, with proper monitoring and trained professionals, it’s very safe."
                    },
                    {
                        question: "Will I be unconscious during sedation?",
                        answer: "Depending on the sedation type, you may be relaxed or lightly asleep."
                    },
                    {
                        question: "How long does sedation last?",
                        answer: "Effects typically wear off within a few hours, depending on the method."
                    },
                    {
                        question: "Can anyone use sedation dentistry?",
                        answer: "Most patients are eligible, but we assess your medical history first."
                    }
                ]
            },
            {
                id: 24,
                title: "Emergency Dental Care",
                description: "Prompt treatment for urgent dental issues like severe pain, fractures, or lost teeth.",
                image: care,
                features: [
                    "Immediate care",
                    "Pain management",
                    "Same-day solutions"
                ],
                details: {
                    heading: "Your Guide to Emergency Dental Care",
                    betweenImage: care,
                    subSections: [
                        {
                            title: "Emergency Assessment",
                            description: "We quickly evaluate your dental emergency to determine the best treatment.",
                            points: [
                                "Rapid diagnosis",
                                "X-ray imaging",
                                "Pain assessment"
                            ]
                        },
                        {
                            title: "Immediate Treatment",
                            description: "Urgent care to address pain, fractures, or other emergencies effectively.",
                            points: [
                                "Pain relief",
                                "Temporary restorations",
                                "Infection control"
                            ]
                        },
                        {
                            title: "Follow-Up Plan",
                            description: "We create a plan for any additional treatment needed to restore your oral health.",
                            points: [
                                "Permanent restoration options",
                                "Follow-up appointments",
                                "Recovery guidance"
                            ]
                        },
                        {
                            title: "Preventive Advice",
                            description: "Tips to prevent future emergencies and maintain oral health.",
                            points: [
                                "Oral hygiene tips",
                                "Protective measures",
                                "Regular check-ups"
                            ]
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
                        question: "What qualifies as a dental emergency?",
                        answer: "Severe pain, broken teeth, or lost restorations are common emergencies."
                    },
                    {
                        question: "How quickly can I be seen?",
                        answer: "We prioritize emergencies and offer same-day appointments when possible."
                    },
                    {
                        question: "Will emergency care be painful?",
                        answer: "We use anesthesia and gentle techniques to ensure your comfort."
                    },
                    {
                        question: "What should I do before arriving?",
                        answer: "Rinse your mouth gently and contact us for immediate guidance."
                    }
                ]
            }
        ]
    }
];