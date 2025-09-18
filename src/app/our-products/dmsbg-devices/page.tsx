"use client";

import AnimatedSlideButton from "@/components/common/AnimatedSlideButton";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { IoBagRemoveOutline } from "react-icons/io5";
import { Images } from "@/assets/our-products";
import Link from "next/link";
import HoverRevealButton from "@/components/common/HoverRevealButton";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import { motion } from "framer-motion";
import { Vectors } from "@/assets/vectors";

const features = [
  {
    title: "Fast Wireless",
    desc: "Equipped with WiFi 6 for fast and reliable wireless connectivity",
  },
  {
    title: "Robust Firewall",
    desc: "Blazingly fast and robust firewall with advanced features like GeoIP blocking and aliases",
  },
  {
    title: "Multiple VPNs",
    desc: "Support for WireGuard, Tailscale and IPsec VPNs for secure remote access",
  },
  {
    title: "Simplified PBX",
    desc: "Built on the powerful Asterisk platform with a newly designed UI",
  },
  {
    title: "Shared Folder",
    desc: "Easy to use samba instance for easy transfers of files within the network",
  },
  {
    title: "AdBlocker",
    desc: "Comes with AdGuard Home pre-installed with pre-populated lists",
  },
  {
    title: "Expandable Storage",
    desc: "The M.2 slot can provide additional storage capacity to your device if necessary",
  },
  {
    title: "Addon Wireless WAN",
    desc: "Seamless modular 5G integration for WAN failover, calls, and SMS Features",
  },
  {
    title: "Passively Cooled",
    desc: "No spinning or noisy fans; our system ensures silent and efficient cooling for a quieter environment",
  },
];

const products = [
  {
    name: "DMSBG 300",
    img: Images.DMSBG.Devices.DMSBG300.Desktop,
    mobileImg: Images.DMSBG.Devices.DMSBG300.Mobile,
    desc: "Take control of your network with the DMSBG‑100, a compact, intelligent gateway built for the modern workplace. Combining router, firewall, Wi‑Fi access point, soft PBX, VPN engine, and DNS control into one unified device, DMSBG‑100 simplifies your infrastructure without compromising on performance or privacy.",
    moreDesc:
      "Designed to replace cluttered legacy setups, it’s your go-to platform for secure, modular, and self-hosted connectivity, whether you're running a small business, a growing branch office, or a privacy-first home lab.",
    store: "/#",
    enquire: "/#",
  },
  {
    name: "DMSBG 100",
    img: Images.DMSBG.Devices.DMSBG100.Desktop,
    mobileImg: Images.DMSBG.Devices.DMSBG100.Mobile,
    desc: "Take control of your network with the DMSBG‑100, a compact, intelligent gateway built for the modern workplace. Combining router, firewall, Wi‑Fi access point, soft PBX, VPN engine, and DNS control into one unified device, DMSBG‑100 simplifies your infrastructure without compromising on performance or privacy.",
    moreDesc:
      "Designed to replace cluttered legacy setups, it’s your go-to platform for secure, modular, and self-hosted connectivity, whether you're running a small business, a growing branch office, or a privacy-first home lab.",
    store: "/#",
    enquire: "/#",
  },
  {
    name: "DMSBG 50",
    img: Images.DMSBG.Devices.DMSBG50.Desktop,
    mobileImg: Images.DMSBG.Devices.DMSBG50.Mobile,
    desc: "Take control of your network with the DMSBG‑100, a compact, intelligent gateway built for the modern workplace. Combining router, firewall, Wi‑Fi access point, soft PBX, VPN engine, and DNS control into one unified device, DMSBG‑100 simplifies your infrastructure without compromising on performance or privacy.",
    moreDesc:
      "Designed to replace cluttered legacy setups, it’s your go-to platform for secure, modular, and self-hosted connectivity, whether you're running a small business, a growing branch office, or a privacy-first home lab.",
    store: "/#",
    enquire: "/#",
  },
];

export default function DmsbgPage() {
  return (
    <main className="pt-14 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full md:max-w-8xl px-6 py-16">
        <div className="text-center md:max-w-6xl w-full mx-auto space-y-6">
          <p className="text-2xl lg:text-3xl tracking-wide text-[#25276C]">
            Our Products {">"}{" "}
            <span className="text-[#080808]">DMSBG Devices</span>
          </p>
          <h1 className="text-4xl md:text-7xl font-normal leading-tight text-[#080808]">
            One box, infinite solutions for
            <span className="md:hidden">&nbsp;</span>
            <br className="hidden md:inline" />
            your diverse needs
          </h1>
          <p className="text-lg text-center font-light text-[#2A2A2A] max-w-4xl mx-auto">
            Discover Difuse’s DMSBG line compact, modular devices that converge
            networking, security, and communication into a single hardware
            layer.
          </p>
          <p className="text-lg text-center font-light text-[#2A2A2A] max-w-4xl mx-auto">
            Whether you&lsquo;re deploying for a startup, a distributed team, or
            an enterprise branch office, our MSBG devices are designed to
            eliminate complexity, reduce IT clutter, and give you full-stack
            control.
          </p>
        </div>

        <div className="relative mt-20 flex justify-center">
          <div className="relative w-full h-[650px] md:max-w-8xl rounded-lg overflow-hidden shadow-sm">
            <picture>
              <source
                media="(max-width: 1024px)"
                srcSet={Images.DMSBG.Banner.Mobile.src}
              />
              <Image
                src={Images.DMSBG.Banner.Desktop.src}
                alt="DMSBG Devices Banner"
                fill
                quality={100}
                className="object-cover"
                priority
              />
            </picture>
          </div>

          <div className="absolute inset-0 flex flex-col justify-end mb-20 items-end">
            <div className="space-x-4 justify-center mx-auto gap-4 flex flex-col sm:flex-row items-center">
              <AnimatedSlideButton
                icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                text="Contact Us"
                className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-4 rounded-lg text-lg lg:text-xl font-medium inline-flex"
                variant="link"
                href="/contact"
              />
              <AnimatedSlideButton
                icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                text="Go to Downloads"
                className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-4 rounded-lg text-lg lg:text-xl font-medium inline-flex"
                variant="link"
                href="/online-store"
              />
            </div>
          </div>
        </div>

        <p className="text-lg text-center font-light text-[#2A2A2A] max-w-4xl mx-auto mt-10">
          Whether you&lsquo;re deploying for a startup, a distributed team, or
          an enterprise branch office, our MSBG devices are designed to
          eliminate complexity, reduce IT clutter, and give you full-stack
          control.
        </p>

        <p className="text-lg text-[#2A2A2A] text-center mt-10 font-medium">
          Explore the full range of DMSBG devices:
        </p>

        <section className="max-w-8xl mx-auto mt-20 space-y-2">
          {products.map((p) => (
            <div key={p.name} className="relative overflow-hidden rounded-xl">
              <div className="relative h-[800px] lg:h-[500px] bg-black">
                <picture>
                  <source
                    media="(max-width: 1024px)"
                    srcSet={p.mobileImg.src}
                  />
                  <Image
                    src={p.img.src}
                    alt={p.name}
                    fill
                    quality={100}
                    className="object-fill"
                    priority
                  />
                </picture>
              </div>

              <div className="p-6 md:px-20 py-10 absolute inset-0 text-white">
                <div className="flex flex-col lg:flex-row justify-between h-full w-full ">
                  <h3 className="text-5xl font-semibold h-full w-full xl:w-6/12 2xl:w-7/12">
                    {p.name}
                  </h3>

                  <div className="flex flex-col justify-start h-full w-full xl:w-6/12 2xl:w-5/12 space-y-2">
                    <p className="mt-3 text-md xl:text-lg">{p.desc}</p>
                    <p className="mt-3 text-md xl:text-lg">{p.moreDesc}</p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      <AnimatedSlideButton
                        icon={
                          <IoBagRemoveOutline className="h-5 w-5 lg:h-6 lg:w-6" />
                        }
                        text="Explore Online Store"
                        className="inline-flex hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] rounded-lg text-xl tracking-[-0.05em] p-5 max-w-max "
                        variant="link"
                        href={p.store}
                      />
                      <AnimatedSlideButton
                        icon={
                          <FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />
                        }
                        text="Enquire"
                        className="inline-flex hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] rounded-lg text-xl tracking-[-0.05em] p-5 max-w-max "
                        variant="link"
                        href={p.enquire}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col lg:flex-row mt-20 lg:items-center lg:justify-between text-lg text-[#2A2A2A] font-normal">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4 lg:mb-0">
              <Image
                src={Vectors.DifuseIcon.src}
                alt="vector_icon"
                width={24}
                height={24}
                className="object-contain inline mb-4 lg:mb-0"
              />
              <p className="text-[#2A2A2A] ">(More models incoming...)</p>
            </div>

            <p className="text-[#A8A8A8]">
              Get updates from our{" "}
              <Link href="/newsroom" className="text-[#080808] font-semibold">
                Newsroom
              </Link>
              ,or subscribe to our{" "}
              <Link href="/newsletter" className="text-[#080808] font-semibold">
                Newsletter.
              </Link>
            </p>
          </div>
        </section>

        <section className="max-w-8xl mx-auto mt-12 ">
          <div className="rounded-lg p-6 md:p-20 bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] ">
            <h2 className="font-semibold mb-20 text-white text-6xl">
              Key Features
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 ">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] "
                >
                  <p className="text-3xl lg:text-4xl  text-[#080808]">
                    {f.title}
                  </p>

                  <div className="flex gap-10">
                    <p className="flex items-end justify-start">
                      <AiOutlineSecurityScan className="h-16 w-16" />
                    </p>
                    <p className="text-md text-[#2A2A2A]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-8xl mx-auto my-40 ">
          <div className="rounded-xl bg-[linear-gradient(to_right,black_0%,#25276C_100%)] text-white p-8 md:p-12 h-[630px] lg:h-[350px] flex flex-col justify-center ">
            <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
              <div className="w-full lg:w-7/12">
                <h2 className="text-4xl xl:text-5xl font-normal leading-snug mb-4">
                  Find the Right DMSBG for
                  <span className="lg:hidden">&nbsp;</span>
                  <br className="hidden lg:inline" />
                  Your Business
                </h2>
              </div>
              <div className="w-full lg:w-5/12">
                <p className="text-[#FBFBF9] text-lg leading-relaxed mb-6">
                  Explore specs, compare models, and choose
                  <br className="hidden lg:inline" /> the device that fits your
                  scale.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <AnimatedSlideButton
                    icon={
                      <IoBagRemoveOutline className="h-5 w-5 lg:h-6 lg:w-6" />
                    }
                    text="Explore Online Store"
                    className="inline-flex hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] rounded-lg text-xl tracking-[-0.05em] p-5 max-w-max "
                    variant="link"
                    href="/online-store"
                  />
                  <AnimatedSlideButton
                    icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                    text="Contact Us"
                    className="inline-flex hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] rounded-lg text-xl tracking-[-0.05em] p-5 max-w-max "
                    variant="link"
                    href="/contact"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-8xl mx-auto mb-20">
          <div className="grid xl:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <h2 className="text-4xl xl:text-5xl font-normal text-[#080808] leading-tight">
                Explore More
                <span className="xl:hidden">&nbsp;</span>
                <br className="hidden xl:inline" />
                on the Our
                <span className="xl:hidden">&nbsp;</span>
                <br className="hidden xl:inline" />
                Products Page
              </h2>
            </div>

            <div className="flex xl:justify-end lg:flex-row flex-col gap-2">
              <div className="relative h-[400px] lg:w-[400px] group overflow-hidden rounded-xl">
                <Image
                  src={Images.ExtraImages.DPBXDevicesImg.src}
                  placeholder="blur"
                  blurDataURL={Images.ExtraImages.DPBXDevicesImg.blurDataURL}
                  alt="DPBX Device"
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />

                <motion.div
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  className="absolute inset-0 p-10 flex flex-col justify-between group:"
                >
                  <h3 className="text-white text-3xl lg:text-4xl font-medium">
                    DPBX Devices
                  </h3>
                  <div className="flex justify-start">
                    <HoverRevealButton
                      icon={<Icon icon={arrowRight} width={24} height={24} />}
                      text="Explore"
                      className="hidden xl:flex items-center text-[#1C1E55] bg-[#FBFBF9] hover:bg-[#E5E5E5] transition-colors p-5 rounded-lg text-xl tracking-[-0.05em] max-w-max"
                      variant="link"
                      href="/our-products/dpbx-devices"
                      parentControlled
                    />
                    <Link
                      href="/our-products/dpbx-devices"
                      className="flex gap-2 items-center xl:hidden text-[#1C1E55] bg-[#FBFBF9] hover:bg-[#E5E5E5] transition-colors p-5 rounded-lg text-xl tracking-[-0.05em] max-w-max"
                    >
                      <Icon
                        icon={arrowRight}
                        width={24}
                        height={24}
                        className="text-[#25276C]"
                      />
                      <span>Explore</span>
                    </Link>
                  </div>
                </motion.div>
              </div>

              <div className="relative h-[400px] lg:w-[400px] group overflow-hidden rounded-xl">
                <Image
                  src={Images.ExtraImages.SoftphoneImg.src}
                  placeholder="blur"
                  blurDataURL={Images.ExtraImages.SoftphoneImg.blurDataURL}
                  alt="Softphone App"
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />

                <motion.div
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  className="absolute inset-0 p-10 flex flex-col justify-between group:"
                >
                  <h3 className="text-white text-3xl lg:text-4xl font-medium">
                    Softphone
                  </h3>
                  <div className="flex justify-start">
                    <HoverRevealButton
                      icon={<Icon icon={arrowRight} width={24} height={24} />}
                      text="Explore"
                      className="hidden xl:flex items-center text-[#1C1E55] bg-[#FBFBF9] hover:bg-[#E5E5E5] transition-colors p-5 rounded-lg text-xl tracking-[-0.05em] max-w-max"
                      variant="link"
                      href="/our-products/softphone"
                      parentControlled
                    />
                    <Link
                      href="/our-products/softphone"
                      className="flex gap-2 items-center xl:hidden text-[#1C1E55] bg-[#FBFBF9] hover:bg-[#E5E5E5] transition-colors p-5 rounded-lg text-xl tracking-[-0.05em] max-w-max"
                    >
                      <Icon
                        icon={arrowRight}
                        width={24}
                        height={24}
                        className="text-[#25276C]"
                      />
                      <span>Explore</span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full">
        <Footer />
      </div>
    </main>
  );
}
