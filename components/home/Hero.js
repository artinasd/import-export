import { ArrowLeft, ArrowDownLeft, Globe2, MapPin, PackageCheck, Ship } from "lucide-react";

export default function Hero() {
  return (
      <section id="top" className="relative min-h-[760px] overflow-hidden bg-[#171816] text-white lg:min-h-[860px]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

          {/* High-Quality Image Globe */}
          <div className="absolute -left-32 top-10 h-[680px] w-[680px] lg:-left-20 lg:top-0 lg:h-[850px] lg:w-[850px]">
            {/* We use a mask to smoothly fade the edges of the image into your dark background */}
            <div
                className="absolute inset-0 opacity-70 mix-blend-screen transition-opacity duration-1000"
                style={{
                  WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
                  maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)'
                }}
            >
              <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
                  alt="Global Trade Network"
                  className="h-full w-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Your original ambient glows */}
          <div className="absolute bottom-[-30%] right-[-8%] h-[600px] w-[600px] rounded-full bg-[#c9a66b]/[0.05] blur-3xl" />
          <div className="absolute inset-y-0 right-[8%] hidden w-px bg-white/[0.08] lg:block" />
        </div>

        <div className="container-site relative flex min-h-[760px] flex-col justify-center pt-28 lg:min-h-[860px]">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_300px] lg:gap-20">
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
              <div className="border-y border-white/10 py-7">
                <div className="mb-8 flex items-center justify-between text-xs text-white/35"><span>شبکه تجارت</span><Globe2 size={16} /></div>
                <div className="space-y-5 text-sm">
                  <div className="flex items-center gap-4 text-white/80"><span className="h-1.5 w-1.5 rounded-full bg-white/50" /><span>ایران</span><span className="h-px flex-1 bg-white/10" /></div>
                  <div className="flex items-center gap-4 text-[#c9a66b]"><span className="h-2 w-2 rounded-full bg-[#c9a66b] shadow-[0_0_0_5px_rgba(201,166,107,.08)]" /><span>اروپا</span><span className="h-px flex-1 bg-[#c9a66b]/30" /></div>
                  <div className="flex items-center gap-4 text-white/80"><span className="h-1.5 w-1.5 rounded-full bg-white/50" /><span>بازار جهانی</span><span className="h-px flex-1 bg-white/10" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}