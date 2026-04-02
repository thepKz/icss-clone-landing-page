export type PicsumOptions = {
  grayscale?: boolean;
  blur?: number;
};

/**
 * Stable placeholder images via Picsum seeds.
 * @see https://picsum.photos/
 */
export function picsum(
  seed: string,
  width: number,
  height: number,
  opts?: PicsumOptions
): string {
  const base = `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
  const params = new URLSearchParams();
  if (opts?.grayscale) params.set("grayscale", "");
  if (opts?.blur != null && opts.blur >= 1 && opts.blur <= 10) {
    params.set("blur", String(opts.blur));
  }
  const q = params.toString();
  return q ? `${base}?${q}` : base;
}
