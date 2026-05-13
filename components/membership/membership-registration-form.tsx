"use client";

import { useTransition, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitMembershipRegistration } from "@/app/membership/actions";
import { gooeyToast } from "@/lib/toast";
import { cn } from "@/lib/utils";
import { readImageAsDataUrl, saveMemberProfile, type MemberProfile } from "@/lib/member-profile";

const field =
    "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-[15px] text-slate-900 shadow-sm transition-all placeholder:text-slate-400 focus:border-gcs-primary focus:outline-none focus:ring-2 focus:ring-gcs-primary/20 md:px-4";

const label = "mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-700";

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

function trimFd(fd: FormData, key: string): string {
    const v = fd.get(key);
    return typeof v === "string" ? v.trim() : "";
}

function SectionTitle({ step, title, subtitle }: { step: number; title: string; subtitle?: string }) {
    return (
        <div className="mb-8 flex gap-4">
            <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gcs-primary to-blue-700 text-sm font-bold text-white shadow-md shadow-blue-500/25 ring-4 ring-blue-500/10"
                aria-hidden
            >
                {step}
            </span>
            <div className="min-w-0 border-l-2 border-slate-200 pl-4 pt-0.5">
                <h2 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h2>
                {subtitle ? <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{subtitle}</p> : null}
            </div>
        </div>
    );
}

function FormSection({
    step,
    title,
    subtitle,
    children,
    className,
}: {
    step: number;
    title: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
}) {
    return (
        <section className={cn("scroll-mt-28", className)}>
            <SectionTitle step={step} title={title} subtitle={subtitle} />
            {children}
        </section>
    );
}

export function MembershipRegistrationForm() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_48px_-16px_rgba(15,23,42,0.12)]">
            <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-sky-50/40 px-6 py-5 md:px-8">
                <h2 className="text-base font-semibold text-slate-900">Application form</h2>
                <p className="mt-1 text-sm text-slate-600">
                    Fields marked <span className="font-semibold text-gcs-primary">*</span> are required. Estimated time:
                    about 5 minutes.
                </p>
            </div>

            <form
                className="px-5 py-8 md:px-8 md:py-10"
                onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const fd = new FormData(form);

                    startTransition(async () => {
                        let avatarDataUrl: string | undefined;
                        const avatarEl = form.querySelector<HTMLInputElement>('input[name="avatar"]');
                        const file = avatarEl?.files?.[0];
                        if (file) {
                            try {
                                avatarDataUrl = await readImageAsDataUrl(file);
                            } catch (err) {
                                const message = err instanceof Error ? err.message : "Could not use that image.";
                                gooeyToast.error("Profile photo", {
                                    description: message,
                                    preset: "smooth",
                                    spring: false,
                                });
                                return;
                            }
                        }

                        const res = await submitMembershipRegistration(fd);
                        if (!res.ok) {
                            gooeyToast.error("We couldn’t submit your application", {
                                description: res.message,
                                preset: "smooth",
                                spring: false,
                            });
                            return;
                        }

                        const registeredAt = new Date().toISOString();
                        const profile: MemberProfile = {
                            memberId: res.memberId,
                            firstName: trimFd(fd, "firstName"),
                            lastName: trimFd(fd, "lastName"),
                            email: trimFd(fd, "email"),
                            phone: trimFd(fd, "phone"),
                            institution: trimFd(fd, "institution"),
                            role: trimFd(fd, "role"),
                            department: trimFd(fd, "department"),
                            city: trimFd(fd, "city"),
                            region: trimFd(fd, "region"),
                            membershipType: trimFd(fd, "membershipType"),
                            highestDegree: trimFd(fd, "highestDegree"),
                            fieldOfStudy: trimFd(fd, "fieldOfStudy"),
                            motivation: trimFd(fd, "motivation"),
                            registeredAt,
                            avatarDataUrl,
                            payments: [
                                {
                                    id: `${res.memberId}-dues-pending`,
                                    date: registeredAt,
                                    description: "Annual membership dues — awaiting secretariat confirmation",
                                    amountGhs: null,
                                    status: "pending",
                                },
                            ],
                        };

                        try {
                            saveMemberProfile(profile);
                        } catch {
                            gooeyToast.error("Could not save your portfolio locally", {
                                description:
                                    "Your application was received, but we could not store your browser profile. Try again or contact the secretariat.",
                                preset: "smooth",
                                spring: false,
                            });
                            return;
                        }

                        gooeyToast.success("Application received", {
                            description: `Your member ID is ${res.memberId}. Sign in with your email and this ID to open your portfolio.`,
                            preset: "smooth",
                            spring: false,
                        });
                        router.push(`/login?role=member&memberId=${encodeURIComponent(res.memberId)}`);
                    });
                }}
            >
                <FormSection
                    step={1}
                    title="Personal details"
                    subtitle="How we will reach you about this application."
                    className="pb-10"
                >
                    <div className="grid gap-5 md:grid-cols-2 md:gap-x-6 md:gap-y-5">
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
                        <div className="md:col-span-2">
                            <label className={label} htmlFor="avatar">
                                Profile photo <span className="font-normal normal-case text-slate-500">(optional)</span>
                            </label>
                            <input
                                id="avatar"
                                name="avatar"
                                type="file"
                                accept="image/jpeg,image/png,image/webp"
                                className={cn(
                                    field,
                                    "cursor-pointer py-3 text-slate-500 file:mr-4 file:rounded-lg file:border-0 file:bg-gcs-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-gcs-primary-hover"
                                )}
                            />
                            <p className="mt-2 text-xs text-slate-500">JPEG, PNG, or WebP. Shown on your member portfolio.</p>
                        </div>
                    </div>
                </FormSection>

                <FormSection
                    step={2}
                    title="Affiliation"
                    subtitle="University, company, or organisation."
                    className="border-t border-slate-100 pt-10"
                >
                    <div className="grid gap-5 md:grid-cols-2 md:gap-x-6 md:gap-y-5">
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
                                className={cn(
                                    field,
                                    "cursor-pointer appearance-none bg-[length:0.875rem] bg-[right_0.875rem_center] bg-no-repeat pr-10"
                                )}
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                                }}
                            >
                                <option value="">Select region</option>
                                {REGIONS.map((r) => (
                                    <option key={r} value={r}>
                                        {r}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </FormSection>

                <FormSection
                    step={3}
                    title="Membership category"
                    subtitle="Choose one tier. Dues differ by category—the secretariat will confirm yours."
                    className="border-t border-slate-100 pt-10"
                >
                    <fieldset>
                        <legend className="sr-only">Choose membership category</legend>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {MEMBERSHIP_TYPES.map((m) => (
                                <label
                                    key={m.value}
                                    className="group relative flex cursor-pointer gap-3 rounded-xl border-2 border-slate-200 bg-slate-50/30 p-4 transition-all hover:border-gcs-primary/35 hover:bg-white has-[:checked]:border-gcs-primary has-[:checked]:bg-gradient-to-br has-[:checked]:from-sky-50/80 has-[:checked]:to-white has-[:checked]:shadow-md"
                                >
                                    <input
                                        type="radio"
                                        name="membershipType"
                                        value={m.value}
                                        required
                                        className="mt-1 h-4 w-4 shrink-0 border-slate-300 text-gcs-primary focus:ring-gcs-primary"
                                    />
                                    <span className="min-w-0">
                                        <span className="block text-sm font-semibold text-slate-900">{m.title}</span>
                                        <span className="mt-1 block text-sm leading-snug text-slate-600">{m.description}</span>
                                    </span>
                                </label>
                            ))}
                        </div>
                    </fieldset>
                </FormSection>

                <FormSection
                    step={4}
                    title="Background"
                    subtitle="Optional. Helps the secretariat with programme placement."
                    className="border-t border-slate-100 pt-10"
                >
                    <div className="grid gap-5">
                        <div className="grid gap-5 md:grid-cols-2 md:gap-x-6">
                            <div>
                                <label className={label} htmlFor="highestDegree">
                                    Highest qualification
                                </label>
                                <Input
                                    id="highestDegree"
                                    name="highestDegree"
                                    placeholder="e.g. BSc Chemistry, PhD"
                                    className={cn(field)}
                                />
                            </div>
                            <div>
                                <label className={label} htmlFor="fieldOfStudy">
                                    Field of study
                                </label>
                                <Input
                                    id="fieldOfStudy"
                                    name="fieldOfStudy"
                                    placeholder="e.g. Analytical chemistry"
                                    className={cn(field)}
                                />
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
                                className={cn(field, "min-h-[120px] resize-y py-3")}
                                placeholder="Optional short statement."
                            />
                        </div>
                    </div>
                </FormSection>

                <div className="border-t border-slate-100 pt-8">
                    <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 md:p-5">
                        <label className="flex cursor-pointer gap-3">
                            <input
                                type="checkbox"
                                name="consent"
                                required
                                className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-gcs-primary focus:ring-gcs-primary"
                            />
                            <span className="text-sm leading-relaxed text-slate-800">
                                I confirm this information is accurate and I agree to the society&apos;s membership terms and
                                code of conduct. *
                            </span>
                        </label>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-5 border-t border-slate-100 bg-slate-50/40 px-5 py-6 -mx-5 md:-mx-8 md:flex-row md:items-center md:justify-between md:px-8">
                    <p className="text-sm text-slate-600">
                        Questions?{" "}
                        <Link
                            href="/contact"
                            className="font-semibold text-gcs-primary underline-offset-2 hover:text-gcs-primary-hover hover:underline"
                        >
                            Contact the secretariat
                        </Link>
                    </p>
                    <Button
                        type="submit"
                        disabled={isPending}
                        className="h-12 w-full rounded-full bg-gcs-primary px-10 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-gcs-primary-hover disabled:opacity-50 md:w-auto"
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
        </div>
    );
}
