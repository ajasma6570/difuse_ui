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

  const [scrolled, setScrolled] = useState(false);

  const handleRight = () => {
    setScrolled(true);
  };

  const handleLeft = () => {
    setScrolled(false);
  };

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getXValue = (scrolled: boolean) => {
    if (windowWidth >= 1536) {
      // 2xl
      return scrolled ? "-23%" : "6%";
    } else if (windowWidth >= 1280) {
      // xl
      return scrolled ? "-40%" : "2%";
    } else if (windowWidth >= 1024) {
      // lg
      return scrolled ? "-61%" : "2%";
    } else {
      return scrolled ? "-23%" : "6%";
    }
  };

  return (
    <section className="py-10 lg:py-20 space-y-10 lg:space-y-20 text-left">
      <p className="text-4xl px-6 lg:px-4 lg:max-w-8xl w-full mx-auto sm:text-5xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight text-black">
        Online Store
      </p>

      <p className="px-6 lg:px-4 lg:max-w-8xl w-full mx-auto lg:hidden text-lg">
        Browse and buy modular hardware, communication tools, and software,
        everything you need to build your self-hosted infrastructure.
      </p>

      <div className="lg:hidden px-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {products.map((product) => (
          <div key={product.name} className="relative h-[350px] w-full">
            <Image
              src={`/images/products/${product.image}`}
              alt={product.name}
              fill
              quality={100}
              className="object-cover rounded-xl"
            />

            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="space-y-2">
                <p className="text-[#080808] text-3xl">{product.name}</p>
                <p className="text-[#1C1E55] text-2xl">{product.price}</p>
              </div>

              <div className="flex justify-start items-center gap-2 lg:gap-4">
                <Link
                  href={product.shopLink}
                  className="p-3 lg:p-5 whitespace-nowrap bg-[#FBFBF9] gap-2 text-[#1C1E55] text-base md:text-xl rounded-lg flex items-center justify-center cursor-pointer w-full"
                >
                  <Icon
                    icon={bag4Linear}
                    className="text-[#1C1E55] w-5 h-5 lg:h-6 lg:w-6"
                  />
                  Shop now
                </Link>
                <Link
                  href={product.detailsLink}
                  className="p-3 lg:p-5 bg-[#FBFBF9] gap-2 text-[#1C1E55] text-base md:text-xl  rounded-lg flex items-center justify-center cursor-pointer  w-full"
                >
                  <Icon
                    icon={arrowRight}
                    className="text-[#1C1E55] w-5 h-5 lg:h-6 lg:w-6"
                  />
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden hidden lg:block ">
        <motion.div
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
              className="relative h-[450px] w-[450px] flex-shrink-0 group"
            >
              <Image
                src={`/images/products/${product.image}`}
                alt={product.name}
                fill
                quality={100}
                className="object-cover rounded-xl"
              />

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <p className="text-[#080808] text-5xl">{product.name}</p>
                  <p className="text-[#1C1E55] text-3xl">{product.price}</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <HoverRevealButton
                    icon={<Icon icon={bag4Linear} width={30} height={30} />}
                    text="Shop now"
                    className="items-center text-[#1C1E55] bg-[#FBFBF9] hover:bg-[#E5E5E5] transition-colors p-5 rounded-lg text-xl tracking-[-0.05em] max-w-max"
                    variant="link"
                    iconClassName=""
                    href={product.shopLink}
                  />
                  <HoverRevealButton
                    icon={<Icon icon={arrowRight} width={30} height={30} />}
                    text="Details"
                    className="items-center text-[#1C1E55] bg-[#FBFBF9] hover:bg-[#E5E5E5] transition-colors p-5 rounded-lg text-xl tracking-[-0.05em] max-w-max"
                    variant="link"
                    href={product.detailsLink}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="lg:max-w-8xl px-6  w-full mx-auto flex justify-between items-center ">
        <p className=" hidden lg:block text-lg">
          Browse and buy modular hardware, communication tools, and software,
          everything you need to build your self-hosted infrastructure.
        </p>

        <div className="flex items-center gap-2 lg:justify-end w-full">
          <AnimatedSlideButton
            icon={<Icon icon={bag4Linear} width={30} height={30} />}
            text="Explore Online Store"
            className="inline-flex text-[#1C1E55] hover:bg-[#1C1E55] border border-[#1C1E55] hover:text-white rounded-lg bg-[#FBFBF9] text-xl lg:text-2xl tracking-[-0.05em] p-4 w-full"
            containerClassName="!w-full sm:max-w-max"
            variant="link"
            href="/online-store"
          />
          <button
            onClick={handleLeft}
            className="hidden lg:block border cursor-pointer border-[#999999] hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300 p-4 rounded-lg"
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
            className="hidden lg:block border cursor-pointer border-[#999999] p-4 rounded-lg hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300"
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
