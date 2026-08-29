"use client";

import { useState } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";

const links = [
  ["خدمات", "#services"],
  ["مسیر همکاری", "#process"],
  ["دانش تجارت", "#insights"],
  ["درباره ما", "#about"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-site flex h-24 items-center justify-between">
        <a href="#top" className="group flex items-center gap-3" aria-label="راه تجارت">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-sm text-white transition group-hover:bg-white group-hover:text-black">ر</span>
          <span className="text-sm font-bold tracking-tight text-white">راه تجارت</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="منوی اصلی">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-white/70 transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-[#c9a66b] lg:flex">
          شروع گفتگو
          <ArrowLeft size={15} />
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="container-site lg:hidden">
          <nav className="rounded-3xl border border-black/10 bg-[#f4f3ef] p-3 shadow-2xl" aria-label="منوی موبایل">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-2xl px-5 py-4 text-sm font-bold hover:bg-black/5">
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[#171816] px-5 py-4 text-sm font-bold text-white">
              شروع گفتگو <ArrowLeft size={15} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
