"use client";

import React from "react";
import Hero from "@/lib/components/home/Hero";
import PlatformOverview from "@/lib/components/home/PlatformOverview";
import ProductsOverview from "@/lib/components/home/ProductsOverview";
import OnlineStore from "@/lib/components/home/OnlineStore";
import DownloadsPromo from "@/lib/components/home/DownloadsPromo";
import Testimonials from "@/lib/components/home/Testimonial";
import NewsRoom from "@/lib/components/home/NewsRoom";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <PlatformOverview />
      <ProductsOverview />
      <OnlineStore />
      <DownloadsPromo />
      <Testimonials />
      <NewsRoom />
    </div>
  );
}
