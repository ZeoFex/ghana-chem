import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { MembershipRegistrationForm } from "@/components/membership/membership-registration-form";
import { ArrowRight } from "lucide-react";

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
            <main className="min-h-screen bg-gcs-muted-bg/40 pb-24 pt-28 md:pb-32 md:pt-32">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12">
                    <header className="max-w-2xl border-b border-gcs-border pb-10 md:max-w-3xl md:pb-12">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gcs-muted-text">Membership</p>
                        <h1 className="mt-3 text-3xl font-medium tracking-tight text-gcs-foreground md:text-4xl lg:text-[2.5rem] lg:leading-tight">
                            Registration
                        </h1>
                        <p className="mt-5 max-w-xl text-sm leading-relaxed text-gcs-muted-text md:text-base">
                            Submit this form once. The secretariat will confirm your category and send payment instructions
                            for annual dues if applicable.
                        </p>
                    </header>

                    <div className="mx-auto mt-12 max-w-3xl lg:mt-14 lg:grid lg:max-w-none lg:grid-cols-12 lg:gap-16 lg:gap-x-20">
                        <div className="lg:col-span-7 xl:col-span-8">
                            <MembershipRegistrationForm />
                        </div>

                        <aside className="mt-16 border-t border-gcs-border pt-12 lg:mt-0 lg:col-span-5 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0 xl:col-span-4">
                            <div className="lg:sticky lg:top-32">
                                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gcs-muted-text">Benefits</p>
                                <ul className="mt-5 space-y-4 text-sm leading-relaxed text-gcs-muted-text">
                                    {benefits.map((b) => (
                                        <li key={b} className="border-l-2 border-gcs-primary/30 pl-4">
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 text-sm">
                                    <p className="font-medium text-gcs-foreground">Offline or bulk applications</p>
                                    <p className="mt-2 leading-relaxed text-gcs-muted-text">
                                        Request a PDF or discuss institutional membership with the secretariat.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gcs-primary hover:text-gcs-primary-hover"
                                    >
                                        Contact
                                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                                    </Link>
                                </div>
                                <p className="mt-10 text-xs leading-relaxed text-gcs-muted-text">
                                    GCS processes your data only to manage membership. We do not sell personal information.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
}
