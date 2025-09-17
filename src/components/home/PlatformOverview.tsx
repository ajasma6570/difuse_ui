import Image from "next/image";
import React from "react";
import AnimatedSlideButton from "@/components/AnimatedSlideButton";
import PingPongRow from "@/components/PingPongRow";
import { Images } from "@/assets/vectors";
import ProductGif from "$/videos/products.gif";
import { LuArrowRight } from "react-icons/lu";

export default function PlatformOverview() {
  return (
    <section className="py-20 lg:py-40 lg:max-w-8xl w-full mx-auto px-6 lg:px-4 space-y-20 lg:space-y-40">
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
                  src={ProductGif.src}
                  alt="Hero animation"
                  width={100}
                  height={100}
                  className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 object-contain"
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
                icon={<LuArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                text="Learn about company"
                className=" items-center gap-2 text-white bg-[#1C1E55] hover:bg-[#151347] transition-colors p-5 rounded-lg text-xl tracking-[-0.05em] max-w-max md:inline-flex"
                variant="link"
                href="/about"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 lg:py-28 max-w-[93rem] mx-auto min-h-screen rounded-lg bg-[linear-gradient(to_bottom,black_30%,#25276C_100%)]">
        <h2 className="text-white text-left lg:text-center text-3xl px-10">
          Why Difuse?
        </h2>
        <p className="text-white text-4xl 2xl:text-7xl text-left px-10 lg:text-center mt-8 lg:mt-16 leading-tight">
          Everything You Need. <br /> Built for Power Users.
        </p>

        <div className="max-w-7xl mx-auto mt-14 lg:mt-24 grid grid-cols-1 sm:grid-cols-12 gap-2 px-8">
          <div className="col-span-12 lg:col-span-4 bg-white rounded-lg space-y-6 p-10 flex justify-between flex-col">
            <p className="text-lg lg:text-xl">
              Enhance your network&#39;s versatility with our intuitive
              gateways, designed for smooth, effortless connectivity and
              efficient performance.
            </p>

            <div className="flex items-center justify-center">
              <Image
                src={Images.DotGraph.src}
                alt="Gateway"
                width={400}
                height={400}
              />
            </div>
            <Image
              src={Images.DifuseIcon.src}
              alt="Difuse Icon"
              width={48}
              height={48}
            />
          </div>

          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="bg-white rounded-lg flex flex-col justify-between p-8 min-h-[260px] lg:min-h-[365px]">
              <p className="text-4xl 2xl:text-5xl break-words">
                Unyielding Security
              </p>

              <div className="grid grid-cols-2">
                <p className="flex items-end justify-start">
                  <Image
                    src={Images.Lock.src}
                    alt="Shield Check"
                    width={48}
                    height={48}
                    className="absolute"
                  />
                </p>
                <p className="text-sm sm:text-xl">
                  Innovative, open-source-based protection with safe defaults
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg flex flex-col justify-between p-8 min-h-[260px] lg:min-h-[365px]">
              <p className="text-4xl 2xl:text-5xl break-words">
                Stellar Performance
              </p>

              <div className="grid grid-cols-2">
                <p className="flex items-end justify-start">
                  <Image
                    src={Images.Heart.src}
                    alt="Heart Rate Monitor"
                    width={48}
                    height={48}
                    className="absolute"
                  />
                </p>
                <p className="text-sm sm:text-xl">
                  Engineered for optimal speed and enduring reliability
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg flex flex-col justify-between p-8 min-h-[260px] lg:min-h-[365px]">
              <p className="text-4xl 2xl:text-5xl break-words">
                Constant Evolution
              </p>

              <div className="grid grid-cols-2">
                <p className="flex items-end justify-start">
                  <Image
                    src={Images.Growth.src}
                    alt="Growth Chart"
                    width={48}
                    height={48}
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
