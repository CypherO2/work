"use client";

import { btnAccent, panel } from "@/lib/ui";

export type RecRepoProps = {
  repoTitle: string;
  repoDesc: string;
  repoLink: string;
};

export default function ContentCard({
  repoDesc,
  repoLink,
  repoTitle,
}: RecRepoProps) {
  return (
    <article className={`${panel} flex min-h-52 flex-col gap-3`}>
      <h2 className="m-0 line-clamp-2 text-[1.35rem] font-bold">{repoTitle}</h2>
      <p className="m-0 line-clamp-3 flex-1 text-[0.95rem] text-muted">
        {repoDesc}
      </p>
      <a className={`${btnAccent} mt-auto w-fit`} href={repoLink}>
        Github Repository
      </a>
    </article>
  );
}
