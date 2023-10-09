"use client";

import { forwardRef } from "react";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = forwardRef<HTMLDivElement>((_, ref) => {
  const { setTheme, theme } = useTheme();
  return (
    <header className="container py-8 flex justify-between max-w-4xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link href="/">
          <Button variant="outline">
            <h1 className="text-2xl font-logo font-black">Khalil Dhoiybi.</h1>
          </Button>
        </Link>
      </motion.div>
      <motion.div
        className="absolute z-10 right-8 mix-blend-difference"
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {!ref ? (
          <Button
            variant="default"
            size="icon"
            className="text-black dark:text-white"
            onClick={() => {
              if (theme === "dark") {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        ) : (
          <Button
            variant="default"
            size="icon"
            className="pointer-events-none text-black dark:text-white"
            onClick={() => {
              if (theme === "dark") {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
            <div
              ref={ref}
              className="absolute left-0 top-0 w-[100%] h-[100%] scale-[2] hover:scale-[4]"
              style={{ pointerEvents: "all" }}
            ></div>
          </Button>
        )}
      </motion.div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
