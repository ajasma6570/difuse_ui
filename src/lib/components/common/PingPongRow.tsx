"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function HeroPillsPingPong() {
  return (
    <div className="relative min-h-[310px] overflow-hidden rounded-xl">
      <Image
        src="/images/img1.webp"
        alt="Hero"
        fill
        className="scale-125 object-cover"
        priority
      />

      <div className="relative z-10 flex h-full flex-col pb-14">
        <div className="mt-auto space-y-6">
          <PingPongRow direction="right" pxPerSec={60}>
            <Pill>wifi</Pill>
            <Pill>Multi - Business service gateway</Pill>
            <Pill>Routing</Pill>
            <Pill>Firewall</Pill>
            <Pill>DNS management</Pill>
            <Pill>PBX Systems</Pill>
            <Pill>Softphone application</Pill>
          </PingPongRow>

          <PingPongRow direction="left" pxPerSec={60}>
            <Pill>wifi</Pill>
            <Pill>Multi - Business service gateway</Pill>
            <Pill>Routing</Pill>
            <Pill>Firewall</Pill>
            <Pill>DNS management</Pill>
            <Pill>PBX Systems</Pill>
            <Pill>Softphone application</Pill>
          </PingPongRow>
        </div>
      </div>
    </div>
  );
}

function PingPongRow({
  children,
  direction = "left",
  pxPerSec = 120,
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  pxPerSec?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const calc = () => {
      const c = containerRef.current;
      const r = contentRef.current;
      if (!c || !r) return;
      setOffset(Math.max(0, r.scrollWidth - c.clientWidth));
    };

    calc();

    const onResize = () => calc();
    window.addEventListener("resize", onResize);

    const ro1 = new ResizeObserver(calc);
    const ro2 = new ResizeObserver(calc);
    if (containerRef.current) ro1.observe(containerRef.current);
    if (contentRef.current) ro2.observe(contentRef.current);

    return () => {
      window.removeEventListener("resize", onResize);
      ro1.disconnect();
      ro2.disconnect();
    };
  }, []);

  const duration = offset > 0 ? Math.max(offset / pxPerSec, 2) : 0;

  const from = direction === "right" ? -offset : 0;
  const to = direction === "right" ? 0 : -offset;

  return (
    <div ref={containerRef} className="overflow-hidden px-1">
      <motion.div
        ref={contentRef}
        className="flex gap-6 whitespace-nowrap will-change-transform"
        initial={false}
        animate={{ x: [from, to] }}
        transition={
          offset > 0
            ? {
                duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }
            : { duration: 0 }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-md bg-white/95 p-1.5 px-3 text-xl backdrop-blur">
      {children}
    </p>
  );
}
