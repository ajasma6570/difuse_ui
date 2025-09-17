"use client";

import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import AnimatedSlideButton from "./AnimatedSlideButton";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default function Footer() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-28">
          <div className="border border-[#FBFBF9] rounded-xl p-8 lg:p-14 flex flex-col justify-between">
            <div>
              <h2 className="text-[#FBFBF9] text-3xl lg:text-5xl 2xl:text-6xl font-light leading-tight">
                Stay in the Loop.
                <br />
                Product News That
                <br />
                Actually Matters.
              </h2>
            </div>
            <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="border border-white w-full border-b md:flex-1"></div>

              <AnimatedSlideButton
                icon={<LuArrowRight size={30} />}
                text="Subscribe"
                className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors p-4 rounded-lg text-lg lg:text-xl font-medium inline-flex"
                onClick={() => alert("Subscribe functionality coming soon!")}
              />
            </div>
          </div>

          <div className="bg-[#25276C] rounded-xl p-8 lg:p-14 flex flex-col justify-between">
            <div>
              <h2 className="text-[#FBFBF9] text-3xl lg:text-5xl 2xl:text-6xl font-light leading-tight">
                Interested in
                <br /> Partnering With
                <br /> Difuse?
              </h2>
            </div>
            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ">
              <p className="text-lg text-[#FBFBF9] md:flex-1">
                Our portal is live and reserved for selected integrators,
                resellers, and collaborators.
              </p>
              <AnimatedSlideButton
                icon={<LuArrowRight size={30} />}
                text="Learn more"
                className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors p-4 rounded-lg text-lg lg:text-xl font-medium inline-flex"
                variant="link"
                href="/become-a-partner"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 py-12 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3 order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-8">
              <Image
                src="/images/logo_white.png"
                alt="Difuse Logo"
                width={150}
                height={40}
                quality={100}
                className="object-contain"
              />
            </div>
            <p className="text-lg text-[#FBFBF9] font-light ">
              Difuse builds intelligent, self-hosted infrastructure that
              replaces fragmented IT, empowering businesses to scale smarter,
              faster, and on their own terms.
            </p>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-3 order-3 lg:order-2">
            <h3 className="font-semibold mb-4 text-[#FBFBF9] text-xl">About</h3>
            <ul className="space-y-3  text-lg">
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

          <div className="col-span-12 sm:col-span-6 lg:col-span-2 order-4 lg:order-3">
            <h3 className="font-semibold mb-4 text-[#FBFBF9] text-xl">Help</h3>
            <ul className="space-y-2 text-[#6C6FD2] text-lg">
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

          <div className="col-span-12 lg:col-span-4 order-1 lg:order-4 ">
            <h3 className="text-4xl md:text-5xl 2xl:text-6xl font-normal mb-6 text-[#FBFBF9]">
              Have any Queries?
            </h3>
            <p className="text-[#FBFBF9] text-lg font-light mb-8 lg:mb-6">
              Reach out to our team. Tap the button to call us directly or visit
              our contact page to send a message.
            </p>
            <div className="flex flex-wrap gap-3 text-[#FBFBF9] w-full">
              <AnimatedSlideButton
                icon={<FiPhone size={20} />}
                text="1800-599-TECH"
                className="max-w-max items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors p-4 rounded-lg sm:text-xl font-medium inline-flex"
                variant="link"
                href="tel:18005998324"
              />

              <AnimatedSlideButton
                icon={<LuArrowRight className="h-6 w-6" />}
                text="Contact"
                className="inline-flex hover:bg-[#FBFBF9] hover:text-[#1C1E55]  rounded-lg sm:text-xl tracking-[-0.05em] p-5 max-w-max "
                variant="link"
                href="/contact"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#FBFBF9]/20 flex md:flex-row flex-col py-5 items-center justify-between">
          <div className="flex items-center gap-4 text-[#6C6FD2]">
            <span className="text-lg text-[#FBFBF9]">Follow us on:</span>
            <Link href="https://www.facebook.com/DifuseHQ" target="_blank">
              <FaFacebookF
                size={24}
                className="hover:text-white cursor-pointer"
              />
            </Link>
            <Link href="https://x.com/DifuseHQ" target="_blank">
              <FaXTwitter
                size={24}
                className="hover:text-white cursor-pointer"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/iridiasolutions/about/"
              target="_blank"
            >
              <FaLinkedinIn
                size={24}
                className="hover:text-white cursor-pointer"
              />
            </Link>
          </div>
          <div className="text-base text-center md:text-left md:text-lg text-[#FBFBF9] py-4">
            Copyright © {new Date().getFullYear()} Iridia Solutions Pvt. Ltd.
            All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
