import workJson from "../../content/work.json";

export type WorkCase = {
  title: string;
  org: string;
  role: string;
  period: string;
  summary: string;
  outcome: string;
  stack: string[];
};

export type WorkContent = {
  intro: string;
  cases: WorkCase[];
};

export const work = workJson as WorkContent;
