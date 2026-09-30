import projectsJson from "../../content/projects.json";

export type Project = {
  title: string;
  summary: string;
  link: string;
  demo?: string;
  year?: string;
  status?: string;
  featured?: boolean;
  role?: string;
  stack?: string[];
  highlights?: string[];
  notes?: string;
};

export const projects = (projectsJson as { projects: Project[] }).projects;

export const featuredProjects = projects.filter((project) => project.featured);
