import type { Metadata } from "next";
import {
  HomeCommitments,
  HomeHero,
  HomeNewsTeaser,
  HomeProductsBento,
  HomeSolutionsZigzag,
  HomeStats,
} from "@/components/home/home-sections";
import { company, home } from "@/content/site";
import { picsum } from "@/lib/picsum";

const ogImageUrl = picsum("ics-og-cover-2026", 1200, 630, { blur: 1 });

export const metadata: Metadata = {
  title: home.hero.title,
  description: home.hero.tagline,
  keywords: [
    "ICS",
    company.intlName,
    "an ninh mạng",
    "AI SOC",
    "VietGuard",
    "CSA Endpoint",
    "bảo mật điểm cuối",
    "nhà máy thông minh",
    "tòa nhà thông minh",
    "tuân thủ ngân hàng",
    "Thông tư 77/2025",
    "ISO 27001",
  ],
  openGraph: {
    title: home.hero.title,
    description: home.hero.tagline,
    url: "/",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${company.brand} — ${home.hero.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: home.hero.title,
    description: home.hero.tagline,
    images: [ogImageUrl],
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeProductsBento />
      <HomeSolutionsZigzag />
      <HomeCommitments />
      <HomeNewsTeaser />
    </>
  );
}
