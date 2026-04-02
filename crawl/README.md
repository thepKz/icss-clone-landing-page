# Crawl archive — icss.com.vn

Thư mục này chứa bản trích nội dung **sau khi trình duyệt render** (Playwright), phục vụ thiết kế lại theo hướng growth + taste.

**Đối chiếu route + những gì còn thiếu (để lên plan từng trang):** xem [`ROUTE-INVENTORY-AND-GAPS.md`](./ROUTE-INVENTORY-AND-GAPS.md).

## Redirect / route map (production → icss-web)

| Trước | Sau |
|-------|-----|
| /articles/articles-list | /articles |
| /products/chatbot | /products/v-ai-agent |
| /ai-soc | /products/ai-soc |
| /products/pentest-services | /lien-he |
| /doi-tac | /doi-tac → client redirect `/#doi-tac` |
| https://csa.icss.com.vn/ | /products/csa-endpoint |
| /esg | /gioi-thieu (URL cũ có thể 404) |

File `products/_legacy-*` và `esg-legacy.md` giữ bản ghi từ URL cũ để đối chiếu.

```bash
npm run discover:routes
npm run crawl:icss
```

(`crawl:icss` đọc `discovered-routes.json` để crawl đủ slug bài viết nếu file đã tồn tại.)

## Giới hạn

- Các file trong `articles/` lấy từ link hiển thị trên `/articles/articles-list` khi chạy crawler (một “trang” danh sách). Để lấy thêm bài, cần mở rộng `scripts/crawl-icss.mjs` (phân trang hoặc nút “xem thêm”).
