/** Mirrors next.config.ts basePath for raw <a>/<img> hrefs. */
export const basePath =
  process.env.NODE_ENV === "production" ? "/work" : "";

export function withBase(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
