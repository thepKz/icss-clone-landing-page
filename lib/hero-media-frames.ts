import { picsum, type PicsumOptions } from "@/lib/picsum";

export const HERO_MEDIA_FRAMES = [
  { seed: "ics-sec-noc-01", blur: 0 as const, label: "SOC & giám sát" },
  { seed: "ics-sec-datacenter-02", blur: 2 as const, label: "Hạ tầng số" },
  { seed: "ics-sec-plant-03", grayscale: true as const, blur: 1 as const, label: "OT / nhà máy" },
] as const;

export function heroMediaFrameCount() {
  return HERO_MEDIA_FRAMES.length;
}

/**
 * @param preview — ảnh nhỏ hero: bỏ blur để nhìn rõ; vẫn giữ grayscale nếu frame có.
 */
export function heroMediaFrameUrl(
  index: number,
  width: number,
  height: number,
  preview?: boolean
) {
  const f = HERO_MEDIA_FRAMES[index % HERO_MEDIA_FRAMES.length];
  const opts: PicsumOptions = {};
  if (!preview && f.blur >= 1) opts.blur = f.blur;
  if ("grayscale" in f && f.grayscale) opts.grayscale = true;
  return picsum(f.seed, width, height, opts);
}
