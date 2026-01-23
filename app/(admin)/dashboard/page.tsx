"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
    Calendar,
    Users,
    Clock,
    TrendingUp,
    ArrowUpRight,
    MoreHorizontal,
    Check,
    X,
    Eye
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data
const stats = [
    {
        label: "Total Appointments",
        value: "1,234",
        change: "+12%",
        trend: "up",
        icon: Calendar,
        color: "bg-blue-50",
        iconColor: "text-blue-600"
    },
    {
        label: "Total Patients",
        value: "8,567",
        change: "+5%",
        trend: "up",
        icon: Users,
        color: "bg-purple-50",
        iconColor: "text-purple-600"
    },
    {
        label: "Today's Appointments",
        value: "48",
        change: "+8",
        trend: "up",
        icon: Clock,
        color: "bg-green-50",
        iconColor: "text-green-600"
    },
    {
        label: "Completion Rate",
        value: "94%",
        change: "+2%",
        trend: "up",
        icon: TrendingUp,
        color: "bg-orange-50",
        iconColor: "text-orange-600"
    },
]

const recentAppointments = [
    {
        id: 1,
        patient: "Kwame Mensah",
        service: "General Consultation",
        doctor: "Dr. Ama Boateng",
        date: "Today",
        time: "09:00 AM",
        status: "confirmed"
    },
    {
        id: 2,
        patient: "Akosua Darko",
        service: "Cardiology",
        doctor: "Dr. Kofi Asante",
        date: "Today",
        time: "10:30 AM",
        status: "pending"
    },
    {
        id: 3,
        patient: "Yaw Osei",
        service: "Pediatrics",
        doctor: "Dr. Efua Mensah",
        date: "Today",
        time: "11:00 AM",
        status: "confirmed"
    },
    {
        id: 4,
        patient: "Abena Serwaa",
        service: "Dental Care",
        doctor: "Dr. Kwesi Appiah",
        date: "Today",
        time: "02:00 PM",
        status: "cancelled"
    },
    {
        id: 5,
        patient: "Kojo Frimpong",
        service: "ENT",
        doctor: "Dr. Ama Boateng",
        date: "Today",
        time: "03:30 PM",
        status: "confirmed"
    },
]

const quickActions = [
    { label: "New Appointment", href: "/dashboard/appointments/new", icon: Calendar },
    { label: "Add Patient", href: "/dashboard/patients/new", icon: Users },
    { label: "View Schedule", href: "/dashboard/appointments", icon: Clock },
]

export default function DashboardPage() {
    return (
        <div className="space-y-6 md:space-y-8">
            {/* Mobile Title */}
            <div className="md:hidden">
                <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
                <p className="text-gray-500 text-sm">Welcome back, Admin</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white rounded-2xl p-4 md:p-6 border border-gray-100"
                    >
                        <div className="flex items-start justify-between mb-3 md:mb-4">
                            <div className={`h-10 w-10 md:h-12 md:w-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                                <stat.icon className={`h-5 w-5 md:h-6 md:w-6 ${stat.iconColor}`} />
                            </div>
                            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-2xl md:text-3xl font-bold mb-1 text-black">{stat.value}</p>
                        <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-black rounded-2xl p-4 md:p-6"
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="text-white">
                        <h3 className="font-semibold text-lg mb-1">Quick Actions</h3>
                        <p className="text-gray-400 text-sm">Common tasks at your fingertips</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {quickActions.map((action) => (
                            <Link
                                key={action.label}
                                href={action.href}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                            >
                                <action.icon className="h-4 w-4" />
                                {action.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Recent Appointments */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
                <div className="p-4 md:p-6 border-b border-gray-100 flex items-center justify-between">
                    <div>
                        <h3 className="font-semibold text-lg">Recent Appointments</h3>
                        <p className="text-gray-500 text-sm">Today&apos;s scheduled appointments</p>
                    </div>
                    <Link href="/dashboard/appointments">
                        <Button variant="outline" size="sm" className="rounded-xl gap-2">
                            View All
                            <ArrowUpRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                {/* Table - Desktop */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Patient</th>
                                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Service</th>
                                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Doctor</th>
                                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Time</th>
                                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="text-right py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {recentAppointments.map((appointment) => (
                                <tr key={appointment.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center font-semibold text-sm">
                                                {appointment.patient.split(" ").map(n => n[0]).join("")}
                                            </div>
                                            <span className="font-medium text-black">{appointment.patient}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-gray-700">{appointment.service}</td>
                                    <td className="py-4 px-6 text-gray-700">{appointment.doctor}</td>
                                    <td className="py-4 px-6 text-gray-700">{appointment.time}</td>
                                    <td className="py-4 px-6">
                                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium capitalize ${appointment.status === "confirmed"
                                            ? "bg-green-50 text-green-700"
                                            : appointment.status === "pending"
                                                ? "bg-yellow-50 text-yellow-700"
                                                : "bg-red-50 text-red-700"
                                            }`}>
                                            {appointment.status === "confirmed" && <Check className="h-3 w-3" />}
                                            {appointment.status === "cancelled" && <X className="h-3 w-3" />}
                                            {appointment.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                                                <Eye className="h-4 w-4 text-gray-400" />
                                            </button>
                                            <button className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                                                <MoreHorizontal className="h-4 w-4 text-gray-400" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Cards - Mobile */}
                <div className="md:hidden divide-y divide-gray-100">
                    {recentAppointments.map((appointment) => (
                        <div key={appointment.id} className="p-4">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center font-semibold text-sm">
                                        {appointment.patient.split(" ").map(n => n[0]).join("")}
                                    </div>
                                    <div>
                                        <p className="font-medium text-black">{appointment.patient}</p>
                                        <p className="text-sm text-gray-600">{appointment.service}</p>
                                    </div>
                                </div>
                                <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${appointment.status === "confirmed"
                                    ? "bg-green-50 text-green-700"
                                    : appointment.status === "pending"
                                        ? "bg-yellow-50 text-yellow-700"
                                        : "bg-red-50 text-red-700"
                                    }`}>
                                    {appointment.status}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">{appointment.doctor}</span>
                                <span className="font-medium text-black">{appointment.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
