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
        <div className="max-w-8xl mx-auto px-6 lg:px-12 space-y-28">
          {" "}
          <div className="text-center md:max-w-6xl w-full mx-auto space-y-6">
            <p className="text-3xl tracking-wide text-[#25276C]">Contact Us</p>
            <h1 className="text-4xl md:text-7xl font-normal leading-tight text-[#080808]">
              Get in Touch with the
              <br className="hidden md:block" />
              Difuse Team
            </h1>
            <p className="text-lg text-center font-light text-[#2A2A2A] max-w-4xl mx-auto">
              Have questions about our products, need technical guidance, or
              exploring a partnership? We’re here to help and we reply faster
              than your current support team.
            </p>
          </div>
          <section className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] p-8 lg:p-36 rounded-lg">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-[#FBFBF9] text-5xl font-medium mb-4">
                  Let&lsquo;s Talk
                </h1>
                <p className="text-[#FBFBF9] text-lg max-w-2xl mx-auto">
                  Whether you&lsquo;re just getting started or already deploying
                  Difuse solutions, reach out for product info, pricing,
                  deployment, questions, or anything else.
                </p>
              </div>

              <div className="grid grid-cols-12 lg:grid-cols-12 gap-2 mb-2 max-w-4xl mx-auto items-stretch">
                <div className="space-y-2 col-span-12 lg:col-span-4 h-full flex flex-col">
                  <div className="bg-[#FBFBF9] rounded-lg p-8 text-left space-y-4 flex justify-center flex-col h-full">
                    <Link
                      href="mailto:hello@difuse.io"
                      className="text-[#080808] text-2xl font-medium"
                    >
                      hello@difuse.io
                    </Link>
                    <div className="mb-4 w-full">
                      <Icon icon={Mail} className="text-[#080808] h-8 w-8" />
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-8 text-left space-y-4 flex justify-center flex-col h-full">
                    <Link
                      href="tel:1800599TECH"
                      className="text-[#080808] text-2xl font-medium"
                    >
                      1800-599-TECH
                    </Link>
                    <div className="mb-4 w-full">
                      <Icon icon={phone} className="text-[#080808] h-8 w-8" />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-8 text-left">
                    <p className="text-[#080808] text-sm mt-2">
                      (Available Monday–Friday,
                      <br />
                      10 AM–5 PM IST)
                    </p>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-8 space-y-2 h-full flex flex-col">
                  <div className="bg-[#FBFBF9] rounded-lg p-10">
                    <p className="text-[#080808]">
                      Tell us what you&lsquo;re looking for, and our team will
                      get back within 1 business day.
                    </p>
                  </div>
                  <div className="bg-[#FBFBF9] rounded-lg p-10 ">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First name*"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-[#949494] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last name*"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-[#949494] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email*"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-[#949494] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone number*"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-[#949494] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <input
                        type="text"
                        name="reason"
                        placeholder="Reason for contact*"
                        value={formData.reason}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#949494] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />

                      <textarea
                        name="message"
                        placeholder="Message*"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#949494] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        required
                      />

                      <div className="flex flex-col lg:flex-row items-center border border-[#949494] rounded-lg lg:w-sm mx-auto p-4 justify-center gap-3">
                        <input type="checkbox" className="w-4 h-4" required />
                        <span className="text-lg text-gray-600">
                          Verify you are human
                        </span>
                        <div className="bg-gray-100 px-3 py-1 rounded text-xs text-gray-600">
                          CLOUDFLARE
                          <br />
                          <span className="text-xs">Protected</span>
                        </div>
                      </div>

                      <AnimatedSlideButton
                        icon={<Icon icon={arrowRight} width={24} height={24} />}
                        text="Submit"
                        className=" items-center gap-2 text-white bg-[#1C1E55] hover:bg-[#151347] transition-colors p-5 rounded-lg text-xl tracking-[-0.05em] !w-full md:inline-flex"
                        containerClassName="!w-full"
                        variant="button"
                        buttonType="submit"
                      />
                    </form>
                  </div>
                </div>
              </div>

              <div className="bg-[#F9FAFB] rounded-lg p-6 mb-2 max-w-4xl mx-auto">
                <div className="flex justify-center items-center gap-4 lg:gap-8 text-[#6C6FD2]">
                  <span className="text-lg text-[#080808]">Follow us on:</span>
                  <Link
                    href="https://www.facebook.com/DifuseHQ"
                    target="_blank"
                  >
                    <Icon
                      icon={facebookIcon}
                      width={30}
                      height={30}
                      className="hover:text-white cursor-pointer"
                    />
                  </Link>
                  <Link href="https://x.com/DifuseHQ" target="_blank">
                    <Icon
                      icon={twitterIcon}
                      width={30}
                      height={30}
                      className="hover:text-white cursor-pointer"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/iridiasolutions/about/"
                    target="_blank"
                  >
                    <Icon
                      icon={linkedinIcon}
                      width={30}
                      height={30}
                      className="hover:text-white cursor-pointer"
                    />
                  </Link>
                </div>
              </div>

              <div className="bg-[#FBFBF9] rounded-lg overflow-hidden max-w-4xl mx-auto">
                <div className="h-64 bg-[#FBFBF9] flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7217.081960354238!2d55.284019!3d25.252381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4310f6069705%3A0xe74e36be96c346a4!2sAl%20Raffa%20Building%203!5e0!3m2!1sen!2sin!4v1757969992425!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="eager"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
          <section className="relative h-[500px] w-full rounded-lg overflow-hidden">
            <Image
              src={PartnerImage.src}
              placeholder="blur"
              blurDataURL={PartnerImage.blurDataURL}
              alt="Difuse Building"
              fill
              className="object-cover rounded-xl"
            />

            <div className="absolute inset-0 flex">
              <div className="lg:w-1/2"></div>
              <div className="lg:w-1/2 flex flex-col justify-center items-start h-full px-6 lg:px-20 space-y-6">
                <p className="text-[#080808] text-6xl leading-tight">
                  Partner With Us
                </p>
                <p className="text-[#2A2A2A] text-md">
                  We actively collaborate with MSPs, distributors, and ecosystem
                  partners. Let&lsquo;s explore how we can work together.
                </p>{" "}
                <AnimatedSlideButton
                  icon={<Icon icon={arrowRight} width={24} height={24} />}
                  text="Learn more"
                  className="inline-flex text-[#1C1E55] hover:bg-[#1C1E55] hover:text-white py-4 px-[18px] rounded-lg  border border-[#1C1E55] text-xl leading-7 tracking-[-0.05em] font-normal"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full mt-32">
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}
