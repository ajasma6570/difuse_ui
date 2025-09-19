"use client";

import Footer from "@/components/common/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PartnerImage from "$/images/common/img_6.png";
import AnimatedSlideButton from "@/components/common/AnimatedSlideButton";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";

export default function Page() {
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
    <main className="mt-28">
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
            exploring a partnership? We’re here to help and we reply faster than
            your current support team.
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

            <div className="grid grid-cols-12 lg:grid-cols-12 gap-2 mb-2 max-w-4xl mx-auto">
              <div className="space-y-2 col-span-12 lg:col-span-4">
                <div className="bg-[#FBFBF9] rounded-lg p-8 text-left space-y-4 flex justify-center flex-col lg:h-[267px]">
                  <Link
                    href="mailto:hello@difuse.io"
                    className="text-[#080808] text-2xl font-semibold"
                  >
                    hello@difuse.io
                  </Link>
                  <div className="mb-4 w-full">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 text-left space-y-4 flex justify-center flex-col lg:h-[267px]">
                  <Link
                    href="tel:1800599TECH"
                    className="text-gray-900 text-2xl font-semibold"
                  >
                    1800-599-TECH
                  </Link>
                  <div className="mb-4 w-full">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
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

              <div className="col-span-12 lg:col-span-8 space-y-2">
                <div className="bg-[#FBFBF9] rounded-lg p-8">
                  <p className="text-[#080808]">
                    Tell us what you&lsquo;re looking for, and our team will get
                    back within 1 business day.
                  </p>
                </div>
                <div className="bg-[#FBFBF9] rounded-lg p-8 ">
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

                    <div className="flex items-center border border-[#949494] rounded-lg w-sm mx-auto p-4 justify-center gap-3">
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

                    <button
                      type="submit"
                      className="w-full bg-[#4c51bf] hover:bg-[#434190] text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <span>→</span>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="bg-[#F9FAFB] rounded-lg p-6 mb-2 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-6">
                <span className="text-[#080808] font-medium">
                  Follow us on:
                </span>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-sm">X</span>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
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
    </main>
  );
}
