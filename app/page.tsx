"use client";

import Cursor from "@/components/cursor";
import Header from "@/components/header";
import { FinalWords, Hero, Stickers } from "@/components/home";
import { StickerScreen } from "@/components/stickers";
import { useRef } from "react";

/**
 * Home page
 */
export default function Home() {
  const sticktyElement = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header ref={sticktyElement} />
      <main className="max-w-4xl mx-auto min-h-screen py-4 md:py-8 overflow-hidden">
        <Hero />
        <Stickers />
        <FinalWords />
      </main>
      <Cursor sticktyElement={sticktyElement} />
      <StickerScreen />
    </>
  );
}
