"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    LayoutDashboard,
    Calendar,
    Users,
    Settings,
    Menu,
    X,
    Sun,
    Bell,
    Search,
    LogOut,
    ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Appointments", href: "/dashboard/appointments", icon: Calendar },
    { label: "Patients", href: "/dashboard/patients", icon: Users },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Handle responsive
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024)
            if (window.innerWidth >= 1024) {
                setIsSidebarOpen(true)
            }
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    // Prevent scroll when mobile sidebar is open
    useEffect(() => {
        if (isMobile && isSidebarOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [isMobile, isSidebarOpen])

    return (
        <div className="min-h-screen bg-[#F8F9FB]">
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isMobile && isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <AnimatePresence mode="wait">
                {(isSidebarOpen || !isMobile) && (
                    <motion.aside
                        initial={isMobile ? { x: -280 } : false}
                        animate={{ x: 0 }}
                        exit={{ x: -280 }}
                        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                        className={`fixed top-0 left-0 h-full w-[280px] bg-white border-r border-gray-100 z-50 flex flex-col ${!isMobile ? "lg:translate-x-0" : ""
                            }`}
                    >
                        {/* Logo */}
                        <div className="p-6 flex items-center justify-between border-b border-gray-100">
                            <Link href="/" className="flex items-center gap-3">
                                <div className="bg-black rounded-full p-1.5">
                                    <Sun className="h-5 w-5 text-white fill-white" />
                                </div>
                                <span className="font-bold text-xl tracking-tight">Hospitals</span>
                            </Link>
                            {isMobile && (
                                <button
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="h-10 w-10 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            )}
                        </div>

                        {/* Navigation */}
                        <nav className="flex-1 p-4 space-y-1">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => isMobile && setIsSidebarOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${isActive
                                            ? "bg-black text-white"
                                            : "text-gray-600 hover:bg-gray-100 hover:text-black"
                                            }`}
                                    >
                                        <item.icon className="h-5 w-5" />
                                        <span>{item.label}</span>
                                        {isActive && (
                                            <ChevronRight className="h-4 w-4 ml-auto" />
                                        )}
                                    </Link>
                                )
                            })}
                        </nav>

                        {/* Bottom Section */}
                        <div className="p-4 border-t border-gray-100">
                            <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                                <p className="text-sm font-medium text-black mb-1">Need Help?</p>
                                <p className="text-xs text-gray-600 mb-3">Contact our support team for assistance.</p>
                                <Button size="sm" className="w-full rounded-xl bg-black text-white h-9 text-xs">
                                    Get Support
                                </Button>
                            </div>
                            <button className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-gray-100 hover:text-black w-full transition-colors">
                                <LogOut className="h-5 w-5" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className={`transition-all duration-300 ${!isMobile ? "lg:ml-[280px]" : ""}`}>
                {/* Header */}
                <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-100">
                    <div className="flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
                        <div className="flex items-center gap-4">
                            {isMobile && (
                                <button
                                    onClick={() => setIsSidebarOpen(true)}
                                    className="h-10 w-10 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
                                >
                                    <Menu className="h-5 w-5" />
                                </button>
                            )}
                            <div className="hidden md:block">
                                <h1 className="text-lg font-semibold">
                                    {navItems.find(item => pathname === item.href || pathname.startsWith(item.href + "/"))?.label || "Dashboard"}
                                </h1>
                                <p className="text-sm text-gray-600">Welcome back, Admin</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Search */}
                            <button className="hidden md:flex items-center gap-2 h-10 px-4 rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
                                <Search className="h-4 w-4" />
                                <span className="text-sm">Search...</span>
                                <kbd className="ml-2 px-1.5 py-0.5 rounded bg-white text-xs font-mono">⌘K</kbd>
                            </button>

                            {/* Notifications */}
                            <button className="relative h-10 w-10 md:h-11 md:w-11 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
                                <Bell className="h-5 w-5" />
                                <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />
                            </button>

                            {/* Avatar */}
                            <div className="h-10 w-10 md:h-11 md:w-11 rounded-xl bg-black text-white flex items-center justify-center font-bold text-sm">
                                A
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}
