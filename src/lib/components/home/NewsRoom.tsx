"use client";

import React from "react";
import AnimatedSlideButton from "../common/AnimatedSlideButton";
import Footer from "../common/Footer";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import BlogCard from "../common/BlogCard";
import { BlogPost } from "@/interface/blog";

export default function NewsRoom({ blogs }: { blogs: BlogPost[] }) {
  return (
    <section className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] pt-20">
      <div className="mx-auto w-full rounded-xl px-6 lg:max-w-[90rem] 2xl:px-0">
        <p className="text-4xl font-normal text-white lg:text-6xl">Newsroom</p>

        <div className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-2 2xl:grid-cols-3">
          {blogs.slice(-3).map((blog) => (
            <BlogCard key={blog.slug} blog={blog} variant="home" />
          ))}
        </div>

        <div className="mt-14 flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="w-full text-xl text-white lg:w-1/2">
            Explore what’s new across the platform — integrations, services, OS
            upgrades, and forward-looking innovations.
          </p>

          <AnimatedSlideButton
            icon={<Icon icon={arrowRight} width={24} height={24} />}
            text="Explore Newsroom"
            className="inline-flex items-center gap-2 rounded-lg border border-[#FBFBF9] p-4 text-lg font-medium text-[#FBFBF9] transition-colors hover:bg-[#FBFBF9] hover:text-[#25276C] lg:text-xl"
            variant="link"
            href="/newsroom"
          />
        </div>
      </div>

      <Footer />
    </section>
  );
}
