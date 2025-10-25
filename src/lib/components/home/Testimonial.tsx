"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import arrowLeft from "@iconify/icons-lucide/arrow-left";
import { AnimatePresence, motion } from "motion/react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "One Switching to Difuse helped us eliminate three separate devices: router, PBX, and firewall with one unified platform. Our IT stack is lighter, faster, and far easier to manage.",
    name: "Ravi Prakash",
    title: "IT Manager, UrbanLoop Solutions",
    avatar: "client_1.png",
  },
  {
    id: 2,
    quote:
      "Two The Difuse platform gave us an edge as a managed service provider. We now offer self-hosted voice + network solutions in a single box, no external dependencies.",
    name: "Priya Menon",
    title: "Director, StratComm MSP",
    avatar: "client_2.png",
  },
  {
    id: 3,
    quote:
      "Three As a systems integrator, we’ve deployed Difuse boxes across retail chains. The modular OS lets us tailor every site’s network needs without bloated overhead.",
    name: "Marcus K.",
    title: "Lead Engineer, Gridpoint Networks",
    avatar: "client_3.png",
  },
  {
    id: 4,
    quote:
      "Four Switching to Difuse helped us eliminate three separate devices: router, PBX, and firewall with one unified platform. Our IT stack is lighter, faster, and far easier to manage.",
    name: "Ravi Prakash",
    title: "IT Manager, UrbanLoop Solutions",
    avatar: "client_1.png",
  },
  {
    id: 5,
    quote:
      "Five Switching to Difuse helped us eliminate three separate devices: router, PBX, and firewall with one unified platform. Our IT stack is lighter, faster, and far easier to manage.",
    name: "Ravi Prakash",
    title: "IT Manager, UrbanLoop Solutions",
    avatar: "client_1.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    if (index >= testimonials.length - 1) return;
    setDirection(1);
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (index <= 0) return;
    setDirection(-1);
    setIndex((prev) => prev - 1);
  };

  const current = testimonials[index];

  return (
    <section className="lg:max-w-8xl mx-auto overflow-hidden px-6 py-28 lg:py-40 2xl:px-0">
      {/* Mobile Layout - Single Card */}
      <div className="block space-y-6 lg:hidden">
        <div className="space-y-6">
          <h2 className="text-5xl leading-tight font-normal tracking-tight text-black sm:text-6xl">
            What Our <br /> Clients Say
          </h2>
          <p className="text-[#2A2A2A]">
            See why forward-thinking teams choose Difuse for modular,
            self-hosted infrastructure.
          </p>
        </div>

        {/* Mobile: Instant change without animation - same as desktop */}
        <div className="relative mt-14 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <TestimonialCard testimonial={testimonials[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex gap-2">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className={`flex items-center justify-center rounded-lg p-4 ${
              index === 0
                ? "cursor-not-allowed border border-[#999999] opacity-50"
                : "group border border-[#999999] transition-colors duration-300 hover:border-[#25276C] hover:bg-[#25276C]"
            }`}
          >
            <Icon
              icon={arrowLeft}
              width={30}
              height={30}
              className="text-[#999999] group-hover:text-white"
            />
          </button>

          <button
            onClick={handleNext}
            disabled={index >= testimonials.length - 1}
            className={`flex items-center justify-center rounded-lg p-4 ${
              index >= testimonials.length - 1
                ? "cursor-not-allowed border border-[#999999] opacity-50"
                : "group border border-[#999999] transition-colors duration-300 hover:border-[#25276C] hover:bg-[#25276C]"
            }`}
          >
            <Icon
              icon={arrowRight}
              width={30}
              height={30}
              className="text-[#999999] group-hover:text-white"
            />
          </button>
        </div>
      </div>

      {/* Desktop Layout - Two Cards */}
      <div className="hidden grid-cols-1 items-start gap-10 lg:grid lg:grid-cols-3">
        <div className="flex h-full flex-col justify-between pt-5">
          <h2 className="text-4xl leading-tight font-normal tracking-tight text-black sm:text-5xl lg:text-5xl xl:text-6xl">
            What Our <br /> Clients Say
          </h2>
          <p className="text-gray-500">
            See why forward-thinking teams choose Difuse for modular,
            self-hosted infrastructure.
          </p>

          <div className="hidden gap-2 pt-6 lg:flex">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className={`flex items-center justify-center rounded-lg p-4 ${
                index === 0
                  ? "cursor-not-allowed border border-[#999999] opacity-50"
                  : "group border border-[#999999] transition-colors duration-300 hover:border-[#25276C] hover:bg-[#25276C]"
              }`}
            >
              <Icon
                icon={arrowLeft}
                width={30}
                height={30}
                className="text-[#999999] group-hover:text-white"
              />
            </button>

            <button
              onClick={handleNext}
              disabled={index >= testimonials.length - 2}
              className={`flex items-center justify-center rounded-lg p-4 ${
                index >= testimonials.length - 2
                  ? "cursor-not-allowed border border-[#999999] opacity-50"
                  : "group border border-[#999999] transition-colors duration-300 hover:border-[#25276C] hover:bg-[#25276C]"
              }`}
            >
              <Icon
                icon={arrowRight}
                width={30}
                height={30}
                className="text-[#999999] group-hover:text-white"
              />
            </button>
          </div>
        </div>

        {/* Desktop: Simple two-card layout with instant updates */}
        <div className="lg:col-span-2">
          <div className="flex gap-8">
            <motion.div>
              <TestimonialCard testimonial={current} />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ x: direction === 1 ? 0 : -490 }}
                animate={{ x: direction === 1 ? -490 : 0 }}
                transition={{ duration: 0.5 }}
                className="disabled flex gap-8 bg-white"
              >
                {testimonials.slice(index + 1).map((testimonial, idx) => (
                  <TestimonialCard key={idx} testimonial={testimonial} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-xl bg-white lg:w-[460px] lg:p-6">
      <Image
        src="/images/testimonials/vector.png"
        alt={testimonial.name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <p className="mt-2 text-2xl leading-relaxed text-[#080808]">
        {testimonial.quote}
      </p>
      <div className="mt-6 flex items-center gap-4">
        <Image
          src={`/images/testimonials/${testimonial.avatar}`}
          alt={testimonial.name}
          width={56}
          height={56}
          className="rounded-full"
        />
        <div>
          <p className="text-lg font-medium text-[#25276C]">
            {testimonial.name}
          </p>
          <p className="text-sm text-[#6B6B6B]">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}
