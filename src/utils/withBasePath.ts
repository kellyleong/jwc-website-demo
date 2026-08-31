export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;

  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${basePath}${path}`;
}
