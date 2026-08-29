import "./globals.css";

export const metadata = {
  title: "راه تجارت | تأمین و تجارت بین‌الملل",
  description: "تأمین کالا، منبع‌یابی اروپا، واردات، صادرات و خدمات گمرکی برای کسب‌وکارها.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
