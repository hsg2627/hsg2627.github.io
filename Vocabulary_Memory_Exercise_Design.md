# THIẾT KẾ & ĐIỀU CHỈNH HOẠT ĐỘNG LUYỆN TẬP GHI NHỚ TỪ VỰNG 
### (Dựa trên bộ sách *Focus on Vocabulary 1 & 2*)

---

## I. TỔNG QUAN VÀ MỤC TIÊU CẢI TIẾN

### 1. Phân tích thực trạng bài tập trong *Focus on Vocabulary (FoV)*
Bộ sách *Focus on Vocabulary* (Diane Schmitt, Norbert Schmitt, David Mann) được thiết kế rất bài bản theo nguyên lý thụ đắc từ vựng qua ngữ cảnh (Academic Word List / Bridging Vocabulary). Tuy nhiên, các dạng bài tập nguyên bản chủ yếu tập trung vào:
- **Nhận biết (Recognition):** Nối từ với định nghĩa (Matching), trắc nghiệm chọn từ đồng nghĩa/trái nghĩa.
- **Phân tích hình thái (Morphology):** Điền bảng họ từ (Word Families).
- **Kết hợp từ (Collocation):** Chọn cặp từ đi chung hoặc chép lại câu mẫu.

### 2. Hạn chế đối với mục tiêu "Ghi nhớ lâu dài" (Long-term Retention)
Sự ghi nhớ từ vựng bền vững (Long-term Memory) đòi hỏi các cơ chế thần kinh và tâm lý học hành vi sâu hơn:
- **Active Recall (Gợi nhớ chủ động):** Học viên phải tự lục Lại bộ nhớ thay vì chỉ nhận diện đáp án có sẵn.
- **Spaced Retrieval (Lặp lại ngắt quãng):** Kiểm tra từ vựng ở các khoảng thời gian t giãn ra.
- **Elaborative Encoding (Mã hóa sâu):** Liên hệ từ vựng với trải nghiệm cá nhân (Self-reference effect) hoặc hình ảnh/ngữ cảnh sinh động.
- **Contextual Chunking:** Nhớ từ theo cụm cố định thay vì từ đơn lẻ.

---

## II. ĐIỀU CHỈNH CÁC DẠNG BÀI TẬP CỦA SÁCH NÂNG CAO HIỆU QUẢ GHI NHỚ

| Bài tập gốc trong FoV | Nhược điểm đối với việc ghi nhớ | Cải tiến / Điều chỉnh hướng tới Memory Retrieval |
| :--- | :--- | :--- |
| **Word Meaning (Set 1 & Set 2 - Nối từ với nghĩa)** | Học sinh đoán loại trừ, thụ động nhận biết từ. | **Dạng bài Prompted Free Recall (Gợi nhớ có manh mối):** Chỉ cho ngữ cảnh/định nghĩa khuyết + chữ cái đầu, bắt buộc tự gõ/viết lại từ. |
| **Word Families (Điền bảng & chọn dạng từ)** | Chỉ điền từ theo quy tắc ngữ pháp mà không gắn với ngữ cảnh ghi nhớ. | **Morphological Matrix Sentence Building:** Yêu cầu biến đổi họ từ và tự viết lại câu có nghĩa hoàn chỉnh liên hệ bản thân. |
| **Collocation (Ghép cụm từ)** | Học sinh chép lại câu mẫu có sẵn, ít kích thích tư duy. | **Collocation Gap-fill with Distractors & Chunk Recall:** Tự khôi phục lại collocations bị khuyết trong ngữ cảnh mới. |
| **Expanding the Topic / Reading Strategies** | Đọc hiểu và thảo luận rộng, dễ quên từ mục tiêu nếu không ép dùng. | **Target Word Production Task (Forced Retrieval):** Đặt câu / Viết đoạn ngắn ép buộc dùng từ 3-5 từ mục tiêu (Forced-choice Production). |

---

## III. CƠ CHẾ TẠO BÀI TẬP TỰ ĐỘNG (EXERCISE GENERATION MECHANISM)

Để tự động hóa hoặc hệ thống hóa việc tạo bài tập ghi nhớ từ bộ dữ liệu từ vựng của FoV, hệ thống/giáo viên áp dụng **Cơ chế Cấu trúc Dữ liệu & Thuật toán Tạo bài tập (Algorithmic Exercise Generation)** dưới đây:

### 1. Mô hình Cấu trúc Dữ liệu Từ vựng (Word Bank Schema)
Mỗi từ mục tiêu (Target Word) trong cơ sở dữ liệu cần chứa các trường thông tin:
```json
{
  "word": "capacity",
  "pos": "noun",
  "cefr": "B2/C1",
  "definition_en": "the maximum amount that something can contain or produce",
  "definition_vi": "sức chứa, năng lực, khả năng",
  "word_family": {
    "verb": null,
    "noun": ["capacity", "incapacity"],
    "adjective": ["capacious"],
    "adverb": null
  },
  "collocations": [
    "earning capacity",
    "storage capacity",
    "full capacity",
    "capacity to do something"
  ],
  "example_sentences": [
    "The theater was filled to capacity for the premier performance.",
    "Her capacity to absorb complex information impressed her professors."
  ],
  "mnemonic_seed": "Cap (nón) chứa đầy năng lượng/sức chứa."
}
```

---

### 2. Thuật toán & Quy tắc Tạo Bài tập Ghi nhớ

#### Cơ chế 1: C-Test / Partial Spelled Recall (Gợi nhớ dạng khuyết ký tự)
* **Mục tiêu:** Kích hoạt cơ chế nhung nhớ hình thái từ (Spelling & Retrieval) mà không gây quá tải trí nhớ.
* **Cơ chế tạo:**
  1. Lấy câu ví dụ chứa `target_word`.
  2. Ẩn 50-70% ký tự của `target_word` (Giữ lại chữ cái đầu và độ dài từ).
  3. Đưa ra gợi ý nghĩa tiếng Việt hoặc định nghĩa ngắn bằng tiếng Anh.
* **Công thức hiển thị:**  
  `Sentence with [Word_Prefix + "___" (Length)] + (Definition/Vi-Meaning)`

#### Cơ chế 2: Collocation Chunk Association Grid (Lưới liên tưởng cụm từ)
* **Mục tiêu:** Tạo liên kết thần kinh giữa Target Word và các từ hay đi kèm.
* **Cơ chế tạo:**
  1. Trích xuất danh sách Collocations từ cơ sở dữ liệu.
  2. Tạo mạng lưới 2 cột: Cột A chứa Collocates (Adj/Verb/Noun đi kèm), Cột B chứa Target Words.
  3. Tạo bài tập yêu cầu điền từ thích hợp vào cụm, sau đó hoàn thành câu tình huống thực tế.

#### Cơ chế 3: Forced Word Family Transformation (Chuyển đổi họ từ bắt buộc)
* **Mục tiêu:** Ép học viên chủ động nhớ và chuyển đổi hình thái từ theo cấu trúc cú pháp.
* **Cơ chế tạo:**
  1. Cho một câu gốc chứa dạng từ gốc (Root word).
  2. Yêu cầu học viên viết lại câu hoặc điền vào khoảng trống sử dụng một dạng khác trong họ từ (dựa trên nhãn POS của vị trí khuyết).

#### Cơ chế 4: Self-Referential Production Prompt (Thử thách viết liên hệ bản thân)
* **Mục tiêu:** Tăng cường Elaborative Encoding (Mã hóa sâu qua liên hệ bản thân).
* **Cơ chế tạo:**
  1. Chọn ngẫu nhiên 3 từ mục tiêu trong bài (VD: *capacity, evolve, intense*).
  2. Tạo ra 1 câu hỏi mở liên quan trực tiếp đến cuộc sống, công việc hoặc trải nghiệm cá nhân của học sinh.
  3. Yêu cầu học sinh trả lời trong 2-3 câu, bắt buộc chứa đủ 3 từ mục tiêu.

---

## IV. BÀI TẬP MINH HỌA CẢI TIẾN (SAMPLE EXERCISES)

*(Trích xuất từ dữ liệu Target Words: Unit 1 - FoV 2: **capacity, evolve, encounter, constraint, isolated**)*

### Task 1: Active Recall with Partial Hints (Phôi phục từ khuyết)
*Fill in the missing letters to complete the target word based on the context and definition.*

1. Studies show that a person’s earning c__a____y increases significantly with higher education.  
   *(Definition: the ability or power to do or produce something)*
2. Over centuries, simpler societies e__l__e into complex industrial nations.  
   *(Definition: to develop gradually over time)*
3. When traveling in a foreign country, you are likely to e__o____e__ diverse cultural customs.  
   *(Definition: to experience or meet unexpectedly)*

---

### Task 2: Collocation Chunk Matching & Completion (Ghép cụm & Hoàn thiện cụm từ)
*Part A: Match the adjectives/verbs in Column A with the Target Noun in Column B to form strong collocations.*

| Column A | Column B | Target Collocation |
| :--- | :--- | :--- |
| 1. Limited / Earning / Storage | A. **capacity** | 1 - ______ |
| 2. Unexpected / Chance / Brief | B. **encounter** | 2 - ______ |
| 3. Gradual / Rapid / Biological | C. **evolution** | 3 - ______ |

*Part B: Use the formed collocations above to complete the personal statements below:*
1. My laptop ran out of space, so I had to buy an external hard drive with a larger _______________.
2. A brief _______________ with a helpful stranger changed my attitude towards moving to a new city.

---

### Task 3: Spaced Retrieval & Forced Production (Thử thách đặt câu liên hệ bản thân)
*Answer the following question using ALL THREE target words in your response:*

> **Prompt:** *How has your learning methodology changed since you started studying English?*  
> **Required Target Words:** `evolve` (verb), `capacity` (noun), `encounter` (verb).  
>
> **Your Answer:**  
> ___________________________________________________________________________________________________  
> ___________________________________________________________________________________________________  

---

## V. NGUYÊN TẮC VẬN HÀNH TIẾN TRÌNH LUYỆN TẬP GHI NHỚ (SPACED REPETITION SCHEDULE)

Để đảm bảo hiệu quả ghi nhớ từ vựng lâu dài từ sách *Focus on Vocabulary*, tiến trình luyện tập cần tuân theo chu kỳ Spaced Repetition:

1. **Ngày 1 (Lần đầu gặp từ):** Đọc bài đọc nguyên bản trong FoV + Làm bài tập *Word Meaning* cải tiến (Task 1).
2. **Ngày 2 (Sau 24 giờ):** Làm bài tập *Collocation Chunking* (Task 2) + *Word Family Matrix*.
3. **Ngày 7 (Sau 1 tuần):** Làm bài tập *Self-Referential Forced Production* (Task 3) ghép từ Unit này với từ Unit trước.
4. **Ngày 30 (Sau 1 tháng):** Kiểm tra trắc nghiệm tổng hợp Spaced Retrieval Quiz (C-Test ngắn + Matching Collocation).
