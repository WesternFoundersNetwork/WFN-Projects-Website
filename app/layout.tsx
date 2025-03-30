import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer";


const archivoMedium = localFont({
  src: "/fonts/Archivo-Medium.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const archivoRegular = localFont({
  src: "/fonts/Archivo-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

console.log(archivoMedium);

export const metadata: Metadata = {
  title: "WFN Projects",
  description: "Created By The Projects 2025 Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />

      <body className={` ${archivoMedium.variable} ${archivoRegular.variable} antialiased`}>
        <Navbar />
        <div className="mt-16">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
