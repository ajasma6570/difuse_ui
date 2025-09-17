"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image, { StaticImageData } from "next/image";

interface ResponsiveImageProps {
  desktop: StaticImageData;
  mobile: StaticImageData;
  alt: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

export default function ResponsiveImage({
  desktop,
  mobile,
  alt,
  priority = true,
  fill = true,
  width,
  height,
  className = "",
}: ResponsiveImageProps) {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  useEffect(() => setMounted(true), []);

  const src = mounted ? (isMobile ? mobile.src : desktop.src) : desktop.src;

  const sizeProps = fill
    ? { fill: true }
    : {
        width: width ?? desktop.width,
        height: height ?? desktop.height,
      };

  return (
    <Image
      src={src}
      alt={alt}
      {...sizeProps}
      className={`object-cover ${className}`}
      priority={priority}
    />
  );
}
