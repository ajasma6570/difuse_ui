"use client";

import AnimatedSlideButton from "@/lib/components/common/AnimatedSlideButton";
import React from "react";
import Image from "next/image";
import BannerDesktop from "$/images/common/img.webp";
import BannerMobile from "$/images/common/img_sm.webp";
import ProgramDesktop from "$/images/common/img_2.webp";
import PartnerDesktop from "$/images/common/img_3.webp";
import Footer from "@/lib/components/common/Footer";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import { Vectors } from "@/assets/vectors";
import PageTransition from "@/lib/components/common/PageTransition";

export default function BecomeAPartner() {
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
    <PageTransition motionKey="become-a-partner-page-wrapper">
      <div className="mt-28 flex min-h-screen flex-col items-center px-6">
        <div className="md:max-w-8xl w-full space-y-20 pb-16">
          <div className="relative flex justify-center">
            <div className="md:max-w-8xl relative h-[900px] w-full overflow-hidden rounded-lg shadow-sm">
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

            <div className="absolute inset-0 mb-20 flex flex-col items-center space-y-6 px-8 py-20 lg:p-20">
              <p className="text-center text-2xl font-normal text-[#25276C] lg:text-3xl">
                Become a Partner
              </p>
              <p className="text-center text-4xl leading-tight text-[#080808] lg:text-6xl">
                Collaborative <br />
                Frontiers
              </p>
              <p className="text-center text-xl leading-snug text-[#080808] lg:w-lg">
                Join the Difuse Partnership Program for a synergy of growth,
                innovation, and shared expertise in our collaborative ecosystem.
              </p>
              <AnimatedSlideButton
                icon={<Icon icon={arrowRight} width={24} height={24} />}
                text="Apply Now"
                className="inline-flex items-center gap-2 rounded-lg border border-[#25276C] px-6 py-4 text-lg font-medium text-[#25276C] transition-colors hover:bg-[#25276C] hover:text-[#FBFBF9] lg:text-xl"
                variant="link"
                href="/contact"
              />
            </div>
          </div>

          <section className="rounded-2xl bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] p-8 py-14 text-white shadow-lg sm:p-20">
            <h2 className="text-center text-3xl font-normal text-[#FBFBF9] sm:text-6xl">
              Experience Partner Privileges
            </h2>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-[#FBFBF9] sm:text-lg">
              Step into a realm of exclusive benefits by becoming our valued
              partner. Elevate your collaborative journey towards mutual growth.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-2 2xl:grid-cols-3">
              {partnerPrivileges.map((f) => (
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
                    <p className="text-lg text-[#080808]">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mx-auto my-40 max-w-6xl">
            <h3 className="mb-6 text-4xl leading-snug font-normal text-[#080808] lg:mb-4 lg:text-6xl">
              Partner with Our Program
              <span className="md:hidden">&nbsp;</span>
              <br className="hidden md:inline" />
              for Unmatched Support
            </h3>

            <section className="grid grid-cols-1 items-center gap-2 md:grid-cols-2 lg:mt-20">
              <div>
                <p className="mb-10 text-xl font-light text-[#2A2A2A]">
                  As a valued partner, you can count on us for dedicated
                  support, including:
                </p>

                <ul className="space-y-2">
                  {support.map((f) => (
                    <li
                      key={f.title}
                      className="flex h-[150px] items-center justify-between gap-6 rounded-lg bg-[#F4F4F4] p-10"
                    >
                      <div>
                        <p className="w-full text-lg font-medium text-gray-900">
                          {f.title}
                        </p>
                      </div>{" "}
                      <div className="flex items-center justify-end lg:w-full">
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

              <div className="relative h-full w-full overflow-hidden rounded-2xl">
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
            <div className="relative h-[900px] w-full overflow-hidden rounded-lg lg:h-[800px]">
              <Image
                src={PartnerDesktop.src}
                alt="Two professionals discussing partner onboarding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-0 w-full">
                <div className="ml-auto flex h-full flex-col justify-center space-y-6 p-8 lg:w-7/12 lg:p-20">
                  <p className="text-4xl leading-tight font-normal tracking-wide text-[#FBFBF9] lg:text-6xl">
                    Unlock Savings with <br />
                    Partner Discounts
                  </p>
                  <p className="lg:text-md text-lg font-light text-[#FBFBF9]">
                    As a valued partner, enjoy exclusive discounts tailored just
                    for you, including:
                  </p>

                  <div className="flex flex-col gap-2 lg:flex-row">
                    <div className="flex h-[200px] w-full gap-5 space-y-6 rounded-lg bg-[#FBFBF9] p-10">
                      <p className="w-full text-xl font-normal text-[#2A2A2A] md:w-auto md:text-lg">
                        Exclusive rates on our devices and services
                      </p>
                      <p className="flex h-full items-end justify-end">
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
                    <div className="flex h-[200px] w-full gap-5 space-y-6 rounded-lg bg-[#FBFBF9] p-10">
                      <p className="w-full text-xl font-normal text-[#2A2A2A] md:w-auto md:text-lg">
                        Partner-specific promotions for added value
                      </p>
                      <p className="flex h-full items-end justify-end">
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

          <section className="mx-auto my-16 flex max-w-6xl flex-col items-center gap-4 lg:my-40 lg:flex-row">
            <p className="text-4xl leading-tight font-normal text-[#080808] lg:text-6xl">
              Ready to Build the Future Together?
            </p>

            <div className="space-y-6">
              <p className="text-lg font-light text-[#2A2A2A]">
                Become a Difuse Partner today and shape how modern businesses
                connect, scale, and operate.
              </p>
              <AnimatedSlideButton
                icon={<Icon icon={arrowRight} width={24} height={24} />}
                text="Apply Now"
                className="inline-flex max-w-max rounded-lg border border-[#1C1E55] bg-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#1C1E55] hover:bg-[#1C1E55] hover:text-white"
                variant="link"
                href="/contact"
              />
            </div>
          </section>
        </div>{" "}
      </div>{" "}
      <div className="mt-5 w-full bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)]">
        <Footer type="product" />
      </div>
    </PageTransition>
  );
}
