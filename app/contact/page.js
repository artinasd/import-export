"use client";

import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/site/PageHeader";

const channels = [[Phone, "تلفن", "تماس مستقیم"], [Mail, "ایمیل", "ارسال درخواست"], [MessageCircle, "واتساپ", "گفت‌وگوی سریع"], [Send, "روبیکا", "پیام آنلاین"]];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <main>
      <Header />
      <PageHeader eyebrow="تماس با ما" title="برای شروع یک گفت‌وگوی تجاری، با ما در تماس باشید." description="برای درخواست تأمین، مشاوره، اعتبارسنجی تأمین‌کننده یا پرسش درباره خدمات، پیام خود را ارسال کنید." />
      <section className="bg-[#f3f2ed] py-20 lg:py-28"><div className="container-site"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-sm font-bold text-[#98783f]">راه‌های ارتباطی</p><div className="mt-7 grid gap-3">{channels.map(([Icon, title, text]) => <div key={title} className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/40 p-5"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171816] text-white"><Icon size={16} /></span><div><p className="text-sm font-bold">{title}</p><p className="mt-1 text-xs text-[#686963]">{text}</p></div></div>)}<div className="mt-3 flex items-start gap-4 rounded-2xl border border-black/10 bg-white/40 p-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#171816] text-white"><MapPin size={16} /></span><div><p className="text-sm font-bold">آدرس شرکت</p><p className="mt-1 text-xs leading-6 text-[#686963]">تهران، ایران</p></div></div></div></div><form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="rounded-[28px] bg-[#e4e2da] p-7 sm:p-10">{sent ? <div className="flex min-h-[360px] flex-col items-center justify-center text-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#171816] text-[#c9a66b]">✓</span><h3 className="mt-7 text-2xl font-black">پیام شما آماده ثبت است.</h3><p className="mt-3 max-w-md text-sm leading-7 text-[#686963]">این نسخه نمایشی است؛ در نسخه نهایی پیام در سیستم ثبت و برای تیم مربوطه ارسال خواهد شد.</p></div> : <><h2 className="font-display text-3xl font-black">پیام خود را ارسال کنید.</h2><div className="mt-8 grid gap-5 sm:grid-cols-2"><label><span className="mb-2 block text-xs font-bold">نام</span><input required className="h-12 w-full rounded-xl border border-black/10 bg-white/60 px-4 text-sm outline-none focus:border-[#c9a66b]" /></label><label><span className="mb-2 block text-xs font-bold">شماره تماس</span><input required className="h-12 w-full rounded-xl border border-black/10 bg-white/60 px-4 text-sm outline-none focus:border-[#c9a66b]" /></label></div><label className="mt-5 block"><span className="mb-2 block text-xs font-bold">موضوع</span><input className="h-12 w-full rounded-xl border border-black/10 bg-white/60 px-4 text-sm outline-none focus:border-[#c9a66b]" /></label><label className="mt-5 block"><span className="mb-2 block text-xs font-bold">پیام</span><textarea required rows="7" className="w-full resize-none rounded-xl border border-black/10 bg-white/60 p-4 text-sm outline-none focus:border-[#c9a66b]" /></label><button type="submit" className="mt-7 rounded-full bg-[#171816] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#98783f]">ارسال پیام</button></>}</form></div></div></section>
      <Footer />
    </main>
  );
}
