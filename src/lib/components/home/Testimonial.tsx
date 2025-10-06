"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import arrowLeft from "@iconify/icons-lucide/arrow-left";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "One Switching to Difuse helped us eliminate three separate devices: router, PBX, and firewall with one unified platform. Our IT stack is lighter, faster, and far easier to manage.",
    name: "Ravi Prakash",
    title: "IT Manager, UrbanLoop Solutions",
    avatar: "client_1.png",
  },
  {
    quote:
      "Two The Difuse platform gave us an edge as a managed service provider. We now offer self-hosted voice + network solutions in a single box, no external dependencies.",
    name: "Priya Menon",
    title: "Director, StratComm MSP",
    avatar: "client_2.png",
  },
  {
    quote:
      "Three As a systems integrator, we’ve deployed Difuse boxes across retail chains. The modular OS lets us tailor every site’s network needs without bloated overhead.",
    name: "Marcus K.",
    title: "Lead Engineer, Gridpoint Networks",
    avatar: "client_3.png",
  },
  {
    quote:
      "Four Switching to Difuse helped us eliminate three separate devices: router, PBX, and firewall with one unified platform. Our IT stack is lighter, faster, and far easier to manage.",
    name: "Ravi Prakash",
    title: "IT Manager, UrbanLoop Solutions",
    avatar: "client_1.png",
  },
  {
    quote:
      "Five Switching to Difuse helped us eliminate three separate devices: router, PBX, and firewall with one unified platform. Our IT stack is lighter, faster, and far easier to manage.",
    name: "Ravi Prakash",
    title: "IT Manager, UrbanLoop Solutions",
    avatar: "client_1.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => {
    if (index >= testimonials.length - 1) return;
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (index <= 0) return;
    setIndex((prev) => prev - 1);
  };

  const current = testimonials[index];
  const maybeNext =
    index + 1 < testimonials.length ? testimonials[index + 1] : null;

  return (
    <section className="py-28 lg:py-40 lg:max-w-8xl mx-auto px-6 2xl:px-0">
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

        {/* Mobile: Instant change without animation - same as desktop */}
        <div className="relative overflow-hidden mt-14">
          <TestimonialCard testimonial={testimonials[index]} />
        </div>

        <div className="flex gap-2 mt-14">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className={`p-4 rounded-lg flex items-center justify-center ${
              index === 0
                ? "border border-[#999999] opacity-50 cursor-not-allowed"
                : "border border-[#999999] hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300"
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
            className={`p-4 rounded-lg flex items-center justify-center ${
              index >= testimonials.length - 1
                ? "border border-[#999999] opacity-50 cursor-not-allowed"
                : "border border-[#999999] hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300"
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
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div className="flex flex-col justify-between h-full pt-5">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight text-black">
            What Our <br /> Clients Say
          </h2>
          <p className="text-gray-500">
            See why forward-thinking teams choose Difuse for modular,
            self-hosted infrastructure.
          </p>

          <div className="gap-2 pt-6 hidden lg:flex">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className={`p-4 rounded-lg flex items-center justify-center ${
                index === 0
                  ? "border border-[#999999] opacity-50 cursor-not-allowed"
                  : "border border-[#999999] hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300"
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
              className={`p-4 rounded-lg flex items-center justify-center ${
                index >= testimonials.length - 2
                  ? "border border-[#999999] opacity-50 cursor-not-allowed"
                  : "border border-[#999999] hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300"
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
        <div className="lg:col-span-2" ref={wrapperRef} aria-live="polite">
          <div className="grid grid-cols-2 gap-8">
            <div ref={leftRef}>
              <TestimonialCard testimonial={current} />
            </div>

            <div ref={rightRef} className="disabled opacity-30">
              {maybeNext ? (
                <TestimonialCard testimonial={maybeNext} />
              ) : (
                <div className="h-full w-full" />
              )}
            </div>
          </div>
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
