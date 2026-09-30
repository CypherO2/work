"use client";

import { panel } from "@/lib/ui";

export type QuoteCompProps = {
  quoteText: string;
  quoteAuthor: string;
};

export default function QuoteComp({ quoteText, quoteAuthor }: QuoteCompProps) {
  return (
    <blockquote className={`${panel} m-0`}>
      <p className="m-0 text-center text-[clamp(1.1rem,2.2vw,1.45rem)] leading-snug font-bold">
        <span className="text-[1.6em] text-accent-deep" aria-hidden="true">
          &quot;
        </span>
        {quoteText}
        <span className="text-[1.6em] text-accent-deep" aria-hidden="true">
          &quot;
        </span>
        <cite className="mt-4 block text-[0.95rem] font-semibold text-muted not-italic">
          - {quoteAuthor}
        </cite>
      </p>
    </blockquote>
  );
}
