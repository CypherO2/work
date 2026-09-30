const SOCIAL_LINKS = [
  {
    socialType: "email",
    socialText: "CJ-Development@outlook.com",
    socialLink: "mailto:CJ-Development@outlook.com",
    socialIcon: ["envelope", "fas"],
  },
  {
    socialType: "github",
    socialText: "CyherO2",
    socialLink: "https://github.com/CypherO2/",
    socialIcon: ["github", "fab"],
  },
  {
    socialType: "youtube",
    socialText: "Nox Noctiflora",
    socialLink: "https://www.youtube.com/channel/UC3oX3v2LZpuB08qEGCgwcBw",
    socialIcon: ["youtube", "fab"],
  },
  {
    socialType: "discord",
    socialText: ".cassi06",
    socialLink: "https://discord.gg/ZJJzEa7x6j",
    socialIcon: ["discord", "fab"],
  },
  {
    socialType: "linkedin",
    socialText: "cj presley",
    socialLink: "https://www.linkedin.com/in/cjpresley/",
    socialIcon: ["linkedin", "fab"],
  },
  {
    socialType: "bluesky",
    socialText: "Cassi",
    socialLink: "https://bsky.app/profile/cassi06.bsky.social",
    socialIcon: ["bluesky", "fab"],
  },
] as const;

export type SocialLink = (typeof SOCIAL_LINKS)[number];

export function socialHref(link: string): string {
  if (link.startsWith("http") || link.startsWith("mailto:")) return link;
  return `https://${link}`;
}

const SOCIAL_LABEL_MAX = 14;

export function socialLabel(text: string, max = SOCIAL_LABEL_MAX): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1)}…`;
}

export { SOCIAL_LINKS };
