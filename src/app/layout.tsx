import type { Metadata } from "next";
import { Public_Sans, Timmana } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

const timmana = Timmana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-timmana",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FinTrack Dashboard",
  description: "Financial tracking dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} ${timmana.variable} font-public-sans`}
      >
        {children}
      </body>
    </html>
  );
}
