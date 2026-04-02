/**
 * Decorative isometric-style backdrop for the hero (section 1).
 * GPU: only transforms on a dedicated layer; respects prefers-reduced-motion.
 */
export function Hero3DBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 [perspective:min(100vw,1280px)] [perspective-origin:55%_38%]">
        <div className="hero-iso-plane absolute left-1/2 top-[46%] h-[220%] w-[220%]" />
      </div>

      <div className="hero-3d-svg-wrap absolute -bottom-[6%] -right-[4%] h-[min(78vh,520px)] w-[min(92vw,680px)] md:-right-[2%]">
        <svg
          className="h-full w-full text-teal-800 opacity-[0.4] dark:text-teal-400 dark:opacity-[0.48]"
          viewBox="0 0 440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
        >
          <defs>
            <linearGradient id="hero3d-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.88" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.38" />
            </linearGradient>
          </defs>
          <g stroke="url(#hero3d-line)" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
            <g transform="translate(268, 48)">
              <path d="M36 0L96 34L96 96L36 130L0 96L0 34Z" />
              <path d="M36 0v68M96 34L36 68M0 34l36 34M36 130L36 68M96 96L36 68M0 96l36-34" />
            </g>
            <g transform="translate(120, 118)" opacity="0.88">
              <path d="M28 0L78 25L78 78L28 102L0 78L0 25Z" />
              <path d="M28 0v56M78 25L28 56M0 25l28 31M28 102L28 56M78 78L28 56M0 78l28-22" />
            </g>
            <g transform="translate(300, 168)" opacity="0.75">
              <path d="M22 0L62 20L62 62L22 82L0 62L0 20Z" />
              <path d="M22 0v44M62 20L22 44M0 20l22 24M22 82L22 44M62 62L22 44M0 62l22-18" />
            </g>
            <path
              opacity="0.45"
              d="M198 138 L268 82 M198 138 L152 178 M268 182 L322 212 M198 230 L142 268"
              stroke="currentColor"
            />
            <g transform="translate(32, 195)" opacity="0.62">
              <path d="M24 0L68 22L68 68L24 90L0 68L0 22Z" />
              <path d="M24 0v50M68 22L24 50M0 22l24 28M24 90L24 50M68 68L24 50M0 68l24-18" />
            </g>
          </g>
        </svg>
      </div>

      <div
        className="hero-3d-shimmer pointer-events-none absolute inset-0 opacity-[0.38] dark:opacity-[0.3]"
        aria-hidden
      />
    </div>
  );
}
