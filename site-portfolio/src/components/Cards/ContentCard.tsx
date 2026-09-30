"use client";

import DetailModal from "../DetailModal";
import { cardInteractive } from "@/lib/ui";

export type ContentCardProps = {
  title: string;
  summary: string;
  link: string;
  role?: string;
  stack?: string[];
  highlights?: string[];
  notes?: string;
};

export default function ContentCard({
  title,
  summary,
  link,
  role,
  stack,
  highlights,
  notes,
}: ContentCardProps) {
  return (
    <DetailModal
      className={`${cardInteractive} flex h-full min-h-52 cursor-pointer flex-col gap-3`}
      fields={{
        title,
        subtitle: role?.trim() || undefined,
        summary,
        highlights,
        stack,
        notes,
        link: { href: link, label: "GitHub repository" },
      }}
    >
      <h2 className="m-0 truncate text-[1.35rem] font-bold text-ink">{title}</h2>
      {role?.trim() ? (
        <p className="m-0 text-sm text-muted">{role}</p>
      ) : null}
      <p className="m-0 line-clamp-3 flex-1 text-[0.95rem] text-muted">
        {summary}
      </p>
    </DetailModal>
  );
}
