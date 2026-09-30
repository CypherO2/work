import {
  ARTCODECURIOUSITY_PATH,
  TLEVELEXPERIENCE_PATH,
  HUNDREDSOFBEAVERS_PATH,
} from "./paths";

const BLOG_INFO = [
  {
    blogImage: "/blog/art-code-curiosity.jpg",
    blogTitle: "Art, Code and Curiousity",
    blogDesc:
      "Why I write here, how Cassi started, and what art and code look like when they share a desk.",
    blogLink: ARTCODECURIOUSITY_PATH,
    blogTags: ["art", "code", "other"],
  },
  {
    blogImage: "/blog/hundreds-of-beavers.jpg",
    blogTitle: "Mike Cheslik's Beaver Dream",
    blogDesc:
      "A look at Hundreds of Beavers: silent-era slapstick, odd storytelling choices, and why the film stuck with me.",
    blogLink: HUNDREDSOFBEAVERS_PATH,
    blogTags: ["film", "comedy", "silent"],
  },
  {
    blogImage: "/blog/t-level-experience.jpg",
    blogTitle: "My T-Level Experience",
    blogDesc:
      "What taking the Digital Production T-Level was actually like: the highs, the lows, and the mess in between.",
    blogLink: TLEVELEXPERIENCE_PATH,
    blogTags: ["t-level", "code", "other"],
  },
] as const;

export type BlogInfo = (typeof BLOG_INFO)[number];

export { BLOG_INFO };
