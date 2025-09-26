"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AnimatedSlideButton from "@/components/common/AnimatedSlideButton";
import Footer from "@/components/common/Footer";
import { motion, AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import minus from "@iconify/icons-lucide/minus";
import plus from "@iconify/icons-lucide/plus";
import BannerDesktop from "$/images/common/img_4.png";
import HiringImage from "$/images/common/img_5.png";
import { Vectors } from "@/assets/vectors";
import PageTransition from "@/components/common/PageTransition";

export default function Page() {
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
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 lg:space-y-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="space-y-6 col-span-12 md:col-span-8">
              <p className="text-[#25276C] text-3xl">Careers</p>
              <h1 className="text-4xl md:text-6xl text-[#080808] leading-tight font-normal">
                Join Us and Build the <span className="md:hidden">&nbsp;</span>
                <br className="hidden md:inline" /> Future of Communication
              </h1>
              <p className="md:w-3/4 text-[#080808] text-lg">
                We believe innovation starts with people. That’s why we invest
                in a culture where talent thrives, ideas are heard, and
                contributions truly matter. Whether you’re an engineer shaping
                network infrastructure, a designer redefining user experiences,
                or a strategist driving market expansion, you’ll have the
                autonomy and tools to make an impact.
              </p>
              <p className="text-[#080808] text-lg">
                Send your application to{" "}
                <Link
                  href="mailto:hello@difuse.io"
                  className="font-semibold underline"
                >
                  hello@difuse.io
                </Link>
              </p>
            </div>
            <div className="relative col-span-12 md:col-span-4 rounded-lg overflow-hidden h-72 md:h-96">
              <Image
                src={BannerDesktop}
                alt="banner"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-[#F4F4F4] mt-20 rounded-xl overflow-hidden p-8 lg:p-20 space-y-14">
            <div className="flex flex-col md:flex-row px-8 lg:px-16  gap-10">
              <p className="md:w-1/2 text-[#080808] text-5xl md:text-6xl font-light leading-snug">
                Our Hiring <br /> Philosophy
              </p>
              <div className="flex md:w-1/2 flex-col space-y-6">
                <p className="text-lg">
                  We hire for skill, drive, and problem-solving ability, not
                  just job titles. If you’re passionate about creating
                  meaningful technology and want to see your work make a real
                  difference, you belong here.
                </p>
                <AnimatedSlideButton
                  icon={<Icon icon={arrowRight} width={24} height={24} />}
                  text="What we do"
                  className="inline-flex hover:bg-[#25276C] hover:text-[#FBFBF9] text-[#25276C] border border-[#25276C] rounded-lg text-xl tracking-[-0.05em] p-5 max-w-max "
                  variant="link"
                  href="/contact"
                />
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden md:h-48 lg:w-[90%] mx-auto ">
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

          <div className="bg-gradient-to-b from-black/90 to-[#25276C] rounded-2xl p-6 md:p-12 ">
            <div className="text-center mb-10">
              <h2 className="text-[#FBFBF9] text-5xl md:text-6xl font-normal mb-4">
                Current Openings
              </h2>
              <p className="text-[#FBFBF9] text-md">
                Send your application to{" "}
                <Link
                  href="mailto:hello@difuse.io"
                  className="font-semibold underline"
                >
                  hello@difuse.io
                </Link>
              </p>
            </div>

            <div className="space-y-2 max-w-5xl mx-auto">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="border border-[#FBFBF9]/60 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(job.id)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6  rounded flex items-center justify-center">
                        <Image
                          src={Vectors.BagSearch}
                          alt="briefcase_icon"
                          width={45}
                          height={45}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[#FBFBF9] text-2xl md:text-3xl font-medium">
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
                        className="overflow-hidden origin-top"
                      >
                        <div className="px-6 md:px-10 py-6 text-sm md:text-base">
                          <div className="flex flex-wrap gap-6 mb-6 text-lg text-[#FBFBF9]">
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
                            <h4 className="text-[#FBFBF9] font-medium mb-2">
                              About the Role
                            </h4>
                            <p className="text-[#FBFBF9]/90 leading-relaxed font-light">
                              {job.about}
                            </p>
                          </div>

                          <div className="mb-6 text-lg ">
                            <h4 className="text-[#FBFBF9] font-medium mb-2">
                              Key Responsibilities
                            </h4>
                            <ul className="text-[#FBFBF9] space-y-1">
                              {job.responsibilities.map((item, i) => (
                                <li key={i} className="flex gap-2">
                                  <span className="text-blue-400 mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-6 text-lg">
                            <h4 className="text-[#FBFBF9] font-medium mb-2">
                              Qualifications
                            </h4>
                            <ul className="text-[#FBFBF9] space-y-1">
                              {job.qualifications.map((item, i) => (
                                <li key={i} className="flex gap-2">
                                  <span className="text-blue-400 mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-6 text-lg">
                            <h4 className="text-[#FBFBF9] font-medium mb-2">
                              What We Offer
                            </h4>
                            <ul className="text-[#FBFBF9] space-y-1">
                              {job.offers.map((item, i) => (
                                <li key={i} className="flex gap-2">
                                  <span className="text-blue-400 mt-1">•</span>
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
                            className="inline-flex text-[#FBFBF9] hover:bg-[#FBFBF9] hover:text-[#1C1E55] py-4 px-6 rounded-lg bg-transparent border border-[#FBFBF9] text-xl leading-7 tracking-[-0.05em] font-normal"
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

        <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full mt-16 lg:mt-28">
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}
