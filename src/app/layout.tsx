import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/lib/components/common/Navbar";
import ScrollToTopButton from "@/lib/components/common/ScrollToTopButton";
import { icons } from "@/utils/meta";
import SmoothScrollProvider from "@/lib/components/common/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://difuse-ui.vercel.app"),
  title: "Difuse · Networks Simplified",
  description:
    "Experience streamlined connectivity and security at the edge with Difuse – Intuitive business gateways",
  icons,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/intro.webp"
          type="image/webp"
          fetchPriority="high"
        ></link>
        <link
          rel="preload"
          as="image"
          href="/images/intro_mobile.webp"
          type="image/webp"
          fetchPriority="high"
        ></link>
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <ScrollToTopButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
