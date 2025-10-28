"use client";

import Footer from "@/lib/components/common/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PartnerImage from "$/images/common/img_6.webp";
import AnimatedSlideButton from "@/lib/components/common/AnimatedSlideButton";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import PageTransition from "@/lib/components/common/PageTransition";
import facebookIcon from "@iconify-icons/ri/facebook-fill";
import twitterIcon from "@iconify-icons/ri/twitter-x-fill";
import linkedinIcon from "@iconify-icons/ri/linkedin-fill";
import Mail from "@iconify/icons-lucide/mail";
import phone from "@iconify/icons-lucide/phone";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <PageTransition motionKey="contact-page-wrapper">
      <div className="mt-28">
        <div className="max-w-8xl mx-auto space-y-28 px-6 lg:px-12">
          {" "}
          <div className="mx-auto w-full space-y-6 text-center md:max-w-6xl">
            <p className="text-3xl tracking-wide text-[#25276C]">Contact Us</p>
            <h1 className="text-4xl leading-tight font-normal text-[#080808] md:text-7xl">
              Get in Touch with the
              <br className="hidden md:block" />
              Difuse Team
            </h1>
            <p className="mx-auto max-w-4xl text-center text-lg font-light text-[#2A2A2A]">
              Have questions about our products, need technical guidance, or
              exploring a partnership? We’re here to help and we reply faster
              than your current support team.
            </p>
          </div>
          <section className="rounded-lg bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] p-8 lg:p-36">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h1 className="mb-4 text-5xl font-medium text-[#FBFBF9]">
                  Let&lsquo;s Talk
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-[#FBFBF9]">
                  Whether you&lsquo;re just getting started or already deploying
                  Difuse solutions, reach out for product info, pricing,
                  deployment, questions, or anything else.
                </p>
              </div>

              <div className="mx-auto mb-2 grid max-w-4xl grid-cols-12 items-stretch gap-2 lg:grid-cols-12">
                <div className="col-span-12 flex h-full flex-col space-y-2 lg:col-span-4">
                  <div className="flex h-full flex-col justify-center space-y-4 rounded-lg bg-[#FBFBF9] p-8 text-left">
                    <Link
                      href="mailto:hello@difuse.io"
                      className="text-2xl font-medium text-[#080808]"
                    >
                      hello@difuse.io
                    </Link>
                    <div className="mb-4 w-full">
                      <Icon icon={Mail} className="h-8 w-8 text-[#080808]" />
                    </div>
                  </div>

                  <div className="flex h-full flex-col justify-center space-y-4 rounded-lg bg-white p-8 text-left">
                    <Link
                      href="tel:1800599TECH"
                      className="text-2xl font-medium text-[#080808]"
                    >
                      1800-599-TECH
                    </Link>
                    <div className="mb-4 w-full">
                      <Icon icon={phone} className="h-8 w-8 text-[#080808]" />
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-8 text-left">
                    <p className="mt-2 text-sm text-[#080808]">
                      (Available Monday–Friday,
                      <br />
                      10 AM–5 PM IST)
                    </p>
                  </div>
                </div>

                <div className="col-span-12 flex h-full flex-col space-y-2 lg:col-span-8">
                  <div className="rounded-lg bg-[#FBFBF9] p-10">
                    <p className="text-[#080808]">
                      Tell us what you&lsquo;re looking for, and our team will
                      get back within 1 business day.
                    </p>
                  </div>
                  <div className="rounded-lg bg-[#FBFBF9] p-10">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First name*"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-[#949494] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last name*"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-[#949494] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email*"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-[#949494] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone number*"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-[#949494] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <input
                        type="text"
                        name="reason"
                        placeholder="Reason for contact*"
                        value={formData.reason}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-[#949494] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        required
                      />

                      <textarea
                        name="message"
                        placeholder="Message*"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full resize-none rounded-lg border border-[#949494] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        required
                      />

                      <div className="mx-auto flex flex-col items-center justify-center gap-3 rounded-lg border border-[#949494] p-4 lg:w-sm lg:flex-row">
                        <input type="checkbox" className="h-4 w-4" required />
                        <span className="text-lg text-gray-600">
                          Verify you are human
                        </span>
                        <div className="rounded bg-gray-100 px-3 py-1 text-xs text-gray-600">
                          CLOUDFLARE
                          <br />
                          <span className="text-xs">Protected</span>
                        </div>
                      </div>

                      <AnimatedSlideButton
                        icon={<Icon icon={arrowRight} width={24} height={24} />}
                        text="Submit"
                        className="!w-full items-center gap-2 rounded-lg bg-[#1C1E55] p-5 text-xl tracking-[-0.05em] text-white transition-colors hover:bg-[#151347] md:inline-flex"
                        containerClassName="!w-full"
                        variant="button"
                        buttonType="submit"
                      />
                    </form>
                  </div>
                </div>
              </div>

              <div className="mx-auto mb-2 max-w-4xl rounded-lg bg-[#F9FAFB] p-6">
                <div className="flex items-center justify-center gap-4 text-[#6C6FD2] lg:gap-8">
                  <span className="text-lg text-[#080808]">Follow us on:</span>
                  <Link
                    href="https://www.facebook.com/DifuseHQ"
                    target="_blank"
                    aria-label="Follow Difuse on Facebook"
                  >
                    <Icon
                      icon={facebookIcon}
                      width={30}
                      height={30}
                      className="cursor-pointer hover:text-[#1C1E55]"
                    />
                  </Link>
                  <Link
                    href="https://x.com/DifuseHQ"
                    target="_blank"
                    aria-label="Follow Difuse on Twitter/X"
                  >
                    <Icon
                      icon={twitterIcon}
                      width={30}
                      height={30}
                      className="cursor-pointer hover:text-[#1C1E55]"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/iridiasolutions/about/"
                    target="_blank"
                    aria-label="Follow Difuse on LinkedIn"
                  >
                    <Icon
                      icon={linkedinIcon}
                      width={30}
                      height={30}
                      className="cursor-pointer hover:text-[#1C1E55]"
                    />
                  </Link>
                </div>
              </div>

              <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-[#FBFBF9]">
                <div className="flex h-64 items-center justify-center bg-[#FBFBF9]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7217.081960354238!2d55.284019!3d25.252381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4310f6069705%3A0xe74e36be96c346a4!2sAl%20Raffa%20Building%203!5e0!3m2!1sen!2sin!4v1757969992425!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="eager"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
          <section className="relative h-[500px] w-full overflow-hidden rounded-lg">
            <Image
              src={PartnerImage.src}
              placeholder="blur"
              blurDataURL={PartnerImage.blurDataURL}
              alt="Difuse Building"
              fill
              className="rounded-xl object-cover"
            />

            <div className="absolute inset-0 flex">
              <div className="lg:w-1/2"></div>
              <div className="flex h-full flex-col items-start justify-center space-y-6 px-6 lg:w-1/2 lg:px-20">
                <p className="text-6xl leading-tight text-[#080808]">
                  Partner With Us
                </p>
                <p className="text-md text-[#2A2A2A]">
                  We actively collaborate with MSPs, distributors, and ecosystem
                  partners. Let&lsquo;s explore how we can work together.
                </p>{" "}
                <AnimatedSlideButton
                  icon={<Icon icon={arrowRight} width={24} height={24} />}
                  text="Learn more"
                  className="inline-flex rounded-lg border border-[#1C1E55] px-[18px] py-4 text-xl leading-7 font-normal tracking-[-0.05em] text-[#1C1E55] hover:bg-[#1C1E55] hover:text-white"
                  variant="link"
                  href="/become-a-partner"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="mt-32 w-full bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)]">
          <Footer type="product" />
        </div>
      </div>
    </PageTransition>
  );
}
