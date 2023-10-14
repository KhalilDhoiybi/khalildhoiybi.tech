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
    top: string;
    left: string;
  };
}

/**
 * Sticker component
 */
const Sticker: React.FC<StickerProps> = ({
  sticker,
  stickerScreenRef,
  stickerCount,
  stickerIndex,
  stickerCoord,
}) => {
  if (stickerCount < stickerIndex) return null;

  return (
    <motion.div
      className="w-28 h-28 md:w-44 md:h-44 absolute z-50 hover:cursor-pointer"
      style={stickerCoord}
      whileTap={{ scale: 1.3, cursor: "grabbing" }}
      drag
      dragConstraints={stickerScreenRef}
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
  );
};

export default Sticker;
