import { Github, Linkedin, Twitter } from "lucide-react";
import { LinkType } from ".";

export const socialGithub: LinkType = {
  id: "github",
  name: "GitHub",
  url: "https://github.com/KhalilDhoiybi",
  icon: Github,
};

export const socialLinkedin: LinkType = {
  id: "linkedin",
  name: "LinkedIn",
  url: "https://www.linkedin.com/in/khalil-dhoiybi",
  icon: Linkedin,
};

export const socialTwitter: LinkType = {
  id: "twitter",
  name: "Twitter",
  url: "https://twitter.com/KhalilDhoiybi",
  icon: Twitter,
};

export const socialLinks: LinkType[] = [
  socialGithub,
  socialLinkedin,
  socialTwitter,
];
