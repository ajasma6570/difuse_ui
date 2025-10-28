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

interface NavRoute {
  title: string;
  url?: string;
  href?: string;
  children?: { title: string; url?: string; href?: string }[];
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

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
          { title: "Downloads", url: "/resources/downloads" },
          { title: "Documentation", href: "https://docs.difuse.io/dmsbg-100/" },
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
      (r) =>
        r.children &&
        r.children.some((child) => {
          const childUrl = child.href ?? child.url;
          return childUrl === pathname;
        })
    );
    return parent?.title ?? null;
  }, [pathname, routes]);

  useEffect(() => {
    if (open) {
      // Get scrollbar width before hiding it
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Apply overflow hidden and maintain scrollbar space
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Reset styles
      document.documentElement.style.overflow = "";
      document.documentElement.style.paddingRight = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.documentElement.style.paddingRight = "";
    };
  }, [open]);

  //outside click the container close the menu
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      container.current &&
      !container.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [open, handleClickOutside]);

  return (
    <header className="absolute top-0 right-0 left-0 z-50 px-6">
      <nav className="max-w-10xl mx-auto flex w-full transform items-center justify-between py-6 transition-all duration-300">
        {/* Top bar */}
        <div className="max-w-10xl z-50 mx-auto flex w-full items-center justify-between">
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
            className="z-50 cursor-pointer"
            aria-label="Open menu"
          >
            <MdMenuOpen className="h-8 w-8 text-[#1C1E55]" />
          </button>
        </div>

        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
            open ? "visible opacity-100" : "invisible opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          ref={container}
          className={`fixed top-0 right-0 z-50 flex h-screen w-full transform flex-col space-y-8 overflow-y-auto bg-[#1C1E55] px-12 pt-6 shadow-lg transition-transform duration-300 sm:w-3/4 md:w-1/2 md:overflow-visible 2xl:w-4/12 ${
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
            className="flex flex-1 flex-col space-y-4 pb-10 text-right text-white"
          >
            {routes.map((route) => {
              const routeUrl = route.href ?? route.url;
              const isParentActive =
                pathname === routeUrl ||
                (route.children &&
                  route.children.some((child) => {
                    const childUrl = child.href ?? child.url;
                    return pathname === childUrl;
                  }));

              const menuIsOpen =
                activeMenu === route.title || activeParent === route.title;

              return (
                <div key={route.title}>
                  {route.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleMenu(route.title)}
                        className={`flex w-full cursor-pointer items-center justify-end gap-1 ${
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
                        <span className="text-4xl font-light tracking-tighter lg:text-5xl">
                          {route.title}
                        </span>
                      </button>

                      <div
                        id={`submenu-${route.title}`}
                        className={`overflow-hidden transition-all duration-300 ${
                          menuIsOpen ? "mt-2 max-h-60" : "max-h-0"
                        }`}
                      >
                        <div className="flex flex-col space-y-2 pl-4 text-right">
                          {route.children.map((child) => {
                            const childUrl = child.href ?? child.url;
                            const isExternal = childUrl?.startsWith("http");
                            const isChildActive = pathname === childUrl;
                            return (
                              <Link
                                key={child.title}
                                href={childUrl ?? "/"}
                                className={`flex w-full items-center justify-end text-2xl ${
                                  isChildActive
                                    ? "text-[#6C6FD2]"
                                    : "hover:text-[#6C6FD2]"
                                }`}
                                onClick={() => setOpen(false)}
                                {...(isExternal
                                  ? {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                    }
                                  : {})}
                              >
                                <motion.div
                                  className="relative flex w-full items-center justify-end overflow-hidden"
                                  initial="rest"
                                  animate="rest"
                                  whileHover="hover"
                                >
                                  <motion.span
                                    className="inline-block tracking-tight"
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
                                    className="absolute top-1/2 right-0 -translate-y-1/2"
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
                      href={routeUrl ?? "/"}
                      className={`block text-right text-4xl font-light lg:text-5xl ${
                        pathname === routeUrl
                          ? "text-[#6C6FD2]"
                          : "hover:text-[#6C6FD2]"
                      }`}
                      onClick={() => setOpen(false)}
                      {...(routeUrl?.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <motion.div
                        className="relative flex w-full items-center justify-end overflow-hidden"
                        initial="rest"
                        animate="rest"
                        whileHover="hover"
                      >
                        <motion.span
                          className="inline-block text-4xl font-light tracking-tight lg:text-5xl"
                          variants={{
                            rest: { x: 0 },
                            hover: { x: -65 },
                          }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                          {route.title}
                        </motion.span>
                        <motion.span
                          className="absolute top-1/2 right-0 -translate-y-1/2"
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
