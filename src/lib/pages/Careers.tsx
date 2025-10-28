import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedSlideButton from "@/lib/components/common/AnimatedSlideButton";
import Footer from "@/lib/components/common/Footer";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import BannerDesktop from "$/images/common/img_4.webp";
import HiringImage from "$/images/common/img_5.webp";
import PageTransition from "@/lib/components/common/PageTransition";
import JobList from "../components/common/JobList";
import { Careers as CareersType } from "@/interface/careers";
import getMarkDownData from "@/utils/GetMarkDownData";

export default function Careers() {
  const careers = (getMarkDownData("src/data/careers") as CareersType[]).sort(
    (a, b) => a.id - b.id
  );

  return (
    <PageTransition motionKey="careers-page-wrapper">
      <div className="mt-28">
        <div className="mx-auto w-full space-y-16 px-6 md:max-w-7xl lg:space-y-28 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            <div className="space-y-6 md:col-span-8">
              <p className="text-3xl text-[#25276C]">Careers</p>
              <h1 className="text-4xl leading-tight font-normal text-[#080808] md:text-6xl">
                Join Us and Build the <span className="md:hidden">&nbsp;</span>
                <br className="hidden md:inline" /> Future of Communication
              </h1>
              <p className="text-lg text-[#080808] md:w-3/4">
                We believe innovation starts with people. That’s why we invest
                in a culture where talent thrives, ideas are heard, and
                contributions truly matter. Whether you’re an engineer shaping
                network infrastructure, a designer redefining user experiences,
                or a strategist driving market expansion, you’ll have the
                autonomy and tools to make an impact.
              </p>
              <p className="text-lg text-[#080808]">
                Send your application to{" "}
                <Link
                  href="mailto:hello@difuse.io"
                  className="font-semibold underline"
                >
                  hello@difuse.io
                </Link>
              </p>
            </div>
            <div className="relative h-72 overflow-hidden rounded-lg md:col-span-4 md:h-96">
              <Image
                src={BannerDesktop}
                alt="banner"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-20 space-y-14 overflow-hidden rounded-xl bg-[#F4F4F4] p-4 md:p-8 lg:p-20">
            <div className="flex flex-col gap-10 md:flex-row md:px-8 lg:px-16">
              <p className="text-4xl leading-snug font-light text-[#080808] md:w-1/2 md:text-6xl">
                Our Hiring <br /> Philosophy
              </p>
              <div className="flex flex-col space-y-6 md:w-1/2">
                <p className="text-lg">
                  We hire for skill, drive, and problem-solving ability, not
                  just job titles. If you’re passionate about creating
                  meaningful technology and want to see your work make a real
                  difference, you belong here.
                </p>
                <AnimatedSlideButton
                  icon={<Icon icon={arrowRight} width={24} height={24} />}
                  text="What we do"
                  className="inline-flex max-w-max rounded-lg border border-[#25276C] p-3 text-xl tracking-[-0.05em] text-[#25276C] hover:bg-[#25276C] hover:text-[#FBFBF9] md:p-5"
                  variant="link"
                  href="/contact"
                />
              </div>
            </div>
            <div className="relative mx-auto overflow-hidden rounded-lg md:h-48 lg:w-[90%]">
              <Image
                src={HiringImage.src}
                placeholder="blur"
                blurDataURL={HiringImage.blurDataURL}
                alt="team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-black/90 to-[#25276C] p-6 md:p-12">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-normal text-[#FBFBF9] md:text-6xl">
                Current Openings
              </h2>
              <p className="text-md text-[#FBFBF9]">
                Send your application to{" "}
                <Link
                  href="mailto:hello@difuse.io"
                  className="font-semibold underline"
                >
                  hello@difuse.io
                </Link>
              </p>
            </div>

            <JobList careers={careers} />
          </div>
        </div>

        <div className="mt-16 w-full bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] lg:mt-28">
          <Footer type="product" />
        </div>
      </div>
    </PageTransition>
  );
}
