import React from "react";
import AnimatedSlideButton from "../AnimatedSlideButton";
import FloatingTogglePanel from "@/components/FloatingPanel";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/offline";
import bag4Linear from "@iconify/icons-solar/bag-4-linear";
import arrowRight from "@iconify/icons-lucide/arrow-right";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* <Image
        src="/images/intro.jpg"
        alt="Background"
        quality={100}
        fill
        className="-z-10 object-cover hidden lg:block"
        priority
      /> */}

      <Image
        src="/images/intro_mobile.jpg"
        alt="Background"
        fill
        className="-z-10 object-cover lg:hidden"
        priority
      />
      <video
        src={"/videos/intro.mp4"}
        autoPlay
        loop
        muted
        poster="/images/intro.jpg"
        className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none hidden lg:block"
        playsInline
      />

      <div className="relative z-10 px-6 lg:px-8 py-7 lg:py-12 flex flex-col min-h-screen ">
        <div className="flex-1 flex lg:items-center justify-center mt-14 lg:mt-0 ">
          <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 space-x-20 xl:space-x-28 2xl:space-x-32 w-full max-w-10xl mx-auto">
            <ul className="flex space-x-4 lg:flex-col flex-row text-xl lg:text-2xl text-[#080809] tracking-tighter leading-7 font-normal flex-shrink-0 mt-4">
              <li>Compact</li>
              <li>Powerful</li>
              <li>Seamless</li>
            </ul>

            <div className=" w-full flex-grow flex flex-col lg:flex-row justify-between">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-6xl md:text-7xl text-[#080809] leading-tight tracking-tighter">
                  Rebuilding the <br /> Network Stack. <br /> One Box at a Time.
                </h1>
                <p className="text-lg lg:text-xl font-extralight leading-8 w-full sm:w-3/4 lg:max-w-3xl xl:max-w-4xl text-[#2A2A2A]">
                  We build intelligent router platforms that unify networking
                  and communication — modular, self-hosted, and built for the
                  next decade of digital independence.
                </p>

                <div className="mt-10 flex gap-4 lg:flex-row flex-col ">
                  <AnimatedSlideButton
                    icon={<Icon icon={bag4Linear} width={24} height={24} />}
                    text="Online Store"
                    className="inline-flex text-[#1C1E55] hover:bg-[#1C1E55] hover:text-white rounded-lg bg-[#FBFBF9] text-xl tracking-[-0.05em] p-5 max-w-max "
                    variant="link"
                    href="/online-store"
                  />
                  <AnimatedSlideButton
                    icon={<Icon icon={arrowRight} width={24} height={24} />}
                    text="Become a Partner"
                    className="inline-flex hover:bg-[#1C1E55] hover:text-[#FBFBF9] rounded-lg text-xl tracking-[-0.05em] p-5 max-w-max "
                    variant="link"
                    href="/become-a-partner"
                  />
                </div>
              </div>
              <div className="flex justify-end mb-32 lg:mb-20 lg:mt-4">
                <FloatingTogglePanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
