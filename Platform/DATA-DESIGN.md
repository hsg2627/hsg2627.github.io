# Thiết kế dữ liệu học liệu

Bổ sung cho `README.md` (xương sống log) và `CONTENT-SPEC.md` (ràng buộc nội dung
theo CT 2018). Tài liệu này quy định **nội dung được lưu ra sao** để một tệp vừa
chạy được trên web, vừa phân tích được cho luận văn.

---

## 1. Bốn nguyên tắc

**Siêu dữ liệu nghiên cứu nằm trong chính item.** Không tách ra bảng tính riêng.
Bảng tính rời luôn lệch khỏi nội dung sau vài tuần sửa, và lúc đó không ai biết
bản nào đúng.

**Tách định danh khỏi thứ tự.** `id` của unit không bao giờ đổi; thứ tự học do
tệp lịch trình quyết định. Đây là cách sửa lỗi đánh số làm vỡ tiến trình HK2, và
là điều kiện để hai trường có tiến độ khác nhau dùng chung một kho nội dung.

**Nội dung là tệp tĩnh, không có máy chủ.** JSON đặt cạnh trang, nạp bằng
`fetch`. Không cần build, không cần cơ sở dữ liệu.

**Màn hình chỉ gọi `Spine.*`.** Giữ nguyên hợp đồng trong README. Bộ nạp nội dung
là mối quan tâm riêng, không được đụng vào `store`/`logger`/`transport`.

---

## 2. Cây thư mục

```
Platform/
├─ core/                 XƯƠNG SỐNG — giữ nguyên
├─ content/
│  ├─ loader.js          nạp + cache JSON (KHÔNG log, KHÔNG đụng core)
│  ├─ manifest.json      chỉ mục toàn bộ module
│  ├─ schedules.json     thứ tự học theo từng trường
│  ├─ grammar/           g01.json … g14.json
│  ├─ vocab/             u01.json … u10.json
│  ├─ skills/            u06-reading.json, u06-listening.json, u06-writing.json …
│  └─ ai-eval/           ae-hk1.json, ae-hk2.json
├─ media/audio/          chỉ khi làm Listening
└─ screens/
```

---

## 3. Hai chỗ phải sửa trong `core/` trước

**`config.js` — mở khoá tiền tố trường.** Hiện tại:

```js
ID_PATTERN: /^NK(1[0-2][A-Z]\d?)-(\d{2})$/i,
```

Chỉ nhận `NK`. Học sinh trường thứ hai không vào được. Sửa thành:

```js
SCHOOLS: { NK: 'Nguyễn Khuyến', TP: '<trường thứ hai>' },
ID_PATTERN: /^(NK|TP)(1[0-2][A-Z]\d?)-(\d{2})$/i,
```

`identity.js` phải tách thêm `school_id` từ nhóm bắt thứ nhất và đưa vào mọi
dòng log — nếu không, lúc phân tích không tách được hai trường.

**Thêm `CONTENT_VERSION`.** Mọi dòng log đã mang `APP_VERSION` và
`SCHEMA_VERSION`. Thêm một hằng nữa và đóng băng cùng lúc:

```js
CONTENT_VERSION: 'c1.0.0',
```

Nhờ nó, lúc phân tích mới nối chắc chắn được `item_id` trong log với siêu dữ liệu
trong tệp JSON đúng phiên bản.

---

## 4. `manifest.json` — chỉ mục

```json
{
  "content_version": "c1.0.0",
  "modules": [
    {
      "id": "u06",
      "kind": "unit",
      "title": "Gender Equality",
      "topic": 5,
      "gs_unit": 6,
      "semester": "HK2",
      "parts": {
        "vocab":     "vocab/u06.json",
        "reading":   "skills/u06-reading.json",
        "listening": "skills/u06-listening.json",
        "writing":   "skills/u06-writing.json"
      }
    },
    {
      "id": "g07",
      "kind": "grammar",
      "title": "Past Simple vs Past Continuous",
      "grammar": [4],
      "semester": "both",
      "parts": { "items": "grammar/g07.json" }
    },
    {
      "id": "ae-hk2",
      "kind": "ai_eval",
      "title": "Xưởng AI · học kỳ 2",
      "semester": "HK2",
      "parts": { "items": "ai-eval/ae-hk2.json" }
    }
  ]
}
```

`topic` trỏ vào mục 2 của `CONTENT-SPEC.md`; `grammar` trỏ vào danh mục mục 3.
Hai trường này là toàn bộ chỗ neo chương trình — đừng chép lại tên chủ đề dài
dòng vào từng item.

---

## 5. `schedules.json` — cách sửa lỗi thứ tự

```json
{
  "NK": {
    "HK1": ["u01","u02","u03","u04","u05"],
    "HK2": ["u06","u07","u08","u09","u10"]
  },
  "TP": {
    "HK1": ["u01","u02","u03","u04","u05"],
    "HK2": ["u06","u09","u07","u10","u08"]
  }
}
```

Màn hình đọc `school_id` từ mã định danh, đọc học kỳ hiện tại từ cấu hình, rồi
mở khoá theo đúng danh sách đó. Unit HK1 vẫn truy cập được nhưng nằm ở khu **ôn
tập**, không nằm trong chuỗi nhiệm vụ hằng ngày.

Điền hai danh sách này **sau khi đối chiếu phân phối chương trình thật** của cả
hai trường. Đây là tệp duy nhất phải sửa nếu một trường đổi tiến độ giữa chừng.

---

## 6. Lược đồ item chung

Mọi item, bất kể loại, mang ba khối: định danh, neo chương trình, xuất xứ.

```json
{
  "id": "U06-VOC-014",
  "type": "mcq",
  "curriculum": { "topic": 5, "grammar": [7], "semester": "HK2", "skill": "language" },
  "stem": "The new policy ___ by the committee last month.",
  "options": [
    { "key": "A", "text": "approved" },
    { "key": "B", "text": "was approved" },
    { "key": "C", "text": "has approved" },
    { "key": "D", "text": "is approving" }
  ],
  "answer": "B",
  "rationale": {
    "B": "Câu bị động, thì quá khứ đơn.",
    "A": "Thiếu trợ động từ bị động.",
    "C": "Chủ động, sai vai nghĩa."
  },
  "provenance": { }
}
```

Các `type` khác dùng chung ba khối trên, chỉ đổi phần thân:

| `type` | Trường riêng |
|---|---|
| `mcq` | `options`, `answer` |
| `cloze` | `text` có `{{1}}`, `blanks: [{ id, answer, accept: [] }]` |
| `rewrite` | `prompt`, `accept: []` (mảng đáp án chấp nhận được) |
| `match` | `pairs: [{ left, right }]` |
| `flashcard` | `front`, `back`, `example` |
| `reading` | `passage` (220–250 từ), `questions: []` |
| `listening` | `audio`, `transcript`, `questions: []` (180–200 từ) |
| `writing` | `prompt`, `model` (120–150 từ), `checklist: []` |
| `ai_eval` | xem mục 7 |

Độ dài lấy từ mục 4 của `CONTENT-SPEC.md` — là ràng buộc, không phải gợi ý.

**Writing không có người chấm.** Trường `checklist` là bảng kiểm để học sinh tự
đối chiếu với `model`. Ghi nhận bằng `Spine.submitArtifact(taskId, { unit, aiUse })`
— `artifact_submit` đã có sẵn trong `EVENT_TYPES`, và `aiUse` chính là chỗ khai
báo có dùng AI hay không, tức dữ liệu cho năng lực 6.2.

---

## 7. Item đánh giá AI — phần quan trọng nhất

```json
{
  "id": "AE-HK2-023",
  "type": "ai_eval",
  "kind": "spot_error",
  "ai_generated": true,
  "curriculum": { "topic": 8, "grammar": [15], "semester": "HK2", "skill": "reading" },
  "spans": [
    { "id": "s1", "text": "Many students today " },
    { "id": "s2", "text": "prefer to learn online " },
    { "id": "s3", "text": "because internet " },
    { "id": "s4", "text": "gives them access to many free courses." }
  ],
  "error": {
    "present": true,
    "span": "s3",
    "category": 5,
    "correction": "because the internet",
    "explanation": "Danh từ xác định duy nhất cần mạo từ 'the'."
  },
  "provenance": { }
}
```

`category` là số thứ tự trong typology 7 loại ở mục 6 của `CONTENT-SPEC.md`. Đây
là trường gánh toàn bộ RQ3 — thiếu nó thì không có phân tích theo loại lỗi.

**Bắt buộc: khoảng 30% item phải không có lỗi.**

```json
{
  "id": "AE-HK2-024",
  "type": "ai_eval",
  "kind": "spot_error",
  "ai_generated": true,
  "spans": [ ],
  "error": { "present": false, "probe_category": 5 }
}
```

Lý do là đo lường, không phải sư phạm. Nếu item nào cũng có lỗi, học sinh học
được mẹo "cứ khoanh đại một chỗ" và điểm cao mà không hề đánh giá gì. Có item
sạch thì mới tính được **tỉ lệ báo động giả** bên cạnh tỉ lệ phát hiện, và mới
phân biệt được em đánh giá cẩn thận với em khoanh bừa. `probe_category` ghi loại
lỗi mà item này *trông giống* nhưng không có — nhờ đó quy được báo động giả về
từng loại.

Chia ngân hàng làm hai tệp `ae-hk1.json` và `ae-hk2.json` theo nguồn ngôn ngữ, để
tương phản "đã củng cố" với "đang học" của RQ3 là một phép lọc chứ không phải một
lần rà tay.

---

## 8. Khối `provenance` — nhật ký thẩm định sống trong dữ liệu

```json
"provenance": {
  "generator": "gemini-2.5-pro",
  "generated_at": "2026-09-14",
  "prompt_id": "PT-AE-02",
  "validation": {
    "status": "revised",
    "checks": {
      "linguistic": "pass",
      "syllabus":   "pass",
      "register":   "revised",
      "piloted":    "pending"
    },
    "reviewer": "R1",
    "note": "Bản gốc dùng 'utilise', vượt Bậc 3 — đổi thành 'use'.",
    "revised_at": "2026-09-20"
  }
}
```

Bốn khoá trong `checks` đúng bốn chốt thẩm định ở mục 7 của `CONTENT-SPEC.md`.

Nhờ khối này, tỉ lệ nhận / sửa / loại theo từng dạng item — thứ đề cương hứa báo
cáo như một kết quả độc lập — tính được bằng một câu lệnh duyệt tệp, thay vì đếm
tay vào phút chót. Item bị loại **giữ lại trong tệp** với `status: "rejected"` và
cờ `active: false`, đừng xoá: mẫu lỗi của mô hình chính là dữ liệu.

---

## 9. Nối vào Spine

Không thêm `event_type` mới. Những gì cần đã có:

| Hành vi | Gọi | Ghi chú |
|---|---|---|
| Mở unit | `Spine.openModule('vocab', 6)` | |
| Hiện câu hỏi | `Spine.viewItem(id, { module, unit })` | bắt đầu bấm giờ |
| Trả lời | `Spine.answerItem(id, { module, unit, response, correct })` | |
| Mở tác vụ AI | `Spine.aiEvalOpen(id, { kind, hasError })` | `hasError` lấy từ `error.present` |
| Trả lời tác vụ AI | `Spine.aiEvalAnswer(id, { kind, hasError, correct, chosen, reason })` | `chosen` là `span.id` |
| Nộp bài viết | `Spine.submitArtifact(id, { unit, aiUse })` | |

**Đề nghị bổ sung một tham số:** truyền thêm `category` vào `aiEvalAnswer`. Về
nguyên tắc có thể nối lại từ JSON lúc phân tích, nhưng có sẵn trong Sheet thì
bảng RQ3 chính đọc được ngay mà không cần chạy script nối — và đối soát hằng
tuần phát hiện sớm được nếu một loại lỗi nào đó không ai đụng tới.

`reason` là trường tự luận ngắn: *"vì sao em cho rằng chỗ đó sai?"*. Đừng bỏ
qua — đó là dữ liệu định tính cho RQ3, và nó tự đến mà không cần thêm buổi phỏng
vấn nào.

---

## 10. Ngoại tuyến

Sự kiện đã có hàng đợi ngoại tuyến. Nội dung thì chưa. Trên điện thoại học sinh
với mạng chập chờn, mất nội dung nghĩa là mất buổi học.

Cách đơn giản, không cần service worker: `loader.js` cache mỗi tệp JSON vào
`localStorage` theo khoá `content:{module_id}:{CONTENT_VERSION}`, và xoá mọi khoá
mang phiên bản cũ khi khởi động. Chỉ cache **unit của học kỳ hiện tại**, không
cache cả kho — `localStorage` chỉ khoảng 5MB.

Không cache audio. Đó là lý do nữa để Listening chỉ làm cho 5 unit HK2.

---

## 11. Thứ tự dựng

1. Sửa `ID_PATTERN` và thêm `school_id`, `CONTENT_VERSION` vào `core/`
2. `manifest.json` + `schedules.json` + `loader.js` — chưa cần nội dung thật
3. Một unit HK2 đầy đủ bốn kỹ năng làm mẫu tham chiếu (đề xuất `u06`)
4. `ae-hk2.json` — 56 item, 7 loại × 8, trong đó ~30% không có lỗi
5. Năm unit HK1 chỉ từ vựng và ngữ pháp
6. Bốn unit HK2 còn lại
7. Đóng băng `APP_VERSION` và `CONTENT_VERSION`, chạy lại toàn bộ checklist cuối
   `README.md`

Bước 4 là bước chặn cả luận văn. Nếu thời gian eo hẹp, cắt bước 6 trước, đừng
bao giờ cắt bước 4.
