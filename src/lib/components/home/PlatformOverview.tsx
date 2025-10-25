import Image from "next/image";
import React from "react";
import AnimatedSlideButton from "@/lib/components/common/AnimatedSlideButton";
import PingPongRow from "@/lib/components/common/PingPongRow";
import { Vectors } from "@/assets/vectors";
import ProductGif from "$/gif/products.gif";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";

export default function PlatformOverview() {
  return (
    <section className="lg:max-w-8xl mx-auto w-full space-y-20 px-6 py-20 lg:space-y-40 lg:px-4 lg:py-40">
      <div className="space-y-10 md:space-y-14">
        <p className="text-2xl font-normal text-[#1C1E55] lg:text-3xl">
          Join 1,500+ teams powering their networks, calls, and cloud with
          Difuse
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-24">
          <div className="relative">
            <h2 className="text-4xl leading-tight font-normal tracking-tight text-black sm:text-5xl lg:text-5xl xl:text-6xl">
              The Unified Platform for Smarter Business{" "}
              <span className="inline-flex items-center gap-3 lg:gap-4">
                Infrastructure
                <Image
                  src={ProductGif.src}
                  alt="Hero animation"
                  width={100}
                  height={100}
                  className="h-12 w-12 object-contain md:h-16 md:w-16 xl:h-20 xl:w-20"
                  unoptimized
                />
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-lg leading-relaxed font-light text-gray-700">
              We believe business networks shouldn&#39;t rely on duct-taped
              hardware or third-party cloud dependency. Our platform brings
              together multi-service gateways, VoIP systems, and communication
              tools — all built for performance, simplicity, and ownership.
            </p>

            <div className="pt-4">
              <AnimatedSlideButton
                icon={<Icon icon={arrowRight} width={24} height={24} />}
                text="Learn about company"
                className="max-w-max items-center gap-2 rounded-lg bg-[#1C1E55] p-5 text-xl tracking-[-0.05em] text-white transition-colors hover:bg-[#151347] md:inline-flex"
                variant="link"
                href="/about"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto min-h-screen max-w-[93rem] rounded-lg bg-[linear-gradient(to_bottom,black_30%,#25276C_100%)] py-16 lg:py-28">
        <h2 className="px-10 text-left text-3xl text-white lg:text-center">
          Why Difuse?
        </h2>
        <p className="mt-8 px-10 text-left text-4xl leading-tight text-white lg:mt-16 lg:text-center 2xl:text-7xl">
          Everything You Need. <br /> Built for Power Users.
        </p>

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-2 px-8 sm:grid-cols-12 lg:mt-24">
          <div className="col-span-12 flex flex-col justify-between space-y-6 rounded-lg bg-white p-10 lg:col-span-4">
            <p className="text-lg lg:text-xl">
              Enhance your network&#39;s versatility with our intuitive
              gateways, designed for smooth, effortless connectivity and
              efficient performance.
            </p>

            <div className="flex items-center justify-center">
              <Image
                src={Vectors.DotGraph.src}
                alt="Gateway"
                width={400}
                height={400}
              />
            </div>
            <Image
              src={Vectors.DifuseIcon.src}
              alt="Difuse Icon"
              width={35}
              height={35}
            />
          </div>

          <div className="col-span-12 grid grid-cols-1 gap-2 lg:col-span-8 lg:grid-cols-2">
            <div className="flex min-h-[260px] flex-col justify-between rounded-lg bg-white p-8 lg:min-h-[365px]">
              <p className="text-4xl break-words 2xl:text-5xl">
                Unyielding Security
              </p>

              <div className="grid grid-cols-2">
                <p className="flex items-end justify-start">
                  <Image
                    src={Vectors.Lock.src}
                    alt="Shield Check"
                    width={35}
                    height={35}
                    className="absolute"
                  />
                </p>
                <p className="text-sm sm:text-xl">
                  Innovative, open-source-based protection with safe defaults
                </p>
              </div>
            </div>
            <div className="flex min-h-[260px] flex-col justify-between rounded-lg bg-white p-8 lg:min-h-[365px]">
              <p className="text-4xl break-words 2xl:text-5xl">
                Stellar Performance
              </p>

              <div className="grid grid-cols-2">
                <p className="flex items-end justify-start">
                  <Image
                    src={Vectors.MonitorPulse.src}
                    alt="Heart Rate Monitor"
                    width={35}
                    height={35}
                    className="absolute"
                  />
                </p>
                <p className="text-sm sm:text-xl">
                  Engineered for optimal speed and enduring reliability
                </p>
              </div>
            </div>
            <div className="flex min-h-[260px] flex-col justify-between rounded-lg bg-white p-8 lg:min-h-[365px]">
              <p className="text-4xl break-words 2xl:text-5xl">
                Constant Evolution
              </p>

              <div className="grid grid-cols-2">
                <p className="flex items-end justify-start">
                  <Image
                    src={Vectors.Growth.src}
                    alt="Growth Chart"
                    width={35}
                    height={35}
                    className="absolute"
                  />
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
