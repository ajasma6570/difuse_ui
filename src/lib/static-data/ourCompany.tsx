import { OurCompanyImages } from "@/assets/our-company";
import { Vectors } from "@/assets/vectors";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { HiOutlineCube, HiOutlineServer } from "react-icons/hi2";
import { MdWifiCalling3 } from "react-icons/md";

export type Product = {
  id: string;
  DesktopImage: StaticImageData;
  MobileImage: StaticImageData;
  icon: IconType;
  title: string;
  body: string;
  href: string;
};

export type FeatureCard = {
  title: string;
  icon: StaticImageData;
  body: string;
};

export const rightFeatures: FeatureCard[] = [
  {
    title: "Open-source by design",
    body: "Built for transparency, flexibility, and community-driven innovation",
    icon: Vectors.Magnet,
  },
  {
    title: "Tailored deployments",
    body: "Customizable solutions built to match unique business requirements, not force-fit features",
    icon: Vectors.Move,
  },
  {
    title: "Community-first approach",
    body: "Active engagement with developers, teams, and IT enthusiasts worldwide",
    icon: Vectors.Users,
  },
];

export const products: Product[] = [
  {
    id: "dmsbg-devices",
    title: "DMSBG Devices",
    body: "Difuse’s DMSBG (Multi-Service Business Gateway) devices go beyond traditional routers. They integrate routing, firewall, Wi-Fi, PBX, NAS, DNS filtering, and more all in one streamlined unit. With open standards and modular firmware, each unit is built for autonomy, customization, and long-term agility.",
    DesktopImage: OurCompanyImages.Products.DMSBG.Desktop,
    MobileImage: OurCompanyImages.Products.DMSBG.Mobile,
    icon: HiOutlineServer,
    href: "/our-products/dmsbg-devices",
  },
  {
    id: "dpbx-devices",
    title: "DPBX Devices",
    body: "Difuse’s DPBX (Private Branch Exchange) devices are purpose-built for secure, self-hosted business communication. They combine PBX capabilities with modular software, supporting advanced call routing, IVR, recording, and SIP trunking, all without cloud lock-ins or licensing traps. With scalable deployment options and full admin control, DPBX devices empower businesses to own their voice infrastructure.",
    DesktopImage: OurCompanyImages.Products.DPBX.Desktop,
    MobileImage: OurCompanyImages.Products.DPBX.Mobile,
    icon: MdWifiCalling3,
    href: "/our-products/dpbx-devices",
  },
  {
    id: "softphone",
    title: "Softphone",
    body: "Make high-quality voice and SMS calls securely over the internet—right from your desktop, tablet, or mobile device. Difuse Phone connects seamlessly with your existing Difuse PBX or DMSBG systems, offering a unified, self-hosted communication experience without relying on third-party cloud services.",
    DesktopImage: OurCompanyImages.Products.Softphone.Desktop,
    MobileImage: OurCompanyImages.Products.Softphone.Mobile,
    icon: HiOutlineCube,
    href: "/our-products/softphone",
  },
];

export const ourValues: FeatureCard[] = [
  {
    title: "Simplicity at Scale",
    icon: Vectors.External,
    body: "Power shouldn’t come with complexity. We strip away the bloat of legacy systems and deliver modular tools that work together, intuitively and efficiently.",
  },
  {
    title: "Future-Ready Thinking",
    icon: Vectors.FastForward,
    body: "We’re not just solving today’s IT problems, we’re designing for the next decade of decentralized, intelligent, business-first infrastructure.",
  },
  {
    title: "Open Innovation",
    icon: Vectors.Bulb,
    body: "We’re built on open standards and open-source principles, not closed ecosystems. This fuels faster development, stronger security, and continuous community-driven improvement.",
  },
  {
    title: "Security as a Foundation",
    icon: Vectors.Shield,
    body: "From self-hosted control to privacy-respecting architecture, security isn’t a feature, it’s embedded into every layer of our platform.",
  },
];
