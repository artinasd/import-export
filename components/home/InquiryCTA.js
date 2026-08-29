import { ArrowLeft, Mail, MessageCircle, Phone, Send } from "lucide-react";

const channels = [[Phone, "تلفن", "تماس مستقیم"], [MessageCircle, "واتساپ", "گفت‌وگوی سریع"], [Send, "روبیکا", "پیام آنلاین"], [Mail, "ایمیل", "ارسال درخواست"]];

export default function InquiryCTA() {
  return (
    <section id="inquiry" className="bg-[#171816] py-24 text-white lg:py-32">
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-[1fr_.9fr] lg:items-end lg:gap-24">
          <div><p className="mb-6 inline-flex rounded-xl border border-[#c9a66b]/25 bg-[#c9a66b]/[0.08] px-3.5 py-2 text-base font-bold text-[#c9a66b]">دعوت به همکاری</p><h2 className="font-display max-w-3xl text-balance text-4xl font-black leading-[1.18] sm:text-5xl lg:text-7xl">تأمین کالای خود را<br /><span className="text-[#c9a66b]">به ما بسپارید.</span></h2><p className="mt-7 max-w-xl text-sm leading-8 text-white/50">نیاز خود را ارسال کنید. ما بهترین مسیر تأمین را برای شما طراحی می‌کنیم.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-[#c9a66b] px-5 py-3.5 text-sm font-bold text-[#171816] transition hover:bg-white">درخواست تأمین کالا <ArrowLeft size={15} /></a><a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3.5 text-sm font-bold text-white transition hover:border-white/35">تماس با شرکت</a></div></div>
          <div className="grid grid-cols-2 border-t border-white/10 sm:grid-cols-4 lg:grid-cols-2">{channels.map(([Icon, title, text]) => <a href="#contact" key={title} className="group border-b border-white/10 p-5 transition hover:bg-white/[0.04] sm:p-6"><Icon size={18} className="text-[#c9a66b]" /><p className="mt-7 text-sm font-bold">{title}</p><p className="mt-1 text-xs text-white/35">{text}</p></a>)}</div>
        </div>
      </div>
    </section>
  );
}
