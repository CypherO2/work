import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  CloudSun,
  FolderGit2,
  Mail,
  MessagesSquare,
  Play,
} from "lucide-react";

const SOCIAL_ICONS = {
  email: Mail,
  github: FolderGit2,
  youtube: Play,
  discord: MessagesSquare,
  linkedin: BriefcaseBusiness,
  bluesky: CloudSun,
} as const;

type SocialType = keyof typeof SOCIAL_ICONS;

function isSocialType(type: string): type is SocialType {
  return Object.hasOwn(SOCIAL_ICONS, type);
}

export function socialIcon(type: string): LucideIcon {
  if (isSocialType(type)) return SOCIAL_ICONS[type];
  return Mail;
}
