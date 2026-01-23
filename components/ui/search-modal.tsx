"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ArrowRight, Clock, TrendingUp, Stethoscope, User, MapPin, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Searchable data - in production this would come from an API
const searchData = {
    services: [
        { id: 1, title: "General Consultation", description: "Primary care and health checkups", href: "/book-appointment", icon: Stethoscope },
        { id: 2, title: "Cardiology", description: "Heart and cardiovascular care", href: "/book-appointment", icon: Stethoscope },
        { id: 3, title: "Pediatrics", description: "Children's health services", href: "/book-appointment", icon: Stethoscope },
        { id: 4, title: "Dental Care", description: "Oral health and dentistry", href: "/book-appointment", icon: Stethoscope },
        { id: 5, title: "Neurology", description: "Brain and nervous system", href: "/book-appointment", icon: Stethoscope },
        { id: 6, title: "Orthopedics", description: "Bone and joint care", href: "/book-appointment", icon: Stethoscope },
        { id: 7, title: "Emergency Care", description: "24/7 emergency services", href: "/book-appointment", icon: Stethoscope },
        { id: 8, title: "Pharmacy", description: "On-site medication services", href: "#", icon: Stethoscope },
    ],
    doctors: [
        { id: 1, title: "Dr. Kwame Asante", description: "Chief Medical Officer", href: "/about", icon: User },
        { id: 2, title: "Dr. Ama Mensah", description: "Head of Cardiology", href: "/about", icon: User },
        { id: 3, title: "Dr. Kofi Owusu", description: "Director of Surgery", href: "/about", icon: User },
        { id: 4, title: "Dr. Efua Boateng", description: "Head of Pediatrics", href: "/about", icon: User },
    ],
    pages: [
        { id: 1, title: "About Us", description: "Learn about our hospital", href: "/about", icon: MapPin },
        { id: 2, title: "Contact", description: "Get in touch with us", href: "/contact", icon: MapPin },
        { id: 3, title: "Book Appointment", description: "Schedule a consultation", href: "/book-appointment", icon: Calendar },
    ],
}

const quickActions = [
    { label: "Book Appointment", href: "/book-appointment", icon: Calendar },
    { label: "Find a Doctor", href: "/about", icon: User },
    { label: "Contact Us", href: "/contact", icon: MapPin },
]

const trendingSearches = [
    "Cardiology",
    "Emergency Care",
    "Dr. Kwame Asante",
    "General Consultation",
]

interface SearchResult {
    id: number
    title: string
    description: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    category: string
}

interface SearchModalProps {
    isOpen: boolean
    onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<SearchResult[]>([])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [recentSearches, setRecentSearches] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    // Load recent searches from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("hospital-recent-searches")
        if (saved) {
            setRecentSearches(JSON.parse(saved))
        }
    }, [])

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100)
        }
        if (!isOpen) {
            setQuery("")
            setResults([])
            setSelectedIndex(0)
        }
    }, [isOpen])

    // Search logic
    const performSearch = useCallback((searchQuery: string) => {
        if (!searchQuery.trim()) {
            setResults([])
            return
        }

        const q = searchQuery.toLowerCase()
        const allResults: SearchResult[] = []

        // Search services
        searchData.services.forEach(item => {
            if (item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)) {
                allResults.push({ ...item, category: "Services" })
            }
        })

        // Search doctors
        searchData.doctors.forEach(item => {
            if (item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)) {
                allResults.push({ ...item, category: "Doctors" })
            }
        })

        // Search pages
        searchData.pages.forEach(item => {
            if (item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)) {
                allResults.push({ ...item, category: "Pages" })
            }
        })

        setResults(allResults)
        setSelectedIndex(0)
    }, [])

    useEffect(() => {
        performSearch(query)
    }, [query, performSearch])

    // Save to recent searches
    const saveRecentSearch = (searchTerm: string) => {
        const updated = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5)
        setRecentSearches(updated)
        localStorage.setItem("hospital-recent-searches", JSON.stringify(updated))
    }

    // Handle result selection
    const handleSelect = (result: SearchResult) => {
        saveRecentSearch(result.title)
        onClose()
        router.push(result.href)
    }

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return

            switch (e.key) {
                case "ArrowDown":
                    e.preventDefault()
                    setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
                    break
                case "ArrowUp":
                    e.preventDefault()
                    setSelectedIndex(prev => Math.max(prev - 1, 0))
                    break
                case "Enter":
                    e.preventDefault()
                    if (results[selectedIndex]) {
                        handleSelect(results[selectedIndex])
                    }
                    break
                case "Escape":
                    onClose()
                    break
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, results, selectedIndex, onClose])

    // Clear recent search
    const clearRecentSearch = (searchTerm: string) => {
        const updated = recentSearches.filter(s => s !== searchTerm)
        setRecentSearches(updated)
        localStorage.setItem("hospital-recent-searches", JSON.stringify(updated))
    }

    // Group results by category
    const groupedResults = results.reduce((acc: Record<string, SearchResult[]>, result) => {
        if (!acc[result.category]) {
            acc[result.category] = []
        }
        acc[result.category].push(result)
        return acc
    }, {})

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        className="fixed top-4 md:top-[10%] left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-[101] bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
                    >
                        {/* Search Input */}
                        <div className="p-4 md:p-6 border-b border-gray-100">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <Input
                                    ref={inputRef}
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search services, doctors, pages..."
                                    className="w-full h-14 pl-12 pr-12 text-base md:text-lg rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-black transition-all"
                                />
                                {query && (
                                    <button
                                        onClick={() => setQuery("")}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                            </div>

                            {/* Keyboard hints - Desktop only */}
                            <div className="hidden md:flex items-center gap-4 mt-3 text-xs text-gray-400">
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1.5 py-0.5 rounded bg-gray-100 font-mono">↑↓</kbd> Navigate
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1.5 py-0.5 rounded bg-gray-100 font-mono">Enter</kbd> Select
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1.5 py-0.5 rounded bg-gray-100 font-mono">Esc</kbd> Close
                                </span>
                            </div>
                        </div>

                        {/* Results Area */}
                        <div className="flex-1 overflow-y-auto p-4 md:p-6">
                            {query ? (
                                results.length > 0 ? (
                                    <div className="space-y-6">
                                        {Object.entries(groupedResults).map(([category, categoryResults]) => (
                                            <div key={category}>
                                                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                                                    {category}
                                                </h3>
                                                <div className="space-y-1">
                                                    {categoryResults.map((result, idx) => {
                                                        const globalIndex = results.indexOf(result)
                                                        return (
                                                            <button
                                                                key={result.id}
                                                                onClick={() => handleSelect(result)}
                                                                className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all text-left ${globalIndex === selectedIndex
                                                                    ? "bg-black text-white"
                                                                    : "hover:bg-gray-50"
                                                                    }`}
                                                            >
                                                                <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${globalIndex === selectedIndex
                                                                    ? "bg-white/20"
                                                                    : "bg-gray-100"
                                                                    }`}>
                                                                    <result.icon className={`h-5 w-5 ${globalIndex === selectedIndex ? "text-white" : "text-gray-600"}`} />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="font-semibold truncate">{result.title}</p>
                                                                    <p className={`text-sm truncate ${globalIndex === selectedIndex ? "text-white/70" : "text-gray-500"}`}>
                                                                        {result.description}
                                                                    </p>
                                                                </div>
                                                                <ArrowRight className={`h-4 w-4 shrink-0 ${globalIndex === selectedIndex ? "text-white" : "text-gray-300"}`} />
                                                            </button>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                                            <Search className="h-8 w-8 text-gray-300" />
                                        </div>
                                        <p className="text-gray-500 font-medium">No results found for &quot;{query}&quot;</p>
                                        <p className="text-gray-400 text-sm mt-1">Try searching for services, doctors, or pages</p>
                                    </div>
                                )
                            ) : (
                                <div className="space-y-8">
                                    {/* Quick Actions */}
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                                            Quick Actions
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                            {quickActions.map((action) => (
                                                <Link
                                                    key={action.label}
                                                    href={action.href}
                                                    onClick={onClose}
                                                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-black hover:text-white transition-all group"
                                                >
                                                    <action.icon className="h-5 w-5" />
                                                    <span className="font-medium text-sm">{action.label}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Recent Searches */}
                                    {recentSearches.length > 0 && (
                                        <div>
                                            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                                                <Clock className="h-3 w-3" /> Recent Searches
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {recentSearches.map((search) => (
                                                    <div
                                                        key={search}
                                                        className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 text-sm group"
                                                    >
                                                        <button
                                                            onClick={() => setQuery(search)}
                                                            className="hover:text-black transition-colors"
                                                        >
                                                            {search}
                                                        </button>
                                                        <button
                                                            onClick={() => clearRecentSearch(search)}
                                                            className="h-4 w-4 rounded-full hover:bg-gray-200 flex items-center justify-center ml-1"
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Trending */}
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                                            <TrendingUp className="h-3 w-3" /> Trending
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {trendingSearches.map((search) => (
                                                <button
                                                    key={search}
                                                    onClick={() => setQuery(search)}
                                                    className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-all"
                                                >
                                                    {search}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                            <div className="flex items-center justify-between text-xs text-gray-400">
                                <span>Search powered by Hospitals</span>
                                <button
                                    onClick={onClose}
                                    className="px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors font-medium"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
