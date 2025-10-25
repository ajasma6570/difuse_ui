"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import HoverRevealButton from "@/lib/components/common/HoverRevealButton";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  categories?: string[];
}

interface BlogBannerCardProps {
  blog: BlogPost;
}

export default function BlogBannerCard({ blog }: BlogBannerCardProps) {
  return (
    <article className="relative w-full overflow-hidden rounded-xl">
      <div className="group relative h-[320px] lg:h-[700px] w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          quality={100}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority
        />

        <div className="absolute inset-0 p-5 sm:p-14 flex flex-col justify-between">
          {blog.categories && blog.categories.length > 0 && (
            <div className="flex items-center gap-2 mb-3">
              {blog.categories.map((category, index) => (
                <span
                  key={index}
                  className="text-xl font-normal px-3 py-1 rounded-md bg-[#6C6FD2] first:bg-[#6C6FD2] last:bg-[#25276C] text-white"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="flex items-end"
          >
            <div className="w-8/12 space-y-4">
              <div className="flex gap-8 items-center text-white text-sm">
                <div className="inline-flex items-center gap-2">
                  <Icon icon="solar:calendar-linear" width={20} height={20} />
                  <span className="text-base">{blog.date}</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Icon icon="solar:user-linear" width={16} height={16} />
                  <span className="text-base">{blog.author}</span>
                </div>
              </div>

              <Link href={`/newsroom/${blog.slug}`}>
                <h3 className="text-[#FBFBF9] text-xl sm:text-4xl font-normal leading-tight cursor-pointer">
                  {blog.title}
                </h3>
              </Link>

              <p className="mt-2 line-clamp-2 text-[#FBFBF9] text-lg">
                {blog.description}
              </p>
            </div>

            <div className="mt-3 w-5/12 flex justify-end">
              <HoverRevealButton
                icon={<Icon icon={arrowRight} width={24} height={24} />}
                text="Read"
                className="hidden xl:flex items-center text-[#1C1E55] bg-[#FBFBF9] hover:bg-[#E5E5E5] transition-colors p-5 rounded-lg text-xl tracking-[-0.05em] max-w-max"
                variant="link"
                href={`/newsroom/${blog.slug}`}
                parentControlled
              />

              <Link
                href={`/newsroom/${blog.slug}`}
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
      </div>
    </article>
  );
}
