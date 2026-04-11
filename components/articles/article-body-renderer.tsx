import { Reveal } from "@/components/reveal";
import {
  type ArticleBodyBlock,
  type ArticleBodyItem,
  type ArticleSegment,
  isArticleBodyBlock,
} from "@/content/articles";

const paraJustify =
  "text-justify hyphens-auto text-base leading-[1.75] text-foreground/90 [text-align-last:left]";

function Segment({ segment }: { segment: ArticleSegment }) {
  const { text, mark } = segment;
  if (!mark) return <>{text}</>;
  if (mark === "teal") {
    return (
      <span className="rounded-sm bg-teal-800/[0.11] px-1 py-0.5 font-medium text-teal-900 dark:bg-teal-400/15 dark:text-teal-100">
        {text}
      </span>
    );
  }
  if (mark === "soft") {
    return (
      <span className="border-b border-teal-800/40 pb-px font-medium text-foreground dark:border-teal-400/45">
        {text}
      </span>
    );
  }
  return (
    <span className="font-mono text-[0.92em] font-medium tabular-nums text-zinc-700 dark:text-zinc-300">
      {text}
    </span>
  );
}

function BlockView({ block }: { block: ArticleBodyBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className={`mb-6 ${paraJustify}`}>
          {block.segments.map((s, i) => (
            <Segment key={i} segment={s} />
          ))}
        </p>
      );
    case "callout":
      if (block.tone === "accent") {
        return (
          <aside
            className="mb-8 rounded-xl border border-teal-800/20 bg-teal-800/[0.06] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:border-teal-400/25 dark:bg-teal-400/[0.07]"
            aria-label={block.title ?? "Ghi chú quan trọng"}
          >
            {block.title ? (
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-900 dark:text-teal-200/90">
                {block.title}
              </p>
            ) : null}
            <p className={`mt-2 ${paraJustify}`}>{block.text}</p>
          </aside>
        );
      }
      return (
        <aside
          className="mb-8 rounded-xl border border-zinc-200/90 bg-zinc-50/90 px-5 py-4 dark:border-white/[0.08] dark:bg-zinc-900/50"
          aria-label="Ghi chú"
        >
          {block.title ? (
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              {block.title}
            </p>
          ) : null}
          <p className={`${block.title ? "mt-2" : ""} ${paraJustify} text-[0.98rem]`}>{block.text}</p>
        </aside>
      );
    case "pull":
      return (
        <p
          className={`my-8 border-y border-zinc-200/90 py-5 text-justify hyphens-auto text-[1.05rem] font-semibold leading-snug tracking-tight text-foreground [text-align-last:left] dark:border-white/[0.08] md:text-[1.08rem]`}
        >
          {block.text}
        </p>
      );
    case "list":
      return (
        <div className="mb-8">
          {block.title ? (
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-800 dark:text-teal-300/85">
              {block.title}
            </p>
          ) : null}
          <ul className="space-y-3">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-0.5 shrink-0 font-mono text-xs font-semibold tabular-nums text-teal-800 dark:text-teal-300/80"
                  aria-hidden
                >
                  {block.marker === "number" ? `${i + 1}.` : "—"}
                </span>
                <span className={`min-w-0 flex-1 ${paraJustify}`}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

export function ArticleBody({ items }: { items: ArticleBodyItem[] }) {
  return (
    <>
      {items.map((item, i) => (
        <Reveal key={i} delay={0.04 * i}>
          {isArticleBodyBlock(item) ? (
            <BlockView block={item} />
          ) : (
            <p className={`mb-6 ${paraJustify}`}>{item}</p>
          )}
        </Reveal>
      ))}
    </>
  );
}
