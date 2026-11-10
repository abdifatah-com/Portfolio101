import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoTiktok,
  BiLogoTwitter,
  BiLogoDribbble,
  BiEnvelope,
} from "react-icons/bi";
import { site } from "./site";

export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: site.githubUrl,
    icon: BiLogoGithub,
    status: "social",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: site.linkedinUrl,
    icon: BiLogoLinkedinSquare,
    status: "social",
  },
  {
    id: 3,
    name: "Dribbble",
    url: site.dribbbleUrl,
    icon: BiLogoDribbble,
    status: "social",
  },
  {
    id: 4,
    name: "TikTok (22K+ • 4M+ Views)",
    url: site.tiktokUrl,
    icon: BiLogoTiktok,
    status: "social",
  },
  {
    id: 5,
    name: "Twitter / X",
    url: site.twitterUrl,
    icon: BiLogoTwitter,
    status: "social",
  },
  {
    id: 6,
    name: "Email",
    url: `mailto:${site.email}`,
    icon: BiEnvelope,
    status: "social",
  },
];
