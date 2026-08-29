import { ArrowLeft, Check, Globe2, Search } from "lucide-react";

const benefits = ["منبع‌یابی در اروپا", "بررسی اولیه تأمین", "پاسخ تخصصی به درخواست"];

export default function InquiryCTA() {
  return (
    <section id="inquiry" className="relative overflow-hidden bg-[#171816] py-24 text-white lg:py-36">
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#c9a66b]/10" />
      <div className="container-site relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_.7fr] lg:items-center lg:gap-24">
          <div>
            <div className="mb-7 flex items-center gap-3 text-xs text-white/45"><Globe2 size={15} /> تأمین از بازارهای جهانی</div>
            <h2 className="font-display text-balance text-4xl font-black leading-[1.18] sm:text-5xl lg:text-7xl">کالای مورد نیازتان را<br /><span className="text-[#c9a66b]">پیدا نمی‌کنید؟</span></h2>
            <p className="mt-8 max-w-lg text-sm leading-8 text-white/50">مشخصات محصول را برای ما بفرستید. از پیدا کردن منبع تا بررسی امکان تأمین، اولین قدم را با شما برمی‌داریم.</p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">{benefits.map((item) => <span key={item} className="flex items-center gap-2 text-xs text-white/55"><Check size={14} className="text-[#c9a66b]" />{item}</span>)}</div>
          </div>
          <a href="#contact" className="group relative flex min-h-60 flex-col justify-between overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#c9a66b]/60 sm:p-9">
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#c9a66b]/10 blur-3xl transition duration-700 group-hover:bg-[#c9a66b]/20" />
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#c9a66b] text-[#171816]"><Search size={18} /></span>
            <span className="relative flex items-center justify-between gap-4 text-lg font-bold">ثبت استعلام تأمین<span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#171816] transition group-hover:-translate-x-1 group-hover:bg-[#c9a66b]"><ArrowLeft size={16} /></span></span>
          </a>
        </div>
      </div>
    </section>
  );
}
