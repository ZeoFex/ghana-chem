import Link from "next/link"
import { Search, Menu, Sun, ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 pt-6 pointer-events-none">

            {/* Left Nav Pills + Logo */}
            <nav className="hidden md:flex items-center gap-1 pointer-events-auto">
                <Link href="/" className="flex items-center gap-2 mr-6 group">
                    <div className="bg-white rounded-full p-1">
                        <Sun className="h-6 w-6 text-black fill-black" />
                    </div>
                    <span className="font-bold text-xl text-white tracking-tight drop-shadow-md">St. Louis</span>
                </Link>

                {["About Us", "Services", "Facilities", "Membership"].map((item) => (
                    <Link
                        key={item}
                        href="#"
                        className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all capitalize"
                    >
                        {item}
                    </Link>
                ))}
            </nav>


            {/* Right Actions */}
            <div className="flex items-center gap-3 pointer-events-auto">
                <div className="relative hidden lg:block group">
                    <Input
                        type="search"
                        placeholder="Search here..."
                        className="w-64 pl-5 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/80 rounded-full h-12 focus:bg-white/20 transition-all"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-white rounded-full flex items-center justify-center">
                        <Search className="h-4 w-4 text-black" />
                    </div>
                </div>

                <Link href="/book-appointment">
                    <Button className="h-12 rounded-full bg-black text-white hover:bg-black/90 pl-6 pr-2 gap-3 text-base">
                        Book Now
                        <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
                            <ArrowUpRight className="h-4 w-4 text-black" />
                        </div>
                    </Button>
                </Link>

                <Button variant="pill" size="icon" className="h-12 w-12 rounded-full bg-black text-white border-none hover:bg-black/80 flex items-center justify-center">
                    <Menu className="h-6 w-6" />
                </Button>
            </div>
        </header>
    )
}
