"use client";

import Cursor from "@/components/cursor";
import Header from "@/components/header";
import { FinalWords, Hero, Stickers } from "@/components/home";
import { StickerLayout, StickerPanel } from "@/components/stickers";
import {
  StickerCoordType,
  StickerType,
  stickers,
  stickersCoordinates,
} from "@/config";
import { useRef, useState } from "react";
import shuffle from "lodash.shuffle";
/**
 * Home page
 */
export default function Home() {
  // Sticky Cursor ref
  const sticktyElement = useRef<HTMLDivElement>(null);
  // Stickers states
  const [isStickerPanel, setIsStickerPanel] = useState<boolean>(false);
  const [stickerCount, setStickerCount] = useState<number>(-1);
  const [stickersCoords, setStickersCoords] =
    useState<StickerCoordType[]>(stickersCoordinates);
  const [shuffledStickers, setStickers] = useState<StickerType[]>(
    shuffle(stickers)
  );

  /**
   * Open sticker panel
   */
  const openStickerPanel = () => {
    setIsStickerPanel(true);
  };

  /**
   * Add sticker
   */
  const addSticker = () => {
    setStickerCount(stickerCount + 1);
  };

  /**
   * Reset stickers
   */
  const resetStickers = () => {
    setStickerCount(-1);
    setStickersCoords(stickersCoordinates);
    setStickers(shuffle(stickers));
  };

  /**
   * Close sticker panel
   */
  const closeStickerPanel = () => {
    setIsStickerPanel(false);
    setStickerCount(-1);
    setStickersCoords(stickersCoordinates);
    setStickers(shuffle(stickers));
  };

  return (
    <>
      <StickerLayout
        stickerCount={stickerCount}
        shuffledStickers={shuffledStickers}
        stickersCoords={stickersCoords}
      >
        <Header ref={sticktyElement} />
        <main className="max-w-4xl mx-auto min-h-screen py-4 md:py-8 overflow-hidden">
          <Hero />
          <Stickers openStickerPanel={openStickerPanel} />
          <FinalWords />
        </main>
        <Cursor sticktyElement={sticktyElement} />
        <StickerPanel
          isStickerPanel={isStickerPanel}
          closeStickerPanel={closeStickerPanel}
          addSticker={addSticker}
          resetStickers={resetStickers}
        />
      </StickerLayout>
    </>
  );
}
