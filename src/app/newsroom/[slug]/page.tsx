import Footer from "@/lib/components/common/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import arrowLeft from "@iconify/icons-lucide/arrow-left";
import user from "@iconify/icons-lucide/user";
import PageTransition from "@/lib/components/common/PageTransition";
import ShareButtons from "@/lib/components/common/ShareButtons";
import getMarkDownData from "@/utils/GetMarkDownData";
import getMarkDownContent from "@/utils/GetMarkDownContent";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import { BlogPost } from "@/interface/blog";
import { icons } from "@/utils/meta";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;
const siteUrl = process.env.SITE_URL;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const blog = getMarkDownContent("src/data/blogs/", slug);
  const postBlog = blog.data;

  return {
    title: `${postBlog?.title} · Difuse`,
    description:
      postBlog?.description ||
      "Experience streamlined connectivity and security at the edge with Difuse – Intuitive business gateways",
    icons,
    openGraph: {
      title: `${postBlog?.title} · Difuse`,
      description:
        postBlog?.description ||
        "Experience streamlined connectivity and security at the edge with Difuse – Intuitive business gateways",
      images: [
        {
          url: postBlog?.image || `${siteUrl}/images/opengraph/1200x630.png`,
          width: 1200,
          height: 630,
          alt: `${postBlog?.title} | ${siteName}`,
        },
      ],
    },
    alternates: {
      canonical: `https://difuse-ui.vercel.app/newsroom/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const blogs = getMarkDownData("src/data/blogs") as BlogPost[];

  return blogs.map((post) => ({
    slug: post.slug,
  }));
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const allBlogs = getMarkDownData("src/data/blogs") as BlogPost[];
  const blog = getMarkDownContent("src/data/blogs/", slug);
  const postBlog = blog.data;

  const currentPostIndex = allBlogs.findIndex((p) => p.slug === slug);
  const relatedPosts = allBlogs
    .filter((_, index) => index !== currentPostIndex)
    .slice(0, 3);

  const previousPost =
    currentPostIndex > 0 ? allBlogs[currentPostIndex - 1] : null;
  const nextPost =
    currentPostIndex < allBlogs.length - 1
      ? allBlogs[currentPostIndex + 1]
      : null;

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = postBlog?.title || "";
  return (
    <PageTransition motionKey="newsroom-slug-page-wrapper">
      <div className="flex min-h-screen flex-col items-center pt-14">
        <div className="md:max-w-8xl w-full px-6 py-16">
          <div>
            <Link
              href="/newsroom"
              className="text-xl text-[#8B8B8B] hover:text-[#25276C]"
            >
              /Back to newsroom
            </Link>
          </div>

          <div className="mt-10 flex w-full flex-col gap-10 lg:flex-row">
            <div className="w-full space-y-4 lg:w-7/12">
              <p className="text-[clamp(2rem,6vw,3.5rem)] leading-tight text-[#080808]">
                {postBlog?.title}
              </p>
              <p className="text-lg font-light text-[#2A2A2A]">
                {postBlog?.description}
              </p>
            </div>
            <div className="flex w-full justify-center lg:w-5/12 lg:justify-end">
              <Image
                src={postBlog?.image ?? ""}
                alt={`news_${postBlog?.title ?? "image"}`}
                width={450}
                height={250}
              />
            </div>
          </div>

          <hr className="my-20" />
          <div className="flex w-full flex-col gap-10 lg:flex-row">
            <div className="w-full space-y-6 lg:w-6/12">
              <article className="prose lg:prose-xl">
                <ReactMarkdown rehypePlugins={[rehypeSlug]}>
                  {blog.content}
                </ReactMarkdown>
              </article>
            </div>

            <div className="hidden lg:block lg:w-2/12"></div>
            <div className="flex h-full w-full flex-col items-center gap-2 rounded-xl bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] p-4 lg:w-4/12">
              <div className="flex h-[70px] w-full items-center justify-between rounded-xl bg-[#FBFBF9] px-6 text-lg font-medium text-[#080808]">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D9D9D9]">
                    <Icon icon={user} className="h-5 w-5 text-[#080808]" />
                  </div>
                  <span className="font-medium">{postBlog?.author}</span> |
                  <span className="text-sm text-[#676767]">
                    {postBlog?.date}
                  </span>
                </div>
              </div>

              <div className="flex h-[70px] w-full items-center justify-start gap-4 rounded-xl bg-[#FBFBF9] px-6 text-xl font-medium text-[#676767]">
                <span className="text-lg text-[#676767]">Share this on:</span>
                <ShareButtons url={shareUrl} title={shareTitle} />
              </div>

              <div className="flex h-[70px] w-full items-center justify-center rounded-xl bg-[#25276C] px-6 text-xl font-medium text-[#FBFBF9]">
                Related posts:
              </div>

              {relatedPosts.map((relatedPost, index) => (
                <div
                  key={index}
                  className="w-full rounded-xl bg-[#FBFBF9] p-4 transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="flex gap-4">
                    <div className="relative h-[120px] w-[120px] flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={relatedPost.image || "/placeholder-image.jpg"}
                        alt={relatedPost.title}
                        fill
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <h3 className="mb-2 line-clamp-3 text-lg leading-relaxed font-medium text-[#080808]">
                        {relatedPost.title}
                      </h3>
                      <Link
                        href={`/newsroom/${relatedPost.slug}`}
                        className="inline-flex items-center gap-1 text-lg font-medium text-[#25276C] transition-colors duration-200 hover:text-[#1a1c4f]"
                      >
                        <Icon icon={arrowRight} width={14} height={14} />
                        Read
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-20" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 lg:gap-6">
              {previousPost ? (
                <button
                  disabled={!previousPost}
                  className="group cursor-pointer rounded-lg border border-[#999999] p-4 transition-colors duration-300 hover:border-[#25276C] hover:bg-[#25276C]"
                >
                  <Link href={`/newsroom/${previousPost.slug}`}>
                    {" "}
                    <Icon
                      icon={arrowLeft}
                      width={30}
                      height={30}
                      className="text-[#999999] group-hover:text-white"
                    />{" "}
                  </Link>
                </button>
              ) : (
                <button className="rounded-lg border p-2 opacity-30 lg:p-4">
                  <Icon
                    icon={arrowLeft}
                    width={30}
                    height={30}
                    className="text-[#999999]"
                  />
                </button>
              )}
              <div>
                <p className="text-lg font-medium text-[#25276C] lg:text-xl">
                  Previous Post
                </p>
                {previousPost && (
                  <p className="max-w-[200px] truncate text-sm text-[#676767]">
                    {previousPost.title}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 lg:gap-6">
              <div className="text-right">
                <p className="text-lg font-medium text-[#25276C] lg:text-xl">
                  Next Post
                </p>
                {/* {nextPost && (
                  <p className="text-[#676767] text-sm truncate max-w-[200px]">
                    {nextPost.title}
                  </p>
                )} */}
              </div>
              {nextPost ? (
                <Link href={`/newsroom/${nextPost.slug}`}>
                  <button className="group cursor-pointer rounded-lg border border-[#999999] p-2 transition-colors duration-300 hover:border-[#25276C] hover:bg-[#25276C] lg:p-4">
                    <Icon
                      icon={arrowRight}
                      width={30}
                      height={30}
                      className="text-[#999999] group-hover:text-white"
                    />
                  </button>
                </Link>
              ) : (
                <button className="cursor-not-allowed rounded-lg border border-[#E5E5E5] p-4 opacity-50">
                  <Icon
                    icon={arrowRight}
                    width={30}
                    height={30}
                    className="text-[#E5E5E5]"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="mt-5 w-full bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)]">
          <Footer type="product" />
        </div>
      </div>
    </PageTransition>
  );
}
