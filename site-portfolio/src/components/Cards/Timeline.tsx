"use client";

import DetailModal from "@/components/DetailModal";
import type { Achievement, ContentLink, Grade } from "@/lib/about";
import { formatDuration, formatPeriod } from "@/lib/duration";
import { cardInteractive } from "@/lib/ui";

type TimelineEntry = {
  dateStart: string;
  dateEnd: string;
  jobRole: string;
  workPlace: string;
  roleDesc: string;
  mode?: string;
  location?: string;
  studyType?: string;
  score?: string;
  achievements?: Achievement[];
  grades?: Grade[];
  tags?: string[];
  tagsLabel?: string;
  url?: string;
  links?: ContentLink[];
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
        {entries.map((entry) => {
          const chips = [entry.studyType, entry.mode, entry.location]
            .map((item) => item?.trim())
            .filter(Boolean);

          const links: ContentLink[] = [
            ...(entry.url?.trim()
              ? [{ label: "Organisation", href: entry.url.trim() }]
              : []),
            ...(entry.links ?? []),
          ];

          const achievementCount = (entry.achievements ?? []).filter((item) =>
            item.text.trim(),
          ).length;

          const period = formatPeriod(entry.dateStart, entry.dateEnd);
          const duration = formatDuration(entry.dateStart, entry.dateEnd);

          return (
            <DetailModal
              key={`${entry.workPlace}-${entry.jobRole}-${entry.dateStart}`}
              className={`${cardInteractive} w-full cursor-pointer`}
              fields={{
                title: entry.jobRole,
                subtitle: entry.workPlace,
                period,
                summary: entry.roleDesc,
                mode: entry.mode,
                location: entry.location,
                studyType: entry.studyType,
                score: entry.score,
                achievements: entry.achievements,
                grades: entry.grades,
                tags: entry.tags,
                tagsLabel: entry.tagsLabel,
                links,
              }}
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                <span>
                  {entry.dateStart} - {entry.dateEnd}
                  {duration ? `, ${duration}` : ""}
                </span>
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-[0.35rem] border border-panel-border px-2 py-0.5 text-xs"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <h3 className="my-1 text-[1.05rem] font-bold text-ink">
                {entry.jobRole} - {entry.workPlace}
              </h3>
              <p className="m-0 line-clamp-2 text-[0.92rem] text-muted">
                {entry.roleDesc}
              </p>
              {achievementCount > 0 ? (
                <p className="m-0 mt-2 text-xs text-accent">
                  {achievementCount} achievement
                  {achievementCount === 1 ? "" : "s"}
                </p>
              ) : null}
            </DetailModal>
          );
        })}
      </div>
    </section>
  );
}
