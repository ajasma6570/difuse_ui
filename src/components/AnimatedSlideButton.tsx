"use client";

import { type ReactNode, useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedSlideButtonProps {
  icon: ReactNode;
  text: string;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  onClick?: () => void;
}

export default function AnimatedSlideButton({
  icon,
  text,
  className = "",
  textClassName = "",
  iconClassName = "",
  onClick,
}: AnimatedSlideButtonProps) {
  const iconRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [iconWidth, setIconWidth] = useState(0);
  const [textWidth, setTextWidth] = useState(0);

  useLayoutEffect(() => {
    if (iconRef.current) setIconWidth(iconRef.current.offsetWidth);
    if (textRef.current) setTextWidth(textRef.current.offsetWidth);
  }, [icon, text]);

  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      onClick={onClick}
      className={`group flex items-center justify-center overflow-hidden transition-all duration-500 cursor-pointer w-auto max-w-max ${className}`}
    >
      <div className="flex items-center gap-3">
        <motion.span
          ref={iconRef}
          variants={{
            rest: { x: 0 },
            hover: { x: textWidth + 15 }, // 5 for gap-4
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={iconClassName}
          style={{ display: "inline-block" }}
        >
          {icon}
        </motion.span>
        <motion.span
          ref={textRef}
          variants={{
            rest: { x: 0 },
            hover: { x: -(iconWidth + 5) }, // 16 for gap-4
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={textClassName}
          style={{ display: "inline-block" }}
        >
          {text}
        </motion.span>
      </div>
    </motion.div>
  );
}
