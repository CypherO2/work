"use client";

import { useRef, type ReactNode } from "react";
import { btnAccent } from "@/lib/ui";

export type DetailFields = {
  title: string;
  subtitle?: string;
  summary?: string;
  /** Bullet points. Leave empty strings in JSON as slots to fill later. */
  highlights?: string[];
  /** Tools / subjects. Empty strings are ignored. */
  stack?: string[];
  /** Longer freeform notes. */
  notes?: string;
  link?: { label?: string; href: string };
};

type DetailModalProps = {
  fields: DetailFields;
  children: ReactNode;
  className?: string;
};

function filled(list?: string[]) {
  return (list ?? []).map((item) => item.trim()).filter(Boolean);
}

export default function DetailModal({
  fields,
  children,
  className,
}: DetailModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const highlights = filled(fields.highlights);
  const stack = filled(fields.stack);
  const notes = fields.notes?.trim();

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => dialogRef.current?.showModal()}
      >
        {children}
      </button>
      <dialog
        ref={dialogRef}
        className="m-auto w-[min(100%-2rem,32rem)] rounded-[0.35rem] border border-panel-border bg-[rgba(8,12,18,0.97)] p-0 text-ink open:flex open:flex-col backdrop:bg-black/65"
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <div className="max-h-[min(80vh,36rem)] overflow-y-auto p-5">
          <header className="mb-4 flex items-start justify-between gap-3">
            <div>
              <h2 className="m-0 text-[1.25rem] font-bold">{fields.title}</h2>
              {fields.subtitle ? (
                <p className="m-0 mt-1 text-sm text-muted">{fields.subtitle}</p>
              ) : null}
            </div>
            <form method="dialog">
              <button
                type="submit"
                className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-[0.35rem] border border-panel-border bg-transparent text-lg text-muted hover:text-ink"
                aria-label="Close"
              >
                ×
              </button>
            </form>
          </header>

          {fields.summary ? (
            <p className="m-0 mb-4 text-[0.95rem] text-muted">{fields.summary}</p>
          ) : null}

          {highlights.length > 0 ? (
            <section className="mb-4">
              <h3 className="mb-2 text-sm font-bold tracking-wide text-ink">
                Highlights
              </h3>
              <ul className="m-0 list-disc space-y-1 pl-5 text-[0.92rem] text-muted">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {stack.length > 0 ? (
            <section className="mb-4">
              <h3 className="mb-2 text-sm font-bold tracking-wide text-ink">
                Stack
              </h3>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {stack.map((item) => (
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
            <section className="mb-4">
              <h3 className="mb-2 text-sm font-bold tracking-wide text-ink">
                Notes
              </h3>
              <p className="m-0 whitespace-pre-wrap text-[0.92rem] text-muted">
                {notes}
              </p>
            </section>
          ) : null}

          {fields.link?.href ? (
            <a
              className={`${btnAccent} mt-1 inline-block`}
              href={fields.link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {fields.link.label ?? "Open link"}
            </a>
          ) : null}
        </div>
      </dialog>
    </>
  );
}
