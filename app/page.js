import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProcessSection from "@/components/home/ProcessSection";
import InquiryCTA from "@/components/home/InquiryCTA";
import InsightsPreview from "@/components/home/InsightsPreview";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ServicesPreview />
      <ProcessSection />
      <InquiryCTA />
      <InsightsPreview />
      <section id="about" className="bg-[#f4f3ef] pb-24 lg:pb-32">
        <div className="container-site border-t border-black/10 pt-10 text-sm text-black/45">
          درباره ما — شبکه‌ای برای ساختن مسیرهای مطمئن‌تر در تجارت بین‌الملل.
        </div>
      </section>
      <Footer />
    </main>
  );
}
