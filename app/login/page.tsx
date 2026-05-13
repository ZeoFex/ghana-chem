import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
    title: "Sign in | Ghana Chemical Society",
    description: "Sign in to the Ghana Chemical Society member and staff portal.",
};

export default function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col bg-gcs-muted-bg/40">
            <div className="border-b border-gcs-border px-6 py-6 md:px-12">
                <Link href="/" className="text-sm font-medium text-gcs-primary hover:text-gcs-primary-hover">
                    ← Back to site
                </Link>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 md:py-24">
                <LoginForm />
            </div>
        </main>
    );
}
