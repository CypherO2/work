import {
  ARTCODECURIOUSITY_PATH,
  TLEVELEXPERIENCE_PATH,
  HUNDREDSOFBEAVERS_PATH,
} from "./paths";
import blogImage1 from "../assets/pexels-pixabay-276452.jpg";
import blogImage2 from "../assets/pexels-marian-havenga-531055927-18941446.jpg";
import blogImage3 from "../assets/pexels-dariuskrs-2228183.jpg";

const BLOG_INFO = [
  {
    blogImage: blogImage1,
    blogTitle: "Art, Code and Curiousity",
    blogDesc:
      "Join me on an exciting journey where creativity meets technology. Discover my passion for art, dive into coding adventures, and explore a world of endless curiosities. Let's inspire and learn together!",
    blogLink: ARTCODECURIOUSITY_PATH,
    blogTags: ["art", "code", "other"],
  },
  {
    blogImage: blogImage2,
    blogTitle: "Mike Cheslik's Beaver Dream",
    blogDesc:
      "In my latest blog post, I dive into Mike Cheslik’s 2022 black-and-white slapstick comedy, Hundreds of Beavers. Explore the film’s homage to 1920s-1930s silent cinema, its unique storytelling, and masterful direction. Join me as I analyze its themes, characters, and overall impact, offering a fresh perspective on this nostalgic yet innovative film.",
    blogLink: HUNDREDSOFBEAVERS_PATH,
    blogTags: ["film", "comedy", "silent"],
  },
  {
    blogImage: blogImage3,
    blogTitle: "My T-Level Experience",
    blogDesc:
      "My experience with the English Governement's Pride and Joy, the T-Level Course, the highs, the lows and the hellish.",
    blogLink: TLEVELEXPERIENCE_PATH,
    blogTags: ["t-level", "code", "other"],
  },
];

export { BLOG_INFO };
