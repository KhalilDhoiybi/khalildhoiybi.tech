"use client";

import Cursor from "@/components/cursor";
import Header from "@/components/header";
import UnderConstruction from "@/components/under-construction";
import { useRef } from "react";

/**
 * Home page
 */
export default function Home() {
  const sticktyElement = useRef<HTMLDivElement>(null);

  return (
    <main className="max-w-4xl mx-auto">
      <Header ref={sticktyElement} />
      <UnderConstruction />
      <Cursor sticktyElement={sticktyElement} />
    </main>
  );
}
