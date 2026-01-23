"use client"

import { Header } from "@/components/layout/header"
import { ContactFooter } from "@/components/home/contact-footer"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Stethoscope,
    Heart,
    Baby,
    Brain,
    Bone,
    Eye,
    Ear,
    Pill,
    Syringe,
    Microscope,
    Scan,
    Ambulance,
    UserCheck,
    ArrowUpRight,
    Clock,
    Shield,
    Star
} from "lucide-react"

const services = [
    {
        id: 1,
        title: "Outpatient Department (OPD)",
        description: "Comprehensive consultations, diagnosis, and treatment for non-emergency cases. Walk-in and scheduled appointments available.",
        icon: UserCheck,
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop",
        features: ["General Consultations", "Specialist Referrals", "Health Screening"],
        color: "bg-blue-50",
        iconColor: "text-blue-600"
    },
    {
        id: 2,
        title: "Emergency Services",
        description: "24/7 emergency care with fully equipped trauma center, ambulance services, and rapid response team.",
        icon: Ambulance,
        image: "https://plus.unsplash.com/premium_photo-1723708841860-5b00cc402a62?w=800&auto=format&fit=crop",
        features: ["24/7 Availability", "Trauma Care", "Ambulance Service"],
        color: "bg-red-50",
        iconColor: "text-red-600"
    },
    {
        id: 3,
        title: "Cardiology",
        description: "Advanced heart care including ECG, echocardiography, cardiac catheterization, and heart disease management.",
        icon: Heart,
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=600&auto=format&fit=crop",
        features: ["ECG & Echo", "Cardiac Care", "Heart Surgery"],
        color: "bg-pink-50",
        iconColor: "text-pink-600"
    },
    {
        id: 4,
        title: "Pediatrics & Child Health",
        description: "Specialized healthcare for infants, children, and adolescents including immunizations and growth monitoring.",
        icon: Baby,
        image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=600&auto=format&fit=crop",
        features: ["Child Wellness", "Immunization", "Pediatric Surgery"],
        color: "bg-purple-50",
        iconColor: "text-purple-600"
    },
    {
        id: 5,
        title: "ENT (Ear, Nose & Throat)",
        description: "Diagnosis and treatment of ear, nose, throat, and related head and neck disorders.",
        icon: Ear,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop",
        features: ["Hearing Tests", "Sinus Treatment", "Voice Disorders"],
        color: "bg-orange-50",
        iconColor: "text-orange-600"
    },
    {
        id: 6,
        title: "Ophthalmology (Eye Care)",
        description: "Complete eye care services including vision tests, cataract surgery, glaucoma treatment, and corrective procedures.",
        icon: Eye,
        image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=600&auto=format&fit=crop",
        features: ["Vision Testing", "Cataract Surgery", "Glaucoma Care"],
        color: "bg-teal-50",
        iconColor: "text-teal-600"
    },
    {
        id: 7,
        title: "Orthopedics",
        description: "Treatment of musculoskeletal conditions including fractures, joint replacements, and sports injuries.",
        icon: Bone,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=600&auto=format&fit=crop",
        features: ["Fracture Care", "Joint Replacement", "Physiotherapy"],
        color: "bg-amber-50",
        iconColor: "text-amber-600"
    },
    {
        id: 8,
        title: "Neurology",
        description: "Expert care for brain and nervous system disorders including stroke, epilepsy, and headache management.",
        icon: Brain,
        image: "https://images.unsplash.com/photo-1559757175-7a1d6b0c9a5e?q=80&w=600&auto=format&fit=crop",
        features: ["Stroke Care", "EEG Services", "Headache Clinic"],
        color: "bg-indigo-50",
        iconColor: "text-indigo-600"
    },
    {
        id: 9,
        title: "Laboratory Services",
        description: "State-of-the-art diagnostic laboratory with blood tests, urinalysis, microbiology, and pathology services.",
        icon: Microscope,
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=600&auto=format&fit=crop",
        features: ["Blood Tests", "Pathology", "Quick Results"],
        color: "bg-cyan-50",
        iconColor: "text-cyan-600"
    },
    {
        id: 10,
        title: "Radiology & Imaging",
        description: "Advanced imaging services including X-ray, ultrasound, CT scan, and MRI for accurate diagnosis.",
        icon: Scan,
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop",
        features: ["X-Ray", "Ultrasound", "CT & MRI"],
        color: "bg-violet-50",
        iconColor: "text-violet-600"
    },
    {
        id: 11,
        title: "Pharmacy",
        description: "In-house pharmacy stocked with essential medicines, prescription drugs, and health products at affordable prices.",
        icon: Pill,
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=600&auto=format&fit=crop",
        features: ["24/7 Service", "Affordable Prices", "Drug Counseling"],
        color: "bg-green-50",
        iconColor: "text-green-600"
    },
    {
        id: 12,
        title: "Vaccination & Immunization",
        description: "Complete immunization services for children and adults including travel vaccines and flu shots.",
        icon: Syringe,
        image: "https://images.unsplash.com/photo-1615631648086-325025c9e51e?q=80&w=600&auto=format&fit=crop",
        features: ["Child Vaccines", "Travel Vaccines", "Flu Shots"],
        color: "bg-lime-50",
        iconColor: "text-lime-600"
    },
]

const highlights = [
    { icon: Clock, title: "24/7 Services", description: "Round-the-clock emergency and pharmacy services" },
    { icon: Shield, title: "NHIS Accepted", description: "We accept National Health Insurance Scheme" },
    { icon: Star, title: "Quality Care", description: "Accredited by Ghana Health Service" },
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            <Header />

            {/* Hero Section */}
            <section className="pt-28 md:pt-36 pb-12 md:pb-20 px-4 md:px-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium mb-6">
                            <Stethoscope className="h-4 w-4" />
                            Our Services
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6 max-w-4xl mx-auto">
                            Comprehensive Healthcare Services
                        </h1>
                        <p className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto">
                            From routine checkups to specialized treatments, we provide quality healthcare for you and your family.
                        </p>
                    </motion.div>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-white border border-gray-100 shadow-sm"
                            >
                                <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center shrink-0">
                                    <item.icon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm md:text-base">{item.title}</p>
                                    <p className="text-gray-500 text-xs md:text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 md:py-20 px-4 md:px-12">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group bg-white rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500"
                            >
                                {/* Image */}
                                <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                                    {/* Icon Badge */}
                                    <div className={`absolute top-4 left-4 h-11 w-11 md:h-12 md:w-12 rounded-xl ${service.color} flex items-center justify-center`}>
                                        <service.icon className={`h-5 w-5 md:h-6 md:w-6 ${service.iconColor}`} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 md:p-6">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-black transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        href="/book-appointment"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:gap-3 transition-all"
                                    >
                                        Book Appointment
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 px-4 md:px-12 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                            Need Help Choosing a Service?
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
                            Our medical team is available to guide you to the right specialist for your health needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild className="h-14 rounded-full bg-white text-black px-8 gap-3 text-base hover:bg-gray-100">
                                <Link href="/book-appointment">
                                    Book Consultation
                                    <ArrowUpRight className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="h-14 rounded-full px-8 gap-3 text-base border-white/20 text-white hover:bg-white/10">
                                <Link href="/contact">
                                    Contact Us
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <ContactFooter />
        </main>
    )
}
