import { StickerCoordType, StickerType } from ".";

/**
 * @description
 * Stickers data objects.
 */

const archSticker: StickerType = {
  id: "arch",
  name: "Arch Linux",
  url: "/images/stickers/arch.png",
};

const astroSticker: StickerType = {
  id: "astro",
  name: "Astro",
  url: "/images/stickers/astro.png",
};

const dockerSticker: StickerType = {
  id: "docker",
  name: "Docker",
  url: "/images/stickers/docker.png",
};

const githubSticker: StickerType = {
  id: "github",
  name: "GitHub",
  url: "/images/stickers/github.png",
};

const nextSticker: StickerType = {
  id: "next",
  name: "Next.js",
  url: "/images/stickers/next.png",
};

const postgresSticker: StickerType = {
  id: "postgres",
  name: "PostgreSQL",
  url: "/images/stickers/postgres.png",
};

const prismaSticker: StickerType = {
  id: "prisma",
  name: "Prisma",
  url: "/images/stickers/prisma.png",
};

const reactSticker: StickerType = {
  id: "react",
  name: "React",
  url: "/images/stickers/react.png",
};

const storybookSticker: StickerType = {
  id: "storybook",
  name: "Storybook",
  url: "/images/stickers/storybook.png",
};

const tailwindSticker: StickerType = {
  id: "tailwind",
  name: "Tailwind CSS",
  url: "/images/stickers/tailwind.png",
};

const trpcSticker: StickerType = {
  id: "trpc",
  name: "TRPC",
  url: "/images/stickers/trpc.png",
};

const turborepoSticker: StickerType = {
  id: "turborepo",
  name: "Turborepo",
  url: "/images/stickers/turborepo.png",
};

const typescriptSticker: StickerType = {
  id: "typescript",
  name: "TypeScript",
  url: "/images/stickers/typescript.png",
};

const vercelSticker: StickerType = {
  id: "vercel",
  name: "Vercel",
  url: "/images/stickers/vercel.png",
};

const viteSticker: StickerType = {
  id: "vite",
  name: "Vite",
  url: "/images/stickers/vite.png",
};

const zodSticker: StickerType = {
  id: "zod",
  name: "Zod",
  url: "/images/stickers/zod.png",
};
/**
 * @description
 * Sticker coordinates are used to position the stickers on the screen.
 */
export const stickersCoordinates: StickerCoordType[] = [
  {
    top: "10%",
    left: "10%",
  },
  {
    top: "30%",
    left: "10%",
  },
  {
    top: "50%",
    left: "10%",
  },
  {
    top: "70%",
    left: "10%",
  },
  {
    top: "70%",
    left: "25%",
  },
  {
    top: "70%",
    left: "40%",
  },
  {
    top: "70%",
    left: "55%",
  },
  {
    top: "70%",
    left: "70%",
  },
  {
    top: "50%",
    left: "70%",
  },
  {
    top: "30%",
    left: "70%",
  },
  {
    top: "10%",
    left: "70%",
  },
  {
    top: "10%",
    left: "55%",
  },
  {
    top: "10%",
    left: "40%",
  },
  {
    top: "10%",
    left: "25%",
  },
  {
    top: "40%",
    left: "25%",
  },
  {
    top: "40%",
    left: "55%",
  },
];

/**
 * @description
 * Stickers are used to display the stickers on the screen.
 */
export const stickers: StickerType[] = [
  archSticker,
  astroSticker,
  dockerSticker,
  githubSticker,
  nextSticker,
  postgresSticker,
  prismaSticker,
  reactSticker,
  storybookSticker,
  tailwindSticker,
  trpcSticker,
  turborepoSticker,
  typescriptSticker,
  vercelSticker,
  viteSticker,
  zodSticker,
];
