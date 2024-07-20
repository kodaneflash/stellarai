import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stellar AI: AI for Space Warfare and National Security",
  description: "Providing advanced AI solutions tailored for space warfare and national security operations, Stellar AI partners closely with the US Department of Defense to enhance strategic capabilities.",
  metadataBase: new URL('https://stellarai.tech'),
  openGraph: {
    title: "Stellar AI",
    description: "Providing advanced AI solutions tailored for space warfare and national security operations, Stellar AI partners closely with the US Department of Defense to enhance strategic capabilities.",
    url: 'https://stellarai.tech',
    siteName: 'Stellar AI',
    images: [
      {
        url: "https://stellarai.tech/og-image.jpg",
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
    images: ["https://stellarai.tech/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}