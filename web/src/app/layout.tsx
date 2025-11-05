import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Estate Instagram Canva Templates (200+) ? Easy to Edit",
  description:
    "A conversion?focused bundle of 200 Canva templates for realtors. Edit fast, post daily, and grow your local brand.",
  metadataBase: new URL("https://agentic-8d227835.vercel.app"),
  openGraph: {
    title: "Real Estate Instagram Canva Templates (200+)",
    description:
      "200 editable Canva templates for realtors. Posts, Stories, Reels, Carousels.",
    url: "https://agentic-8d227835.vercel.app",
    siteName: "Real Estate IG Bundle",
    images: [
      {
        url:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Real estate Instagram templates preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Instagram Canva Templates (200+)",
    description:
      "200 editable Canva templates for realtors. Posts, Stories, Reels, Carousels.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
