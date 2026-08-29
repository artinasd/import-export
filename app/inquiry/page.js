"use client";

import { ArrowLeft, Upload } from "lucide-react";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/site/PageHeader";

const fields = [["company", "نام شرکت", "نام شرکت شما"], ["name", "نام و نام خانوادگی", "نام مسئول درخواست"], ["phone", "شماره تماس", "شماره تماس"], ["email", "ایمیل", "ایمیل کاری"], ["product", "نام کالا / ماشین‌آلات", "مثلاً خط تولید، مواد اولیه یا قطعه"], ["quantity", "مقدار مورد نیاز", "مقدار و واحد"], ["origin", "مبدأ یا بازار مورد نظر", "مثلاً اروپا"], ["delivery", "مقصد / محل تحویل", "شهر یا کشور"]];

export default function InquiryPage() {
  const [sent, setSent] = useState(false);
  return (
    <main>
      <Header />
      <PageHeader eyebrow="فرم RQF" title="نیاز خود را ارسال کنید؛ مسیر تأمین را ما بررسی می‌کنیم." description="این نسخه نمایشی، تجربه فرم آنلاین استعلام از تأمین‌کنندگان را نشان می‌دهد. اطلاعات واردشده در این مرحله به سرور ارسال نمی‌شود." />
      <section className="bg-[#f3f2ed] py-20 lg:py-28"><div className="container-site"><div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:items-start"><div><p className="text-sm font-bold text-[#98783f]">درخواست تأمین کالا</p><h2 className="mt-4 font-display text-3xl font-black sm:text-5xl">جزئیات نیاز شما.</h2><p className="mt-5 max-w-sm text-sm leading-8 text-[#686963]">هرچه مشخصات دقیق‌تر باشد، بررسی بازار و انتخاب تأمین‌کننده هدفمندتر خواهد بود.</p><div className="mt-10 space-y-4 text-sm"><div className="border-t border-black/10 pt-4">منبع‌یابی و مقایسه پیشنهادها</div><div className="border-t border-black/10 pt-4">بررسی تأمین‌کننده در صورت نیاز</div><div className="border-t border-black/10 pt-4">هماهنگی خرید، حمل و ترخیص</div></div></div><form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="rounded-[28px] border border-black/10 bg-white/50 p-6 sm:p-9 lg:p-11">{sent ? <div className="flex min-h-[420px] flex-col items-center justify-center text-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#171816] text-[#c9a66b]">✓</span><h3 className="mt-7 text-2xl font-black">درخواست شما آماده ثبت است.</h3><p className="mt-3 max-w-md text-sm leading-7 text-[#686963]">این یک نسخه نمایشی است. در نسخه نهایی، درخواست پس از اعتبارسنجی در سیستم ثبت و برای تیم تأمین ارسال خواهد شد.</p><button type="button" onClick={() => setSent(false)} className="mt-7 rounded-full border border-black/10 px-5 py-3 text-sm font-bold">ثبت درخواست دیگر</button></div> : <><div className="grid gap-5 sm:grid-cols-2">{fields.map(([id, label, placeholder]) => <label key={id} className="block"><span className="mb-2 block text-xs font-bold">{label}</span><input id={id} name={id} placeholder={placeholder} required className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f3] px-4 text-sm outline-none transition focus:border-[#c9a66b]" /></label>)}</div><label className="mt-5 block"><span className="mb-2 block text-xs font-bold">توضیحات و مشخصات فنی</span><textarea rows="6" placeholder="مشخصات، استانداردها، برند مورد نظر یا هر نکته‌ای که برای تأمین مهم است" className="w-full resize-none rounded-xl border border-black/10 bg-[#f8f7f3] p-4 text-sm outline-none transition focus:border-[#c9a66b]" /></label><label className="mt-5 flex min-h-24 cursor-pointer items-center justify-center gap-3 rounded-2xl border border-dashed border-black/15 bg-[#f8f7f3] text-sm font-bold text-black/55"><Upload size={18} /><span>افزودن کاتالوگ یا فایل مشخصات</span><input type="file" className="hidden" /></label><button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#171816] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#98783f]">ارسال درخواست<ArrowLeft size={15} /></button></>}</form></div></div></section>
      <Footer />
    </main>
  );
}
