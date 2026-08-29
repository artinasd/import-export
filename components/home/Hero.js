import { ArrowLeft, ArrowDownLeft, Globe2, MapPin, PackageCheck, Ship } from "lucide-react";

const routes = [
  { label: "ایران", sublabel: "مبدأ", icon: MapPin },
  { label: "اروپا", sublabel: "تأمین", icon: PackageCheck, active: true },
  { label: "بازار جهانی", sublabel: "مقصد", icon: Ship },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[760px] overflow-hidden bg-[#171816] text-white lg:min-h-[860px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-[-12%] top-1/2 h-[680px] w-[680px] -translate-y-1/2 rounded-full border border-white/[0.055]" />
        <div className="absolute right-[-5%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-white/[0.035]" />
        <div className="absolute bottom-[-25%] left-[-8%] h-[520px] w-[520px] rounded-full bg-[#c9a66b]/[0.035] blur-3xl" />
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
            <div className="relative overflow-hidden border-y border-white/10 py-8">
              <div className="mb-9 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white/70">شبکه تأمین</p>
                  <p className="mt-1 text-[10px] text-white/30">مسیر یکپارچه تجارت شما</p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#c9a66b]"><Globe2 size={16} /></span>
              </div>

              <div className="relative">
                <div className="absolute right-[15px] top-5 bottom-5 w-px bg-gradient-to-b from-white/10 via-[#c9a66b]/50 to-white/10" aria-hidden="true" />
                <div className="space-y-2">
                  {routes.map(({ label, sublabel, icon: Icon, active }) => (
                    <div key={label} className={`group relative flex items-center gap-4 rounded-2xl px-3 py-4 transition ${active ? "bg-white/[0.055]" : ""}`}>
                      <span className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${active ? "border-[#c9a66b] bg-[#c9a66b] text-[#171816]" : "border-white/15 bg-[#171816] text-white/35"}`}><Icon size={11} /></span>
                      <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
                        <div><p className={`text-sm font-bold ${active ? "text-white" : "text-white/65"}`}>{label}</p><p className={`mt-1 text-[10px] ${active ? "text-[#c9a66b]" : "text-white/25"}`}>{sublabel}</p></div>
                        {active && <span className="text-[9px] font-bold text-[#c9a66b]">ACTIVE</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-[300px] text-xs leading-6 text-white/30">از شناسایی تأمین‌کننده تا تحویل؛ هر مرحله در یک مسیر روشن و قابل پیگیری.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
