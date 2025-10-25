"use client";

import AnimatedSlideButton from "@/lib/components/common/AnimatedSlideButton";
import Footer from "@/lib/components/common/Footer";
import Image from "next/image";
import React from "react";
import { Images } from "@/assets/our-products";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import { motion } from "motion/react";
import HoverRevealButton from "@/lib/components/common/HoverRevealButton";
import Link from "next/link";
import { Vectors } from "@/assets/vectors";
import PageTransition from "@/lib/components/common/PageTransition";

export default function Softphone() {
  const features = [
    {
      title: "Open Source",
      desc: "Difuse Phone is open source under GPLv3, ensuring transparency and security",
      icon: Vectors.Magnet,
    },
    {
      title: "Free Push Notifications",
      desc: "Get notified of calls even when the app is closed or in the background without draining your battery",
      icon: Vectors.Bell,
    },
    {
      title: "Easy to Deploy",
      desc: "Difuse Phone is easy to deploy and manage, with support for QR provisioning and other methods",
      icon: Vectors.ArrowUp,
    },
  ];

  return (
    <PageTransition motionKey="our-products-softphone-page-wrapper">
      <div className="flex min-h-screen flex-col items-center justify-center pt-14">
        <div className="md:max-w-8xl w-full px-6 py-16">
          <div className="mx-auto w-full space-y-6 text-center md:max-w-6xl">
            <p className="text-3xl tracking-wide text-[#25276C]">
              Our Products {">"}{" "}
              <span className="text-[#080808]">Softphone</span>
            </p>
            <h1 className="text-4xl leading-tight font-normal text-[#080808] md:text-7xl">
              Free, Open and
              <span className="md:hidden">&nbsp;</span>
              <br className="hidden md:inline" />
              Polished Softphone
            </h1>
            <p className="mx-auto max-w-4xl text-center text-lg font-light text-[#2A2A2A]">
              Make high-quality voice and SMS calls securely over the
              internet—right from your desktop, tablet, or mobile device. Difuse
              Phone connects seamlessly with your existing Difuse PBX or DMSBG
              systems, offering a unified, self-hosted communication experience
              without relying on third-party cloud services.
            </p>
          </div>

          <div className="relative mt-20 flex justify-center">
            <div className="md:max-w-8xl relative h-[650px] w-full overflow-hidden rounded-lg shadow-sm">
              <picture>
                <source
                  media="(max-width: 1024px)"
                  srcSet={Images.Softphone.Banner.Mobile.src}
                />
                <Image
                  src={Images.Softphone.Banner.Desktop.src}
                  alt="Softphone Banner"
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
                  href="/contact Us"
                />
                <AnimatedSlideButton
                  icon={<Icon icon={arrowRight} width={24} height={24} />}
                  text="Download App Now"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#FBFBF9] px-6 py-4 text-lg font-medium text-[#FBFBF9] transition-colors hover:bg-[#FBFBF9] hover:text-[#25276C] lg:text-xl"
                  variant="link"
                  href="/online-store"
                />
              </div>
            </div>
          </div>
          <section className="py-12">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mb-10 text-center">
                <h2 className="text-3xl leading-tight font-medium text-zinc-900 md:text-6xl">
                  Meet Difuse Phone:
                  <br className="hidden md:block" />
                  The Platform–Native Softphone
                </h2>
              </div>

              <div className="grid h-full grid-cols-1 gap-2 lg:h-[800px] lg:grid-cols-3">
                <div className="flex h-full flex-col gap-2">
                  <div className="flex h-[350px] flex-col justify-center space-y-4 rounded-xl bg-[#F4F4F4] p-6 lg:h-5/12 xl:p-16">
                    <p className="text-4xl text-[#25276C]">
                      Seamless Integration
                    </p>
                    <p className="text-lg font-light text-[#2A2A2A]">
                      Although the client can be used with any SIP server, it
                      integrates seamlessly with Difuse offering free PUSH
                      notifications among other awesome features
                    </p>
                  </div>
                  <div className="relative h-[500px] overflow-hidden rounded-xl bg-[#F4F4F4] lg:h-7/12">
                    <Image
                      src={Images.Softphone.Extras.MasonryImage.src}
                      placeholder="blur"
                      blurDataURL={
                        Images.Softphone.Extras.MasonryImage.blurDataURL
                      }
                      alt="Seamless Integration"
                      fill
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="relative h-[900px] overflow-hidden rounded-xl bg-[#F4F4F4] lg:h-full">
                  <Image
                    src={Images.Softphone.Main.Desktop.src}
                    placeholder="blur"
                    blurDataURL={Images.Softphone.Main.Desktop.blurDataURL}
                    alt="Difuse Phone App"
                    fill
                    className="h-auto w-full object-contain p-6 xl:p-10"
                    priority
                  />
                </div>
                <div className="flex h-full flex-col gap-2">
                  <div className="flex h-[600px] flex-col items-center justify-center space-y-4 rounded-xl bg-[#F4F4F4] p-4 lg:h-7/12 xl:p-6">
                    <Image
                      src={Images.Softphone.Extras.GooglePlay.src}
                      placeholder="blur"
                      blurDataURL={
                        Images.Softphone.Extras.GooglePlay.blurDataURL
                      }
                      alt="Get it on Google Play"
                      height={40}
                      width={200}
                      className="object-contain"
                      priority
                    />

                    {/* QR Code */}
                    <div className="">
                      <Image
                        src={Images.Softphone.Extras.QRCode.src}
                        placeholder="blur"
                        blurDataURL={Images.Softphone.Extras.QRCode.blurDataURL}
                        alt="QR Code"
                        height={200}
                        width={200}
                        className="object-contain"
                        priority
                      />
                    </div>

                    {/* Text */}
                    <p className="text-center text-xl leading-tight font-medium text-[#080808]">
                      Get the App,
                      <br />
                      Just Scan &
                      <br />
                      Install
                    </p>
                  </div>

                  <div className="flex h-[350px] flex-col justify-center space-y-4 rounded-xl bg-[#F4F4F4] p-6 lg:h-5/12 xl:p-16">
                    {" "}
                    <p className="text-3xl text-[#25276C]">One-Click Setup</p>
                    <p className="text-lg font-light text-[#2A2A2A]">
                      Difuse Phone supports QR based provisioning among other
                      setup methods that makes setup a breeze for both users and
                      admins
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-8xl mx-auto mt-12">
            <div className="rounded-xl bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] p-6 py-14 md:p-20">
              <h2 className="mb-14 text-center text-6xl font-semibold text-white lg:mb-20">
                Key Features
              </h2>
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 2xl:grid-cols-3">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex min-h-[300px] flex-col justify-between rounded-xl bg-white p-8 lg:min-h-[320px]"
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
                  <h2 className="mb-4 text-4xl leading-snug font-medium xl:text-5xl">
                    Download and Install
                    <span className="lg:hidden">&nbsp;</span>
                    <br className="hidden lg:inline" />
                    Difuse Phone Today!
                  </h2>
                </div>
                <div className="w-full lg:w-5/12">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <AnimatedSlideButton
                      icon={<Icon icon={arrowRight} width={24} height={24} />}
                      text="Download App Now"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#FBFBF9] px-6 py-4 text-lg font-medium whitespace-nowrap text-[#FBFBF9] transition-colors hover:bg-[#FBFBF9] hover:text-[#25276C]"
                      variant="link"
                      href="/contact"
                    />
                    <AnimatedSlideButton
                      icon={<Icon icon={arrowRight} width={24} height={24} />}
                      text="Contact Us"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#FBFBF9] px-6 py-4 text-lg font-medium whitespace-nowrap text-[#FBFBF9] transition-colors hover:bg-[#FBFBF9] hover:text-[#25276C]"
                      variant="link"
                      href="/contact"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-8xl mx-auto mb-20">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr]">
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

              <div className="flex flex-col justify-end gap-2 lg:flex-row">
                <div className="group relative h-[400px] overflow-hidden rounded-xl lg:w-[400px]">
                  <Image
                    src={Images.ExtraImages.DMSBGDevicesImg.src}
                    placeholder="blur"
                    blurDataURL={Images.ExtraImages.DMSBGDevicesImg.blurDataURL}
                    alt="DMSBG Devices"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <motion.div
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    className="absolute inset-0 flex flex-col justify-between p-10"
                  >
                    <h3 className="text-5xl font-medium text-white">
                      DMSBG Devices
                    </h3>
                    <div className="flex justify-start">
                      <HoverRevealButton
                        icon={<Icon icon={arrowRight} width={24} height={24} />}
                        text="Explore"
                        className="hidden max-w-max items-center rounded-lg bg-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#1C1E55] transition-colors hover:bg-[#E5E5E5] xl:flex"
                        variant="link"
                        href="/our-products/dmsbg-devices"
                        parentControlled
                      />
                      <Link
                        href="/our-products/dmsbg-devices"
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

                <div className="group relative h-[400px] w-[400px] overflow-hidden rounded-xl">
                  <Image
                    src={Images.ExtraImages.DPBXDevicesImg.src}
                    alt="DPBX Device"
                    placeholder="blur"
                    blurDataURL={Images.ExtraImages.DPBXDevicesImg.blurDataURL}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <motion.div
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    className="absolute inset-0 flex flex-col justify-between p-10"
                  >
                    <h3 className="text-5xl font-medium text-white">
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
