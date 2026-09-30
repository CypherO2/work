import aboutJson from "../../content/about.json";

export type DetailSlots = {
  highlights?: string[];
  stack?: string[];
  link?: string;
  notes?: string;
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
