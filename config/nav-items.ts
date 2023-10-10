import { LinkType } from ".";

export const navHome: LinkType = {
  id: "home",
  name: "Home",
  url: "/",
};

export const navAbout: LinkType = {
  id: "about",
  name: "About",
  url: "/about",
};

export const navBlog: LinkType = {
  id: "blog",
  name: "Blog",
  url: "/blog",
};

export const navItems: LinkType[] = [navHome, navAbout, navBlog];
