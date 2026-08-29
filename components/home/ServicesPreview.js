import { ArrowUpLeft, Boxes, Factory, Landmark, Search } from "lucide-react";

const services = [
  { number: "۰۱", icon: Search, title: "منبع‌یابی و تأمین", text: "پیدا کردن تأمین‌کننده معتبر و محصول مناسب از شبکه‌ای از بازارهای اروپایی." },
  { number: "۰۲", icon: Factory, title: "ماشین‌آلات و مواد اولیه", text: "تأمین نیازهای تخصصی خطوط تولید و کارخانه‌ها، از استعلام تا تحویل." },
  { number: "۰۳", icon: Landmark, title: "واردات و امور گمرکی", text: "هماهنگی فرآیند واردات و عبور از پیچیدگی‌های اسناد و تشریفات گمرکی." },
  { number: "۰۴", icon: Boxes, title: "صادرات مواد معدنی", text: "اتصال محصولات ایرانی به بازارهای مناسب و مدیریت مسیر صادرات." },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="bg-[#f4f3ef] py-24 lg:py-36">
      <div className="container-site">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 text-sm font-bold text-[#9b7a43]">آنچه انجام می‌دهیم</p>
            <h2 className="font-display max-w-2xl text-balance text-4xl font-black leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl">
              کمتر حرف می‌زنیم؛<br />بیشتر <span className="text-[#9b7a43]">مسیر می‌سازیم.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-8 text-[#686963]">
            خدمات ما برای یک هدف طراحی شده‌اند: رساندن شما از یک نیاز تجاری، به یک نتیجه قابل اتکا.
          </p>
        </div>

        <div className="grid border-t border-black/10 md:grid-cols-2">
          {services.map(({ number, icon: Icon, title, text }) => (
            <article key={number} className="group border-b border-black/10 p-7 first:md:border-l md:p-10 lg:p-12">
              <div className="mb-16 flex items-start justify-between">
                <span className="text-xs text-black/35">{number}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition duration-500 group-hover:-translate-x-1 group-hover:bg-black group-hover:text-white">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-black">{title}</h3>
              <p className="max-w-md text-sm leading-8 text-[#686963]">{text}</p>
              <div className="mt-9 flex items-center gap-2 text-xs font-bold opacity-50 transition group-hover:opacity-100">
                بیشتر بدانید <ArrowUpLeft size={14} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
