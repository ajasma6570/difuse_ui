"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import Image from "next/image";
import { Vectors } from "@/assets/vectors";

export default function ExpandablePanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Collapse panel" : "Expand panel"}
        className="absolute -top-4 right-4 z-30 bg-white text-black rounded-full shadow-lg p-1 cursor-pointer"
      >
        {isOpen ? (
          <IoMdRemove className="h-6 w-6" />
        ) : (
          <IoMdAdd className="h-6 w-6" />
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
              className="absolute top-0 lg:hidden right-0 z-20 w-full rounded-xl bg-black/45 backdrop-blur-md border border-white/40 overflow-hidden shadow-xl"
            >
              <motion.ul
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                className="divide-x divide-white/30 text-white flex w-full"
              >
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="p-4 flex items-start gap-2 w-full hover:bg-white/10 transition flex-col"
                >
                  <Image
                    src={Vectors.Campaign.src}
                    alt="campaign"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <div className="opacity-90 text-md flex flex-col ">
                    <span>v2.7.0 is</span>
                    <span>available for DMSBG-100</span>
                  </div>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="p-4 flex items-start gap-1 w-full hover:bg-white/10 transition flex-col"
                >
                  <Image
                    src={Vectors.Support.src}
                    alt="support"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <p className="opacity-90 text-md flex flex-col">
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
              className="absolute hidden lg:block top-0 right-0 z-20 h-[336px] w-[240px] rounded-xl bg-black/45 backdrop-blur-md border border-white/40 overflow-hidden shadow-xl"
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
                  className="p-4 flex items-start gap-2 hover:bg-white/10 transition flex-col"
                >
                  <Image
                    src={Vectors.Campaign.src}
                    alt="campaign"
                    width={40}
                    height={40}
                    className="object-contain"
                  />{" "}
                  <div className="opacity-90 text-lg lg:text-[1.45rem] font-light flex flex-col ">
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
                  className="p-4 flex items-start gap-2 hover:bg-white/10 transition flex-col"
                >
                  <Image
                    src={Vectors.Support.src}
                    alt="support"
                    width={40}
                    height={40}
                    className="object-contain"
                  />{" "}
                  <p className="opacity-90 text-lg lg:text-[1.35rem] flex flex-col">
                    <span className="font-light">For Support</span>
                    <span className="text-xl lg:text-[1.35rem] font-semibold">
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
            className="absolute top-0 right-0 z-20 w-28 xl:w-28 h-[9rem] sm:h-[10rem]  rounded-xl bg-black/45 backdrop-blur-md border border-white/40 overflow-hidden shadow-xl"
          >
            <ul className="divide-y divide-white/40 text-white h-full">
              <li className="h-1/2 flex items-center justify-center hover:bg-white/10 cursor-pointer">
                <Image
                  src={Vectors.Campaign.src}
                  alt="campaign"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </li>
              <li className="h-1/2 flex items-center justify-center hover:bg-white/10 cursor-pointer">
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
