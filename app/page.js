import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProcessSection from "@/components/home/ProcessSection";
import TradeDesk from "@/components/home/TradeDesk";
import InquiryCTA from "@/components/home/InquiryCTA";
import InsightsPreview from "@/components/home/InsightsPreview";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ServicesPreview />
      <ProcessSection />
      <TradeDesk />
      <InquiryCTA />
      <InsightsPreview />
      <section id="about" className="bg-[#f4f3ef] pb-24 lg:pb-32">
        <div className="container-site border-t border-black/10 pt-10">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-start">
            <p className="text-sm font-bold text-[#98783f]">درباره راه تجارت</p>
            <div>
              <h2 className="font-display max-w-3xl text-balance text-3xl font-black leading-[1.35] sm:text-5xl">ما واسطه‌ی ساده‌ی خرید نیستیم؛ مسیر درست تجارت را پیدا می‌کنیم.</h2>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-[#686963]">با شناخت بازار اروپا، شبکه تأمین و تجربه‌ی فرآیندهای گمرکی، کنار کسب‌وکارهایی می‌ایستیم که می‌خواهند با اطمینان بیشتری خرید، واردات یا صادرات خود را انجام دهند.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
