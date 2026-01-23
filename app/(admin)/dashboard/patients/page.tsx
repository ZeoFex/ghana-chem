"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
    Search,
    Plus,
    Users,
    Phone,
    Mail,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Mock data
const patients = [
    { id: 1, name: "Kwame Mensah", phone: "+233 20 123 4567", email: "kwame@email.com", age: 35, gender: "Male", lastVisit: "2026-01-20", visits: 12 },
    { id: 2, name: "Akosua Darko", phone: "+233 24 234 5678", email: "akosua@email.com", age: 28, gender: "Female", lastVisit: "2026-01-18", visits: 5 },
    { id: 3, name: "Yaw Osei", phone: "+233 27 345 6789", email: "yaw@email.com", age: 42, gender: "Male", lastVisit: "2026-01-22", visits: 8 },
    { id: 4, name: "Abena Serwaa", phone: "+233 20 456 7890", email: "abena@email.com", age: 31, gender: "Female", lastVisit: "2026-01-15", visits: 3 },
    { id: 5, name: "Kojo Frimpong", phone: "+233 24 567 8901", email: "kojo@email.com", age: 55, gender: "Male", lastVisit: "2026-01-21", visits: 15 },
    { id: 6, name: "Ama Gyamfi", phone: "+233 27 678 9012", email: "ama@email.com", age: 24, gender: "Female", lastVisit: "2026-01-19", visits: 2 },
]

export default function PatientsPage() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.phone.includes(searchQuery)
    )

    return (
        <div className="space-y-6">
            {/* Mobile Title */}
            <div className="md:hidden">
                <h1 className="text-2xl font-semibold mb-1">Patients</h1>
                <p className="text-gray-500 text-sm">Manage patient records</p>
            </div>

            {/* Header Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Search patients..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-11 h-11 rounded-xl bg-white border-gray-200"
                    />
                </div>

                <Button className="h-11 rounded-xl bg-black text-white gap-2">
                    <Plus className="h-4 w-4" />
                    Add Patient
                </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-2xl font-bold">{patients.length}</p>
                    <p className="text-sm text-gray-500">Total Patients</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-2xl font-bold">{patients.filter(p => p.lastVisit === "2026-01-22" || p.lastVisit === "2026-01-23").length}</p>
                    <p className="text-sm text-gray-500">New This Week</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-2xl font-bold">{patients.filter(p => p.gender === "Male").length}</p>
                    <p className="text-sm text-gray-500">Male</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-2xl font-bold">{patients.filter(p => p.gender === "Female").length}</p>
                    <p className="text-sm text-gray-500">Female</p>
                </div>
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
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Age / Gender</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Visit</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Visits</th>
                                <th className="text-right py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredPatients.map((patient) => (
                                <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center font-semibold text-sm">
                                                {patient.name.split(" ").map(n => n[0]).join("")}
                                            </div>
                                            <span className="font-medium text-black">{patient.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Phone className="h-3 w-3" />
                                                {patient.phone}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Mail className="h-3 w-3" />
                                                {patient.email}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-gray-600">
                                        {patient.age} yrs / {patient.gender}
                                    </td>
                                    <td className="py-4 px-6 text-gray-600">{patient.lastVisit}</td>
                                    <td className="py-4 px-6">
                                        <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                                            {patient.visits} visits
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <button className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                                            <MoreHorizontal className="h-4 w-4 text-gray-400" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden divide-y divide-gray-100">
                    {filteredPatients.map((patient) => (
                        <div key={patient.id} className="p-4">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-11 w-11 rounded-xl bg-gray-100 flex items-center justify-center font-semibold text-sm">
                                        {patient.name.split(" ").map(n => n[0]).join("")}
                                    </div>
                                    <div>
                                        <p className="font-medium text-black">{patient.name}</p>
                                        <p className="text-sm text-gray-500">{patient.age} yrs • {patient.gender}</p>
                                    </div>
                                </div>
                                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                                    {patient.visits} visits
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span>{patient.phone}</span>
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
                        Showing <span className="font-medium">{filteredPatients.length}</span> patients
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="h-9 w-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button className="h-9 w-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
