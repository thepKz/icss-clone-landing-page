"use client";

import Spline from "@splinetool/react-spline";

export function HeroSplineCanvas() {
  return (
    <div className="relative h-[340px] w-full overflow-hidden rounded-[calc(1.65rem-6px)] border border-stone-200/85 bg-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_16px_48px_-36px_rgba(28,25,23,0.18)] dark:border-white/9 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_52px_-38px_rgba(0,0,0,0.45)] md:h-[460px]">
      <Spline
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="[&>canvas]:scale-[1.38] [&>canvas]:origin-center [&>canvas]:bg-transparent!"
      />
    </div>
  );
}
