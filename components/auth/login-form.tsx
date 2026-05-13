"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { gooeyToast } from "@/lib/toast";
import { cn } from "@/lib/utils";

const field =
    "h-11 w-full rounded-lg border border-gcs-border bg-gcs-surface px-3.5 text-sm text-gcs-foreground transition-colors placeholder:text-gcs-muted-text/55 focus:border-gcs-primary focus:outline-none focus:ring-1 focus:ring-gcs-primary md:h-12";

const label = "mb-1.5 block text-xs font-medium text-gcs-foreground";

export function LoginForm() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    return (
        <form
            className="w-full max-w-md"
            onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const email = String(fd.get("email") ?? "").trim();
                const password = String(fd.get("password") ?? "");
                if (!email) {
                    gooeyToast.error("Email required", {
                        description: "Enter the email associated with your account.",
                        preset: "smooth",
                        spring: false,
                    });
                    return;
                }
                if (!password) {
                    gooeyToast.error("Password required", {
                        description: "Enter your password to continue.",
                        preset: "smooth",
                        spring: false,
                    });
                    return;
                }
                startTransition(() => {
                    gooeyToast.success("Logged in", {
                        description: "Welcome back to the Ghana Chemical Society portal.",
                        preset: "smooth",
                        spring: false,
                    });
                    router.push("/dashboard");
                });
            }}
        >
            <div className="mb-10 text-center">
                <h1 className="text-2xl font-semibold tracking-tight text-gcs-foreground md:text-3xl">Sign in</h1>
                <p className="mt-2 text-sm text-gcs-muted-text">Member and staff access to the society portal.</p>
            </div>

            <div className="space-y-5">
                <div>
                    <label className={label} htmlFor="login-email">
                        Email
                    </label>
                    <Input
                        id="login-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="you@example.com"
                        className={cn(field)}
                    />
                </div>
                <div>
                    <div className="mb-1.5 flex items-center justify-between gap-2">
                        <label className="block text-xs font-medium text-gcs-foreground" htmlFor="login-password">
                            Password
                        </label>
                        <Link
                            href="/contact"
                            className="text-xs font-medium text-gcs-primary hover:text-gcs-primary-hover hover:underline"
                        >
                            Need help?
                        </Link>
                    </div>
                    <Input
                        id="login-password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className={cn(field)}
                    />
                </div>
            </div>

            <Button
                type="submit"
                disabled={isPending}
                className="mt-8 h-11 w-full rounded-full bg-gcs-primary text-sm text-white hover:bg-gcs-primary-hover disabled:opacity-60"
            >
                {isPending ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
                        Signing in…
                    </>
                ) : (
                    "Sign in"
                )}
            </Button>
        </form>
    );
}
