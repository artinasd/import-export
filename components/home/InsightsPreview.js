import { ArrowUpLeft, BookOpen } from "lucide-react";

const articles = [
  ["واردات", "قبل از خرید از یک تأمین‌کننده اروپایی چه بدانیم؟", "نکات کاربردی برای شناخت تأمین‌کننده، بررسی اسناد و شروع مذاکره."],
  ["گمرک", "HS Code چیست و چرا اهمیت دارد؟", "راهنمای ساده برای شناخت کد تعرفه و تأثیر آن بر فرایند واردات."],
  ["حمل‌ونقل", "مسیر تأمین را چطور کم‌ریسک‌تر کنیم؟", "از کنترل کالا تا حمل و ترخیص؛ نقاط مهمی که باید از ابتدا بدانید."],
];

export default function InsightsPreview() {
  return (
    <section id="insights" className="bg-[#f4f3ef] py-24 lg:py-32">
      <div className="container-site">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-5 inline-flex items-center gap-2 rounded-xl border border-[#98783f]/20 bg-[#98783f]/[0.07] px-3.5 py-2 text-base font-bold text-[#98783f]"><BookOpen size={17} /> دانش تجارت</p><h2 className="font-display max-w-2xl text-balance text-3xl font-black leading-[1.35] sm:text-5xl">دانش تجارت، برای تصمیم بهتر.</h2><p className="mt-5 max-w-xl text-sm leading-8 text-[#686963]">اطلاعات تخصصی درباره واردات، صادرات، گمرک، HS Code، تأمین و حمل‌ونقل.</p></div><a href="#" className="flex w-fit items-center gap-2 text-sm font-bold transition hover:text-[#98783f]">ورود به دانش تجارت <ArrowUpLeft size={15} /></a></div>
        <div className="grid border-t border-black/10 md:grid-cols-3">{articles.map(([category, title, text], index) => <article key={title} className={`group flex min-h-[300px] flex-col border-b border-black/10 py-8 md:border-b-0 md:px-7 md:py-10 ${index < 2 ? "md:border-l md:border-black/10" : ""}`}><div className="flex items-center justify-between text-xs text-black/40"><span>{category}</span><span>{String(index + 1).padStart(2, "0")}</span></div><div className="mt-auto"><h3 className="text-xl font-black leading-8 transition duration-300 group-hover:text-[#98783f]">{title}</h3><p className="mt-4 max-w-sm text-sm leading-7 text-[#686963]">{text}</p><div className="mt-7 flex items-center gap-2 text-xs font-bold">مطالعه مطلب <ArrowUpLeft size={14} className="transition group-hover:-translate-x-1" /></div></div></article>)}</div>
      </div>
    </section>
  );
}
