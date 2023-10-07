import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Audiowide, Dela_Gothic_One, Literata, Oxygen } from "next/font/google";
import Footer from "@/components/footer";

/**
 * Root layout
 * The root layout of the website
 * fonts are loaded here
 */
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
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
