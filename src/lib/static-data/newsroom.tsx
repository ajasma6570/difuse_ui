import { StaticImageData } from "next/image";
import BannerDesktop from "$/images/news/banner.png";
import BannerMobile from "$/images/news/banner_sm.png";
import KalmiaImage from "$/images/news/kalmia.png";
import AsteriskImage from "$/images/news/integrating_asterisk.png";
import Deskphone from "$/images/news/deskphone.png";
import Kalmia from "./news/kalmia";
import { JSX } from "react";
import DMSBG100 from "./news/dmsbg100";
import Asterisk from "./news/asterisk";
import Softphone from "./news/softphone";

// type BannerPost = {
//   id: string;
//   title: string;
//   excerpt: string;
//   date: string;
//   author: string;
//   image: StaticImageData;
//   mobileImage: StaticImageData;
//   categories: string[];
// };

// const bannerPost: BannerPost = {
//   id: "hero-1",
//   title:
//     "Introducing the DMSBG-100: The Compact Powerhouse for Next-Gen Business Networks",
//   excerpt:
//     "Difuse has officially launched the DMSBG-100, the first in our line of next-gen Multi-Service Business Gateways. Tailored for small to medium-sized businesses...",
//   date: "April 4, 2025",
//   author: "Hayzam",
//   image: BannerDesktop,
//   mobileImage: BannerMobile,
//   categories: ["Latest", "Product Updates"],
// };

export type NewPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: JSX.Element;
  date: string;
  author: string;
  image: StaticImageData;
  mobileImage?: StaticImageData;
  categories: string[];
  isBanner?: boolean;
};

const dmsbg100 = <DMSBG100 />;
const kalmia = <Kalmia />;
const asterisk = <Asterisk />;
const softphone = <Softphone />;

export const news: NewPost[] = [
  {
    id: "1",
    slug: "introducing-the-dmsbg-100-the-compact-powerhouse-for-next-gen-business-networks",
    title:
      "Introducing the DMSBG-100: The Compact Powerhouse for Next-Gen Business Networks",
    description:
      "Difuse has officially launched the DMSBG-100, the first in our line of next-gen Multi-Service Business Gateways. Tailored for small to medium-sized businesses...",
    content: dmsbg100,
    date: "April 4, 2025",
    author: "Hayzam",
    image: BannerDesktop,
    mobileImage: BannerMobile,
    categories: ["Latest", "Product Updates"],
    isBanner: false,
  },
  {
    id: "2",
    slug: "kalmia-a-simple-documentation-cms",
    title: "Kalmi: A Simple Documentation CMS",
    description:
      "A lightweight docs system with search, versioning, and MDX authoring.",
    content: kalmia,
    date: "April 1, 2025",
    author: "Hayzam",
    image: KalmiaImage,
    categories: ["Latest", "Product Updates"],
    isBanner: false,
  },
  {
    id: "3",
    slug: "guide-to-integrating-asterisk-with-microsoft-teams-using-direct-routing",
    title:
      "Guide to integrating Asterisk with Microsoft Teams using Direct Routing",
    description:
      "A practical guide to connect on‑prem PBX with Teams for enterprise calling.",
    content: asterisk,
    date: "Mar 29, 2025",
    author: "Hayzam",
    image: AsteriskImage,
    categories: ["Latest", "Insights", "Company News"],
    isBanner: false,
  },
  {
    id: "4",
    slug: "saving-100-desk-phones-from-e-waste-doom-with-tftp-and-a-simpler-pbx",
    title:
      "Saving 100+ Desk Phones from E‑Waste: QoS with TFTP and a Simpler PBX",
    description:
      "A migration story that kept hardware in service while simplifying ops.",
    content: softphone,
    date: "Mar 20, 2025",
    author: "Hayzam",
    image: Deskphone,
    categories: ["Latest", "Company News"],
    isBanner: false,
  },
];
