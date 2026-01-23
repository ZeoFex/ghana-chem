import Image from "next/image"
import { ArrowRight, ArrowUpRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExploreSection() {
    return (
        <section className="w-full py-24 px-6 md:px-12 bg-white text-black overflow-hidden">

            {/* Header */}
            <div className="flex flex-col items-center text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium mb-6 hover:bg-gray-50 cursor-pointer transition-colors">
                    Let&apos;s know us <ArrowRight className="h-3 w-3" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight max-w-4xl mx-auto leading-[1.1]">
                    Explore Options, About Hospitals, <br className="hidden md:block" /> Your Health, Our Priority
                </h2>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1440px] mx-auto">

                {/* Left Column (Text Content) */}
                <div className="lg:col-span-3 flex flex-col justify-start pt-4">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium self-start mb-6">
                        About Us
                    </div>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                        Hospitals is a trusted platform connecting patients with top hospitals across the country.
                    </p>
                    <Button className="rounded-full bg-black text-white h-12 px-6 w-fit gap-4 group mt-auto hover:bg-black/80">
                        Learn More
                        <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                            <ArrowUpRight className="h-4 w-4 text-black" />
                        </div>
                    </Button>
                </div>

                {/* Center Column (Large Image Card) */}
                <div className="lg:col-span-5 relative h-[500px] rounded-[2.5rem] overflow-hidden group">
                    <Image
                        // User requested same image as hero
                        src="https://nextstl.com/wp-content/uploads/13146584425_d9d0402285_o.jpg"
                        alt="Outdoor Area"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                    {/* Tags */}
                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm">
                        OPD area
                    </div>

                    <div className="absolute top-8 right-8 max-w-[200px] text-right text-white text-lg font-medium leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        A versatile facility offering a wide range of medical services
                    </div>

                    {/* Bottom Widgets */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        Accra, Ghana
                    </div>

                    <div className="absolute bottom-6 right-6 h-12 w-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                        <ArrowUpRight className="h-5 w-5 text-black" />
                    </div>
                </div>

                {/* Right Column (Small Image + Text + Nav) */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    {/* Top Card */}
                    <div className="relative h-[300px] rounded-[2.5rem] overflow-hidden group w-full">
                        <Image
                            src="https://nextstl.com/wp-content/uploads/13146584425_d9d0402285_o.jpg"
                            alt="Out door"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm">
                            Out door
                        </div>
                        <div className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium">
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Accra, Ghana
                        </div>
                        <div className="absolute bottom-6 right-6 h-12 w-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                            <ArrowUpRight className="h-5 w-5 text-black" />
                        </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="flex flex-col gap-4 mt-auto">
                        <p className="text-gray-600 leading-relaxed text-sm max-w-sm">
                            Explore the ideal place for healing, care, and recovery. Where compassion meets excellence in healthcare.
                        </p>
                        <div className="flex items-center gap-4 self-end mt-4">
                            <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-black/20 hover:bg-black hover:text-white transition-colors">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                            <Button size="icon" className="h-12 w-12 rounded-full bg-black text-white hover:bg-black/80">
                                <ArrowRight className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
