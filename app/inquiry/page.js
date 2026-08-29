import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/site/PageHeader";
import InquiryForm from "@/components/forms/InquiryForm";

export default function InquiryPage() {
  return (
    <main>
      <Header />
      <PageHeader eyebrow="فرم RQF" title="نیاز خود را ارسال کنید؛ مسیر تأمین را ما بررسی می‌کنیم." description="این نسخه نمایشی، تجربه فرم آنلاین استعلام از تأمین‌کنندگان را نشان می‌دهد. اطلاعات واردشده در این مرحله به سرور ارسال نمی‌شود." />
      <section className="bg-[#f3f2ed] py-20 lg:py-28"><div className="container-site"><div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:items-start"><div><p className="text-sm font-bold text-[#98783f]">درخواست تأمین کالا</p><h2 className="mt-4 font-display text-3xl font-black sm:text-5xl">جزئیات نیاز شما.</h2><p className="mt-5 max-w-sm text-sm leading-8 text-[#686963]">هرچه مشخصات دقیق‌تر باشد، بررسی بازار و انتخاب تأمین‌کننده هدفمندتر خواهد بود.</p><div className="mt-10 space-y-4 text-sm"><div className="border-t border-black/10 pt-4">منبع‌یابی و مقایسه پیشنهادها</div><div className="border-t border-black/10 pt-4">بررسی تأمین‌کننده در صورت نیاز</div><div className="border-t border-black/10 pt-4">هماهنگی خرید، حمل و ترخیص</div></div></div><InquiryForm /></div></div></section>
      <Footer />
    </main>
  );
}
