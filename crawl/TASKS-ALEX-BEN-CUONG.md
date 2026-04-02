# Chia task — Alex · Ben · Cường

Tài liệu phối hợp song song trên repo **icss-web**. Tham chiếu route và gap: [`ROUTE-INVENTORY-AND-GAPS.md`](./ROUTE-INVENTORY-AND-GAPS.md).

**Quy ước**

- Mỗi người tự merge/rebase `main` trước khi làm; tránh sửa cùng một file một lúc (đã ghi “sở hữu” ưu tiên).
- Không emoji trong UI/code site (theo rule dự án); nội dung crawl có thể còn emoji — Ben xử lý khi đưa vào `content/`.
- **Cường** = owner UI/motion (file này gắn vai trò đó cho phiên bản Cursor hiện tại).

---

## Alex — Kỹ thuật, SEO kỹ thuật, route & dữ liệu build

**Trọng tâm:** crawl/index, redirect, sitemap, model dữ liệu bài viết, không đụng layout trang trừ khi cần sửa `generateMetadata`.

| # | Task | Artifact / file gợi ý | Ghi chú |
|---|------|------------------------|---------|
| A1 | Rà soát `discovered-routes.json` sau mỗi đổi menu prod | `crawl/discovered-routes.json`, chạy `npm run discover:routes` | Cập nhật `ROUTE-INVENTORY` nếu path mới |
| A2 | Bổ sung redirect còn thiếu (nếu prod có URL mới) | `next.config.ts` | Ví dụ PDF path, shortlink |
| A3 | Thêm `app/sitemap.ts` + `app/robots.ts` (hoặc tương đương App Router) | `app/sitemap.ts`, `app/robots.ts` | Liệt kê route thật + bài viết sau khi Ben ổn định slug |
| A4 | Chiến lược slug bài viết: một nguồn truth | `content/articles.ts` + `generateStaticParams` | Phối hợp Ben: không tự đổi copy nội dung |
| A5 | (Tuỳ chọn) Mirror PDF Gurucul | `public/docs/...` hoặc redirect tuyệt đối | Map từ path trong `discovered-routes.json` |
| A6 | Đảm bảo build pass sau thay đổi route | `npm run build` | CI-ready |

**Tránh:** chỉnh sắc đẹp layout, animation — chuyển Cường.

---

## Ben — Nội dung, trang mới “còn thiếu”, pháp lý, migrate tin

**Trọng tâm:** chữ, cấu trúc trang, SEO on-page (title/meta), map từ `crawl/*.md`.

| # | Task | Artifact / file gợi ý | Ghi chú |
|---|------|------------------------|---------|
| B1 | Quyết định slug canon cho **20** bài production + **4** bài hiện tại | Một bảng trong PR hoặc `crawl/MIGRATION-SLUGS.md` | 301 do Alex cấu hình sau khi bảng chốt |
| B2 | Mở rộng `articles` array + body sạch (bỏ emoji nếu đăng site) | `content/articles.ts` | Có thể trích từ `crawl/articles/*.md` |
| B3 | Trang **`/hoat-dong-xa-hoi`** | `app/hoat-dong-xa-hoi/page.tsx` + content module | Nếu không làm: note 301 trong doc và Alex redirect |
| B4 | Trang **`/khach-hang`** | `app/khach-hang/page.tsx` | Tương tự B3 |
| B5 | **`/chinh-sach-bao-mat`** và **`/dieu-khoan`** (hoặc tên chuẩn bạn chọn) | `app/.../page.tsx` | Thay placeholder footer đang trỏ `lien-he` |
| B6 | (Tuỳ chọn) Trang **`/esg`** đủ dài hoặc section sâu trong `gioi-thieu` | Content + route | Hiện redirect `esg` → `gioi-thieu` |
| B7 | (Tuỳ chọn) Long-form **Pentest** | `app/products/pentest-services/page.tsx` hoặc `/dich-vu/pentest` | Giữ redirect cũ → đích mới |
| B8 | Cập nhật `content/site.ts` cho link menu/footer khớp route mới | `content/site.ts` | Phối hợp Cường nếu đổi label |

**Tránh:** tinh chỉnh motion/visual sâu — chuyển Cường.

---

## Cường — UI/UX, hierarchy, motion (owner)

**Trọng tâm:** taste, layout, component, responsive, micro-interaction; **không** tự ý đổi slug/redirect mà không báo Alex/Ben.

| # | Task | Artifact / file gợi ý | Ghi chú |
|---|------|------------------------|---------|
| C1 | **Header / mega menu**: thêm link tới route Ben tạo (`hoat-dong-xa-hoi`, `khach-hang`, legal) khi có | `components/site-header.tsx`, `content/site.ts` | Chỉ thêm khi Ben chốt URL |
| C2 | **Footer**: thay link placeholder “Chính sách / Điều khoản” trỏ đúng route legal | `components/site-footer.tsx` | Đồng bộ sau B5 |
| C3 | **Home** `/#doi-tac`: đảm bảo id, spacing, contrast, mobile | `components/home/*`, `app/page.tsx` | `min-h` không dùng `h-screen` cho hero toàn trang |
| C4 | **Trang sản phẩm / giải pháp**: một nhịp typographic + CTA rõ (split/bento nhẹ) | `app/products/*`, `app/*-thong-minh/*` | Phosphor, cubic-bezier, không Inter slop |
| C5 | **Articles list + detail**: card grid không “3 cột boring” đều tăm tắp; entry animation gọn | `app/articles/*.tsx`, `components/...` | `whileInView` / stagger; không `scroll` listener |
| C6 | **Motion chỉ `transform`/`opacity`**; blur chỉ fixed/sticky | Toàn site | Guardrails taste-skill |
| C7 | Khớp visual **compliance ticker / hero alert** với voice thương hiệu | `components/home/compliance-ticker.tsx`, `hero-threat-panel.tsx` | Không emoji trong UI |

**Phối hợp**

- Ben giao slug + title cuối → Cường chỉnh card/hero article.
- Alex giao danh sách URL chính thức → Cường không hardcode path sai.

---

## Thứ tự gợi ý (để giảm conflict)

1. **Ben** chốt slug + tạo shell trang mới (B1–B5 skeleton).
2. **Alex** sitemap, redirect bổ sung, `generateStaticParams` theo slugs Ben (A2–A5).
3. **Cường** wire nav/footer + polish layout/motion (C1–C7).

Hoặc song song: Alex A1/A6, Ben B2/body, Cường C4/C6 trên nhánh khác file.

---

## Checklist nhanh theo vai

- [x] Alex: sitemap + robots + build xanh (`app/sitemap.ts`, `app/robots.ts`, `lib/site-canonical.ts`, `lib/indexed-routes.ts`; chạy lại `discover:routes` khi đổi menu prod)
- [ ] Ben: articles đủ + legal pages + hoat-dong/khach-hang quyết định
- [x] Cường: nav/footer + home `/#doi-tac` + articles UI + ticker/hero alert + motion guardrails cơ bản (xem chat: **C4** trang sản phẩm/giải pháp chỉ ở mức baseline có sẵn nếu chưa polish sâu)

---

*File tạo để 3 agent (hoặc 3 người) self-assign; Cường = owner UI trong phiên làm việc Cursor hiện tại.*
