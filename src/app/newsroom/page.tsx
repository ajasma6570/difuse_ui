"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import Footer from "@/components/Footer";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  categories: string[];
};

const ALL_POSTS: Post[] = [
  {
    id: "hero-1",
    title:
      "Introducing the DMSBG-100: The Compact Powerhouse for Next-Gen Business Networks",
    excerpt:
      "Difuse has officially launched the DMSBG-100, the first in our line of next-gen Multi-Service Business Gateways. Tailored for small to medium-sized businesses...",
    date: "April 4, 2025",
    author: "Hayzam",
    image: "/images/products/dmsbg/banner.png",
    categories: ["Latest", "Product Updates"],
  },
  {
    id: "feat-1",
    title: "Kalmi: A Simple Documentation CMS",
    excerpt:
      "A lightweight docs system with search, versioning, and MDX authoring.",
    date: "April 1, 2025",
    author: "Insights",
    image: "/images/products/product_1.png",
    categories: ["Insights"],
  },
  {
    id: "feat-2",
    title:
      "Guide to integrating Asterisk with Microsoft Teams using Direct Routing",
    excerpt:
      "A practical guide to connect on‑prem PBX with Teams for enterprise calling.",
    date: "Mar 29, 2025",
    author: "How‑to",
    image: "/images/products/product_2.png",
    categories: ["Insights", "Company News"],
  },
  {
    id: "feat-3",
    title:
      "Saving 100+ Desk Phones from E‑Waste: QoS with TFTP and a Simpler PBX",
    excerpt:
      "A migration story that kept hardware in service while simplifying ops.",
    date: "Mar 20, 2025",
    author: "Network",
    image: "/images/products/product_3.png",
    categories: ["Company News"],
  },
];

const CATEGORIES = [
  "Latest",
  "Product Updates",
  "Insights",
  "Company News",
] as const;

export default function Page() {
  const [active, setActive] = useState<"All" | (typeof CATEGORIES)[number]>(
    "All"
  );
  const [q, setQ] = useState("");
  const [limit, setLimit] = useState(9);

  const posts = useMemo(() => {
    const list = ALL_POSTS.concat(
      Array.from({ length: 12 }).map((_, i) => ({
        ...ALL_POSTS[(i % (ALL_POSTS.length - 1)) + 1],
        id: `g-${i}`,
      }))
    );
    return list;
  }, []);

  const hero = posts;
  const featured = posts.slice(1, 4);

  const filtered = posts
    .slice(4)
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

          <h1 className="text-3xl sm:text-6xl font-medium tracking-tight text-gray-900">
            Stay Updated with Difuse: <br /> News, Releases & Milestones
          </h1>
          <p className="max-w-3xl text-[#2A2A2A] text-lg">
            From product rollouts to industry insights, get the latest on how
            Difuse is shaping the future of unified IT infrastructure.
          </p>
        </div>
        <section className="mt-8 grid gap-6">
          <HeroCard post={hero[0]} />
        </section>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
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

        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, limit).map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </section>

        {limit < filtered.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setLimit((n) => n + 9)}
              className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50"
            >
              Load more
            </button>
          </div>
        )}
      </div>{" "}
      <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full">
        <Footer />
      </div>
    </main>
  );
}

function HeroCard({ post }: { post: Post }) {
  return (
    <article className="relative w-full overflow-hidden rounded-xl">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="group relative h-[320px] sm:h-[420px] w-full"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
          <div className="flex items-center gap-2 mb-3">
            {post.categories.slice(0, 2).map((t) => (
              <span
                key={t}
                className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>

          <h3 className="text-white text-xl sm:text-2xl font-semibold leading-snug">
            {post.title}
          </h3>

          <div className="mt-3 flex items-center gap-3 text-xs text-white/80">
            <span>{post.date}</span>
            <span>•</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>

          <p className="mt-2 line-clamp-2 text-white/90 text-sm">
            {post.excerpt}
          </p>

          <div className="mt-3">
            <Link
              href={`/newsroom/${post.id}`}
              className="inline-flex items-center gap-2 text-sm text-white bg-white/10 hover:bg-white/20 backdrop-blur px-3 py-1.5 rounded-md"
            >
              Read more
              <LuArrowRight />
            </Link>
          </div>
        </div>
      </motion.div>
    </article>
  );
}

function PostCard({
  post,
  compact = false,
}: {
  post: Post;
  compact?: boolean;
}) {
  return (
    <article className="relative overflow-hidden rounded-xl bg-gray-100 h-[300px]">
      <Link href={`/newsroom/${post.id}`} className="block group">
        <div className={`relative ${compact ? "h-[300px]" : "h-[300px]"}`}>
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="flex items-center gap-2 mb-2">
              {post.categories.slice(0, 2).map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>

            <h3
              className={`font-semibold leading-snug ${
                compact ? "text-base line-clamp-2" : "text-lg line-clamp-2"
              }`}
            >
              {post.title}
            </h3>

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
      </Link>
    </article>
  );
}
