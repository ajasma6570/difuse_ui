import React from "react";
import AnimatedSlideButton from "../AnimatedSlideButton";
import { PiBag } from "react-icons/pi";
import { FiArrowRight } from "react-icons/fi";
import FloatingTogglePanel from "@/components/FloatingPanel";
import Image from "next/image";
import Navbar from "../Navbar";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      <Image
        src="/images/intro.jpg"
        alt="Background"
        quality={100}
        fill
        className="-z-10 object-cover hidden lg:block"
        priority
      />

      <Image
        src="/images/intro_mobile.jpg"
        alt="Background"
        quality={100}
        fill
        className="-z-10 object-cover lg:hidden"
        priority
      />

      <div className="relative z-10 px-6 lg:px-8 xl:px-11 py-7 lg:py-12 flex flex-col min-h-screen">
        <Navbar />

        {/* Main content container - centered vertically */}

        <div className="flex-1 flex lg:items-center justify-center ">
          <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 space-x-20 xl:space-x-28 2xl:space-x-32 w-full">
            {/* Left side - Keywords list */}
            <ul className="flex space-x-4 lg:flex-col flex-row text-[23px] text-[#080809] tracking-[-0.05em] leading-7 font-normal flex-shrink-0 mt-4">
              <li>Compact</li>
              <li>Powerful</li>
              <li>Seamless</li>
            </ul>

            {/* Middle - Main content */}
            <div className=" w-full flex-grow flex flex-col lg:flex-row justify-between">
              <div className="space-y-4">
                <h1 className="text-[42px] sm:text-6xl md:text-[70px] text-[#080809] leading-tight tracking-[-0.05em]">
                  Rebuilding the <br /> Network Stack. <br /> One Box at a Time.
                </h1>
                <p className="text-[20px] font-extralight leading-8 w-full sm:w-3/4 xl:max-w-[800px] text-[#2A2A2A]">
                  We build intelligent router platforms that unify networking
                  and communication — modular, self-hosted, and built for the
                  next decade of digital independence.
                </p>
                <div className="mt-10 flex gap-4 lg:flex-row flex-col ">
                  <AnimatedSlideButton
                    icon={<PiBag className="h-6 w-6" />}
                    text="Online Store"
                    className="inline-flex text-[#1C1E55] hover:bg-[#1C1E55] hover:text-white py-4 px-[18px] rounded-lg bg-[#FBFBF9] text-xl leading-7 tracking-[-0.05em] font-normal"
                  />
                  <AnimatedSlideButton
                    icon={<FiArrowRight className="h-6 w-6" />}
                    text="Become a Partner"
                    className="inline-flex hover:bg-[#1C1E55] hover:text-[#FBFBF9] px-6 py-4 rounded-lg text-xl leading-7 tracking-[-0.05em] font-normal"
                  />
                </div>
              </div>
              <div className="flex justify-end mb-20 lg:mt-4">
                <FloatingTogglePanel />
              </div>
            </div>

            {/* Right side - Floating Toggle Panel */}
          </div>
        </div>
      </div>
    </section>
  );
}
