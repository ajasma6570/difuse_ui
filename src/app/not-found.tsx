import AnimatedSlideButton from "@/lib/components/common/AnimatedSlideButton";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import Footer from "@/lib/components/common/Footer";
import { icons, title } from "@/lib/utils/meta";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;
const siteUrl = process.env.SITE_URL;

export const metadata: Metadata = {
  title: `Difuse · Networks Simplified`,
  description:
    "Experience streamlined connectivity and security at the edge with Difuse – Intuitive business gateways.",
  icons,
  openGraph: {
    title: `Difuse · Networks Simplified`,
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

export default function NotFound() {
  return (
    <main>
      <div className="text-center min-h-screen flex flex-col items-center justify-center px-6 space-y-6">
        <div>
          <div className="relative">
            <h1 className="text-9xl md:text-[350px] leading-none">
              <span className="text-[#080808]">4</span>
              <span className="text-[#25276C]">0</span>
              <span className="text-[#080808]">4</span>
            </h1>
            <p className="absolute top-3 md:top-10 right-5 md:right-32 left-1/2 text-[#25276C] text-lg md:text-2xl">
              ops!
            </p>
          </div>

          <p className="text-lg md:text-xl font-normal text-[#2A2A2A]">
            Page not found
          </p>
        </div>

        <div className="mt-4 flex flex-col md:flex-row items-center bg-[#F4F4F4] p-8 w-full md:w-3xl justify-between gap-8 rounded-lg">
          <p className="text-lg text-[#2A2A2A] max-w-sm text-start">
            The page you are looking for doesn’t exist or another error
            occurred.
          </p>

          <AnimatedSlideButton
            icon={<Icon icon={arrowRight} width={24} height={24} />}
            text="Back to Homepage"
            className="inline-flex text-[#1C1E55] hover:bg-[#1C1E55] border border-[#1C1E55] hover:text-white rounded-lg bg-[#F4F4F4] text-xl tracking-[-0.05em] p-5 max-w-max "
            variant="link"
            href="/"
          />
        </div>
      </div>
      <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full mt-5">
        <Footer />
      </div>
    </main>
  );
}
