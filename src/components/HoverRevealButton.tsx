"use client";

import { type ReactNode, useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface HoverRevealButtonProps {
  icon: ReactNode;
  text: string;
  variant?: "button" | "link";
  href?: string;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
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
          rest: {
            width: 0,
            opacity: 0,
            marginRight: 0,
          },
          hover: {
            width: textWidth,
            opacity: 1,
            marginLeft: 10,
          },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={` whitespace-nowrap overflow-hidden ${textClassName}`}
        style={{ display: "inline-block" }}
      >
        {text}
      </motion.span>

      <span
        className={`flex items-center justify-center flex-shrink-0 ${iconClassName}`}
        style={{ display: "inline-block" }}
      >
        {icon}
      </span>
    </>
  );

  const actualVariant = variant === "link" || href ? "link" : "button";

  if (actualVariant === "link") {
    return (
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        className={baseClasses}
      >
        <Link
          href={href ?? "#"}
          className="w-full h-full flex items-center justify-center"
        >
          {content}
        </Link>
      </motion.div>
    );
  }

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
