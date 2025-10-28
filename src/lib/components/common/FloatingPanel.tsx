"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Vectors } from "@/assets/vectors";
import minus from "@iconify/icons-lucide/minus";
import plus from "@iconify/icons-lucide/plus";
import { Icon } from "@iconify/react/dist/offline";

export default function ExpandablePanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Collapse panel" : "Expand panel"}
        className="absolute -top-3 right-4 z-30 flex min-h-[30px] min-w-[30px] cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-lg md:-top-4 md:min-h-[40px] md:min-w-[40px]"
      >
        {isOpen ? (
          <Icon icon={minus} width={24} height={24} />
        ) : (
          <Icon icon={plus} width={24} height={24} />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="mobilePanel"
              initial={{
                opacity: 0,
                scale: 0.5,
                x: 0,
                y: 0,
                transformOrigin: "top right",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
                x: 0,
                y: 0,
                transformOrigin: "top right",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-0 right-0 z-20 w-full overflow-hidden rounded-xl border border-white/40 bg-black/45 shadow-xl backdrop-blur-md lg:hidden"
            >
              <motion.ul
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                className="flex w-full divide-x divide-white/30 text-white"
              >
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="flex w-full flex-col items-start gap-2 p-4 transition hover:bg-white/10"
                >
                  <Image
                    src={Vectors.Campaign.src}
                    alt="campaign"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <div className="text-md flex flex-col opacity-90">
                    <span>v2.7.0 is</span>
                    <span>available for DMSBG-100</span>
                  </div>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="flex w-full flex-col items-start gap-1 p-4 transition hover:bg-white/10"
                >
                  <Image
                    src={Vectors.Support.src}
                    alt="support"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <p className="text-md flex flex-col opacity-90">
                    <span className="">For Support</span>
                    <span className="text-md whitespace-nowrap">
                      1800–599–TECH
                    </span>
                  </p>
                </motion.li>
              </motion.ul>
            </motion.div>

            <motion.div
              key="desktopPanel"
              initial={{
                opacity: 0,
                scale: 0.5,
                x: 0,
                y: 0,
                transformOrigin: "top right",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
                x: 0,
                y: 0,
                transformOrigin: "top right",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-0 right-0 z-20 hidden h-[336px] w-[240px] overflow-hidden rounded-xl border border-white/40 bg-black/45 shadow-xl backdrop-blur-md lg:block"
            >
              <motion.ul
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                className="divide-y divide-white/30 text-white"
              >
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="flex flex-col items-start gap-2 p-4 transition hover:bg-white/10"
                >
                  <Image
                    src={Vectors.Campaign.src}
                    alt="campaign"
                    width={40}
                    height={40}
                    className="object-contain"
                  />{" "}
                  <div className="flex flex-col text-lg font-light opacity-90 lg:text-[1.45rem]">
                    <span>v2.7.0 is</span>
                    <span>available for</span>
                    <span>DMSBG-100</span>
                  </div>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="flex flex-col items-start gap-2 p-4 transition hover:bg-white/10"
                >
                  <Image
                    src={Vectors.Support.src}
                    alt="support"
                    width={40}
                    height={40}
                    className="object-contain"
                  />{" "}
                  <p className="flex flex-col text-lg opacity-90 lg:text-[1.35rem]">
                    <span className="font-light">For Support</span>
                    <span className="text-xl font-semibold lg:text-[1.35rem]">
                      1800–599–TECH
                    </span>
                  </p>
                </motion.li>
              </motion.ul>
            </motion.div>
          </>
        )}

        {!isOpen && (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 right-0 z-20 h-[9rem] w-28 overflow-hidden rounded-xl border border-white/40 bg-black/45 shadow-xl backdrop-blur-md sm:h-[10rem] xl:w-28"
          >
            <ul className="h-full divide-y divide-white/40 text-white">
              <li className="flex h-1/2 cursor-pointer items-center justify-center hover:bg-white/10">
                <Image
                  src={Vectors.Campaign.src}
                  alt="campaign"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </li>
              <li className="flex h-1/2 cursor-pointer items-center justify-center hover:bg-white/10">
                <Image
                  src={Vectors.Support.src}
                  alt="support"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
