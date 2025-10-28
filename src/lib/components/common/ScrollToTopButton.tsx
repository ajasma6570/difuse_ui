"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/offline";
import arrowUp from "@iconify/icons-lucide/arrow-up";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#222462] text-white shadow-lg transition-colors hover:bg-[#2f328a] md:h-16 md:w-16"
    >
      <Icon icon={arrowUp} className="h-7 w-7 md:h-10 md:w-10" />
    </button>
  );
}
