"use client";

import React from "react";
import AnimatedSlideButton from "../common/AnimatedSlideButton";
import FloatingTogglePanel from "@/lib/components/common/FloatingPanel";
import { Icon } from "@iconify/react/dist/offline";
import bag4Linear from "@iconify/icons-solar/bag-4-linear";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import Image from "next/image";
import IntroDesktop from "$/images/intro.webp";
import IntroMobile from "$/images/intro_mobile.webp";
import PageTransition from "../common/PageTransition";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col">
      <picture>
        <source media="(max-width: 1024px)" srcSet={IntroMobile.src} />
        <Image
          src={IntroDesktop.src}
          alt="Hero"
          fill
          quality={100}
          className="object-cover"
          priority
        />
      </picture>

      <PageTransition motionKey="home-hero-section">
        <div className="relative z-10 flex min-h-screen flex-col px-6 py-7 lg:px-8 lg:py-12">
          <div className="mt-14 flex flex-1 justify-center lg:mt-0 lg:items-center">
            <div className="max-w-10xl mx-auto flex w-full flex-col space-y-6 space-x-20 lg:flex-row lg:items-start lg:space-y-0 xl:space-x-28 2xl:space-x-32">
              <ul className="mt-4 flex flex-shrink-0 flex-row space-x-4 text-xl leading-7 font-normal tracking-tighter text-[#080809] lg:flex-col lg:text-2xl">
                <li>Compact</li>
                <li>Powerful</li>
                <li>Seamless</li>
              </ul>

              <div className="flex w-full flex-grow flex-col justify-between lg:flex-row">
                <div className="space-y-6">
                  <h1 className="text-[clamp(2.4rem,4vw,4.5rem)] leading-tight tracking-tighter text-[#080809]">
                    Rebuilding the <br /> Network Stack. <br /> One Box at a
                    Time.
                  </h1>
                  <p className="w-full text-lg leading-8 font-extralight text-[#2A2A2A] sm:w-3/4 lg:max-w-3xl lg:text-xl xl:max-w-4xl">
                    We build intelligent router platforms that unify networking
                    and communication — modular, self-hosted, and built for the
                    next decade of digital independence.
                  </p>

                  <div className="mt-10 flex flex-col gap-4 lg:flex-row">
                    {/* <AnimatedSlideButton
                      icon={<Icon icon={bag4Linear} width={24} height={24} />}
                      text="Online Store"
                      className="inline-flex max-w-max rounded-lg bg-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#1C1E55] hover:bg-[#1C1E55] hover:text-white"
                      variant="link"
                      href="/online-store"
                    /> */}
                    <AnimatedSlideButton
                      icon={<Icon icon={arrowRight} width={24} height={24} />}
                      text="Become a Partner"
                      className="inline-flex max-w-max rounded-lg p-5 text-xl tracking-[-0.05em] hover:bg-[#1C1E55] hover:text-[#FBFBF9]"
                      variant="link"
                      href="/become-a-partner"
                    />
                  </div>
                </div>
                <div className="mb-32 flex justify-end lg:mt-4 lg:mb-20">
                  <FloatingTogglePanel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </section>
  );
}
