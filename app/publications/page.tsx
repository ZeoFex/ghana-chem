import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { ArrowUpRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
    title: "Research & publications | Ghana Chemical Society",
    description:
        "Journals, bulletins, technical outputs, and calls for papers from the Ghana Chemical Society.",
};

const featured = {
    type: "Journal",
    label: "Ghana Journal of Chemistry",
    issue: "Vol. 12 · Issue 1 · 2026",
    title: "Special issue: green chemistry & local materials",
    excerpt:
        "Original research and reviews on sustainable synthesis, analytical methods adapted for Ghanaian contexts, and education-focused laboratory innovations.",
    href: "#",
    image:
        "https://images.unsplash.com/photo-1532619675605-1ede6c778ed9?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Open chemistry textbooks and papers on a desk",
    badge: "Open access",
} as const;

const publications = [
    {
        type: "Bulletin",
        meta: "Quarterly · May 2026",
        title: "GCS member bulletin — grants, safety notices, chapter highlights",
        excerpt: "Digest of funding rounds, regulatory reminders, and upcoming society deadlines.",
        image:
            "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Laboratory researcher pipetting samples",
        href: "#",
    },
    {
        type: "Guideline",
        meta: "Technical series",
        title: "Bench chemistry waste segregation checklist for universities",
        excerpt:
            "Aligned with national hazardous waste categories; intended for departmental safety officers.",
        image:
            "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Laboratory safety equipment and bottles",
        href: "#",
    },
    {
        type: "Proceedings",
        meta: "2025 symposium",
        title: "National chemistry summit — selected abstracts & posters",
        excerpt:
            "Curated PDF bundle from plenary and poster sessions; ISBN assigned for library cataloguing.",
        image:
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Conference hall with audience",
        href: "#",
    },
    {
        type: "Report",
        meta: "Annual · 2025",
        title: "GCS annual report — membership, finances, and programmes",
        excerpt:
            "High-level summary for members and donors; audited figures provided as annex upon request.",
        image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Person reviewing printed charts and documents",
        href: "#",
    },
] as const;

export default function PublicationsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gcs-muted-bg/40 pb-24 pt-28 md:pb-32 md:pt-32">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12">
                    <header className="flex flex-col gap-10 border-b border-gcs-border pb-10 md:flex-row md:items-end md:justify-between md:pb-12">
                        <div className="max-w-2xl md:max-w-3xl">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gcs-border bg-gcs-muted-bg/50 px-4 py-1.5 text-sm font-medium text-gcs-muted-text">
                                <BookOpen className="h-3.5 w-3.5 text-gcs-primary" aria-hidden />
                                Research &amp; publications
                            </div>
                            <h1 className="text-3xl font-medium tracking-tight text-gcs-foreground md:text-4xl lg:text-[2.5rem] lg:leading-tight">
                                Journals, bulletins, and society outputs
                            </h1>
                            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gcs-muted-text md:text-base">
                                Peer-reviewed work, technical guidance, and conference proceedings produced or endorsed by GCS.
                            </p>
                        </div>
                        <Link
                            href="/news"
                            className="group inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-gcs-primary transition-colors hover:text-gcs-primary-hover md:self-auto"
                        >
                            Calls for papers &amp; news
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </header>

                    <section className="mt-12 lg:mt-14" aria-labelledby="featured-pub-heading">
                        <h2 id="featured-pub-heading" className="sr-only">
                            Featured publication
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
                                        <span>{featured.type}</span>
                                        <span className="h-1 w-1 rounded-full bg-gcs-border" aria-hidden />
                                        <span>{featured.issue}</span>
                                    </div>
                                    <p className="mt-3 text-sm font-medium text-gcs-primary">{featured.label}</p>
                                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-gcs-foreground md:text-[1.65rem] md:leading-snug">
                                        {featured.title}
                                    </h3>
                                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-gcs-muted-text md:text-[0.9375rem]">
                                        {featured.excerpt}
                                    </p>
                                    <Link
                                        href={featured.href}
                                        className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-gcs-border bg-gcs-muted-bg/40 px-5 py-2.5 text-sm font-semibold text-gcs-foreground transition-colors hover:border-gcs-primary hover:bg-gcs-primary hover:text-white"
                                    >
                                        View issue
                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </section>

                    <section className="mt-14 lg:mt-16" aria-labelledby="catalog-heading">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <h2 id="catalog-heading" className="text-xl font-semibold tracking-tight text-gcs-foreground md:text-2xl">
                                Catalogue
                            </h2>
                            <p className="max-w-md text-sm text-gcs-muted-text">
                                Replace placeholder links with DOIs, PDF storage, or your institutional repository when ready.
                            </p>
                        </div>

                        <ul className="mt-8 grid list-none gap-5 sm:grid-cols-2 xl:grid-cols-4">
                            {publications.map((item) => (
                                <li key={item.title}>
                                    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gcs-border/50 bg-gcs-surface ring-1 ring-gcs-border/15 transition-colors hover:border-gcs-border hover:bg-gcs-muted-bg/20">
                                        <Link href={item.href} className="flex flex-1 flex-col">
                                            <div className="relative aspect-[16/11] w-full shrink-0 overflow-hidden border-b border-gcs-border/40">
                                                <Image
                                                    src={item.image}
                                                    alt={item.imageAlt}
                                                    fill
                                                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                                />
                                            </div>
                                            <div className="flex flex-1 flex-col p-5">
                                                <div className="flex flex-wrap items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gcs-muted-text">
                                                    <span className="text-gcs-primary">{item.type}</span>
                                                    <span className="text-gcs-border">·</span>
                                                    <span>{item.meta}</span>
                                                </div>
                                                <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight text-gcs-foreground">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gcs-muted-text">
                                                    {item.excerpt}
                                                </p>
                                                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-gcs-primary transition-colors group-hover:text-gcs-primary-hover">
                                                    Open resource
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
                                Editors &amp; partners
                            </p>
                            <p className="mt-3 text-base font-medium text-gcs-foreground md:text-lg">
                                Propose a special issue or distribute through GCS channels
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-gcs-muted-text">
                                Editorial boards and industry collaborators can align outreach, indexing, and member access with the secretariat.
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
