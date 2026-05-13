import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import {
    ArrowUpRight,
    Calendar,
    Clock,
    MapPin,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Conferences & events | Ghana Chemical Society",
    description:
        "GCS symposia, workshops, and member gatherings—dates, venues, and how to take part.",
};

const featured = {
    title: "National chemistry summit",
    date: "18–20 Jun 2026",
    dateIso: "2026-06-18",
    time: "09:00 – 17:00 GMT",
    location: "Accra International Conference Centre",
    excerpt:
        "Plenary talks, poster sessions, and industry panels on sustainable synthesis, teaching labs, and strengthening university–industry links.",
    href: "#",
    image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    badge: "Flagship",
} as const;

const upcoming = [
    {
        title: "Green chemistry workshop",
        date: "8 Jul 2026",
        dateIso: "2026-07-08",
        time: "10:00 – 15:00",
        location: "KNUST, Kumasi",
        image:
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Laboratory glassware and microscopes",
        href: "#",
    },
    {
        title: "Early-career researcher mixer",
        date: "22 Jul 2026",
        dateIso: "2026-07-22",
        time: "17:30 – 20:00",
        location: "Virtual · Zoom",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Graduates throwing caps at commencement",
        href: "#",
    },
    {
        title: "Industry–academia roundtable",
        date: "5 Sep 2026",
        dateIso: "2026-09-05",
        time: "14:00 – 18:00",
        location: "Tema",
        image:
            "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Scientist working at a laboratory bench",
        href: "#",
    },
    {
        title: "Student chapter leadership clinic",
        date: "28 Sep 2026",
        dateIso: "2026-09-28",
        time: "09:00 – 13:00",
        location: "University of Ghana, Legon",
        image:
            "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Conference attendees seated in rows",
        href: "#",
    },
] as const;

export default function EventsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gcs-muted-bg/40 pb-24 pt-28 md:pb-32 md:pt-32">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12">
                    <header className="flex flex-col gap-10 border-b border-gcs-border pb-10 md:flex-row md:items-end md:justify-between md:pb-12">
                        <div className="max-w-2xl md:max-w-3xl">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gcs-border bg-gcs-muted-bg/50 px-4 py-1.5 text-sm font-medium text-gcs-muted-text">
                                <Calendar className="h-3.5 w-3.5 text-gcs-primary" aria-hidden />
                                Conferences &amp; events
                            </div>
                            <h1 className="text-3xl font-medium tracking-tight text-gcs-foreground md:text-4xl lg:text-[2.5rem] lg:leading-tight">
                                Meet the community in person and online
                            </h1>
                            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gcs-muted-text md:text-base">
                                Symposia, technical workshops, and networking built around Ghana&rsquo;s chemistry
                                educators, researchers, students, and partners.
                            </p>
                        </div>
                        <Link
                            href="/membership"
                            className="group inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-gcs-primary transition-colors hover:text-gcs-primary-hover md:self-auto"
                        >
                            Member rates &amp; alerts
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </header>

                    <section className="mt-12 lg:mt-14" aria-labelledby="featured-heading">
                        <h2 id="featured-heading" className="sr-only">
                            Featured event
                        </h2>
                        <article className="overflow-hidden rounded-[1.75rem] border border-gcs-border/55 bg-gcs-surface ring-1 ring-gcs-border/20 lg:rounded-[2rem]">
                            <div className="flex flex-col lg:min-h-[300px] lg:flex-row">
                                <div className="relative aspect-[16/10] w-full shrink-0 lg:aspect-auto lg:w-[46%] lg:min-h-[300px]">
                                    <Image
                                        src={featured.image}
                                        alt="Conference auditorium with seated attendees"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 44vw"
                                        priority
                                    />
                                </div>
                                <div className="flex flex-1 flex-col justify-center border-t border-gcs-border/60 bg-gcs-surface px-6 py-8 md:px-10 lg:border-l lg:border-t-0">
                                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-gcs-muted-text">
                                        <span className="rounded-full bg-gcs-muted-bg px-3 py-1 text-gcs-primary">
                                            {featured.badge}
                                        </span>
                                        <span className="h-1 w-1 rounded-full bg-gcs-border" aria-hidden />
                                        <time dateTime={featured.dateIso}>{featured.date}</time>
                                    </div>
                                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-gcs-foreground md:text-[1.65rem] md:leading-snug">
                                        {featured.title}
                                    </h3>
                                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-gcs-muted-text md:text-[0.9375rem]">
                                        {featured.excerpt}
                                    </p>
                                    <ul className="mt-6 flex flex-col gap-2 text-sm text-gcs-foreground">
                                        <li className="flex items-start gap-2">
                                            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gcs-primary" aria-hidden />
                                            <span>{featured.time}</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gcs-primary" aria-hidden />
                                            <span>{featured.location}</span>
                                        </li>
                                    </ul>
                                    <Link
                                        href={featured.href}
                                        className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-gcs-border bg-gcs-muted-bg/40 px-5 py-2.5 text-sm font-semibold text-gcs-foreground transition-colors hover:border-gcs-primary hover:bg-gcs-primary hover:text-white"
                                    >
                                        View details
                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </section>

                    <section className="mt-14 lg:mt-16" aria-labelledby="upcoming-heading">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <h2 id="upcoming-heading" className="text-xl font-semibold tracking-tight text-gcs-foreground md:text-2xl">
                                Upcoming
                            </h2>
                            <p className="max-w-md text-sm text-gcs-muted-text">
                                Dates subject to final confirmation. Members receive calendar invites and discounted registration where applicable.
                            </p>
                        </div>

                        <ul className="mt-8 grid list-none gap-5 sm:grid-cols-2 xl:grid-cols-4">
                            {upcoming.map((event) => (
                                <li key={event.title}>
                                    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gcs-border/50 bg-gcs-surface ring-1 ring-gcs-border/15 transition-colors hover:border-gcs-border hover:bg-gcs-muted-bg/20">
                                        <Link href={event.href} className="flex flex-1 flex-col">
                                            <div className="relative aspect-[16/11] w-full shrink-0 overflow-hidden border-b border-gcs-border/40">
                                                <Image
                                                    src={event.image}
                                                    alt={event.imageAlt}
                                                    fill
                                                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                                />
                                            </div>
                                            <div className="flex flex-1 flex-col p-5">
                                                <div className="flex flex-wrap items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gcs-muted-text">
                                                    <time dateTime={event.dateIso}>{event.date}</time>
                                                    <span className="text-gcs-border">·</span>
                                                    <span>{event.time}</span>
                                                </div>
                                                <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight text-gcs-foreground">
                                                    {event.title}
                                                </h3>
                                                <p className="mt-2 flex items-start gap-2 text-sm text-gcs-muted-text">
                                                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gcs-primary" aria-hidden />
                                                    <span>{event.location}</span>
                                                </p>
                                                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-gcs-primary transition-colors group-hover:text-gcs-primary-hover">
                                                    Details
                                                    <ArrowUpRight className="h-4 w-4" />
                                                </span>
                                            </div>
                                        </Link>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <aside className="mt-16 rounded-2xl border border-gcs-border bg-gcs-surface px-6 py-8 md:flex md:items-center md:justify-between md:gap-10 md:px-10 md:py-10">
                        <div className="max-w-xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gcs-muted-text">
                                Secretariat
                            </p>
                            <p className="mt-3 text-base font-medium text-gcs-foreground md:text-lg">
                                Hosting or sponsoring an event with GCS?
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-gcs-muted-text">
                                Reach out for partnership slots, technical programmes, and student outreach coordinated with the society calendar.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gcs-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gcs-primary-hover md:mt-0 md:shrink-0"
                        >
                            Contact us
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </aside>
                </div>
            </main>
        </>
    );
}
