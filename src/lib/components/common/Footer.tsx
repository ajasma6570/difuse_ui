"use client";

import React from "react";
import AnimatedSlideButton from "./AnimatedSlideButton";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/offline";
import facebookIcon from "@iconify-icons/ri/facebook-fill";
import twitterIcon from "@iconify-icons/ri/twitter-x-fill";
import linkedinIcon from "@iconify-icons/ri/linkedin-fill";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import phone from "@iconify/icons-lucide/phone";

export default function Footer({
  type = "default",
}: {
  type?: "default" | "product";
}) {
  const about = [
    {
      name: "Our Company",
      url: "/our-company",
    },
    {
      name: "Online Store",
      url: "/online-store",
    },
    {
      name: "Become a Partner",
      url: "/become-a-partner",
    },
    {
      name: "Newsroom",
      url: "/newsroom",
    },
    {
      name: "Careers",
      url: "/careers",
    },
    {
      name: "Privacy Policy",
      url: "/privacy-policy",
    },
  ];

  const help = [
    {
      name: "Contact Us",
      url: "/contact",
    },
    {
      name: "Careers",
      url: "/careers",
    },
    {
      name: "Downloads",
      url: "/resources/downloads",
    },
    {
      name: "Forum",
      url: "/resources/forum",
    },
    {
      name: "Documentation",
      url: "/resources/documentation",
    },
    {
      name: "Warranty Portal",
      url: "/resources/warranty-portal",
    },
  ];

  return (
    <footer className="w-full">
      <div className="max-w-8xl mx-auto w-full px-6 2xl:px-0">
        <div className="grid grid-cols-1 gap-6 pt-28 lg:grid-cols-2">
          <div className="rounded-xl bg-[#25276C] p-8 lg:p-14">
            {type === "default" ? (
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-[clamp(2.5rem,3vw,3.3rem)] leading-tight font-light text-[#FBFBF9]">
                    Interested in Partnering With Difuse?
                  </h2>
                </div>
                <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-lg text-[#FBFBF9] md:flex-1">
                    Our portal is live and reserved for selected integrators,
                    resellers, and collaborators.
                  </p>
                  <AnimatedSlideButton
                    icon={<Icon icon={arrowRight} width={30} height={30} />}
                    text="Learn more"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#FBFBF9] p-4 text-lg font-medium text-[#FBFBF9] transition-colors hover:bg-[#FBFBF9] hover:text-[#25276C] lg:text-xl"
                    variant="link"
                    href="/become-a-partner"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <h2 className="text-[clamp(2.5rem,3vw,3.3rem)] leading-tight font-light text-[#FBFBF9]">
                  Power Your Business
                  <br />
                  with Difuse
                </h2>

                <p className="text-xl text-[#FBFBF9]">
                  Purchase directly from our online store and take full control
                  of your infrastructure.
                </p>
                <AnimatedSlideButton
                  icon={<Icon icon={arrowRight} width={30} height={30} />}
                  text="Explore Online Store"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#FBFBF9] p-4 text-lg font-medium text-[#FBFBF9] transition-colors hover:bg-[#FBFBF9] hover:text-[#25276C] lg:text-xl"
                  variant="link"
                  href="/online-store"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-[#FBFBF9] p-8 lg:p-14">
            <div>
              <h2 className="mb-16 text-[clamp(2.5rem,3vw,3.3rem)] leading-tight font-light text-[#FBFBF9] lg:mb-0">
                Stay in the Loop. Product News That Actually Matters.
              </h2>
            </div>

            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="w-full border border-b border-white md:flex-1"></div>

              <AnimatedSlideButton
                icon={<Icon icon={arrowRight} width={30} height={30} />}
                text="Subscribe"
                className="inline-flex items-center gap-2 rounded-lg border border-[#FBFBF9] p-4 text-lg font-medium text-[#FBFBF9] transition-colors hover:bg-[#FBFBF9] hover:text-[#25276C] lg:text-xl"
                onClick={() => alert("Subscribe functionality coming soon!")}
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-8 py-12">
          <div className="order-2 col-span-12 lg:order-1 lg:col-span-3">
            <div className="mb-8 flex items-center gap-2">
              <Image
                src="/images/logo_white.webp"
                alt="Difuse Logo"
                width={150}
                height={40}
                quality={100}
                className="object-contain"
              />
            </div>
            <p className="text-lg font-light text-[#FBFBF9]">
              Difuse builds intelligent, self-hosted infrastructure that
              replaces fragmented IT, empowering businesses to scale smarter,
              faster, and on their own terms.
            </p>
          </div>

          <div className="order-3 col-span-12 sm:col-span-6 lg:order-2 lg:col-span-3">
            <h3 className="mb-4 text-xl font-semibold text-[#FBFBF9]">About</h3>
            <ul className="space-y-3 text-lg">
              {about.map((item) => (
                <li
                  key={item.name}
                  className="text-[#6C6FD2] hover:text-[#FBFBF9]"
                >
                  <Link href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-4 col-span-12 sm:col-span-6 lg:order-3 lg:col-span-2">
            <h3 className="mb-4 text-xl font-semibold text-[#FBFBF9]">Help</h3>
            <ul className="space-y-2 text-lg text-[#6C6FD2]">
              {help.map((item) => (
                <li
                  key={item.name}
                  className="text-[#6C6FD2] hover:text-[#FBFBF9]"
                >
                  <Link href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 col-span-12 lg:order-4 lg:col-span-4">
            <h3 className="mb-6 text-[clamp(2rem,2.5vw,5.5rem)] font-normal text-[#FBFBF9]">
              Have any Queries?
            </h3>
            <p className="mb-8 text-lg font-light text-[#FBFBF9] lg:mb-6">
              Reach out to our team. Tap the button to call us directly or visit
              our contact page to send a message.
            </p>
            <div className="flex w-full flex-wrap gap-3 text-[#FBFBF9]">
              <AnimatedSlideButton
                icon={<Icon icon={phone} width={24} height={24} />}
                text="1800-599-TECH"
                className="inline-flex max-w-max items-center gap-2 rounded-lg border border-[#FBFBF9] p-4 font-medium text-[#FBFBF9] transition-colors hover:bg-[#FBFBF9] hover:text-[#25276C] sm:text-xl"
                variant="link"
                href="tel:18005998324"
              />

              <AnimatedSlideButton
                icon={<Icon icon={arrowRight} width={24} height={24} />}
                text="Contact"
                className="inline-flex max-w-max rounded-lg p-5 tracking-[-0.05em] hover:bg-[#FBFBF9] hover:text-[#1C1E55] sm:text-xl"
                variant="link"
                href="/contact"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-[#FBFBF9]/20 py-5 md:flex-row">
          <div className="flex items-center gap-4 text-[#6C6FD2]">
            <span className="text-lg text-[#FBFBF9]">Follow us on:</span>
            <Link href="https://www.facebook.com/DifuseHQ" target="_blank">
              <Icon
                icon={facebookIcon}
                width={30}
                height={30}
                className="cursor-pointer hover:text-white"
              />
            </Link>
            <Link href="https://x.com/DifuseHQ" target="_blank">
              <Icon
                icon={twitterIcon}
                width={30}
                height={30}
                className="cursor-pointer hover:text-white"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/iridiasolutions/about/"
              target="_blank"
            >
              <Icon
                icon={linkedinIcon}
                width={30}
                height={30}
                className="cursor-pointer hover:text-white"
              />
            </Link>
          </div>
          <div className="py-4 text-center text-base text-[#FBFBF9] md:text-left md:text-lg">
            Copyright © {new Date().getFullYear()} Iridia Solutions Pvt. Ltd.
            All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
