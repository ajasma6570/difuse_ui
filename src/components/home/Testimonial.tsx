"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Switching to Difuse helped us eliminate three separate devices: router, PBX, and firewall with one unified platform. Our IT stack is lighter, faster, and far easier to manage.",
    name: "Ravi Prakash",
    title: "IT Manager, UrbanLoop Solutions",
    avatar: "client_1.png",
  },
  {
    quote:
      "The Difuse platform gave us an edge as a managed service provider. We now offer self-hosted voice + network solutions in a single box, no external dependencies.",
    name: "Priya Menon",
    title: "Director, StratComm MSP",
    avatar: "client_2.png",
  },
  {
    quote:
      "As a systems integrator, we’ve deployed Difuse boxes across retail chains. The modular OS lets us tailor every site’s network needs without bloated overhead.",
    name: "Marcus K.",
    title: "Lead Engineer, Gridpoint Networks",
    avatar: "client_3.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const [animating, setAnimating] = useState(false);
  const [overlayIndex, setOverlayIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const [leftPos, setLeftPos] = useState(0);
  const [rightPos, setRightPos] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const measure = useCallback(() => {
    if (!wrapperRef.current) return;
    const wRect = wrapperRef.current.getBoundingClientRect();
    if (leftRef.current) {
      const r = leftRef.current.getBoundingClientRect();
      setLeftPos(Math.round(r.left - wRect.left));
      setCardWidth(Math.round(r.width));
    }
    if (rightRef.current) {
      const r = rightRef.current.getBoundingClientRect();
      setRightPos(Math.round(r.left - wRect.left));
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const handleNext = () => {
    if (animating) return;
    if (index >= testimonials.length - 1) return;
    setDirection("next");
    setOverlayIndex(index + 1);
    setAnimating(true);
  };

  const handlePrev = () => {
    if (animating) return;
    if (index <= 0) return;
    setDirection("prev");
    setOverlayIndex(index - 1);
    setAnimating(true);
  };

  const onOverlayComplete = () => {
    if (direction === "next" && overlayIndex !== null) {
      setIndex(overlayIndex);
    } else if (direction === "prev" && overlayIndex !== null) {
      setIndex(overlayIndex);
    }
    setOverlayIndex(null);
    setDirection(null);
    setAnimating(false);
    requestAnimationFrame(() => measure());
  };

  const current = testimonials[index];
  const maybeNext =
    index + 1 < testimonials.length ? testimonials[index + 1] : null;

  return (
    <section className="py-20 lg:max-w-8xl mx-auto px-6 2xl:px-0">
      {/* Mobile Layout - Single Card */}
      <div className="block lg:hidden space-y-6">
        <div className="space-y-6">
          <h2 className="text-5xl sm:text-6xl font-normal leading-tight tracking-tight text-black">
            What Our <br /> Clients Say
          </h2>
          <p className="text-[#2A2A2A]">
            See why forward-thinking teams choose Difuse for modular,
            self-hosted infrastructure.
          </p>
        </div>

        <div className="relative overflow-hidden mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === "next" ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <TestimonialCard testimonial={testimonials[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-2 mt-14">
          <button
            onClick={handlePrev}
            disabled={index === 0 || animating}
            className={`p-4 rounded-lg flex items-center justify-center ${
              index === 0 || animating
                ? "border border-[#999999] "
                : "border  border-[#999999] hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300"
            }`}
          >
            <LuArrowLeft
              size={30}
              className="text-[#999999] group-hover:text-white"
            />
          </button>

          <button
            onClick={handleNext}
            disabled={index >= testimonials.length - 1 || animating}
            className={`p-4 rounded-lg flex items-center justify-center ${
              index >= testimonials.length - 1 || animating
                ? "border border-[#999999]"
                : "border  border-[#999999] hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300 "
            }`}
          >
            <LuArrowRight
              size={30}
              className="text-[#999999] group-hover:text-white"
            />
          </button>
        </div>
      </div>

      {/* Desktop Layout - Two Cards */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div className="flex flex-col justify-between h-full pt-5">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight text-black">
            What Our <br /> Clients Say
          </h2>
          <p className="text-gray-500">
            See why forward-thinking teams choose Difuse for modular,
            self-hosted infrastructure.
          </p>

          <div className=" gap-2 pt-6 hidden lg:flex">
            <button
              onClick={handlePrev}
              disabled={index === 0 || animating}
              className={`p-4 rounded-lg flex items-center justify-center ${
                index === 0 || animating
                  ? "border border-[#999999] "
                  : "border  border-[#999999] hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300"
              }`}
            >
              <LuArrowLeft
                size={30}
                className="text-[#999999] group-hover:text-white"
              />
            </button>

            <button
              onClick={handleNext}
              disabled={index >= testimonials.length - 2 || animating}
              className={`p-4 rounded-lg flex items-center justify-center ${
                index >= testimonials.length - 2 || animating
                  ? "border border-[#999999]"
                  : "border  border-[#999999] hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300"
              }`}
            >
              <LuArrowRight
                size={30}
                className="text-[#999999] group-hover:text-white"
              />
            </button>
          </div>
        </div>
        <div
          className="lg:col-span-2 relative"
          ref={wrapperRef}
          aria-live="polite"
        >
          <div className="grid grid-cols-2 gap-8">
            <div ref={leftRef}>
              <TestimonialCard testimonial={current} />
            </div>

            <div ref={rightRef}>
              {maybeNext ? (
                <TestimonialCard testimonial={maybeNext} />
              ) : (
                <div className="h-full w-full" />
              )}
            </div>
          </div>

          <AnimatePresence>
            {animating && overlayIndex !== null && (
              <motion.div
                key={`overlay-${overlayIndex}-${direction}`}
                initial={{
                  left:
                    direction === "next"
                      ? rightPos // coming from the right slot
                      : Math.max(0, leftPos - cardWidth), // coming from the left
                  top: 0,
                  width: cardWidth,
                }}
                animate={{
                  left: leftPos, // always end at left slot
                  opacity: 1,
                }}
                exit={{
                  left:
                    direction === "next"
                      ? leftPos // fade out from left slot
                      : rightPos, // fade out to the right slot
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: 0,
                  zIndex: 30,
                }}
                onAnimationComplete={onOverlayComplete}
              >
                <div style={{ width: "100%" }}>
                  <TestimonialCard testimonial={testimonials[overlayIndex]} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex gap-4 pt-6 lg:hidden">
          <button
            onClick={handlePrev}
            disabled={index === 0 || animating}
            className={`p-4 rounded-lg flex items-center justify-center ${
              index === 0 || animating
                ? "border border-[#999999] "
                : "border  border-[#999999] hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300 p-4"
            }`}
          >
            <LuArrowLeft
              size={30}
              className="text-[#999999] group-hover:text-white"
            />
          </button>

          <button
            onClick={handleNext}
            disabled={index >= testimonials.length - 2 || animating}
            className={`p-4 rounded-lg flex items-center justify-center ${
              index >= testimonials.length - 2 || animating
                ? "border border-[#999999]"
                : "border  border-[#999999] hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300 p-4"
            }`}
          >
            <LuArrowRight
              size={30}
              className="text-[#999999] group-hover:text-white"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white lg:p-6 rounded-xl max-w-xl">
      <Image
        src="/images/testimonials/vector.png"
        alt={testimonial.name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <p className="text-2xl text-[#080808] mt-2 leading-relaxed">
        {testimonial.quote}
      </p>
      <div className="flex items-center mt-6 gap-4">
        <Image
          src={`/images/testimonials/${testimonial.avatar}`}
          alt={testimonial.name}
          width={56}
          height={56}
          className="rounded-full"
        />
        <div>
          <p className="font-medium text-[#25276C] text-lg">
            {testimonial.name}
          </p>
          <p className="text-sm text-[#6B6B6B]">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}
