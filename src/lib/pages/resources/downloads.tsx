"use client";

import AnimatedSlideButton from "@/lib/components/common/AnimatedSlideButton";
import Footer from "@/lib/components/common/Footer";
import { Icon } from "@iconify/react/dist/offline";
import download from "@iconify/icons-lucide/download";
import phone from "@iconify/icons-lucide/phone";
import React, { useState } from "react";
import PageTransition from "@/lib/components/common/PageTransition";

export default function Downloads() {
  const [currentPage, setCurrentPage] = useState(1);

  const firmwareData = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    type: "Firmware",
    device: "DMS600-100",
    environment: "Production",
    version: "2.7.0",
  }));

  const itemsPerPage = 10;
  const totalPages = Math.ceil(firmwareData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = firmwareData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PageTransition motionKey="resources-downloads-page-wrapper">
      <div className="mt-28">
        <div className="max-w-8xl mx-auto space-y-16 px-6 lg:space-y-28 lg:px-12">
          {" "}
          <div className="mx-auto w-full space-y-6 text-center md:max-w-6xl">
            <p className="text-3xl tracking-wide text-[#25276C]">Downloads</p>
            <h1 className="text-3xl leading-tight font-normal text-[#080808] md:text-7xl">
              All Your Resources,
              <br className="hidden md:block" />
              One Place
            </h1>
            <p className="mx-auto max-w-4xl text-center text-lg font-light text-[#2A2A2A]">
              Access the latest resources, tools, and documentation to keep your
              systems running at peak performance. Whether you’re setting up a
              new device, upgrading firmware, or looking for product manuals,
              you’ll find it all here.
            </p>
          </div>
          <div className="mb-16 overflow-hidden rounded-lg bg-[#F4F4F4] shadow-sm lg:mb-32">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[200px]">
                <thead>
                  <tr className="border-b border-[#D9D9D9] bg-[#F4F4F4]">
                    <th className="border-r border-[#D9D9D9] px-6 py-4 text-left text-xs font-medium whitespace-nowrap text-[#080808] lg:text-lg">
                      Type
                    </th>
                    <th className="border-r border-[#D9D9D9] px-6 py-4 text-left text-xs font-medium whitespace-nowrap text-[#080808] lg:text-lg">
                      Device
                    </th>
                    <th className="border-r border-[#D9D9D9] px-6 py-4 text-left text-xs font-medium whitespace-nowrap text-[#080808] lg:text-lg">
                      Environment
                    </th>
                    <th className="border-r border-[#D9D9D9] px-6 py-4 text-left text-xs font-medium whitespace-nowrap text-[#080808] lg:text-lg">
                      Version
                    </th>
                    <th className="w-16 px-6 py-4 text-center text-xs font-medium whitespace-nowrap text-[#080808] lg:text-lg"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9D9D9]">
                  {currentItems.map((item) => (
                    <tr key={item.id} className="text-[#080808]">
                      <td className="border-r border-[#D9D9D9] px-6 py-2 text-xs lg:text-lg">
                        {item.type}
                      </td>
                      <td className="border-r border-[#D9D9D9] px-6 py-2 text-xs lg:text-lg">
                        {item.device}
                      </td>
                      <td className="border-r border-[#D9D9D9] px-6 py-2 text-xs lg:text-lg">
                        {item.environment}
                      </td>
                      <td className="border-r border-[#D9D9D9] px-6 py-2 text-xs lg:text-lg">
                        {item.version}
                      </td>
                      <td className="px-6 py-2 text-center">
                        <button
                          className="flex h-11 w-11 items-center justify-center rounded-full text-[#25276C] transition-colors hover:bg-[#25276C] hover:text-white focus:ring-2 focus:ring-[#25276C] focus:ring-offset-2 focus:outline-none"
                          aria-label={`Download ${item.type} for ${item.device} version ${item.version}`}
                        >
                          <Icon icon={download} width={24} height={24} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col items-center justify-between gap-6 border-t border-[#D9D9D9] bg-[#F4F4F4] px-4 py-6 lg:flex-row lg:px-6">
              <p className="text-sm text-[#9E9E9E]">
                Note: Ensure you are downloading files compatible with your
                device model and software version.
              </p>
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                  className="min-h-[44px] cursor-pointer rounded-lg border border-[#D9D9D9] px-3 py-1 text-lg text-[#9E9E9E] disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Go to first page"
                >
                  First
                </button>
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="min-h-[44px] cursor-pointer rounded-lg border border-[#D9D9D9] px-3 py-1 text-lg text-[#9E9E9E] disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Go to previous page"
                >
                  Prev
                </button>
                <span
                  className="flex min-h-[44px] items-center rounded-lg border border-[#D9D9D9] px-3 py-1 text-lg text-[#25276C]"
                  aria-current="page"
                  aria-label={`Current page ${currentPage} of ${totalPages}`}
                >
                  {currentPage}
                </span>
                <button
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="min-h-[44px] cursor-pointer rounded-lg border border-[#D9D9D9] px-3 py-1 text-lg text-[#9E9E9E] disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Go to next page"
                >
                  Next
                </button>
                <button
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                  className="min-h-[44px] cursor-pointer rounded-lg border border-[#D9D9D9] px-3 py-1 text-lg text-[#9E9E9E] disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Go to last page"
                >
                  Last
                </button>
              </div>
            </div>
          </div>
          <div className="text-left lg:text-center">
            <h2 className="mb-4 text-4xl leading-snug font-normal text-[#080808] lg:text-5xl">
              Need something not listed here?
            </h2>
            <p className="mb-6 text-lg text-[#080808]">
              Contact our Support Team
            </p>
            <AnimatedSlideButton
              icon={<Icon icon={phone} width={28} height={28} />}
              text="1800-599-TECH"
              variant="link"
              href="tel:1800599TECH"
              className="inline-flex rounded-lg border border-[#1C1E55] px-[18px] py-4 text-xl leading-7 font-normal tracking-[-0.05em] text-[#1C1E55] hover:bg-[#1C1E55] hover:text-white"
            />
          </div>
        </div>{" "}
        <div className="mt-16 w-full bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] lg:mt-32">
          <Footer type="product" />
        </div>
      </div>
    </PageTransition>
  );
}
