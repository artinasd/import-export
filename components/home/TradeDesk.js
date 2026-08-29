import { ArrowLeft, FileSearch, Globe2, Scale } from "lucide-react";

const tools = [
  { icon: FileSearch, title: "استعلام تأمین‌کننده", text: "نیاز خریدتان را ثبت کنید تا مسیر منبع‌یابی آغاز شود." },
  { icon: Scale, title: "کد تعرفه گمرکی", text: "برای بررسی اولیه کالا و طبقه‌بندی آن، اطلاعات لازم را دریافت کنید." },
  { icon: Globe2, title: "مقررات و منابع رسمی", text: "دسترسی سریع به منابع و لینک‌های معتبر تجارت و گمرک." },
];

export default function TradeDesk() {
  return (
    <section className="bg-[#f3f2ed] py-24 lg:py-32">
      <div className="container-site">
        <div className="rounded-[32px] bg-[#e4e2da] p-7 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-bold text-[#98783f]">Trade Desk</p>
              <h2 className="font-display text-3xl font-black leading-[1.3] sm:text-5xl">چند ابزار ساده،<br />برای تصمیم‌های بهتر.</h2>
              <p className="mt-6 max-w-sm text-sm leading-8 text-[#686963]">چیزهایی که معمولاً باید در چند سایت جستجو کنید، اینجا در یک نقطه جمع می‌شوند.</p>
            </div>
            <div className="grid border-t border-black/10 sm:grid-cols-3 sm:border-t-0">
              {tools.map(({ icon: Icon, title, text }, index) => (
                <a href="#inquiry" key={title} className={`group border-black/10 py-7 sm:p-6 ${index !== 0 ? "sm:border-r" : ""}`}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171816] text-white"><Icon size={17} /></span>
                  <h3 className="mt-7 text-base font-black leading-7">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-[#686963]">{text}</p>
                  <span className="mt-6 flex items-center gap-2 text-xs font-bold">ورود <ArrowLeft size={13} className="transition group-hover:-translate-x-1" /></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
