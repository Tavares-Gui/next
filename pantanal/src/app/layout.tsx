import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "@/components/menu";
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ["100", "900"],
  style: "normal",
  variable: "--roboto",
  subsets: ["latin"],
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BATATA",
  description: "batata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <Menu op1={"page 1"} op2={"page 2"} />
        {children}
      </body>
    </html>
  );
}
