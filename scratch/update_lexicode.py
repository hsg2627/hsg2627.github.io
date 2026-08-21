import re
import json

vocab_data = [
  # Wing 1 (Units 1 & 2: Family Life & Green Living)
  {"id": 1, "term": "breadwinner", "clean_word": "breadwinner", "type": "n", "desc": "n a person who earns money to support their family", "example": "In many modern households, both parents are equal --.", "category": "Wing 1: Family Life & Green Living", "monster": "🍄 Sprout Sprite"},
  {"id": 2, "term": "household chore", "clean_word": "household chore", "type": "n", "desc": "n routine task done around the house such as cleaning or washing", "example": "Sharing -- equally builds mutual respect among family members.", "category": "Wing 1: Family Life & Green Living", "monster": "🍄 Sprout Sprite"},
  {"id": 3, "term": "carbon footprint", "clean_word": "carbon footprint", "type": "n", "desc": "n amount of greenhouse gases produced by human activities", "example": "Riding bicycles instead of motorbikes reduces your daily --.", "category": "Wing 1: Family Life & Green Living", "monster": "🍄 Sprout Sprite"},
  {"id": 4, "term": "eco-friendly", "clean_word": "eco-friendly", "type": "adj", "desc": "adj not harming the environment", "example": "We should use -- cloth bags instead of single-use plastic.", "category": "Wing 1: Family Life & Green Living", "monster": "🍄 Sprout Sprite"},
  {"id": 5, "term": "sustainable", "clean_word": "sustainable", "type": "adj", "desc": "adj causing little or no damage to the environment and able to continue for a long time", "example": "Solar and wind energy provide a -- source of clean electricity.", "category": "Wing 1: Family Life & Green Living", "monster": "🍄 Sprout Sprite"},
  {"id": 6, "term": "decompose", "clean_word": "decompose", "type": "v", "desc": "v to break down into basic parts naturally through bacterial action", "example": "Organic food waste can -- quickly into rich garden fertilizer.", "category": "Wing 1: Family Life & Green Living", "monster": "🍄 Sprout Sprite"},
  {"id": 7, "term": "appliance", "clean_word": "appliance", "type": "n", "desc": "n a machine or device designed to do a particular domestic job", "example": "Always switch off electrical -- when they are not in active use.", "category": "Wing 1: Family Life & Green Living", "monster": "🍄 Sprout Sprite"},
  {"id": 8, "term": "emission", "clean_word": "emission", "type": "n", "desc": "n the production and discharge of something, especially gas or radiation", "example": "The government aims to cut carbon dioxide -- significantly by 2030.", "category": "Wing 1: Family Life & Green Living", "monster": "🍄 Sprout Sprite"},
  {"id": 9, "term": "gratitude", "clean_word": "gratitude", "type": "n", "desc": "n the feeling of being grateful and wanting to express thanks", "example": "Children expressed deep -- to their parents on Thanksgiving day.", "category": "Wing 1: Family Life & Green Living", "monster": "🍄 Sprout Sprite"},
  {"id": 10, "term": "nurture", "clean_word": "nurture", "type": "v", "desc": "v to care for and protect someone or something while they are growing", "example": "Parents work hard to -- a loving and supportive family environment.", "category": "Wing 1: Family Life & Green Living", "monster": "🍄 Sprout Sprite"},

  # Wing 2 (Units 3 & 4: Community & Music)
  {"id": 11, "term": "volunteer", "clean_word": "volunteer", "type": "v / n", "desc": "v / n to offer to do something without being paid", "example": "High school students often -- to tutor children at local orphanages.", "category": "Wing 2: Community & Music", "monster": "🛡️ Stone Golem"},
  {"id": 12, "term": "charity", "clean_word": "charity", "type": "n", "desc": "n an organization set up to provide help and raise money for those in need", "example": "All ticket sales from the charity concert went to building rural schools.", "category": "Wing 2: Community & Music", "monster": "🛡️ Stone Golem"},
  {"id": 13, "term": "non-profit", "clean_word": "non-profit", "type": "adj", "desc": "adj not established for the purpose of making a profit", "example": "The -- youth club organizes free English classes every weekend.", "category": "Wing 2: Community & Music", "monster": "🛡️ Stone Golem"},
  {"id": 14, "term": "remote area", "clean_word": "remote area", "type": "n", "desc": "n a place situated far from main population centers and difficult to reach", "example": "Medical volunteers traveled to -- to vaccinate ethnic minority children.", "category": "Wing 2: Community & Music", "monster": "🛡️ Stone Golem"},
  {"id": 15, "term": "donate", "clean_word": "donate", "type": "v", "desc": "v to give money, food, or clothes to help a person or organization", "example": "Neighbours gathered to -- warm clothes and books for flood victims.", "category": "Wing 2: Community & Music", "monster": "🛡️ Stone Golem"},
  {"id": 16, "term": "instrument", "clean_word": "instrument", "type": "n", "desc": "n an object used for producing musical sounds", "example": "The traditional Dan Bau is a unique Vietnamese stringed --.", "category": "Wing 2: Community & Music", "monster": "🛡️ Stone Golem"},
  {"id": 17, "term": "audience", "clean_word": "audience", "type": "n", "desc": "n the assembled spectators or listeners at a public event", "example": "The energetic performance captivated the entire -- from start to finish.", "category": "Wing 2: Community & Music", "monster": "🛡️ Stone Golem"},
  {"id": 18, "term": "passionate", "clean_word": "passionate", "type": "adj", "desc": "adj having or showing strong feelings or enthusiasm", "example": "Young singers are extremely -- about preserving traditional folk music.", "category": "Wing 2: Community & Music", "monster": "🛡️ Stone Golem"},
  {"id": 19, "term": "melody", "clean_word": "melody", "type": "n", "desc": "n a sequence of single notes that is musically satisfying; a tune", "example": "The gentle acoustic -- brought back warm memories of childhood.", "category": "Wing 2: Community & Music", "monster": "🛡️ Stone Golem"},
  {"id": 20, "term": "dedication", "clean_word": "dedication", "type": "n", "desc": "n the quality of being committed to a task or purpose with devotion", "example": "Community leaders praised the -- of teachers working in mountainous areas.", "category": "Wing 2: Community & Music", "monster": "🛡️ Stone Golem"},

  # Wing 3 (Units 5 & 8: Inventions & Digital Learning)
  {"id": 21, "term": "artificial intelligence", "clean_word": "artificial intelligence", "type": "n", "desc": "n the simulation of human intelligence processes by computer systems", "example": "Modern learning apps use -- to recommend personalized exercises.", "category": "Wing 3: Inventions & Digital Learning", "monster": "🔮 Shadow Familiar"},
  {"id": 22, "term": "interactive", "clean_word": "interactive", "type": "adj", "desc": "adj allowing a two-way flow of information between a computer and a user", "example": "Students engage enthusiastically with -- grammar quizzes on the portal.", "category": "Wing 3: Inventions & Digital Learning", "monster": "🔮 Shadow Familiar"},
  {"id": 23, "term": "processor", "clean_word": "processor", "type": "n", "desc": "n the central component of a computer that performs electronic calculations", "example": "The new laptop model features a powerful -- that runs software smoothly.", "category": "Wing 3: Inventions & Digital Learning", "monster": "🔮 Shadow Familiar"},
  {"id": 24, "term": "software", "clean_word": "software", "type": "n", "desc": "n the programs and other operating information used by a computer", "example": "Educational -- makes revising vocabulary much more engaging.", "category": "Wing 3: Inventions & Digital Learning", "monster": "🔮 Shadow Familiar"},
  {"id": 25, "term": "portable", "clean_word": "portable", "type": "adj", "desc": "adj easily carried or moved because of being light and small", "example": "A tablet is a -- digital device suitable for studying while traveling.", "category": "Wing 3: Inventions & Digital Learning", "monster": "🔮 Shadow Familiar"},
  {"id": 26, "term": "gadget", "clean_word": "gadget", "type": "n", "desc": "n a small mechanical or electronic device with a practical use", "example": "Smartphones have become an indispensable everyday -- for teenagers.", "category": "Wing 3: Inventions & Digital Learning", "monster": "🔮 Shadow Familiar"},
  {"id": 27, "term": "revolutionary", "clean_word": "revolutionary", "type": "adj", "desc": "adj involving or causing a complete or dramatic change", "example": "The introduction of online learning was a -- step in education.", "category": "Wing 3: Inventions & Digital Learning", "monster": "🔮 Shadow Familiar"},
  {"id": 28, "term": "educational", "clean_word": "educational", "type": "adj", "desc": "adj providing useful knowledge or relating to schooling", "example": "Teachers select high-quality -- podcasts for English listening practice.", "category": "Wing 3: Inventions & Digital Learning", "monster": "🔮 Shadow Familiar"},
  {"id": 29, "term": "access", "clean_word": "access", "type": "n / v", "desc": "n / v the means or opportunity to approach or use something", "example": "High-speed internet gives learners instant -- to global digital libraries.", "category": "Wing 3: Inventions & Digital Learning", "monster": "🔮 Shadow Familiar"},
  {"id": 30, "term": "stimulate", "clean_word": "stimulate", "type": "v", "desc": "v to encourage interest or activity in something", "example": "Gamified learning activities help -- curiosity and creative thinking.", "category": "Wing 3: Inventions & Digital Learning", "monster": "🔮 Shadow Familiar"},

  # Wing 4 (Units 6 & 7: Gender Equality & Global Partners)
  {"id": 31, "term": "equality", "clean_word": "equality", "type": "n", "desc": "n the state of being equal, especially in status, rights, and opportunities", "example": "Gender -- ensures equal pay and promotion chances for men and women.", "category": "Wing 4: Gender Equality & Global Partners", "monster": "🦊 Moonlit Kitsune"},
  {"id": 32, "term": "discrimination", "clean_word": "discrimination", "type": "n", "desc": "n the unjust or prejudicial treatment of different categories of people", "example": "Laws are strictly enforced to eliminate racial and gender -- at workplaces.", "category": "Wing 4: Gender Equality & Global Partners", "monster": "🦊 Moonlit Kitsune"},
  {"id": 33, "term": "wage", "clean_word": "wage", "type": "n", "desc": "n a fixed regular payment earned for work or services", "example": "Female workers should receive the same minimum -- as their male colleagues.", "category": "Wing 4: Gender Equality & Global Partners", "monster": "🦊 Moonlit Kitsune"},
  {"id": 34, "term": "promote", "clean_word": "promote", "type": "v", "desc": "v to support or encourage the progress and growth of something", "example": "International campaigns -- girls' education in developing nations.", "category": "Wing 4: Gender Equality & Global Partners", "monster": "🦊 Moonlit Kitsune"},
  {"id": 35, "term": "international organization", "clean_word": "international organization", "type": "n", "desc": "n an entity established by treaty or agreement with a global scope", "example": "UNICEF is a prominent -- dedicated to child welfare and development.", "category": "Wing 4: Gender Equality & Global Partners", "monster": "🦊 Moonlit Kitsune"},
  {"id": 36, "term": "partnership", "clean_word": "partnership", "type": "n", "desc": "n an association of two or more entities working toward shared goals", "example": "Vietnam has established strategic -- with numerous countries worldwide.", "category": "Wing 4: Gender Equality & Global Partners", "monster": "🦊 Moonlit Kitsune"},
  {"id": 37, "term": "cooperation", "clean_word": "cooperation", "type": "n", "desc": "n the process of working together to the same end", "example": "Regional -- among ASEAN member states fosters economic stability.", "category": "Wing 4: Gender Equality & Global Partners", "monster": "🦊 Moonlit Kitsune"},
  {"id": 38, "term": "represent", "clean_word": "represent", "type": "v", "desc": "v to speak or act on behalf of someone or a community", "example": "Youth delegates were chosen to -- their country at the ASEAN summit.", "category": "Wing 4: Gender Equality & Global Partners", "monster": "🦊 Moonlit Kitsune"},
  {"id": 39, "term": "eliminate", "clean_word": "eliminate", "type": "v", "desc": "v to completely remove or get rid of something undesirable", "example": "Global programs strive to -- poverty and illiteracy in rural communities.", "category": "Wing 4: Gender Equality & Global Partners", "monster": "🦊 Moonlit Kitsune"},
  {"id": 40, "term": "empower", "clean_word": "empower", "type": "v", "desc": "v to give someone the authority or confidence to make decisions", "example": "Digital skills training helps -- young women to pursue tech careers.", "category": "Wing 4: Gender Equality & Global Partners", "monster": "🦊 Moonlit Kitsune"},

  # Wing 5 (Units 9 & 10: Environment & Ecotourism)
  {"id": 41, "term": "biodiversity", "clean_word": "biodiversity", "type": "n", "desc": "n the variety of plant and animal life in a particular habitat or ecosystem", "example": "Tropical rainforests in Vietnam harbor extraordinary levels of --.", "category": "Wing 5: Environment & Ecotourism", "monster": "👑 Elder Dragonling"},
  {"id": 42, "term": "habitat", "clean_word": "habitat", "type": "n", "desc": "n the natural home or environment of an animal, plant, or organism", "example": "Deforestation destroys the natural -- of rare and endangered species.", "category": "Wing 5: Environment & Ecotourism", "monster": "👑 Elder Dragonling"},
  {"id": 43, "term": "conservation", "clean_word": "conservation", "type": "n", "desc": "n the protection of plants, animals, and natural resources", "example": "Wildlife -- parks play a vital role in preventing species extinction.", "category": "Wing 5: Environment & Ecotourism", "monster": "👑 Elder Dragonling"},
  {"id": 44, "term": "ecotourism", "clean_word": "ecotourism", "type": "n", "desc": "n responsible travel to natural areas that conserves the environment", "example": "Visiting Cat Tien National Park is a popular form of sustainable --.", "category": "Wing 5: Environment & Ecotourism", "monster": "👑 Elder Dragonling"},
  {"id": 45, "term": "flora and fauna", "clean_word": "flora and fauna", "type": "n", "desc": "n the plants (flora) and animals (fauna) of a particular region", "example": "The island sanctuary is renowned for its diverse native --.", "category": "Wing 5: Environment & Ecotourism", "monster": "👑 Elder Dragonling"},
  {"id": 46, "term": "endangered species", "clean_word": "endangered species", "type": "n", "desc": "n a species of animal or plant that is seriously at risk of extinction", "example": "The Saola is one of the most critically -- found in Southeast Asia.", "category": "Wing 5: Environment & Ecotourism", "monster": "👑 Elder Dragonling"},
  {"id": 47, "term": "preserve", "clean_word": "preserve", "type": "v", "desc": "v to maintain something in its original or existing state", "example": "Strict regulations are implemented to -- the ancient mangrove forests.", "category": "Wing 5: Environment & Ecotourism", "monster": "👑 Elder Dragonling"},
  {"id": 48, "term": "destination", "clean_word": "destination", "type": "n", "desc": "n the place to which someone or something is going or being sent", "example": "Phong Nha - Ke Bang is a famous ecotourism -- for adventure travelers.", "category": "Wing 5: Environment & Ecotourism", "monster": "👑 Elder Dragonling"},
  {"id": 49, "term": "sustainable tourism", "clean_word": "sustainable tourism", "type": "n", "desc": "n tourism that respects local people, travelers, cultural heritage, and environment", "example": "Promoting -- ensures that local communities directly benefit from visitors.", "category": "Wing 5: Environment & Ecotourism", "monster": "👑 Elder Dragonling"},
  {"id": 50, "term": "ecosystem", "clean_word": "ecosystem", "type": "n", "desc": "n a biological community of interacting organisms and their physical environment", "example": "Coral reefs constitute a fragile marine -- sensitive to water warming.", "category": "Wing 5: Environment & Ecotourism", "monster": "👑 Elder Dragonling"}
]

wings_data = [
  {
    "id": 0,
    "title": "Wing 1: Family Life & Green Living",
    "desc": "10 Key vocabulary terms on family responsibilities, household chores, and eco-friendly lifestyles (Units 1 & 2).",
    "monster": "🍄 Sprout Sprite",
    "range": [1, 10]
  },
  {
    "id": 1,
    "title": "Wing 2: Community & Music",
    "desc": "10 Key vocabulary terms on volunteer dedication, charity, instruments, and music appreciation (Units 3 & 4).",
    "monster": "🛡️ Stone Golem",
    "range": [11, 20]
  },
  {
    "id": 2,
    "title": "Wing 3: Inventions & Digital Learning",
    "desc": "10 Key vocabulary terms on AI technology, computer hardware, digital tools, and modern education (Units 5 & 8).",
    "monster": "🔮 Shadow Familiar",
    "range": [21, 30]
  },
  {
    "id": 3,
    "title": "Wing 4: Gender Equality & Global Partners",
    "desc": "10 Key vocabulary terms on equal rights, eliminating bias, ASEAN, and international cooperation (Units 6 & 7).",
    "monster": "🦊 Moonlit Kitsune",
    "range": [31, 40]
  },
  {
    "id": 4,
    "title": "Wing 5: Environment & Ecotourism",
    "desc": "10 Key vocabulary terms on biodiversity, wildlife conservation, habitats, and sustainable tourism (Units 9 & 10).",
    "monster": "👑 Elder Dragonling",
    "range": [41, 50]
  }
]

file_path = "c:/hsg2627.github.io/Lexicode/app.js"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace RAW_VOCAB
vocab_js = "const RAW_VOCAB = " + json.dumps(vocab_data, ensure_ascii=False, indent=2) + ";\n"
content = re.sub(r"const RAW_VOCAB = \[.*?\];\n", vocab_js, content, flags=re.DOTALL)

# Replace this.wings
wings_js = "this.wings = " + json.dumps(wings_data, ensure_ascii=False, indent=6) + ";"
content = re.sub(r"this\.wings = \[.*?\];", wings_js, content, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Lexicode app.js updated successfully with Grade 10 curriculum vocabulary!")
