"use client";

import AnimatedSlideButton from "@/components/AnimatedSlideButton";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { TbHeartRateMonitor } from "react-icons/tb";

type Tab = {
  id: string;
  image: string;
  icon: string;
  title: string;
  body: string;
  href: string;
};

const TABS: Tab[] = [
  {
    id: "dmsbg-devices",
    title: "DMSBG Devices",
    body: "Difuse’s DMSBG (Multi-Service Business Gateway) devices go beyond traditional routers. They integrate routing, firewall, Wi-Fi, PBX, NAS, DNS filtering, and more all in one streamlined unit. With open standards and modular firmware, each unit is built for autonomy, customization, and long-term agility.",
    image: "/images/about/product_1.png",
    icon: "/images/vector_1.png",
    href: "/products/dmsbg-devices",
  },
  {
    id: "dpbx-devices",
    title: "DPBX Devices",
    body: "Difuse’s DPBX (Private Branch Exchange) devices are purpose-built for secure, self-hosted business communication. They combine PBX capabilities with modular software, supporting advanced call routing, IVR, recording, and SIP trunking, all without cloud lock-ins or licensing traps. With scalable deployment options and full admin control, DPBX devices empower businesses to own their voice infrastructure.",
    image: "/images/about/product_2.png",
    icon: "/images/vector_2.png",
    href: "/products/dpbx-devices",
  },
  {
    id: "softphone",
    title: "Softphone",
    body: "Make high-quality voice and SMS calls securely over the internet—right from your desktop, tablet, or mobile device. Difuse Phone connects seamlessly with your existing Difuse PBX or DMSBG systems, offering a unified, self-hosted communication experience without relying on third-party cloud services.",
    image: "/images/about/product_3.png",
    icon: "/images/vector_3.png",
    href: "/products/softphone",
  },
];

export default function AboutPage() {
  const [active, setActive] = useState<string>("dmsbg-devices");
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <main className="pt-14 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full md:max-w-8xl px-6 py-16">
        <div className="text-center md:max-w-5xl w-full mx-auto space-y-6">
          <p className="text-3xl tracking-wide text-[#25276C]">About Company</p>
          <h1 className="text-4xl md:text-7xl font-normal leading-tight text-[#080808]">
            Designed for the
            <br className="hidden md:block" />
            Modern Infrastructure
            <br className="hidden md:block" />
            Landscape
          </h1>
          <p className="text-lg text-center font-light text-[#2A2A2A] max-w-xl mx-auto">
            We&lsquo;re redefining business-grade networking and communications
            through open-source-driven, self-hosted technology, secure,
            scalable, and fully owned.
          </p>
        </div>

        <div className="relative mt-20 flex justify-center">
          <div className="w-full md:w-full md:max-w-8xl rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/images/about/banner.png"
              alt="Office team"
              width={1440}
              height={720}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        <section className="py-40 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] items-start">
          <h2 className="text-5xl font-normal text-[#080808] leading-snug">
            Our Story,
            <br />
            Our Mission
          </h2>
          <div className="space-y-6 text-lg text-[#2A2A2A] ">
            <p className="leading-snug" style={{ fontWeight: 100 }}>
              Founded in 2023 by IT veterans at Iridia Solutions Private
              Limited, Difuse was born out of a deep-rooted frustration with
              fragmented, proprietary systems. With over 20 years of experience
              in IT infrastructure, our team sought to merge legacy expertise
              with modern open-source innovation.
            </p>
            <p className="leading-snug">
              Difuse exists to empower businesses and innovators with
              open-source, self-hosted infrastructure that replaces fragmented,
              vendor-locked systems. We design intelligent, modular platforms
              that integrate networking, communication, and control, enabling
              modern enterprises to operate securely, independently, and
              efficiently.
            </p>
            <p className="leading-snug">
              At our core, we believe IT shouldn&lsquo;t be a black box.
              That&lsquo;s why we build transparent, customizable, and scalable
              solutions that give users complete control over their stack from
              the network edge to internal communications.
            </p>
            <p className="leading-snug">
              We&lsquo;re on a mission to make digital sovereignty accessible to
              every business through tools that are easy to deploy, affordable
              to own, and built for long-term evolution. Whether you&lsquo;re a
              startup, an enterprise, or a systems integrator, Difuse exists to
              eliminate complexity, reduce dependencies, and future-proof your
              infrastructure — one self-hosted layer at a time.
            </p>
          </div>
        </section>

        <section>
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden h-[700px] w-full">
              <Image
                src="/images/about/img_1.png"
                alt="Team working"
                fill
                className="w-full object-cover"
              />
            </div>

            <div className="absolute inset-0 flex items-end justify-between p-6 md:p-16">
              <div className="flex w-full gap-4">
                <div className="lg:w-3/12 rounded-full text-white flex items-end pb-5">
                  <div className="relative h-12 w-12">
                    <Image
                      src={"/images/about/vector.png"}
                      alt="Quote"
                      fill
                      className="object-contain w-full h-full absolute bottom-0"
                    />
                  </div>
                </div>

                <p className="lg:w-9/12 text-white/90 text-3xl md:text-6xl font-normal leading-tight text-left">
                  Join 1,500+ teams
                  <br />
                  powering their networks,
                  <br />
                  calls, and cloud with Diffuse
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="py-6 my-40 max-w-8xl mx-auto min-h-screen rounded-xl bg-[linear-gradient(to_bottom,black_30%,#25276C_100%)]">
          <div className="max-w-7xl mx-auto mt-14 lg:mt-24 grid grid-cols-1 sm:grid-cols-12 px-8">
            <div className="col-span-12 lg:col-span-4  rounded-xl space-y-6  flex justify-between flex-col">
              <h2 className="text-white text-left text-6xl ">
                What Sets Us Apart
              </h2>
            </div>

            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="lg:block flex rounded-xl  flex-col justify-between p-8 min-h-[300px] lg:min-h-[365px]"></div>
              <div className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] lg:min-h-[365px]">
                <p className="text-3xl lg:text-4xl ">Open-source by design</p>

                <div className="grid grid-cols-2">
                  <p className="flex items-end justify-start">
                    <AiOutlineSecurityScan className="h-16 w-16" />
                  </p>
                  <p className="text-sm sm:text-xl">
                    Built for transparency, flexibility, and community-driven
                    innovation
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] lg:min-h-[365px]">
                <p className="text-3xl lg:text-4xl">Tailored deployments</p>

                <div className="grid grid-cols-2">
                  <p className="flex items-end justify-start">
                    <TbHeartRateMonitor className="h-16 w-16" />
                  </p>
                  <p className="text-sm sm:text-xl">
                    Customizable solutions built to match unique business
                    requirements, not force-fit features
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] lg:min-h-[365px]">
                <p className="text-3xl lg:text-4xl ">
                  Community-first approach
                </p>

                <div className="grid grid-cols-2">
                  <p className="flex items-end justify-start">
                    <BsGraphUp className="h-16 w-16" />
                  </p>
                  <p className="text-sm sm:text-xl">
                    Active engagement with developers, teams, and IT enthusiasts
                    worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-zinc-50 my-40">
          <div className="mx-auto max-w-8xl px-6 space-y-40">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <h2 className="text-6xl font-normal text-[#080808] mb-6">
                What We Build
              </h2>
              <p className="text-[#2A2A2A] font-light text-lg">
                At Difuse, we design next-generation, self-hosted infrastructure
                that simplifies how modern businesses manage networking and
                communication. From modular router platforms (DMSBG) to powerful
                PBX systems (DPBX) and our cross-platform softphone app, we
                build products that eliminate IT complexity, reduce dependency
                on third-party services, and empower digital sovereignty, all
                under one unified ecosystem.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 items-start h-[600px]">
              {/* Left tabs */}
              <div className="space-y-2 col-span-1 h-full">
                {TABS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={`w-full text-left flex items-center gap-3 cursor-pointer rounded-md p-5 text-4xl transition-colors ${
                      active === item.id
                        ? " bg-[#F4F4F4]  text-[#25276C]"
                        : " bg-white text-[#C6C6C6] hover:bg-white"
                    }`}
                    aria-pressed={active === item.id}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={32}
                      height={32}
                      className={`h-8 w-8 border rounded-lg ${
                        active === item.id
                          ? "border-indigo-600"
                          : "border-zinc-400"
                      }`}
                    />
                    {item.title}
                  </button>
                ))}
              </div>

              <div className="grid md:col-span-2 grid-cols-2 gap-5 items-stretch h-full">
                <div className="rounded-lg overflow-hidden relative bg-zinc-900">
                  <Image
                    src={tab.image}
                    alt={tab.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="rounded-lg bg-white p-5 flex flex-col">
                  <p className="mt-3 text-lg leading-snug font-light text-[#2A2A2A]">
                    {tab.body}
                  </p>

                  <div className="mt-auto pt-4">
                    <AnimatedSlideButton
                      icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                      text="Learn more"
                      className=" items-center gap-2 text-[#1C1E55] border hover:text-white border-[#1C1E55] hover:bg-[#1C1E55] transition-colors px-6 py-4 rounded-lg text-lg lg:text-xl font-medium hidden md:inline-flex"
                      variant="link"
                      href={tab.href}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-40">
          <div className="py-20 max-w-8xl mx-auto min-h-screen rounded-xl bg-[#F4F4F4]">
            <div className="max-w-7xl mx-auto px-8">
              <p className="text-[#080808] text-7xl">Our Core Values</p>
            </div>
            <div className="max-w-7xl mx-auto mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-12 gap-4 px-8">
              <div className="col-span-12 lg:col-span-4 bg-white rounded-xl space-y-6 p-10 flex justify-between flex-col">
                <p className="text-md lg:text-xl text-[#2A2A2A] font-light">
                  At Difuse, our core values are more than ideals, they’re the
                  blueprint for everything we design, deliver, and support. We
                  believe technology should empower, not overwhelm. That’s why
                  we commit to openness, modularity, and customer-first
                  thinking, ensuring every product serves as a bridge to
                  long-term independence, reliability, and growth. These values
                  aren’t just what we believe, they’re what our customers
                  experience every day.
                </p>

                <FaWifi className="h-12 w-12" />
              </div>

              <div className="col-span-12 lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] space-y-4 lg:min-h-[365px]">
                  <p className="text-3xl lg:text-4xl 2xl:text-5xl">
                    Simplicity at Scale
                  </p>

                  <div className="grid grid-cols-3">
                    <p className="flex items-end justify-start col-span-1">
                      <AiOutlineSecurityScan className="h-16 w-16" />
                    </p>
                    <p className="text-md col-span-2">
                      Power shouldn’t come with complexity. We strip away the
                      bloat of legacy systems and deliver modular tools that
                      work together, intuitively and efficiently.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] space-y-4 lg:min-h-[365px]">
                  <p className="text-3xl lg:text-4xl 2xl:text-5xl">
                    Future-Ready Thinking
                  </p>

                  <div className="grid grid-cols-3">
                    <p className="flex items-end justify-start col-span-1">
                      <TbHeartRateMonitor className="h-16 w-16" />
                    </p>
                    <p className="text-md col-span-2">
                      We’re not just solving today’s IT problems, we’re
                      designing for the next decade of decentralized,
                      intelligent, business-first infrastructure.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] space-y-4 lg:min-h-[365px]">
                  <p className="text-3xl lg:text-4xl 2xl:text-5xl">
                    Open Innovation
                  </p>

                  <div className="grid grid-cols-3">
                    <p className="flex items-end justify-start col-span-1">
                      <BsGraphUp className="h-16 w-16" />
                    </p>
                    <p className="text-md col-span-2">
                      We’re built on open standards and open-source principles,
                      not closed ecosystems. This fuels faster development,
                      stronger security, and continuous community-driven
                      improvement.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] space-y-4 lg:min-h-[365px]">
                  <p className="text-3xl lg:text-4xl 2xl:text-5xl">
                    Security as a Foundation
                  </p>

                  <div className="grid grid-cols-3">
                    <p className="flex items-end justify-start col-span-1">
                      <BsGraphUp className="h-16 w-16" />
                    </p>
                    <p className="text-md col-span-2">
                      From self-hosted control to privacy-respecting
                      architecture, security isn’t a feature, it’s embedded into
                      every layer of our platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full">
        <Footer />
      </div>
    </main>
  );
}
