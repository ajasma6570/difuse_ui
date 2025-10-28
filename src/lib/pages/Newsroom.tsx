"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/lib/components/common/Footer";
import HoverRevealButton from "@/lib/components/common/HoverRevealButton";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import SearchIcon from "@iconify/icons-lucide/search";
import { AnimatePresence, motion } from "motion/react";
import PageTransition from "@/lib/components/common/PageTransition";
import { BlogPost } from "@/interface/blog";
import BlogCard from "../components/common/BlogCard";
import BlogBannerCard from "../components/common/BlogBannerCard";

const CATEGORIES = [
  "Latest",
  "Product Updates",
  "Insights",
  "Company News",
] as const;

export default function Newsroom({ blogs }: { blogs: BlogPost[] }) {
  const [active, setActive] = useState<"All" | (typeof CATEGORIES)[number]>(
    "All"
  );

  const [q, setQ] = useState("");
  const [limit, setLimit] = useState(9);

  const bannerPost = blogs.find((p) => p.isBanner) || blogs[0];

  const featured = blogs.filter((p) => p.id !== bannerPost.id).slice(0, 3);

  const filtered = blogs
    .filter((p) => (active === "All" ? true : p.categories?.includes(active)))
    .filter((p) =>
      q.trim()
        ? (p.title + " " + p.description)
            .toLowerCase()
            .includes(q.toLowerCase())
        : true
    );

  return (
    <PageTransition motionKey="newsroom-main-page-wrapper">
      <div className="flex min-h-screen flex-col items-center justify-center pt-14">
        <div className="md:max-w-8xl w-full px-6 py-16">
          <div className="space-y-8">
            <p className="text-3xl text-[#25276C]">Newsroom</p>

            <h1 className="text-3xl leading-snug font-medium text-[#080808] sm:text-6xl">
              Stay Updated with Difuse: <br /> News, Releases & Milestones
            </h1>
            <p className="max-w-2xl text-lg text-[#2A2A2A]">
              From product rollouts to industry insights, get the latest on how
              Difuse is shaping the future of unified IT infrastructure.
            </p>
          </div>
          <section className="mt-12 hidden gap-6 lg:grid">
            <BlogBannerCard key={bannerPost.slug} blog={bannerPost} />
          </section>

          <section className="mt-12 grid gap-6 lg:hidden">
            <BlogCard key={bannerPost.slug} blog={bannerPost} />
          </section>

          <section className="mt-2 grid grid-cols-1 gap-2 lg:grid-cols-3">
            {featured.map((p) => (
              <BlogCard key={p.slug} blog={p} />
            ))}
          </section>

          <section className="mt-28">
            <h2 className="text-6xl font-medium text-[#080808]">
              Navigate by Category
            </h2>

            <div className="mt-10 mb-10 flex flex-col gap-6 lg:mt-20 lg:mb-16 lg:items-center lg:justify-between xl:flex-row">
              <div className="order-2 flex flex-wrap items-center gap-2 xl:order-1">
                <button
                  onClick={() => setActive("All")}
                  className={`cursor-pointer rounded-md border px-5 py-2.5 text-lg lg:px-10 ${
                    active === "All"
                      ? "border-[#25276C] bg-[#25276C] text-[#FBFBF9]"
                      : "border-[#BEBEBE] text-[#080808] hover:bg-gray-100"
                  }`}
                >
                  All
                </button>
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={`cursor-pointer rounded-md border px-5 py-2.5 text-lg lg:px-10 ${
                      active === c
                        ? "border-[#25276C] bg-[#25276C] text-[#FBFBF9]"
                        : "border-[#BEBEBE] text-[#080808] hover:bg-gray-100"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="relative order-1 w-full xl:order-2 xl:w-64">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search posts…"
                  className="w-full rounded-md border border-[#BEBEBE] bg-[#FBFBF9] px-3 py-2.5 pl-11 text-lg outline-none focus:border-[#1C1E55] focus:ring-1 focus:ring-[#1C1E55]"
                />
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-[#BEBEBE]">
                  <Icon icon={SearchIcon} width={24} height={24} />
                </span>
              </div>
            </div>
          </section>

          <AnimatePresence mode="wait">
            <motion.section
              key={active + q + limit}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.slice(0, limit).map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </motion.section>
          </AnimatePresence>

          {limit < filtered.length && (
            <div className="mt-20 flex justify-center">
              <button
                onClick={() => setLimit((n) => n + 9)}
                className="group flex max-w-max items-center gap-2 rounded-lg border border-[#1C1E55] p-5 text-xl tracking-[-0.05em] text-[#1C1E55] transition-colors duration-300 hover:bg-[#1C1E55] hover:text-[#FBFBF9]"
              >
                {" "}
                <Icon
                  icon={arrowRight}
                  width={24}
                  height={24}
                  className="text-[#25276C] transition-colors duration-300 group-hover:text-[#FBFBF9]"
                />
                Load more
              </button>
            </div>
          )}
        </div>{" "}
        <div className="mt-5 w-full bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)]">
          <Footer type="product" />
        </div>
      </div>
    </PageTransition>
  );
}

function PostCard({ post }: { post: BlogPost; compact?: boolean }) {
  return (
    <article className="relative overflow-hidden rounded-xl bg-gray-100">
      <Link href={`/newsroom/${post.slug}`} className="group block">
        <div className={`relative h-[400px]`}>
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover transition-transform duration-500 hover:scale-105"
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
              <div className="mb-3 flex items-center gap-2">
                <button className="text-md rounded-md bg-[#6C6FD2] px-3 py-1 font-normal text-white">
                  Latest
                </button>
                <button className="text-md rounded-md bg-[#25276C] px-3 py-1 font-normal text-white">
                  Product Updates
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-8 text-sm text-white">
                  <div className="inline-flex items-center gap-2">
                    <Image
                      src="/images/news/vector1.png"
                      alt="calendar_icon"
                      width={20}
                      height={14}
                      className="object-contain"
                    />
                    <span className="text-base">{post.date}</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Image
                      src="/images/news/vector.png"
                      alt="calendar_icon"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                    <span className="text-base">{post.author}</span>
                  </div>
                </div>

                <h3
                  className={`line-clamp-3 text-2xl leading-relaxed font-light`}
                >
                  {post.title}
                </h3>
              </div>
            </div>
            <div>
              <div className="mt-2 flex items-center justify-between">
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
            </div>
          </motion.div>
        </div>
      </Link>
    </article>
  );
}
