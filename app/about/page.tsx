"use client"

import { Header } from "@/components/layout/header"
import { ContactFooter } from "@/components/home/contact-footer"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Shield, Users, Award, Target, Sparkles, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const values = [
    {
        icon: Heart,
        title: "Compassionate Care",
        description: "We treat every patient with empathy, dignity, and respect."
    },
    {
        icon: Shield,
        title: "Safety First",
        description: "Your safety is our top priority in every procedure and treatment."
    },
    {
        icon: Users,
        title: "Patient-Centered",
        description: "Our services are designed around your needs and comfort."
    },
    {
        icon: Award,
        title: "Excellence",
        description: "We strive for the highest standards in healthcare delivery."
    }
]

const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "500+", label: "Medical Professionals" },
    { number: "50K+", label: "Patients Served Yearly" },
    { number: "98%", label: "Patient Satisfaction" }
]

const team = [
    {
        name: "Dr. Kwame Asante",
        role: "Chief Medical Officer",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop"
    },
    {
        name: "Dr. Ama Mensah",
        role: "Head of Cardiology",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop"
    },
    {
        name: "Dr. Kofi Owusu",
        role: "Director of Surgery",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop"
    },
    {
        name: "Dr. Efua Boateng",
        role: "Head of Pediatrics",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop"
    }
]

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-12 overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />

                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium mb-6 bg-white">
                            <Sparkles className="h-4 w-4" />
                            About Us
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
                            Delivering World-Class Healthcare Since 1999
                        </h1>
                        <p className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Our commitment to excellence in patient care has made us a trusted name in healthcare across Ghana and beyond.
                        </p>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden"
                    >
                        <Image
                            src="https://nextstl.com/wp-content/uploads/13146584425_d9d0402285_o.jpg"
                            alt="Hospital Building"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                        {/* Floating Stats Card */}
                        <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto md:max-w-md bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                {stats.map((stat, i) => (
                                    <div key={i} className="text-center md:text-left">
                                        <p className="text-xl md:text-3xl font-bold text-black">{stat.number}</p>
                                        <p className="text-xs md:text-sm text-gray-500 font-medium">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-16 md:py-24 px-4 md:px-12 bg-[#F8F9FB]">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100"
                        >
                            <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-black flex items-center justify-center mb-6">
                                <Target className="h-7 w-7 md:h-8 md:w-8 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-medium mb-4">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                To provide accessible, high-quality healthcare services that prioritize patient well-being.
                                We are dedicated to advancing medical knowledge, fostering innovation, and creating a
                                compassionate environment for healing.
                            </p>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-black text-white rounded-[2rem] p-6 md:p-10"
                        >
                            <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-white flex items-center justify-center mb-6">
                                <Sparkles className="h-7 w-7 md:h-8 md:w-8 text-black" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-medium mb-4">Our Vision</h2>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                To be the leading healthcare provider in Africa, recognized for excellence in patient care,
                                medical research, and community health initiatives. We aspire to transform lives through
                                innovative and compassionate healthcare.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-24 px-4 md:px-12 bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium mb-6">
                            Core Values
                        </div>
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
                            What We Stand For
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {values.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-gray-50 hover:bg-black rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 transition-all duration-500 cursor-pointer"
                            >
                                <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-white group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                                    <value.icon className="h-6 w-6 md:h-7 md:w-7 text-black group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 group-hover:text-gray-300 text-sm md:text-base leading-relaxed transition-colors">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 md:py-24 px-4 md:px-12 bg-[#F8F9FB]">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium mb-6">
                                Our Team
                            </div>
                            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
                                Meet Our Experts
                            </h2>
                        </div>
                        <Button className="rounded-full bg-black text-white h-12 px-6 w-fit gap-3 hover:bg-black/80">
                            View All Doctors
                            <div className="bg-white/20 rounded-full h-8 w-8 flex items-center justify-center">
                                <ArrowUpRight className="h-4 w-4 text-white" />
                            </div>
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {team.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="relative h-[200px] sm:h-[280px] md:h-[350px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h3 className="font-semibold text-base md:text-lg">{member.name}</h3>
                                <p className="text-gray-500 text-xs md:text-sm">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 px-4 md:px-12 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                            Ready to Experience <br className="hidden md:block" /> World-Class Care?
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg mb-8 max-w-xl mx-auto">
                            Book an appointment today and let our team of specialists take care of your health needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild className="h-14 rounded-full bg-black text-white px-8 gap-3 text-base hover:bg-black/90 shadow-lg shadow-black/10">
                                <Link href="/book-appointment">
                                    Book Appointment
                                    <ArrowUpRight className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="h-14 rounded-full px-8 gap-3 text-base border-gray-200 hover:bg-gray-50">
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
