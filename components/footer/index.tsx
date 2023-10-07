import IconLink from "./icon-link";
import { navItems, personalLinks, socialLinks } from "@/config";

const Footer = () => {
  return (
    <footer className="grid grid-cols-3 max-w-4xl mx-auto border-t py-6">
      {/* Socials */}
      <div className="container space-y-4 w-fit">
        {socialLinks.map((social) => (
          <IconLink key={social.id} linkItem={social} />
        ))}
      </div>
      {/* Personal */}
      <div className="container space-y-4 w-fit">
        {personalLinks.map((personal) => (
          <IconLink key={personal.id} linkItem={personal} />
        ))}
      </div>
      {/* Nav items */}
      <div className="container space-y-4 w-fit">
        {navItems.map((nav) => (
          <IconLink key={nav.id} linkItem={nav} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
