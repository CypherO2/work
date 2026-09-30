"use client";

import { useState } from "react";
import Logo from "../../assets/SiteIcon.png";
import {
  ABOUT_PATH,
  ARTS_PATH,
  BLOG_PATH,
  CODE_PATH,
  ELYSIAN_PATH,
  INDEX_PATH,
} from "../../constants/paths";
import { withBase } from "@/lib/basePath";
import { cx } from "@/lib/ui";

type NavLink = { kind: "link"; label: string; href: string };
type NavGroup = {
  kind: "group";
  label: string;
  items: { label: string; href: string }[];
};
type NavItem = NavLink | NavGroup;

const NAV_ITEMS: NavItem[] = [
  { kind: "link", label: "Home", href: INDEX_PATH },
  { kind: "link", label: "About Me", href: ABOUT_PATH },
  {
    kind: "group",
    label: "My Portfolio",
    items: [
      { label: "My Art", href: ARTS_PATH },
      { label: "My Projects", href: CODE_PATH },
    ],
  },
  {
    kind: "group",
    label: "Extra",
    items: [
      { label: "Articles", href: BLOG_PATH },
      { label: "Elysium", href: ELYSIAN_PATH },
    ],
  },
];

export default function NavComp() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-panel-border bg-[rgba(4,8,14,0.72)] backdrop-blur-[10px]">
      <div className="mx-auto flex min-h-14 w-[min(100%-2*clamp(1rem,3vw,1.75rem),70rem)] items-center gap-4">
        <a href={withBase(INDEX_PATH)}>
          <img
            src={Logo.src}
            alt="CJ Presley site logo"
            className="block w-9"
          />
        </a>
        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[0.35rem] border border-panel-border bg-transparent text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="site-nav-menu"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <i className="fas fa-bars" aria-hidden="true" />
        </button>
        <ul
          id="site-nav-menu"
          className={cx(
            "m-0 w-full list-none gap-1.5 p-0 pb-4 lg:ml-auto lg:flex lg:w-auto lg:items-center lg:gap-3 lg:pb-0",
            open ? "grid" : "hidden lg:flex",
          )}
        >
          {NAV_ITEMS.map((item) => {
            if (item.kind === "link") {
              return (
                <li key={item.href}>
                  <a
                    className="block cursor-pointer px-1.5 py-1.5 font-bold text-ink hover:text-accent"
                    href={withBase(item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            }

            return (
              <li key={item.label} className="relative">
                <details className="group relative">
                  <summary className="block cursor-pointer px-1.5 py-1.5 font-bold text-ink hover:text-accent">
                    {item.label}
                  </summary>
                  <ul className="m-0 list-none py-1.5 pl-3 lg:absolute lg:top-full lg:left-0 lg:min-w-40 lg:rounded-[0.35rem] lg:border lg:border-panel-border lg:bg-[rgba(8,12,18,0.95)] lg:p-2">
                    {item.items.map((child) => (
                      <li key={child.href}>
                        <a
                          className="block py-1.5 font-bold text-muted hover:text-accent"
                          href={withBase(child.href)}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
