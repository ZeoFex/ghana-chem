import Image from "next/image"
import { ArrowUpRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
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
                {/* Subtle overlay to ensure text readability if needed, or consistent tint */}
                <div className="absolute inset-0 bg-black/10"></div>
                {/* Optional: Add a subtle blue gradient at the top to help the white text pop against sky if image is bright?? 
              User said 'replacing gradient', so I'll keep it minimal or transparent. */}
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col items-center text-center h-full">

                {/* Main Heading - Adjusted for visibility on image */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto drop-shadow-lg">
                    World-Class Care, <br /> Right Here in St. Louis
                </h1>

                <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12 drop-shadow-md">
                    Experience advanced medical treatments and compassionate care at Sunrise Hospital. <br className="hidden md:block" />
                    Your wellness is our mission.
                </p>

                {/* Search/CTA Pill - Centralized */}
                <div className="relative z-30 mb-12">
                    <div className="bg-white rounded-full p-2 pl-8 pr-2 flex items-center gap-4 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] animate-float">
                        <span className="text-xl font-semibold text-black tracking-tight">Find a Doctor</span>
                        <Button size="icon" className="rounded-full bg-black text-white h-12 w-12 hover:bg-black/90 transition-transform hover:rotate-45">
                            <ArrowUpRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>

                {/* Floating Widgets - Positioned absolutely relative to the container/screen */}

                {/* Satisfied Client (Bottom Left)
                <div className="absolute bottom-2 left-4 md:bottom-6 md:left-12 bg-white/90 backdrop-blur-sm rounded-full p-3 pr-6 shadow-xl flex items-center gap-4 animate-float-delayed z-20">
                    <div className="flex -space-x-3 pl-1">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden relative">
                                <Image
                                    src={`https://i.pravatar.cc/150?img=${i + 20}`}
                                    alt="User"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="font-bold text-black text-xs uppercase tracking-wider">25K+ Satisfied Client With Us</span>
                    </div>
                </div> */}

                {/* Right Side Social Icons - Bottom Right */}
                <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex flex-col gap-3 z-20 items-end">
                    {["instagram", "Twitter", "Facebook"].map(social => (
                        <div key={social} className="bg-white/90 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-md hover:scale-105 transition-transform cursor-pointer">
                            <span className="text-xs font-bold uppercase tracking-wider text-black">{social}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
