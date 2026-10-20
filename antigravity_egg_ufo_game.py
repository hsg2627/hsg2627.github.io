"""
=====================================================================
  GAME TRẢ BÀI: TRỘM TRỨNG GÀ & BỊ UFO TÚM
  Dành cho Antigravity (Python + pygame)
  Tác giả: Z.ai Assistant
================================================================-----
MÔ TẢ:
  - Game kiểu Duck Race: giáo viên gọi tên từng học sinh lên trả bài.
  - Có 2 chế độ chơi:
      1. TRỘM TRỨNG GÀ: HS đóng vai kẻ trộm trứng. Trả lời ĐÚNG -> lén lấy
         được 1 quả trứng và tiến gần chuồng an toàn. Trả lời SAI -> gà mẹ
         phát hiện, mổ một phát, mất 1 mạng.
      2. BỊ UFO TÚM: HS đóng vai người chạy trốn UFO. Trả lời ĐÚNG -> né
         được tia hút, chạy nhanh hơn. Trả lời SAI -> UFO hạ tia hút xuống
         và túm được, mất 1 mạng.
  - Hết lượt chơi tất cả HS, AI ra xếp hạng theo số trứng / khoảng cách
    chạy được.

CÁCH CHƠI:
  - Chạy file:  python antigravity_egg_ufo_game.py
  - Màn Hình Chính: chọn [1] Trộm Trứng, [2] UFO, [3] Thiết lập DS HS/Câu hỏi
  - Trong lúc chơi:
        [Phím cách]  : Học sinh tiếp theo (khi đang ở màn hình "gọi tên")
        [D]          : Đáp án ĐÚNG     (HS tiến / lấy trứng / né UFO)
        [S]          : Đáp án SAI      (HS bị mổ / bị hút)
        [B]          : Bỏ qua câu hỏi này
        [M]          : Về menu chính
        [ESC]        : Thoát game

YÊU CẦU:
  pip install pygame
=====================================================================
"""

import pygame
import random
import math
import sys

# ====================================================================
# HẰNG SỐ & CẤU HÌNH
# ====================================================================
WIDTH, HEIGHT = 1200, 750
FPS = 60

# Bảng màu
SKY_DAY       = (135, 206, 235)
SKY_DUSK      = (255, 168, 120)
SKY_NIGHT     = (12, 18, 48)
GRASS         = (76, 175, 80)
GRASS_DARK    = (56, 142, 60)
GROUND        = (139, 90, 43)
WHITE         = (255, 255, 255)
BLACK         = (20, 20, 25)
RED           = (220, 60, 60)
GREEN         = (60, 200, 100)
YELLOW        = (255, 215, 0)
ORANGE        = (255, 140, 30)
BROWN         = (139, 69, 19)
HEN_BODY      = (210, 130, 70)
HEN_COMB      = (220, 50, 50)
EGG_WHITE     = (252, 245, 220)
EGG_SHELL     = (220, 200, 170)
UFO_HULL      = (200, 200, 215)
UFO_DOME      = (140, 220, 255)
BEAM_COLOR    = (120, 255, 200)
SKIN          = (255, 220, 177)
SHIRT_BLUE    = (70, 130, 220)
SHIRT_RED     = (220, 80, 80)

# Trạng thái màn hình
SCENE_MENU       = "menu"
SCENE_SETUP      = "setup"
SCENE_CALL       = "call"       # Giáo viên gọi tên HS
SCENE_QUESTION   = "question"   # Hiển thị câu hỏi, chờ ĐÚNG/SAI
SCENE_FEEDBACK   = "feedback"   # Animation tiến / bị phạt
SCENE_RESULTS    = "results"

MODE_EGG = "egg"
MODE_UFO = "ufo"

# Số câu hỏi mặc định mỗi HS
DEFAULT_QUESTIONS_PER_STUDENT = 3
MAX_HP = 3

# ====================================================================
# DỮ LIỆU MẶC ĐỊNH
# ====================================================================
DEFAULT_STUDENTS = [
    "An", "Bình", "Chi", "Dũng", "Hà",
    "Khánh", "Lan", "Minh", "Nam", "Phương"
]

DEFAULT_QUESTIONS = [
    "2 + 3 = ?",
    "Viết chữ 'Học' trên không trung.",
    "Thủ đô của Việt Nam là gì?",
    "5 x 4 = ?",
    "Đọc câu: 'Con gà trống gáy ò ó o'.",
    "Số lớn nhất có 2 chữ số là gì?",
    "Màu sắc của bầu trời ban ngày?",
    "10 - 7 = ?",
    "Nam hay Bắc ở trên bản đồ?",
    "Sáu mươi phút bằng bao nhiêu giờ?",
    "Con vật kêu 'meo meo' là con gì?",
    "Bao nhiêu ngày trong một tuần?",
]


# ====================================================================
# LỚP HỌC SINH
# ====================================================================
class Student:
    def __init__(self, name):
        self.name = name
        self.hp = MAX_HP            # số mạng còn lại
        self.eggs = 0               # số trứng ăn trộm được (mode EGG)
        self.distance = 0           # khoảng cách chạy trốn (mode UFO)
        self.answered = 0           # số câu đã trả lời
        self.correct = 0
        self.wrong = 0
        # Vị trí hiển thị trên màn chơi (animation)
        self.x = 80
        self.y = HEIGHT - 180
        self.anim_state = "idle"    # idle / advance / hurt
        self.anim_timer = 0

    def reset_round(self):
        self.hp = MAX_HP
        self.eggs = 0
        self.distance = 0
        self.x = 80
        self.anim_state = "idle"

    @property
    def score(self):
        """Điểm tổng hợp để xếp hạng."""
        if self.hp <= 0:
            return -1  # bị loại
        return self.eggs * 10 + self.distance


# ====================================================================
# LỚP GAME CHÍNH
# ====================================================================
class Game:
    def __init__(self):
        pygame.init()
        self.screen = pygame.display.set_mode((WIDTH, HEIGHT))
        pygame.display.set_caption("Game Trả Bài: Trộm Trứng & UFO")
        self.clock = pygame.time.Clock()

        # Font: dùng SysFont để tránh lỗi thiếu font
        self.font_xl  = pygame.font.SysFont("arial", 64, bold=True)
        self.font_l   = pygame.font.SysFont("arial", 44, bold=True)
        self.font_m   = pygame.font.SysFont("arial", 30)
        self.font_s   = pygame.font.SysFont("arial", 22)
        self.font_xs  = pygame.font.SysFont("arial", 18)

        self.scene = SCENE_MENU
        self.mode = MODE_EGG
        self.students = [Student(n) for n in DEFAULT_STUDENTS]
        self.questions = list(DEFAULT_QUESTIONS)
        self.current_idx = 0
        self.current_q_idx = 0
        self.questions_per_student = DEFAULT_QUESTIONS_PER_STUDENT
        self.feedback_timer = 0
        self.feedback_correct = True
        self.message = ""
        self.call_anim_t = 0.0   # thời gian cho animation "gọi tên"
        self._ufo_y = 90
        self._hen_x = WIDTH - 200
        self._shake = 0

    # ----------------------------------------------------------------
    # VÒNG LẶP CHÍNH
    # ----------------------------------------------------------------
    def run(self):
        while True:
            dt = self.clock.tick(FPS) / 1000.0
            self._handle_events()
            self._update(dt)
            self._draw()
            pygame.display.flip()

    def _handle_events(self):
        for ev in pygame.event.get():
            if ev.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            if ev.type == pygame.KEYDOWN:
                self._handle_key(ev.key)

    def _handle_key(self, key):
        if key == pygame.K_ESCAPE:
            pygame.quit()
            sys.exit()

        # ----- MENU -----
        if self.scene == SCENE_MENU:
            if key == pygame.K_1:
                self.mode = MODE_EGG
                self._start_game()
            elif key == pygame.K_2:
                self.mode = MODE_UFO
                self._start_game()
            elif key == pygame.K_3:
                self.scene = SCENE_SETUP
            return

        # ----- SETUP -----
        if self.scene == SCENE_SETUP:
            if key == pygame.K_m:
                self.scene = SCENE_MENU
            return

        # ----- PLAYING -----
        if self.scene == SCENE_CALL:
            if key == pygame.K_SPACE:
                self.scene = SCENE_QUESTION
            elif key == pygame.K_m:
                self.scene = SCENE_MENU
            return

        if self.scene == SCENE_QUESTION:
            if key == pygame.K_d:
                self._resolve_answer(True)
            elif key == pygame.K_s:
                self._resolve_answer(False)
            elif key == pygame.K_b:
                self._next_student()
            elif key == pygame.K_m:
                self.scene = SCENE_MENU
            return

        if self.scene == SCENE_FEEDBACK:
            # Cho phép bấm space để skip animation nhanh
            if key == pygame.K_SPACE:
                self.feedback_timer = 0
            return

        if self.scene == SCENE_RESULTS:
            if key in (pygame.K_r, pygame.K_m, pygame.K_SPACE):
                self.scene = SCENE_MENU
            return

    # ----------------------------------------------------------------
    # LOGIC GAME
    # ----------------------------------------------------------------
    def _start_game(self):
        for s in self.students:
            s.reset_round()
        # Đảo danh sách HS & câu hỏi để mỗi lần chơi khác nhau
        random.shuffle(self.students)
        random.shuffle(self.questions)
        self.current_idx = 0
        self.current_q_idx = 0
        self._goto_call()

    def _goto_call(self):
        if self.current_idx >= len(self.students):
            self.scene = SCENE_RESULTS
            return
        self.scene = SCENE_CALL
        self.call_anim_t = 0.0
        # Đặt lại vị trí HS trên sân
        s = self.students[self.current_idx]
        s.x = 80
        s.anim_state = "idle"

    def _current_question(self):
        if not self.questions:
            return "(Hết câu hỏi - bấm ĐÚNG/SAI tuỳ ý)"
        return self.questions[self.current_q_idx % len(self.questions)]

    def _resolve_answer(self, correct: bool):
        s = self.students[self.current_idx]
        s.answered += 1
        self.feedback_correct = correct
        if correct:
            s.correct += 1
            if self.mode == MODE_EGG:
                s.eggs += 1
                s.x += 110
                s.anim_state = "advance"
            else:
                s.distance += 100
                s.x += 90
                s.anim_state = "advance"
            self.message = "ĐÚNG! Tiến lên!"
        else:
            s.wrong += 1
            s.hp -= 1
            s.anim_state = "hurt"
            self._shake = 12
            if self.mode == MODE_EGG:
                self.message = "SAI! Gà mẹ mổ một phát!"
            else:
                self.message = "SAI! UFO hút mất một mạng!"
        self.scene = SCENE_FEEDBACK
        self.feedback_timer = 1.4  # giây

    def _next_student(self):
        self.current_idx += 1
        self.current_q_idx += 1
        self._goto_call()

    # ----------------------------------------------------------------
    # UPDATE
    # ----------------------------------------------------------------
    def _update(self, dt):
        if self.scene == SCENE_CALL:
            self.call_anim_t += dt
        elif self.scene == SCENE_FEEDBACK:
            self.feedback_timer -= dt
            if self.feedback_timer <= 0:
                s = self.students[self.current_idx]
                # Nếu hết máu hoặc trả lời đủ số câu -> HS tiếp theo
                q_done = s.answered >= self.questions_per_student
                dead = s.hp <= 0
                if dead:
                    # Thoát màn chơi
                    self._next_student()
                elif q_done:
                    self._next_student()
                else:
                    self.scene = SCENE_QUESTION
        if self._shake > 0:
            self._shake = max(0, self._shake - 60 * dt)

    # ----------------------------------------------------------------
    # VẼ
    # ----------------------------------------------------------------
    def _draw(self):
        if self.scene == SCENE_MENU:
            self._draw_menu()
        elif self.scene == SCENE_SETUP:
            self._draw_setup()
        elif self.scene in (SCENE_CALL, SCENE_QUESTION, SCENE_FEEDBACK):
            self._draw_play()
        elif self.scene == SCENE_RESULTS:
            self._draw_results()

    # --------- MENU ---------
    def _draw_menu(self):
        self.screen.fill(SKY_DAY)
        # Vẽ mây
        self._draw_cloud(180, 120, 1.0)
        self._draw_cloud(820, 80, 0.8)
        self._draw_cloud(560, 200, 0.6)

        # Tiêu đề
        title = self.font_xl.render("GAME TRẢ BÀI", True, BLACK)
        self.screen.blit(title, (WIDTH // 2 - title.get_width() // 2, 60))
        sub = self.font_m.render("Trộm Trứng Gà  &  Bị UFO Túm", True, BROWN)
        self.screen.blit(sub, (WIDTH // 2 - sub.get_width() // 2, 140))

        # Các nút lựa chọn
        opts = [
            ("1", "Trộm Trứng Gà  (gà mẹ mổ)", HEN_BODY),
            ("2", "Bị UFO Túm  (tia hút mất mạng)", UFO_DOME),
            ("3", "Thiết lập danh sách HS / câu hỏi", GRASS_DARK),
        ]
        y = 280
        for k, txt, col in opts:
            self._draw_button(WIDTH // 2 - 280, y, 560, 80, f"[{k}]  {txt}", col)
            y += 100

        # Hướng dẫn
        help_text = self.font_s.render(
            "Bấm 1 / 2 / 3 để chọn.  Trong game: [D]=ĐÚNG  [S]=SAI  [Space]=HS tiếp theo  [M]=Menu  [ESC]=Thoát",
            True, BLACK
        )
        self.screen.blit(help_text, (WIDTH // 2 - help_text.get_width() // 2, HEIGHT - 50))

    def _draw_button(self, x, y, w, h, text, color):
        pygame.draw.rect(self.screen, color, (x, y, w, h), border_radius=18)
        pygame.draw.rect(self.screen, BLACK, (x, y, w, h), 3, border_radius=18)
        t = self.font_l.render(text, True, WHITE)
        self.screen.blit(t, (x + (w - t.get_width()) // 2, y + (h - t.get_height()) // 2))

    def _draw_cloud(self, x, y, scale=1.0):
        r = int(30 * scale)
        pygame.draw.circle(self.screen, WHITE, (x, y), r)
        pygame.draw.circle(self.screen, WHITE, (x + r, y + 5), int(r * 0.8))
        pygame.draw.circle(self.screen, WHITE, (x - r, y + 5), int(r * 0.8))
        pygame.draw.circle(self.screen, WHITE, (x + r // 2, y - r // 2), int(r * 0.7))

    # --------- SETUP ---------
    def _draw_setup(self):
        self.screen.fill((245, 245, 240))
        title = self.font_l.render("Thiết lập", True, BLACK)
        self.screen.blit(title, (60, 40))
        info = self.font_m.render(
            "Mở file antigravity_egg_ufo_game.py và sửa DEFAULT_STUDENTS / DEFAULT_QUESTIONS ở đầu file.",
            True, BROWN
        )
        self.screen.blit(info, (60, 110))
        info2 = self.font_m.render(
            "Sau khi sửa xong, lưu file và chạy lại để áp dụng.", True, BROWN
        )
        self.screen.blit(info2, (60, 150))

        # Hiển thị DS HS hiện tại
        s_title = self.font_m.render(f"Danh sách học sinh ({len(self.students)} em):", True, BLACK)
        self.screen.blit(s_title, (60, 220))
        for i, s in enumerate(self.students):
            t = self.font_s.render(f"{i+1}. {s.name}", True, BLACK)
            self.screen.blit(t, (80, 260 + i * 28))

        # Hiển thị câu hỏi
        q_x = 620
        q_title = self.font_m.render(f"Danh sách câu hỏi ({len(self.questions)} câu):", True, BLACK)
        self.screen.blit(q_title, (q_x, 220))
        for i, q in enumerate(self.questions):
            t = self.font_s.render(f"{i+1}. {q}", True, BLACK)
            # Cắt dòng nếu quá dài
            if t.get_width() > 540:
                t = self.font_s.render(f"{i+1}. {q[:50]}...", True, BLACK)
            self.screen.blit(t, (q_x + 20, 260 + i * 28))

        note = self.font_s.render("[M] Về menu", True, RED)
        self.screen.blit(note, (60, HEIGHT - 60))

    # --------- PLAY ---------
    def _draw_play(self):
        # shake offset
        sx = sy = 0
        if self._shake > 0:
            sx = random.randint(-int(self._shake), int(self._shake))
            sy = random.randint(-int(self._shake), int(self._shake))

        if self.mode == MODE_EGG:
            self._draw_egg_scene(sx, sy)
        else:
            self._draw_ufo_scene(sx, sy)

        # HUD trên cùng
        self._draw_hud()

        # Overlay theo scene
        if self.scene == SCENE_CALL:
            self._draw_call_overlay()
        elif self.scene == SCENE_QUESTION:
            self._draw_question_overlay()
        elif self.scene == SCENE_FEEDBACK:
            self._draw_feedback_overlay()

    def _draw_hud(self):
        # Thanh HUD trên
        pygame.draw.rect(self.screen, (0, 0, 0, 180), (0, 0, WIDTH, 50))
        pygame.draw.rect(self.screen, (0, 0, 0), (0, 0, WIDTH, 50))
        s = self.students[self.current_idx]
        # Tên HS
        name_t = self.font_m.render(f"HS: {s.name}", True, YELLOW)
        self.screen.blit(name_t, (20, 8))
        # Mạng (HP) - trái tim
        for i in range(MAX_HP):
            color = RED if i < s.hp else (80, 80, 80)
            self._draw_heart(280 + i * 36, 25, 12, color)
        # Tiến độ
        if self.mode == MODE_EGG:
            stat = f"Trứng: {s.eggs}   |   Câu: {s.answered}/{self.questions_per_student}"
        else:
            stat = f"Khoảng cách: {s.distance}m   |   Câu: {s.answered}/{self.questions_per_student}"
        stat_t = self.font_m.render(stat, True, WHITE)
        self.screen.blit(stat_t, (WIDTH - stat_t.get_width() - 20, 8))

    def _draw_heart(self, cx, cy, r, color):
        pygame.draw.circle(self.screen, color, (cx - r // 2, cy - r // 4), r // 2 + 2)
        pygame.draw.circle(self.screen, color, (cx + r // 2, cy - r // 4), r // 2 + 2)
        pygame.draw.polygon(self.screen, color, [
            (cx - r, cy), (cx + r, cy), (cx, cy + r + 4)
        ])

    # ----- Cảnh Trộm Trứng -----
    def _draw_egg_scene(self, sx, sy):
        # Trời
        self.screen.fill(SKY_DAY)
        # Mây
        self._draw_cloud(220 + sx, 110 + sy, 1.0)
        self._draw_cloud(820 + sx, 70 + sy, 0.7)
        # Mặt trời
        pygame.draw.circle(self.screen, YELLOW, (WIDTH - 110 + sx, 110 + sy), 50)
        pygame.draw.circle(self.screen, (255, 240, 150), (WIDTH - 110 + sx, 110 + sy), 70, 3)

        # Đất cỏ
        grass_y = HEIGHT - 200
        pygame.draw.rect(self.screen, GRASS, (0, grass_y, WIDTH, 200))
        # Sọc cỏ
        for i in range(0, WIDTH, 40):
            pygame.draw.polygon(self.screen, GRASS_DARK, [
                (i + sx, grass_y + sy),
                (i + 20 + sx, grass_y + sy),
                (i + 10 + sx, grass_y + 18 + sy),
            ])

        # Chuồng gà ở bên phải (đích)
        self._draw_coop(WIDTH - 220 + sx, grass_y - 60 + sy)

        # Trứng rải trên cỏ (3 quả) - gợi ý
        for i in range(3):
            self._draw_egg(280 + i * 80 + sx, grass_y + 90 + sy, 16)

        # Gà mẹ đi tuần ở phía sau HS
        self._draw_hen(self._hen_x + sx, grass_y - 10 + sy, t=self.call_anim_t)

        # Học sinh (kẻ trộm trứng)
        s = self.students[self.current_idx]
        self._draw_thief(s, grass_y + sy)

        # Nếu HS bị mổ -> vẽ hiệu ứng "bụp" ở trên đầu
        if s.anim_state == "hurt":
            star_y = grass_y - 80 + sy + int(math.sin(self.call_anim_t * 30) * 6)
            self._draw_stars(s.x + sx, star_y, 5)

    def _draw_coop(self, x, y):
        # Thân chuồng
        pygame.draw.rect(self.screen, (180, 120, 80), (x, y, 160, 120))
        pygame.draw.polygon(self.screen, BROWN, [
            (x - 10, y), (x + 170, y), (x + 80, y - 70)
        ])
        # Cửa
        pygame.draw.rect(self.screen, BROWN, (x + 60, y + 40, 40, 80))
        pygame.draw.circle(self.screen, YELLOW, (x + 90, y + 80), 3)
        # "ROOST" chữ
        t = self.font_xs.render("CHUỒNG GÀ", True, BLACK)
        self.screen.blit(t, (x + 30, y - 30))

    def _draw_egg(self, cx, cy, r):
        pygame.draw.ellipse(self.screen, EGG_WHITE, (cx - r, cy - int(r * 1.3), r * 2, int(r * 2.6)))
        pygame.draw.ellipse(self.screen, EGG_SHELL, (cx - r, cy - int(r * 1.3), r * 2, int(r * 2.6)), 2)

    def _draw_hen(self, x, y, t=0.0):
        # Mình gà
        bob = int(math.sin(t * 6) * 3)
        pygame.draw.ellipse(self.screen, HEN_BODY, (x - 35, y - 25 + bob, 70, 50))
        # Đầu
        pygame.draw.circle(self.screen, HEN_BODY, (x + 35, y - 20 + bob), 22)
        # Mào
        pygame.draw.polygon(self.screen, HEN_COMB, [
            (x + 30, y - 40 + bob), (x + 40, y - 50 + bob), (x + 48, y - 38 + bob)
        ])
        # Mỏ
        pygame.draw.polygon(self.screen, ORANGE, [
            (x + 55, y - 22 + bob), (x + 68, y - 18 + bob), (x + 55, y - 14 + bob)
        ])
        # Mắt
        pygame.draw.circle(self.screen, BLACK, (x + 40, y - 25 + bob), 3)
        # Chân
        pygame.draw.line(self.screen, ORANGE, (x - 10, y + 25 + bob), (x - 10, y + 45), 3)
        pygame.draw.line(self.screen, ORANGE, (x + 10, y + 25 + bob), (x + 10, y + 45), 3)
        # Cánh
        wing_y = y + bob + int(math.sin(t * 8) * 3)
        pygame.draw.ellipse(self.screen, (160, 90, 50), (x - 30, wing_y - 15, 30, 35))

    def _draw_thief(self, s, ground_y):
        # Cơ thể HS - mặc áo kẻ trộm (sọc đen)
        x = s.x
        y = ground_y - 50
        bob = 0
        if s.anim_state == "advance":
            bob = int(math.sin(self.call_anim_t * 20) * 4)
        # Chân
        pygame.draw.rect(self.screen, BLACK, (x - 10, y + 40, 8, 20))
        pygame.draw.rect(self.screen, BLACK, (x + 2, y + 40, 8, 20))
        # Thân
        pygame.draw.rect(self.screen, SHIRT_BLUE, (x - 18, y - 5 + bob, 36, 50), border_radius=8)
        # Sọc kẻ trộm
        for i in range(3):
            pygame.draw.rect(self.screen, BLACK, (x - 18, y - 5 + bob + i * 16, 36, 4))
        # Đầu
        pygame.draw.circle(self.screen, SKIN, (x, y - 25 + bob), 18)
        # Mắt
        pygame.draw.circle(self.screen, BLACK, (x - 6, y - 28 + bob), 2)
        pygame.draw.circle(self.screen, BLACK, (x + 6, y - 28 + bob), 2)
        # Miệng (cười khi advance, khóc khi hurt)
        if s.anim_state == "hurt":
            pygame.draw.arc(self.screen, BLACK, (x - 8, y - 20 + bob, 16, 14), math.pi, 2 * math.pi, 2)
        else:
            pygame.draw.arc(self.screen, BLACK, (x - 8, y - 22 + bob, 16, 12), 0, math.pi, 2)
        # Túi trứng (nếu có)
        if s.eggs > 0:
            for i in range(min(s.eggs, 5)):
                self._draw_egg(x + 22, y + 30 - i * 8, 6)

    def _draw_stars(self, cx, cy, n=5):
        for i in range(n):
            ang = 2 * math.pi * i / n + self.call_anim_t * 5
            r = 20
            x = cx + int(math.cos(ang) * r)
            y = cy + int(math.sin(ang) * r)
            pygame.draw.polygon(self.screen, YELLOW, [
                (x, y - 6), (x + 2, y - 2), (x + 6, y), (x + 2, y + 2),
                (x, y + 6), (x - 2, y + 2), (x - 6, y), (x - 2, y - 2),
            ])

    # ----- Cảnh UFO -----
    def _draw_ufo_scene(self, sx, sy):
        # Trời đêm
        self.screen.fill(SKY_NIGHT)
        # Sao
        random.seed(42)
        for _ in range(60):
            x = random.randint(0, WIDTH)
            y = random.randint(0, HEIGHT // 2)
            tw = abs(math.sin(self.call_anim_t * 2 + x)) * 0.5 + 0.5
            c = int(255 * tw)
            self.screen.set_at((x + sx, y + sy), (c, c, c))
        random.seed()
        # Mặt trăng
        pygame.draw.circle(self.screen, (240, 240, 220), (120 + sx, 110 + sy), 40)
        pygame.draw.circle(self.screen, SKY_NIGHT, (140 + sx, 100 + sy), 36)

        # Đất
        grass_y = HEIGHT - 200
        pygame.draw.rect(self.screen, (30, 40, 60), (0, grass_y, WIDTH, 200))
        # Cỏ nhấp nhô
        for i in range(0, WIDTH, 25):
            pygame.draw.polygon(self.screen, (50, 70, 100), [
                (i + sx, grass_y + sy),
                (i + 12 + sx, grass_y + sy),
                (i + 6 + sx, grass_y + 15 + sy),
            ])

        # UFO bay lượn phía trên
        ufo_x = WIDTH // 2 + int(math.sin(self.call_anim_t * 1.5) * 200)
        ufo_y = 120 + int(math.sin(self.call_anim_t * 3) * 12)
        s = self.students[self.current_idx]
        # Nếu feedback SAI, UFO hạ tia hút xuống đầu HS
        beam_target_y = None
        if self.scene == SCENE_FEEDBACK and not self.feedback_correct:
            beam_target_y = grass_y - 30 + sy
        self._draw_ufo(ufo_x + sx, ufo_y + sy, beam_to_y=beam_target_y)

        # Học sinh (đang chạy trốn)
        self._draw_runner(s, grass_y + sy)

        # Cột mốc khoảng cách (đích: 600m)
        goal_x = WIDTH - 100
        pygame.draw.rect(self.screen, YELLOW, (goal_x + sx, grass_y - 80 + sy, 6, 80))
        flag_pts = [
            (goal_x + 6 + sx, grass_y - 80 + sy),
            (goal_x + 50 + sx, grass_y - 65 + sy),
            (goal_x + 6 + sx, grass_y - 50 + sy),
        ]
        pygame.draw.polygon(self.screen, RED, flag_pts)
        t = self.font_xs.render("AN TOÀN", True, YELLOW)
        self.screen.blit(t, (goal_x - 30 + sx, grass_y - 105 + sy))

    def _draw_ufo(self, x, y, beam_to_y=None):
        # Đĩa bay
        pygame.draw.ellipse(self.screen, UFO_HULL, (x - 70, y - 15, 140, 30))
        # Máng
        pygame.draw.ellipse(self.screen, (140, 140, 165), (x - 70, y - 15, 140, 30), 3)
        # Vòm kính
        pygame.draw.ellipse(self.screen, UFO_DOME, (x - 30, y - 45, 60, 40))
        pygame.draw.ellipse(self.screen, (100, 200, 240), (x - 30, y - 45, 60, 40), 2)
        # Đèn nhấp nháy
        for i, dx in enumerate([-50, -20, 10, 40]):
            on = (int(self.call_anim_t * 5) + i) % 2 == 0
            col = YELLOW if on else (90, 90, 90)
            pygame.draw.circle(self.screen, col, (x + dx, y + 10), 5)
        # Tia hút (nếu có)
        if beam_to_y is not None:
            # Hình thang tia hút
            beam_surf = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
            pts = [
                (x - 25, y + 15), (x + 25, y + 15),
                (x + 60, beam_to_y), (x - 60, beam_to_y)
            ]
            pygame.draw.polygon(beam_surf, (120, 255, 200, 90), pts)
            pygame.draw.polygon(beam_surf, (255, 255, 255, 180), pts, 3)
            self.screen.blit(beam_surf, (0, 0))

    def _draw_runner(self, s, ground_y):
        x = s.x
        y = ground_y - 50
        # Chạy nhanh hơn khi advance
        if s.anim_state == "advance":
            leg_swing = int(math.sin(self.call_anim_t * 30) * 8)
        else:
            leg_swing = int(math.sin(self.call_anim_t * 6) * 3)
        # Chân
        pygame.draw.rect(self.screen, BLACK, (x - 10, y + 40, 8, 20 + leg_swing))
        pygame.draw.rect(self.screen, BLACK, (x + 2, y + 40, 8, 20 - leg_swing))
        # Thân
        pygame.draw.rect(self.screen, SHIRT_RED, (x - 18, y - 5, 36, 50), border_radius=8)
        # Đầu
        pygame.draw.circle(self.screen, SKIN, (x, y - 25), 18)
        # Mắt
        pygame.draw.circle(self.screen, BLACK, (x - 6, y - 28), 2)
        pygame.draw.circle(self.screen, BLACK, (x + 6, y - 28), 2)
        # Miệng
        if s.anim_state == "hurt":
            pygame.draw.ellipse(self.screen, BLACK, (x - 6, y - 18, 12, 8), 2)
        else:
            pygame.draw.arc(self.screen, BLACK, (x - 8, y - 22, 16, 12), 0, math.pi, 2)
        # Tay vung
        arm_swing = int(math.sin(self.call_anim_t * 20) * 6) if s.anim_state == "advance" else 0
        pygame.draw.line(self.screen, SKIN, (x - 18, y + 5), (x - 28, y + 25 + arm_swing), 5)
        pygame.draw.line(self.screen, SKIN, (x + 18, y + 5), (x + 28, y + 25 - arm_swing), 5)

    # ----- Overlay: gọi tên -----
    def _draw_call_overlay(self):
        # Bảng "GỌI TÊN"
        s = self.students[self.current_idx]
        board_w, board_h = 800, 260
        bx = (WIDTH - board_w) // 2
        by = 120
        # Nền bảng
        pygame.draw.rect(self.screen, WHITE, (bx, by, board_w, board_h), border_radius=20)
        pygame.draw.rect(self.screen, BLACK, (bx, by, board_w, board_h), 5, border_radius=20)

        label = self.font_l.render("GỌI TÊN LÊN TRẢ BÀI", True, BROWN)
        self.screen.blit(label, (bx + (board_w - label.get_width()) // 2, by + 30))

        # Tên HS với hiệu ứng đập
        scale = 1.0 + math.sin(self.call_anim_t * 6) * 0.05
        name_surf = self.font_xl.render(s.name, True, RED)
        name_surf = pygame.transform.rotozoom(name_surf, 0, scale)
        self.screen.blit(name_surf, (bx + (board_w - name_surf.get_width()) // 2, by + 100))

        hint = self.font_m.render("[Phím cách] Bắt đầu trả bài", True, BLACK)
        self.screen.blit(hint, (bx + (board_w - hint.get_width()) // 2, by + 210))

    # ----- Overlay: câu hỏi -----
    def _draw_question_overlay(self):
        s = self.students[self.current_idx]
        q = self._current_question()
        board_w, board_h = 900, 200
        bx = (WIDTH - board_w) // 2
        by = HEIGHT - 260

        pygame.draw.rect(self.screen, WHITE, (bx, by, board_w, board_h), border_radius=18)
        pygame.draw.rect(self.screen, BLACK, (bx, by, board_w, board_h), 4, border_radius=18)

        name_t = self.font_m.render(f"HS: {s.name}  -  Câu {s.answered + 1}/{self.questions_per_student}", True, BROWN)
        self.screen.blit(name_t, (bx + 30, by + 20))

        # Câu hỏi - có thể xuống dòng nếu dài
        self._draw_wrapped_text(q, self.font_l, BLACK, bx + 30, by + 70, board_w - 60)

        hint = self.font_s.render("[D] ĐÚNG     [S] SAI     [B] Bỏ qua     [M] Menu", True, RED)
        self.screen.blit(hint, (bx + (board_w - hint.get_width()) // 2, by + board_h - 35))

    def _draw_wrapped_text(self, text, font, color, x, y, max_w):
        words = text.split(' ')
        lines = []
        cur = ""
        for w in words:
            test = (cur + " " + w).strip()
            if font.size(test)[0] <= max_w:
                cur = test
            else:
                if cur:
                    lines.append(cur)
                cur = w
        if cur:
            lines.append(cur)
        for i, ln in enumerate(lines):
            t = font.render(ln, True, color)
            self.screen.blit(t, (x, y + i * (font.get_height() + 4)))

    # ----- Overlay: feedback -----
    def _draw_feedback_overlay(self):
        s = self.students[self.current_idx]
        # Bảng nhỏ ở giữa trên
        msg = self.message
        color = GREEN if self.feedback_correct else RED
        board_w, board_h = 700, 110
        bx = (WIDTH - board_w) // 2
        by = 70
        pygame.draw.rect(self.screen, WHITE, (bx, by, board_w, board_h), border_radius=14)
        pygame.draw.rect(self.screen, color, (bx, by, board_w, board_h), 5, border_radius=14)
        t = self.font_l.render(msg, True, color)
        self.screen.blit(t, (bx + (board_w - t.get_width()) // 2, by + 30))

        # Nếu hết máu -> cảnh "kết thúc lượt"
        if s.hp <= 0:
            over_t = self.font_xl.render("HẾT MẠNG!", True, RED)
            self.screen.blit(over_t, (WIDTH // 2 - over_t.get_width() // 2, HEIGHT // 2 - 40))
            next_t = self.font_m.render("[Space] HS tiếp theo", True, BLACK)
            self.screen.blit(next_t, (WIDTH // 2 - next_t.get_width() // 2, HEIGHT // 2 + 30))

    # ----- RESULTS -----
    def _draw_results(self):
        self.screen.fill((245, 245, 240))
        title = self.font_xl.render("KẾT QUẢ", True, BLACK)
        self.screen.blit(title, (WIDTH // 2 - title.get_width() // 2, 50))

        sub = self.font_m.render(
            "Trộm Trứng Gà" if self.mode == MODE_EGG else "Bị UFO Túm",
            True, BROWN
        )
        self.screen.blit(sub, (WIDTH // 2 - sub.get_width() // 2, 130))

        # Sắp xếp
        sorted_students = sorted(self.students, key=lambda x: x.score, reverse=True)

        # Vẽ bảng
        cols = ["Hạng", "Tên", "Đúng", "Sai", "HP", "Trứng" if self.mode == MODE_EGG else "K.cách", "Tổng điểm"]
        col_x = [80, 200, 380, 480, 560, 660, 820]
        y0 = 200

        # Header
        for i, c in enumerate(cols):
            t = self.font_m.render(c, True, WHITE)
            pygame.draw.rect(self.screen, BROWN, (col_x[i] - 10, y0 - 5, 100, 40))
            self.screen.blit(t, (col_x[i], y0))

        # Hàng
        for rank, s in enumerate(sorted_students, 1):
            row_y = y0 + 40 + (rank - 1) * 36
            row_bg = (255, 255, 230) if rank == 1 else (255, 255, 255) if rank % 2 == 0 else (240, 240, 240)
            pygame.draw.rect(self.screen, row_bg, (60, row_y - 5, WIDTH - 120, 36))
            medal = ["🥇", "🥈", "🥉"][rank - 1] if rank <= 3 else ""
            row = [
                f"{rank}",
                s.name,
                f"{s.correct}",
                f"{s.wrong}",
                f"{s.hp}/{MAX_HP}",
                f"{s.eggs}" if self.mode == MODE_EGG else f"{s.distance}m",
                f"{max(s.score, 0)}",
            ]
            for i, val in enumerate(row):
                t = self.font_s.render(val, True, BLACK)
                self.screen.blit(t, (col_x[i], row_y))

        hint = self.font_m.render("[R / M / Space] Về menu chính", True, RED)
        self.screen.blit(hint, (WIDTH // 2 - hint.get_width() // 2, HEIGHT - 60))


# ====================================================================
# KHỞI ĐỘNG
# ====================================================================
if __name__ == "__main__":
    try:
        Game().run()
    except Exception as e:
        pygame.quit()
        print(f"Lỗi: {e}")
        raise
