"use client";

import AnimatedSlideButton from "@/lib/components/common/AnimatedSlideButton";
import Footer from "@/lib/components/common/Footer";
import Image from "next/image";
import { Images } from "@/assets/our-products";
import { motion } from "motion/react";
import Link from "next/link";
import HoverRevealButton from "@/lib/components/common/HoverRevealButton";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import bag4Linear from "@iconify/icons-solar/bag-4-linear";
import { Vectors } from "@/assets/vectors";
import PageTransition from "@/lib/components/common/PageTransition";

const features = [
  {
    title: "Fast Wireless",
    desc: "Equipped with WiFi 6 for fast and reliable wireless connectivity",
    icon: Vectors.Wifi,
  },
  {
    title: "Robust Firewall",
    desc: "Blazingly fast and robust firewall with advanced features like GeoIP blocking and aliases",
    icon: Vectors.Flame,
  },
  {
    title: "Multiple VPNs",
    desc: "Support for WireGuard, Tailscale and IPsec VPNs for secure remote access",
    icon: Vectors.Shield,
  },
  {
    title: "Simplified PBX",
    desc: "Built on the powerful Asterisk platform with a newly designed UI",
    icon: Vectors.DeskPhone,
  },
  {
    title: "Shared Folder",
    desc: "Easy to use samba instance for easy transfers of files within the network",
    icon: Vectors.Folder,
  },
  {
    title: "AdBlocker",
    desc: "Comes with AdGuard Home pre-installed with pre-populated lists",
    icon: Vectors.HandStop,
  },
  {
    title: "Expandable Storage",
    desc: "The M.2 slot can provide additional storage capacity to your device if necessary",
    icon: Vectors.Clipboard,
  },
  {
    title: "Addon Wireless WAN",
    desc: "Seamless modular 5G integration for WAN failover, calls, and SMS Features",
    icon: Vectors.Antenna,
  },
  {
    title: "Passively Cooled",
    desc: "No spinning or noisy fans; our system ensures silent and efficient cooling for a quieter environment",
    icon: Vectors.Asterisk,
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
    enquire: "/contact",
  },
  {
    name: "DMSBG 100",
    img: Images.DMSBG.Devices.DMSBG100.Desktop,
    mobileImg: Images.DMSBG.Devices.DMSBG100.Mobile,
    desc: "Take control of your network with the DMSBG‑100, a compact, intelligent gateway built for the modern workplace. Combining router, firewall, Wi‑Fi access point, soft PBX, VPN engine, and DNS control into one unified device, DMSBG‑100 simplifies your infrastructure without compromising on performance or privacy.",
    moreDesc:
      "Designed to replace cluttered legacy setups, it’s your go-to platform for secure, modular, and self-hosted connectivity, whether you're running a small business, a growing branch office, or a privacy-first home lab.",
    store: "/#",
    enquire: "/contact",
  },
  {
    name: "DMSBG 50",
    img: Images.DMSBG.Devices.DMSBG50.Desktop,
    mobileImg: Images.DMSBG.Devices.DMSBG50.Mobile,
    desc: "Take control of your network with the DMSBG‑100, a compact, intelligent gateway built for the modern workplace. Combining router, firewall, Wi‑Fi access point, soft PBX, VPN engine, and DNS control into one unified device, DMSBG‑100 simplifies your infrastructure without compromising on performance or privacy.",
    moreDesc:
      "Designed to replace cluttered legacy setups, it’s your go-to platform for secure, modular, and self-hosted connectivity, whether you're running a small business, a growing branch office, or a privacy-first home lab.",
    store: "/#",
    enquire: "/contact",
  },
];

export default function DMSBGDevices() {
  return (
    <PageTransition motionKey="our-products-dmsbg-page-wrapper">
      <div className="flex min-h-screen flex-col items-center justify-center pt-14">
        <div className="md:max-w-8xl w-full px-6 py-16">
          <div className="mx-auto w-full space-y-6 text-center md:max-w-6xl">
            <p className="text-2xl tracking-wide text-[#25276C] lg:text-3xl">
              Our Products {">"}{" "}
              <span className="text-[#080808]">DMSBG Devices</span>
            </p>
            <h1 className="text-4xl leading-tight font-normal text-[#080808] md:text-7xl">
              One box, infinite solutions for
              <span className="md:hidden">&nbsp;</span>
              <br className="hidden md:inline" />
              your diverse needs
            </h1>
            <p className="mx-auto max-w-4xl text-center text-lg font-light text-[#2A2A2A]">
              Discover Difuse’s DMSBG line compact, modular devices that
              converge networking, security, and communication into a single
              hardware layer.
            </p>
            <p className="mx-auto max-w-4xl text-center text-lg font-light text-[#2A2A2A]">
              Whether you&lsquo;re deploying for a startup, a distributed team,
              or an enterprise branch office, our MSBG devices are designed to
              eliminate complexity, reduce IT clutter, and give you full-stack
              control.
            </p>
          </div>

          <div className="relative mt-20 flex justify-center">
            <div className="md:max-w-8xl relative h-[650px] w-full overflow-hidden rounded-lg shadow-sm">
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

            <div className="absolute inset-0 mb-20 flex flex-col items-end justify-end">
              <div className="mx-auto flex flex-col items-center justify-center gap-4 space-x-4 sm:flex-row">
                <AnimatedSlideButton
                  icon={<Icon icon={arrowRight} width={24} height={24} />}
                  text="Contact Us"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#FBFBF9] px-6 py-4 text-lg font-medium text-[#FBFBF9] transition-colors hover:bg-[#FBFBF9] hover:text-[#25276C] lg:text-xl"
                  variant="link"
                  href="/contact"
                />
                <AnimatedSlideButton
                  icon={<Icon icon={arrowRight} width={24} height={24} />}
                  text="Go to Downloads"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#FBFBF9] px-6 py-4 text-lg font-medium text-[#FBFBF9] transition-colors hover:bg-[#FBFBF9] hover:text-[#25276C] lg:text-xl"
                  variant="link"
                  href="/resources/downloads"
                />
              </div>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-lg font-light text-[#2A2A2A]">
            Whether you&lsquo;re deploying for a startup, a distributed team, or
            an enterprise branch office, our MSBG devices are designed to
            eliminate complexity, reduce IT clutter, and give you full-stack
            control.
          </p>

          <p className="mt-10 text-center text-lg font-medium text-[#2A2A2A]">
            Explore the full range of DMSBG devices:
          </p>

          <section className="max-w-8xl mx-auto mt-20 space-y-2">
            {products.map((p) => (
              <div key={p.name} className="relative overflow-hidden rounded-xl">
                <div className="relative h-[800px] bg-black lg:h-[500px]">
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

                <div className="absolute inset-0 p-6 py-10 text-white md:px-20">
                  <div className="flex h-full w-full flex-col justify-between lg:flex-row">
                    <h3 className="h-full w-full text-5xl font-semibold xl:w-6/12 2xl:w-7/12">
                      {p.name}
                    </h3>

                    <div className="flex h-full w-full flex-col justify-start space-y-2 xl:w-6/12 2xl:w-5/12">
                      <p className="text-md mt-3 xl:text-lg">{p.desc}</p>
                      <p className="text-md mt-3 xl:text-lg">{p.moreDesc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <AnimatedSlideButton
                          icon={
                            <Icon icon={bag4Linear} width={24} height={24} />
                          }
                          text="Explore Online Store"
                          className="inline-flex max-w-max rounded-lg border border-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#FBFBF9] hover:bg-[#FBFBF9] hover:text-[#25276C]"
                          onClick={() => alert("Online Store is coming soon!")}
                        />
                        <AnimatedSlideButton
                          icon={
                            <Icon icon={arrowRight} width={24} height={24} />
                          }
                          text="Enquire"
                          className="inline-flex max-w-max rounded-lg border border-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#FBFBF9] hover:bg-[#FBFBF9] hover:text-[#25276C]"
                          variant="link"
                          href={p.enquire}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-20 flex flex-col text-lg font-normal text-[#2A2A2A] lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-4 flex flex-col gap-4 lg:mb-0 lg:flex-row lg:items-center">
                <Image
                  src={Vectors.DifuseIcon.src}
                  alt="vector_icon"
                  width={24}
                  height={24}
                  className="mb-4 inline object-contain lg:mb-0"
                />
                <p className="text-[#2A2A2A]">(More models incoming...)</p>
              </div>

              <p className="text-[#A8A8A8]">
                Get updates from our{" "}
                <Link href="/newsroom" className="font-semibold text-[#080808]">
                  Newsroom
                </Link>
                ,or subscribe to our{" "}
                <Link
                  href="/newsletter"
                  className="font-semibold text-[#080808]"
                >
                  Newsletter.
                </Link>
              </p>
            </div>
          </section>

          <section className="max-w-8xl mx-auto mt-12">
            <div className="rounded-lg bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] p-6 py-14 md:p-20">
              <h2 className="mb-14 text-4xl font-semibold text-white lg:mb-20 lg:text-6xl">
                Key Features
              </h2>
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 2xl:grid-cols-3">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex min-h-[300px] flex-col justify-between rounded-xl bg-white p-8"
                  >
                    <p className="text-3xl text-[#080808] lg:text-4xl">
                      {f.title}
                    </p>

                    <div className="flex items-end gap-8 md:gap-16">
                      <span className="shrink-0">
                        <Image
                          src={f.icon.src}
                          alt={`${f.title}_icon`}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </span>
                      <p className="text-lg">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="max-w-8xl mx-auto my-40">
            <div className="flex h-[630px] flex-col justify-center rounded-xl bg-[linear-gradient(to_right,black_0%,#25276C_100%)] p-8 text-white md:p-12 lg:h-[350px]">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className="w-full lg:w-7/12">
                  <h2 className="mb-4 text-4xl leading-snug font-normal xl:text-5xl">
                    Find the Right DMSBG for
                    <span className="lg:hidden">&nbsp;</span>
                    <br className="hidden lg:inline" />
                    Your Business
                  </h2>
                </div>
                <div className="w-full lg:w-5/12">
                  <p className="mb-6 text-lg leading-relaxed text-[#FBFBF9]">
                    Explore specs, compare models, and choose
                    <br className="hidden lg:inline" /> the device that fits
                    your scale.
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <AnimatedSlideButton
                      icon={<Icon icon={bag4Linear} width={24} height={24} />}
                      text="Explore Online Store"
                      className="inline-flex max-w-max rounded-lg border border-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#FBFBF9] hover:bg-[#FBFBF9] hover:text-[#25276C]"
                      onClick={() => alert("Online Store is coming soon!")}
                    />
                    <AnimatedSlideButton
                      icon={<Icon icon={arrowRight} width={24} height={24} />}
                      text="Contact Us"
                      className="inline-flex max-w-max rounded-lg border border-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#FBFBF9] hover:bg-[#FBFBF9] hover:text-[#25276C]"
                      variant="link"
                      href="/contact"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-8xl mx-auto mb-20">
            <div className="grid items-start gap-12 xl:grid-cols-[1fr_2fr]">
              <div>
                <h2 className="text-4xl leading-tight font-normal text-[#080808] xl:text-5xl">
                  Explore More
                  <span className="xl:hidden">&nbsp;</span>
                  <br className="hidden xl:inline" />
                  on the Our
                  <span className="xl:hidden">&nbsp;</span>
                  <br className="hidden xl:inline" />
                  Products Page
                </h2>
              </div>

              <div className="flex flex-col gap-2 lg:flex-row xl:justify-end">
                <div className="group relative h-[400px] overflow-hidden rounded-xl lg:w-[400px]">
                  <Image
                    src={Images.ExtraImages.DPBXDevicesImg.src}
                    placeholder="blur"
                    blurDataURL={Images.ExtraImages.DPBXDevicesImg.blurDataURL}
                    alt="DPBX Device"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <motion.div
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    className="group: absolute inset-0 flex flex-col justify-between p-10"
                  >
                    <h3 className="text-3xl font-medium text-white lg:text-4xl">
                      DPBX Devices
                    </h3>
                    <div className="flex justify-start">
                      <HoverRevealButton
                        icon={<Icon icon={arrowRight} width={24} height={24} />}
                        text="Explore"
                        className="hidden max-w-max items-center rounded-lg bg-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#1C1E55] transition-colors hover:bg-[#E5E5E5] xl:flex"
                        variant="link"
                        href="/our-products/dpbx-devices"
                        parentControlled
                      />
                      <Link
                        href="/our-products/dpbx-devices"
                        className="flex max-w-max items-center gap-2 rounded-lg bg-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#1C1E55] transition-colors hover:bg-[#E5E5E5] xl:hidden"
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

                <div className="group relative h-[400px] overflow-hidden rounded-xl lg:w-[400px]">
                  <Image
                    src={Images.ExtraImages.SoftphoneImg.src}
                    placeholder="blur"
                    blurDataURL={Images.ExtraImages.SoftphoneImg.blurDataURL}
                    alt="Softphone App"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <motion.div
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    className="group: absolute inset-0 flex flex-col justify-between p-10"
                  >
                    <h3 className="text-3xl font-medium text-white lg:text-4xl">
                      Softphone
                    </h3>
                    <div className="flex justify-start">
                      <HoverRevealButton
                        icon={<Icon icon={arrowRight} width={24} height={24} />}
                        text="Explore"
                        className="hidden max-w-max items-center rounded-lg bg-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#1C1E55] transition-colors hover:bg-[#E5E5E5] xl:flex"
                        variant="link"
                        href="/our-products/softphone"
                        parentControlled
                      />
                      <Link
                        href="/our-products/softphone"
                        className="flex max-w-max items-center gap-2 rounded-lg bg-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#1C1E55] transition-colors hover:bg-[#E5E5E5] xl:hidden"
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
        <div className="w-full bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)]">
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}
