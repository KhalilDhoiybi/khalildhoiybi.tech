import { socialLinks } from "./social-links";
import { personalLinks } from "./personal-links";
import { navItems } from "./nav-items";
import { LucideIcon } from "lucide-react";

interface LinkType {
  id: string;
  name: string;
  url: string;
  icon?: LucideIcon;
}

export { socialLinks, personalLinks, navItems };
export type { LinkType };
