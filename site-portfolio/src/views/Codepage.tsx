import Thumbnail from "../assets/SiteIcon.png";
import ContentCard from "../components/Cards/ContentCard";
import { projects, projectToCardProps } from "@/lib/projects";
import { cardGrid, page, pageTitle, thumbnail } from "@/lib/ui";

export default function Codepage() {
  return (
    <div className={page}>
      <div className={thumbnail}>
        <img src={Thumbnail.src} alt="" className="h-0 w-0 object-cover" />
      </div>
      <h1 className={pageTitle}>My projects</h1>
      <div className={cardGrid}>
        {projects.map((project) => (
          <ContentCard
            key={project.link}
            {...projectToCardProps(project)}
          />
        ))}
      </div>
    </div>
  );
}
