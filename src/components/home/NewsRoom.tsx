import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import AnimatedSlideButton from "../AnimatedSlideButton";
import { FiArrowRight } from "react-icons/fi";
import Footer from "../Footer";

export default function NewsRoom() {
  const news = [
    {
      title:
        "Guide to Integrating Asterisk with Microsoft Teams Using Direct Routing",
      date: "August 20, 2024",
      author: "Hayzam",
      image: "integrating_asterisk.png",
    },
    {
      title:
        "Saving 100+ Desk Phones from E-Waste Doom with TFTP and a Simpler PBX",
      date: "August 20, 2024",
      author: "Hayzam",
      image: "deskphone.png",
    },
    {
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

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
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
                <button className="self-start mt-4 text-white hover:text-gray-300 bg-white p-3 rounded-md">
                  <FaArrowRight size={20} className="text-[#25276C]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center w-full mt-14 gap-8">
          <p className="w-full lg:w-1/2 text-xl text-white">
            Explore what’s new across the platform — integrations, services, OS
            upgrades, and forward-looking innovations.
          </p>

          <AnimatedSlideButton
            icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
            text="Explore Newsroom"
            className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-4 rounded-lg text-lg lg:text-xl font-medium inline-flex"
          />
        </div>
      </div>

      <Footer />
    </section>
  );
}
