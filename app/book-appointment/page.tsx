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
        <main className="min-h-screen bg-white md:bg-[#F8F9FB] text-black pb-24 md:pb-0">
            <Header />

            <div className="pt-24 md:pt-32 pb-10 md:pb-20 px-0 md:px-8 max-w-6xl mx-auto">

                {/* Page Header - Hidden on mobile for app-like feel if needed, or kept condensed */}
                <div className="text-center mb-8 md:mb-16 px-4">
                    <h1 className="text-3xl md:text-6xl font-medium tracking-tight mb-2 md:mb-4 text-black">Book Appointment</h1>
                    <p className="text-gray-500 md:text-gray-600 text-sm md:text-lg">Schedule a consultation with our specialists.</p>
                </div>

                {/* Mobile Step Indicator - Only visible on small screens */}
                <div className="md:hidden px-6 mb-8">
                    <div className="flex justify-between items-center relative">
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -z-10"></div>
                        {steps.map((s) => (
                            <div key={s.number} className="flex flex-col items-center gap-2 bg-white px-2">
                                <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs border-2 transition-all ${step >= s.number
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-gray-300 border-gray-100"
                                    }`}>
                                    {step > s.number ? <Check className="h-4 w-4" /> : s.number}
                                </div>
                                <span className={`text-[10px] font-semibold uppercase tracking-wider ${step >= s.number ? "text-black" : "text-gray-400"}`}>
                                    {s.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Booking Container */}
                <div className="bg-white md:rounded-[2.5rem] p-6 md:p-12 md:shadow-xl md:border md:border-gray-100 min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row gap-12">

                    {/* Sidebar / Progress - Hidden on mobile */}
                    <div className="hidden md:flex w-1/3 flex-col gap-8">
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
                            <div className="flex flex-col gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-2xl md:text-3xl font-medium mb-2 text-black">Select a Service</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                    {["General Consultation", "Cardiology", "Pediatrics", "Dental Care", "Neurology", "Orthopedics"].map((service) => (
                                        <button
                                            key={service}
                                            onClick={() => setSelectedService(service)}
                                            className={`text-left p-5 md:p-6 rounded-2xl border transition-all active:scale-[0.98] ${selectedService === service
                                                ? "border-black bg-gray-50 ring-1 ring-black"
                                                : "border-gray-100 hover:border-black/20 hover:bg-gray-50 bg-white"
                                                }`}
                                        >
                                            <div className="flex justify-between items-center mb-1 md:mb-2">
                                                <span className={`font-semibold text-base md:text-lg ${selectedService === service ? "text-black" : "text-gray-800"}`}>
                                                    {service}
                                                </span>
                                                <div className={`h-6 w-6 md:h-8 md:w-8 rounded-full flex items-center justify-center border transition-colors ${selectedService === service
                                                    ? "bg-black text-white border-black"
                                                    : "bg-white border-gray-100"
                                                    }`}>
                                                    {selectedService === service ? <Check className="h-3 w-3 md:h-4 md:w-4" /> : <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />}
                                                </div>
                                            </div>
                                            <p className="text-xs md:text-sm text-gray-500">Specialized care for your needs.</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="flex flex-col gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-2xl md:text-3xl font-medium">Select Date & Time</h2>

                                {/* Date Scroller */}
                                <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 no-scrollbar -mx-2 px-2">
                                    {Array.from({ length: 14 }).map((_, i) => {
                                        const date = new Date();
                                        date.setDate(date.getDate() + i);
                                        const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
                                        const dayNumber = date.getDate();

                                        return (
                                            <button
                                                key={i}
                                                onClick={() => setSelectedDate(i)}
                                                className={`flex-shrink-0 w-16 md:w-20 h-20 md:h-24 rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all active:scale-95 ${selectedDate === i
                                                    ? "bg-black text-white border-black shadow-lg"
                                                    : "bg-white border-gray-100 hover:border-gray-200"
                                                    }`}
                                            >
                                                <span className={`text-[10px] md:text-xs font-medium uppercase tracking-wider ${selectedDate === i ? "opacity-80" : "opacity-60"}`}>{dayName}</span>
                                                <span className="text-xl md:text-2xl font-bold">{dayNumber}</span>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Time Grid */}
                                <div>
                                    <h3 className="font-medium mb-4 flex items-center gap-2 text-gray-500 text-sm md:text-base">
                                        <Clock className="h-4 w-4" /> Available Slots
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                        {["09:00 AM", "10:30 AM", "11:00 AM", "01:00 PM", "02:30 PM", "04:00 PM"].map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`py-3 px-4 rounded-xl text-sm font-semibold border transition-all active:scale-95 ${selectedTime === time
                                                    ? "bg-black text-white border-black shadow-md"
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
                            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-2xl md:text-3xl font-medium mb-2">Patient Details</h2>
                                <div className="grid grid-cols-2 gap-4 md:gap-6">
                                    <div className="col-span-2 md:col-span-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">First Name</label>
                                        <Input className="h-14 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-black transition-all" placeholder="John" />
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">Last Name</label>
                                        <Input className="h-14 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-black transition-all" placeholder="Doe" />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">Email Address</label>
                                        <Input className="h-14 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-black transition-all" placeholder="john@example.com" />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">Reason for Visit</label>
                                        <textarea className="w-full p-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-black focus:outline-none min-h-[140px] resize-none text-sm md:text-base border border-transparent transition-all" placeholder="Please describe your symptoms..." />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="flex flex-col items-center justify-center text-center py-8 md:py-12 animate-in fade-in zoom-in duration-500">
                                <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-green-50 flex items-center justify-center mb-6">
                                    <Check className="h-10 w-10 text-green-600" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-medium mb-4">Confirmed!</h2>
                                <p className="text-gray-500 max-w-sm mb-8 px-4 text-sm md:text-base">
                                    Your appointment for <span className="text-black font-semibold">{selectedService}</span> has been scheduled.
                                </p>

                                <div className="bg-gray-50 rounded-3xl p-6 w-full max-w-sm mb-8 border border-gray-100">
                                    <div className="flex justify-between mb-3">
                                        <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Date</span>
                                        <span className="font-semibold text-sm">
                                            {selectedDate !== null ? (() => {
                                                const d = new Date();
                                                d.setDate(d.getDate() + selectedDate);
                                                return d.toLocaleDateString("en-US", { month: "short", day: "numeric", weekday: "short" });
                                            })() : ""}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Time</span>
                                        <span className="font-semibold text-sm">{selectedTime}</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 w-full max-w-sm px-4">
                                    <Button className="h-14 rounded-full border border-gray-100 bg-white text-black hover:bg-gray-50 gap-2 font-semibold">
                                        <Calendar className="h-4 w-4" />
                                        Add to Calendar
                                    </Button>
                                    <Button asChild className="h-14 rounded-full bg-black text-white hover:bg-black/90 font-semibold shadow-lg shadow-black/10">
                                        <a href="/">Back to Home</a>
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Actions - Desktop and Mobile (Sticky) */}
                        {step < 4 && (
                            <>
                                {/* Desktop Actions */}
                                <div className="hidden md:flex mt-auto pt-12 justify-between items-center">
                                    {step > 1 ? (
                                        <button onClick={() => setStep(step - 1)} className="text-sm font-semibold text-gray-400 hover:text-black transition-colors px-6 py-3">
                                            Back
                                        </button>
                                    ) : <div />}

                                    <Button
                                        onClick={() => {
                                            if (step === 1 && selectedService) setStep(2);
                                            else if (step === 2 && selectedDate !== null && selectedTime) setStep(3);
                                            else if (step === 3) setStep(4);
                                        }}
                                        disabled={
                                            (step === 1 && !selectedService) ||
                                            (step === 2 && (selectedDate === null || !selectedTime))
                                        }
                                        className="h-14 rounded-full bg-black text-white px-10 gap-3 hover:bg-black/90 disabled:opacity-30 disabled:cursor-not-allowed font-semibold shadow-lg shadow-black/10 transition-all"
                                    >
                                        {step === 3 ? "Confirm Booking" : "Continue"}
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>

                                {/* Mobile Sticky Bottom Actions */}
                                <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-100 z-50 flex gap-3">
                                    {step > 1 && (
                                        <button
                                            onClick={() => setStep(step - 1)}
                                            className="h-14 w-14 rounded-2xl border border-gray-100 flex items-center justify-center bg-white active:bg-gray-50"
                                        >
                                            <ArrowRight className="h-5 w-5 rotate-180" />
                                        </button>
                                    )}
                                    <Button
                                        onClick={() => {
                                            if (step === 1 && selectedService) setStep(2);
                                            else if (step === 2 && selectedDate !== null && selectedTime) setStep(3);
                                            else if (step === 3) setStep(4);
                                        }}
                                        disabled={
                                            (step === 1 && !selectedService) ||
                                            (step === 2 && (selectedDate === null || !selectedTime))
                                        }
                                        className="flex-1 h-14 rounded-2xl bg-black text-white gap-2 font-bold disabled:opacity-30 active:scale-[0.98] transition-all shadow-xl shadow-black/10"
                                    >
                                        {step === 3 ? "Confirm Booking" : "Continue"}
                                        <ChevronRight className="h-5 w-5" />
                                    </Button>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </main>
    )
}
