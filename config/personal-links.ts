import { FileSpreadsheet, Mail } from "lucide-react";
import { LinkType } from ".";

export const personalEmail: LinkType = {
  id: "email",
  name: "E-mail",
  url: "mailto://dhoiybikhalil@gmail.com",
  icon: Mail,
};

export const personalResume: LinkType = {
  id: "resume",
  name: "Resume",
  url: "/downloads/khalil-dhoiybi-resume.pdf",
  icon: FileSpreadsheet,
};

export const personalLinks: LinkType[] = [personalEmail, personalResume];
