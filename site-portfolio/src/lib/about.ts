import aboutJson from "../../content/about.json";

export type Achievement = {
  text: string;
  link?: string;
};

export type ContentLink = {
  label: string;
  href: string;
};

/** Shared optional fields. Shape follows JSON Resume work/education closely. */
export type DetailSlots = {
  mode?: string;
  location?: string;
  achievements?: Achievement[];
  stack?: string[];
  courses?: string[];
  studyType?: string;
  score?: string;
  url?: string;
  links?: ContentLink[];
};

export type AboutContent = {
  profile: {
    name: string;
    headline: string;
    location: string;
    bio: string;
  };
  focus: string[];
  experience: Array<
    {
      company: string;
      role: string;
      start: string;
      end: string;
      summary: string;
    } & DetailSlots
  >;
  education: Array<
    {
      place: string;
      program: string;
      start: string;
      end: string;
      summary: string;
    } & DetailSlots
  >;
};

export const about = aboutJson as AboutContent;
