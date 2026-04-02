# Route inventory & gaps — icss.com.vn vs icss-web

Tài liệu để lên plan từng trang: **route production**, **route/redirect trong repo hiện tại**, và **những gì vẫn thiếu hoặc chỉ mới đạt parity một phần**.

Cập nhật: tổng hợp từ cấu trúc `app/` + `next.config.ts` + `crawl/` + bản quét gần nhất **`crawl/discovered-routes.json`** (chạy `npm run discover:routes`).  
Quét lại khi đổi menu production: diff JSON mới với bảng dưới.  
**SEO kỹ thuật:** site mới có `app/sitemap.ts` + `app/robots.ts`; danh sách path tĩnh gợi ý trong `lib/indexed-routes.ts` (đồng bộ khi thêm `app/**/page.tsx`).

---

## 1. Route “chính” đã có trong icss-web (first-class)

Các URL sau được implement trực tiếp bằng `app/**/page.tsx` (không chỉ redirect).

| Route | File |
|-------|------|
| `/` | `app/page.tsx` |
| `/gioi-thieu` | `app/gioi-thieu/page.tsx` |
| `/lien-he` | `app/lien-he/page.tsx` |
| `/tuyen-dung` | `app/tuyen-dung/page.tsx` |
| `/articles` | `app/articles/page.tsx` |
| `/articles/[slug]` | `app/articles/[slug]/page.tsx` |
| `/nha-may-thong-minh` | `app/nha-may-thong-minh/page.tsx` |
| `/toa-nha-thong-minh` | `app/toa-nha-thong-minh/page.tsx` |
| `/products/v-ai-agent` | `app/products/v-ai-agent/page.tsx` |
| `/products/ai-soc` | `app/products/ai-soc/page.tsx` |
| `/products/vietguard` | `app/products/vietguard/page.tsx` |
| `/products/csa-endpoint` | `app/products/csa-endpoint/page.tsx` |
| `/doi-tac` | `app/doi-tac/page.tsx` (client → `/#doi-tac`) |
| `/hoat-dong-xa-hoi` | `app/hoat-dong-xa-hoi/page.tsx` |
| `/khach-hang` | `app/khach-hang/page.tsx` |
| `/chinh-sach-bao-mat` | `app/chinh-sach-bao-mat/page.tsx` |
| `/dieu-khoan` | `app/dieu-khoan/page.tsx` |

---

## 2. Route production lệch path — đã xử lý bằng redirect / alias

Cấu hình trong `next.config.ts` (301):

| Production | icss-web |
|------------|----------|
| `/articles/articles-list` | `/articles` |
| `/products/chatbot` | `/products/v-ai-agent` |
| `/ai-soc` | `/products/ai-soc` |
| `/esg` | `/gioi-thieu` |
| `/products/pentest-services` | `/lien-he` |

`/doi-tac`: **không** dùng hash trong `redirects` (hạn chế host); có route `app/doi-tac` chuyển client sang `/#doi-tac`.

---

## 3. Route production xuất hiện sau quét link — còn gap Asset / redirect

Đọc từ `discovered-routes.json` (lần chạy gần nhất). **`/hoat-dong-xa-hoi`**, **`/khach-hang`** đã có page trong `app/` (parity route).

| Path production | Ghi chú |
|------------------|---------|
| `/AI SOC/Gurucul Workshop Walkthrough.pdf` (trong JSON: `/AI%20SOC/Gurucul%20Workshop%20Walkthrough.pdf`) | Tài liệu tĩnh: **chưa mirror** trong `public/`. Tuỳ chọn A5: đặt `public/docs/...` + link nội bộ, hoặc redirect 302 tuyệt đối tới URL file nơi host tài liệu + cập nhật CTA AI SOC. |

Nếu path **đã bỏ** trên bản thiết kế mới: ghi rõ trong plan & dùng **301** về trang gần nhất để không 404.

---

## 4. Satellite (không phải path trong app nhưng liên quan SEO / menu cũ)

| URL | Vai trò | icss-web |
|-----|---------|----------|
| `https://csa.icss.com.vn/` | Landing/product CSA riêng subdomain | Nội dung tham chiếu: `crawl/products/csa-endpoint.md`; route app: `/products/csa-endpoint` |
| `https://oraclecloud.vn/` | Đối tác / ngoài | Link ngoài trong `content/site.ts` |
| `https://smartdashboard.vn/` | Sản phẩm liên quan | Link ngoài trong `content/site.ts` |

---

## 5. Tin tức — lệch slug giữa production, crawl archive, và app

### 5.1 Slug đang dùng trong app (`content/articles.ts`)

Site mới đang dùng **4 bài**, slug hoàn toàn **khác** với bài đã crawl từ production:

- `google-chrome-145-ba-lo-hong-high`
- `luat-an-ninh-mang-2026-thuc-thi`
- `bao-ve-du-lieu-ca-nhan-2026-ung-dung-di-dong`
- `threat-landscape-ai-vs-ai`

→ **Gap (nội dung & SEO):** chưa có parity bài viết với URL cũ trên icss.com.vn. Khi go-live, cần quyết định: **301 từng slug cũ → slug mới**, hoặc **giữ slug cũ** và import body từ `crawl/articles/*.md`.

### 5.2 Slug bài viết trên production (đủ 20 bài — từ `discovered-routes.json`)

Toàn bộ slug (trừ `articles-list`) đã lộ trong graph link sau quét:

`ai-tim-lo-hong-nhanh-hon-hacker-claude-phat-hien-22-lo-hong-trong-firefox-chi-trong-2-tuan`, `canh-bao-bao-mat-nhieu-lo-hong-nghiem-trong-trong-san-pham-mozilla-co-the-dan-den-rce-va-leo-thang-dac-quyen`, `canh-bao-bao-mat-nhieu-lo-hong-trong-san-pham-vmware-co-the-dan-den-rce-va-leo-thang-dac-quyen`, `canh-bao-bao-mat-valkey-phat-hien-nhieu-lo-hong-co-the-gay-tan-cong-tu-choi-dich-vu-va-bypass-co-che-bao-mat`, `canh-bao-nhom-hacker-trung-quoc-tan-cong-ha-tang-trong-yeu-chau-a-suot-nhieu-nam`, `canh-bao-ransomware-leaknet-doi-chien-thuat-tan-cong-qua-website-hop-phap-clickfix`, `cisa-ra-lenh-khan-3-ngay-va-lo-hong-dell-recoverpoint-bi-hacker-trung-quoc-khai-thac-nguy-co-xam-nhap-ha-tang-backup-doanh-nghiep`, `day-manh-thi-hanh-luat-an-ninh-mang-buoc-chuyen-chien-luoc-tu-chinh-sach-sang-thuc-thi`, `ivanti-epmm-bi-khai-thac-dien-rong-hacker-cai-webshell-ngu-dong-nguy-co-bi-ban-quyen-truy-cap-cho-ransomware`, `lo-lot-du-lieu-doanh-nghiep-co-the-tra-gia-toi-5-doanh-thu`, `microsoft-mo-rong-kiem-soat-dlp-de-ngan-microsoft-365-copilot-xu-ly-tai-lieu-nhay-cam`, `microsoft-phat-hanh-ban-cap-nhat-bao-mat-dinh-ky-thang-32026`, `phat-hien-lo-hong-bypass-xac-thuc-trong-pac4j-jwt-cve-2026-29000`, `phat-hien-nhieu-lo-hong-bao-mat-tren-google-chrome-cve-2026-3536-cve-2026-3545`, `phat-hien-nhieu-lo-hong-bao-mat-tren-microsoft-edge-cve-2026-3536-cve-2026-3545`, `soc-la-gi-trung-tam-dieu-hanh-an-ninh-mang-la-chan-song-con-cua-doanh-nghiep-trong-ky-nguyen-so`, `thong-bao-an-ninh-mang-du-lieu-viet-nam-doi-mat-nguy-co-gia-tang-nghiem-trong`, `thong-tu-772025tt-nhnn-an-toan-va-bao-mat-cho-viec-cung-cap-dich-vu-truc-tuyen-trong-nganh-ngan-hang`, `thuc-trang-an-ninh-mang-viet-nam-20252026-bao-dong-do-cho-doanh-nghiep`, `ung-dung-mobile-cua-doanh-nghiep-co-the-bi-hack-chi-trong-vai-phut`.

### 5.3 Slug đã archive trong `crawl/articles/` (chạy `crawl:icss` một lần — chưa đủ 20 file)

Hiện có **12** file `.md` (tên file = slug production):

1. `ai-tim-lo-hong-nhanh-hon-hacker-claude-phat-hien-22-lo-hong-trong-firefox-chi-trong-2-tuan`
2. `canh-bao-nhom-hacker-trung-quoc-tan-cong-ha-tang-trong-yeu-chau-a-suot-nhieu-nam`
3. `canh-bao-ransomware-leaknet-doi-chien-thuat-tan-cong-qua-website-hop-phap-clickfix`
4. `day-manh-thi-hanh-luat-an-ninh-mang-buoc-chuyen-chien-luoc-tu-chinh-sach-sang-thuc-thi`
5. `lo-lot-du-lieu-doanh-nghiep-co-the-tra-gia-toi-5-doanh-thu`
6. `microsoft-phat-hanh-ban-cap-nhat-bao-mat-dinh-ky-thang-32026`
7. `phat-hien-lo-hong-bypass-xac-thuc-trong-pac4j-jwt-cve-2026-29000`
8. `phat-hien-nhieu-lo-hong-bao-mat-tren-microsoft-edge-cve-2026-3536-cve-2026-3545`
9. `soc-la-gi-trung-tam-dieu-hanh-an-ninh-mang-la-chan-song-con-cua-doanh-nghiep-trong-ky-nguyen-so`
10. `thong-bao-an-ninh-mang-du-lieu-viet-nam-doi-mat-nguy-co-gia-tang-nghiem-trong`
11. `thuc-trang-an-ninh-mang-viet-nam-20252026-bao-dong-do-cho-doanh-nghiep`
12. `ung-dung-mobile-cua-doanh-nghiep-co-the-bi-hack-chi-trong-vai-phut`

### 5.4 Slug có trên production nhưng **chưa có** file `crawl/articles/{slug}.md` (8 bài — cần chạy lại crawl hoặc seed đủ)

So với §5.2, các slug sau **chưa** được ghi vào `crawl/articles/` trong lần crawl trước:

- `canh-bao-bao-mat-nhieu-lo-hong-nghiem-trong-trong-san-pham-mozilla-co-the-dan-den-rce-va-leo-thang-dac-quyen`
- `canh-bao-bao-mat-nhieu-lo-hong-trong-san-pham-vmware-co-the-dan-den-rce-va-leo-thang-dac-quyen`
- `canh-bao-bao-mat-valkey-phat-hien-nhieu-lo-hong-co-the-gay-tan-cong-tu-choi-dich-vu-va-bypass-co-che-bao-mat`
- `cisa-ra-lenh-khan-3-ngay-va-lo-hong-dell-recoverpoint-bi-hacker-trung-quoc-khai-thac-nguy-co-xam-nhap-ha-tang-backup-doanh-nghiep`
- `ivanti-epmm-bi-khai-thac-dien-rong-hacker-cai-webshell-ngu-dong-nguy-co-bi-ban-quyen-truy-cap-cho-ransomware`
- `microsoft-mo-rong-kiem-soat-dlp-de-ngan-microsoft-365-copilot-xu-ly-tai-lieu-nhay-cam`
- `phat-hien-nhieu-lo-hong-bao-mat-tren-google-chrome-cve-2026-3536-cve-2026-3545`
- `thong-tu-772025tt-nhnn-an-toan-va-bao-mat-cho-viec-cung-cap-dich-vu-truc-tuyen-trong-nganh-ngan-hang`

**Việc cần làm:** chỉnh `scripts/crawl-icss.mjs` đọc `articleSlugs` từ `discovered-routes.json` rồi crawl từng bài (hoặc chạy tay `npm run crawl:icss` sau khi merge logic đó).

---

## 6. Checklist “bạn còn thiếu / chưa hoàn chỉnh” (ghi nhận cho plan)

Dùng làm backlog khi lên plan từng trang.

| # | Hạng mục | Trạng thái | Ghi chú |
|---|----------|------------|---------|
| 1 | **Parity URL `/esg`** | Redirect → `/gioi-thieu` | Không có trang ESG riêng; nếu marketing cần URL riêng + nội dung dài, cân nhắc `app/esg/page.tsx` hoặc section chuyên sâu trong giới thiệu. |
| 2 | **Parity `/ai-soc`, `/products/chatbot`, `articles-list`, `pentest`** | Đã redirect | OK cho backlink; không có trang HTML riêng trừ đích redirect. |
| 3 | **Landing Pentest** | Gom vào `/lien-he` | Thiếu trang đích chuyên biệt nếu team sales cần `/products/pentest-services` dạng long-form (hiện chỉ form liên hệ). |
| 4 | **Đối tác** | `/doi-tac` → `/#doi-tac` | Không có route đối tác độc lập có nội dung scroll; chỉ section trên home. |
| 5 | **CSA** | Path app OK; prod có subdomain | Đảm bảo menu/footer **cùng một canonical** (đã hướng về `/products/csa-endpoint` trong site mới). |
| 6 | **Chính sách bảo mật / Điều khoản** | Đã có route `app/chinh-sach-bao-mat`, `app/dieu-khoan` | Kiểm tra footer/link nội dung khớp; placeholder copy có thể cần Ben legal pass. |
| 7 | **Tìm kiếm site** (nếu prod có `/search` hoặc modal search) | Chưa thấy trong app | Cần xác nhận trên production có route search hay chỉ UI; nếu có URL đánh index → bổ sung redirect hoặc feature. |
| 8 | **Sitemap / `robots.txt` production** | **`app/sitemap.ts` + `app/robots.ts`** | `sitemap.xml` gồm path tĩnh (`lib/indexed-routes.ts`) + `/articles/{slug}` từ `content/articles.ts`. |
| 9 | **Đồng bộ tin: slug + nội dung** | `content/articles.ts` ≠ production | Quyết định chiến lược: migrate slug cũ, hay bài mới + redirect; import body từ `crawl/articles/*.md` + biên tập lại (bỏ emoji/slop nếu cần). |
| 10 | **Crawl đủ toàn bộ bài** | 12 file `.md` vs 20 slug (§5.2–5.4) | Đồng bộ crawler với `discovered-routes.json` hoặc crawl lần lượt 8 slug thiếu. |
| 11 | **Trang `/hoat-dong-xa-hoi`, `/khach-hang`** | Đã có `app/hoat-dong-xa-hoi`, `app/khach-hang` | Tiếp tục chỉnh nội dung / menu (Ben + Cường). |
| 12 | **PDF Gurucul workshop** | Chưa mirror | Đặt trong `public/` hoặc link ngoài + cập nhật CTA trong trang AI SOC. |

---

## 7. Lệnh tái quét

```bash
npm run discover:routes
npm run crawl:icss
```

Sau đó cập nhật lại §5–§6 nếu số slug hoặc path trong `discovered-routes.json` thay đổi.

**Ghi chú:** `discover:routes` có thể báo HTTP 404 cho một số seed **chỉ tồn tại trên site mới** (ví dụ `/products/v-ai-agent`, `/products/csa-endpoint`, `/chinh-sach-bao-mat`, `/dieu-khoan`) — điều đó không chặn quét; path vẫn có thể xuất hiện qua link crawl từ trang khác.

---

## 8. Quick reference — route map một dòng

**icss-web là canonical:** `/`, `/gioi-thieu`, `/lien-he`, `/tuyen-dung`, `/articles`, `/articles/{slug}`, `/nha-may-thong-minh`, `/toa-nha-thong-minh`, `/products/v-ai-agent`, `/products/ai-soc`, `/products/vietguard`, `/products/csa-endpoint`, `/doi-tac` (UI → `/#doi-tac`), `/hoat-dong-xa-hoi`, `/khach-hang`, `/chinh-sach-bao-mat`, `/dieu-khoan`.

**Production alias đã bridge:** `articles-list`, `chatbot`, `ai-soc`, `esg`, `pentest-services` → như bảng §2.

**Còn backlog đáng chú ý:** (tuỳ chọn) `/esg` nội dung đầy đủ (hiện redirect → `/gioi-thieu`), (tuỳ chọn) pentest landing thay vì `/lien-he`, parity **20** slug tin + dữ liệu trong `content/articles.ts`, file PDF workshop, search (nếu tồn tại trên prod).
