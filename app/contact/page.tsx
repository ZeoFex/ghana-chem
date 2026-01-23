"use client"

import { Header } from "@/components/layout/header"
import { ContactFooter } from "@/components/home/contact-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        value: "+233 30 123 4567",
        description: "Available 24/7 for emergencies"
    },
    {
        icon: Mail,
        title: "Email",
        value: "info@hospitals.gh",
        description: "We respond within 24 hours"
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Accra, Ghana",
        description: "Visit us at our main campus"
    },
    {
        icon: Clock,
        title: "Hours",
        value: "24/7 Emergency",
        description: "OPD: Mon-Sat, 8AM-6PM"
    }
]

const quickLinks = [
    { label: "Book Appointment", href: "/book-appointment" },
    { label: "Find a Doctor", href: "#" },
    { label: "View Services", href: "#" },
    { label: "Patient Portal", href: "#" }
]

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white md:bg-[#F8F9FB] text-black">
            <Header />

            {/* Hero Section */}
            <section className="pt-28 md:pt-36 pb-8 md:pb-16 px-4 md:px-12">
                <div className="max-w-[1440px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium mb-6">
                            <MessageCircle className="h-4 w-4" />
                            Get in Touch
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6">
                            We&apos;re Here to Help
                        </h1>
                        <p className="text-gray-500 text-base md:text-xl max-w-xl mx-auto">
                            Have questions? Our team is ready to assist you with any inquiries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-16 md:pb-24 px-0 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white md:rounded-[2.5rem] p-6 md:p-12 md:shadow-xl md:border md:border-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="lg:col-span-3"
                            >
                                <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8">Send us a Message</h2>

                                <form className="space-y-4 md:space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        <div>
                                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                                                First Name
                                            </label>
                                            <Input
                                                className="h-14 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-black transition-all"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                                                Last Name
                                            </label>
                                            <Input
                                                className="h-14 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-black transition-all"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                                            Email Address
                                        </label>
                                        <Input
                                            type="email"
                                            className="h-14 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-black transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                                            Phone Number
                                        </label>
                                        <Input
                                            type="tel"
                                            className="h-14 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-black transition-all"
                                            placeholder="+233 XX XXX XXXX"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                                            Your Message
                                        </label>
                                        <textarea
                                            className="w-full p-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-black focus:outline-none min-h-[140px] resize-none text-sm md:text-base transition-all"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    {/* Desktop Submit */}
                                    <div className="hidden md:block">
                                        <Button className="h-14 rounded-full bg-black text-white px-10 gap-3 hover:bg-black/90 font-semibold shadow-lg shadow-black/10">
                                            Send Message
                                            <Send className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </form>
                            </motion.div>

                            {/* Contact Info Sidebar */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="lg:col-span-2"
                            >
                                <div className="bg-[#F8F9FB] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 h-full">
                                    <h3 className="font-semibold text-lg md:text-xl mb-6 md:mb-8">Contact Information</h3>

                                    <div className="space-y-5 md:space-y-6">
                                        {contactInfo.map((item, i) => (
                                            <motion.div
                                                key={item.title}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 + i * 0.1 }}
                                                className="flex items-start gap-4"
                                            >
                                                <div className="h-11 w-11 md:h-12 md:w-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                                                    <item.icon className="h-5 w-5 md:h-6 md:w-6 text-black" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                                                        {item.title}
                                                    </p>
                                                    <p className="font-semibold text-base md:text-lg text-black">
                                                        {item.value}
                                                    </p>
                                                    <p className="text-gray-500 text-xs md:text-sm">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Quick Links */}
                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                                            Quick Links
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {quickLinks.map((link) => (
                                                <Link
                                                    key={link.label}
                                                    href={link.href}
                                                    className="px-4 py-2 rounded-full bg-white border border-gray-100 text-sm font-medium hover:bg-black hover:text-white transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 md:py-24 px-4 md:px-12 bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-medium tracking-tight mb-4">
                            Find Us
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
                            Visit our main campus in Accra for consultations and treatments.
                        </p>
                    </div>

                    <div className="relative h-[300px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gray-100">
                        {/* Styled Map Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <div className="text-center">
                                <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white shadow-2xl flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="h-8 w-8 md:h-10 md:w-10 text-black" />
                                </div>
                                <p className="font-semibold text-lg md:text-xl text-gray-800">Hospital Main Campus</p>
                                <p className="text-gray-500 text-sm md:text-base">Accra, Ghana</p>
                            </div>
                        </div>

                        {/* Get Directions Button */}
                        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
                            <Button className="h-12 md:h-14 rounded-full bg-black text-white px-6 md:px-8 gap-3 hover:bg-black/90 shadow-lg">
                                Get Directions
                                <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Sticky Submit Button */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-100 z-50">
                <Button className="w-full h-14 rounded-2xl bg-black text-white gap-2 font-bold active:scale-[0.98] transition-all shadow-xl shadow-black/10">
                    Send Message
                    <Send className="h-5 w-5" />
                </Button>
            </div>

            <div className="pb-20 md:pb-0">
                <ContactFooter />
            </div>
        </main>
    )
}
