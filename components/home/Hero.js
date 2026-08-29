import { ArrowLeft, ArrowDownLeft, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[760px] overflow-hidden bg-[#171816] text-white lg:min-h-[860px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-[-8%] top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full border border-white/[0.045]" />
        <div className="absolute right-[4%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[#c9a66b]/[0.08]" />
        <div className="absolute bottom-[-25%] left-[-8%] h-[600px] w-[600px] rounded-full bg-[#c9a66b]/[0.035] blur-3xl" />
        <div className="absolute inset-y-0 right-[8%] hidden w-px bg-white/[0.05] lg:block" />
      </div>

      <div className="container-site relative flex min-h-[760px] flex-col justify-center pt-28 lg:min-h-[860px]">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-24">
          <div className="max-w-5xl">
            <div className="reveal-up mb-8 flex items-center gap-3 text-sm text-white/50" style={{ animationDelay: "80ms" }}>
              <span className="h-px w-12 bg-[#c9a66b]" />
              تجارت بین‌الملل · از ایران تا اروپا
            </div>
            <h1 className="reveal-up font-display text-balance text-[clamp(3.3rem,8.2vw,7.8rem)] font-black leading-[1.03]" style={{ animationDelay: "160ms" }}>
              مسیر مطمئن
              <br />
              <span className="text-[#c9a66b]">تجارت</span> میان ایران
              <br />
              و جهان.
            </h1>
            <div className="reveal-up mt-10 flex flex-col gap-7 sm:flex-row sm:items-center" style={{ animationDelay: "240ms" }}>
              <a href="#inquiry" className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#c9a66b] px-5 py-3.5 text-sm font-bold text-[#171816] transition hover:bg-white">
                استعلام تأمین کالا
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171816] text-white transition group-hover:bg-[#c9a66b] group-hover:text-[#171816]"><ArrowLeft size={15} /></span>
              </a>
              <p className="max-w-md text-sm leading-8 text-white/45">تأمین مواد اولیه و ماشین‌آلات، منبع‌یابی اروپا، واردات، صادرات و امور گمرکی؛ یک مسیر یکپارچه برای تجارت شما.</p>
            </div>
          </div>

          <div className="reveal-up hidden lg:block" style={{ animationDelay: "340ms" }}>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 shadow-2xl shadow-black/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(201,166,107,.11),transparent_32%)]" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div><p className="text-xs font-bold text-white/70">مسیر تجارت</p><p className="mt-1 text-[10px] text-white/30">از مبدأ تا بازار</p></div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#c9a66b]"><Globe2 size={16} /></span>
                </div>
                <div className="relative mx-auto h-[220px] w-full max-w-[290px]">
                  <svg viewBox="0 0 290 220" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
                    <path d="M42 158 C94 104 126 116 151 84 C177 52 206 68 248 34" stroke="rgba(255,255,255,.13)" strokeWidth="1.5" strokeDasharray="4 7" />
                    <path d="M42 158 C94 104 126 116 151 84 C177 52 206 68 248 34" stroke="#c9a66b" strokeWidth="1.5" strokeDasharray="1 28" strokeLinecap="round" />
                  </svg>
                  <div className="absolute bottom-[50px] left-[31px] flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full border border-white/40 bg-[#171816]" /><span className="text-[10px] text-white/55">ایران</span></div>
                  <div className="absolute left-1/2 top-[70px] -translate-x-1/2 flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c9a66b] text-[#171816] shadow-[0_0_0_8px_rgba(201,166,107,.08)]"><Globe2 size={14} /></span><span className="text-[10px] font-bold text-[#c9a66b]">اروپا</span></div>
                  <div className="absolute right-[17px] top-[19px] flex items-center gap-2"><span className="text-[10px] text-white/55">بازار جهانی</span><span className="h-2.5 w-2.5 rounded-full border border-white/40 bg-[#171816]" /></div>
                </div>
                <div className="flex items-end justify-between border-t border-white/10 pt-5"><div><p className="text-[10px] text-white/30">تمرکز اصلی</p><p className="mt-1 text-xs font-bold text-white/70">منبع‌یابی اروپا</p></div><span className="text-[10px] text-[#c9a66b]">EUROPE ↗</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-end border-t border-white/10 pt-5 text-xs text-white/35"><span className="flex items-center gap-2"><ArrowDownLeft size={14} /> کشف مسیر</span></div>
      </div>
    </section>
  );
}
