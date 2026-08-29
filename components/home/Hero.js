import { ArrowLeft, Globe2, MoveUpLeft } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[760px] overflow-hidden bg-[#171816] text-white lg:min-h-[820px]">
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute -left-20 top-20 h-[520px] w-[520px] rounded-full border border-white/10" />
        <div className="absolute -left-8 top-48 h-[390px] w-[390px] rounded-full border border-white/10" />
        <div className="absolute -left-[-30px] top-[310px] h-[250px] w-[250px] rounded-full border border-white/10" />
      </div>
      <div className="absolute bottom-0 left-0 h-px w-2/3 bg-gradient-to-l from-transparent via-white/20 to-transparent" />

      <div className="container-site relative flex min-h-[760px] flex-col justify-center pt-24 lg:min-h-[820px]">
        <div className="max-w-4xl">
          <div className="reveal-up mb-7 flex items-center gap-3 text-sm text-white/55" style={{ animationDelay: "80ms" }}>
            <span className="h-px w-12 bg-[#c9a66b]" />
            تجارت، از اینجا شروع می‌شود
          </div>

          <h1 className="reveal-up font-display text-balance text-[clamp(3.5rem,8vw,7.6rem)] font-black leading-[.98]" style={{ animationDelay: "160ms" }}>
            مسیر مطمئن
            <br />
            <span className="text-[#c9a66b]">تجارت</span> میان ایران
            <br />
            و جهان.
          </h1>

          <div className="reveal-up mt-10 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between" style={{ animationDelay: "240ms" }}>
            <p className="max-w-md text-base leading-8 text-white/55">
              از پیدا کردن تأمین‌کننده در اروپا تا واردات، صادرات و امور گمرکی؛ مسیر پیچیده تجارت را برای کسب‌وکار شما ساده می‌کنیم.
            </p>
            <a href="#inquiry" className="group inline-flex w-fit items-center gap-4 rounded-full border border-white/20 px-6 py-4 text-sm font-bold transition hover:border-[#c9a66b] hover:bg-[#c9a66b] hover:text-black">
              استعلام تأمین کالا
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition group-hover:bg-black group-hover:text-white">
                <ArrowLeft size={15} />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-20 flex items-end justify-between border-t border-white/10 pt-5 text-xs text-white/40 lg:absolute lg:bottom-8 lg:inset-x-0 lg:mt-0">
          <div className="flex items-center gap-3">
            <Globe2 size={15} />
            <span>ایران · اروپا · بازارهای جهانی</span>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <MoveUpLeft size={14} />
            <span>برای کشف بیشتر اسکرول کنید</span>
          </div>
        </div>
      </div>
    </section>
  );
}
