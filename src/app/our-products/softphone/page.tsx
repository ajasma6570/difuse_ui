"use client";

import AnimatedSlideButton from "@/components/AnimatedSlideButton";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { Images } from "@/assets/our-products";
import Banner from "@/components/utils/Banner";

export default function page() {
  const features = [
    {
      title: "Open Source",
      desc: "Difuse Phone is open source under GPLv3, ensuring transparency and security",
    },
    {
      title: "Free Push Notifications",
      desc: "Get notified of calls even when the app is closed or in the background without draining your battery",
    },
    {
      title: "Easy to Deploy",
      desc: "Difuse Phone is easy to deploy and manage, with support for QR provisioning and other methods",
    },
  ];

  return (
    <main className="pt-14 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full md:max-w-8xl px-6 py-16">
        <div className="text-center md:max-w-6xl w-full mx-auto space-y-6">
          <p className="text-3xl tracking-wide text-[#25276C]">
            Our Products {">"} <span className="text-[#080808]">Softphone</span>
          </p>
          <h1 className="text-4xl md:text-7xl font-normal leading-tight text-[#080808]">
            Free, Open and
            <br className="hidden md:block" />
            Polished Softphone
            <br className="hidden md:block" />
          </h1>
          <p className="text-lg text-center font-light text-[#2A2A2A] max-w-4xl mx-auto">
            Make high-quality voice and SMS calls securely over the
            internet—right from your desktop, tablet, or mobile device. Difuse
            Phone connects seamlessly with your existing Difuse PBX or DMSBG
            systems, offering a unified, self-hosted communication experience
            without relying on third-party cloud services.
          </p>
        </div>

        <div className="relative mt-20 flex justify-center">
          <div className="relative w-full h-[650px] md:max-w-8xl rounded-lg overflow-hidden shadow-sm">
            <Banner
              mobile={Images.Softphone.Banner.Mobile.src}
              desktop={Images.Softphone.Banner.Desktop.src}
              desktopBlur={Images.Softphone.Banner.Desktop.blurDataURL}
              mobileBlur={Images.Softphone.Banner.Mobile.blurDataURL}
              alt="Softphone Banner"
            />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end mb-20 items-end">
            <div className="space-x-4 justify-center mx-auto gap-4 flex flex-col sm:flex-row items-center">
              <AnimatedSlideButton
                icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                text="Contact Us"
                className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-4 rounded-lg text-lg lg:text-xl font-medium inline-flex"
                variant="link"
                href="/contact Us"
              />
              <AnimatedSlideButton
                icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                text="Download App Now"
                className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-4 rounded-lg text-lg lg:text-xl font-medium inline-flex"
                variant="link"
                href="/online-store"
              />
            </div>
          </div>
        </div>
        <section className=" py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-6xl font-medium text-zinc-900 leading-tight">
                Meet Difuse Phone:
                <br className="hidden md:block" />
                The Platform–Native Softphone
              </h2>
            </div>

            <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 h-full lg:h-[800px]">
              <div className="flex flex-col gap-2 h-full ">
                <div className="bg-[#F4F4F4] h-[350px] lg:h-5/12 rounded-xl flex flex-col justify-center space-y-4 p-6 xl:p-16">
                  <p className="text-[#25276C] text-4xl">
                    Seamless Integration
                  </p>
                  <p className="text-[#2A2A2A] text-lg font-light ">
                    Although the client can be used with any SIP server, it
                    integrates seamlessly with Difuse offering free PUSH
                    notifications among other awesome features
                  </p>
                </div>
                <div className="bg-[#F4F4F4] h-[500px] lg:h-7/12 rounded-xl relative overflow-hidden">
                  <Image
                    src={Images.Softphone.Extras.MasonryImage.src}
                    placeholder="blur"
                    blurDataURL={
                      Images.Softphone.Extras.MasonryImage.blurDataURL
                    }
                    alt="Seamless Integration"
                    fill
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="bg-[#F4F4F4] rounded-xl relative overflow-hidden h-[900px] lg:h-full">
                <Image
                  src={Images.Softphone.Main.Desktop.src}
                  placeholder="blur"
                  blurDataURL={Images.Softphone.Main.Desktop.blurDataURL}
                  alt="Difuse Phone App"
                  fill
                  className="w-full h-auto object-contain p-6 xl:p-10"
                  priority
                />
              </div>
              <div className="flex flex-col gap-2 h-full">
                <div className="bg-[#F4F4F4] h-[600px] lg:h-7/12 rounded-xl p-4 xl:p-6 flex flex-col items-center justify-center space-y-4">
                  <Image
                    src={Images.Softphone.Extras.GooglePlay.src}
                    placeholder="blur"
                    blurDataURL={Images.Softphone.Extras.GooglePlay.blurDataURL}
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
                  <p className="text-[#080808] font-medium text-center text-xl leading-tight">
                    Get the App,
                    <br />
                    Just Scan &
                    <br />
                    Install
                  </p>
                </div>

                <div className="bg-[#F4F4F4] h-[350px] lg:h-5/12 rounded-xl flex flex-col justify-center space-y-4 p-6 xl:p-16">
                  {" "}
                  <p className="text-[#25276C] text-3xl">One-Click Setup</p>
                  <p className="text-[#2A2A2A] text-lg font-light ">
                    Difuse Phone supports QR based provisioning among other
                    setup methods that makes setup a breeze for both users and
                    admins
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-8xl mx-auto mt-12 ">
          <div className="rounded-xl p-20 bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] ">
            <h2 className="font-semibold mb-20 text-white text-6xl text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 ">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] lg:min-h-[300px]"
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
          <div className="rounded-xl bg-[linear-gradient(to_right,black_0%,#25276C_100%)] text-white p-8 md:p-12 h-[350px] flex flex-col justify-center ">
            <div className="flex gap-8 items-center">
              <div className="w-7/12">
                <h2 className="text-3xl md:text-5xl font-medium leading-snug mb-4">
                  Download and Install
                  <br />
                  Difuse Phone Today!
                </h2>
              </div>
              <div className="w-5/12">
                <div className="flex flex-col sm:flex-row gap-3">
                  <AnimatedSlideButton
                    icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                    text="Download App Now"
                    className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-4 rounded-lg text-lg whitespace-nowrap font-medium inline-flex"
                    variant="link"
                    href="/contact"
                  />
                  <AnimatedSlideButton
                    icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                    text="Contact Us"
                    className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-4 rounded-lg text-lg whitespace-nowrap font-medium inline-flex"
                    variant="link"
                    href="/contact"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-8xl mx-auto mb-20">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-6xl font-normal text-[#080808] leading-tight">
                Explore More
                <br />
                on the Our
                <br />
                Products Page
              </h2>
            </div>

            <div className="flex justify-end lg:flex-row flex-col gap-2">
              <div className="relative h-[400px] w-[400px] group overflow-hidden rounded-xl">
                <Image
                  src={Images.ExtraImages.DMSBGDevicesImg.src}
                  placeholder="blur"
                  blurDataURL={Images.ExtraImages.DMSBGDevicesImg.blurDataURL}
                  alt="DMSBG Devices"
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />

                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <h3 className="text-white text-5xl font-medium">
                    DMSBG Devices
                  </h3>
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-4 shadow-sm hover:translate-x-1 hover:translate-y-1 transition-transform">
                      <svg
                        className="w-5 h-5 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] w-[400px] group overflow-hidden rounded-xl">
                <Image
                  src={Images.ExtraImages.DPBXDevicesImg.src}
                  alt="DPBX Device"
                  placeholder="blur"
                  blurDataURL={Images.ExtraImages.DPBXDevicesImg.blurDataURL}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />

                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <h3 className="text-white text-5xl font-medium">
                    DPBX Devices
                  </h3>
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-4 shadow-sm hover:translate-x-1 hover:translate-y-1 transition-transform">
                      <svg
                        className="w-5 h-5 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
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
