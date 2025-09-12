import AnimatedSlideButton from "@/components/AnimatedSlideButton";
import Footer from "@/components/Footer";
import Image from "next/image";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { IoBagRemoveOutline } from "react-icons/io5";

const features = [
  {
    title: "Unlimited Extensions",
    desc: "Unlimited extensions for on-site, remote, and mobile users",
  },
  {
    title: "Universally Compatible",
    desc: "Effortlessly compatible with all SIP-based devices and services",
  },
  {
    title: "Multi-Level IVR",
    desc: "Tailored Interactive Call Menus for Improved Interactions",
  },
  {
    title: "Advanced Routing",
    desc: "Optimize call management with advanced customizable routing",
  },
  {
    title: "Operator Panel",
    desc: "Efficiently manage calls with our easy-to-use operator panel",
  },
  {
    title: "Call Detail Records",
    desc: "Gain insights through detailed call statistics with our Call Detail Records feature",
  },
  {
    title: "E2E Encryption",
    desc: "TLS and SRTP encryption for secure, private communication",
  },
  {
    title: "Conferences & Queues",
    desc: "Simple conferences and queues for effective communication",
  },
  {
    title: "On-Board Storage",
    desc: "On-board storage for call recordings and voicemail",
  },
];

export default function DmsbgPage() {
  return (
    <main className="pt-14 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full md:max-w-8xl px-6 py-16">
        <div className="text-center md:max-w-6xl w-full mx-auto space-y-6">
          <p className="text-3xl tracking-wide text-[#25276C]">
            Our Products {">"} DPBX Devices
          </p>
          <h1 className="text-4xl md:text-7xl font-normal leading-tight text-[#080808]">
            Decentralized Telephony,
            <br className="hidden md:block" />
            Reimagined.
            <br className="hidden md:block" />
          </h1>
          <p className="text-lg text-center font-light text-[#2A2A2A] max-w-4xl mx-auto">
            Break free from rigid legacy PBX systems. Our DPBX devices are built
            for modern businesses that demand flexibility, security, and control
            over their communications — all without vendor lock-in or bloated
            licensing costs. Engineered to run on open standards and self-hosted
            environments, DPBX brings scalable telephony to your fingertips —
            whether you&lsquo;re a growing startup or a distributed enterprise.
          </p>
        </div>

        <div className="relative mt-20 flex justify-center">
          <div className="relative w-full h-[650px] md:max-w-8xl rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/images/products/dpbx/banner.png"
              alt="Office team"
              fill
              className="w-full h-auto object-cover"
              priority
            />
            {/* <Image
              src="/images/products/dmsbg/banner_sm.png"
              alt="Office team"
              fill
              className="w-full h-auto object-cover lg:hidden"
              priority
            /> */}
          </div>

          <div className="absolute inset-0 flex flex-col justify-end mb-20 items-end">
            <div className="space-x-4 justify-center mx-auto gap-4 flex flex-col sm:flex-row items-center">
              <AnimatedSlideButton
                icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                text="Contact Us"
                className="items-center gap-2 hover:bg-[#25276C] hover:text-[#FBFBF9] text-[#25276C] border border-[#25276C] transition-colors px-6 py-4 rounded-lg text-lg lg:text-xl font-medium inline-flex"
                variant="link"
                href="/contact Us"
              />
              <AnimatedSlideButton
                icon={<IoBagRemoveOutline className="h-5 w-5 lg:h-6 lg:w-6" />}
                text="Explore Online Store"
                className="items-center gap-2 hover:bg-[#25276C] hover:text-[#FBFBF9] text-[#25276C] border border-[#25276C] transition-colors px-6 py-4 rounded-lg text-lg lg:text-xl font-medium inline-flex"
                variant="link"
                href="/online-store"
              />
            </div>
          </div>
        </div>

        <p className="text-lg text-center font-light text-[#2A2A2A] max-w-4xl mx-auto mt-10">
          Difuse’s DPBX (Private Branch Exchange) devices are purpose-built for
          secure, self-hosted business communication. They combine PBX
          capabilities with modular software, supporting advanced call routing,
          IVR, recording, and SIP trunking, all without cloud lock-ins or
          licensing traps. With scalable deployment options and full admin
          control, DPBX devices empower businesses to own their voice
          infrastructure.
        </p>

        <p className="text-lg text-[#2A2A2A] text-center mt-10 font-medium">
          Explore our communication systems:
        </p>

        <section className="max-w-8xl mx-auto mt-20 space-y-2">
          {[
            {
              name: "DPBX 50",
              img: "/images/products/dpbx/img_1.png",
              mobileImg: "/images/products/dpbx/img_1_sm.png",
              desc: "Take control of your network with the DMSBG‑100, a compact, intelligent gateway built for the modern workplace. Combining router, firewall, Wi‑Fi access point, soft PBX, VPN engine, and DNS control into one unified device, DMSBG‑100 simplifies your infrastructure without compromising on performance or privacy.",
              moreDesc:
                "Designed to replace cluttered legacy setups, it’s your go-to platform for secure, modular, and self-hosted connectivity, whether you're running a small business, a growing branch office, or a privacy-first home lab.",
              store: "/#",
              enquire: "/#",
            },
          ].map((p) => (
            <div key={p.name} className="relative overflow-hidden rounded-xl">
              <div className="relative h-[1300px] lg:h-[500px] bg-black">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="w-full object-cover"
                />
                {/* <Image
                  src={p.mobileImg}
                  alt={p.name}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  fill
                  className="w-full object-cover lg:hidden"
                /> */}
              </div>

              <div className="p-6 md:p-8 absolute inset-0 text-white">
                <div className="flex">
                  <h3 className="text-lg font-semibold w-8/12">{p.name}</h3>

                  <div className="flex flex-col justify-between h-full w-4/12 space-y-2">
                    <p className="mt-3 text-sm/6 opacity-90 max-w-prose">
                      {p.desc}
                    </p>
                    <p className="mt-3 text-sm/6 opacity-90 max-w-prose">
                      {p.moreDesc}
                    </p>
                    <div className="mt-4 flex gap-2">
                      <AnimatedSlideButton
                        icon={
                          <IoBagRemoveOutline className="h-5 w-5 lg:h-6 lg:w-6" />
                        }
                        text="Explore Online Store"
                        className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-4 rounded-lg text-lg font-medium inline-flex whitespace-nowrap"
                        variant="link"
                        href={p.store}
                      />
                      <AnimatedSlideButton
                        icon={
                          <FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />
                        }
                        text="Enquire"
                        className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-4 rounded-lg text-lg  font-medium inline-flex whitespace-nowrap"
                        variant="link"
                        href={p.enquire}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex mt-20 items-center justify-between text-lg text-[#2A2A2A] font-normal">
            <div>
              <p>More models incoming</p>
            </div>

            <p>
              Get updates from our <strong>Newsroom</strong>,or subscribe to our{" "}
              <strong>Newsletter.</strong>
            </p>
          </div>
        </section>

        <section className="max-w-8xl mx-auto mt-12 ">
          <div className="rounded-xl p-20 bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] ">
            <h2 className="font-semibold mb-20 text-white text-6xl">
              Key Features
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 ">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-xl flex flex-col justify-between p-8 min-h-[300px] lg:min-h-[300px]"
                >
                  <p className="text-3xl lg:text-4xl  text-[#080808]">
                    {f.title}
                  </p>

                  <div className="grid grid-cols-2">
                    <p className="flex items-end justify-start">
                      <AiOutlineSecurityScan className="h-16 w-16" />
                    </p>
                    <p className="text-lg text-[#2A2A2A]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-8xl mx-auto my-40 ">
          <div className="rounded-xl bg-[linear-gradient(to_right,black_0%,#25276C_100%)] text-white p-8 md:p-12 h-[350px] flex flex-col justify-center ">
            <div className="flex gap-8 items-center">
              <div className="w-7/12">
                <h2 className="text-3xl md:text-5xl font-medium leading-snug mb-4">
                  Find the Right DPBX for
                  <br />
                  Your Business
                </h2>
              </div>
              <div className="w-5/12">
                <p className="text-[#FBFBF9] text-lg leading-relaxed mb-6">
                  Explore specs, compare models, and choose
                  <br />
                  the device that fits your scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <AnimatedSlideButton
                    icon={
                      <IoBagRemoveOutline className="h-5 w-5 lg:h-6 lg:w-6" />
                    }
                    text="Explore Online Store"
                    className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-4 rounded-lg text-lg whitespace-nowrap font-medium inline-flex"
                    variant="link"
                    href="/contact"
                  />
                  <AnimatedSlideButton
                    icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
                    text="Contact Us"
                    className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-4 rounded-lg text-lg whitespace-nowrap font-medium inline-flex"
                    variant="link"
                    href="/contact"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-8xl mx-auto mb-20">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-6xl font-normal text-[#080808] leading-tight">
                Explore More
                <br />
                on the Our
                <br />
                Products Page
              </h2>
            </div>

            <div className="flex justify-end lg:flex-row flex-col gap-2">
              <div className="relative h-[400px] w-[400px] group overflow-hidden rounded-xl">
                <Image
                  src="/images/products/product_7.png"
                  alt="DPBX Device"
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />

                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <h3 className="text-white text-5xl font-medium">
                    DMSBG Devices
                  </h3>
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-4 shadow-sm hover:translate-x-1 hover:translate-y-1 transition-transform">
                      <svg
                        className="w-5 h-5 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] w-[400px] group overflow-hidden rounded-xl">
                <Image
                  src="/images/products/product_6.png"
                  alt="Softphone App"
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />

                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <h3 className="text-white text-5xl font-medium">Softphone</h3>
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-4 shadow-sm hover:translate-x-1 hover:translate-y-1 transition-transform">
                      <svg
                        className="w-5 h-5 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full">
        <Footer />
      </div>
    </main>
  );
}
