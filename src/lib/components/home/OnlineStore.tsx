"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import AnimatedSlideButton from "../common/AnimatedSlideButton";
import HoverRevealButton from "../common/HoverRevealButton";
import { Icon } from "@iconify/react/dist/offline";
import bag4Linear from "@iconify/icons-solar/bag-4-linear";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import arrowLeft from "@iconify/icons-lucide/arrow-left";

export default function OnlineStore() {
  const textRef = React.useRef<HTMLParagraphElement>(null);
  const productsContainerRef = React.useRef<HTMLDivElement>(null);
  const [textX, setTextX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function updatePositions() {
      if (textRef.current) {
        setTextX(textRef.current.getBoundingClientRect().x);
      }

      setWindowWidth(window.innerWidth);
    }
    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  const getXValue = (scrolled: boolean) => {
    if (windowWidth >= 1536) {
      // 2xl
      return scrolled ? `calc(-27% + ${textX}px)` : `calc(2% + ${textX}px)`;
    } else if (windowWidth >= 1280) {
      // xl
      return scrolled ? `calc(-30% + ${textX}px)` : `calc(2% + ${textX}px)`;
    } else if (windowWidth >= 1024) {
      // lg
      return scrolled ? `calc(-61% + ${textX}px)` : `calc(2% + ${textX}px)`;
    } else {
      return scrolled ? `calc(-23% + ${textX}px)` : `calc(2% + ${textX}px)`;
    }
  };

  const handleRight = () => {
    setScrolled(true);
  };

  const handleLeft = () => {
    setScrolled(false);
  };

  const products = [
    {
      name: "DMSBG 300",
      price: "$2,160.00",
      image: "product_1.webp",
      shopLink: "#",
      detailsLink: "#",
    },
    {
      name: "DMSBG 100",
      price: "$990.00",
      image: "product_2.webp",
      shopLink: "#",
      detailsLink: "#",
    },
    {
      name: "DMSBG 50",
      price: "$360.00",
      image: "product_3.webp",
      shopLink: "#",
      detailsLink: "#",
    },
    {
      name: "4G Modules",
      price: "$108.00",
      image: "product_4.webp",
      shopLink: "#",
      detailsLink: "#",
    },
  ];

  return (
    <section className="space-y-10 py-10 text-left lg:space-y-20 lg:py-20">
      <p
        ref={textRef}
        className="lg:max-w-8xl mx-auto w-full px-6 text-4xl leading-tight font-normal tracking-tight text-black sm:text-5xl lg:px-4 lg:text-5xl xl:text-6xl"
      >
        Online Store
      </p>

      <p className="lg:max-w-8xl mx-auto w-full px-6 text-lg lg:hidden lg:px-4">
        Browse and buy modular hardware, communication tools, and software,
        everything you need to build your self-hosted infrastructure.
      </p>

      <div className="grid grid-cols-1 gap-2 px-6 sm:grid-cols-2 lg:hidden">
        {products.map((product) => (
          <div key={product.name} className="relative h-[350px] w-full">
            <Image
              src={`/images/products/${product.image}`}
              alt={product.name}
              fill
              quality={100}
              className="rounded-xl object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="space-y-2">
                <p className="text-3xl text-[#080808]">{product.name}</p>
                <p className="text-2xl text-[#1C1E55]">{product.price}</p>
              </div>

              <div className="flex items-center justify-start gap-2 lg:gap-4">
                <Link
                  href={product.shopLink}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#FBFBF9] p-3 text-base whitespace-nowrap text-[#1C1E55] md:text-xl lg:p-5"
                >
                  <Icon
                    icon={bag4Linear}
                    className="h-5 w-5 text-[#1C1E55] lg:h-6 lg:w-6"
                  />
                  Shop now
                </Link>
                <Link
                  href={product.detailsLink}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#FBFBF9] p-3 text-base text-[#1C1E55] md:text-xl lg:p-5"
                >
                  <Icon
                    icon={arrowRight}
                    className="h-5 w-5 text-[#1C1E55] lg:h-6 lg:w-6"
                  />
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative hidden overflow-hidden lg:block">
        <motion.div
          ref={productsContainerRef}
          className="flex gap-4"
          animate={{
            x: getXValue(scrolled),
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="group relative h-[450px] w-[450px] flex-shrink-0"
            >
              <Image
                src={`/images/products/${product.image}`}
                alt={product.name}
                fill
                quality={100}
                className="rounded-xl object-cover"
              />

              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="space-y-2.5">
                  <p className="text-5xl text-[#080808]">{product.name}</p>
                  <p className="text-3xl text-[#1C1E55]">{product.price}</p>
                </div>

                <div className="flex flex-col items-center gap-4 lg:flex-row">
                  <HoverRevealButton
                    icon={<Icon icon={bag4Linear} width={30} height={30} />}
                    text="Shop now"
                    className="max-w-max items-center rounded-lg bg-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#1C1E55] transition-colors hover:bg-[#E5E5E5]"
                    variant="link"
                    iconClassName=""
                    href={product.shopLink}
                  />
                  <HoverRevealButton
                    icon={<Icon icon={arrowRight} width={30} height={30} />}
                    text="Details"
                    className="max-w-max items-center rounded-lg bg-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#1C1E55] transition-colors hover:bg-[#E5E5E5]"
                    variant="link"
                    href={product.detailsLink}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="lg:max-w-8xl mx-auto flex w-full items-center justify-between px-6">
        <p className="hidden text-lg lg:block">
          Browse and buy modular hardware, communication tools, and software,
          everything you need to build your self-hosted infrastructure.
        </p>

        <div className="flex w-full items-center gap-2 lg:justify-end">
          <AnimatedSlideButton
            icon={<Icon icon={bag4Linear} width={30} height={30} />}
            text="Explore Online Store"
            className="inline-flex w-full rounded-lg border border-[#1C1E55] bg-[#FBFBF9] p-4 text-xl tracking-[-0.05em] text-[#1C1E55] hover:bg-[#1C1E55] hover:text-white lg:text-2xl"
            containerClassName="!w-full sm:max-w-max"
            variant="link"
            href="/online-store"
          />
          <button
            onClick={handleLeft}
            className="group hidden cursor-pointer rounded-lg border border-[#999999] p-4 transition-colors duration-300 hover:border-[#25276C] hover:bg-[#25276C] lg:block"
          >
            <Icon
              icon={arrowLeft}
              width={30}
              height={30}
              className="text-[#999999] group-hover:text-white"
            />
          </button>
          <button
            onClick={handleRight}
            className="group hidden cursor-pointer rounded-lg border border-[#999999] p-4 transition-colors duration-300 hover:border-[#25276C] hover:bg-[#25276C] lg:block"
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
    </section>
  );
}
