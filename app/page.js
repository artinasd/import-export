import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProcessSection from "@/components/home/ProcessSection";
import TradeDesk from "@/components/home/TradeDesk";
import InquiryCTA from "@/components/home/InquiryCTA";
import InsightsPreview from "@/components/home/InsightsPreview";
import WhyUs from "@/components/home/WhyUs";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <section id="about" className="bg-[#f4f3ef] py-24 lg:py-32">
        <div className="container-site"><div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><div><p className="text-sm font-bold text-[#98783f]">شرکت در یک نگاه</p></div><div><h2 className="font-display max-w-4xl text-balance text-4xl font-black leading-[1.25] sm:text-5xl lg:text-6xl">تأمین کالا، فراتر از خرید.</h2><p className="mt-7 max-w-3xl text-sm leading-8 text-[#686963]">در تجارت بین‌المللی، خرید فقط شروع کار است. ما کل مسیر تأمین را پوشش می‌دهیم: انتخاب تأمین‌کننده، مذاکره، خرید، کنترل کالا، حمل‌ونقل، اخذ ثبت سفارش و ترخیص.</p><div className="mt-10 grid gap-4 sm:grid-cols-3"><span className="border-t border-black/10 pt-4 text-xs font-bold">فرایند شفاف</span><span className="border-t border-black/10 pt-4 text-xs font-bold">قابل کنترل</span><span className="border-t border-black/10 pt-4 text-xs font-bold">کم‌ریسک‌تر</span></div></div></div></div>
      </section>
      <ServicesPreview />
      <WhyUs />
      <ProcessSection />
      <TradeDesk />
      <InsightsPreview />
      <InquiryCTA />
      <Footer />
    </main>
  );
}
