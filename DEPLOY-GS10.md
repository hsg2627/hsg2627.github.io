# DEPLOY-GS10.md — bàn giao việc đẩy module bài giảng lên GitHub Pages

Dành cho Antigravity. Viết ngày 2026-08-27.

> ## ⛔ ĐỌC MỤC 1 TRƯỚC. ĐỪNG CHẠY LỆNH NÀO CHO TỚI KHI CHỦ DỰ ÁN CHỐT PHƯƠNG ÁN.
>
> Có **hai module `Global_Success_10/` khác nhau** cùng đòi một chỗ trong repo.
> Một bản đã nằm trên GitHub, một bản đang chờ ở máy. Đẩy bừa là mất việc của
> một trong hai bên.

---

## 1. Tình trạng hiện tại

| | |
|---|---|
| Nhánh | `main` |
| Repo | `https://github.com/hsg2627/hsg2627.github.io` |
| Local đang có | 1 commit chưa đẩy: `0dedd1a` — *Add Global Success 10 lecture module* |
| Remote đang có | **24 commit** mà local chưa có, mới nhất cách đây ~10 giờ |
| `git push` | **đã thử, bị từ chối** (non-fast-forward) |

Không có gì bị mất. Commit local vẫn nguyên, remote vẫn nguyên.

### Hai module, cùng một đường dẫn

Cả hai đều nằm ở `Global_Success_10/`, nhưng cấu trúc khác hẳn nhau.

**Bản A — đã ở trên GitHub** (commit `cb75168` → `a58a30c`, do chính tài khoản
`hsg2627` đẩy lên trong 15 giờ qua). Dựng theo `SITE-SPEC.md` §9.2:

```
Global_Success_10/
├── index.html            ← 86 dòng, <script type="module">
├── css/gs10.css
├── js/gs10-gate.js       ← cổng khoá: màn hình khoá HS + mật khẩu GV
├── js/gs10-player.js     ← fetch('data/unitNN.json')
└── data/                 ← units_meta + unit01…unit10 + reviews
                             9.931 dòng JSON: mục tiêu, media, sections
                             cho đủ 10 unit × 8 tiết
```

**Bản B — đang chờ ở máy** (commit `0dedd1a`). Dựng theo `GLOBAL-SUCCESS-10.md`,
sau khi chủ dự án đổi ba quyết định ngày 2026-08-27:

```
Global_Success_10/
├── index.html            ← bản đồ chính, 14 ghim
├── gs10.css · gs10.js    ← không module, không fetch
├── assets/*.webp         ← 11 ảnh bản đồ đã nén (4,2 MB)
├── assets/audio/         ← track nghe Unit 1
├── unit01/index.html     ← bản đồ unit, 8 thẻ tiết
├── unit01/lesson1.html   ← bài giảng 22 slide, nội dung thật
├── unit02…unit10/        ← bản đồ unit, thẻ còn khoá
└── tools/measure-map.py
```

**Chỉ đúng MỘT tệp đụng nhau: `Global_Success_10/index.html`.**
18 tệp chỉ có ở bản A, 27 tệp chỉ có ở bản B. Phần còn lại không giẫm chân nhau.

### Ba chỗ bản A làm ngược với quyết định mới

Không phải bản A sai — nó dựng đúng theo `SITE-SPEC.md` lúc đó. Nhưng chủ dự án
đã đổi ý ngày 2026-08-27, và `GLOBAL-SUCCESS-10.md` §0 ghi rõ tệp đó thắng
SITE-SPEC với riêng thư mục này:

| Bản A có | Quyết định mới | Ghi ở |
|---|---|---|
| `js/gs10-gate.js` — màn hình khoá học sinh, nút mở khoá cho giáo viên | **bỏ cổng khoá** | §2.2 |
| `fetch('data/unitNN.json')` | **cấm fetch** — trên `file://` Chrome chặn CORS, trang ra trắng | §2.4 |
| `<script type="module">` | **cấm ES module** — cũng bị chặn trên `file://` | §2.4 |

Hệ quả thực tế: **bản A không mở được bằng cách nhấp đúp `index.html`.** Phải có
máy chủ. Yêu cầu của chủ dự án là mở được trên máy phòng học không có mạng.

Ngược lại, **bản B không có 9.931 dòng JSON nội dung** của bản A — nó mới có
nội dung thật cho đúng Unit 1 Lesson 1.

Hai bản **bổ sung cho nhau**, không phải bản sao của nhau.

---

## 2. Ba phương án — chủ dự án chọn, không tự quyết

### Phương án 1 — Giữ cả hai, đổi chỗ bản B *(an toàn nhất)*

Đưa bản B sang `Global_Success_10_v2/`, không đụng gì tới bản A. Xem cạnh nhau
rồi quyết sau.

```bash
git fetch origin
git rebase origin/main            # commit 0dedd1a lên trên 24 commit kia
git mv Global_Success_10 Global_Success_10_v2
# sửa 12 chỗ dẫn đường dẫn trong Global_Success_10_v2/*.html nếu có
git commit -am "Move new GS10 module to _v2 pending merge decision"
git push origin main
```

Mất công dọn về sau, nhưng **không mất gì của ai**.

### Phương án 2 — Bản B thay bản A, giữ lại JSON

Bản A hết dùng, nhưng `data/*.json` (9.931 dòng) là công thật — chuyển sang làm
nguồn nội dung để dựng 79 tiết còn lại của bản B.

```bash
git fetch origin
git rebase origin/main
git rm -r Global_Success_10/css Global_Success_10/js
git mv Global_Success_10/data Global_Success_10/_source-json
# giữ nguyên index.html của bản B (rebase sẽ báo xung đột đúng tệp này)
git commit -am "Replace GS10 player with offline-first module; keep unit JSON as content source"
git push origin main
```

### Phương án 3 — Giữ bản A, bỏ bản B

```bash
git reset --hard origin/main      # xoá commit 0dedd1a khỏi local
```

Chọn phương án này thì phải chấp nhận: bài giảng **không chạy khi mất mạng**, và
cổng khoá vẫn còn — hai điều chủ dự án đã bảo bỏ.

---

## 3. Bốn điều cấm

1. **Không `git push --force`.** 24 commit trên remote là công thật của 5 ngày.
2. **Không xoá `Global_Success_10/data/*.json`** nếu chưa có lệnh rõ ràng.
   9.931 dòng đó là nội dung 10 unit × 8 tiết.
3. **Không tự chọn phương án.** Ba phương án ở mục 2 dẫn tới ba kết quả khác hẳn
   nhau; đây là quyết định của chủ dự án.
4. **Không dựng lại cổng khoá** nếu phương án 2 được chọn. Lý do ở
   `GLOBAL-SUCCESS-10.md` §2.2 — module này không phải đối tượng nghiên cứu nữa
   nên lập luận "can thiệp thứ hai" không còn ràng buộc.

---

## 4. Sau khi đẩy xong

GitHub Pages tự dựng, khoảng 1–2 phút. Không có bước build, không có bundler.

Kiểm bảy mục ở `GLOBAL-SUCCESS-10.md` §6. Nhắc lại mục quan trọng nhất:

- [ ] Mở DevTools → Network, bấm khắp module. **Không được có request nào đi ra
      ngoài tên miền**, đặc biệt là tới Apps Script. Có một cái là luật "không
      sinh log" đã vỡ.

> ⚠️ `AGENTS.md` §11 cấm bấm thử trang sau khi deploy vì xương sống ghi log mọi
> thao tác. **Luật đó không áp cho `Global_Success_10/`** — module này không có
> xương sống. Nhưng chỉ trong thư mục này; đi lạc sang `/practice/`, `/ai-logs/`,
> `/me/` hay trang chủ thì §11 áp lại ngay.

Riêng phép kiểm ngoại tuyến **không làm được từ trang đã deploy**: tải thư mục
về máy, ngắt mạng, nhấp đúp `index.html`. Chỉ phép này mới chứng minh được luật
§2.4.
