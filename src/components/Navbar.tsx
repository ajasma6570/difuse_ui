"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const routes = [
    { title: "Home", url: "/" },
    { title: "Our Company", url: "/about" },
    {
      title: "Our Products",
      url: "/our-products",
      children: [
        { title: "DMSBG Devices", url: "dmsbg-devices" },
        { title: "DPBX Devices", url: "dpbx-devices" },
        { title: "Softphone", url: "softphone" },
      ],
    },
    { title: "Online Store", url: "online-store" },
    { title: "Newsroom", url: "newsroom" },
    { title: "Become a Partner", url: "become-a-partner" },
    { title: "Careers", url: "careers" },
    {
      title: "Resources",
      url: "/resources",
      children: [
        { title: "Forum", url: "forum" },
        { title: "Downloads", url: "downloads" },
        { title: "Documentation", url: "/documentation" },
        { title: "Warranty Portal", url: "/warranty-portal" },
      ],
    },
    { title: "Contact", url: "/contact" },
  ];

  const toggleMenu = (title: string) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  return (
    <nav>
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between py-6 px-6 2xl:px-0 max-w-9xl mx-auto z-50">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Difuse Logo"
            width={150}
            height={50}
            className="h-8  w-auto object-contain"
            priority
          />
        </Link>
        <button onClick={() => setOpen(true)} className="cursor-pointer z-50">
          <MdMenuOpen className="h-8 w-8 text-[#1C1E55]" />
        </button>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-3/4 md:w-1/2 2xl:w-4/12 bg-[#1C1E55] shadow-lg z-50 transform transition-transform duration-300 pt-6 px-12 space-y-8 flex flex-col overflow-y-auto md:overflow-visible ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end ">
          <button onClick={() => setOpen(false)} className="cursor-pointer">
            <MdMenuOpen className="h-11 w-11  text-white" />
          </button>
        </div>

        <div className="flex-1 flex flex-col text-white text-right space-y-4 pb-10">
          {routes.map((route) => (
            <div key={route.title}>
              {route.children ? (
                <>
                  <button
                    onClick={() => toggleMenu(route.title)}
                    className="flex w-full justify-end items-center text-[40px] gap-1"
                  >
                    {" "}
                    {activeMenu === route.title ? (
                      <IoChevronUp className="h-7 w-7" />
                    ) : (
                      <IoChevronDown className="h-7 w-7" />
                    )}
                    <span className="tracking-tighter font-light text-4xl lg:text-5xl">
                      {route.title}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeMenu === route.title ? "max-h-60 mt-2" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col space-y-2 pl-4 text-right">
                      {route.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.url}
                          className="text-2xl"
                          onClick={() => setOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={route.url}
                  className="text-4xl lg:text-5xl font-light block"
                  onClick={() => setOpen(false)}
                >
                  <span className="tracking-tighter">{route.title}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
