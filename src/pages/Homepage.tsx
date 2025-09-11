"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import PlatformOverview from "@/components/home/PlatformOverview";
// import ProductsOverview from "@/components/home/ProductsOverview";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <PlatformOverview />
      {/* <ProductsOverview /> */}
    </div>
  );
}
