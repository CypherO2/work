"use client";

import Link from "next/link";
import { btn } from "@/lib/ui";

export default function MainBanner({
  titleText,
  subtitleText,
  firstButtonText,
  firstRedirect,
  secondButtonText,
  secondRedirect,
}: {
  titleText: string;
  subtitleText: string;
  firstButtonText?: string;
  firstRedirect?: string;
  secondButtonText?: string;
  secondRedirect?: string;
}) {
  return (
    <section className="relative z-[1] grid min-h-[min(70vh,28rem)] place-items-center px-[clamp(1rem,3vw,1.75rem)] py-12 text-center">
      <div>
        <h1 className="mb-3 text-[clamp(2.4rem,7vw,4.2rem)] leading-[1.05] font-bold tracking-wider text-ink">
          {titleText}
        </h1>
        <p className="mb-6 text-[clamp(1rem,2.4vw,1.25rem)] font-semibold text-muted">
          {subtitleText}
        </p>
        {(firstButtonText || secondButtonText) && (
          <div className="flex flex-wrap justify-center gap-1.5">
            {firstButtonText && firstRedirect ? (
              <Link className={btn} href={firstRedirect}>
                {firstButtonText}
              </Link>
            ) : null}
            {secondButtonText && secondRedirect ? (
              <Link className={btn} href={secondRedirect}>
                {secondButtonText}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
