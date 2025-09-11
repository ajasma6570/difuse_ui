"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { MdOutlineCampaign, MdSupportAgent } from "react-icons/md";

export default function ExpandablePanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -top-4 right-4 z-30 bg-white text-black rounded-full shadow-lg p-1 cursor-pointer"
      >
        {isOpen ? (
          <IoMdRemove className="h-6 w-6" />
        ) : (
          <IoMdAdd className="h-6 w-6" />
        )}
      </button>

      {/* <div className="lg:hidden grid grid-cols-2 gap-0 rounded-xl overflow-hidden bg-black/45 backdrop-blur-md border border-white/40 text-white shadow-xl">
        <div className="flex flex-col items-center justify-center p-4 text-center space-y-1 hover:bg-white/10">
          <MdOutlineCampaign className="h-6 w-6 sm:h-8 sm:w-8" />
          <div className="text-sm sm:text-base font-light">
            <div>v2.7.0 is</div>
            <div>available for</div>
            <div className="font-medium">DMSBG-100</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-4 text-center space-y-1 hover:bg-white/10">
          <MdSupportAgent className="h-6 w-6 sm:h-8 sm:w-8" />
          <div className="text-sm sm:text-base font-light">
            <div>For Support</div>
            <div className="font-semibold text-white">1800-599-TECH</div>
          </div>
        </div>
      </div> */}

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile panel */}
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
                  className="p-4 flex items-start gap-1 w-full hover:bg-white/10 transition flex-col"
                >
                  <MdOutlineCampaign className="h-8 w-8 lg:h-10 lg:w-10" />
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
                  <MdSupportAgent className="h-8 w-8 lg:h-10 lg:w-10" />
                  <p className="opacity-90 text-md flex flex-col">
                    <span className="">For Support</span>
                    <span className="text-md whitespace-nowrap">
                      1800–599–TECH
                    </span>
                  </p>
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Desktop panel */}
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
              className="absolute hidden lg:block top-0 right-0 z-20 h-[326px] w-[240px] rounded-xl bg-black/45 backdrop-blur-md border border-white/40 overflow-hidden shadow-xl"
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
                  className="p-4 flex items-start gap-1 hover:bg-white/10 transition flex-col"
                >
                  <MdOutlineCampaign className="h-8 w-8 lg:h-10 lg:w-10" />
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
                  className="p-4 flex items-start gap-1 hover:bg-white/10 transition flex-col"
                >
                  <MdSupportAgent className="h-8 w-8 lg:h-10 lg:w-10" />
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

        {/* Collapsed View */}
        {!isOpen && (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 right-0 z-20 w-28 xl:w-24 h-[6.2rem] sm:h-[10rem] xl:h-[9rem] rounded-xl bg-black/45 backdrop-blur-md border border-white/40 overflow-hidden shadow-xl"
          >
            <ul className="divide-y divide-white/40 text-white h-full">
              <li className="h-1/2 flex items-center justify-center hover:bg-white/10 cursor-pointer">
                <MdOutlineCampaign className="h-6 w-6 sm:h-8 sm:w-8 xl:h-10 xl:w-10" />
              </li>
              <li className="h-1/2 flex items-center justify-center hover:bg-white/10 cursor-pointer">
                <MdSupportAgent className="h-6 w-6 sm:h-8 sm:w-8 xl:h-10 xl:w-10" />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile */}
      {/* <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-10 lg:hidden bg-black"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence> */}
    </div>
  );
}
