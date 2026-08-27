# DEPLOY-GS10.md — bàn giao việc đẩy module bài giảng lên GitHub Pages

Dành cho Antigravity. Viết ngày 2026-08-27.

Xung đột hai bản `Global_Success_10/` **đã được chủ dự án chốt và gộp xong**.
Việc còn lại chỉ là một lệnh `push`.

---

## 1. Cần làm

```bash
cd hsg2627.github.io
git status                 # phải sạch, đang ở nhánh main
git log --oneline -1       # phải là 029f308 Replace draft GS10 player...
git push origin main
```

Hết. Không có bước build, không bundler, không phụ thuộc npm.

GitHub Pages tự dựng sau 1–2 phút. Module ở
<https://hsg2627.github.io/Global_Success_10/>.

---

## 2. Commit này làm gì

Repo từng có **hai** module `Global_Success_10/` khác nhau:

- **Bản thô** trên GitHub (`cb75168` → `a58a30c`, 26–27/08): dựng theo
  `SITE-SPEC.md` §9.2 — có cổng khoá, player nạp JSON bằng `fetch`.
- **Bản mới** ở máy: bài giảng tương tác, chạy được khi mất mạng.

Chủ dự án xác nhận bản trên GitHub là **bản thô để định hình cấu trúc dữ liệu**,
và chốt thay bằng bản mới.

**Gỡ đi** — cả ba đều vi phạm `GLOBAL-SUCCESS-10.md` §2.2 và §2.4:

| Tệp | Vì sao gỡ |
|---|---|
| `js/gs10-gate.js` | Cổng khoá đã bỏ (§2.2) |
| `js/gs10-player.js` | `fetch()` bị Chrome chặn trên `file://` → trang trắng |
| `index.html` cũ | `<script type="module">` cũng bị chặn trên `file://` |

**Giữ lại** — chuyển sang `Global_Success_10/_source/`, không phục vụ ra trang:

- `_source/data/*.json` — 9.931 dòng nội dung 10 unit × 8 tiết
- `_source/images/` — ba ảnh nháp của bản cũ (4,2 MB)

Thư mục bắt đầu bằng `_` nên Jekyll không xuất ra trang. Đây là **kho nội dung
để soạn 79 tiết còn lại**, không phải tệp phục vụ. **Đừng nạp `_source/` bằng
`fetch`** — soạn tiết mới thì đọc JSON rồi viết thẳng vào HTML (§2.4).

---

## 3. Đã kiểm trước khi commit

Chạy qua máy chủ cục bộ, mở lần lượt cả 10 unit:

| Mục | Kết quả |
|---|---|
| Ảnh bản đồ | 11/11 tải đúng 1536×1024 |
| Vùng bấm | 80 thẻ tiết + 14 ghim unit — không thẻ nào chồng nhau, không thẻ nào tràn khỏi ảnh |
| Bài giảng Unit 1 Lesson 1 | 22 slide, 24 nút lật đáp án, audio và clip khởi động còn nguyên |
| Vừa màn hình | không slide nào phải cuộn ở 1024×768, 1280×720, 1366×768, 1920×1080 |
| **Không sinh log** | **0 request đi ra ngoài tên miền** |
| Tàn tích bản cũ | không còn tham chiếu `gs10-gate` nào |

---

## 4. Bốn điều cấm

1. **Không `git push --force`.** 24 commit trước đó là công thật của 5 ngày;
   commit này đã gộp lên trên chúng, đẩy thường là đủ.
2. **Không xoá `_source/`.** Đó là nội dung 80 tiết chủ dự án đã soạn.
3. **Không dựng lại cổng khoá.** Lý do ở `GLOBAL-SUCCESS-10.md` §2.2 — module
   này không phải đối tượng nghiên cứu nữa nên lập luận "can thiệp thứ hai"
   không còn ràng buộc.
4. **Không đổi `<iframe>` popup sang `fetch`, không thêm `type="module"`.**
   Cả hai chạy tốt trên web và chết trên `file://`; yêu cầu là mở được trên máy
   phòng học không có mạng (§2.4).

---

## 5. Sau khi đẩy xong

Kiểm bảy mục ở `GLOBAL-SUCCESS-10.md` §6. Mục quan trọng nhất:

- [ ] Mở DevTools → Network, bấm khắp module. **Không được có request nào đi ra
      ngoài tên miền**, đặc biệt là tới Apps Script. Có một cái là luật "không
      sinh log" đã vỡ ở đâu đó.

> ⚠️ `AGENTS.md` §11 cấm bấm thử trang sau khi deploy vì xương sống ghi log mọi
> thao tác — kể cả thao tác của máy. **Luật đó không áp cho `Global_Success_10/`**
> vì module này không có xương sống. Nhưng chỉ trong thư mục này; đi lạc sang
> `/practice/`, `/ai-logs/`, `/me/` hay trang chủ thì §11 áp lại ngay.

Phép kiểm ngoại tuyến **không làm được từ trang đã deploy**: tải thư mục về máy,
ngắt mạng, nhấp đúp `index.html`. Chỉ phép này mới chứng minh được §2.4.

---

## 6. Nếu cần quay lại

Nhánh `gs10-new-module` trỏ tới commit chỉ-có-module-mới, chưa gộp.
Bản thô cũ vẫn còn nguyên trong lịch sử tại `a58a30c`.

```bash
git show a58a30c:Global_Success_10/js/gs10-gate.js   # xem lại bản cũ
git revert 029f308                                    # hoàn tác lần gộp
```
