import projectsJson from "../../content/projects.json";

export type Project = {
  title: string;
  summary: string;
  link: string;
  featured?: boolean;
  role?: string;
  stack?: string[];
  highlights?: string[];
  notes?: string;
};

export type ProjectsContent = {
  projects: Project[];
};

export const projects = (projectsJson as ProjectsContent).projects;

export const featuredProjects = projects.filter((project) => project.featured);

export function projectToCardProps(project: Project) {
  return {
    title: project.title,
    summary: project.summary,
    link: project.link,
    role: project.role,
    stack: project.stack,
    highlights: project.highlights,
    notes: project.notes,
  };
}
