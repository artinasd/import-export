import { ArrowUpLeft, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [["خانه", "/#top"], ["خدمات", "/services"], ["تأمین کالا", "/inquiry"], ["دانش تجارت", "/trade-knowledge"], ["درباره ما", "/about"], ["تماس با ما", "/contact"]];
const serviceLinks = [["تأمین کالا", "/services"], ["اعتبارسنجی تأمین‌کننده", "/supplier-verification"], ["بازرسی کالا", "/services"], ["لجستیک و ترخیص", "/services"]];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#171816] text-white">
      <div className="container-site py-20 lg:py-24">
        <div className="mb-16 grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div><p className="mb-6 inline-flex items-center" style={{ backgroundColor: "rgba(201, 166, 107, 0.10)", border: "1px solid rgba(201, 166, 107, 0.25)", borderRadius: "8px", padding: "4px 12px", color: "#c9a66b", fontSize: "16px", fontWeight: 800, lineHeight: 1.5 }}>ارتباط با ما</p><h2 className="font-display max-w-2xl text-balance text-4xl font-black leading-[1.2] sm:text-6xl">نیاز شما → بررسی → تأمین → کنترل → تحویل</h2><p className="mt-6 max-w-xl text-sm leading-8 text-white/45">شرکت تولیدی و بازرگانی؛ تأمین کالا و مدیریت تجارت بین‌المللی.</p><a href="/inquiry" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c9a66b] px-6 py-4 text-sm font-bold text-[#171816] transition hover:bg-white">درخواست تأمین کالا <ArrowUpLeft size={15} /></a></div>
          <div className="grid content-end gap-5 text-sm text-white/55"><div className="flex items-center gap-3"><Phone size={16} /> +98 21 0000 0000</div><div className="flex items-center gap-3"><Mail size={16} /> hello@example.com</div><div className="flex items-center gap-3"><MapPin size={16} /> تهران، ایران</div></div>
        </div>
        <div className="grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
          <div><div className="mb-4 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs">ر</span><span className="font-bold">راه تجارت</span></div><p className="max-w-sm text-xs leading-7 text-white/35">تأمین کالا و مدیریت تجارت بین‌المللی.</p></div>
          <div><h3 className="mb-5 text-xs font-bold text-white/75">دسترسی سریع</h3><nav className="grid grid-cols-2 gap-3 text-xs text-white/45" aria-label="دسترسی سریع">{quickLinks.map(([label, href]) => <a key={`${label}-${href}`} href={href} className="transition hover:text-white">{label}</a>)}</nav></div>
          <div><h3 className="mb-5 text-xs font-bold text-white/75">خدمات</h3><nav className="grid gap-3 text-xs text-white/45" aria-label="خدمات">{serviceLinks.map(([label, href]) => <a key={label} href={href} className="transition hover:text-white">{label}</a>)}</nav></div>
        </div>
      </div>
      <div className="container-site flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between"><span>© ۱۴۰۵ راه تجارت. تمامی حقوق محفوظ است.</span><span>اخبار روز · لینک‌های کاربردی تجارت · منابع رسمی</span></div>
    </footer>
  );
}
