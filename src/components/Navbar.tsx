"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const routes = [
    { title: "Home", url: "/" },
    { title: "Our Company", url: "our-company" },
    {
      title: "Our Products",
      url: "/our-products",
      children: [
        { title: "DMSBG Devices", url: "dmsbg-devices" },
        { title: "DPBX Devices", url: "dpbx-devices" },
        { title: "Softphone", url: "/softphone" },
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
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between py-6 lg:max-w-[100rem] mx-auto px-6 lg:px-8 xl:px-10 z-50">
        <Image
          src="/images/logo.svg"
          alt="Difuse Logo"
          width={150}
          height={50}
          className="h-8  w-auto object-contain"
          priority
        />
        <button onClick={() => setOpen(true)} className="cursor-pointer z-50">
          <MdMenuOpen className="h-8 w-8 text-[#1C1E55]" />
        </button>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Slide-in Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 lg:w-4/12 bg-[#1C1E55] shadow-lg z-50 transform transition-transform duration-300 pt-6 px-12 space-y-8 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end ">
          <button onClick={() => setOpen(false)}>
            <MdMenuOpen className="h-11 w-11  text-white" />
          </button>
        </div>

        {/* Menu content */}
        <div className="flex flex-col  text-white text-right">
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
                    <span className="tracking-tighter font-light">
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
                        <a
                          key={child.title}
                          href={child.url}
                          className="text-base text-gray-300 hover:text-white"
                        >
                          {child.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a href={route.url} className="text-[40px] font-light block">
                  <span className="tracking-tighter">{route.title}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
