/** Mirrors next.config.ts basePath for raw <a>/<img> hrefs. */
const basePath = process.env.NODE_ENV === "production" ? "/work" : "";

export function withBase(path: string): string {
  if (!path.startsWith("/")) return path;
  const hashAt = path.indexOf("#");
  if (hashAt === -1) return `${basePath}${path}`;
  return `${basePath}${path.slice(0, hashAt)}${path.slice(hashAt)}`;
}
