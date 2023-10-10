"use client";

import Cursor from "@/components/cursor";
import Header from "@/components/header";
import { Hero } from "@/components/home";
import UnderConstruction from "@/components/under-construction";
import { useRef } from "react";

/**
 * Home page
 */
export default function Home() {
  const sticktyElement = useRef<HTMLDivElement>(null);

  return (
    <main className="max-w-4xl mx-auto min-h-screen">
      <Header ref={sticktyElement} />
      <Hero />
      <UnderConstruction />
      <Cursor sticktyElement={sticktyElement} />
    </main>
  );
}
