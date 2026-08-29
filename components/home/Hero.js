import { ArrowDownLeft, ArrowLeft, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[760px] overflow-hidden bg-[#171816] text-white lg:min-h-[860px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 right-0 h-[520px] w-[48%] bg-gradient-to-tl from-[#c9a66b]/[0.055] via-transparent to-transparent" />
        <div className="absolute inset-y-0 right-[8%] hidden w-px bg-white/[0.05] lg:block" />
        <div className="absolute left-0 top-1/2 h-px w-[38%] bg-white/[0.04]" />
      </div>

      <div className="container-site relative flex min-h-[760px] flex-col justify-center pt-28 lg:min-h-[860px]">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-24">
          <div className="max-w-5xl">
            <div className="reveal-up mb-8 flex items-center gap-3 text-sm text-white/50" style={{ animationDelay: "80ms" }}>
              <span className="h-px w-12 bg-[#c9a66b]" />
              تجارت بین‌الملل · از ایران تا اروپا
            </div>

            <h1 className="reveal-up max-w-[950px] font-display text-balance text-[clamp(3.1rem,7.7vw,7.2rem)] font-black leading-[1.08] tracking-[-0.035em]" style={{ animationDelay: "160ms" }}>
              مسیر مطمئن تجارت
              <br />
              <span className="text-[#c9a66b]">میان ایران</span> و جهان.
            </h1>

            <div className="reveal-up mt-10 grid max-w-4xl gap-7 border-t border-white/10 pt-7 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10" style={{ animationDelay: "240ms" }}>
              <a href="#inquiry" className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#c9a66b] px-5 py-3.5 text-sm font-bold text-[#171816] transition hover:bg-white">
                استعلام تأمین کالا
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171816] text-white transition group-hover:bg-[#c9a66b] group-hover:text-[#171816]"><ArrowLeft size={15} /></span>
              </a>
              <p className="max-w-xl text-sm leading-8 text-white/45">تأمین مواد اولیه و ماشین‌آلات، منبع‌یابی اروپا، واردات، صادرات و امور گمرکی؛ یک مسیر یکپارچه برای تجارت شما.</p>
            </div>
          </div>

          <div className="reveal-up hidden lg:block" style={{ animationDelay: "340ms" }}>
            <div className="relative overflow-hidden border-y border-white/10 py-7">
              <div className="mb-8 flex items-center justify-between text-xs text-white/35"><span>شبکه تجارت</span><Globe2 size={16} /></div>
              <div className="relative py-3">
                <div className="absolute right-[10px] top-4 h-[150px] w-px bg-gradient-to-b from-white/10 via-[#c9a66b]/50 to-white/10" aria-hidden="true" />
                <div className="space-y-7">
                  {["ایران", "اروپا", "بازار جهانی"].map((label, index) => (
                    <div key={label} className="relative flex items-center gap-4 text-sm">
                      <span className={`relative z-10 h-2 w-2 shrink-0 rounded-full ${index === 1 ? "bg-[#c9a66b] shadow-[0_0_0_5px_rgba(201,166,107,.09)]" : "bg-white/45"}`} />
                      <span className={index === 1 ? "font-bold text-[#c9a66b]" : "text-white/70"}>{label}</span>
                      <span className={`h-px flex-1 ${index === 1 ? "bg-[#c9a66b]/30" : "bg-white/10"}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-[280px] text-xs leading-6 text-white/30">اتصال بازار، تأمین‌کننده و فرآیند گمرکی در یک مسیر شفاف.</p>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-white/35"><span>۰۱ / ۰۴</span><span className="flex items-center gap-2"><ArrowDownLeft size={14} /> کشف مسیر</span></div>
      </div>
    </section>
  );
}
