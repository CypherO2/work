"use client";

import { panel } from "@/lib/ui";

export type TimelineEntry = {
  dateStart: string;
  dateEnd: string;
  jobRole: string;
  workPlace: string;
  roleDesc: string;
};

type TimelineProps = {
  title: string;
  entries: TimelineEntry[];
};

export default function Timeline({ title, entries }: TimelineProps) {
  return (
    <section className={panel}>
      <h2 className="mb-4 text-[1.35rem] font-bold">{title}</h2>
      {entries.map((entry) => (
        <div
          className="border-t border-panel-border py-2.5 first:border-t-0 first:pt-0"
          key={`${entry.workPlace}-${entry.jobRole}-${entry.dateStart}`}
        >
          <div className="text-sm text-muted">
            {entry.dateStart} - {entry.dateEnd}
          </div>
          <h3 className="my-1 text-[1.05rem] font-bold">
            {entry.jobRole} - {entry.workPlace}
          </h3>
          <p className="m-0 text-[0.92rem] text-muted">{entry.roleDesc}</p>
        </div>
      ))}
    </section>
  );
}
