"use client";

import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { motion } from "framer-motion";

/**
 * UnderConstruction component
 * This component is used to display a placeholder font for pages that are under construction
 */
const UnderConstruction = () => {
  return (
    <motion.section
      className="container space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="font-dela text-xl  md:text-3xl">🚧 Pardon Our Dust! 🚧</h1>
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-sm">
        <Image
          src="/images/under-construction.jpg"
          className="rounded-md object-cover"
          alt="under-construction"
          fill
        />
      </AspectRatio>
      <h2 className="font-serif font-bold text-lg">
        Welcome to the Future Home of Awesomeness!
      </h2>
      <div className="font-sans space-y-4 px-6">
        <p>
          Hey there, intrepid explorer! You&apos;ve stumbled upon a section of
          our digital realm that&apos;s currently undergoing a cosmic makeover
          🌟.
        </p>
        <p>
          While we&apos;re putting on the finishing touches, I invite you to
          check out the other sections of my site.
        </p>
        <p>Cheers to what&apos;s to come! 🌌🚀.</p>
      </div>
    </motion.section>
  );
};

export default UnderConstruction;
