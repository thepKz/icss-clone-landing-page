/**
 * 301 map: URL bài viết trên production (slug/path cũ) → slug canonical trong `content/articles.ts`.
 * B6 (`/esg`), B7 (`/products/pentest-services`) giữ trong `next.config.ts` — không đụng ở đây.
 * Cập nhật khi Ben thêm bài mới và muốn thay đích tốt hơn.
 */
export const legacyArticleRedirects: {
  source: string;
  destination: string;
  permanent: boolean;
}[] = [
  {
    source:
      "/articles/google-phat-hanh-chrome-145-va-3-lo-hong-high-doanh-nghiep-can-cap-nhat-khan-cap",
    destination: "/articles/google-chrome-145-ba-lo-hong-high",
    permanent: true,
  },
  {
    source:
      "/articles/phat-hien-nhieu-lo-hong-bao-mat-tren-google-chrome-cve-2026-3536-cve-2026-3545",
    destination: "/articles/google-chrome-145-ba-lo-hong-high",
    permanent: true,
  },
  {
    source:
      "/articles/canh-bao-bao-mat-nhieu-lo-hong-nghiem-trong-trong-san-pham-mozilla-co-the-dan-den-rce-va-leo-thang-dac-quyen",
    destination:
      "/articles/ai-tim-lo-hong-nhanh-hon-hacker-claude-phat-hien-22-lo-hong-trong-firefox-chi-trong-2-tuan",
    permanent: true,
  },
  {
    source:
      "/articles/canh-bao-bao-mat-nhieu-lo-hong-trong-san-pham-vmware-co-the-dan-den-rce-va-leo-thang-dac-quyen",
    destination: "/articles/thuc-trang-an-ninh-mang-viet-nam-20252026-bao-dong-do-cho-doanh-nghiep",
    permanent: true,
  },
  {
    source:
      "/articles/canh-bao-bao-mat-valkey-phat-hien-nhieu-lo-hong-co-the-gay-tan-cong-tu-choi-dich-vu-va-bypass-co-che-bao-mat",
    destination: "/articles",
    permanent: true,
  },
  {
    source:
      "/articles/cisa-ra-lenh-khan-3-ngay-va-lo-hong-dell-recoverpoint-bi-hacker-trung-quoc-khai-thac-nguy-co-xam-nhap-ha-tang-backup-doanh-nghiep",
    destination:
      "/articles/thong-bao-an-ninh-mang-du-lieu-viet-nam-doi-mat-nguy-co-gia-tang-nghiem-trong",
    permanent: true,
  },
  {
    source:
      "/articles/ivanti-epmm-bi-khai-thac-dien-rong-hacker-cai-webshell-ngu-dong-nguy-co-bi-ban-quyen-truy-cap-cho-ransomware",
    destination:
      "/articles/canh-bao-ransomware-leaknet-doi-chien-thuat-tan-cong-qua-website-hop-phap-clickfix",
    permanent: true,
  },
  {
    source:
      "/articles/microsoft-mo-rong-kiem-soat-dlp-de-ngan-microsoft-365-copilot-xu-ly-tai-lieu-nhay-cam",
    destination:
      "/articles/microsoft-phat-hanh-ban-cap-nhat-bao-mat-dinh-ky-thang-32026",
    permanent: true,
  },
  {
    source:
      "/articles/thong-tu-772025tt-nhnn-an-toan-va-bao-mat-cho-viec-cung-cap-dich-vu-truc-tuyen-trong-nganh-ngan-hang",
    destination: "/articles/luat-an-ninh-mang-2026-thuc-thi",
    permanent: true,
  },
  {
    source:
      "/articles/cuoc-dua-song-ma-chatgpt-vs-gemini-ai-dang-dan-dau-va-cai-gia-moi-truong-thuc-su",
    destination: "/articles/threat-landscape-ai-vs-ai",
    permanent: true,
  },
  {
    source:
      "/articles/xu-huong-thue-ngoai-dich-vu-soc-lua-chon-chien-luoc-cua-96-doanh-nghiep-viet",
    destination:
      "/articles/soc-la-gi-trung-tam-dieu-hanh-an-ninh-mang-la-chan-song-con-cua-doanh-nghiep-trong-ky-nguyen-so",
    permanent: true,
  },
  {
    source:
      "/articles/ics-chinh-thuc-hop-tac-toan-dien-cung-efgh-embed-financial-group-holdings",
    destination: "/doi-tac",
    permanent: true,
  },
];

/** A5: PDF legacy path trên prod — không mirror file; chuyển tuyến tới cùng host canonical. */
export const legacyAssetRedirects: {
  source: string;
  destination: string;
  permanent: boolean;
}[] = [
  {
    source: "/AI%20SOC/Gurucul%20Workshop%20Walkthrough.pdf",
    destination:
      "https://www.icss.com.vn/AI%20SOC/Gurucul%20Workshop%20Walkthrough.pdf",
    permanent: false,
  },
];
