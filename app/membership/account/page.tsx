import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { MemberAccountDashboard } from "@/components/membership/member-account-dashboard";

export const metadata: Metadata = {
    title: "Member portfolio | Ghana Chemical Society",
    description:
        "Your Ghana Chemical Society member portfolio—profile, member ID, members-only resources, and payment history.",
};

export default function MemberAccountPage() {
    return (
        <>
            <Header />
            <main className="relative min-h-screen overflow-hidden bg-white pb-24 pt-28 md:pb-32 md:pt-32">
                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"
                    aria-hidden
                />
                <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12">
                    <MemberAccountDashboard />
                </div>
            </main>
        </>
    );
}
