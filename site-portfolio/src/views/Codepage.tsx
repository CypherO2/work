import ContentCard from "@/components/Cards/ContentCard";
import { projects } from "@/lib/projects";
import { cardGrid, page, pageTitle } from "@/lib/ui";

export default function Codepage() {
  return (
    <div className={page}>
      <h1 className={pageTitle}>My projects</h1>
      <div className={cardGrid}>
        {projects.map((project) => (
          <ContentCard key={project.link} {...project} />
        ))}
      </div>
    </div>
  );
}
