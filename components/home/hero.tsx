"use client";

import Image from "next/image"
import { ArrowUpRight, Play, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Hero() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <section className="relative w-full min-h-screen overflow-hidden pt-36 pb-20 flex flex-col justify-center">

            {/* Full Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://nextstl.com/wp-content/uploads/13146584425_d9d0402285_o.jpg"
                    alt="Barnes-Jewish Hospital"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col items-center text-center h-full pt-12 md:pt-0">

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto drop-shadow-lg">
                    World-Class Care, <br /> Right Here in Hospitals
                </h1>

                <p className="text-white/95 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8 md:mb-12 drop-shadow-md px-4">
                    Experience advanced medical treatments and compassionate care at Hospital. <br className="hidden md:block" />
                    Your wellness is our mission.
                </p>

                {/* Search/CTA Pill */}
                <div className="relative z-30 mb-20 md:mb-12">
                    <div className="bg-white rounded-full p-1.5 pl-6 pr-1.5 md:p-2 md:pl-8 md:pr-2 flex items-center gap-3 md:gap-4 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] animate-float">
                        <span className="text-lg md:text-xl font-semibold text-black tracking-tight">Find a Doctor</span>
                        <Button size="icon" className="rounded-full bg-black text-white h-10 w-10 md:h-12 md:w-12 hover:bg-black/90 transition-transform hover:rotate-45">
                            <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" />
                        </Button>
                    </div>
                </div>

                {/* Morphing Social Widget - Bottom Right */}
                <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-20 flex flex-col items-end">
                    <AnimatePresence mode="wait">
                        {!isChatOpen ? (
                            <motion.button
                                key="chat-btn"
                                layoutId="social-widget"
                                onClick={() => setIsChatOpen(true)}
                                className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <MessageCircle className="h-6 w-6 text-black" />
                            </motion.button>
                        ) : (
                            <motion.div
                                key="social-list"
                                layoutId="social-widget"
                                className="flex flex-col gap-3 items-end bg-transparent"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                            >
                                <motion.button
                                    onClick={() => setIsChatOpen(false)}
                                    className="bg-white rounded-full p-2 mb-1 shadow-md hover:bg-gray-100 transition-colors"
                                    whileHover={{ rotate: 90 }}
                                >
                                    <X className="h-4 w-4 text-black" />
                                </motion.button>

                                {["Instagram", "Twitter", "Facebook"].map((social, i) => (
                                    <motion.div
                                        key={social}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg hover:scale-105 transition-transform cursor-pointer min-w-[140px] text-center"
                                    >
                                        <span className="text-sm font-bold uppercase tracking-wider text-black">{social}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    )
}
