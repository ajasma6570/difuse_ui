"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";

interface BannerProps {
  desktop: string;
  mobile: string;
  desktopBlur?: string;
  mobileBlur?: string;
  alt?: string;
}

export default function Banner({
  mobile,
  desktop,
  desktopBlur,
  mobileBlur,
  alt = "",
}: BannerProps) {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <Image
      src={isMobile ? mobile : desktop}
      alt={alt}
      fill
      quality={100}
      placeholder="blur"
      blurDataURL={isMobile ? mobileBlur : desktopBlur}
      className="w-full h-auto object-cover"
    />
  );
}
