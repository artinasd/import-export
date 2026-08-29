import { ArrowUpLeft, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#171816] text-white">
      <div className="container-site py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_.7fr]">
          <div>
            <p className="mb-6 text-sm text-white/40">برای شروع یک همکاری</p>
            <h2 className="font-display max-w-2xl text-balance text-4xl font-black leading-[1.15] sm:text-6xl">
              یک نیاز تجاری دارید؟<br /><span className="text-[#c9a66b]">با ما صحبت کنید.</span>
            </h2>
            <a href="mailto:hello@example.com" className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-black transition hover:bg-[#c9a66b]">
              تماس با ما <ArrowUpLeft size={15} />
            </a>
          </div>
          <div className="grid content-end gap-5 text-sm text-white/55">
            <div className="flex items-center gap-3"><Phone size={16} /> +98 21 0000 0000</div>
            <div className="flex items-center gap-3"><Mail size={16} /> hello@example.com</div>
            <div className="flex items-center gap-3"><MapPin size={16} /> تهران، ایران</div>
          </div>
        </div>
      </div>
      <div className="container-site flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
        <span>© ۱۴۰۵ راه تجارت. تمامی حقوق محفوظ است.</span>
        <span>تأمین · واردات · صادرات · گمرک</span>
      </div>
    </footer>
  );
}
