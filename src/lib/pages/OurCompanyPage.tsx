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
      <div className="mt-14 flex min-h-screen flex-col items-center justify-center">
        <div className="md:max-w-8xl w-full px-6 py-16">
          <div className="mx-auto w-full space-y-6 text-center md:max-w-5xl">
            <p className="text-3xl tracking-wide text-[#25276C]">
              About Company
            </p>
            <h1 className="text-4xl leading-tight font-normal text-[#080808] md:text-7xl">
              <span className="block md:hidden">
                Designed for the Modern Infrastructure Landscape
              </span>

              <span className="hidden md:block">
                Designed for the <br />
                Modern Infrastructure <br />
                Landscape
              </span>
            </h1>
            <p className="mx-auto max-w-xl text-center text-lg font-light text-[#2A2A2A]">
              We&lsquo;re redefining business-grade networking and
              communications through open-source-driven, self-hosted technology,
              secure, scalable, and fully owned.
            </p>
          </div>

          <div className="relative mt-20 flex justify-center">
            <div className="md:max-w-8xl w-full overflow-hidden rounded-lg shadow-sm md:w-full">
              <div className="relative h-[550px] w-full lg:h-[600px]">
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

          <section className="mt-16 grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:mt-40">
            <h2 className="text-5xl leading-snug font-normal text-[#080808] lg:text-6xl">
              Our Story,
              <br />
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-[#2A2A2A]">
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
              <div className="relative h-[700px] w-full overflow-hidden rounded-lg">
                <Image
                  src={OurCompanyImages.Team.src}
                  alt="Team working"
                  fill
                  className="w-full object-cover"
                />
              </div>

              <div className="absolute inset-0 flex items-end justify-between p-8 md:p-16">
                <div className="flex w-full flex-col gap-4 lg:flex-row">
                  <div className="flex items-end rounded-full pb-5 text-white lg:w-3/12">
                    <div className="relative h-12 w-12">
                      <Image
                        src={Vectors.DifuseWhite}
                        alt="difuse logo"
                        fill
                        className="absolute bottom-0 h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  <p className="text-left text-3xl leading-tight font-normal text-white/90 md:text-6xl lg:w-9/12">
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

          <section className="max-w-8xl mx-auto mt-24 rounded-lg bg-[linear-gradient(to_bottom,black_30%,#25276C_100%)] lg:mt-40">
            <div className="mx-auto grid max-w-7xl grid-cols-1 px-8 py-16 sm:grid-cols-12 lg:p-20">
              <div className="col-span-12 flex flex-col justify-between space-y-6 rounded-lg lg:col-span-4">
                <h2 className="text-left text-5xl text-white lg:text-6xl">
                  What Sets Us Apart
                </h2>
              </div>

              <div className="col-span-12 mt-10 grid grid-cols-1 gap-2 lg:col-span-8 lg:mt-0 lg:grid-cols-2">
                <div className="hidden min-h-[300px] flex-col justify-between rounded-lg p-8 lg:flex lg:min-h-[365px]" />
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

          <section className="mt-24 bg-zinc-50 lg:mt-40">
            <div className="max-w-8xl mx-auto space-y-40">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <h2 className="mb-6 text-5xl font-normal text-[#080808] lg:text-6xl">
                  What We Build
                </h2>
                <p className="text-lg font-light text-[#2A2A2A]">
                  At Difuse, we design next-generation, self-hosted
                  infrastructure that simplifies how modern businesses manage
                  networking and communication. From modular router platforms
                  (DMSBG) to powerful PBX systems (DPBX) and our cross-platform
                  softphone app, we build products that eliminate IT complexity,
                  reduce dependency on third-party services, and empower digital
                  sovereignty, all under one unified ecosystem.
                </p>
              </div>

              <div className="hidden h-[600px] items-start gap-6 md:grid-cols-3 lg:grid">
                <div className="col-span-1 h-full space-y-2">
                  {products.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActive(item.id)}
                      className={`flex w-full cursor-pointer items-center gap-3 rounded-md p-5 text-left text-xl transition-colors lg:text-4xl ${
                        active === item.id
                          ? "bg-[#F4F4F4] text-[#25276C]"
                          : "bg-white text-[#C6C6C6] hover:bg-white"
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

                <div className="grid h-full grid-cols-2 items-stretch gap-5 md:col-span-2">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={product.DesktopImage.src}
                      alt={product.title}
                      fill
                      quality={100}
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="flex flex-col rounded-lg bg-white p-5">
                    <p className="mt-3 text-lg leading-snug font-light text-[#2A2A2A]">
                      {product.body}
                    </p>

                    <div className="mt-auto pt-4">
                      <AnimatedSlideButton
                        icon={<Icon icon={arrowRight} width={24} height={24} />}
                        text="Learn more"
                        className="hidden items-center gap-2 rounded-lg border border-[#1C1E55] px-6 py-4 text-lg font-medium text-[#1C1E55] transition-colors hover:bg-[#1C1E55] hover:text-white md:inline-flex lg:text-xl"
                        variant="link"
                        href={product.href}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full space-y-2 lg:hidden">
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="relative h-[950px] w-full overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={item.MobileImage.src}
                      alt={item.title}
                      fill
                      className="object-center"
                    />

                    <div className="absolute inset-0 flex flex-col justify-between px-6 py-12">
                      <div className="flex items-center gap-3 px-4 lg:px-8">
                        <item.icon
                          width={30}
                          height={30}
                          className="text-white"
                        />
                        <h3 className="text-4xl font-medium text-[#FBFBF9]">
                          {item.title}
                        </h3>
                      </div>

                      <div className="rounded-lg bg-[#F4F4F4] p-8">
                        <p className="mb-8 text-base leading-relaxed text-[#2A2A2A] lg:text-lg">
                          {item.body}
                        </p>

                        <AnimatedSlideButton
                          icon={
                            <Icon icon={arrowRight} width={24} height={24} />
                          }
                          text="Learn more"
                          className="inline-flex max-w-max rounded-lg border border-[#1C1E55] p-4 text-xl tracking-[-0.05em] text-[#1C1E55] hover:bg-[#1C1E55] hover:text-white"
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
            <div className="max-w-8xl mx-auto min-h-screen rounded-lg bg-[#F4F4F4] py-20">
              <div className="mx-auto max-w-7xl px-8">
                <p className="text-5xl text-[#080808] lg:text-6xl">
                  Our Core Values
                </p>
              </div>
              <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-2 px-8 sm:grid-cols-12 lg:mt-20">
                <div className="col-span-12 flex flex-col justify-between space-y-6 rounded-lg bg-white p-10 lg:col-span-4">
                  <p className="text-base font-light text-[#2A2A2A] lg:text-lg">
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
                    className="h-12 w-12 object-contain"
                  />
                </div>

                <div className="col-span-12 grid grid-cols-1 gap-2 lg:col-span-8 lg:grid-cols-2">
                  {ourValues.map((f) => (
                    <FeatureCard key={f.title} {...f} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="w-full bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)]">
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}

export function FeatureCard({ title, body, icon }: FeatureCard) {
  return (
    <div className="flex min-h-[300px] flex-col justify-between space-y-16 rounded-lg bg-white p-8 sm:space-y-8 lg:min-h-[365px]">
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
        <p className="lg:text-md text-base">{body}</p>
      </div>
    </div>
  );
}
