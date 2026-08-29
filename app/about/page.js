import { ArrowLeft, Check } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/site/PageHeader";

const principles = ["شناخت بازارهای بین‌المللی", "انتخاب و بررسی تأمین‌کننده", "مدیریت یکپارچه مسیر خرید", "شفافیت در تصمیم و فرایند"];

export default function AboutPage() {
  return (
    <main>
      <Header />
      <PageHeader eyebrow="درباره ما" title="تجارت بین‌المللی، با نگاه دقیق‌تر به مسیر تأمین." description="راه تجارت با تمرکز بر تأمین کالا، منبع‌یابی، واردات، صادرات و مدیریت فرایندهای مرتبط با تجارت بین‌المللی فعالیت می‌کند." actionHref="/contact" actionLabel="تماس با ما" />
      <section className="bg-[#f3f2ed] py-20 lg:py-28"><div className="container-site"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-sm font-bold text-[#98783f]">نگاه ما</p><h2 className="mt-4 font-display text-3xl font-black leading-[1.3] sm:text-5xl">خرید فقط شروع کار است.</h2></div><div><p className="max-w-3xl text-sm leading-8 text-[#686963]">در تجارت بین‌المللی، یک خرید موفق فقط به پیدا کردن قیمت مناسب محدود نمی‌شود. شناخت تأمین‌کننده، کنترل کیفیت، اسناد، حمل، ثبت سفارش و ترخیص همگی روی نتیجه اثر می‌گذارند. ما تلاش می‌کنیم این مسیر برای مشتری قابل فهم، قابل کنترل و کم‌ریسک‌تر باشد.</p><div className="mt-10 grid gap-4 sm:grid-cols-2">{principles.map((item) => <div key={item} className="border-t border-black/10 pt-4 text-sm font-bold"><Check size={15} className="mb-3 text-[#98783f]" />{item}</div>)}</div></div></div></div></section>
      <section className="bg-[#171816] py-20 text-white lg:py-28"><div className="container-site"><div className="grid gap-12 lg:grid-cols-3"><div className="lg:col-span-2"><p className="text-sm font-bold text-[#c9a66b]">چشم‌انداز همکاری</p><h2 className="mt-4 font-display text-3xl font-black leading-[1.3] sm:text-5xl">یک شریک اجرایی برای مسیر تجارت، نه فقط یک واسطه خرید.</h2></div><p className="text-sm leading-8 text-white/45">از نخستین بررسی تا تحویل نهایی، هدف ما این است که تصمیم‌های مهم تجارت با اطلاعات بهتر و ارتباط شفاف‌تر گرفته شوند.</p></div></div></section>
      <section className="bg-[#e4e2da] py-20 lg:py-24"><div className="container-site"><div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-bold text-[#98783f]">شروع همکاری</p><h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">نیاز تأمین خود را با ما مطرح کنید.</h2></div><a href="/inquiry" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#171816] px-6 py-4 text-sm font-bold text-white">درخواست تأمین کالا<ArrowLeft size={15} /></a></div></div></section>
      <Footer />
    </main>
  );
}
