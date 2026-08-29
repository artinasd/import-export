import { BadgeCheck, Box, ClipboardList, SearchCheck, Truck } from "lucide-react";

const steps = [
  ["۰۱", "نیاز شما", "دریافت مشخصات کالا، حجم، مقصد و نیازهای اصلی شما.", ClipboardList],
  ["۰۲", "بررسی", "تحلیل نیاز و شرایط تأمین و طراحی مسیر مناسب خرید.", SearchCheck],
  ["۰۳", "تأمین", "یافتن و بررسی تأمین‌کنندگان متناسب با نیاز شما.", Box],
  ["۰۴", "کنترل", "اعتبارسنجی و بازرسی کالا در صورت نیاز، پیش از ارسال.", BadgeCheck],
  ["۰۵", "تحویل", "حمل، ترخیص و تحویل نهایی کالا تا مقصد.", Truck],
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[#ebeae4] py-24 lg:py-36">
      <div className="container-site">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div><p className="mb-6 inline-flex rounded-xl border border-[#98783f]/20 bg-[#98783f]/[0.10] px-5 py-2.5 text-lg font-extrabold leading-none text-[#98783f]">فرایند همکاری</p><h2 className="font-display text-balance text-4xl font-black leading-[1.2] sm:text-5xl lg:text-6xl">از نیاز شما<br />تا <span className="text-[#98783f]">تحویل کالا.</span></h2></div>
          <p className="max-w-lg text-sm leading-8 text-[#686963]">در هر مرحله می‌دانید چه اتفاقی در حال انجام است؛ یک مسیر شفاف از تعریف نیاز تا رسیدن کالا به مقصد.</p>
        </div>
        <div className="grid border-y border-black/10 md:grid-cols-5">
          {steps.map(([number, title, text, Icon], index) => (
            <article key={number} className={`group min-h-[250px] border-b border-black/10 p-6 sm:p-7 md:border-b-0 ${index !== 4 ? "md:border-l" : ""}`}>
              <div className="flex items-center justify-between"><span className="text-xs text-black/35">{number}</span><Icon size={18} strokeWidth={1.5} className="text-[#98783f] transition duration-300 group-hover:scale-110" /></div>
              <div className="mt-16"><h3 className="text-lg font-black">{title}</h3><p className="mt-3 text-xs leading-7 text-[#686963]">{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
