import Footer from "@/components/common/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AsteriskImage from "$/images/news/integrating_asterisk.png";
import { news } from "@/static-data/newsroom";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return news.map((p) => ({ slug: p.slug }));
}

export default async function Page(props: Props) {
  // const slug = await props.params;

  // console.log(slug);

  return (
    <main className="pt-20 min-h-screen flex flex-col  items-center">
      <div className="w-full md:max-w-8xl px-6 py-16">
        <div>
          <Link href="/newsroom" className="text-[#8B8B8B] text-xl">
            /Back to newsroom
          </Link>
        </div>

        <div className="mt-10 flex w-full gap-10">
          <div className="w-full md:w-7/12 space-y-4">
            <span>Test Dummy Data</span>
            <p className="text-[#080808] text-6xl leading-tight">
              Guide to Integrating Asterisk with Microsoft Teams Using Direct
              Routing
            </p>
            <p className="text-[#2A2A2A] text-lg font-light">
              Want to connect your Asterisk PBX to Microsoft Teams with Direct
              Routing? It’s easier than you might think—with a few key steps and
              one important patch, you can bridge the gap between your existing
              setup and Teams in no time.
            </p>
          </div>
          <div className="w-full md:w-5/12 flex justify-end">
            <Image
              src={AsteriskImage.src}
              placeholder="blur"
              blurDataURL={AsteriskImage.blurDataURL}
              alt="Asterisk and Microsoft Teams Integration"
              width={450}
              height={250}
            />
          </div>
        </div>

        <hr className="my-20" />
        <div className="flex w-full gap-10">
          <div className="space-y-6 w-6/12">
            <p>Introduction</p>
            <p>
              Love it or hate it, Microsoft Teams has become pretty popular. As
              more organizations adopt it as their primary collaboration tool,
              the need to integrate it with existing on-premise VoIP or PBX
              systems is growing fast. If you’re using Asterisk—a highly
              flexible, open-source PBX—you’re in luck. With the right
              configuration, Asterisk can integrate cleanly with Microsoft Teams
              using Direct Routing.
            </p>
            <p>
              However, getting Asterisk to work with Microsoft Teams takes some
              careful setup. Teams has strict SIP and TLS requirements—most
              notably, it expects a Fully Qualified Domain Name (FQDN) in the
              Contact header of SIP messages. This guide walks you through
              building Asterisk 22.3.0 from source and applying a patch that
              adds the contact_fqdn option to meet those requirements.
            </p>
            <p>
              Prefer an Easier Alternative? If you’re looking for a ready-to-use
              solution with built-in PBX capabilities and Microsoft Teams
              compatibility, check out the DMSBG-100. This all-in-one gateway
              simplifies deployment with features like WireGuard VPN, integrated
              firewall, and a user-friendly interface—no patching, no coding,
              and no monthly subscription fees. Every unit also includes free
              TLS certificates and managed DNS, so you’re ready to go right out
              of the box.
            </p>
            <p>
              If you’re sticking with the DIY route, this guide will help you
              get things set up.
            </p>
          </div>
          <div className="w-2/12"></div>
          <div className="w-4/12 h-full bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] rounded-xl p-4 flex flex-col items-center gap-2">
            <div className="bg-[#FBFBF9] h-[70px] w-full rounded-xl"></div>
            <div className="bg-[#FBFBF9] h-[70px] w-full rounded-xl"></div>
            <div className="bg-[#25276C] h-[70px] w-full  rounded-xl"></div>
            <div className="bg-[#FBFBF9] h-[160px] w-full rounded-xl"></div>
            <div className="bg-[#FBFBF9] h-[160px] w-full rounded-xl"></div>
            <div className="bg-[#FBFBF9] h-[160px] w-full rounded-xl"></div>
          </div>
        </div>
        <hr className="my-20" />

        <div className="flex justify-between">
          <button>Left icon</button>
          <button>right icon</button>
        </div>
      </div>
      <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full mt-5">
        <Footer />
      </div>
    </main>
  );
}
