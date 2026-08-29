"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";

const links = [["خانه", "#top"], ["خدمات", "#services"], ["دانش تجارت", "#insights"], ["درباره ما", "#about"], ["تماس با ما", "#contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  const navClass = scrolled ? "text-black/55 hover:text-black" : "text-white/70 hover:text-white";
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-0"}`}>
      <div className={`container-site transition-all duration-500 ${scrolled ? "rounded-full border border-black/10 bg-[#f3f2ed]/90 shadow-lg shadow-black/5 backdrop-blur-xl" : ""}`}>
        <div className="flex h-20 items-center justify-between px-1 sm:px-3">
          <a href="#top" className="group flex items-center gap-3" aria-label="راه تجارت"><span className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition group-hover:bg-[#171816] group-hover:text-white ${scrolled ? "border-black/15 text-[#171816]" : "border-white/25 text-white"}`}>ر</span><span className={`text-sm font-bold tracking-tight ${scrolled ? "text-[#171816]" : "text-white"}`}>راه تجارت</span></a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="منوی اصلی">{links.map(([label, href]) => <a key={href} href={href} className={`text-sm transition ${navClass}`}>{label}</a>)}</nav>
          <a href="#inquiry" style={{ backgroundColor: scrolled ? "#c9a66b" : "#ffffff", color: "#171816", borderRadius: "9999px", padding: "12px 20px", display: "none", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 700, transition: "background-color 200ms ease" }} className="lg:flex">درخواست همکاری <ArrowLeft size={15} /></a>
          <button type="button" onClick={() => setOpen((value) => !value)} className={`flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${scrolled ? "border-black/10 text-black" : "border-white/20 text-white"}`} aria-label={open ? "بستن منو" : "باز کردن منو"} aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
        {open && <div className="pb-3 lg:hidden"><nav className="rounded-3xl border border-black/10 bg-[#f4f3ef] p-3 shadow-2xl" aria-label="منوی موبایل">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-2xl px-5 py-4 text-sm font-bold hover:bg-black/5">{label}</a>)}<a href="#inquiry" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[#c9a66b] px-5 py-4 text-sm font-bold text-[#171816]">درخواست همکاری <ArrowLeft size={15} /></a></nav></div>}
      </div>
    </header>
  );
}
