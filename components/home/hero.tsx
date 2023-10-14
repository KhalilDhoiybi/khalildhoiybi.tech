import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Book,
  FileText,
  Github,
  Linkedin,
  Mail,
  Twitter,
  User2,
} from "lucide-react";
import Link from "next/link";
import {
  personalEmail,
  personalResume,
  socialGithub,
  socialLinkedin,
  socialTwitter,
} from "@/config";

/**
 * Hero section
 */
const Hero = () => {
  return (
    <motion.section
      className="container rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="md:grid grid-cols-4 space-y-6 md:space-y-0">
        {/* Profile pic */}
        <div className="container h-full flex justify-center">
          <div className="w-40 h-40 overflow-hidden">
            <AspectRatio
              ratio={1 / 1}
              className="bg-secondary rounded-full md:rounded-lg border-4 border-secondary"
            >
              <Image
                src="/images/profile-image.jpeg"
                className="rounded-full md:rounded-md object-cover"
                alt="under-construction"
                fill
                sizes="100%"
              />
            </AspectRatio>
          </div>
        </div>
        {/* Welcome paragraph */}
        <div className="col-span-3 md:container space-y-4">
          <h1 className="font-dela text-2xl text-center md:text-left md:text-4xl">
            Welcome To My Digital Playground!
          </h1>
          <p>
            Greetings! I&apos;m thrilled to have you here. As a passionate{" "}
            <span className="font-bold">full-stack developer</span>, I embark on
            journeys of code, crafting seamless digital experiences from concept
            to completion. Whether it&apos;s front-end magic or back-end
            wizardry, I&apos;m dedicated to turning ideas into elegant,
            functional solutions.
          </p>
        </div>
      </div>
      <div className="md:container flex md:justify-end py-8 gap-4 flex-wrap">
        {/* Github */}
        <Link href={socialGithub.url} target="_blank">
          <Button size="sm" variant="secondary" className="space-x-1">
            <Github className="w-5 h-5" />
            <span>Github</span>
          </Button>
        </Link>
        {/* Blog */}
        <Link href="/blog">
          <Button size="sm" variant="secondary" className="space-x-1">
            <Book className="w-5 h-5" />
            <span>Blog</span>
          </Button>
        </Link>
        {/* About Me */}
        <Link href="/about">
          <Button size="sm" variant="secondary" className="space-x-1">
            <User2 className="w-5 h-5" />
            <span>About</span>
          </Button>
        </Link>
        {/* Resume */}
        <Link href={personalResume.url} target="_blank">
          <Button size="sm" variant="secondary" className="space-x-1">
            <FileText className="w-5 h-5" />
            <span>Resume</span>
          </Button>
        </Link>
        {/* Twitter */}
        <Link href={socialTwitter.url} target="_blank">
          <Button size="icon" variant="secondary">
            <Twitter className="w-5 h-5" />
          </Button>
        </Link>
        {/* LinkedIn */}
        <Link href={socialLinkedin.url} target="_blank">
          <Button size="icon" variant="secondary">
            <Linkedin className="w-5 h-5" />
          </Button>
        </Link>
        {/* E-mail */}
        <Link href={personalEmail.url}>
          <Button size="icon" variant="secondary">
            <Mail className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </motion.section>
  );
};

export default Hero;
