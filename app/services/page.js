import { ArrowLeft, Boxes, ClipboardCheck, Factory, Truck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/site/PageHeader";

const services = [
  { icon: Boxes, title: "تأمین کالا", text: "یافتن و تأمین مواد اولیه، ماشین‌آلات و کالاهای مورد نیاز صنایع از بازارهای معتبر اروپا و سایر بازارهای بین‌المللی.", points: ["منبع‌یابی و مقایسه تأمین‌کنندگان", "مذاکره و دریافت پیشنهاد", "مدیریت خرید تا تحویل"] },
  { icon: ClipboardCheck, title: "اعتبارسنجی تأمین‌کننده", text: "بررسی ساختاریافته تأمین‌کننده پیش از معامله برای شناخت بهتر طرف تجاری و کاهش ریسک خرید.", points: ["بررسی هویت و سابقه", "کنترل اطلاعات و اسناد", "تحلیل ریسک و گزارش نهایی"] },
  { icon: Factory, title: "بازرسی کالا", text: "کنترل کیفیت، تعداد، مشخصات و وضعیت کالا در مبدأ و ارائه گزارش قابل استناد پیش از ارسال.", points: ["کنترل مشخصات و تعداد", "بازرسی پیش از حمل", "گزارش تصویری و رسمی"] },
  { icon: Truck, title: "لجستیک و ترخیص", text: "مدیریت مسیر حمل، امور واردات و ترخیص برای رساندن کالا از مبدأ تا تحویل نهایی.", points: ["هماهنگی حمل بین‌المللی", "مدیریت اسناد و ثبت سفارش", "هماهنگی امور گمرکی و تحویل"] },
];

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <PageHeader eyebrow="خدمات ما" title="تأمین، کنترل و تحویل؛ یک مسیر یکپارچه." description="خدمات شرکت برای کسب‌وکارهایی طراحی شده است که می‌خواهند خرید و تجارت بین‌المللی را با دید بیشتر و ریسک کمتر مدیریت کنند." actionHref="/inquiry" actionLabel="درخواست تأمین کالا" />
      <section className="bg-[#f3f2ed] py-20 lg:py-28">
        <div className="container-site">
          <div className="mb-14 max-w-2xl"><p className="mb-5 inline-flex w-fit items-center" style={{ backgroundColor: "#e7dcc4", border: "1px solid rgba(152,120,63,0.25)", borderRadius: "8px", color: "#6f5428", padding: "4px 12px", fontSize: "16px", fontWeight: 800, lineHeight: "24px" }}>خدمات کلیدی</p><h2 className="font-display text-3xl font-black leading-[1.25] sm:text-5xl">آنچه در مسیر تأمین کنار شماست.</h2></div>
          <div className="grid border-t border-black/10 md:grid-cols-2">
            {services.map(({ icon: Icon, title, text, points }, index) => <article key={title} className={`border-b border-black/10 p-7 sm:p-10 lg:p-12 ${index % 2 === 0 ? "md:border-l" : ""}`}><div className="flex items-start justify-between"><span className="text-xs text-black/35">۰{index + 1}</span><span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10"><Icon size={18} strokeWidth={1.5} /></span></div><h3 className="mt-14 text-2xl font-black">{title}</h3><p className="mt-4 max-w-lg text-sm leading-8 text-[#686963]">{text}</p><ul className="mt-7 space-y-3 text-sm font-medium">{points.map((point) => <li key={point} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#c9a66b]" />{point}</li>)}</ul><a href="/inquiry" className="mt-8 inline-flex items-center gap-2 text-sm font-bold transition hover:text-[#98783f]">شروع درخواست<ArrowLeft size={14} /></a></article>)}
          </div>
        </div>
      </section>
      <section className="bg-[#e4e2da] py-20 lg:py-24"><div className="container-site"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-bold text-[#98783f]">مسیر همکاری</p><h2 className="mt-4 font-display text-3xl font-black sm:text-5xl">از نیاز شما تا تحویل کالا.</h2></div><p className="max-w-2xl text-sm leading-8 text-[#686963]">هر پروژه با شناخت نیاز آغاز می‌شود و با انتخاب مسیر مناسب تأمین، کنترل نقاط حساس و هماهنگی حمل و ترخیص ادامه پیدا می‌کند.</p></div></div></section>
      <Footer />
    </main>
  );
}
