"use client";

import DetailModal from "../DetailModal";
import { cardInteractive } from "@/lib/ui";

export type TimelineEntry = {
  dateStart: string;
  dateEnd: string;
  jobRole: string;
  workPlace: string;
  roleDesc: string;
  highlights?: string[];
  stack?: string[];
  link?: string;
  notes?: string;
};

type TimelineProps = {
  title: string;
  entries: TimelineEntry[];
};

export default function Timeline({ title, entries }: TimelineProps) {
  return (
    <section>
      <h2 className="mb-3 text-[1.35rem] font-bold">{title}</h2>
      <div className="grid gap-3">
        {entries.map((entry) => (
          <DetailModal
            key={`${entry.workPlace}-${entry.jobRole}-${entry.dateStart}`}
            className={`${cardInteractive} w-full cursor-pointer`}
            fields={{
              title: entry.jobRole,
              subtitle: `${entry.workPlace}, ${entry.dateStart} to ${entry.dateEnd}`,
              summary: entry.roleDesc,
              highlights: entry.highlights,
              stack: entry.stack,
              notes: entry.notes,
              link: entry.link
                ? { href: entry.link, label: "Open link" }
                : undefined,
            }}
          >
            <div className="text-sm text-muted">
              {entry.dateStart} - {entry.dateEnd}
            </div>
            <h3 className="my-1 text-[1.05rem] font-bold text-ink">
              {entry.jobRole} - {entry.workPlace}
            </h3>
            <p className="m-0 line-clamp-2 text-[0.92rem] text-muted">
              {entry.roleDesc}
            </p>
          </DetailModal>
        ))}
      </div>
    </section>
  );
}
