import { ExternalLink } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/site/PageHeader";
import TradeKnowledgeBrowser from "@/components/trade/TradeKnowledgeBrowser";

const resources = [
  ["سامانه جامع تجارت", "درگاه خدمات و فرایندهای تجارت خارجی", "https://www.ntsw.ir"],
  ["سازمان توسعه تجارت ایران", "اطلاعات و خدمات توسعه تجارت خارجی", "https://www.tpo.ir"],
  ["بانک مرکزی جمهوری اسلامی ایران", "اطلاعات و مقررات پولی و ارزی", "https://www.cbi.ir"],
  ["اتاق ایران", "مرجع اطلاعات و خدمات اتاق بازرگانی", "https://www.iccima.ir"],
  ["گمرک جمهوری اسلامی ایران", "اطلاعات امور گمرکی و تجارت خارجی", "https://www.irica.ir"],
];

export default function TradeKnowledgePage() {
  return (
    <main>
      <Header />
      <PageHeader eyebrow="دانش تجارت" title="دانش تجارت، برای تصمیم بهتر." description="مطالب کاربردی درباره واردات، صادرات، گمرک، HS Code، تأمین و حمل‌ونقل؛ همراه با دسترسی سریع به منابع رسمی." />
      <TradeKnowledgeBrowser />
      <section className="bg-[#e4e2da] py-20 lg:py-28">
        <div className="container-site">
          <div className="mb-12 max-w-2xl"><p className="mb-5 inline-flex w-fit items-center" style={{ backgroundColor: "#e7dcc4", border: "1px solid rgba(152,120,63,0.25)", borderRadius: "8px", color: "#6f5428", padding: "4px 12px", fontSize: "16px", fontWeight: 800, lineHeight: "24px" }}>منابع رسمی</p><h2 className="font-display text-3xl font-black sm:text-5xl">چند مرجع کاربردی، در یک نقطه.</h2></div>
          <div className="grid border-t border-black/10 md:grid-cols-2 lg:grid-cols-3">{resources.map(([title, text, href]) => <a key={title} href={href} target="_blank" rel="noreferrer" className="group border-b border-black/10 p-7 transition hover:bg-black/[0.03] lg:p-9"><div className="flex items-start justify-between gap-5"><div><h3 className="text-base font-black">{title}</h3><p className="mt-3 text-xs leading-6 text-[#686963]">{text}</p></div><ExternalLink size={16} className="shrink-0 text-[#98783f] transition group-hover:-translate-x-1" /></div></a>)}</div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
