import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { MembershipRegistrationForm } from "@/components/membership/membership-registration-form";
import { ArrowRight, Check, FlaskConical, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Membership registration | Ghana Chemical Society",
    description:
        "Apply to join the Ghana Chemical Society—connect with educators, researchers, and industry professionals across Ghana.",
};

const benefits = [
    "Reduced rates at GCS conferences and symposia",
    "Publications and technical notices",
    "Networking across universities, industry, and regulators",
    "Voting and committees (by tier)",
];

export default function MembershipPage() {
    return (
        <>
            <Header />
            <main className="relative min-h-screen overflow-hidden bg-white pb-20 pt-28 md:pb-28 md:pt-32">
                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-sky-50/30 -z-10"
                    aria-hidden
                />
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,#1e40af_1px,transparent_0)] [background-size:28px_28px] -z-10"
                    aria-hidden
                />

                <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12">
                    <header className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">
                            <FlaskConical className="h-3.5 w-3.5 text-gcs-primary" aria-hidden />
                            Membership
                        </div>
                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
                            Join the Ghana Chemical Society
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 lg:mx-0 lg:max-w-xl">
                            Complete one application. Our secretariat will confirm your category and share payment details
                            for annual dues where they apply.
                        </p>
                        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-5 py-4 text-left shadow-sm backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between lg:mx-0">
                            <p className="text-sm text-slate-600">
                                <span className="font-medium text-slate-900">Returning applicant?</span> Use member sign-in
                                with your email and GCS member ID to open your portfolio.
                            </p>
                            <Link
                                href="/login?role=member"
                                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-gcs-primary/20 bg-gcs-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gcs-primary-hover"
                            >
                                Member sign-in
                                <ArrowRight className="h-4 w-4" aria-hidden />
                            </Link>
                        </div>
                    </header>

                    <div className="mx-auto mt-14 max-w-3xl lg:mt-16 lg:grid lg:max-w-none lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
                        <div className="lg:col-span-7 xl:col-span-8">
                            <MembershipRegistrationForm />
                        </div>

                        <aside className="mt-12 lg:col-span-5 lg:mt-0 xl:col-span-4">
                            <div className="lg:sticky lg:top-32">
                                <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_4px_32px_-12px_rgba(15,23,42,0.1)]">
                                    <div className="border-b border-slate-100 bg-gradient-to-br from-gcs-primary/[0.06] via-white to-sky-50/40 px-6 py-5">
                                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gcs-primary">
                                            Member benefits
                                        </p>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            What you unlock as part of the GCS community.
                                        </p>
                                    </div>
                                    <ul className="space-y-0 divide-y divide-slate-100 px-2 py-2">
                                        {benefits.map((b) => (
                                            <li
                                                key={b}
                                                className="flex gap-3 px-4 py-3.5 text-sm leading-relaxed text-slate-700"
                                            >
                                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                                                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                                                </span>
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="border-t border-slate-100 bg-slate-50/60 px-6 py-5">
                                        <p className="text-sm font-semibold text-slate-900">Offline or bulk applications</p>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            Request a PDF or discuss institutional membership with the secretariat.
                                        </p>
                                        <Link
                                            href="/contact"
                                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gcs-primary transition hover:text-gcs-primary-hover"
                                        >
                                            Contact the secretariat
                                            <ArrowRight className="h-4 w-4" aria-hidden />
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-4 shadow-sm">
                                    <Shield className="h-5 w-5 shrink-0 text-gcs-primary" aria-hidden />
                                    <p className="text-xs leading-relaxed text-slate-500">
                                        GCS uses your data only to manage membership. We do not sell personal information.
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
}
