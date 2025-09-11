import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function OnlineStore() {
  const products = [
    {
      name: "DMSBG 300",
      price: "$2,160.00",
      image: "product_1.png",
      shopLink: "#",
      detailsLink: "#",
    },
    {
      name: "DMSBG 100",
      price: "$990.00",
      image: "product_2.png",
      shopLink: "#",
      detailsLink: "#",
    },
    {
      name: "DMSBG 50",
      price: "$360.00",
      image: "product_3.png",
      shopLink: "#",
      detailsLink: "#",
    },
    {
      name: "4G Modules",
      price: "$108.00",
      image: "product_4.png",
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

  return (
    <section className="py-10 lg:py-20 space-y-10 lg:space-y-20 text-left">
      <p className="text-4xl px-6 lg:px-4 lg:max-w-8xl w-full mx-auto sm:text-5xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight text-black">
        Online Store
      </p>

      <p className="px-6 lg:px-4 lg:max-w-8xl w-full mx-auto lg:hidden text-lg">
        Browse and buy modular hardware, communication tools, and software,
        everything you need to build your self-hosted infrastructure.
      </p>

      <div className="2xl:hidden px-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
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

              <div className="flex items-center gap-4">
                <Link
                  href={product.shopLink}
                  className="w-14 h-14 bg-[#FBFBF9] rounded-xl flex items-center justify-center cursor-pointer"
                >
                  <HiOutlineShoppingBag size={24} className="text-[#1C1E55]" />
                </Link>
                <Link
                  href={product.detailsLink}
                  className="w-14 h-14 bg-[#FBFBF9] rounded-xl flex items-center justify-center cursor-pointer"
                >
                  <FaArrowRight size={24} className="text-[#1C1E55]" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden hidden 2xl:block">
        <motion.div
          className="flex gap-4"
          animate={{
            x: scrolled ? -150 : 168,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              className="relative h-[450px] w-[450px] flex-shrink-0"
            >
              <Image
                src={`/images/products/${product.image}`}
                alt={product.name}
                fill
                quality={100}
                className="object-cover rounded-xl"
              />

              <div className="absolute inset-0 p-8 flex flex-col justify-between ">
                <div className="space-y-2.5">
                  <p className="text-[#080808] text-5xl">{product.name}</p>
                  <p className="text-[#1C1E55] text-3xl">{product.price}</p>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href={product.shopLink}
                    className="w-16 h-16 bg-[#FBFBF9] rounded-xl flex items-center justify-center cursor-pointer"
                  >
                    <HiOutlineShoppingBag
                      size={30}
                      className="text-[#1C1E55]"
                    />
                  </Link>
                  <Link
                    href={product.detailsLink}
                    className="w-16 h-16 bg-[#FBFBF9] rounded-xl flex items-center justify-center cursor-pointer"
                  >
                    <FaArrowRight size={30} className="text-[#1C1E55]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="lg:max-w-8xl px-6 lg:px-4 w-full mx-auto flex justify-between items-center ">
        <p className="w-1/2 hidden lg:block text-lg">
          Browse and buy modular hardware, communication tools, and software,
          everything you need to build your self-hosted infrastructure.
        </p>

        <div className="flex items-center gap-2 justify-end">
          <Link
            href="#"
            className="text-[#25276C] underline flex items-center gap-2 border border-[#25276C] px-5 py-3 rounded-lg"
          >
            <HiOutlineShoppingBag size={20} className="text-[#25276C]" />
            Explore Online Store
          </Link>
          <button
            onClick={handleLeft}
            className="hidden lg:block border cursor-pointer border-[#999999] hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300 p-4 rounded-lg"
          >
            <FaArrowLeft
              size={20}
              className="text-[#999999] group-hover:text-white"
            />
          </button>
          <button
            onClick={handleRight}
            className="hidden lg:block border cursor-pointer border-[#999999] p-4 rounded-lg hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300"
          >
            <FaArrowRight
              size={20}
              className="text-[#999999] group-hover:text-white"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
