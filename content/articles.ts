/**
 * Single source of truth for published article slugs, copy, and static generation.
 * `app/articles/[slug]/page.tsx` — `generateStaticParams` and sitemap consume this array.
 * Production slug migration / 301 map: coordinate with Ben (slug table) and `next.config.ts` redirects (Alex).
 */
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
  {
    slug: "ai-tim-lo-hong-nhanh-hon-hacker-claude-phat-hien-22-lo-hong-trong-firefox-chi-trong-2-tuan",
    title:
      "AI tìm lỗ hổng nhanh hơn hacker: Claude phát hiện 22 lỗ hổng Firefox trong hai tuần",
    excerpt:
      "Chương trình bounty và hỗ trợ AI cho thấy chu kỳ phát hiện lỗi có thể rút ngắn mạnh nếu quy trình vendor và cộng đồng phối hợp minh bạch.",
    date: "2026-03-01",
    readMinutes: 7,
    body: [
      "Firefox là mục tiêu phổ biến vì bề mặt tấn công trình duyệt rộng và chu kỳ phát hành nhanh. Khi công cụ AI hỗ trợ đọc mã và thử phương án khai thác, số lượng báo cáo hợp lệ có thể tăng đột biến trong cửa sổ thời gian ngắn.",
      "Doanh nghiệp không điều khiển mã nguồn Mozilla nhưng điều khiển được chính sách cập nhật trên endpoint. Chuẩn hóa phiên bản Firefox/ESR, buộc cập nhật trong vòng 48–72 giờ sau advisory, và ghi log phiên bản giúp giảm cửa sổ khai thác.",
      "Tầng quan sát AI SOC bổ sung cho patch: phát hiện dấu hiệu khai thác lỗi trình duyệt qua hành vi mạng, tải payload bất thường, hoặc chuỗi tiến trình lệ thường trên máy trạm.",
    ],
  },
  {
    slug: "canh-bao-nhom-hacker-trung-quoc-tan-cong-ha-tang-trong-yeu-chau-a-suot-nhieu-nam",
    title:
      "Cảnh báo: nhóm hacker liên quan khu vực tấn công hạ tầng trọng yếu châu Á nhiều năm",
    excerpt:
      "Chiến dịch tồn tại lâu trên telecom và hạ tầng số đặt ra yêu cầu giám sát liên tục và chia sẻ IOC giữa các nhà mạng, Cloud VPC, và SOC nội bộ.",
    date: "2026-02-18",
    readMinutes: 8,
    body: [
      "Tấn công có chủ đích vào hạ tầng viễn thông và dịch vụ công thường kéo dài nhiều mùa vụ, kẻ tấn công duy trì quyền truy cập bằng credential hợp lệ và tunnel ẩn.",
      "Đội phòng thủ cần baseline cho thiết bị mạng lõi, giám sát luồng biên và Đông-Tây trong VPC, và kiểm tra định kỳ rule firewall không còn phản ánh thực tế kinh doanh.",
      "ICS hỗ trợ khách hàng tích hợp dữ liệu telemetry vào AI SOC để phát hiện phiên làm việc dài bất thường, pivot nội bộ, và exfil trái phép ra biên.",
    ],
  },
  {
    slug: "canh-bao-ransomware-leaknet-doi-chien-thuat-tan-cong-qua-website-hop-phap-clickfix",
    title:
      "Ransomware LeakNet: đổi chiến thuật qua website hợp pháp và kỹ thuật clickfix",
    excerpt:
      "Kênh phân phối malware dịch sang domain tin cậy và thao tác người dùng; EDR và đào tạo cần cập nhật theo chuỗi tấn công mới.",
    date: "2026-02-25",
    readMinutes: 6,
    body: [
      "Clickfix lợi dụng thói quen người dùng bấm “Cho phép” hoặc dán lệnh vào terminal sau khi đọc hướng dẫn giả mạo hỗ trợ. Website nhìn hợp pháp làm giảm cảnh giác so với tệp đính kèm email.",
      "Tổ chức nên siết chính sách thực thi ứng dụng, cấm chạy script chưa ký từ thư mục tải về, và bật cảnh báo trên trình duyệt được quản trị tập trung.",
      "Sự kết hợp backup air-gapped, playbook cô lập endpoint, và truy vết lateral movement giúp giảm thiệt hại khi điện thoại SOC báo mã hóa hàng loạt.",
    ],
  },
  {
    slug: "day-manh-thi-hanh-luat-an-ninh-mang-buoc-chuyen-chien-luoc-tu-chinh-sach-sang-thuc-thi",
    title:
      "Đẩy mạnh thi hành Luật An ninh mạng: từ khung chính sách sang thực thi có thước đo",
    excerpt:
      "Cơ quan nhà nước tăng tần suất kiểm tra thực địa; doanh nghiệp cần chứng cứ vận hành chứ không chỉ tài liệu nội bộ.",
    date: "2026-02-12",
    readMinutes: 8,
    body: [
      "Giai đoạn sau ban hành luật là giai đoạn đo lường: nhật ký truy cập, phân loại dữ liệu, và khả năng phản ứng sự cố trong SLA nội bộ trở thành tiêu chí thực tế.",
      "Khuyến nghị: lập danh mục hệ thống trọng yếu, gán owner và RPO/RTO, và chạy diễn tập báo cáo với ban lãnh đạo theo kịch bản ransomware có yếu tố lộ dữ liệu.",
      "ICS đóng vai trò đồng hành triển khai giám sát tập trung và tự động hóa playbook để team bảo mật có thời gian cho công tác compliance chứng minh được.",
    ],
  },
  {
    slug: "lo-lot-du-lieu-doanh-nghiep-co-the-tra-gia-toi-5-doanh-thu",
    title: "Lộ lọt dữ liệu: ước tính chi phí có thể lên tới 5% doanh thu",
    excerpt:
      "Phạt, bồi thường, và mất niềm tin thị trường gộp lại thành con số tài chính lớn; đầu tư phòng ngừa có ROI rõ khi so với một sự cố lớn.",
    date: "2026-01-28",
    readMinutes: 7,
    body: [
      "Các nghiên cứu ngành cho thấy tổn thất sau breach không dừng ở ổ cứng: phần lớn là chi phí pháp lý, forensics, credit monitoring, và sút giá cổ phiếu ngắn hạn.",
      "Giảm rủi ro cần kiểm soát truy cập theo vai trò, mã hóa dữ liệu nhạy cảm lưu trữ và truyền, và kiểm tra nhà cung cấp đệ quy.",
      "ICS giúp khách hàng xây dashboard rủi ro dữ liệu gắn với biến thể tấn công đang gặp trong khu vực, ưu tiên remediate theo tác động tài chính.",
    ],
  },
  {
    slug: "microsoft-phat-hanh-ban-cap-nhat-bao-mat-dinh-ky-thang-32026",
    title:
      "Microsoft phát hành bản cập nhật bảo mật định kỳ tháng 3/2026",
    excerpt:
      "Patch Tuesday ảnh hưởng Windows, Office và stack enterprise; cần nhóm ưu tiên theo CVE và bề mặt internet.",
    date: "2026-03-11",
    readMinutes: 5,
    body: [
      "Chu kỳ vá hàng tháng của Microsoft vẫn là mốc chính cho Windows Server, AD, Exchange và endpoint. Đội vận hành nên có nhóm pilot và rollback plan cho bản cập nhật làm thay đổi kernel hoặc stack mạng.",
      "Ưu tiên CVE có PoC công khai hoặc khai thác zero-click trên dịch vụ exposed. Kết hợp scanner lỗ hổng và telemetry EDR để xác định máy chậm patch.",
      "ICS hỗ trợ khách hàng ánh xạ advisory vào bảng rủi ro nội bộ và theo dõi cho đến khi tỷ lệ patch đạt ngưỡng an toàn.",
    ],
  },
  {
    slug: "phat-hien-lo-hong-bypass-xac-thuc-trong-pac4j-jwt-cve-2026-29000",
    title:
      "CVE-2026-29000: lỗ hổng bypass xác thực trong thư viện Pac4j JWT",
    excerpt:
      "Ứng dụng Java dùng Pac4j cần nâng cấp ngay; kiểm tra chuỗi xác thực token và gateway API trước khi công bố maintenance.",
    date: "2026-03-08",
    readMinutes: 6,
    body: [
      "Pac4j được dùng rộng rãi để tích hợp OIDC/SAML và JWT. Lỗ hổng bypass có thể cho phép kẻ tấn công giả mạo phiên hợp lệ nếu cấu hình parser lỏng hoặc phiên bản thư viện cũ.",
      "Hành động: rà soát dependency tree (Maven/Gradle), nâng lên bản đã vá, và buộc rotate signing keys nếu có dấu hiệu token lạ trong log.",
      "Giám sát: cảnh báo spike đăng nhập thành công từ IP lạ vào dịch vụ nội bộ chỉ dùng JWT giữa các tier.",
    ],
  },
  {
    slug: "phat-hien-nhieu-lo-hong-bao-mat-tren-microsoft-edge-cve-2026-3536-cve-2026-3545",
    title:
      "Microsoft Edge: nhiều lỗ hổng bảo mật (CVE-2026-3536, CVE-2026-3545)",
    excerpt:
      "Trình duyệt nhân Chromium cần cập nhật song song với chính sách quản trị; kiểm tra cả profile đồng bộ và extension do người dùng tự cài.",
    date: "2026-03-06",
    readMinutes: 5,
    body: [
      "Edge chia sẻ nhiều thành phần với Google Chrome nên lỗi memory corruption và sandbox escape thường được vá gói. Doanh nghiệp quản trị qua Intune hoặc GPO nên rút ngắn deferral update.",
      "Kiểm tra extension và policy download để giảm bề mặt tấn công kết hợp với lỗi renderer.",
      "Nếu production có máy kiosk chỉ chạy Edge, ưu tiên rolling update theo nhóm chức năng và giữ một nhóm canary để phát hiện regression.",
    ],
  },
  {
    slug: "soc-la-gi-trung-tam-dieu-hanh-an-ninh-mang-la-chan-song-con-cua-doanh-nghiep-trong-ky-nguyen-so",
    title:
      "SOC là gì và vì sao trung tâm điều hành an ninh mạng là lớp phòng thủ cốt lõi",
    excerpt:
      "SOC thu thập, tương quan và phản ứng sự cố; hiện đại hóa là giảm tiếng ồn bằng máy và giữ người cho quyết định.",
    date: "2026-01-20",
    readMinutes: 9,
    body: [
      "SOC truyền thống xử lý hàng nghìn cảnh báo mỗi ngày. Không có tương quan và playbook, nhóm dễ kiệt sức và bỏ lỡ sự cố thật xen trong nhiễu.",
      "Mô hình hiện đại kết hợp SIEM/SOAR, threat intelligence, và scoring hành vi. Mục tiêu không phải 100% tự động mà là rút thời gian xác định và ngăn lan truyền.",
      "ICS triển khai nền tảng Gurucul cùng dịch vụ vận hành giúp khách hàng có SOC mà không tự xây toàn bộ pipeline từ đầu.",
    ],
  },
  {
    slug: "thong-bao-an-ninh-mang-du-lieu-viet-nam-doi-mat-nguy-co-gia-tang-nghiem-trong",
    title:
      "Thông báo an ninh mạng: dữ liệu Việt Nam trước áp lực rủi ro gia tăng",
    excerpt:
      "Thị trường đang số hóa nhanh; lưu trữ đám mây và API hở làm phổ biến các vụ lộ dữ liệu quy mô lớn.",
    date: "2026-02-08",
    readMinutes: 7,
    body: [
      "Tổ chức trong nước thường tập trung tuân thủ sau khi có sự cố. Chuyển sang mô hình dự báo rủi ro cần dữ liệu inventory và kiểm soát truy cập liên tục.",
      "API public và bucket S3/Azure mở quyền là hai nguồn leak phổ biến; quét định kỳ và IaC policy có thể chặn phần lớn lỗi cấu hình.",
      "ICS cung cấp gói đánh giá và giám sát để giảm thời gian phát hiện dữ liệu rò rỉ ra Internet.",
    ],
  },
  {
    slug: "thuc-trang-an-ninh-mang-viet-nam-20252026-bao-dong-do-cho-doanh-nghiep",
    title:
      "Thực trạng an ninh mạng Việt Nam 2025–2026: tín hiệu báo động cho doanh nghiệp",
    excerpt:
      "Ransomware, phishing và tấn công chuỗi cung ứng tăng; ngân sách SOC và đào tạo nhân sự cần đi trước một bước.",
    date: "2026-01-15",
    readMinutes: 8,
    body: [
      "Doanh nghiệp vừa và nhỏ thường là mục tiêu vì bảo vệ mỏng nhưng có kết nối vào đối tác lớn. Kẻ tấn công dùng đó làm bàn đạp.",
      "Đầu tư nên chia đều: identity, endpoint, email gateway, và logging tập trung. Thiếu một trụ cột sẽ làm vô hiệu các lớp khác.",
      "Lộ trình với ICS gồm đánh giá hiện trạng, ưu tiên hóa remediation, và triển khai AI SOC để mở rộng năng lực mà không nhân đôi headcount ngay.",
    ],
  },
  {
    slug: "ung-dung-mobile-cua-doanh-nghiep-co-the-bi-hack-chi-trong-vai-phut",
    title:
      "Ứng dụng mobile doanh nghiệp có thể bị xâm phạm trong vài phút nếu thiếu lớp bảo vệ",
    excerpt:
      "Kênh mobile tích hợp API và SDK bên thứ ba; reverse engineering và credential stuffing diễn ra nhanh nếu không có hardening.",
    date: "2026-01-22",
    readMinutes: 6,
    body: [
      "Ứng dụng nội bộ thường được phát triển nhanh cho nghiệp vụ và ít qua pentest định kỳ. Attacker có thể trích certificate hoặc API key nhúng sai cách.",
      "Cần obfuscation, kiểm tra root/jailbreak, pinning chứng chỉ, và giới hạn session trên thiết bị. Backend phải rate-limit và phát hiện token reuse.",
      "VietGuard và dịch vụ đánh giá OWASP Mobile của ICS giúp rút ngắn thời gian vá trước khi lên store hoặc phát hành nội bộ.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
