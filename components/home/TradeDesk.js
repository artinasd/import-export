import { ArrowLeft, FileSearch, Link2, Scale } from "lucide-react";

const tools = [
  [FileSearch, "فرم RQF", "درخواست خود را ثبت کنید تا اطلاعات لازم برای تأمین دقیق جمع‌آوری شود.", "/inquiry"],
  [Scale, "جستجوی کد تعرفه گمرکی", "برای بررسی اولیه کالا، کد تعرفه و اطلاعات مرتبط را سریع‌تر پیدا کنید.", "/trade-knowledge"],
  [Link2, "مقررات و منابع رسمی", "دسترسی به لینک‌های کاربردی تجارت، گمرک و منابع دولتی در یک نقطه.", "/trade-knowledge"]
];

export default function TradeDesk() {
  return (
    <section id="trade-tools" className="bg-[#f3f2ed] py-24 lg:py-32">
      <div className="container-site">
        <div className="rounded-[32px] bg-[#e4e2da] p-7 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div><p className="mb-5 text-sm font-bold text-[#98783f]">ابزارهای تجارت</p><h2 className="font-display text-balance text-3xl font-black leading-[1.3] sm:text-5xl">اطلاعات درست،<br />تصمیم <span className="text-[#98783f]">بهتر.</span></h2><p className="mt-6 max-w-sm text-sm leading-8 text-[#686963]">فرم‌های کاربردی، جستجوی تعرفه و لینک‌های رسمی؛ ابزارهایی که برای تصمیم‌گیری روزمره تجارت نیاز دارید.</p></div>
            <div className="grid border-t border-black/10 sm:grid-cols-3 sm:border-t-0">
              {tools.map(([Icon, title, text, href], index) => <a href={href} key={title} className={`group border-black/10 py-7 sm:p-6 ${index !== 0 ? "sm:border-r" : ""}`}><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171816] text-white"><Icon size={17} /></span><h3 className="mt-7 text-base font-black leading-7">{title}</h3><p className="mt-3 text-xs leading-6 text-[#686963]">{text}</p><span className="mt-6 flex items-center gap-2 text-xs font-bold">ورود<ArrowLeft size={13} className="transition group-hover:-translate-x-1" /></span></a>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
