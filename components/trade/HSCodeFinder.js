"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const examples = [["841989", "ماشین‌آلات و تجهیزات صنعتی", "نمونه نمایشی"], ["730890", "سازه‌ها و قطعات فلزی", "نمونه نمایشی"], ["390110", "مواد اولیه پلیمری", "نمونه نمایشی"]];

export default function HSCodeFinder() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => examples.filter(([code, title]) => `${code} ${title}`.includes(query.trim())), [query]);
  return <section className="bg-[#171816] py-20 text-white lg:py-24"><div className="container-site"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="text-sm font-bold text-[#c9a66b]">جستجوی کد تعرفه</p><h2 className="mt-4 font-display text-3xl font-black sm:text-5xl">HS Code را سریع‌تر پیدا کنید.</h2><p className="mt-5 max-w-md text-sm leading-8 text-white/45">این بخش در نسخه نمایشی، تجربه جستجو را نشان می‌دهد. داده‌های رسمی و به‌روز در نسخه نهایی به منبع معتبر متصل خواهند شد.</p></div><div><div className="relative"><Search className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35" size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="کد یا نام کالا را جستجو کنید" className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.06] pr-12 pl-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#c9a66b]" /></div><div className="mt-5 grid gap-2">{results.map(([code, title, label]) => <div key={code} className="flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5"><div><span className="text-xs text-[#c9a66b]">{code}</span><p className="mt-1 text-sm font-bold text-white/80">{title}</p></div><span className="text-[11px] text-white/30">{label}</span></div>)}{results.length === 0 && <p className="py-8 text-center text-sm text-white/35">نتیجه‌ای در نمونه نمایشی پیدا نشد.</p>}</div></div></div></div></section>;
}
