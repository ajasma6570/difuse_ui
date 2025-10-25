"use client";

import { OurCompanyImages } from "@/assets/our-company";
import { Vectors } from "@/assets/vectors";
import AnimatedSlideButton from "@/lib/components/common/AnimatedSlideButton";
import Footer from "@/lib/components/common/Footer";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import { ourValues, products, rightFeatures } from "@/data/ourCompany";
import type { FeatureCard } from "@/data/ourCompany";
import PageTransition from "@/lib/components/common/PageTransition";

export default function OurCompanyPage() {
  const [active, setActive] = useState<string>("dmsbg-devices");
  const product = products.find((t) => t.id === active)!;

  return (
    <PageTransition motionKey="our-company-page-wrapper">
      <div className="mt-14 min-h-screen flex flex-col items-center justify-center">
        <div className="w-full md:max-w-8xl px-6 py-16">
          <div className="text-center md:max-w-5xl w-full mx-auto space-y-6">
            <p className="text-3xl tracking-wide text-[#25276C]">
              About Company
            </p>
            <h1 className="text-4xl md:text-7xl font-normal leading-tight text-[#080808]">
              <span className="block md:hidden">
                Designed for the Modern Infrastructure Landscape
              </span>

              <span className="hidden md:block">
                Designed for the <br />
                Modern Infrastructure <br />
                Landscape
              </span>
            </h1>
            <p className="text-lg text-center font-light text-[#2A2A2A] max-w-xl mx-auto">
              We&lsquo;re redefining business-grade networking and
              communications through open-source-driven, self-hosted technology,
              secure, scalable, and fully owned.
            </p>
          </div>

          <div className="relative mt-20 flex justify-center">
            <div className="w-full md:w-full md:max-w-8xl rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-[550px] lg:h-[600px] w-full">
                <picture>
                  <source
                    media="(max-width: 1024px)"
                    srcSet={OurCompanyImages.Banner.Mobile.src}
                  />
                  <Image
                    src={OurCompanyImages.Banner.Desktop.src}
                    alt="Our company banner"
                    fill
                    quality={100}
                    className="object-cover"
                    priority
                  />
                </picture>
              </div>
            </div>
          </div>

          <section className="mt-16 lg:mt-40 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] items-start">
            <h2 className="text-5xl lg:text-6xl font-normal text-[#080808] leading-snug">
              Our Story,
              <br />
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-[#2A2A2A] ">
              <p className="leading-snug" style={{ fontWeight: 100 }}>
                Founded in 2023 by IT veterans at Iridia Solutions Private
                Limited, Difuse was born out of a deep-rooted frustration with
                fragmented, proprietary systems. With over 20 years of
                experience in IT infrastructure, our team sought to merge legacy
                expertise with modern open-source innovation.
              </p>
              <p className="leading-snug">
                Difuse exists to empower businesses and innovators with
                open-source, self-hosted infrastructure that replaces
                fragmented, vendor-locked systems. We design intelligent,
                modular platforms that integrate networking, communication, and
                control, enabling modern enterprises to operate securely,
                independently, and efficiently.
              </p>
              <p className="leading-snug">
                At our core, we believe IT shouldn&lsquo;t be a black box.
                That&lsquo;s why we build transparent, customizable, and
                scalable solutions that give users complete control over their
                stack from the network edge to internal communications.
              </p>
              <p className="leading-snug">
                We&lsquo;re on a mission to make digital sovereignty accessible
                to every business through tools that are easy to deploy,
                affordable to own, and built for long-term evolution. Whether
                you&lsquo;re a startup, an enterprise, or a systems integrator,
                Difuse exists to eliminate complexity, reduce dependencies, and
                future-proof your infrastructure — one self-hosted layer at a
                time.
              </p>
            </div>
          </section>

          <section className="mt-20 lg:mt-40">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden h-[700px] w-full">
                <Image
                  src={OurCompanyImages.Team.src}
                  alt="Team working"
                  fill
                  className="w-full object-cover"
                />
              </div>

              <div className="absolute inset-0 flex items-end justify-between p-8 md:p-16">
                <div className="flex flex-col lg:flex-row w-full gap-4">
                  <div className="lg:w-3/12 rounded-full text-white flex items-end pb-5">
                    <div className="relative h-12 w-12">
                      <Image
                        src={Vectors.DifuseWhite}
                        alt="difuse logo"
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

          <section className="mt-24 lg:mt-40 max-w-8xl mx-auto  rounded-lg bg-[linear-gradient(to_bottom,black_30%,#25276C_100%)]">
            <div className="px-8 py-16 lg:p-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-12 ">
              <div className="col-span-12 lg:col-span-4  rounded-lg space-y-6  flex justify-between flex-col">
                <h2 className="text-white text-left text-5xl lg:text-6xl ">
                  What Sets Us Apart
                </h2>
              </div>

              <div className="col-span-12 lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-2 mt-10 lg:mt-0">
                <div className="rounded-lg hidden lg:flex flex-col justify-between p-8 min-h-[300px] lg:min-h-[365px]" />
                {rightFeatures.map((f) => (
                  <FeatureCard
                    key={f.title}
                    title={f.title}
                    body={f.body}
                    icon={f.icon}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="bg-zinc-50 mt-24 lg:mt-40">
            <div className="mx-auto max-w-8xl space-y-40 ">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <h2 className="text-5xl lg:text-6xl font-normal text-[#080808] mb-6">
                  What We Build
                </h2>
                <p className="text-[#2A2A2A] font-light text-lg">
                  At Difuse, we design next-generation, self-hosted
                  infrastructure that simplifies how modern businesses manage
                  networking and communication. From modular router platforms
                  (DMSBG) to powerful PBX systems (DPBX) and our cross-platform
                  softphone app, we build products that eliminate IT complexity,
                  reduce dependency on third-party services, and empower digital
                  sovereignty, all under one unified ecosystem.
                </p>
              </div>

              <div className="hidden lg:grid gap-6 md:grid-cols-3 items-start h-[600px]">
                <div className="space-y-2 col-span-1 h-full">
                  {products.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActive(item.id)}
                      className={`w-full text-left flex items-center gap-3 cursor-pointer rounded-md p-5 text-xl lg:text-4xl transition-colors ${
                        active === item.id
                          ? " bg-[#F4F4F4]  text-[#25276C]"
                          : " bg-white text-[#C6C6C6] hover:bg-white"
                      }`}
                      aria-pressed={active === item.id}
                    >
                      <item.icon
                        width={32}
                        height={32}
                        className={`${
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
                  <div className="rounded-lg overflow-hidden relative">
                    <Image
                      src={product.DesktopImage.src}
                      alt={product.title}
                      fill
                      quality={100}
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="rounded-lg bg-white p-5 flex flex-col">
                    <p className="mt-3 text-lg leading-snug font-light text-[#2A2A2A]">
                      {product.body}
                    </p>

                    <div className="mt-auto pt-4">
                      <AnimatedSlideButton
                        icon={<Icon icon={arrowRight} width={24} height={24} />}
                        text="Learn more"
                        className=" items-center gap-2 text-[#1C1E55] border hover:text-white border-[#1C1E55] hover:bg-[#1C1E55] transition-colors px-6 py-4 rounded-lg text-lg lg:text-xl font-medium hidden md:inline-flex"
                        variant="link"
                        href={product.href}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:hidden space-y-2 w-full">
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="relative rounded-2xl overflow-hidden w-full h-[950px]"
                  >
                    <Image
                      src={item.MobileImage.src}
                      alt={item.title}
                      fill
                      className="object-center"
                    />

                    <div className="absolute inset-0 flex justify-between flex-col px-6 py-12">
                      <div className="flex items-center gap-3 px-4 lg:px-8">
                        <item.icon
                          width={30}
                          height={30}
                          className="text-white"
                        />
                        <h3 className="text-[#FBFBF9] text-4xl font-medium">
                          {item.title}
                        </h3>
                      </div>

                      <div className="bg-[#F4F4F4] p-8 rounded-lg">
                        <p className="text-[#2A2A2A] text-base lg:text-lg leading-relaxed mb-8">
                          {item.body}
                        </p>

                        <AnimatedSlideButton
                          icon={
                            <Icon icon={arrowRight} width={24} height={24} />
                          }
                          text="Learn more"
                          className="inline-flex text-[#1C1E55] hover:bg-[#1C1E55] border border-[#1C1E55] hover:text-white rounded-lg  text-xl tracking-[-0.05em] p-4 max-w-max "
                          variant="link"
                          href={item.href}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-28 lg:mt-40">
            <div className="py-20 max-w-8xl mx-auto min-h-screen rounded-lg bg-[#F4F4F4]">
              <div className="max-w-7xl mx-auto px-8">
                <p className="text-[#080808] text-5xl lg:text-6xl">
                  Our Core Values
                </p>
              </div>
              <div className="max-w-7xl mx-auto mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-12 gap-2 px-8">
                <div className="col-span-12 lg:col-span-4 bg-white rounded-lg space-y-6 p-10 flex justify-between flex-col">
                  <p className="text-base lg:text-lg text-[#2A2A2A] font-light">
                    At Difuse, our core values are more than ideals, they’re the
                    blueprint for everything we design, deliver, and support. We
                    believe technology should empower, not overwhelm. That’s why
                    we commit to openness, modularity, and customer-first
                    thinking, ensuring every product serves as a bridge to
                    long-term independence, reliability, and growth. These
                    values aren’t just what we believe, they’re what our
                    customers experience every day.
                  </p>

                  <Image
                    src={Vectors.DifuseIcon}
                    alt="difuse logo"
                    width={48}
                    height={48}
                    className="object-contain w-12 h-12"
                  />
                </div>

                <div className="col-span-12 lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-2">
                  {ourValues.map((f) => (
                    <FeatureCard key={f.title} {...f} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full">
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}

export function FeatureCard({ title, body, icon }: FeatureCard) {
  return (
    <div className="bg-white rounded-lg flex flex-col justify-between p-8 min-h-[300px] space-y-16 sm:space-y-8 lg:min-h-[365px]">
      <p className="text-3xl lg:text-4xl">{title}</p>
      <div className="flex items-end gap-8 md:gap-16">
        <span className="shrink-0">
          <Image
            src={icon}
            alt={title}
            width={45}
            height={45}
            className="object-contain"
          />
        </span>
        <p className="text-base lg:text-md">{body}</p>
      </div>
    </div>
  );
}
