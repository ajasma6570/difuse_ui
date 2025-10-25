import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/lib/components/common/Navbar";
import SmoothScroll from "@/lib/components/common/SmoothScroll";
import ScrollToTopButton from "@/lib/components/common/ScrollToTopButton";
import { icons } from "@/utils/meta";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
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
      <body className={`${poppins.variable} antialiased font-poppins`}>
        <div className="md:bg-yellow-200 fixed left-0 top-20 z-[100] flex w-[30px] items-center justify-center bg-gray-200 py-[2.5px] text-[12px] uppercase text-black sm:bg-red-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-pink-200">
          <span className="block sm:hidden">all</span>
          <span className="hidden sm:block md:hidden">sm</span>
          <span className="hidden md:block lg:hidden">md</span>
          <span className="hidden lg:block xl:hidden">lg</span>
          <span className="hidden xl:block 2xl:hidden">xl</span>
          <span className="hidden 2xl:block">2xl</span>
        </div>{" "}
        <SmoothScroll />
        <Navbar />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
