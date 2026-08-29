"use client";

import { ArrowLeft, Upload } from "lucide-react";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/site/PageHeader";

export default function SupplierVerificationRequestPage() {
  const [sent, setSent] = useState(false);
  return (
    <main>
      <Header />
      <PageHeader eyebrow="درخواست اعتبارسنجی" title="اطلاعات تأمین‌کننده را برای بررسی اولیه ارسال کنید." description="این فرم، نسخه نمایشی جریان درخواست اعتبارسنجی است. در نسخه نهایی مدارک به‌صورت امن دریافت و برای تیم بررسی ثبت می‌شوند." />
      <section className="bg-[#f3f2ed] py-20 lg:py-28"><div className="container-site"><form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="mx-auto max-w-4xl rounded-[28px] border border-black/10 bg-white/50 p-7 sm:p-10 lg:p-12">{sent ? <div className="flex min-h-[420px] flex-col items-center justify-center text-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#171816] text-[#c9a66b]">✓</span><h2 className="mt-7 text-2xl font-black">درخواست اعتبارسنجی آماده ثبت است.</h2><p className="mt-3 max-w-md text-sm leading-7 text-[#686963]">در نسخه نهایی، اطلاعات برای بررسی اولیه ثبت می‌شود و مراحل بعدی دریافت مدارک و تحلیل ریسک آغاز خواهد شد.</p></div> : <><div className="grid gap-5 sm:grid-cols-2"><label><span className="mb-2 block text-xs font-bold">نام شرکت تأمین‌کننده</span><input required className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f3] px-4 text-sm outline-none focus:border-[#c9a66b]" /></label><label><span className="mb-2 block text-xs font-bold">کشور</span><input required className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f3] px-4 text-sm outline-none focus:border-[#c9a66b]" /></label><label><span className="mb-2 block text-xs font-bold">وب‌سایت / اطلاعات تماس</span><input className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f3] px-4 text-sm outline-none focus:border-[#c9a66b]" /></label><label><span className="mb-2 block text-xs font-bold">نام درخواست‌دهنده</span><input required className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f3] px-4 text-sm outline-none focus:border-[#c9a66b]" /></label></div><label className="mt-5 block"><span className="mb-2 block text-xs font-bold">هدف همکاری / نوع معامله</span><textarea rows="5" placeholder="چه کالا یا همکاری‌ای در حال بررسی است؟" className="w-full resize-none rounded-xl border border-black/10 bg-[#f8f7f3] p-4 text-sm outline-none focus:border-[#c9a66b]" /></label><label className="mt-5 flex min-h-24 cursor-pointer items-center justify-center gap-3 rounded-2xl border border-dashed border-black/15 bg-[#f8f7f3] text-sm font-bold text-black/55"><Upload size={18} />افزودن مدارک و مستندات<input type="file" multiple className="hidden" /></label><button type="submit" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#171816] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#98783f]">ارسال برای بررسی اولیه<ArrowLeft size={15} /></button></>}</form></div></section>
      <Footer />
    </main>
  );
}
