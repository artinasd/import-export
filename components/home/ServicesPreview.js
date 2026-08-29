import { ArrowUpLeft, Boxes, Factory, Landmark, Search } from "lucide-react";

const services = [
  { number: "۰۱", icon: Search, title: "منبع‌یابی و تأمین", text: "پیدا کردن تأمین‌کننده معتبر و محصول مناسب از شبکه‌ای از بازارهای اروپایی." },
  { number: "۰۲", icon: Factory, title: "ماشین‌آلات و مواد اولیه", text: "تأمین نیازهای تخصصی خطوط تولید و کارخانه‌ها، از استعلام تا تحویل." },
  { number: "۰۳", icon: Landmark, title: "واردات و امور گمرکی", text: "هماهنگی فرآیند واردات و عبور از پیچیدگی‌های اسناد و تشریفات گمرکی." },
  { number: "۰۴", icon: Boxes, title: "صادرات مواد معدنی", text: "اتصال محصولات ایرانی به بازارهای مناسب و مدیریت مسیر صادرات." },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="bg-[#f3f2ed] py-24 lg:py-36">
      <div className="container-site">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-bold text-[#98783f]">آنچه انجام می‌دهیم</p>
            <h2 className="font-display max-w-3xl text-balance text-4xl font-black leading-[1.25] tracking-tight sm:text-5xl lg:text-6xl">
              از پیدا کردن فرصت<br />تا <span className="text-[#98783f]">رسیدن به نتیجه.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-8 text-[#686963]">
            چهار نقطه اتصال برای اینکه خرید و تجارت بین‌الملل، به‌جای یک دردسر، تبدیل به یک مزیت برای کسب‌وکار شما شود.
          </p>
        </div>

        <div className="grid border-t border-black/10 md:grid-cols-2">
          {services.map(({ number, icon: Icon, title, text }, index) => (
            <article key={number} className={`group border-b border-black/10 p-7 transition-colors hover:bg-[#ebeae4] sm:p-9 lg:p-11 ${index % 2 === 0 ? "md:border-l" : ""}`}>
              <div className="mb-16 flex items-start justify-between">
                <span className="text-xs text-black/35">{number}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition duration-500 group-hover:-translate-x-1 group-hover:bg-black group-hover:text-white">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-black">{title}</h3>
              <p className="max-w-md text-sm leading-8 text-[#686963]">{text}</p>
              <div className="mt-9 flex items-center gap-2 text-xs font-bold opacity-50 transition group-hover:opacity-100">
                جزئیات خدمت <ArrowUpLeft size={14} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
