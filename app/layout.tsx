import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import {
  Audiowide,
  Dela_Gothic_One,
  Inter,
  Literata,
  Oxygen,
} from "next/font/google";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--audiowide-font",
});

const dela = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--dela-font",
});

const oxygen = Oxygen({
  weight: "400",
  subsets: ["latin"],
  variable: "--oxygen-font",
});

const literata = Literata({
  weight: "400",
  subsets: ["latin"],
  variable: "--literata-font",
});

export const metadata: Metadata = {
  title: "Khalil Dhoiybi",
  description: "Khalil Dhoiybi's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${audiowide.variable} ${dela.variable} ${oxygen.variable} ${literata.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
