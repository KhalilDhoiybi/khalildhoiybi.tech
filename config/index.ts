import {
  socialLinks,
  socialGithub,
  socialLinkedin,
  socialTwitter,
} from "./social-links";
import { personalLinks, personalEmail, personalResume } from "./personal-links";
import { navItems, navAbout, navBlog } from "./nav-items";
import { LucideIcon } from "lucide-react";

interface LinkType {
  id: string;
  name: string;
  url: string;
  icon?: LucideIcon;
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
};
export type { LinkType };
