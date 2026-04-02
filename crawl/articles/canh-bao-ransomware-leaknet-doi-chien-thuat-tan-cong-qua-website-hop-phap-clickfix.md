---
source: https://icss.com.vn/articles/canh-bao-ransomware-leaknet-doi-chien-thuat-tan-cong-qua-website-hop-phap-clickfix
captured: 2026-04-02
note: "Nội dung lấy từ trang production sau khi render; link map sang route icss-web."
---

# Công ty Cổ phần An ninh mạng Quốc tế - ICS

## Nội dung

Chia sẻ bài viết:

Facebook

Twitter

LinkedIn

Sao chép

⚠️ ClickFix – “cái bẫy” cực kỳ nguy hiểm

ClickFix là một dạng social engineering mới:

Hiển thị lỗi giả / CAPTCHA giả

Yêu cầu người dùng copy & chạy lệnh

👉 Thực chất là tự tay chạy malware

➡️ Điểm nguy hiểm:

Bypass hầu hết giải pháp bảo mật truyền thống

Không cần exploit phức tạp

🧠 Malware mới: dùng Deno để né detection

LeakNet sử dụng công cụ tải mã độc viết bằng Deno:

Giải mã payload Base64 ngay trong memory

Không ghi file xuống ổ cứng (fileless attack)

Thu thập thông tin hệ thống

Kết nối về máy chủ điều khiển (C2)

👉 Khiến EDR/Antivirus khó phát hiện hơn rất nhiều

🔗 Chuỗi tấn công (Attack Chain)

Sau khi xâm nhập thành công:

Sử dụng DLL Side-loading (jli.dll)

Thực thi mã trong môi trường Java

Di chuyển ngang bằng PsExec

Tải và triển khai malware qua S3 storage

➡️ Toàn bộ quy trình chuẩn hóa & tự động hóa cao

🎯 Insight quan trọng

Hacker đang chuyển từ “mua quyền truy cập” → “tự tấn công quy mô lớn”

Social engineering đang trở thành vector chính

Malware ngày càng “fileless” → khó detect

🛡️ Khuyến nghị cho doanh nghiệp

Chặn hành vi copy & execute script bất thường

Đào tạo nhân viên về ClickFix / social engineering

Monitor hoạt động PowerShell, CMD, certutil

Triển khai EDR có khả năng phát hiện behavior

Giám sát kết nối bất thường ra ngoài (C2)

📌 Kết luận:

👉 LeakNet cho thấy một xu hướng mới cực nguy hiểm:

Không cần hack – chỉ cần lừa người dùng tự mở cửa cho hacker.

#CyberSecurity #Ransomware #LeakNet #ClickFix #ThreatIntel #SOC #VietGuard

## Liên kết nội bộ (đã chuẩn hóa)

- [/](/)
- [Đối tác](/#doi-tac)
- [Tin tức](/articles)
- [Tuyển dụng](/tuyen-dung)
- [Liên hệ](/lien-he)
- [Liên hệ chúng tôi](/lien-he)
- [1SOC là gì? Trung tâm điều hành an ninh mạng – “lá chắn sống còn” của doanh nghiệp trong kỷ nguyên số01/04/2026](/articles/soc-la-gi-trung-tam-dieu-hanh-an-ninh-mang-la-chan-song-con-cua-doanh-nghiep-trong-ky-nguyen-so)
- [2🚨 Thực trạng an ninh mạng Việt Nam 2025–2026: Báo động đỏ cho doanh nghiệp01/04/2026](/articles/thuc-trang-an-ninh-mang-viet-nam-20252026-bao-dong-do-cho-doanh-nghiep)
- [3🚨 LỘ LỌT DỮ LIỆU: DOANH NGHIỆP CÓ THỂ “TRẢ GIÁ” TỚI 5% DOANH THU25/03/2026](/articles/lo-lot-du-lieu-doanh-nghiep-co-the-tra-gia-toi-5-doanh-thu)
- [4🛡️ Đẩy mạnh thi hành Luật An ninh mạng: Bước chuyển chiến lược từ chính sách sang thực thi25/03/2026](/articles/day-manh-thi-hanh-luat-an-ninh-mang-buoc-chuyen-chien-luoc-tu-chinh-sach-sang-thuc-thi)
- [5🚨 THÔNG BÁO: An ninh mạng & dữ liệu Việt Nam đối mặt nguy cơ gia tăng nghiêm trọng23/03/2026](/articles/thong-bao-an-ninh-mang-du-lieu-viet-nam-doi-mat-nguy-co-gia-tang-nghiem-trong)
- [01/04/2026SOC là gì? Trung tâm điều hành an ninh mạng – “lá chắn sống còn” của doanh nghiệp trong kỷ nguyên sốSOC (Secur](/articles/soc-la-gi-trung-tam-dieu-hanh-an-ninh-mang-la-chan-song-con-cua-doanh-nghiep-trong-ky-nguyen-so)
- [01/04/2026🚨 Thực trạng an ninh mạng Việt Nam 2025–2026: Báo động đỏ cho doanh nghiệpTrong giai đoạn 2025–2026, an ninh ](/articles/thuc-trang-an-ninh-mang-viet-nam-20252026-bao-dong-do-cho-doanh-nghiep)
- [25/03/2026🚨 LỘ LỌT DỮ LIỆU: DOANH NGHIỆP CÓ THỂ “TRẢ GIÁ” TỚI 5% DOANH THU👉 Và cái giá phải trả có thể không chỉ là dữ](/articles/lo-lot-du-lieu-doanh-nghiep-co-the-tra-gia-toi-5-doanh-thu)
- [V AI - Agent](/products/v-ai-agent)
- [VietGuard](/products/vietguard)
- [AI SOC](/products/ai-soc)
- [CSA-Endpoint](/products/csa-endpoint)
- [Pentest Services](/lien-he)
- [Giải pháp tòa nhà thông minh](/toa-nha-thong-minh)
- [Giải pháp nhà máy thông minh](/nha-may-thong-minh)
- [Giải pháp ESG](/gioi-thieu)
- [Giải pháp AI SOC](/products/ai-soc)
- [Giới thiệu về ICS](/gioi-thieu)
