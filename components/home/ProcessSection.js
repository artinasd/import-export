import { ArrowLeft, Check, MapPin, Ship, Sparkles } from "lucide-react";

const steps = [
  ["۰۱", "نیاز شما", "مشخصات کالا، حجم و مقصد را دریافت می‌کنیم.", Sparkles],
  ["۰۲", "منبع‌یابی", "بازار و تأمین‌کننده مناسب را در شبکه بین‌المللی بررسی می‌کنیم.", MapPin],
  ["۰۳", "تجارت و گمرک", "مذاکره، اسناد، حمل و فرآیندهای گمرکی مدیریت می‌شوند.", Ship],
  ["۰۴", "تحویل", "مسیر تا رسیدن کالا به مقصد با شما همراه می‌مانیم.", Check],
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#ebeae4] py-24 lg:py-36">
      <div className="absolute left-0 top-0 h-full w-px bg-black/5" aria-hidden="true" />
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-sm font-bold text-[#98783f]">مسیر همکاری</p>
            <h2 className="font-display text-balance text-4xl font-black leading-[1.2] sm:text-5xl">تجارت پیچیده،<br />با یک مسیر <span className="text-[#98783f]">ساده.</span></h2>
            <p className="mt-7 max-w-sm text-sm leading-8 text-[#686963]">شما مقصد را مشخص کنید؛ ما مسیر رسیدن را پیدا می‌کنیم. شفاف، مرحله‌به‌مرحله و بدون اضافه‌گویی.</p>
          </div>
          <div className="border-t border-black/10">
            {steps.map(([number, title, text, Icon], index) => (
              <div key={number} className="group grid grid-cols-[45px_1fr_auto] items-start gap-4 border-b border-black/10 py-8 sm:grid-cols-[65px_1fr_auto] sm:gap-7 sm:py-10">
                <span className="pt-1 text-xs text-black/35">{number}</span>
                <div><h3 className="flex items-center gap-3 text-xl font-black sm:text-2xl">{title}<Icon size={17} strokeWidth={1.5} className="text-[#98783f]" /></h3><p className="mt-3 max-w-lg text-sm leading-7 text-[#686963]">{text}</p></div>
                <ArrowLeft size={17} className="mt-2 opacity-20 transition duration-300 group-hover:-translate-x-1 group-hover:opacity-70" />
                {index < steps.length - 1 && <span className="absolute" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
