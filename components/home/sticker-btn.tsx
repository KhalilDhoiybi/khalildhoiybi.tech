import { motion } from "framer-motion";
import { Button } from "../ui/button";

const Stickers = () => {
  return (
    <motion.section
      className="container py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="border-2 rounded-lg py-8 flex justify-center">
        <Button className="font-dela">Check Out My Stickers</Button>
      </div>
    </motion.section>
  );
};

export default Stickers;
