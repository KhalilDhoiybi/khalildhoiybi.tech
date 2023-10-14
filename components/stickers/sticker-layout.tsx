import { useRef } from "react";
import { motion } from "framer-motion";
import Sticker from "./sticker";
import { StickerType, stickers, stickersCoordinates } from "@/config";

interface StickerScreenProps {
  children: React.ReactNode;
  stickerCount: number;
  shuffleStickers: StickerType[];
}

/**
 * Sticker screen
 */
const StickerLayout: React.FC<StickerScreenProps> = ({
  children,
  stickerCount,
  shuffleStickers,
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
      {shuffleStickers.map((sticker, index) => (
        <Sticker
          key={sticker.id}
          sticker={sticker}
          stickerScreenRef={stickerScreenRef}
          stickerCount={stickerCount}
          stickerIndex={index}
          stickerCoord={stickersCoordinates[index]}
        />
      ))}
    </>
  );
};

export default StickerLayout;
