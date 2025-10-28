"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/utils/tailwindmerge";
import { Vectors } from "@/assets/vectors";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";

const FLEX_GROW_DURATION = 600;
const CARD_HEIGHT_COLLAPSED = 120;
const CARD_HEIGHT_EXPANDED = 360;
const MotionLink = motion(Link);

export default function ProductsOverview() {
  const [expandedCardId, setExpandedCardId] = useState<number | null>(1);
  const [activeCardId, setActiveCardId] = useState<number | null>(1);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleCardClick = (cardId: number) => {
    if (expandedCardId === cardId) return;
    setExpandedCardId(cardId);
    setActiveCardId(cardId);
  };

  const cards = [
    {
      id: 1,
      title: "DMSBG Devices",
      icon: Vectors.Device,
      desc: "All-in-one hardware units combining routing, firewall, Wi-Fi 6, VPN, DNS management...",
      img: "/images/frame1.webp",
      href: "/our-products/dmsbg-devices",
    },
    {
      id: 2,
      title: "DPBX Devices",
      icon: Vectors.Call,
      desc: "A complete software-defined telephony system that runs on your local network. Manage internal...",
      img: "/images/frame2.webp",
      href: "/our-products/dpbx-devices",
    },
    {
      id: 3,
      title: "Softphone",
      icon: Vectors.Cube,
      desc: "A cross-platform calling app that integrates natively with your PBX system. Make and...",
      img: "/images/frame3.webp",
      href: "/our-products/softphone",
    },
  ];

  return (
    <section className="lg:max-w-8xl mx-auto w-full space-y-10 px-6 py-10 lg:space-y-40 lg:px-4">
      <div className="flex flex-col gap-8 lg:flex-row">
        <p className="w-full text-[42px] leading-tight font-normal tracking-tight text-black lg:w-1/2 lg:text-5xl xl:text-6xl 2xl:text-[70px]">
          One Platform. Multiple Products.
        </p>
        <div className="flex w-full flex-col justify-end lg:w-1/2">
          <p className="text-sm leading-relaxed font-light text-gray-700 xl:text-lg">
            Our ecosystem is built around modular, interoperable products — each
            designed to simplify your infrastructure while giving you full
            control. From core network services to secure communication tools,
            every product works seamlessly with the platform and each other.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:hidden">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            onClick={() => handleCardClick(card.id)}
            onHoverStart={() => setHovered(card.id)}
            onHoverEnd={() => setHovered(null)}
            initial="collapsed"
            animate={expandedCardId === card.id ? "expanded" : "collapsed"}
            exit="exit"
            variants={{
              expanded: {
                opacity: 1,
                height: CARD_HEIGHT_EXPANDED,
              },
              collapsed: {
                opacity: 1,
                height: CARD_HEIGHT_COLLAPSED,
              },
              exit: {
                opacity: 0,
                height: CARD_HEIGHT_COLLAPSED,
              },
            }}
            transition={{
              duration: FLEX_GROW_DURATION / 1000,
              ease: "easeInOut",
            }}
            className={cn(
              "group relative w-full cursor-pointer overflow-hidden rounded-xl shadow-md",
              expandedCardId === card.id ? "items-start" : "items-center"
            )}
            style={{
              minHeight: CARD_HEIGHT_COLLAPSED,
            }}
          >
            <motion.div
              className="absolute inset-0 -z-10 overflow-hidden rounded-xl bg-[#1C1E55]"
              initial={{ scale: 1 }}
              animate={hovered === card.id ? { scale: 1.08 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="rounded-xl object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 flex h-full flex-col justify-between p-8">
              <div className="h-full">
                <AnimatePresence mode="wait">
                  {activeCardId === card.id ? (
                    <motion.p
                      key="title"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          delay: 0.3,
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                      }}
                      exit={{
                        opacity: 0,
                        x: 30,
                        transition: {
                          delay: 0,
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                      }}
                      className="relative z-10 w-full text-4xl font-normal tracking-tight text-white"
                    >
                      {card.title}
                    </motion.p>
                  ) : (
                    <motion.div
                      key="icon-content"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }}
                      className="flex h-full w-full items-center justify-between"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          transition: { delay: 0.1, duration: 0.2 },
                        }}
                      >
                        <Image
                          src={card.icon.src}
                          alt={card.title}
                          width={38}
                          height={38}
                          className="mb-2 object-contain"
                        />
                      </motion.div>

                      <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { delay: 0.15, duration: 0.2 },
                        }}
                        exit={{
                          opacity: 0,
                          x: 20,
                          transition: { duration: 0.15 },
                        }}
                        className="cursor-pointer rounded-md bg-white p-3"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon
                          icon={arrowRight}
                          width={24}
                          height={24}
                          className="text-[#1C1E55]"
                        />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative z-10 space-y-5">
                {activeCardId === card.id && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key="mobile-view-product"
                      initial="initial"
                      variants={{
                        initial: { opacity: 0 },
                        expanded: {
                          opacity: 1,
                          transition: {
                            delay: 0.3,
                            duration: 0.5,
                            ease: "easeInOut",
                          },
                        },
                      }}
                      animate={
                        expandedCardId === card.id ? "expanded" : "initial"
                      }
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <motion.p className="text-xl font-light text-white">
                        {card.desc}
                      </motion.p>
                      <motion.button
                        key="text-btn"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25 }}
                        className="mt-2 flex items-center gap-3 rounded-md bg-white p-5 text-xl text-[#1C1E55]"
                      >
                        <Icon
                          icon={arrowRight}
                          width={28}
                          height={28}
                          className="text-[#1C1E55]"
                        />
                        <span>Learn more</span>
                      </motion.button>{" "}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 hidden grid-cols-12 gap-3 lg:grid">
        <div className="col-span-8 flex gap-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              onClick={() => handleCardClick(card.id)}
              onHoverStart={() => setHovered(card.id)}
              onHoverEnd={() => setHovered(null)}
              initial={false}
              animate={
                expandedCardId === card.id
                  ? { flexGrow: 1 }
                  : { flexGrow: 0.0001 }
              }
              transition={{
                duration: FLEX_GROW_DURATION / 1000,
                ease: "easeInOut",
              }}
              style={{
                minWidth: 200,
                flexBasis: 0,
              }}
              className={cn(
                `group relative flex h-[706px] cursor-pointer flex-col justify-between overflow-hidden rounded-xl p-12 text-white shadow-md`,
                expandedCardId === card.id ? "" : "items-center"
              )}
            >
              <motion.div
                className="absolute inset-0 -z-10 overflow-hidden rounded-xl bg-[#1C1E55]"
                initial={{ scale: 1 }}
                animate={hovered === card.id ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  quality={100}
                  className="rounded-xl object-cover"
                />
              </motion.div>

              <div>
                <AnimatePresence mode="wait">
                  {activeCardId === card.id ? (
                    <motion.p
                      key="title"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="relative z-10 w-full text-5xl font-normal tracking-tight"
                    >
                      {card.title}
                    </motion.p>
                  ) : (
                    <motion.div
                      key="icon"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="mx-auto flex h-full w-full items-center justify-center"
                    >
                      <Image
                        src={card.icon.src}
                        alt={card.title}
                        width={35}
                        height={35}
                        className="object-contain"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative z-10 space-y-6">
                {activeCardId === card.id && (
                  <motion.p
                    variants={{
                      initial: { opacity: 0 },
                      hovered: {
                        opacity: 1,
                        transition: {
                          delay: 0.3,
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                      },
                      exit: {
                        opacity: 0,
                        transition: {
                          delay: 0,
                          duration: 0.2,
                          ease: "easeInOut",
                        },
                      },
                    }}
                    initial="initial"
                    animate={hovered === card.id ? "hovered" : "initial"}
                    exit="exit"
                    className="transform text-lg font-light transition-all duration-500"
                  >
                    {card.desc}
                  </motion.p>
                )}

                <AnimatePresence mode="wait">
                  {activeCardId === card.id && hovered === card.id ? (
                    <motion.button
                      key="text-btn"
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.3,
                        ease: "easeInOut",
                      }}
                      className="flex items-center gap-2 rounded-md bg-white p-3 text-[#1C1E55]"
                    >
                      <Link
                        href={card.href}
                        className="flex items-center gap-2"
                      >
                        <Icon
                          icon={arrowRight}
                          width={28}
                          height={28}
                          className="text-[#1C1E55]"
                        />
                        <span className="text-lg">Learn more</span>
                      </Link>
                    </motion.button>
                  ) : (
                    <MotionLink
                      key="icon-btn"
                      href={card.href}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.3,
                        ease: "easeInOut",
                      }}
                      className="inline-flex cursor-pointer items-center justify-center rounded-md bg-white p-3"
                      aria-label={`Learn more about ${card.title}`}
                    >
                      <Icon
                        icon={arrowRight}
                        width={28}
                        height={28}
                        className="text-[#1C1E55]"
                      />
                    </MotionLink>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="col-span-4 flex h-[706px] flex-col justify-between rounded-xl bg-[linear-gradient(to_bottom,black_30%,#25276C_100%)] p-12 shadow-md">
          <p className="text-lg font-light text-[#FBFBF9]">
            Whether you&#39;re deploying a single MSBG in an office, setting up
            a private phone system, or rolling out remote tools — every product
            in our lineup is designed to work in sync, scale with your needs,
            and eliminate IT complexity.
          </p>

          <div className="space-y-4 text-xl text-[#FBFBF9]">
            <Image
              src={Vectors.DifuseWhite.src}
              alt="Difuse Logo"
              width={40}
              height={40}
              className="mb-6 object-contain"
            />
            <p>Our platform is designed to scale.</p>
            <p className="text-[#A8A8A8]">
              Get updates from our{" "}
              <Link href="/newsroom" className="font-bold text-[#FBFBF9]">
                Newsroom
              </Link>
              , <br /> or subscribe to our{" "}
              <button
                onClick={() => {
                  // TODO: Implement newsletter subscription
                  alert("Newsletter subscription coming soon!");
                }}
                className="cursor-pointer border-none bg-transparent p-0 font-bold text-[#FBFBF9] hover:text-white"
                aria-label="Subscribe to newsletter (coming soon)"
              >
                Newsletter
              </button>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
