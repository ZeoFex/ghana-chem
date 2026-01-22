"use client";

import { Smile } from "lucide-react"
import Image from "next/image"

export function Testimonials() {
    return (
        <section className="relative w-full py-24 px-6 bg-white overflow-hidden flex flex-col items-center">

            {/* Decorative Arc - Using a large rounded div or SVG */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] h-[150vw] md:w-[120vw] md:h-[120vw] bg-transparent border-[1px] border-gray-200 rounded-full pointer-events-none -translate-y-1/2 z-0"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center mt-12 md:mt-24">

                {/* Header Badge */}
                <div className="inline-flex items-center gap-2 mb-8">
                    <span className="font-bold text-lg md:text-xl tracking-tight">Testimonial</span>
                    <Smile className="h-6 w-6" />
                </div>

                {/* Quote */}
                <div className="relative mb-12">
                    <span className="text-4xl md:text-5xl font-serif text-gray-400 absolute -top-8 -left-4 md:-left-12">❝</span>
                    <p className="text-xl md:text-3xl font-medium leading-relaxed text-gray-800">
                        With our dedication and expertise in healthcare, we strive to
                        provide services that are not just treatments, but a comforting
                        journey toward better health.
                    </p>
                </div>

                {/* User Profile */}
                <div className="flex flex-col items-center gap-3">
                    <div className="relative h-16 w-16 rounded-xl overflow-hidden shadow-lg mb-2">
                        <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                            alt="Aizan Mohammad"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-black">Aizan Mohammad</h4>
                        <p className="text-gray-500 text-sm">Product Manager at FS-Studio</p>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
                </div>

            </div>
        </section>
    )
}
