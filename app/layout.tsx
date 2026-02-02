import type { Metadata } from "next";
import { Geist, Geist_Mono, Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spiško Cup – Turnaj | HK Spišská Nová Ves",
  description:
    "Oficiálne informácie pre tímy - hokejový turnaj Spiško Cup v Spišskej Novej Vsi. 28. - 29. marca 2026.",
  icons: {
    icon: [
      { url: "/ikony/favicon.ico", sizes: "any" },
      { url: "/ikony/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/ikony/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/ikony/icon-152.png", sizes: "152x152", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={publicSans.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
