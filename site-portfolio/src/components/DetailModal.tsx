"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { btnAccent } from "@/lib/ui";
import type { Achievement, ContentLink } from "@/lib/about";

export type DetailFields = {
  title: string;
  subtitle?: string;
  period?: string;
  summary?: string;
  mode?: string;
  location?: string;
  studyType?: string;
  score?: string;
  year?: string;
  status?: string;
  achievements?: Achievement[];
  /** Tags: tools for work, courses for school. */
  tags?: string[];
  tagsLabel?: string;
  notes?: string;
  links?: ContentLink[];
};

type DetailModalProps = {
  fields: DetailFields;
  children: ReactNode;
  className?: string;
};

function filledTags(list?: string[]) {
  return (list ?? []).map((item) => item.trim()).filter(Boolean);
}

function filledAchievements(list?: Achievement[]) {
  return (list ?? []).filter((item) => item.text.trim());
}

function filledLinks(list?: ContentLink[]) {
  return (list ?? []).filter((item) => item.href.trim() && item.label.trim());
}

function MetaChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-[0.35rem] border border-panel-border px-2 py-0.5 text-xs text-muted">
      {children}
    </span>
  );
}

export default function DetailModal({
  fields,
  children,
  className,
}: DetailModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const achievements = filledAchievements(fields.achievements);
  const tags = filledTags(fields.tags);
  const links = filledLinks(fields.links);
  const notes = fields.notes?.trim();
  const meta = [
    fields.studyType?.trim(),
    fields.mode?.trim(),
    fields.location?.trim(),
    fields.score?.trim() ? `Score ${fields.score.trim()}` : "",
    fields.year?.trim(),
    fields.status?.trim(),
  ].filter(Boolean);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClose = () => {
      document.body.style.removeProperty("overflow");
    };
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("close", onClose);
      document.body.style.removeProperty("overflow");
    };
  }, []);

  function openModal() {
    const dialog = dialogRef.current;
    if (!dialog) return;
    document.body.style.overflow = "hidden";
    dialog.showModal();
  }

  return (
    <>
      <button type="button" className={className} onClick={openModal}>
        {children}
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="fixed inset-0 z-[100] m-auto w-[min(100%-1.5rem,36rem)] max-h-[min(88vh,42rem)] rounded-[0.35rem] border border-panel-border bg-[rgba(8,12,18,0.98)] p-0 text-ink shadow-[0_20px_60px_rgba(0,0,0,0.55)] open:flex open:flex-col backdrop:bg-black/70 backdrop:backdrop-blur-[2px]"
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <div className="flex min-h-0 flex-1 flex-col">
          <header className="flex shrink-0 items-start justify-between gap-3 border-b border-panel-border px-5 py-4">
            <div className="min-w-0">
              <h2 id={titleId} className="m-0 text-[1.25rem] font-bold">
                {fields.title}
              </h2>
              {fields.subtitle ? (
                <p className="m-0 mt-1 text-sm text-muted">{fields.subtitle}</p>
              ) : null}
              {fields.period ? (
                <p className="m-0 mt-1 text-sm text-accent">{fields.period}</p>
              ) : null}
              {meta.length > 0 ? (
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {meta.map((item) => (
                    <MetaChip key={item}>{item}</MetaChip>
                  ))}
                </div>
              ) : null}
            </div>
            <form method="dialog">
              <button
                type="submit"
                className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-[0.35rem] border border-panel-border bg-transparent text-muted hover:border-accent hover:text-ink"
                aria-label="Close"
              >
                <X className="h-4 w-4" aria-hidden={true} />
              </button>
            </form>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
            {fields.summary ? (
              <p className="m-0 mb-4 text-[0.95rem] leading-relaxed text-muted">
                {fields.summary}
              </p>
            ) : null}

            {achievements.length > 0 ? (
              <section className="mb-4">
                <h3 className="mb-2 text-sm font-bold tracking-wide text-ink">
                  Achievements
                </h3>
                <ul className="m-0 list-disc space-y-2 pl-5 text-[0.92rem] text-muted">
                  {achievements.map((item) => (
                    <li key={item.text}>
                      {item.link?.trim() ? (
                        <a
                          href={item.link.trim()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-[#7ad4dc]"
                          onClick={(event) => event.stopPropagation()}
                        >
                          {item.text}
                        </a>
                      ) : (
                        item.text
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {tags.length > 0 ? (
              <section className="mb-4">
                <h3 className="mb-2 text-sm font-bold tracking-wide text-ink">
                  {fields.tagsLabel ?? "Stack"}
                </h3>
                <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                  {tags.map((item) => (
                    <li
                      key={item}
                      className="rounded-[0.35rem] border border-panel-border px-2.5 py-1 text-sm text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {notes ? (
              <section className="mb-2">
                <h3 className="mb-2 text-sm font-bold tracking-wide text-ink">
                  Notes
                </h3>
                <p className="m-0 whitespace-pre-wrap text-[0.92rem] text-muted">
                  {notes}
                </p>
              </section>
            ) : null}
          </div>

          {links.length > 0 ? (
            <footer className="flex shrink-0 flex-wrap gap-1 border-t border-panel-border px-5 py-3">
              {links.map((item) => (
                <a
                  key={`${item.label}-${item.href}`}
                  className={`${btnAccent} inline-block`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  {item.label}
                </a>
              ))}
            </footer>
          ) : null}
        </div>
      </dialog>
    </>
  );
}
