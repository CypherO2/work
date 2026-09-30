"use client";

import DetailModal from "../DetailModal";
import { cardInteractive } from "@/lib/ui";

export type ContentCardProps = {
  title: string;
  summary: string;
  link: string;
  demo?: string;
  year?: string;
  status?: string;
  role?: string;
  stack?: string[];
  highlights?: string[];
  notes?: string;
};

export default function ContentCard({
  title,
  summary,
  link,
  demo,
  year,
  status,
  role,
  stack,
  highlights,
  notes,
}: ContentCardProps) {
  const chips = [year, status, role]
    .map((item) => item?.trim())
    .filter(Boolean);
  const stackPreview = (stack ?? [])
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 3);
  const links = [
    { href: link, label: "GitHub" },
    ...(demo?.trim() ? [{ href: demo.trim(), label: "Live site" }] : []),
  ];

  return (
    <DetailModal
      className={`${cardInteractive} flex h-full min-h-52 cursor-pointer flex-col gap-3`}
      fields={{
        title,
        subtitle: role?.trim() || undefined,
        summary,
        year,
        status,
        achievements: (highlights ?? [])
          .map((text) => text.trim())
          .filter(Boolean)
          .map((text) => ({ text })),
        tags: stack,
        tagsLabel: "Stack",
        notes,
        links,
      }}
    >
      {chips.length > 0 ? (
        <div className="flex flex-wrap gap-1.5">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-[0.35rem] border border-panel-border px-2 py-0.5 text-xs text-muted"
            >
              {chip}
            </span>
          ))}
        </div>
      ) : null}
      <h2 className="m-0 truncate text-[1.35rem] font-bold text-ink">{title}</h2>
      <p className="m-0 line-clamp-3 flex-1 text-[0.95rem] text-muted">
        {summary}
      </p>
      {stackPreview.length > 0 ? (
        <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
          {stackPreview.map((item) => (
            <li
              key={item}
              className="rounded-[0.35rem] border border-panel-border px-2 py-0.5 text-xs text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </DetailModal>
  );
}
