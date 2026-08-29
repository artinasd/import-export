import { CalendarDays, MessageSquareText } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/site/PageHeader";
import ConsultationForm from "@/components/forms/ConsultationForm";

export default function ConsultationPage() {
  return (
    <main>
      <Header />
      <PageHeader eyebrow="درخواست مشاوره" title="برای تصمیم تجاری بعدی، با یک گفت‌وگوی دقیق شروع کنید." description="درخواست مشاوره برای بررسی مسیر تأمین، خرید بین‌المللی، منبع‌یابی، امور گمرکی و انتخاب مسیر مناسب تجارت." />
      <section className="bg-[#f3f2ed] py-20 lg:py-28"><div className="container-site"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><div className="rounded-3xl border border-black/10 p-7"><CalendarDays size={20} /><h3 className="mt-6 font-black">جلسه هدفمند</h3><p className="mt-3 text-sm leading-7 text-[#686963]">موضوع و نیاز شما پیش از گفت‌وگو مشخص می‌شود تا زمان جلسه کاربردی باشد.</p></div><div className="rounded-3xl border border-black/10 p-7"><MessageSquareText size={20} /><h3 className="mt-6 font-black">موضوعات قابل بررسی</h3><p className="mt-3 text-sm leading-7 text-[#686963]">تأمین، منبع‌یابی اروپا، واردات، صادرات، گمرک و مدیریت ریسک خرید.</p></div></div></div><div className="rounded-[28px] bg-[#e4e2da] p-7 sm:p-10"><ConsultationForm /></div></div></div></section>
      <Footer />
    </main>
  );
}
