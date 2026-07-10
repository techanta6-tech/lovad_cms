import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hệ thống Thống kê Báo cáo Sự kiện",
  description: "Hệ thống quản lý sự kiện, camera checkin/checkout và lịch làm việc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased bg-[#090a0f] text-slate-100 font-sans select-none overflow-hidden">
        {children}
      </body>
    </html>
  );
}
