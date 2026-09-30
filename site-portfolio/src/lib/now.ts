import nowJson from "../../content/now.json";

export type NowItem = {
  title: string;
  detail: string;
};

export type NowContent = {
  updated: string;
  headline: string;
  items: NowItem[];
};

export const now = nowJson as NowContent;
