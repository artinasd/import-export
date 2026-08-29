import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/site/PageHeader";
import SupplierVerificationForm from "@/components/forms/SupplierVerificationForm";

export default function SupplierVerificationRequestPage() {
  return (
    <main>
      <Header />
      <PageHeader eyebrow="درخواست اعتبارسنجی" title="اطلاعات تأمین‌کننده را برای بررسی اولیه ارسال کنید." description="این فرم، نسخه نمایشی جریان درخواست اعتبارسنجی است. در نسخه نهایی مدارک به‌صورت امن دریافت و برای تیم بررسی ثبت می‌شوند." />
      <section className="bg-[#f3f2ed] py-20 lg:py-28"><div className="container-site"><div className="mx-auto max-w-4xl rounded-[28px] border border-black/10 bg-white/50 p-7 sm:p-10 lg:p-12"><SupplierVerificationForm /></div></div></section>
      <Footer />
    </main>
  );
}
