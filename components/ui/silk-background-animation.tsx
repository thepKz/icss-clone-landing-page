"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { useTheme } from "@/components/theme-provider";

type SilkBackgroundAnimationProps = {
  className?: string;
  opacity?: number;
};

// ====== THAM SỐ TÙY CHỈNH (tuỳ chỉnh tại đây) ======
// Bạn có thể chỉnh các biến, màu, step... phía dưới tuỳ ý
// VD: step càng nhỏ animation càng mịn nhưng sẽ tốn CPU hơn
//  - step = 3 (default - ổn cho nền, smooth vừa phải)
//  - colors (thay RGB tuỳ từng mode)
//  - speed, scale, noiseIntensity (ảnh hưởng đến pattern động)
//  - overlayAlpha (depth effect/mờ nền)
//  - internalScale (chất lượng, càng thấp càng tiết kiệm CPU, blur hơn)
// ================================================

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

export const Component = ({
  className = "",
  opacity = 1.0,
}: SilkBackgroundAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const theme = useTheme().theme;
  const isDark = theme === "dark";

  // Nếu muốn giảm/biến đổi opacity tùy theme thì chỉnh chỗ này
  // Light cần thấy được texture (nhưng vẫn không được "xám"), dark giữ lại silk.
  const effectiveOpacity = isDark ? opacity : 0;

  // step càng nhỏ = họa tiết càng mịn (CPU sẽ tăng)
  const step = 3;

  const colors = useMemo(() => {
    // Dark: silk càng sáng thì nhìn nổi, light: silk càng tối thì đỡ chói
    const dark = {
      base: [238, 240, 245] as const,     // RGB chính trên dark mode
      overlayAlpha: 0.22,                 // alpha lớp overlay radial (độ mờ)
    };
    const light = {
      // Light mode: silk read as subtle ink (đừng làm nền bị nâng xám)
      base: [10, 12, 14] as const,
      overlayAlpha: 0.05,
    };
    // => Muốn chỉnh màu thì đổi các giá trị này
    return theme === "dark" ? dark : light;
  }, [theme]);

  useEffect(() => {
    if (!isDark) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let alive = true;

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);

      // internalScale: Tỉ lệ downscale texture (giảm lag khi nền phức tạp)
      const internalScale = 0.55; // <== CHỈNH ở đây nếu cần tăng/giảm chất lượng
      const w = Math.max(320, Math.floor(window.innerWidth * dpr * internalScale));
      const h = Math.max(240, Math.floor(window.innerHeight * dpr * internalScale));
      canvas.width = w;
      canvas.height = h;
    };

    resize();
    window.addEventListener("resize", resize);

    // Tạo noise "ổn định" để grain bề mặt pattern - đổi công thức nếu muốn style khác
    const noise = (x: number, y: number) => {
      const G = 2.71828;
      const rx = G * Math.sin(G * x);
      const ry = G * Math.sin(G * y);
      const v = (rx * ry * (1 + x)) % 1;
      return v < 0 ? v + 1 : v;
    };

    let time = 0;

    const animate = () => {
      if (!alive) return;

      const w = canvas.width;
      const h = canvas.height;

      // Clear first; for light mode we avoid painting a near-white base
      // to prevent washing-out / "xám" look.
      ctx.clearRect(0, 0, w, h);
      if (theme === "dark") {
        const grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, "rgba(7,7,10,1)");
        grad.addColorStop(0.5, "rgba(20,20,24,1)");
        grad.addColorStop(1, "rgba(7,7,10,1)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      // === Các biến động chính cho silk pattern ===
      const img = ctx.createImageData(w, h);
      const data = img.data;
      const baseR = colors.base[0];
      const baseG = colors.base[1];
      const baseB = colors.base[2];

      // TỐC ĐỘ & BIÊN ĐỘ (hiệu ứng động, đổi được)
      const speed = 0.02;         // Tốc độ animation
      const scale = 2;            // Độ rộng dải silk pattern
      const noiseIntensity = 0.7; // Mức random noise phủ trên silk

      for (let x = 0; x < w; x += step) {
        for (let y = 0; y < h; y += step) {
          const u = (x / w) * scale;
          const v = (y / h) * scale;

          const tOffset = speed * time;
          const texX = u;
          const texY = v + 0.03 * Math.sin(8.0 * texX - tOffset);

          const pattern =
            0.6 +
            0.4 *
              Math.sin(
                5.0 *
                  (texX +
                    texY +
                    Math.cos(3.0 * texX + 5.0 * texY) +
                    0.02 * tOffset) +
                  Math.sin(20.0 * (texX + texY - 0.1 * tOffset))
              );

          const rnd = noise(x / w, y / h);
          const intensity = clamp01(pattern - (rnd / 15.0) * noiseIntensity);

          // Contrast tuning:
          // - dark: keep near-black base (micro-contrast)
          // - light: keep subtle dark ink (paper-like)
          const c = clamp01(
            theme === "dark" ? 0.06 + intensity * 0.22 : 0.06 + intensity * 0.18
          );

          const r = Math.floor(baseR * c);
          const g = Math.floor(baseG * c);
          const b = Math.floor(baseB * c);

          // Fill block step*step pixel (giảm lag). Step nhỏ sẽ chuyển block nhỏ hơn
          for (let ox = 0; ox < step; ox++) {
            for (let oy = 0; oy < step; oy++) {
              const px = x + ox;
              const py = y + oy;
              if (px >= w || py >= h) continue;
              const idx = (py * w + px) * 4;
              data[idx] = r;
              data[idx + 1] = g;
              data[idx + 2] = b;
              data[idx + 3] = 255;
            }
          }
        }
      }

      ctx.putImageData(img, 0, 0);

      // Overlay tạo chiều sâu mờ tối ở rìa (radial fade out)
      const overlay = ctx.createRadialGradient(
        w / 2,
        h / 2,
        0,
        w / 2,
        h / 2,
        Math.max(w, h) / 2
      );
      overlay.addColorStop(0, `rgba(0,0,0,${theme === "dark" ? 0.08 : 0.01})`);
      overlay.addColorStop(1, `rgba(0,0,0,${colors.overlayAlpha})`);
      ctx.fillStyle = overlay;
      ctx.fillRect(0, 0, w, h);

      time += 1;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      alive = false;
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [colors.base, colors.overlayAlpha, step, theme, isDark]);

  if (!isDark) {
    // Light mode: trắng tinh, tắt hoàn toàn silk canvas để không bị "xám/nhạt".
    return (
      <div
        className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
        aria-hidden="true"
        style={{ background: "#ffffff" }}
      />
    );
  }

  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}>
      {/* 
        Tùy chỉnh style/opacity ở <canvas> và overlay:
        - opacity (truyền vào prop hoặc chỉnh trực tiếp)
        - background radial overlay phía dưới gradient
        - muốn thêm/bớt lớp, chỉnh phía dưới
      */}
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        aria-hidden="true"
        style={{ opacity: effectiveOpacity }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          opacity: effectiveOpacity,
          background:
            theme === "dark"
              ? "linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0) 38%, rgba(0,0,0,0.35) 100%)"
              : "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.10) 70%, rgba(0,0,0,0.16) 100%)",
        }}
      />
    </div>
  );
};

export default Component;

