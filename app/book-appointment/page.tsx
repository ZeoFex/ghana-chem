"use client"

import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Calendar, Clock, User, ChevronRight, Check, ArrowRight } from "lucide-react"

export default function BookingPage() {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const steps = [
        { number: 1, title: "Service" },
        { number: 2, title: "Date & Time" },
        { number: 3, title: "Details" },
    ];

    return (
        <main className="min-h-screen bg-[#F8F9FB] text-black">
            <Header />

            <div className="pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto">

                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-4 text-black">Book an Appointment</h1>
                    <p className="text-gray-600 text-lg">Schedule a consultation with our world-class specialists.</p>
                </div>

                {/* Booking Container */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 min-h-[600px] flex flex-col md:flex-row gap-12">

                    {/* Sidebar / Progress */}
                    <div className="w-full md:w-1/3 flex flex-col gap-8">
                        <div className="bg-[#F8F9FB] rounded-3xl p-8 h-full">
                            <h3 className="font-semibold text-xl mb-8 text-black">Your Journey</h3>
                            <div className="flex flex-col gap-6 relative">
                                {/* Connecting Line */}
                                <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gray-200 -z-10"></div>

                                {steps.map((s) => (
                                    <div key={s.number} className="flex items-center gap-4">
                                        <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm border-4 transition-colors ${step >= s.number
                                                ? "bg-black text-white border-black"
                                                : "bg-white text-gray-400 border-gray-200"
                                            }`}>
                                            {step > s.number ? <Check className="h-5 w-5" /> : s.number}
                                        </div>
                                        <span className={`font-medium ${step >= s.number ? "text-black" : "text-gray-400"}`}>
                                            {s.title}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-12">
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                                            <User className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Help Desk</p>
                                            <p className="font-medium text-black">+1 234 567 890</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        Need assistance? Our support team is available 24/7 to help you with your booking.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Form Area */}
                    <div className="w-full md:w-2/3 flex flex-col">

                        {step === 1 && (
                            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                <h2 className="text-3xl font-medium mb-2 text-black">Select a Service</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {["General Consultation", "Cardiology", "Pediatrics", "Dental Care", "Neurology", "Orthopedics"].map((service) => (
                                        <button
                                            key={service}
                                            onClick={() => setSelectedService(service)}
                                            className={`text-left p-6 rounded-2xl border transition-all group ${selectedService === service
                                                    ? "border-black bg-gray-50 ring-1 ring-black"
                                                    : "border-gray-100 hover:border-black/20 hover:bg-gray-50"
                                                }`}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className={`font-semibold text-lg ${selectedService === service ? "text-black" : "text-gray-800"}`}>
                                                    {service}
                                                </span>
                                                <div className={`h-8 w-8 rounded-full flex items-center justify-center border transition-colors ${selectedService === service
                                                        ? "bg-black text-white border-black"
                                                        : "bg-white border-gray-100 group-hover:bg-black group-hover:text-white"
                                                    }`}>
                                                    {selectedService === service ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-500">Specialized care for your needs.</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                <h2 className="text-3xl font-medium">Select Date & Time</h2>

                                {/* Date Scroller */}
                                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                                    {[...Array(14)].map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedDate(i)}
                                            className={`flex-shrink-0 w-20 h-24 rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all ${selectedDate === i
                                                ? "bg-black text-white border-black shadow-lg scale-105"
                                                : "bg-white border-gray-100 hover:border-gray-200"
                                                }`}
                                        >
                                            <span className="text-xs font-medium opacity-60">Mon</span>
                                            <span className="text-2xl font-bold">{10 + i}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Time Grid */}
                                <div>
                                    <h3 className="font-medium mb-4 flex items-center gap-2">
                                        <Clock className="h-4 w-4" /> Available Slots
                                    </h3>
                                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                                        {["09:00 AM", "10:30 AM", "11:00 AM", "01:00 PM", "02:30 PM", "04:00 PM"].map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all ${selectedTime === time
                                                    ? "bg-black text-white border-black"
                                                    : "bg-white border-gray-100 hover:border-black/20"
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                <h2 className="text-3xl font-medium mb-2">Patient Details</h2>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="col-span-2 md:col-span-1">
                                        <label className="text-sm font-medium mb-2 block">First Name</label>
                                        <Input className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-black" placeholder="John" />
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                                        <Input className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-black" placeholder="Doe" />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="text-sm font-medium mb-2 block">Email Address</label>
                                        <Input className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-black" placeholder="john@example.com" />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="text-sm font-medium mb-2 block">Reason for Visit</label>
                                        <textarea className="w-full p-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-black focus:outline-none min-h-[120px] resize-none text-sm" placeholder="Please describe your symptoms..." />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="mt-auto pt-12 flex justify-between items-center">
                            {step > 1 ? (
                                <button onClick={() => setStep(step - 1)} className="text-sm font-medium text-gray-500 hover:text-black transition-colors px-4 py-2">
                                    Back
                                </button>
                            ) : <div></div>}

                            <Button
                                onClick={() => step < 3 ? setStep(step + 1) : null}
                                className="h-12 rounded-full bg-black text-white px-8 gap-2 hover:bg-black/90"
                            >
                                {step === 3 ? "Confirm Booking" : "Continue"}
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}
