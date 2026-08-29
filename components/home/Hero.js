import { ArrowLeft, ArrowDownLeft, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[760px] overflow-hidden bg-[#171816] text-white lg:min-h-[860px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-10 h-[680px] w-[680px] lg:-left-20 lg:top-0 lg:h-[850px] lg:w-[850px]">
          <div className="absolute inset-0 opacity-70 mix-blend-screen" style={{ WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 70%)", maskImage: "radial-gradient(circle at center, black 40%, transparent 70%)" }}>
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" alt="" className="h-full w-full rounded-full object-cover" />
          </div>
        </div>
        <div className="absolute bottom-[-30%] right-[-8%] h-[600px] w-[600px] rounded-full bg-[#c9a66b]/[0.05] blur-3xl" />
        <div className="absolute inset-y-0 right-[8%] hidden w-px bg-white/[0.08] lg:block" />
      </div>
      <div className="container-site relative flex min-h-[760px] flex-col justify-center pt-28 lg:min-h-[860px]">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_300px] lg:gap-20">
          <div className="max-w-5xl">
            <div className="reveal-up mb-8 flex items-center gap-3 text-sm text-white/50" style={{ animationDelay: "80ms" }}><span className="h-px w-12 bg-[#c9a66b]" />تأمین و مدیریت تجارت بین‌المللی</div>
            <h1 className="reveal-up font-display text-balance text-[clamp(3.3rem,8.2vw,7.8rem)] font-black leading-[1.03]" style={{ animationDelay: "160ms" }}>تامین مطمئن،<br /><span className="text-[#c9a66b]">تجارت هوشمند.</span></h1>
            <p className="reveal-up mt-8 max-w-2xl text-sm leading-8 text-white/55 sm:text-base" style={{ animationDelay: "220ms" }}>شرکت با تکیه بر شبکه تأمین، نیروهای متخصص و مجرب، شناخت بازارهای بین‌المللی و مدیریت فرایند خرید و واردات، مسیر تأمین کالا را از شناسایی تأمین‌کننده تا تحویل نهایی مدیریت می‌کند.</p>
            <div className="reveal-up mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "280ms" }}>
              <a href="#inquiry" className="group inline-flex items-center gap-4 rounded-full bg-[#c9a66b] px-5 py-3.5 text-sm font-bold text-[#171816] transition hover:bg-white">درخواست تأمین کالا<span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171816] text-white transition group-hover:bg-[#c9a66b] group-hover:text-[#171816]"><ArrowLeft size={15} /></span></a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-bold text-white/75 transition hover:border-white/35 hover:text-white">مشاهده خدمات<ArrowLeft size={15} /></a>
            </div>
          </div>
          <div className="reveal-up hidden lg:block" style={{ animationDelay: "340ms" }}>
            <div className="border-y border-white/10 py-7"><div className="mb-8 flex items-center justify-between text-xs text-white/35"><span>مسیر تأمین</span><Globe2 size={16} /></div><div className="space-y-5 text-sm"><div className="flex items-center gap-4 text-white/80"><span className="h-1.5 w-1.5 rounded-full bg-white/50" /><span>نیاز شما</span><span className="h-px flex-1 bg-white/10" /></div><div className="flex items-center gap-4 text-[#c9a66b]"><span className="h-2 w-2 rounded-full bg-[#c9a66b] shadow-[0_0_0_5px_rgba(201,166,107,.08)]" /><span>تأمین و کنترل</span><span className="h-px flex-1 bg-[#c9a66b]/30" /></div><div className="flex items-center gap-4 text-white/80"><span className="h-1.5 w-1.5 rounded-full bg-white/50" /><span>تحویل نهایی</span><span className="h-px flex-1 bg-white/10" /></div></div></div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-end border-t border-white/10 pt-5 text-xs text-white/30"><span className="flex items-center gap-2"><ArrowDownLeft size={14} /> کشف مسیر همکاری</span></div>
      </div>
    </section>
  );
}
