"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ChevronDown, Menu, X } from "lucide-react";

const links = [
  ["خدمات", "#services"],
  ["مسیر همکاری", "#process"],
  ["دانش تجارت", "#insights"],
  ["درباره ما", "#about"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5 lg:px-6">
      <div className={`mx-auto max-w-[1400px] transition-all duration-500 ${scrolled ? "pt-3" : "pt-0"}`}>
        <div className={`relative flex h-[76px] items-center rounded-b-[24px] px-3 transition-all duration-500 sm:px-5 ${scrolled ? "rounded-[24px] border border-black/10 bg-[#f4f3ef]/94 shadow-xl shadow-black/5 backdrop-blur-xl" : "bg-transparent"}`}>
          <a href="#top" className="group flex min-w-[150px] items-center gap-3" aria-label="راه تجارت">
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition ${scrolled ? "border-black/15 text-[#171816]" : "border-white/25 text-white"}`}>ر</span>
            <span className={`whitespace-nowrap text-sm font-black ${scrolled ? "text-[#171816]" : "text-white"}`}>راه تجارت</span>
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:flex" aria-label="منوی اصلی">
            {links.map(([label, href]) => (
              <a key={href} href={href} className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm transition ${scrolled ? "text-black/55 hover:bg-black/5 hover:text-black" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className="mr-auto flex items-center gap-2">
            <button type="button" className={`hidden items-center gap-1 rounded-full px-3 py-2 text-xs font-bold transition sm:flex ${scrolled ? "text-black/55 hover:bg-black/5" : "text-white/65 hover:bg-white/10"}`} aria-label="انتخاب زبان">
              FA <ChevronDown size={13} />
            </button>
            <a href="#contact" className={`hidden items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition lg:flex ${scrolled ? "bg-[#171816] text-white hover:bg-[#98783f]" : "bg-[#c9a66b] text-[#171816] hover:bg-white"}`}>
              شروع گفتگو <ArrowLeft size={15} />
            </a>
            <button type="button" onClick={() => setOpen((value) => !value)} className={`flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${scrolled ? "border-black/10 text-black" : "border-white/20 text-white"}`} aria-label={open ? "بستن منو" : "باز کردن منو"} aria-expanded={open}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="px-1 pb-3 lg:hidden">
            <nav className="rounded-[24px] border border-black/10 bg-[#f4f3ef] p-3 shadow-2xl" aria-label="منوی موبایل">
              {links.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-2xl px-5 py-4 text-sm font-bold transition hover:bg-black/5">{label}</a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[#171816] px-5 py-4 text-sm font-bold text-white">شروع گفتگو <ArrowLeft size={15} /></a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
