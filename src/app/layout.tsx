import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://stellarai.tech'),
  title: {
    default: "Stellar AI: AI for Space Warfare and National Security",
    template: "%s | Stellar AI"
  },
  description: "Providing advanced AI solutions tailored for space warfare and national security operations, Stellar AI partners closely with the US Department of Defense to enhance strategic capabilities.",
  applicationName: "Stellar AI",
  authors: [{ name: "Stellar AI Team" }],
  generator: "Next.js",
  keywords: ["AI", "Space Warfare", "National Security", "Defense Technology"],
  referrer: "origin-when-cross-origin",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],
  colorScheme: "dark",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  creator: "Stellar AI",
  publisher: "Stellar AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Stellar AI",
    description: "Providing advanced AI solutions tailored for space warfare and national security operations, Stellar AI partners closely with the US Department of Defense to enhance strategic capabilities.",
    url: 'https://stellarai.tech',
    siteName: 'Stellar AI',
    images: [
      {
        url: "https://stellarai.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stellar AI Open Graph Image",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Stellar AI",
    description: "Providing advanced AI solutions tailored for space warfare and national security operations, Stellar AI partners closely with the US Department of Defense to enhance strategic capabilities.",
    siteId: "1467726470533754880",
    creator: "@stellarai",
    creatorId: "1467726470533754880",
    images: ["https://stellarai.tech/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      new URL("/icon.png", "https://stellarai.tech"),
    ],
    shortcut: "/shortcut-icon.png",
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://stellarai.tech",
    languages: {
      'en-US': 'https://stellarai.tech/en-US',
      'es-ES': 'https://stellarai.tech/es-ES',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification=code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification=code",
    other: {
      me: ["my-email@example.com", "https://example.com/profile"],
    },
  },
  abstract: "Stellar AI provides advanced AI solutions for space warfare and national security.",
  category: "Technology",
  classification: "Defense Technology",
  other: {
    "dc.description": "Stellar AI is a leading provider of AI solutions for space warfare and national security.",
    "geo.region": "US-CA",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}