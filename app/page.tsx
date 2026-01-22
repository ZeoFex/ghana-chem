import { Header } from "@/components/layout/header";
import { Hero } from "@/components/home/hero";
import { ExploreSection } from "@/components/home/explore-section";
import { DnaScroll } from "@/components/home/dna-scroll";
import { FacilitiesSection } from "@/components/home/facilities-section";
import { Testimonials } from "@/components/home/testimonials";
import { ContactFooter } from "@/components/home/contact-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <ExploreSection />
      <DnaScroll />
      <FacilitiesSection />
      <Testimonials />
      <ContactFooter />
    </main>
  );
}
