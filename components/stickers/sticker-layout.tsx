import { useRef } from "react";
import { motion } from "framer-motion";
import Sticker from "./sticker";
import { StickerCoordType, StickerType } from "@/config";

interface StickerScreenProps {
  children: React.ReactNode;
  stickerCount: number;
  shuffledStickers: StickerType[];
  stickersCoords: StickerCoordType[];
}

/**
 * Sticker screen layout
 */
const StickerLayout: React.FC<StickerScreenProps> = ({
  children,
  stickerCount,
  shuffledStickers,
  stickersCoords,
}) => {
  const stickerScreenRef = useRef(null);

  return (
    <>
      <motion.div
        className="w-screen h-full -z-10 top-0 left-0"
        ref={stickerScreenRef}
      >
        {children}
      </motion.div>
      {shuffledStickers.map((sticker, index) => (
        <Sticker
          key={sticker.id}
          sticker={sticker}
          stickerScreenRef={stickerScreenRef}
          stickerCount={stickerCount}
          stickerIndex={index}
          stickerCoord={stickersCoords[index]}
        />
      ))}
    </>
  );
};

export default StickerLayout;
