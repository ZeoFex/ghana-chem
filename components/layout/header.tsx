"use client";

import Link from "next/link"
import { Search, Menu, Sun, ArrowUpRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { SearchModal } from "@/components/ui/search-modal"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const isLightPage = pathname === "/book-appointment" || pathname === "/about" || pathname === "/contact" || pathname === "/services" || pathname === "/facilities";
    const showBackground = scrolled || isLightPage;

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isMenuOpen]);

    // Handle scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Keyboard shortcut to open search (Cmd/Ctrl + K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 py-4 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-lg border-b border-gray-100/50 pt-4" : "pt-6 pointer-events-none"
                }`}>

                {/* Left Nav Pills + Logo */}
                <nav className="flex items-center gap-1 pointer-events-auto">
                    <Link href="/" className="flex items-center gap-2 mr-6 group">
                        <div className={`rounded-full p-1 transition-colors ${showBackground ? "bg-black" : "bg-white"}`}>
                            <Sun className={`h-6 w-6 transition-colors ${showBackground ? "text-white fill-white" : "text-black fill-black"}`} />
                        </div>
                        <span className={`font-bold text-xl tracking-tight transition-colors ${showBackground ? "text-black" : "text-white drop-shadow-md"
                            }`}>Hospitals</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {[
                            { label: "About Us", href: "/about" },
                            { label: "Services", href: "/services" },
                            { label: "Facilities", href: "/facilities" },
                            { label: "Contact", href: "/contact" }
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`px-5 py-2.5 rounded-full border transition-all capitalize text-sm font-medium ${showBackground
                                    ? "bg-black/5 border-black/10 text-black hover:bg-black/10"
                                    : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </nav>


                {/* Right Actions */}
                <div className="flex items-center gap-3 pointer-events-auto">
                    {/* Search Button - Desktop */}
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className={`hidden lg:flex items-center gap-3 h-12 px-5 rounded-full border transition-all ${showBackground
                            ? "bg-black/5 border-black/10 text-black hover:bg-black/10"
                            : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                            }`}
                    >
                        <Search className="h-4 w-4" />
                        <span className="text-sm font-medium">Search...</span>
                        <kbd className={`hidden xl:inline-flex items-center gap-0.5 px-2 py-1 rounded text-xs font-mono ${showBackground ? "bg-black/10" : "bg-white/20"
                            }`}>
                            ⌘K
                        </kbd>
                    </button>

                    {/* Search Icon - Tablet */}
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className={`hidden md:flex lg:hidden items-center justify-center h-12 w-12 rounded-full border transition-all ${showBackground
                            ? "bg-black/5 border-black/10 text-black hover:bg-black/10"
                            : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                            }`}
                    >
                        <Search className="h-5 w-5" />
                    </button>

                    <Link href="/book-appointment" className="hidden sm:block">
                        <Button className="h-12 rounded-full bg-black text-white hover:bg-black/90 pl-6 pr-2 gap-3 text-base">
                            Book Now
                            <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
                                <ArrowUpRight className="h-4 w-4 text-black" />
                            </div>
                        </Button>
                    </Link>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(true)}
                        className="h-12 w-12 rounded-full bg-black text-white hover:bg-black/80 flex items-center justify-center md:hidden"
                    >
                        <Menu className="h-6 w-6" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-12 w-12 rounded-full bg-black text-white hover:bg-black/80 hidden md:flex items-center justify-center"
                    >
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </header>

            {/* Search Modal */}
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="fixed inset-0 z-[60] bg-black text-white flex flex-col p-6 md:hidden"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                                <div className="bg-white rounded-full p-1">
                                    <Sun className="h-6 w-6 text-black fill-black" />
                                </div>
                                <span className="font-bold text-xl tracking-tight">Hospitals</span>
                            </Link>

                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(false)}
                                className="h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20"
                            >
                                <X className="h-6 w-6" />
                            </Button>
                        </div>

                        {/* Mobile Search Bar */}
                        <button
                            onClick={() => {
                                setIsMenuOpen(false);
                                setTimeout(() => setIsSearchOpen(true), 300);
                            }}
                            className="w-full flex items-center gap-3 h-14 px-5 rounded-2xl bg-white/10 border border-white/20 mb-8 text-left"
                        >
                            <Search className="h-5 w-5 text-white/60" />
                            <span className="text-white/60">Search services, doctors...</span>
                        </button>

                        <nav className="flex flex-col gap-6 text-2xl font-medium">
                            {[
                                { label: "About Us", href: "/about" },
                                { label: "Services", href: "/services" },
                                { label: "Facilities", href: "/facilities" },
                                { label: "Contact", href: "/contact" }
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="border-b border-white/10 pb-4"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-auto flex flex-col gap-4">
                            <Button asChild className="h-14 w-full rounded-full bg-white text-black hover:bg-gray-100 gap-3 text-lg font-semibold">
                                <Link href="/book-appointment" onClick={() => setIsMenuOpen(false)}>
                                    Book Appointment
                                    <ArrowUpRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
