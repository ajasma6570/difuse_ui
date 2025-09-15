import AnimatedSlideButton from "@/components/AnimatedSlideButton";
import Banner from "@/components/utils/Banner";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { AiOutlineSecurityScan } from "react-icons/ai";
import BannerDesktop from "$/images/common/img.png";
import ProgramDesktop from "$/images/common/img_2.png";
import PartnerDesktop from "$/images/common/img_3.png";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <main className="mt-28 min-h-screen flex flex-col items-center px-6 ">
      <div className="w-full md:max-w-8xl pb-16 space-y-20">
        <div className="relative flex justify-center">
          <div className="relative w-full h-[900px] md:max-w-8xl rounded-lg overflow-hidden shadow-sm">
            <Banner
              mobile={BannerDesktop.src}
              desktop={BannerDesktop.src}
              desktopBlur={BannerDesktop.blurDataURL}
              mobileBlur={BannerDesktop.blurDataURL}
              alt="DMSBG Devices Banner"
            />
          </div>

          <div className="absolute inset-0 flex flex-col mb-20 items-center p-20 space-y-6">
            <p className="text-[#25276C] text-3xl font-normal text-center">
              Become a Partner
            </p>
            <p className="text-[#080808] text-6xl leading-tight text-center">
              Collaborative <br />
              Frontiers
            </p>
            <p className="text-[#080808] text-lg leading-snug text-center w-lg">
              Join the Difuse Partnership Program for a synergy of growth,
              innovation, and shared expertise in our collaborative ecosystem.
            </p>
            <AnimatedSlideButton
              icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
              text="Apply Now"
              className="items-center gap-2 hover:bg-[#25276C] hover:text-[#FBFBF9] text-[#25276C] border border-[#25276C] transition-colors px-6 py-4 rounded-lg text-lg lg:text-xl font-medium inline-flex"
              variant="link"
              href="/contact"
            />
          </div>
        </div>

        <section className="rounded-2xl bg-gradient-to-b from-[#12142E] via-[#181C3D] to-[#262A6D] p-8 sm:p-20 text-white shadow-lg">
          <h2 className="text-2xl sm:text-6xl font-normal text-center text-[#FBFBF9]">
            Experience Partner Privileges
          </h2>
          <p className="mt-10 text-center text-sm sm:text-base text-[#FBFBF9] max-w-2xl mx-auto">
            Step into a realm of exclusive benefits by becoming our valued
            partner. Elevate your collaborative journey towards mutual growth.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 mt-10">
            <div className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] ">
              <p className="text-3xl lg:text-4xl  text-[#080808]">
                Premium Support
              </p>

              <div className="flex gap-10">
                <p className="flex items-end justify-start">
                  <AiOutlineSecurityScan className="h-16 w-16 text-[#2A2A2A]" />
                </p>
                <p className="text-md text-[#2A2A2A]">
                  Experience dedicated assistance and priority service
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] ">
              <p className="text-3xl lg:text-4xl  text-[#080808]">
                Partner Discounts
              </p>

              <div className="flex gap-10">
                <p className="flex items-end justify-start">
                  <AiOutlineSecurityScan className="h-16 w-16 text-[#2A2A2A]" />
                </p>
                <p className="text-md text-[#2A2A2A]">
                  Access discounted rates tailored to our valued partners
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] ">
              <p className="text-3xl lg:text-4xl  text-[#080808]">
                Exclusive Benefits
              </p>

              <div className="flex gap-10">
                <p className="flex items-end justify-start">
                  <AiOutlineSecurityScan className="h-16 w-16 text-[#2A2A2A]" />
                </p>
                <p className="text-md text-[#2A2A2A]">
                  Experience cutting-edge features before anyone else and shape
                  its future
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto my-40">
          <h3 className="text-6xl font-normal text-[#080808] mb-4">
            Partner with Our Program
            <br />
            for Unmatched Support
          </h3>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center mt-20">
            <div>
              <p className="text-[#2A2A2A] font-light text-lg mb-10">
                As a valued partner, you can count on us for dedicated support,
                including:
              </p>

              <ul className="space-y-2">
                <li className="flex items-center gap-6 bg-[#F4F4F4] p-10 rounded-lg h-[150px]">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      Early access to
                      <br />
                      Innovative features
                    </p>
                  </div>
                </li>

                <li className="flex items-center gap-6 bg-[#F4F4F4] p-10 rounded-lg h-[150px]">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      Customized Partner
                      <br />
                      Dashboard
                    </p>
                  </div>
                </li>

                <li className="flex items-center gap-6 bg-[#F4F4F4] p-10 rounded-lg h-[150px]">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      Exclusive resources
                      <br />
                      for mutual growth
                    </p>
                  </div>
                </li>
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
          <div className="relative h-[800px] w-full rounded-lg overflow-hidden">
            <Image
              src={PartnerDesktop.src}
              placeholder="blur"
              blurDataURL={PartnerDesktop.blurDataURL}
              alt="Two professionals discussing partner onboarding"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 w-full">
              <div className=" flex flex-col p-20 justify-center h-full space-y-6 w-7/12 ml-auto">
                <p className="text-[#FBFBF9] text-6xl leading-tight tracking-wide font-normal">
                  Unlock Savings with <br />
                  Partner Discounts
                </p>
                <p className="text-md text-[#FBFBF9] font-light ">
                  As a valued partner, enjoy exclusive discounts tailored just
                  for you, including:
                </p>

                <div className="flex gap-2">
                  <div className="bg-[#FBFBF9] h-[200px] space-y-6 p-10 flex gap-5 rounded-lg">
                    <p className="text-[#2A2A2A] text-xl font-normal">
                      Exclusive rates on <br />
                      our devices and <br /> services
                    </p>
                    <p className="flex justify-end h-full items-end">
                      {" "}
                      <svg
                        className="w-6 h-6 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </p>
                  </div>
                  <div className="bg-[#FBFBF9] h-[200px] space-y-6 p-10 flex gap-5 rounded-lg">
                    <p className="text-[#2A2A2A] text-xl font-normal">
                      Partner-specific <br /> promotions for <br />
                      added value
                    </p>
                    <p className="flex justify-end h-full items-end">
                      {" "}
                      <svg
                        className="w-6 h-6 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto my-40 flex items-center gap-4">
          <p className="text-[#080808] text-6xl font-normal leading-tight ">
            Ready to Build the Future Together?
          </p>

          <div className="space-y-6">
            <p className="text-[#2A2A2A] text-lg font-light ">
              Become a Difuse Partner today and shape how modern businesses
              connect, scale, and operate.
            </p>
            <button>Apply Now</button>
          </div>
        </section>
      </div>{" "}
      <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full mt-5">
        <Footer />
      </div>
    </main>
  );
}
