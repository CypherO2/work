"use client";

import Thumbnail from "../assets/SiteIcon.png";
import ContentCard from "../components/Cards/ContentCard";
import { masonry, page, pageTitle, thumbnail } from "@/lib/ui";

const PROJECTS = [
  {
    repoTitle: "CypherO2/work",
    repoDesc:
      "This is the repository that this site is hosted out of with Github Pages.",
    repoLink: "https://github.com/CypherO2/work",
  },
  {
    repoTitle: "CypherO2/RZA-Project",
    repoDesc:
      "The 70 hours project where I planned, designed, built, documented and evaluated a Full-Stack Web App.",
    repoLink: "https://github.com/CypherO2/rza-project",
  },
  {
    repoTitle: "CypherO2/Pokedex-python",
    repoDesc:
      "A repository for random projects. Feel free to look around :D ❤ Ich Liebe Dich",
    repoLink: "https://github.com/CypherO2/Pokedex-python",
  },
  {
    repoTitle: "CypherO2/LoginSystem",
    repoDesc:
      "College winter project: React front end, Flask back end, SQLite3 auth with password hashing.",
    repoLink: "https://github.com/CypherO2/LoginSystem",
  },
  {
    repoTitle: "CypherO2/GMC-Bury2024-CNCS",
    repoDesc:
      "The GMSkills repo that me and a team of two others won 3rd place in a web development contest.",
    repoLink: "https://github.com/CypherO2/gmc-bury2024-cncs",
  },
] as const;

export default function Codepage() {
  return (
    <div className={page}>
      <div className={thumbnail}>
        <img src={Thumbnail.src} alt="" className="h-0 w-0 object-cover" />
      </div>
      <h1 className={pageTitle}>My Projects</h1>
      <div className={masonry}>
        {PROJECTS.map((project) => (
          <ContentCard key={project.repoLink} {...project} />
        ))}
      </div>
    </div>
  );
}
