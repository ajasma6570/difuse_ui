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
      <div className="group relative h-[320px] w-full lg:h-[700px]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          quality={100}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />

        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-14">
          {blog.categories && blog.categories.length > 0 && (
            <div className="mb-3 flex items-center gap-2">
              {blog.categories.map((category, index) => (
                <span
                  key={index}
                  className="rounded-md bg-[#6C6FD2] px-3 py-1 text-xl font-normal text-white first:bg-[#6C6FD2] last:bg-[#25276C]"
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
              <div className="flex items-center gap-8 text-sm text-white">
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
                <h3 className="cursor-pointer text-xl leading-tight font-normal text-[#FBFBF9] sm:text-4xl">
                  {blog.title}
                </h3>
              </Link>

              <p className="mt-2 line-clamp-2 text-lg text-[#FBFBF9]">
                {blog.description}
              </p>
            </div>

            <div className="mt-3 flex w-5/12 justify-end">
              <HoverRevealButton
                icon={<Icon icon={arrowRight} width={24} height={24} />}
                text="Read"
                className="hidden max-w-max items-center rounded-lg bg-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#1C1E55] transition-colors hover:bg-[#E5E5E5] xl:flex"
                variant="link"
                href={`/newsroom/${blog.slug}`}
                parentControlled
              />

              <Link
                href={`/newsroom/${blog.slug}`}
                className="flex max-w-max items-center gap-2 rounded-lg bg-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#1C1E55] transition-colors hover:bg-[#E5E5E5] xl:hidden"
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
