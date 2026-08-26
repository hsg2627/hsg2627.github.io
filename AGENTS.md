# AGENTS.md — English Insiders Learning Portal

Tệp điều phối mọi thay đổi trên trang <https://hsg2627.github.io/>, trong
`Platform/`, và trong `Pipeline/`. Đọc hết trước khi sửa bất cứ thứ gì.

**Đặt một bản sao ở thư mục gốc của repo trang web.** Tệp này chỉ có tác dụng khi
nằm cạnh mã nguồn mà tác nhân đang sửa.

---

## 1. Dự án này là gì

Học liệu số **duy nhất cho môn Tiếng Anh lớp 10** theo Chương trình GDPT 2018
(Thông tư 32/2018/TT-BGDĐT), dùng cho học sinh tự học tại nhà không giám sát.

Đồng thời là **công cụ thu dữ liệu cho một luận văn thạc sĩ** đo năng lực số theo
Miền 1 và Miền 6 của Thông tư 02/2025/TT-BGDĐT. Nhiều thứ trông như chi tiết giao
diện thực ra là thiết bị đo — mục 3 liệt kê chúng, đừng "dọn dẹp".

Ba phần tách bạch, đừng lẫn:

| Phần | Chạy ở đâu | Ràng buộc |
|---|---|---|
| `hsg2627.github.io` | GitHub Pages | Tĩnh, không máy chủ, không build |
| `Platform/core/` + Apps Script | Trình duyệt học sinh + Google | Xương sống log |
| `Pipeline/` | **Máy nghiên cứu viên** | Không bao giờ chạy trên trang |

Pipeline được phép có cơ sở dữ liệu và gọi API AI. Trang thì không. Luật "không
máy chủ" áp cho trang, không áp cho công cụ nội bộ.

---

## 2. Bản đồ tài liệu

| Tệp | Nội dung |
|---|---|
| `SITE-SPEC.md` | Đặc tả dựng lại trang, hệ thiết kế, hợp đồng JS |
| `Platform/CONTENT-SPEC.md` | Ràng buộc nội dung theo CT 2018: chủ đề, ngữ pháp, độ dài, từ vựng, typology lỗi |
| `Platform/DATA-DESIGN.md` | Lược đồ JSON, cách đánh số unit, điểm nối vào spine |
| `Platform/README.md` | Xương sống log, cách triển khai Apps Script |
| `Pipeline/DESIGN.md` | Crawl, khử trùng, cổng chất lượng, retry, xuất bản |

---

## 3. Luật cứng — không được vi phạm

**Không gọi API AI từ trình duyệt học sinh.** Không Gemini, không OpenAI, không
mô hình nào chạy lúc học sinh đang dùng. Không nhúng khoá API dưới bất kỳ hình
thức nào, kể cả qua proxy.

Ba lý do: trang tĩnh không giấu được khoá; bài viết của trẻ vị thành niên không
được rời máy sang dịch vụ thương mại; và về thiết kế nghiên cứu, AI ở đây là **đối
tượng bị phán xét**, không phải nguồn phán xét — phản hồi sinh tại chỗ không có
đáp án đúng nên không đo được gì. AI vẫn dùng rất nhiều, nhưng ở `Pipeline/`.

**Không xoá, thu nhỏ, hay làm dịu thông báo AI ở banner.** Vừa là cam kết đạo đức,
vừa là bản thân can thiệp Miền 6: học liệu gắn nhãn AI công khai thì mới thành đối
tượng để học sinh phê phán. Văn bản chính xác ở mục 6.

**Không thu thập tên thật hay bất kỳ thông tin định danh nào.** Không tên, ngày
sinh, số điện thoại, email — kể cả có kèm lời hứa mã hoá sau. Đề cương cam kết
*pseudonymised at collection*, tức mã hoá **tại thời điểm thu**, không phải trước
khi phân tích. Chỉ dùng mã ở mục 4.

**Không gửi mã định danh học sinh sang dịch vụ bên thứ ba.** Google Analytics là
ngoại lệ duy nhất được gọi ra ngoài, kèm ràng buộc riêng ở mục 10.

**Không thêm cấu trúc ngữ pháp ngoài danh mục lớp 10.** Danh mục 15 mục ở
`CONTENT-SPEC.md` §3 là đóng. Câu điều kiện loại 3, quá khứ hoàn thành, tương lai
tiếp diễn, đảo ngữ, mệnh đề rút gọn — đều nằm ngoài, kể cả khi câu đúng ngữ pháp.

**Không đánh số lại unit theo thứ tự chủ đề của chương trình.** Thứ tự học nằm
trong `schedules.json`, tách khỏi `id`. Đánh số lại làm học sinh vào trang giữa
học kỳ 2 rồi bắt đầu ôn nội dung học kỳ 1.

**Không "sửa" item đánh giá AI không có lỗi.** Item mang `error.present: false` là
cố ý, chiếm khoảng 30% ngân hàng. Không có chúng thì không tính được tỉ lệ báo
động giả, và học sinh khoanh bừa vẫn điểm cao.

**Không trộn dữ liệu pilot với dữ liệu nghiên cứu.** Sheet riêng, `APP_VERSION`
riêng. Xem mục 11.

**Không tự động chạy thử trang.** Không mở trang bằng trình duyệt tự động, không
đăng nhập bằng mã bịa, không bấm qua các luồng để "kiểm tra giúp". Mỗi cú bấm sinh
ra một dòng dữ liệu thật trong Sheet, mang `pseudo_id` bịa và `session_id` thật —
không phân biệt được với dữ liệu học sinh, và không ai biết để lọc ra lúc phân
tích. **Nghiên cứu viên tự kiểm thử thủ công.** Chi tiết ở mục 11.

**Không thêm `event_type` mới** mà không ghi vào mục 13. Danh sách hợp lệ ở
`Platform/core/config.js`; logger chặn tên lạ nên thêm bừa là mất dữ liệu âm thầm.

---

## 4. Mã định danh và roster

### Định dạng

`NK` + hai chữ số khối + hai chữ số lớp + `-` + hai chữ số thứ tự sổ điểm.

| Lớp | Học sinh số 7 | Học sinh số 42 |
|---|---|---|
| 10/9 | `NK1009-07` | `NK1009-42` |
| 10/10 | `NK1010-07` | `NK1010-42` |

Không dùng dấu `/` trong mã — nó gây rắc rối ở URL, tên tệp và công thức bảng
tính. Đệm số 0 để độ dài cố định và sắp xếp đúng.

### Sửa `core/config.js`

```js
SCHOOLS: { NK: 'Nguyễn Khuyến' },
CLASSES: ['1009', '1010'],
ID_PATTERN: /^(NK)(1[0-2])(\d{2})-(\d{2})$/i,
ID_EXAMPLE: 'NK1009-07',
```

Trường thứ hai thì mở thêm tiền tố: `/^(NK|TP)(1[0-2])(\d{2})-(\d{2})$/i`. Trường
đặt tên lớp theo chữ cái thì nhóm ba đổi thành `(\d{2}|[A-Z]\d?)`.

### Sửa `core/identity.js` — bắt buộc cùng lúc

Mẫu mới có bốn nhóm thay vì hai. `identity.js` đang lấy `m[1]` làm `class_id`; với
mẫu mới `m[1]` là `NK`, nên **mọi học sinh sẽ bị gán chung một lớp tên "NK"**. Đây
là lỗi không báo gì cả — mã vẫn nhận, dữ liệu vẫn chảy, chỉ cột `class_id` vô
nghĩa và bạn phát hiện lúc phân tích. Sửa thành:

```js
return { ok: true, pseudo_id: s, class_id: m[2] + m[3], seat: m[4] };
```

Không thêm cột `school_id` vào Sheet — trường nằm sẵn ở hai ký tự đầu của
`pseudo_id`, lúc phân tích tách bằng `=LEFT(A2,2)`.

### Roster — điền trước khi thu dữ liệu

Sheet `roster` đã có cột sẵn nhưng đang **rỗng**. Chưa điền thì `doGet` chỉ thấy
những em đã gửi sự kiện; em chưa vào lần nào **không tồn tại trong dữ liệu**, và
bạn mất mẫu số.

Ô A2, với sĩ số thật của từng lớp:

```
="NK1009-"&TEXT(SEQUENCE(42),"00")
="NK1010-"&TEXT(SEQUENCE(40),"00")
```

Cột `class_id` điền `=MID(A2,3,4)`.

Mẫu số quyết định ba việc trong luận văn: định nghĩa "hoàn tất" phải chốt trước
khi thu dữ liệu; báo cáo song song toàn mẫu và nhóm có tương tác thực chất; và lấy
mẫu phỏng vấn biến thiên tối đa, trong đó **"bỏ giữa chừng" và "chưa vào lần nào"
là hai kiểu bắt buộc phải mời**.

### Phát mã và đăng nhập lần đầu

Giáo viên phát **phiếu in**, mỗi em một mã theo số thứ tự sổ điểm, giữ một bản dự
phòng. Bảng tra mã ↔ tên là sổ điểm của trường, nằm ngoài hệ thống.

**Cho đăng nhập lần đầu ngay tại buổi định hướng tuần 1, có giám sát.** Gõ sai bị
bắt tại chỗ; roster được kiểm chứng ngày đầu; và vì mã lưu trong máy nên các em
không phải gõ lại. Rủi ro còn sót: em số 07 gõ nhầm thành `-08` — mã có thật của
bạn cùng lớp, roster không bắt được, chỉ giáo viên liếc màn hình mới bắt được.

Bài kiểm tra trước/sau ghi **mã**, không ghi tên. Mời phỏng vấn qua giáo viên:
"mời em mang mã NK1009-07".

---

## 5. Cần xoá khỏi trang

Trang hiện phục vụ hai đối tượng. Chỉ giữ phần lớp 10.

| Mục | Ghi chú |
|---|---|
| 🎓 HSG 12 | cả bốn mục con bên dưới |
| ├ Reading Comprehension | thuộc HSG 12 |
| ├ Listening Audio Lab | thuộc HSG 12 |
| ├ CGEL Grammar Master | 12 module cú pháp nâng cao |
| └ Destination C1/C2 Vocab | vượt Bậc 3 |
| 🏛️ CGEL Grammar | mục điều hướng độc lập |
| 💎 C1/C2 Vocabulary | mục điều hướng độc lập |
| 🔮 Arcane Idioms | mô tả ghi rõ trình độ C1/C2 |

**Giữ lại:** 🏠 Home · 📊 Dashboard Stats · 📘 English 10

**Giữ nhưng phải trỏ lại nguồn dữ liệu:**

- 🎮 **Lexicode Matrix** — cơ chế trò chơi không gắn cứng với vốn từ C1/C2. Giữ
  phần chơi, trỏ nguồn từ về `content/vocab/`. Trỏ xong phải rà: không được còn
  từ nào vượt Bậc 3 lọt vào qua danh sách cũ.
- 📝 **Practice Tests** — lọc chỉ còn đề lớp 10. Mỗi đề giữ lại phải khai được
  `curriculum.topic` và `curriculum.grammar`; đề nào không truy được về danh mục
  chương trình thì bỏ.

Xoá xong rà lại liên kết chết trong điều hướng, trang chủ và dashboard.

---

## 6. Banner

**Dòng chính:**

```
ENGLISH INSIDERS LEARNING PORTAL
```

Bỏ cụm `| HSG 12 & English 10`. Tiêu đề trang, dùng cho cả `<title>`:

```
English Insiders Learning Portal · Tiếng Anh 10 — CT GDPT 2018
```

**Dòng phụ, ngay dưới tên dự án, không đẩy xuống chân trang:**

```
🤖 All study materials are generated by AI and may contain inaccuracies.
Please verify critical information independently.
```

- Biểu tượng 🤖 mở đầu, dùng thống nhất cho mọi chỗ nhắc tới AI
- Văn bản tiếng Anh giữ **nguyên văn**, không diễn đạt lại, không rút gọn
- Thường trực trên mọi màn hình, không phải popup đóng một lần rồi thôi
- Tương phản đủ đọc, không phải chữ xám nhạt cỡ nhỏ
- Không đặt trong `<details>`, không ẩn sau nút "xem thêm"

**Gắn nhãn ở cấp item.** Mọi item mang `ai_generated: true` phải hiện 🤖 ngay tại
item. Học sinh cần biết **cái đang làm** do AI sinh, không chỉ biết chung chung
rằng trang có dùng AI.

Không hứa "đạt Bậc 3" ở bất kỳ đâu — Bậc 3 là chuẩn đầu ra **hết lớp 12**. Viết
đúng: "góp phần vào lộ trình đạt Bậc 3 khi kết thúc THPT".

---

## 7. Nội dung

Chi tiết ở `CONTENT-SPEC.md`. Bốn điều không thương lượng:

- Chủ đề bám danh mục CT 2018 (§2), không bám tên unit sách giáo khoa
- Ngữ pháp chỉ trong danh mục 15 mục lớp 10 (§3)
- Độ dài là ràng buộc, không phải gợi ý: đọc 220–250 từ, nghe 180–200 từ, viết
  120–150 từ (§4)
- Chỉ **5 unit HK2** làm đủ bốn kỹ năng; 5 unit HK1 chỉ từ vựng và ngữ pháp, đóng
  vai nguồn ngôn ngữ đã củng cố cho tương phản của RQ3

Ngân hàng item đánh giá AI: **7 loại lỗi × 8 item = 56 tối thiểu**, khoảng 30%
không có lỗi, chia hai tệp theo HK1/HK2.

Bản dịch hỗ trợ chạy theo chiều **Anh → Việt**.

---

## 8. Dữ liệu và máy chủ

Lược đồ ở `DATA-DESIGN.md`. Bốn điều không thương lượng:

- Siêu dữ liệu nghiên cứu nằm trong chính item, không tách ra bảng tính rời
- `id` của unit cố định vĩnh viễn; thứ tự học nằm trong `schedules.json`
- Mỗi item đánh giá AI phải có `error.category` — thiếu là mất dữ liệu RQ3
- Màn hình chỉ gọi `Spine.*`, không đụng `localStorage`, `fetch`, hay import
  `store`/`logger`/`transport`

### Trạng thái hiện tại: chưa gửi được gì

| Chỗ | Giá trị |
|---|---|
| `core/config.js` `ENDPOINT` | rỗng |
| `server/Code.gs` `SHEET_ID` | chuỗi mẫu |
| `server/Code.gs` `ADMIN_TOKEN` | chuỗi mẫu |

### Bốn việc phải sửa trong `Code.gs`

1. **Điền roster** — xem mục 4.
2. **Đối chiếu roster khi ghi.** `doPost` hiện nhận mọi hàng gửi tới, không kiểm
   `pseudo_id` có thật không, `event_type` có hợp lệ không. Endpoint để ở chế độ
   `Anyone` nên đây là lỗ hổng. **Đánh dấu, không chặn** — chặn thì một sai sót
   trong roster sẽ vứt mất dữ liệu thật.
3. **Báo mã lạ và mã chưa hoạt động** trong `doGet`.
4. **Chuyển `doGet` sang đọc sheet `summary`.** Hiện nó nạp toàn bộ bảng mỗi lần
   gọi — khoảng 120.000 dòng vào cuối nghiên cứu, sẽ chạm trần 6 phút đúng lúc
   bạn cần đối soát nhất. Dựng `summary` bằng trigger chạy đêm.

### Bảng thống kê cho nghiên cứu viên

**Looker Studio nối thẳng vào Google Sheet** — miễn phí, lọc được theo lớp, học
sinh, loại học liệu, thời gian. Hoặc PivotTable ngay trong Sheet. Mọi con số vào
luận văn lấy từ đây, không lấy từ GA.

Dung lượng: Sheet giới hạn 10 triệu ô, với 21 cột là ~476.000 dòng — gấp gần bốn
lần mức dự kiến.

---

## 9. Đường ống sản xuất ngữ liệu

Chi tiết ở `Pipeline/DESIGN.md`. Ba điều dễ làm sai:

**Chỉ crawl nguồn đã khai báo trước, và cổng chặn là `allows_derivatives`.** Rút
gọn hay dịch một bài báo là tạo tác phẩm phái sinh: `CC-BY-ND` **cấm thẳng**, `NC`
thì phá lời hứa "openly licensed" của đề cương.

**Cổng kiểm tra dữ kiện phải bất đối xứng.** Bỏ bớt chi tiết là hợp lệ; thêm hoặc
đổi dữ kiện là lỗi. Phép kiểm mạnh nhất không cần mô hình: thực thể hoặc con số có
trong bản rút gọn mà không có trong bản gốc → loại thẳng.

**Ẩn bài chưa đủ = loại ở bước xuất bản, không phải cờ ở trình duyệt.** Item chưa
đủ tài sản không bao giờ được có mặt trong JSON gửi xuống máy học sinh.

Và điều không được nhầm: **các cổng tự động là bộ lọc trước, không thay thế thẩm
định bốn chốt của con người** (`CONTENT-SPEC.md` §7). Mọi quyết định cuối vẫn phải
mang tên người duyệt trong khối `provenance`.

---

## 10. Google Analytics

**Phạm vi: chỉ giám sát vận hành. Không bao giờ là dữ liệu nghiên cứu.**

| Câu hỏi | Trả lời bằng |
|---|---|
| Trang có ai mở không, ngay lúc này? | GA |
| Em nào chưa vào lần nào? | Roster + đối soát — GA không biết mã học sinh |
| Tương tác, độ chính xác, độ trễ, tác vụ AI | Spine → Sheet |
| **Bất kỳ con số nào vào luận văn** | **Spine → Sheet** |

GA không thay thế được spine vì hai lý do cấu trúc: RQ2 cần nối chỉ số tương tác
**của từng em** với điểm tăng của chính em đó, mà GA không mang (và không được
mang) danh tính; và GA **rơi mất hit khi ngoại tuyến**, nên sẽ đếm thiếu đúng
nhóm học sinh mạng yếu — chính nhóm mà đề cương cam kết phân tích.

**Luật:** không gửi mã, lớp, trường sang GA dưới mọi hình thức. Không tạo custom
event trùng sự kiện của spine. Tắt Google Signals và cá nhân hoá quảng cáo. Đặt
thời gian lưu ở mức thấp nhất.

**Không thêm popup xin cookie** — mọi ma sát ở luồng vào làm giảm tương tác, mà
tương tác là biến phụ thuộc của RQ2. GA khai báo trong hồ sơ đạo đức và đơn đồng ý
của phụ huynh.

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
</script>
```

**Bẫy định tuyến:** trang dùng hash (`#home`, `#english10`), GA4 không tự tính đổi
hash thành lượt xem. Bật *Enhanced measurement → Page changes based on browser
history events*, nếu không mọi màn hình sau trang chủ đều vô hình.

**GA phá một lời hứa:** `Spine.deleteMyData()` cho học sinh xoá dữ liệu, nhưng dữ
liệu GA nằm trên máy chủ Google và các em không xoá được. Bắt buộc chọn một: đổi
nhãn nút thành **"Xoá dữ liệu học tập của tôi"** kèm dòng giải thích, hoặc bỏ GA.
Không để nguyên nhãn cũ.

---

## 11. Pilot và triển khai

### Pilot kỹ thuật — làm trước khi dựng màn hình

Nếu xương sống có vấn đề trên điện thoại thật thì mọi thứ xây bên trên phải làm
lại. Cần 3–5 em, 30 phút, có giám sát. Không cần nội dung thật — bàn thử
`Platform/index.html` đã mô phỏng đủ.

1. Tạo Google Sheet **riêng cho pilot**, dán `SHEET_ID`, chạy `setup()`
2. Deploy Apps Script → Web app → Execute as **Me**, access **Anyone**, chép `/exec`
3. Sửa `ID_PATTERN` và `identity.js` theo mục 4
4. Dán URL pilot vào `ENDPOINT`, **giữ `APP_VERSION` ở `v0.1.0`**
5. Điền vài mã pilot vào roster
6. Chạy trên **điện thoại của các em**, không phải máy tính

**Phép thử quan trọng nhất:** bật chế độ máy bay, trả lời vài câu, bật mạng lại.
Số "đang chờ" phải tăng rồi tự về 0, và Sheet **không được có dòng trùng**.

### Ba luật giữ sạch nghiên cứu

- **Học sinh pilot không được lấy từ 10/9 và 10/10.** Em nào đã dùng học liệu thì
  tiền test không còn là mốc nền.
- **Sheet pilot tách khỏi Sheet chính.** `APP_VERSION` khác là lớp bảo vệ thứ hai.
- **Hỏi giáo viên hướng dẫn xem pilot có nằm trong hồ sơ đạo đức không.** Pilot
  với học sinh thật là thu thập dữ liệu trên trẻ vị thành niên.

### Hai thứ đáng để mắt trên máy thật

- Chế độ duyệt web riêng tư chặn `localStorage` — xem thông báo lỗi hiện ra thế
  nào trên màn hình nhỏ.
- **iOS có thể tự xoá `localStorage` sau khoảng bảy ngày không truy cập.** Em nghỉ
  một tuần có thể mất mã và tiến độ hiển thị. Dữ liệu nghiên cứu vẫn an toàn vì sự
  kiện đã lên Sheet, nhưng đây là lý do **phiếu in mã** là đường khôi phục duy
  nhất.

### Lưu ý cho Antigravity và mọi tác nhân khác khi deploy

**Deploy xong thì dừng lại và báo. Không tự chạy thử.**

Cụ thể là không: mở trang bằng trình duyệt tự động hay công cụ xem trước; nhập mã
định danh nào để đăng nhập; bấm qua luồng học, quest, xưởng AI, hay bất kỳ nút
nào; chạy kịch bản kiểm thử đầu cuối trên bản đã deploy; gọi thẳng `Spine.*` từ
console.

Lý do không phải thẩm mỹ. Xương sống ghi log **mọi** thao tác — kể cả thao tác của
máy. Một lượt bấm thử sinh ra `session_start`, `module_open`, `item_view`,
`item_answer` với thời gian phản hồi của máy chứ không phải của người, rồi nằm
vĩnh viễn trong Sheet cạnh dữ liệu học sinh. Đến lúc phân tích không có cách nào
tách ra, vì chúng trông y hệt nhau.

Nếu **buộc** phải chạy trang để xem giao diện: đặt `CONFIG.ENDPOINT = ''` trước
khi mở. Xương sống được thiết kế để không vỡ khi `ENDPOINT` rỗng — sự kiện nằm lại
hàng đợi cục bộ và không đi đâu cả. Xong thì xoá `localStorage` của miền đó.

Kiểm tra tĩnh thì luôn được phép: đọc mã, soi JSON, chạy linter, kiểm tra tệp có
đúng chỗ không. Ranh giới là **có sinh ra sự kiện hay không**, chứ không phải có
động vào mã hay không.

### Trước khi thu dữ liệu chính thức

- [ ] Roster điền đủ cho cả hai lớp
- [ ] Bốn việc sửa `Code.gs` ở mục 8
- [ ] `ENDPOINT` trỏ Sheet **chính thức**, không phải Sheet pilot
- [ ] Thử ngoại tuyến trên mạng thật, Sheet không có dòng trùng
- [ ] Thử trên điện thoại thật của học sinh
- [ ] Đổi `APP_VERSION` thành `v1.0.0` và `CONTENT_VERSION` thành `c1.0.0`, rồi
      **đóng băng cả hai**

---

## 12. Tên gọi

Một tên duy nhất, mọi nơi: **English Insiders Learning Portal**.

| Dùng ở đâu | Tên đúng |
|---|---|
| Banner, tiêu đề trang, giao diện | English Insiders Learning Portal |
| Nhan đề luận văn (`Drafts/`) | English Insiders Learning Portal — đã khớp |
| Tầng trò chơi hoá bên trong | Doloc Town |

"Hub" và "English Insider" (thiếu chữ s) là hai biến thể đã từng xuất hiện. Cả hai
đều sai — không dùng lại.

Không tự ý đổi tên, favicon, bảng màu. Mọi thay đổi nhận diện ghi vào mục 13 trước
khi thực hiện.

---

## 13. Nhật ký quyết định

| Ngày | Quyết định | Lý do |
|---|---|---|
| 2026-08-21 | Phạm vi luận văn rút về Miền 1 và Miền 6 (TT 02/2025) | Sáu miền là khối lượng luận án; Miền 6 là điểm VN khác DigComp 2.2 |
| 2026-08-21 | Loại phương án nhúng Gemini cho học sinh nhận phản hồi | Không có đáp án đúng nên không đo được; lộ khoá; dữ liệu trẻ vị thành niên |
| 2026-08-21 | Chốt nhan đề luận văn, áp vào hai trang bìa | — |
| 2026-08-21 | Neo học liệu vào CT 2018 thay vì sách giáo khoa | Hai trường có thể dùng hai bộ sách khác nhau |
| 2026-08-21 | Chỉ 5 unit HK2 làm đủ bốn kỹ năng | Unit HK1 đóng vai nguồn ngôn ngữ đã củng cố cho RQ3 |
| 2026-08-21 | Xoá HSG 12, CGEL Grammar, C1/C2 Vocabulary, Arcane Idioms | Trang chỉ phục vụ Tiếng Anh 10 |
| 2026-08-21 | Chốt tên duy nhất: **Portal**, không dùng "Hub" | Khớp nhan đề luận văn đã in ở hai trang bìa |
| 2026-08-21 | Giữ Lexicode Matrix, trỏ nguồn từ về danh mục lớp 10 | Cơ chế trò chơi không gắn cứng vốn từ C1/C2 |
| 2026-08-21 | Giữ Practice Tests, lọc còn đề lớp 10 | Đề trộn hai trình độ vi phạm ràng buộc ngữ pháp |
| 2026-08-21 | Thêm GA, chỉ giám sát vận hành | Cần biết trang có sống không trong tuần đầu |
| 2026-08-21 | GA không nhận mã học sinh, không là nguồn số liệu luận văn | Giữ cam kết giả danh; spine đã đo tốt hơn |
| 2026-08-21 | Không thu tên thật, kể cả có hứa mã hoá sau | Tên tự nhập nhận diện kém hơn mã; và cam kết là mã hoá *tại thời điểm thu* |
| 2026-08-21 | Mã lớp: `NK1009` và `NK1010` cho 10/9 và 10/10 | Bỏ dấu `/`, đệm 0, độ dài cố định |
| 2026-08-21 | Chiều dịch hỗ trợ: Anh → Việt | — |
| 2026-08-21 | Pipeline chạy cục bộ, đầu ra là JSON tĩnh | Giữ trang tĩnh và chi phí bằng 0 |
| 2026-08-21 | Tác nhân không được tự chạy thử trang sau khi deploy | Mỗi cú bấm sinh dòng log thật, lẫn vĩnh viễn vào dữ liệu học sinh |
| 2026-08-26 | Trang chuyển sang nhiều tệp index.html, bỏ định tuyến bằng hash | Mỗi màn hình là một lượt tải thật nên GA4 đếm đúng; hết bẫy ở mục 10 |
| 2026-08-26 | Điều hướng 4 mục cố định ở mọi trang, bỏ sidebar | Sidebar chỉ ở trang chủ làm mọi trang trong thành ngõ cụt trên điện thoại |
| 2026-08-26 | Global Success 10 là **bài giảng của giáo viên**, khoá với mã học sinh | HS tự học được bài giảng trình chiếu là một can thiệp thứ hai không kiểm soát |
| 2026-08-26 | Global Success 10 **nằm ngoài phạm vi nghiên cứu**; artefact được đo là Practice Center + AI Error Log + spine | Công cụ dạy học đặt nhờ trên cùng tên miền; không sinh log, không chịu ràng buộc CONTENT-SPEC, nhưng phải khai như biến bối cảnh |
| 2026-08-26 | Bỏ định tuyến hash, mỗi màn hình một thư mục có `index.html` | Trình duyệt là router; GA4 đếm đúng, hết bẫy ở mục 10 |
| 2026-08-26 | **Xoá hết thư mục cũ, dựng lại theo SITE-SPEC §2** thay vì di trú dần | Giao diện cũ là SPA hash một tệp, sửa dần tốn hơn viết lại; cứu 6 thứ ở §3.1.1, gắn nhãn `pre-rebuild` để hoàn tác |
| 2026-08-26 | Gỡ nhãn "550 Words" khỏi giao diện | Con số chưa đối chiếu với định mức từ vựng của CT 2018 |
| 2026-08-26 | Giữ tên "Global Success 10", không đổi theo CT 2018 | Luật neo chương trình áp cho học liệu sinh item đo lường, không áp cho bài giảng của GV |
| 2026-08-26 | Bỏ `/english10/` phía học sinh | Học sinh chỉ có Luyện tập và Xưởng AI; không dựng hai đường vào cùng nội dung |
| 2026-08-26 | Mã giáo viên `GV-NK-01`, **không** thêm vào `ID_PATTERN` | Giáo viên không phải đối tượng nghiên cứu; mã GV không được xuất hiện trong log |
| 2026-08-26 | Cảnh báo AI **chỉ tiếng Anh**, không thêm bản dịch tiếng Việt | Đã cân nhắc và bác |

---

## 14. Khi không chắc

Dừng lại và hỏi. Sáu tình huống hay gặp, câu trả lời có sẵn:

- *"Thêm chatbot cho tiện hơn không?"* — Không. Mục 3.
- *"Cấu trúc ngữ pháp này hay, thêm vào nhé?"* — Không, nếu không nằm trong danh
  mục 15 mục.
- *"Dòng cảnh báo AI làm xấu bố cục, thu gọn lại?"* — Không. Mục 3 và mục 6.
- *"Item này thiếu đáp án lỗi, sửa giúp?"* — Kiểm tra `error.present` trước. Nếu
  là `false` thì item đang đúng như thiết kế.
- *"Gắn mã học sinh vào GA cho dễ đối chiếu nhé?"* — Không. Mục 10.
- *"Cho học sinh nhập tên cho thân thiện?"* — Tên chỉ được lưu trong `localStorage`
  của chính máy đó để hiển thị lời chào, **không bao giờ đi vào dòng log**.
- *"Deploy xong rồi, chạy thử một lượt cho chắc nhé?"* — Không. Mục 11. Báo là đã
  deploy xong, để nghiên cứu viên tự mở.

Không luật nào ở trên được nới ra vì lý do thẩm mỹ hay tiện tay.

## 15. Sử dụng tiếng Anh
Vì đây là web học liệu tiếng Anh, nên ngoại trừ giải thích đáp án, giải nghĩa từ vựng, còn lại mọi thông tin phải được viết và thể hiện bằng tiếng Anh. 

## 16. Thư mục chính
Bao gồm các ô tab:
Grammar
Vocabulary
Listening
Writing
Practice Tests
AI Error Log

## 17. Tự động deploy
Tự động deploy nội dung mới tạo, điều chỉnh lên web mà không cần sync changes thủ công