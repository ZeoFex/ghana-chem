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
    Sun,
    Bell,
    Search,
    LogOut,
    ChevronRight,
    Home
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
    { label: "Home", href: "/dashboard", icon: Home },
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
    // We only track desktop sidebar state now since mobile uses bottom nav
    const [isSidebarMinimized, setIsSidebarMinimized] = useState(false)

    return (
        <div className="min-h-screen bg-[#F8F9FB] pb-20 lg:pb-0"> {/* Body padding for bottom nav */}

            {/* Desktop Sidebar - Hidden on Mobile */}
            <aside className="hidden lg:flex fixed top-0 left-0 h-full w-[280px] bg-white border-r border-gray-100 z-50 flex-col">
                {/* Logo */}
                <div className="p-6 flex items-center gap-3 border-b border-gray-100">
                    <div className="bg-black rounded-full p-1.5">
                        <Sun className="h-5 w-5 text-white fill-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">Hospitals</span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href + "/"))
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
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
                        <p className="text-xs text-gray-600 mb-3">Contact support for assistance.</p>
                        <Button size="sm" className="w-full rounded-xl bg-black text-white h-9 text-xs">
                            Get Support
                        </Button>
                    </div>
                    <Link
                        href="/login"
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-black"
                    >
                        <LogOut className="h-5 w-5" />
                        <span>Logout</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="transition-all duration-300 lg:ml-[280px]">
                {/* Header */}
                <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-100">
                    <div className="flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
                        <div className="flex items-center gap-4">
                            {/* Mobile Logo (replacing hamburger) */}
                            <div className="lg:hidden flex items-center gap-2">
                                <div className="bg-black rounded-full p-1.5">
                                    <Sun className="h-4 w-4 text-white fill-white" />
                                </div>
                                <span className="font-bold text-lg tracking-tight">Hospitals</span>
                            </div>

                            <div className="hidden md:block">
                                <h1 className="text-lg font-semibold">
                                    {navItems.find(item => pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href + "/")))?.label || "Dashboard"}
                                </h1>
                                <p className="text-sm text-gray-600">Welcome back, Admin</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Search - Mobile Icon / Desktop Bar */}
                            <button className="md:hidden h-10 w-10 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
                                <Search className="h-5 w-5 text-gray-600" />
                            </button>
                            <button className="hidden md:flex items-center gap-2 h-10 px-4 rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
                                <Search className="h-4 w-4" />
                                <span className="text-sm">Search...</span>
                                <kbd className="ml-2 px-1.5 py-0.5 rounded bg-white text-xs font-mono">⌘K</kbd>
                            </button>

                            {/* Notifications */}
                            <button className="relative h-10 w-10 md:h-11 md:w-11 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
                                <Bell className="h-5 w-5 text-gray-600" />
                                <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-red-500 rounded-full border-2 border-white" />
                            </button>

                            {/* Avatar */}
                            <div className="h-10 w-10 md:h-11 md:w-11 rounded-xl bg-black text-white flex items-center justify-center font-bold text-sm shadow-sm ring-2 ring-gray-100">
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

            {/* Mobile Bottom Navigation */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2 z-50 pb-safe safe-area-bottom">
                <div className="flex items-center justify-between">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href + "/"))
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${isActive
                                    ? "text-black"
                                    : "text-gray-400 hover:text-gray-600"
                                    }`}
                            >
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                    className={`p-1 rounded-full ${isActive ? "bg-black/5" : ""}`}
                                >
                                    <item.icon className={`h-6 w-6 ${isActive ? "fill-black" : ""}`} strokeWidth={isActive ? 2.5 : 2} />
                                </motion.div>
                                <span className="text-[10px] font-medium">{item.label}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
