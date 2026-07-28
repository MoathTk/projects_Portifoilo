// --- TRANSLATIONS DICTIONARY ---
const translations = {
  en: {
    docTitle: "Developer Hub | Direct App Downloads",
    statusText: "Available for Projects",
    headerTitle: "App Hub",
    headerSubtitle: "Direct Android (.APK) downloads and updates",
    searchPlaceholder: "Search apps...",
    app1Title: "Debt Tracker",
    app1Desc: "Debt management app with offline SQLite and cloud sync. Track debts locally with automatic backup across devices.",
    app1Btn: "Download APK",
    app1DetailsBtn: "View Details",
    tagFinance: "Finance",
    trialBadge: "Free Trial",
    trialHighlightText: "2 Weeks Free Trial — No credit card required",
    footerText: "© 2026 Developer Showcase. Built for direct APK distribution.",
    langBtn: "العربية",
    noResults: "No apps found matching your search.",
    toastDownload: "Download started!",
    toastMessage: "Message sent!",
    // Nav
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navApps: "Apps",
    navContact: "Contact",
    // About page
    aboutRole: "Flutter Developer & CS/AI Student",
    aboutBio: "CS and AI college student passionate about building clean, functional mobile apps with Flutter. I love turning ideas into apps that people actually use.",
    statApps: "Projects",
    statExperience: "Years Experience",
    statDownloads: "Total Downloads",
    whatIDo: "What I Do",
    doAppTitle: "App Development",
    doAppDesc: "Building mobile apps with Flutter, from concept to Play Store.",
    doUIDesign: "UI/UX Design",
    doUIDesc: "Creating clean, intuitive interfaces users love.",
    doBackend: "Backend & APIs",
    doBackendDesc: "REST APIs, databases, and cloud services integration.",
    // Skills page
    skillsLang: "Languages",
    skillsFramework: "Frameworks & Libraries",
    skillsTools: "Tools & Platforms",
    skillsDesign: "Design & Other",
    // App detail common
    features: "Features",
    screenshots: "Screenshots",
    screenshotsPlaceholder: "Screenshots coming soon",
    requirements: "System Requirements",
    changelog: "Changelog",
    viewAllApps: "View All Apps",
    // Debt Tracker detail
    dtDocTitle: "Debt Tracker | Developer Hub",
    dtFeat1: "Track debts owed to you and debts you owe",
    dtFeat2: "Add, edit, and delete debt entries",
    dtFeat3: "Mark debts as paid or partially paid",
    dtFeat4: "Set due dates and receive reminders",
    dtFeat5: "Local SQLite storage for fast offline access",
    dtFeat6: "Cloud sync keeps your data backed up across devices",
    dtFeat7: "Search and filter debt entries",
    dtFeat8: "Dark and light theme support",
    dtReq1: "Android 5.0+",
    dtReq2: "50 MB Storage",
    dtReq3: "Internet required for cloud sync",
    dtCl1Date: "January 2026",
    dtCl1Item1: "Initial release",
    dtCl1Item2: "Core debt tracking features",
    dtCl1Item3: "SQLite local storage",
    dtCl1Item4: "Dark/light theme",
    // Contact
    contactEmail: "Email",
    contactEmailTitle: "Email",
    contactEmailText: "Send me an email",
    contactGitHub: "GitHub",
    contactGitHubText: "View my projects",
    contactLinkedIn: "LinkedIn",
    contactLinkedInText: "Let's connect",
    contactFormTitle: "Send a Message",
    formName: "Name",
    formNamePlaceholder: "Your name",
    formEmail: "Email",
    formEmailPlaceholder: "your@email.com",
    formMessage: "Message",
    formMessagePlaceholder: "Write your message...",
    formSend: "Send Message",
    // Privacy
    privacyTitle: "Privacy Policy",
    privacyLastUpdated: "Last updated: January 2026",
    privacyIntroTitle: "Introduction",
    privacyIntroText: "This privacy policy explains how we handle information when you visit our website and download our applications. We respect your privacy and are committed to protecting it.",
    privacyDataTitle: "Information We Collect",
    privacyDataText: "We do not collect any personal information through this website or our applications. Our apps use cloud sync to keep your data backed up — we do not collect or store any personal data on our servers.",
    privacyDataList1: "No personal data is collected or stored",
    privacyDataList2: "No analytics or tracking cookies are used",
    privacyDataList3: "No account registration is required",
    privacyDataList4: "No data is shared with third parties",
    privacyApkTitle: "APK Downloads",
    privacyApkText: "When you download an APK file from this website, the download is served directly from our hosting provider. No personal information is logged during the download process.",
    privacyThirdTitle: "Third-Party Services",
    privacyThirdText: "We use Google Fonts for typography. Google may collect font request data according to their privacy policy. No other third-party services are integrated into this website.",
    privacyContactTitle: "Contact",
    privacyContactText: "If you have questions about this privacy policy, please reach out through our contact page.",
    // FAQ
    faqInstallTitle: "Installing APK Files",
    faqSafeTitle: "Is It Safe?",
    faqPlayStoreTitle: "Why Not on Play Store?",
    faqUnknownTitle: "Enable Unknown Sources",
    faqUpdateTitle: "How to Update",
    faqOfflineTitle: "Offline Usage",
    faqQ1: "How do I install an APK file on my Android device?",
    faqA1Start: "Follow these steps to install an APK file:",
    faqA1Step1: "Download the APK file by tapping the download button.",
    faqA1Step2: "Open your device's file manager and navigate to the Downloads folder.",
    faqA1Step3: "Tap the APK file to begin installation.",
    faqA1Step4: "If prompted, allow installation from unknown sources.",
    faqA1Step5: "Wait for the installation to complete and tap Done or Open.",
    faqQ2: "Are these APK files safe to install?",
    faqA2: "Yes. All APK files are built by us, signed with our developer certificate, and have been tested for security. We do not modify or tamper with any third-party code. You can verify the APK signature before installing.",
    faqQ3: "Why aren't these apps on the Google Play Store?",
    faqA3: "These apps are either in active development, designed for specific use cases, or distributed directly to provide faster updates without Play Store review delays. We may publish to the Play Store in the future.",
    faqQ4: "How do I enable 'Install from Unknown Sources'?",
    faqA4Start: "The exact steps vary by Android version:",
    faqA4Step1: "Go to Settings > Security (or Apps & Notifications).",
    faqA4Step2: "Find 'Install unknown apps' or 'Unknown sources'.",
    faqA4Step3: "Select the file manager or browser you're using.",
    faqA4Step4: "Toggle 'Allow from this source' to on.",
    faqA4Note: "On Android 8.0+, permissions are granted per-app rather than globally.",
    faqQ5: "How do I update an app to a newer version?",
    faqA5: "Simply download the latest APK and install it over the existing version. Your data will be preserved. You do not need to uninstall the old version first.",
    faqQ6: "Do these apps work offline?",
    faqA6: "Yes. Debt Tracker works with local SQLite storage and syncs your data to the cloud automatically. You can access your debts offline, and changes will be synced across your devices when you're back online."
  },
  ar: {
    docTitle: "مركز التطبيقات | تحميل مباشر للتطبيقات",
    statusText: "متاح للمشاريع والعمل",
    headerTitle: "مركز التطبيقات",
    headerSubtitle: "تنزيلات مباشرة وتحديثات لتطبيقات الأندرويد (.APK)",
    searchPlaceholder: "ابحث عن تطبيق...",
    app1Title: "متابعة الديون",
    app1Desc: "تطبيق إدارة الديون بـ SQLite محلي ودمج سحابي. تتبع الديون محلياً مع نسخ احتياطي تلقائي عبر الأجهزة.",
    app1Btn: "تحميل APK",
    app1DetailsBtn: "عرض التفاصيل",
    tagFinance: "مالية",
    trialBadge: "تجربة مجانية",
    trialHighlightText: "تجربة مجانية لمدة أسبوعين — لا حاجة لبطاقة ائتمان",
    footerText: "© 2026 معرض أعمال المطور. مخصص للتوزيع المباشر لملفات APK.",
    langBtn: "English",
    noResults: "لم يتم العثور على تطبيقات مطابقة لبحثك.",
    toastDownload: "بدأ التحميل!",
    toastMessage: "تم إرسال الرسالة!",
    // Nav
    navHome: "الرئيسية",
    navAbout: "عني",
    navSkills: "المهارات",
    navApps: "التطبيقات",
    navContact: "تواصل",
    // About page
    aboutRole: "مطور Flutter وطالب CS/ذكاء اصطناعي",
    aboutBio: "طالب في كلية علوم الحاسوب والذكاء الاصطناعي شغوف ببناء تطبيقات جوال نظيفة وعملية باستخدام Flutter. أحب تحويل الأفكار إلى تطبيقات يستخدمها الناس فعلياً.",
    statApps: "مشاريع",
    statExperience: "سنوات خبرة",
    statDownloads: "إجمالي التحميلات",
    whatIDo: "ما الذي أفعله",
    doAppTitle: "تطوير التطبيقات",
    doAppDesc: "بناء تطبيقات الجوال بـ Flutter، من الفكرة إلى متجر التطبيقات.",
    doUIDesign: "تصميم واجهات المستخدم",
    doUIDesc: "إنشاء واجهات نظيفة وبديهية يحبها المستخدمون.",
    doBackend: "الخوادم وواجهات API",
    doBackendDesc: "واجهات API وقواعد البيانات وخدمات السحابة.",
    // Skills page
    skillsLang: "اللغات",
    skillsFramework: "الأطر والمكتبات",
    skillsTools: "الأدوات والمنصات",
    skillsDesign: "التصميم وأخرى",
    // App detail common
    features: "المميزات",
    screenshots: "لقطات الشاشة",
    screenshotsPlaceholder: "لقطات الشاشة قادمة قريباً",
    requirements: "متطلبات النظام",
    changelog: "سجل التغييرات",
    viewAllApps: "عرض جميع التطبيقات",
    // Debt Tracker detail
    dtDocTitle: "متابعة الديون | مركز التطبيقات",
    dtFeat1: "تتبع الديون المستحقة لك والديون التي تدين بها",
    dtFeat2: "إضافة وتعديل وحذف قياسات الديون",
    dtFeat3: "تحديد الديون كمدفوعة أو مدفوعة جزئياً",
    dtFeat4: "تحديد مواعيد الاستحقاق وتلقي التذكيرات",
    dtFeat5: "تخزين محلي سريع بـ SQLite للوصول بدون إنترنت",
    dtFeat6: "الدمج السحابي يحافظ على نسخ احتياطي من بياناتك عبر الأجهزة",
    dtFeat7: "بحث وتصفية قياسات الديون",
    dtFeat8: "دعم الأوضاع الداكنة والفاتحة",
    dtReq1: "أندرويد 5.0+",
    dtReq2: "50 ميجابايت مساحة تخزين",
    dtReq3: "الإنترنت مطلوب للدمج السحابي",
    dtCl1Date: "يناير 2026",
    dtCl1Item1: "الإصدار الأول",
    dtCl1Item2: "ميزات تتبع الديون الأساسية",
    dtCl1Item3: "تخزين SQLite محلي",
    dtCl1Item4: "الوضع الداكن/الفاتح",
    // Contact
    contactEmail: "البريد الإلكتروني",
    contactEmailTitle: "البريد الإلكتروني",
    contactEmailText: "أرسل لي بريداً إلكترونياً",
    contactGitHub: "جيتهب",
    contactGitHubText: "عرض مشاريعي",
    contactLinkedIn: "لينكدإن",
    contactLinkedInText: "لنتواصل",
    contactFormTitle: "أرسل رسالة",
    formName: "الاسم",
    formNamePlaceholder: "اسمك",
    formEmail: "البريد الإلكتروني",
    formEmailPlaceholder: "بريدك@الإلكتروني.com",
    formMessage: "الرسالة",
    formMessagePlaceholder: "اكتب رسالتك...",
    formSend: "إرسال الرسالة",
    // Privacy
    privacyTitle: "سياسة الخصوصية",
    privacyLastUpdated: "آخر تحديث: يناير 2026",
    privacyIntroTitle: "مقدمة",
    privacyIntroText: "تشرح سياسة الخصوصية هذه كيف نتعامل مع المعلومات عندما تزور موقعنا وتحمي تطبيقاتنا. نحترم خصوصيتك وملتزمون بحمايتها.",
    privacyDataTitle: "المعلومات التي نجمعها",
    privacyDataText: "لا نجمع أي معلومات شخصية عبر موقعنا الإلكتروني أو تطبيقاتنا. تستخدم تطبيقاتنا الدمج السحابي للحفاظ على نسخ احتياطي من بياناتك — لا نقوم بجمع أو تخزين أي بيانات شخصية على خوادمنا.",
    privacyDataList1: "لا يتم جمع أو تخزين البيانات الشخصية",
    privacyDataList2: "لا يتم استخدام ملفات تعريف ارتباط للتحليلات أو التتبع",
    privacyDataList3: "لا يتطلب التسجيل في حساب",
    privacyDataList4: "لا يتم مشاركة البيانات مع أطراف ثالثة",
    privacyApkTitle: "تنزيلات APK",
    privacyApkText: "عند تنزيل ملف APK من موقعنا، يتم تقديمه مباشرة من مزود الاستضافة. لا يتم تسجيل أي معلومات شخصية أثناء عملية التنزيل.",
    privacyThirdTitle: "الخدمات الخارجية",
    privacyThirdText: "نستخدم Google Fonts للخطوط. قد يجمع Google بيانات طلبات الخطوط وفقاً لسياسة الخصوصية الخاصة به. لا توجد خدمات خارجية أخرى مدمجة في موقعنا.",
    privacyContactTitle: "التواصل",
    privacyContactText: "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا من خلال صفحة التواصل.",
    // FAQ
    faqInstallTitle: "تثبيت ملفات APK",
    faqSafeTitle: "هل هو آمن؟",
    faqPlayStoreTitle: "لماذا ليس على متجر التطبيقات؟",
    faqUnknownTitle: "تفعيل المصادر المجهولة",
    faqUpdateTitle: "كيفية التحديث",
    faqOfflineTitle: "الاستخدام بدون إنترنت",
    faqQ1: "كيف أثبت ملف APK على جهاز أندرويد؟",
    faqA1Start: "اتبع الخطوات التالية لتثبيت ملف APK:",
    faqA1Step1: "حمّل ملف APK بالضغط على زر التحميل.",
    faqA1Step2: "افتح إدارة الملفات على جهازك وانتقل إلى مجلد التنزيلات.",
    faqA1Step3: "اضغط على ملف APK لبدء التثبيت.",
    faqA1Step4: "إذا طُلب منك، اسمح بالتثبيت من مصادر مجهولة.",
    faqA1Step5: "انتظر حتى يكتمل التثبيت واضغط Done أو Open.",
    faqQ2: "هل ملفات APK هذه آمنة للتثبيت؟",
    faqA2: "نعم. جميع ملفات APK مبنية من قبلنا، وموقعة بشهادة المطور الخاصة بنا، وقد تم اختبارها للحماية. لا نقوم بتعديل أو التلاعب بأي كود من أطراف ثالثة. يمكنك التحقق من توقيع APK قبل التثبيت.",
    faqQ3: "لماذا ليست هذه التطبيقات على متجر Google Play؟",
    faqA3: "إما أن هذه التطبيقات في مرحلة تطوير نشطة، أو مصممة لحالات استخدام محددة، أو تُوزع مباشرة لتوفير تحديثات أسرعة دون تأخير مراجعة متجر التطبيقات. قد ننشر على متجر التطبيقات في المستقبل.",
    faqQ4: "كيف أفعّل 'السماح بالمصادر المجهولة'؟",
    faqA4Start: "تختلف الخطوات الدقيقة حسب إصدار أندرويد:",
    faqA4Step1: "انتقل إلى الإعدادات > الأمان (أو التطبيقات والإشعارات).",
    faqA4Step2: "ابحث عن 'تثبيت تطبيقات مجهولة' أو 'مصادر مجهولة'.",
    faqA4Step3: "اختر مدير الملفات أو المتصفح الذي تستخدمه.",
    faqA4Step4: "فعّل 'السماح من هذا المصدر'.",
    faqA4Note: "على أندرويد 8.0+، تُمنح الأذونات لكل تطبيق بدلاً من بشكل عام.",
    faqQ5: "كيف أحدّث التطبيق إلى أحدث إصدار؟",
    faqA5: "بسّط قم بتنزيل أحدث APK وتثبيته فوق النسخة الحالية. ستُحفظ بياناتك. لا تحتاج إلى إلغاء تثبيت النسخة القديمة أولاً.",
    faqQ6: "هل تعمل هذه التطبيقات بدون إنترنت؟",
    faqA6: "نعم. تطبيق Debt Tracker يعمل بـ SQLite محلي ويزامن بياناتك مع السحابة تلقائياً. يمكنك الوصول لديونك بدون إنترنت، وسيتم مزامنة التغييرات عبر أجهزتك عند العودة للاتصال.",
  }
};

// --- APK DOWNLOAD CONFIG ---
const apkConfig = {
  version: 'v1.1.6',
  urls: {
    'arm64-v8a': 'https://github.com/MoathTk/debt_manager/releases/download/v1.1.6/app-arm64-v8a-release.apk',
    'armeabi-v7a': 'https://github.com/MoathTk/debt_manager/releases/download/v1.1.6/app-armeabi-v7a-release.apk',
    'x86_64': 'https://github.com/MoathTk/debt_manager/releases/download/v1.1.6/app-x86_64-release.apk'
  },
  sizes: {
    'arm64-v8a': 4.6,
    'armeabi-v7a': 4.2,
    'x86_64': 5.1
  },
  labels: {
    'arm64-v8a': 'ARM64',
    'armeabi-v7a': 'ARMv7',
    'x86_64': 'x86_64'
  }
};

function detectArch() {
  var ua = navigator.userAgent.toLowerCase();
  if (/aarch64|arm64/.test(ua)) return 'arm64-v8a';
  if (/armv7|armeabi/.test(ua)) return 'armeabi-v7a';
  if (/x86_64|wow64/.test(ua)) return 'x86_64';
  return 'arm64-v8a';
}

async function fetchFileSize(url) {
  try {
    var resp = await fetch(url, { method: 'HEAD' });
    if (resp.ok) {
      var bytes = parseInt(resp.headers.get('Content-Length'), 10);
      if (bytes) return (bytes / (1024 * 1024)).toFixed(1);
    }
  } catch (_) {}
  return null;
}

function setupApkDownload() {
  var btn = document.getElementById('app1Btn');
  if (!btn) return;
  var arch = detectArch();
  var url = apkConfig.urls[arch];
  var archEl = document.getElementById('detectedArch');
  var sizeEl = document.getElementById('fileSize');
  btn.href = url;
  if (archEl) archEl.textContent = apkConfig.labels[arch];
  if (sizeEl) {
    sizeEl.textContent = 'Loading size...';
    fetchFileSize(url).then(function(size) {
      sizeEl.textContent = size ? '(~' + size + ' MB)' : '(~' + apkConfig.sizes[arch] + ' MB)';
    });
  }
}

// --- HELPERS ---
function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/apps/')) return '../';
  if (path.endsWith('/about.html') || path.endsWith('/skills.html') || path.endsWith('/contact.html') || path.endsWith('/privacy.html') || path.endsWith('/faq.html')) return '';
  return '';
}

function getCurrentPage() {
  const path = window.location.pathname;
  return path.split('/').pop() || 'index.html';
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function isContactPage() {
  return getCurrentPage() === 'contact.html';
}

// --- STATE ---
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'auto';

// --- THEME ---
function getThemeIcon() {
  if (currentTheme === 'auto') return '\u{1F313}';
  if (currentTheme === 'dark') return '\u{1F319}';
  return '\u{2600}\u{FE0F}';
}

function getThemeLabel() {
  if (currentTheme === 'auto') return 'Auto';
  if (currentTheme === 'dark') return 'Dark';
  return 'Light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
  currentTheme = currentTheme === 'auto' ? 'dark' : currentTheme === 'dark' ? 'light' : 'auto';
  localStorage.setItem('theme', currentTheme);
  applyTheme(currentTheme);
  injectNav();
}

// --- NAVIGATION INJECTOR ---
// FIX: inject into #navPlaceholder (innerHTML) instead of replacing it (outerHTML)
function injectNav() {
  const base = getBasePath();
  const page = getCurrentPage();
  const t = translations[currentLang];

  function isActive(href) { return page === href ? 'active' : ''; }

  const navHTML = `
    <nav class="navbar">
      <div class="container">
        <a href="${base}index.html" class="nav-logo">
          <div class="nav-logo-icon">\u{1F4E6}</div>
          <span>App Hub</span>
        </a>
        <ul class="nav-links">
          <li><a href="${base}index.html" class="${isActive('index.html')}">${t.navHome}</a></li>
          <li><a href="${base}about.html" class="${isActive('about.html')}">${t.navAbout}</a></li>
          <li><a href="${base}skills.html" class="${isActive('skills.html')}">${t.navSkills}</a></li>
          <li><a href="${base}apps/debt-tracker.html" class="${isActive('debt-tracker.html')}">${t.navApps}</a></li>
          <li><a href="${base}contact.html" class="${isActive('contact.html')}">${t.navContact}</a></li>
        </ul>
        <div class="nav-controls">
          <button class="control-btn" onclick="toggleLanguage()">
            \u{1F310} <span class="nav-lang-text">${t.langBtn}</span>
          </button>
          <button class="control-btn" onclick="toggleTheme()">
            <span class="nav-theme-icon">${getThemeIcon()}</span>
            <span class="nav-theme-text">${getThemeLabel()}</span>
          </button>
        </div>
        <button class="hamburger" id="hamburger" onclick="toggleMobileMenu()" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="mobile-nav" id="mobileNav">
      <ul class="mobile-nav-links">
        <li><a href="${base}index.html" class="${isActive('index.html')}">${t.navHome}</a></li>
        <li><a href="${base}about.html" class="${isActive('about.html')}">${t.navAbout}</a></li>
        <li><a href="${base}skills.html" class="${isActive('skills.html')}">${t.navSkills}</a></li>
        <li><a href="${base}apps/debt-tracker.html" class="${isActive('debt-tracker.html')}">${t.navApps}</a></li>
        <li><a href="${base}contact.html" class="${isActive('contact.html')}">${t.navContact}</a></li>
      </ul>
      <div class="mobile-nav-controls">
        <button class="control-btn" onclick="toggleLanguage()">
          \u{1F310} <span class="mobile-lang-text">${t.langBtn}</span>
        </button>
        <button class="control-btn" onclick="toggleTheme()">
          <span class="mobile-theme-icon">${getThemeIcon()}</span>
          <span class="mobile-theme-text">${getThemeLabel()}</span>
        </button>
      </div>
    </div>`;

  const placeholder = document.getElementById('navPlaceholder');
  if (placeholder) {
    placeholder.innerHTML = navHTML;
  }
}

// --- MOBILE MENU ---
function toggleMobileMenu() {
  document.getElementById('hamburger').classList.toggle('active');
  document.getElementById('mobileNav').classList.toggle('open');
}

// --- LANGUAGE ---
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('lang', currentLang);
  applyLanguage(currentLang);
  injectNav();
}

function applyLanguage(lang) {
  const html = document.documentElement;
  const t = translations[lang];

  // Direction and lang attribute
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Page title
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const titleKey = titleEl.getAttribute('data-i18n');
    if (t[titleKey]) document.title = t[titleKey];
  } else {
    document.title = t.docTitle;
  }

  // ID-based elements
  setText('statusText', t.statusText);
  setText('headerTitle', t.headerTitle);
  setText('headerSubtitle', t.headerSubtitle);
  setText('noResultsText', t.noResults);
  setText('footerText', t.footerText);

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  setText('app1Title', t.app1Title);
  setText('app1Desc', t.app1Desc);
  setText('tagFinance', t.tagFinance);
  setText('trialBadge', t.trialBadge);
  setText('trialHighlightText', t.trialHighlightText);

  setText('app1DetailsBtn', t.app1DetailsBtn);

  // Button text inside anchors
  const btn1 = document.querySelector('#app1Btn .btn-text');
  if (btn1) btn1.textContent = t.app1Btn;

  // App detail common
  setText('featuresTitle', t.features);
  setText('screenshotsTitle', t.screenshots);
  setText('screenshotsPlaceholder', t.screenshotsPlaceholder);
  setText('requirementsTitle', t.requirements);
  setText('changelogTitle', t.changelog);
  setText('viewAllAppsBtn', t.viewAllApps);

  // Generic data-i18n: any element with data-i18n="key" gets translated
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  // About page
  setText('aboutRole', t.aboutRole);
  setText('aboutBio', t.aboutBio);
  setText('statAppsLabel', t.statApps);
  setText('statExpLabel', t.statExperience);
  setText('statDlLabel', t.statDownloads);
  setText('whatIDoTitle', t.whatIDo);
  setText('doAppTitle', t.doAppTitle);
  setText('doAppDesc', t.doAppDesc);
  setText('doUIDesc', t.doUIDesc);
  setText('doBackendDesc', t.doBackendDesc);

  // Skills page
  setText('skillsLangTitle', t.skillsLang);
  setText('skillsFrameworkTitle', t.skillsFramework);
  setText('skillsToolsTitle', t.skillsTools);
  setText('skillsDesignTitle', t.skillsDesign);

  // Contact
  setText('contactEmailTitle', t.contactEmailTitle);
  setText('contactEmailText', t.contactEmailText);
  setText('contactGitHubText', t.contactGitHubText);
  setText('contactLinkedInText', t.contactLinkedInText);
  setText('contactFormTitle', t.contactFormTitle);
  setText('formNameLabel', t.formName);
  setText('formEmailLabel', t.formEmail);
  setText('formMessageLabel', t.formMessage);
  setText('formSendBtn', t.formSend);

  var formNameInput = document.getElementById('formNameInput');
  if (formNameInput) formNameInput.placeholder = t.formNamePlaceholder;
  var formEmailInput = document.getElementById('formEmailInput');
  if (formEmailInput) formEmailInput.placeholder = t.formEmailPlaceholder;
  var formMsgInput = document.getElementById('formMsgInput');
  if (formMsgInput) formMsgInput.placeholder = t.formMessagePlaceholder;

  // Privacy
  setText('privacyTitle', t.privacyTitle);
  setText('privacyLastUpdated', t.privacyLastUpdated);
  setText('privacyIntroTitle', t.privacyIntroTitle);
  setText('privacyIntroText', t.privacyIntroText);
  setText('privacyDataTitle', t.privacyDataTitle);
  setText('privacyDataText', t.privacyDataText);
  setText('privacyApkTitle', t.privacyApkTitle);
  setText('privacyApkText', t.privacyApkText);
  setText('privacyThirdTitle', t.privacyThirdTitle);
  setText('privacyThirdText', t.privacyThirdText);
  setText('privacyContactTitle', t.privacyContactTitle);
  setText('privacyContactText', t.privacyContactText);

  // FAQ
  setText('faqInstallTitle', t.faqInstallTitle);
  setText('faqSafeTitle', t.faqSafeTitle);
  setText('faqPlayStoreTitle', t.faqPlayStoreTitle);
  setText('faqUnknownTitle', t.faqUnknownTitle);
  setText('faqUpdateTitle', t.faqUpdateTitle);
  setText('faqOfflineTitle', t.faqOfflineTitle);

  document.querySelectorAll('.accordion-content').forEach(function(body) {
    var faqKey = body.getAttribute('data-faq');
    if (faqKey && t[faqKey]) body.innerHTML = t[faqKey];
  });

  document.querySelectorAll('.accordion-header').forEach(function(header) {
    var qKey = header.getAttribute('data-q');
    if (qKey && t[qKey]) {
      var textSpan = header.querySelector('.accordion-text');
      if (textSpan) textSpan.textContent = t[qKey];
    }
  });
}

// --- SEARCH ---
function filterApps() {
  var query = document.getElementById('searchInput').value.toLowerCase();
  var appCards = document.querySelectorAll('.app-card');
  var noResults = document.getElementById('noResults');
  var visibleCount = 0;

  appCards.forEach(function(card) {
    var titleData = card.getAttribute('data-title').toLowerCase();
    if (titleData.includes(query)) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (noResults) {
    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  }
}

// --- TOAST (context-aware) ---
function showToast(msg) {
  var toast = document.getElementById('toast');
  var toastText = document.getElementById('toastText');
  if (!toast || !toastText) return;

  var t = translations[currentLang];
  toastText.textContent = (typeof msg === 'string' && msg) ? msg : (isContactPage() ? t.toastMessage : t.toastDownload);

  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, 2500);
}

function showToastDownload() { showToast(translations[currentLang].toastDownload); }
function showToastMessage() { showToast(translations[currentLang].toastMessage); }

// --- ACCORDION ---
function toggleAccordion(btn) {
  var item = btn.closest('.accordion-item');
  var body = item.querySelector('.accordion-body');
  var isOpen = item.classList.contains('open');

  document.querySelectorAll('.accordion-item.open').forEach(function(openItem) {
    if (openItem !== item) {
      openItem.classList.remove('open');
      openItem.querySelector('.accordion-body').style.maxHeight = null;
    }
  });

  if (isOpen) {
    item.classList.remove('open');
    body.style.maxHeight = null;
  } else {
    item.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
  }
}

// --- ENTRANCE ANIMATIONS ---
var animateElements = document.querySelectorAll('.animate-in');

if ('IntersectionObserver' in window && animateElements.length > 0) {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, index) {
      if (entry.isIntersecting) {
        setTimeout(function() { entry.target.classList.add('visible'); }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach(function(el) { observer.observe(el); });
} else {
  animateElements.forEach(function(el) { el.classList.add('visible'); });
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', function() {
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  injectNav();

  // Setup APK download button (detect arch, fetch size)
  setupApkDownload();

  // Attach download toast to all download buttons
  document.querySelectorAll('.btn-download').forEach(function(btn) {
    btn.addEventListener('click', showToastDownload);
  });

  // Attach message toast to contact form
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      showToastMessage();
      contactForm.reset();
    });
  }
});
