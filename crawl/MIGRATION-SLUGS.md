# Article slug migration — app vs production vs crawl

Tài liệu cho **Ben** (canonical slug trong `content/articles.ts`) và **Alex** (301 trong `next.config.ts` nếu cần).

Cập nhật: khi thêm bài mới, giữ **một** cột slug canonical trong app; URL production cũ map bằng redirect nếu khác.

---

## 1. Bốn bài chỉ có trên app mới (chưa có file `crawl/articles/*.md`)

| App slug (`content/articles.ts`) | Ghi chú parity production |
|----------------------------------|---------------------------|
| `google-chrome-145-ba-lo-hong-high` | Khác cụm slug với bài CVE Chrome trên prod (`phat-hien-nhieu-lo-hong-bao-mat-tren-google-chrome-...`). Cần quyết định 301 hoặc hai bài độc lập. |
| `luat-an-ninh-mang-2026-thuc-thi` | Chủ đề gần `day-manh-thi-hanh-luat-an-ninh-mang-buoc-chuyen-chien-luoc-tu-chinh-sach-sang-thuc-thi` (đã crawl). Không gộp slug tự động. |
| `bao-ve-du-lieu-ca-nhan-2026-ung-dung-di-dong` | Chưa có slug tương ứng trong danh sách 20 prod đã quét. |
| `threat-landscape-ai-vs-ai` | Chưa có slug tương ứng trong danh sách 20 prod đã quét. |

---

## 2. Mười hai slug canonical = tên file trong `crawl/articles/` (đã import vào app)

| Canonical slug | File archive |
|----------------|---------------|
| `ai-tim-lo-hong-nhanh-hon-hacker-claude-phat-hien-22-lo-hong-trong-firefox-chi-trong-2-tuan` | `crawl/articles/ai-tim-lo-hong-nhanh-hon-hacker-claude-phat-hien-22-lo-hong-trong-firefox-chi-trong-2-tuan.md` |
| `canh-bao-nhom-hacker-trung-quoc-tan-cong-ha-tang-trong-yeu-chau-a-suot-nhieu-nam` | `crawl/articles/canh-bao-nhom-hacker-trung-quoc-tan-cong-ha-tang-trong-yeu-chau-a-suot-nhieu-nam.md` |
| `canh-bao-ransomware-leaknet-doi-chien-thuat-tan-cong-qua-website-hop-phap-clickfix` | `crawl/articles/canh-bao-ransomware-leaknet-doi-chien-thuat-tan-cong-qua-website-hop-phap-clickfix.md` |
| `day-manh-thi-hanh-luat-an-ninh-mang-buoc-chuyen-chien-luoc-tu-chinh-sach-sang-thuc-thi` | `crawl/articles/day-manh-thi-hanh-luat-an-ninh-mang-buoc-chuyen-chien-luoc-tu-chinh-sach-sang-thuc-thi.md` |
| `lo-lot-du-lieu-doanh-nghiep-co-the-tra-gia-toi-5-doanh-thu` | `crawl/articles/lo-lot-du-lieu-doanh-nghiep-co-the-tra-gia-toi-5-doanh-thu.md` |
| `microsoft-phat-hanh-ban-cap-nhat-bao-mat-dinh-ky-thang-32026` | `crawl/articles/microsoft-phat-hanh-ban-cap-nhat-bao-mat-dinh-ky-thang-32026.md` |
| `phat-hien-lo-hong-bypass-xac-thuc-trong-pac4j-jwt-cve-2026-29000` | `crawl/articles/phat-hien-lo-hong-bypass-xac-thuc-trong-pac4j-jwt-cve-2026-29000.md` |
| `phat-hien-nhieu-lo-hong-bao-mat-tren-microsoft-edge-cve-2026-3536-cve-2026-3545` | `crawl/articles/phat-hien-nhieu-lo-hong-bao-mat-tren-microsoft-edge-cve-2026-3536-cve-2026-3545.md` |
| `soc-la-gi-trung-tam-dieu-hanh-an-ninh-mang-la-chan-song-con-cua-doanh-nghiep-trong-ky-nguyen-so` | `crawl/articles/soc-la-gi-trung-tam-dieu-hanh-an-ninh-mang-la-chan-song-con-cua-doanh-nghiep-trong-ky-nguyen-so.md` |
| `thong-bao-an-ninh-mang-du-lieu-viet-nam-doi-mat-nguy-co-gia-tang-nghiem-trong` | `crawl/articles/thong-bao-an-ninh-mang-du-lieu-viet-nam-doi-mat-nguy-co-gia-tang-nghiem-trong.md` |
| `thuc-trang-an-ninh-mang-viet-nam-20252026-bao-dong-do-cho-doanh-nghiep` | `crawl/articles/thuc-trang-an-ninh-mang-viet-nam-20252026-bao-dong-do-cho-doanh-nghiep.md` |
| `ung-dung-mobile-cua-doanh-nghiep-co-the-bi-hack-chi-trong-vai-phut` | `crawl/articles/ung-dung-mobile-cua-doanh-nghiep-co-the-bi-hack-chi-trong-vai-phut.md` |

---

## 3. Tám slug production (trong `discovered-routes`) chưa có file crawl — **Alex / crawl tiếp**

| Slug production | Trạng thái |
|-----------------|------------|
| `canh-bao-bao-mat-nhieu-lo-hong-nghiem-trong-trong-san-pham-mozilla-co-the-dan-den-rce-va-leo-thang-dac-quyen` | Chưa có `crawl/articles/*.md` |
| `canh-bao-bao-mat-nhieu-lo-hong-trong-san-pham-vmware-co-the-dan-den-rce-va-leo-thang-dac-quyen` | Chưa có archive |
| `canh-bao-bao-mat-valkey-phat-hien-nhieu-lo-hong-co-the-gay-tan-cong-tu-choi-dich-vu-va-bypass-co-che-bao-mat` | Chưa có archive |
| `cisa-ra-lenh-khan-3-ngay-va-lo-hong-dell-recoverpoint-bi-hacker-trung-quoc-khai-thac-nguy-co-xam-nhap-ha-tang-backup-doanh-nghiep` | Chưa có archive |
| `ivanti-epmm-bi-khai-thac-dien-rong-hacker-cai-webshell-ngu-dong-nguy-co-bi-ban-quyen-truy-cap-cho-ransomware` | Chưa có archive |
| `microsoft-mo-rong-kiem-soat-dlp-de-ngan-microsoft-365-copilot-xu-ly-tai-lieu-nhay-cam` | Chưa có archive |
| `phat-hien-nhieu-lo-hong-bao-mat-tren-google-chrome-cve-2026-3536-cve-2026-3545` | Chưa có archive (trong crawl hiện có bài **Edge** cùng cụm CVE; Chrome là URL riêng trên prod — cần bài riêng hoặc 301 thủ công) |
| `thong-tu-772025tt-nhnn-an-toan-va-bao-mat-cho-viec-cung-cap-dich-vu-truc-tuyen-trong-nganh-ngan-hang` | Chưa có archive |

---

## 4. Checklist redirect (cho Alex)

- [ ] Sau go-live: map từng URL production `/articles/{slug-cũ}` cần giữ traffic → slug trong bảng mục 2 hoặc bài app mục 1.
- [ ] Riêng Chrome: xử lý cặp `google-chrome-145-ba-lo-hong-high` vs `phat-hien-nhieu-lo-hong-bao-mat-tren-google-chrome-cve-2026-3536-cve-2026-3545` để tránh nội dung trùng hoặc 404.
