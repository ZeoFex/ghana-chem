import { Header } from "@/components/layout/header";
import { Hero } from "@/components/home/hero";
import { ExploreSection } from "@/components/home/explore-section";
import { JoinSection } from "@/components/home/join-section";
import { NewsUpdatesSection } from "@/components/home/news-updates-section";
import { DnaScroll } from "@/components/home/dna-scroll";
import { FacilitiesSection } from "@/components/home/facilities-section";
import { Testimonials } from "@/components/home/testimonials";
import { ContactFooter } from "@/components/home/contact-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gcs-muted-bg/40">
      <Header />
      <Hero />
      <ExploreSection />
      <JoinSection />
      <NewsUpdatesSection />
      <Testimonials />
      <ContactFooter />
    </main>
  );
}
