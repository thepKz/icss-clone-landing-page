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
  { href: "/gioi-thieu", label: "Giải pháp ESG" },
  { href: "/products/ai-soc", label: "Giải pháp AI SOC" },
];

export const navFooterMeta: NavItem[] = [
  { href: "/gioi-thieu", label: "Giới thiệu về ICS" },
  { href: "/khach-hang", label: "Khách hàng" },
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
];

export const navProducts: NavItem[] = [
  { href: "/products/v-ai-agent", label: "V AI Agent" },
  { href: "/products/ai-soc", label: "AI SOC" },
  { href: "/products/csa-endpoint", label: "CSA Endpoint" },
  { href: "/products/vietguard", label: "VietGuard" },
];

/** Mục menu có tiêu đề + mô tả (desktop mega dropdown) */
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
    href: "/gioi-thieu",
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
    cta: { label: "Tìm hiểu thêm", href: "/articles" },
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
    ctaPrimary: { label: "Tìm hiểu thêm", href: "/gioi-thieu" },
    ctaSecondary: { label: "Liên hệ tư vấn", href: "/lien-he" },
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
  ],
  stats: {
    eyebrow: "Báo cáo tóm tắt",
    title: "ICS trong con số",
    subtitle:
      "Đội ngũ và dự án phục vụ khách hàng doanh nghiệp, tài chính và hạ tầng trọng yếu.",
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
      },
      {
        slug: "ai-soc",
        name: "AI SOC",
        desc: "Trung tâm điều hành an ninh mạng được trang bị AI tiên tiến",
        href: "/products/ai-soc",
      },
      {
        slug: "csa-endpoint",
        name: "CSA Endpoint",
        desc: "Giải pháp bảo mật điểm cuối và ngăn chặn mất mát dữ liệu",
        href: "/products/csa-endpoint",
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
      },
      {
        name: "Smart Factory Security",
        desc: "Bảo mật nhà máy thông minh với giám sát OT/IT tích hợp",
        href: "/nha-may-thong-minh",
      },
      {
        name: "Smart Building Security",
        desc: "An ninh mạng cho tòa nhà thông minh, IoT và hệ thống BMS",
        href: "/toa-nha-thong-minh",
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
};

export const about = {
  intro:
    "Là đơn vị tiên phong trong lĩnh vực an ninh mạng tại Việt Nam và khu vực, chuyên cung cấp các giải pháp bảo mật toàn diện cho thời đại công nghệ số. ICS tập trung vào các giải pháp bảo mật cho nhiều lĩnh vực trọng yếu, bao gồm: bảo vệ ứng dụng, an ninh cho nhà máy thông minh, tòa nhà thông minh và đặc biệt là hệ thống điều hành trung tâm AI SOC.",
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
  leadership: [
    { role: "Tổng Giám đốc", name: "Võ Trung Âu", note: "CEO" },
    { role: "COO", name: "Đang cập nhật", note: "Sẽ công bố khi có thông tin chính thức" },
    { role: "CTO", name: "Đang cập nhật", note: "Sẽ công bố khi có thông tin chính thức" },
    { role: "CMO", name: "Đang cập nhật", note: "Sẽ công bố khi có thông tin chính thức" },
  ],
  productFootnote: [
    "Giải pháp bảo mật điểm cuối với Zero Trust",
    "Giải pháp ESG và bảo mật trong kỷ nguyên số",
    "Bảo mật IoT từ cảm biến đến cloud",
  ],
};

export const careers = {
  headline: "Tại sao nên gia nhập ICS?",
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
    },
    {
      title: "Nhân viên Kinh doanh Giải pháp Công nghệ",
      dept: "Kinh doanh",
      level: "Nhân viên",
      type: "Toàn thời gian",
      salary: "15–20 triệu++ VNĐ/tháng",
      brief:
        "Tư vấn và phát triển khách hàng doanh nghiệp cho các giải pháp công nghệ",
    },
    {
      title: "Kỹ sư Bảo mật (Security Engineer)",
      dept: "Kỹ thuật",
      level: "Chuyên gia",
      type: "Toàn thời gian",
      salary: "Thỏa thuận theo năng lực",
      brief:
        "Vận hành AI SOC và đảm bảo an toàn cho các hệ thống di động trọng yếu",
    },
    {
      title: "Giám đốc Marketing",
      dept: "Marketing",
      level: "Quản lý cấp cao",
      type: "Toàn thời gian",
      salary: "Thỏa thuận + hoa hồng cao",
      brief:
        "Xây dựng chiến lược Marketing tổng thể và hệ thống Lead Generation tự động hóa",
    },
    {
      title: "Giám đốc Kinh doanh",
      dept: "Kinh doanh",
      level: "Quản lý cấp cao",
      type: "Toàn thời gian",
      salary: "Thỏa thuận + hoa hồng cao",
      brief:
        "Dẫn dắt đội ngũ kinh doanh và chịu trách nhiệm chiến lược doanh thu",
    },
  ],
};

export const contactPage = {
  title: "Liên hệ",
  subtitle:
    "Đội ngũ ICS phản hồi các yêu cầu tư vấn giải pháp, hợp tác và báo chí trong giờ làm việc.",
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
  title: "Khách hàng",
  description:
    "ICS phục vụ doanh nghiệp có hệ thống trọng yếu: tài chính, sản xuất, hạ tầng số và tổ chức có yêu cầu tuân thủ cao.",
  intro:
    "Chúng tôi triển khai SOC, bảo vệ ứng dụng, endpoint và không gian OT/IT với phạm vi hợp đồng rõ ràng, báo cáo định kỳ và đội vận hành hỗ trợ theo cam kết từng dự án.",
  segments: [
    {
      title: "Ngân hàng và dịch vụ tài chính",
      body:
        "Giám sát liên tục, ứng phó sự cố và tư vấn tuân thủ phù hợp mức độ nhạy cảm của luồng dữ liệu và giao dịch.",
    },
    {
      title: "Sản xuất và hạ tầng trọng yếu",
      body:
        "Bảo vệ nhà máy thông minh, liên thông OT/IT và giảm thời gian gián đoạn do sự cố an ninh.",
    },
    {
      title: "Tổ chức đa chi nhánh",
      body:
        "Kiến trúc thống nhất cho tòa nhà thông minh, endpoint và đám mây, với một đầu mối điều phối cảnh báo.",
    },
  ],
  proofLine:
    "Mục tiêu vận hành và số liệu minh họa nằm tại phần tóm tắt trên trang chủ; hồ sơ năng lực chi tiết có thể được chia sẻ sau buổi làm việc đầu tiên.",
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

export const smartFactory = {
  title: "Smart Factory Security",
  lede:
    "Giải pháp bảo mật tích hợp cho nhà máy thông minh, nối liền vùng vận hành OT và hệ thống IT.",
  bullets: [
    "Dashboard tổng hợp dữ liệu KPI sản xuất, tiêu thụ năng lượng, nhiệt độ và môi trường",
    "Giúp doanh nghiệp phân tích xu hướng và tối ưu vận hành, giảm chi phí",
    "Giám sát luồng dữ liệu giữa thiết bị công nghiệp và lớp quản trị tập trung",
  ],
  closing:
    "Kết hợp với Smart Dashboard và AI SOC, ICS xây dựng lớp quan sát thống nhất cho nhà máy có độ phức tạp cao.",
};

export const smartBuilding = {
  title: "Smart Building Security",
  lede:
    "An ninh mạng cho tòa nhà thông minh: IoT, BMS và các hệ thống điều khiển tích hợp.",
  bullets: [
    "Thuật toán AI phân tích thói quen sử dụng, điều kiện thời tiết và sự hiện diện con người",
    "Tự động tối ưu hoạt động dựa trên phân tích ngữ cảnh",
    "Giảm rủi ro mở rộng bề mặt tấn công khi số lượng thiết bị IoT tăng nhanh",
  ],
  closing:
    "Chúng tôi thiết kế kiến trúc phân vùng, giám sát và phản ứng phù hợp với mô hình vận hành tòa nhà của bạn.",
};

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
  benefits: [
    "Phát hiện sự cố tự động 24/7",
    "Giám sát thời gian thực",
    "Phản ứng nhanh với mối đe dọa",
    "Giảm chi phí vận hành so với xây đội ngũ nội bộ quy mô lớn",
  ],
  audience:
    "Doanh nghiệp, ngân hàng, đơn vị tài chính và tổ chức có hệ thống CNTT trọng yếu.",
  gurucul: {
    title: "Nền tảng Gurucul",
    body:
      "ICS là Gurucul Certified AI-SOC Strategic Partner (chứng nhận ngày 17/12/2025). Gurucul AI-SOC Analyst hỗ trợ giảm Mean Time to Resolution (MTTR) và xử lý tự động cảnh báo cấp một theo tài liệu nhà cung cấp.",
    disclaimer:
      "Số liệu hiệu năng cụ thể phụ thuộc môi trường triển khai và cấu hình playbook của khách hàng.",
  },
};

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
  subtitle: "Nền tảng giao tiếp in-app",
  body:
    "Nền tảng giao tiếp in-app toàn diện với AI Chatbot, hướng tới cải thiện trải nghiệm người dùng và tăng tỷ lệ giữ chân. Nội dung chi tiết sẽ được bổ sung khi có tài liệu sản phẩm đầy đủ từ đội ICS.",
  highlights: [
    "Chatbot ngữ cảnh theo hành trình người dùng trong ứng dụng",
    "Tích hợp pipeline nội dung và cảnh báo theo chính sách doanh nghiệp",
    "Khả năng mở rộng theo lưu lượng và kênh hỗ trợ",
  ],
};
