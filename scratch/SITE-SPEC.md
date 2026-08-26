# SITE-SPEC.md â€” Äáº·c táº£ dá»±ng láº¡i trang English Insiders Learning Portal

TÃ i liá»‡u thi cÃ´ng cho <https://hsg2627.github.io/>. NÃ³i **dá»±ng cÃ¡i gÃ¬, Ä‘áº·t á»Ÿ Ä‘Ã¢u,
gá»i hÃ m nÃ o** â€” khÃ´ng láº·p láº¡i pháº§n "vÃ¬ sao" Ä‘Ã£ cÃ³ á»Ÿ nÆ¡i khÃ¡c.

**Thá»© tá»± Æ°u tiÃªn khi hai tÃ i liá»‡u mÃ¢u thuáº«n:**

```
AGENTS.md  >  SITE-SPEC.md  >  DATA-DESIGN.md  â‰ˆ  CONTENT-SPEC.md  >  README.md
```

`AGENTS.md` lÃ  luáº­t. TÃ i liá»‡u nÃ y chá»‰ Ä‘Æ°á»£c **cá»¥ thá»ƒ hoÃ¡**, khÃ´ng Ä‘Æ°á»£c ná»›i.

| Äá»c trÆ°á»›c | Äá»ƒ láº¥y |
|---|---|
| `AGENTS.md` | Luáº­t cá»©ng, mÃ£ Ä‘á»‹nh danh, banner AI, GA, quy trÃ¬nh pilot |
| `CONTENT-SPEC.md` | Chá»§ Ä‘á», 15 má»¥c ngá»¯ phÃ¡p, Ä‘á»™ dÃ i, typology 7 lá»—i |
| `DATA-DESIGN.md` | LÆ°á»£c Ä‘á»“ JSON, `manifest`, `schedules`, `provenance` |
| `README.md` | Há»£p Ä‘á»“ng `Spine.*`, cÃ¡ch deploy Apps Script |

**Äáº·t má»™t báº£n sao tá»‡p nÃ y á»Ÿ thÆ° má»¥c gá»‘c cá»§a repo `hsg2627.github.io`,** cáº¡nh
`AGENTS.md`. TÃ¡c nhÃ¢n sá»­a mÃ£ pháº£i tháº¥y Ä‘Æ°á»£c cáº£ hai.

---

## 0. Nhá»¯ng chá»— Ä‘áº·c táº£ nÃ y lá»‡ch khá»i sÆ¡ Ä‘á»“ ban Ä‘áº§u

SÆ¡ Ä‘á»“ thÆ° má»¥c ban Ä‘áº§u va vÃ o luáº­t trong `AGENTS.md`. Má»—i chá»— lá»‡ch ghi kÃ¨m cÃ¡ch
quay láº¡i náº¿u chá»‹ khÃ´ng Ä‘á»“ng Ã½.

### 0.1 `js/progress.js` khÃ´ng Ä‘Æ°á»£c tá»± quáº£n lÃ½ localStorage

**SÆ¡ Ä‘á»“ ban Ä‘áº§u:** `progress.js` â€” *"Quáº£n lÃ½ tiáº¿n Ä‘á»™ (localStorage + gá»­i lÃªn GAS)"*.

**Váº¥n Ä‘á»:** `AGENTS.md` Â§8 vÃ  `README.md` cáº¥m mÃ n hÃ¬nh Ä‘á»¥ng `localStorage`,
`fetch`, hay import `store`/`logger`/`transport`. Viáº¿t láº¡i pháº§n nÃ y lÃ  dá»±ng má»™t
xÆ°Æ¡ng sá»‘ng thá»© hai cháº¡y song song vá»›i `core/` â€” hai hÃ ng Ä‘á»£i, hai Ä‘á»‹nh nghÄ©a
phiÃªn, hai bá»™ Ä‘áº¿m XP lá»‡ch nhau, vÃ  khÃ´ng cÃ¡ch nÃ o biáº¿t bá»™ nÃ o Ä‘Ãºng lÃºc phÃ¢n tÃ­ch.

**CÃ¡ch lÃ m á»Ÿ Ä‘Ã¢y:** giá»¯ nguyÃªn tÃªn tá»‡p, Ä‘á»•i vai trÃ². `js/progress.js` lÃ  **lá»›p
vá» má»ng duy nháº¥t Ä‘Æ°á»£c phÃ©p import `core/spine.js`**. NÃ³ khÃ´ng tá»± lÆ°u gÃ¬ cáº£ â€” nÃ³
gá»i `Spine.*` vÃ  váº½ giao diá»‡n tiáº¿n Ä‘á»™. Má»i `app.js` khÃ¡c import `Portal` tá»« Ä‘Ã¢y.

Nhá» váº­y há»£p Ä‘á»“ng kiá»ƒm tra Ä‘Æ°á»£c báº±ng má»™t lá»‡nh, khÃ´ng cáº§n cháº¡y trang (Â§13.1).

### 0.2 `js/data.js` khÃ´ng chá»©a há»c liá»‡u

**SÆ¡ Ä‘á»“ ban Ä‘áº§u:** `data.js` â€” *"Dá»¯ liá»‡u tá»•ng há»£p (modules, units, grammar...)"*.

**Váº¥n Ä‘á»:** `DATA-DESIGN.md` Â§1 quy Ä‘á»‹nh há»c liá»‡u lÃ  **tá»‡p JSON tÄ©nh** náº¡p báº±ng
`fetch`, siÃªu dá»¯ liá»‡u nghiÃªn cá»©u náº±m trong chÃ­nh item. ÄÃ³ cÅ©ng lÃ  Ä‘áº§u ra cá»§a
`Pipeline/` (`Pipeline/DESIGN.md`, cháº·ng `publish`). NhÃ©t há»c liá»‡u vÃ o má»™t tá»‡p
`.js` viáº¿t tay thÃ¬ pipeline khÃ´ng xuáº¥t báº£n vÃ o Ä‘Ã¢u Ä‘Æ°á»£c, vÃ  khá»‘i `provenance`
â€” váº¿t kiá»ƒm toÃ¡n tháº©m Ä‘á»‹nh â€” khÃ´ng cÃ³ chá»— Ä‘á»©ng.

**CÃ¡ch lÃ m á»Ÿ Ä‘Ã¢y:** `js/data.js` chá»‰ chá»©a **danh má»¥c Ä‘iá»u hÆ°á»›ng**: tÃªn tháº», mÃ´
táº£, biá»ƒu tÆ°á»£ng, Ä‘Æ°á»ng dáº«n. Há»c liá»‡u náº±m á»Ÿ `content/*.json`, náº¡p qua
`content/loader.js`.

### 0.3 Má»™t tá»‡p CSS, khÃ´ng pháº£i bá»‘n

**SÆ¡ Ä‘á»“ ban Ä‘áº§u:** `css/style.css` á»Ÿ gá»‘c **vÃ ** á»Ÿ `global-success/`, `practice/`,
`ai-logs/`.

**Váº¥n Ä‘á»:** bá»‘n tá»‡p cÃ¹ng tÃªn á»Ÿ bá»‘n thÆ° má»¥c sáº½ lá»‡ch nhau sau vÃ i tuáº§n sá»­a, vÃ 
khÃ´ng ai nhá»› nÃºt "Kiá»ƒm tra" láº¥y mÃ u tá»« tá»‡p nÃ o. Vá»›i há»c sinh dÃ¹ng 3G, má»™t tá»‡p
~12KB náº¡p má»™t láº§n rá»“i cache cho má»i trang lÃ  nhanh hÆ¡n bá»‘n tá»‡p.

**CÃ¡ch lÃ m á»Ÿ Ä‘Ã¢y:** má»™t `/css/style.css` duy nháº¥t, chia má»¥c báº±ng bÃ¬nh luáº­n.

**Náº¿u chá»‹ váº«n muá»‘n tÃ¡ch:** Ä‘áº·t tÃªn `module.css` (khÃ´ng trÃ¹ng `style.css`), náº¡p
**sau** tá»‡p gá»‘c, vÃ  chá»‰ chá»©a pháº§n riÃªng cá»§a module â€” khÃ´ng Ä‘á»‹nh nghÄ©a láº¡i token.

### 0.4 Global Success lÃ  module **cá»§a giÃ¡o viÃªn**, cÃ³ khoÃ¡

**Chá»‘t ngÃ y 2026-08-26:** `Global_Success_10/` khÃ´ng pháº£i há»c liá»‡u tá»± há»c cá»§a
há»c sinh. ÄÃ³ lÃ  **bÃ i giáº£ng HTML Ä‘á»ƒ giÃ¡o viÃªn trÃ¬nh chiáº¿u trÃªn lá»›p** â€” 10 units Ã—
8 lessons + 4 reviews, Ä‘Ã£ dá»±ng xong trong repo. Chá»‰ tÃ i khoáº£n giÃ¡o viÃªn má»Ÿ Ä‘Æ°á»£c;
ai Ä‘Ã£ nháº­p mÃ£ há»c sinh thÃ¬ **bá»‹ khoÃ¡**.

**VÃ  nÃ³ náº±m ngoÃ i pháº¡m vi nghiÃªn cá»©u.** Há»c liá»‡u Ä‘Æ°á»£c Ä‘o trong luáº­n vÄƒn lÃ 
**Practice Center + AI Error Log + xÆ°Æ¡ng sá»‘ng log**. Global Success 10 chá»‰ lÃ 
cÃ´ng cá»¥ dáº¡y há»c Ä‘áº·t nhá» trÃªn cÃ¹ng tÃªn miá»n cho tiá»‡n. Bá»‘n há»‡ quáº£, cáº£ bá»‘n Ä‘á»u pháº£i
giá»¯:

1. **KhÃ´ng chá»‹u rÃ ng buá»™c cá»§a `CONTENT-SPEC.md`.** BÃ i giáº£ng bÃ¡m sÃ¡ch giÃ¡o khoa,
   Ä‘Æ°á»£c phÃ©p dÃ¹ng cáº¥u trÃºc ngoÃ i danh má»¥c 15 má»¥c vÃ  Ä‘á»™ dÃ i ngoÃ i Â§4. Äá»«ng Ä‘em
   bá»‘n chá»‘t tháº©m Ä‘á»‹nh ra soi nÃ³ â€” soi nháº§m chá»— thÃ¬ tá»‘n cÃ´ng mÃ  khÃ´ng Ä‘Æ°á»£c gÃ¬.
2. **KhÃ´ng sinh má»™t dÃ²ng log nÃ o** (Â§8.1). KhÃ´ng cÃ³ sá»‘ nÃ o cá»§a luáº­n vÄƒn Ä‘i ra tá»«
   Ä‘Ã¢y, nÃªn khÃ´ng cáº§n Ä‘o, vÃ  Ä‘o lÃ  lÃ m báº©n dá»¯ liá»‡u.
3. **KhÃ´ng mÃ´ táº£ nÃ³ nhÆ° má»™t pháº§n cá»§a can thiá»‡p** trong luáº­n vÄƒn. Chá»— nÃ o táº£ sáº£n
   pháº©m (má»¥c 3.3, 4.2 cá»§a Ä‘á» cÆ°Æ¡ng) pháº£i nÃ³i rÃµ artefact Ä‘Æ°á»£c Ä‘o gá»“m nhá»¯ng gÃ¬, vÃ 
   loáº¡i trá»« pháº§n nÃ y ra.
4. **NhÆ°ng pháº£i khai nÃ³ nhÆ° biáº¿n bá»‘i cáº£nh.** Náº¿u chÃ­nh giÃ¡o viÃªn Ä‘Ã³ dáº¡y hai lá»›p
   trong máº«u báº±ng bÃ i giáº£ng nÃ y, thÃ¬ cáº£ máº«u nháº­n thÃªm má»™t nguá»“n tÃ¡c Ä‘á»™ng trÃªn
   cÃ¹ng ná»™i dung chÆ°Æ¡ng trÃ¬nh. Thiáº¿t káº¿ khÃ´ng cÃ³ nhÃ³m Ä‘á»‘i chá»©ng nÃªn chÃªnh lá»‡ch
   trÆ°á»›c/sau vá»‘n Ä‘Ã£ khÃ´ng quy háº¿t vá» tá»± há»c Ä‘Æ°á»£c; khai ra má»™t dÃ²ng á»Ÿ pháº§n bá»‘i
   cáº£nh lÃ  Ä‘á»§, vÃ  lÃ  Ä‘iá»u há»™i Ä‘á»“ng sáº½ há»i náº¿u chá»‹ khÃ´ng khai trÆ°á»›c.

Äiá»u Ä‘Ã³ giáº£i luÃ´n mÃ¢u thuáº«n tÃªn gá»i. Luáº­t "neo vÃ o CT 2018, khÃ´ng neo vÃ o sÃ¡ch
giÃ¡o khoa" (`AGENTS.md` Â§13) Ã¡p cho **há»c liá»‡u sinh item Ä‘o lÆ°á»ng** â€” thá»© mÃ  Ä‘á»
cÆ°Æ¡ng pháº£i chá»©ng minh lÃ  bÃ¡m chÆ°Æ¡ng trÃ¬nh. BÃ i giáº£ng cá»§a giÃ¡o viÃªn thÃ¬ bÃ¡m Ä‘Ãºng
bá»™ sÃ¡ch lá»›p Ä‘Ã³ Ä‘ang há»c, vÃ  tÃªn "Global Success 10" lÃ  mÃ´ táº£ trung thá»±c chá»©
khÃ´ng pháº£i cam káº¿t há»c thuáº­t. **Giá»¯ nguyÃªn tÃªn thÆ° má»¥c `Global_Success_10/`.**

**Há»‡ quáº£:** bá» luÃ´n `/english10/` khá»i phÃ­a há»c sinh. Há»c sinh chá»‰ cÃ³ `/practice/`
(5 ká»¹ nÄƒng) vÃ  `/ai-logs/` â€” Ä‘Ãºng nhÆ° sÆ¡ Ä‘á»“ ban Ä‘áº§u cá»§a chá»‹. KhÃ´ng dá»±ng hai
Ä‘Æ°á»ng vÃ o cÃ¹ng má»™t ná»™i dung.

> âš ï¸ **Äá»c Â§9.2 trÆ°á»›c khi dá»±ng khoÃ¡.** Trang tÄ©nh trÃªn GitHub Pages **khÃ´ng khoÃ¡
> Ä‘Æ°á»£c tháº­t**. CÆ¡ cháº¿ á»Ÿ Â§9.2 cháº·n Ä‘Æ°á»£c há»c sinh Ä‘i theo giao diá»‡n, khÃ´ng cháº·n
> Ä‘Æ°á»£c em nÃ o gÃµ tháº³ng Ä‘Æ°á»ng dáº«n tá»‡p. Â§9.2 nÃ³i rÃµ khi nÃ o chá»«ng Ä‘Ã³ lÃ  Ä‘á»§ vÃ  khi
> nÃ o khÃ´ng.

### 0.4b KhÃ´ng thÃªm báº£n dá»‹ch tiáº¿ng Viá»‡t dÆ°á»›i cáº£nh bÃ¡o AI

**Chá»‘t ngÃ y 2026-08-26:** banner AI **chá»‰ cÃ³ vÄƒn báº£n tiáº¿ng Anh**, nguyÃªn vÄƒn theo
`AGENTS.md` Â§6. KhÃ´ng thÃªm dÃ²ng tiáº¿ng Viá»‡t bÃªn dÆ°á»›i. Äá» xuáº¥t dá»‹ch á»Ÿ báº£n trÆ°á»›c Ä‘Ã£
bá»‹ bÃ¡c â€” Ä‘á»«ng Ä‘Æ°a láº¡i.

### 0.5 Ba viá»‡c bá»• sung mÃ  sÆ¡ Ä‘á»“ chÆ°a cÃ³

| ThÃªm | VÃ¬ sao |
|---|---|
| `core/` | XÆ°Æ¡ng sá»‘ng Ä‘Ã£ viáº¿t xong á»Ÿ `Platform/core/`. ChÃ©p sang, khÃ´ng viáº¿t láº¡i. |
| `content/` | Há»c liá»‡u JSON theo `DATA-DESIGN.md`. |
| `me/` | MÃ n hÃ¬nh *Dá»¯ liá»‡u cá»§a tÃ´i* â€” `Spine.exportMyData()` / `deleteMyData()`. LÃ  cam káº¿t Ä‘áº¡o Ä‘á»©c trong Ä‘Æ¡n Ä‘á»“ng Ã½ cá»§a phá»¥ huynh, khÃ´ng pháº£i tÃ­nh nÄƒng phá»¥. |

---

## 1. Thiáº¿t káº¿ cho há»c sinh lá»›p 10

TÃ¡m luáº­t giao diá»‡n. Má»i mÃ n hÃ¬nh pháº£i qua Ä‘Æ°á»£c cáº£ tÃ¡m.

**Äiá»‡n thoáº¡i trÆ°á»›c.** Äa sá»‘ cÃ¡c em má»Ÿ báº±ng Ä‘iá»‡n thoáº¡i. Thiáº¿t káº¿ á»Ÿ bá» rá»™ng 360px
trÆ°á»›c, rá»“i má»›i ná»›i ra mÃ¡y tÃ­nh. KhÃ´ng cÃ³ bá»‘ cá»¥c nÃ o chá»‰ cháº¡y Ä‘Æ°á»£c trÃªn mÃ n rá»™ng.

**Hai cháº¡m tá»›i bÃ i táº­p.** Tá»« trang chá»§ tá»›i cÃ¢u há»i Ä‘áº§u tiÃªn tá»‘i Ä‘a hai láº§n cháº¡m.
Ba láº§n lÃ  thiáº¿t káº¿ há»ng, khÃ´ng pháº£i lÃ  "cáº¥u trÃºc rÃµ rÃ ng".

**VÃ¹ng cháº¡m â‰¥ 48px.** NÃºt, tháº», phÆ°Æ¡ng Ã¡n tráº£ lá»i. CÃ¡ch nhau â‰¥ 8px Ä‘á»ƒ ngÃ³n tay
cÃ¡i khÃ´ng báº¥m nháº§m.

**Chá»¯ 17px, dÃ²ng 1.6.** Ã” nháº­p liá»‡u **pháº£i** `font-size: 16px` trá»Ÿ lÃªn â€” nhá» hÆ¡n
thÃ¬ iOS tá»± phÃ³ng to trang khi cÃ¡c em gÃµ mÃ£.

**Äiá»u hÆ°á»›ng giá»‘ng nhau á»Ÿ má»i trang.** Thanh dÆ°á»›i cÃ¹ng trÃªn Ä‘iá»‡n thoáº¡i, thanh
trÃªn cÃ¹ng á»Ÿ mÃ¡y tÃ­nh. KhÃ´ng cÃ³ trang nÃ o lÃ  ngÃµ cá»¥t.

**Tiáº¿ng Viá»‡t cho hÆ°á»›ng dáº«n, tiáº¿ng Anh cho há»c liá»‡u.** Má»i cÃ¢u lá»‡nh giao diá»‡n
báº±ng tiáº¿ng Viá»‡t. Ná»™i dung tiáº¿ng Anh bá»c trong `<span lang="en">`.

**Pháº£n há»“i trÆ°á»›c, pháº§n thÆ°á»Ÿng sau.** Tráº£ lá»i xong: hiá»‡n Ä‘Ãºng/sai vÃ  **giáº£i
thÃ­ch** trÆ°á»›c; hiá»‡u á»©ng XP/streak hiá»‡n sau, khi cÃ¡c em Ä‘Ã£ Ä‘á»c. ÄÃ¢y lÃ  bÃ¬nh luáº­n
cÃ³ sáºµn trong `spine.js` â€” lÃ m ngÆ°á»£c láº¡i thÃ¬ cÃ¡c em xem Ä‘iá»ƒm, bá» qua giáº£i thÃ­ch,
vÃ  máº¥t luÃ´n giÃ¡ trá»‹ sÆ° pháº¡m.

**KhÃ´ng cÃ³ ngÃµ cá»¥t vÃ  khÃ´ng cÃ³ mÃ n hÃ¬nh trá»‘ng.** Má»—i tráº¡ng thÃ¡i rá»—ng pháº£i cÃ³ má»™t
cÃ¢u vÃ  má»™t nÃºt: "ChÆ°a cÃ³ bÃ i nÃ o á»Ÿ Ä‘Ã¢y. Vá» trang Luyá»‡n táº­p â†’".

### Báº£ng mÃ u vÃ  nháº­n diá»‡n â€” giá»¯ nguyÃªn

`AGENTS.md` Â§12 cáº¥m tá»± Ä‘á»•i tÃªn, favicon, báº£ng mÃ u. Báº£ng mÃ u chÃ­nh thá»©c láº¥y
nguyÃªn tá»« `Platform/index.html`, chÃ©p vÃ o Â§5.1 dÆ°á»›i Ä‘Ã¢y. **KhÃ´ng thÃªm mÃ u má»›i.**

---

## 2. CÃ¢y thÆ° má»¥c cuá»‘i cÃ¹ng

```
hsg2627.github.io/
â”œâ”€â”€ AGENTS.md                      # báº£n sao â€” luáº­t cá»©ng
â”œâ”€â”€ SITE-SPEC.md                   # báº£n sao â€” tá»‡p nÃ y
â”œâ”€â”€ .nojekyll                      # táº¯t Jekyll, trÃ¡nh nuá»‘t tá»‡p láº¡
â”œâ”€â”€ 404.html                       # trang láº¡c Ä‘Æ°á»ng, cÃ³ nÃºt vá» trang chá»§
â”œâ”€â”€ favicon.svg
â”œâ”€â”€ index.html                     # Trang chá»§
â”‚
â”œâ”€â”€ css/
â”‚   â””â”€â”€ style.css                  # TOÃ€N Bá»˜ giao diá»‡n â€” má»™t tá»‡p duy nháº¥t
â”‚
â”œâ”€â”€ js/
â”‚   â”œâ”€â”€ progress.js                # â­ tá»‡p DUY NHáº¤T Ä‘Æ°á»£c import core/spine.js
â”‚   â”œâ”€â”€ data.js                    # danh má»¥c Ä‘iá»u hÆ°á»›ng (KHÃ”NG chá»©a há»c liá»‡u)
â”‚   â””â”€â”€ app.js                     # logic trang chá»§
â”‚
â”œâ”€â”€ core/                          # XÆ¯Æ NG Sá»NG â€” chÃ©p tá»« Platform/core/, Ä‘á»«ng viáº¿t láº¡i
â”‚   â”œâ”€â”€ config.js
â”‚   â”œâ”€â”€ util.js
â”‚   â”œâ”€â”€ identity.js
â”‚   â”œâ”€â”€ store.js
â”‚   â”œâ”€â”€ logger.js
â”‚   â”œâ”€â”€ transport.js
â”‚   â””â”€â”€ spine.js
â”‚
â”œâ”€â”€ content/                       # Há»ŒC LIá»†U â€” Ä‘áº§u ra cá»§a Pipeline/
â”‚   â”œâ”€â”€ loader.js                  # náº¡p + cache JSON (khÃ´ng Ä‘á»¥ng core/)
â”‚   â”œâ”€â”€ manifest.json
â”‚   â”œâ”€â”€ schedules.json
â”‚   â”œâ”€â”€ grammar/    g01.json â€¦ g14.json
â”‚   â”œâ”€â”€ vocab/      u01.json â€¦ u10.json
â”‚   â”œâ”€â”€ skills/     u06-reading.json, u06-listening.json, u06-writing.json â€¦
â”‚   â”œâ”€â”€ exams/      hk1-01.json, hk2-01.json â€¦
â”‚   â””â”€â”€ ai-eval/    ae-hk1.json, ae-hk2.json
â”‚
â”œâ”€â”€ assets/
â”‚   â”œâ”€â”€ audio/                     # CHá»ˆ 5 unit HK2 â€” xem Â§9.4
â”‚   â””â”€â”€ images/
â”‚
â”œâ”€â”€ Global_Success_10/             # ðŸ”’ GIÃO VIÃŠN â€” bÃ i giáº£ng trÃ¬nh chiáº¿u, Ä‘Ã£ dá»±ng xong
â”‚   â”œâ”€â”€ index.html                 #    thÃªm cá»•ng khoÃ¡ á»Ÿ Ä‘áº§u (Â§9.2)
â”‚   â”œâ”€â”€ css/gs10.css
â”‚   â”œâ”€â”€ js/
â”‚   â”‚   â”œâ”€â”€ gs10-player.js
â”‚   â”‚   â””â”€â”€ gs10-gate.js           #    Má»šI â€” cá»•ng khoÃ¡, KHÃ”NG ghi log
â”‚   â”œâ”€â”€ data/  units_meta.json Â· unit01â€¦unit10.json Â· reviews.json
â”‚   â””â”€â”€ assets/ audio Â· images Â· videos
â”‚
â”œâ”€â”€ practice/                      # ðŸ“ Luyá»‡n táº­p
â”‚   â”œâ”€â”€ index.html
â”‚   â”œâ”€â”€ js/app.js
â”‚   â”œâ”€â”€ grammar/     index.html + js/app.js
â”‚   â”œâ”€â”€ vocabulary/  index.html + js/app.js
â”‚   â”œâ”€â”€ listening/   index.html + js/app.js
â”‚   â”œâ”€â”€ writing/     index.html + js/app.js
â”‚   â””â”€â”€ exam/        index.html + js/app.js
â”‚
â”œâ”€â”€ ai-logs/                       # ðŸ¤– XÆ°á»Ÿng AI â€” Miá»n 6
â”‚   â”œâ”€â”€ index.html
â”‚   â””â”€â”€ js/app.js
â”‚
â””â”€â”€ me/                            # ðŸ‘¤ Dá»¯ liá»‡u cá»§a tÃ´i
    â”œâ”€â”€ index.html
    â””â”€â”€ js/app.js
```

**ÄÆ°á»ng dáº«n trong HTML dÃ¹ng dáº¥u `/` má»Ÿ Ä‘áº§u** (`/css/style.css`, `/js/progress.js`).
Trang cháº¡y á»Ÿ gá»‘c tÃªn miá»n `hsg2627.github.io` nÃªn tuyá»‡t Ä‘á»‘i lÃ  Ä‘Ãºng vÃ  khÃ´ng vá»¡
khi lá»“ng thÆ° má»¥c. *Chá»‰ khi nÃ o* chuyá»ƒn sang repo dá»± Ã¡n (`user.github.io/repo/`)
má»›i pháº£i Ä‘á»•i sang tÆ°Æ¡ng Ä‘á»‘i â€” lÃºc Ä‘Ã³ sá»­a má»™t lÆ°á»£t báº±ng tÃ¬mâ€“thay.

---

## 3. Báº£ng Ä‘Æ°á»ng dáº«n

| Trang | ÄÆ°á»ng dáº«n | Äiá»u hÆ°á»›ng chung | Ná»™i dung |
|---|---|---|---|
| Trang chá»§ | `/` | cÃ³ | ChÃ o + tiáº¿n Ä‘á»™ + 2 tháº» lá»›n + nhiá»‡m vá»¥ hÃ´m nay |
| Luyá»‡n táº­p | `/practice/` | cÃ³ | 5 tháº» ká»¹ nÄƒng |
| Ngá»¯ phÃ¡p | `/practice/grammar/` | cÃ³ | 14 module ngá»¯ phÃ¡p |
| LÃ m ngá»¯ phÃ¡p | `/practice/grammar/?g=g07` | cÃ³ | Chuá»—i cÃ¢u há»i |
| Tá»« vá»±ng | `/practice/vocabulary/` | cÃ³ | 10 bá»™ tá»« theo chá»§ Ä‘á» |
| LÃ m tá»« vá»±ng | `/practice/vocabulary/?unit=6` | cÃ³ | Tháº» ghi nhá»› + cÃ¢u há»i |
| Nghe | `/practice/listening/` | cÃ³ | 5 bÃ i nghe HK2 |
| Viáº¿t | `/practice/writing/` | cÃ³ | 5 Ä‘á» viáº¿t HK2 |
| Äá» luyá»‡n | `/practice/exam/` | cÃ³ | Äá» HK1, HK2 |
| XÆ°á»Ÿng AI | `/ai-logs/` | cÃ³ | 7 háº¡ng má»¥c lá»—i |
| LÃ m xÆ°á»Ÿng AI | `/ai-logs/?set=ae-hk2` | cÃ³ | Chuá»—i tÃ¡c vá»¥ Ä‘Ã¡nh giÃ¡ |
| Dá»¯ liá»‡u cá»§a tÃ´i | `/me/` | cÃ³ | Tiáº¿n Ä‘á»™, táº£i vá», xoÃ¡ |
| Láº¡c Ä‘Æ°á»ng | `/404.html` | cÃ³ | Má»™t cÃ¢u + nÃºt vá» trang chá»§ |
| ðŸ”’ **BÃ i giáº£ng (giÃ¡o viÃªn)** | `/Global_Success_10/` | **khÃ´ng** | Cá»•ng khoÃ¡ â†’ 10 units Ã— 8 lessons + 4 reviews |

Trang bÃ i giáº£ng **khÃ´ng** mang thanh Ä‘iá»u hÆ°á»›ng há»c sinh, **khÃ´ng** mang HUD tiáº¿n
Ä‘á»™, vÃ  **khÃ´ng** ghi báº¥t ká»³ dÃ²ng log nÃ o. NÃ³ khÃ´ng pháº£i má»™t mÃ n hÃ¬nh cá»§a há»c
sinh â€” nÃ³ lÃ  cÃ´ng cá»¥ cá»§a giÃ¡o viÃªn tÃ¬nh cá» náº±m chung tÃªn miá»n. Xem Â§9.2.

**Äiá»u hÆ°á»›ng cÃ³ á»Ÿ má»i trang.** SÆ¡ Ä‘á»“ ban Ä‘áº§u chá»‰ Ä‘á»ƒ sidebar á»Ÿ trang chá»§; nhÆ° váº­y
má»i trang trong lÃ  ngÃµ cá»¥t vÃ  há»c sinh pháº£i báº¥m nÃºt Back cá»§a trÃ¬nh duyá»‡t â€” thá»©
mÃ  trÃªn Ä‘iá»‡n thoáº¡i nhiá»u em khÃ´ng dÃ¹ng.

### Ba Ä‘iá»u rÃºt ra tá»« cÃ¡ch Ä‘áº·t Ä‘Æ°á»ng dáº«n nÃ y

**KhÃ´ng cÃ²n Ä‘á»‹nh tuyáº¿n báº±ng hash.** `AGENTS.md` Â§10 cáº£nh bÃ¡o GA4 khÃ´ng tÃ­nh lÆ°á»£t
xem khi trang Ä‘á»•i `#hash`. Cáº¥u trÃºc nhiá»u tá»‡p `index.html` nÃ y lÃ m má»—i láº§n chuyá»ƒn
mÃ n hÃ¬nh lÃ  **má»™t lÆ°á»£t táº£i trang tháº­t**, nÃªn GA Ä‘áº¿m Ä‘Ãºng mÃ  khÃ´ng cáº§n báº­t thÃªm
gÃ¬. Báº«y Ä‘Ã³ biáº¿n máº¥t cÃ¹ng vá»›i trang cÅ©.

**Tham sá»‘ `?unit=`, `?g=`, `?set=` pháº£i lÃ  liÃªn káº¿t tháº­t** (`<a href>`), khÃ´ng
pháº£i `history.pushState`. Äá»•i query báº±ng JavaScript thÃ¬ láº¡i rÆ¡i vÃ o Ä‘Ãºng báº«y
trÃªn. Giá»¯ tÃªn `unit` vá»›i sá»‘ nguyÃªn (`?unit=6`) vÃ¬ `js/app.js` hiá»‡n Ä‘Ã£ dÃ¹ng Ä‘Ãºng
tÃªn Ä‘Ã³ â€” Ä‘á»•i sang `?u=u06` lÃ  thÃªm má»™t chá»— pháº£i sá»­a mÃ  khÃ´ng Ä‘Æ°á»£c gÃ¬.

**PhiÃªn há»c khÃ´ng Ä‘á»©t khi chuyá»ƒn trang.** `logger.js` giá»¯ `session_id` trong
`localStorage` vÃ  chá»‰ ghi `session_start` khi tháº­t sá»± má»Ÿ phiÃªn má»›i â€” Ä‘Ã£ kiá»ƒm
chá»©ng á»Ÿ `README.md`. Nhiá»u trang khÃ´ng sinh thÃªm phiÃªn giáº£.

---

## 3.1 XÃ¢y láº¡i trÃªn ná»n sáº¡ch

**Quyáº¿t Ä‘á»‹nh 2026-08-26: xoÃ¡ háº¿t thÆ° má»¥c cÅ©, dá»±ng láº¡i theo cÃ¢y Â§2.** KhÃ´ng di
trÃº, khÃ´ng giá»¯ SPA hash, khÃ´ng gá»¡ dáº§n tá»«ng máº£nh. Má»¥c nÃ y nÃ³i **cá»©u gÃ¬ trÆ°á»›c khi
xoÃ¡** vÃ  **nhá»¯ng gÃ¬ Ä‘ang cháº¡y Ä‘Æ°á»£c thÃ¬ Ä‘á»«ng lÃ m láº¡i tá»« trÃ­ nhá»›**.

### 3.1.0 XoÃ¡ lÃ  hoÃ n tÃ¡c Ä‘Æ°á»£c â€” náº¿u giá»¯ `.git`

ToÃ n bá»™ repo Ä‘Ã£ commit tá»›i `cb75168`, sáº¡ch (chá»‰ `index.html` Ä‘ang cÃ³ sá»­a Ä‘á»•i
chÆ°a commit). NghÄ©a lÃ  xoÃ¡ thÆ° má»¥c **khÃ´ng máº¥t gÃ¬ vÄ©nh viá»…n**, miá»…n lÃ :

- **KhÃ´ng Ä‘á»¥ng vÃ o `.git/`.** ÄÃ¢y lÃ  ranh giá»›i duy nháº¥t. XoÃ¡ `.git` lÃ  máº¥t tháº­t.
- **Commit báº£n hiá»‡n táº¡i trÆ°á»›c khi xoÃ¡**, Ä‘áº·t má»™t nhÃ£n Ä‘á»ƒ sau nÃ y láº¥y láº¡i:

```bash
git add -A && git commit -m "chore: snapshot truoc khi dung lai theo SITE-SPEC" && git tag pre-rebuild
```

CÃ³ nhÃ£n `pre-rebuild` thÃ¬ má»i tá»‡p cÅ© láº¥y láº¡i Ä‘Æ°á»£c báº±ng
`git checkout pre-rebuild -- <Ä‘Æ°á»ng dáº«n>` báº¥t cá»© lÃºc nÃ o, ká»ƒ cáº£ sÃ¡u thÃ¡ng sau.
LÃ m bÆ°á»›c nÃ y trÆ°á»›c, hai phÃºt, Ä‘á»•i láº¡i lÃ  khÃ´ng bao giá» pháº£i tiáº¿c.

### 3.1.1 Cá»©u sÃ¡u thá»© nÃ y ra khá»i Ä‘á»£t xoÃ¡

ChÃ©p sang má»™t thÆ° má»¥c táº¡m ngoÃ i repo trÆ°á»›c khi xoÃ¡, rá»“i chÃ©p trá»Ÿ láº¡i vÃ o cÃ¢y má»›i.
ÄÃ¢y Ä‘á»u lÃ  thá»© **khÃ´ng dá»±ng láº¡i Ä‘Æ°á»£c báº±ng cÃ¡ch viáº¿t mÃ£**:

| Cá»©u | Dung lÆ°á»£ng | Vá» Ä‘Ã¢u trong cÃ¢y má»›i | VÃ¬ sao |
|---|---|---|---|
| `Global_Success_10/` | 4,6MB | nguyÃªn chá»— cÅ© | 10 units Ã— 8 lessons + 4 reviews. CÃ´ng lá»›n nháº¥t trong repo |
| `core/` | 44KB | `/core/` | XÆ°Æ¡ng sá»‘ng Ä‘Ã£ kiá»ƒm chá»©ng. KhÃ´ng viáº¿t láº¡i (Â§6.6) |
| `data/ai-eval-bank.json` | 21KB | `content/ai-eval/` | **NgÃ¢n hÃ ng Ä‘Ã¡nh giÃ¡ AI** â€” bÆ°á»›c cháº·n cáº£ luáº­n vÄƒn (Â§9.6) |
| `data/vocab-eng10.json` | 486KB | `content/vocab/` | 10 unit tá»« vá»±ng Ä‘Ã£ soáº¡n |
| `data/eng10-units.json` Â· `listening-writing-eng10.json` | 276KB | `content/skills/` | Ngá»¯ liá»‡u bá»‘n ká»¹ nÄƒng |
| `images/English_Insider_Logo.svg` | | `/assets/images/` | Nháº­n diá»‡n â€” `AGENTS.md` Â§12 cáº¥m Ä‘á»•i |

**KhÃ´ng cá»©u:** `data/vocab-c1c2.json`, `data/hsg12-topics.json`,
`collocations_data.js`, `test*.html`, `ocr_dump.json`, `scratch/`. Xem Â§10.

**CÃ¢n nháº¯c riÃªng `images/` â€” 44MB.** Cáº£ thÆ° má»¥c náº·ng 44MB, quÃ¡ lá»›n cho má»™t repo
trang tÄ©nh vÃ  gáº§n nhÆ° cháº¯c cháº¯n cÃ³ áº£nh khÃ´ng trang nÃ o dÃ¹ng. Äá»«ng chÃ©p cáº£ cá»¥m
sang cÃ¢y má»›i. CÃ¡ch lÃ m: chÃ©p **logo trÆ°á»›c**, rá»“i má»—i láº§n má»™t mÃ n hÃ¬nh cáº§n áº£nh thÃ¬
láº¥y Ä‘Ãºng tá»‡p áº¥y tá»« `git checkout pre-rebuild -- images/<tá»‡p>`. áº¢nh nÃ o sÃ¡u thÃ¡ng
khÃ´ng ai láº¥y ra thÃ¬ Ä‘Ãºng lÃ  khÃ´ng cáº§n.

**VÃ  `audio/` â€” má»™t tá»‡p 9,6MB.** Cáº£ thÆ° má»¥c chá»‰ cÃ³ `04_Track_4.mp3` náº·ng 9,6MB.
Má»™t bÃ i nghe 180â€“200 tá»« (`CONTENT-SPEC.md` Â§4) mÃ  9,6MB lÃ  sai Ä‘á»‹nh dáº¡ng, khÃ´ng
pháº£i sai ná»™i dung â€” nÃ©n láº¡i cÃ²n mono 64kbps trÆ°á»›c khi Ä‘Æ°a vÃ o `assets/audio/`,
xuá»‘ng dÆ°á»›i 2MB. Há»c sinh dÃ¹ng 3G khÃ´ng táº£i ná»•i 9,6MB cho má»™t bÃ i táº­p.

### 3.1.2 Kiá»ƒm kÃª chá»©c nÄƒng Ä‘ang cháº¡y Ä‘Æ°á»£c

XÃ¢y láº¡i giao diá»‡n khÃ´ng cÃ³ nghÄ©a lÃ  quÃªn nhá»¯ng gÃ¬ Ä‘Ã£ lÃ m Ä‘Æ°á»£c. ChÃ­n mÃ n hÃ¬nh cá»§a
SPA cÅ© vÃ  hÃ m dá»±ng chÃºng â€” Ä‘á»c trÆ°á»›c khi viáº¿t mÃ n hÃ¬nh tÆ°Æ¡ng á»©ng, Ã­t nháº¥t lÃ  Ä‘á»ƒ
biáº¿t dá»¯ liá»‡u vÃ o ra hÃ¬nh dáº¡ng tháº¿ nÃ o:

| Hash cÅ© | Panel trong `index.html` | HÃ m render | Route má»›i | Tá»‡p má»›i |
|---|---|---|---|---|
| `#home` | `overview-view` | markup tÄ©nh | `/` | `index.html` + `js/app.js` |
| `#dashboard` | `dashboard-view` | `renderDashboard()` :1023 | `/me/` | `me/index.html` + `me/js/app.js` |
| `#gs10` | `gs10-view` | markup tÄ©nh (tháº» dáº«n) | `/Global_Success_10/` | **Ä‘Ã£ cÃ³** |
| `#grammar` Â· `#english10` | `grammar-view` | markup + `openModule` :770 | `/practice/grammar/` | `practice/grammar/` |
| `#vocab` | `vocab-view` | `renderVocabStudio()` :180 | `/practice/vocabulary/` | `practice/vocabulary/` |
| `#listening` | `listening-view` | `renderListeningLab()` :525 | `/practice/listening/` | `practice/listening/` |
| `#writing` | `writing-view` | `renderWritingStudio()` :684 | `/practice/writing/` | `practice/writing/` |
| `#quiz` | `quiz-hub-view` | markup + `QuizEngine` | `/practice/exam/` | `practice/exam/` |
| `#ai-error-log` | `ai-error-log-view` | `renderAiEvalTasks()` :867 | `/ai-logs/` | `ai-logs/` |

Sá»‘ dÃ²ng theo `js/app.js` báº£n ngÃ y 2026-08-26 (láº¥y láº¡i báº±ng
`git show pre-rebuild:js/app.js`). Ba Ä‘iá»u Ä‘Ã¡ng biáº¿t trÆ°á»›c khi viáº¿t láº¡i:

- `renderAiEvalTasks()` **khÃ´ng** náº±m trong `switchView()` mÃ  gá»i tháº³ng á»Ÿ dÃ²ng
  1148 lÃºc táº£i trang â€” náº¿u chá»‰ Ä‘á»c router sáº½ tÆ°á»Ÿng mÃ n hÃ¬nh XÆ°á»Ÿng AI chÆ°a cÃ³.
- `js/app.js` cÅ© `import { Spine }` tháº³ng á»Ÿ dÃ²ng 6 vÃ  phÆ¡i `window.SpineHelper`
  á»Ÿ dÃ²ng 33. **Báº£n má»›i Ä‘i qua `Portal`** (Â§6.1) â€” Ä‘á»«ng chÃ©p láº¡i thÃ³i quen nÃ y.
- `js/quiz-engine.js` lÃ  `window.QuizEngine`, má»™t IIFE Ä‘á»™c láº­p, khÃ´ng dÃ­nh vÃ o
  router. ÄÃ¢y lÃ  máº£nh **chÃ©p sang Ä‘Æ°á»£c gáº§n nhÆ° nguyÃªn váº¹n**.

**KhÃ´ng giá»¯ láº¡i router.** KhÃ´ng `viewMap`, khÃ´ng `switchView()`, khÃ´ng
`hashchange`, khÃ´ng `.view-panel`/`.active`. TrÃ¬nh duyá»‡t lÃ  router. Dá»±ng láº¡i má»™t
router phÃ­a client lÃ  Ä‘i háº¿t má»™t vÃ²ng Ä‘á»ƒ vá» Ä‘Ãºng chá»— vá»«a rá»i khá»i.

**URL cÅ© khÃ´ng cáº§n chuyá»ƒn hÆ°á»›ng.** ChÆ°a thu dá»¯ liá»‡u, `ENDPOINT` cÃ²n rá»—ng, chÆ°a
há»c sinh nÃ o cÃ³ bookmark. CÃ¡c tá»‡p `english10.html`, `hsg12.html`, `vocab.html`,
`grammar.html`, `listening.html`, `reading.html`, `dashboard.html`,
`test*.html` â€” **xoÃ¡ tháº³ng**, khÃ´ng cáº§n tá»‡p chuyá»ƒn hÆ°á»›ng nÃ o. TrÆ°á»ng há»£p duy
nháº¥t cÃ²n lÃ½ do giá»¯ lÃ  `global-success-10.html` náº¿u giÃ¡o viÃªn Ä‘Ã£ lÆ°u Ä‘Æ°á»ng dáº«n
áº¥y; há»i má»™t cÃ¢u lÃ  biáº¿t, khÃ´ng Ä‘oÃ¡n.

### 3.1.3 Bá»‘n Ä‘iá»u riÃªng cá»§a GitHub Pages

**LuÃ´n viáº¿t dáº¥u `/` cuá»‘i.** `/practice/grammar/` chá»© khÃ´ng pháº£i
`/practice/grammar`. Thiáº¿u dáº¥u thÃ¬ GitHub Pages tráº£ 301 rá»“i má»›i tá»›i nÆ¡i â€” thá»«a
má»™t vÃ²ng trÃªn 3G, vÃ  Ä‘Æ°á»ng dáº«n tÆ°Æ¡ng Ä‘á»‘i trong trang tÃ­nh sai má»™t cáº¥p.

**KhÃ´ng cÃ³ rewrite phÃ­a mÃ¡y chá»§.** Má»—i route lÃ  má»™t thÆ° má»¥c cÃ³ `index.html` tháº­t.
Äá»«ng thiáº¿t káº¿ Ä‘Æ°á»ng dáº«n kiá»ƒu `/practice/grammar/g07` â€” khÃ´ng cÃ³ gÃ¬ phá»¥c vá»¥ nÃ³.
Tham sá»‘ phá»¥ Ä‘i báº±ng query (`?g=g07`).

**`404.html` á»Ÿ gá»‘c lÃ  lÆ°á»›i há»©ng.** GÃµ sai Ä‘Æ°á»ng dáº«n thÃ¬ rÆ¡i vÃ o Ä‘Ã³ â€” giá»¯ thanh
Ä‘iá»u hÆ°á»›ng trong tá»‡p nÃ y Ä‘á»ƒ há»c sinh báº¥m vá» Ä‘Æ°á»£c, Ä‘á»«ng Ä‘á»ƒ má»™t dÃ²ng chá»¯ trá»‘ng.

**`.nojekyll`.** KhÃ´ng cÃ³ nÃ³, GitHub Pages cháº¡y Jekyll vÃ  bá» qua má»i thÆ° má»¥c vÃ 
tá»‡p báº¯t Ä‘áº§u báº±ng `_`. Má»™t tá»‡p rá»—ng, thÃªm cho xong chuyá»‡n.

### 3.1.4 Google Analytics â€” báº«y hash khÃ´ng cÃ²n

`AGENTS.md` Â§10 dáº·n pháº£i báº­t *Enhanced measurement â†’ Page changes based on
browser history events* vÃ¬ trang dÃ¹ng hash. **Sau khi dá»±ng láº¡i, dáº·n Ä‘Ã³ háº¿t hiá»‡u
lá»±c:** má»—i mÃ n hÃ¬nh lÃ  má»™t lÆ°á»£t táº£i tháº­t nÃªn `page_view` tá»± báº¯n. Äá»ƒ báº­t cÅ©ng
khÃ´ng sao â€” nÃ³ chá»‰ kÃ­ch hoáº¡t khi cÃ³ `pushState` hoáº·c Ä‘á»•i hash, mÃ  cáº£ hai Ä‘á»u
khÃ´ng cÃ²n. Ghi má»™t dÃ²ng vÃ o `AGENTS.md` Â§10 ráº±ng báº«y nÃ y Ä‘Ã£ xá»­ lÃ½, Ä‘á»«ng Ä‘á»ƒ ngÆ°á»i
sau Ä‘i báº­t láº¡i rá»“i tháº¯c máº¯c.

---

## 4. Khung HTML chuáº©n

Má»i trang báº¯t Ä‘áº§u tá»« khung nÃ y. Chá»‰ Ä‘á»•i `<title>`, pháº§n `<main>`, vÃ  Ä‘Æ°á»ng dáº«n
`app.js` á»Ÿ cuá»‘i.

```html
<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ngá»¯ phÃ¡p Â· English Insiders Learning Portal</title>
<meta name="description" content="Há»c liá»‡u sá»‘ Tiáº¿ng Anh 10 theo ChÆ°Æ¡ng trÃ¬nh GDPT 2018.">
<link rel="icon" href="/favicon.svg">
<link rel="stylesheet" href="/css/style.css">

<!-- Google Analytics â€” CHá»ˆ giÃ¡m sÃ¡t váº­n hÃ nh. KhÃ´ng bao giá» nháº­n mÃ£ há»c sinh. -->
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
</head>
<body>

<!-- â•â•â• BANNER â€” KHÃ”NG XOÃ, KHÃ”NG THU NHá»Ž, KHÃ”NG ÄÆ¯A VÃ€O <details> â•â•â• -->
<header class="topbar">
  <a class="brand" href="/">English Insiders Learning Portal</a>
  <p class="ai-notice" lang="en">
    ðŸ¤– All study materials are generated by AI and may contain inaccuracies.
    Please verify critical information independently.
  </p>
</header>

<!-- Thanh tiáº¿n Ä‘á»™ â€” progress.js váº½ vÃ o Ä‘Ã¢y -->
<div class="hud" id="hud" hidden></div>

<main class="wrap" id="main">
  <!-- Ná»™i dung riÃªng cá»§a tá»«ng trang -->
</main>

<!-- Äiá»u hÆ°á»›ng: thanh dÆ°á»›i trÃªn Ä‘iá»‡n thoáº¡i, thanh trÃªn á»Ÿ mÃ¡y tÃ­nh -->
<nav class="tabbar" id="tabbar" aria-label="Äiá»u hÆ°á»›ng chÃ­nh"></nav>

<script type="module" src="/practice/grammar/js/app.js"></script>
</body>
</html>
```

### Bá»‘n luáº­t vá» banner AI

Láº¥y nguyÃªn tá»« `AGENTS.md` Â§6, nháº¯c láº¡i vÃ¬ Ä‘Ã¢y lÃ  chá»— dá»… bá»‹ "dá»n dáº¹p" nháº¥t.

1. **VÄƒn báº£n tiáº¿ng Anh giá»¯ nguyÃªn tá»«ng chá»¯.** KhÃ´ng rÃºt gá»n, khÃ´ng diá»…n Ä‘áº¡t láº¡i,
   khÃ´ng dá»‹ch Ä‘Ã¨ lÃªn. Má»Ÿ Ä‘áº§u báº±ng ðŸ¤–.
2. **ThÆ°á»ng trá»±c trÃªn má»i mÃ n hÃ¬nh.** KhÃ´ng pháº£i popup Ä‘Ã³ng má»™t láº§n. KhÃ´ng náº±m
   trong `<details>`, khÃ´ng áº©n sau nÃºt "xem thÃªm", khÃ´ng Ä‘áº©y xuá»‘ng chÃ¢n trang.
3. **TÆ°Æ¡ng pháº£n Ä‘á»§ Ä‘á»c.** DÃ¹ng `--ink` trÃªn `--sunk`, khÃ´ng dÃ¹ng `--muted` cá»¡
   nhá».
4. **Gáº¯n nhÃ£n á»Ÿ cáº¥p item.** Má»i item cÃ³ `ai_generated: true` hiá»‡n chip ðŸ¤– ngay
   táº¡i item. Há»c sinh cáº§n biáº¿t **cÃ¡i Ä‘ang lÃ m** do AI sinh.

**Chá»‰ tiáº¿ng Anh. KhÃ´ng dá»‹ch, khÃ´ng thÃªm dÃ²ng tiáº¿ng Viá»‡t bÃªn dÆ°á»›i** (Â§0.4b).

Banner pháº£i cÃ³ á»Ÿ **cáº£** `/Global_Success_10/` â€” bÃ i giáº£ng cÅ©ng do AI sinh, vÃ 
giÃ¡o viÃªn trÃ¬nh chiáº¿u cho cáº£ lá»›p xem thÃ¬ cáº£nh bÃ¡o láº¡i cÃ ng pháº£i tháº¥y Ä‘Æ°á»£c. Báº£n
hiá»‡n táº¡i Ä‘Ã£ cÃ³ (`.ai-banner-strip`); giá»¯ nguyÃªn.

---

## 5. Há»‡ thiáº¿t káº¿ â€” `/css/style.css`

### 5.1 Token â€” chÃ©p nguyÃªn, khÃ´ng thÃªm mÃ u

```css
:root{
  --paper:#FBFAF7; --surface:#fff; --sunk:#F4F2EC;
  --ink:#1A1F35; --muted:#5C6079; --navy:#283567; --brass:#8A6A1C;
  --rule:#E4E0D6; --ok:#2A6B3F; --crit:#A32D22;

  --tap:48px;            /* vÃ¹ng cháº¡m tá»‘i thiá»ƒu */
  --gap:12px;
  --radius:10px;
  --wrap:680px;          /* bá» rá»™ng Ä‘á»c tá»‘i Ä‘a */
}
@media (prefers-color-scheme:dark){
  :root{
    --paper:#13161F; --surface:#1A1E2A; --sunk:#20242F;
    --ink:#E9E7E1; --muted:#9BA0B4; --navy:#A3B1E4; --brass:#D8B75F;
    --rule:#2C3140; --ok:#7EC194; --crit:#E98A7C;
  }
}
```

Ná»n tá»‘i Ä‘áº£o vai `--navy` vÃ  `--paper`: nÃºt ná»n `--navy` chá»¯ `--paper` á»Ÿ ná»n sÃ¡ng
thÃ¬ á»Ÿ ná»n tá»‘i pháº£i lÃ  nÃºt ná»n `--navy` chá»¯ `#13161F`. Kiá»ƒm báº±ng máº¯t trÃªn mÃ¡y
tháº­t, Ä‘á»«ng tin con sá»‘ tÆ°Æ¡ng pháº£n tÃ­nh á»Ÿ ná»n sÃ¡ng.

### 5.2 Ná»n táº£ng

```css
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{
  margin:0; background:var(--paper); color:var(--ink);
  font:17px/1.6 system-ui,"Segoe UI",Roboto,sans-serif;
  -webkit-font-smoothing:antialiased;
  padding-bottom:calc(64px + env(safe-area-inset-bottom)); /* chá»«a chá»— tabbar */
}
.wrap{max-width:var(--wrap);margin:0 auto;padding:18px 16px 40px}
:focus-visible{outline:2px solid var(--brass);outline-offset:2px}
@media (min-width:768px){ body{padding-bottom:0} }
```

### 5.3 Banner vÃ  HUD

```css
.topbar{background:var(--sunk);border-bottom:1px solid var(--rule);padding:10px 16px}
.brand{
  display:block;font-weight:700;font-size:15px;letter-spacing:.02em;
  color:var(--navy);text-decoration:none;text-transform:uppercase;
}
.ai-notice{
  margin:6px 0 0;font-size:13.5px;line-height:1.45;color:var(--ink);
  border-left:3px solid var(--brass);padding-left:10px;
}

/* HUD: cáº¥p Ä‘á»™ Â· XP Â· chuá»—i Ä‘Ãºng Â· sá»‘ Ä‘ang chá» gá»­i */
.hud{
  display:flex;gap:14px;align-items:center;flex-wrap:wrap;
  max-width:var(--wrap);margin:0 auto;padding:8px 16px;
  font-size:13px;color:var(--muted);
}
.hud b{color:var(--ink);font-variant-numeric:tabular-nums}
.hud .bar{flex:1;min-width:120px;height:8px;background:var(--sunk);
  border:1px solid var(--rule);border-radius:99px;overflow:hidden}
.hud .bar>i{display:block;height:100%;background:var(--brass)}
```

### 5.4 Tháº» Ä‘iá»u hÆ°á»›ng â€” Ä‘Ã­ch cháº¡m lÃ  cáº£ tháº»

```css
.cards{display:grid;gap:var(--gap);grid-template-columns:1fr}
@media (min-width:600px){ .cards{grid-template-columns:1fr 1fr} }

.card{
  display:block;background:var(--surface);border:1px solid var(--rule);
  border-radius:var(--radius);padding:16px;text-decoration:none;color:inherit;
  min-height:var(--tap);
}
.card:active{background:var(--sunk)}
.card h3{margin:0 0 4px;font-size:1.05rem;color:var(--navy)}
.card p{margin:0;font-size:14px;color:var(--muted)}
.card .ico{font-size:26px;line-height:1;display:block;margin-bottom:8px}
.card .meta{margin-top:10px;font-size:12.5px;color:var(--muted);
  display:flex;gap:10px;flex-wrap:wrap}
```

Cáº£ tháº» lÃ  má»™t tháº» `<a>`. KhÃ´ng Ä‘áº·t nÃºt bÃªn trong tháº» â€” hai Ä‘Ã­ch cháº¡m lá»“ng nhau
lÃ  lá»—i hay gáº·p nháº¥t trÃªn Ä‘iá»‡n thoáº¡i.

### 5.5 NÃºt

```css
.btn{
  font:inherit;font-weight:600;font-size:16px;
  min-height:var(--tap);padding:12px 18px;border:none;border-radius:var(--radius);
  background:var(--navy);color:var(--paper);cursor:pointer;
}
.btn.ghost{background:transparent;color:var(--navy);border:1.5px solid var(--navy)}
.btn.danger{background:var(--crit);color:#fff}
.btn:disabled{opacity:.45;cursor:not-allowed}
.btn-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}
.btn-wide{width:100%}
```

### 5.6 PhÆ°Æ¡ng Ã¡n tráº£ lá»i â€” thÃ nh pháº§n quan trá»ng nháº¥t

```css
.opt{
  display:block;width:100%;text-align:left;font:inherit;font-size:16.5px;
  min-height:52px;padding:14px 16px;margin-bottom:10px;
  background:var(--surface);color:var(--ink);
  border:1.5px solid var(--rule);border-radius:var(--radius);cursor:pointer;
}
.opt[aria-pressed="true"]{border-color:var(--navy);background:var(--sunk)}
.opt.is-correct{border-color:var(--ok);background:color-mix(in srgb,var(--ok) 12%,transparent)}
.opt.is-wrong  {border-color:var(--crit);background:color-mix(in srgb,var(--crit) 12%,transparent)}
.opt .key{font-weight:700;color:var(--muted);margin-right:10px}
```

ÄÃºng/sai **khÃ´ng Ä‘Æ°á»£c chá»‰ bÃ¡o báº±ng mÃ u** â€” thÃªm kÃ½ hiá»‡u `âœ“` / `âœ—` vÃ o Ä‘áº§u phÆ°Æ¡ng
Ã¡n. Há»c sinh mÃ¹ mÃ u vÃ  Ä‘iá»‡n thoáº¡i phÆ¡i náº¯ng Ä‘á»u cáº§n Ä‘iá»u nÃ y.

### 5.7 Ã” pháº£n há»“i

```css
.fb{border-left:3px solid var(--ok);background:var(--sunk);
    padding:14px 16px;border-radius:0 var(--radius) var(--radius) 0;margin:16px 0}
.fb.bad{border-left-color:var(--crit)}
.fb h4{margin:0 0 6px;font-size:15px}
.fb p{margin:0;font-size:15px;line-height:1.55}

/* Hiá»‡u á»©ng XP â€” hiá»‡n SAU khi há»c sinh Ä‘Ã£ Ä‘á»c pháº£n há»“i */
.toast{
  position:fixed;left:50%;transform:translateX(-50%);
  bottom:calc(76px + env(safe-area-inset-bottom));
  background:var(--navy);color:var(--paper);padding:10px 18px;
  border-radius:99px;font-size:14px;font-weight:600;z-index:50;
}
@media (min-width:768px){ .toast{bottom:24px} }
```

### 5.8 Chip ðŸ¤– cáº¥p item

```css
.chip-ai{
  display:inline-flex;align-items:center;gap:5px;
  font-size:12px;font-weight:600;color:var(--brass);
  border:1px solid var(--brass);border-radius:99px;padding:2px 9px;
}
```

DÃ¹ng á»Ÿ **má»i** item cÃ³ `ai_generated: true`, khÃ´ng riÃªng XÆ°á»Ÿng AI.

### 5.9 Äiá»u hÆ°á»›ng

```css
.tabbar{
  position:fixed;left:0;right:0;bottom:0;z-index:40;
  display:grid;grid-template-columns:repeat(4,1fr);
  background:var(--surface);border-top:1px solid var(--rule);
  padding-bottom:env(safe-area-inset-bottom);
}
.tabbar a{
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:2px;min-height:56px;font-size:11px;color:var(--muted);text-decoration:none;
}
.tabbar a .ico{font-size:20px}
.tabbar a[aria-current="page"]{color:var(--navy);font-weight:700}

@media (min-width:768px){
  .tabbar{position:static;grid-template-columns:none;display:flex;
    justify-content:center;gap:8px;border-top:none;border-bottom:1px solid var(--rule)}
  .tabbar a{flex-direction:row;min-height:44px;padding:0 14px;font-size:14px}
}
```

Bá»‘n má»¥c, Ä‘Ãºng thá»© tá»± nÃ y: ðŸ  Trang chá»§ Â· ðŸ“ Luyá»‡n táº­p Â· ðŸ¤– XÆ°á»Ÿng AI Â· ðŸ‘¤ Cá»§a tÃ´i.

**KhÃ´ng cÃ³ má»¥c nÃ o trá» tá»›i bÃ i giáº£ng cá»§a giÃ¡o viÃªn.** Lá»‘i vÃ o duy nháº¥t lÃ  má»™t
liÃªn káº¿t nhá» á»Ÿ chÃ¢n trang chá»§ (Â§9.1) â€” tháº¥y Ä‘Æ°á»£c vá»›i ngÆ°á»i biáº¿t Ä‘Æ°á»ng, khÃ´ng náº±m
trong táº§m máº¯t há»c sinh Ä‘ang lÆ°á»›t.

### 5.10 Bá»‘n thá»© khÃ´ng Ä‘Æ°á»£c dÃ¹ng

| Cáº¥m | VÃ¬ sao |
|---|---|
| PhÃ´ng chá»¯ táº£i tá»« Google Fonts | Cháº·n hiá»ƒn thá»‹ trÃªn 3G, vÃ  lÃ  má»™t láº§n gá»i ra ngoÃ i khÃ´ng cáº§n thiáº¿t |
| Hiá»‡u á»©ng chuyá»ƒn mÃ n hÃ¬nh > 200ms | TrÃªn mÃ¡y giÃ¡ ráº» thÃ nh giáº­t; cÃ¡c em tÆ°á»Ÿng mÃ¡y treo rá»“i báº¥m láº¡i |
| Äá»“ng há»“ Ä‘áº¿m ngÆ°á»£c á»Ÿ bÃ i luyá»‡n | BÃ i luyá»‡n khÃ´ng pháº£i bÃ i kiá»ƒm tra. `latency_ms` Ä‘o Ä‘Æ°á»£c rá»“i mÃ  khÃ´ng cáº§n gÃ¢y Ã¡p lá»±c |
| Modal chá»“ng modal | TrÃªn mÃ n 360px khÃ´ng thoÃ¡t ra Ä‘Æ°á»£c |

---

## 6. Táº§ng JavaScript

### 6.1 SÆ¡ Ä‘á»“ nháº­p kháº©u â€” Ä‘á»c ká»¹, Ä‘Ã¢y lÃ  chá»— dá»… sai nháº¥t

```
core/spine.js
     â–²
     â”‚ (import â€” CHá»ˆ Má»˜T chá»— trong toÃ n bá»™ trang)
     â”‚
js/progress.js  â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
     â–²                        â”‚
     â”‚ import { Portal }      â”‚  import { loadJSON }
     â”‚                        â–¼
má»i */js/app.js  â—„â”€â”€â”€â”€ content/loader.js
```

**Luáº­t:** `js/progress.js` lÃ  tá»‡p duy nháº¥t chá»©a chuá»—i `core/spine.js`. KhÃ´ng
`app.js` nÃ o Ä‘Æ°á»£c import báº¥t cá»© thá»© gÃ¬ trong `core/`. Kiá»ƒm báº±ng Â§13.1.

`content/loader.js` **Ä‘Æ°á»£c phÃ©p** dÃ¹ng `fetch` vÃ  `localStorage` â€” nÃ³ náº¡p vÃ 
cache **há»c liá»‡u**, khÃ´ng pháº£i sá»± kiá»‡n. `DATA-DESIGN.md` Â§10 quy Ä‘á»‹nh nhÆ° váº­y.
ÄÃ¢y lÃ  ngoáº¡i lá»‡ duy nháº¥t; ghi rÃµ á»Ÿ Ä‘áº§u tá»‡p Ä‘á»ƒ khÃ´ng ai "sá»­a" nháº§m.

### 6.2 `js/progress.js`

```js
// js/progress.js â€” lá»›p vá» DUY NHáº¤T quanh xÆ°Æ¡ng sá»‘ng.
//
// KHÃ”NG tá»± lÆ°u tráº¡ng thÃ¡i. KHÃ”NG tá»± gá»­i máº¡ng. Má»i thá»© Ä‘i qua Spine.
// Tá»‡p nÃ y lÃ  chá»— duy nháº¥t trong trang Ä‘Æ°á»£c import core/.

import { Spine } from '/core/spine.js';
import { NAV } from '/js/data.js';

export const Portal = {
  spine: Spine,

  /**
   * Gá»i á»Ÿ dÃ²ng Ä‘áº§u má»i app.js.
   *   await Portal.boot({ module:'grammar', unit:null, tab:'practice' })
   * Tráº£ vá» { ok } â€” false nghÄ©a lÃ  Ä‘ang hiá»‡n cá»•ng nháº­p mÃ£, app.js dá»«ng láº¡i.
   */
  async boot({ module, unit = null, tab } = {}) { /* xem bÃªn dÆ°á»›i */ },

  /**
   * Chá»‰ Ä‘á»c mÃ£ Ä‘Ã£ lÆ°u, KHÃ”NG khá»Ÿi Ä‘á»™ng xÆ°Æ¡ng sá»‘ng, KHÃ”NG ghi log.
   * Tráº£ vá» 'student' | 'teacher' | 'guest'. DÃ¹ng cho cá»•ng khoÃ¡ Â§9.2.
   */
  role() {
    const id = Spine.id;                       // getter thuáº§n, khÃ´ng sinh sá»± kiá»‡n
    if (!id) return 'guest';
    return /^GV-/i.test(id) ? 'teacher' : 'student';
  },

  renderHud(),         // váº½ #hud: cáº¥p Ä‘á»™, XP tá»›i cáº¥p sau, chuá»—i Ä‘Ãºng, sá»‘ chá» gá»­i
  renderTabbar(tab),   // váº½ #tabbar, Ä‘Ã¡nh dáº¥u aria-current
  toast(text),         // .toast, tá»± áº©n sau 1800ms
  crumb(text, href),   // "â† Vá» Luyá»‡n táº­p" Ä‘áº§u <main>
  empty(text, href, label),  // tráº¡ng thÃ¡i rá»—ng â€” khÃ´ng bao giá» Ä‘á»ƒ tráº¯ng
};
```

`Portal.role()` an toÃ n vÃ¬ `Spine.id` chá»‰ Ä‘á»c `Identity` â€” `logger.js` vÃ 
`transport.js` chá»‰ cháº¡y khi cÃ³ ai gá»i `Spine.init()` hay `Spine.signIn()`. **Chá»‰
import `spine.js` rá»“i Ä‘á»c `Spine.id` thÃ¬ khÃ´ng sinh dÃ²ng log nÃ o.** ÄÃ¢y lÃ  Ä‘iá»u
kiá»‡n Ä‘á»ƒ Â§9.2 khoÃ¡ Ä‘Æ°á»£c bÃ i giáº£ng mÃ  khÃ´ng lÃ m báº©n dá»¯ liá»‡u.

`Portal.boot()` lÃ m Ä‘Ãºng báº£y viá»‡c, theo thá»© tá»±:

1. `await Spine.init()`
2. `r.ok === false` â†’ hiá»‡n thÃ´ng bÃ¡o cháº·n `localStorage` (cháº¿ Ä‘á»™ áº©n danh), dá»«ng
3. `r.needIdentity` â†’ váº½ cá»•ng nháº­p mÃ£ (Â§7), tráº£ `{ ok:false }`
4. `Portal.renderTabbar(tab)`
5. `Portal.renderHud()` vÃ  bá» `hidden` khá»i `#hud`
6. `if (module) Spine.openModule(module, unit)` â€” **má»™t láº§n má»™t trang**
7. Tráº£ `{ ok:true }`

BÆ°á»›c 6 lÃ  chá»— hay sai: gá»i `openModule` má»—i láº§n váº½ láº¡i cÃ¢u há»i sáº½ sinh hÃ ng chá»¥c
dÃ²ng `module_open` cho má»™t lÆ°á»£t há»c vÃ  lÃ m há»ng chá»‰ sá»‘ "sá»‘ module Ä‘Ã£ má»Ÿ".

### 6.3 Khung má»i `app.js`

```js
import { Portal } from '/js/progress.js';
import { loadJSON } from '/content/loader.js';

const params = new URLSearchParams(location.search);
const gid = params.get('g');

const boot = await Portal.boot({ module:'grammar', tab:'practice' });
if (boot.ok) {
  if (!gid) renderList();      // danh sÃ¡ch 14 module
  else      renderDrill(gid);  // chuá»—i cÃ¢u há»i
}
```

DÃ¹ng top-level `await` â€” há»£p lá»‡ trong `type="module"`, má»i trÃ¬nh duyá»‡t Ä‘iá»‡n
thoáº¡i tá»« 2021 Ä‘á»u cháº¡y Ä‘Æ°á»£c.

### 6.4 `js/data.js` â€” chá»‰ Ä‘iá»u hÆ°á»›ng

```js
// js/data.js â€” DANH Má»¤C ÄIá»€U HÆ¯á»šNG. Tuyá»‡t Ä‘á»‘i khÃ´ng chá»©a cÃ¢u há»i,
// Ä‘Ã¡p Ã¡n hay siÃªu dá»¯ liá»‡u chÆ°Æ¡ng trÃ¬nh. Há»c liá»‡u náº±m á»Ÿ /content/*.json.

export const NAV = [
  { id:'home',      ico:'ðŸ ', label:'Trang chá»§',    href:'/' },
  { id:'practice',  ico:'ðŸ“', label:'Luyá»‡n táº­p',    href:'/practice/' },
  { id:'ai',        ico:'ðŸ¤–', label:'XÆ°á»Ÿng AI',     href:'/ai-logs/' },
  { id:'me',        ico:'ðŸ‘¤', label:'Cá»§a tÃ´i',      href:'/me/' },
];
// KHÃ”NG Ä‘Æ°a /Global_Success_10/ vÃ o NAV â€” Ä‘Ã³ lÃ  khu cá»§a giÃ¡o viÃªn (Â§9.2).

export const HOME_CARDS = [
  { ico:'ðŸ“', title:'Luyá»‡n táº­p',
    desc:'Ngá»¯ phÃ¡p, tá»« vá»±ng, nghe, viáº¿t vÃ  Ä‘á» luyá»‡n.',
    href:'/practice/' },
  { ico:'ðŸ¤–', title:'XÆ°á»Ÿng AI',
    desc:'Äá»c Ä‘oáº¡n vÄƒn do AI viáº¿t vÃ  tÃ¬m chá»— sai. KhÃ´ng pháº£i bÃ i nÃ o cÅ©ng cÃ³ lá»—i.',
    href:'/ai-logs/' },
];

export const PRACTICE_CARDS = [ /* 5 tháº»: grammar, vocabulary, listening, writing, exam */ ];
```

DÃ²ng mÃ´ táº£ XÆ°á»Ÿng AI **pháº£i** nÃ³i rÃµ "khÃ´ng pháº£i bÃ i nÃ o cÅ©ng cÃ³ lá»—i". Há»c sinh
tÆ°á»Ÿng bÃ i nÃ o cÅ©ng cÃ³ lá»—i thÃ¬ sáº½ khoanh bá»«a, vÃ  tá»‰ lá»‡ bÃ¡o Ä‘á»™ng giáº£ â€” má»™t ná»­a cá»§a
phÃ©p Ä‘o Miá»n 6 â€” máº¥t Ã½ nghÄ©a.

### 6.5 `content/loader.js`

```js
// content/loader.js â€” náº¡p há»c liá»‡u JSON + cache ngoáº¡i tuyáº¿n.
//
// NGOáº I Lá»† ÄÆ¯á»¢C PHÃ‰P: tá»‡p nÃ y dÃ¹ng fetch vÃ  localStorage. NÃ³ xá»­ lÃ½ Há»ŒC LIá»†U,
// khÃ´ng xá»­ lÃ½ sá»± kiá»‡n. Xem DATA-DESIGN.md Â§10. Äá»«ng "sá»­a" thÃ nh Spine.*.
// Tá»‡p nÃ y KHÃ”NG Ä‘Æ°á»£c import báº¥t cá»© thá»© gÃ¬ trong core/.

const VER = 'c1.0.0';   // pháº£i khá»›p CONTENT_VERSION trong core/config.js

export async function loadJSON(path) { /* cache theo khoÃ¡ `content:${path}:${VER}` */ }
export async function manifest()      { return loadJSON('manifest.json'); }
export async function schedules()     { return loadJSON('schedules.json'); }
export function purgeOldCache()       { /* xoÃ¡ má»i khoÃ¡ content: mang phiÃªn báº£n khÃ¡c VER */ }
```

Bá»‘n luáº­t:

- Cache **chá»‰ unit cá»§a há»c ká»³ hiá»‡n táº¡i**, khÃ´ng cache cáº£ kho. `localStorage` chá»‰
  khoáº£ng 5MB vÃ  cÃ²n pháº£i chá»©a hÃ ng Ä‘á»£i sá»± kiá»‡n.
- Gá»i `purgeOldCache()` má»™t láº§n trong `Portal.boot()`.
- **KhÃ´ng cache audio.** ÄÃ³ lÃ  lÃ½ do ná»¯a Ä‘á»ƒ Listening chá»‰ lÃ m 5 unit HK2.
- Náº¡p há»ng thÃ¬ hiá»‡n `Portal.empty('ChÆ°a táº£i Ä‘Æ°á»£c bÃ i. Em kiá»ƒm tra máº¡ng rá»“i thá»­
  láº¡i nhÃ©.', â€¦)` â€” khÃ´ng Ä‘á»ƒ mÃ n hÃ¬nh tráº¯ng.

### 6.6 Ba viá»‡c pháº£i sá»­a trong `core/` trÆ°á»›c khi dá»±ng mÃ n hÃ¬nh

Cáº£ ba Ä‘á»u Ä‘Ã£ Ä‘Æ°á»£c yÃªu cáº§u á»Ÿ tÃ i liá»‡u khÃ¡c. LÃ m **trÆ°á»›c** bÆ°á»›c 2 cá»§a Â§12.

**(1) MÃ£ Ä‘á»‹nh danh â€” `AGENTS.md` Â§4.** Báº¯t buá»™c. Sá»­a hai tá»‡p cÃ¹ng lÃºc.

```js
// core/config.js
SCHOOLS: { NK: 'Nguyá»…n Khuyáº¿n' },
CLASSES: ['1009', '1010'],
ID_PATTERN: /^(NK)(1[0-2])(\d{2})-(\d{2})$/i,
ID_EXAMPLE: 'NK1009-07',
```

```js
// core/identity.js â€” trong validate(), thay dÃ²ng return
return { ok: true, pseudo_id: s, class_id: m[2] + m[3], seat: m[4] };
```

> Máº«u má»›i cÃ³ **bá»‘n** nhÃ³m báº¯t thay vÃ¬ hai. KhÃ´ng sá»­a `identity.js` cÃ¹ng lÃºc thÃ¬
> `m[1]` lÃ  `'NK'` vÃ  **má»i há»c sinh bá»‹ gÃ¡n chung má»™t lá»›p tÃªn "NK"** â€” mÃ£ váº«n
> nháº­n, dá»¯ liá»‡u váº«n cháº£y, khÃ´ng cÃ³ lá»—i nÃ o hiá»‡n ra, vÃ  chá»‹ chá»‰ phÃ¡t hiá»‡n lÃºc
> phÃ¢n tÃ­ch.

KhÃ´ng thÃªm cá»™t `school_id` vÃ o Sheet â€” trÆ°á»ng náº±m sáºµn á»Ÿ hai kÃ½ tá»± Ä‘áº§u cá»§a
`pseudo_id`, tÃ¡ch báº±ng `=LEFT(A2,2)`.

> ðŸ“Œ **Äiá»ƒm mÃ¢u thuáº«n cáº§n sá»­a tÃ i liá»‡u:** `DATA-DESIGN.md` Â§3 váº«n ghi máº«u cÅ©
> `/^NK(1[0-2][A-Z]\d?)-(\d{2})$/i` vÃ  yÃªu cáº§u thÃªm `school_id` vÃ o má»i dÃ²ng
> log. `AGENTS.md` Â§4 má»›i hÆ¡n vÃ  ngÆ°á»£c láº¡i. **`AGENTS.md` tháº¯ng.** Sá»­a hoáº·c gáº¡ch
> Ä‘oáº¡n Ä‘Ã³ trong `DATA-DESIGN.md` Ä‘á»ƒ láº§n sau khÃ´ng ai lÃ m theo báº£n cÅ©.

**(2) `CONTENT_VERSION` â€” `DATA-DESIGN.md` Â§3.** Báº¯t buá»™c.

```js
// core/config.js
CONTENT_VERSION: 'c1.0.0',
```

ThÃªm vÃ o Ä‘á»‘i tÆ°á»£ng `row` trong `core/logger.js`, **vÃ ** thÃªm `'content_version'`
vÃ o máº£ng `COLS` trong `server/Code.gs` â€” hai chá»— pháº£i khá»›p tuyá»‡t Ä‘á»‘i vá» thá»© tá»±,
náº¿u khÃ´ng má»i cá»™t lá»‡ch má»™t Ã´. ChÃ¨n ngay sau `schema_version`, trÆ°á»›c `extra`.

**(3) `category` trong `aiEvalAnswer` â€” `DATA-DESIGN.md` Â§9.** NÃªn lÃ m.

```js
// core/spine.js
aiEvalAnswer(taskId, { kind, hasError, correct, chosen, reason, category }) {
  const latency = Log.takeLatency(taskId);
  Log.event('ai_eval_answer', {
    module: 'ai_forge', item_id: taskId,
    correct, latency_ms: latency,
    extra: { kind, has_error: !!hasError, chosen, reason, category },
  });
},
```

KhÃ´ng thÃªm `event_type` má»›i, chá»‰ thÃªm má»™t khoÃ¡ vÃ o `extra` â€” khÃ´ng vi pháº¡m
`AGENTS.md` Â§3. CÃ³ nÃ³ thÃ¬ báº£ng RQ3 chÃ­nh Ä‘á»c tháº³ng tá»« Sheet, vÃ  Ä‘á»‘i soÃ¡t háº±ng
tuáº§n phÃ¡t hiá»‡n sá»›m náº¿u má»™t loáº¡i lá»—i khÃ´ng ai Ä‘á»¥ng tá»›i.

**(4) Tuá»³ chá»n:** `submitArtifact` Ä‘ang ghi `module: 'create'` trong khi thÆ° má»¥c
tÃªn `writing`. ChÆ°a thu dá»¯ liá»‡u nÃªn Ä‘á»•i lÃºc nÃ y lÃ  miá»…n phÃ­. Chá»n má»™t:
Ä‘á»•i `'create'` â†’ `'writing'` trong `core/spine.js`, **hoáº·c** giá»¯ nguyÃªn vÃ  ghi
má»™t dÃ²ng vÃ o sá»• mÃ£ hoÃ¡ phÃ¢n tÃ­ch. Äá»«ng Ä‘á»ƒ lá»­ng lÆ¡.

---

## 7. Cá»•ng nháº­p mÃ£

Hiá»‡n khi `Spine.init()` tráº£ `needIdentity: true`. Chiáº¿m cáº£ `<main>`, banner AI
váº«n á»Ÿ trÃªn.

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  ChÃ o em!                           â”‚
â”‚                                     â”‚
â”‚  Em nháº­p mÃ£ trÃªn phiáº¿u cÃ´ phÃ¡t nhÃ©. â”‚
â”‚                                     â”‚
â”‚  [ NK1009-07              ]         â”‚
â”‚  Dáº¡ng mÃ£: NK + lá»›p + gáº¡ch ná»‘i +     â”‚
â”‚  sá»‘ thá»© tá»± trong sá»• Ä‘iá»ƒm            â”‚
â”‚                                     â”‚
â”‚  [        VÃ o há»c        ]          â”‚
â”‚                                     â”‚
â”‚  MÃ£ nÃ y khÃ´ng pháº£i tÃªn em. CÃ´ dÃ¹ng  â”‚
â”‚  nÃ³ Ä‘á»ƒ biáº¿t em Ä‘Ã£ há»c tá»›i Ä‘Ã¢u.      â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

| YÃªu cáº§u | Cá»¥ thá»ƒ |
|---|---|
| Ã” nháº­p | `inputmode="text"` Â· `autocapitalize="characters"` Â· `autocomplete="off"` Â· `font-size â‰¥ 16px` |
| Kiá»ƒm tra khi gÃµ | `Identity.validate()` qua `Portal` â€” nÃºt má» tá»›i khi mÃ£ Ä‘Ãºng dáº¡ng |
| Lá»—i | ÄÃºng cÃ¢u cá»§a `identity.js`, khÃ´ng viáº¿t láº¡i kiá»ƒu ká»¹ thuáº­t |
| VÃ o báº±ng | `Spine.signIn(code)` â€” khÃ´ng tá»± viáº¿t logic lÆ°u mÃ£ |
| Chá»‰ há»i má»™t láº§n | MÃ£ náº±m trong `localStorage`; láº§n sau vÃ o tháº³ng |
| KhÃ´ng há»i tÃªn | KhÃ´ng Ã´ tÃªn, khÃ´ng Ã´ lá»›p, khÃ´ng Ã´ trÆ°á»ng. `AGENTS.md` Â§3 |

Náº¿u muá»‘n cÃ³ lá»i chÃ o thÃ¢n thiá»‡n: cho nháº­p biá»‡t danh á»Ÿ `/me/`, lÆ°u **chá»‰** trong
`localStorage` Ä‘á»ƒ hiá»ƒn thá»‹. **KhÃ´ng bao giá» Ä‘i vÃ o dÃ²ng log** (`AGENTS.md` Â§14).

ThÃªm má»™t dÃ²ng dÆ°á»›i nÃºt, cá»¡ nhá» nhÆ°ng Ä‘á»c Ä‘Æ°á»£c:

> MÃ¡y nÃ y quÃªn mÃ£ sau má»™t thá»i gian dÃ i khÃ´ng dÃ¹ng. Em giá»¯ phiáº¿u mÃ£ láº¡i nhÃ©.

KhÃ´ng pháº£i cÃ¢u cho vui: iOS cÃ³ thá»ƒ tá»± xoÃ¡ `localStorage` sau khoáº£ng báº£y ngÃ y
khÃ´ng truy cáº­p (`AGENTS.md` Â§11), vÃ  phiáº¿u in lÃ  Ä‘Æ°á»ng khÃ´i phá»¥c duy nháº¥t.

---

## 8. Luá»“ng dá»¯ liá»‡u vÃ  Ä‘iá»ƒm ná»‘i Spine

```mermaid
flowchart LR
    A[Há»c sinh lÃ m bÃ i táº­p] --> B[MÃ n hÃ¬nh gá»i Portal.spine.*]
    B --> C[core/store.js<br>localStorage Â· hiá»ƒn thá»‹ ngay]
    B --> D[core/transport.js<br>hÃ ng Ä‘á»£i + gá»­i lÃ´]
    D --> E[Google Apps Script<br>khá»­ trÃ¹ng theo event_id]
    E --> F[Google Sheets<br>lÆ°u trá»¯ vÃ  phÃ¢n tÃ­ch]
    D -.máº¥t máº¡ng.-> D
```

Äiá»ƒm khÃ¡c duy nháº¥t so vá»›i sÆ¡ Ä‘á»“ ban Ä‘áº§u: giá»¯a trÃ¬nh duyá»‡t vÃ  Apps Script cÃ³
**hÃ ng Ä‘á»£i ngoáº¡i tuyáº¿n**. KhÃ´ng cÃ³ nÃ³ thÃ¬ há»c sinh máº¡ng yáº¿u â€” Ä‘Ãºng nhÃ³m Ä‘á» cÆ°Æ¡ng
cam káº¿t phÃ¢n tÃ­ch â€” máº¥t sáº¡ch dá»¯ liá»‡u, vÃ  khÃ´ng ai biáº¿t lÃ  Ä‘Ã£ máº¥t.

### 8.1 Báº£ng ná»‘i cho tá»«ng mÃ n hÃ¬nh

| MÃ n hÃ¬nh | LÃºc nÃ o | Gá»i gÃ¬ |
|---|---|---|
| Má»i trang | Sau `Spine.init()` | `Spine.openModule(module, unit)` â€” **má»™t láº§n** |
| Ngá»¯ phÃ¡p / Tá»« vá»±ng / Äá» luyá»‡n | CÃ¢u hiá»‡n lÃªn | `Spine.viewItem(id, { module, unit })` |
| | Báº¥m "Kiá»ƒm tra" | `Spine.answerItem(id, { module, unit, response, correct })` |
| Nghe | Báº¥m play láº§n Ä‘áº§u | `Spine.viewItem(id, { module:'listening', unit })` |
| | Tráº£ lá»i cÃ¢u há»i nghe | `Spine.answerItem(...)` |
| Viáº¿t | Ná»™p bÃ i | `Spine.submitArtifact(id, { unit, aiUse })` |
| XÆ°á»Ÿng AI | TÃ¡c vá»¥ hiá»‡n lÃªn | `Spine.aiEvalOpen(id, { kind, hasError })` |
| | Tráº£ lá»i | `Spine.aiEvalAnswer(id, { kind, hasError, correct, chosen, reason, category })` |
| Nhiá»‡m vá»¥ hÃ´m nay | Nháº­n / xong | `Spine.acceptQuest(id)` Â· `Spine.completeQuest(id, {...})` |
| Cá»§a tÃ´i | Táº£i vá» / xoÃ¡ | `Spine.exportMyData()` Â· `Spine.deleteMyData()` |
| Báº¥t ká»³ | Lá»—i hiá»‡n ra cho HS | `Spine.errorShown(code, detail)` |
| Báº¥t ká»³ | Má»Ÿ hÆ°á»›ng dáº«n | `Spine.helpOpen(topic)` |

**Danh sÃ¡ch `module` Ä‘Ã³ng.** Ghi sai chÃ­nh táº£ lÃ  máº¥t dá»¯ liá»‡u Ã¢m tháº§m â€” logger
khÃ´ng cháº·n trÆ°á»ng nÃ y.

```
vocab Â· grammar Â· listening Â· writing Â· reading Â· exam Â· ai_forge Â· create Â· me
```

**`Global_Success_10` khÃ´ng cÃ³ trong danh sÃ¡ch vÃ  khÃ´ng bao giá» Ä‘Æ°á»£c cÃ³.** BÃ i
giáº£ng cá»§a giÃ¡o viÃªn khÃ´ng sinh sá»± kiá»‡n nÃ o â€” khÃ´ng `module_open`, khÃ´ng gÃ¬ cáº£.
GiÃ¡o viÃªn khÃ´ng náº±m trong há»“ sÆ¡ Ä‘áº¡o Ä‘á»©c, vÃ  má»™t dÃ²ng log mang mÃ£ `GV-` láº«n giá»¯a
dá»¯ liá»‡u há»c sinh lÃ  thá»© khÃ´ng ai nhá»› lá»c lÃºc phÃ¢n tÃ­ch.

`ai_forge` vÃ  `create` do `core/spine.js` tá»± Ä‘áº·t, mÃ n hÃ¬nh khÃ´ng truyá»n. Náº¿u Ä‘Ã£
lÃ m Â§6.6(4) thÃ¬ `create` biáº¿n máº¥t khá»i danh sÃ¡ch.

### 8.2 VÃ²ng Ä‘á»i má»™t cÃ¢u há»i

Ãp cho ngá»¯ phÃ¡p, tá»« vá»±ng, Ä‘á»c, nghe, Ä‘á» luyá»‡n.

```
1. Váº½ cÃ¢u há»i          â†’ viewItem()          â† báº¯t Ä‘áº§u báº¥m giá»
2. Há»c sinh chá»n        â†’ chá»‰ Ä‘á»•i giao diá»‡n, KHÃ”NG log
3. Báº¥m "Kiá»ƒm tra"       â†’ answerItem()       â† Ä‘o latency_ms
4. Hiá»‡n Ä‘Ãºng/sai + giáº£i thÃ­ch  (Ä‘á»c trÆ°á»›c)
5. Hiá»‡n toast XP        (thÆ°á»Ÿng sau)
6. Báº¥m "CÃ¢u tiáº¿p theo"  â†’ quay láº¡i 1 vá»›i item má»›i
```

**Luáº­t lÃ m láº¡i.** Sai láº§n má»™t: hiá»‡n gá»£i Ã½ ngáº¯n, cho lÃ m láº¡i. Sai láº§n hai: hiá»‡n
Ä‘Ã¡p Ã¡n vÃ  giáº£i thÃ­ch Ä‘áº§y Ä‘á»§, chuyá»ƒn cÃ¢u. Má»—i láº§n báº¥m "Kiá»ƒm tra" lÃ  **má»™t láº§n**
gá»i `answerItem` â€” `attempt_no` tá»± tÄƒng trong `store.js`, Ä‘á»«ng tá»± Ä‘áº¿m.

**KhÃ´ng gá»i `answerItem` hai láº§n cho má»™t láº§n báº¥m.** Lá»—i nÃ y nhÃ¢n Ä‘Ã´i sá»‘ cÃ¢u vÃ 
lÃ m sai Ä‘á»™ chÃ­nh xÃ¡c â€” biáº¿n phá»¥ thuá»™c chÃ­nh cá»§a RQ2.

**Gá»i `viewItem` láº¡i khi lÃ m láº¡i?** KhÃ´ng. Má»™t `viewItem`, nhiá»u `answerItem`.
`latency_ms` cá»§a láº§n tráº£ lá»i thá»© hai sáº½ lÃ  `''` vÃ¬ Ä‘á»“ng há»“ Ä‘Ã£ bá»‹ láº¥y â€” Ä‘Ãºng nhÆ°
thiáº¿t káº¿, Ä‘á»«ng "sá»­a".

---

## 9. Ná»™i dung tá»«ng module

### 9.1 Trang chá»§ `/`

Bá»‘n khá»‘i, Ä‘Ãºng thá»© tá»±:

1. **Lá»i chÃ o + tiáº¿n Ä‘á»™** â€” "ChÃ o em! HÃ´m nay lÃ  ngÃ y há»c thá»© 7 cá»§a em." Ba con
   sá»‘ tá»« `Spine.metrics`: sá»‘ ngÃ y hoáº¡t Ä‘á»™ng, sá»‘ cÃ¢u Ä‘Ã£ lÃ m, Ä‘á»™ chÃ­nh xÃ¡c.
2. **Nhiá»‡m vá»¥ hÃ´m nay** â€” má»™t viá»‡c, khÃ´ng pháº£i danh sÃ¡ch. VÃ­ dá»¥: "LÃ m 5 cÃ¢u Ngá»¯
   phÃ¡p Â· CÃ¢u bá»‹ Ä‘á»™ng". Ná»‘i báº±ng `acceptQuest` / `completeQuest`.
3. **Hai tháº» lá»›n** â€” `HOME_CARDS` á»Ÿ Â§6.4: Luyá»‡n táº­p vÃ  XÆ°á»Ÿng AI.
4. **ChÃ¢n trang** â€” má»™t dÃ²ng cam káº¿t vÃ  má»™t liÃªn káº¿t nhá» cho giÃ¡o viÃªn:

```html
<footer class="home-foot">
  <p>Há»c liá»‡u bÃ¡m ChÆ°Æ¡ng trÃ¬nh GDPT 2018, gÃ³p pháº§n vÃ o lá»™ trÃ¬nh Ä‘áº¡t Báº­c 3
     khi káº¿t thÃºc THPT.</p>
  <p><a href="/Global_Success_10/">Khu vá»±c giÃ¡o viÃªn Â· BÃ i giáº£ng trÃ¬nh chiáº¿u</a></p>
</footer>
```

LiÃªn káº¿t giÃ¡o viÃªn Ä‘áº·t á»Ÿ chÃ¢n trang, cá»¡ chá»¯ nhá», **khÃ´ng** cÃ³ trong thanh Ä‘iá»u
hÆ°á»›ng vÃ  **khÃ´ng** lÃ m tháº» lá»›n. Che nÃ³ Ä‘i hoÃ n toÃ n thÃ¬ giÃ¡o viÃªn pháº£i nhá»› gÃµ
Ä‘Æ°á»ng dáº«n tay, mÃ  giáº¥u cÅ©ng cháº³ng khoÃ¡ Ä‘Æ°á»£c gÃ¬ (Â§9.2) â€” nÃªn Ä‘á»ƒ lá»™ Ä‘Ãºng má»©c má»™t
lá»‘i vÃ o vÃ  khoÃ¡ á»Ÿ cá»­a.

> CÃ¢u chÃ¢n trang lÃ  báº¯t buá»™c theo `AGENTS.md` Â§6: **khÃ´ng Ä‘Æ°á»£c há»©a "Ä‘áº¡t Báº­c 3"**.
> Báº­c 3 lÃ  chuáº©n Ä‘áº§u ra háº¿t lá»›p 12, khÃ´ng pháº£i háº¿t lá»›p 10.

### 9.2 `/Global_Success_10/` â€” bÃ i giáº£ng cá»§a giÃ¡o viÃªn, cÃ³ khoÃ¡

**Module nÃ y Ä‘Ã£ dá»±ng xong.** Trong repo Ä‘Ã£ cÃ³ `index.html`, `css/gs10.css`,
`js/gs10-player.js`, `data/units_meta.json`, `data/unit01â€¦unit10.json`,
`data/reviews.json`, vÃ  `assets/` (audio Â· images Â· videos). **KhÃ´ng dá»±ng láº¡i.**
Viá»‡c duy nháº¥t pháº£i lÃ m lÃ  **thÃªm cá»•ng khoÃ¡** vÃ  gá»¡ vÃ i thá»© á»Ÿ Â§10.

#### 9.2.1 TrÆ°á»›c háº¿t: trang tÄ©nh khÃ´ng khoÃ¡ Ä‘Æ°á»£c tháº­t

NÃ³i tháº³ng Ä‘á»ƒ chá»‹ quyáº¿t Ä‘Ãºng, chá»© khÃ´ng dá»±ng xong rá»“i má»›i biáº¿t.

GitHub Pages phá»¥c vá»¥ **tá»‡p tÄ©nh cho báº¥t ká»³ ai cÃ³ Ä‘Æ°á»ng dáº«n**. Má»i cá»•ng viáº¿t báº±ng
JavaScript Ä‘á»u cháº¡y **trÃªn mÃ¡y há»c sinh**, nÃªn em nÃ o muá»‘n vÆ°á»£t qua Ä‘á»u vÆ°á»£t
Ä‘Æ°á»£c: táº¯t JavaScript, xem mÃ£ nguá»“n, hoáº·c gÃµ tháº³ng
`hsg2627.github.io/Global_Success_10/data/unit06.json` lÃ  tháº¥y toÃ n bá»™ ná»™i dung
bÃ i giáº£ng dÆ°á»›i dáº¡ng JSON.

Váº­y cá»•ng khoÃ¡ Ä‘á»ƒ lÃ m gÃ¬? NÃ³ cháº·n **Ä‘Ãºng cÃ¡i cáº§n cháº·n**: há»c sinh Ä‘i theo giao
diá»‡n. VÃ  Ä‘Ã³ khÃ´ng pháº£i chuyá»‡n tháº©m má»¹ â€” nÃ³ lÃ  chuyá»‡n thiáº¿t káº¿ nghiÃªn cá»©u. Há»c
sinh trong máº«u mÃ  tá»± há»c Ä‘Æ°á»£c bÃ i giáº£ng trÃ¬nh chiáº¿u thÃ¬ cÃ¡c em nháº­n **má»™t can
thiá»‡p thá»© hai khÃ´ng kiá»ƒm soÃ¡t**, náº±m ngoÃ i thiáº¿t káº¿ Ä‘o lÆ°á»ng, vÃ  chÃªnh lá»‡ch
trÆ°á»›c/sau khÃ´ng cÃ²n quy vá» há»c liá»‡u tá»± há»c ná»¯a. Rá»§i ro tháº­t lÃ  **há»c sinh vÃ´
tÃ¬nh Ä‘i láº¡c vÃ o**, khÃ´ng pháº£i há»c sinh cá»‘ tÃ¬nh phÃ¡ khoÃ¡.

Chá»n má»™t trong ba má»©c, theo Ä‘Ãºng má»©c rá»§i ro chá»‹ cháº¥p nháº­n:

| Má»©c | CÃ¡ch lÃ m | Cháº·n Ä‘Æ°á»£c | Chi phÃ­ |
|---|---|---|---|
| **A. Cá»•ng má»m** *(khuyáº¿n nghá»‹)* | Â§9.2.2 dÆ°á»›i Ä‘Ã¢y | Há»c sinh Ä‘i theo giao diá»‡n | 1 tá»‡p JS, 30 phÃºt |
| **B. MÃ£ hoÃ¡ tá»‡p** | StatiCrypt: mÃ£ hoÃ¡ `index.html` báº±ng AES-256, giÃ¡o viÃªn nháº­p máº­t kháº©u má»›i giáº£i mÃ£ | Cáº£ ngÆ°á»i gÃµ tháº³ng Ä‘Æ°á»ng dáº«n `index.html` | Pháº£i mÃ£ hoÃ¡ láº¡i má»—i láº§n sá»­a bÃ i; **`data/*.json` váº«n phÆ¡i ra** trá»« khi nhÃºng luÃ´n vÃ o tá»‡p Ä‘Ã£ mÃ£ hoÃ¡ |
| **C. ÄÆ°a ra khá»i trang** | BÃ i giáº£ng Ä‘á»ƒ Google Drive chia sáº» giá»›i háº¡n, hoáº·c cháº¡y cá»¥c bá»™ trÃªn mÃ¡y giÃ¡o viÃªn | Táº¥t cáº£ | GiÃ¡o viÃªn máº¥t lá»‘i vÃ o má»™t cháº¡m; khÃ´ng cÃ²n lÃ  "trang web" |

**Khuyáº¿n nghá»‹ má»©c A.** Ná»™i dung á»Ÿ Ä‘Ã¢y lÃ  bÃ i giáº£ng bÃ¡m sÃ¡ch giÃ¡o khoa, khÃ´ng pháº£i
Ä‘á» kiá»ƒm tra hay dá»¯ liá»‡u cÃ¡ nhÃ¢n â€” lá»™ ra thÃ¬ thiá»‡t háº¡i lÃ  nhiá»…u thiáº¿t káº¿ nghiÃªn
cá»©u, khÃ´ng pháº£i rÃ² rá»‰. Má»©c B Ä‘Ã¡ng lÃ m **chá»‰ khi** chá»‹ Ä‘á»‹nh Ä‘Æ°a Ä‘á» kiá»ƒm tra vÃ o
Ä‘Ã¢y; lÃºc Ä‘Ã³ nhá»› lÃ  JSON váº«n há»Ÿ, pháº£i nhÃºng ná»™i dung vÃ o chÃ­nh tá»‡p mÃ£ hoÃ¡.

#### 9.2.2 Cá»•ng má»m â€” `js/gs10-gate.js`

Ba tráº¡ng thÃ¡i, khÃ´ng cÃ³ tráº¡ng thÃ¡i thá»© tÆ°:

| MÃ¡y Ä‘ang mang mÃ£ | Xá»­ lÃ½ |
|---|---|
| MÃ£ há»c sinh (`NK1009-07`) | **KhoÃ¡ cá»©ng.** Hiá»‡n mÃ n hÃ¬nh khoÃ¡, khÃ´ng há»i máº­t kháº©u, khÃ´ng cÃ³ Ä‘Æ°á»ng vÃ²ng |
| MÃ£ giÃ¡o viÃªn (`GV-NK-01`) Ä‘Ã£ má»Ÿ trÆ°á»›c Ä‘Ã³ | VÃ o tháº³ng |
| ChÆ°a cÃ³ mÃ£ nÃ o | Há»i máº­t kháº©u giÃ¡o viÃªn |

```js
// Global_Success_10/js/gs10-gate.js
// Cá»•ng vÃ o bÃ i giáº£ng. KHÃ”NG ghi log â€” xem Â§8.1.
// Chá»‰ Äá»ŒC mÃ£ Ä‘Ã£ lÆ°u; khÃ´ng gá»i Spine.init(), khÃ´ng gá»i Spine.signIn().

import { Portal } from '/js/progress.js';

const KEY  = 'gs10_teacher_v1';
const HASH = '<<dÃ¡n chuá»—i SHA-256 cá»§a máº­t kháº©u vÃ o Ä‘Ã¢y>>';

async function sha256(s) {
  const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
}

export async function openGate() {
  if (Portal.role() === 'student') return lockScreen();      // khoÃ¡ cá»©ng
  if (localStorage.getItem(KEY) === HASH) return true;        // Ä‘Ã£ má»Ÿ trÆ°á»›c Ä‘Ã³
  return askPassword();                                       // há»i máº­t kháº©u
}
```

`index.html` cá»§a module **chá»‰ náº¡p `data/*.json` sau khi `openGate()` tráº£ `true`**.
Náº¡p trÆ°á»›c rá»“i má»›i áº©n Ä‘i lÃ  khÃ´ng khoÃ¡ gÃ¬ cáº£ â€” ná»™i dung Ä‘Ã£ náº±m trong mÃ¡y há»c sinh.

**MÃ n hÃ¬nh khoÃ¡** â€” viáº¿t cho há»c sinh Ä‘á»c, khÃ´ng pháº£i cho láº­p trÃ¬nh viÃªn:

```
ðŸ”’ Khu vá»±c dÃ nh cho giÃ¡o viÃªn

ÄÃ¢y lÃ  bÃ i giáº£ng cÃ´ dÃ¹ng Ä‘á»ƒ trÃ¬nh chiáº¿u trÃªn lá»›p, khÃ´ng pháº£i
pháº§n tá»± há»c cá»§a em.

Pháº§n cá»§a em á»Ÿ Ä‘Ã¢y:  [ Luyá»‡n táº­p â†’ ]   [ XÆ°á»Ÿng AI â†’ ]
```

KhÃ´ng hiá»‡n Ã´ nháº­p máº­t kháº©u á»Ÿ mÃ n hÃ¬nh nÃ y. Hiá»‡n Ã´ nháº­p lÃ  má»i cÃ¡c em thá»­.

#### 9.2.3 MÃ£ giÃ¡o viÃªn

`GV-` + mÃ£ trÆ°á»ng + `-` + sá»‘ thá»© tá»±: `GV-NK-01`.

Tiá»n tá»‘ `GV-` khÃ´ng khá»›p `ID_PATTERN` cá»§a há»c sinh, nÃªn **`Spine.signIn()` sáº½ tá»«
chá»‘i mÃ£ giÃ¡o viÃªn** â€” Ä‘Ãºng nhÆ° mong muá»‘n. GiÃ¡o viÃªn khÃ´ng "Ä‘Äƒng nháº­p" vÃ o há»‡
thá»‘ng Ä‘o lÆ°á»ng; mÃ£ Ä‘Ã³ chá»‰ Ä‘á»ƒ giÃ¡o viÃªn tá»± phÃ¢n biá»‡t, vÃ  `Portal.role()` Ä‘á»c tiá»n
tá»‘. **KhÃ´ng thÃªm `GV-` vÃ o `ID_PATTERN`.** ThÃªm vÃ o lÃ  má»Ÿ Ä‘Æ°á»ng cho log mang mÃ£
giÃ¡o viÃªn.

#### 9.2.4 Bá»‘n Ä‘iá»u khÃ´ng Ä‘Æ°á»£c lÃ m

**KhÃ´ng cho nÃºt "TÃ´i lÃ  giÃ¡o viÃªn, xoÃ¡ mÃ£ há»c sinh trÃªn mÃ¡y nÃ y".** XoÃ¡ mÃ£ lÃ  xoÃ¡
cáº£ tiáº¿n Ä‘á»™ vÃ  hÃ ng Ä‘á»£i sá»± kiá»‡n chÆ°a gá»­i cá»§a em Ä‘Ã³ â€” máº¥t dá»¯ liá»‡u tháº­t. MÃ¡y nÃ o Ä‘Ã£
cÃ³ mÃ£ há»c sinh thÃ¬ khoÃ¡ lÃ  khoÃ¡. GiÃ¡o viÃªn dÃ¹ng mÃ¡y cá»§a mÃ¬nh, hoáº·c cá»­a sá»• áº©n danh.

**KhÃ´ng ghi log á»Ÿ module nÃ y** â€” khÃ´ng `module_open`, khÃ´ng gÃ¬ háº¿t (Â§8.1).

**KhÃ´ng Ä‘áº·t liÃªn káº¿t bÃ i giáº£ng vÃ o thanh Ä‘iá»u hÆ°á»›ng há»c sinh** (Â§5.9). Lá»‘i vÃ o
duy nháº¥t lÃ  dÃ²ng chÃ¢n trang chá»§ (Â§9.1).

**KhÃ´ng Ä‘á»ƒ máº­t kháº©u dáº¡ng chá»¯ thÆ°á»ng trong mÃ£.** LÆ°u SHA-256. BÄƒm khÃ´ng pháº£i lÃ 
báº£o máº­t tháº­t á»Ÿ Ä‘Ã¢y (ai cÅ©ng Ä‘á»c Ä‘Æ°á»£c `gate.js` vÃ  thá»­ láº¡i), nhÆ°ng nÃ³ ngÄƒn viá»‡c
máº­t kháº©u hiá»‡n ra ngay trÆ°á»›c máº¯t em nÃ o tÃ¬nh cá» má»Ÿ `View source`.

### 9.3 `/practice/grammar/` â€” 14 module â†” 15 má»¥c cá»§a chÆ°Æ¡ng trÃ¬nh

`DATA-DESIGN.md` Â§2 quy Ä‘á»‹nh 14 tá»‡p `g01â€¦g14`, nhÆ°ng `CONTENT-SPEC.md` Â§3 cÃ³
**15** má»¥c ngá»¯ phÃ¡p. Báº£ng dÆ°á»›i Ä‘Ã¢y lÃ  Ã¡nh xáº¡ chuáº©n: má»¥c 13 vÃ  14 gá»™p lÃ m má»™t
module, Ä‘Ãºng nhÆ° typology lá»—i Ä‘Ã£ gá»™p chÃºng á»Ÿ háº¡ng má»¥c 6.

| Tá»‡p | TÃªn hiá»ƒn thá»‹ | Má»¥c Â§3 | Háº¡ng má»¥c lá»—i |
|---|---|---|---|
| `g01` | ThÃ¬ hiá»‡n táº¡i hoÃ n thÃ nh | 1 | 1 |
| `g02` | Hiá»‡n táº¡i Ä‘Æ¡n vÃ  hiá»‡n táº¡i tiáº¿p diá»…n | 2 | 1 |
| `g03` | TÆ°Æ¡ng lai Ä‘Æ¡n vÃ  `be going to` | 3 | 1 |
| `g04` | QuÃ¡ khá»© Ä‘Æ¡n vÃ  quÃ¡ khá»© tiáº¿p diá»…n (`when`/`while`) | 4 | 1 |
| `g05` | Äá»™ng tá»« nguyÃªn thá»ƒ cÃ³ `to` vÃ  khÃ´ng `to` | 5 | 2 |
| `g06` | Danh Ä‘á»™ng tá»« vÃ  Ä‘á»™ng tá»« nguyÃªn thá»ƒ | 6 | 2 |
| `g07` | CÃ¢u bá»‹ Ä‘á»™ng (ká»ƒ cáº£ vá»›i Ä‘á»™ng tá»« tÃ¬nh thÃ¡i) | 7 | 3 |
| `g08` | CÃ¢u ghÃ©p | 8 | 4 |
| `g09` | Má»‡nh Ä‘á» quan há»‡ xÃ¡c Ä‘á»‹nh vÃ  khÃ´ng xÃ¡c Ä‘á»‹nh | 9 | 4 |
| `g10` | CÃ¢u Ä‘iá»u kiá»‡n loáº¡i 1 | 10 | 4 |
| `g11` | CÃ¢u Ä‘iá»u kiá»‡n loáº¡i 2 | 11 | 4 |
| `g12` | CÃ¢u tÆ°á»ng thuáº­t | 12 | 4 |
| `g13` | TÃ­nh tá»«: so sÃ¡nh hÆ¡n, so sÃ¡nh nháº¥t, chá»‰ thÃ¡i Ä‘á»™ | 13 + 14 | 6 |
| `g14` | Máº¡o tá»« | 15 | 5 |

Ba Ä‘iá»u Ä‘i kÃ¨m báº£ng nÃ y:

- Cá»™t "Háº¡ng má»¥c lá»—i" trá» vÃ o typology 7 loáº¡i á»Ÿ `CONTENT-SPEC.md` Â§6. Nhá» nÃ³, khi
  RQ3 cho tháº¥y há»c sinh yáº¿u á»Ÿ háº¡ng má»¥c 5, chá»‹ chá»‰ ngay Ä‘Æ°á»£c vá» `g14`.
- TrÆ°á»ng `grammar: [n]` trong `manifest.json` lÃ  **neo tháº­t**; sá»‘ thá»© tá»± tá»‡p chá»‰
  lÃ  tÃªn. Äá»«ng Ä‘Ã¡nh sá»‘ láº¡i (`AGENTS.md` Â§3).
- ðŸ“Œ `DATA-DESIGN.md` Â§4 láº¥y vÃ­ dá»¥ `g07` = *"Past Simple vs Past Continuous"* vá»›i
  `grammar: [4]`. Theo báº£ng nÃ y `g07` lÃ  cÃ¢u bá»‹ Ä‘á»™ng vÃ  quÃ¡ khá»© lÃ  `g04`. Sá»­a vÃ­
  dá»¥ trong `DATA-DESIGN.md` cho khá»›p, hoáº·c báº£ng nÃ y sáº½ bá»‹ Ä‘á»c lÃ  sai.

Cáº¥u trÃºc khÃ´ng cÃ³ trong 15 má»¥c â€” Ä‘iá»u kiá»‡n loáº¡i 3, quÃ¡ khá»© hoÃ n thÃ nh, tÆ°Æ¡ng lai
tiáº¿p diá»…n, Ä‘áº£o ngá»¯, má»‡nh Ä‘á» rÃºt gá»n â€” lÃ  **cÄƒn cá»© loáº¡i bá»**, ká»ƒ cáº£ khi cÃ¢u Ä‘Ãºng
ngá»¯ phÃ¡p.

### 9.4 `/practice/listening/` vÃ  `/practice/writing/` â€” chá»‰ 5 unit HK2

`AGENTS.md` Â§7: chá»‰ 5 unit HK2 lÃ m Ä‘á»§ bá»‘n ká»¹ nÄƒng. Trang nÃ y liá»‡t kÃª **5 má»¥c**,
khÃ´ng pháº£i 10, vÃ  khÃ´ng cÃ³ Ã´ má» "sáº¯p cÃ³".

| Ká»¹ nÄƒng | RÃ ng buá»™c `CONTENT-SPEC.md` Â§4 |
|---|---|
| Nghe | Há»™i thoáº¡i/Ä‘á»™c thoáº¡i **180â€“200 tá»«** |
| Äá»c | VÄƒn báº£n **220â€“250 tá»«** |
| Viáº¿t | Äoáº¡n vÄƒn **120â€“150 tá»«** |

**Nghe:** dÃ¹ng `<audio controls preload="none">` gá»‘c, khÃ´ng tá»± váº½ trÃ¬nh phÃ¡t.
`preload="none"` Ä‘á»ƒ khÃ´ng ngá»‘n dung lÆ°á»£ng 3G khi cÃ¡c em chá»‰ lÆ°á»›t qua. Lá»i thoáº¡i
áº©n sau nÃºt "Xem lá»i thoáº¡i", chá»‰ má»Ÿ Ä‘Æ°á»£c **sau láº§n tráº£ lá»i Ä‘áº§u tiÃªn**. KhÃ´ng cache
audio.

**Viáº¿t:** khÃ´ng cÃ³ ngÆ°á»i cháº¥m vÃ  **khÃ´ng cÃ³ AI cháº¥m**. TrÃ¬nh tá»±:

1. Äá»c Ä‘á» vÃ  báº£ng kiá»ƒm (`checklist`)
2. GÃµ bÃ i vÃ o Ã´ vÄƒn báº£n (lÆ°u nhÃ¡p trong `localStorage` qua loader, khÃ´ng log)
3. Báº¥m "Ná»™p bÃ i" â†’ hiá»‡n `model` Ä‘á»ƒ tá»± Ä‘á»‘i chiáº¿u
4. Báº£ng kiá»ƒm tá»± Ä‘Ã¡nh giÃ¡, má»—i dÃ²ng má»™t Ã´ tÃ­ch
5. **Báº¯t buá»™c chá»n** má»™t phÆ°Æ¡ng Ã¡n cho cÃ¢u: *"Em cÃ³ dÃ¹ng AI khi viáº¿t bÃ i nÃ y
   khÃ´ng?"* â†’ `none` Â· `idea` Â· `draft` Â· `edit`
6. `Spine.submitArtifact(id, { unit, aiUse })`

BÆ°á»›c 5 lÃ  dá»¯ liá»‡u cho nÄƒng lá»±c 6.2 vÃ  nÃ³ tá»± Ä‘áº¿n, khÃ´ng cáº§n thÃªm buá»•i phá»ng váº¥n
nÃ o. Äá»«ng bá», Ä‘á»«ng Ä‘áº·t máº·c Ä‘á»‹nh â€” báº¯t buá»™c chá»n.

### 9.5 `/practice/exam/` â€” Ä‘á» luyá»‡n

Chá»‰ giá»¯ Ä‘á» **lá»›p 10** (`AGENTS.md` Â§5). Má»—i Ä‘á» giá»¯ láº¡i pháº£i khai Ä‘Æ°á»£c
`curriculum.topic` vÃ  `curriculum.grammar`; Ä‘á» nÃ o khÃ´ng truy Ä‘Æ°á»£c vá» danh má»¥c
chÆ°Æ¡ng trÃ¬nh thÃ¬ **bá»**, khÃ´ng "táº¡m giá»¯ Ä‘á»ƒ sau xem".

Äá» náº±m á»Ÿ `content/exams/hk1-01.json`, log vá»›i `module: 'exam'`, `unit` lÃ  sá»‘
chá»§ Ä‘á» chÃ­nh cá»§a Ä‘á».

> ðŸ“Œ `DATA-DESIGN.md` Â§2 chÆ°a cÃ³ thÆ° má»¥c `exams/`. ThÃªm má»™t dÃ²ng vÃ o cÃ¢y thÆ° má»¥c
> á»Ÿ Ä‘Ã³.

### 9.6 `/ai-logs/` â€” XÆ°á»Ÿng AI, pháº§n cháº·n cáº£ luáº­n vÄƒn

**Trang danh sÃ¡ch** hiá»‡n 7 háº¡ng má»¥c lá»—i theo `CONTENT-SPEC.md` Â§6, kÃ¨m sá»‘ tÃ¡c vá»¥
Ä‘Ã£ lÃ m vÃ  tá»‰ lá»‡ phÃ¡t hiá»‡n cá»§a riÃªng há»c sinh Ä‘Ã³.

> âš ï¸ **NgÃ¢n hÃ ng hiá»‡n cÃ³ 18 item â€” Ä‘Ãºng cáº¥u trÃºc, thiáº¿u sá»‘ lÆ°á»£ng.**
> Äáº¿m trong `data/ai-eval-bank.json` ngÃ y 2026-08-26: 7 háº¡ng má»¥c Ä‘Ã£ khai Ä‘Ãºng vÃ 
> cÃ³ neo `grammar`, 12 item cÃ³ lá»—i chia theo loáº¡i **2Â·2Â·1Â·2Â·2Â·2Â·1**, vÃ  6 item
> sáº¡ch â€” tá»©c **33% khÃ´ng cÃ³ lá»—i, Ä‘Ãºng tá»‰ lá»‡ ~30% mÃ  `DATA-DESIGN.md` Â§7 yÃªu cáº§u**.
>
> Váº¥n Ä‘á» duy nháº¥t lÃ  khá»‘i lÆ°á»£ng: má»—i loáº¡i má»›i cÃ³ 1â€“2 item, sÃ n lÃ  **8**. Cáº§n
> thÃªm khoáº£ng **38 item** ná»¯a cho Ä‘á»§ 56, giá»¯ nguyÃªn tá»‰ lá»‡ sáº¡ch, rá»“i tÃ¡ch hai tá»‡p
> `ae-hk1.json` / `ae-hk2.json` theo nguá»“n ngÃ´n ngá»¯. DÆ°á»›i 8 item má»—i loáº¡i thÃ¬ tá»‰
> lá»‡ phÃ¡t hiá»‡n theo loáº¡i **khÃ´ng diá»…n giáº£i Ä‘Æ°á»£c**, mÃ  Ä‘Ã³ lÃ  chá»‰ sá»‘ chÃ­nh cá»§a RQ3.
>
> NÃ³i cÃ¡ch khÃ¡c: pháº§n khÃ³ â€” lÆ°á»£c Ä‘á»“, typology, neo chÆ°Æ¡ng trÃ¬nh, tá»‰ lá»‡ item sáº¡ch
> â€” Ä‘Ã£ xong vÃ  Ä‘Ãºng. CÃ²n láº¡i lÃ  viá»‡c sáº£n xuáº¥t, vÃ  Ä‘Ã³ lÃ  viá»‡c cá»§a `Pipeline/`.

**Khoáº£ng 30% item mang `error.present: false`.** KhÃ´ng pháº£i thiáº¿u sÃ³t â€” cÃ³ chÃºng
má»›i tÃ­nh Ä‘Æ°á»£c **tá»‰ lá»‡ bÃ¡o Ä‘á»™ng giáº£** bÃªn cáº¡nh tá»‰ lá»‡ phÃ¡t hiá»‡n, vÃ  má»›i phÃ¢n biá»‡t
Ä‘Æ°á»£c em Ä‘Ã¡nh giÃ¡ cáº©n tháº­n vá»›i em khoanh bá»«a. Äá»«ng "sá»­a" chÃºng (`AGENTS.md` Â§3).

**MÃ n hÃ¬nh lÃ m bÃ i:**

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ ðŸ¤– Äoáº¡n vÄƒn nÃ y do AI viáº¿t             â”‚
â”‚                                        â”‚
â”‚ Many students today prefer to learn    â”‚
â”‚ online because internet gives them     â”‚
â”‚ access to many free courses.           â”‚
â”‚  â†‘ cháº¡m vÃ o pháº§n em cho lÃ  sai         â”‚
â”‚                                        â”‚
â”‚ [   Äoáº¡n nÃ y khÃ´ng cÃ³ lá»—i   ]          â”‚
â”‚                                        â”‚
â”‚ VÃ¬ sao em nghÄ© váº­y? (khÃ´ng báº¯t buá»™c)   â”‚
â”‚ [                              ]       â”‚
â”‚                                        â”‚
â”‚ [        Gá»­i cÃ¢u tráº£ lá»i       ]       â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

Báº£y luáº­t cá»§a mÃ n hÃ¬nh nÃ y:

1. Má»—i `span` trong JSON lÃ  má»™t vÃ¹ng cháº¡m riÃªng, cao â‰¥ 44px ká»ƒ cáº£ span ngáº¯n.
2. **NÃºt "Äoáº¡n nÃ y khÃ´ng cÃ³ lá»—i" luÃ´n hiá»‡n.** Thiáº¿u nÃ³ thÃ¬ 30% item sáº¡ch khÃ´ng
   tráº£ lá»i Ä‘Æ°á»£c, vÃ  há»c sinh suy ra ngay lÃ  bÃ i nÃ o cÅ©ng cÃ³ lá»—i.
3. Ã” lÃ½ do tá»± luáº­n, â‰¤ 200 kÃ½ tá»±, khÃ´ng báº¯t buá»™c. ÄÃ¢y lÃ  dá»¯ liá»‡u Ä‘á»‹nh tÃ­nh cho
   RQ3 vÃ  nÃ³ tá»± Ä‘áº¿n.
4. Giao diá»‡n **khÃ´ng bao giá»** Ä‘á»ƒ lá»™ tá»‰ lá»‡ cÃ³ lá»—i / khÃ´ng lá»—i. KhÃ´ng hiá»‡n "3
   trong 10 bÃ i nÃ y khÃ´ng cÃ³ lá»—i".
5. `correct` tÃ­nh nhÆ° sau, vÃ  chá»‰ nhÆ° sau:
   - `error.present === true` â†’ Ä‘Ãºng khi `chosen === error.span`
   - `error.present === false` â†’ Ä‘Ãºng khi há»c sinh báº¥m "khÃ´ng cÃ³ lá»—i"
6. Pháº£n há»“i hiá»‡n `error.correction` vÃ  `error.explanation`. Vá»›i item sáº¡ch: "ÄÃºng
   rá»“i, Ä‘oáº¡n nÃ y khÃ´ng cÃ³ lá»—i." â€” vÃ  vá»›i em chá»n nháº§m má»™t span, nÃ³i rÃµ chá»— Ä‘Ã³
   **Ä‘Ãºng** chá»© khÃ´ng pháº£i "gáº§n Ä‘Ãºng".
7. `category` truyá»n vÃ o `aiEvalAnswer` láº¥y tá»« `error.category`; item sáº¡ch láº¥y
   `error.probe_category`. Nhá» Ä‘Ã³ bÃ¡o Ä‘á»™ng giáº£ cÅ©ng quy Ä‘Æ°á»£c vá» tá»«ng loáº¡i lá»—i.

### 9.7 `/me/` â€” Dá»¯ liá»‡u cá»§a tÃ´i

Ba khá»‘i:

1. **Tiáº¿n Ä‘á»™** â€” tá»« `Spine.metrics`: ngÃ y hoáº¡t Ä‘á»™ng, cÃ¢u Ä‘Ã£ lÃ m, Ä‘á»™ chÃ­nh xÃ¡c,
   chuá»—i dÃ i nháº¥t, cáº¥p Ä‘á»™, XP.
2. **Tráº¡ng thÃ¡i gá»­i** â€” `Spine.pending` ("Ä‘ang chá» gá»­i: 0") vÃ  nÃºt "Gá»­i ngay"
   (`Spine.flush()`). Äá»ƒ há»c sinh máº¡ng yáº¿u tá»± báº¥m trÆ°á»›c khi táº¯t mÃ¡y.
3. **Quyá»n cá»§a em** â€” hai nÃºt:
   - "Táº£i dá»¯ liá»‡u cá»§a tÃ´i" â†’ `Spine.exportMyData()`
   - "**XoÃ¡ dá»¯ liá»‡u há»c táº­p cá»§a tÃ´i**" â†’ `Spine.deleteMyData()`, cÃ³ bÆ°á»›c xÃ¡c nháº­n

> NhÃ£n nÃºt xoÃ¡ **pháº£i** lÃ  "XoÃ¡ dá»¯ liá»‡u **há»c táº­p** cá»§a tÃ´i", kÃ¨m dÃ²ng giáº£i
> thÃ­ch. LÃ½ do á»Ÿ `AGENTS.md` Â§10: trang cÃ³ Google Analytics, dá»¯ liá»‡u GA náº±m trÃªn
> mÃ¡y chá»§ Google vÃ  há»c sinh khÃ´ng xoÃ¡ Ä‘Æ°á»£c. NhÃ£n "XoÃ¡ háº¿t dá»¯ liá»‡u cá»§a tÃ´i" lÃ 
> má»™t lá»i há»©a trang nÃ y khÃ´ng giá»¯ Ä‘Æ°á»£c.

DÃ²ng giáº£i thÃ­ch dÆ°á»›i nÃºt:

> NÃºt nÃ y xoÃ¡ tiáº¿n Ä‘á»™ há»c vÃ  mÃ£ cá»§a em trÃªn mÃ¡y nÃ y. Sá»‘ liá»‡u thá»‘ng kÃª áº©n danh mÃ 
> trang dÃ¹ng Ä‘á»ƒ biáº¿t cÃ³ bao nhiÃªu ngÆ°á»i vÃ o há»c thÃ¬ khÃ´ng xoÃ¡ Ä‘Æ°á»£c tá»« Ä‘Ã¢y â€” em
> há»i cÃ´ náº¿u muá»‘n biáº¿t thÃªm.

---

## 10. KhÃ´ng Ä‘Æ°á»£c mang vá»

XoÃ¡ háº¿t rá»“i thÃ¬ Ä‘Ã¢y khÃ´ng cÃ²n lÃ  danh sÃ¡ch xoÃ¡ â€” nÃ³ lÃ  danh sÃ¡ch **khÃ´ng Ä‘Æ°á»£c
chÃ©p láº¡i vÃ o cÃ¢y má»›i**. Nguy hiá»ƒm hÆ¡n danh sÃ¡ch xoÃ¡, vÃ¬ lÃºc dá»±ng láº¡i ráº¥t dá»… tiá»‡n
tay chÃ©p nguyÃªn `data/` sang cho Ä‘á»§.

Theo `AGENTS.md` Â§5:

| XoÃ¡ | Ghi chÃº |
|---|---|
| ðŸŽ“ HSG 12 | cáº£ bá»‘n má»¥c con |
| â”œ Reading Comprehension | thuá»™c HSG 12 |
| â”œ Listening Audio Lab | thuá»™c HSG 12 |
| â”œ CGEL Grammar Master | 12 module cÃº phÃ¡p nÃ¢ng cao |
| â”” Destination C1/C2 Vocab | vÆ°á»£t Báº­c 3 |
| ðŸ›ï¸ CGEL Grammar | má»¥c Ä‘iá»u hÆ°á»›ng Ä‘á»™c láº­p |
| ðŸ’Ž C1/C2 Vocabulary | má»¥c Ä‘iá»u hÆ°á»›ng Ä‘á»™c láº­p |
| ðŸ”® Arcane Idioms | mÃ´ táº£ ghi rÃµ trÃ¬nh Ä‘á»™ C1/C2 |

**Hai thá»© Ä‘Æ°á»£c mang vá», nhÆ°ng pháº£i sá»­a nguá»“n trÆ°á»›c:**

- ðŸŽ® **Lexicode Matrix** (`Lexicode/`) â€” cÆ¡ cháº¿ chÆ¡i giá»¯ Ä‘Æ°á»£c, nhÆ°ng nguá»“n tá»«
  pháº£i trá» vá» `content/vocab/`, vÃ  trá» xong **pháº£i rÃ  láº¡i** xem cÃ²n tá»« nÃ o vÆ°á»£t
  Báº­c 3 lá»t vÃ o qua danh sÃ¡ch C1/C2 cÅ© khÃ´ng. Äáº·t á»Ÿ `/practice/vocabulary/` nhÆ°
  má»™t cháº¿ Ä‘á»™ chÆ¡i, **khÃ´ng** lÃ m má»¥c Ä‘iá»u hÆ°á»›ng riÃªng. ÄÃ¢y lÃ  **viá»‡c cuá»‘i cÃ¹ng**
  â€” sau bÆ°á»›c 10 cá»§a Â§12. NÃ³ náº±m ngoÃ i pháº¡m vi Ä‘o lÆ°á»ng, nÃªn háº¿t thá»i gian thÃ¬ bá».
- ðŸ“ **Practice Tests** â†’ `/practice/exam/`, lá»c theo Â§9.5.

Kiá»ƒm báº±ng Â§13.1, khÃ´ng báº±ng cÃ¡ch báº¥m thá»­.

### 10.1 Danh sÃ¡ch khÃ´ng chÃ©p láº¡i â€” Ä‘á»c tÄ©nh ngÃ y 2026-08-26

Äá»£t xoÃ¡ lo pháº§n lá»›n. Báº£ng nÃ y lÃ  Ä‘á»ƒ lÃºc dá»±ng láº¡i **khÃ´ng tiá»‡n tay chÃ©p nguyÃªn
`data/` sang cho Ä‘á»§**:

| Tá»‡p | Dung lÆ°á»£ng | VÃ¬ sao khÃ´ng chÃ©p |
|---|---|---|
| `data/vocab-c1c2.json` | 191KB | Vá»‘n tá»« C1/C2, vÆ°á»£t Báº­c 3 |
| `data/hsg12-topics.json` | 76KB | Ná»™i dung HSG 12 |
| `collocations_data.js` | **3.1MB** | Chá»‰ `test_js.html` náº¡p; khÃ´ng mÃ n hÃ¬nh nÃ o cáº§n |
| `test_js.html`, `test.html` | | Trang thá»­ |
| `idioms.html`, `vocab.html`, `hsg12.html`, `reading.html`, `english10.html`, `grammar.html`, `listening.html`, `dashboard.html` | | Tá»‡p chuyá»ƒn hÆ°á»›ng cá»§a SPA cÅ©. Route má»›i lÃ  thÆ° má»¥c (Â§3) |
| `ocr_dump.json`, `gemini-code-*.json`, `scratch/` | | CÃ´ng cá»¥ ná»™i bá»™, khÃ´ng thuá»™c trang. Cho vÃ o `.gitignore` |

**Hai thÃ³i quen cá»§a báº£n cÅ©, Ä‘á»«ng mang sang:**

**Ba thÆ° viá»‡n ngoÃ i.** Báº£n cÅ© náº¡p Google Fonts (Inter + Plus Jakarta Sans),
Chart.js 4.4.1 vÃ  Fuse.js 7.0.0 tá»« CDN â€” bá»‘n láº§n gá»i ra ngoÃ i cháº·n hiá»ƒn thá»‹ trÃªn
3G, trÃ¡i ngÃ¢n sÃ¡ch Â§11 vÃ  luáº­t Â§5.10. Báº£n má»›i **khÃ´ng cÃ³ thÆ° viá»‡n ngoÃ i nÃ o**.
PhÃ´ng chá»¯ dÃ¹ng `system-ui` (Â§5.2). TÃ¬m kiáº¿m náº¿u cáº§n thÃ¬ viáº¿t tay vÃ i chá»¥c dÃ²ng
lá»c chuá»—i, Ä‘á»«ng náº¡p Fuse.js cho má»™t Ã´ tÃ¬m kiáº¿m.

**Chart.js cho Dashboard.** Náº¿u Dashboard lÃ  mÃ n hÃ¬nh cá»§a **nghiÃªn cá»©u viÃªn** thÃ¬
sá»‘ liá»‡u Ä‘i Looker Studio (`AGENTS.md` Â§8) vÃ  Chart.js biáº¿n máº¥t khá»i trang há»c
sinh. MÃ n hÃ¬nh `/me/` cá»§a há»c sinh chá»‰ cáº§n vÃ i con sá»‘ vÃ  má»™t thanh tiáº¿n Ä‘á»™ CSS â€”
khÃ´ng cáº§n thÆ° viá»‡n váº½ Ä‘á»“ thá»‹ nÃ o.

**NhÃ£n "550 Words" Ä‘Ã£ gá»¡** (2026-08-26). Bá»‘n chá»— trong `index.html`: huy hiá»‡u
thanh Ä‘iá»u hÆ°á»›ng, huy hiá»‡u tháº» Vocabulary, vÃ  hai dÃ²ng mÃ´ táº£. Huy hiá»‡u tháº» Ä‘á»•i
thÃ nh `10 Units` â€” Ä‘áº¿m unit thÃ¬ Ä‘áº¿m Ä‘Æ°á»£c vÃ  khÃ´ng pháº£i lÃ  má»™t tuyÃªn bá»‘ vá» Ä‘á»‹nh
má»©c chÆ°Æ¡ng trÃ¬nh.

Con sá»‘ váº«n náº±m trong `data/vocab-eng10.json` (`totalVocabulary: 550`), vÃ 
`CONTENT-SPEC.md` Â§5 Æ°á»›c tÃ­nh lá»›p 10 khoáº£ng **200â€“270 tá»« má»›i á»Ÿ Báº­c 3**. KhÃ´ng
nháº¥t thiáº¿t lÃ  sai â€” náº¿u pháº§n lá»›n 550 má»¥c lÃ  tá»« Ä‘Ã£ há»c á»Ÿ THCS Ä‘Æ°á»£c nháº¯c láº¡i thÃ¬
há»£p lá»‡. Viá»‡c cáº§n lÃ m khi tháº©m Ä‘á»‹nh ná»™i dung: Ä‘á»‘i chiáº¿u vÃ  ghi láº¡i káº¿t luáº­n má»™t
láº§n, Ä‘á»ƒ lÃºc bá»‹ há»i cÃ³ sáºµn cÃ¢u tráº£ lá»i thay vÃ¬ pháº£i Ä‘áº¿m láº¡i.

---

## 11. Ngoáº¡i tuyáº¿n, hiá»‡u nÄƒng, há»ng hÃ³c

| TÃ¬nh huá»‘ng | Trang pháº£i lÃ m gÃ¬ |
|---|---|
| Máº¥t máº¡ng giá»¯a chá»«ng | Váº«n lÃ m bÃ i Ä‘Æ°á»£c vá»›i ná»™i dung Ä‘Ã£ cache. Sá»± kiá»‡n xáº¿p hÃ ng. Hiá»‡n dÃ²ng nhá» "Sáº½ gá»­i khi cÃ³ máº¡ng" â€” **khÃ´ng** cháº·n giao diá»‡n |
| `localStorage` bá»‹ cháº·n (áº©n danh) | `Spine.init()` tráº£ `ok:false`. Hiá»‡n Ä‘Ãºng cÃ¢u cá»§a spine, cÃ³ nÃºt "Thá»­ láº¡i" |
| Ná»™i dung JSON náº¡p há»ng | `Portal.empty()` vá»›i nÃºt quay láº¡i. Gá»i `Spine.errorShown('content_load', path)` |
| `ENDPOINT` chÆ°a cáº¥u hÃ¬nh | KhÃ´ng vá»¡ gÃ¬ cáº£. Sá»± kiá»‡n náº±m láº¡i hÃ ng Ä‘á»£i. ÄÃ¢y lÃ  tráº¡ng thÃ¡i cháº¡y thá»­ há»£p lá»‡ |
| Audio khÃ´ng phÃ¡t | Hiá»‡n lá»i thoáº¡i kÃ¨m dÃ²ng "KhÃ´ng phÃ¡t Ä‘Æ°á»£c. Em Ä‘á»c lá»i thoáº¡i táº¡m nhÃ©." |

**NgÃ¢n sÃ¡ch hiá»‡u nÄƒng** â€” má»¥c tiÃªu lÃ  Ä‘iá»‡n thoáº¡i giÃ¡ ráº» trÃªn 3G:

| Thá»© | Tráº§n |
|---|---|
| CSS | 1 tá»‡p, < 15KB |
| JS má»—i trang | < 20KB chÆ°a nÃ©n (ká»ƒ cáº£ `core/`) |
| JSON má»—i module | < 120KB |
| áº¢nh | Chá»‰ khi cáº§n cho nghÄ©a. WebP. `loading="lazy"` |
| ThÆ° viá»‡n ngoÃ i | **KhÃ´ng cÃ³.** KhÃ´ng framework, khÃ´ng jQuery, khÃ´ng CDN |

---

## 12. Thá»© tá»± dá»±ng

Theo Ä‘Ãºng thá»© tá»±. BÆ°á»›c 7 lÃ  bÆ°á»›c cháº·n cáº£ luáº­n vÄƒn.

| # | Viá»‡c | Xong khi |
|---|---|---|
| **0** | **Commit + gáº¯n nhÃ£n `pre-rebuild`, cá»©u 6 thá»© á»Ÿ Â§3.1.1, rá»“i má»›i xoÃ¡** | `git tag` tháº¥y `pre-rebuild`; sÃ¡u thá»© Ä‘Ã£ náº±m ngoÃ i repo |
| 1 | Dá»±ng cÃ¢y Â§2 rá»—ng, chÃ©p `core/` vÃ o, lÃ m 3 viá»‡c á»Ÿ Â§6.6 | `grep -c CONTENT_VERSION core/config.js` = 1 |
| 2 | `/css/style.css` + `/index.html` + `js/progress.js` + `js/data.js` + `js/app.js` | Trang chá»§ hiá»‡n Ä‘Ãºng trÃªn mÃ n 360px, cá»•ng nháº­p mÃ£ cháº¡y |
| 3 | `content/loader.js` + `manifest.json` + `schedules.json` | Náº¡p Ä‘Æ°á»£c manifest, cache Ä‘Ãºng khoÃ¡ |
| 4 | `/practice/` + `/me/` + `404.html` (khung) **vÃ  cá»•ng khoÃ¡ Â§9.2 cho `Global_Success_10/`** | Äiá»u hÆ°á»›ng 4 má»¥c thÃ´ng suá»‘t; má»Ÿ bÃ i giáº£ng báº±ng mÃ¡y cÃ³ mÃ£ há»c sinh thÃ¬ tháº¥y mÃ n hÃ¬nh khoÃ¡ |
| 5 | `/practice/grammar/` + 14 tá»‡p `content/grammar/` | Äá»§ 14 module theo báº£ng Â§9.3 |
| 6 | `/practice/vocabulary/` + 10 tá»‡p `content/vocab/` | 10 chá»§ Ä‘á», khÃ´ng tá»« nÃ o vÆ°á»£t Báº­c 3 |
| 7 | **`/ai-logs/` + `ae-hk1.json` + `ae-hk2.json` â€” 56 item** | 7 loáº¡i Ã— 8, ~30% `present:false`, má»i item cÃ³ `category` |
| 8 | Má»™t unit HK2 máº«u Ä‘á»§ 4 ká»¹ nÄƒng (Ä‘á» xuáº¥t `u06`) | ÄÃºng Ä‘á»™ dÃ i Â§9.4 |
| 9 | 4 unit HK2 cÃ²n láº¡i + `/practice/listening/` + `/practice/writing/` | |
| 10 | `/practice/exam/` + `content/exams/` | Má»—i Ä‘á» khai Ä‘Æ°á»£c `topic` vÃ  `grammar` |
| 11 | ÄÃ³ng bÄƒng `APP_VERSION: 'v1.0.0'`, `CONTENT_VERSION: 'c1.0.0'` | Cháº¡y háº¿t Â§13 |

**Náº¿u thiáº¿u thá»i gian, cáº¯t bÆ°á»›c 9 vÃ  10 trÆ°á»›c. KhÃ´ng bao giá» cáº¯t bÆ°á»›c 7.**

---

## 13. Kiá»ƒm tra

### 13.1 Kiá»ƒm tÄ©nh â€” luÃ´n Ä‘Æ°á»£c phÃ©p, khÃ´ng sinh dá»¯ liá»‡u

Cháº¡y á»Ÿ thÆ° má»¥c gá»‘c repo trang. `AGENTS.md` Â§11: ranh giá»›i lÃ  **cÃ³ sinh ra sá»±
kiá»‡n hay khÃ´ng**, khÃ´ng pháº£i cÃ³ Ä‘á»™ng vÃ o mÃ£ hay khÃ´ng. Máº¥y lá»‡nh nÃ y chá»‰ Ä‘á»c tá»‡p.

```bash
grep -rn "core/spine.js" --include=*.js . | grep -v "^./core/"
```

Pháº£i tráº£ vá» **Ä‘Ãºng má»™t dÃ²ng**: `js/progress.js`. Nhiá»u hÆ¡n lÃ  há»£p Ä‘á»“ng Ä‘Ã£ vá»¡.

```bash
grep -rn "localStorage\|fetch(" --include=*.js js/ */js/ */*/js/
```

Pháº£i **rá»—ng**. Má»i láº§n Ä‘á»¥ng tá»›i hai thá»© nÃ y náº±m trong `core/` vÃ 
`content/loader.js`.

```bash
grep -rln "All study materials are generated by AI" --include=*.html . | wc -l
```

Pháº£i báº±ng **sá»‘ tá»‡p HTML**. Thiáº¿u má»™t tá»‡p lÃ  má»™t mÃ n hÃ¬nh khÃ´ng cÃ³ cáº£nh bÃ¡o AI.

```bash
grep -rn "gemini\|openai\|api[_-]\?key\|Bearer " --include=*.js --include=*.html .
```

Pháº£i **rá»—ng**. `AGENTS.md` Â§3.

```bash
grep -rn "location.hash\|hashchange\|view-panel\|switchView" --include=*.js --include=*.html .
```

Pháº£i **rá»—ng**, ká»ƒ cáº£ trong `Global_Success_10/` (tá»‡p cÅ© á»Ÿ Ä‘Ã³ cÃ²n má»™t
`onclick="window.location.hash=''"` á»Ÿ tháº» tiÃªu Ä‘á» â€” sá»­a thÃ nh
`href="/Global_Success_10/"`). CÃ²n má»™t dÃ²ng nÃ o lÃ  SPA cÅ© cÃ²n sÃ³t láº¡i.

```bash
grep -rn 'href="/[a-z0-9_-]*\(/[a-z0-9_-]*\)*"' --include=*.html . | grep -v '/"' | head
```

RÃ  liÃªn káº¿t ná»™i bá»™ thiáº¿u dáº¥u `/` cuá»‘i (Â§3.1.3). Thiáº¿u dáº¥u lÃ  thÃªm má»™t vÃ²ng 301
trÃªn máº¡ng yáº¿u.

```bash
grep -rn "HSG 12\|CGEL\|Arcane\|C1/C2\|c1c2" --include=*.html --include=*.js --include=*.json . \
  | grep -v "^./Global_Success_10/"
```

Pháº£i **rá»—ng**. Má»i khá»›p lÃ  sÃ³t cá»§a Â§10. ("Global Success" nay lÃ  tÃªn há»£p lá»‡ cá»§a
module giÃ¡o viÃªn â€” khÃ´ng tÃ¬m ná»¯a.)

```bash
grep -rn "Spine\.\|Log\.\|openModule\|answerItem" Global_Success_10/
```

Chá»‰ Ä‘Æ°á»£c khá»›p `Portal.role()` trong `gs10-gate.js`. Báº¥t ká»³ lá»i gá»i nÃ o khÃ¡c lÃ 
bÃ i giáº£ng Ä‘ang ghi log â€” vi pháº¡m Â§8.1.

```bash
grep -rn "gs10_teacher_v1\|openGate" Global_Success_10/index.html
```

Pháº£i tháº¥y cá»•ng Ä‘Æ°á»£c gá»i **trÆ°á»›c** má»i lá»‡nh náº¡p `data/*.json`. Náº¡p trÆ°á»›c rá»“i áº©n
Ä‘i lÃ  khÃ´ng khoÃ¡ gÃ¬ cáº£ (Â§9.2.2).

```bash
python -c "import json,glob; [json.load(open(f,encoding='utf-8')) for f in glob.glob('content/**/*.json',recursive=True)]"
```

JSON há»ng thÃ¬ trang tráº¯ng trÃªn mÃ¡y há»c sinh mÃ  khÃ´ng bÃ¡o gÃ¬.

**Kiá»ƒm ngÃ¢n hÃ ng XÆ°á»Ÿng AI** â€” bÆ°á»›c 7 xong thÃ¬ cháº¡y, Ä‘Ã¢y lÃ  con sá»‘ vÃ o luáº­n vÄƒn:

```bash
python - <<'PY'
import json, glob, collections
c = collections.Counter(); clean = 0; total = 0; nocat = []
for f in glob.glob('content/ai-eval/*.json'):
    for it in json.load(open(f, encoding='utf-8'))['items']:
        total += 1
        e = it.get('error', {})
        if e.get('present'):
            c[e.get('category')] += 1
        else:
            clean += 1
            c[e.get('probe_category')] += 1
        if not (e.get('category') or e.get('probe_category')):
            nocat.append(it['id'])
print('tong:', total, '| sach:', clean, f'({clean/total:.0%})')
print('theo loai:', dict(sorted(c.items(), key=lambda x: (x[0] is None, x[0]))))
print('THIEU category:', nocat or 'khong co')
PY
```

Äáº¡t khi: tá»•ng â‰¥ 56 Â· má»—i loáº¡i 1â€“7 cÃ³ â‰¥ 8 Â· sáº¡ch trong khoáº£ng 25â€“35% Â· khÃ´ng item
nÃ o thiáº¿u `category`.

### 13.2 Kiá»ƒm thá»§ cÃ´ng â€” nghiÃªn cá»©u viÃªn tá»± lÃ m

> ðŸš« **TÃ¡c nhÃ¢n AI khÃ´ng Ä‘Æ°á»£c tá»± má»Ÿ trang, khÃ´ng nháº­p mÃ£, khÃ´ng báº¥m qua cÃ¡c
> luá»“ng.** `AGENTS.md` Â§3 vÃ  Â§11. Má»—i cÃº báº¥m sinh má»™t dÃ²ng tháº­t trong Sheet vá»›i
> `pseudo_id` bá»‹a vÃ  `session_id` tháº­t â€” lÃºc phÃ¢n tÃ­ch khÃ´ng tÃ¡ch ra Ä‘Æ°á»£c, vÃ¬ nÃ³
> trÃ´ng y há»‡t dá»¯ liá»‡u há»c sinh. Dá»±ng xong thÃ¬ **dá»«ng láº¡i vÃ  bÃ¡o**.

Chá»‹ tá»± cháº¡y, trÃªn **Ä‘iá»‡n thoáº¡i tháº­t**, vá»›i `CONFIG.ENDPOINT = ''`, xong thÃ¬ xoÃ¡
`localStorage` cá»§a miá»n Ä‘Ã³:

- [ ] MÃ n 360px: khÃ´ng cÃ³ thanh cuá»™n ngang á»Ÿ báº¥t ká»³ trang nÃ o
- [ ] Cá»•ng nháº­p mÃ£: gÃµ sai bÃ¡o lá»—i rÃµ; gÃµ Ä‘Ãºng vÃ o tháº³ng láº§n sau
- [ ] Tá»« trang chá»§ tá»›i cÃ¢u há»i Ä‘áº§u tiÃªn: Ä‘áº¿m Ä‘Æ°á»£c **hai** láº§n cháº¡m
- [ ] Banner AI hiá»‡n á»Ÿ **má»i** trang, Ä‘á»c Ä‘Æ°á»£c, khÃ´ng pháº£i báº¥m má»›i tháº¥y
- [ ] Chip ðŸ¤– hiá»‡n á»Ÿ item cÃ³ `ai_generated: true`
- [ ] Tráº£ lá»i: giáº£i thÃ­ch hiá»‡n **trÆ°á»›c**, toast XP hiá»‡n **sau**
- [ ] XÆ°á»Ÿng AI: nÃºt "khÃ´ng cÃ³ lá»—i" luÃ´n tháº¥y, khÃ´ng pháº£i cuá»™n má»›i tá»›i
- [ ] Ná»n tá»‘i (báº­t cháº¿ Ä‘á»™ tá»‘i cá»§a mÃ¡y): má»i chá»¯ váº«n Ä‘á»c Ä‘Æ°á»£c
- [ ] Táº¯t máº¡ng â†’ lÃ m 5 cÃ¢u â†’ báº­t láº¡i: sá»‘ chá» tÄƒng rá»“i tá»± vá» 0
- [ ] Táº£i láº¡i trang giá»¯a chá»«ng: XP, tiáº¿n Ä‘á»™, hÃ ng Ä‘á»£i cÃ²n nguyÃªn
- [ ] NÃºt xoÃ¡: cÃ³ bÆ°á»›c xÃ¡c nháº­n, nhÃ£n Ä‘Ãºng "XoÃ¡ dá»¯ liá»‡u **há»c táº­p** cá»§a tÃ´i"
- [ ] BÃ n phÃ­m áº£o báº­t lÃªn khÃ´ng che nÃºt "Kiá»ƒm tra"
- [ ] Ã” nháº­p mÃ£ khÃ´ng lÃ m iOS tá»± phÃ³ng to trang
- [ ] **KhoÃ¡ bÃ i giáº£ng:** mÃ¡y Ä‘Ã£ nháº­p mÃ£ há»c sinh â†’ má»Ÿ `/Global_Success_10/` tháº¥y
      mÃ n hÃ¬nh khoÃ¡, **khÃ´ng** tháº¥y Ã´ nháº­p máº­t kháº©u, vÃ  bÃ i giáº£ng khÃ´ng hiá»‡n ra
      dÃ¹ Ä‘á»£i bao lÃ¢u
- [ ] **KhoÃ¡ bÃ i giáº£ng:** cá»­a sá»• áº©n danh (chÆ°a cÃ³ mÃ£) â†’ há»i máº­t kháº©u; nháº­p Ä‘Ãºng
      thÃ¬ vÃ o, Ä‘Ã³ng trÃ¬nh duyá»‡t má»Ÿ láº¡i váº«n nhá»›
- [ ] **KhÃ´ng rÃ² log:** sau khi giÃ¡o viÃªn dÃ¹ng bÃ i giáº£ng 5 phÃºt, `Spine.pending`
      á»Ÿ `/me/` **khÃ´ng tÄƒng** (má»Ÿ `/me/` trÃªn cÃ¹ng mÃ¡y Ä‘á»ƒ xem)

### 13.3 TrÆ°á»›c khi thu dá»¯ liá»‡u chÃ­nh thá»©c

Láº¥y nguyÃªn tá»« `AGENTS.md` Â§11 â€” khÃ´ng thay tháº¿, chá»‰ nháº¯c láº¡i:

- [ ] Roster Ä‘iá»n Ä‘á»§ cho cáº£ hai lá»›p
- [ ] Bá»‘n viá»‡c sá»­a `Code.gs` á»Ÿ `AGENTS.md` Â§8
- [ ] `ENDPOINT` trá» Sheet **chÃ­nh thá»©c**, khÃ´ng pháº£i Sheet pilot
- [ ] Thá»­ ngoáº¡i tuyáº¿n trÃªn máº¡ng tháº­t, Sheet khÃ´ng cÃ³ dÃ²ng trÃ¹ng
- [ ] Thá»­ trÃªn Ä‘iá»‡n thoáº¡i tháº­t cá»§a há»c sinh
- [ ] `APP_VERSION: 'v1.0.0'` vÃ  `CONTENT_VERSION: 'c1.0.0'`, rá»“i **Ä‘Ã³ng bÄƒng cáº£ hai**

---

## 14. Viá»‡c pháº£i lÃ m trÃªn tÃ i liá»‡u khÃ¡c

TÃ i liá»‡u nÃ y phÃ¡t hiá»‡n nÄƒm chá»— lá»‡ch giá»¯a cÃ¡c tá»‡p. Sá»­a Ä‘á»ƒ láº§n sau khÃ´ng ai lÃ m
theo báº£n cÅ©.

| Tá»‡p | Sá»­a gÃ¬ |
|---|---|
| `AGENTS.md` Â§2 | ThÃªm dÃ²ng: `SITE-SPEC.md` â€” cáº¥u trÃºc trang, há»‡ thiáº¿t káº¿, há»£p Ä‘á»“ng JS |
| `AGENTS.md` Â§13 | Ghi cÃ¡c quyáº¿t Ä‘á»‹nh á»Ÿ Â§15 dÆ°á»›i Ä‘Ã¢y |
| `DATA-DESIGN.md` Â§3 | `ID_PATTERN` vÃ  `school_id` lÃ  báº£n cÅ© â€” `AGENTS.md` Â§4 tháº¯ng |
| `DATA-DESIGN.md` Â§4 | VÃ­ dá»¥ `g07` sai theo báº£ng Â§9.3; `g07` lÃ  cÃ¢u bá»‹ Ä‘á»™ng |
| `DATA-DESIGN.md` Â§2 | ThÃªm `content/exams/` vÃ o cÃ¢y thÆ° má»¥c |
| `AGENTS.md` Â§5 | Báº£ng "cáº§n xoÃ¡" chÆ°a nháº¯c `data/vocab-c1c2.json`, `hsg12.html`, `idioms.html`, `reading.html`, `collocations_data.js` â€” xem Â§10 |
| `AGENTS.md` Â§10 | Báº«y hash Ä‘Ã£ xá»­ lÃ½ báº±ng cáº¥u trÃºc nhiá»u trang Â§3 â€” ghi má»™t dÃ²ng, káº»o ngÆ°á»i sau Ä‘i báº­t láº¡i *Page changes based on browser history events* rá»“i tháº¯c máº¯c |

---

## 15. DÃ¡n vÃ o `AGENTS.md` Â§13

Bá»‘n dÃ²ng, má»™t dÃ²ng cho má»—i quyáº¿t Ä‘á»‹nh tÃ i liá»‡u nÃ y Ä‘Æ°a ra. XoÃ¡ dÃ²ng nÃ o chá»‹
khÃ´ng Ä‘á»“ng Ã½ â€” nhÆ°ng Ä‘á»«ng Ä‘á»ƒ trá»‘ng, vÃ¬ Â§13 lÃ  chá»— duy nháº¥t giáº£i thÃ­ch Ä‘Æ°á»£c vÃ¬
sao trang trÃ´ng nhÆ° hiá»‡n nay.

```
| 2026-08-26 | Trang chuyá»ƒn sang nhiá»u tá»‡p index.html, bá» Ä‘á»‹nh tuyáº¿n báº±ng hash | Má»—i mÃ n hÃ¬nh lÃ  má»™t lÆ°á»£t táº£i tháº­t nÃªn GA4 Ä‘áº¿m Ä‘Ãºng; háº¿t báº«y á»Ÿ má»¥c 10 |
| 2026-08-26 | Äiá»u hÆ°á»›ng 4 má»¥c cá»‘ Ä‘á»‹nh á»Ÿ má»i trang, bá» sidebar | Sidebar chá»‰ á»Ÿ trang chá»§ lÃ m má»i trang trong thÃ nh ngÃµ cá»¥t trÃªn Ä‘iá»‡n thoáº¡i |
| 2026-08-26 | Global Success 10 lÃ  **bÃ i giáº£ng cá»§a giÃ¡o viÃªn**, khoÃ¡ vá»›i mÃ£ há»c sinh | HS tá»± há»c Ä‘Æ°á»£c bÃ i giáº£ng trÃ¬nh chiáº¿u lÃ  má»™t can thiá»‡p thá»© hai khÃ´ng kiá»ƒm soÃ¡t |
| 2026-08-26 | Global Success 10 **náº±m ngoÃ i pháº¡m vi nghiÃªn cá»©u**; artefact Ä‘Æ°á»£c Ä‘o lÃ  Practice Center + AI Error Log + spine | CÃ´ng cá»¥ dáº¡y há»c Ä‘áº·t nhá» trÃªn cÃ¹ng tÃªn miá»n; khÃ´ng sinh log, khÃ´ng chá»‹u rÃ ng buá»™c CONTENT-SPEC, nhÆ°ng pháº£i khai nhÆ° biáº¿n bá»‘i cáº£nh |
| 2026-08-26 | Bá» Ä‘á»‹nh tuyáº¿n hash, má»—i mÃ n hÃ¬nh má»™t thÆ° má»¥c cÃ³ `index.html` | TrÃ¬nh duyá»‡t lÃ  router; GA4 Ä‘áº¿m Ä‘Ãºng, háº¿t báº«y á»Ÿ má»¥c 10 |
| 2026-08-26 | **XoÃ¡ háº¿t thÆ° má»¥c cÅ©, dá»±ng láº¡i theo SITE-SPEC Â§2** thay vÃ¬ di trÃº dáº§n | Giao diá»‡n cÅ© lÃ  SPA hash má»™t tá»‡p, sá»­a dáº§n tá»‘n hÆ¡n viáº¿t láº¡i; cá»©u 6 thá»© á»Ÿ Â§3.1.1, gáº¯n nhÃ£n `pre-rebuild` Ä‘á»ƒ hoÃ n tÃ¡c |
| 2026-08-26 | Gá»¡ nhÃ£n "550 Words" khá»i giao diá»‡n | Con sá»‘ chÆ°a Ä‘á»‘i chiáº¿u vá»›i Ä‘á»‹nh má»©c tá»« vá»±ng cá»§a CT 2018 |
| 2026-08-26 | Giá»¯ tÃªn "Global Success 10", khÃ´ng Ä‘á»•i theo CT 2018 | Luáº­t neo chÆ°Æ¡ng trÃ¬nh Ã¡p cho há»c liá»‡u sinh item Ä‘o lÆ°á»ng, khÃ´ng Ã¡p cho bÃ i giáº£ng cá»§a GV |
| 2026-08-26 | Bá» `/english10/` phÃ­a há»c sinh | Há»c sinh chá»‰ cÃ³ Luyá»‡n táº­p vÃ  XÆ°á»Ÿng AI; khÃ´ng dá»±ng hai Ä‘Æ°á»ng vÃ o cÃ¹ng ná»™i dung |
| 2026-08-26 | MÃ£ giÃ¡o viÃªn `GV-NK-01`, **khÃ´ng** thÃªm vÃ o `ID_PATTERN` | GiÃ¡o viÃªn khÃ´ng pháº£i Ä‘á»‘i tÆ°á»£ng nghiÃªn cá»©u; mÃ£ GV khÃ´ng Ä‘Æ°á»£c xuáº¥t hiá»‡n trong log |
| 2026-08-26 | Cáº£nh bÃ¡o AI **chá»‰ tiáº¿ng Anh**, khÃ´ng thÃªm báº£n dá»‹ch tiáº¿ng Viá»‡t | ÄÃ£ cÃ¢n nháº¯c vÃ  bÃ¡c |
```

---

## 16. Khi khÃ´ng cháº¯c

`AGENTS.md` Â§14 Ä‘Ã£ tráº£ lá»i sÃ¡u cÃ¢u hay gáº·p. Bá»‘n cÃ¢u ná»¯a thuá»™c pháº¡m vi tÃ i liá»‡u
nÃ y:

- *"Gá»™p `progress.js` vá»›i `spine.js` cho gá»n?"* â€” KhÃ´ng. Â§0.1. Má»™t xÆ°Æ¡ng sá»‘ng,
  má»™t hÃ ng Ä‘á»£i.
- *"Äáº·t cÃ¢u há»i tháº³ng vÃ o `data.js` cho nhanh?"* â€” KhÃ´ng. Â§0.2. Pipeline xuáº¥t báº£n
  JSON, vÃ  `provenance` pháº£i cÃ³ chá»— Ä‘á»©ng.
- *"18 item XÆ°á»Ÿng AI lÃ  Ä‘á»§ rá»“i chá»©?"* â€” KhÃ´ng. Â§9.6. SÃ n lÃ  56.
- *"KhoÃ¡ bÃ i giáº£ng báº±ng JavaScript lÃ  an toÃ n chá»©?"* â€” KhÃ´ng, vÃ  Â§9.2.1 nÃ³i rÃµ
  khoÃ¡ Ä‘Ã³ cháº·n Ä‘Æ°á»£c gÃ¬. Äá»«ng há»©a vá»›i ai lÃ  há»c sinh khÃ´ng xem Ä‘Æ°á»£c.
- *"Dá»‹ch cáº£nh bÃ¡o AI sang tiáº¿ng Viá»‡t cho cÃ¡c em hiá»ƒu?"* â€” KhÃ´ng. Â§0.4b. ÄÃ£ bÃ¡c.
- *"Dá»±ng xong rá»“i, cháº¡y thá»­ má»™t lÆ°á»£t cho cháº¯c nhÃ©?"* â€” KhÃ´ng. Â§13.2. BÃ¡o lÃ  xong,
  Ä‘á»ƒ nghiÃªn cá»©u viÃªn tá»± má»Ÿ.

KhÃ´ng luáº­t nÃ o á»Ÿ trÃªn Ä‘Æ°á»£c ná»›i ra vÃ¬ lÃ½ do tháº©m má»¹ hay tiá»‡n tay.

