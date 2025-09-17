"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { LuArrowRight } from "react-icons/lu";
import Footer from "@/components/Footer";
import Banner from "@/components/utils/Banner";
import { NewPost, news } from "@/static-data/newsroom";

const CATEGORIES = [
  "Latest",
  "Product Updates",
  "Insights",
  "Company News",
] as const;

export default function Newsroom() {
  const [active, setActive] = useState<"All" | (typeof CATEGORIES)[number]>(
    "All"
  );
  const [q, setQ] = useState("");
  const [limit, setLimit] = useState(9);

  const posts = useMemo(() => {
    const list = news.concat(
      Array.from({ length: 12 }).map((_, i) => ({
        ...news[i % news.length],
        id: `g-${i}`,
      }))
    );
    return list;
  }, []);

  const bannerPost = posts.find((p) => p.banner) || posts[0];
  const featured = posts.slice(1, 4);

  const filtered = posts
    .filter((p) => (active === "All" ? true : p.categories.includes(active)))
    .filter((p) =>
      q.trim()
        ? (p.title + " " + p.excerpt).toLowerCase().includes(q.toLowerCase())
        : true
    );

  return (
    <main className="pt-14 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full md:max-w-8xl px-6 py-16">
        <div className="space-y-8">
          <p className="text-3xl text-[#25276C]">Newsroom</p>

          <h1 className="text-3xl sm:text-6xl font-medium leading-snug text-[#080808]">
            Stay Updated with Difuse: <br /> News, Releases & Milestones
          </h1>
          <p className="max-w-2xl text-[#2A2A2A] text-lg">
            From product rollouts to industry insights, get the latest on how
            Difuse is shaping the future of unified IT infrastructure.
          </p>
        </div>
        <section className="mt-12 grid gap-6">
          <HeroCard post={bannerPost} />
        </section>

        <section className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2">
          {featured.map((p) => (
            <PostCard key={p.id} post={p} compact />
          ))}
        </section>

        <section className="mt-28">
          <h2 className="text-6xl font-medium text-[#080808]">
            Navigate by Category
          </h2>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2 mb-5">
              <button
                onClick={() => setActive("All")}
                className={`px-3 py-1.5 rounded-md text-sm border ${
                  active === "All"
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "text-gray-700 hover:bg-gray-100 border-gray-300"
                }`}
              >
                All
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-3 py-1.5 rounded-md text-sm border ${
                    active === c
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "text-gray-700 hover:bg-gray-100 border-gray-300"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search posts…"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400 text-sm">
                ⌕
              </span>
            </div>
          </div>
        </section>

        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {filtered.slice(0, limit).map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </section>

        {limit < filtered.length && (
          <div className="mt-20 flex justify-center">
            <button
              onClick={() => setLimit((n) => n + 9)}
              className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50"
            >
              Load more
            </button>
          </div>
        )}
      </div>{" "}
      <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full mt-5">
        <Footer />
      </div>
    </main>
  );
}

function HeroCard({ post }: { post: NewPost }) {
  return (
    <article className="relative w-full overflow-hidden rounded-xl">
      <div className="group relative h-[320px] sm:h-[700px] w-full">
        <Banner
          mobile={post.mobileImage?.src ?? ""}
          desktop={post.image.src}
          desktopBlur={post.image.blurDataURL}
          mobileBlur={post.mobileImage?.blurDataURL}
          alt="Newsroom Banner"
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 p-5 sm:p-14 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-3 ">
            <button className="text-xl font-normal px-3 py-1 rounded-md bg-[#6C6FD2] text-white">
              Latest
            </button>
            <button className="text-xl font-normal px-3 py-1 rounded-md bg-[#25276C] text-white">
              Product Updates
            </button>
          </div>

          <div className="flex items-end">
            <div className="w-8/12 space-y-4">
              <div className="flex gap-8 items-center text-white text-sm">
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

              <h3 className="text-[#FBFBF9] text-xl sm:text-4xl font-normal leading-tight">
                {post.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-[#FBFBF9] text-lg">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-3 w-5/12 flex justify-end">
              <Link
                href={`/newsroom/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm text-white bg-white/10 hover:bg-white/20 backdrop-blur px-3 py-1.5 rounded-md"
              >
                Read more
                <LuArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function PostCard({ post }: { post: NewPost; compact?: boolean }) {
  return (
    <article className="relative overflow-hidden rounded-xl bg-gray-100 h-[400px]">
      <Link href={`/newsroom/${post.slug}`} className="block group">
        <div className={`relative h-[400px]`}>
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={post.image.src}
              placeholder="blur"
              blurDataURL={post.image.blurDataURL}
              alt={post.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          <div className="absolute inset-0 p-8 text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 ">
                <button className="text-md font-normal px-3 py-1 rounded-md bg-[#6C6FD2] text-white">
                  Latest
                </button>
                <button className="text-md font-normal px-3 py-1 rounded-md bg-[#25276C] text-white">
                  Product Updates
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex gap-8 items-center justify-between text-white text-sm">
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

                <h3 className={`font-light leading-relaxed text-2xl `}>
                  {post.title}
                </h3>
              </div>
            </div>
            <div>
              <div className="mt-2 flex items-center justify-between">
                <button
                  aria-label="Open"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/15 text-white hover:bg-white/25"
                >
                  <LuArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
