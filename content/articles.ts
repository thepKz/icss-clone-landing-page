export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "google-chrome-145-ba-lo-hong-high",
    title:
      "Google phát hành Chrome 145 vá 3 lỗ hổng High: doanh nghiệp cần cập nhật khẩn cấp",
    excerpt:
      "Bản vá tạm hạn chế chi tiết kỹ thuật; đội vận hành nên ưu tiên rollout có kiểm soát và theo dõi CVE liên quan.",
    date: "2026-02-23",
    readMinutes: 6,
    body: [
      "Google hiện tạm thời hạn chế công bố chi tiết kỹ thuật cho đến khi phần lớn người dùng hoàn tất cập nhật. Với môi trường doanh nghiệp, điều này có nghĩa là bạn cần một quy trình patch nhanh nhưng có kiểm chứng trên nhóm thiết bị pilot trước khi mở rộng.",
      "Khuyến nghị thực thi: ghi nhận phiên bản Chrome/Edge Chromium trên toàn bộ endpoint, ép cập nhật qua chính sách quản trị, và bật cảnh báo khi thiết bị tụt phiên bản quá hai bản minor.",
      "ICS hỗ trợ khách hàng ánh xạ lỗ hổng vào bảng ưu tiên rủi ro, đồng bộ với tầng AI SOC để phát hiện dấu hiệu khai thác sớm trên proxy và log đăng nhập.",
    ],
  },
  {
    slug: "luat-an-ninh-mang-2026-thuc-thi",
    title: "Luật An ninh mạng 2026: chuyển từ khung pháp lý sang thực thi có lịch",
    excerpt:
      "Doanh nghiệp cần rà soát phân loại dữ liệu, nhật ký truy cập, và phương án phản ứng sự cố để khớp kỳ vọng giám sát.",
    date: "2026-03-16",
    readMinutes: 8,
    body: [
      "Khung pháp lý mới nhấn mạnh trách nhiệm của chủ quản hệ thống thông tin trọng yếu. Điểm then chốt không chỉ là có chính sách trên giấy mà là chứng minh được vận hành: ai được truy cập dữ liệu nào, vì sao, và trong bao lâu.",
      "Một lộ trình thực dụng gồm ba bước: (1) kiểm kê tài sản và luồng dữ liệu, (2) siết IAM và logging tập trung, (3) diễn tập phản ứng với kịch bản ransomware và lộ lọt.",
      "ICS triển khai AI SOC và giải pháp endpoint để khách hàng có dữ liệu phục vụ báo cáo tuân thủ mà không làm chết nhịp kinh doanh.",
    ],
  },
  {
    slug: "bao-ve-du-lieu-ca-nhan-2026-ung-dung-di-dong",
    title: "Luật Bảo vệ dữ liệu cá nhân: ứng dụng di động đang nằm trong vùng rủi ro cao",
    excerpt:
      "Từ 01/01/2026, hiệu lực pháp lý đặt áp lực lên thu thập, lưu trữ và chia sẻ dữ liệu người dùng app.",
    date: "2026-01-08",
    readMinutes: 7,
    body: [
      "Ứng dụng di động thường tích hợp SDK bên thứ ba, thu thập telemetry vượt quá nhận thức của đội sản phẩm. Khi pháp lý siết chặt, rủi ro không còn là chuyện chỉ của bảo mật mà là chuyện của pháp chế và marketing.",
      "Cần một lớp kiểm soát kỹ thuật: quét bề mặt tấn công, quản lý lỗ hổng, và bảo vệ runtime để giảm khả năng reverse engineering cùng trích xuất dữ liệu nhạy cảm.",
      "VietGuard của ICS nhắm vào các cuộc tấn công phổ biến trên mobile và hỗ trợ quy trình kiểm toán OWASP Mobile trong thời gian ngắn.",
    ],
  },
  {
    slug: "threat-landscape-ai-vs-ai",
    title: "Threat landscape 2026: khi tự động hóa tấn công đối đầu giám sát bằng AI",
    excerpt:
      "SOC truyền thống dễ nghẽn trên khối lượng cảnh báo; mô hình kết hợp con người và máy giúp giảm MTTR có kiểm soát.",
    date: "2026-02-02",
    readMinutes: 9,
    body: [
      "Kẻ tấn công dùng script và LLM để dựng mã độc biến thể nhanh hơn, trong khi hàng rào chữ ký vẫn có độ trễ. Phòng thủ cần hành vi và ngữ cảnh: hiểu user, thiết bị, và độ lệch so với baseline.",
      "AI SOC không thay thế hoàn toàn analyst, mà loại bỏ phần lặp lại cấp một: gom sự kiện, xếp hạng, gợi ý playbook. Analyst tập trung vào quyết định và liên lạc với nghiệp vụ.",
      "ICS là đối tác chiến lược Gurucul tại Việt Nam, triển khai nền tảng hỗ trợ phân tích hành vi và tự động hóa phản hồi theo chính sách khách hàng.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
