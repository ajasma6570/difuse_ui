import Image from "next/image";
import React from "react";
import AnimatedSlideButton from "../common/AnimatedSlideButton";
import Footer from "../common/Footer";
import HoverRevealButton from "../common/HoverRevealButton";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";

export default function NewsRoom() {
  const news = [
    {
      slug: "guide-to-integrating-asterisk-with-microsoft-teams-using-direct-routing",
      title:
        "Guide to Integrating Asterisk with Microsoft Teams Using Direct Routing",
      date: "August 20, 2024",
      author: "Hayzam",
      image: "integrating_asterisk.png",
    },
    {
      slug: "saving-100-desk-phones-from-e-waste-doom-with-tftp-and-a-simpler-pbx",
      title:
        "Saving 100+ Desk Phones from E-Waste Doom with TFTP and a Simpler PBX",
      date: "August 20, 2024",
      author: "Hayzam",
      image: "deskphone.png",
    },
    {
      slug: "kalmia-a-simple-documentation-cms",
      title: "Kalmia: A Simple Documentation CMS",
      date: "August 20, 2024",
      author: "Hayzam",
      image: "kalmia.png",
    },
  ];
  return (
    <section className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] pt-20 ">
      <div className="lg:max-w-[90rem] w-full mx-auto rounded-xl px-6 2xl:px-0">
        <p className="text-white text-4xl lg:text-6xl font-normal">Newsroom</p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3">
          {news.map((item) => (
            <div
              key={item.title}
              className="relative h-[410px] w-full group overflow-hidden rounded-xl"
            >
              <Image
                src={`/images/news/${item.image}`}
                alt={`news_${item.title}`}
                fill
                quality={100}
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <motion.div
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="absolute inset-0 p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between text-white text-sm">
                    <div className="inline-flex items-center gap-2">
                      <Image
                        src="/images/news/vector1.png"
                        alt="calendar_icon"
                        width={20}
                        height={14}
                        className="object-contain"
                      />
                      <span className="text-base">{item.date}</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Image
                        src="/images/news/vector.png"
                        alt="calendar_icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                      <span className="text-base">{item.author}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-white font-normal text-2xl leading-snug">
                    {item.title}
                  </p>
                </div>

                <div>
                  <HoverRevealButton
                    icon={<Icon icon={arrowRight} width={24} height={24} />}
                    text="Details"
                    className="hidden xl:flex items-center text-[#1C1E55] bg-[#FBFBF9] hover:bg-[#E5E5E5] transition-colors p-5 rounded-lg text-xl tracking-[-0.05em] max-w-max"
                    variant="link"
                    href={item.slug}
                    parentControlled
                  />
                  <Link
                    href={item.slug}
                    className="flex gap-2 items-center xl:hidden text-[#1C1E55] bg-[#FBFBF9] hover:bg-[#E5E5E5] transition-colors p-5 rounded-lg text-xl tracking-[-0.05em] max-w-max"
                  >
                    <Icon
                      icon={arrowRight}
                      width={24}
                      height={24}
                      className="text-[#25276C]"
                    />
                    <span>Read</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center w-full mt-14 gap-8">
          <p className="w-full lg:w-1/2 text-xl text-white">
            Explore what’s new across the platform — integrations, services, OS
            upgrades, and forward-looking innovations.
          </p>

          <AnimatedSlideButton
            icon={<Icon icon={arrowRight} width={24} height={24} />}
            text="Explore Newsroom"
            className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors p-4 rounded-lg text-lg lg:text-xl font-medium inline-flex"
            variant="link"
            href="/newsroom"
          />
        </div>
      </div>

      <Footer />
    </section>
  );
}
