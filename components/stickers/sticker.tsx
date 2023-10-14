import { StickerType } from "@/config";
import { motion } from "framer-motion";
import Image from "next/image";
import { RefObject } from "react";
import { AspectRatio } from "../ui/aspect-ratio";

interface StickerProps {
  sticker: StickerType;
  stickerScreenRef: RefObject<HTMLDivElement>;
  stickerCount: number;
  stickerIndex: number;
  stickerCoord: {
    top: number;
    left: number;
  };
}

/**
 * Sticker
 */
const Sticker: React.FC<StickerProps> = ({
  sticker,
  stickerScreenRef,
  stickerCount,
  stickerIndex,
  stickerCoord,
}) => {
  return (
    <motion.div
      initial={false}
      animate={stickerCount >= stickerIndex ? "open" : "closed"}
    >
      <motion.div
        className="w-28 h-28 md:w-44 md:h-44 absolute z-50 hover:cursor-pointer"
        style={stickerCoord}
        whileTap={{ scale: 1.3, cursor: "grabbing" }}
        drag
        dragConstraints={stickerScreenRef}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
      >
        <AspectRatio ratio={1 / 1}>
          <Image
            src={sticker.url}
            className="pointer-events-none object-contain"
            alt={sticker.name}
            fill
            sizes="100%"
          />
        </AspectRatio>
      </motion.div>
    </motion.div>
  );
};

export default Sticker;
