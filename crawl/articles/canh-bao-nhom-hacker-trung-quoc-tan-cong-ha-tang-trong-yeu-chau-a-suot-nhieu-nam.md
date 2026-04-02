---
source: https://icss.com.vn/articles/canh-bao-nhom-hacker-trung-quoc-tan-cong-ha-tang-trong-yeu-chau-a-suot-nhieu-nam
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

🧠 Chiến thuật tấn công tinh vi & khó phát hiện

Nhóm CL-UNK-1068 sử dụng kết hợp nhiều loại công cụ:

Malware tùy chỉnh

Công cụ mã nguồn mở bị chỉnh sửa

Công cụ hợp pháp có sẵn trong hệ thống (LOLBins)

Các mã độc được sử dụng bao gồm:

Godzilla

ANTSWORD (web shell)

Xnote (backdoor Linux)

FRP (Fast Reverse Proxy)

➡️ Điểm đáng chú ý: Chúng hoạt động đa nền tảng (Windows & Linux) và duy trì hiện diện lâu dài trong hệ thống.

⚠️ Cách hacker đánh cắp dữ liệu (rất đáng chú ý)

Quy trình tấn công điển hình:

Xâm nhập web server → cài web shell

Di chuyển ngang trong hệ thống

Thu thập dữ liệu quan trọng:

File cấu hình (.config, .aspx, .dll…)

Lịch sử trình duyệt

File Excel, CSV

Backup database (.bak)

💥 Thủ đoạn exfiltration cực kỳ tinh vi:

Nén dữ liệu bằng WinRAR

Encode Base64 bằng certutil

Hiển thị dữ liệu ngay trên web shell (không cần upload file)

👉 Giúp né detection từ hệ thống giám sát mạng.

🧬 Kỹ thuật nâng cao

DLL Side-loading thông qua Python

Công cụ do thám nội bộ (SuperDump, ScanPortPlus)

Thu thập credential bằng:

Mimikatz

Volatility

DumpItForLinux

SSMS password extractor

➡️ Cho thấy khả năng leo thang đặc quyền & kiểm soát toàn bộ hệ thống.

🎯 Đánh giá mối đe dọa

CL-UNK-1068 cho thấy:

Khả năng tấn công dài hạn (APT)

Ẩn mình tốt (stealthy operation)

Nhắm vào critical infrastructure

👉 Đây là dấu hiệu điển hình của chiến dịch gián điệp cấp quốc gia.

🛡️ Khuyến nghị cho doanh nghiệp

Kiểm tra hệ thống web server (đặc biệt thư mục /inetpub/wwwroot)

Giám sát hành vi encode dữ liệu bất thường (Base64, certutil)

Triển khai EDR/XDR để phát hiện lateral movement

Kiểm soát quyền truy cập & credential chặt chẽ

Audit log hệ thống định kỳ

📌 Kết luận:

Cuộc tấn công của CL-UNK-1068 là lời cảnh báo rõ ràng rằng:

👉 “Hacker không cần phá hủy hệ thống – chỉ cần âm thầm thu thập dữ liệu trong thời gian dài là đủ gây thiệt hại lớn.”

#CyberSecurity #APT #ThreatIntel #DataBreach #SOC #VietGuard #CyberAttack

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
- [6🚨 Cảnh báo: Ransomware LeakNet đổi chiến thuật – tấn công qua website hợp pháp & ClickFix19/03/2026](/articles/canh-bao-ransomware-leaknet-doi-chien-thuat-tan-cong-qua-website-hop-phap-clickfix)
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
