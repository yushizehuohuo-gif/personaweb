import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SHIZE YU - Creative Technologist",
    template: "%s - SHIZE YU",
  },
  description:
    "Creative Technologist exploring the intersections of game design, AI art, and digital culture.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
