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
      <Link href={`/newsroom/${blog.slug}`} className="group block">
        <div className={`relative ${height}`}>
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="absolute inset-0 flex flex-col justify-between p-8 text-white"
          >
            <div>
              {variant === "newsroom" && blog.categories && (
                <div className="mb-3 flex items-center gap-2">
                  {blog.categories.map((category, index) => (
                    <span
                      key={index}
                      className="text-md rounded-md bg-[#6C6FD2] px-3 py-1 font-normal text-white first:bg-[#6C6FD2] last:bg-[#25276C]"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-8 text-sm text-white">
                  <div className="inline-flex items-center gap-2">
                    <Icon icon="solar:calendar-linear" width={20} height={20} />
                    <span className="text-base">{blog.date}</span>
                  </div>

                  <div className="inline-flex items-center gap-2">
                    <Icon icon="solar:user-linear" width={16} height={16} />
                    <span className="text-base">{blog.author}</span>
                  </div>
                </div>

                <h3 className="line-clamp-3 text-2xl leading-relaxed font-light">
                  {blog.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <HoverRevealButton
                icon={<Icon icon={arrowRight} width={24} height={24} />}
                text="Read"
                className="hidden max-w-max items-center rounded-lg bg-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#1C1E55] transition-colors hover:bg-[#E5E5E5] xl:flex"
                parentControlled
              />

              <button className="flex max-w-max items-center gap-2 rounded-lg bg-[#FBFBF9] p-5 text-xl tracking-[-0.05em] text-[#1C1E55] transition-colors hover:bg-[#E5E5E5] xl:hidden">
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
