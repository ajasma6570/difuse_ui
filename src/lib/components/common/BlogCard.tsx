"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import HoverRevealButton from "@/lib/components/common/HoverRevealButton";
import { BlogCardProps } from "@/interface/blog";

export default function BlogCard({
  blog,
  variant = "newsroom",
  height = "h-[400px]",
}: BlogCardProps) {
  return (
    <article className={`relative overflow-hidden rounded-xl ${height}`}>
      <Link href={`/newsroom/${blog.slug}`} className="block group">
        <div className={`relative ${height}`}>
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="absolute inset-0 p-8 text-white flex flex-col justify-between"
          >
            <div>
              {variant === "newsroom" && blog.categories && (
                <div className="flex items-center gap-2 mb-3">
                  {blog.categories.map((category, index) => (
                    <span
                      key={index}
                      className="text-md font-normal px-3 py-1 rounded-md bg-[#6C6FD2] first:bg-[#6C6FD2] last:bg-[#25276C] text-white"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}

              <div className="space-y-4">
                <div className="flex gap-8 items-center justify-between text-white text-sm">
                  <div className="inline-flex items-center gap-2">
                    <Icon icon="solar:calendar-linear" width={20} height={20} />
                    <span className="text-base">{blog.date}</span>
                  </div>

                  <div className="inline-flex items-center gap-2">
                    <Icon icon="solar:user-linear" width={16} height={16} />
                    <span className="text-base">{blog.author}</span>
                  </div>
                </div>

                <h3 className="font-light leading-relaxed text-2xl line-clamp-3">
                  {blog.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <HoverRevealButton
                icon={<Icon icon={arrowRight} width={24} height={24} />}
                text="Read"
                className="hidden xl:flex items-center text-[#1C1E55] bg-[#FBFBF9] hover:bg-[#E5E5E5] transition-colors p-5 rounded-lg text-xl tracking-[-0.05em] max-w-max"
                parentControlled
              />

              <button className="flex gap-2 items-center xl:hidden text-[#1C1E55] bg-[#FBFBF9] hover:bg-[#E5E5E5] transition-colors p-5 rounded-lg text-xl tracking-[-0.05em] max-w-max">
                <Icon
                  icon={arrowRight}
                  width={24}
                  height={24}
                  className="text-[#25276C]"
                />
                <span>Read</span>
              </button>
            </div>
          </motion.div>
        </div>
      </Link>
    </article>
  );
}
