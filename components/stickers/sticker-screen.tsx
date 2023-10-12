import { useRef, useState } from "react";
import { motion } from "framer-motion";

const StickerScreen = () => {
  const stickerRef = useRef(null);

  return (
    <>
      <motion.div
        className="w-screen h-full absolute -z-10 top-0 left-0"
        ref={stickerRef}
      />
      {/* <motion.div
        className="top-0 left-0 w-20 h-20 bg-primary absolute z-50 hover:cursor-pointer"
        drag
        dragConstraints={stickerRef}
      />
      <motion.div
        className="top-10 left-80 w-20 h-20 bg-red-500 absolute z-50 hover:cursor-pointer"
        whileTap={{ scale: 1.3 }}
        drag
        dragConstraints={stickerRef}
      /> */}
    </>
  );
};

export default StickerScreen;
