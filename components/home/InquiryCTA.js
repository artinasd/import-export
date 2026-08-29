import { ArrowLeft, Globe2, Search } from "lucide-react";

export default function InquiryCTA() {
  return (
    <section id="inquiry" className="bg-[#171816] py-24 text-white lg:py-32">
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-[1fr_.65fr] lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-3 text-xs text-white/45">
              <Globe2 size={15} />
              تأمین از بازارهای جهانی
            </div>
            <h2 className="font-display text-balance text-4xl font-black leading-[1.15] sm:text-5xl lg:text-7xl">
              کالای مورد نیازتان را<br />
              <span className="text-[#c9a66b]">پیدا نمی‌کنید؟</span>
            </h2>
            <p className="mt-8 max-w-lg text-sm leading-8 text-white/50">
              مشخصات محصول را برای ما بفرستید. از پیدا کردن منبع تا بررسی امکان تأمین، اولین قدم را با شما برمی‌داریم.
            </p>
          </div>

          <a href="#contact" className="group flex min-h-44 flex-col justify-between rounded-[28px] border border-white/10 p-7 transition duration-500 hover:border-[#c9a66b] hover:bg-white/[.03] sm:p-9">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
              <Search size={18} />
            </span>
            <span className="flex items-center justify-between gap-4 text-lg font-bold">
              ثبت استعلام تأمین
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a66b] text-black transition group-hover:-translate-x-1">
                <ArrowLeft size={16} />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
