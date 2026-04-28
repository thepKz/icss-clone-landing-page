import Link from "next/link";
import {
  ChatCircle,
  EnvelopeSimple,
  FacebookLogo,
  Phone,
  YoutubeLogo,
} from "@phosphor-icons/react/ssr";
import {
  company,
  navFooterMeta,
  navFooterProducts,
  navFooterSolutions,
  type NavItem,
} from "@/content/site";

const ease = "transition-[color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]";

const linkMuted =
  `${ease} text-stone-600 hover:text-teal-900 active:scale-[0.99] dark:text-zinc-300 dark:hover:text-cyan-300`;

function FooterNavLink({ item, className }: { item: NavItem; className: string }) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  );
}

export function SiteFooter() {
  const telHotline = `tel:${company.hotline.replace(/\./g, "")}`;

  return (
    <footer className="relative border-t border-stone-300/80 bg-white text-stone-900 dark:border-white/[0.08] dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-12">
          <div className="flex flex-col justify-between gap-10 lg:col-span-5">
            <div>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-teal-900/25 bg-stone-100/80 text-lg font-semibold tracking-tight text-teal-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] dark:border-cyan-500/20 dark:bg-zinc-900/60 dark:text-cyan-200"
                  aria-hidden
                >
                  ICS
                </div>
                <div className="min-w-0 space-y-3">
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-stone-500 dark:text-zinc-400">
                    {company.intlName}
                  </p>
                  <p className="text-base font-semibold leading-snug tracking-tight text-stone-900 dark:text-zinc-50">
                    {company.legalName}
                  </p>
                  <p className="max-w-md text-sm leading-relaxed text-stone-600 dark:text-zinc-300">
                    Đăng ký nhận thông tin về an ninh mạng và các giải pháp công nghệ phù hợp doanh nghiệp.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <a
                  href={company.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-400/45 bg-stone-100/60 text-stone-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] hover:border-teal-800/50 hover:text-teal-900 active:scale-[0.96] dark:border-zinc-600 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-cyan-500/40 dark:hover:text-cyan-200"
                  aria-label="Facebook"
                >
                  <FacebookLogo className="h-5 w-5" weight="regular" aria-hidden />
                </a>
                <a
                  href={company.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-400/45 bg-stone-100/60 text-stone-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] hover:border-teal-800/50 hover:text-teal-900 active:scale-[0.96] dark:border-zinc-600 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-cyan-500/40 dark:hover:text-cyan-200"
                  aria-label="YouTube"
                >
                  <YoutubeLogo className="h-5 w-5" weight="regular" aria-hidden />
                </a>
                <a
                  href={company.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-400/45 bg-stone-100/60 text-stone-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] hover:border-teal-800/50 hover:text-teal-900 active:scale-[0.96] dark:border-zinc-600 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-cyan-500/40 dark:hover:text-cyan-200"
                  aria-label={`Zalo ${company.zalo}`}
                >
                  <ChatCircle className="h-5 w-5" weight="regular" aria-hidden />
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-400/45 bg-stone-100/60 text-stone-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] hover:border-teal-800/50 hover:text-teal-900 active:scale-[0.96] dark:border-zinc-600 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-cyan-500/40 dark:hover:text-cyan-200"
                  aria-label={`Email ${company.email}`}
                >
                  <EnvelopeSimple className="h-5 w-5" weight="regular" aria-hidden />
                </a>
                <a
                  href={telHotline}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-400/45 bg-stone-100/60 text-stone-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] hover:border-teal-800/50 hover:text-teal-900 active:scale-[0.96] dark:border-zinc-600 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-cyan-500/40 dark:hover:text-cyan-200"
                  aria-label={`Gọi ${company.hotline}`}
                >
                  <Phone className="h-5 w-5" weight="regular" aria-hidden />
                </a>
              </div>
            </div>

            <div className="space-y-2 border-l-2 border-teal-800/35 pl-4 dark:border-cyan-500/35">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone-500 dark:text-zinc-400">
                Văn phòng
              </p>
              <p className="text-sm leading-relaxed text-stone-700 dark:text-zinc-300">
                {company.office}
              </p>
              <p className="font-mono text-xs tabular-nums text-stone-500 dark:text-zinc-400">
                MST {company.mst}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2 lg:gap-x-12">
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500 dark:text-zinc-400">
                Sản phẩm
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {navFooterProducts.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <FooterNavLink item={item} className={`block ${linkMuted}`} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500 dark:text-zinc-400">
                Tư vấn
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {navFooterSolutions.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <FooterNavLink item={item} className={`block ${linkMuted}`} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-stone-400/40 pt-12 dark:border-white/[0.08]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl space-y-2">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500 dark:text-zinc-400">
                Newsletter
              </h2>
              <p className="text-sm leading-relaxed text-stone-600 dark:text-zinc-300">
                Nhận bản tin kỹ thuật và cập nhật tuân thủ — không spam, có thể hủy đăng ký bất cứ lúc nào.
              </p>
            </div>
            <Link
              href="/lien-he"
              className="inline-flex w-full shrink-0 items-center justify-center rounded-full px-7 py-3 text-sm font-medium sm:w-auto bg-teal-900 text-stone-50 shadow-[0_12px_28px_-12px_rgba(19,78,74,0.22)] hover:bg-teal-950 hover:text-stone-50 active:scale-[0.99] dark:bg-cyan-600 dark:text-zinc-50 dark:shadow-[0_12px_28px_-12px_rgba(34,211,238,0.17)] dark:hover:bg-cyan-400 dark:hover:text-zinc-50"
            >
              Đăng ký qua liên hệ
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 border-t border-dashed border-stone-400/50 pt-10 dark:border-zinc-700/80">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 dark:text-zinc-400">
              Chứng nhận và đối tác
            </span>
            <span
              className="hidden h-4 w-px bg-stone-400/60 sm:inline dark:bg-zinc-600"
              aria-hidden
            />
            <div className="flex flex-wrap gap-2">
              {["ISO 27001", "Oracle Partner", "Verified"].map((label) => (
                <span
                  key={label}
                  className="rounded-md border border-stone-400/45 bg-stone-100/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-stone-700 dark:border-zinc-600 dark:bg-zinc-900/40 dark:text-zinc-300"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-stone-400/40 pt-10 text-xs text-stone-600 dark:border-white/[0.06] dark:text-zinc-400 md:flex-row md:items-center md:justify-between">
          <p className="max-w-prose leading-relaxed">
            © {new Date().getFullYear()} {company.legalName}. Địa chỉ đăng ký: {company.regAddress}
          </p>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end"
            aria-label="Liên kết chân trang"
          >
            {navFooterMeta.map((item) => (
              <FooterNavLink
                key={`${item.href}-${item.label}`}
                item={item}
                className={`${linkMuted} whitespace-nowrap`}
              />
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
