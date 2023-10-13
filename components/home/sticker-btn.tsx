import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface StickerProps {
  openStickerPanel: () => void;
}

const Stickers: React.FC<StickerProps> = ({ openStickerPanel }) => {
  return (
    <motion.section
      className="container py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="border-2 rounded-lg py-8 flex justify-center">
        <Button className="font-dela" onClick={openStickerPanel}>
          Check Out My Stickers
        </Button>
      </div>
    </motion.section>
  );
};

export default Stickers;
