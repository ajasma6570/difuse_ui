"use client";

import { type ReactNode, useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
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

  const baseClasses = `group flex items-center justify-center overflow-hidden transition-all duration-500 cursor-pointer w-auto max-w-max ${className}`;

  const content = (
    <div className="flex items-center gap-3">
      <motion.span
        ref={iconRef}
        variants={{
          rest: { x: 0 },
          hover: { x: textWidth + 15 },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={iconClassName}
        style={{ display: "inline-block" }}
      >
        {icon}
      </motion.span>
      <motion.span
        ref={textRef}
        variants={{
          rest: { x: 0 },
          hover: { x: -(iconWidth + 5) },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={textClassName}
        style={{ display: "inline-block" }}
      >
        {text}
      </motion.span>
    </div>
  );
  const typeToRender: "button" | "link" = variant ?? (href ? "link" : "button");

  if (typeToRender === "link") {
    return (
      <Link href={href ?? "#"} className={baseClasses}>
        <motion.div whileHover="hover" initial="rest" animate="rest">
          {content}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover="hover"
      initial="rest"
      animate="rest"
      onClick={onClick}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
}
