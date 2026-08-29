"use client";

import { Search, ArrowUpLeft } from "lucide-react";
import { useMemo, useState } from "react";

const categories = ["همه", "واردات", "صادرات", "گمرک", "تأمین", "حمل‌ونقل"];
const articles = [
  ["واردات", "قبل از خرید از یک تأمین‌کننده اروپایی چه بدانیم؟", "نکات کاربردی برای شناخت تأمین‌کننده، بررسی اسناد و شروع مذاکره."],
  ["گمرک", "HS Code چیست و چرا اهمیت دارد؟", "راهنمای ساده برای شناخت کد تعرفه و تأثیر آن بر فرایند واردات."],
  ["حمل‌ونقل", "مسیر تأمین را چطور کم‌ریسک‌تر کنیم؟", "از کنترل کالا تا حمل و ترخیص؛ نقاط مهمی که باید از ابتدا بدانید."],
  ["صادرات", "پیش از صادرات چه اسنادی را بررسی کنیم؟", "نگاهی عملی به آماده‌سازی اسناد و هماهنگی مراحل صادرات."],
  ["تأمین", "چطور یک تأمین‌کننده مناسب پیدا کنیم؟", "معیارهایی برای مقایسه پیشنهادها، سابقه و توان واقعی فروشنده."],
  ["گمرک", "ثبت سفارش و نقش آن در برنامه واردات", "چرا هماهنگی زودهنگام اسناد می‌تواند از تأخیرهای پرهزینه جلوگیری کند."],
];

export default function TradeKnowledgeBrowser() {
  const [category, setCategory] = useState("همه");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => articles.filter(([itemCategory, title, text]) => (category === "همه" || itemCategory === category) && `${title} ${text}`.includes(query.trim())), [category, query]);

  return (
    <section className="bg-[#f3f2ed] py-20 lg:py-28">
      <div className="container-site">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end"><div className="relative max-w-xl"><Search className="absolute right-4 top-1/2 -translate-y-1/2 text-black/35" size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="جستجو در دانش تجارت" className="h-14 w-full rounded-2xl border border-black/10 bg-white/60 pr-12 pl-5 text-sm outline-none transition focus:border-[#c9a66b]" /></div><div className="flex flex-wrap gap-2">{categories.map((item) => <button type="button" key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2.5 text-xs font-bold transition ${category === item ? "bg-[#171816] text-white" : "border border-black/10 bg-transparent text-black/60 hover:bg-black/5"}`}>{item}</button>)}</div></div>
        <div className="mt-12 grid border-t border-black/10 md:grid-cols-2 lg:grid-cols-3">{filtered.map(([itemCategory, title, text], index) => <article key={title} className={`flex min-h-[310px] flex-col border-b border-black/10 p-7 lg:p-9 ${index % 3 !== 2 ? "lg:border-l" : ""}`}><div className="flex items-center justify-between text-xs text-black/40"><span>{itemCategory}</span><span>۰{(index % 9) + ۱}</span></div><div className="mt-auto"><h3 className="text-xl font-black leading-8">{title}</h3><p className="mt-4 text-sm leading-7 text-[#686963]">{text}</p><a href="#" className="mt-7 inline-flex items-center gap-2 text-xs font-bold">مطالعه مطلب<ArrowUpLeft size={14} /></a></div></article>)}</div>
        {filtered.length === 0 && <div className="py-20 text-center text-sm text-[#686963]">مطلبی با این مشخصات پیدا نشد.</div>}
      </div>
    </section>
  );
}
