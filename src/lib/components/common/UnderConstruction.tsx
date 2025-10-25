import React from "react";
import AnimatedSlideButton from "@/lib/components/common/AnimatedSlideButton";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import Footer from "./Footer";

export default function UnderConstruction() {
  return (
    <main>
      <div className="flex h-screen flex-col items-center justify-center bg-gray-50 text-center">
        <h1 className="mb-4 text-5xl font-bold">🚧 Under Construction 🚧</h1>
        <p className="mb-4 text-lg text-gray-600">
          This section of the site is coming soon. Stay tuned!
        </p>{" "}
        <AnimatedSlideButton
          icon={<Icon icon={arrowRight} width={24} height={24} />}
          text="Go to Home"
          className="max-w-max items-center gap-2 rounded-lg bg-[#1C1E55] p-3 text-xl tracking-[-0.05em] text-white transition-colors hover:bg-[#151347] md:inline-flex"
          variant="link"
          href="/"
        />
      </div>
      <div className="mt-5 w-full bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)]">
        <Footer />
      </div>
    </main>
  );
}
