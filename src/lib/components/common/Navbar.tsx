"use client";

import Image from "next/image";
import Link from "next/link";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";
import { MdMenuOpen } from "react-icons/md";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { LuArrowLeft } from "react-icons/lu";
import { motion } from "motion/react";
import { cn } from "@/lib/utils/tailwindmerge";

interface NavRoute {
  title: string;
  url: string;
  children?: { title: string; url: string }[];
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const routes: NavRoute[] = useMemo(
    () => [
      { title: "Home", url: "/" },
      { title: "Our Company", url: "/our-company" },
      {
        title: "Our Products",
        url: "/our-products",
        children: [
          { title: "DMSBG Devices", url: "/our-products/dmsbg-devices" },
          { title: "DPBX Devices", url: "/our-products/dpbx-devices" },
          { title: "Softphone", url: "/our-products/softphone" },
        ],
      },
      { title: "Online Store", url: "/online-store" },
      { title: "Newsroom", url: "/newsroom" },
      { title: "Become a Partner", url: "/become-a-partner" },
      { title: "Careers", url: "/careers" },
      {
        title: "Resources",
        url: "/resources",
        children: [
          { title: "Forum", url: "/resources/forum" },
          { title: "Downloads", url: "/resources/downloads" },
          { title: "Documentation", url: "/resources/documentation" },
          { title: "Warranty Portal", url: "/resources/warranty-portal" },
        ],
      },
      { title: "Contact", url: "/contact" },
    ],
    []
  );

  const toggleMenu = useCallback((title: string) => {
    setActiveMenu((prev) => (prev === title ? null : title));
  }, []);

  const activeParent = useMemo(() => {
    const parent = routes.find(
      (r) => r.children && r.children.some((child) => child.url === pathname)
    );
    return parent?.title ?? null;
  }, [pathname, routes]);

  const handleStickyMenu = useCallback(() => {
    setStickyMenu(window.scrollY >= 80);
  }, []);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, [handleStickyMenu]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6",
        stickyMenu ? "backdrop-blur-sm" : ""
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between py-3 w-full max-w-10xl mx-auto transform transition-all duration-300",
          stickyMenu ? "lg:py-4" : "lg:py-6"
        )}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between w-full max-w-10xl mx-auto z-50">
          <Link href="/" aria-label="Home">
            <Image
              src="/images/logo.svg"
              alt="Difuse Logo"
              width={150}
              height={50}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="cursor-pointer z-50"
            aria-label="Open menu"
          >
            <MdMenuOpen className="h-8 w-8 text-[#1C1E55]" />
          </button>
        </div>

        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-screen w-full sm:w-3/4 md:w-1/2 2xl:w-4/12 bg-[#1C1E55] shadow-lg z-50 transform transition-transform duration-300 pt-6 px-12 space-y-8 flex flex-col overflow-y-auto md:overflow-visible ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="cursor-pointer"
              aria-label="Close menu"
            >
              <MdMenuOpen className="h-11 w-11 text-white" />
            </button>
          </div>

          <div
            ref={navbarRef}
            className="flex-1 flex flex-col text-white text-right space-y-4 pb-10"
          >
            {routes.map((route) => {
              const isParentActive =
                pathname === route.url ||
                (route.children &&
                  route.children.some((child) => pathname === child.url));

              const menuIsOpen =
                activeMenu === route.title || activeParent === route.title;

              return (
                <div key={route.title}>
                  {route.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleMenu(route.title)}
                        className={`flex w-full justify-end items-center gap-1 cursor-pointer ${
                          isParentActive
                            ? "text-[#6C6FD2]"
                            : "hover:text-[#6C6FD2]"
                        }`}
                        aria-expanded={menuIsOpen}
                        aria-controls={`submenu-${route.title}`}
                      >
                        {menuIsOpen ? (
                          <IoChevronUp className="h-7 w-7" />
                        ) : (
                          <IoChevronDown className="h-7 w-7" />
                        )}
                        <span className="tracking-tighter font-light text-4xl lg:text-5xl">
                          {route.title}
                        </span>
                      </button>

                      <div
                        id={`submenu-${route.title}`}
                        className={`overflow-hidden transition-all duration-300 ${
                          menuIsOpen ? "max-h-60 mt-2" : "max-h-0"
                        }`}
                      >
                        <div className="flex flex-col space-y-2 pl-4 text-right">
                          {route.children.map((child) => {
                            const isChildActive = pathname === child.url;
                            return (
                              <Link
                                key={child.title}
                                href={child.url}
                                className={`flex w-full items-center justify-end text-2xl ${
                                  isChildActive
                                    ? "text-[#6C6FD2]"
                                    : "hover:text-[#6C6FD2]"
                                }`}
                                onClick={() => setOpen(false)}
                              >
                                <motion.div
                                  className="relative flex w-full items-center justify-end overflow-hidden"
                                  initial="rest"
                                  animate="rest"
                                  whileHover="hover"
                                >
                                  <motion.span
                                    className="tracking-tight inline-block"
                                    variants={{
                                      rest: { x: 0 },
                                      hover: { x: -35 },
                                    }}
                                    transition={{
                                      duration: 0.35,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    {child.title}
                                  </motion.span>
                                  <motion.span
                                    className="absolute right-0 top-1/2 -translate-y-1/2"
                                    variants={{
                                      rest: { x: -35, opacity: 0 },
                                      hover: { x: 0, opacity: 1 },
                                    }}
                                    transition={{
                                      duration: 0.35,
                                      ease: "easeInOut",
                                    }}
                                    aria-hidden
                                  >
                                    <LuArrowLeft className="text-[#6C6FD2]" />
                                  </motion.span>
                                </motion.div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={route.url}
                      className={`block text-4xl lg:text-5xl font-light text-right ${
                        pathname === route.url
                          ? "text-[#6C6FD2]"
                          : "hover:text-[#6C6FD2]"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      <motion.div
                        className="relative flex w-full items-center justify-end overflow-hidden"
                        initial="rest"
                        animate="rest"
                        whileHover="hover"
                      >
                        <motion.span
                          className="tracking-tight text-4xl lg:text-5xl font-light inline-block"
                          variants={{
                            rest: { x: 0 },
                            hover: { x: -65 },
                          }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                          {route.title}
                        </motion.span>
                        <motion.span
                          className="absolute right-0 top-1/2 -translate-y-1/2"
                          variants={{
                            rest: { x: -65, opacity: 0 },
                            hover: { x: 0, opacity: 1 },
                          }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          aria-hidden
                        >
                          <LuArrowLeft className="text-[#6C6FD2]" />
                        </motion.span>
                      </motion.div>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
