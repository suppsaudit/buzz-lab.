import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buzz Lab.",
  description: "価値あるものを、求める人へ　美容・健康領域特化のマーケティングカンパニー",
  openGraph: {
    title: "Buzz Lab.",
    description: "価値あるものを、求める人へ　美容・健康領域特化のマーケティングカンパニー",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Buzz Lab. サムネイル",
      },
    ],
    type: "website",
    siteName: "Buzz Lab.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buzz Lab.",
    description: "価値あるものを、求める人へ　美容・健康領域特化のマーケティングカンパニー",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
        <Analytics />
      </body>
    </html>
  );
}
