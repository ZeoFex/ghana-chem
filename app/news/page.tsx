import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { ArrowUpRight, Newspaper } from "lucide-react";

export const metadata: Metadata = {
    title: "News | Ghana Chemical Society",
    description:
        "Society announcements, conference coverage, calls for papers, and updates for GCS members.",
};

const featured = {
    category: "Annual symposium",
    date: "12 May 2026",
    dateIso: "2026-05-12",
    title: "GCS welcomes delegates for the national chemistry summit in Accra",
    excerpt:
        "Plenary sessions on sustainable synthesis, teaching innovation, and strengthening links between universities and chemical industry partners across Ghana.",
    href: "#",
    image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Conference auditorium with presentation screen",
    badge: "Featured",
} as const;

const stories = [
    {
        category: "Outreach",
        date: "30 Apr 2026",
        dateIso: "2026-04-30",
        title: "Secondary-school chemistry bootcamp opens registration in four regions",
        excerpt:
            "Hands-on labs and careers talks for senior high students, coordinated with regional education offices.",
        image:
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Laboratory microscopes and glassware",
        href: "#",
    },
    {
        category: "Publications",
        date: "18 Apr 2026",
        dateIso: "2026-04-18",
        title: "Call for papers: special issue on green chemistry and local materials",
        excerpt:
            "Peer-reviewed submissions open through August; guest editors from three Ghanaian institutions.",
        image:
            "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Scientist reviewing samples at a bench",
        href: "#",
    },
    {
        category: "Society",
        date: "5 Apr 2026",
        dateIso: "2026-04-05",
        title: "New student chapter toolkit: start a GCS circle on your campus",
        excerpt:
            "Templates for constitution, faculty liaison letters, and event ideas aligned with GCS branding.",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
        imageAlt: "University graduates celebrating outdoors",
        href: "#",
    },
    {
        category: "Policy",
        date: "22 Mar 2026",
        dateIso: "2026-03-22",
        title: "GCS submits inputs on national chemical safety reporting draft",
        excerpt:
            "Member consultation summarized for regulators—covering labs, waste handling, and academic exemptions.",
        image:
            "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=900&q=80",
        imageAlt: "People seated in a seminar room",
        href: "#",
    },
] as const;

export default function NewsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gcs-muted-bg/40 pb-24 pt-28 md:pb-32 md:pt-32">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12">
                    <header className="flex flex-col gap-10 border-b border-gcs-border pb-10 md:flex-row md:items-end md:justify-between md:pb-12">
                        <div className="max-w-2xl md:max-w-3xl">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gcs-border bg-gcs-muted-bg/50 px-4 py-1.5 text-sm font-medium text-gcs-muted-text">
                                <Newspaper className="h-3.5 w-3.5 text-gcs-primary" aria-hidden />
                                News &amp; announcements
                            </div>
                            <h1 className="text-3xl font-medium tracking-tight text-gcs-foreground md:text-4xl lg:text-[2.5rem] lg:leading-tight">
                                From the society desk
                            </h1>
                            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gcs-muted-text md:text-base">
                                Conferences, calls, outreach, and member resources—updates curated for the GCS community.
                            </p>
                        </div>
                        <Link
                            href="/events"
                            className="group inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-gcs-primary transition-colors hover:text-gcs-primary-hover md:self-auto"
                        >
                            Events calendar
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </header>

                    <section className="mt-12 lg:mt-14" aria-labelledby="featured-news-heading">
                        <h2 id="featured-news-heading" className="sr-only">
                            Featured story
                        </h2>
                        <article className="overflow-hidden rounded-[1.75rem] border border-gcs-border/55 bg-gcs-surface ring-1 ring-gcs-border/20 lg:rounded-[2rem]">
                            <div className="flex flex-col lg:min-h-[300px] lg:flex-row">
                                <div className="relative aspect-[16/10] w-full shrink-0 lg:aspect-auto lg:w-[46%] lg:min-h-[300px]">
                                    <Image
                                        src={featured.image}
                                        alt={featured.imageAlt}
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
                                        <span className="text-gcs-primary">{featured.category}</span>
                                        <span className="h-1 w-1 rounded-full bg-gcs-border" aria-hidden />
                                        <time dateTime={featured.dateIso}>{featured.date}</time>
                                    </div>
                                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-gcs-foreground md:text-[1.65rem] md:leading-snug">
                                        {featured.title}
                                    </h3>
                                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-gcs-muted-text md:text-[0.9375rem]">
                                        {featured.excerpt}
                                    </p>
                                    <Link
                                        href={featured.href}
                                        className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-gcs-border bg-gcs-muted-bg/40 px-5 py-2.5 text-sm font-semibold text-gcs-foreground transition-colors hover:border-gcs-primary hover:bg-gcs-primary hover:text-white"
                                    >
                                        Read article
                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </section>

                    <section className="mt-14 lg:mt-16" aria-labelledby="recent-heading">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <h2 id="recent-heading" className="text-xl font-semibold tracking-tight text-gcs-foreground md:text-2xl">
                                Recent updates
                            </h2>
                            <p className="max-w-md text-sm text-gcs-muted-text">
                                Full archives and RSS-style feeds can plug in here when your CMS or mailing workflow is ready.
                            </p>
                        </div>

                        <ul className="mt-8 grid list-none gap-5 sm:grid-cols-2 xl:grid-cols-4">
                            {stories.map((post) => (
                                <li key={post.title}>
                                    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gcs-border/50 bg-gcs-surface ring-1 ring-gcs-border/15 transition-colors hover:border-gcs-border hover:bg-gcs-muted-bg/20">
                                        <Link href={post.href} className="flex flex-1 flex-col">
                                            <div className="relative aspect-[16/11] w-full shrink-0 overflow-hidden border-b border-gcs-border/40">
                                                <Image
                                                    src={post.image}
                                                    alt={post.imageAlt}
                                                    fill
                                                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                                />
                                            </div>
                                            <div className="flex flex-1 flex-col p-5">
                                                <div className="flex flex-wrap items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gcs-muted-text">
                                                    <span className="text-gcs-primary">{post.category}</span>
                                                    <span className="text-gcs-border">·</span>
                                                    <time dateTime={post.dateIso}>{post.date}</time>
                                                </div>
                                                <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight text-gcs-foreground">
                                                    {post.title}
                                                </h3>
                                                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gcs-muted-text">
                                                    {post.excerpt}
                                                </p>
                                                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-gcs-primary transition-colors group-hover:text-gcs-primary-hover">
                                                    Continue reading
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
                                Media &amp; submissions
                            </p>
                            <p className="mt-3 text-base font-medium text-gcs-foreground md:text-lg">
                                Pitch a story or request an official statement
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-gcs-muted-text">
                                Faculty chapters, industry partners, and student reps can route announcements through the secretariat for review before publication.
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
