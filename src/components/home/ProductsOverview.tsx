import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/tailwindmerge";
import { useMediaQuery } from "react-responsive";
import { Images } from "@/assets/vectors";

const FLEX_GROW_DURATION = 600;
const CARD_HEIGHT_COLLAPSED = 140;
const CARD_HEIGHT_EXPANDED = 320;

export default function ProductsOverview() {
  const [expandedCardId, setExpandedCardId] = useState<number | null>(1);
  const [activeCardId, setActiveCardId] = useState<number | null>(1);
  const [hovered, setHovered] = useState<number | null>(null);

  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const handleCardClick = (cardId: number) => {
    if (expandedCardId === cardId) return;
    setExpandedCardId(cardId);
    setActiveCardId(null);
    setTimeout(() => {
      setActiveCardId(cardId);
    }, FLEX_GROW_DURATION);
  };

  const cards = [
    {
      id: 1,
      title: "DMSBG Devices",
      icon: Images.Device,
      desc: "All-in-one hardware units combining routing, firewall, Wi-Fi 6, VPN, DNS management...",
      img: "/images/frame1.png",
    },
    {
      id: 2,
      title: "DPBX Devices",
      icon: Images.Call,
      desc: "A complete software-defined telephony system that runs on your local network. Manage internal...",
      img: "/images/frame2.png",
    },
    {
      id: 3,
      title: "Softphone",
      icon: Images.Cube,
      desc: "A cross-platform calling app that integrates natively with your PBX system. Make and...",
      img: "/images/frame3.png",
    },
  ];

  return (
    <section className="py-10 lg:max-w-8xl mx-auto px-6 lg:px-4 space-y-10 lg:space-y-40 w-full">
      <div className="flex flex-col lg:flex-row gap-8">
        <p className="w-full lg:w-1/2 text-[42px] lg:text-5xl xl:text-6xl 2xl:text-[70px] font-normal leading-tight tracking-tight text-black">
          One Platform. Multiple Products.
        </p>
        <div className="w-full lg:w-1/2 flex flex-col justify-end ">
          <p className="text-sm xl:text-lg font-light leading-relaxed text-gray-700 ">
            Our ecosystem is built around modular, interoperable products — each
            designed to simplify your infrastructure while giving you full
            control. From core network services to secure communication tools,
            every product works seamlessly with the platform and each other.
          </p>
        </div>
      </div>
      {isMobile ? (
        <div className="flex flex-col gap-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              onClick={() => handleCardClick(card.id)}
              onHoverStart={() => setHovered(card.id)}
              onHoverEnd={() => setHovered(null)}
              initial={false}
              animate={
                expandedCardId === card.id
                  ? { height: CARD_HEIGHT_EXPANDED }
                  : { height: CARD_HEIGHT_COLLAPSED }
              }
              transition={{
                duration: FLEX_GROW_DURATION / 1000,
                ease: "easeInOut",
              }}
              className={cn(
                "relative rounded-xl shadow-md cursor-pointer overflow-hidden group w-full ",
                expandedCardId === card.id ? "items-start" : "items-center"
              )}
              style={{
                minHeight: CARD_HEIGHT_COLLAPSED,
                height:
                  expandedCardId === card.id
                    ? CARD_HEIGHT_EXPANDED
                    : CARD_HEIGHT_COLLAPSED,
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-xl -z-10 bg-[#1C1E55] overflow-hidden"
                initial={{ scale: 1 }}
                animate={hovered === card.id ? { scale: 1.08 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  quality={100}
                  className="object-cover rounded-xl"
                />
              </motion.div>
              <div className="absolute inset-0 p-6 flex flex-col h-full justify-between">
                <div className="h-full">
                  {activeCardId === card.id ? (
                    <motion.p className="text-2xl font-normal tracking-tight relative z-10 w-full text-white">
                      {card.title}
                    </motion.p>
                  ) : (
                    <div className="flex items-center justify-between h-full w-full">
                      <Image
                        src={card.icon.src}
                        alt={card.title}
                        width={38}
                        height={38}
                        className="object-contain mb-2"
                      />
                      <motion.button
                        key="icon-btn"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-md p-3 cursor-pointer "
                      >
                        <FiArrowRight className="text-[#1C1E55] h-6 w-6" />
                      </motion.button>
                    </div>
                  )}
                </div>
                <div className="space-y-5 relative z-10">
                  {activeCardId === card.id && (
                    <motion.p className="text-base font-light text-white">
                      {card.desc}
                    </motion.p>
                  )}

                  <AnimatePresence mode="wait">
                    {activeCardId === card.id && (
                      <motion.button
                        key="text-btn"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25 }}
                        className="text-[#1C1E55] bg-white rounded-md px-6 py-3 flex items-center gap-3 font-semibold mt-2"
                      >
                        <FiArrowRight className="text-[#1C1E55] h-6 w-6" />
                        <span>Learn more</span>
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-3 mt-12 ">
          <div className="col-span-8 flex gap-3 ">
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
                  `rounded-xl shadow-md cursor-pointer h-[706px] p-12 flex flex-col justify-between text-white relative overflow-hidden group`,
                  expandedCardId === card.id ? "items-start" : "items-center"
                )}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl -z-10 bg-[#1C1E55] overflow-hidden"
                  initial={{ scale: 1 }}
                  animate={hovered === card.id ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    quality={100}
                    className="object-cover rounded-xl"
                  />
                </motion.div>

                <div>
                  {activeCardId === card.id ? (
                    <motion.p className="text-5xl font-normal tracking-tight relative z-10 w-full">
                      {card.title}
                    </motion.p>
                  ) : (
                    <Image
                      src={card.icon.src}
                      alt={card.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  )}
                </div>

                <div className="space-y-6 relative z-10">
                  {activeCardId === card.id && (
                    <motion.p
                      variants={{
                        hovered: { opacity: 1 },
                        initial: { opacity: 0 },
                      }}
                      transition={{
                        delay: 0.1,
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      initial="initial"
                      animate={hovered === card.id ? "hovered" : "initial"}
                      className="text-lg font-light transform transition-all duration-500"
                    >
                      {card.desc}
                    </motion.p>
                  )}

                  <AnimatePresence mode="wait">
                    {activeCardId === card.id && hovered === card.id ? (
                      <motion.button
                        key="text-btn"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#1C1E55] bg-white rounded-md p-3 flex items-center gap-2"
                      >
                        <FiArrowRight className="text-[#1C1E55] h-7 w-7" />
                        <span>Learn more</span>
                      </motion.button>
                    ) : (
                      <motion.button
                        key="icon-btn"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-md p-3 cursor-pointer"
                      >
                        <FiArrowRight className="text-[#1C1E55] h-7 w-7" />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="col-span-4  bg-[linear-gradient(to_bottom,black_30%,#25276C_100%)] rounded-xl shadow-md flex flex-col justify-between p-12 h-[706px]">
            <p className="text-lg font-light text-white">
              Whether you&#39;re deploying a single MSBG in an office, setting
              up a private phone system, or rolling out remote tools — every
              product in our lineup is designed to work in sync, scale with your
              needs, and eliminate IT complexity.
            </p>

            <div className="text-white space-y-2 text-xl">
              <p>logo</p>
              <p>Our platform is designed to scale.</p>
              <p className="text-[#A8A8A8] ">
                Get updates from our{" "}
                <span className="font-bold text-white">Newsroom</span>
                , <br /> or subscribe to our{" "}
                <span className="font-bold text-white">Newsletter</span>.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
