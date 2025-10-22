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
  title: {
    default: 'NextOS - Modern Web OS Interface',
    template: '%s | NextOS'
  },
  description: 'A modern web-based operating system interface built with Next.js, featuring a responsive and intuitive UI.',
  keywords: ['Next.js', 'Web OS', 'UI Framework', 'Responsive Design', 'Modern Web'],
  openGraph: {
    title: 'NextOS - Modern Web OS Interface',
    description: 'A modern web-based operating system interface built with Next.js',
    url: 'https://nextos.vercel.app/',
    siteName: 'NextOS',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://nextos.vercel.app/screenshots/desktop.png',
        width: 1200,
        height: 630,
        alt: 'NextOS - Modern Web OS Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextOS - Modern Web OS Interface',
    description: 'A modern web-based operating system interface built with Next.js',
    images: ['https://nextos.vercel.app/screenshots/desktop.png'], 
    creator: '@yourtwitterhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
