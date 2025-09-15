import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import AnimatedSlideButton from "./AnimatedSlideButton";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const about = [
    {
      name: "Our Company",
      url: "#",
    },
    {
      name: "Online Store",
      url: "#",
    },
    {
      name: "Become a Partner",
      url: "#",
    },
    {
      name: "Newsroom",
      url: "#",
    },
    {
      name: "Careers",
      url: "#",
    },
    {
      name: "Privacy Policy",
      url: "#",
    },
  ];

  const help = [
    {
      name: "Contact Us",
      url: "#",
    },
    {
      name: "Careers",
      url: "#",
    },
    {
      name: "Downloads",
      url: "#",
    },
    {
      name: "Forum",
      url: "#",
    },
    {
      name: "Documentation",
      url: "#",
    },
    {
      name: "Warranty Portal",
      url: "#",
    },
  ];

  return (
    <footer className="w-full">
      <div className="max-w-8xl mx-auto w-full px-6 2xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-28">
          <div className="border border-[#FBFBF9] rounded-xl p-8 flex flex-col justify-between h-[400px]">
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
                icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                text="Subscribe"
                className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-4 rounded-lg text-lg font-medium inline-flex"
              />
            </div>
          </div>

          <div className="bg-[#25276C] rounded-xl p-8 flex flex-col justify-between h-[400px]">
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
                icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                text="Learn more"
                className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-4 rounded-lg text-lg font-medium inline-flex"
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
            <p className="text-lg text-[#FBFBF9] font-light">
              Difuse builds intelligent, self-hosted infrastructure that
              replaces fragmented IT, empowering businesses to scale smarter,
              faster, and on their own terms.
            </p>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-3 order-3 lg:order-2">
            <h3 className="font-semibold mb-4 text-[#FBFBF9]">About</h3>
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
            <h3 className="font-semibold mb-4 text-[#FBFBF9]">Help</h3>
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

          <div className="col-span-12 lg:col-span-4 order-1 lg:order-4">
            <h3 className="text-4xl md:text-5xl 2xl:text-6xl font-normal mb-4 text-[#FBFBF9]">
              Have any Queries?
            </h3>
            <p className="text-[#FBFBF9] text-lg font-light mb-4">
              Reach out to our team. Tap the button to call us directly or visit
              our contact page to send a message.
            </p>
            <div className="flex flex-col md:flex-row gap-3 text-[#FBFBF9] w-full">
              <AnimatedSlideButton
                icon={<FiPhone className="h-5 w-5 lg:h-6 lg:w-6" />}
                text="1800-599-TECH"
                className="!w-full items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-2 rounded-lg text-sm font-medium inline-flex"
              />
              <AnimatedSlideButton
                icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                text="Contact"
                className="!w-full items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-2 rounded-lg text-sm font-medium inline-flex"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#FBFBF9]/20 flex md:flex-row flex-col py-5 items-center justify-between">
          <div className="flex items-center gap-4 text-[#6C6FD2]">
            <span className="text-sm text-[#FBFBF9]">Follow us on:</span>
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaXTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
          <div className="text-sm text-[#FBFBF9] py-4">
            Copyright © {new Date().getFullYear()} Iridia Solutions Pvt. Ltd.
            All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
