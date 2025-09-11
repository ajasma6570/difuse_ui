import React from "react";
import AnimatedSlideButton from "../AnimatedSlideButton";
import { FiArrowRight } from "react-icons/fi";

export default function DownloadsPromo() {
  return (
    <section className="px-6">
      <div className="mt-20 w-full px-6 h-[580px] rounded-xl max-w-8xl flex space-y-10 justify-center flex-col items-center mx-auto bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)]">
        <p className="text-white text-4xl lg:text-7xl font-normal text-center">
          Get the Latest Builds, <br />
          Tools & Updates
        </p>
        <p className="text-[#FBFBF9] text-lg lg:text-xl w-full lg:w-lg font-light text-center">
          Stay current with the latest releases of Difuse OS, device firmware,
          and communication tools, everything you need to deploy or upgrade.
        </p>
        <AnimatedSlideButton
          icon={<FiArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />}
          text="Go to Downloads"
          className="items-center gap-2 hover:bg-[#FBFBF9] hover:text-[#25276C] text-[#FBFBF9] border border-[#FBFBF9] transition-colors px-6 py-4 rounded-lg text-lg lg:text-xl font-medium inline-flex"
        />
      </div>
    </section>
  );
}
