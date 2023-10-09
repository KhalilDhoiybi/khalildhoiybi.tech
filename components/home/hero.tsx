import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Hero section
 */
const Hero = () => {
  return (
    <section className="container py-8">
      {/* Profile pic */}
      <motion.div
        className="md:grid grid-cols-4 border rounded-lg py-8 space-y-6 md:space-y-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container h-full flex justify-center items-center">
          <div className="w-40 h-40 overflow-hidden">
            <AspectRatio
              ratio={1 / 1}
              className="bg-blue-400 dark:bg-primary rounded-full md:rounded-lg border-4 border-blue-400 dark:border-primary"
            >
              <Image
                src="/images/profile-image.jpeg"
                className="rounded-full md:rounded-lg object-cover"
                alt="under-construction"
                fill
              />
            </AspectRatio>
          </div>
        </div>
        {/* Welcome paragraph */}
        <motion.div className="col-span-3 container space-y-4">
          <h1 className="font-dela text-xl text-center md:text-left md:text-3xl">
            Welcome to My Digital Playground!
          </h1>
          <p>
            Greetings! I&apos;m thrilled to have you here. As a passionate
            full-stack developer, I embark on journeys of code, crafting
            seamless digital experiences from concept to completion. Whether
            it&apos;s front-end magic or back-end wizardry, I&apos;m dedicated
            to turning ideas into elegant, functional solutions. Explore my
            portfolio and get a glimpse into the world of my creations. Feel
            free to reach out - let&apos;s collaborate and build something
            amazing together!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
