"use client"

import { Header } from "@/components/layout/header"
import { ContactFooter } from "@/components/home/contact-footer"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Building2,
    Bed,
    Baby,
    Heart,
    Pill,
    FlaskConical,
    Scan,
    Syringe,
    Stethoscope,
    Users,
    Car,
    Wifi,
    Coffee,
    ShieldCheck,
    ArrowUpRight,
    MapPin,
    Clock,
    Phone
} from "lucide-react"

const facilities = [
    {
        id: 1,
        name: "General Wards",
        description: "Comfortable and well-ventilated wards with dedicated nursing care. Male, female, and pediatric wards available.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
        icon: Bed,
        capacity: "120 Beds",
        features: ["24/7 Nursing", "Clean Environment", "Visitor Hours"]
    },
    {
        id: 2,
        name: "Private & VIP Rooms",
        description: "Premium private rooms with en-suite bathrooms, AC, TV, and dedicated care for patients seeking extra comfort.",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop",
        icon: Building2,
        capacity: "30 Rooms",
        features: ["En-suite Bathroom", "Air Conditioning", "Private Care"]
    },
    {
        id: 3,
        name: "Maternity Ward",
        description: "Dedicated maternity unit with delivery rooms, post-natal care, and experienced midwives for safe childbirth.",
        image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=800&auto=format&fit=crop",
        icon: Baby,
        capacity: "40 Beds",
        features: ["Delivery Rooms", "Post-natal Care", "Neonatal Unit"]
    },
    {
        id: 4,
        name: "Intensive Care Unit (ICU)",
        description: "State-of-the-art ICU with advanced monitoring equipment and specialized staff for critical care patients.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
        icon: Heart,
        capacity: "15 Beds",
        features: ["Advanced Monitoring", "Ventilators", "24/7 Specialists"]
    },
    {
        id: 5,
        name: "Pharmacy",
        description: "Well-stocked pharmacy with essential medicines, prescription drugs, and over-the-counter medications at affordable prices.",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop",
        icon: Pill,
        capacity: "24/7 Open",
        features: ["Wide Stock", "NHIS Drugs", "Drug Counseling"]
    },
    {
        id: 6,
        name: "Laboratory",
        description: "Modern diagnostic laboratory for blood tests, urinalysis, microbiology, and pathology with quick turnaround times.",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800&auto=format&fit=crop",
        icon: FlaskConical,
        capacity: "Same-Day Results",
        features: ["Blood Tests", "Microbiology", "Histopathology"]
    },
    {
        id: 7,
        name: "Radiology & Imaging",
        description: "Comprehensive imaging services including X-ray, ultrasound, CT scan, and MRI for accurate medical diagnosis.",
        image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop",
        icon: Scan,
        capacity: "5 Machines",
        features: ["X-Ray", "Ultrasound", "CT Scan"]
    },
    {
        id: 8,
        name: "Surgical Theatre",
        description: "Modern operating theatres equipped with advanced surgical equipment for various surgical procedures.",
        image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop",
        icon: Syringe,
        capacity: "4 Theatres",
        features: ["Major Surgery", "Minor Surgery", "Laparoscopy"]
    },
    {
        id: 9,
        name: "Outpatient Department (OPD)",
        description: "Spacious OPD area with multiple consultation rooms, comfortable waiting areas, and efficient patient flow.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
        icon: Stethoscope,
        capacity: "15 Rooms",
        features: ["Waiting Area", "Triage", "Records"]
    },
    {
        id: 10,
        name: "Accident & Emergency",
        description: "24/7 emergency department with trauma bay, resuscitation room, and ambulance bay for urgent medical care.",
        image: "https://plus.unsplash.com/premium_photo-1723708841860-5b00cc402a62?w=800&auto=format&fit=crop",
        icon: Car,
        capacity: "24/7 Service",
        features: ["Trauma Care", "Ambulance Bay", "Resuscitation"]
    },
]

const amenities = [
    { icon: Wifi, label: "Free WiFi" },
    { icon: Coffee, label: "Cafeteria" },
    { icon: Car, label: "Parking" },
    { icon: Users, label: "Waiting Lounge" },
    { icon: ShieldCheck, label: "Security" },
    { icon: Phone, label: "Help Desk" },
]

export default function FacilitiesPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FB] to-white -z-10" />

                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium mb-6">
                            <Building2 className="h-4 w-4" />
                            Our Facilities
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6 max-w-4xl mx-auto">
                            World-Class Hospital Facilities
                        </h1>
                        <p className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto">
                            Modern infrastructure designed for your comfort, safety, and optimal medical care.
                        </p>
                    </motion.div>

                    {/* Hero Image Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
                        {facilities.slice(0, 4).map((facility, i) => (
                            <motion.div
                                key={facility.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative rounded-2xl md:rounded-3xl overflow-hidden ${i === 0 ? "col-span-2 row-span-2 h-[250px] md:h-[400px]" : "h-[120px] md:h-[190px]"
                                    }`}
                            >
                                <Image
                                    src={facility.image}
                                    alt={facility.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                                    <p className="text-white font-semibold text-sm md:text-base">{facility.name}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Amenities Bar */}
                    <div className="bg-black rounded-2xl md:rounded-3xl p-4 md:p-6">
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            {amenities.map((amenity) => (
                                <div key={amenity.label} className="flex items-center gap-2 text-white">
                                    <amenity.icon className="h-5 w-5 text-white/70" />
                                    <span className="text-sm font-medium">{amenity.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities List */}
            <section className="py-12 md:py-20 px-4 md:px-12">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-4xl font-medium tracking-tight mb-4">
                            Explore Our Facilities
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
                            From general wards to specialized units, we have everything needed for comprehensive healthcare.
                        </p>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        {facilities.map((facility, i) => (
                            <motion.div
                                key={facility.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group bg-white rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500"
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Image */}
                                    <div className="relative h-[200px] md:h-auto md:w-[350px] shrink-0 overflow-hidden">
                                        <Image
                                            src={facility.image}
                                            alt={facility.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 md:bg-gradient-to-r md:from-transparent md:to-white" />

                                        {/* Capacity Badge */}
                                        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold">
                                            {facility.capacity}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-5 md:p-8 flex flex-col justify-center">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-black transition-colors">
                                                <facility.icon className="h-6 w-6 md:h-7 md:w-7 text-gray-600 group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                                                    {facility.name}
                                                </h3>
                                                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                                    {facility.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-2 ml-0 md:ml-16">
                                            {facility.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="px-3 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-gray-600"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-16 md:py-24 px-4 md:px-12 bg-[#F8F9FB]">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium mb-6">
                                <MapPin className="h-4 w-4" />
                                Visit Us
                            </div>
                            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                                Come Experience Our Facilities
                            </h2>
                            <p className="text-gray-500 text-base md:text-lg mb-8">
                                We invite you to visit our hospital and see our world-class facilities firsthand.
                                Our team is ready to give you a tour and answer any questions.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center">
                                        <MapPin className="h-6 w-6 text-black" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Address</p>
                                        <p className="text-gray-500 text-sm">Hospital Road, Accra, Ghana</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center">
                                        <Clock className="h-6 w-6 text-black" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Visiting Hours</p>
                                        <p className="text-gray-500 text-sm">Daily: 10:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center">
                                        <Phone className="h-6 w-6 text-black" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Contact</p>
                                        <p className="text-gray-500 text-sm">+233 30 123 4567</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild className="h-14 rounded-full bg-black text-white px-8 gap-3 text-base hover:bg-black/90">
                                    <Link href="/contact">
                                        Get Directions
                                        <ArrowUpRight className="h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="h-14 rounded-full px-8 text-base border-gray-200 hover:bg-white">
                                    <Link href="/book-appointment">
                                        Book a Tour
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gray-200">
                            <Image
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
                                alt="Hospital Building"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white rounded-2xl p-6 text-center shadow-2xl">
                                    <div className="h-16 w-16 rounded-full bg-black flex items-center justify-center mx-auto mb-4">
                                        <MapPin className="h-8 w-8 text-white" />
                                    </div>
                                    <p className="font-semibold text-lg">Hospitals</p>
                                    <p className="text-gray-500 text-sm">Accra, Ghana</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactFooter />
        </main>
    )
}
