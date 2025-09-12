"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import PlatformOverview from "@/components/home/PlatformOverview";
import ProductsOverview from "@/components/home/ProductsOverview";
import OnlineStore from "@/components/home/OnlineStore";
import DownloadsPromo from "@/components/home/DownloadsPromo";
import Testimonials from "@/components/home/Testimonial";
import NewsRoom from "@/components/home/NewsRoom";

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
