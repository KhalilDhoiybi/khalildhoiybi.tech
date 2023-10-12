"use client";

import Cursor from "@/components/cursor";
import Header from "@/components/header";
import { Hero } from "@/components/home";
import FinalWords from "@/components/home/final-words";
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
      <FinalWords />
      <Cursor sticktyElement={sticktyElement} />
    </main>
  );
}
