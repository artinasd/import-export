import { ArrowUpLeft } from "lucide-react";

const articles = [
  ["تجارت بین‌الملل", "چطور یک تأمین‌کننده معتبر اروپایی پیدا کنیم؟", "راهنمای کوتاه برای ارزیابی اولیه تأمین‌کننده و شروع مذاکره."],
  ["گمرک", "قبل از واردات ماشین‌آلات چه چیزهایی را بدانیم؟", "نگاهی کاربردی به اسناد، تعرفه و مراحلی که بهتر است از ابتدا بدانید."],
  ["بازار اروپا", "منبع‌یابی؛ فراتر از یک جستجوی ساده", "چرا شناخت بازار و شبکه محلی، نتیجه تأمین را تغییر می‌دهد."],
];

export default function InsightsPreview() {
  return (
    <section id="insights" className="bg-[#f4f3ef] py-24 lg:py-32">
      <div className="container-site">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-sm font-bold text-[#9b7a43]">دانش تجارت</p>
            <h2 className="font-display text-3xl font-black sm:text-5xl">چیزهایی که ارزش دانستن دارند.</h2>
          </div>
          <a href="#" className="hidden items-center gap-2 text-sm font-bold sm:flex">همه مطالب <ArrowUpLeft size={15} /></a>
        </div>

        <div className="grid border-t border-black/10 md:grid-cols-3">
          {articles.map(([category, title, text], index) => (
            <article key={title} className={`group py-8 md:px-7 md:py-10 ${index < 2 ? "md:border-l md:border-black/10" : ""}`}>
              <div className="flex items-center justify-between text-xs text-black/40">
                <span>{category}</span>
                <span>۰{index + ۱}</span>
              </div>
              <h3 className="mt-14 text-xl font-black leading-8 transition group-hover:text-[#9b7a43]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#686963]">{text}</p>
              <div className="mt-8 flex items-center gap-2 text-xs font-bold">مطالعه مطلب <ArrowUpLeft size={14} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
