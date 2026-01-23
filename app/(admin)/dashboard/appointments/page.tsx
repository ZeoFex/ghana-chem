"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
    Search,
    Filter,
    Plus,
    Calendar,
    Check,
    X,
    Eye,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Mock data
const appointments = [
    { id: 1, patient: "Kwame Mensah", phone: "+233 20 123 4567", service: "General Consultation", doctor: "Dr. Ama Boateng", date: "2026-01-23", time: "09:00 AM", status: "confirmed" },
    { id: 2, patient: "Akosua Darko", phone: "+233 24 234 5678", service: "Cardiology", doctor: "Dr. Kofi Asante", date: "2026-01-23", time: "10:30 AM", status: "pending" },
    { id: 3, patient: "Yaw Osei", phone: "+233 27 345 6789", service: "Pediatrics", doctor: "Dr. Efua Mensah", date: "2026-01-23", time: "11:00 AM", status: "confirmed" },
    { id: 4, patient: "Abena Serwaa", phone: "+233 20 456 7890", service: "Dental Care", doctor: "Dr. Kwesi Appiah", date: "2026-01-23", time: "02:00 PM", status: "cancelled" },
    { id: 5, patient: "Kojo Frimpong", phone: "+233 24 567 8901", service: "ENT", doctor: "Dr. Ama Boateng", date: "2026-01-23", time: "03:30 PM", status: "confirmed" },
    { id: 6, patient: "Ama Gyamfi", phone: "+233 27 678 9012", service: "Orthopedics", doctor: "Dr. Kofi Asante", date: "2026-01-24", time: "09:00 AM", status: "pending" },
    { id: 7, patient: "Kofi Agyeman", phone: "+233 20 789 0123", service: "Neurology", doctor: "Dr. Efua Mensah", date: "2026-01-24", time: "10:00 AM", status: "confirmed" },
    { id: 8, patient: "Efua Appiah", phone: "+233 24 890 1234", service: "Eye Care", doctor: "Dr. Kwesi Appiah", date: "2026-01-24", time: "11:30 AM", status: "pending" },
]

const filters = ["All", "Confirmed", "Pending", "Cancelled"]

export default function AppointmentsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeFilter, setActiveFilter] = useState("All")

    const filteredAppointments = appointments.filter(apt => {
        const matchesSearch = apt.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
            apt.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
            apt.doctor.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesFilter = activeFilter === "All" || apt.status.toLowerCase() === activeFilter.toLowerCase()
        return matchesSearch && matchesFilter
    })

    return (
        <div className="space-y-6">
            {/* Mobile Title */}
            <div className="md:hidden">
                <h1 className="text-2xl font-semibold mb-1">Appointments</h1>
                <p className="text-gray-500 text-sm">Manage all appointments</p>
            </div>

            {/* Header Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            type="text"
                            placeholder="Search appointments..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-11 h-11 rounded-xl bg-white border-gray-200"
                        />
                    </div>

                    {/* Filter Button - Mobile */}
                    <button className="md:hidden h-11 w-11 rounded-xl border border-gray-200 flex items-center justify-center bg-white">
                        <Filter className="h-4 w-4" />
                    </button>
                </div>

                <Button className="h-11 rounded-xl bg-black text-white gap-2">
                    <Plus className="h-4 w-4" />
                    New Appointment
                </Button>
            </div>

            {/* Filters - Desktop */}
            <div className="hidden md:flex items-center gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${activeFilter === filter
                            ? "bg-black text-white"
                            : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Filters - Mobile */}
            <div className="md:hidden flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${activeFilter === filter
                            ? "bg-black text-white"
                            : "bg-white text-gray-600 border border-gray-200"
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Table */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Patient</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Service</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Doctor</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date & Time</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="text-right py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredAppointments.map((appointment) => (
                                <tr key={appointment.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center font-semibold text-sm">
                                                {appointment.patient.split(" ").map(n => n[0]).join("")}
                                            </div>
                                            <div>
                                                <p className="font-medium text-black">{appointment.patient}</p>
                                                <p className="text-sm text-gray-500">{appointment.phone}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-gray-700">{appointment.service}</td>
                                    <td className="py-4 px-6 text-gray-700">{appointment.doctor}</td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4 text-gray-400" />
                                            <span className="text-gray-600">{appointment.date}</span>
                                            <span className="text-gray-400">•</span>
                                            <span className="font-medium">{appointment.time}</span>
                                        </div>
                                    </td>
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

                {/* Mobile Cards */}
                <div className="md:hidden divide-y divide-gray-100">
                    {filteredAppointments.map((appointment) => (
                        <div key={appointment.id} className="p-4">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-11 w-11 rounded-xl bg-gray-100 flex items-center justify-center font-semibold text-sm">
                                        {appointment.patient.split(" ").map(n => n[0]).join("")}
                                    </div>
                                    <div>
                                        <p className="font-medium text-black">{appointment.patient}</p>
                                        <p className="text-sm text-gray-500">{appointment.service}</p>
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
                                <div className="flex items-center gap-2 text-gray-500">
                                    <Calendar className="h-4 w-4" />
                                    <span>{appointment.date}</span>
                                    <span>•</span>
                                    <span className="font-medium text-black">{appointment.time}</span>
                                </div>
                                <button className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-gray-100">
                                    <MoreHorizontal className="h-4 w-4 text-gray-400" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between p-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                        Showing <span className="font-medium">{filteredAppointments.length}</span> of <span className="font-medium">{appointments.length}</span> appointments
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="h-9 w-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button className="h-9 w-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
