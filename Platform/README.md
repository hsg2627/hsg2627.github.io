# Xương sống dữ liệu — web học liệu số

Bộ mã tối thiểu để mọi màn hình xây sau này **tự động sinh dữ liệu nghiên cứu**.
Xây phần này xong rồi mới dựng giao diện học.

## Chạy thử tại máy

Không mở `index.html` bằng cách nhấp đúp — trình duyệt sẽ chặn ES module.
Phải chạy qua một máy chủ nội bộ:

```bash
python -m http.server 8777
```

Rồi mở `http://127.0.0.1:8777/index.html`.

## Cấu trúc

```
Platform/
├─ index.html          Bàn thử — chứng minh xương sống chạy đúng
├─ core/               XƯƠNG SỐNG (phần này ổn định, ít sửa)
│  ├─ config.js        Hằng số, luật XP, danh sách event_type hợp lệ
│  ├─ util.js          uuid, thời gian, đọc/ghi localStorage an toàn
│  ├─ identity.js      Mã định danh giả (KHÔNG lưu tên thật)
│  ├─ store.js         Trạng thái học tập, lưu bền
│  ├─ logger.js        Sinh dòng log đúng lược đồ, quản lý phiên
│  ├─ transport.js     Hàng đợi ngoại tuyến + gửi lô
│  └─ spine.js         ⭐ Giao diện công khai duy nhất
└─ server/
   └─ Code.gs          Dán vào script.google.com
```

## Hợp đồng

Màn hình **chỉ được gọi `Spine.*`**. Không đụng trực tiếp vào `localStorage`,
`fetch`, hay import `store`/`logger`/`transport`.

Giữ đúng quy tắc này thì sau muốn đổi chỗ lưu dữ liệu (Sheet → Firebase) chỉ
phải sửa trong `core/`, không phải mở lại từng màn hình.

```js
import { Spine } from './core/spine.js';

const r = await Spine.init();
if (r.needIdentity) { /* hiện màn hình nhập mã */ }
await Spine.signIn('NK10A1-07');

Spine.openModule('vocab', 1);
Spine.viewItem('U1-VOC-014', { module: 'vocab', unit: 1 });   // bắt đầu bấm giờ
const res = Spine.answerItem('U1-VOC-014', {
  module: 'vocab', unit: 1, response: 'B', correct: true,
});
// res = { xp_delta, gold_delta, streak, level, leveled_up }

Spine.completeQuest('daily-01', { gold: 20, xp: 30 });
Spine.aiEvalOpen('AF-U1-003',  { kind: 'spot_error', hasError: true });
Spine.aiEvalAnswer('AF-U1-003',{ kind: 'spot_error', hasError: true,
                                 correct: false, chosen: 'span-3' });

Spine.exportMyData();
await Spine.deleteMyData();
```

## Kết nối Google Sheet

1. Tạo Google Sheet mới, lấy ID trong URL.
2. Mở `script.google.com` → dự án mới → dán toàn bộ `server/Code.gs`.
3. Sửa `SHEET_ID` và `ADMIN_TOKEN` ở đầu tệp.
4. Chạy hàm `setup()` một lần.
5. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone** ← bắt buộc, nếu không web không gửi được
6. Chép URL `/exec` dán vào `CONFIG.ENDPOINT` trong `core/config.js`.

Mỗi lần sửa `Code.gs` phải **Deploy lại (New version)** thì thay đổi mới có hiệu lực.

## Đối soát hằng tuần

```
<URL_EXEC>?token=<ADMIN_TOKEN>
```

Trả về số sự kiện, số phiên và số ngày hoạt động của từng mã học sinh.
Dùng để phát hiện sớm học sinh có dữ liệu bất thường (không vào bao giờ, hoặc
log đứt giữa chừng) — đừng đợi đến lúc phân tích mới biết.

## Vì sao không mất và không trùng dữ liệu

Apps Script trả lời qua một lần chuyển hướng, nên đôi khi trình duyệt không đọc
được phản hồi **dù dữ liệu đã ghi thành công**.

- Nếu lúc đó xoá hàng đợi → **mất dữ liệu**.
- Nếu giữ lại → có thể **gửi trùng**.

Cách xử lý: web **luôn giữ lại khi không chắc**, và máy chủ **loại trùng theo
`event_id`** (nhớ trong 6 giờ). Kết quả: mỗi sự kiện vào Sheet đúng một lần.

## Đã kiểm chứng

| Phép thử | Kết quả |
|---|---|
| Mã sai định dạng | Bị chặn, báo lỗi rõ ràng |
| Mã đúng | Tự viết hoa, tách được `class_id` |
| `latency_ms` | Khớp thời gian chờ thật (709ms cho 700ms) |
| Tải lại trang | XP, vàng, tiến độ, hàng đợi còn nguyên |
| Phiên qua lần tải lại | Vẫn cùng một `session_id` |
| Chưa cấu hình ENDPOINT | Không mất dữ liệu, không vỡ giao diện |
| `event_type` sai tên | Bị chặn, không vào hàng đợi |

## Còn phải làm trước khi thu dữ liệu

- [ ] Dán `ENDPOINT` thật và chạy lại toàn bộ bàn thử
- [ ] Thử tắt mạng giữa chừng → bật lại → kiểm tra Sheet không có dòng trùng
- [ ] Thử trên điện thoại thật của học sinh, không phải máy tính
- [ ] Đổi `APP_VERSION` thành `v1.0.0` rồi **đóng băng**
