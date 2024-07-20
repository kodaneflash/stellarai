import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stellar AI",
  description: "Advanced AI Solutions for Space Warfare and National Security Operations",
  openGraph: {
    title: "Stellar AI",
    description: "Advanced AI Solutions for Space Warfare and National Security Operations",
    images: [
      {
        url: "https://stellarai.tech/og-image.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Stellar AI Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stellar AI",
    description: "Stellar AI pivoting to a secure and regulated environment",
    images: ["https://example.com/og-image.png"], // Replace with your actual OG image URL
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