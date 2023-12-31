import { LinkType } from "@/config";
import Link from "next/link";

interface IconLinkProps {
  linkItem: LinkType;
  navItem?: boolean;
}

const IconLink: React.FC<IconLinkProps> = ({ linkItem, navItem }) => {
  return (
    <Link
      className="flex items-center gap-2 group hover:text-primary"
      key={linkItem.id}
      href={linkItem.url}
      target={navItem ? "_self" : "_blank"}
    >
      {linkItem.icon && <linkItem.icon className="h-5 w-5" />}
      <span className="group-hover:underline underline-offset-4">
        {linkItem.name}
      </span>
    </Link>
  );
};

export default IconLink;
