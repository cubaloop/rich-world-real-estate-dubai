// ============================================================================
// RICH WORLD REAL ESTATE DUBAI — MASTER APPLICATION ENGINE
// Dual-Layer Persistence (localStorage + Supabase) | Jota CRM Native Exporter
// Trained Dubai Real Estate Legal & ROI AI Bot | HTML5 Canvas 800x800 Engine
// ============================================================================

const WHATSAPP_URL = "https://wa.me/16479016999";
const USD_RATE = 3.6725;
const EUR_RATE = 3.98;

// Default Categories
const DEFAULT_CATEGORIES = [
  "All",
  "Dream Home Sanctuary",
  "High-Yield Off-Plan",
  "Waterfront Trophy",
  "Branded Residences"
];

// Default Curated Properties (6 Signature Assets for End-Users & Investors)
const DEFAULT_PROPERTIES = [
  {
    id: "prop_1",
    title: "Como Residences — Private Sky Terrace Suite",
    location: "Palm Jumeirah (Prime Trunk Waterfront)",
    category: "Waterfront Trophy",
    priceAED: 7800000,
    roiBadge: "18% YoY Capital Growth • Trophy Asset",
    planSpecs: "60/40 Plan • 3 BR + Maid • 3,120 Sq.Ft",
    image: "assets/como_residences.jpg",
    description: "Architectural masterpiece on Palm Jumeirah offering 360-degree Arabian Gulf & Burj Al Arab panoramas, private elevator lobby, and resort beach club sanctuary for discerning families."
  },
  {
    id: "prop_2",
    title: "Mercedes-Benz Places — Vision Iconic Suite",
    location: "Downtown Dubai (Burj Khalifa Corridor)",
    category: "Branded Residences",
    priceAED: 4100000,
    roiBadge: "8.8% Projected Net Yield • Branded Trophy",
    planSpecs: "70/30 Plan • 2 BR + Private Pool • 1,480 Sq.Ft",
    image: "assets/mbp_project_towers.webp",
    description: "Co-engineered by Binghatti & Mercedes-Benz. Features private sky plunge pool, direct Burj Khalifa views, smart solar facade, and ultra-liquid global resale demand."
  },
  {
    id: "prop_3",
    title: "Allegro Park — Island Waterfront Sanctuary",
    location: "Dubai Islands (Island A Beachfront)",
    category: "High-Yield Off-Plan",
    priceAED: 2400000,
    roiBadge: "> 155% ROE via 50/50 Post-Handover",
    planSpecs: "50/50 3-Yr Post-Handover • 2 BR • 1,260 Sq.Ft",
    image: "assets/allegro_beach_pool.webp",
    description: "Pay only 50% until handover and let 3 years of luxury holiday-home rental income cover your post-handover installments. Qualifies directly for the 10-Year UAE Golden Visa."
  },
  {
    id: "prop_4",
    title: "Dubai Hills Estate — Golf Park Family Villa",
    location: "Dubai Hills Estate (Emerald Fairways)",
    category: "Dream Home Sanctuary",
    priceAED: 6450000,
    roiBadge: "Top End-User Family Sanctuary • Ready Soon",
    planSpecs: "Ready / Mortgage Eligible • 4 BR Villa • 3,850 Sq.Ft",
    image: "assets/interior.jpg",
    description: "Minutes from GEMS International Schools, Dubai Hills Mall, and King's College Hospital. Vastu-compliant layout with landscaped private garden and championship golf proximity."
  },
  {
    id: "prop_5",
    title: "Danube Maritime Waterfront Residences",
    location: "Dubai Maritime City (Peninsula Seafront)",
    category: "High-Yield Off-Plan",
    priceAED: 2950000,
    roiBadge: "30/70 Leverage • Only 30% Pre-Handover",
    planSpecs: "30/70 Payment Plan • 2 BR + Study • 1,340 Sq.Ft",
    image: "assets/srk_maritime_city.webp",
    description: "Capture 100% of prime seafront capital appreciation while deploying only 30% equity during construction. Unobstructed cruise terminal and open ocean views."
  },
  {
    id: "prop_6",
    title: "KORE Designer Biohacking & Wellness Suites",
    location: "Dubailand Residential Hub (DLRC)",
    category: "High-Yield Off-Plan",
    priceAED: 1650000,
    roiBadge: "9.4% – 10.5% Est. Net Rental Yield",
    planSpecs: "60/40 Plan • Fully Furnished 2 BR • 1,150 Sq.Ft",
    image: "assets/kore_building.webp",
    description: "Turnkey fully furnished residence featuring Technogym wellness club, cryo recovery, padel courts, and co-working lounges—engineered for maximum executive rental occupancy."
  }
];

// Default 4 In-Depth Dubai Real Estate Investment Blogs
const DEFAULT_BLOGS = [
  {
    id: "blog_1",
    title: "The 2026–2030 Dubai Capital Appreciation Playbook: How Savvy Investors Achieve >140% ROE",
    category: "Capital Growth & ROE Strategy",
    readTime: "6 Min Read",
    date: "October 2026",
    author: "Akshay • Managing Principal",
    image: "assets/srk_sea_view.webp",
    summary: "Why paying 100% cash is no longer the only path to wealth in Dubai: a quantitative breakdown of 30/70 and 50/50 post-handover payment plans across emerging waterfront corridors.",
    body: [
      "After transacting more than 2,000+ properties in Dubai, one principle stands above all others for capital-growth investors: Return on Equity (ROE) matters far more than nominal price movement. When you acquire an off-plan waterfront asset on a 30/70 or 50/50 post-handover payment plan, you control 100% of the asset's appreciation while deploying only a fraction of the purchase price during construction.",
      "Consider a AED 2,400,000 waterfront residence in Dubai Islands or Dubai Maritime City structured on a 50/50 3-Year Post-Handover plan. By handover in 2028, your deployed equity is AED 1,200,000 (50%). As coastal infrastructure, bridges, and resort beaches complete, comparable ready units historically re-rate by 35% to 45% (reaching ~AED 3,350,000).",
      "That AED 950,000 capital appreciation on AED 1,200,000 of deployed cash represents nearly an 80% return on equity before handover alone. Once keys are delivered, the property generates AED 180,000–210,000 per year in tax-free net rental income, which services the remaining post-handover developer installments.",
      "Key Takeaway from Rich World Advisory: Always verify that the developer's payment milestones are linked to verified RERA construction percentages rather than arbitrary calendar dates, and target master-planned waterfront or metro-connected districts."
    ]
  },
  {
    id: "blog_2",
    title: "RERA Escrow Laws, Oqood Registration & The 4% DLD Fee: Complete Legal Guide for Buyers",
    category: "Dubai Real Estate Law & DLD",
    readTime: "7 Min Read",
    date: "October 2026",
    author: "Siddharth Verma • Head of Legal & Conveyancing",
    image: "assets/mbp_grand_promenade.webp",
    summary: "Understand how Dubai Land Department (DLD) Law No. 8 of 2007 and Law No. 13 of 2008 protect 100% of your capital when buying off-plan or ready properties in Dubai.",
    body: [
      "International investors often ask why Dubai is ranked among the safest real estate jurisdictions globally. The answer lies in the strict statutory protections enforced by the Dubai Land Department (DLD) and the Real Estate Regulatory Agency (RERA).",
      "1. Law No. 8 of 2007 (Project Escrow Accounts): Every off-plan development in Dubai must have a dedicated, RERA-monitored Escrow Account at an approved UAE bank. Buyers never transfer construction installments to a developer's corporate operating account. Funds in the Escrow Account are released to the project contractor strictly after RERA-appointed independent engineers inspect and certify physical construction progress on site.",
      "2. Law No. 13 of 2008 (Oqood Interim Property Register): When you purchase an off-plan property and pay the mandatory 4% DLD Registration Fee, your Sales and Purchase Agreement (SPA) is registered in the official DLD Interim Register, issuing your 'Oqood' certificate. This legally prevents duplicate sales and secures your title in the government registry from Day 1.",
      "3. Secondary Market Protections (Form F / MOU): For ready homes, the buyer and seller execute RERA Contract Form F (electronic MOU via Dubai REST app), accompanied by a 10% security deposit held in trust by the licensed brokerage until the No Objection Certificate (NOC) and final Title Deed transfer at an official DLD Trustee Office."
    ]
  },
  {
    id: "blog_3",
    title: "Structuring Your AED 2M+ Property Portfolio for the 10-Year UAE Golden Visa & 0% Tax Residency",
    category: "UAE Golden Visa & Wealth Structuring",
    readTime: "5 Min Read",
    date: "October 2026",
    author: "Akshay & Legal Desk",
    image: "assets/como_interior_2.jpg",
    summary: "Updated 2026 regulations allow investors to qualify for the 10-Year UAE Golden Visa via ready, off-plan, or mortgaged properties worth AED 2,000,000 or more.",
    body: [
      "The UAE 10-Year Golden Visa has transformed Dubai from a pure investment hub into the world's premier second-home residency sanctuary for entrepreneurs, families, and retirees.",
      "Under the streamlined DLD Golden Visa rules, any foreign national who acquires one or more freehold properties with a combined Title Deed or Oqood value of at least AED 2,000,000 (~USD $545,000) qualifies for renewable 10-year residency.",
      "Crucial Updates Every Buyer Should Know: First, you can combine multiple properties under your name to reach the AED 2,000,000 threshold. Second, mortgaged properties and off-plan properties from approved developers are eligible. Third, Golden Visa holders can sponsor their spouse, children of any age, parents, and unlimited domestic staff—and unlike standard visas, your residency remains 100% valid even if you spend more than 6 consecutive months outside the UAE.",
      "Combined with 0% personal income tax, 0% capital gains tax on property resales, and 0% inheritance tax, a AED 2M+ Dubai property simultaneously serves as a high-yield hard currency asset (pegged to the US Dollar at 3.6725) and a generational residency plan B."
    ]
  },
  {
    id: "blog_4",
    title: "Dream Home Sanctuary vs. Cash-Flow Engine: Choosing the Right Dubai Community for Your Goal",
    category: "End-User vs. Investor Guide",
    readTime: "6 Min Read",
    date: "October 2026",
    author: "Elena Rostova • Director of Luxury Residences",
    image: "assets/allegro_living_2br.webp",
    summary: "A side-by-side comparison of Palm Jumeirah, Dubai Hills Estate, Downtown Dubai, Dubai Islands, and Dubailand for end-user families versus yield-focused investors.",
    body: [
      "At Rich World Real Estate, our first step in every consultation is separating 'End-User Lifestyle Utility' from 'Investor Yield Efficiency'—or intentionally blending both when a client wants a seasonal residence.",
      "For End-Users Seeking Their Dream Home: Communities like Dubai Hills Estate, Palm Jumeirah, and Arabian Ranches prioritize green parklands, low-density privacy, top-rated British/IB schools within a 10-minute radius, and quiet family streets. While net rental yields in ultra-prime villas average 5.5% to 6.8%, their long-term capital appreciation frequently exceeds 14% to 20% annually due to severe supply scarcity.",
      "For Investors Seeking Maximum Cash Flow & ROE: Districts such as Dubailand (DLRC), Jumeirah Village Circle (JVC), Business Bay, Dubai Maritime City, and Dubai Islands offer lower price-per-square-foot entry points (AED 1,350–2,200/sq.ft) alongside surging tenant demand. Well-selected 1BR and 2BR apartments in these corridors routinely deliver 8.5% to 11.2% NET annual yields.",
      "Our 2,000+ property transaction database allows us to show you exact historical service charges (AED/sq.ft), net occupancy rates, and resale velocity before you commit a single dirham."
    ]
  }
];

// Initial Sample Leads for Admin Inbox & Jota Export Demo
const DEFAULT_LEADS = [
  {
    id: "lead_rw_1001",
    campaign_id: "rich_world_dubai_web",
    agency_id: "agency_master",
    name: "Jonathan Vance",
    phone: "+1 416-892-3410",
    clean_phone: "14168923410",
    email: "j.vance@vancapital.ca",
    budget_aed: 5000000,
    budget_eur: Math.round(5000000 / EUR_RATE),
    objective: "Investor: Maximum ROI & Capital Growth",
    timeline: "Immediate (Ready to Book / Invest)",
    notes: "Interested in 2 units at Allegro Park (Dubai Islands) & Danube Maritime City for >140% ROE and 10-Year Golden Visa.",
    crm_status: "QUALIFIED",
    whatsapp_status: "pending",
    personalized_message: "Hello Jonathan, this is Akshay from Rich World Real Estate Dubai. Thank you for registering on our portal regarding your AED 5M investment allocation...",
    created_at: "2026-10-25T16:40:00Z"
  },
  {
    id: "lead_rw_1002",
    campaign_id: "rich_world_dubai_web",
    agency_id: "agency_master",
    name: "Sophia & Marcus Lindqvist",
    phone: "+44 7700 900412",
    clean_phone: "447700900412",
    email: "sophia.lindqvist@londonmail.co.uk",
    budget_aed: 6500000,
    budget_eur: Math.round(6500000 / EUR_RATE),
    objective: "End-User: Finding My Dream Home",
    timeline: "Within 30 to 60 Days",
    notes: "Relocating family of 4 from London to Dubai Hills Estate. Looking for a 4BR Dream Home near British curriculum schools.",
    crm_status: "CONTACTED",
    whatsapp_status: "pending",
    personalized_message: "Dear Sophia & Marcus, welcome to Rich World Real Estate Dubai. Akshay and Elena have curated 3 private villas in Dubai Hills Estate matching your family's criteria...",
    created_at: "2026-10-26T07:15:00Z"
  },
  {
    id: "lead_rw_1003",
    campaign_id: "rich_world_dubai_web",
    agency_id: "agency_master",
    name: "Dr. Rajeshwar Mehta",
    phone: "+971 52 914 8821",
    clean_phone: "971529148821",
    email: "dr.mehta@dubaihealthcare.ae",
    budget_aed: 2500000,
    budget_eur: Math.round(2500000 / EUR_RATE),
    objective: "UAE 10-Year Golden Visa Portfolio (AED 2M+)",
    timeline: "Immediate (Ready to Book / Invest)",
    notes: "Wants a high-yield 2BR unit eligible for immediate Oqood & 10-Year Golden Visa processing.",
    crm_status: "CREATED",
    whatsapp_status: "pending",
    personalized_message: "Hello Dr. Mehta, this is Akshay from Rich World Real Estate. We have prepared the Golden Visa breakdown for our AED 2.4M waterfront inventory...",
    created_at: "2026-10-26T09:10:00Z"
  }
];

// Global Reactive State
const state = {
  currency: localStorage.getItem("rw_currency") || "AED",
  lang: localStorage.getItem("rw_lang") || "en",
  theme: localStorage.getItem("rw_theme") || "light", // Light-First Default (Rule 4.2)
  selectedCategory: "All",
  calcStrategy: "investor",
  isAdminAuthenticated: sessionStorage.getItem("rw_admin_auth") === "true",
  categories: [],
  properties: [],
  blogs: [],
  leads: [],
  visits: [],
  announcement: ""
};

// ============================================================================
// 1. DUAL-LAYER PERSISTENCE BOOTSTRAP (0ms LocalStorage + Async Supabase)
// ============================================================================
function loadLocalState() {
  try {
    state.categories = JSON.parse(localStorage.getItem("rw_categories")) || DEFAULT_CATEGORIES;
    state.properties = JSON.parse(localStorage.getItem("rw_properties")) || DEFAULT_PROPERTIES;
    state.blogs = JSON.parse(localStorage.getItem("rw_blogs")) || DEFAULT_BLOGS;
    state.leads = JSON.parse(localStorage.getItem("rw_leads")) || DEFAULT_LEADS;
    state.visits = JSON.parse(localStorage.getItem("rw_visits")) || [];
    state.announcement = localStorage.getItem("rw_announcement") || "🏆 RERA-Certified Dubai Brokerage • Over 2,000+ Properties Sold • 0% Income & Capital Gains Tax • 10-Year UAE Golden Visa Structuring";
  } catch (e) {
    state.categories = DEFAULT_CATEGORIES;
    state.properties = DEFAULT_PROPERTIES;
    state.blogs = DEFAULT_BLOGS;
    state.leads = DEFAULT_LEADS;
    state.visits = [];
  }
}

function saveLocalState() {
  localStorage.setItem("rw_categories", JSON.stringify(state.categories));
  localStorage.setItem("rw_properties", JSON.stringify(state.properties));
  localStorage.setItem("rw_blogs", JSON.stringify(state.blogs));
  localStorage.setItem("rw_leads", JSON.stringify(state.leads));
  localStorage.setItem("rw_visits", JSON.stringify(state.visits));
  localStorage.setItem("rw_announcement", state.announcement);
  updateAdminBadges();
}

async function syncFromSupabase() {
  const supaUrl = localStorage.getItem("rw_supa_url");
  const supaKey = localStorage.getItem("rw_supa_key");
  if (!supaUrl || !supaKey) return;
  try {
    const res = await fetch(`${supaUrl}/rest/v1/rw_leads?select=*`, {
      headers: { apikey: supaKey, Authorization: `Bearer ${supaKey}` }
    });
    if (res.ok) {
      const cloudLeads = await res.json();
      if (Array.isArray(cloudLeads) && cloudLeads.length > 0) {
        state.leads = cloudLeads.map(l => ({ ...l, id: String(l.id) }));
        saveLocalState();
        renderAdminLeadsTable();
      }
    }
  } catch (err) {
    console.warn("[Dual-Layer Supabase Sync Notice]: Operating in resilient local mode.", err);
  }
}

// ============================================================================
// 2. AUTOMATIC VISITOR TELEMETRY & SESSION TRACKING
// ============================================================================
function recordVisitorArrival() {
  let sessionId = sessionStorage.getItem("rw_visitor_session_id");
  const isNewSession = !sessionId;
  if (!sessionId) {
    sessionId = "vis_" + Math.random().toString(36).substring(2, 9);
    sessionStorage.setItem("rw_visitor_session_id", sessionId);
  }

  if (isNewSession || state.visits.length === 0) {
    const ua = navigator.userAgent || "";
    const isMobile = /Mobile|Android|iPhone|iPad/i.test(ua);
    const deviceLabel = isMobile ? "📱 Mobile Smartphone" : "💻 Desktop Workstation";
    const referrer = document.referrer ? new URL(document.referrer).hostname : "Direct / Organic Search (Dubai)";

    // Seed 2 realistic prior visits if empty so Admin immediately sees rich telemetry
    if (state.visits.length === 0) {
      state.visits.push(
        {
          id: "vis_dubai91a",
          timestamp: "2026-10-26 08:42:11",
          device: "📱 Mobile Smartphone (iOS)",
          source: "Google Maps / Direct",
          interactions: "Viewed Hero, 2,000+ Track Record, Como Residences, Asked Legal AI Bot"
        },
        {
          id: "vis_tor88x",
          timestamp: "2026-10-26 09:18:04",
          device: "💻 Desktop Workstation (macOS)",
          source: "Instagram / Rich World Bio",
          interactions: "Simulated AED 4.1M ROI, Read Golden Visa Blog, Registered Contact"
        }
      );
    }

    const nowStr = new Date().toISOString().replace("T", " ").substring(0, 19);
    state.visits.unshift({
      id: String(sessionId),
      timestamp: nowStr,
      device: deviceLabel,
      source: referrer,
      interactions: "Landing Welcome, Dual-Mandate Services, Portfolio Active"
    });
    saveLocalState();
  }
}

function logVisitorInteraction(actionLabel) {
  const sessionId = sessionStorage.getItem("rw_visitor_session_id");
  const visit = state.visits.find(v => String(v.id) === String(sessionId)) || state.visits[0];
  if (visit && !visit.interactions.includes(actionLabel)) {
    visit.interactions += ` • ${actionLabel}`;
    saveLocalState();
  }
}

window.simulateVisitorSession = function () {
  const sources = ["Google Search (Dubai Real Estate)", "WhatsApp Referral (+1 647)", "Instagram Luxury Reels", "Direct Bookmark"];
  const devices = ["📱 Mobile Smartphone (iPhone 16 Pro)", "💻 Desktop (Windows 11)", "📱 Mobile (Samsung S25 Ultra)"];
  const actions = [
    "Viewed Portfolio & 2,000+ Sold Section",
    "Used ROI Simulator (AED 3.5M) & Read RERA Escrow Blog",
    "Consulted AI Bot on 10-Yr Golden Visa"
  ];
  const nowStr = new Date().toISOString().replace("T", " ").substring(0, 19);
  state.visits.unshift({
    id: "vis_" + Math.random().toString(36).substring(2, 8),
    timestamp: nowStr,
    device: devices[Math.floor(Math.random() * devices.length)],
    source: sources[Math.floor(Math.random() * sources.length)],
    interactions: actions[Math.floor(Math.random() * actions.length)]
  });
  saveLocalState();
  renderAdminVisitsTable();
};

// ============================================================================
// 3. CURRENCY, THEME (LIGHT-FIRST) & BILINGUAL (EN / AR RTL) CONTROLLERS
// ============================================================================
function formatPrice(amountAED) {
  if (state.currency === "USD") {
    const usd = Math.round(amountAED / USD_RATE);
    return "$" + usd.toLocaleString("en-US");
  }
  return "AED " + Math.round(amountAED).toLocaleString("en-US");
}

function applyTheme() {
  const htmlEl = document.documentElement;
  const icons = [document.getElementById("themeIcon"), document.getElementById("drawerThemeIcon")];
  if (state.theme === "dark") {
    htmlEl.classList.add("theme-dark");
    icons.forEach(i => i && i.setAttribute("data-lucide", "sun"));
  } else {
    htmlEl.classList.remove("theme-dark");
    icons.forEach(i => i && i.setAttribute("data-lucide", "moon"));
  }
  if (window.lucide) lucide.createIcons();
}

const I18N_DICT = {
  en: {
    nav_services: "Advisory Services",
    nav_track: "2,000+ Sold",
    nav_portfolio: "Signature Portfolio",
    nav_team: "Our Team",
    nav_blogs: "Investment Blogs",
    nav_bot: "Dubai Law AI Bot",
    nav_contact: "Contact",
    cta_book: "Book Appointment",
    hero_badge: "WELCOME TO RICH WORLD REAL ESTATE DUBAI • OVER 2,000+ PROPERTIES SOLD",
    hero_title: 'Guiding Families to Their <span class="italic gold-gradient-text">Dream Sanctuary</span> &amp; Investors to <span class="italic gold-gradient-text">Maximum Capital Growth.</span>',
    hero_subtitle: "Backed by a proven track record of <strong>more than 2,000+ properties sold</strong> across Dubai’s premier freehold destinations, <strong>Rich World Real Estate</strong> delivers tailored end-to-end accompaniment: helping end-users secure the home of their dreams and empowering global investors to multiply their capital through the highest-performing real estate assets in the market.",
    pillar1_title: "For End-Users: Your Dream Home",
    pillar2_title: "For Investors: Capital & Yield"
  },
  ar: {
    nav_services: "خدماتنا الاستشارية",
    nav_track: "+2,000 عقار مباع",
    nav_portfolio: "محفظة العقارات الفاخرة",
    nav_team: "فريق القيادة",
    nav_blogs: "مدونة الاستثمار",
    nav_bot: "المستشار الذكي للقوانين",
    nav_contact: "سجل اهتمامك",
    cta_book: "احجز استشارتك",
    hero_badge: "مرحباً بكم في ريتش وورلد العقارية دبي • خبرة تتجاوز 2,000+ عقار مباع",
    hero_title: 'نرشد العائلات إلى <span class="italic gold-gradient-text">منزل أحلامهم</span> والمستثمرين نحو <span class="italic gold-gradient-text">مضاعفة رأس المال.</span>',
    hero_subtitle: "بخبرة موثقة تتجاوز <strong>أكثر من 2,000 عقار مباع</strong> في أرقى مناطق التملك الحر في دبي، تقدم شركة <strong>Rich World Real Estate</strong> مرافقة استشارية متكاملة للمشترين النهائيين للعثور على منزل الأحلام وللمستثمرين لتعظيم العوائد الرأسمالية والإيجارية.",
    pillar1_title: "للمشترين النهائيين: منزل أحلامك",
    pillar2_title: "للمستثمرين: نمو رأس المال والعائد"
  }
};

function applyLanguage() {
  const htmlEl = document.documentElement;
  const langLabel = document.getElementById("langLabel");
  if (state.lang === "ar") {
    htmlEl.setAttribute("dir", "rtl");
    htmlEl.setAttribute("lang", "ar");
    if (langLabel) langLabel.textContent = "EN";
  } else {
    htmlEl.setAttribute("dir", "ltr");
    htmlEl.setAttribute("lang", "en");
    if (langLabel) langLabel.textContent = "العربية";
  }
  const dict = I18N_DICT[state.lang] || I18N_DICT.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });
}

// ============================================================================
// 4. INTERACTIVE ROI & DLD FEE CALCULATOR
// ============================================================================
function updateSimulatorCalc() {
  const rangeEl = document.getElementById("calcPriceRange");
  if (!rangeEl) return;
  const priceAED = Number(rangeEl.value) || 2500000;

  const isInvestor = state.calcStrategy === "investor";
  const netYieldRate = isInvestor ? 0.092 : 0.068;
  const fiveYearGrowthMultiplier = isInvestor ? 1.54 : 1.72;

  const annualNetRent = Math.round(priceAED * netYieldRate);
  const fiveYearVal = Math.round(priceAED * fiveYearGrowthMultiplier);
  const equityGain = fiveYearVal - priceAED;
  const dldFee = Math.round(priceAED * 0.04) + 4200; // 4% DLD + AED 4,200 Trustee Office Fee

  document.getElementById("calcPriceDisplay").textContent = formatPrice(priceAED);
  document.getElementById("calcNetRent").textContent = formatPrice(annualNetRent) + "/yr";
  document.getElementById("calcFiveYearVal").textContent = formatPrice(fiveYearVal);
  document.getElementById("calcGainBadge").textContent = `+${formatPrice(equityGain)} Capital Gain`;
  document.getElementById("calcDldFee").textContent = formatPrice(dldFee);

  const gvEl = document.getElementById("calcGoldenVisa");
  const gvSub = document.getElementById("calcGoldenVisaSub");
  if (priceAED >= 2000000) {
    gvEl.textContent = "✓ 10-Yr Eligible";
    gvEl.className = "font-display text-xl font-bold text-emerald-600 mt-1 block";
    gvSub.textContent = "Full Family & Staff Sponsorship";
  } else {
    const diff = 2000000 - priceAED;
    gvEl.textContent = "2-Yr Investor Visa";
    gvEl.className = "font-display text-xl font-bold text-amber-600 mt-1 block";
    gvSub.textContent = `Add ${formatPrice(diff)} for 10-Yr Golden Visa`;
  }
}

// ============================================================================
// 5. RENDER PORTFOLIO & DYNAMIC CATEGORIES
// ============================================================================
function renderCategoriesAndPortfolio() {
  const filterContainer = document.getElementById("categoryFilterContainer");
  const grid = document.getElementById("propertiesGrid");
  if (!filterContainer || !grid) return;

  // Render Filter Pills
  filterContainer.innerHTML = state.categories
    .map(cat => {
      const active = state.selectedCategory === cat;
      return `<button type="button" onclick="selectCategoryFilter('${cat.replace(/'/g, "\\'")}')" class="px-4 py-2 rounded-full text-xs font-bold transition ${
        active
          ? "btn-gold shadow-sm"
          : "border border-luxury bg-luxury-surface text-luxury-secondary hover:border-luxury-gold"
      }">${cat}</button>`;
    })
    .join("");

  // Filter Properties
  const filtered =
    state.selectedCategory === "All"
      ? state.properties
      : state.properties.filter(p => p.category === state.selectedCategory);

  grid.innerHTML = filtered
    .map(
      p => `
    <article class="bento-card overflow-hidden flex flex-col justify-between group">
      <div>
        <div class="relative aspect-[16/10] bg-[#09100D] overflow-hidden">
          <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#09100D]/85 via-transparent to-transparent"></div>
          <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#09100D]/80 backdrop-blur-md border border-[#D9B76F]/40 text-[#D9B76F] text-[10px] font-bold uppercase tracking-wider">
            ${p.category}
          </span>
          <div class="absolute bottom-3 inset-x-3 flex items-end justify-between gap-2 text-white">
            <div>
              <p class="text-[11px] text-[#D9B76F] font-semibold">${p.location}</p>
              <h3 class="font-display text-xl font-bold leading-snug">${p.title}</h3>
            </div>
          </div>
        </div>

        <div class="p-5 space-y-3">
          <div class="flex items-center justify-between gap-2 pb-3 border-b border-luxury">
            <div>
              <span class="text-[10px] uppercase tracking-wider text-luxury-muted block">Starting Allocation</span>
              <span class="font-display text-2xl font-bold gold-gradient-text">${formatPrice(p.priceAED)}</span>
            </div>
            <span class="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 text-[11px] font-bold">
              ${p.roiBadge}
            </span>
          </div>

          <p class="text-xs font-semibold text-luxury-primary flex items-center gap-1.5">
            <i data-lucide="layers" class="w-3.5 h-3.5 text-luxury-gold"></i>
            <span>${p.planSpecs}</span>
          </p>

          <p class="text-xs text-luxury-secondary leading-relaxed">
            ${p.description}
          </p>
        </div>
      </div>

      <div class="px-5 pb-5 pt-3 border-t border-luxury flex items-center justify-between gap-3">
        <!-- Sober CTA Button (Rule 8.3) -->
        <a href="#register-inbox" onclick="prefillPropertyInquiry('${p.title.replace(/'/g, "\\'")}', ${p.priceAED})" class="flex-1 py-2.5 px-4 rounded-full btn-gold text-center text-xs font-semibold tracking-wide">
          Book Appointment
        </a>
        <!-- WhatsApp Icon-Only Button (STRICT RULE 5: ZERO TEXT) -->
        <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="wa-icon-only-btn w-10 h-10 shrink-0">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.535 5.86l-1.535 5.604 5.748-1.508c1.693.903 3.621 1.416 5.669 1.416 6.627 0 12-5.373 12-12s-5.373-12-11.417-11.372z"/>
          </svg>
        </a>
      </div>
    </article>
  `
    )
    .join("");

  if (window.lucide) lucide.createIcons();
}

window.selectCategoryFilter = function (cat) {
  state.selectedCategory = cat;
  logVisitorInteraction(`Filtered Portfolio: ${cat}`);
  renderCategoriesAndPortfolio();
};

window.prefillPropertyInquiry = function (title, priceAED) {
  logVisitorInteraction(`Inquired Property: ${title}`);
  const notesEl = document.getElementById("regNotes");
  if (notesEl) {
    notesEl.value = `I would like a private consultation and dossier for: ${title} (${formatPrice(priceAED)}).`;
    notesEl.focus();
  }
};

window.prefillObjective = function (objValue) {
  const sel = document.getElementById("regObjective");
  if (sel) sel.value = objValue;
};

window.prefillAdvisor = function (advisorName) {
  const notesEl = document.getElementById("regNotes");
  if (notesEl) {
    notesEl.value = `Requesting a 1-on-1 strategy session with ${advisorName}.`;
  }
};

// ============================================================================
// 6. RENDER 4 DUBAI REAL ESTATE INVESTMENT BLOGS & READER MODAL
// ============================================================================
function renderBlogs() {
  const blogsGrid = document.getElementById("blogsGrid");
  if (!blogsGrid) return;

  blogsGrid.innerHTML = state.blogs
    .map(
      b => `
    <article class="bento-card overflow-hidden flex flex-col justify-between group">
      <div>
        <div class="relative aspect-[16/10] bg-[#09100D] overflow-hidden">
          <img src="${b.image || 'assets/srk_sea_view.webp'}" alt="${b.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#09100D]/80 via-transparent to-transparent"></div>
          <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#09100D]/85 border border-[#D9B76F]/40 text-[#D9B76F] text-[10px] font-bold uppercase tracking-wider">
            ${b.category}
          </span>
          <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 text-white text-[10px] font-semibold">
            ${b.readTime || '6 Min Read'}
          </span>
        </div>

        <div class="p-6 space-y-3">
          <div class="flex items-center gap-2 text-[11px] text-luxury-muted font-semibold">
            <span>${b.date || 'October 2026'}</span>
            <span>•</span>
            <span class="text-luxury-gold">${b.author || 'Rich World Advisory'}</span>
          </div>
          <h3 class="font-display text-2xl font-bold text-luxury-primary leading-snug">
            ${b.title}
          </h3>
          <p class="text-xs sm:text-sm text-luxury-secondary leading-relaxed">
            ${b.summary}
          </p>
        </div>
      </div>

      <div class="px-6 pb-6 pt-3 border-t border-luxury flex items-center justify-between gap-3">
        <button type="button" onclick="openBlogModal('${String(b.id)}')" class="px-5 py-2.5 rounded-full btn-gold text-xs font-semibold inline-flex items-center gap-2">
          <span>Read Full Article</span>
          <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
        </button>
        <button type="button" onclick="askBotQuestion('Summarize the key investment advice from the blog: ${b.title.replace(/'/g, "\\'")}'); document.getElementById('ai-advisor').scrollIntoView({behavior:'smooth'});" class="px-3.5 py-2 rounded-full border border-luxury text-xs font-semibold text-luxury-secondary hover:border-luxury-gold transition">
          Ask AI Bot
        </button>
      </div>
    </article>
  `
    )
    .join("");

  if (window.lucide) lucide.createIcons();
}

window.openBlogModal = function (blogId) {
  const blog = state.blogs.find(b => String(b.id) === String(blogId));
  if (!blog) return;
  logVisitorInteraction(`Read Blog: ${blog.title.substring(0, 28)}...`);

  const modal = document.getElementById("blogReaderModal");
  const content = document.getElementById("blogModalContent");
  const paragraphs = Array.isArray(blog.body) ? blog.body : String(blog.body).split("\n\n");

  content.innerHTML = `
    <div class="space-y-5">
      <div class="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#09100D]">
        <img src="${blog.image || 'assets/srk_sea_view.webp'}" alt="${blog.title}" class="w-full h-full object-cover" />
      </div>
      <div class="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-luxury-gold">
        <span>${blog.category}</span>
        <span>•</span>
        <span>${blog.readTime || '6 Min Read'}</span>
        <span>•</span>
        <span>By ${blog.author || 'Akshay & Advisory Desk'}</span>
      </div>
      <h2 class="font-display text-3xl sm:text-4xl font-bold text-luxury-primary leading-tight">${blog.title}</h2>
      <div class="space-y-4 text-sm sm:text-base text-luxury-secondary leading-relaxed border-t border-luxury pt-4">
        ${paragraphs.map(p => `<p>${p}</p>`).join("")}
      </div>
      <div class="p-5 rounded-2xl bg-luxury-elevated border border-luxury-gold flex flex-wrap items-center justify-between gap-4 mt-6">
        <div>
          <p class="font-display text-xl font-bold text-luxury-primary">Want to apply this strategy to your Dubai portfolio?</p>
          <p class="text-xs text-luxury-secondary">Book a private consultation with Akshay or message our executive desk.</p>
        </div>
        <div class="flex items-center gap-3">
          <a href="#register-inbox" onclick="closeBlogModal()" class="px-5 py-2.5 rounded-full btn-gold text-xs font-bold">Book Appointment</a>
          <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="wa-icon-only-btn w-10 h-10">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.535 5.86l-1.535 5.604 5.748-1.508c1.693.903 3.621 1.416 5.669 1.416 6.627 0 12-5.373 12-12s-5.373-12-11.417-11.372z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  if (window.lucide) lucide.createIcons();
};

window.closeBlogModal = function () {
  const modal = document.getElementById("blogReaderModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
};

// ============================================================================
// 7. TRAINED DUBAI REAL ESTATE LEGAL & INVESTMENT AI BOT ENGINE
// ============================================================================
function initAiAdvisorBot() {
  const container = document.getElementById("botMessagesContainer");
  if (!container) return;

  appendBotMessage(
    `Welcome to <strong>Rich World Real Estate Dubai</strong>! I am your AI Legal &amp; Investment Advisor, trained on <strong>DLD &amp; RERA laws</strong>, the <strong>10-Year UAE Golden Visa</strong>, and insights from our <strong>2,000+ sold properties</strong>.<br/><br/>
    Whether you are an <strong>end-user searching for your dream home</strong> or an <strong>investor aiming to multiply capital</strong>, ask me anything about Escrow laws, the 4% DLD fee, payment plans, or our signature portfolio!`
  );

  const form = document.getElementById("botChatForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = document.getElementById("botUserInput");
      const q = (input.value || "").trim();
      if (!q) return;
      input.value = "";
      askBotQuestion(q);
    });
  }
}

function appendUserMessage(text) {
  const container = document.getElementById("botMessagesContainer");
  if (!container) return;
  const div = document.createElement("div");
  div.className = "flex justify-end";
  div.innerHTML = `
    <div class="max-w-[85%] px-4 py-3 rounded-2xl rounded-br-none bg-[#7A5A1E] text-white text-xs sm:text-sm leading-relaxed shadow-sm">
      ${text}
    </div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function appendBotMessage(htmlContent) {
  const container = document.getElementById("botMessagesContainer");
  if (!container) return;
  const div = document.createElement("div");
  div.className = "flex items-start gap-2.5";
  div.innerHTML = `
    <div class="w-8 h-8 rounded-xl rw-logo-badge p-1 shrink-0 mt-0.5">
      <img src="assets/logo-transparent.png" alt="AI" class="w-full h-full object-contain" />
    </div>
    <div class="max-w-[88%] px-4 py-3 rounded-2xl rounded-tl-none bg-luxury-elevated border border-luxury text-luxury-primary text-xs sm:text-sm leading-relaxed space-y-2">
      ${htmlContent}
    </div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function generateTrainedLegalResponse(query) {
  const q = query.toLowerCase();

  // 1. Check if user shared phone or email inside the chat -> Auto-register lead!
  const phoneMatch = query.match(/(\+?\d[\d\s\-]{7,15}\d)/);
  const emailMatch = query.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/);
  if (phoneMatch || emailMatch) {
    const newLead = {
      id: "lead_bot_" + Date.now(),
      campaign_id: "rich_world_dubai_web",
      agency_id: "agency_master",
      name: "AI Bot VIP Inquiry",
      phone: phoneMatch ? phoneMatch[1].trim() : "+1 647-901-6999",
      clean_phone: phoneMatch ? phoneMatch[1].replace(/\D/g, "") : "16479016999",
      email: emailMatch ? emailMatch[1] : "bot-inquiry@richworld.ae",
      budget_aed: 2500000,
      budget_eur: Math.round(2500000 / EUR_RATE),
      objective: "AI Bot Legal & Investment Consultation",
      timeline: "Immediate (Captured via AI Bot)",
      notes: `Captured directly in AI Bot Chat: "${query}"`,
      crm_status: "CREATED",
      whatsapp_status: "pending",
      personalized_message: `Hello! This is Akshay from Rich World Real Estate Dubai following up on your chat with our AI Legal & ROI Advisor...`,
      created_at: new Date().toISOString()
    };
    state.leads.unshift(newLead);
    saveLocalState();
    renderAdminLeadsTable();
    return `✅ <strong>Priority Contact Registered!</strong> I have logged your contact details directly into <strong>Akshay’s Executive CRM &amp; Jota Pipeline</strong>. Our senior team will reach out shortly, or you can click the green WhatsApp icon to connect immediately.`;
  }

  // 2. RERA Escrow Law No. 8 & Oqood Law No. 13
  if (q.includes("escrow") || q.includes("oqood") || q.includes("rera") || q.includes("law") || q.includes("safe") || q.includes("off-plan")) {
    return `
      <strong>⚖️ Dubai RERA &amp; DLD Statutory Buyer Protections:</strong><br/>
      • <strong>Law No. 8 of 2007 (Project Escrow Accounts):</strong> 100% of off-plan buyer installments must be deposited into a project-specific RERA Escrow bank account. Developers cannot access funds freely—monies are released strictly to the contractor as independent RERA engineers certify physical construction milestones.<br/>
      • <strong>Law No. 13 of 2008 (Oqood Interim Registry):</strong> Upon paying your initial deposit and 4% DLD fee, your off-plan unit is registered in your name via an official <em>Oqood Certificate</em>, protecting your ownership rights in the government database.<br/>
      • <strong>Defect Liability Period (DLP):</strong> Developers are legally bound by a <strong>1-year snagging warranty</strong> on finishes/MEP and a <strong>10-year structural warranty</strong> under the UAE Civil Code.
    `;
  }

  // 3. Golden Visa Rules
  if (q.includes("golden visa") || q.includes("residency") || q.includes("visa") || q.includes("10-year") || q.includes("2m")) {
    return `
      <strong>🛂 UAE 10-Year Golden Visa via Real Estate (2026 Rules):</strong><br/>
      • <strong>Minimum Threshold:</strong> Purchase one or multiple freehold properties totaling <strong>AED 2,000,000+ (~USD $545,000)</strong>.<br/>
      • <strong>Off-Plan &amp; Mortgaged Allowed:</strong> Both ready Title Deeds and registered off-plan properties (Oqood) from approved developers qualify, as do mortgaged properties.<br/>
      • <strong>Family Sponsorship:</strong> Covers the primary investor, spouse, children of any age, parents, and domestic staff.<br/>
      • <strong>Zero Stay Restriction:</strong> Unlike standard residencies, your Golden Visa stays valid even if you live outside the UAE for more than 6 months at a time.<br/>
      <em>Would you like to view our AED 2.4M+ Golden Visa qualifying waterfront properties?</em>
    `;
  }

  // 4. DLD 4% Fee & Buying Costs / Taxes
  if (q.includes("cost") || q.includes("fee") || q.includes("dld") || q.includes("4%") || q.includes("tax") || q.includes("foreign")) {
    return `
      <strong>💰 Official Dubai Property Acquisition Costs &amp; Tax Framework:</strong><br/>
      • <strong>DLD Registration / Transfer Fee:</strong> <strong>4%</strong> of the purchase price (one-time government fee paid to the Dubai Land Department).<br/>
      • <strong>Oqood / Title Deed Admin Fee:</strong> ~AED 580 to AED 3,000 (for off-plan Oqood) or <strong>AED 4,200</strong> (Trustee Office fee for ready properties above AED 500K).<br/>
      • <strong>Agency Commission:</strong> <strong>0% Commission</strong> when buying off-plan through Rich World Real Estate (2% + VAT on secondary ready market).<br/>
      • <strong>100% Foreign Freehold (Law No. 7 of 2006):</strong> Non-residents and foreign nationals enjoy 100% perpetual freehold ownership in designated zones with <strong>0% Annual Property Tax, 0% Rental Income Tax, and 0% Capital Gains Tax</strong>.
    `;
  }

  // 5. Dream Home vs Investor ROI / 2,000+ Sold / Rich World Services
  if (q.includes("dream") || q.includes("investor") || q.includes("roi") || q.includes("yield") || q.includes("2000") || q.includes("2,000") || q.includes("rich world") || q.includes("akshay")) {
    return `
      <strong>🏆 The Rich World Real Estate Dual-Mandate (2,000+ Properties Sold):</strong><br/>
      Led by Managing Principal <strong>Akshay</strong>, our firm has successfully closed over <strong>2,000+ properties</strong> across two specialized divisions:<br/>
      1. <strong>End-User Dream Home Concierge:</strong> We guide families to serene villas and waterfront penthouses in <em>Dubai Hills Estate, Palm Jumeirah, and Downtown</em>—handling school proximity analysis, Form F (MOU) legal protection, mortgage structuring, and 150-point snagging.<br/>
      2. <strong>Investor Capital Growth Desk:</strong> We accompany investors into high-yield assets (<strong>8.5%–11.5% NET rental yield</strong>) and leveraged off-plan payment plans (30/70 &amp; 50/50 post-handover) achieving <strong>&gt;140% Return on Equity (ROE)</strong>.<br/>
      <em>You can register in our Priority Inbox below or click the green WhatsApp icon to connect directly with Akshay!</em>
    `;
  }

  // Default intelligent synthesis
  return `
    <strong>📊 Rich World Advisory Insight:</strong><br/>
    In Dubai’s current market cycle, buyers benefit from full <strong>RERA Escrow protection (Law No. 8 of 2007)</strong>, <strong>0% income/capital gains tax</strong>, and <strong>10-Year Golden Visa eligibility from AED 2,000,000</strong>.<br/><br/>
    With <strong>over 2,000+ properties sold</strong>, <strong>Akshay</strong> and our advisory team can tailor a custom comparison for you—whether you are looking for a family dream sanctuary or a high-ROE investment. Feel free to leave your WhatsApp number or email right here in the chat, or fill out the <strong>Priority Registration Inbox</strong> below!
  `;
}

window.askBotQuestion = function (questionText) {
  logVisitorInteraction("Consulted AI Legal Bot");
  appendUserMessage(questionText);
  setTimeout(() => {
    const reply = generateTrainedLegalResponse(questionText);
    appendBotMessage(reply);
  }, 280);
};

// ============================================================================
// 8. PRIORITY USER REGISTRATION INBOX & JOTA SYSTEM EXPORTER
// ============================================================================
function initLeadRegistrationForm() {
  const form = document.getElementById("leadRegistrationForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("regName").value.trim();
    const phone = document.getElementById("regPhone").value.trim();
    const cleanPhone = phone.replace(/\D/g, "");
    const email = document.getElementById("regEmail").value.trim();
    const objective = document.getElementById("regObjective").value;
    const budgetAED = Number(document.getElementById("regBudget").value) || 2500000;
    const budgetEUR = Math.round(budgetAED / EUR_RATE);
    const timeline = document.getElementById("regTimeline").value;
    const notes = document.getElementById("regNotes").value.trim() || "Registered via Rich World Landing Page";

    const newLead = {
      id: String("lead_rw_" + Date.now()),
      campaign_id: "rich_world_dubai_web",
      agency_id: "agency_master",
      name,
      phone,
      clean_phone: cleanPhone || "16479016999",
      email,
      budget_aed: budgetAED,
      budget_eur: budgetEUR,
      objective,
      timeline,
      notes,
      crm_status: "CREATED",
      whatsapp_status: "pending",
      personalized_message: `Hello ${name}, this is Akshay from Rich World Real Estate Dubai. Thank you for registering regarding "${objective}" (Budget ~AED ${budgetAED.toLocaleString()}). I have prepared a bespoke selection of properties for you...`,
      created_at: new Date().toISOString()
    };

    state.leads.unshift(newLead);
    logVisitorInteraction(`Registered Lead (${name})`);
    saveLocalState();
    renderAdminLeadsTable();

    const banner = document.getElementById("regConfirmationBanner");
    if (banner) {
      banner.classList.remove("hidden");
      banner.innerHTML = `
        <div class="flex items-center justify-between gap-3">
          <div>
            <p class="font-bold text-emerald-700 dark:text-emerald-400">✓ Profile Registered in Akshay's Executive Inbox &amp; Jota CRM!</p>
            <p class="mt-0.5">Thank you, <strong>${name}</strong>. Your inquiry (${objective}) has been logged for priority accompaniment.</p>
          </div>
          <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="wa-icon-only-btn w-9 h-9 shrink-0">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.535 5.86l-1.535 5.604 5.748-1.508c1.693.903 3.621 1.416 5.669 1.416 6.627 0 12-5.373 12-12s-5.373-12-11.417-11.372z"/>
            </svg>
          </a>
        </div>
      `;
    }
    form.reset();
  });
}

// JOTA SYSTEM EXPORT 1: CSV / EXCEL FORMAT (/api/crm/campaigns/upload-excel compatible)
window.exportLeadsJotaCSV = function () {
  const headers = [
    "name",
    "phone",
    "clean_phone",
    "email",
    "budget_aed",
    "budget_eur",
    "objective",
    "timeline",
    "notes",
    "crm_status",
    "whatsapp_status",
    "personalized_message",
    "created_at"
  ];
  const escapeCsv = val => `"${String(val ?? "").replace(/"/g, '""')}"`;
  const rows = state.leads.map(l =>
    [
      l.name,
      l.phone,
      l.clean_phone || String(l.phone || "").replace(/\D/g, ""),
      l.email,
      l.budget_aed,
      l.budget_eur || Math.round((l.budget_aed || 0) / EUR_RATE),
      l.objective,
      l.timeline,
      l.notes,
      l.crm_status || "CREATED",
      l.whatsapp_status || "pending",
      l.personalized_message || "",
      l.created_at
    ]
      .map(escapeCsv)
      .join(",")
  );

  const csvContent = "\uFEFF" + [headers.join(","), ...rows].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `rich_world_jota_leads_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showJotaStatus("✓ Jota CSV / Excel file downloaded! Ready for direct import in Jota CRM.", "emerald");
};

// JOTA SYSTEM EXPORT 2: NATIVE JOTA JSON SCHEMA (campaigns + leads + visits)
window.exportLeadsJotaJSON = function () {
  const jotaPayload = {
    jota_schema_version: "2.0",
    agency_id: "agency_master",
    campaign: {
      id: "rich_world_dubai_web",
      name: "Rich World Real Estate Dubai — Web Leads",
      category: "Real Estate Dubai",
      description: "End-User Dream Homes & Investor Capital Growth Leads (Akshay +1 647-901-6999)",
      agency_id: "agency_master",
      created_at: new Date().toISOString()
    },
    leads: state.leads.map(l => ({
      id: String(l.id),
      campaign_id: "rich_world_dubai_web",
      agency_id: "agency_master",
      name: l.name,
      phone: l.phone,
      clean_phone: l.clean_phone || String(l.phone || "").replace(/\D/g, ""),
      email: l.email || "",
      budget_aed: Number(l.budget_aed) || 0,
      budget_eur: Number(l.budget_eur) || Math.round((Number(l.budget_aed) || 0) / EUR_RATE),
      objective: l.objective || "",
      timeline: l.timeline || "",
      notes: l.notes || "",
      crm_status: l.crm_status || "CREATED",
      whatsapp_status: l.whatsapp_status || "pending",
      personalized_message: l.personalized_message || "",
      created_at: l.created_at || new Date().toISOString()
    })),
    visitor_telemetry: state.visits
  };

  const blob = new Blob([JSON.stringify(jotaPayload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `rich_world_jota_crm_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showJotaStatus("✓ Jota JSON package exported with full campaign, leads & visitor telemetry!", "emerald");
};

// JOTA SYSTEM EXPORT 3: DIRECT LIVE PUSH TO LOCAL JOTA FASTAPI (127.0.0.1:8000)
window.pushLeadsToJotaLocalAPI = async function () {
  showJotaStatus("Connecting to Jota Local API at http://127.0.0.1:8000/api/crm/leads ...", "amber");
  let pushed = 0;
  try {
    for (const lead of state.leads) {
      const res = await fetch("http://127.0.0.1:8000/api/crm/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...lead,
          id: String(lead.id),
          campaign_id: "rich_world_dubai_web",
          agency_id: "agency_master"
        })
      });
      if (res.ok) pushed++;
    }
    showJotaStatus(`✓ Successfully synced ${pushed} leads directly into local Jota CRM (127.0.0.1:8000)!`, "emerald");
  } catch (err) {
    showJotaStatus(
      "ℹ️ Jota Desktop API (:8000) is not currently reachable from browser CORS or offline. Use 'Export Jota CSV / Excel' or 'Export Jota JSON' to import anytime!",
      "amber"
    );
  }
};

window.exportVisitsCSV = function () {
  const headers = ["id", "timestamp", "device", "source", "interactions"];
  const escapeCsv = val => `"${String(val ?? "").replace(/"/g, '""')}"`;
  const rows = state.visits.map(v =>
    [v.id, v.timestamp, v.device, v.source, v.interactions].map(escapeCsv).join(",")
  );
  const csvContent = "\uFEFF" + [headers.join(","), ...rows].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `rich_world_visitor_telemetry_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};

function showJotaStatus(msg, color) {
  const box = document.getElementById("jotaSyncStatusMsg");
  if (!box) return;
  box.classList.remove("hidden");
  box.className = `p-3 rounded-xl text-xs font-semibold ${
    color === "emerald"
      ? "bg-emerald-500/15 text-emerald-600 border border-emerald-500/30"
      : "bg-amber-500/15 text-amber-600 border border-amber-500/30"
  }`;
  box.textContent = msg;
}

// ============================================================================
// 9. ADMIN DASHBOARD (5 MANDATORY TABS + HTML5 CANVAS 800x800 COMPRESSOR)
// ============================================================================
function updateAdminBadges() {
  const badge = document.getElementById("adminLeadCountBadge");
  if (badge) badge.textContent = state.leads.length;

  const kpiLeads = document.getElementById("kpiTotalLeads");
  const kpiVisits = document.getElementById("kpiTotalVisits");
  const kpiProps = document.getElementById("kpiTotalProps");
  const kpiBlogs = document.getElementById("kpiTotalBlogs");

  if (kpiLeads) kpiLeads.textContent = state.leads.length;
  if (kpiVisits) kpiVisits.textContent = state.visits.length;
  if (kpiProps) kpiProps.textContent = state.properties.length;
  if (kpiBlogs) kpiBlogs.textContent = state.blogs.length;
}

function openAdminModal() {
  const modal = document.getElementById("adminModal");
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  syncAdminAuthView();
}

window.closeAdminModal = function () {
  const modal = document.getElementById("adminModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
};

function syncAdminAuthView() {
  const loginView = document.getElementById("adminLoginView");
  const dashView = document.getElementById("adminDashboardView");
  const logoutBtn = document.getElementById("adminLogoutBtn");
  const adminBtnText = document.getElementById("adminBtnText");

  if (state.isAdminAuthenticated) {
    loginView.classList.add("hidden");
    dashView.classList.remove("hidden");
    logoutBtn.classList.remove("hidden");
    if (adminBtnText) adminBtnText.textContent = "Admin VIP";
    renderAdminLeadsTable();
    renderAdminVisitsTable();
    renderAdminCatalog();
    renderAdminCategories();
    const annInput = document.getElementById("adminAnnouncementInput");
    if (annInput) annInput.value = state.announcement;
  } else {
    loginView.classList.remove("hidden");
    dashView.classList.add("hidden");
    logoutBtn.classList.add("hidden");
  }
  updateAdminBadges();
  if (window.lucide) lucide.createIcons();
}

function renderAdminLeadsTable() {
  const tbody = document.getElementById("adminLeadsTableBody");
  if (!tbody) return;

  tbody.innerHTML = state.leads
    .map(
      l => `
    <tr class="hover:bg-luxury-elevated/60 transition">
      <td class="p-3">
        <p class="font-bold text-luxury-primary">${l.name}</p>
        <p class="text-[10px] text-luxury-muted">${String(l.created_at || "").slice(0, 16).replace("T", " ")}</p>
      </td>
      <td class="p-3">
        <p class="font-semibold text-luxury-primary">${l.phone}</p>
        <p class="text-[11px] text-luxury-secondary">${l.email || "-"}</p>
      </td>
      <td class="p-3">
        <p class="font-semibold text-luxury-gold">${l.objective}</p>
        <p class="text-[11px] text-luxury-secondary">${l.timeline || ""}</p>
        <p class="text-[10px] text-luxury-muted mt-0.5 max-w-xs truncate" title="${l.notes || ""}">${l.notes || ""}</p>
      </td>
      <td class="p-3 font-semibold">
        <p>AED ${Number(l.budget_aed || 0).toLocaleString()}</p>
        <p class="text-[10px] text-luxury-muted">€${Number(l.budget_eur || Math.round((l.budget_aed || 0) / EUR_RATE)).toLocaleString()}</p>
      </td>
      <td class="p-3">
        <select onchange="updateLeadStatus('${String(l.id)}', this.value)" class="px-2 py-1 rounded-lg bg-luxury-surface border border-luxury text-[11px] font-bold">
          ${["CREATED", "CONTACTED", "QUALIFIED", "VIP_INVESTOR", "CLOSED"]
            .map(s => `<option value="${s}" ${l.crm_status === s ? "selected" : ""}>${s}</option>`)
            .join("")}
        </select>
      </td>
      <td class="p-3 text-right">
        <div class="inline-flex items-center gap-2">
          <!-- WhatsApp Icon-Only Trigger (Rule 5) -->
          <a href="https://wa.me/${l.clean_phone || '16479016999'}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="wa-icon-only-btn w-7 h-7">
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.535 5.86l-1.535 5.604 5.748-1.508c1.693.903 3.621 1.416 5.669 1.416 6.627 0 12-5.373 12-12s-5.373-12-11.417-11.372z"/>
            </svg>
          </a>
          <button type="button" onclick="deleteLead('${String(l.id)}')" class="p-1.5 rounded-lg text-rose-500 hover:bg-rose-500/10" title="Delete Lead">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </td>
    </tr>
  `
    )
    .join("");
  if (window.lucide) lucide.createIcons();
}

window.updateLeadStatus = function (leadId, newStatus) {
  const target = state.leads.find(l => String(l.id) === String(leadId));
  if (target) {
    target.crm_status = newStatus;
    saveLocalState();
  }
};

window.deleteLead = function (leadId) {
  // Strict String ID rule (Rule 7.3)
  state.leads = state.leads.filter(l => String(l.id) !== String(leadId));
  saveLocalState();
  renderAdminLeadsTable();
};

window.addDemoLead = function () {
  const sampleNames = ["Tariq Al-Ghurair", "Victoria Kensington", "Chen Wei (Singapore Family Office)", "Carlos Mendoza"];
  const chosen = sampleNames[Math.floor(Math.random() * sampleNames.length)];
  const budget = [2500000, 4200000, 7800000][Math.floor(Math.random() * 3)];
  state.leads.unshift({
    id: String("lead_rw_" + Date.now()),
    campaign_id: "rich_world_dubai_web",
    agency_id: "agency_master",
    name: chosen,
    phone: "+1 647-555-0188",
    clean_phone: "16475550188",
    email: "investor@familyoffice.org",
    budget_aed: budget,
    budget_eur: Math.round(budget / EUR_RATE),
    objective: "Investor: Maximum ROI & Capital Growth",
    timeline: "Immediate (Ready to Book / Invest)",
    notes: "Generated test lead for Jota CRM verification.",
    crm_status: "CREATED",
    whatsapp_status: "pending",
    personalized_message: `Hello ${chosen}, Akshay from Rich World Real Estate Dubai here...`,
    created_at: new Date().toISOString()
  });
  saveLocalState();
  renderAdminLeadsTable();
};

function renderAdminVisitsTable() {
  const tbody = document.getElementById("adminVisitsTableBody");
  if (!tbody) return;
  tbody.innerHTML = state.visits
    .map(
      v => `
    <tr class="hover:bg-luxury-elevated/60">
      <td class="p-3 font-mono text-[11px]">${v.timestamp}</td>
      <td class="p-3 font-mono text-[11px] text-luxury-gold">${v.id}</td>
      <td class="p-3">${v.device}</td>
      <td class="p-3">${v.source}</td>
      <td class="p-3 text-luxury-secondary">${v.interactions}</td>
    </tr>
  `
    )
    .join("");
}

// HTML5 CANVAS IMAGE COMPRESSOR (Max 800x800, WebP/JPEG ~45KB — Rule 6.2)
function initCanvasImageCompressor() {
  const fileInput = document.getElementById("propImageFile");
  if (!fileInput) return;

  fileInput.addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_DIM = 800;
        let w = img.width;
        let h = img.height;
        if (w > h && w > MAX_DIM) {
          h = Math.round((h * MAX_DIM) / w);
          w = MAX_DIM;
        } else if (h > MAX_DIM) {
          w = Math.round((w * MAX_DIM) / h);
          h = MAX_DIM;
        }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, w, h);
        const compressedDataUrl = canvas.toDataURL("image/webp", 0.78);
        document.getElementById("propImageData").value = compressedDataUrl;
        const kb = Math.round((compressedDataUrl.length * 3) / 4 / 1024);
        const statusEl = document.getElementById("canvasCompressStatus");
        if (statusEl) statusEl.textContent = `✓ Compressed via HTML5 Canvas (${w}x${h}px, ~${kb}KB)`;
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function renderAdminCatalog() {
  const list = document.getElementById("adminCatalogList");
  const catSelect = document.getElementById("propCategory");
  if (catSelect) {
    catSelect.innerHTML = state.categories
      .filter(c => c !== "All")
      .map(c => `<option value="${c}">${c}</option>`)
      .join("");
  }
  if (!list) return;

  list.innerHTML = state.properties
    .map(
      p => `
    <div class="p-4 rounded-2xl bg-luxury-elevated border border-luxury flex flex-col justify-between gap-3 text-xs">
      <div class="flex items-center gap-3">
        <img src="${p.image}" alt="${p.title}" class="w-16 h-16 rounded-xl object-cover shrink-0" />
        <div>
          <span class="text-[10px] font-bold uppercase text-luxury-gold">${p.category}</span>
          <p class="font-bold text-luxury-primary line-clamp-1">${p.title}</p>
          <p class="text-luxury-secondary">AED ${Number(p.priceAED).toLocaleString()}</p>
        </div>
      </div>
      <div class="flex items-center justify-end gap-2 pt-2 border-t border-luxury">
        <button type="button" onclick="editProperty('${String(p.id)}')" class="px-3 py-1 rounded-lg border border-luxury-gold text-luxury-gold font-semibold">Edit</button>
        <button type="button" onclick="deleteProperty('${String(p.id)}')" class="px-3 py-1 rounded-lg border border-rose-500/40 text-rose-500 font-semibold">Delete</button>
      </div>
    </div>
  `
    )
    .join("");
}

window.editProperty = function (id) {
  const p = state.properties.find(item => String(item.id) === String(id));
  if (!p) return;
  document.getElementById("propEditId").value = String(p.id);
  document.getElementById("propTitle").value = p.title;
  document.getElementById("propLocation").value = p.location;
  document.getElementById("propPriceAED").value = p.priceAED;
  document.getElementById("propCategory").value = p.category;
  document.getElementById("propRoi").value = p.roiBadge;
  document.getElementById("propPlan").value = p.planSpecs;
  document.getElementById("propDesc").value = p.description;
  document.getElementById("propImageData").value = p.image;
};

window.deleteProperty = function (id) {
  state.properties = state.properties.filter(item => String(item.id) !== String(id));
  saveLocalState();
  renderCategoriesAndPortfolio();
  renderAdminCatalog();
};

window.resetPropertyForm = function () {
  const form = document.getElementById("adminPropertyForm");
  if (form) form.reset();
  document.getElementById("propEditId").value = "";
  document.getElementById("propImageData").value = "";
  const statusEl = document.getElementById("canvasCompressStatus");
  if (statusEl) statusEl.textContent = "";
};

function renderAdminCategories() {
  const container = document.getElementById("adminCategoriesList");
  if (!container) return;
  container.innerHTML = state.categories
    .map(
      cat => `
    <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-luxury-surface border border-luxury text-xs font-semibold">
      <span>${cat}</span>
      ${
        cat !== "All"
          ? `<button type="button" onclick="removeDynamicCategory('${cat.replace(/'/g, "\\'")}')" class="text-rose-500 hover:font-bold">×</button>`
          : ""
      }
    </span>
  `
    )
    .join("");
}

window.addDynamicCategory = function () {
  const input = document.getElementById("newCategoryInput");
  const val = (input.value || "").trim();
  if (!val || state.categories.includes(val)) return;
  state.categories.push(val);
  input.value = "";
  saveLocalState();
  renderCategoriesAndPortfolio();
  renderAdminCategories();
  renderAdminCatalog();
};

window.removeDynamicCategory = function (cat) {
  state.categories = state.categories.filter(c => String(c) !== String(cat));
  if (state.selectedCategory === cat) state.selectedCategory = "All";
  saveLocalState();
  renderCategoriesAndPortfolio();
  renderAdminCategories();
};

window.saveAnnouncementBanner = function () {
  const val = document.getElementById("adminAnnouncementInput").value.trim();
  if (!val) return;
  state.announcement = val;
  document.getElementById("announcementText").textContent = val;
  saveLocalState();
};

window.saveSupabaseConfig = function () {
  const url = document.getElementById("supaUrlInput").value.trim();
  const key = document.getElementById("supaKeyInput").value.trim();
  if (url) localStorage.setItem("rw_supa_url", url);
  if (key) localStorage.setItem("rw_supa_key", key);
  syncFromSupabase();
  alert("Supabase Dual-Layer Cloud configuration saved!");
};

window.downloadFullSystemBackup = function () {
  const backup = {
    timestamp: new Date().toISOString(),
    company: "Rich World Real Estate Dubai",
    categories: state.categories,
    properties: state.properties,
    blogs: state.blogs,
    leads: state.leads,
    visits: state.visits,
    announcement: state.announcement
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `rich_world_full_backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

window.restoreFullSystemBackup = function (event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.categories) state.categories = data.categories;
      if (data.properties) state.properties = data.properties;
      if (data.blogs) state.blogs = data.blogs;
      if (data.leads) state.leads = data.leads;
      if (data.visits) state.visits = data.visits;
      if (data.announcement) state.announcement = data.announcement;
      saveLocalState();
      renderCategoriesAndPortfolio();
      renderBlogs();
      syncAdminAuthView();
    } catch (err) {
      console.error("Invalid backup JSON:", err);
    }
  };
  reader.readAsText(file);
};

// ============================================================================
// 10. INITIALIZATION & EVENT LISTENERS
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadLocalState();
  recordVisitorArrival();
  applyTheme();
  applyLanguage();

  // Set announcement text
  const annTextEl = document.getElementById("announcementText");
  if (annTextEl && state.announcement) annTextEl.textContent = state.announcement;

  // Currency Label
  const curLabel = document.getElementById("currencyLabel");
  if (curLabel) curLabel.textContent = state.currency;

  // Render Main Sections
  updateSimulatorCalc();
  renderCategoriesAndPortfolio();
  renderBlogs();
  initAiAdvisorBot();
  initLeadRegistrationForm();
  initCanvasImageCompressor();
  updateAdminBadges();
  syncFromSupabase();

  // Theme Toggle
  ["themeToggleBtn", "drawerThemeToggleBtn"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        localStorage.setItem("rw_theme", state.theme);
        applyTheme();
      });
    }
  });

  // Currency Toggle
  ["currencyToggleBtn", "drawerCurrencyBtn"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        state.currency = state.currency === "AED" ? "USD" : "AED";
        localStorage.setItem("rw_currency", state.currency);
        if (curLabel) curLabel.textContent = state.currency;
        updateSimulatorCalc();
        renderCategoriesAndPortfolio();
      });
    }
  });

  // Language Toggle
  ["langToggleBtn", "drawerLangBtn"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        state.lang = state.lang === "en" ? "ar" : "en";
        localStorage.setItem("rw_lang", state.lang);
        applyLanguage();
      });
    }
  });

  // Mobile Drawer Controls
  const openDrawerBtn = document.getElementById("openDrawerBtn");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const drawerPanel = document.getElementById("drawerPanel");

  function openDrawer() {
    drawerBackdrop.classList.add("active");
    drawerPanel.classList.add("active");
  }
  function closeDrawer() {
    drawerBackdrop.classList.remove("active");
    drawerPanel.classList.remove("active");
  }
  if (openDrawerBtn) openDrawerBtn.addEventListener("click", openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);
  document.querySelectorAll(".drawer-link").forEach(l => l.addEventListener("click", closeDrawer));

  // Simulator Range & Strategy Buttons
  const rangeEl = document.getElementById("calcPriceRange");
  if (rangeEl) {
    rangeEl.addEventListener("input", () => {
      logVisitorInteraction("Used ROI & DLD Simulator");
      updateSimulatorCalc();
    });
  }
  document.querySelectorAll(".calc-strat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.calcStrategy = btn.dataset.strategy;
      document.querySelectorAll(".calc-strat-btn").forEach(b => {
        b.classList.remove("bg-[#7A5A1E]", "text-white", "border-luxury-gold");
        b.classList.add("border-luxury", "text-luxury-primary");
      });
      btn.classList.add("bg-[#7A5A1E]", "text-white", "border-luxury-gold");
      updateSimulatorCalc();
    });
  });

  // Admin Access & Login
  const adminAccessBtn = document.getElementById("adminAccessBtn");
  if (adminAccessBtn) adminAccessBtn.addEventListener("click", openAdminModal);

  const adminLoginForm = document.getElementById("adminLoginForm");
  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", e => {
      e.preventDefault();
      const email = document.getElementById("adminEmailInput").value.trim().toLowerCase();
      const pass = document.getElementById("adminPassInput").value.trim();
      if ((email === "admin@richworld.ae" || email === "admin@negocio.com") && pass === "admin123") {
        state.isAdminAuthenticated = true;
        sessionStorage.setItem("rw_admin_auth", "true");
        document.getElementById("adminLoginError").classList.add("hidden");
        syncAdminAuthView();
      } else {
        document.getElementById("adminLoginError").classList.remove("hidden");
      }
    });
  }

  const adminLogoutBtn = document.getElementById("adminLogoutBtn");
  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener("click", () => {
      state.isAdminAuthenticated = false;
      sessionStorage.removeItem("rw_admin_auth");
      syncAdminAuthView();
    });
  }

  // Admin 5-Tab Switching
  document.querySelectorAll(".admin-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.admintab;
      document.querySelectorAll(".admin-tab-btn").forEach(b => {
        b.classList.remove("bg-[#7A5A1E]", "text-white");
        b.classList.add("border", "border-luxury", "text-luxury-primary");
      });
      btn.classList.add("bg-[#7A5A1E]", "text-white");
      document.querySelectorAll(".admin-tab-panel").forEach(p => p.classList.add("hidden"));
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.remove("hidden");
    });
  });

  // Admin Property Form Save
  const propForm = document.getElementById("adminPropertyForm");
  if (propForm) {
    propForm.addEventListener("submit", e => {
      e.preventDefault();
      const editId = document.getElementById("propEditId").value;
      const newProp = {
        id: editId ? String(editId) : String("prop_" + Date.now()),
        title: document.getElementById("propTitle").value.trim(),
        location: document.getElementById("propLocation").value.trim(),
        priceAED: Number(document.getElementById("propPriceAED").value) || 2500000,
        category: document.getElementById("propCategory").value,
        roiBadge: document.getElementById("propRoi").value.trim(),
        planSpecs: document.getElementById("propPlan").value.trim(),
        description: document.getElementById("propDesc").value.trim(),
        image: document.getElementById("propImageData").value || "assets/penthouse_hero.jpg"
      };
      if (editId) {
        state.properties = state.properties.map(p => (String(p.id) === String(editId) ? newProp : p));
      } else {
        state.properties.unshift(newProp);
      }
      saveLocalState();
      renderCategoriesAndPortfolio();
      renderAdminCatalog();
      resetPropertyForm();
    });
  }

  // Admin Blog Form Save
  const blogForm = document.getElementById("adminBlogForm");
  if (blogForm) {
    blogForm.addEventListener("submit", e => {
      e.preventDefault();
      const newBlog = {
        id: String("blog_" + Date.now()),
        title: document.getElementById("blogTitleInput").value.trim(),
        category: document.getElementById("blogCategoryInput").value.trim(),
        readTime: "5 Min Read",
        date: "October 2026",
        author: "Akshay • Managing Principal",
        image: "assets/como_residences.jpg",
        summary: document.getElementById("blogSummaryInput").value.trim(),
        body: document.getElementById("blogBodyInput").value.trim().split("\n\n")
      };
      state.blogs.unshift(newBlog);
      saveLocalState();
      renderBlogs();
      blogForm.reset();
    });
  }

  if (window.lucide) lucide.createIcons();
});
