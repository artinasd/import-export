import { ArrowUpLeft, BookOpen } from "lucide-react";

const articles = [
  ["تجارت بین‌الملل", "چطور یک تأمین‌کننده معتبر اروپایی پیدا کنیم؟", "راهنمای کوتاه برای ارزیابی اولیه تأمین‌کننده و شروع مذاکره."],
  ["گمرک", "قبل از واردات ماشین‌آلات چه چیزهایی را بدانیم؟", "نگاهی کاربردی به اسناد، تعرفه و مراحلی که بهتر است از ابتدا بدانید."],
  ["بازار اروپا", "منبع‌یابی؛ فراتر از یک جستجوی ساده", "چرا شناخت بازار و شبکه محلی، نتیجه تأمین را تغییر می‌دهد."],
];

export default function InsightsPreview() {
  return (
    <section id="insights" className="bg-[#f4f3ef] py-24 lg:py-32">
      <div className="container-site">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-bold text-[#98783f]"><BookOpen size={15} /> دانش تجارت</p>
            <h2 className="font-display max-w-2xl text-balance text-3xl font-black leading-[1.35] sm:text-5xl">چیزهایی که ارزش دانستن دارند.</h2>
          </div>
          <a href="#" className="flex w-fit items-center gap-2 text-sm font-bold transition hover:text-[#98783f]">همه مطالب <ArrowUpLeft size={15} /></a>
        </div>

        <div className="grid border-t border-black/10 md:grid-cols-3">
          {articles.map(([category, title, text], index) => (
            <article key={title} className={`group flex min-h-[330px] flex-col border-b border-black/10 py-8 md:border-b-0 md:px-7 md:py-10 ${index < 2 ? "md:border-l md:border-black/10" : ""}`}>
              <div className="flex items-center justify-between text-xs text-black/40"><span>{category}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="mt-auto">
                <h3 className="text-xl font-black leading-8 transition duration-300 group-hover:text-[#98783f]">{title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-[#686963]">{text}</p>
                <div className="mt-7 flex items-center gap-2 text-xs font-bold">مطالعه مطلب <ArrowUpLeft size={14} className="transition group-hover:-translate-x-1" /></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
