/** Shared Tailwind class bundles used across views. */
export const page =
  "relative z-[1] mx-auto w-[min(100%-2*clamp(1rem,3vw,1.75rem),70rem)] py-6 pb-12";

export const panel =
  "rounded-[0.35rem] border border-panel-border bg-panel p-5";

export const btn =
  "m-1 inline-block cursor-pointer rounded-[0.35rem] border border-ink bg-transparent px-[1.1rem] py-[0.55rem] font-bold text-ink transition-colors hover:bg-ink hover:text-[var(--on-ink)]";

export const btnAccent =
  "m-1 inline-block cursor-pointer rounded-[0.35rem] border border-accent-deep bg-transparent px-[1.1rem] py-[0.55rem] font-bold text-accent transition-colors hover:bg-accent-deep hover:text-white";

export const masonry =
  "columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:w-full [&>*]:break-inside-avoid";

/** Equal-height project cards. Prefer this over masonry for text cards. */
export const cardGrid =
  "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 [&>*]:h-full";

export const cardInteractive =
  "rounded-[0.35rem] border border-panel-border bg-panel p-5 text-left transition-[border-color,background-color,transform] hover:border-accent hover:bg-[var(--panel-hover)] focus-visible:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export const dialogShell =
  "fixed inset-0 z-[100] m-auto rounded-[0.35rem] border border-panel-border bg-[var(--surface-overlay)] p-0 text-ink shadow-[0_20px_60px_rgba(0,0,0,0.35)] open:flex open:flex-col backdrop:bg-black/55 backdrop:backdrop-blur-[2px]";

export const pageTitle =
  "mb-5 text-center text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-wide text-ink";

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
