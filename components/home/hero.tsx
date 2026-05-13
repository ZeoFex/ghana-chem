"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Linkedin, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
    const [socialOpen, setSocialOpen] = useState(false);

    return (
        <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden pb-20 pt-32 sm:pt-36">

            <div className="absolute inset-0 z-0">
                <Image
                    src="/Hero/hero.jpg"
                    alt="Scientist handling test tubes and laboratory glassware"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/45 to-slate-950/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-gcs-primary/25 via-transparent to-gcs-secondary/20" />
            </div>

            <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col items-center px-4 pt-10 text-center sm:px-8 md:pt-0">

                <p className="mb-4 max-w-2xl text-xs font-semibold uppercase tracking-[0.35em] text-white/90 sm:text-sm">
                    Ghana Chemical Society
                </p>

                <h1 className="mb-6 max-w-5xl text-4xl font-medium leading-[1.08] tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl">
                    Chemistry that serves <br className="hidden sm:block" />
                    Ghana and the world
                </h1>

                <p className="mb-8 max-w-2xl px-2 text-base font-light leading-relaxed text-white/95 drop-shadow-sm sm:text-lg md:mb-12 md:text-xl">
                    Advancing chemistry education, research, innovation, and collaboration across
                    universities, industry, and public institutions.
                </p>

                <div className="relative z-30 mb-16 md:mb-12">
                    <Link
                        href="/membership"
                        className="group inline-flex animate-float items-center gap-3 rounded-full bg-white p-1.5 pl-6 pr-1.5 shadow-[0_20px_40px_-5px_rgba(15,23,42,0.45)] transition-transform hover:scale-[1.01] md:gap-4 md:p-2 md:pl-8 md:pr-2"
                    >
                        <span className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
                            Become a member
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gcs-primary text-white transition-transform group-hover:rotate-45 group-hover:bg-gcs-primary-hover md:h-12 md:w-12">
                            <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" />
                        </span>
                    </Link>
                </div>

                <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end md:bottom-12 md:right-12">
                    <AnimatePresence mode="wait">
                        {!socialOpen ? (
                            <motion.button
                                key="social-btn"
                                layoutId="connect-widget"
                                type="button"
                                onClick={() => setSocialOpen(true)}
                                className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl transition-transform hover:scale-105"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Open contact options"
                            >
                                <Mail className="h-6 w-6 text-gcs-primary" />
                            </motion.button>
                        ) : (
                            <motion.div
                                key="social-list"
                                layoutId="connect-widget"
                                className="flex flex-col items-end gap-3 bg-transparent"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                            >
                                <motion.button
                                    type="button"
                                    onClick={() => setSocialOpen(false)}
                                    className="mb-1 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-slate-100"
                                    whileHover={{ rotate: 90 }}
                                >
                                    <X className="h-4 w-4 text-gcs-foreground" />
                                </motion.button>

                                <motion.a
                                    href="mailto:secretariat@ghanachemicalsociety.org"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0 }}
                                    className="flex min-w-[200px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/95 px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gcs-foreground shadow-lg backdrop-blur-md transition-transform hover:scale-[1.02] sm:text-sm"
                                >
                                    <Mail className="h-4 w-4 shrink-0 text-gcs-primary" />
                                    Email the secretariat
                                </motion.a>

                                <motion.a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.08 }}
                                    className="flex min-w-[200px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/95 px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gcs-foreground shadow-lg backdrop-blur-md transition-transform hover:scale-[1.02] sm:text-sm"
                                >
                                    <Linkedin className="h-4 w-4 shrink-0 text-gcs-primary" />
                                    Follow on LinkedIn
                                </motion.a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
