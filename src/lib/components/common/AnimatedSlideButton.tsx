"use client";

import { type ReactNode, useRef, useLayoutEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

interface AnimatedSlideButtonProps {
  icon: ReactNode;
  text: string;
  variant?: "button" | "link";
  href?: string;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
}

export default function AnimatedSlideButton({
  icon,
  text,
  variant = "button",
  href,
  onClick,
  className = "",
  textClassName = "",
  iconClassName = "",
}: AnimatedSlideButtonProps) {
  const iconRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [iconWidth, setIconWidth] = useState(0);
  const [textWidth, setTextWidth] = useState(0);

  useLayoutEffect(() => {
    if (iconRef.current) setIconWidth(iconRef.current.offsetWidth);
    if (textRef.current) setTextWidth(textRef.current.offsetWidth);
  }, [icon, text]);

  const baseClasses = `group flex items-center justify-center overflow-hidden transition-all duration-500 cursor-pointer w-auto ${className}`;

  const computedIconShift = textWidth > 0 ? textWidth + 15 : 24;
  const computedTextShift = iconWidth > 0 ? -(iconWidth + 8) : -30;

  const content = (
    <div className="flex items-center gap-3">
      <motion.span
        ref={iconRef}
        variants={{
          rest: { x: 0 },
          hover: { x: computedIconShift },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={iconClassName}
        style={{ display: "inline-block" }}
      >
        {icon}
      </motion.span>
      <motion.span
        ref={textRef}
        variants={{
          rest: { x: 0 },
          hover: { x: computedTextShift },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={textClassName}
        style={{ display: "inline-block" }}
      >
        {text}
      </motion.span>
    </div>
  );

  const actualVariant = variant === "link" || href ? "link" : "button";

  return actualVariant === "link" ? (
    <Link href={href ?? "#"} className="inline-block w-fit">
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        className={baseClasses}
      >
        {content}
      </motion.div>
    </Link>
  ) : (
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
