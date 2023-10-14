"use client";

import Cursor from "@/components/cursor";
import Header from "@/components/header";
import { FinalWords, Hero, Stickers } from "@/components/home";
import { StickerLayout, StickerPanel } from "@/components/stickers";
import { StickerType, stickers } from "@/config";
import { useRef, useState } from "react";
import shuffle from "lodash.shuffle";
/**
 * Home page
 */
export default function Home() {
  const sticktyElement = useRef<HTMLDivElement>(null);
  const [isStickerPanel, setIsStickerPanel] = useState(false);
  const [stickerCount, setStickerCount] = useState(-1);
  const [shuffledStickers, setStickers] = useState<StickerType[]>(
    shuffle(stickers)
  );

  const resetStickers = () => {
    setStickerCount(-1);
    if (stickerCount === -1) {
      setStickers(shuffle(stickers));
    }
  };

  return (
    <>
      <StickerLayout
        stickerCount={stickerCount}
        shuffleStickers={shuffledStickers}
      >
        <Header ref={sticktyElement} />
        <main className="max-w-4xl mx-auto min-h-screen py-4 md:py-8 overflow-hidden">
          <Hero />
          <Stickers
            openStickerPanel={() => {
              setIsStickerPanel(true);
              setStickers(shuffle(stickers));
            }}
          />
          <FinalWords />
        </main>
        <Cursor sticktyElement={sticktyElement} />
        <StickerPanel
          isStickerPanel={isStickerPanel}
          closeStickerPanel={() => {
            resetStickers();
            setIsStickerPanel(false);
          }}
          addSticker={() => setStickerCount(stickerCount + 1)}
          resetStickers={resetStickers}
        />
      </StickerLayout>
    </>
  );
}
