import React from "react";
import Contact from "@/lib/pages/Contact";
import { icons, title } from "@/utils/meta";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;
const siteUrl = process.env.SITE_URL;

export const metadata: Metadata = {
  title: `Contact · Difuse`,
  description:
    "Experience streamlined connectivity and security at the edge with Difuse – Intuitive business gateways.",
  icons,
  openGraph: {
    title: `Contact · Difuse`,
    description:
      "Experience streamlined connectivity and security at the edge with Difuse – Intuitive business gateways",
    images: [
      {
        url: `${siteUrl}/images/opengraph/300x300.png`,
        width: 300,
        height: 300,
        alt: `${title} | ${siteName}`,
      },
      {
        url: `${siteUrl}/images/opengraph/1200x627.png`,
        width: 1200,
        height: 627,
        alt: `${title} | ${siteName}`,
      },
      {
        url: `${siteUrl}/images/opengraph/1200x630.png`,
        width: 1200,
        height: 630,
        alt: `${title} | ${siteName}`,
      },
      {
        url: `${siteUrl}/images/opengraph/1200x675.png`,
        width: 1200,
        height: 675,
        alt: `${title} | ${siteName}`,
      },
      {
        url: `${siteUrl}/images/opengraph/1080x1080.png`,
        width: 1080,
        height: 1080,
        alt: `${title} | ${siteName}`,
      },
    ],
  },
  alternates: {
    canonical: "https://difuse-ui.vercel.app",
  },
};

export default function page() {
  return <Contact />;
}
