const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'data', 'database.json');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Database helper functions
function readDb() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      return {
        settings: {},
        courses: [],
        mentors: [],
        studentResults: [],
        testimonials: [],
        blogs: [],
        faq: [],
        applications: [],
        contacts: []
      };
    }
    const raw = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading database:', err);
    return null;
  }
}

function writeDb(data) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing database:', err);
    return false;
  }
}

// Telegram message sender helper
async function sendTelegramNotification(text) {
  const db = readDb();
  const token = process.env.TELEGRAM_BOT_TOKEN || (db && db.settings && db.settings.telegramBotToken);
  const chatId = process.env.TELEGRAM_CHAT_ID || (db && db.settings && db.settings.telegramChatId);

  if (!token || !chatId) {
    console.log('\n[TELEGRAM SIMULATION - Bot token yoki Chat ID belgilanmagan]');
    console.log('Xabar matni:\n' + text);
    console.log('[Eslatma: Haqiqiy Telegram xabarlarini olish uchun .env faylida yoki Admin Panel sozlamalarida TELEGRAM_BOT_TOKEN va TELEGRAM_CHAT_ID ni kiriting]\n');
    return { sent: false, reason: 'credentials_missing', simulated: true };
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML'
      })
    });
    const result = await res.json();
    if (result.ok) {
      return { sent: true, result };
    } else {
      console.error('Telegram API error:', result);
      return { sent: false, error: result.description };
    }
  } catch (err) {
    console.error('Telegram send failed:', err.message);
    return { sent: false, error: err.message };
  }
}

// Admin Auth Helper
function verifyAdmin(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ success: false, error: 'Avtorizatsiyadan o\'tilmagan' });
  }
  const token = authHeader.replace('Bearer ', '');
  if (!token || !token.startsWith('meta_admin_session_')) {
    return res.status(403).json({ success: false, error: 'Yaroqsiz token' });
  }
  next();
}

/* =========================================================
   PUBLIC API ENDPOINTS
========================================================= */

// Get all courses
app.get('/api/courses', (req, res) => {
  const db = readDb();
  res.json({ success: true, courses: db ? db.courses : [] });
});

// Get all mentors
app.get('/api/mentors', (req, res) => {
  const db = readDb();
  res.json({ success: true, mentors: db ? db.mentors : [] });
});

// Get student results / portfolio projects
app.get('/api/student-results', (req, res) => {
  const db = readDb();
  res.json({ success: true, studentResults: db ? db.studentResults : [] });
});

// Get testimonials
app.get('/api/testimonials', (req, res) => {
  const db = readDb();
  res.json({ success: true, testimonials: db ? db.testimonials : [] });
});

// Get blogs
app.get('/api/blogs', (req, res) => {
  const db = readDb();
  res.json({ success: true, blogs: db ? db.blogs : [] });
});

// Get FAQ
app.get('/api/faq', (req, res) => {
  const db = readDb();
  res.json({ success: true, faq: db ? db.faq : [] });
});

// Get public settings (contacts, links, etc.)
app.get('/api/settings', (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ success: false, error: 'Database xatosi' });
  const safeSettings = { ...db.settings };
  delete safeSettings.telegramBotToken;
  delete safeSettings.adminPassword;
  res.json({ success: true, settings: safeSettings });
});

// Student Enrollment / Consultation Application (POST /api/apply)
app.post('/api/apply', async (req, res) => {
  try {
    const { name, phone, course, age, notes, type } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Ismingizni kiriting!' });
    }
    if (!phone || !phone.trim() || phone.length < 9) {
      return res.status(400).json({ success: false, error: 'Telefon raqamingizni to\'liq kiriting!' });
    }

    const db = readDb();
    if (!db) return res.status(500).json({ success: false, error: 'Baza bilan bog\'lanishda xatolik' });

    const newApplication = {
      id: 'app-' + Date.now(),
      name: name.trim(),
      phone: phone.trim(),
      course: course || 'Umumiy / Konsultatsiya',
      age: age ? Number(age) : null,
      notes: notes ? notes.trim() : '',
      type: type || 'Kursga yozilish',
      status: 'Yangi',
      createdAt: new Date().toISOString()
    };

    if (!Array.isArray(db.applications)) {
      db.applications = [];
    }
    db.applications.unshift(newApplication);
    writeDb(db);

    // Format rich Telegram message
    const formattedDate = new Date().toLocaleString('uz-UZ', {
      timeZone: 'Asia/Tashkent',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    const telegramText =
      `🚀 <b>YANGI ARIZA TUSHDI!</b>\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 <b>Ism:</b> ${newApplication.name}\n` +
      `📞 <b>Telefon:</b> <code>${newApplication.phone}</code>\n` +
      `📚 <b>Kurs:</b> <b>${newApplication.course}</b>\n` +
      `🎂 <b>Yoshi:</b> ${newApplication.age ? newApplication.age + ' yosh' : 'Belgilanmagan'}\n` +
      `📋 <b>Turi:</b> ${newApplication.type}\n` +
      (newApplication.notes ? `💬 <b>Izoh:</b> <i>${newApplication.notes}</i>\n` : '') +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `🕒 <b>Vaqt:</b> ${formattedDate}\n` +
      `⚡ <i>META IT SCHOOL Web Platformasi</i>`;

    const telegramResult = await sendTelegramNotification(telegramText);

    res.json({
      success: true,
      message: 'Arizangiz muvaffaqiyatli qabul qilindi! Tez orada mutaxassisimiz siz bilan bog\'lanadi.',
      applicationId: newApplication.id,
      telegramDelivered: telegramResult.sent
    });
  } catch (error) {
    console.error('Apply error:', error);
    res.status(500).json({ success: false, error: 'Server xatosi yuz berdi' });
  }
});

// Contact Message Submission (POST /api/contact)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Ismingizni kiriting' });
    }
    if (!phone || !phone.trim()) {
      return res.status(400).json({ success: false, error: 'Telefon raqamingizni kiriting' });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Xabar matnini kiriting' });
    }

    const db = readDb();
    const newContact = {
      id: 'cnt-' + Date.now(),
      name: name.trim(),
      email: email ? email.trim() : '',
      phone: phone.trim(),
      subject: subject ? subject.trim() : 'Saytdan aloqa xabari',
      message: message.trim(),
      createdAt: new Date().toISOString()
    };

    if (!Array.isArray(db.contacts)) {
      db.contacts = [];
    }
    db.contacts.unshift(newContact);
    writeDb(db);

    const telegramText =
      `📩 <b>YANGI ALOQA XABARI!</b>\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 <b>Ism:</b> ${newContact.name}\n` +
      `📞 <b>Telefon:</b> <code>${newContact.phone}</code>\n` +
      (newContact.email ? `📧 <b>Email:</b> ${newContact.email}\n` : '') +
      `📌 <b>Mavzu:</b> ${newContact.subject}\n` +
      `💬 <b>Xabar:</b>\n<i>${newContact.message}</i>\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `🕒 <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}`;

    await sendTelegramNotification(telegramText);

    res.json({
      success: true,
      message: 'Xabaringiz muvaffaqiyatli yetkazildi! Rahmat.'
    });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ success: false, error: 'Serverda xatolik yuz berdi' });
  }
});

/* =========================================================
   ADMIN PANEL ENDPOINTS
========================================================= */

// Admin Login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  const db = readDb();
  const validPassword = process.env.ADMIN_PASSWORD || (db && db.settings && db.settings.adminPassword) || 'meta2025';

  if ((username === 'admin' || username === 'meta') && password === validPassword) {
    const token = 'meta_admin_session_' + Date.now() + '_' + Math.random().toString(36).substring(2, 10);
    res.json({
      success: true,
      token,
      message: 'Admin tizimiga xush kelibsiz!'
    });
  } else {
    res.status(401).json({
      success: false,
      error: 'Login yoki parol noto\'g\'ri!'
    });
  }
});

// Admin Dashboard Overview Statistics
app.get('/api/admin/stats', verifyAdmin, (req, res) => {
  const db = readDb();
  if (!db) return res.status(500).json({ success: false, error: 'Baza topilmadi' });

  const totalApplications = (db.applications || []).length;
  const newApplications = (db.applications || []).filter(a => a.status === 'Yangi').length;
  const acceptedApplications = (db.applications || []).filter(a => a.status === 'Qabul qilindi').length;
  const totalCourses = (db.courses || []).length;
  const totalMentors = (db.mentors || []).length;
  const totalContacts = (db.contacts || []).length;

  res.json({
    success: true,
    stats: {
      totalApplications,
      newApplications,
      acceptedApplications,
      totalCourses,
      totalMentors,
      totalContacts,
      conversionRate: totalApplications > 0 ? Math.round((acceptedApplications / totalApplications) * 100) : 0
    }
  });
});

// Applications Management
app.get('/api/admin/applications', verifyAdmin, (req, res) => {
  const db = readDb();
  res.json({ success: true, applications: db ? db.applications : [] });
});

app.patch('/api/admin/applications/:id', verifyAdmin, (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const db = readDb();

  const appItem = (db.applications || []).find(a => a.id === id);
  if (!appItem) {
    return res.status(404).json({ success: false, error: 'Ariza topilmadi' });
  }

  appItem.status = status;
  appItem.updatedAt = new Date().toISOString();
  writeDb(db);

  res.json({ success: true, application: appItem });
});

app.delete('/api/admin/applications/:id', verifyAdmin, (req, res) => {
  const { id } = req.params;
  const db = readDb();
  const initialLength = (db.applications || []).length;
  db.applications = (db.applications || []).filter(a => a.id !== id);

  if (db.applications.length === initialLength) {
    return res.status(404).json({ success: false, error: 'Ariza topilmadi' });
  }

  writeDb(db);
  res.json({ success: true, message: 'Ariza o\'chirildi' });
});

// Courses CRUD
app.post('/api/admin/courses', verifyAdmin, (req, res) => {
  const { title, category, duration, level, price, description, badge, technologies } = req.body;
  if (!title || !price) {
    return res.status(400).json({ success: false, error: 'Kurs nomi va narxini kiriting' });
  }

  const db = readDb();
  const newCourse = {
    id: 'c' + Date.now(),
    title: title.trim(),
    category: category || 'frontend',
    duration: duration || '4 oy',
    level: level || 'Boshlang\'ich',
    price: price.trim(),
    rating: 5.0,
    studentsCount: 0,
    badge: badge || 'Yangi',
    icon: 'code',
    color: 'from-blue-500 to-indigo-600',
    description: description || '',
    technologies: Array.isArray(technologies) ? technologies : (technologies ? technologies.split(',').map(t => t.trim()) : ['HTML', 'CSS', 'JS']),
    syllabus: [
      { month: '1-oy', title: 'Asoslar va Kirish' },
      { month: '2-oy', title: 'Amaliy Mashg\'ulotlar' },
      { month: '3-oy', title: 'Loyiha va Diplom ishi' }
    ]
  };

  if (!Array.isArray(db.courses)) db.courses = [];
  db.courses.push(newCourse);
  writeDb(db);

  res.json({ success: true, course: newCourse });
});

app.put('/api/admin/courses/:id', verifyAdmin, (req, res) => {
  const { id } = req.params;
  const db = readDb();
  const index = (db.courses || []).findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Kurs topilmadi' });
  }

  db.courses[index] = { ...db.courses[index], ...req.body, id };
  writeDb(db);
  res.json({ success: true, course: db.courses[index] });
});

app.delete('/api/admin/courses/:id', verifyAdmin, (req, res) => {
  const { id } = req.params;
  const db = readDb();
  const initialLength = (db.courses || []).length;
  db.courses = (db.courses || []).filter(c => c.id !== id);

  if (db.courses.length === initialLength) {
    return res.status(404).json({ success: false, error: 'Kurs topilmadi' });
  }

  writeDb(db);
  res.json({ success: true, message: 'Kurs o\'chirildi' });
});

// Mentors CRUD
app.post('/api/admin/mentors', verifyAdmin, (req, res) => {
  const { name, role, company, experience, bio, avatar, tags } = req.body;
  if (!name || !role) {
    return res.status(400).json({ success: false, error: 'Ism va mutaxassislikni kiriting' });
  }

  const db = readDb();
  const newMentor = {
    id: 'm' + Date.now(),
    name: name.trim(),
    role: role.trim(),
    company: company || 'IT Kompaniya',
    experience: experience || '3+ yil',
    avatar: avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: bio || '',
    tags: Array.isArray(tags) ? tags : (tags ? tags.split(',').map(t => t.trim()) : ['Mentor']),
    socials: {
      telegram: 'https://t.me',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  };

  if (!Array.isArray(db.mentors)) db.mentors = [];
  db.mentors.push(newMentor);
  writeDb(db);

  res.json({ success: true, mentor: newMentor });
});

app.delete('/api/admin/mentors/:id', verifyAdmin, (req, res) => {
  const { id } = req.params;
  const db = readDb();
  db.mentors = (db.mentors || []).filter(m => m.id !== id);
  writeDb(db);
  res.json({ success: true, message: 'Mentor o\'chirildi' });
});

// Settings Management (Telegram Bot config & Academy info)
app.get('/api/admin/settings', verifyAdmin, (req, res) => {
  const db = readDb();
  const settings = { ...(db ? db.settings : {}) };
  // Check if env holds token
  settings.hasEnvTelegramToken = Boolean(process.env.TELEGRAM_BOT_TOKEN);
  settings.hasEnvTelegramChatId = Boolean(process.env.TELEGRAM_CHAT_ID);
  res.json({ success: true, settings });
});

app.post('/api/admin/settings', verifyAdmin, (req, res) => {
  const { phone, email, telegram, instagram, youtube, address, telegramBotToken, telegramChatId, newPassword } = req.body;
  const db = readDb();
  if (!db) return res.status(500).json({ success: false, error: 'Baza topilmadi' });

  if (phone) db.settings.phone = phone;
  if (email) db.settings.email = email;
  if (telegram) db.settings.telegram = telegram;
  if (instagram) db.settings.instagram = instagram;
  if (youtube) db.settings.youtube = youtube;
  if (address) db.settings.address = address;
  if (telegramBotToken !== undefined) db.settings.telegramBotToken = telegramBotToken.trim();
  if (telegramChatId !== undefined) db.settings.telegramChatId = telegramChatId.trim();
  if (newPassword && newPassword.trim()) db.settings.adminPassword = newPassword.trim();

  writeDb(db);
  res.json({ success: true, message: 'Sozlamalar yangilandi!' });
});

// Test Telegram Message
app.post('/api/admin/test-telegram', verifyAdmin, async (req, res) => {
  const text =
    `🔔 <b>META IT SCHOOL — TEST TELEGRAM XABARI</b>\n\n` +
    `✅ Telegram bot ulanishi muvaffaqiyatli tekshirildi!\n` +
    `Platformadan keladigan barcha arizalar va murojaatlar ushbu chatga yetib keladi.\n\n` +
    `⏰ Vaqt: ${new Date().toLocaleString('uz-UZ')}`;

  const result = await sendTelegramNotification(text);
  if (result.sent) {
    res.json({ success: true, message: 'Test xabari Telegramga muvaffaqiyatli yuborildi!' });
  } else {
    res.status(400).json({
      success: false,
      error: result.error || 'Telegram xabarini yuborib bo\'lmadi. Token va Chat ID to\'g\'riligini tekshiring.'
    });
  }
});

/* =========================================================
   ROUTES & STATIC HANDLERS
========================================================= */

// Direct route to Admin Panel
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Custom 404 handler for unknown pages
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 META IT SCHOOL SERVER MUVOFAQIYATLI ISHGA TUSHDI!`);
  console.log(`🌐 Sayt manzili:        http://localhost:${PORT}`);
  console.log(`🔑 Admin paneli:        http://localhost:${PORT}/admin`);
  console.log(`======================================================\n`);
});
