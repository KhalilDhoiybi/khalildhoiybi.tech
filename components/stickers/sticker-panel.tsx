import { IterationCcw, Plus, X } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface StickerPanelProps {
  isStickerPanel: boolean;
  closeStickerPanel: () => void;
}

const StickerPanel: React.FC<StickerPanelProps> = ({
  isStickerPanel,
  closeStickerPanel,
}) => {
  return (
    <motion.div
      className="fixed right-0 top-24 z-50"
      initial={false}
      animate={isStickerPanel ? "open" : "closed"}
    >
      <motion.div
        className="bg-secondary rounded-md px-4 py-4 flex flex-col gap-4 border"
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
        <Button variant="outline" size="icon">
          <Plus />
        </Button>
        <Button variant="outline" size="icon">
          <IterationCcw />
        </Button>
        <Button variant="outline" size="icon" onClick={closeStickerPanel}>
          <X />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default StickerPanel;
