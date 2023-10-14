import {
  socialLinks,
  socialGithub,
  socialLinkedin,
  socialTwitter,
} from "./social-links";
import { personalLinks, personalEmail, personalResume } from "./personal-links";
import { navItems, navAbout, navBlog } from "./nav-items";
import { LucideIcon } from "lucide-react";
import { stickers, stickersCoordinates } from "./stickers";

interface LinkType {
  id: string;
  name: string;
  url: string;
  icon?: LucideIcon;
}

interface StickerType {
  id: string;
  name: string;
  url: string;
}

export {
  socialLinks,
  socialGithub,
  socialLinkedin,
  socialTwitter,
  personalLinks,
  personalEmail,
  personalResume,
  navItems,
  navAbout,
  navBlog,
  stickers,
  stickersCoordinates,
};
export type { LinkType, StickerType };
