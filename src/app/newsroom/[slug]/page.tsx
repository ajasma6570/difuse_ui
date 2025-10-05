import Footer from "@/lib/components/common/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { news } from "@/lib/static-data/newsroom";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import arrowLeft from "@iconify/icons-lucide/arrow-left";
import user from "@iconify/icons-lucide/user";
import PageTransition from "@/lib/components/common/PageTransition";
import ShareButtons from "@/lib/components/common/ShareButtons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return news.map((p) => ({ slug: p.slug }));
}

export default async function Page(props: Props) {
  const slug = await props.params;

  console.log(slug);

  const post = news.find((p) => p.slug === slug.slug);

  console.log("post", post);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = post?.title || "";

  // Get current post index and related posts
  const currentPostIndex = news.findIndex((p) => p.slug === slug.slug);
  const relatedPosts = news
    .filter((_, index) => index !== currentPostIndex)
    .slice(0, 3);

  // Get previous and next posts
  const previousPost = currentPostIndex > 0 ? news[currentPostIndex - 1] : null;
  const nextPost =
    currentPostIndex < news.length - 1 ? news[currentPostIndex + 1] : null;

  return (
    <PageTransition motionKey="newsroom-slug-page-wrapper">
      <div className="pt-14 min-h-screen flex flex-col  items-center">
        <div className="w-full md:max-w-8xl px-6 py-16">
          <div>
            <Link
              href="/newsroom"
              className="text-[#8B8B8B] text-xl hover:text-[#25276C]"
            >
              /Back to newsroom
            </Link>
          </div>

          <div className="mt-10 flex flex-col lg:flex-row w-full gap-10">
            <div className="w-full lg:w-7/12 space-y-4">
              <p className="text-[#080808] text-6xl leading-tight">
                {post?.title}
              </p>
              <p className="text-[#2A2A2A] text-lg font-light">
                {post?.description}
              </p>
            </div>
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
              <Image
                src={post?.image ?? ""}
                alt={`news_${post?.title ?? "image"}`}
                width={450}
                height={250}
              />
            </div>
          </div>

          <hr className="my-20" />
          <div className="flex flex-col lg:flex-row w-full gap-10">
            <div className="space-y-6 w-full lg:w-6/12">
              <p>Introduction</p>
              <p>
                Love it or hate it, Microsoft Teams has become pretty popular.
                As more organizations adopt it as their primary collaboration
                tool, the need to integrate it with existing on-premise VoIP or
                PBX systems is growing fast. If you’re using Asterisk—a highly
                flexible, open-source PBX—you’re in luck. With the right
                configuration, Asterisk can integrate cleanly with Microsoft
                Teams using Direct Routing.
              </p>
              <p>
                However, getting Asterisk to work with Microsoft Teams takes
                some careful setup. Teams has strict SIP and TLS
                requirements—most notably, it expects a Fully Qualified Domain
                Name (FQDN) in the Contact header of SIP messages. This guide
                walks you through building Asterisk 22.3.0 from source and
                applying a patch that adds the contact_fqdn option to meet those
                requirements.
              </p>
              <p>
                Prefer an Easier Alternative? If you’re looking for a
                ready-to-use solution with built-in PBX capabilities and
                Microsoft Teams compatibility, check out the DMSBG-100. This
                all-in-one gateway simplifies deployment with features like
                WireGuard VPN, integrated firewall, and a user-friendly
                interface—no patching, no coding, and no monthly subscription
                fees. Every unit also includes free TLS certificates and managed
                DNS, so you’re ready to go right out of the box.
              </p>
              <p>
                If you’re sticking with the DIY route, this guide will help you
                get things set up.
              </p>
            </div>
            <div className="hidden lg:block lg:w-2/12"></div>
            <div className="w-full lg:w-4/12 h-full bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] rounded-xl p-4 flex flex-col items-center gap-2">
              <div className="bg-[#FBFBF9] h-[70px] w-full rounded-xl font-medium text-lg px-6 text-[#080808] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#D9D9D9] rounded-full flex items-center justify-center">
                    <Icon icon={user} className="text-[#080808] h-5 w-5" />
                  </div>
                  <span className="font-medium">{post?.author}</span> |
                  <span className="text-[#676767] text-sm">{post?.date}</span>
                </div>
              </div>

              <div className="bg-[#FBFBF9] h-[70px] w-full rounded-xl flex items-center justify-between font-medium px-6 text-xl text-[#25276C]">
                <span className="text-lg text-[#676767]">Share this on:</span>
                <ShareButtons url={shareUrl} title={shareTitle} />
              </div>

              <div className="bg-[#25276C] h-[70px] w-full rounded-xl text-[#FBFBF9] flex justify-center px-6 items-center font-medium text-xl">
                Related posts:
              </div>

              {relatedPosts.map((relatedPost, index) => (
                <div
                  key={index}
                  className="bg-[#FBFBF9] w-full rounded-xl p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex gap-4">
                    <div className="relative w-[120px] h-[120px] flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder-image.jpg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0 justify-between flex flex-col">
                      <h3 className="text-xl font-medium text-[#080808] line-clamp-3 leading-tight mb-2">
                        {relatedPost.title}
                      </h3>
                      <Link
                        href={`/newsroom/${relatedPost.slug}`}
                        className="inline-flex items-center gap-1 text-[#25276C] text-lg font-medium hover:text-[#1a1c4f] transition-colors duration-200"
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

          <div className="flex justify-between items-center">
            <div className="flex gap-6 items-center">
              {previousPost ? (
                <Link href={`/newsroom/${previousPost.slug}`}>
                  <button className="border cursor-pointer border-[#999999] hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300 p-4 rounded-lg">
                    <Icon
                      icon={arrowLeft}
                      width={30}
                      height={30}
                      className="text-[#999999] group-hover:text-white"
                    />
                  </button>
                </Link>
              ) : (
                <button className="border cursor-not-allowed border-[#E5E5E5] p-4 rounded-lg opacity-50">
                  <Icon
                    icon={arrowLeft}
                    width={30}
                    height={30}
                    className="text-[#E5E5E5]"
                  />
                </button>
              )}
              <div>
                <p className="text-[#25276C] text-xl font-medium">
                  Previous Post
                </p>
                {previousPost && (
                  <p className="text-[#676767] text-sm truncate max-w-[200px]">
                    {previousPost.title}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <div className="text-right">
                <p className="text-[#25276C] text-xl font-medium">Next Post</p>
                {nextPost && (
                  <p className="text-[#676767] text-sm truncate max-w-[200px]">
                    {nextPost.title}
                  </p>
                )}
              </div>
              {nextPost ? (
                <Link href={`/newsroom/${nextPost.slug}`}>
                  <button className="border cursor-pointer border-[#999999] p-4 rounded-lg hover:bg-[#25276C] hover:border-[#25276C] group transition-colors duration-300">
                    <Icon
                      icon={arrowRight}
                      width={30}
                      height={30}
                      className="text-[#999999] group-hover:text-white"
                    />
                  </button>
                </Link>
              ) : (
                <button className="border cursor-not-allowed border-[#E5E5E5] p-4 rounded-lg opacity-50">
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
        <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full mt-5">
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}
