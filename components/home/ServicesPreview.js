import { ArrowUpLeft, Boxes, ClipboardCheck, Factory, Truck } from "lucide-react";

const services = [
  ["۰۱", Boxes, "تأمین کالا", "یافتن و تأمین کالا از بازارهای اروپا مطابق نیاز صنایع شما"],
  ["۰۲", ClipboardCheck, "اعتبارسنجی تأمین‌کننده", "بررسی تأمین‌کنندگان قبل از معامله برای کاهش ریسک"],
  ["۰۳", Factory, "بازرسی کالا", "کنترل کیفیت، تعداد و مشخصات کالا در مبدأ و ارائه گزارش رسمی"],
  ["۰۴", Truck, "لجستیک و ترخیص", "مدیریت حمل، واردات و ترخیص تا تحویل نهایی"],
];

export default function ServicesPreview() {
  return (
    <section id="services" className="bg-[#f3f2ed] py-24 lg:py-32">
      <div className="container-site">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div><p className="mb-4 text-sm font-bold text-[#98783f]">خدمات کلیدی</p><h2 className="font-display max-w-3xl text-balance text-4xl font-black leading-[1.25] sm:text-5xl lg:text-6xl">تأمین کالا، <span className="text-[#98783f]">فراتر از خرید.</span></h2></div>
          <p className="max-w-md text-sm leading-8 text-[#686963]">از یافتن تأمین‌کننده تا کنترل کالا، حمل و ترخیص؛ کل مسیر تأمین را یکپارچه مدیریت می‌کنیم.</p>
        </div>
        <div className="grid border-t border-black/10 md:grid-cols-2">
          {services.map(([number, Icon, title, text], index) => (
            <article key={number} className={`group border-b border-black/10 p-7 transition-colors hover:bg-[#ebeae4] sm:p-9 lg:p-11 ${index % 2 === 0 ? "md:border-l" : ""}`}>
              <div className="mb-14 flex items-start justify-between"><span className="text-xs text-black/35">{number}</span><span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition duration-500 group-hover:-translate-x-1 group-hover:bg-[#171816] group-hover:text-white"><Icon size={18} strokeWidth={1.5} /></span></div>
              <h3 className="mb-4 text-2xl font-black">{title}</h3><p className="max-w-md text-sm leading-8 text-[#686963]">{text}</p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-xs font-bold opacity-60 transition group-hover:opacity-100">مشاهده خدمات<ArrowUpLeft size={14} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
