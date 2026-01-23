"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
    User,
    Bell,
    Shield,
    Palette,
    Globe,
    Save,
    Mail,
    Phone,
    Building2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
]

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile")

    return (
        <div className="space-y-6">
            {/* Mobile Title */}
            <div className="md:hidden">
                <h1 className="text-2xl font-semibold mb-1">Settings</h1>
                <p className="text-gray-500 text-sm">Manage your preferences</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar Tabs */}
                <div className="lg:w-64 shrink-0">
                    <div className="bg-white rounded-2xl border border-gray-100 p-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === tab.id
                                    ? "bg-black text-white"
                                    : "text-gray-600 hover:bg-gray-50"
                                    }`}
                            >
                                <tab.icon className="h-5 w-5" />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8"
                    >
                        {activeTab === "profile" && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-xl font-semibold mb-1">Profile Settings</h2>
                                    <p className="text-gray-500 text-sm">Update your personal information</p>
                                </div>

                                {/* Avatar */}
                                <div className="flex items-center gap-4">
                                    <div className="h-20 w-20 rounded-2xl bg-black text-white flex items-center justify-center text-2xl font-bold">
                                        A
                                    </div>
                                    <div>
                                        <Button variant="outline" size="sm" className="rounded-xl mb-2">
                                            Change Avatar
                                        </Button>
                                        <p className="text-xs text-gray-500">JPG, PNG or GIF. Max 2MB</p>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                                            Full Name
                                        </label>
                                        <Input
                                            defaultValue="Admin User"
                                            className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-black"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                                            Role
                                        </label>
                                        <Input
                                            defaultValue="Hospital Administrator"
                                            className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-black"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                                            <Mail className="h-3 w-3 inline mr-1" />
                                            Email
                                        </label>
                                        <Input
                                            type="email"
                                            defaultValue="admin@hospitals.gh"
                                            className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-black"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                                            <Phone className="h-3 w-3 inline mr-1" />
                                            Phone
                                        </label>
                                        <Input
                                            type="tel"
                                            defaultValue="+233 20 123 4567"
                                            className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-black"
                                        />
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <Button className="rounded-xl bg-black text-white gap-2">
                                        <Save className="h-4 w-4" />
                                        Save Changes
                                    </Button>
                                </div>
                            </div>
                        )}

                        {activeTab === "notifications" && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-xl font-semibold mb-1">Notification Preferences</h2>
                                    <p className="text-gray-500 text-sm">Choose how you want to be notified</p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { label: "Email Notifications", desc: "Receive updates via email" },
                                        { label: "SMS Alerts", desc: "Get SMS for urgent matters" },
                                        { label: "New Appointments", desc: "Notify when new appointments are booked" },
                                        { label: "Cancellations", desc: "Alert when appointments are cancelled" },
                                        { label: "Daily Summary", desc: "Receive daily appointment summary" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                                            <div>
                                                <p className="font-medium">{item.label}</p>
                                                <p className="text-sm text-gray-500">{item.desc}</p>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" defaultChecked={i < 3} className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <Button className="rounded-xl bg-black text-white gap-2">
                                        <Save className="h-4 w-4" />
                                        Save Preferences
                                    </Button>
                                </div>
                            </div>
                        )}

                        {activeTab === "security" && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-xl font-semibold mb-1">Security Settings</h2>
                                    <p className="text-gray-500 text-sm">Manage your account security</p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                                            Current Password
                                        </label>
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-black"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                                            New Password
                                        </label>
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-black"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                                            Confirm New Password
                                        </label>
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-black"
                                        />
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-100">
                                    <p className="text-sm text-yellow-800">
                                        <strong>Tip:</strong> Use a strong password with at least 8 characters, including numbers and symbols.
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <Button className="rounded-xl bg-black text-white gap-2">
                                        <Shield className="h-4 w-4" />
                                        Update Password
                                    </Button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
