import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/site/PageHeader";
import ContactForm from "@/components/forms/ContactForm";

const channels = [[Phone, "تلفن", "تماس مستقیم"], [Mail, "ایمیل", "ارسال درخواست"], [MessageCircle, "واتساپ", "گفت‌وگوی سریع"], [Send, "روبیکا", "پیام آنلاین"]];

export default function ContactPage() {
  return (
    <main>
      <Header />
      <PageHeader eyebrow="تماس با ما" title="برای شروع یک گفت‌وگوی تجاری، با ما در تماس باشید." description="برای درخواست تأمین، مشاوره، اعتبارسنجی تأمین‌کننده یا پرسش درباره خدمات، پیام خود را ارسال کنید." />
      <section className="bg-[#f3f2ed] py-20 lg:py-28"><div className="container-site"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-sm font-bold text-[#98783f]">راه‌های ارتباطی</p><div className="mt-7 grid gap-3">{channels.map(([Icon, title, text]) => <div key={title} className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/40 p-5"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171816] text-white"><Icon size={16} /></span><div><p className="text-sm font-bold">{title}</p><p className="mt-1 text-xs text-[#686963]">{text}</p></div></div>)}<div className="mt-3 flex items-start gap-4 rounded-2xl border border-black/10 bg-white/40 p-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#171816] text-white"><MapPin size={16} /></span><div><p className="text-sm font-bold">آدرس شرکت</p><p className="mt-1 text-xs leading-6 text-[#686963]">تهران، ایران</p></div></div></div></div><div className="rounded-[28px] bg-[#e4e2da] p-7 sm:p-10"><ContactForm /></div></div></div></section>
      <Footer />
    </main>
  );
}
