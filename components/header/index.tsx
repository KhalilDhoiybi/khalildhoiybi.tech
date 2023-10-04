"use client";

import { ModeToggle } from "../theme/theme-toggler";

export default function Header() {
  return (
    <header className="container py-6 flex justify-between max-w-4xl mx-auto">
      <div className="">
        <h1 className="text-2xl font-logo font-black">Khalil Dhoiybi.</h1>
      </div>
      <ModeToggle />
    </header>
  );
}
