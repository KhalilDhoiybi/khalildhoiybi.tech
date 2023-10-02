"use client";

import { Audiowide } from "next/font/google";
import { ModeToggle } from "../theme/theme-toggler";

const audiowide = Audiowide({ weight: "400", subsets: ["latin-ext"] });

export default function Header() {
  return (
    <header className="py-6 flex justify-between max-w-4xl mx-auto">
      <h1 className={`${audiowide.className} text-2xl`}>Khalil Dhoiybi.</h1>
      <ModeToggle />
    </header>
  );
}
