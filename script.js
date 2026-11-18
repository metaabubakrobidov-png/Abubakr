// --- DATABASE & PRODUCTS ---
const products = [
    // Lavashlar
    { id: 1, name: "Klassik Lavash", category: "lavash", price: 38000, desc: "Mozzarella pishlog'i, mol go'shti, maxsus sous va batat.", img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop", rating: 4.9 },
    { id: 2, name: "Achchiq Chicken Lavash", category: "lavash", price: 36000, desc: "Tovuq go'shti, jalapeno qalampiri, maxsus o'tkir sous.", img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=600&auto=format&fit=crop", rating: 4.8 },
    { id: 3, name: "Pishloqli Mini Lavash", category: "lavash", price: 30000, desc: "Mol go'shti va ko'p pishloqli maxsus mini lavash.", img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=600&auto=format&fit=crop", rating: 4.7 },

    // Burgerlar
    { id: 4, name: "Andijon Mega Burger", category: "burger", price: 45000, desc: "Ikki karra mol go'shti kotleti, cheddar pishlog'i, barbaxyu.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop", rating: 5.0 },
    { id: 5, name: "Cheese Burger", category: "burger", price: 32000, desc: "Sharqona uslubda tayyorlangan yumshoq bulochka va pishloq.", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop", rating: 4.7 },
    { id: 6, name: "Double Beef Burger", category: "burger", price: 48000, desc: "Ikki karra go'sht, maxsus sous va yangi sabzavotlar.", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600&auto=format&fit=crop", rating: 4.9 },
    { id: 7, name: "Chicken Burger", category: "burger", price: 34000, desc: "Qarsildoq tovuq filesi va maxsus burger sousi.", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=600&auto=format&fit=crop", rating: 4.8 },

    // Hot-doglar (Royal Hot-dog uchun aynan aniq hotdog rasmi qo'yildi)
    { id: 8, name: "Super Hot-Dog", category: "hotdog", price: 22000, desc: "Maxsus Bavariya sosiskasi, xantal va ketchup uyg'unligi.", img: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=600&auto=format&fit=crop", rating: 4.6 },
    { id: 9, name: "Royal Hot-Dog", category: "hotdog", price: 28000, desc: "Katta sosiska, erigan pishloq va maxsus sous bilan.", img: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=600&auto=format&fit=crop", rating: 4.8 },
    { id: 10, name: "French Hot-Dog", category: "hotdog", price: 24000, desc: "Fransuzcha bulochka va mazali sosiska.", img: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?q=80&w=600&auto=format&fit=crop", rating: 4.7 },

    // Pitsalar
    { id: 11, name: "Pepperoni Pizza", category: "pizza", price: 75000, desc: "Ko'p pishloq, italyancha kolbasa va maxsus pomidor sousi.", img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=600&auto=format&fit=crop", rating: 4.9 },
    { id: 12, name: "Margo Pizza", category: "pizza", price: 65000, desc: "Klassik mozzarella pishlog'i va maxsus pitstsa sousi.", img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=600&auto=format&fit=crop", rating: 4.7 },
    { id: 13, name: "Combo Chicken Pizza", category: "pizza", price: 82000, desc: "Tovuq go'shti, qo'ziqorin, zaytun va mozzarella pishlog'i.", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop", rating: 4.9 },

    // Ichimliklar
    { id: 14, name: "Fanta Orange 0.5L", category: "drinks", price: 8000, desc: "Muzdek salqin apelsinli tetiklashtiruvchi gazli ichimlik.", img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?q=80&w=600&auto=format&fit=crop", rating: 4.9 },
    { id: 15, name: "Coca-Cola 0.5L", category: "drinks", price: 8000, desc: "Klassik muzdek salqin gazli ichimlik.", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop", rating: 4.9 },
    { id: 16, name: "Sprite 0.5L", category: "drinks", price: 8000, desc: "Limon-laym tamli tetiklashtiruvchi ichimlik.", img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?q=80&w=600&auto=format&fit=crop", rating: 4.7 },
    { id: 17, name: "Muzlatilgan Mojito", category: "drinks", price: 15000, desc: "Yalpiz va limondan tayyorlangan maxsus kokteyl.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop", rating: 5.0 },

    // Shirinliklar
    { id: 18, name: "Chizkeyk Dessert", category: "desserts", price: 25000, desc: "Nozik Filadelfiya pishlog'idan tayyorlangan shirinlik.", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop", rating: 4.9 }
];

// --- i18n TRANSLATIONS ---
const translations = {
    uz: {
        nav_home: "Bosh sahifa",
        nav_menu: "Menyu",
        nav_promos: "Aksiyalar",
        nav_game: "Omadli G‘ildirak",
        nav_about: "Biz haqimizda",
        nav_contact: "Aloqa",
        hero_badge: "🔥 Andijonda #1 Raqamli Fast Food",
        hero_title: "ENG MAZALI FAST FOOD ANDIJONDA!",
        hero_subtitle: "Sevimli ta'mingizni biz bilan kashf eting! Haqiqiy sharqona lazzat va zamonaviy yondashuv uyg'unligi.",
        btn_menu: "Menyuni ko‘rish",
        btn_order: "Buyurtma berish",
        promo_tag: "MAXSUS TAKLIFLAR",
        promo_title: "Bizning Aksiyalarimiz",
        p1_tag: "70+ Yosh",
        p1_title: "70+ YOSH UCHUN SOVG‘A!",
        p1_desc: "70 yoshdan katta mijozlarimizga barcha sovuq ichimliklar mutlaqo bepul!",
        p2_tag: "100 Yosh",
        p2_title: "100 YOSHLI OTAJONLAR UCHUN!",
        p2_desc: "100 yoshga to'lgan otangizni restoranimizga olib kelsangiz, barcha mahsulotlar bepul!",
        p3_tag: "Oilaviy",
        p3_title: "OILAVIY COMBO!",
        p3_desc: "3 ta burger va 3 ta ichimlik buyurtma qiling, 1 ta fri sovg‘a!",
        p4_tag: "Tushlik",
        p4_title: "TUSHLIK CHEGIRMASI!",
        p4_desc: "Har kuni soat 12:00 dan 15:00 gacha tanlangan taomlarga 15% chegirma!",
        btn_claim: "Aksiyadan foydalanish",
        menu_tag: "MAHSULOTLAR",
        menu_title: "Bizning Mazali Menuyimiz",
        cat_all: "Barchasi",
        cat_lavash: "Lavashlar",
        cat_burger: "Burgerlar",
        cat_hotdog: "Hot-doglar",
        cat_pizza: "Pitsalar",
        cat_drinks: "Ichimliklar",
        cat_desserts: "Shirinliklar",
        wheel_tag: "OMADLI O‘YIN",
        wheel_title: "Omad G‘ildiragini Aylantiring!",
        wheel_desc: "Har kuni 1 marta bepul g'ildirakni aylantirib, mazali sovg'alar va chegirmalarni yutib oling!",
        spin_btn: "AYLANTIRISH",
        wheel_1: "10% Chegirma",
        wheel_2: "Bepul Fri",
        wheel_3: "15% Chegirma",
        wheel_4: "Bepul Ichimlik",
        wheel_5: "20% Chegirma",
        wheel_6: "Omad Keyin",
        about_tag: "BIZ HAQIMIZDA",
        about_title: "Andijon Shahridagi Eng Sifatli Fast Food Makoni",
        about_desc: "\"ANDIJON FAST FOOD\" – bu shunchaki ovqatlanish joyi emas, balki oilangiz va do'stlaringiz bilan mazali vaqt o'tkazadigan maskan.",
        f1_title: "Tezkor Yetkazib Berish",
        f1_desc: "Andijon shahri bo'ylab 30 daqiqada issiq holda yetkazamiz.",
        f2_title: "100% Halol va Toza",
        f2_desc: "Barcha mahsulotlar qattiq sanitariya nazoratidan o'tadi.",
        contact_tag: "ALOQA VA MANZIL",
        contact_title: "Biz Bilan Bog‘laning",
        c_addr_title: "Manzilimiz",
        c_addr_desc: "Andijon shahri, Bobur shoh ko'chasi, 15-uy",
        c_phone_title: "Telefon Raqam",
        c_time_title: "Ish Vaqti",
        c_time_desc: "Har kuni: 09:00 - 03:00 (Tun-u kun)",
        f_links: "Tezkor Havolalar",
        f_cat: "Kategoriyalar",
        f_subscribe: "Yangiliklarga Obuna",
        btn_sub: "Yuborish",
        cart_title: "Savatcha",
        cart_empty: "Savatchangiz bo'sh",
        cart_total: "Umumiy narx:",
        btn_checkout: "Buyurtma Berish",
        footer_desc: "Andijon shahrining eng mazali va sifatli fast food tarmog'i.",
        ph_name: "Ismingiz...",
        ph_phone: "Telefon raqam (+998...)",
        ph_address: "Yetkazib berish manzili (Andijon)..."
    },
    ru: {
        nav_home: "Главная",
        nav_menu: "Меню",
        nav_promos: "Акции",
        nav_game: "Колесо Фортуны",
        nav_about: "О нас",
        nav_contact: "Контакты",
        hero_badge: "🔥 Фастфуд №1 в Андижане",
        hero_title: "САМЫЙ ВКУСНЫЙ ФАСТФУД В АНДИЖАНЕ!",
        hero_subtitle: "Откройте для себя любимый вкус с нами! Сочетание истинно восточного вкуса и современного подхода.",
        btn_menu: "Смотреть меню",
        btn_order: "Заказать",
        promo_tag: "СПЕЦПРЕДЛОЖЕНИЯ",
        promo_title: "Наши Акции",
        p1_tag: "70+ Лет",
        p1_title: "ПОДАРОК ДЛЯ 70+!",
        p1_desc: "Всем гостям старше 70 лет холодные напитки бесплатно!",
        p2_tag: "100 Лет",
        p2_title: "ДЛЯ 100-ЛЕТНИХ ДОЛГОЖИТЕЛЕЙ!",
        p2_desc: "Приведите отца, которому 100 лет, вся еда бесплатно!",
        p3_tag: "Семейный",
        p3_title: "СЕМЕЙНОЕ КОМБО!",
        p3_desc: "Закажите 3 бургера и 3 напитка, картофель фри в подарок!",
        p4_tag: "Обед",
        p4_title: "ОБЕДЕННАЯ СКИДКА!",
        p4_desc: "Каждый день с 12:00 до 15:00 скидка 15% на избранные блюда!",
        btn_claim: "Воспользоваться",
        menu_tag: "ПРОДУКТЫ",
        menu_title: "Наше Вкусное Меню",
        cat_all: "Все",
        cat_lavash: "Лаваш",
        cat_burger: "Бургеры",
        cat_hotdog: "Хот-доги",
        cat_pizza: "Пицца",
        cat_drinks: "Напитки",
        cat_desserts: "Десерты",
        wheel_tag: "ИГРА",
        wheel_title: "Крутите Колесо Фортуны!",
        wheel_desc: "Крутите колесо 1 раз в день бесплатно и выигрывайте призы!",
        spin_btn: "КРУТИТЬ",
        wheel_1: "Скидка 10%",
        wheel_2: "Бесплатный фри",
        wheel_3: "Скидка 15%",
        wheel_4: "Беспл. напиток",
        wheel_5: "Скидка 20%",
        wheel_6: "Не повезло",
        about_tag: "О НАС",
        about_title: "Лучшее Качество Фастфуда в Андижане",
        about_desc: "\"ANDIJON FAST FOOD\" — это уютное пространство для всей семьи.",
        f1_title: "Быстрая доставка",
        f1_desc: "Доставляем горячим по всему Андижану за 30 минут.",
        f2_title: "100% Халяль и чистота",
        f2_desc: "Все продукты проходят строгий санитарный контроль.",
        contact_tag: "КОНТАКТЫ",
        contact_title: "Свяжитесь с Нами",
        c_addr_title: "Наш адрес",
        c_addr_desc: "г. Андижан, ул. Бобур Шох, 15",
        c_phone_title: "Телефон",
        c_time_title: "Режим работы",
        c_time_desc: "Каждый день: 09:00 - 03:00",
        f_links: "Ссылки",
        f_cat: "Категории",
        f_subscribe: "Подписка",
        btn_sub: "Отправить",
        cart_title: "Корзина",
        cart_empty: "Ваша корзина пуста",
        cart_total: "Итого:",
        btn_checkout: "Оформить заказ",
        footer_desc: "Сеть фастфуда премиум-класса в Андижане.",
        ph_name: "Ваше имя...",
        ph_phone: "Номер телефона (+998...)",
        ph_address: "Адрес доставки (Андижан)..."
    },
    en: {
        nav_home: "Home",
        nav_menu: "Menu",
        nav_promos: "Promotions",
        nav_game: "Lucky Wheel",
        nav_about: "About Us",
        nav_contact: "Contact",
        hero_badge: "#1 Fast Food in Andijan",
        hero_title: "THE MOST DELICIOUS FAST FOOD IN ANDIJAN!",
        hero_subtitle: "Discover your favorite taste with us! A blend of oriental flavor and modern approach.",
        btn_menu: "View Menu",
        btn_order: "Order Now",
        promo_tag: "SPECIAL OFFERS",
        promo_title: "Our Promotions",
        p1_tag: "70+ Years",
        p1_title: "GIFT FOR 70+!",
        p1_desc: "All cold drinks are free for guests over 70 years old!",
        p2_tag: "100 Years",
        p2_title: "FOR 100-YEAR-OLD ELDERS!",
        p2_desc: "Bring your 100-year-old father and all items will be free!",
        p3_tag: "Family",
        p3_title: "FAMILY COMBO!",
        p3_desc: "Order 3 burgers and 3 drinks, get 1 large French fries free!",
        p4_tag: "Lunch",
        p4_title: "LUNCH DISCOUNT!",
        p4_desc: "Every day from 12:00 to 15:00 get 15% off on selected dishes!",
        btn_claim: "Claim Offer",
        menu_tag: "PRODUCTS",
        menu_title: "Our Delicious Menu",
        cat_all: "All",
        cat_lavash: "Lavash",
        cat_burger: "Burgers",
        cat_hotdog: "Hot Dogs",
        cat_pizza: "Pizza",
        cat_drinks: "Drinks",
        cat_desserts: "Desserts",
        wheel_tag: "LUCKY GAME",
        wheel_title: "Spin the Lucky Wheel!",
        wheel_desc: "Spin the wheel once a day for free and win delicious prizes!",
        spin_btn: "SPIN",
        wheel_1: "10% Discount",
        wheel_2: "Free Fries",
        wheel_3: "15% Discount",
        wheel_4: "Free Drink",
        wheel_5: "20% Discount",
        wheel_6: "Try Again",
        about_tag: "ABOUT US",
        about_title: "The Best Quality Fast Food in Andijan",
        about_desc: "\"ANDIJON FAST FOOD\" is a cozy dining place for your family.",
        f1_title: "Fast Delivery",
        f1_desc: "Hot delivery across Andijan within 30 minutes.",
        f2_title: "100% Halal & Clean",
        f2_desc: "All products undergo strict sanitary control.",
        contact_tag: "CONTACT & LOCATION",
        contact_title: "Get In Touch",
        c_addr_title: "Our Address",
        c_addr_desc: "Andijan city, Bobur shoh street, 15",
        c_phone_title: "Phone Number",
        c_time_title: "Working Hours",
        c_time_desc: "Every day: 09:00 - 03:00",
        f_links: "Quick Links",
        f_cat: "Categories",
        f_subscribe: "Newsletter",
        btn_sub: "Subscribe",
        cart_title: "Cart",
        cart_empty: "Your cart is empty",
        cart_total: "Total:",
        btn_checkout: "Checkout",
        footer_desc: "Premium fast food network in Andijan.",
        ph_name: "Your name...",
        ph_phone: "Phone number (+998...)",
        ph_address: "Delivery address (Andijan)..."
    }
};

let cart = JSON.parse(localStorage.getItem('andijan_cart')) || [];
let currentLang = localStorage.getItem('andijan_lang') || 'uz';
let currentTheme = localStorage.getItem('andijan_theme') || 'dark';

// --- DOM ELEMENTS ---
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const closeCart = document.getElementById('closeCart');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartCount = document.getElementById('cartCount');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const themeToggle = document.getElementById('themeToggle');
const langSwitch = document.getElementById('langSwitch');
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    setTheme(currentTheme);
    setLanguage(currentLang);
    renderProducts('all');
    updateCartUI();

    cartBtn.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
    themeToggle.addEventListener('click', switchTheme);
    langSwitch.addEventListener('change', (e) => setLanguage(e.target.value));
    hamburger.addEventListener('click', toggleMobileMenu);

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderProducts(e.target.getAttribute('data-filter'));
        });
    });

    document.getElementById('checkoutBtn').addEventListener('click', processCheckout);
    document.getElementById('spinBtn').addEventListener('click', spinWheel);
});

// --- RENDER PRODUCTS ---
function renderProducts(category) {
    productsGrid.innerHTML = '';
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">
                <img src="${p.img}" alt="${p.name}">
                <div class="product-rating"><i class="fa-solid fa-star"></i> ${p.rating}</div>
            </div>
            <div class="product-body">
                <div>
                    <h3 class="product-title">${p.name}</h3>
                    <p class="product-desc">${p.desc}</p>
                </div>
                <div class="product-footer">
                    <span class="product-price">${p.price.toLocaleString()} so'm</span>
                    <button class="btn-sm btn-primary" onclick="addToCart(${p.id})"><i class="fa-solid fa-plus"></i> Qo'shish</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

function filterCategory(cat) {
    document.querySelectorAll('.filter-btn').forEach(b => {
        if(b.getAttribute('data-filter') === cat) b.click();
    });
}

// --- CART LOGIC ---
function toggleCart() {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if(existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveCart();
    updateCartUI();
    showToast(`${product.name} savatchaga qo'shildi!`);
}

function updateQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if(item) {
        item.qty += change;
        if(item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('andijan_cart', JSON.stringify(cart));
}

function updateCartUI() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    
    if(cart.length === 0) {
        cartItemsContainer.innerHTML = `<div class="empty-cart">${translations[currentLang].cart_empty}</div>`;
        cartTotalPrice.textContent = `0 so'm`;
        return;
    }

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-info" style="flex-grow:1;">
                <h4>${item.name}</h4>
                <div class="price">${(item.price * item.qty).toLocaleString()} so'm</div>
                <div class="cart-item-controls">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartTotalPrice.textContent = `${total.toLocaleString()} so'm`;
}

// --- CHECKOUT ---
function processCheckout() {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();

    if(!name || !phone || !address) {
        alert('Iltimos, barcha maydonlarni to\'ldiring!');
        return;
    }

    if(cart.length === 0) {
        alert('Savatchangiz bo\'sh!');
        return;
    }

    let orderDetails = `🛒 Yangi buyurtma - ANDIJON FAST FOOD\n\n👤 Mijoz: ${name}\n📞 Tel: ${phone}\n📍 Manzil: ${address}\n\n`;
    let total = 0;
    cart.forEach(item => {
        orderDetails += `- ${item.name} x ${item.qty} = ${(item.price * item.qty).toLocaleString()} so'm\n`;
        total += item.price * item.qty;
    });
    orderDetails += `\n💰 Umumiy summa: ${total.toLocaleString()} so'm`;

    console.log("Telegram Botga yuborilayotgan xabar:\n", orderDetails);
    
    alert('Buyurtmangiz muvaffaqiyatli qabul qilindi! Tez orada operatorlarimiz bog\'lanishadi.');
    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
}

// --- PROMOTIONS ---
function claimPromo(promoId) {
    if(promoId === 1 || promoId === 2) {
        const age = prompt('Iltimos, yoshingizni kiriting (Pasport orqali tekshiriladi):');
        if((promoId === 1 && age >= 70) || (promoId === 2 && age >= 100)) {
            alert('Tabriklaymiz! Aksiya shartlari tasdiqlandi.');
        } else {
            alert('Afsuski, yoshingiz ushbu aksiya shartlariga mos kelmadi.');
        }
    } else {
        alert('Aksiya muvaffaqiyatli faollashtirildi!');
    }
}

// --- LUCKY WHEEL ---
let isSpinning = false;
function spinWheel() {
    if(isSpinning) return;
    isSpinning = true;
    const wheel = document.getElementById('luckyWheel');
    const resultText = document.getElementById('wheelResult');
    resultText.textContent = currentLang === 'ru' ? 'Вращается...' : currentLang === 'en' ? 'Spinning...' : 'Aylanmoqda...';

    const randomDegree = Math.floor(2000 + Math.random() * 3000);
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        isSpinning = false;
        const prizes = [
            { uz: '10% Chegirma', ru: 'Скидка 10%', en: '10% Discount' },
            { uz: 'Bepul Fri', ru: 'Бесплатный фри', en: 'Free Fries' },
            { uz: '15% Chegirma', ru: 'Скидка 15%', en: '15% Discount' },
            { uz: 'Bepul Ichimlik', ru: 'Бесплатный напиток', en: 'Free Drink' },
            { uz: '20% Chegirma', ru: 'Скидка 20%', en: '20% Discount' },
            { uz: 'Omad Keyin', ru: 'Не повезло', en: 'Better Luck Next Time' }
        ];
        
        const normalizedDegree = randomDegree % 360;
        const index = Math.floor(((360 - (normalizedDegree % 360)) % 360) / 60) % 6;
        const prize = prizes[index];
        const textResult = prize[currentLang] || prize.uz;

        resultText.innerHTML = `<span style="color: #ffcc00;">🎁 ${currentLang === 'ru' ? 'Ваш приз:' : currentLang === 'en' ? 'Your prize:' : 'Yutug\'ingiz:'} ${textResult}</span>`;
    }, 4000);
}

// --- THEME & LANGUAGE ---
function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('andijan_theme', theme);
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

function switchTheme() {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('andijan_lang', lang);
    langSwitch.value = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if(translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.textContent = msg;
    toast.style.cssText = 'position:fixed; bottom:20px; right:20px; background:#e50914; color:#fff; padding:12px 24px; border-radius:10px; z-index:3000; font-weight:600; box-shadow:0 5px 15px rgba(0,0,0,0.3);';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}