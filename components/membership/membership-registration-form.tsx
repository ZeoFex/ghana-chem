"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitMembershipRegistration } from "@/app/membership/actions";
import { gooeyToast } from "@/lib/toast";
import { cn } from "@/lib/utils";

const field =
    "h-11 w-full rounded-lg border border-gcs-border bg-gcs-surface px-3.5 text-sm text-gcs-foreground transition-colors placeholder:text-gcs-muted-text/55 focus:border-gcs-primary focus:outline-none focus:ring-1 focus:ring-gcs-primary md:h-12 md:px-4 md:text-[15px]";

const label = "mb-1.5 block text-xs font-medium text-gcs-foreground";

const MEMBERSHIP_TYPES = [
    {
        value: "student",
        title: "Student",
        description: "Undergraduate or postgraduate in chemistry or a related field.",
    },
    {
        value: "early_career",
        title: "Early career",
        description: "First years of professional or academic practice.",
    },
    {
        value: "professional",
        title: "Professional",
        description: "Researchers, lecturers, and practising chemists.",
    },
    {
        value: "corporate",
        title: "Corporate / institutional",
        description: "Companies, laboratories, and organisations.",
    },
] as const;

const REGIONS = [
    "Greater Accra",
    "Ashanti",
    "Western",
    "Eastern",
    "Northern",
    "Volta",
    "Central",
    "Upper East",
    "Upper West",
    "Bono",
    "Bono East",
    "Ahafo",
    "Western North",
    "Savannah",
    "North East",
    "Oti",
    "Outside Ghana",
] as const;

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="mb-8">
            <h2 className="text-base font-semibold tracking-tight text-gcs-foreground">{title}</h2>
            {subtitle ? <p className="mt-1.5 text-sm text-gcs-muted-text">{subtitle}</p> : null}
        </div>
    );
}

export function MembershipRegistrationForm() {
    const [result, setResult] = useState<"idle" | "success">("idle");
    const [isPending, startTransition] = useTransition();

    if (result === "success") {
        return (
            <div className="border-t border-gcs-border pt-12 text-center md:pt-14">
                <div className="mx-auto flex h-12 w-12 items-center justify-center text-gcs-primary">
                    <CheckCircle2 className="h-10 w-10 stroke-[1.25]" aria-hidden />
                </div>
                <h2 className="mt-6 text-xl font-semibold tracking-tight text-gcs-foreground md:text-2xl">
                    Application received
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gcs-muted-text md:text-base">
                    The secretariat will review your details and email you the next steps, including dues where
                    applicable.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                    <Button asChild className="h-11 rounded-full bg-gcs-primary px-8 text-sm text-white hover:bg-gcs-primary-hover">
                        <Link href="/">Back to home</Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 rounded-full border-gcs-border bg-transparent px-8 text-sm">
                        <Link href="/contact">Contact secretariat</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <form
            className="space-y-0"
            onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                startTransition(async () => {
                    const res = await submitMembershipRegistration(fd);
                    if (res.ok) setResult("success");
                    else {
                        gooeyToast.error("We couldn’t submit your application", {
                            description: res.message,
                            preset: "smooth",
                            spring: false,
                        });
                    }
                });
            }}
        >
            <section className="pb-10">
                <SectionTitle
                    title="Personal details"
                    subtitle="How we will reach you about this application."
                />
                <div className="grid gap-5 md:grid-cols-2 md:gap-x-8 md:gap-y-5">
                    <div>
                        <label className={label} htmlFor="firstName">
                            First name *
                        </label>
                        <Input id="firstName" name="firstName" required autoComplete="given-name" className={cn(field)} />
                    </div>
                    <div>
                        <label className={label} htmlFor="lastName">
                            Last name *
                        </label>
                        <Input id="lastName" name="lastName" required autoComplete="family-name" className={cn(field)} />
                    </div>
                    <div>
                        <label className={label} htmlFor="email">
                            Email *
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@institution.edu.gh"
                            className={cn(field)}
                        />
                    </div>
                    <div>
                        <label className={label} htmlFor="phone">
                            Phone *
                        </label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            autoComplete="tel"
                            placeholder="+233 XX XXX XXXX"
                            className={cn(field)}
                        />
                    </div>
                </div>
            </section>

            <section className="border-t border-gcs-border pt-10">
                <SectionTitle title="Affiliation" subtitle="University, company, or organisation." />
                <div className="grid gap-5 md:grid-cols-2 md:gap-x-8 md:gap-y-5">
                    <div className="md:col-span-2">
                        <label className={label} htmlFor="institution">
                            Institution / employer *
                        </label>
                        <Input
                            id="institution"
                            name="institution"
                            required
                            placeholder="e.g. Kwame Nkrumah University of Science and Technology"
                            className={cn(field)}
                        />
                    </div>
                    <div>
                        <label className={label} htmlFor="role">
                            Role / title
                        </label>
                        <Input
                            id="role"
                            name="role"
                            autoComplete="organization-title"
                            placeholder="e.g. Lecturer, R&D scientist"
                            className={cn(field)}
                        />
                    </div>
                    <div>
                        <label className={label} htmlFor="department">
                            Department / unit
                        </label>
                        <Input id="department" name="department" placeholder="Optional" className={cn(field)} />
                    </div>
                    <div>
                        <label className={label} htmlFor="city">
                            City
                        </label>
                        <Input id="city" name="city" autoComplete="address-level2" className={cn(field)} />
                    </div>
                    <div>
                        <label className={label} htmlFor="region">
                            Region
                        </label>
                        <select
                            id="region"
                            name="region"
                            className={cn(field, "cursor-pointer appearance-none bg-[length:0.875rem] bg-[right_0.75rem_center] bg-no-repeat pr-9")}
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                            }}
                        >
                            <option value="">Select</option>
                            {REGIONS.map((r) => (
                                <option key={r} value={r}>
                                    {r}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </section>

            <section className="border-t border-gcs-border pt-10">
                <SectionTitle
                    title="Membership category"
                    subtitle="One option. Dues differ by tier—the secretariat will confirm."
                />
                <fieldset>
                    <legend className="sr-only">Choose membership category</legend>
                    <div className="divide-y divide-gcs-border rounded-lg border border-gcs-border">
                        {MEMBERSHIP_TYPES.map((m) => (
                            <label
                                key={m.value}
                                className="flex cursor-pointer gap-3 px-4 py-4 transition-colors first:rounded-t-[calc(0.5rem-1px)] last:rounded-b-[calc(0.5rem-1px)] hover:bg-gcs-muted-bg/25 md:px-5 md:py-4"
                            >
                                <input
                                    type="radio"
                                    name="membershipType"
                                    value={m.value}
                                    required
                                    className="mt-0.5 h-4 w-4 shrink-0 border-gcs-border text-gcs-primary focus:ring-1 focus:ring-gcs-primary"
                                />
                                <span>
                                    <span className="block text-sm font-medium text-gcs-foreground">{m.title}</span>
                                    <span className="mt-0.5 block text-sm leading-snug text-gcs-muted-text">{m.description}</span>
                                </span>
                            </label>
                        ))}
                    </div>
                </fieldset>
            </section>

            <section className="border-t border-gcs-border pt-10">
                <SectionTitle title="Background" subtitle="Optional. Helps with programme placement." />
                <div className="grid gap-5">
                    <div className="grid gap-5 md:grid-cols-2 md:gap-x-8">
                        <div>
                            <label className={label} htmlFor="highestDegree">
                                Highest qualification
                            </label>
                            <Input id="highestDegree" name="highestDegree" placeholder="e.g. BSc Chemistry, PhD" className={cn(field)} />
                        </div>
                        <div>
                            <label className={label} htmlFor="fieldOfStudy">
                                Field of study
                            </label>
                            <Input id="fieldOfStudy" name="fieldOfStudy" placeholder="e.g. Analytical chemistry" className={cn(field)} />
                        </div>
                    </div>
                    <div>
                        <label className={label} htmlFor="motivation">
                            Why join GCS?
                        </label>
                        <textarea
                            id="motivation"
                            name="motivation"
                            rows={4}
                            className={cn(field, "min-h-[112px] resize-y py-2.5 md:min-h-[120px]")}
                            placeholder="Optional short statement."
                        />
                    </div>
                </div>
            </section>

            <section className="border-t border-gcs-border pt-10">
                <label className="flex cursor-pointer gap-3">
                    <input
                        type="checkbox"
                        name="consent"
                        required
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-gcs-border text-gcs-primary focus:ring-1 focus:ring-gcs-primary"
                    />
                    <span className="text-sm leading-relaxed text-gcs-foreground">
                        I confirm this information is accurate and I agree to the society&apos;s membership terms and code
                        of conduct. *
                    </span>
                </label>
            </section>

            <div className="flex flex-col gap-6 border-t border-gcs-border pt-10 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gcs-muted-text">
                    Questions?{" "}
                    <Link href="/contact" className="font-medium text-gcs-primary hover:text-gcs-primary-hover hover:underline">
                        Contact the secretariat
                    </Link>
                </p>
                <Button
                    type="submit"
                    disabled={isPending}
                    className="h-11 w-full rounded-full bg-gcs-primary px-10 text-sm text-white hover:bg-gcs-primary-hover disabled:opacity-50 sm:w-auto"
                >
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
                            Submitting…
                        </>
                    ) : (
                        "Submit application"
                    )}
                </Button>
            </div>
        </form>
    );
}
