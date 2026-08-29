import { Eye, Gauge, Network, ShieldCheck } from "lucide-react";

const benefits = [[Network, "شناخت تأمین‌کننده"], [Gauge, "کنترل کامل فرایند"], [Eye, "شفافیت در مسیر تأمین"], [ShieldCheck, "کاهش ریسک خرید"]];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#171816] py-24 text-white lg:py-32">
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div><p className="mb-5 text-sm font-bold text-[#c9a66b]">چرا ما</p><h2 className="font-display text-balance text-4xl font-black leading-[1.2] sm:text-5xl">در تجارت فقط<br /><span className="text-[#c9a66b]">قیمت مهم نیست.</span></h2></div>
          <div><p className="max-w-2xl text-base leading-9 text-white/55">تأمین موفق یعنی تصمیم‌های درست در هر مرحله؛ از انتخاب تأمین‌کننده تا تحویل کالا. ما این مسیر را یکپارچه مدیریت می‌کنیم تا ریسک کاهش یابد و دید شما شفاف باشد.</p><div className="mt-12 grid border-t border-white/10 sm:grid-cols-2">{benefits.map(([Icon, title]) => <div key={title} className="flex items-center gap-4 border-b border-white/10 py-6 sm:pl-6"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#c9a66b]"><Icon size={17} /></span><span className="text-sm font-bold">{title}</span></div>)}</div></div>
        </div>
      </div>
    </section>
  );
}
