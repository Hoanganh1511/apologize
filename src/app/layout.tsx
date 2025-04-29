import type { Metadata } from "next";
import { Dancing_Script, Mali } from "next/font/google";
import "./globals.css";

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});
const mali = Mali({
  variable: "--font-mali",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "--Tớ có 1 thứ ở đây--",
  description: "Something...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dancing.variable}  ${mali.variable} antialiased `}>
        {children}
      </body>
    </html>
  );
}
