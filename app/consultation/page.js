"use client";

import { ArrowLeft, CalendarDays, MessageSquareText } from "lucide-react";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/site/PageHeader";

export default function ConsultationPage() {
  const [sent, setSent] = useState(false);
  return (
    <main>
      <Header />
      <PageHeader eyebrow="درخواست مشاوره" title="برای تصمیم تجاری بعدی، با یک گفت‌وگوی دقیق شروع کنید." description="درخواست مشاوره برای بررسی مسیر تأمین، خرید بین‌المللی، منبع‌یابی، امور گمرکی و انتخاب مسیر مناسب تجارت." />
      <section className="bg-[#f3f2ed] py-20 lg:py-28"><div className="container-site"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><div className="rounded-3xl border border-black/10 p-7"><CalendarDays size={20} /><h3 className="mt-6 font-black">جلسه هدفمند</h3><p className="mt-3 text-sm leading-7 text-[#686963]">موضوع و نیاز شما پیش از گفت‌وگو مشخص می‌شود تا زمان جلسه کاربردی باشد.</p></div><div className="rounded-3xl border border-black/10 p-7"><MessageSquareText size={20} /><h3 className="mt-6 font-black">موضوعات قابل بررسی</h3><p className="mt-3 text-sm leading-7 text-[#686963]">تأمین، منبع‌یابی اروپا، واردات، صادرات، گمرک و مدیریت ریسک خرید.</p></div></div></div><form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="rounded-[28px] bg-[#e4e2da] p-7 sm:p-10">{sent ? <div className="flex min-h-[360px] flex-col items-center justify-center text-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#171816] text-[#c9a66b]">✓</span><h3 className="mt-7 text-2xl font-black">درخواست مشاوره آماده ثبت است.</h3><p className="mt-3 max-w-md text-sm leading-7 text-[#686963]">این نسخه نمایشی است؛ در نسخه نهایی، درخواست برای هماهنگی جلسه ثبت و پیگیری خواهد شد.</p></div> : <><h2 className="font-display text-3xl font-black">موضوع خود را با ما در میان بگذارید.</h2><div className="mt-8 grid gap-5 sm:grid-cols-2"><label><span className="mb-2 block text-xs font-bold">نام و نام خانوادگی</span><input required className="h-12 w-full rounded-xl border border-black/10 bg-white/60 px-4 text-sm outline-none focus:border-[#c9a66b]" /></label><label><span className="mb-2 block text-xs font-bold">شماره تماس</span><input required className="h-12 w-full rounded-xl border border-black/10 bg-white/60 px-4 text-sm outline-none focus:border-[#c9a66b]" /></label></div><label className="mt-5 block"><span className="mb-2 block text-xs font-bold">موضوع مشاوره</span><select className="h-12 w-full rounded-xl border border-black/10 bg-white/60 px-4 text-sm outline-none focus:border-[#c9a66b]"><option>تأمین و منبع‌یابی</option><option>واردات و گمرک</option><option>صادرات</option><option>اعتبارسنجی تأمین‌کننده</option><option>سایر</option></select></label><label className="mt-5 block"><span className="mb-2 block text-xs font-bold">شرح نیاز</span><textarea rows="6" className="w-full resize-none rounded-xl border border-black/10 bg-white/60 p-4 text-sm outline-none focus:border-[#c9a66b]" /></label><button type="submit" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#171816] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#98783f]">ارسال درخواست<ArrowLeft size={15} /></button></>}</form></div></div></section>
      <Footer />
    </main>
  );
}
