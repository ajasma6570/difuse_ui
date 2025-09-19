"use client";

import AnimatedSlideButton from "@/components/common/AnimatedSlideButton";
import Footer from "@/components/common/Footer";
import { Icon } from "@iconify/react/dist/offline";
import download from "@iconify/icons-lucide/download";
import phone from "@iconify/icons-lucide/phone";
import React, { useState } from "react";

export default function Page() {
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
    <main className="mt-28">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 space-y-16 lg:space-y-28">
        {" "}
        <div className="text-center md:max-w-6xl w-full mx-auto space-y-6">
          <p className="text-3xl tracking-wide text-[#25276C]">Downloads</p>
          <h1 className="text-3xl md:text-7xl font-normal leading-tight text-[#080808]">
            All Your Resources,
            <br className="hidden md:block" />
            One Place
          </h1>
          <p className="text-lg text-center font-light text-[#2A2A2A] max-w-4xl mx-auto">
            Access the latest resources, tools, and documentation to keep your
            systems running at peak performance. Whether you’re setting up a new
            device, upgrading firmware, or looking for product manuals, you’ll
            find it all here.
          </p>
        </div>
        <div className="bg-[#F4F4F4] rounded-lg shadow-sm overflow-hidden mb-16 lg:mb-32">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[200px]">
              <thead>
                <tr className="border-b border-[#D9D9D9] bg-[#F4F4F4]">
                  <th className="text-left py-4 px-6 text-xs lg:text-lg whitespace-nowrap font-medium text-[#080808] border-r border-[#D9D9D9]">
                    Type
                  </th>
                  <th className="text-left py-4 px-6 text-xs lg:text-lg whitespace-nowrap font-medium text-[#080808] border-r border-[#D9D9D9]">
                    Device
                  </th>
                  <th className="text-left py-4 px-6 text-xs lg:text-lg whitespace-nowrap font-medium text-[#080808] border-r border-[#D9D9D9]">
                    Environment
                  </th>
                  <th className="text-left py-4 px-6 text-xs lg:text-lg whitespace-nowrap font-medium text-[#080808] border-r border-[#D9D9D9]">
                    Version
                  </th>
                  <th className="text-center py-4 px-6 text-xs lg:text-lg whitespace-nowrap font-medium text-[#080808] w-16"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9D9D9] ">
                {currentItems.map((item) => (
                  <tr key={item.id} className="text-[#080808]">
                    <td className="py-2 px-6 text-xs lg:text-lg border-r border-[#D9D9D9]">
                      {item.type}
                    </td>
                    <td className="py-2 px-6 text-xs lg:text-lg border-r border-[#D9D9D9]">
                      {item.device}
                    </td>
                    <td className="py-2 px-6 text-xs lg:text-lg border-r border-[#D9D9D9]">
                      {item.environment}
                    </td>
                    <td className="py-2 px-6 text-xs lg:text-lg border-r border-[#D9D9D9]">
                      {item.version}
                    </td>
                    <td className="py-2 px-6 text-center">
                      <button className="w-8 h-8 text-[#25276C] rounded-full flex items-center justify-center transition-colors">
                        <Icon icon={download} width={28} height={28} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 lg:px-6 py-6 bg-[#F4F4F4] border-t border-[#D9D9D9] flex flex-col gap-6 lg:flex-row justify-between items-center">
            <p className="text-sm text-[#9E9E9E]">
              Note: Ensure you are downloading files compatible with your device
              model and software version.
            </p>
            <div className="flex items-center justify-center gap-2 ">
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="px-3 py-1 text-lg border border-[#D9D9D9] text-[#9E9E9E] rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                First
              </button>
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 text-lg border border-[#D9D9D9] text-[#9E9E9E]  rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Prev
              </button>
              <span className="px-3 py-1 text-lg text-[#25276C] border border-[#D9D9D9] rounded-lg ">
                {currentPage}
              </span>
              <button
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-lg border border-[#D9D9D9] text-[#9E9E9E] rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-lg border border-[#D9D9D9] text-[#9E9E9E] rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Last
              </button>
            </div>
          </div>
        </div>
        <div className="text-left lg:text-center">
          <h2 className="text-4xl leading-snug lg:text-5xl font-normal  text-[#080808] mb-4">
            Need something not listed here?
          </h2>
          <p className="text-[#080808] text-lg mb-6">
            Contact our Support Team
          </p>
          <AnimatedSlideButton
            icon={<Icon icon={phone} width={28} height={28} />}
            text="1800-599-TECH"
            variant="link"
            href="tel:1800599TECH"
            className="inline-flex text-[#1C1E55] hover:bg-[#1C1E55] hover:text-white py-4 px-[18px] rounded-lg border border-[#1C1E55] text-xl leading-7 tracking-[-0.05em] font-normal"
          />
        </div>
      </div>{" "}
      <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full mt-16 lg:mt-32">
        <Footer />
      </div>
    </main>
  );
}
