"use client";

import AnimatedSlideButton from "@/components/common/AnimatedSlideButton";
import React from "react";
import Image from "next/image";
import BannerDesktop from "$/images/common/img.png";
import BannerMobile from "$/images/common/img_sm.png";
import ProgramDesktop from "$/images/common/img_2.png";
import PartnerDesktop from "$/images/common/img_3.png";
import Footer from "@/components/common/Footer";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import { Vectors } from "@/assets/vectors";

export default function page() {
  const partnerPrivileges = [
    {
      title: "Premium Support",
      description: "Experience dedicated assistance and priority service",
      icon: Vectors.Handshake,
    },
    {
      title: "Partner Discounts",
      description: "Access discounted rates tailored to our valued partners",
      icon: Vectors.MehFace,
    },
    {
      title: "Exclusive Benefits",
      description:
        "Experience cutting-edge features before anyone else and shape its future",
      icon: Vectors.HandStar,
    },
  ];

  const support = [
    {
      title: "Early access to Innovative features",
      icon: Vectors.HourglassCheck,
    },
    { title: "Customized Partner Dashboard", icon: Vectors.Grid },
    { title: "Exclusive resources for mutual growth", icon: Vectors.ChartUp },
  ];
  return (
    <main className="mt-28 min-h-screen flex flex-col items-center px-6 ">
      <div className="w-full md:max-w-8xl pb-16 space-y-20">
        <div className="relative flex justify-center">
          <div className="relative w-full h-[900px] md:max-w-8xl rounded-lg overflow-hidden shadow-sm">
            <picture>
              <source media="(max-width: 1024px)" srcSet={BannerMobile.src} />
              <Image
                src={BannerDesktop.src}
                alt="Become a Partner Banner"
                fill
                quality={100}
                className="object-cover"
                priority
              />
            </picture>
          </div>

          <div className="absolute inset-0 flex flex-col mb-20 items-center py-20 px-8 lg:p-20 space-y-6">
            <p className="text-[#25276C] text-2xl lg:text-3xl font-normal text-center">
              Become a Partner
            </p>
            <p className="text-[#080808] text-4xl lg:text-6xl leading-tight text-center">
              Collaborative <br />
              Frontiers
            </p>
            <p className="text-[#080808] text-xl leading-snug text-center lg:w-lg">
              Join the Difuse Partnership Program for a synergy of growth,
              innovation, and shared expertise in our collaborative ecosystem.
            </p>
            <AnimatedSlideButton
              icon={<Icon icon={arrowRight} width={24} height={24} />}
              text="Apply Now"
              className="items-center gap-2 hover:bg-[#25276C] hover:text-[#FBFBF9] text-[#25276C] border border-[#25276C] transition-colors px-6 py-4 rounded-lg text-lg lg:text-xl font-medium inline-flex"
              variant="link"
              href="/contact"
            />
          </div>
        </div>

        <section className="rounded-2xl bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] p-8 py-14 sm:p-20 text-white shadow-lg">
          <h2 className="text-3xl sm:text-6xl font-normal text-center text-[#FBFBF9]">
            Experience Partner Privileges
          </h2>
          <p className="mt-10 text-center text-sm sm:text-lg text-[#FBFBF9] max-w-2xl mx-auto">
            Step into a realm of exclusive benefits by becoming our valued
            partner. Elevate your collaborative journey towards mutual growth.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 mt-10">
            {partnerPrivileges.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] "
              >
                <p className="text-3xl lg:text-4xl  text-[#080808]">
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
                  <p className="text-lg text-[#080808]">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-6xl mx-auto my-40">
          <h3 className="text-4xl leading-snug lg:text-6xl font-normal text-[#080808] mb-6 lg:mb-4">
            Partner with Our Program
            <span className="md:hidden">&nbsp;</span>
            <br className="hidden md:inline" />
            for Unmatched Support
          </h3>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center lg:mt-20">
            <div>
              <p className="text-[#2A2A2A] font-light text-xl mb-10">
                As a valued partner, you can count on us for dedicated support,
                including:
              </p>

              <ul className="space-y-2">
                {support.map((f) => (
                  <li
                    key={f.title}
                    className="flex items-center justify-between gap-6 bg-[#F4F4F4] p-10 rounded-lg h-[150px]"
                  >
                    <div>
                      <p className="text-lg font-medium text-gray-900 w-full">
                        {f.title}
                      </p>
                    </div>{" "}
                    <div className="lg:w-full flex items-center justify-end">
                      <Image
                        src={f.icon.src}
                        alt={`${f.title}_icon`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <Image
                src={ProgramDesktop.src}
                placeholder="blur"
                blurDataURL={ProgramDesktop.blurDataURL}
                alt="Two professionals discussing partner onboarding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </section>
        </div>

        <section>
          <div className="relative h-[900px] lg:h-[800px] w-full rounded-lg overflow-hidden">
            <Image
              src={PartnerDesktop.src}
              alt="Two professionals discussing partner onboarding"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 w-full">
              <div className=" flex flex-col p-8 lg:p-20 justify-center h-full space-y-6 lg:w-7/12 ml-auto">
                <p className="text-[#FBFBF9] text-4xl lg:text-6xl leading-tight tracking-wide font-normal">
                  Unlock Savings with <br />
                  Partner Discounts
                </p>
                <p className="text-lg lg:text-md text-[#FBFBF9] font-light ">
                  As a valued partner, enjoy exclusive discounts tailored just
                  for you, including:
                </p>

                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="bg-[#FBFBF9] h-[200px] space-y-6 p-10 flex gap-5 rounded-lg w-full">
                    <p className="text-[#2A2A2A] text-xl md:text-lg font-normal w-full md:w-auto">
                      Exclusive rates on our devices and services
                    </p>
                    <p className="flex justify-end h-full items-end">
                      {" "}
                      <Image
                        src={Vectors.Percent.src}
                        alt="percentage_icon"
                        width={45}
                        height={45}
                        className="object-contain"
                      />
                    </p>
                  </div>
                  <div className="bg-[#FBFBF9] h-[200px] space-y-6 p-10 flex gap-5 rounded-lg w-full">
                    <p className="text-[#2A2A2A] text-xl md:text-lg font-normal  w-full md:w-auto">
                      Partner-specific promotions for added value
                    </p>
                    <p className="flex justify-end h-full items-end">
                      {" "}
                      <Image
                        src={Vectors.Star.src}
                        alt="percentage_icon"
                        width={45}
                        height={45}
                        className="object-contain"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto my-16 lg:my-40 flex flex-col lg:flex-row items-center gap-4">
          <p className="text-[#080808] text-4xl lg:text-6xl font-normal leading-tight ">
            Ready to Build the Future Together?
          </p>

          <div className="space-y-6">
            <p className="text-[#2A2A2A] text-lg font-light ">
              Become a Difuse Partner today and shape how modern businesses
              connect, scale, and operate.
            </p>
            <AnimatedSlideButton
              icon={<Icon icon={arrowRight} width={24} height={24} />}
              text="Apply Now"
              className="inline-flex text-[#1C1E55] hover:bg-[#1C1E55] border border-[#1C1E55] hover:text-white rounded-lg bg-[#FBFBF9] text-xl tracking-[-0.05em] p-5 max-w-max "
              variant="link"
              href="/contact"
            />
          </div>
        </section>
      </div>{" "}
      <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full mt-5">
        <Footer />
      </div>
    </main>
  );
}
