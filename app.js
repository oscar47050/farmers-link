/**
 * Karenga AgriMarket - Main Application Logic
 * Tailored for Karenga District, Karamoja Sub-region, Uganda
 * Features: WhatsApp Integration, One-tap Calls, Facebook Accounts, and Produce Barcodes/QR Tags
 */

// 1. Initial Mock / Seed Data for Karenga District
const DEFAULT_PRODUCE = [
  {
    id: "prod-1",
    barcode: "KRG-CR-001",
    farmerName: "Kapedo Women Grain Producers Group",
    phone: "0772849102",
    whatsapp: "256772849102",
    facebook: "https://facebook.com/kapedofarmers",
    subcounty: "Kapedo Sub-county",
    village: "Kapedo Trading Center",
    category: "Cereals & Grains",
    produceName: "Red Sorghum (Cleaned & Dried)",
    quantity: 120,
    unit: "100kg Bag",
    price: 175000,
    notes: "Sun-dried to safe moisture level, free from stones, packed in clean woven sacks. Truck accessible.",
    dateListed: "2026-10-01",
    verified: true,
    imageIcon: "fa-wheat-awn",
    colorScheme: "amber"
  },
  {
    id: "prod-2",
    barcode: "KRG-OS-002",
    farmerName: "Lokwang Peter & Family",
    phone: "0785123490",
    whatsapp: "256785123490",
    facebook: "https://facebook.com/lokwang.peter.karenga",
    subcounty: "Lobalangit Sub-county",
    village: "Lobalangit Parish",
    category: "Legumes & Oilseeds",
    produceName: "Pure White Simsim (Sesame)",
    quantity: 45,
    unit: "50kg Bag",
    price: 260000,
    notes: "High oil-content white simsim. Winnowed twice. Harvested this season. Ready for pickup.",
    dateListed: "2026-10-02",
    verified: true,
    imageIcon: "fa-seedling",
    colorScheme: "emerald"
  },
  {
    id: "prod-3",
    barcode: "KRG-HN-003",
    farmerName: "Karenga Valley Beekeepers Association",
    phone: "0779654321",
    whatsapp: "256779654321",
    facebook: "https://facebook.com/karengabee",
    subcounty: "Karenga Town Council",
    village: "Kidepo Border Road Zone",
    category: "Honey & Natural",
    produceName: "Pure Organic Wild Bush Honey",
    quantity: 30,
    unit: "20-Litre Jerrican",
    price: 240000,
    notes: "100% natural raw honey harvested from natural acacia and shea trees near Kidepo park. Golden brown, unadulterated.",
    dateListed: "2026-09-30",
    verified: true,
    imageIcon: "fa-jar",
    colorScheme: "amber"
  },
  {
    id: "prod-4",
    barcode: "KRG-LV-004",
    farmerName: "Mark Lomongin (Pastoralist Lead)",
    phone: "0703456789",
    whatsapp: "256703456789",
    facebook: "",
    subcounty: "Kawalakol Sub-county",
    village: "Kawalakol Kraal Zone",
    category: "Livestock & Poultry",
    produceName: "Karamoja Meat Goats (Healthy Males)",
    quantity: 28,
    unit: "Head of Livestock",
    price: 155000,
    notes: "Vaccinated, tick-sprayed, pasture-fed local breed known for tender meat. Bulk buyers welcome.",
    dateListed: "2026-10-01",
    verified: true,
    imageIcon: "fa-paw",
    colorScheme: "stone"
  },
  {
    id: "prod-5",
    barcode: "KRG-CR-005",
    farmerName: "Sangar Community Grain Bank",
    phone: "0788112233",
    whatsapp: "256788112233",
    facebook: "https://facebook.com/sangargrainbank",
    subcounty: "Sangar Sub-county",
    village: "Sangar Central",
    category: "Cereals & Grains",
    produceName: "Finger Millet (Kalo Grain)",
    quantity: 85,
    unit: "100kg Bag",
    price: 220000,
    notes: "Rich iron finger millet, excellent for flour, nutritious porridge and brewing. Ready in store.",
    dateListed: "2026-09-29",
    verified: true,
    imageIcon: "fa-bowl-rice",
    colorScheme: "amber"
  },
  {
    id: "prod-6",
    barcode: "KRG-CR-006",
    farmerName: "Lokori Farmers Cooperative",
    phone: "0774998877",
    whatsapp: "256774998877",
    facebook: "https://facebook.com/lokoricoop",
    subcounty: "Lokori Sub-county",
    village: "Lokori Boma",
    category: "Cereals & Grains",
    produceName: "Dry Yellow Maize",
    quantity: 140,
    unit: "100kg Bag",
    price: 125000,
    notes: "Treated and bagged, dry moisture content under 13%. Suitable for posho milling and institutional rations.",
    dateListed: "2026-09-28",
    verified: false,
    imageIcon: "fa-cubes-stacked",
    colorScheme: "yellow"
  },
  {
    id: "prod-7",
    barcode: "KRG-OS-007",
    farmerName: "Nakor Lucy & Kapedo Women",
    phone: "0771239874",
    whatsapp: "256771239874",
    facebook: "https://facebook.com/nakor.lucy.kapedo",
    subcounty: "Kapedo Sub-county",
    village: "Kapedo North",
    category: "Legumes & Oilseeds",
    produceName: "Red Beans (Nabe 4) & Cowpeas",
    quantity: 65,
    unit: "100kg Bag",
    price: 240000,
    notes: "Fast cooking red beans and cowpeas. Grade 1 sorting done by hand.",
    dateListed: "2026-10-02",
    verified: true,
    imageIcon: "fa-seedling",
    colorScheme: "emerald"
  },
  {
    id: "prod-8",
    barcode: "KRG-VG-008",
    farmerName: "Lobalangit Vegetable Growers",
    phone: "0706334455",
    whatsapp: "256706334455",
    facebook: "https://facebook.com/lobalangitveg",
    subcounty: "Lobalangit Sub-county",
    village: "Lobalangit Riverbank Gardens",
    category: "Tubers & Vegetables",
    produceName: "Fresh Red Onions & Tomatoes",
    quantity: 50,
    unit: "Basin",
    price: 35000,
    notes: "Irrigated organic garden produce, freshly harvested upon order confirmation. Delivery can be arranged to Karenga TC.",
    dateListed: "2026-10-02",
    verified: false,
    imageIcon: "fa-carrot",
    colorScheme: "orange"
  }
];

const DEFAULT_BUYER_REQUESTS = [
  {
    id: "req-1",
    buyerName: "Kidepo Wilderness Safari Camp",
    phone: "0774112299",
    whatsapp: "256774112299",
    facebook: "https://facebook.com/kideposafari",
    location: "Near Kidepo National Park / Karenga",
    produceNeeded: "20 Karamoja Goats & 100kg Fresh Onions/Veggies",
    budget: "Good market rate (Cash on Delivery)",
    terms: "We need weekly supply for lodge kitchens. Prefer pasture-fed healthy goats and fresh garden veggies.",
    date: "2026-10-01"
  },
  {
    id: "req-2",
    buyerName: "Kotido Grain Aggregators Ltd",
    phone: "0782334455",
    whatsapp: "256782334455",
    facebook: "https://facebook.com/kotidograin",
    location: "Kotido Municipality / Karenga Route",
    produceNeeded: "300 Bags of Red Sorghum & 80 Bags of Simsim",
    budget: "170,000 UGX/bag Sorghum, 250,000 UGX Simsim",
    terms: "Can send 10-tonne Fuso truck directly to Kapedo or Karenga Town Center for loading. Immediate mobile money / cash.",
    date: "2026-10-02"
  },
  {
    id: "req-3",
    buyerName: "Karenga Seed Secondary School",
    phone: "0775889900",
    whatsapp: "256775889900",
    facebook: "https://facebook.com/karengaseedsec",
    location: "Karenga Town Council",
    produceNeeded: "90 Bags of Maize & 45 Bags of Beans",
    budget: "Official school procurement rates",
    terms: "Supply needed for students term feeding. Local Karenga farmer groups given priority.",
    date: "2026-09-30"
  },
  {
    id: "req-4",
    buyerName: "Juba Cross-Border Produce Traders",
    phone: "0701994422",
    whatsapp: "256701994422",
    facebook: "https://facebook.com/jubatraders",
    location: "South Sudan Border / Kaabong Corridor",
    produceNeeded: "150 Bags of Clean Simsim & 60 Jerricans Pure Honey",
    budget: "Negotiable competitive rates",
    terms: "Export quality needed. We collect at Karenga Central Market or Kapedo.",
    date: "2026-10-02"
  }
];

const DEFAULT_PRICES = [
  { commodity: "Red Sorghum (Clean)", unit: "100kg Bag", farmgate: "165,000 - 180,000", townCenter: "185,000 - 195,000", trend: "Stable", trendClass: "text-emerald-600 fa-arrow-trend-up" },
  { commodity: "White Simsim (Sesame)", unit: "50kg Bag", farmgate: "245,000 - 265,000", townCenter: "270,000 - 285,000", trend: "High Demand", trendClass: "text-emerald-600 fa-arrow-trend-up" },
  { commodity: "Finger Millet (Kalo)", unit: "100kg Bag", farmgate: "210,000 - 230,000", townCenter: "235,000 - 245,000", trend: "Stable", trendClass: "text-blue-600 fa-equals" },
  { commodity: "Dry Maize Grain", unit: "100kg Bag", farmgate: "115,000 - 130,000", townCenter: "135,000 - 145,000", trend: "Moderate", trendClass: "text-blue-600 fa-equals" },
  { commodity: "Pure Bush Honey", unit: "20L Jerrican", farmgate: "220,000 - 250,000", townCenter: "260,000 - 290,000", trend: "Rising", trendClass: "text-emerald-600 fa-arrow-trend-up" },
  { commodity: "Karamoja Goat (Medium-Large)", unit: "Live Animal", farmgate: "140,000 - 165,000", townCenter: "170,000 - 195,000", trend: "High Demand", trendClass: "text-emerald-600 fa-arrow-trend-up" },
  { commodity: "Beans (Nabe series)", unit: "100kg Bag", farmgate: "225,000 - 245,000", townCenter: "250,000 - 265,000", trend: "Stable", trendClass: "text-blue-600 fa-equals" },
  { commodity: "Fresh Onions", unit: "Large Basin", farmgate: "30,000 - 35,000", townCenter: "38,000 - 45,000", trend: "Seasonal", trendClass: "text-amber-600 fa-arrow-trend-down" }
];

// App State
let produceListings = [];
let buyerRequests = [];
let activeCategory = 'all';
let currentActiveTagProduce = null;
let html5QrScannerInstance = null;
let isCameraScanning = false;

// Initialize from LocalStorage or seed defaults
function initApp() {
  const savedProduce = localStorage.getItem('karenga_produce');
  if (savedProduce) {
    try {
      const parsed = JSON.parse(savedProduce);
      // Backfill missing barcodes or facebook if old cache exists
      produceListings = parsed.map((p, idx) => {
        if (!p.barcode) {
          const catCode = p.category ? p.category.substring(0, 2).toUpperCase() : "AG";
          p.barcode = `KRG-${catCode}-${String(idx + 1).padStart(3, '0')}`;
        }
        if (p.facebook === undefined) p.facebook = "";
        return p;
      });
    } catch (e) {
      produceListings = DEFAULT_PRODUCE;
    }
  } else {
    produceListings = [...DEFAULT_PRODUCE];
    saveProduce();
  }

  const savedRequests = localStorage.getItem('karenga_buyer_requests');
  if (savedRequests) {
    try {
      buyerRequests = JSON.parse(savedRequests);
    } catch (e) {
      buyerRequests = DEFAULT_BUYER_REQUESTS;
    }
  } else {
    buyerRequests = [...DEFAULT_BUYER_REQUESTS];
    saveRequests();
  }

  renderPriceBulletin();
  renderProduce();
  renderBuyerRequests();
  updateMetrics();
}

function saveProduce() {
  localStorage.setItem('karenga_produce', JSON.stringify(produceListings));
  updateMetrics();
}

function saveRequests() {
  localStorage.setItem('karenga_buyer_requests', JSON.stringify(buyerRequests));
}

function updateMetrics() {
  const countEl = document.getElementById('stat-active-listings');
  if (countEl) countEl.innerText = `${produceListings.length} Active`;

  const farmerCountEl = document.getElementById('stat-farmer-count');
  if (farmerCountEl) {
    const uniqueFarmers = new Set(produceListings.map(p => p.farmerName)).size;
    farmerCountEl.innerText = `${uniqueFarmers} Groups`;
  }
}

// Clean Uganda phone number for WhatsApp / Tel
function cleanUgandaPhone(phone) {
  if (!phone) return "";
  let digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) {
    digits = "256" + digits.substring(1);
  } else if (!digits.startsWith("256") && digits.length === 9) {
    digits = "256" + digits;
  }
  return digits;
}

// Format numbers in Ugandan Shillings (e.g. 180,000 UGX)
function formatUGX(amount) {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    maximumFractionDigits: 0
  }).format(amount).replace('USh', 'UGX');
}

// TAB SWITCHING
function switchTab(tabId) {
  const tabs = ['marketplace', 'buyer-requests', 'price-bulletin', 'about'];
  
  tabs.forEach(t => {
    const el = document.getElementById(`tab-${t}`);
    const navBtn = document.getElementById(`nav-btn-${t}`);
    const mNavBtn = document.getElementById(`m-nav-${t}`);

    if (t === tabId) {
      if (el) {
        el.classList.remove('hidden');
        el.classList.add('animate-in');
      }
      if (navBtn) {
        navBtn.classList.add('bg-emerald-800', 'text-amber-300');
        navBtn.classList.remove('text-emerald-100', 'hover:bg-emerald-800/60');
      }
      if (mNavBtn) {
        mNavBtn.classList.add('text-emerald-800');
        mNavBtn.classList.remove('text-stone-500');
      }
    } else {
      if (el) el.classList.add('hidden');
      if (navBtn) {
        navBtn.classList.remove('bg-emerald-800', 'text-amber-300');
        navBtn.classList.add('text-emerald-100', 'hover:bg-emerald-800/60');
      }
      if (mNavBtn) {
        mNavBtn.classList.remove('text-emerald-800');
        mNavBtn.classList.add('text-stone-500');
      }
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// RENDER PRODUCE LISTINGS
function renderProduce(items = null) {
  const container = document.getElementById('produce-grid');
  const emptyState = document.getElementById('produce-empty-state');
  const badgeCount = document.getElementById('produce-count-badge');
  
  const toRender = items || filterData();

  if (badgeCount) badgeCount.innerText = toRender.length;

  if (toRender.length === 0) {
    if (container) container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (!container) return;

  container.innerHTML = toRender.map(produce => {
    const phoneClean = produce.phone.replace(/\D/g, '');
    const waNumber = cleanUgandaPhone(produce.whatsapp || produce.phone);
    const barcodeCode = produce.barcode || `KRG-${produce.id.slice(-4).toUpperCase()}`;

    // Clean Facebook link
    let fbLink = produce.facebook ? produce.facebook.trim() : "";
    if (fbLink && !fbLink.startsWith("http")) {
      fbLink = "https://" + fbLink.replace(/^@/, "facebook.com/");
    }

    const badgeBg = produce.verified 
      ? `<span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1"><i class="fa-solid fa-certificate text-emerald-600"></i> Verified</span>`
      : `<span class="bg-stone-100 text-stone-600 text-[10px] font-semibold px-2 py-0.5 rounded-full">Community Listing</span>`;

    // Category badge color
    let catBadgeColor = "bg-stone-100 text-stone-700";
    if (produce.category.includes('Cereals')) catBadgeColor = "bg-amber-100 text-amber-900 border border-amber-200";
    else if (produce.category.includes('Oilseeds')) catBadgeColor = "bg-emerald-100 text-emerald-900 border border-emerald-200";
    else if (produce.category.includes('Honey')) catBadgeColor = "bg-yellow-100 text-yellow-900 border border-yellow-300";
    else if (produce.category.includes('Livestock')) catBadgeColor = "bg-stone-200 text-stone-800 border border-stone-300";

    const waMessage = encodeURIComponent(
      `Hello ${produce.farmerName}, I saw your listing for ${produce.produceName} (Batch: ${barcodeCode}, ${produce.quantity} ${produce.unit} at ${formatUGX(produce.price)}) on Karenga AgriMarket. I want to buy. Are you available to discuss?`
    );

    return `
      <div class="produce-card bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex flex-col justify-between" id="card-${produce.id}">
        
        <!-- Card Header & Badge -->
        <div class="p-5 space-y-3.5">
          <div class="flex items-start justify-between gap-2">
            <span class="text-xs px-2.5 py-1 rounded-full font-bold ${catBadgeColor}">
              ${produce.category}
            </span>
            <div class="flex items-center gap-1.5">
              ${badgeBg}
              <!-- Barcode Badge Button -->
              <button 
                onclick="openBarcodeModal('${produce.id}')" 
                class="badge-barcode text-[10px] font-mono font-bold px-2 py-0.5 rounded border flex items-center gap-1 hover:bg-stone-200 transition" 
                title="View & Print Produce Barcode Tag">
                <i class="fa-solid fa-barcode text-stone-700"></i> ${barcodeCode}
              </button>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-black text-stone-900 leading-snug hover:text-emerald-800 transition cursor-pointer" onclick="openInquiryModal('${produce.id}')">
              ${produce.produceName}
            </h3>
            <div class="flex items-center gap-1.5 text-xs text-stone-500 mt-1 font-medium">
              <i class="fa-solid fa-location-dot text-emerald-700"></i>
              <span class="font-semibold text-stone-800">${produce.subcounty}</span> • ${produce.village}
            </div>
          </div>

          <!-- Quantity and Price Highlights -->
          <div class="bg-stone-50 rounded-xl p-3 border border-stone-100 flex items-center justify-between">
            <div>
              <div class="text-[11px] text-stone-500 font-medium">Available Quantity</div>
              <div class="text-base font-black text-stone-900">
                ${produce.quantity} <span class="text-xs font-semibold text-stone-600">${produce.unit}</span>
              </div>
            </div>
            <div class="text-right">
              <div class="text-[11px] text-stone-500 font-medium">Unit Price</div>
              <div class="text-base font-black text-emerald-700">
                ${formatUGX(produce.price)}
              </div>
            </div>
          </div>

          <!-- Description / Notes -->
          <p class="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            ${produce.notes || 'Direct farm harvest available for inspection and pickup in Karenga.'}
          </p>

          <!-- Farmer Details & Social Handles -->
          <div class="border-t border-stone-100 pt-3 flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                ${produce.farmerName.charAt(0)}
              </div>
              <div class="truncate max-w-[140px]">
                <div class="font-semibold text-stone-800 truncate">${produce.farmerName}</div>
                <div class="text-[10px] text-stone-400">${produce.phone}</div>
              </div>
            </div>
            
            <div class="flex items-center gap-1.5">
              ${fbLink ? `
                <a href="${fbLink}" target="_blank" class="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs hover:bg-blue-100 transition" title="Farmer Facebook Page">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              ` : ''}
              <span class="text-[11px] text-stone-400"><i class="fa-regular fa-clock mr-0.5"></i> ${produce.dateListed}</span>
            </div>
          </div>

        </div>

        <!-- Card Action Footer (Call / WhatsApp / Facebook / Barcode / Details) -->
        <div class="bg-stone-50 p-3 border-t border-stone-100 flex items-center gap-1.5">
          
          <!-- One-Tap Call Farmer Button -->
          <a href="tel:${phoneClean}" class="flex-1 btn-call font-bold py-2 px-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow transition" title="Direct Phone Call to ${produce.phone}">
            <i class="fa-solid fa-phone text-xs"></i>
            <span>Call</span>
          </a>

          <!-- WhatsApp Chat Button -->
          <a 
            target="_blank" 
            href="https://wa.me/${waNumber}?text=${waMessage}" 
            class="btn-whatsapp w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow transition" 
            title="Chat & Negotiate on WhatsApp (${waNumber})">
            <i class="fa-brands fa-whatsapp text-white"></i>
          </a>

          <!-- Facebook Profile Button (if available) -->
          ${fbLink ? `
            <a 
              target="_blank" 
              href="${fbLink}" 
              class="btn-facebook w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow transition" 
              title="Visit Farmer on Facebook">
              <i class="fa-brands fa-facebook text-white"></i>
            </a>
          ` : ''}

          <!-- Barcode / Bag Tag Generator Button -->
          <button 
            onclick="openBarcodeModal('${produce.id}')" 
            class="w-9 h-9 bg-stone-800 hover:bg-stone-900 text-amber-300 rounded-xl flex items-center justify-center text-sm shadow transition" 
            title="View & Print Produce Barcode Tag">
            <i class="fa-solid fa-barcode"></i>
          </button>

          <!-- Detail & Share Modal Trigger -->
          <button 
            onclick="openInquiryModal('${produce.id}')" 
            class="w-8 h-9 bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 rounded-xl text-xs font-semibold flex items-center justify-center transition" 
            title="View full contacts & share options">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>

        </div>

      </div>
    `;
  }).join('');
}

// RENDER BUYER DEMAND REQUESTS
function renderBuyerRequests() {
  const container = document.getElementById('buyer-requests-grid');
  if (!container) return;

  container.innerHTML = buyerRequests.map(req => {
    const phoneClean = req.phone.replace(/\D/g, '');
    const waNumber = cleanUgandaPhone(req.whatsapp || req.phone);
    
    let fbLink = req.facebook ? req.facebook.trim() : "";
    if (fbLink && !fbLink.startsWith("http")) {
      fbLink = "https://" + fbLink.replace(/^@/, "facebook.com/");
    }

    const waMsg = encodeURIComponent(
      `Hello ${req.buyerName}, I saw your purchase demand on Karenga AgriMarket for "${req.produceNeeded}". I am a farmer in Karenga District and I can supply this produce. Let's discuss price and delivery.`
    );

    return `
      <div class="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-4 flex flex-col justify-between">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="bg-amber-100 text-amber-900 border border-amber-200 text-xs px-2.5 py-1 rounded-full font-bold">
              <i class="fa-solid fa-cart-shopping mr-1"></i> Buyer Seeking Supply
            </span>
            <span class="text-[11px] text-stone-400">${req.date}</span>
          </div>

          <div>
            <h4 class="text-base font-black text-stone-900">${req.produceNeeded}</h4>
            <div class="text-xs text-stone-500 mt-1 flex items-center gap-1.5">
              <i class="fa-solid fa-building text-amber-700"></i>
              <span class="font-bold text-stone-800">${req.buyerName}</span> • ${req.location}
            </div>
          </div>

          <div class="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs space-y-1">
            <div class="text-stone-500 font-medium">Target Budget / Offering:</div>
            <div class="font-extrabold text-amber-900">${req.budget}</div>
          </div>

          <p class="text-xs text-stone-600 leading-relaxed">
            "${req.terms}"
          </p>
        </div>

        <div class="pt-3 border-t border-stone-100 flex items-center gap-2">
          <!-- Call Buyer -->
          <a href="tel:${phoneClean}" class="flex-1 btn-call font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow transition">
            <i class="fa-solid fa-phone"></i>
            <span>Call (${req.phone})</span>
          </a>

          <!-- WhatsApp Buyer -->
          <a 
            target="_blank" 
            href="https://wa.me/${waNumber}?text=${waMsg}" 
            class="btn-whatsapp w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow transition" 
            title="Chat with Buyer on WhatsApp">
            <i class="fa-brands fa-whatsapp text-white"></i>
          </a>

          <!-- Facebook Buyer Profile -->
          ${fbLink ? `
            <a 
              target="_blank" 
              href="${fbLink}" 
              class="btn-facebook w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow transition" 
              title="Visit Buyer Facebook">
              <i class="fa-brands fa-facebook text-white"></i>
            </a>
          ` : ''}

          <!-- SMS Buyer -->
          <a href="sms:${phoneClean}?body=${waMsg}" class="w-9 h-9 bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-300 rounded-xl flex items-center justify-center text-xs transition" title="Send SMS">
            <i class="fa-solid fa-comment-sms"></i>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// RENDER PRICE BULLETIN
function renderPriceBulletin() {
  const tbody = document.getElementById('price-bulletin-tbody');
  if (!tbody) return;

  tbody.innerHTML = DEFAULT_PRICES.map(item => {
    return `
      <tr class="hover:bg-stone-50 transition">
        <td class="py-3 px-4 font-bold text-stone-900 flex items-center gap-2">
          <i class="fa-solid fa-circle-check text-emerald-600 text-xs"></i>
          ${item.commodity}
        </td>
        <td class="py-3 px-4 text-stone-600">${item.unit}</td>
        <td class="py-3 px-4 font-bold text-emerald-800">${item.farmgate} UGX</td>
        <td class="py-3 px-4 font-semibold text-stone-800">${item.townCenter} UGX</td>
        <td class="py-3 px-4">
          <span class="inline-flex items-center gap-1 text-xs font-semibold ${item.trendClass}">
            <i class="fa-solid ${item.trendClass}"></i> ${item.trend}
          </span>
        </td>
      </tr>
    `;
  }).join('');
}

// FILTER & SEARCH LOGIC
function filterData() {
  const query = (document.getElementById('search-input')?.value || '').toLowerCase().trim();
  const subcounty = document.getElementById('filter-location')?.value || 'all';
  const sort = document.getElementById('filter-sort')?.value || 'newest';

  let filtered = produceListings.filter(p => {
    const matchCategory = (activeCategory === 'all') || (p.category === activeCategory);
    const matchSubcounty = (subcounty === 'all') || (p.subcounty === subcounty);

    const barcodeMatch = p.barcode && p.barcode.toLowerCase().includes(query);
    const matchQuery = !query || 
      p.produceName.toLowerCase().includes(query) ||
      p.farmerName.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.village.toLowerCase().includes(query) ||
      p.subcounty.toLowerCase().includes(query) ||
      barcodeMatch ||
      (p.notes && p.notes.toLowerCase().includes(query));

    return matchCategory && matchSubcounty && matchQuery;
  });

  // Sorting
  if (sort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'qty-high') {
    filtered.sort((a, b) => b.quantity - a.quantity);
  } else {
    // Newest first
    filtered.sort((a, b) => new Date(b.dateListed || '2026-01-01') - new Date(a.dateListed || '2026-01-01'));
  }

  return filtered;
}

function applyFilters() {
  renderProduce();
}

function setCategoryFilter(category, buttonEl) {
  activeCategory = category;
  
  document.querySelectorAll('.category-pill').forEach(btn => {
    btn.classList.remove('active-category', 'bg-emerald-800', 'text-white');
    btn.classList.add('bg-stone-100', 'text-stone-700');
  });

  buttonEl.classList.add('active-category', 'bg-emerald-800', 'text-white');
  buttonEl.classList.remove('bg-stone-100', 'text-stone-700');

  renderProduce();
}

function resetFilters() {
  const searchInput = document.getElementById('search-input');
  const locationSelect = document.getElementById('filter-location');
  const sortSelect = document.getElementById('filter-sort');

  if (searchInput) searchInput.value = '';
  if (locationSelect) locationSelect.value = 'all';
  if (sortSelect) sortSelect.value = 'newest';

  activeCategory = 'all';
  const firstPill = document.querySelector('.category-pill');
  if (firstPill) setCategoryFilter('all', firstPill);
  
  renderProduce();
  showToast('Filters reset to show all Karenga produce.');
}

function scrollToFilter() {
  const el = document.getElementById('filter-section');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// MODAL OPEN / CLOSE HELPERS
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// INQUIRY / CONTACT MODAL POPULATE
function openInquiryModal(produceId) {
  const item = produceListings.find(p => p.id === produceId);
  if (!item) return;

  currentActiveTagProduce = item;
  const phoneClean = item.phone.replace(/\D/g, '');
  const waNumber = cleanUgandaPhone(item.whatsapp || item.phone);
  const barcodeCode = item.barcode || `KRG-${item.id.slice(-4).toUpperCase()}`;

  document.getElementById('c-produce-title').innerText = item.produceName;
  document.getElementById('c-farmer-details').innerText = `${item.farmerName} • ${item.subcounty} (${item.village}) [Tag: ${barcodeCode}]`;
  document.getElementById('c-price-tag').innerText = `${formatUGX(item.price)} per ${item.unit}`;
  document.getElementById('c-stock-tag').innerText = `${item.quantity} ${item.unit} available`;
  document.getElementById('c-location-tag').innerText = `${item.subcounty}, Karenga District`;

  // Update Call link
  const callBtn = document.getElementById('btn-call-farmer');
  callBtn.href = `tel:${phoneClean}`;
  callBtn.innerHTML = `<i class="fa-solid fa-phone"></i> <span>Call Farmer (${item.phone})</span>`;

  // Update WhatsApp link
  const waBtn = document.getElementById('btn-whatsapp-farmer');
  const waMsg = encodeURIComponent(`Hello ${item.farmerName}, I am reaching out from Karenga AgriMarket regarding your ${item.produceName} (Batch: ${barcodeCode}, ${item.quantity} ${item.unit} at ${formatUGX(item.price)}). I want to discuss purchase and collection terms in ${item.subcounty}.`);
  waBtn.href = `https://wa.me/${waNumber}?text=${waMsg}`;

  // Update Facebook link
  const fbBtn = document.getElementById('btn-facebook-farmer');
  if (item.facebook && item.facebook.trim()) {
    let fbLink = item.facebook.trim();
    if (!fbLink.startsWith("http")) fbLink = "https://" + fbLink.replace(/^@/, "facebook.com/");
    fbBtn.href = fbLink;
    fbBtn.style.display = 'flex';
  } else {
    fbBtn.style.display = 'none';
  }

  // Update SMS link
  const smsBtn = document.getElementById('btn-sms-farmer');
  const smsMsg = encodeURIComponent(`Hello ${item.farmerName}, I saw your listing for ${item.produceName} (${barcodeCode}) on Karenga AgriMarket. I want to buy. Please call me back.`);
  smsBtn.href = `sms:${phoneClean}?body=${smsMsg}`;

  // Update Barcode Tag button
  const tagBtn = document.getElementById('btn-modal-view-barcode');
  tagBtn.onclick = () => {
    closeModal('contact-modal');
    openBarcodeModal(item.id);
  };

  // Social Share buttons
  const shareWaBtn = document.getElementById('btn-modal-share-wa');
  shareWaBtn.onclick = () => shareProduceToWhatsApp(item.id);

  const shareFbBtn = document.getElementById('btn-modal-share-fb');
  shareFbBtn.onclick = () => shareProduceToFacebook(item.id);

  openModal('contact-modal');
}

// -------------------------------------------------------------
// BARCODE & QR CODE ENGINE (Pure JS Fallback + CDN Support)
// -------------------------------------------------------------

// Fallback pure JS SVG Code 128 generator if CDN is unavailable
function drawFallbackBarcodeSVG(svgElement, codeText) {
  const bars = [];
  // Simple representation pattern for Code-128 aesthetic
  for (let i = 0; i < codeText.length; i++) {
    const code = codeText.charCodeAt(i);
    bars.push((code % 2 === 0) ? '3' : '1');
    bars.push((code % 3 === 0) ? '2' : '1');
    bars.push('2');
    bars.push('1');
  }

  let x = 10;
  let svgContent = `<rect width="100%" height="100%" fill="transparent"/>`;
  let isBar = true;
  for (let i = 0; i < bars.length; i++) {
    const width = parseInt(bars[i], 10) * 2;
    if (isBar) {
      svgContent += `<rect x="${x}" y="5" width="${width}" height="45" fill="#0f172a" />`;
    }
    x += width;
    isBar = !isBar;
  }
  svgContent += `<text x="${x / 2}" y="62" text-anchor="middle" font-family="monospace" font-size="12" fill="#0f172a" font-weight="bold">${codeText}</text>`;
  
  svgElement.setAttribute('viewBox', `0 0 ${Math.max(x + 20, 200)} 70`);
  svgElement.setAttribute('width', `${Math.max(x + 20, 200)}`);
  svgElement.setAttribute('height', '70');
  svgElement.innerHTML = svgContent;
}

// OPEN BARCODE & PRODUCE BAG TAG MODAL
function openBarcodeModal(produceId) {
  const item = produceListings.find(p => p.id === produceId);
  if (!item) return;

  currentActiveTagProduce = item;
  const barcodeCode = item.barcode || `KRG-${item.id.slice(-4).toUpperCase()}`;
  const phoneClean = item.phone.replace(/\D/g, '');
  const waNumber = cleanUgandaPhone(item.whatsapp || item.phone);

  document.getElementById('tag-batch-id').innerText = barcodeCode;
  document.getElementById('tag-produce-name').innerText = item.produceName;
  document.getElementById('tag-farmer-info').innerText = `${item.farmerName} • ${item.subcounty} (${item.village})`;
  document.getElementById('tag-quantity').innerText = `${item.quantity} ${item.unit}`;
  document.getElementById('tag-price').innerText = formatUGX(item.price);
  document.getElementById('tag-date').innerText = item.dateListed || '2026-10-02';

  // Render Contact Badges in Tag
  const contactBadges = document.getElementById('tag-contact-badges');
  let fbLink = item.facebook ? item.facebook.trim() : "";
  if (fbLink && !fbLink.startsWith("http")) fbLink = "https://" + fbLink.replace(/^@/, "facebook.com/");

  contactBadges.innerHTML = `
    <a href="tel:${phoneClean}" class="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-flex items-center gap-1 hover:bg-emerald-100 transition">
      <i class="fa-solid fa-phone"></i> ${item.phone}
    </a>
    <a href="https://wa.me/${waNumber}" target="_blank" class="text-[11px] font-bold text-white bg-[#25D366] px-2 py-0.5 rounded inline-flex items-center gap-1 hover:opacity-90 transition">
      <i class="fa-brands fa-whatsapp"></i> WhatsApp
    </a>
    ${fbLink ? `
      <a href="${fbLink}" target="_blank" class="text-[11px] font-bold text-white bg-[#1877F2] px-2 py-0.5 rounded inline-flex items-center gap-1 hover:opacity-90 transition">
        <i class="fa-brands fa-facebook"></i> Facebook
      </a>
    ` : ''}
  `;

  // Render Barcode via JsBarcode or Fallback
  const barcodeSvg = document.getElementById('barcode-svg');
  if (window.JsBarcode) {
    try {
      window.JsBarcode("#barcode-svg", barcodeCode, {
        format: "CODE128",
        width: 2.2,
        height: 50,
        displayValue: true,
        fontSize: 13,
        margin: 5,
        background: "transparent",
        lineColor: "#0f172a"
      });
    } catch (e) {
      drawFallbackBarcodeSVG(barcodeSvg, barcodeCode);
    }
  } else {
    drawFallbackBarcodeSVG(barcodeSvg, barcodeCode);
  }

  // Render QR Code via QRCode.js or Fallback
  const qrContainer = document.getElementById('qrcode-container');
  qrContainer.innerHTML = '';

  const qrPayload = `https://wa.me/${waNumber}?text=${encodeURIComponent(`Hello ${item.farmerName}, I scanned your Karenga Produce Bag Tag [Batch: ${barcodeCode}] for ${item.produceName}. I want to purchase this batch.`)}`;

  if (window.QRCode) {
    try {
      new window.QRCode(qrContainer, {
        text: qrPayload,
        width: 100,
        height: 100,
        colorDark: "#022c22",
        colorLight: "#ffffff",
        correctLevel: window.QRCode.CorrectLevel.M
      });
    } catch (e) {
      renderFallbackQRCode(qrContainer, qrPayload);
    }
  } else {
    renderFallbackQRCode(qrContainer, qrPayload);
  }

  openModal('barcode-modal');
}

function renderFallbackQRCode(container, payload) {
  // Use public QR API image as fallback
  const img = document.createElement('img');
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(payload)}`;
  img.alt = "Karenga Produce QR Code";
  img.className = "w-24 h-24 rounded-lg";
  container.appendChild(img);
}

// PRINT PRODUCE BAG TAG
function printProduceTag() {
  window.print();
}

// SOCIAL SHARE HELPERS
function shareProduceToWhatsApp(produceId) {
  const item = produceListings.find(p => p.id === produceId);
  if (!item) return;

  const barcodeCode = item.barcode || `KRG-${item.id.slice(-4).toUpperCase()}`;
  const text = `🌾 *Karenga AgriMarket Produce Listing* 🌾\n\n*Crop:* ${item.produceName} (Batch: ${barcodeCode})\n*Farmer:* ${item.farmerName}\n*Location:* ${item.subcounty}, ${item.village} (Karenga District)\n*Available:* ${item.quantity} ${item.unit}\n*Price:* ${formatUGX(item.price)} per ${item.unit}\n*Phone:* ${item.phone}\n${item.whatsapp ? `*WhatsApp:* +${cleanUgandaPhone(item.whatsapp)}\n` : ''}${item.facebook ? `*Facebook:* ${item.facebook}\n` : ''}\nDirect agricultural trade without brokers!`;

  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
}

function shareProduceToFacebook(produceId) {
  const item = produceListings.find(p => p.id === produceId);
  if (!item) return;

  const url = window.location.href.split('#')[0];
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(`Check out ${item.produceName} by ${item.farmerName} in ${item.subcounty}, Karenga District on Karenga AgriMarket!`)}`, '_blank');
}

function shareCurrentTagWhatsApp() {
  if (currentActiveTagProduce) {
    shareProduceToWhatsApp(currentActiveTagProduce.id);
  }
}

function shareCurrentTagFacebook() {
  if (currentActiveTagProduce) {
    shareProduceToFacebook(currentActiveTagProduce.id);
  }
}

// -------------------------------------------------------------
// LIVE BARCODE & QR SCANNER ENGINE
// -------------------------------------------------------------

function openScanModal() {
  openModal('scan-modal');
  const feedback = document.getElementById('scan-result-feedback');
  if (feedback) feedback.classList.add('hidden');
}

function closeScanModal() {
  stopCameraScanner();
  closeModal('scan-modal');
}

function toggleCameraScanner() {
  if (isCameraScanning) {
    stopCameraScanner();
  } else {
    startCameraScanner();
  }
}

function startCameraScanner() {
  const btn = document.getElementById('btn-toggle-camera');
  const readerEl = document.getElementById('qr-reader');
  if (!readerEl) return;

  if (window.Html5Qrcode) {
    try {
      html5QrScannerInstance = new window.Html5Qrcode("qr-reader");
      isCameraScanning = true;
      if (btn) btn.innerHTML = `<i class="fa-solid fa-stop"></i> Stop Camera`;

      html5QrScannerInstance.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: { width: 220, height: 160 } },
        (decodedText) => {
          handleScanSuccess(decodedText);
        },
        () => {
          // ignore scan failure frames
        }
      ).catch(err => {
        readerEl.innerHTML = `<div class="p-4 text-center text-amber-300">Camera access not available or blocked in browser. Use photo upload or type the batch code below.</div>`;
        isCameraScanning = false;
        if (btn) btn.innerHTML = `<i class="fa-solid fa-video"></i> Start Camera Scan`;
      });
    } catch (e) {
      readerEl.innerHTML = `<div class="p-4 text-center text-amber-300">Camera scanner initialized fallback. Use photo upload or manual lookup below.</div>`;
    }
  } else {
    readerEl.innerHTML = `<div class="p-4 text-center text-amber-300">Html5Qrcode library offline. Please enter batch code below.</div>`;
  }
}

function stopCameraScanner() {
  const btn = document.getElementById('btn-toggle-camera');
  if (html5QrScannerInstance && isCameraScanning) {
    try {
      html5QrScannerInstance.stop().then(() => {
        html5QrScannerInstance.clear();
      }).catch(() => {});
    } catch (e) {}
  }
  isCameraScanning = false;
  if (btn) btn.innerHTML = `<i class="fa-solid fa-video"></i> Start Camera Scan`;
}

function handleScanImageUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (window.Html5Qrcode) {
    const html5Qr = new window.Html5Qrcode("qr-reader");
    html5Qr.scanFile(file, true)
      .then(decodedText => {
        handleScanSuccess(decodedText);
      })
      .catch(() => {
        showScanFeedback("Could not read barcode or QR in uploaded photo. Please try another image or type code manually.", false);
      });
  } else {
    showScanFeedback("Please enter the batch code manually.", false);
  }
}

function handleManualScanLookup() {
  const input = document.getElementById('manual-scan-input');
  if (!input) return;
  const val = input.value.trim().toUpperCase();
  if (!val) {
    showScanFeedback("Please enter a produce batch code (e.g. KRG-CR-001)", false);
    return;
  }
  handleScanSuccess(val);
}

function handleScanSuccess(rawCode) {
  stopCameraScanner();
  const feedback = document.getElementById('scan-result-feedback');

  // Search in produce list for barcode match, ID match, or name match
  const found = produceListings.find(p => {
    return (p.barcode && p.barcode.toUpperCase() === rawCode.toUpperCase()) ||
      (p.id && p.id.toUpperCase() === rawCode.toUpperCase()) ||
      rawCode.toUpperCase().includes(p.barcode ? p.barcode.toUpperCase() : "###");
  });

  if (found) {
    showScanFeedback(`✅ Verified Produce Found: ${found.produceName} by ${found.farmerName} (${found.barcode})`, true);
    setTimeout(() => {
      closeScanModal();
      openBarcodeModal(found.id);
      showToast(`Bag Barcode ${found.barcode} Verified!`);
    }, 1000);
  } else {
    // If not exact match, search keyword
    const softFound = produceListings.find(p => 
      p.produceName.toUpperCase().includes(rawCode.toUpperCase()) ||
      p.farmerName.toUpperCase().includes(rawCode.toUpperCase())
    );

    if (softFound) {
      showScanFeedback(`✅ Found Match: ${softFound.produceName} by ${softFound.farmerName}`, true);
      setTimeout(() => {
        closeScanModal();
        openBarcodeModal(softFound.id);
      }, 1000);
    } else {
      showScanFeedback(`⚠️ No produce batch found matching "${rawCode}". Check spelling or list new batch.`, false);
    }
  }
}

function showScanFeedback(msg, isSuccess) {
  const feedback = document.getElementById('scan-result-feedback');
  if (!feedback) return;
  feedback.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-900', 'bg-amber-100', 'text-amber-900');
  if (isSuccess) {
    feedback.classList.add('bg-emerald-100', 'text-emerald-900');
  } else {
    feedback.classList.add('bg-amber-100', 'text-amber-900');
  }
  feedback.innerText = msg;
}

// -------------------------------------------------------------
// FORM HANDLERS
// -------------------------------------------------------------

// FORM: POST PRODUCE (FARMER SELLER)
function handlePostProduce(e) {
  e.preventDefault();

  const farmerName = document.getElementById('p-farmer-name').value.trim();
  const phone = document.getElementById('p-phone').value.trim();
  const whatsapp = document.getElementById('p-whatsapp').value.trim();
  const facebook = document.getElementById('p-facebook') ? document.getElementById('p-facebook').value.trim() : "";
  const subcounty = document.getElementById('p-subcounty').value;
  const village = document.getElementById('p-village').value.trim();
  const category = document.getElementById('p-category').value;
  const produceName = document.getElementById('p-produce-name').value.trim();
  const quantity = parseInt(document.getElementById('p-quantity').value, 10);
  const unit = document.getElementById('p-unit').value;
  const price = parseInt(document.getElementById('p-price').value, 10);
  const notes = document.getElementById('p-notes').value.trim();

  // Generate standardized Karenga Produce Barcode
  const catPrefix = category.includes("Cereal") ? "CR" 
    : category.includes("Oilseed") ? "OS" 
    : category.includes("Honey") ? "HN" 
    : category.includes("Livestock") ? "LV" : "VG";
  const seqNumber = String(produceListings.length + 1).padStart(3, '0');
  const barcode = `KRG-${catPrefix}-${seqNumber}`;

  const newProduce = {
    id: `prod-${Date.now()}`,
    barcode,
    farmerName,
    phone,
    whatsapp,
    facebook,
    subcounty,
    village,
    category,
    produceName,
    quantity,
    unit,
    price,
    notes,
    dateListed: new Date().toISOString().split('T')[0],
    verified: false,
    imageIcon: "fa-seedling",
    colorScheme: "emerald"
  };

  // Add to top of array
  produceListings.unshift(newProduce);
  saveProduce();
  renderProduce();

  // Reset form and close modal
  document.getElementById('form-post-produce').reset();
  closeModal('post-produce-modal');

  showToast(`Congratulations ${farmerName}! ${produceName} listed with Barcode Tag ${barcode}.`);
  switchTab('marketplace');

  // Prompt to view barcode tag
  setTimeout(() => {
    openBarcodeModal(newProduce.id);
  }, 600);
}

// FORM: POST BUYER DEMAND REQUEST
function handlePostRequest(e) {
  e.preventDefault();

  const buyerName = document.getElementById('r-buyer-name').value.trim();
  const phone = document.getElementById('r-phone').value.trim();
  const whatsapp = document.getElementById('r-whatsapp') ? document.getElementById('r-whatsapp').value.trim() : "";
  const facebook = document.getElementById('r-facebook') ? document.getElementById('r-facebook').value.trim() : "";
  const location = document.getElementById('r-location').value.trim();
  const produceNeeded = document.getElementById('r-produce-name').value.trim();
  const budget = document.getElementById('r-budget').value.trim() || 'Negotiable';
  const terms = document.getElementById('r-notes').value.trim() || 'Payment upon delivery inspection.';

  const newRequest = {
    id: `req-${Date.now()}`,
    buyerName,
    phone,
    whatsapp,
    facebook,
    location,
    produceNeeded,
    budget,
    terms,
    date: new Date().toISOString().split('T')[0]
  };

  buyerRequests.unshift(newRequest);
  saveRequests();
  renderBuyerRequests();

  document.getElementById('form-post-request').reset();
  closeModal('post-request-modal');

  showToast(`Purchase order posted! Farmers in Karenga will contact you directly.`);
  switchTab('buyer-requests');
}

// EXPORT TO CSV / EXCEL
function exportDataToCSV() {
  if (!produceListings.length) {
    showToast('No produce listings to export.');
    return;
  }

  const headers = ['Batch Barcode', 'Farmer/Group Name', 'Phone', 'WhatsApp', 'Facebook', 'Sub-county', 'Village', 'Category', 'Produce Name', 'Quantity', 'Unit', 'Price (UGX)', 'Date Listed', 'Notes'];
  
  const rows = produceListings.map(p => [
    `"${p.barcode || ''}"`,
    `"${p.farmerName}"`,
    `"${p.phone}"`,
    `"${p.whatsapp || ''}"`,
    `"${p.facebook || ''}"`,
    `"${p.subcounty}"`,
    `"${p.village}"`,
    `"${p.category}"`,
    `"${p.produceName}"`,
    p.quantity,
    `"${p.unit}"`,
    p.price,
    `"${p.dateListed}"`,
    `"${(p.notes || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Karenga_AgriMarket_Listings_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('Listings downloaded as CSV report with Barcodes!');
}

// TOAST NOTIFICATIONS
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'bg-stone-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-stone-700 animate-in transition pointer-events-auto';
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check text-emerald-400 text-sm"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Close modals on Esc key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal('post-produce-modal');
    closeModal('post-request-modal');
    closeModal('contact-modal');
    closeModal('barcode-modal');
    closeScanModal();
  }
});

// Start app on DOM loaded
document.addEventListener('DOMContentLoaded', initApp);
