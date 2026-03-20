// ============================================================
//  G-4 MOOD CAFÉ — POS System JavaScript
//  Full application logic: data, state, UI, charts
// ============================================================

// ============================================================
//  DATA — MENU
// ============================================================

const MENU = [
  // BURGERS
  {id:101,name:"Classic Cheeseburger",cat:"Burgers",price:79,stock:20,cal:520,prot:28,carbs:42,fat:22,tags:[]},
  {id:102,name:"Cheesy Bacon Burger",cat:"Burgers",price:99,stock:15,cal:680,prot:35,carbs:45,fat:32,tags:[]},
  {id:103,name:"Mushroom Swiss Burger",cat:"Burgers",price:89,stock:15,cal:560,prot:26,carbs:44,fat:24,tags:["vegetarian"]},
  {id:104,name:"BBQ Smoky Burger",cat:"Burgers",price:109,stock:10,cal:720,prot:38,carbs:48,fat:34,tags:[]},
  {id:105,name:"Veggie Quinoa Burger",cat:"Burgers",price:95,stock:12,cal:410,prot:18,carbs:52,fat:14,tags:["vegan","vegetarian","low-cal"]},
  {id:106,name:"Spicy Sriracha Burger",cat:"Burgers",price:109,stock:8,cal:610,prot:30,carbs:44,fat:26,tags:[]},
  // SANDWICHES
  {id:201,name:"BLT Sandwich",cat:"Sandwiches",price:65,stock:20,cal:420,prot:20,carbs:38,fat:18,tags:[]},
  {id:202,name:"Egg & Cheese Sandwich",cat:"Sandwiches",price:55,stock:25,cal:380,prot:18,carbs:36,fat:16,tags:["vegetarian"]},
  {id:203,name:"Butter Toast",cat:"Sandwiches",price:35,stock:30,cal:220,prot:5,carbs:34,fat:9,tags:["vegetarian"]},
  {id:204,name:"Club Sandwich",cat:"Sandwiches",price:85,stock:15,cal:490,prot:28,carbs:42,fat:20,tags:[]},
  {id:205,name:"Avocado Toast",cat:"Sandwiches",price:79,stock:18,cal:310,prot:10,carbs:32,fat:16,tags:["vegan","vegetarian","low-cal"]},
  {id:206,name:"Tuna Melt Sandwich",cat:"Sandwiches",price:85,stock:12,cal:450,prot:30,carbs:36,fat:18,tags:[]},
  // PASTA
  {id:301,name:"Spaghetti Bolognese",cat:"Pasta",price:95,stock:15,cal:620,prot:30,carbs:72,fat:18,tags:[]},
  {id:302,name:"Creamy Carbonara",cat:"Pasta",price:105,stock:12,cal:710,prot:28,carbs:70,fat:28,tags:[]},
  {id:303,name:"Pesto Pasta",cat:"Pasta",price:90,stock:10,cal:540,prot:18,carbs:68,fat:20,tags:["vegetarian"]},
  {id:304,name:"Aglio e Olio",cat:"Pasta",price:85,stock:12,cal:480,prot:14,carbs:70,fat:16,tags:["vegan","vegetarian"]},
  {id:305,name:"Rose Sauce Pasta",cat:"Pasta",price:100,stock:10,cal:580,prot:20,carbs:72,fat:20,tags:["vegetarian"]},
  // PIZZA
  {id:401,name:"Overload Pizza (6 slices)",cat:"Pizza",price:149,stock:10,cal:820,prot:36,carbs:88,fat:30,tags:[]},
  {id:402,name:"Margherita Pizza (6 slices)",cat:"Pizza",price:129,stock:10,cal:680,prot:24,carbs:84,fat:22,tags:["vegetarian"]},
  {id:403,name:"BBQ Chicken Pizza (6 slices)",cat:"Pizza",price:159,stock:8,cal:860,prot:40,carbs:86,fat:30,tags:[]},
  {id:404,name:"Vegan Garden Pizza (6 slices)",cat:"Pizza",price:139,stock:8,cal:560,prot:18,carbs:80,fat:16,tags:["vegan","vegetarian","low-cal"]},
  // SNACKS
  {id:501,name:"French Fries",cat:"Snacks",price:45,stock:40,cal:340,prot:4,carbs:48,fat:16,tags:["vegan","vegetarian","gluten-free"]},
  {id:502,name:"Onion Rings",cat:"Snacks",price:50,stock:30,cal:380,prot:5,carbs:50,fat:18,tags:["vegetarian"]},
  {id:503,name:"Donuts (2 pcs)",cat:"Snacks",price:35,stock:25,cal:420,prot:6,carbs:58,fat:18,tags:["vegetarian"]},
  {id:504,name:"Choco Chip Cookies (3 pcs)",cat:"Snacks",price:40,stock:20,cal:380,prot:5,carbs:52,fat:16,tags:["vegetarian"]},
  {id:505,name:"Mixed Fruit Bowl",cat:"Snacks",price:55,stock:20,cal:120,prot:2,carbs:28,fat:0,tags:["vegan","vegetarian","gluten-free","low-cal"]},
  {id:506,name:"Cheese Nachos",cat:"Snacks",price:60,stock:18,cal:420,prot:10,carbs:52,fat:18,tags:["vegetarian"]},
  {id:507,name:"Edamame (salted)",cat:"Snacks",price:50,stock:15,cal:190,prot:17,carbs:14,fat:8,tags:["vegan","vegetarian","gluten-free","low-cal"]},
  // BREAKFAST
  {id:601,name:"Bacon & Eggs",cat:"Breakfast",price:75,stock:15,cal:520,prot:32,carbs:12,fat:38,tags:["gluten-free"]},
  {id:602,name:"Pancake Stack (3 pcs)",cat:"Breakfast",price:65,stock:20,cal:480,prot:12,carbs:72,fat:14,tags:["vegetarian"]},
  {id:603,name:"Full English Breakfast",cat:"Breakfast",price:120,stock:10,cal:780,prot:42,carbs:48,fat:40,tags:[]},
  {id:604,name:"Overnight Oats Bowl",cat:"Breakfast",price:70,stock:14,cal:320,prot:12,carbs:52,fat:8,tags:["vegan","vegetarian","gluten-free","low-cal"]},
  {id:605,name:"Granola & Yogurt Parfait",cat:"Breakfast",price:75,stock:12,cal:360,prot:14,carbs:54,fat:8,tags:["vegetarian","low-cal"]},
  // HOT DRINKS
  {id:701,name:"Americano",cat:"Hot Drinks",price:60,stock:50,cal:15,prot:1,carbs:2,fat:0,tags:["vegan","gluten-free","low-cal"]},
  {id:702,name:"Cappuccino",cat:"Hot Drinks",price:70,stock:50,cal:110,prot:6,carbs:12,fat:4,tags:["vegetarian","gluten-free"]},
  {id:703,name:"Caramel Latte",cat:"Hot Drinks",price:75,stock:50,cal:180,prot:6,carbs:28,fat:5,tags:["vegetarian","gluten-free"]},
  {id:704,name:"Vanilla Latte",cat:"Hot Drinks",price:75,stock:50,cal:170,prot:6,carbs:26,fat:5,tags:["vegetarian","gluten-free"]},
  {id:705,name:"Hot Matcha",cat:"Hot Drinks",price:70,stock:50,cal:130,prot:4,carbs:18,fat:4,tags:["vegetarian","gluten-free"]},
  {id:706,name:"Hot Chocolate",cat:"Hot Drinks",price:65,stock:50,cal:200,prot:6,carbs:32,fat:6,tags:["vegetarian","gluten-free"]},
  {id:707,name:"Chamomile Tea",cat:"Hot Drinks",price:55,stock:40,cal:5,prot:0,carbs:1,fat:0,tags:["vegan","gluten-free","low-cal"]},
  {id:708,name:"Oat Milk Latte",cat:"Hot Drinks",price:85,stock:35,cal:140,prot:4,carbs:20,fat:4,tags:["vegan","vegetarian","gluten-free"]},
  // COLD DRINKS
  {id:801,name:"Iced Americano",cat:"Cold Drinks",price:65,stock:50,cal:20,prot:1,carbs:3,fat:0,tags:["vegan","gluten-free","low-cal"]},
  {id:802,name:"Iced Caramel Latte",cat:"Cold Drinks",price:80,stock:50,cal:200,prot:6,carbs:30,fat:5,tags:["vegetarian","gluten-free"]},
  {id:803,name:"Iced Vanilla Latte",cat:"Cold Drinks",price:80,stock:50,cal:190,prot:6,carbs:28,fat:5,tags:["vegetarian","gluten-free"]},
  {id:804,name:"Matcha Latte",cat:"Cold Drinks",price:80,stock:50,cal:150,prot:5,carbs:20,fat:5,tags:["vegetarian","gluten-free"]},
  {id:805,name:"Mocha Latte",cat:"Cold Drinks",price:75,stock:50,cal:220,prot:6,carbs:30,fat:7,tags:["vegetarian","gluten-free"]},
  {id:806,name:"Espresso Latte",cat:"Cold Drinks",price:70,stock:50,cal:120,prot:5,carbs:14,fat:4,tags:["vegetarian","gluten-free"]},
  {id:807,name:"Iced Tea",cat:"Cold Drinks",price:40,stock:60,cal:80,prot:0,carbs:20,fat:0,tags:["vegan","gluten-free","low-cal"]},
  {id:808,name:"Strawberry Smoothie",cat:"Cold Drinks",price:85,stock:30,cal:210,prot:3,carbs:48,fat:1,tags:["vegan","vegetarian","gluten-free","low-cal"]},
  {id:809,name:"Mango Lassi",cat:"Cold Drinks",price:90,stock:25,cal:240,prot:6,carbs:46,fat:3,tags:["vegetarian","gluten-free"]},
  {id:810,name:"Cold Brew Coffee",cat:"Cold Drinks",price:95,stock:20,cal:30,prot:1,carbs:4,fat:0,tags:["vegan","gluten-free","low-cal"]},
  {id:811,name:"Lavender Lemonade",cat:"Cold Drinks",price:85,stock:22,cal:140,prot:0,carbs:36,fat:0,tags:["vegan","gluten-free","low-cal"]},
];

// ============================================================
//  DATA — MOODS
// ============================================================

const MOODS = [
  {name:"Happy",emoji:"😊",desc:"You're glowing! Celebrate with something fun.",
   original:{foodId:101,drinkId:807},dietary:{foodId:505,drinkId:808},general:{foodId:501,drinkId:801}},
  {name:"Tired",emoji:"😴",desc:"You need fuel. We've got you.",
   original:{foodId:601,drinkId:801},dietary:{foodId:604,drinkId:810},general:{foodId:603,drinkId:701}},
  {name:"Sad",emoji:"😢",desc:"Comfort is on its way. Big hug in every bite.",
   original:{foodId:503,drinkId:703},dietary:{foodId:605,drinkId:707},general:{foodId:504,drinkId:706}},
  {name:"Calm",emoji:"😌",desc:"Breathe. Here's something serene for you.",
   original:{foodId:504,drinkId:804},dietary:{foodId:507,drinkId:801},general:{foodId:205,drinkId:811}},
  {name:"Heartbroken",emoji:"💔",desc:"Pizza heals everything. We promise.",
   original:{foodId:401,drinkId:804},dietary:{foodId:404,drinkId:808},general:{foodId:403,drinkId:805}},
  {name:"Anxious",emoji:"😰",desc:"Slow down. Something warm and gentle for you.",
   original:{foodId:203,drinkId:705},dietary:{foodId:604,drinkId:707},general:{foodId:202,drinkId:701}},
  {name:"Depressed",emoji:"😞",desc:"You matter. Let us take care of you today.",
   original:{foodId:501,drinkId:805},dietary:{foodId:505,drinkId:810},general:{foodId:301,drinkId:706}},
  {name:"Excited",emoji:"🤩",desc:"Big energy! Let's match it with something bold.",
   original:{foodId:104,drinkId:802},dietary:{foodId:105,drinkId:808},general:{foodId:403,drinkId:806}},
  {name:"Focused",emoji:"🧠",desc:"Brain fuel incoming. Stay sharp.",
   original:{foodId:303,drinkId:708},dietary:{foodId:304,drinkId:707},general:{foodId:302,drinkId:703}},
  {name:"Adventurous",emoji:"🌶️",desc:"You're feeling bold — let's spice it up!",
   original:{foodId:106,drinkId:809},dietary:{foodId:501,drinkId:811},general:{foodId:401,drinkId:802}},
];

// ============================================================
//  STATE
// ============================================================

let staff = {username:"", role:""};
let customer = {name:"Guest", visits:0, totalSpent:0};
let cart = [];           // [{item, qty, unitPrice, customNote}]
let orderHistory = [];   // [{date, items, total, customer}]
let customers = [];      // [{name, visits, totalSpent, lastVisit}]
let menuStock = {};      // {id: stock}
let moodStats = {};      // {moodName: count}
let selectedMoodIdx = null;

// Seed from localStorage if available
function loadState() {
  const saved = localStorage.getItem('moodcafe_state');
  if (saved) {
    try {
      const s = JSON.parse(saved);
      if (s.orderHistory) orderHistory = s.orderHistory;
      if (s.customers)    customers    = s.customers;
      if (s.menuStock)    menuStock    = s.menuStock;
      if (s.moodStats)    moodStats    = s.moodStats;
    } catch(e) {}
  }
  // Sync stock into MENU
  MENU.forEach(item => {
    if (menuStock[item.id] !== undefined) item.stock = menuStock[item.id];
  });
}

function saveState() {
  MENU.forEach(item => { menuStock[item.id] = item.stock; });
  localStorage.setItem('moodcafe_state', JSON.stringify({
    orderHistory, customers, menuStock, moodStats
  }));
}

// ============================================================
//  HELPERS
// ============================================================

function findItem(id)  { return MENU.find(m => m.id === id); }
function formatPeso(n) { return '₱' + Number(n).toFixed(2); }
function today()       { return new Date().toLocaleDateString('en-CA'); } // YYYY-MM-DD
function nowTime()     { return new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}); }

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity='0'; t.style.transition='opacity 0.4s'; setTimeout(()=>t.remove(), 400); }, 2200);
}

// ============================================================
//  LOADER + LOGIN
// ============================================================

window.onload = () => {
  loadState();
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
      document.getElementById('loginModal').classList.remove('hidden');
    }, 600);
  }, 2000);
};

function doLogin() {
  const u = document.getElementById('loginUsername').value.trim();
  const r = document.getElementById('loginRole').value;
  if (!u) { showToast('Please enter a username'); return; }
  staff = {username: u, role: r};
  document.getElementById('topbarUsername').textContent = u;
  document.getElementById('topbarRole').textContent = r.charAt(0).toUpperCase() + r.slice(1);
  closeModal('loginModal');
  // Show manager-only tabs
  if (r === 'manager' || r === 'admin') {
    document.querySelectorAll('.manager-only').forEach(el => el.style.display = '');
  } else {
    document.querySelectorAll('.manager-only').forEach(el => el.style.display = 'none');
  }
  document.getElementById('app').classList.remove('hidden');
  document.getElementById('customerModal').classList.remove('hidden');
  initMoodGrid();
  renderMenuPage();
}

// ============================================================
//  CUSTOMER CHECK-IN
// ============================================================

function checkInCustomer() {
  const name = document.getElementById('customerNameInput').value.trim() || 'Guest';
  let existing = customers.find(c => c.name.toLowerCase() === name.toLowerCase());
  if (!existing) {
    existing = {name, visits:0, totalSpent:0, lastVisit: today()};
    customers.push(existing);
    showToast('New customer registered: ' + name);
  } else {
    showToast('Welcome back, ' + name + '! Visits: ' + existing.visits);
  }
  customer = existing;
  const topCust = document.getElementById('topbarCustomer');
  const topName = document.getElementById('topbarCustomerName');
  topCust.classList.remove('hidden');
  topName.textContent = name;
  closeModal('customerModal');
  // Loyalty banner
  if (customer.visits >= 10) {
    document.getElementById('loyaltyBanner').classList.remove('hidden');
  }
}

function closeCustomerModal(guest) {
  customer = {name:'Guest', visits:0, totalSpent:0};
  closeModal('customerModal');
}

// ============================================================
//  NAVIGATION
// ============================================================

function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + page).classList.remove('hidden');
  document.getElementById('page-' + page).classList.add('active');
  document.querySelector(`[data-page="${page}"]`).classList.add('active');

  if (page === 'sales')     renderSalesPage();
  if (page === 'analytics') renderAnalyticsPage();
  if (page === 'inventory') renderInventoryPage();
}

// ============================================================
//  MOOD GRID
// ============================================================

function initMoodGrid() {
  const grid = document.getElementById('moodGrid');
  grid.innerHTML = '';
  MOODS.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'mood-card';
    card.dataset.idx = i;
    card.innerHTML = `
      <span class="mood-emoji">${m.emoji}</span>
      <div class="mood-name">${m.name}</div>
      <div class="mood-desc">${m.desc}</div>
    `;
    card.onclick = () => selectMood(i);
    grid.appendChild(card);
  });
}

function selectMood(idx) {
  selectedMoodIdx = idx;
  document.querySelectorAll('.mood-card').forEach(c => c.classList.remove('selected'));
  document.querySelector(`.mood-card[data-idx="${idx}"]`).classList.add('selected');
  renderCombos(idx);
  document.getElementById('comboSection').classList.remove('hidden');
  document.getElementById('comboSection').scrollIntoView({behavior:'smooth',block:'nearest'});
}

function detectMoodLive(val) {
  const badge = document.getElementById('moodDetected');
  if (!val.trim()) { badge.classList.add('hidden'); return; }
  const idx = detectMoodFromText(val);
  if (idx >= 0) {
    badge.textContent = MOODS[idx].emoji + ' ' + MOODS[idx].name + ' detected!';
    badge.classList.remove('hidden');
    selectMood(idx);
  } else {
    badge.classList.add('hidden');
  }
}

function detectMoodFromText(text) {
  const s = text.toLowerCase();
  const kw = [
    ['happy','great','joy','good','wonderful','amazing','glad'],
    ['tired','sleepy','exhausted','drained','fatigue','drowsy'],
    ['sad','unhappy','cry','miss','gloomy','upset','down'],
    ['calm','chill','peaceful','relax','serene','tranquil'],
    ['heartbroken','broke','hurt','lonely','heartbreak','miss you'],
    ['anxious','nervous','stressed','worry','panic','tense'],
    ['depressed','hopeless','empty','numb','despair'],
    ['excited','hyper','pumped','energy','enthusiastic','thrilled'],
    ['focus','study','work','concentrate','productive','think'],
    ['adventurous','bold','spicy','brave','wild','daring'],
  ];
  for (let i = 0; i < kw.length; i++) {
    if (kw[i].some(w => s.includes(w))) return i;
  }
  return -1;
}

// ============================================================
//  COMBO RENDERING
// ============================================================

function renderCombos(moodIdx) {
  const mood = MOODS[moodIdx];
  const wrap = document.getElementById('comboCards');
  wrap.innerHTML = '';

  const options = [
    {key:'original', label:'Original', icon:'⭐', combo: mood.original},
    {key:'dietary',  label:'Dietary',  icon:'🌱', combo: mood.dietary},
    {key:'general',  label:'General',  icon:'🍽️', combo: mood.general},
  ];

  options.forEach(opt => {
    const food  = findItem(opt.combo.foodId);
    const drink = findItem(opt.combo.drinkId);
    const total = (food ? food.price : 0) + (drink ? drink.price : 0);

    const card = document.createElement('div');
    card.className = `combo-card ${opt.key}`;
    card.innerHTML = `
      <div class="combo-tag ${opt.key}">${opt.icon} ${opt.label}</div>
      <div class="combo-items">
        ${food  ? `<div class="combo-item-row">
          <div><div class="combo-item-name">${food.name}</div>
          <div class="combo-item-type">Food · ${food.cal} kcal</div></div>
          <div class="combo-item-price">${formatPeso(food.price)}</div>
        </div>` : ''}
        ${drink ? `<div class="combo-item-row">
          <div><div class="combo-item-name">${drink.name}</div>
          <div class="combo-item-type">Drink · ${drink.cal} kcal</div></div>
          <div class="combo-item-price">${formatPeso(drink.price)}</div>
        </div>` : ''}
      </div>
      <div class="combo-total">
        <span>Combo Total</span>
        <span>${formatPeso(total)}</span>
      </div>
      <button class="combo-add-btn" onclick="addComboToCart(${moodIdx},'${opt.key}')">
        + Add This Combo
      </button>
    `;
    wrap.appendChild(card);
  });
}

function addComboToCart(moodIdx, optKey) {
  const mood = MOODS[moodIdx];
  const combo = mood[optKey];
  const food  = findItem(combo.foodId);
  const drink = findItem(combo.drinkId);
  let added = false;
  if (food  && food.stock  > 0) { addToCart(food.id,  1, `${mood.name} Combo — ${optKey}`); added = true; }
  if (drink && drink.stock > 0) { addToCart(drink.id, 1, `${mood.name} Combo — ${optKey}`); added = true; }
  if (!added) { showToast('Items in this combo are sold out!'); return; }

  // Track mood stats
  moodStats[mood.name] = (moodStats[mood.name] || 0) + 1;
  showToast(`${mood.emoji} ${mood.name} combo added to cart!`);
}

// ============================================================
//  CART
// ============================================================

function addToCart(itemId, qty=1, customNote='') {
  const item = findItem(itemId);
  if (!item || item.stock <= 0) { showToast('Sorry, this item is sold out!'); return; }
  const existing = cart.find(c => c.itemId === itemId && c.customNote === customNote);
  if (existing) {
    existing.qty = Math.min(existing.qty + qty, item.stock);
  } else {
    cart.push({itemId, qty, unitPrice: item.price, customNote, name: item.name});
  }
  renderCart();
  // Enable checkout button
  document.getElementById('checkoutBtn').disabled = cart.length === 0;
}

function updateCartQty(itemId, customNote, delta) {
  const idx = cart.findIndex(c => c.itemId === itemId && c.customNote === customNote);
  if (idx === -1) return;
  const item = findItem(itemId);
  cart[idx].qty = Math.max(0, Math.min(cart[idx].qty + delta, item ? item.stock : 99));
  if (cart[idx].qty === 0) cart.splice(idx, 1);
  renderCart();
  document.getElementById('checkoutBtn').disabled = cart.length === 0;
}

function removeFromCart(itemId, customNote) {
  cart = cart.filter(c => !(c.itemId === itemId && c.customNote === customNote));
  renderCart();
  document.getElementById('checkoutBtn').disabled = cart.length === 0;
}

function clearCart() {
  cart = []; renderCart();
  document.getElementById('checkoutBtn').disabled = true;
}

function renderCart() {
  const wrap = document.getElementById('cartItems');
  if (cart.length === 0) {
    wrap.innerHTML = '<div class="cart-empty">🛒 Your cart is empty.<br/><small>Pick a mood combo or add items from the menu.</small></div>';
    updateCartTotals(0, 0, 0);
    return;
  }
  wrap.innerHTML = '';
  let subtotal = 0;
  cart.forEach(c => {
    const lineTotal = c.qty * c.unitPrice;
    subtotal += lineTotal;
    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name}</div>
        ${c.customNote ? `<div class="cart-item-sub">${c.customNote}</div>` : ''}
      </div>
      <div class="cart-qty-ctrl">
        <button class="qty-btn" onclick="updateCartQty(${c.itemId},'${c.customNote}',-1)">−</button>
        <span class="qty-num">${c.qty}</span>
        <button class="qty-btn" onclick="updateCartQty(${c.itemId},'${c.customNote}',1)">+</button>
      </div>
      <div class="cart-item-total">${formatPeso(lineTotal)}</div>
      <button class="cart-remove" onclick="removeFromCart(${c.itemId},'${c.customNote}')">✕</button>
    `;
    wrap.appendChild(row);
  });
  const tax = subtotal * 0.12;
  const total = subtotal + tax;
  updateCartTotals(subtotal, tax, total);
}

function updateCartTotals(sub, tax, total) {
  document.getElementById('cartSubtotal').textContent = formatPeso(sub);
  document.getElementById('cartTax').textContent      = formatPeso(tax);
  document.getElementById('cartTotal').textContent    = formatPeso(total);
}

// ============================================================
//  CHECKOUT
// ============================================================

function checkout() {
  if (cart.length === 0) return;
  const subtotal = cart.reduce((s,c) => s + c.qty * c.unitPrice, 0);
  const tax   = subtotal * 0.12;
  const total = subtotal + tax;

  // Deduct stock
  cart.forEach(c => {
    const item = findItem(c.itemId);
    if (item) item.stock = Math.max(0, item.stock - c.qty);
  });

  // Record order
  const order = {
    date: today(), time: nowTime(),
    items: cart.map(c => ({...c})),
    subtotal, tax, total,
    customer: customer.name,
    staff: staff.username
  };
  orderHistory.push(order);

  // Update customer
  if (customer.name !== 'Guest') {
    const cust = customers.find(c => c.name === customer.name);
    if (cust) {
      cust.visits++;
      cust.totalSpent += total;
      cust.lastVisit = today();
      customer = {...cust};
      if (customer.visits >= 10) {
        document.getElementById('loyaltyBanner').classList.remove('hidden');
      }
    }
  }

  saveState();
  showReceipt(order);
  cart = [];
  renderCart();
  document.getElementById('checkoutBtn').disabled = true;
}

// ============================================================
//  RECEIPT
// ============================================================

function showReceipt(order) {
  const content = document.getElementById('receiptContent');
  const itemsHtml = order.items.map(c =>
    `<div class="receipt-line"><span>${c.name} ×${c.qty}</span><span>${formatPeso(c.unitPrice * c.qty)}</span></div>`
  ).join('');

  content.innerHTML = `
    <div class="receipt-info">Date: ${order.date}  ${order.time}  |  Cashier: ${order.staff}</div>
    ${order.customer !== 'Guest' ? `<div class="receipt-info">Customer: ${order.customer}</div>` : ''}
    <div style="margin-bottom:10px">${itemsHtml}</div>
    <div class="receipt-line"><span>Subtotal</span><span>${formatPeso(order.subtotal)}</span></div>
    <div class="receipt-line"><span>VAT (12%)</span><span>${formatPeso(order.tax)}</span></div>
    <div class="receipt-line receipt-total"><span>TOTAL</span><span>${formatPeso(order.total)}</span></div>
    <div style="text-align:center;margin-top:14px;font-family:'Caveat',cursive;font-size:16px;opacity:0.6">
      Thank you for visiting! Come back soon ☕
    </div>
  `;
  document.getElementById('receiptModal').classList.remove('hidden');
}

function printReceipt() { window.print(); }

// ============================================================
//  MENU PAGE
// ============================================================

function renderMenuPage() {
  // Populate category filter
  const cats = [...new Set(MENU.map(m => m.cat))];
  const catSel = document.getElementById('categoryFilter');
  catSel.innerHTML = '<option value="">All Categories</option>';
  cats.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c; opt.textContent = c;
    catSel.appendChild(opt);
  });
  filterMenu();
}

function filterMenu() {
  const search = document.getElementById('menuSearch').value.toLowerCase();
  const diet   = document.getElementById('dietFilter').value;
  const cat    = document.getElementById('categoryFilter').value;

  const filtered = MENU.filter(item => {
    if (search && !item.name.toLowerCase().includes(search)) return false;
    if (diet   && !item.tags.includes(diet))                 return false;
    if (cat    && item.cat !== cat)                          return false;
    return true;
  });

  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';
  if (filtered.length === 0) {
    grid.innerHTML = '<div style="color:var(--text-muted);padding:40px;text-align:center;grid-column:1/-1">No items found.</div>';
    return;
  }
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-item-card' + (item.stock === 0 ? ' sold-out' : '');
    const stockLabel = item.stock === 0 ? '<span class="item-stock-badge stock-out">Sold Out</span>'
                     : item.stock < 5   ? `<span class="item-stock-badge stock-low">Low (${item.stock})</span>`
                     :                    `<span class="item-stock-badge stock-ok">In Stock</span>`;
    const tagsHtml = item.tags.map(t => `<span class="diet-tag ${t}">${t}</span>`).join('');

    card.innerHTML = `
      <div class="item-cat-badge">${item.cat}</div>
      <div class="item-name">${item.name}</div>
      <div class="item-kcal">${item.cal} kcal · ${item.prot}g protein</div>
      ${tagsHtml ? `<div class="item-tags">${tagsHtml}</div>` : ''}
      <div class="item-footer">
        <div class="item-price">${formatPeso(item.price)}</div>
        ${stockLabel}
      </div>
      <div style="display:flex;gap:8px;margin-top:12px;align-items:center">
        <button class="item-add-btn" onclick="addToCart(${item.id})" ${item.stock===0?'disabled':''}>+ Add to Cart</button>
        <button class="item-nut-btn" onclick="showNutrition(${item.id})">nutrition ↗</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function showNutrition(id) {
  const item = findItem(id);
  if (!item) return;
  document.getElementById('nutModalName').textContent = item.name;
  const tagsHtml = item.tags.map(t => `<span class="diet-tag ${t}">${t}</span>`).join('');
  document.getElementById('nutModalContent').innerHTML = `
    <div class="nut-grid">
      <div class="nut-item"><div class="nut-val">${item.cal}</div><div class="nut-label">Calories</div></div>
      <div class="nut-item"><div class="nut-val">${item.prot}g</div><div class="nut-label">Protein</div></div>
      <div class="nut-item"><div class="nut-val">${item.carbs}g</div><div class="nut-label">Carbs</div></div>
      <div class="nut-item"><div class="nut-val">${item.fat}g</div><div class="nut-label">Fat</div></div>
    </div>
    ${tagsHtml ? `<div class="nut-tags">${tagsHtml}</div>` : ''}
    <p style="margin-top:14px;font-size:12px;color:var(--text-muted)">
      Price: ${formatPeso(item.price)}  ·  Stock: ${item.stock === 0 ? 'Sold Out' : item.stock}
    </p>
  `;
  document.getElementById('nutritionModal').classList.remove('hidden');
}

// ============================================================
//  SALES PAGE
// ============================================================

function renderSalesPage() {
  // Stats
  const todayOrders = orderHistory.filter(o => o.date === today());
  const todayRevenue = todayOrders.reduce((s,o) => s+o.total, 0);
  const totalRevenue = orderHistory.reduce((s,o) => s+o.total, 0);
  const avgOrder = orderHistory.length ? totalRevenue / orderHistory.length : 0;
  const sessionOrders = orderHistory.filter(o => o.staff === staff.username && o.date === today());
  const sessionRevenue = sessionOrders.reduce((s,o)=>s+o.total,0);

  const statsGrid = document.getElementById('statsGrid');
  statsGrid.innerHTML = `
    <div class="stat-card" data-icon="💰"><div class="stat-label">Today's Revenue</div><div class="stat-value">${formatPeso(todayRevenue)}</div><div class="stat-sub">${todayOrders.length} orders today</div></div>
    <div class="stat-card" data-icon="📦"><div class="stat-label">Total Orders</div><div class="stat-value">${orderHistory.length}</div><div class="stat-sub">All time</div></div>
    <div class="stat-card" data-icon="📊"><div class="stat-label">Avg. Order Value</div><div class="stat-value">${formatPeso(avgOrder)}</div><div class="stat-sub">Per transaction</div></div>
    <div class="stat-card" data-icon="🏪"><div class="stat-label">Session Revenue</div><div class="stat-value">${formatPeso(sessionRevenue)}</div><div class="stat-sub">${sessionOrders.length} orders this session</div></div>
  `;

  // Monthly chart
  const monthly = {};
  orderHistory.forEach(o => {
    const ym = o.date ? o.date.substr(0,7) : '—';
    monthly[ym] = (monthly[ym] || 0) + o.total;
  });
  const labels = Object.keys(monthly).sort();
  const values = labels.map(l => monthly[l]);
  renderBarChart('salesChart', labels, values, 'Monthly Revenue (₱)', '#e8a84a');

  // Orders table
  const tbody = document.getElementById('ordersBody');
  tbody.innerHTML = '';
  [...orderHistory].reverse().slice(0, 30).forEach(o => {
    const tr = document.createElement('tr');
    const itemNames = o.items.map(i => `${i.name}×${i.qty}`).join(', ');
    tr.innerHTML = `
      <td>${o.date} ${o.time}</td>
      <td style="max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${itemNames}">${itemNames}</td>
      <td style="font-weight:600;color:var(--gold)">${formatPeso(o.total)}</td>
      <td>${o.customer}</td>
    `;
    tbody.appendChild(tr);
  });
  if (!orderHistory.length) {
    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;padding:32px;color:var(--text-muted)">No orders yet.</td></tr>';
  }
}

// ============================================================
//  ANALYTICS PAGE
// ============================================================

function renderAnalyticsPage() {
  // Top items
  const itemCount = {}, itemRevenue = {};
  orderHistory.forEach(o => {
    o.items.forEach(i => {
      itemCount[i.name]   = (itemCount[i.name]   || 0) + i.qty;
      itemRevenue[i.name] = (itemRevenue[i.name] || 0) + i.qty * i.unitPrice;
    });
  });
  const sortedItems = Object.entries(itemCount).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const topLabels = sortedItems.map(x=>x[0]);
  const topValues = sortedItems.map(x=>x[1]);

  // Mood chart
  const moodLabels = Object.keys(moodStats);
  const moodValues = moodLabels.map(k => moodStats[k]);

  // Inventory stats
  const soldOut = MENU.filter(m => m.stock === 0).length;
  const lowStock = MENU.filter(m => m.stock > 0 && m.stock < 5).length;
  const totalCustomers = customers.length;
  const loyalCustomers = customers.filter(c => c.visits >= 10).length;

  const grid = document.getElementById('analyticsGrid');
  grid.innerHTML = `
    <div class="stat-card" data-icon="🏆"><div class="stat-label">Total Customers</div><div class="stat-value">${totalCustomers}</div></div>
    <div class="stat-card" data-icon="⭐"><div class="stat-label">Loyalty Members</div><div class="stat-value">${loyalCustomers}</div><div class="stat-sub">10+ visits</div></div>
    <div class="stat-card" data-icon="📦"><div class="stat-label">Sold Out Items</div><div class="stat-value">${soldOut}</div></div>
    <div class="stat-card" data-icon="⚠️"><div class="stat-label">Low Stock Items</div><div class="stat-value">${lowStock}</div><div class="stat-sub">Under 5 units</div></div>
  `;

  renderBarChart('topItemsChart', topLabels, topValues, 'Orders', '#c8813a');
  renderPieChart('moodChart', moodLabels.length ? moodLabels : ['No data'], moodValues.length ? moodValues : [1]);

  // Customer list
  const custList = document.getElementById('customersList');
  custList.innerHTML = '';
  if (!customers.length) {
    custList.innerHTML = '<div style="color:var(--text-muted);font-size:14px">No customers yet.</div>';
    return;
  }
  [...customers].sort((a,b) => b.totalSpent - a.totalSpent).slice(0, 12).forEach(c => {
    const div = document.createElement('div');
    div.className = 'customer-card';
    div.innerHTML = `
      <div class="customer-avatar">👤</div>
      <div>
        <div class="customer-name">${c.name}</div>
        <div class="customer-meta">${c.visits} visits · ${formatPeso(c.totalSpent)} total</div>
        <div class="customer-meta">Last: ${c.lastVisit}</div>
      </div>
      ${c.visits >= 10 ? '<div class="customer-loyalty">⭐ Loyal</div>' : ''}
    `;
    custList.appendChild(div);
  });
}

// ============================================================
//  INVENTORY PAGE
// ============================================================

function renderInventoryPage() {
  const tbody = document.getElementById('inventoryBody');
  tbody.innerHTML = '';
  MENU.forEach(item => {
    const status = item.stock === 0 ? '<span class="item-stock-badge stock-out">Sold Out</span>'
                 : item.stock < 5   ? `<span class="item-stock-badge stock-low">Low</span>`
                 :                    `<span class="item-stock-badge stock-ok">OK</span>`;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="color:var(--text-muted)">${item.id}</td>
      <td style="font-weight:500">${item.name}</td>
      <td style="color:var(--text-muted)">${item.cat}</td>
      <td style="color:var(--gold);font-weight:600">${formatPeso(item.price)}</td>
      <td><input type="number" class="stock-input" value="${item.stock}" min="0" id="stock_${item.id}"/></td>
      <td>${status}</td>
      <td><button class="update-btn" onclick="updateStock(${item.id})">Update</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function updateStock(id) {
  const input = document.getElementById('stock_' + id);
  const val = parseInt(input.value);
  if (isNaN(val) || val < 0) { showToast('Invalid stock value'); return; }
  const item = findItem(id);
  if (item) { item.stock = val; saveState(); showToast(`Updated: ${item.name} → ${val}`); renderInventoryPage(); }
}

function restockAll() {
  MENU.forEach(item => item.stock = 30);
  saveState(); renderInventoryPage();
  showToast('All items restocked to 30 units!');
}

// ============================================================
//  CHARTS (vanilla Canvas — no library needed)
// ============================================================

function renderBarChart(canvasId, labels, values, dataLabel, color) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width = canvas.offsetWidth;
  const H = canvas.height = parseInt(canvas.getAttribute('height')) || 200;
  ctx.clearRect(0,0,W,H);

  if (!values.length) return;
  const max = Math.max(...values) || 1;
  const padL = 50, padR = 20, padT = 20, padB = 44;
  const barW_total = (W - padL - padR) / labels.length;
  const barW = Math.min(barW_total * 0.55, 40);
  const chartH = H - padT - padB;

  // Grid lines
  ctx.strokeStyle = 'rgba(200,129,58,0.1)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padT + chartH - (i / 4) * chartH;
    ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(W - padR, y); ctx.stroke();
  }

  // Bars
  labels.forEach((label, i) => {
    const x = padL + i * barW_total + (barW_total - barW) / 2;
    const barH = (values[i] / max) * chartH;
    const y = padT + chartH - barH;

    const grad = ctx.createLinearGradient(0, y, 0, y + barH);
    grad.addColorStop(0, color);
    grad.addColorStop(1, color + '55');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x, y, barW, barH, [4,4,0,0]);
    ctx.fill();

    // Value label
    ctx.fillStyle = 'rgba(245,230,200,0.7)';
    ctx.font = '10px DM Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(values[i] % 1 === 0 ? values[i] : values[i].toFixed(0), x + barW/2, y - 5);

    // X label (truncated)
    ctx.fillStyle = 'rgba(160,128,96,0.9)';
    ctx.font = '9px DM Sans, sans-serif';
    const shortLabel = label.length > 10 ? label.substr(0,9)+'…' : label;
    ctx.fillText(shortLabel, x + barW/2, H - padB + 14);
  });
}

const PIE_COLORS = ['#c8813a','#7a9e7e','#6b9ec4','#c97b7b','#d4b896','#8fa8c8','#b89a6a','#9ec4a0'];

function renderPieChart(canvasId, labels, values) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width = canvas.offsetWidth;
  const H = canvas.height = parseInt(canvas.getAttribute('height')) || 260;
  ctx.clearRect(0,0,W,H);

  const total = values.reduce((a,b)=>a+b,0) || 1;
  const cx = W/2 - 40, cy = H/2, r = Math.min(cx, cy) - 20;
  let start = -Math.PI/2;

  values.forEach((v, i) => {
    const slice = (v / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, start + slice);
    ctx.closePath();
    ctx.fillStyle = PIE_COLORS[i % PIE_COLORS.length];
    ctx.fill();
    ctx.strokeStyle = '#1a0f0a';
    ctx.lineWidth = 2;
    ctx.stroke();
    start += slice;
  });

  // Legend
  const legX = W - 90, legY = 24;
  labels.forEach((l, i) => {
    const y = legY + i * 22;
    ctx.fillStyle = PIE_COLORS[i % PIE_COLORS.length];
    ctx.fillRect(legX, y, 12, 12);
    ctx.fillStyle = 'rgba(245,230,200,0.7)';
    ctx.font = '11px DM Sans, sans-serif';
    ctx.textAlign = 'left';
    const pct = ((values[i]/total)*100).toFixed(0);
    ctx.fillText(`${l.substr(0,8)} ${pct}%`, legX+16, y+10);
  });
}

// ============================================================
//  CHATBOT — AI-Powered via Anthropic API
// ============================================================

// Full conversation history for multi-turn memory
let chatHistory = [];

// Build a detailed menu snapshot to inject into the system prompt
function buildMenuContext() {
  return MENU.map(item => {
    const tags = item.tags.length ? ` [${item.tags.join(', ')}]` : '';
    const stock = item.stock === 0 ? ' — SOLD OUT' : ` — ${item.stock} in stock`;
    return `• ${item.name} (ID:${item.id}) | ${item.cat} | ₱${item.price} | ${item.cal} kcal | Protein:${item.prot}g Carbs:${item.carbs}g Fat:${item.fat}g${tags}${stock}`;
  }).join('\n');
}

const MOODBOT_SYSTEM = `You are MoodBot, the friendly and knowledgeable AI assistant for G-4 Mood Café — a cozy café in the Philippines. You speak in a warm, casual, helpful tone. You can use emojis naturally.
Your main jobs:
1. Help customers with food allergies and dietary concerns — be specific and accurate. Always cross-reference the actual menu.
2. Recommend menu items based on mood, dietary restrictions, allergies, health goals, or preferences.
3. Answer any food-related questions: ingredients, nutrition, substitutions, what to avoid.
4. Help customers understand what dishes contain (e.g. dairy, gluten, nuts, eggs, shellfish, soy, etc.).
IMPORTANT ALLERGY & DIETARY KNOWLEDGE:
- Lactose intolerance / dairy-free: Avoid items with milk, cheese, cream, butter, yogurt. Safe drinks: black coffee (Americano, Cold Brew), Iced Tea, fruit smoothies. Safe foods: most burgers without cheese (note Mushroom Swiss has Swiss cheese), fries, edamame, fruit bowl. Suggest oat/almond/soy milk swaps for lattes.
- Gluten intolerance / celiac: Avoid all bread, pasta, pizza, pancakes, donuts, cookies, toast. Safe: eggs, bacon, fries (check fryer cross-contamination), edamame, fruit bowl, oats bowl, black coffee drinks.
- Nut allergy: Be cautious with cookies (may contain nuts), granola parfait (may contain nuts). Pesto pasta often uses pine nuts. Alert them clearly.
- Egg allergy: Avoid Egg & Cheese Sandwich, Bacon & Eggs, Full English Breakfast, Carbonara (uses eggs). Most drinks are safe.
- Soy allergy: Soy milk latte should be avoided. Alert for soy-based ingredients in some Asian-style items.
- Shellfish/seafood allergy: Tuna Melt contains tuna — warn them.
- Diabetes / low sugar: Recommend low-calorie, low-carb options. Avoid sweet lattes, donuts, pancakes, cookies, smoothies with sugar. Suggest sugar-free options like Americano, plain eggs, salads.
- High cholesterol / heart health: Avoid full English breakfast, bacon, heavy burgers. Suggest fruit bowl, oats, avocado toast, veggie options.
- Keto / low carb: Avoid pasta, pizza, bread, fries, pancakes, donuts. Focus on eggs, bacon, burgers (without bun if possible), drinks without sugar.
- Vegan: No meat, dairy, eggs. Safe: Veggie Quinoa Burger, Avocado Toast, Aglio e Olio, Vegan Garden Pizza, Fries, Fruit Bowl, Edamame, Chamomile Tea, Americano, Cold Brew, Iced Tea, Oat Milk Latte, Smoothies, Lavender Lemonade.
- Vegetarian: No meat. Wide selection available.
- Pregnancy / prenatal: Avoid raw or undercooked eggs (carbonara uses raw egg), high-caffeine drinks. Suggest decaf or matcha alternatives, well-cooked meals.
- IBS / sensitive stomach: Avoid high-fat fried foods, spicy items (Spicy Sriracha Burger). Suggest gentle options like oats, plain toast, chamomile tea, fruit bowl.
CAFÉ INFO:
- Open: 7am–10pm daily
- WiFi: MoodCafe_Guest | Password: espresso2024  
- Loyalty: 10+ visits = free size upgrade
- Milk alternatives available for drinks: Oat (+₱15), Almond (+₱15), Soy (+₱10), Coconut (+₱15)
- Currency: Philippine Peso (₱)
CURRENT MENU:
${buildMenuContext()}
When someone mentions an allergy or intolerance:
1. Acknowledge it warmly and take it seriously
2. List what they should AVOID from our menu
3. List what is SAFE for them to order
4. Suggest a specific combo or recommendation
5. Mention that they can request milk alternatives for drinks
Keep replies concise but thorough. Use bullet points for lists. Never make the customer feel like a burden.`;

function toggleChatbot() {
  const panel = document.getElementById('chatbotPanel');
  panel.classList.toggle('hidden');
  if (!panel.classList.contains('hidden')) {
    document.getElementById('chatInput').focus();
  }
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const text  = input.value.trim();
  if (!text) return;
  input.value = '';

  appendChat('user', text);
  chatHistory.push({ role: 'user', content: text });

  // Show typing indicator
  const typingId = showTyping();

  callMoodBotAI(typingId);
}

function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const id = 'typing_' + Date.now();
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.id = id;
  div.innerHTML = `
    <span class="chat-avatar">🤖</span>
    <div class="chat-bubble typing-bubble">
      <span class="dot"></span><span class="dot"></span><span class="dot"></span>
    </div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return id;
}

async function callMoodBotAI(typingId) {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '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',
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: MOODBOT_SYSTEM,
        messages: chatHistory
      })
    });

    const data = await response.json();
    const reply = data.content?.[0]?.text || "Sorry, I couldn't process that. Please try again!";

    // Remove typing indicator
    const typingEl = document.getElementById(typingId);
    if (typingEl) typingEl.remove();

    // Add assistant reply to history
    chatHistory.push({ role: 'assistant', content: reply });

    // Render the reply (supports line breaks and bullets)
    appendChat('bot', formatBotReply(reply));

  } catch (err) {
    const typingEl = document.getElementById(typingId);
    if (typingEl) typingEl.remove();
    appendChat('bot', "⚠️ I'm having trouble connecting right now. Please try again in a moment!");
    console.error('MoodBot API error:', err);
  }
}

// Convert plain text with bullets/newlines into formatted HTML
function formatBotReply(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n•\s/g, '<br/>• ')
    .replace(/\n-\s/g, '<br/>• ')
    .replace(/\n(\d+)\.\s/g, '<br/>$1. ')
    .replace(/\n/g, '<br/>');
}

function appendChat(role, html) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `chat-msg ${role}`;
  const avatar = role === 'bot' ? '🤖' : '😊';
  div.innerHTML = `
    <span class="chat-avatar">${avatar}</span>
    <div class="chat-bubble">${html}</div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}
