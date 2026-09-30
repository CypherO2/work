"use client";

import { btn, panel } from "@/lib/ui";

type BlogCardsProps = {
  image: string;
  title: string;
  description: string;
  link: string;
  tags: readonly string[];
};

export default function BlogCards({
  image,
  title,
  description,
  link,
  tags,
}: BlogCardsProps) {
  return (
    <article className={`${panel} flex min-h-[28rem] flex-col gap-3.5`}>
      <a
        className="group block overflow-hidden rounded-[0.35rem] border border-panel-border"
        href={link}
      >
        <img
          src={image}
          alt=""
          className="block aspect-[4/3] w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
        />
      </a>
      <div className="flex min-h-0 flex-1 flex-col">
        <h2 className="mb-2 truncate text-xl font-bold">{title}</h2>
        <p className="mb-3 line-clamp-3 flex-1 text-muted">{description}</p>
        <div className="mb-3.5 inline-flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              className="inline-block rounded-full bg-accent/15 px-2 py-0.5 text-xs font-bold text-accent"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <a className={`${btn} mt-auto w-fit`} href={link}>
          Read More
        </a>
      </div>
    </article>
  );
}
