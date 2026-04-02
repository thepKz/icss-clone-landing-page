/** Unsplash — SOC / analytics / security ops (semantic match for hero) */
export const HERO_MEDIA_FRAMES = [
  {
    seed: "hero-soc-datacenter",
    label: "Giám sát hạ tầng",
    photoPath: "photo-1558494949-ef010cbdcc31",
  },
  {
    seed: "hero-analytics-dashboard",
    label: "SOC & phân tích",
    photoPath: "photo-1460925895917-afdab827c52f",
  },
  {
    seed: "hero-security-ops",
    label: "Vận hành an ninh",
    photoPath: "photo-1563986768609-322da13575f3",
  },
] as const;

export function heroMediaFrameCount() {
  return HERO_MEDIA_FRAMES.length;
}

export function heroMediaFrameUrl(index: number, width: number, height: number) {
  const f = HERO_MEDIA_FRAMES[index % HERO_MEDIA_FRAMES.length];
  return `https://images.unsplash.com/${f.photoPath}?auto=format&fit=crop&w=${width}&h=${height}&q=82`;
}
