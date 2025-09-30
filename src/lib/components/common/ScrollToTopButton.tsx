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
      className="fixed bottom-6 right-6 z-50 rounded-full bg-[#222462] p-3 text-[#FFFFFF] h-16 w-16 cursor-pointer"
    >
      <Icon icon={arrowUp} className="h-10 w-10" />
    </button>
  );
}
