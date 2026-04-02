import type { Metadata } from "next";
import { Be_Vietnam_Pro, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ScrollToTopButton, ScrollToTopOnRoute } from "@/components/scroll-to-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_CANONICAL_ORIGIN } from "@/lib/site-canonical";
import { THEME_STORAGE_KEY } from "@/lib/theme-constants";

const themeBootScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var r=document.documentElement;r.classList.remove("light","dark");r.classList.add(t==="light"?"light":"dark");}catch(e){document.documentElement.classList.add("dark");}})();`;

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CANONICAL_ORIGIN),
  title: {
    default: "ICS — An ninh mạng quốc tế",
    template: "%s | ICS",
  },
  description:
    "Công ty Cổ phần An ninh mạng Quốc tế ICS: AI SOC, bảo mật điểm cuối, nhà máy và tòa nhà thông minh, VietGuard.",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "ICS",
    title: "ICS — Giải pháp an ninh mạng toàn diện",
    description:
      "Bảo vệ doanh nghiệp với AI SOC, CSA Endpoint, Smart Factory và Smart Building Security.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${beVietnam.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-background font-sans text-foreground">
        <Script id="ics-theme-boot" strategy="beforeInteractive">
          {themeBootScript}
        </Script>
        <ThemeProvider>
          <ScrollToTopOnRoute />
          <ScrollToTopButton />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cyan-500/20 focus:px-4 focus:py-2 focus:text-sm focus:text-zinc-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cyan-600/50 dark:focus:bg-cyan-400/20 dark:focus:text-zinc-50 dark:focus:outline-cyan-400/60"
          >
            Bỏ qua nội dung
          </a>
          <div className="relative z-[2] flex min-h-full flex-1 flex-col">
            <SiteHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
