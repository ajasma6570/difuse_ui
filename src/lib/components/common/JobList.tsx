"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Vectors } from "@/assets/vectors";
import AnimatedSlideButton from "./AnimatedSlideButton";
import minus from "@iconify/icons-lucide/minus";
import plus from "@iconify/icons-lucide/plus";
import { motion, AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import { Careers } from "@/interface/careers";

export default function JobList({ careers }: { careers: Careers[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  return (
    <div className="mx-auto max-w-5xl space-y-2">
      {careers.map((job) => (
        <div
          key={job.id}
          className="overflow-hidden rounded-lg border border-[#FBFBF9]/60"
        >
          <button
            onClick={() => toggleAccordion(job.id)}
            className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded">
                <Image
                  src={Vectors.BagSearch}
                  alt="briefcase_icon"
                  width={45}
                  height={45}
                  className="object-contain"
                />
              </div>
              <span className="text-md font-medium text-[#FBFBF9] md:text-3xl">
                {job.title}
              </span>
            </div>
            <div className="text-[#FBFBF9]">
              {expandedIndex === job.id ? (
                <Icon icon={minus} width={24} height={24} />
              ) : (
                <Icon icon={plus} width={24} height={24} />
              )}
            </div>
          </button>

          <AnimatePresence initial={false}>
            {expandedIndex === job.id && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="origin-top overflow-hidden"
              >
                <div className="px-6 py-6 text-sm md:px-10 md:text-base">
                  <div className="text-md mb-6 flex flex-wrap gap-6 text-[#FBFBF9] md:text-lg">
                    <span>
                      <strong>Job Id:</strong> {job.id}
                    </span>
                    <span>
                      <strong>Location:</strong> {job.location}
                    </span>
                    <span>
                      <strong>Department:</strong> {job.department}
                    </span>
                    <span>
                      <strong>Type:</strong> {job.type}
                    </span>
                  </div>

                  <article className="prose lg:prose-xl prose-headings:text-[#FBFBF9] prose-p:text-[#FBFBF9] prose-strong:text-[#FBFBF9] prose-li:text-[#FBFBF9] prose-ul:text-[#FBFBF9] prose-ol:text-[#FBFBF9] mt-12 text-[#FBFBF9]">
                    <ReactMarkdown rehypePlugins={[rehypeSlug]}>
                      {job.content}
                    </ReactMarkdown>
                  </article>

                  <AnimatedSlideButton
                    icon={<Icon icon={arrowRight} width={24} height={24} />}
                    text="Apply Now"
                    className="mt-7 inline-flex rounded-lg border border-[#FBFBF9] bg-transparent px-6 py-4 text-xl leading-7 font-normal tracking-[-0.05em] text-[#FBFBF9] hover:bg-[#FBFBF9] hover:text-[#1C1E55]"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
