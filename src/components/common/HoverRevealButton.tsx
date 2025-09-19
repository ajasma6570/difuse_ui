"use client";

import { type ReactNode, useRef, useLayoutEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

// motion-enabled Link for self-controlled mode
const MotionLink = motion.create(Link);

interface HoverRevealButtonProps {
  icon: ReactNode;
  text: string;
  variant?: "button" | "link";
  href?: string;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  parentControlled?: boolean; // << parent controls hover
}

export default function HoverRevealButton({
  icon,
  text,
  variant = "button",
  href,
  onClick,
  className = "",
  textClassName = "",
  iconClassName = "",
  parentControlled = false,
}: HoverRevealButtonProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useLayoutEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.scrollWidth);
    }
  }, [text]);

  const baseClasses = `
    group flex items-center justify-center overflow-hidden 
    transition-all duration-300 cursor-pointer
    ${className}
  `;

  const content = (
    <>
      <motion.span
        ref={textRef}
        variants={{
          rest: { width: 0, opacity: 0 },
          hover: { width: textWidth, opacity: 1 },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`whitespace-nowrap overflow-hidden ${textClassName}`}
        style={{ display: "inline-block" }}
      >
        {text}
      </motion.span>

      <motion.span
        variants={{
          rest: { marginLeft: 0 },
          hover: { marginLeft: 10 },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`flex items-center justify-center flex-shrink-0 ${iconClassName}`}
        style={{ display: "inline-block" }}
      >
        {icon}
      </motion.span>
    </>
  );

  const actualVariant = variant === "link" || href ? "link" : "button";

  // ---------- Parent-controlled (no whileHover here) ----------
  if (parentControlled) {
    return actualVariant === "link" ? (
      <Link
        href={href ?? "#"}
        className={`w-full h-full flex items-center justify-center ${baseClasses}`}
      >
        {content}
      </Link>
    ) : (
      <button type="button" onClick={onClick} className={baseClasses}>
        {content}
      </button>
    );
  }

  // ---------- Self-controlled link ----------
  if (actualVariant === "link") {
    return (
      <MotionLink
        href={href ?? "#"}
        initial="rest"
        animate="rest"
        whileHover="hover"
        className={`w-full h-full flex items-center justify-center ${baseClasses}`}
      >
        {content}
      </MotionLink>
    );
  }

  // ---------- Self-controlled button ----------
  return (
    <motion.button
      type="button"
      initial="rest"
      animate="rest"
      whileHover="hover"
      onClick={onClick}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
}
