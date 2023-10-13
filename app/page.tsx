"use client";

import Cursor from "@/components/cursor";
import Header from "@/components/header";
import { FinalWords, Hero, Stickers } from "@/components/home";
import { StickerLayout, StickerPanel } from "@/components/stickers";
import { useRef, useState } from "react";

/**
 * Home page
 */
export default function Home() {
  const sticktyElement = useRef<HTMLDivElement>(null);
  const [isStickerPanel, setIsStickerPanel] = useState(false);

  return (
    <>
      <StickerLayout>
        <Header ref={sticktyElement} />
        <main className="max-w-4xl mx-auto min-h-screen py-4 md:py-8 overflow-hidden">
          <Hero />
          <Stickers openStickerPanel={() => setIsStickerPanel(true)} />
          <FinalWords />
        </main>
        <Cursor sticktyElement={sticktyElement} />
        <StickerPanel
          isStickerPanel={isStickerPanel}
          closeStickerPanel={() => setIsStickerPanel(false)}
        />
      </StickerLayout>
    </>
  );
}
