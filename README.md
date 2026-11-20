# 🚀 META IT SCHOOL — Professional IT Education Web Platform

**META IT SCHOOL** — zamonaviy, premium ko‘rinishdagi dasturlash maktabi uchun to‘liq ishlaydigan, yuqori konversiyali web-platforma. Sayt Apple va Linear dizayn tamoyillaridan ilhomlangan holda, haqiqiy IT akademiya darajasida yaratilgan.

---

## 🌟 Asosiy Xususiyatlar va Imkoniyatlar

1. **🎨 Premium Dizayn & Ranglar:**
   - Asosiy rang: `#080B14` (Deep Space Dark)
   - Ikkinchi rang: `#0E1628` va `#101A35` (Midnight Navy)
   - Accent rang: `#2563EB` (Electric Blue) va `#38BDF8` (Cyan Neon)
   - Glassmorphism elementlar, neon effektlar, gradient hoshiyalar
   - Interaktiv fon zarralari (Particles Canvas) va grid to‘ri

2. **📱 100% Responsive Dizayn:**
   - Desktop, noutbuk, planshet, iPhone va Android qurilmalari uchun to‘liq optimallashtirilgan.
   - Hech qanday gorizontal scroll yo‘q. Silliq animatsiyali mobil menyu (drawer).

3. **⚡ Interaktiv Hero Section:**
   - Katta shior: *"Kelajagingni bugundan dasturlash bilan yarat!"*
   - O'ng tomonda kod yozish simulyatori (Interactive Syntax-Highlighted Code Terminal)
   - Jonli kod yozish animatsiyasi va almashtiriluvchi fayl tablari (`developer.ts`, `skills.json`, `career.config.js`)
   - 4 ta animatsiyali hisoblagich statistika (1000+ o'quvchi, 15+ mentor, 10+ kurs, 90% amaliyot)

4. **📚 10 ta To'liq Kurs Katalogi:**
   1. Frontend Development (HTML, CSS, JS, Tailwind, React, Next.js)
   2. Backend Development (Node.js, Express, PostgreSQL, Docker)
   3. Full Stack Development (MERN / PERN stack)
   4. Python Programming (Syntax, OOP, Django, Aiogram)
   5. JavaScript Core & Advanced (ES6+, TS, Clean Code)
   6. UI/UX Design (Figma, UX Research, Design Systems)
   7. Graphic Design & Branding (Photoshop, Illustrator)
   8. React.js & Next.js Pro (App Router, Zustand, SSR)
   9. Mobile App Development (Flutter & Dart, iOS & Android)
   10. Artificial Intelligence & Data Science (Machine Learning, PyTorch, LLM)
   - Kategoriya bo'yicha filterlar (Barchasi, Frontend, Backend, Full Stack, Dizayn, Mobile & AI)
   - Real vaqt rejimida qidiruv (Live Search)
   - Har bir kurs uchun oylik silabus (Course Syllabus) modali

5. **👨‍🏫 Ustozlar (Mentors) Bo'limi:**
   - Senior mentorlar (Ex-EPAM, Payme, Uzum, IT Park)
   - Texnologiyalar teglari, tajribasi va ijtimoiy tarmoqlar (Telegram, LinkedIn, GitHub)

6. **🏆 O'quvchilar Natijalari & Portfolio:**
   - Talabalar tomonidan yaratilgan real tijoriy loyihalar ko'rgazmasi
   - Ishga joylashish natijalari (Uzum, Payme, EPAM, IT Park)
   - Hamkor IT kompaniyalar cheksiz harakatlanuvchi lentasi (Infinite Marquee)

7. **🤖 Telegram Bot Integratsiyasi:**
   - Kursga yozilish va bepul konsultatsiya arizalari xavfsiz backend orqali Telegram botga yuboriladi.
   - Bot tokeni hech qachon mijoz (frontend) JavaScript kodida ko'rinmaydi.
   - Bot token va Chat ID `.env` faylida yoki **Admin panel sozlamalarida** to'g'ridan-to'g'ri brauzerdan sozlanishi mumkin.
   - Agar bot token kiritilmagan bo'lsa ham tizim uzluksiz ishlaydi: arizalar mahalliy bazaga yoziladi va konsolda simulyatsiya qilinadi.

8. **🔒 Kuchli Admin Panel (`/admin`):**
   - Parol bilan himoyalangan (`admin` / `meta2025`)
   - Dashboard ko'rsatkichlari (Jami arizalar, Yangi arizalar, Qabul qilinganlar, Konversiya %)
   - Arizalarni boshqarish: Status o'zgartirish (Yangi, Bog'lanildi, Qabul qilindi, Bekor qilindi)
   - Bitta tugma bilan talaba bilan Telegram orqali bog'lanish
   - Arizalarni **CSV (Excel)** formatida yuklab olish (Export)
   - Kurslarni to'liq boshqarish (CRUD: Yangi qo'shish, Tahrirlash, O'chirish)
   - Mentorlarni boshqarish (Yangi qo'shish, O'chirish)
   - Telegram Bot token va Chat ID ni kiritish hamda bitta bosishda "Test xabari" yuborib tekshirish

9. **🌐 3 xil Til Dastagi (UZ / RU / EN):**
   - O'zbekcha (UZ)
   - Русский (RU)
   - English (EN)
   - Barcha sarlavhalar, tugmalar, formalar va modal oynalar to'liq tarjima qilingan.

10. **🌓 Dark / Light Rejim:**
    - Bir bosishda qorong'u yoki yorug' rejimga o'tish (Sozlama xotirada saqlanadi).

11. **💬 Fikrlar Slideri (Testimonials):**
    - Avtomatik 6 soniyada aylanuvchi va qo'lda boshqariladigan silliq slayder.

12. **📰 Blog & FAQ:**
    - Zamonaviy IT maqolalari va ularni to'liq o'qish modali
    - Silliq ochiluvchi FAQ akkordeon

---

## 🛠 Ishlatilgan Texnologiyalar

- **Frontend:** HTML5, CSS3, JavaScript (ES6+), Tailwind CSS v3.4, Font Awesome 6, Google Fonts (*Plus Jakarta Sans*, *JetBrains Mono*)
- **Backend:** Node.js (v22), Express.js, CORS, Dotenv
- **Ma'lumotlar Bazasi:** JSON File Database (`data/database.json`) — tashqi DB server talab qilmaydi, darhol ishga tushadi
- **Integratsiya:** Telegram Bot API (HTML formatdagi chiroyli xabarlar)

---

## 🚀 Ishga Tushirish Qo'llanmasi

### 1. Bog'liqliklarni o'rnatish
Loyiha papkasida terminalda quyidagi buyruqni bering:
```bash
npm install
```

### 2. Serverni ishga tushirish
```bash
npm start
```
Yoki o'zgarishlarni avtomatik kuzatish bilan:
```bash
npm run dev
```

### 3. Brauzerda ochish
- **Asosiy Sayt:** [http://localhost:3000](http://localhost:3000)
- **Admin Boshqaruv Paneli:** [http://localhost:3000/admin](http://localhost:3000/admin)

---

## 🔑 Admin Panel Ma'lumotlari

- **URL:** `http://localhost:3000/admin`
- **Login:** `admin`
- **Parol:** `meta2025` *(Admin paneldagi sozlamalar bo'limidan o'zgartirish mumkin)*

---

## 🤖 Telegram Botni Ulash

Arizalar sizning Telegram guruhingiz yoki shaxsiy profilingizga borishi uchun:

1. Telegramda [@BotFather](https://t.me/BotFather) ga kiring va `/newbot` buyrug'i orqali yangi bot yarating.
2. Bot tokenini nusxalab oling (masalan: `7123456789:AAHk_...`).
3. O'z Telegram Chat ID ingizni bilish uchun [@userinfobot](https://t.me/userinfobot) ga `/start` yuboring.
4. Ushbu ma'lumotlarni:
   - Yo `.env` fayliga kiriting:
     ```env
     TELEGRAM_BOT_TOKEN=sizning_tokeningiz
     TELEGRAM_CHAT_ID=sizning_chat_idingiz
     ```
   - Yoki to'g'ridan-to'g'ri **Admin Panel** (`http://localhost:3000/admin`) -> **Telegram & Sozlamalar** bo'limiga yozib, **"Test Xabar Yuborish"** tugmasini bosing!

---

## 📂 Loyiha Fayl Tuzilmasi

```
Meta saytini yaratish/
├── package.json               # Loyiha paketlari va skriptlar
├── server.js                  # Express backend server va Telegram integratsiyasi
├── .env                       # Xavfsiz maxfiy sozlamalar (token, port, parol)
├── .env.example               # Namunaviy muhit sozlamalari
├── data/
│   └── database.json          # Barcha kurslar, mentorlar, arizalar va sharhlar bazasi
├── public/
│   ├── index.html             # Asosiy veb-sayt sahifasi
│   ├── admin.html             # Professional Admin boshqaruv paneli
│   ├── 404.html               # 404 xatolik sahifasi
│   ├── css/
│   │   ├── style.css          # Asosiy sayt vizual dizayni va animatsiyalari
│   │   └── admin.css          # Admin panel stillari
│   ├── js/
│   │   ├── app.js             # Asosiy frontend dasturiy mantig'i
│   │   ├── translations.js    # UZ, RU, EN to'liq tarjima lug'ati
│   │   ├── particles.js       # Interaktiv neon zarralar kanvasi
│   │   └── admin.js           # Admin panel boshqaruvi va API so'rovlari
│   └── assets/
│       └── logo.svg           # META IT SCHOOL vektor logotipi
└── README.md                  # Loyiha hujjatlari
```

Loyiha to'liq tayyor, barcha tugmalar, filtrlar, formalar va API lari 100% ishchi holatda!
