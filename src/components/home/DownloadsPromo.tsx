"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import AnimatedSlideButton from "../common/AnimatedSlideButton";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import { motion, Variants } from "framer-motion";
import { cn } from "@/utils/tailwindmerge";
import Image from "next/image";

type Phase = "rest" | "hover" | "leave";

type Percent = `${number}%`;

type BubbleStyle = {
  top: Percent;
  left?: Percent;
  right?: Percent;
  size: string;
};

type RawIcon = {
  id: string;
  icon: string;
  style: BubbleStyle;
  className?: string;
};

const H = 680;
const BUBBLE = 180;

const RAW_ICONS: RawIcon[] = [
  {
    id: "left-start",
    icon: "/images/vector2.png",
    style: { top: "65%", left: "11%", size: "h-[75px] w-[75px]" },
    className: "p-3",
  },
  {
    id: "left-mid",
    icon: "/images/img2.png",
    style: { top: "80%", left: "21%", size: "h-[70px] w-[70px]" },
    className: "p-0.5",
  },
  {
    id: "left-end",
    icon: "/images/img.png",
    style: { top: "50%", left: "28%", size: "h-[80px] w-[80px]" },
    className: "p-0.5",
  },
  {
    id: "right-start",
    icon: "/images/vector3.png",
    style: { top: "50%", right: "20%", size: "h-[80px] w-[80px]" },
    className: "p-4",
  },
  {
    id: "right-mid",
    icon: "/images/img.png",
    style: { top: "80%", right: "14%", size: "h-[70px] w-[70px]" },
    className: "p-0.5",
  },
  {
    id: "right-end",
    icon: "/images/vector.png",
    style: { top: "65%", right: "2%", size: "h-[75px] w-[75px]" },
    className: "p-3",
  },
];

function dropDistanceFromTopPercent(topPct: Percent) {
  const pct = parseFloat(topPct);
  const dist = ((100 - pct) / 100) * H - BUBBLE * 0.5;
  return Math.max(0, Math.round(dist));
}

export default function DownloadsPromo() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [phase, setPhase] = useState<Phase>("rest");

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const ICONS = useMemo(
    () =>
      RAW_ICONS.map((it) => {
        const drop = dropDistanceFromTopPercent(it.style.top);
        return { ...it, drop };
      }),
    []
  );

  const bubbleVariants: Variants = {
    rest: { y: 48, opacity: 0, transition: { type: "tween", duration: 0.25 } },
    hover: { y: 0, opacity: 1, transition: { type: "tween", duration: 0.35 } },
    leave: (d: number) => ({
      y: [0, d * 0.92, d],
      opacity: [1, 1, 0],
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const MOBILE_ICONS = useMemo(
    () => [
      RAW_ICONS[0],
      RAW_ICONS[1],
      RAW_ICONS[3],
      RAW_ICONS[4],
      RAW_ICONS[5],
    ],
    []
  );

  return (
    <section className="px-6">
      <motion.div
        className="relative mt-20 w-full px-6 h-[780px] sm:h-[650px] rounded-xl max-w-8xl flex space-y-10 justify-center flex-col items-center mx-auto bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] overflow-hidden"
        initial="rest"
        animate={phase}
        onHoverStart={() => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          setPhase("hover");
        }}
        onHoverEnd={() => {
          setPhase("leave");
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => setPhase("rest"), 800);
        }}
      >
        <p className="text-white text-4xl lg:text-7xl font-normal text-center">
          Get the Latest Builds, <br /> Tools &amp; Updates
        </p>

        <p className="text-[#FBFBF9] text-lg lg:text-xl w-full lg:w-lg font-light text-center">
          Stay current with the latest releases of Difuse OS, device firmware,
          and communication tools, everything needed to deploy or upgrade.
        </p>

        <AnimatedSlideButton
          icon={<Icon icon={arrowRight} width={30} height={30} />}
          text="Go to Downloads"
          className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors p-4 rounded-lg text-lg lg:text-xl font-medium inline-flex"
        />

        <ul
          className="mt-72 xl:mt-64 pointer-events-none absolute inset-0 z-10 hidden lg:block"
          aria-hidden
        >
          {ICONS.map(({ id, icon, style, drop, className }) => {
            const { size, ...pos } = style;
            return (
              <motion.li
                key={id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={pos as React.CSSProperties}
                variants={bubbleVariants}
                custom={drop}
              >
                <div
                  className={cn(
                    "grid place-items-center rounded-full shadow-2xl shadow-black will-change-transform bg-[radial-gradient(circle_at_center,#FBFBF9_10%,#1C1E55_130%)]",
                    size
                  )}
                >
                  <Image alt="icon" src={icon} className={className} fill />
                </div>
              </motion.li>
            );
          })}
        </ul>

        <ul
          className="lg:hidden absolute bottom-6 inset-x-0 z-10 flex items-end justify-evenly gap-2 px-6"
          aria-hidden
        >
          {MOBILE_ICONS.map(({ id, icon }) => (
            <li
              key={`m-${id}`}
              className="odd:-translate-y-0 even:-translate-y-16 transition-transform"
            >
              <div className="grid place-items-center h-12 sm:h-14 w-12  sm:w-14 rounded-full bg-[#F2F2F6] shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
                <Image alt="icon" src={icon} className="p-2" fill />
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
