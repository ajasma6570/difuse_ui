"use client";

import React from "react";
import AnimatedSlideButton from "../common/AnimatedSlideButton";
import Footer from "../common/Footer";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import BlogCard from "../common/BlogCard";
import { BlogPost } from "@/interface/blog";

export default function NewsRoom({ blogs }: { blogs: BlogPost[] }) {
  console.log(blogs);

  return (
    <section className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] pt-20 ">
      <div className="lg:max-w-[90rem] w-full mx-auto rounded-xl px-6 2xl:px-0">
        <p className="text-white text-4xl lg:text-6xl font-normal">Newsroom</p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3">
          {blogs.slice(-3).map((blog) => (
            <BlogCard key={blog.slug} blog={blog} variant="home" />
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
