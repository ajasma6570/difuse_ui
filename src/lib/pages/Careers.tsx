"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AnimatedSlideButton from "@/lib/components/common/AnimatedSlideButton";
import Footer from "@/lib/components/common/Footer";
import { motion, AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import minus from "@iconify/icons-lucide/minus";
import plus from "@iconify/icons-lucide/plus";
import BannerDesktop from "$/images/common/img_4.webp";
import HiringImage from "$/images/common/img_5.webp";
import { Vectors } from "@/assets/vectors";
import PageTransition from "@/lib/components/common/PageTransition";

export default function Careers() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const jobs = [
    {
      id: 0,
      title: "Network Systems Engineer",
      location: "City, Country",
      department: "Engineering",
      type: "Full-Time",
      about:
        "We are seeking a skilled Network Systems Engineer to design, implement, and maintain the networking infrastructure that powers our Multi-Service Business Gateway (MSBG) platforms, PBX solutions, and cloud-driven communication systems. In this role, you will work at the intersection of hardware, software, and connectivity — ensuring our products deliver unmatched performance, security, and scalability.",
      responsibilities: [
        "Design, configure, and optimize network systems for enterprise-grade communication platforms.",
        "Deploy, troubleshoot, and maintain LAN/WAN, VPN, VoIP, and related network services.",
        "Collaborate with hardware, software, and product teams to integrate network solutions into MSBG devices and cloud applications.",
        "Monitor network performance and implement proactive measures to maintain uptime and reliability.",
        "Ensure security protocols and best practices are followed across all deployments.",
        "Provide technical support for internal teams and customer projects.",
      ],
      qualifications: [
        "Bachelor's degree in Computer Science, Network Engineering or related field.",
        "3+ years of experience in enterprise network design and implementation.",
        "Strong knowledge of routing, switching, firewalls, and network protocols (TCP/IP, SIP, VoIP, etc.)",
        "Experience with MSBG, PBX or telecom systems is a strong plus.",
        "Familiarity with network monitoring and diagnostic tools.",
        "Strong problem-solving skills and ability to work under pressure.",
      ],
      offers: [
        "Opportunity to work on cutting-edge communication technologies.",
        "Collaborative, growth-focused work environment.",
        "Competitive compensation and benefits package.",
        "Global exposure and career enhancement opportunities.",
      ],
    },
    {
      id: 1,
      title: "Network Systems Engineer",
      location: "City, Country",
      department: "Engineering",
      type: "Full-Time",
      about:
        "We are seeking a skilled Network Systems Engineer to design, implement, and maintain the networking infrastructure that powers our Multi-Service Business Gateway (MSBG) platforms, PBX solutions, and cloud-driven communication systems. In this role, you will work at the intersection of hardware, software, and connectivity — ensuring our products deliver unmatched performance, security, and scalability.",
      responsibilities: [
        "Design, configure, and optimize network systems for enterprise-grade communication platforms.",
        "Deploy, troubleshoot, and maintain LAN/WAN, VPN, VoIP, and related network services.",
        "Collaborate with hardware, software, and product teams to integrate network solutions into MSBG devices and cloud applications.",
        "Monitor network performance and implement proactive measures to maintain uptime and reliability.",
        "Ensure security protocols and best practices are followed across all deployments.",
        "Provide technical support for internal teams and customer projects.",
      ],
      qualifications: [
        "Bachelor's degree in Computer Science, Network Engineering or related field.",
        "3+ years of experience in enterprise network design and implementation.",
        "Strong knowledge of routing, switching, firewalls, and network protocols (TCP/IP, SIP, VoIP, etc.)",
        "Experience with MSBG, PBX or telecom systems is a strong plus.",
        "Familiarity with network monitoring and diagnostic tools.",
        "Strong problem-solving skills and ability to work under pressure.",
      ],
      offers: [
        "Opportunity to work on cutting-edge communication technologies.",
        "Collaborative, growth-focused work environment.",
        "Competitive compensation and benefits package.",
        "Global exposure and career enhancement opportunities.",
      ],
    },
    {
      id: 2,
      title: "Network Systems Engineer",
      location: "City, Country",
      department: "Engineering",
      type: "Full-Time",
      about:
        "We are seeking a skilled Network Systems Engineer to design, implement, and maintain the networking infrastructure that powers our Multi-Service Business Gateway (MSBG) platforms, PBX solutions, and cloud-driven communication systems. In this role, you will work at the intersection of hardware, software, and connectivity — ensuring our products deliver unmatched performance, security, and scalability.",
      responsibilities: [
        "Design, configure, and optimize network systems for enterprise-grade communication platforms.",
        "Deploy, troubleshoot, and maintain LAN/WAN, VPN, VoIP, and related network services.",
        "Collaborate with hardware, software, and product teams to integrate network solutions into MSBG devices and cloud applications.",
        "Monitor network performance and implement proactive measures to maintain uptime and reliability.",
        "Ensure security protocols and best practices are followed across all deployments.",
        "Provide technical support for internal teams and customer projects.",
      ],
      qualifications: [
        "Bachelor's degree in Computer Science, Network Engineering or related field.",
        "3+ years of experience in enterprise network design and implementation.",
        "Strong knowledge of routing, switching, firewalls, and network protocols (TCP/IP, SIP, VoIP, etc.)",
        "Experience with MSBG, PBX or telecom systems is a strong plus.",
        "Familiarity with network monitoring and diagnostic tools.",
        "Strong problem-solving skills and ability to work under pressure.",
      ],
      offers: [
        "Opportunity to work on cutting-edge communication technologies.",
        "Collaborative, growth-focused work environment.",
        "Competitive compensation and benefits package.",
        "Global exposure and career enhancement opportunities.",
      ],
    },
  ];
  const toggleAccordion = (id: number) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  return (
    <PageTransition motionKey="careers-page-wrapper">
      <div className="mt-28">
        <div className="mx-auto max-w-7xl space-y-16 px-6 lg:space-y-28 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            <div className="col-span-12 space-y-6 md:col-span-8">
              <p className="text-3xl text-[#25276C]">Careers</p>
              <h1 className="text-4xl leading-tight font-normal text-[#080808] md:text-6xl">
                Join Us and Build the <span className="md:hidden">&nbsp;</span>
                <br className="hidden md:inline" /> Future of Communication
              </h1>
              <p className="text-lg text-[#080808] md:w-3/4">
                We believe innovation starts with people. That’s why we invest
                in a culture where talent thrives, ideas are heard, and
                contributions truly matter. Whether you’re an engineer shaping
                network infrastructure, a designer redefining user experiences,
                or a strategist driving market expansion, you’ll have the
                autonomy and tools to make an impact.
              </p>
              <p className="text-lg text-[#080808]">
                Send your application to{" "}
                <Link
                  href="mailto:hello@difuse.io"
                  className="font-semibold underline"
                >
                  hello@difuse.io
                </Link>
              </p>
            </div>
            <div className="relative col-span-12 h-72 overflow-hidden rounded-lg md:col-span-4 md:h-96">
              <Image
                src={BannerDesktop}
                alt="banner"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-20 space-y-14 overflow-hidden rounded-xl bg-[#F4F4F4] p-8 lg:p-20">
            <div className="flex flex-col gap-10 px-8 md:flex-row lg:px-16">
              <p className="text-5xl leading-snug font-light text-[#080808] md:w-1/2 md:text-6xl">
                Our Hiring <br /> Philosophy
              </p>
              <div className="flex flex-col space-y-6 md:w-1/2">
                <p className="text-lg">
                  We hire for skill, drive, and problem-solving ability, not
                  just job titles. If you’re passionate about creating
                  meaningful technology and want to see your work make a real
                  difference, you belong here.
                </p>
                <AnimatedSlideButton
                  icon={<Icon icon={arrowRight} width={24} height={24} />}
                  text="What we do"
                  className="inline-flex max-w-max rounded-lg border border-[#25276C] p-5 text-xl tracking-[-0.05em] text-[#25276C] hover:bg-[#25276C] hover:text-[#FBFBF9]"
                  variant="link"
                  href="/contact"
                />
              </div>
            </div>
            <div className="relative mx-auto overflow-hidden rounded-lg md:h-48 lg:w-[90%]">
              <Image
                src={HiringImage.src}
                placeholder="blur"
                blurDataURL={HiringImage.blurDataURL}
                alt="team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-black/90 to-[#25276C] p-6 md:p-12">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-5xl font-normal text-[#FBFBF9] md:text-6xl">
                Current Openings
              </h2>
              <p className="text-md text-[#FBFBF9]">
                Send your application to{" "}
                <Link
                  href="mailto:hello@difuse.io"
                  className="font-semibold underline"
                >
                  hello@difuse.io
                </Link>
              </p>
            </div>

            <div className="mx-auto max-w-5xl space-y-2">
              {jobs.map((job) => (
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
                      <span className="text-2xl font-medium text-[#FBFBF9] md:text-3xl">
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
                          <div className="mb-6 flex flex-wrap gap-6 text-lg text-[#FBFBF9]">
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

                          <div className="mb-6 text-lg">
                            <h4 className="mb-2 font-medium text-[#FBFBF9]">
                              About the Role
                            </h4>
                            <p className="leading-relaxed font-light text-[#FBFBF9]/90">
                              {job.about}
                            </p>
                          </div>

                          <div className="mb-6 text-lg">
                            <h4 className="mb-2 font-medium text-[#FBFBF9]">
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-1 text-[#FBFBF9]">
                              {job.responsibilities.map((item, i) => (
                                <li key={i} className="flex gap-2">
                                  <span className="mt-1 text-blue-400">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-6 text-lg">
                            <h4 className="mb-2 font-medium text-[#FBFBF9]">
                              Qualifications
                            </h4>
                            <ul className="space-y-1 text-[#FBFBF9]">
                              {job.qualifications.map((item, i) => (
                                <li key={i} className="flex gap-2">
                                  <span className="mt-1 text-blue-400">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-6 text-lg">
                            <h4 className="mb-2 font-medium text-[#FBFBF9]">
                              What We Offer
                            </h4>
                            <ul className="space-y-1 text-[#FBFBF9]">
                              {job.offers.map((item, i) => (
                                <li key={i} className="flex gap-2">
                                  <span className="mt-1 text-blue-400">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <AnimatedSlideButton
                            icon={
                              <Icon icon={arrowRight} width={24} height={24} />
                            }
                            text="Apply Now"
                            className="inline-flex rounded-lg border border-[#FBFBF9] bg-transparent px-6 py-4 text-xl leading-7 font-normal tracking-[-0.05em] text-[#FBFBF9] hover:bg-[#FBFBF9] hover:text-[#1C1E55]"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 w-full bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] lg:mt-28">
          <Footer type="product" />
        </div>
      </div>
    </PageTransition>
  );
}
