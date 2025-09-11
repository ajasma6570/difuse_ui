import Image from "next/image";
import React from "react";
import AnimatedSlideButton from "@/components/AnimatedSlideButton";
import PingPongRow from "@/components/PingPongRow";
import { FaWifi } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { TbHeartRateMonitor } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";

export default function PlatformOverview() {
  return (
    <section className="py-20 lg:py-40 lg:max-w-[100rem] mx-auto px-6 lg:px-8 xl:px-16 space-y-20 lg:space-y-40">
      <div className="space-y-10 md:space-y-14">
        <p className="text-[#1C1E55] font-normal text-2xl lg:text-3xl">
          Join 1,500+ teams powering their networks, calls, and cloud with
          Difuse
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24">
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight text-black">
              The Unified Platform for Smarter Business{" "}
              <span className="inline-flex items-center gap-3 lg:gap-4">
                Infrastructure
                <Image
                  src="/images/img.png"
                  alt="Hero"
                  width={80}
                  height={80}
                  className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 object-contain"
                  priority
                />
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end ">
            <p className="text-lg font-light leading-relaxed text-gray-700 ">
              We believe business networks shouldn&#39;t rely on duct-taped
              hardware or third-party cloud dependency. Our platform brings
              together multi-service gateways, VoIP systems, and communication
              tools — all built for performance, simplicity, and ownership.
            </p>

            <div className="pt-4">
              <AnimatedSlideButton
                icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                text="Learn about company"
                className=" items-center gap-2 text-white bg-[#1C1E55] hover:bg-[#151347] transition-colors px-6 py-4 rounded-lg text-lg lg:text-xl font-medium hidden md:inline-flex"
              />
              <AnimatedSlideButton
                icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                text="Learn more"
                className="inline-flex items-center gap-2 text-white bg-[#1C1E55] hover:bg-[#151347] transition-colors px-6 py-4 rounded-lg text-lg lg:text-xl font-medium md:hidden"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 lg:py-28 max-w-[93rem] mx-auto min-h-screen rounded-xl bg-[linear-gradient(to_bottom,black_30%,#25276C_100%)]">
        <h2 className="text-white text-left lg:text-center text-3xl px-10">
          Why Difuse?
        </h2>
        <p className="text-white text-5xl 2xl:text-7xl text-left px-10 lg:text-center mt-16 leading-tight">
          Everything You Need. <br /> Built for Power Users.
        </p>

        <div className="max-w-7xl mx-auto mt-14 lg:mt-24 grid grid-cols-1 sm:grid-cols-12 gap-4 px-8">
          <div className="col-span-12 lg:col-span-4 bg-white rounded-xl space-y-6 p-10 flex justify-between flex-col">
            <p className="text-md lg:text-xl">
              Enhance your network&#39;s versatility with our intuitive
              gateways, designed for smooth, effortless connectivity and
              efficient performance.
            </p>

            <div className="flex items-center justify-center">
              <Image
                src="/images/img2.png"
                alt="Gateway"
                width={400}
                height={400}
              />
            </div>
            <FaWifi className="h-12 w-12" />
          </div>

          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] lg:min-h-[365px]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl">
                Unyielding Security
              </p>

              <div className="grid grid-cols-2">
                <p className="flex items-end justify-start">
                  <AiOutlineSecurityScan className="h-16 w-16" />
                </p>
                <p className="text-sm sm:text-xl">
                  Innovative, open-source-based protection with safe defaults
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] lg:min-h-[365px]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl">
                Stellar Performance
              </p>

              <div className="grid grid-cols-2">
                <p className="flex items-end justify-start">
                  <TbHeartRateMonitor className="h-16 w-16" />
                </p>
                <p className="text-sm sm:text-xl">
                  Engineered for optimal speed and enduring reliability
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] lg:min-h-[365px]">
              <p className="text-3xl lg:text-4xl 2xl:text-5xl">
                Constant Evolution
              </p>

              <div className="grid grid-cols-2">
                <p className="flex items-end justify-start">
                  <BsGraphUp className="h-16 w-16" />
                </p>
                <p className="text-sm sm:text-xl">
                  Regular updates and free security enhancements
                </p>
              </div>
            </div>

            <PingPongRow />
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
