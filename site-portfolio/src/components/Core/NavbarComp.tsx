"use client";

import { useEffect, useId, useState } from "react";
import {
  Accessibility,
  Briefcase,
  Code2,
  Home,
  Menu,
  Palette,
  User,
  X,
  type LucideIcon,
} from "lucide-react";
import Logo from "../../assets/SiteIcon.png";
import {
  A11Y_PATH,
  ABOUT_PATH,
  ARTS_PATH,
  CODE_PATH,
  INDEX_PATH,
  WORK_PATH,
} from "../../constants/paths";
import { withBase } from "@/lib/basePath";
import { cx } from "@/lib/ui";

type NavLink = {
  kind: "link";
  label: string;
  href: string;
  icon: LucideIcon;
};

type NavSection = {
  kind: "section";
  label: string;
  items: Array<{ label: string; href: string; icon: LucideIcon }>;
};

type NavItem = NavLink | NavSection;

const NAV_ITEMS: NavItem[] = [
  { kind: "link", label: "Home", href: INDEX_PATH, icon: Home },
  { kind: "link", label: "About me", href: ABOUT_PATH, icon: User },
  { kind: "link", label: "Work", href: WORK_PATH, icon: Briefcase },
  {
    kind: "section",
    label: "Portfolio",
    items: [
      { label: "Art", href: ARTS_PATH, icon: Palette },
      { label: "Projects", href: CODE_PATH, icon: Code2 },
    ],
  },
];

const A11Y_LINK = {
  label: "Accessibility",
  href: A11Y_PATH,
  icon: Accessibility,
} as const;

const linkClass =
  "flex items-center gap-3 rounded-[0.35rem] px-3 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-[rgba(61,184,197,0.12)] hover:text-accent";

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const A11yIcon = A11Y_LINK.icon;

  return (
    <div className="flex h-full min-h-0 flex-col">
      <ul className="m-0 flex list-none flex-col gap-1 p-0">
        {NAV_ITEMS.map((item) => {
          if (item.kind === "link") {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <a
                  className={linkClass}
                  href={withBase(item.href)}
                  onClick={onNavigate}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden={true} />
                  {item.label}
                </a>
              </li>
            );
          }

          return (
            <li key={item.label} className="mt-3">
              <p className="m-0 px-3 pb-1.5 text-[0.7rem] font-bold tracking-wide text-muted uppercase">
                {item.label}
              </p>
              <ul className="m-0 list-none p-0">
                {item.items.map((child) => {
                  const Icon = child.icon;
                  return (
                    <li key={child.href}>
                      <a
                        className={linkClass}
                        href={withBase(child.href)}
                        onClick={onNavigate}
                      >
                        <Icon className="h-4 w-4 shrink-0" aria-hidden={true} />
                        {child.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto border-t border-panel-border pt-3">
        <a
          className={linkClass}
          href={withBase(A11Y_LINK.href)}
          onClick={onNavigate}
        >
          <A11yIcon className="h-4 w-4 shrink-0" aria-hidden={true} />
          {A11Y_LINK.label}
        </a>
      </div>
    </div>
  );
}

export default function NavComp() {
  const [open, setOpen] = useState(false);
  const drawerId = useId();

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-40 flex min-h-14 items-center gap-3 border-b border-panel-border bg-[var(--surface-chrome)] px-[clamp(1rem,3vw,1.75rem)] backdrop-blur-[10px] lg:hidden">
        <a href={withBase(INDEX_PATH)} className="shrink-0" onClick={close}>
          <img
            src={Logo.src}
            alt="Cassi Presley site logo"
            className="site-logo block w-9"
          />
        </a>
        <span className="truncate text-sm font-bold text-ink">Cassi Presley</span>
        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[0.35rem] border border-panel-border bg-transparent text-ink hover:border-accent hover:text-accent"
          aria-expanded={open}
          aria-controls={drawerId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden={true} />
          ) : (
            <Menu className="h-5 w-5" aria-hidden={true} />
          )}
        </button>
      </header>

      <aside className="fixed top-0 left-0 z-40 hidden h-dvh w-60 flex-col border-r border-panel-border bg-[var(--surface-sidebar)] backdrop-blur-[12px] lg:flex">
        <div className="flex items-center gap-3 border-b border-panel-border px-4 py-4">
          <a href={withBase(INDEX_PATH)} className="shrink-0">
            <img
              src={Logo.src}
              alt="CJ Presley site logo"
              className="site-logo block w-9"
            />
          </a>
          <div className="min-w-0">
            <p className="m-0 truncate text-sm font-bold text-ink">Cassi Presley</p>
            <p className="m-0 truncate text-xs text-muted">Portfolio</p>
          </div>
        </div>
        <nav className="flex min-h-0 flex-1 flex-col px-3 py-4" aria-label="Site">
          <NavList />
        </nav>
      </aside>

      <div
        className={cx(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close menu"
          className={cx(
            "absolute inset-0 border-0 bg-black/55 transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={close}
        />
        <aside
          id={drawerId}
          className={cx(
            "absolute top-0 left-0 flex h-full w-[min(100%-3rem,17.5rem)] flex-col border-r border-panel-border bg-[var(--surface-drawer)] shadow-[12px_0_40px_rgba(0,0,0,0.25)] transition-transform duration-200 ease-out",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex min-h-14 items-center justify-between border-b border-panel-border px-4">
            <span className="text-sm font-bold text-muted">Menu</span>
            <button
              type="button"
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[0.35rem] border border-panel-border bg-transparent text-ink hover:border-accent hover:text-accent"
              aria-label="Close menu"
              onClick={close}
            >
              <X className="h-5 w-5" aria-hidden={true} />
            </button>
          </div>
          <nav className="flex min-h-0 flex-1 flex-col px-3 py-4" aria-label="Site">
            <NavList onNavigate={close} />
          </nav>
        </aside>
      </div>
    </>
  );
}
