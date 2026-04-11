export const company = {
  legalName: "CÔNG TY CỔ PHẦN AN NINH MẠNG QUỐC TẾ - ICS",
  brand: "ICS",
  intlName: "International Cyber Security (ICS)",
  mst: "0901074688",
  regAddress:
    "Đường Vũ Văn Cẩn, Phường Bần Yên Nhân, tỉnh Hưng Yên",
  office:
    "TT3-5 Khu đô thị Đại Kim mới, Định Công, Hà Nội",
  phones: ["0707.806.860", "0931.487.231"],
  hotline: "0707.806.860",
  email: "info@icss.com.vn",
  zalo: "ICS Security",
  website: "https://www.icss.com.vn",
  facebook: "https://www.facebook.com/ICS.anninhmangquocte",
  youtube: "https://www.youtube.com/channel/UCpOn4kxyTtzmUldsDZoxLHg",
  zaloUrl: "https://zalo.me/1993095583245735763",
  smartDashboard: "https://smartdashboard.vn",
};

export type NavItem = { href: string; label: string; external?: boolean };

/** Longer labels & extras for footer — header keeps compact `navProducts` */
export const navFooterProducts: NavItem[] = [
  { href: "/products/v-ai-agent", label: "V AI Agent" },
  { href: "/products/vietguard", label: "VietGuard" },
  { href: "/products/ai-soc", label: "AI SOC" },
  { href: "/products/csa-endpoint", label: "CSA Endpoint" },
  { href: "https://oraclecloud.vn/", label: "Oracle Cloud", external: true },
  { href: company.smartDashboard, label: "Smart Dashboard", external: true },
];

export const navFooterSolutions: NavItem[] = [
  { href: "/toa-nha-thong-minh", label: "Giải pháp tòa nhà thông minh" },
  { href: "/nha-may-thong-minh", label: "Giải pháp nhà máy thông minh" },
  { href: "/giai-phap-esg", label: "Giải pháp ESG" },
  { href: "/products/ai-soc", label: "Giải pháp AI SOC" },
];

export const navFooterMeta: NavItem[] = [
  { href: "/gioi-thieu", label: "Giới thiệu về ICS" },
  { href: "/khach-hang", label: "Khách hàng" },
  { href: "/doi-tac", label: "Đối tác" },
  { href: "/hoat-dong-xa-hoi", label: "Hoạt động xã hội" },
  { href: "/articles", label: "Tin tức" },
  { href: "/lien-he", label: "Liên hệ" },
  { href: "/tuyen-dung", label: "Tuyển dụng" },
  { href: "/chinh-sach-bao-mat", label: "Chính sách bảo mật" },
  { href: "/dieu-khoan", label: "Điều khoản sử dụng" },
];

export const navPrimary: NavItem[] = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/articles", label: "Tin tức" },
  { href: "/tuyen-dung", label: "Tuyển dụng" },
  { href: "/lien-he", label: "Liên hệ" },
];

export const navSolutions: NavItem[] = [
  { href: "/nha-may-thong-minh", label: "Nhà máy thông minh" },
  { href: "/toa-nha-thong-minh", label: "Tòa nhà thông minh" },
  { href: "/giai-phap-esg", label: "Giải pháp ESG" },
];

export const navProducts: NavItem[] = [
  { href: "/products/v-ai-agent", label: "V AI Agent" },
  { href: "/products/ai-soc", label: "AI SOC" },
  { href: "/products/csa-endpoint", label: "CSA Endpoint" },
  { href: "/products/vietguard", label: "VietGuard" },
];

/** Mục menu mega: tiêu đề + một dòng mô tả ngắn (scan UX), khác với `seoDescription` trong metadata. */
export type NavMegaItem = {
  href: string;
  label: string;
  description: string;
  external?: boolean;
};

export const navMegaAbout: NavMegaItem[] = [
  {
    href: "/gioi-thieu",
    label: "Giới thiệu chung",
    description: "Về công ty ICS và định hướng phát triển",
  },
  {
    href: "/khach-hang",
    label: "Khách hàng",
    description: "Lĩnh vực phục vụ và phạm vi triển khai",
  },
  {
    href: "/hoat-dong-xa-hoi",
    label: "Hoạt động xã hội",
    description: "Chia sẻ tri thức và đồng hành cộng đồng an toàn số",
  },
  {
    href: "/chinh-sach-bao-mat",
    label: "Chính sách bảo mật",
    description: "Minh bạch cách xử lý thông tin khi bạn liên hệ và truy cập website",
  },
  {
    href: "/dieu-khoan",
    label: "Điều khoản sử dụng",
    description: "Điều kiện sử dụng nội dung và kênh thông tin chính thức của ICS",
  },
];

export const navMegaConsult: NavMegaItem[] = [
  {
    href: "/toa-nha-thong-minh",
    label: "Giải pháp tòa nhà thông minh",
    description: "An ninh IoT, BMS và không gian làm việc",
  },
  {
    href: "/nha-may-thong-minh",
    label: "Giải pháp nhà máy thông minh",
    description: "Giám sát OT/IT và an toàn vận hành",
  },
  {
    href: "/giai-phap-esg",
    label: "Giải pháp ESG",
    description: "Tuân thủ và báo cáo bền vững cho doanh nghiệp",
  },
  {
    href: "/products/ai-soc",
    label: "AI SOC",
    description: "Trung tâm điều hành an ninh mạng với AI",
  },
];

export const navMegaProducts: NavMegaItem[] = [
  {
    href: "/products/v-ai-agent",
    label: "V AI Agent",
    description: "Nền tảng giao tiếp in-app toàn diện với AI Chatbot",
  },
  {
    href: "/products/vietguard",
    label: "VietGuard",
    description: "Công cụ quét và phát hiện lỗ hổng bảo mật",
  },
  {
    href: "/products/ai-soc",
    label: "AI SOC",
    description: "Giải pháp phân tích và giám sát an ninh mạng",
  },
  {
    href: "/products/csa-endpoint",
    label: "CSA Endpoint",
    description: "Bảo mật điểm cuối và ngăn ngừa mất mát dữ liệu",
  },
  {
    href: "/lien-he",
    label: "Pentest Services",
    description: "Dịch vụ kiểm thử xâm nhập và đánh giá bảo mật",
  },
  {
    href: "https://oraclecloud.vn/",
    label: "Oracle Cloud",
    description: "Hạ tầng điện toán đám mây",
    external: true,
  },
  {
    href: company.smartDashboard,
    label: "Smart Dashboard",
    description: "Bảng điều khiển quản lý vận hành",
    external: true,
  },
];

export const home = {
  compliance: {
    badge: "Thông tư 77/2025",
    line: "THÔNG TƯ 77/2025/TT-NHNN",
    highlight: "AN TOÀN VÀ BẢO MẬT",
    rest:
      "CHO VIỆC CUNG CẤP DỊCH VỤ TRỰC TUYẾN TRONG NGÀNH NGÂN HÀNG.",
    cta: { label: "Tìm hiểu thêm", href: "/articles/thong-tu-77-2025-tt-nhnn-an-toan-ngan-hang" },
  },
  hero: {
    featuredPill: "Nổi bật",
    eyebrow: "International Cyber Security",
    title: "Giải pháp an ninh mạng toàn diện",
    /** Tách để nhấn màu accent trên H1 */
    titleLead: "Giải pháp an ninh mạng",
    titleAccent: "toàn diện",
    tagline:
      "Bảo vệ doanh nghiệp của bạn với công nghệ an ninh mạng tiên tiến nhất",
    ctaPrimary: { label: "Đặt lịch demo AI SOC", href: "/lien-he?loai=demo-ai-soc" },
    ctaSecondary: { label: "Xem giải pháp theo ngành", href: "/products/ai-soc" },
    trustChips: [
      { value: "4+", label: "Năm kinh nghiệm" },
      { value: "24/7", label: "Hỗ trợ vận hành" },
      { value: "ISO 27001", label: "Chứng nhận quốc tế" },
    ],
  },
  /** Mẫu cảnh báo minh họa — thay bằng nguồn RSS/API khi tích hợp */
  heroSecurityAlerts: [
    {
      isNew: true,
      severity: "medium" as const,
      severityLabel: "Trung bình",
      date: "31/03/2026",
      source: "Politie / EU",
      headline: "Cảnh báo tấn công phishing vào hệ thống cảnh sát Hà Lan",
      summary:
        "Hệ thống nội bộ của cảnh sát Hà Lan (Politie) bị xâm nhập thông qua tấn công phishing. Sự cố đã được phát hiện và ngăn chặn kịp thời, chưa ghi nhận rò rỉ dữ liệu người dân. Tuy nhiên, nguy cơ từ tấn công lừa đảo vẫn ở mức cao.",
      impact: "Hệ thống nội bộ cảnh sát Hà Lan (Politie)",
      remediation:
        "Nâng cao nhận thức người dùng về phishing, triển khai xác thực đa yếu tố (MFA) và giám sát truy cập bất thường.",
    },
    {
      severity: "high" as const,
      severityLabel: "Cao",
      date: "31/03/2026",
      source: "LangChain / Cyera Security",
      headline: "Cảnh báo lỗ hổng nghiêm trọng trên LangChain",
      summary:
        "Phát hiện lỗ hổng path traversal trên LangChain (CVE-2026-34070) cho phép kẻ tấn công từ xa đọc file trái phép mà không cần xác thực, dẫn đến nguy cơ rò rỉ dữ liệu nhạy cảm, API key và log hệ thống.",
      cves: ["CVE-2026-34070"],
      impact: "LangChain-core ≤ 1.2.21",
      remediation:
        "Cập nhật lên phiên bản 1.2.22 trở lên, đồng thời rà soát bảo mật các thành phần liên quan như LangGraph và kiểm soát truy cập file.",
    },
    {
      severity: "medium" as const,
      severityLabel: "Trung bình",
      date: "27/03/2026",
      source: "GitLab Security Advisory",
      headline: "Cảnh báo nhiều lỗ hổng bảo mật trên GitLab",
      summary:
        "Phát hiện nhiều lỗ hổng trên GitLab cho phép kẻ tấn công từ xa gây gián đoạn dịch vụ, leo thang đặc quyền, giả mạo, khai thác XSS, rò rỉ và thay đổi dữ liệu. Nguy cơ ảnh hưởng trực tiếp đến hệ thống DevOps.",
      cves: ["CVE-2025-13078", "CVE-2026-4363"],
      impact: "GitLab CE/EE ≤ 18.10.1, 18.9.3, 18.8.7",
      remediation:
        "Ưu tiên nâng cấp theo GitLab Security Advisory; kiểm tra runner, quyền repository, pipeline và áp dụng bản vá bảo mật đã phát hành.",
    },
    {
      severity: "medium" as const,
      severityLabel: "Trung bình",
      date: "09/03/2026",
      source: "pac4j Security Advisory",
      headline: "Lỗ hổng bypass xác thực JWT trong pac4j — PoC đã công bố",
      summary:
        "CVE-2026-29000 cho phép kẻ tấn công giả mạo JWT bằng cách bọc PlainJWT trong JWE, qua đó vượt qua xác minh chữ ký và truy cập hệ thống với quyền cao hơn. PoC đã được công bố công khai.",
      cves: ["CVE-2026-29000"],
      impact: "pac4j-jwt 4.x < 4.5.9 · 5.x < 5.7.9 · 6.x < 6.3.3",
      remediation:
        "Cập nhật lên phiên bản đã vá (4.5.9 / 5.7.9 / 6.3.3 trở lên). Kiểm soát log xác thực để phát hiện token bất thường. Triển khai giám sát phiên qua AI SOC.",
    },
    {
      severity: "medium" as const,
      severityLabel: "Trung bình",
      date: "10/03/2026",
      source: "Microsoft Security Response Center",
      headline: "Microsoft Edge: nhiều lỗ hổng RCE và DoS trên phiên bản trước 145.0.3800.97",
      summary:
        "Nhiều lỗ hổng trong thành phần xử lý nội dung của Edge cho phép thực thi mã từ xa (RCE), từ chối dịch vụ (DoS), và vượt qua cơ chế bảo mật khi người dùng truy cập trang web độc hại. Phổ biến trên endpoint doanh nghiệp dùng Edge làm trình duyệt mặc định.",
      cves: ["CVE-2026-3536", "CVE-2026-3545"],
      impact: "Microsoft Edge < 145.0.3800.97",
      remediation:
        "Cập nhật Edge lên phiên bản mới nhất qua Windows Update hoặc Group Policy. Triển khai chính sách kiểm soát phiên bản trình duyệt trên endpoint và bật cảnh báo khi thiết bị tụt phiên bản.",
    },
  ],
  stats: {
    eyebrow: "Báo cáo tóm tắt",
    title: "ICS trong con số",
    subtitle:
      "Đội ngũ và dự án phục vụ khách hàng doanh nghiệp, tài chính và hạ tầng trọng yếu.",
    introSecondary: "",
    introMetaLine: "Doanh nghiệp · Tài chính · Hạ tầng trọng yếu",
    items: [
      {
        label: "Khách hàng doanh nghiệp",
        value: "50+",
        hint: "Ngân hàng, sản xuất, hạ tầng trọng yếu",
      },
      {
        label: "Hỗ trợ an ninh mạng",
        value: "24/7",
        hint: "Giám sát và phối hợp xử lý sự cố",
      },
      {
        label: "Mục tiêu SLA dịch vụ",
        value: "99,9%",
        hint: "Theo cam kết hợp đồng từng dự án",
      },
      { label: "Năm kinh nghiệm", value: "4+", hint: "Vận hành SOC và triển khai tích hợp" },
    ],
  },
  productsSection: {
    eyebrow: "Danh mục sản phẩm",
    title: "Giải pháp cốt lõi cho doanh nghiệp",
    subtitle:
      "SOC, điểm cuối và tương tác ứng dụng — triển khai theo phạm vi rõ ràng, có tài liệu và đội vận hành đồng hành.",
    items: [
      {
        slug: "v-ai-agent",
        name: "V AI Agent",
        desc: "Nền tảng giao tiếp in-app toàn diện với AI Chatbot, tăng 40% tỷ lệ giữ chân người dùng",
        href: "/products/v-ai-agent",
        signal:
          "Khi bạn cần giữ người dùng trong app và giảm tải cho tổng đài — phù hợp ngân hàng số, app dịch vụ cao tần suất.",
      },
      {
        slug: "ai-soc",
        name: "AI SOC",
        desc: "Trung tâm điều hành an ninh mạng được trang bị AI tiên tiến",
        href: "/products/ai-soc",
        signal:
          "Ưu tiên cho CISO và đội vận hành SOC: gom nhiễu, xếp hạng cảnh báo và rút ngắn thời gian phản ứng có kiểm soát.",
      },
      {
        slug: "csa-endpoint",
        name: "CSA Endpoint",
        desc: "Giải pháp bảo mật điểm cuối và ngăn chặn mất mát dữ liệu",
        href: "/products/csa-endpoint",
        signal:
          "Một lớp agent cho nhiều mối đe dọa trên laptop, server và máy trạm — chính sách thống nhất, triển khai theo phạm vi rõ.",
      },
    ],
  },
  solutionsWide: {
    title: "Giải pháp bảo mật toàn diện",
    subtitle:
      "Từ endpoint đến cloud, từ nhà máy đến tòa nhà — chúng tôi bảo vệ mọi góc độ",
    items: [
      {
        name: "CSA Endpoint Security",
        desc: "Bảo vệ máy 4-trong-1, phát hiện virus, ransomware, trojan với AI",
        href: "/products/csa-endpoint",
        signal:
          "Bước đầu tiên khi bạn cần thu hẹp cửa sổ lây nhiễm trên endpoint trước khi mở rộng SOC.",
      },
      {
        name: "Smart Factory Security",
        desc: "Bảo mật nhà máy thông minh với giám sát OT/IT tích hợp",
        href: "/nha-may-thong-minh",
        signal:
          "Dành cho nhà máy FDI/OEM: tách ranh giới OT/IT, log và cảnh báo đổ về một điểm quan sát.",
      },
      {
        name: "Smart Building Security",
        desc: "An ninh mạng cho tòa nhà thông minh, IoT và hệ thống BMS",
        href: "/toa-nha-thong-minh",
        signal:
          "BĐS và vận hành tòa nhà: IoT, BMS và truy cập từ xa nằm trong phạm vi giám sát, không để “lỗ hổng im lặng”.",
      },
    ],
  },
  commitments: {
    eyebrow: "Nguyên tắc đồng hành",
    title: "Cam kết vận hành",
    subtitle:
      "Khung làm việc thống nhất giữa tư vấn, triển khai và vận hành — mọi cam kết đều có thể đưa vào hợp đồng và báo cáo định kỳ.",
    items: [
      {
        title: "Công nghệ tiên phong",
        body: "Áp dụng AI, Machine Learning và Zero Trust Architecture trong mọi giải pháp bảo mật",
      },
      {
        title: "Phản ứng nhanh",
        body: "Giám sát và xử lý sự cố an ninh mạng trong thời gian thực với AI SOC",
      },
      {
        title: "Chứng nhận quốc tế",
        body: "Tuân thủ các tiêu chuẩn bảo mật ISO 27001, SOC 2, và các chuẩn mực quốc tế",
      },
      {
        title: "Tăng trưởng bền vững",
        body: "Giải pháp mở rộng linh hoạt theo quy mô và nhu cầu doanh nghiệp",
      },
    ],
  },
  newsTeaser: {
    title: "Tin tức và sự kiện",
    subtitle: "Cập nhật những tin tức mới nhất về an ninh mạng",
    cta: { label: "Xem tất cả bài viết", href: "/articles" },
  },
  credentialBand: {
    eyebrow: "Chứng nhận & Đối tác",
    items: [
      { label: "ISO 27001", note: "Chứng nhận quốc tế", highlight: false },
      { label: "Gurucul AI-SOC Partner", note: "Chứng nhận 17/12/2025", highlight: true },
      { label: "Oracle Partner", note: "Hạ tầng điện toán đám mây", highlight: false },
      { label: "Verified", note: "Doanh nghiệp đã xác minh", highlight: false },
    ],
  },
};

/** Nội dung tham chiếu cấu trúc từ icss.com.vn/gioi-thieu — chỉnh sửa tại một nguồn. */
export const about = {
  /** Chỉ dùng trong `metadata` / OG — không bind ra JSX body. */
  seoDescription:
    "ICS — tiên phong an ninh mạng tại Việt Nam: AI SOC, VietGuard, nhà máy và tòa nhà thông minh. Đội ngũ 50+ chuyên gia, cam kết vận hành 24/7.",
  hero: {
    eyebrow: "Giới thiệu chung",
    titleLead: "Tiên phong trong",
    titleAccent: "An ninh mạng",
    subtitle:
      "Bảo vệ hệ sinh thái số một cách an toàn, hiệu quả và bền vững.",
    ctaPrimary: { label: "Đặt lịch tư vấn", href: "/lien-he" },
    ctaSecondary: { label: "Giải pháp", href: "/products/ai-soc" },
  },
  video: {
    title: "Khám phá ICS",
    subtitle:
      "Video giới thiệu sứ mệnh, tầm nhìn và các lớp giải pháp — phần embed có thể gắn URL khi ban hành chính thức.",
    /** File tĩnh trong `public/` — ví dụ `/videos/introduction/Video_ICS.mp4`. */
    videoSrc: "/videos/introduction/Video_ICS.mp4",
  },
  narrative: {
    legalName: "CÔNG TY CỔ PHẦN AN NINH MẠNG QUỐC TẾ – ICS",
    body:
      "Là đơn vị tiên phong trong lĩnh vực an ninh mạng tại Việt Nam và khu vực, chuyên cung cấp các giải pháp bảo mật toàn diện cho thời đại công nghệ số. ICS tập trung vào các giải pháp bảo mật cho nhiều lĩnh vực trọng yếu, bao gồm: Bảo vệ endpoint, bảo vệ ứng dụng, an ninh cho nhà máy thông minh, tòa nhà thông minh và đặc biệt là hệ thống điều hành trung tâm AI SOC.",
  },
  stats: [
    { value: "50+", label: "Khách hàng doanh nghiệp" },
    { value: "24/7", label: "Hỗ trợ vận hành" },
    { value: "99,9%", label: "Uptime theo cam kết gói dịch vụ" },
    { value: "4+", label: "Năm kinh nghiệm" },
  ],
  teamBand: {
    title: "Đội ngũ chuyên nghiệp",
    body: "Hơn 50 chuyên gia an ninh mạng với kinh nghiệm quốc tế.",
  },
  valuesSection: {
    eyebrow: "Giá trị cốt lõi",
    title: "Những nguyên tắc định hướng mọi hành động của chúng tôi",
    items: [
      {
        title: "Bảo mật tối đa",
        body: "Cam kết bảo vệ dữ liệu khách hàng ở mức cao nhất.",
      },
      {
        title: "Chính xác",
        body: "Giải pháp tùy chỉnh phù hợp với nhu cầu cụ thể.",
      },
      {
        title: "Nhanh chóng",
        body: "Triển khai và phản ứng sự cố trong thời gian thực.",
      },
      {
        title: "Đội ngũ chuyên nghiệp",
        body: "Chuyên gia hàng đầu với kinh nghiệm quốc tế.",
      },
      {
        title: "Chất lượng đảm bảo",
        body: "Tuân thủ các tiêu chuẩn bảo mật quốc tế.",
      },
      {
        title: "Đổi mới liên tục",
        body: "Cập nhật công nghệ mới nhất trong ngành.",
      },
    ],
  },
  timelineSection: {
    eyebrow: "Hành trình phát triển",
    title: "Những mốc son đánh dấu sự trưởng thành của ICS",
    items: [
      {
        period: "3/2020",
        title: "Thành lập công ty",
        body: "ICS được thành lập với tầm nhìn cung cấp giải pháp an ninh mạng hàng đầu.",
      },
      {
        period: "9/2021",
        title: "Ra mắt nền tảng đào tạo",
        body: "Khởi động nền tảng đào tạo an ninh mạng chuyên nghiệp.",
      },
      {
        period: "7/2022",
        title: "Dự án công nghệ y tế",
        body: "Mở rộng lĩnh vực hoạt động sang công nghệ healthcare.",
      },
      {
        period: "6/2023",
        title: "Mở rộng trụ sở Hà Nội",
        body: "Khai trương văn phòng đại diện tại thủ đô Hà Nội.",
      },
      {
        period: "2/2024",
        title: "Hợp tác đối tác quốc tế",
        body: "Liên kết với các đối tác toàn cầu: HyperG, Oracle, Gamania.",
      },
      {
        period: "3/2024",
        title: "Ra mắt VietGuard",
        body: "Giới thiệu VietGuard — Mobile App Security.",
      },
      {
        period: "7/2024",
        title: "Ra mắt Smartdashboard",
        body: "Công bố Smartdashboard — nền tảng quản lý tập trung.",
      },
      {
        period: "10/2025",
        title: "Ra mắt AI SOC",
        body: "Khởi động nền tảng AI SOC — trung tâm giám sát an ninh thông minh.",
      },
    ],
  },
  leadershipSection: {
    eyebrow: "Đội ngũ lãnh đạo",
    title: "Những chuyên gia dẫn dắt ICS phát triển",
  },
  leadership: [
    {
      role: "CEO",
      name: "TS. Võ Trung Âu",
      note: "Tổng Giám đốc",
    },
    {
      role: "COO",
      name: "Đỗ Thanh Toàn",
      note: "Điều hành vận hành",
    },
    {
      role: "CTO",
      name: "Ths. Vũ Tam Hanh",
      note: "Công nghệ và kiến trúc giải pháp",
    },
    {
      role: "CMO",
      name: "Ths. Đặng Lê Trung",
      note: "Thương hiệu và phát triển thị trường",
    },
  ],
  solutionsSection: {
    eyebrow: "Giải pháp của chúng tôi",
    title: "Sản phẩm và hướng triển khai nổi bật",
  },
  solutions: [
    {
      tag: "VietGuard",
      title: "Vietguard — Mobile App Security",
      body:
        "Bảo mật tiên tiến với Zero Trust tại điểm cuối, giảm thiểu mối đe dọa mà không phụ thuộc hoàn toàn vào nhận diện mã độc cố định.",
      href: "/products/vietguard",
      cta: "Tìm hiểu thêm",
    },
    {
      tag: "ESG",
      title: "ESG Solutions",
      body:
        "Hỗ trợ doanh nghiệp phát triển bền vững với trách nhiệm môi trường, xã hội và quản trị minh bạch trong kỷ nguyên số.",
      href: "/lien-he",
      cta: "Trao đổi tư vấn",
    },
    {
      tag: "IoT Security",
      title: "IoT Security",
      body:
        "Bảo vệ mạng lưới IoT: từ cảm biến tới cloud, giảm rủi ro trong hệ sinh thái thiết bị kết nối.",
      href: "/toa-nha-thong-minh",
      cta: "Xem giải pháp tòa nhà",
    },
  ],
  closingCta: {
    title: "Sẵn sàng bảo vệ doanh nghiệp của bạn?",
    body: "Liên hệ hôm nay để được tư vấn giải pháp an ninh mạng phù hợp nhất.",
    primary: { label: "Đặt lịch tư vấn", href: "/lien-he" },
    secondary: { label: "Tin tức", href: "/articles" },
  },
  /** Tương thích field cũ nếu import nơi khác */
  intro:
    "Là đơn vị tiên phong trong lĩnh vực an ninh mạng tại Việt Nam và khu vực, chuyên cung cấp các giải pháp bảo mật toàn diện cho thời đại công nghệ số. ICS tập trung vào các giải pháp bảo mật cho nhiều lĩnh vực trọng yếu, bao gồm: Bảo vệ ứng dụng, an ninh cho nhà máy thông minh, tòa nhà thông minh và đặc biệt là hệ thống điều hành trung tâm AI SOC.",
  statHighlight: "Hơn 50 chuyên gia an ninh mạng với kinh nghiệm quốc tế",
  values: [
    "Cam kết bảo vệ dữ liệu khách hàng ở mức cao nhất",
    "Giải pháp tùy chỉnh phù hợp với nhu cầu cụ thể",
    "Triển khai và phản ứng sự cố trong thời gian thực",
    "Chuyên gia hàng đầu với kinh nghiệm quốc tế",
    "Tuân thủ các tiêu chuẩn bảo mật quốc tế",
    "Cập nhật công nghệ mới nhất trong ngành",
  ],
  timeline: [
    "ICS được thành lập với tầm nhìn cung cấp giải pháp an ninh mạng hàng đầu",
    "Khởi động nền tảng đào tạo an ninh mạng chuyên nghiệp",
    "Mở rộng lĩnh vực hoạt động sang công nghệ healthcare",
    "Khai trương văn phòng đại diện tại thủ đô Hà Nội",
    "Liên kết với các đối tác toàn cầu: HyperG, Oracle, Gamania",
    "Ra mắt VietGuard — Mobile App Security",
    "Công bố Smartdashboard — nền tảng quản lý tập trung",
    "Khởi động AI SOC — trung tâm giám sát an ninh thông minh",
  ],
  productFootnote: [
    "Giải pháp bảo mật điểm cuối với Zero Trust",
    "Giải pháp ESG và bảo mật trong kỷ nguyên số",
    "Bảo mật IoT từ cảm biến đến cloud",
  ],
};

/** JD chi tiết — đồng bộ với nội dung công khai https://icss.com.vn/tuyen-dung (bổ sung diễn giải cho vị trí quản lý / kỹ thuật). */
export type CareerApplyInfo = {
  cvEmail: string;
  subjectLine: string;
  contact?: { name: string; role?: string; phone: string };
};

export type CareerPositionDetail = {
  location: string;
  mission: string;
  responsibilities: string[];
  requirements?: string[];
  benefits?: string[];
  apply: CareerApplyInfo;
  documents?: string[];
};

export type CareerPosition = {
  title: string;
  dept: string;
  level: string;
  type: string;
  salary: string;
  brief: string;
  detail: CareerPositionDetail;
};

const careersCvEmail = "CV@icss.com.vn";
const careersHrContact = {
  name: "Ms. Diễm Quỳnh",
  role: "HCVP",
  phone: "0972.363.821",
} as const;
const careersDefaultDocuments = [
  "CV thông tin đầy đủ và chi tiết",
  "Các chứng chỉ liên quan (nếu có)",
] as const;

export const careers = {
  headline: "Tại sao nên gia nhập ICS?",
  /** Chỉ dùng trong `metadata` / OG — không dùng làm đoạn hero hiển thị. */
  pageDescription:
    "Tuyển dụng ICS tại Hà Nội: vị trí Marketing, Kinh doanh giải pháp công nghệ, Kỹ sư bảo mật và quản lý — AI SOC, triển khai thực chiến, lương thỏa thuận theo năng lực.",
  heroEyebrow: "Tuyển dụng",
  heroSub:
    "Làm việc cùng đội kỹ thuật triển khai SOC thật, không slide deck. Hà Nội · giờ linh hoạt theo dự án · đào tạo bài bản sau onboarding.",
  positionsSectionTitle: "Vị trí đang mở",
  positionsSectionSub:
    "Mỗi dòng là một nhóm làm việc cụ thể; mức và phụ cấp được trao đổi sau vòng phỏng vấn kỹ thuật.",
  reasons: [
    {
      title: "Công nghệ tiên tiến",
      body: "Làm việc với AI SOC, Smart Building, Mobile Security và các giải pháp công nghệ đột phá",
    },
    {
      title: "Phát triển nghề nghiệp",
      body: "Lộ trình thăng tiến rõ ràng, đào tạo chuyên sâu và cơ hội trở thành chuyên gia hàng đầu",
    },
    {
      title: "Văn hóa trẻ trung",
      body: "Môi trường năng động, đồng đội hỗ trợ lẫn nhau và hoạt động thể thao đa dạng",
    },
  ],
  cta: "Hãy gửi CV của bạn ngay hôm nay và trở thành một phần của đội ngũ ICS!",
  positions: [
    {
      title: "Nhân viên Marketing Giải pháp Công nghệ",
      dept: "Marketing",
      level: "Nhân viên",
      type: "Toàn thời gian",
      salary: "15–20 triệu++ VNĐ/tháng",
      brief:
        "Sáng tạo nội dung và quản trị các kênh truyền thông cho các giải pháp công nghệ",
      detail: {
        location: "TT3-5 Khu đô thị mới Đại Kim, Hà Nội",
        mission:
          "Trở thành 'phù thủy nội dung' để lan tỏa sức mạnh của các giải pháp công nghệ trong hệ sinh thái sản phẩm của chúng tôi.",
        responsibilities: [
          "Quản trị và sáng tạo nội dung hàng ngày trên Social Media",
          "Viết bài blog, tin tức chuyên ngành về an ninh mạng, AI SOC",
          "Lên ý tưởng và viết kịch bản cho video ngắn, clip giới thiệu",
          "Phối hợp với team thiết kế/video sản xuất ấn phẩm truyền thông",
          "Hỗ trợ tổ chức hội thảo công nghệ, webinar và sự kiện",
        ],
        requirements: [
          "1–2 năm kinh nghiệm marketing / content B2B hoặc công nghệ",
          "Am hiểu kênh digital và mạng xã hội",
          "Viết tiếng Việt tốt; đọc hiểu tài liệu tiếng Anh",
          "Chủ động, làm việc nhóm và quản lý deadline tốt",
        ],
        benefits: [
          "Thu nhập: 15–20 triệu++ VNĐ/tháng (theo năng lực)",
          "Làm việc trực tiếp với sản phẩm AI SOC, VietGuard và giải pháp thông minh",
          "Onboarding và đào tạo nội bộ theo lộ trình",
          "Trang bị thiết bị làm việc đầy đủ",
        ],
        apply: {
          cvEmail: careersCvEmail,
          subjectLine:
            "ICS - Nhân viên Marketing Giải pháp Công nghệ - Họ và Tên",
          contact: { ...careersHrContact },
        },
        documents: [...careersDefaultDocuments],
      },
    },
    {
      title: "Nhân viên Kinh doanh Giải pháp Công nghệ",
      dept: "Kinh doanh",
      level: "Nhân viên",
      type: "Toàn thời gian",
      salary: "15–20 triệu++ VNĐ/tháng",
      brief:
        "Tư vấn và phát triển khách hàng doanh nghiệp cho các giải pháp công nghệ",
      detail: {
        location: "TT3-5 Khu đô thị mới Đại Kim, Hà Nội",
        mission:
          "Trở thành chuyên gia tư vấn về chuyển đổi số, là cầu nối giữa ICS và khách hàng doanh nghiệp.",
        responsibilities: [
          "Khai thác và phát triển tệp khách hàng tiềm năng",
          "Tiếp cận khách hàng qua gặp gỡ trực tiếp, điện thoại, email",
          "Demo và tư vấn giải pháp công nghệ phù hợp",
          "Đàm phán và ký kết hợp đồng thành công",
        ],
        requirements: [
          "Độ tuổi: 21–45 tuổi, có 1–2 năm kinh nghiệm bán hàng",
          "Tốt nghiệp Cao đẳng trở lên: CNTT, AI, Cơ điện tử, Kinh doanh",
          "Đam mê kinh doanh, nhiệt huyết",
          "Kỹ năng giao tiếp tốt, xử lý tình huống linh hoạt",
          "Ưu tiên có kinh nghiệm Sales sản phẩm công nghệ",
        ],
        benefits: [
          "Thu nhập: 15–20 triệu++ VNĐ/tháng",
          "Thưởng hoa hồng theo hiệu quả kinh doanh",
          "Đào tạo bởi Ban Giám đốc giàu kinh nghiệm",
          "Lộ trình phát triển rõ ràng",
          "Trang bị đầy đủ thiết bị, phụ cấp điện thoại",
        ],
        apply: {
          cvEmail: careersCvEmail,
          subjectLine:
            "ICS - Nhân viên Kinh doanh Giải pháp Công nghệ - Họ và Tên",
          contact: { ...careersHrContact },
        },
        documents: [...careersDefaultDocuments],
      },
    },
    {
      title: "Kỹ sư Bảo mật (Security Engineer)",
      dept: "Kỹ thuật",
      level: "Chuyên gia",
      type: "Toàn thời gian",
      salary: "Thỏa thuận theo năng lực",
      brief:
        "Vận hành AI SOC và đảm bảo an toàn cho các hệ thống di động trọng yếu",
      detail: {
        location: "TT3-5 Khu đô thị mới Đại Kim, Hà Nội",
        mission:
          "Tham gia vận hành trung tâm AI SOC, phân tích cảnh báo và củng cố tuyến phòng thủ cho khách hàng doanh nghiệp.",
        responsibilities: [
          "Giám sát, phân loại và xử lý cảnh báo an ninh từ nền tảng AI SOC",
          "Hỗ trợ triển khai, tối ưu rule/use case và tích hợp nguồn log",
          "Phối hợp điều tra sự cố, báo cáo kỹ thuật và khuyến nghị khắc phục",
          "Đồng hành bảo vệ ứng dụng di động và hạ tầng trọng yếu (VietGuard, endpoint, cloud)",
          "Cập nhật threat intelligence và chia sẻ kinh nghiệm với đội vận hành",
        ],
        requirements: [
          "Tốt nghiệp Đại học chuyên ngành CNTT, An toàn thông tin hoặc tương đương",
          "Kinh nghiệm SOC/SIEM, log analysis hoặc incident response là lợi thế",
          "Hiểu biết nền tảng về mạng, hệ điều hành, ứng dụng web/API",
          "Chủ động học hỏi, làm việc theo ca/kế hoạch vận hành khi cần",
        ],
        benefits: [
          "Mức lương thỏa thuận theo năng lực và kinh nghiệm",
          "Làm việc với stack AI SOC và giải pháp bảo mật thực chiến",
          "Đào tạo chuyên sâu, mentoring từ chuyên gia trong ngành",
          "Thiết bị và quyền truy cập lab phục vụ R&D",
        ],
        apply: {
          cvEmail: careersCvEmail,
          subjectLine:
            "ICS - Kỹ sư Bảo mật (Security Engineer) - Họ và Tên",
          contact: { ...careersHrContact },
        },
        documents: [...careersDefaultDocuments],
      },
    },
    {
      title: "Giám đốc Marketing",
      dept: "Marketing",
      level: "Quản lý cấp cao",
      type: "Toàn thời gian",
      salary: "Thỏa thuận + hoa hồng cao",
      brief:
        "Xây dựng chiến lược Marketing tổng thể và hệ thống Lead Generation tự động hóa",
      detail: {
        location: "TT3-5 Khu đô thị mới Đại Kim, Hà Nội",
        mission:
          "Dẫn dắt đội marketing xây dựng thương hiệu ICS và cơ chế tạo lead bền vững cho pipeline kinh doanh B2B.",
        responsibilities: [
          "Xây dựng chiến lược marketing tổng thể, ngân sách và KPI theo quý/năm",
          "Thiết kế và tối ưu phễu Lead Generation, marketing automation, nurturing",
          "Quản trị đội content, performance, sự kiện và đối tác truyền thông",
          "Phối hợp chặt với Sales và Product để thống nhất message và chiến dịch",
          "Báo cáo hiệu quả kênh, CAC/MQL và đề xuất điều chỉnh",
        ],
        requirements: [
          "Từ 5 năm kinh nghiệm marketing B2B, trong đó ít nhất 2 năm quản lý nhóm",
          "Thành thạo demand gen, content strategy và công cụ automation (HubSpot, Zoho, tương đương)",
          "Tư duy dữ liệu, am hiểu SEO/SEM và kênh owned media",
          "Khả năng trình bày và làm việc với lãnh đạo cấp cao",
        ],
        benefits: [
          "Thu nhập thỏa thuận + hoa hồng / bonus theo mục tiêu",
          "Quyền chủ động kiến trúc team và ngân sách marketing",
          "Môi trường sản phẩm công nghệ cao, cơ hội xây dựng thương hiệu khu vực",
          "Chế độ phúc lợi cạnh tranh theo cấp quản lý",
        ],
        apply: {
          cvEmail: careersCvEmail,
          subjectLine: "ICS - Giám đốc Marketing - Họ và Tên",
          contact: { ...careersHrContact },
        },
        documents: [...careersDefaultDocuments],
      },
    },
    {
      title: "Giám đốc Kinh doanh",
      dept: "Kinh doanh",
      level: "Quản lý cấp cao",
      type: "Toàn thời gian",
      salary: "Thỏa thuận + hoa hồng cao",
      brief:
        "Dẫn dắt đội ngũ kinh doanh và chịu trách nhiệm chiến lược doanh thu",
      detail: {
        location: "TT3-5 Khu đô thị mới Đại Kim, Hà Nội",
        mission:
          "Xây dựng và thực thi chiến lược doanh thu, phát triển đội kinh doanh giải pháp công nghệ tại ICS.",
        responsibilities: [
          "Xây dựng mục tiêu doanh thu, phân bổ territory và chỉ số hiệu suất nhóm",
          "Dẫn dắt chốt các deal trọng điểm, đồng hành tư vấn cấp C-level",
          "Tối ưu quy trình bán hàng, báo giá, hợp đồng và handover triển khai",
          "Phối hợp Marketing và Presales để đảm bảo pipeline chất lượng",
          "Tuyển dụng, đào tạo và giữ chân nhân sự kinh doanh xuất sắc",
        ],
        requirements: [
          "Từ 5 năm kinh nghiệm sales B2B, ít nhất 3 năm quản lý team",
          "Kinh nghiệm bán giải pháp CNTT, an ninh mạng hoặc SaaS là lợi thế lớn",
          "Kỹ năng đàm phán, forecast và quản trị pipeline CRM",
          "Tinh thần trách nhiệm cao với chỉ tiêu doanh thu và margin",
        ],
        benefits: [
          "Thu nhập thỏa thuận + hoa hồng cạnh tranh theo kết quả",
          "Quyền kiến tạo đội hình và chính sách kích thích kinh doanh",
          "Tiếp cận danh mục giải pháp AI SOC, Smart Building, bảo mật di động",
          "Phúc lợi quản lý và hỗ trợ công tác theo chính sách công ty",
        ],
        apply: {
          cvEmail: careersCvEmail,
          subjectLine: "ICS - Giám đốc Kinh doanh - Họ và Tên",
          contact: { ...careersHrContact },
        },
        documents: [...careersDefaultDocuments],
      },
    },
  ] satisfies CareerPosition[],
};

export const contactPage = {
  title: "Liên hệ",
  subtitle:
    "Đội ngũ ICS phản hồi các yêu cầu tư vấn giải pháp, hợp tác và báo chí trong giờ làm việc.",
  demoLabels: {
    "demo-ai-soc": {
      heading: "Đặt lịch demo AI SOC",
      subtitle: "Chúng tôi phản hồi trong vòng 24h — buổi demo kéo dài 45 phút, không ràng buộc.",
      prefill: "Tôi muốn đặt lịch demo AI SOC cho tổ chức của mình.",
    },
    "tu-van-giai-phap": {
      heading: "Tư vấn giải pháp theo ngành",
      subtitle: "Mô tả ngắn về môi trường và quy mô — đội ICS sẽ đề xuất kiến trúc phù hợp.",
      prefill: "Tôi cần tư vấn giải pháp an ninh mạng theo ngành.",
    },
    "bao-gia": {
      heading: "Yêu cầu báo giá",
      subtitle: "Cung cấp thông tin sơ bộ để ICS chuẩn bị báo giá chi tiết trong 2 ngày làm việc.",
      prefill: "Tôi cần báo giá cho giải pháp của ICS.",
    },
    "pentest": {
      heading: "Đặt lịch kiểm thử xâm nhập",
      subtitle: "ICS cung cấp dịch vụ pentest theo tiêu chuẩn PTES — kết quả có thể dùng cho báo cáo tuân thủ.",
      prefill: "Tôi muốn đặt lịch kiểm thử xâm nhập (pentest) cho hệ thống.",
    },
    "hop-tac": {
      heading: "Hợp tác đối tác",
      subtitle: "Trao đổi mô hình hợp tác, rebate và lộ trình đào tạo cùng đội phát triển kênh ICS.",
      prefill: "Tôi muốn tìm hiểu về chương trình đối tác của ICS.",
    },
    "tai-lieu-ai-soc": {
      heading: "Nhận tài liệu AI SOC",
      subtitle:
        "Ghi rõ email và phạm vi quan tâm — đội ICS sẽ gửi walkthrough, use case và tài liệu kiến trúc phù hợp.",
      prefill: "Tôi muốn nhận tài liệu miễn phí về giải pháp AI SOC (workshop walkthrough / kiến trúc / ROI).",
    },
  } as Record<string, { heading: string; subtitle: string; prefill: string }>,
};

export const corporateHoatDongXaHoi = {
  title: "Hoạt động xã hội",
  description:
    "Chương trình chia sẻ tri thức, đào tạo và đồng hành cộng đồng doanh nghiệp về an ninh mạng.",
  intro:
    "ICS duy trì các hoạt động nhằm nâng cao nhận thức, bồi dưỡng nguồn lực và hỗ trợ tổ chức Việt Nam chủ động phòng vệ trước rủi ro số.",
  initiatives: [
    {
      title: "Workshop và hội thảo chuyên đề",
      body:
        "Cập nhật threat landscape, khung pháp lý và kỹ thuật cụ thể theo ngành, phù hợp đội CISO, IT và lãnh đạo vận hành.",
    },
    {
      title: "Đồng hành giáo dục và nghề nghiệp",
      body:
        "Chia sẻ kinh nghiệm thực chiến từ SOC, kiểm thử và kiến trúc Zero Trust cho sinh viên và chuyên gia đầu nghề.",
    },
    {
      title: "Hợp tác cộng đồng bảo mật",
      body:
        "Phối hợp sự kiện kỹ thuật và diễn đàn trao đổi có quy trình, hướng tới môi trường chia sẻ có trách nhiệm.",
    },
  ],
  note:
    "Lịch chi tiết từng chương trình được cập nhật theo từng đợt hợp tác; vui lòng liên hệ để phối hợp truyền thông hoặc đồng tổ chức.",
};

export const corporateKhachHang = {
  /** Khớp H1 trên icss.com.vn/khach-hang */
  title: "Khách hàng của chúng tôi",
  description:
    "Khách hàng ICS: ngân hàng, chính phủ, viễn thông và doanh nghiệp chuyển đổi số — an ninh mạng là nền tảng phát triển bền vững.",
  /** Đoạn mở đầu theo nội dung công khai trên icss.com.vn/khach-hang */
  intro:
    "Khách hàng của chúng tôi trải rộng từ ngân hàng, chính phủ, các doanh nghiệp vừa và nhỏ đến các tập đoàn lớn, hoạt động trong nhiều ngành nghề khác nhau. Họ đang chuyển đổi số, coi an ninh mạng là nền tảng để phát triển bền vững và giữ vững lợi thế cạnh tranh trên thị trường.",
  segments: [
    {
      title: "Ngành tài chính",
      body:
        "Ngân hàng, chứng khoán và bảo hiểm — nơi dữ liệu giao dịch và yêu cầu tuân thủ đòi hỏi giám sát liên tục, ứng phó sự cố và kiến trúc an toàn phù hợp mức độ nhạy cảm.",
      imageSeed: "ics-kh-finance-sector",
      imageAlt: "Minh họa môi trường tài chính và giao dịch số — phạm vi khách hàng ICS",
    },
    {
      title: "Chính phủ",
      body:
        "Cơ quan nhà nước và đơn vị sự nghiệp — ưu tiên tính sẵn sàng dịch vụ, bảo vệ dữ liệu công dân và đáp ứng khung pháp lý an ninh mạng trong vận hành số.",
      imageSeed: "ics-kh-government-sector",
      imageAlt: "Minh họa khu vực công và dịch vụ số — phạm vi khách hàng ICS",
    },
    {
      title: "Ngành viễn thông",
      body:
        "Nhà mạng và hạ tầng kết nối — bảo vệ biên mạng, trung tâm dữ liệu và dịch vụ hạ tầng số trước các chiến dịch tấn công quy mô lớn.",
      imageSeed: "ics-kh-telecom-sector",
      imageAlt: "Minh họa hạ tầng kết nối và truyền thông — phạm vi khách hàng ICS",
    },
  ],
};

export const corporateDoiTac = {
  title: "Đối tác",
  description:
    "Chương trình đối tác ICS: liên minh công nghệ, hợp tác kinh doanh và đào tạo nhằm triển khai an ninh mạng bền vững tại Việt Nam và khu vực.",
  heroEyebrow: "Hệ sinh thái hợp tác",
  heroTitle: "Cùng xây dựng hệ sinh thái an ninh mạng vững mạnh",
  intro:
    "ICS tự hào hợp tác với đối tác công nghệ và kinh doanh hàng đầu. Chúng tôi tin sự kết hợp giữa nền tảng tiên tiến và kinh nghiệm triển khai thực tế tạo ra giải pháp phù hợp nhất cho từng khách hàng — hướng tới môi trường số an toàn, có thể kiểm soát và mở rộng.",
  program: {
    eyebrow: "Chương trình đối tác",
    title: "Các cấp độ với quyền lợi và ưu đãi phù hợp",
    subtitle:
      "Thiết kế theo mô hình kênh và cam kết chung; chi tiết rebate, điều khoản và lộ trình đào tạo được thống nhất trong hợp đồng đối tác.",
    tiers: [
      {
        name: "Platinum Partner",
        highlights: [
          "Hỗ trợ ưu tiên 24/7",
          "Đào tạo chuyên sâu",
          "Đồng hành co-marketing",
          "Chính sách rebate ưu tiên",
        ],
      },
      {
        name: "Gold Partner",
        highlights: [
          "Hỗ trợ kỹ thuật theo gói",
          "Đào tạo sản phẩm và triển khai",
          "Hỗ trợ marketing",
          "Rebate cạnh tranh",
        ],
      },
    ],
  },
  tech: {
    eyebrow: "Đối tác công nghệ",
    title: "Nền tảng, bảo mật và hạ tầng dữ liệu",
    body:
      "Các đơn vị cung cấp phần mềm, giải pháp bảo mật và kiến trúc dữ liệu — phối hợp triển khai cùng đội kỹ thuật ICS.",
    partners: [
      {
        name: "Gurucul",
        imageSeed: "ics-partner-gurucul",
        body:
          "Giải pháp UEBA, SIEM thế hệ mới và nền tảng AI-SOC; ICS là Gurucul Certified AI-SOC Strategic Partner.",
      },
      {
        name: "HyperG & Oracle",
        imageSeed: "ics-partner-hyperg-oracle",
        body:
          "Liên minh giữa bảo mật đám mây (HyperG) và hạ tầng dữ liệu, quản trị doanh nghiệp (Oracle).",
      },
      {
        name: "CyStack",
        imageSeed: "ics-partner-cystack",
        body: "An ninh mạng chuyên sâu về rà soát lỗ hổng và bảo mật ứng dụng.",
      },
      {
        name: "VieSecurity",
        imageSeed: "ics-partner-viesecurity",
        body:
          "Đơn vị chuyên sâu về dịch vụ và giải pháp an toàn thông tin.",
      },
      {
        name: "Loca AI",
        imageSeed: "ics-partner-loca-ai",
        body: "Tập trung ứng dụng trí tuệ nhân tạo vào bài toán vận hành và sản phẩm thực tế.",
      },
      {
        name: "IRTech",
        imageSeed: "ics-partner-irtech",
        body: "Phát triển phần mềm, outsourcing và chuyển đổi số theo yêu cầu doanh nghiệp.",
      },
    ],
  },
  business: {
    eyebrow: "Đối tác kinh doanh",
    title: "Thương mại, đào tạo và nhân lực",
    body:
      "Kênh phân phối, chăm sóc triển khai và hợp tác giáo dục — mở rộng phạm vi phục vụ khách hàng cuối.",
    partners: [
      {
        name: "BlueNet",
        imageSeed: "ics-partner-bluenet",
        body: "Nhà phân phối, đại lý dịch vụ viễn thông và mạng.",
      },
      {
        name: "BitCare",
        imageSeed: "ics-partner-bitcare",
        body: "Dịch vụ hỗ trợ, bảo trì và chăm sóc khách hàng trong lĩnh vực CNTT.",
      },
      {
        name: "BigBen",
        imageSeed: "ics-partner-bigben",
        body: "Phân phối sản phẩm và dịch vụ giáo dục, đào tạo.",
      },
      {
        name: "Đại học Thủy lợi (TLU)",
        imageSeed: "ics-partner-tlu",
        body: "Hợp tác nguồn nhân lực, nghiên cứu và đào tạo.",
      },
      {
        name: "CTCP Học viện Công nghệ AI Việt Nam",
        imageSeed: "ics-partner-ai-academy-vn",
        body: "Giáo dục, đào tạo và cung ứng nhân sự chuyên về AI.",
      },
      {
        name: "Cathay",
        imageSeed: "ics-partner-cathay",
        body:
          "Tập đoàn tài chính, bảo hiểm — khách hàng chiến lược và đối tác dịch vụ tài chính.",
      },
    ],
  },
  cta: {
    title: "Trở thành đối tác của ICS",
    body:
      "Liên hệ để trao đổi mô hình hợp tác, lộ trình đào tạo và tài liệu chương trình phù hợp kênh của bạn.",
    primary: { label: "Đăng ký hợp tác", href: "/lien-he" },
    secondary: { label: "Tư vấn theo ngành", href: "/lien-he" },
  },
  certifications: [
    "ISO 27001",
    "Oracle Partner",
    "Gurucul AI-SOC Partner",
    "Verified",
  ],
};

export const legalPrivacy = {
  title: "Chính sách bảo mật",
  description:
    "Cách ICS thu thập, sử dụng và bảo vệ thông tin khi bạn tương tác với website và các kênh liên lạc chính thức.",
  updated: "Cập nhật minh họa: tháng 4/2026",
  sections: [
    {
      heading: "Phạm vi áp dụng",
      paragraphs: [
        "Chính sách này mô tả thông lệ đối với thông tin do bạn cung cấp qua biểu mẫu liên hệ, email, điện thoại hoặc các kênh do ICS quản lý (website, mạng xã hội chính thức).",
        "Nội dung mang tính tóm tắt nhằm minh bạch với khách truy cập; điều khoản cụ thể trong hợp đồng dịch vụ (nếu có) được ưu tiên áp dụng cho dữ liệu phát sinh từ hợp đồng đó.",
      ],
    },
    {
      heading: "Dữ liệu có thể xử lý",
      paragraphs: [
        "Thông tin nhận diện liên hệ (họ tên, chức danh, đơn vị), thông tin liên lạc (email, số điện thoại), nội dung tin nhắn hoặc tệp bạn đính kèm khi được mời gửi.",
        "Dữ liệu kỹ thuật cơ bản do trình duyệt gửi (ví dụ địa chỉ IP rút gọn, loại thiết bị) để vận hành bảo mật website và chống lạm dụng.",
      ],
    },
    {
      heading: "Mục đích sử dụng",
      paragraphs: [
        "Trả lời yêu cầu tư vấn, báo giá, hợp tác và tuyển dụng.",
        "Cải thiện nội dung website, đo lường ẩn danh mức độ quan tâm (khi bật công cụ phân tích và tuân thủ thông báo cookie).",
        "Tuân thủ nghĩa vụ pháp lý có thể áp dụng đối với nhà cung cấp dịch vụ an ninh mạng tại Việt Nam.",
      ],
    },
    {
      heading: "Lưu trữ và bảo vệ",
      paragraphs: [
        "Thời gian lưu giữ phụ thuộc mục đích xử lý và yêu cầu lưu trữ hồ sơ sau khi chốt tư vấn hoặc ký kết hợp đồng.",
        "ICS áp dụng biện pháp tổ chức và kỹ thuật phù hợp để hạn chế truy cập trái phép, mất mát hoặc thay đổi dữ liệu.",
      ],
    },
    {
      heading: "Chia sẻ với bên thứ ba",
      paragraphs: [
        "Chúng tôi không bán dữ liệu cá nhân. Thông tin có thể được chia sẻ với nhà cung cấp hạ tầng (hosting, email) hoặc đối tác triển khai trong phạm vi cần thiết và có cam kết bảo mật.",
      ],
    },
    {
      heading: "Quyền của bạn",
      paragraphs: [
        "Bạn có thể yêu cầu truy cập, chỉnh sửa hoặc ngừng xử lý trong phạm vi pháp luật cho phép bằng cách liên hệ qua email hoặc địa chỉ công bố trên trang Liên hệ.",
      ],
    },
  ],
};

export const legalTerms = {
  title: "Điều khoản sử dụng",
  description:
    "Điều kiện bạn đồng ý khi truy cập website ICS và sử dụng nội dung được công bố tại đây.",
  updated: "Cập nhật minh họa: tháng 4/2026",
  sections: [
    {
      heading: "Chấp nhận điều khoản",
      paragraphs: [
        "Việc sử dụng website đồng nghĩa bạn đọc và chấp nhận các điều khoản dưới đây. Nếu không đồng ý, vui lòng ngừng truy cập.",
      ],
    },
    {
      heading: "Nội dung và bản quyền",
      paragraphs: [
        "Văn bản, hình ảnh, nhãn hiệu và sắp xếp hiển thị thuộc quyền sở hữu của ICS hoặc được cấp phép sử dụng. Không sao chép cho mục đích thương mại nếu chưa có văn bản cho phép.",
      ],
    },
    {
      heading: "Miễn trừ trách nhiệm",
      paragraphs: [
        "Thông tin trên website nhằm mục đích giới thiệu và giáo dục tổng quát, không thay cho tư vấn pháp lý, kiểm thử hoặc khẳng định mức độ an toàn của một hệ thống cụ thể.",
        "ICS không chịu trách nhiệm đối với thiệt hại gián tiếp phát sinh từ việc bạn dựa vào nội dung công khai mà không qua xác nhận bằng hợp đồng dịch vụ.",
      ],
    },
    {
      heading: "Liên kết ngoài",
      paragraphs: [
        "Website có thể dẫn tới trang của đối tác hoặc tổ chức thứ ba. ICS không kiểm soát nội dung đó; bạn chịu trách nhiệm khi tiếp tục truy cập.",
      ],
    },
    {
      heading: "Thay đổi điều khoản",
      paragraphs: [
        "ICS có thể chỉnh sửa điều khoản để phản ánh thay đổi pháp lý hoặc vận hành. Phiên bản đăng tải tại trang này là phiên bản hiện hành.",
      ],
    },
  ],
};

/** Nội dung trang /nha-may-thong-minh — đồng bộ với [icss.com.vn/nha-may-thong-minh](https://icss.com.vn/nha-may-thong-minh). */
export const smartFactory = {
  title: "Giải pháp Nhà máy Thông minh",
  /** Chỉ cho `<head>` / OG — không bind nguyên văn vào hero. */
  seoDescription:
    "Smart Factory: AI, IoT, dashboard thời gian thực, cảnh báo sớm, tối ưu KPI và năng lượng, tích hợp ERP/SCADA. ICS tư vấn và triển khai.",
  heroEyebrow: "Nhà máy thông minh",
  heroIntro:
    "AI và IoT thu thập dữ liệu vận hành thời gian thực, phân tích tự động và hỗ trợ quyết định — nhà máy phản ứng nhanh, thích ứng và dự báo thay vì chỉ ghi nhận sau sự cố.",
  featuresSectionTitle: "Tính năng cốt lõi và lợi ích",
  featuresSectionLede: "Bốn trụ công nghệ, mỗi trụ gắn KPI và trải nghiệm vận hành rõ ràng.",
  features: [
    {
      id: "monitor",
      index: "01",
      title: "Giám sát sản xuất thời gian thực",
      body: "Smart Dashboard gom dữ liệu máy, dây chuyền và cảm biến IoT lên một màn điều hành.",
      benefit: "Theo dõi trạng thái máy, sản lượng và KPI tức thì để xử lý kịp thời.",
    },
    {
      id: "alert",
      index: "02",
      title: "Phát hiện sự cố và cảnh báo sớm",
      body: "Tự động nhận bất thường: lỗi thiết bị, quá tải, nguy cơ dừng chuyền.",
      benefit: "Khoanh vùng sự cố nhanh hơn, rút ngắn thời gian xử lý (theo benchmark triển khai).",
    },
    {
      id: "optimize",
      index: "03",
      title: "Tối ưu hiệu suất và năng lượng",
      body: "Một lớp KPI: sản xuất, điện năng, nhiệt độ, môi trường.",
      benefit: "So xu hướng, giảm lãng phí, tăng năng suất.",
    },
    {
      id: "leadership",
      index: "04",
      title: "Hỗ trợ quyết định cho lãnh đạo",
      body: "ERP, IoT, SCADA và thiết bị sản xuất được tích hợp và trực quan hóa thống nhất.",
      benefit: "Một góc nhìn tổng thể nhà máy cho quyết định chiến lược.",
    },
  ],
  whyTitle: "Tại sao chọn ICS?",
  whyPoints: [
    "AI vượt kịch bản cố định: hệ thống học từ dữ liệu vận hành.",
    "Trọn gói tư vấn — thiết kế — triển khai — bảo trì.",
    "Hỗ trợ 24/7.",
    "Kiến trúc module, mở rộng theo quy mô.",
  ],
  stats: [
    { label: "Năng suất (tham chiếu)", value: "+35%" },
    { label: "Giảm downtime (tham chiếu)", value: "−50%" },
    { label: "An toàn lao động (mục tiêu)", value: "99.9%" },
  ],
  statsDisclaimer: "Số liệu minh họa, kết quả thực tế phụ thuộc phạm vi triển khai.",
  finaleTitle: "Kiến tạo tương lai cho nhà máy",
  finaleBody:
    "Nhà máy thông minh giảm chi phí, tăng an toàn và năng suất. Đầu tư smart factory hôm nay là đầu tư cho vận hành ngày mai.",
  ctaLabel: "Liên hệ ngay",
  /** Liên kết đúng route nội bộ + nguồn gốc smartdashboard.vn */
  relatedLinks: [
    { label: "Smart Dashboard", href: "https://smartdashboard.vn", external: true as const },
    { label: "Giải pháp tòa nhà thông minh", href: "/toa-nha-thong-minh", external: false as const },
    { label: "AI SOC", href: "/products/ai-soc", external: false as const },
    { label: "Giới thiệu ICS", href: "/gioi-thieu", external: false as const },
  ],
} as const;

/** Trang /giai-phap-esg — tham chiếu [icss.com.vn/giai-phap-esg](https://icss.com.vn/giai-phap-esg). */
export const solutionEsg = {
  title: "Giải pháp ESG",
  tagline: "Tuân thủ và báo cáo bền vững cho doanh nghiệp",
  seoDescription:
    "Tư vấn và triển khai ESG: môi trường, xã hội, quản trị, KPI và báo cáo theo GRI, SASB, TCFD. ICS đồng hành doanh nghiệp Việt.",
  heroEyebrow: "ESG Solutions",
  heroIntro:
    "Thước đo thành công không còn chỉ là lợi nhuận: trách nhiệm môi trường, cam kết xã hội và minh bạch quản trị — ba trụ cột ESG — đang định hình uy tín và khả năng tiếp cận vốn. ICS giúp biến áp lực tuân thủ thành lộ trình đo lường và báo cáo rõ ràng.",
  featuresSectionTitle: "Giải pháp ESG toàn diện",
  featuresSectionLede: "Từ áp lực tuân thủ đến lợi thế cạnh tranh — lộ trình cho doanh nghiệp Việt.",
  features: [
    {
      id: "environmental",
      index: "01",
      title: "Môi trường (Environmental)",
      body: "Đánh giá và tối ưu tác động môi trường, giảm phát thải, dùng tài nguyên bền vững.",
      benefit: "Giảm rủi ro pháp lý và chi phí năng lượng; dữ liệu sẵn sàng cho báo cáo và đối tác.",
    },
    {
      id: "social",
      index: "02",
      title: "Xã hội (Social)",
      body: "Văn hóa doanh nghiệp, quyền lợi người lao động, trách nhiệm với cộng đồng.",
      benefit: "Gắn kết nội bộ và uy tín thương hiệu trước khách hàng, nhà đầu tư và chuỗi cung ứng.",
    },
    {
      id: "governance",
      index: "03",
      title: "Quản trị (Governance)",
      body: "Minh bạch quy trình, tuân thủ pháp luật, hệ thống quản trị hiệu quả.",
      benefit: "Giảm rủi ro vận hành; tăng niềm tin hội đồng quản trị và cổ đông.",
    },
    {
      id: "reporting",
      index: "04",
      title: "Báo cáo và đo lường",
      body: "Thiết lập KPI, thu thập dữ liệu, báo cáo theo chuẩn GRI, SASB, TCFD.",
      benefit: "Một khung báo cáo nhất quán cho ngân hàng, tập đoàn và yêu cầu ESG từ đối tác.",
    },
  ],
  whyTitle: "Tại sao chọn ICS?",
  whyLead: "ESG từ chiến lược đến triển khai — không dừng ở tài liệu giới thiệu.",
  whyPoints: [
    "Tư vấn chiến lược ESG theo bối cảnh ngành và quy mô.",
    "Lộ trình triển khai từng bước, có mốc và ưu tiên.",
    "Hỗ trợ đo lường và báo cáo theo khung quốc tế.",
    "Đào tạo nội bộ để đội chủ trì duy trì sau bàn giao.",
  ],
  stats: [
    { label: "Tiết kiệm chi phí (tham chiếu)", value: "20–30%" },
    { label: "Giá trị thương hiệu (tham chiếu)", value: "+40%" },
    { label: "Khung báo cáo quốc tế (mục tiêu)", value: "100%" },
  ],
  statsDisclaimer: "Số liệu minh họa theo tài liệu giới thiệu; kết quả phụ thuộc ngành, quy mô và phạm vi triển khai.",
  finaleTitle: "Bắt đầu hành trình ESG",
  finaleBody: "Liên hệ để trao đổi lộ trình ESG phù hợp ưu tiên và nguồn lực của doanh nghiệp bạn.",
  ctaLabel: "Liên hệ ngay",
  ctaHref: "/lien-he?loai=tu-van-giai-phap",
  relatedLinks: [
    { label: "Giới thiệu ICS", href: "/gioi-thieu", external: false as const },
    { label: "Tòa nhà thông minh", href: "/toa-nha-thong-minh", external: false as const },
    { label: "Nhà máy thông minh", href: "/nha-may-thong-minh", external: false as const },
  ],
} as const;

/** Nội dung trang /toa-nha-thong-minh — đồng bộ thông điệp với icss.com.vn (smart building). */
export const smartBuilding = {
  title: "Giải pháp Tòa nhà Thông minh",
  /** Chỉ cho `<head>` / OG — không bind nguyên văn vào hero. */
  seoDescription:
    "Smart Building với AI và IoT: EMS, an ninh tích hợp, tự động hóa tiện ích, BMS tập trung. ICS tư vấn, triển khai và đồng hành vận hành.",
  heroEyebrow: "Tòa nhà thông minh",
  heroIntro:
    'Hệ thống của chúng tôi sử dụng Trí tuệ nhân tạo (AI) và Internet vạn vật (IoT) để thu thập dữ liệu vận hành theo thời gian thực, tự động phân tích và đưa ra các quyết định thông minh. Kết quả là một tòa nhà không chỉ biết "phản ứng" mà còn có khả năng "thích ứng" và "dự báo", mang lại hiệu quả vượt trội trên mọi phương diện.',
  featuresSectionTitle: "Các Tính năng Cốt lõi và Lợi ích Vượt trội",
  featuresSectionLede:
    "Giải pháp Smart Building được xây dựng trên các trụ cột công nghệ vững chắc, mỗi trụ cột đều mang lại những giá trị kinh tế và trải nghiệm rõ rệt.",
  /** Một dòng “điểm mạnh” ngay trước danh sách — không trùng `seoDescription`. */
  featuresValueWedge:
    "Một tầng vận hành thống nhất: AI và IoT gom điện năng, an ninh, tiện nghi và BMS thành quyết định liên tục — không còn silo thiết bị rời rạc.",
  features: [
    {
      id: "ems",
      index: "01",
      title: "Hệ thống Quản lý Năng lượng Thông minh (EMS)",
      bodyBullets: [
        "AI phân tích thói quen sử dụng, điều kiện thời tiết và có người hay không theo từng khu vực.",
        "Tự động tối ưu điều hòa và chiếu sáng: tắt thiết bị khi không có người, nhiệt độ theo lịch, ưu tiên ánh sáng tự nhiên.",
      ],
      benefitBullets: [
        "Đòn bẩy chi phí: thường tiết kiệm khoảng 30–40% điện hàng tháng ở tòa lớn (mức cụ thể phụ thuộc triển khai).",
        "Giảm phát thải, hỗ trợ chứng chỉ công trình xanh và định vị thương hiệu bền vững.",
      ],
    },
    {
      id: "security",
      index: "02",
      title: "An ninh Tích hợp và Kiểm soát ra vào Thông minh",
      bodyBullets: [
        "Một lớp cho camera AI, cửa (khuôn mặt / thẻ / app) và nhật ký truy cập.",
        "Cảnh báo hành vi bất thường tức thì; dữ liệu lưu trữ để truy vết khi cần.",
      ],
      benefitBullets: [
        "Môi trường được giám sát liên tục, giảm phụ thuộc quy trình thủ công.",
        "Ban quản lý truy vết và xuất báo cáo an ninh nhanh, thống nhất.",
      ],
    },
    {
      id: "automation",
      index: "03",
      title: "Tự động hóa Tiện ích (Điều hòa, Chiếu sáng, Rèm cửa)",
      bodyBullets: [
        "Cá nhân hóa phòng qua app; điều chỉnh rèm theo hướng nắng.",
        "Ánh sáng và nhiệt độ tự thích ứng theo số người trong không gian.",
      ],
      benefitBullets: [
        "Tăng tiện nghi và mức độ hài lòng của người dùng tòa nhà.",
        "Với văn phòng cho thuê: điểm cạnh tranh để thu hút tenant chất lượng.",
      ],
    },
    {
      id: "bms",
      index: "04",
      title: "Nền tảng Quản lý Tòa nhà Tập trung (BMS)",
      bodyBullets: [
        "Năng lượng, an ninh, PCCC, HVAC… hiển thị trên một dashboard.",
        "Vận hành giám sát, điều khiển và nhận báo cáo tập trung.",
      ],
      benefitBullets: [
        "Giảm tải vận hành thủ công; quyết định nhanh hơn nhờ dữ liệu một nguồn.",
        "Gợi ý bất thường thiết bị sớm — hướng tới phòng ngừa sự cố.",
      ],
    },
  ],
  whyTitle: "Tại sao chọn Giải pháp từ ICS?",
  whyIntro: "Thị trường có nhiều lựa chọn, nhưng giải pháp của ICS tạo ra sự khác biệt nhờ:",
  whyPoints: [
    "Công nghệ AI độc quyền: Chúng tôi không chỉ tự động hóa theo kịch bản, mà còn sử dụng AI để hệ thống tự học hỏi và ngày càng thông minh hơn.",
    "Đội ngũ chuyên gia giàu kinh nghiệm: Chúng tôi cung cấp một giải pháp toàn diện từ tư vấn, thiết kế, triển khai cho đến bảo trì.",
    "Dịch vụ hỗ trợ 24/7: Đảm bảo hệ thống của bạn luôn hoạt động ổn định và được hỗ trợ kịp thời.",
    "Khả năng tùy biến và mở rộng linh hoạt: Giải pháp của chúng tôi được thiết kế theo dạng module, dễ dàng tùy chỉnh và nâng cấp theo quy mô phát triển của tòa nhà.",
  ],
  stats: [
    { label: "Tiết kiệm năng lượng", value: "30–40%" },
    { label: "Giám sát an ninh", value: "24/7" },
    { label: "Tăng giá trị tài sản", value: "+25%" },
  ],
  /** Một dòng ngữ cảnh cho chỉ số (benchmark / phụ thuộc triển khai). */
  statsContext:
    "Mức độ cụ thể phụ thuộc quy mô công trình, hạ tầng hiện có và phạm vi triển khai — số liệu tham chiếu từ các dự án tương đương.",
  finaleTitle: "Kiến tạo Tương lai cho Tòa nhà của bạn",
  finaleBody:
    "Một tòa nhà thông minh không chỉ là một công trình xây dựng – đó là một môi trường sống và làm việc thông minh, bền vững và đầy cảm hứng. Nó giúp cắt giảm chi phí, tăng cường an ninh, nâng cao giá trị tài sản và thu hút những khách hàng tốt nhất. Đầu tư vào một giải pháp smart building hôm nay chính là đầu tư cho sự thành công của ngày mai.",
  ctaLabel: "Liên hệ ngay",
} as const;

export const productVietguard = {
  title: "VietGuard",
  subtitle: "Mobile App Security",
  intro:
    "Giải pháp bảo vệ ứng dụng di động trước các kịch bản tấn công phổ biến và rủi ro tuân thủ dữ liệu.",
  modules: [
    "Bảo vệ các cuộc tấn công phổ biến",
    "Quản lý bề mặt tấn công",
    "Quản lý lỗ hổng",
    "Quản lý dự án kiểm toán",
    "Chương trình Bug Bounty",
    "Quét lỗ hổng APK theo hướng dẫn OWASP Mobile (thời gian quét ngắn theo cấu hình lab)",
  ],
  caseStudy:
    "Cathay Life Vietnam — ký kết và bàn giao sản phẩm bảo vệ Cathay Mobile App.",
  compliance:
    "Từ 01/01/2026, Luật Bảo vệ dữ liệu cá nhân có hiệu lực. Đội sản phẩm và pháp chế cần phối hợp đánh giá luồng dữ liệu trong ứng dụng.",
};

export const productAiSoc = {
  title: "AI SOC",
  definition:
    "AI SOC (Artificial Intelligence Security Operations Center) là trung tâm vận hành an ninh mạng ứng dụng trí tuệ nhân tạo.",
  /** Chỉ dùng trong `metadata` / OG / Twitter — không bind ra JSX body. */
  seoDescription:
    "Giải pháp AI SOC của ICS: Google Chronicle SIEM, Gurucul UEBA, giám sát 24/7, tự động hóa phát hiện và phản ứng. Tư vấn, demo và tài liệu walkthrough.",
  benefits: [
    "Phát hiện sự cố tự động 24/7",
    "Giám sát thời gian thực",
    "Phản ứng nhanh với mối đe dọa",
    "Giảm chi phí vận hành so với xây đội ngũ nội bộ quy mô lớn",
  ],
  audience:
    "Doanh nghiệp, ngân hàng, đơn vị tài chính và tổ chức có hệ thống CNTT trọng yếu.",
  hero: {
    tagline: "Cách mạng hóa vận hành An ninh mạng bằng Trí tuệ Nhân tạo",
    positioningLine:
      "ICS triển khai và đồng hành vận hành AI SOC tại Việt Nam — kết hợp nền tảng toàn cầu với hiểu biết bối cảnh pháp lý, ngành và vận hành địa phương.",
    lead:
      "Giải pháp AI SOC của ICS kết hợp nền tảng phân tích dữ liệu quy mô toàn cầu của Google với công nghệ phân tích hành vi tiên tiến từ Gurucul, giúp doanh nghiệp:",
    ctas: [
      {
        label: "Nhận tư vấn giải pháp AI SOC",
        href: "/lien-he?loai=tu-van-giai-phap",
        variant: "primary" as const,
      },
      {
        label: "Đặt lịch demo AI SOC",
        href: "/lien-he?loai=demo-ai-soc",
        variant: "secondary" as const,
      },
    ],
  },
  dashboard: {
    caption: "AI SOC Dashboard",
    imageSrc: "/images/home/product-ai-soc.jpg",
    imageAlt: "Giao diện trung tâm vận hành an ninh AI SOC — biểu đồ sự kiện, phân bổ traffic và KPI thời gian thực",
  },
  kpis: [
    { value: "70%", label: "Giảm 70% thời gian phản ứng sự cố" },
    { value: "90%", label: "Tự động hóa 90% quy trình phát hiện" },
    { value: "95%", label: "Độ chính xác 95% trong phát hiện mối đe dọa" },
    { value: "24/7", label: "Giám sát AI 24/7" },
  ],
  liveStats: [
    { value: "5B+", label: "Thiết bị bảo vệ" },
    { value: "< 1s", label: "Thời gian phát hiện" },
    { value: "4000+", label: "Mô hình AI" },
  ],
  kpiDisclaimer:
    "Các chỉ số phản ánh mục tiêu vận hành và benchmark tham chiếu — kết quả thực tế phụ thuộc quy mô log, SLA, tích hợp và mức tự động hóa đã triển khai.",
  reveal: {
    eyebrow: "Minh bạch tối đa",
    headline: "Rõ ràng và hiệu quả.",
    intro:
      "REVEAL mang lại cho đội ngũ an ninh độ rõ ràng và tập trung cần thiết để vận hành ở hiệu suất cao nhất và chuyển đổi SecOps từ phản ứng bị động sang chủ động.",
    sectionTitle: "Trung tâm điều hành SOC hiện đại",
    visibility: {
      title: "Khả năng hiển thị",
      body:
        "Hội tụ các công cụ từng rời rạc vào một trải nghiệm nền tảng thống nhất, giúp đội ngũ an ninh có bức tranh rõ ràng ngay cả với môi trường phức tạp nhất.",
    },
    pillars: [
      {
        id: "01",
        title: "Tập trung",
        body:
          "Machine Learning và tự động hóa cắt giảm nhiễu từ các cảnh báo bất thường và false positive, để bạn tập trung vào những gì thực sự cần xử lý.",
      },
      {
        id: "02",
        title: "Góc nhìn chiến lược",
        body:
          "Khi đội ngũ ngừng phản ứng bị động, họ có thể ưu tiên, lập kế hoạch và ứng phó tốt hơn. Quá trình hunting và điều tra trở nên nhanh và chính xác hơn.",
      },
      {
        id: "03",
        title: "Sự chủ động",
        body:
          "Từ sự tự tin và kiểm soát mới, đội SOC có thể dẫn dắt chiến lược bảo mật, nhìn xa hơn và thúc đẩy đổi mới liên tục.",
      },
    ],
  },
  platformCompare: {
    title: "So sánh nền tảng",
    subtitle: "Gurucul vs Thị trường",
    columns: ["Tính năng", "Gurucul NGSIEM", "NGSIEM khác", "SIEM truyền thống"] as const,
    rows: [
      {
        feature: "Không phụ thuộc Cloud, Data Lake và mô hình triển khai",
        gurucul: "Có",
        otherNgsiem: "Một phần",
        legacy: "Không",
      },
      {
        feature: "Giảm chi phí với quản lý data pipeline gốc",
        gurucul: "Có",
        otherNgsiem: "Một phần",
        legacy: "Không",
      },
      {
        feature: "Khả năng hiển thị do AI Agent dẫn dắt và nạp dữ liệu tự động",
        gurucul: "Có",
        otherNgsiem: "Một phần",
        legacy: "Không",
      },
      {
        feature: "Phân tích AI/ML tùy biến toàn diện",
        gurucul: "Có",
        otherNgsiem: "Có",
        legacy: "Một phần",
      },
      {
        feature: "Phát hiện độ chính xác cao bằng chuỗi mô hình ML",
        gurucul: "Có",
        otherNgsiem: "Một phần",
        legacy: "Không",
      },
      {
        feature: "Cảnh báo ưu tiên theo rủi ro động và quản lý case",
        gurucul: "Có",
        otherNgsiem: "Một phần",
        legacy: "Không",
      },
      {
        feature: "Tìm kiếm liên hợp toàn cục",
        gurucul: "Có",
        otherNgsiem: "Một phần",
        legacy: "Một phần",
      },
      {
        feature: "Phân loại cảnh báo và điều tra do Agentic AI dẫn dắt",
        gurucul: "Có",
        otherNgsiem: "Một phần",
        legacy: "Không",
      },
      {
        feature: "Trợ lý AI Virtual Analyst gốc nền tảng",
        gurucul: "Có",
        otherNgsiem: "Không",
        legacy: "Không",
      },
      {
        feature: "Phản ứng tự động với playbook do AI Agent tạo",
        gurucul: "Có",
        otherNgsiem: "Một phần",
        legacy: "Không",
      },
      {
        feature: "Khả năng liên thông và điều phối mượt mà",
        gurucul: "Có",
        otherNgsiem: "Có",
        legacy: "Một phần",
      },
      {
        feature: "Di trú hệ thống chỉ trong khoảng 4 tuần",
        gurucul: "Có",
        otherNgsiem: "Một phần",
        legacy: "Không",
      },
    ],
  },
  competitorCompare: {
    title: "Gurucul vượt trội so với đối thủ",
    subtitle: "So khớp nhanh các tiêu chí quyết định khi chọn nền tảng NGSIEM.",
    columns: ["Tiêu chí", "Gurucul", "Đối thủ"] as const,
    rows: [
      {
        criterion: "UEBA & Identity-based Detection",
        gurucul: "Vượt trội — tích hợp sâu với AI/ML",
        competitor: "Tốt — phụ thuộc ecosystem",
      },
      {
        criterion: "Tốc độ đổi mới",
        gurucul: "Vượt trội — tập trung SIEM độc quyền",
        competitor: "Trung bình — chậm do merger/acquisitions",
      },
      {
        criterion: "Quản lý dữ liệu Multicloud",
        gurucul: "Vượt trội — Data Optimizer tiên tiến",
        competitor: "Tốt — Federated search",
      },
      {
        criterion: "Behavioral Analytics",
        gurucul: "Vượt trội — 4000+ ML models",
        competitor: "Trung bình — UEBA cơ bản",
      },
    ],
  },
  marketPain: {
    eyebrow: "Bối cảnh thị trường",
    title: "Tại sao SOC truyền thống không còn đủ sức bảo vệ bạn?",
    intro: "Doanh nghiệp đang đối mặt với một thực tế khắc nghiệt:",
    introHighlight:
      "Khối lượng tấn công tăng, cảnh báo nổ tung, và thời gian phản ứng không còn là thứ xa xỉ — mà là điều kiện sống còn của vận hành số.",
    cards: [
      {
        stat: "1,512+",
        title: "Tấn công mỗi ngày",
        body: "Hơn 1.512 cuộc tấn công mạng mỗi ngày tại Việt Nam — manual SOC khó theo kịp tốc độ và độ phức tạp của threat landscape.",
      },
      {
        stat: "10K–11K",
        title: "Quá tải cảnh báo",
        body: "Mười đến mười một nghìn cảnh báo mỗi ngày, phần lớn là false positive — làm loãng năng lực phân tích thực.",
      },
      {
        stat: "83+",
        title: "Chiến dịch APT / năm",
        body: "Hơn 83 chiến dịch APT mỗi năm nhắm vào ngân hàng, tài chính, năng lượng, viễn thông và cơ quan nhà nước.",
      },
      {
        stat: "3.5M USD",
        title: "Chi phí SOC 24/7",
        body: "Chi phí duy trì SOC truyền thống 24/7 cực lớn; 52% đội SOC báo cáo quá tải công việc.",
      },
    ],
  },
  socVsAi: {
    title: "SOC truyền thống với AI SOC",
    lead:
      "Với hơn 1.512 tấn công mỗi ngày chỉ riêng tại Việt Nam, manual SOC không thể theo kịp. AI SOC phát hiện và phản ứng trong vài giây đến vài phút, không phải vài ngày đến vài tuần.",
    responseTimeHighlight: {
      hours: "277",
      hoursLabel: "giờ",
      traditionalCaption: "MTTR trung bình — SOC thủ công (tham chiếu benchmark thị trường)",
      aiCaption: "AI SOC — mục tiêu vận hành ICS",
      aiRange: "Vài giây → vài phút",
      note: "Số liệu thực tế phụ thuộc quy mô log, SLA và mức tự động hóa đã triển khai.",
    },
    rows: [
      {
        label: "Thời gian phản ứng",
        traditional: "SOC truyền thống: vài ngày → vài tuần; trung bình có thể lên đến hàng trăm giờ xử lý sự cố.",
        modern: "AI SOC: vài giây → vài phút nhờ tương quan và playbook tự động.",
      },
      {
        label: "Triage cảnh báo",
        traditional: "Thủ công, dễ bỏ sót khi khối lượng tăng đột biến",
        modern: "AI ưu tiên theo rủi ro động, giảm nhiễu false positive",
      },
    ],
  },
  gartner: {
    eyebrow: "Được công nhận bởi Gartner",
    title: "Gurucul — Leader trong Magic Quadrant 2025",
    body:
      "Nền tảng AI SOC của ICS được xây dựng trên Gurucul Next-Gen SIEM, được Gartner xếp hạng Leader nhờ khả năng đổi mới và phân tích hành vi.",
    linkLabel: "Tìm hiểu thêm báo cáo xếp hạng của Gartner",
    linkHref: "https://www.gartner.com/en/research/methodologies/magic-quadrants-overview",
    stats: [
      { value: "Leader", label: "Magic Quadrant 2025" },
      { value: "4000+", label: "ML models phân tích hành vi" },
      { value: "Top 3", label: "Phân khúc Next-Gen SIEM" },
      { value: "5B+", label: "Thiết bị được bảo vệ (hệ sinh thái)" },
    ],
    quote:
      "Gurucul vượt trội so với thị trường về khả năng đổi mới nhờ tập trung độc quyền vào SIEM, lộ trình phát triển linh hoạt và tốc độ đổi mới nhanh chóng.",
    quoteSource: "Gartner Magic Quadrant for Security Information and Event Management, 2025",
  },
  guruculHighlights: [
    {
      title: "Phân tích hành vi dựa trên AI/ML",
      body:
        "Hơn 4000 mô hình ML phân tích hành vi người dùng và hệ thống, phát hiện insider threat và tấn công tinh vi mà quy tắc chữ ký truyền thống bỏ sót.",
    },
    {
      title: "Quản lý dữ liệu nâng cao",
      body:
        "Data Optimizer lọc, định tuyến và tối ưu dữ liệu, giảm chi phí lưu trữ và tăng hiệu quả trong môi trường multicloud.",
    },
    {
      title: "Identity Threat Detection (ITDR)",
      body:
        "Tích hợp sâu UEBA với phát hiện dựa trên danh tính: chiếm quyền tài khoản, privilege escalation và lateral movement.",
    },
  ],
  ecosystem: {
    title: "Hệ sinh thái AI SOC toàn diện",
    lead:
      "ICS triển khai AI SOC thế hệ mới dựa trên kết hợp Google Chronicle / Google Security Operations và Gurucul REVEAL Platform.",
    subtitle: "Open, Cloud-Native & Hyperscale",
    capabilities: [
      {
        title: "Unlimited Storage",
        body: "Lưu trữ log không giới hạn thời gian, truy vấn trên petabyte dữ liệu trong giây.",
      },
      {
        title: "Real-time Processing",
        body: "Xử lý hơn 50 tỷ sự kiện mỗi ngày với độ trễ dưới 1 giây.",
      },
      {
        title: "450+ Integrations",
        body: "Kết nối mọi nguồn: cloud, on-prem, SaaS, network, endpoint.",
      },
      {
        title: "Auto-scaling",
        body: "Tự động scale theo nhu cầu, không giới hạn tăng trưởng.",
      },
    ],
    foundation: "Nền tảng: Google Chronicle SIEM + Gurucul UEBA",
    proof:
      "Công nghệ đã được chứng minh trên quy mô bảo vệ toàn cầu — tham chiếu các tổ chức Fortune 500 và doanh nghiệp lớn.",
    relatedProduct: {
      label: "Bảo vệ điểm cuối cùng CSA Endpoint",
      href: "/products/csa-endpoint",
    },
  },
  faq: [
    {
      question: "AI SOC của ICS triển khai trên cloud, on-prem hay hybrid?",
      answer:
        "Kiến trúc mở: có thể triển khai theo mô hình cloud, on-prem hoặc kết hợp tùy chính sách dữ liệu và yêu cầu tuân thủ. Đội ICS đánh giá hiện trạng và đề xuất mô hình phù hợp trong workshop đầu tiên.",
    },
    {
      question: "Dữ liệu log và sự cố được lưu ở đâu?",
      answer:
        "Theo thiết kế kiến trúc và lựa chọn khách hàng — hỗ trợ lưu trữ kéo dài và truy vấn trên quy mô lớn. Chi tiết vùng lưu trữ, retention và mã hóa được làm rõ trong hợp đồng và assessment.",
    },
    {
      question: "Mất bao lâu để bắt đầu thấy giá trị sau triển khai?",
      answer:
        "Phụ thuộc phạm vi nguồn log và playbook; nhiều khách hàng bắt đầu thấy giảm nhiễu cảnh báo và tăng tốc triage trong các giai đoạn pilot. Roadmap cụ thể được thống nhất sau assessment.",
    },
    {
      question: "AI SOC có thay thế hoàn toàn đội SOC nội bộ không?",
      answer:
        "Không. Mục tiêu là tự động hóa phần lớn tác vụ L1, ưu tiên rủi ro và rút ngắn MTTR — để đội chuyên sâu tập trung hunting, chiến lược và xử lý sự cố phức tạp.",
    },
    {
      question: "Tích hợp với EDR, firewall và IAM hiện có như thế nào?",
      answer:
        "Nền tảng hỗ trợ hàng trăm tích hợp sẵn; ICS hỗ trợ ánh xạ nguồn dữ liệu và playbook phản ứng liên kết với stack bảo mật hiện tại của bạn.",
    },
    {
      question: "Chi phí triển khai được tính ra sao?",
      answer:
        "Phụ thuộc khối lượng dữ liệu, số nguồn, mức dịch vụ vận hành và thời hạn. Vui lòng gửi yêu cầu qua trang liên hệ — đội ICS phản hồi với phạm vi và bước tiếp theo rõ ràng.",
    },
  ],
  architecturePillars: {
    title: "Bốn trụ cột của AI SOC",
    intro: "Mỗi thành phần đóng vai trò then chốt, liên kết tạo nên hệ sinh thái bảo mật toàn diện.",
    items: [
      {
        n: "01",
        title: "Next-Gen SIEM",
        subtitle: "Google Chronicle",
        bullets: [
          "Lưu trữ log không giới hạn thời gian",
          "Truy vấn nhanh trên petabyte dữ liệu",
          "Giảm false positive nhờ tương quan AI",
          "Hơn 450 nguồn dữ liệu tích hợp sẵn",
        ],
        cta: { label: "Tư vấn kiến trúc", href: "/lien-he?loai=tu-van-giai-phap" },
      },
      {
        n: "02",
        title: "UEBA Platform",
        subtitle: "Gurucul UEBA",
        bullets: [
          "Hơn 4000 mô hình ML phân tích hành vi người dùng và hệ thống",
          "Phát hiện: tài khoản bị chiếm quyền, insider, lateral movement, leo thang đặc quyền",
          "Không phụ thuộc chữ ký (signature-less)",
        ],
        cta: { label: "Đặt workshop UEBA", href: "/lien-he?loai=demo-ai-soc" },
      },
      {
        n: "03",
        title: "AI SOC Analyst",
        subtitle: "Agentic AI",
        bullets: [
          "Thay thế phần lớn công việc L1 analyst, vận hành 24/7",
          "Tự động triage, điều tra và tương quan cảnh báo",
          "Báo cáo sự cố có giải thích và đề xuất hành động khắc phục",
        ],
        cta: { label: "Xem demo analyst", href: "/lien-he?loai=demo-ai-soc" },
      },
      {
        n: "04",
        title: "SOAR Automation",
        subtitle: "Orchestration & Response",
        bullets: [
          "Hơn 1000 playbook có sẵn cho nhiều kịch bản",
          "Cô lập endpoint, chặn IP, thu hồi token theo playbook",
          "Tích hợp EDR, firewall, IAM, cloud security — rút ngắn MTTR",
        ],
        cta: { label: "Trao đổi SOAR", href: "/lien-he?loai=tu-van-giai-phap" },
      },
    ],
  },
  process: {
    title: "Chu trình khép kín",
    subtitle: "Xác định – Bảo vệ – Phát hiện – Phản ứng – Phục hồi",
    steps: [
      { n: "01", title: "Ingestion — Thu thập", detail: "Cloud, endpoint, network, IAM, SaaS — log tập trung, chuẩn hóa tức thời.", badge: "Real-time" },
      { n: "02", title: "Detection — Phát hiện", detail: "AI/ML đối soát threat intelligence toàn cầu; phát hiện bất thường chưa từng biết.", badge: "< 1 giây" },
      { n: "03", title: "Analysis — Phân tích", detail: "AI kết hợp chuyên gia ICS phân tích ngữ cảnh, loại bỏ false positive.", badge: "< 1 giây" },
      { n: "04", title: "Response — Phản ứng", detail: "Kích hoạt playbook tự động, hạn chế lan rộng trong vài giây.", badge: "< 5 giây" },
    ],
  },
  roi: {
    title: "Tại sao chọn ICS?",
    subtitle: "Chuyên gia an ninh mạng đồng hành cùng doanh nghiệp Việt",
    metrics: [
      { value: "100%", label: "Dân chủ hóa dữ liệu", body: "Lưu dữ liệu nơi bạn muốn." },
      { value: "40%", label: "Giảm chi phí dữ liệu", body: "Tối ưu pipeline và retention hợp lý." },
      { value: "70%", label: "Giảm cảnh báo giả", body: "Tập trung vào mối đe dọa thực." },
      { value: "83%", label: "Giảm MTTR", body: "Rút ngắn thời gian phản ứng trung bình." },
    ],
    savings: [
      "Giảm 60–70% chi phí vận hành SOC truyền thống",
      "Giảm thiệt hại từ rò rỉ dữ liệu theo mô hình rủi ro tổ chức",
    ],
    performance: [
      "Phản ứng nhanh hơn đáng kể so với xử lý thủ công",
      "Phát hiện APT và insider threat với phân tích hành vi",
      "Phủ sóng 24/7 với tự động hóa và playbook",
    ],
    team: [
      "Giải phóng SOC khỏi tác vụ L1 lặp lại",
      "Tập trung threat hunting và chiến lược",
      "Giảm burnout, tăng chất lượng quyết định",
    ],
  },
  resources: {
    title: "Tài liệu và case study",
    card: {
      title: "Gurucul Workshop Walkthrough",
      body:
        "Tài liệu chi tiết về cách AI SOC hoạt động trong thực tế — từ ingestion đến response, kèm use case và góc nhìn ROI.",
      bullets: ["Kiến trúc hệ thống", "Demo thực tế", "Use cases cụ thể", "ROI calculator"],
      cta: { label: "Tải tài liệu miễn phí", href: "/lien-he?loai=tai-lieu-ai-soc" },
    },
  },
  closing: {
    title: "Sẵn sàng nâng tầm An ninh mạng?",
    lead:
      "Đội ngũ chuyên gia ICS tư vấn miễn phí, đánh giá hiện trạng và đề xuất roadmap triển khai AI SOC phù hợp với doanh nghiệp bạn.",
    offers: [
      { title: "Tư vấn miễn phí", body: "Workshop 2–4 giờ với chuyên gia." },
      { title: "Assessment nhanh", body: "Đánh giá security posture và khoảng trống kiểm soát." },
      { title: "Roadmap cụ thể", body: "Lộ trình triển khai theo ưu tiên rủi ro và ngân sách." },
    ],
    ctas: [
      { label: "Đặt lịch tư vấn ngay", href: "/lien-he?loai=tu-van-giai-phap", variant: "primary" as const },
      { label: "Xem demo trực tuyến", href: "/lien-he?loai=demo-ai-soc", variant: "secondary" as const },
    ],
  },
  gurucul: {
    title: "Đối tác chiến lược Gurucul",
    body:
      "ICS là Gurucul Certified AI-SOC Strategic Partner (chứng nhận ngày 17/12/2025). Gurucul AI-SOC Analyst hỗ trợ giảm Mean Time to Resolution (MTTR) và xử lý tự động cảnh báo cấp một theo tài liệu nhà cung cấp.",
    disclaimer:
      "Số liệu hiệu năng cụ thể phụ thuộc môi trường triển khai, khối lượng log và cấu hình playbook của khách hàng. Thông tin Gartner mang tính tham chiếu công khai; vui lòng xem báo cáo đầy đủ từ Gartner.",
  },
} as const;

export const productCsa = {
  title: "CSA Endpoint Security",
  bullets: [
    "Giải pháp bảo mật điểm cuối 4-trong-1",
    "Phát hiện virus, ransomware, trojan bằng AI",
    "Zero Trust Architecture tại điểm cuối",
    "Ngăn chặn mối đe dọa mà không cần nhận diện phần mềm độc hại trước",
    "Bảo vệ thiết bị đầu cuối ngoài mạng công ty (làm việc hybrid)",
  ],
};

export const productVAi = {
  title: "V AI Agent",
  displayTitle: "V AI — Agent",
  /** Chỉ dùng trong `metadata` / OG / Twitter — không bind ra JSX body. */
  seoDescription:
    "Tích hợp nhắn tin, gọi thoại/video và AI bot in-app trong 48 giờ — không tự lo code hay hạ tầng. Messaging API, SDK, console phân tích, tuân thủ ISO 27001. Đăng ký dùng thử và demo cùng ICS.",
  hero: {
    eyebrow: "Giải pháp hàng đầu cho doanh nghiệp",
    headline: "Đừng để người dùng rời bỏ ứng dụng",
    lead:
      "Tích hợp Nhắn tin, Gọi điện và AI Bot chỉ trong 48 giờ. Không phải lo code, không phải lo infrastructure.",
    stat: { value: "220K+", label: "Người dùng hoạt động (tham chiếu triển khai)" },
    ctas: [
      {
        label: "Xem Case Study",
        href: "/articles",
        variant: "secondary" as const,
      },
      {
        label: "Bắt đầu dùng thử miễn phí",
        href: "/lien-he?loai=demo-v-ai-agent",
        variant: "primary" as const,
      },
    ],
  },
  dashboard: {
    caption: "V AI — Agent",
    imageSrc: "/images/home/v-agent.jpg",
    imageAlt: "Khung chat và tương tác in-app — V AI Agent",
  },
  statsDisclaimer:
    "Một số con số mang tính tham chiếu thị trường và hồ sơ triển khai; kết quả cụ thể phụ thuộc mô hình kinh doanh, lưu lượng và cấu hình của từng khách hàng.",
  pain: {
    eyebrow: "Nỗi đau thực tế",
    title: "Tại sao tự xây dựng chat là một sai lầm đắt giá?",
    intro:
      "Nhiều doanh nghiệp đánh giá thấp sự phức tạp của việc xây dựng tính năng nhắn tin.",
    items: [
      {
        title: "Chi phí ẩn khổng lồ",
        body: "10+ kỹ sư, 6+ tháng, $40,000+ trước khi ra mắt",
      },
      {
        title: "Rủi ro hạ tầng",
        body: "Tin nhắn trễ, mất dữ liệu, sập hệ thống khi livestream/sự kiện",
      },
      {
        title: "Bảo mật phức tạp",
        body: "Ngăn rác, nội dung độc hại, tuân thủ tiêu chuẩn quốc tế",
      },
    ],
  },
  solution: {
    eyebrow: "Giải pháp: V AI — Agent",
    title: "Chúng tôi gánh vác mọi rủi ro kỹ thuật",
    body:
      "Bạn tập trung 100% vào kinh doanh. Không phải lo code, không phải lo infrastructure.",
  },
  features: {
    eyebrow: "Tính năng",
    title: "4 tính năng mạnh mẽ",
    intro: "Mỗi tính năng được thiết kế để giải quyết một bài toán cụ thể",
    items: [
      {
        title: "Messaging API & SDK",
        subtitle: "Chat 1-1, nhóm, kênh mở",
        body: "Tích hợp đơn giản, hỗ trợ đầy đủ cho chat thời gian thực như iMessage/Zalo",
      },
      {
        title: "Voice & Video Call",
        subtitle: "Cuộc gọi HD chuẩn",
        body: "Gọi thoại/video chất lượng cao với mã hóa bảo mật đầu cuối",
      },
      {
        title: "AI Chatbot & Trợ lý",
        subtitle: "Tự động CSKH 24/7",
        body: "Tự động hóa với AI, tóm tắt nội dung và dịch thuật đa ngôn ngữ",
      },
      {
        title: "Console & BI Analytics",
        subtitle: "Dashboard theo thời gian thực",
        body: "Giám sát mọi metric, lọc nội dung tự động bằng AI",
      },
    ],
  },
  automation: {
    eyebrow: "Công nghệ tự động hóa",
    title: "Tự động hóa tất cả quy trình tương tác",
    intro:
      "Không cần can thiệp thủ công. Hệ thống AI của V AI — Agent tự động xử lý những tương tác phức tạp, giải quyết vấn đề nhanh chóng và cải thiện trải nghiệm khách hàng.",
    items: [
      {
        title: "Xử lý tin nhắn tự động",
        body: "Phân loại, ưu tiên và trả lời tin nhắn mà không cần nhân viên",
      },
      {
        title: "Phân luồng & định tuyến hội thoại thông minh",
        body: "Tự động nhận diện nhu cầu, chuyển tiếp đúng kịch bản hoặc bộ phận xử lý phù hợp",
      },
      {
        title: "Tối ưu hóa quy trình",
        body: "Học từ mọi tương tác để cải thiện liên tục độ chính xác",
      },
      {
        title: "Giảm chi phí nhân sự",
        body: "Tự động hóa 70% công việc hỗ trợ khách hàng (mục tiêu tham chiếu triển khai)",
      },
    ],
  },
  compare: {
    eyebrow: "So sánh",
    title: "Tự xây dựng vs V AI — Agent",
    subtitle: "Dữ liệu tham chiếu từ 50+ doanh nghiệp",
    rows: [
      { criterion: "Thời gian ra mắt", build: "6 – 9 tháng", vai: "1 – 2 tuần" },
      { criterion: "Chi phí ban đầu", build: "> $40,000", vai: "Dùng bao nhiêu trả bấy nhiêu" },
      { criterion: "Độ ổn định", build: "Phụ thuộc IT", vai: "99,9% (AWS/GCP)" },
      { criterion: "Bảo trì & cập nhật", build: "Tốn nhân lực", vai: "Tự động & miễn phí" },
      { criterion: "Tính năng AI", build: "Khó tích hợp", vai: "Có sẵn & tích hợp" },
    ],
  },
  industries: {
    eyebrow: "Kịch bản ứng dụng",
    title: "Các ngành đã thành công",
    intro: "Từ Game đến Healthcare, V AI — Agent đều chứng minh hiệu quả",
    items: [
      {
        title: "Game & Entertainment",
        body: "Chat trong game, lập đội, trao đổi vật phẩm mà không thoát app",
        signal: "220K+ users",
      },
      {
        title: "Social & Hidol",
        body: "Fan nhắn trực tiếp với thần tượng qua VIP ticket hoặc subscription",
        signal: "Direct messaging",
      },
      {
        title: "E-commerce & Retail",
        body: "Chat tư vấn sản phẩm trực tiếp, tăng tỷ lệ chốt đơn 3x",
        signal: "+300% conversion (case tham chiếu)",
      },
      {
        title: "Healthcare & Eldercare",
        body: "Gọi video giám sát sức khỏe từ xa, tích hợp robot chăm sóc",
        signal: "Remote monitoring",
      },
    ],
  },
  security: {
    eyebrow: "Bảo mật",
    title: "Dữ liệu của bạn luôn an toàn",
    intro: "Tuân thủ tiêu chuẩn bảo mật quốc tế, giám sát 24/7",
    items: [
      {
        title: "Chứng chỉ ISO",
        body: "Tuân thủ ISO 27001, SOC 2 và tiêu chuẩn bảo mật quốc tế",
      },
      {
        title: "Giám sát 24/7",
        body: "Phát hiện và xử lý sự cố ngay lập tức trước khi người dùng nhận ra",
      },
      {
        title: "Chủ quyền dữ liệu",
        body: "Bạn sở hữu 100% dữ liệu người dùng và nội dung hội thoại",
      },
      {
        title: "White-label solution",
        body: "Chúng tôi đứng sau, nhưng thương hiệu hiển thị là của bạn",
      },
      {
        title: "Auto-scaling hạ tầng",
        body: "Dựa trên AWS/GCP, đã kiểm chứng qua hàng triệu người dùng",
      },
      {
        title: "99,9% Uptime guarantee",
        body: "SLA cam kết, hoặc bạn được tiền hoàn lại (theo điều khoản hợp đồng)",
      },
    ],
  },
  productUi: {
    eyebrow: "Trải nghiệm sản phẩm",
    title: "Giao diện tương tác, tự động hóa và dashboard",
    items: [
      {
        title: "Giao diện tương tác",
        body: "Thiết kế hiện đại, dễ sử dụng",
        badge: "Mới",
      },
      {
        title: "Tự động hóa thông minh",
        body: "Công nghệ AI tự động xử lý",
      },
      {
        title: "Dashboard thông minh",
        body: "Phân tích dữ liệu real-time",
      },
    ],
  },
  steps: {
    eyebrow: "Quy trình triển khai",
    title: "4 bước đến thành công",
    intro: "Từ đăng ký đến go-live chỉ trong vài ngày",
    items: [
      {
        step: "01",
        title: "Đăng ký & nhận API Key",
        body: "Truy cập Console V AI — Agent và tạo tài khoản developer",
      },
      {
        step: "02",
        title: "Tích hợp SDK",
        body: "Vài dòng code nhúng khung chat vào iOS/Android/Web",
      },
      {
        step: "03",
        title: "Tùy chỉnh UI",
        body: "Dùng UI Kit đồng bộ với màu sắc thương hiệu của bạn",
      },
      {
        step: "04",
        title: "Go-Live",
        body: "Bắt đầu kết nối người dùng và theo dõi tăng trưởng",
      },
    ],
  },
  midCta: {
    title: "Sẵn sàng bắt đầu?",
    body:
      "Không cần credit card, không cần contract dài. Chỉ cần 5 phút để setup tài khoản developer.",
    primary: { label: "Đăng ký miễn phí ngay", href: "/lien-he?loai=demo-v-ai-agent" },
  },
  faq: {
    eyebrow: "Câu hỏi thường gặp",
    title: "Những câu hỏi từ CTO/CEO",
    intro: "Câu trả lời chi tiết từ engineering team của chúng tôi",
    items: [
      {
        q: "V AI — Agent có hỗ trợ chuyển đổi dữ liệu từ nền tảng cũ sang không?",
        a: "Có. Đội triển khai hỗ trợ lập kế hoạch migration, mapping hội thoại và người dùng, đồng bộ lịch sử theo phạm vi kỹ thuật và điều khoản bảo mật. Thời gian và chi phí phụ thuộc độ phức tạp của hệ thống nguồn.",
      },
      {
        q: "Nếu ứng dụng của tôi có hàng triệu người dùng, hệ thống có tải nổi không?",
        a: "Nền tảng thiết kế theo hướng horizontal scale trên AWS/GCP, có auto-scaling và tách lớp realtime. Chúng tôi chạy capacity review trước go-live và theo dõi SLO sau triển khai để đảm bảo headroom.",
      },
      {
        q: "Chi phí được tính như thế nào?",
        a: "Thường theo mô hình dùng bao nhiêu trả bấy nhiêu: lưu lượng tin nhắn/cuộc gọi, MAU hoặc gói cam kết tối thiểu tùy hợp đồng. Sales sẽ gửi bảng giá và kịch bản forecast sau khi hiểu use case.",
      },
      {
        q: "Bạn cung cấp hỗ trợ kỹ thuật như thế nào?",
        a: "Kênh Slack/Teams hoặc email ưu tiên theo SLA, tài liệu API/SDK, sandbox và checklist tích hợp. Gói doanh nghiệp có người phụ trách kỹ thuật định danh trong giờ làm việc hoặc 24/7 theo hợp đồng.",
      },
      {
        q: "Có thể tùy chỉnh giao diện chat không?",
        a: "Có. UI Kit cho phép đồng bộ màu thương hiệu, font, bubble, avatar và luồng nút hành động. Một số layout nâng cao có thể cần review hiệu năng trên từng nền tảng.",
      },
    ],
    salesLine: "Câu hỏi khác không có trong danh sách?",
    salesCta: { label: "Liên hệ với Sales Team", href: "/lien-he?loai=tu-van-giai-phap" },
  },
  closing: {
    kicker: "Tiết kiệm ngân sách lên đến 60% · Tiết kiệm thời gian quản lý đến 40%",
    body:
      "Bạn không chỉ tiết kiệm chi phí. Bạn còn nhận được sự hỗ trợ 24/7 từ đội ngũ ICS.",
    ctas: [
      { label: "Bắt đầu thử nghiệm ngay", href: "/lien-he?loai=demo-v-ai-agent", variant: "primary" as const },
      { label: "Lên lịch demo", href: "/lien-he?loai=lich-demo", variant: "secondary" as const },
    ],
  },
} as const;
