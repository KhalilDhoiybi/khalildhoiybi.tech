import { FileSpreadsheet, Mail } from "lucide-react";
import { LinkType } from ".";

export const personalLinks: LinkType[] = [
  {
    id: "email",
    name: "E-mail",
    url: "mailto://dhoiybikhalil@gmail.com",
    icon: Mail,
  },
  {
    id: "resume",
    name: "Resume",
    url: "",
    icon: FileSpreadsheet,
  },
];
