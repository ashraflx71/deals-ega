
"use strict";

/* =========================================
   NOKHBA | نخبة
   عروض وخصومات مصر
   Amazon Egypt Affiliate
   ========================================= */

// معرّف الشريك العام الحالي — لا تغيّره
const TAG = "ashrafhassa03-21";

// أسماء الأقسام
const CATEGORY_NAMES = {
  electronics: "إلكترونيات",
  fashion: "أزياء",
  home: "المنزل",
  grocery: "سوبر ماركت"
};

// المنتجات
// القسم | اسم المنتج | كلمات البحث | الرمز التوضيحي
const PRODUCTS = `
electronics | سماعات بلوتوث لاسلكية | سماعات بلوتوث لاسلكية | 🎧
electronics | باور بانك 20000 مللي أمبير | باور بانك 20000 | 🔋
electronics | ساعة ذكية | ساعة ذكية | ⌚
electronics | شاحن موبايل سريع | شاحن سريع تايب سي | 🔌
electronics | سماعة جيمنج | سماعة جيمنج | 🎮
electronics | كشاف LED قابل للشحن | كشاف LED قابل للشحن | 🔦
electronics | ماوس بلوتوث قابل للشحن | ماوس بلوتوث لاسلكي قابل لإعادة الشحن | 🖱️
electronics | ماوس M256 لاسلكي صامت | ماوس M256 لاسلكي بلوتوث | 🖱️
electronics | كابل USB-C من أنكر | كابل أنكر USB-C | 🔌
electronics | باور بانك 10000 مغناطيسي | باور بانك مغناطيسي 10000 | 🔋
electronics | فلاش ميموري كينغستون 64 جيجا | فلاش ميموري كينغستون 64 جيجا | 💾
electronics | حامل لابتوب قابل للطي | حامل لابتوب ألومنيوم قابل للطي | 💻
electronics | جراب آيفون 17 برو | جراب آيفون 17 برو سيليكون | 📱
electronics | جراب سامسونج A52 | جراب سامسونج A52 | 📱
electronics | بطاريات AA كاميليون | بطاريات AA كاميليون | 🔋
fashion | حذاء رياضي رجالي | حذاء رياضي رجالي | 👟
fashion | حذاء رياضي حريمي | حذاء رياضي نسائي | 👟
fashion | شنطة ظهر | شنطة ظهر | 🎒
fashion | ساعة يد رجالي | ساعة يد رجالي | ⌚
home | خلاط كهربائي | خلاط كهربائي | 🥤
home | مكواة بخار | مكواة بخار | 👔
home | مروحة | مروحة كهربائية | 🌀
home | طقم حلل | طقم حلل مطبخ | 🍳
home | شفاطات معدنية قابلة لإعادة الاستخدام | شفاطات استانلس ستيل | 🥤
home | شماعات ملابس معدنية 10 قطع | شماعات ملابس معدنية 10 قطع | 👔
home | سلال تخزين قماشية قابلة للطي | سلال تخزين قماشية | 🧺
home | طقم تنظيف أرضيات | شرشوبة مسطحة ودلو | 🧹
home | بخاخ زيت للطبخ | بخاخ زيت للمطبخ | 🫒
home | مضرب رغوة حليب قابل للشحن | مضرب رغوة حليب قابل للشحن | ☕
home | نبات صناعي للديكور | نبات صناعي يوكاليبتوس | 🌿
grocery | قهوة | قهوة | ☕
grocery | شوكولاتة | شوكولاتة | 🍫
`;

// صور توضيحية لبعض الفئات فقط
// لا تمثل بالضرورة الموديل الفعلي للمنتج
const PRODUCT_IMAGES = [
  {
    match: /سماعات بلوتوث لاسلكية/,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
  },
  {
    match: /سماعة جيمنج/,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=80"
  },
  {
    match: /ساعة ذكية|ساعة يد رجالي/,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80"
  },
  {
    match: /حذاء/,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
  },
  {
    match: /قهوة/,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
  },
  {
    match: /حامل لابتوب/,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=80"
  }
];

// إنشاء رابط بحث تابع لأمازون مصر
function buildAmazonSearch(query) {
  const url = new URL("https://www.amazon.eg/s");

  url.searchParams.set("k", query);
  url.searchParams.set("tag", TAG);

  return url.toString();
}

// تحويل البيانات النصية إلى مصفوفة منتجات
const products = PRODUCTS
  .trim()
  .split("\n")
  .map(line => line.trim())
  .filter(Boolean)
  .map(line => {
    const parts = line.split("|").map(value => value.trim());

    const category = parts[0];
    const title = parts[1];
    const keywords = parts[2] || title;
    const icon = parts[3] || "🛍️";

    if (!category || !title) {
      return null;
    }

    if (!Object.prototype.hasOwnProperty.call(
      CATEGORY_NAMES,
      category
    )) {
      return null;
    }

    const imageEntry = PRODUCT_IMAGES.find(entry =>
      entry.match.test(title)
    );

    return {
      category,
      title,
      keywords,
      icon,
      image: imageEntry ? imageEntry.image : null,
      link: buildAmazonSearch(keywords),
      buttonText: "ابحث في أمازون مصر",

      note: imageEntry
        ? "صورة توضيحية للفئة وليست تأكيدًا للموديل. تحقق من المنتج والسعر والتوافر على أمازون مصر."
        : "لا تتوفر صورة توضيحية محددة لهذا المنتج حاليًا. استخدم رابط أمازون للتحقق من صورته الفعلية."
    };
  })
  .filter(Boolean);

// =========================================
// إضافة منتج نينجا بالرابط المباشر
// =========================================

products.push({
  category: "home",
  title: "محضرة طعام نينجا Ninja BN800EU ثلاثية الوظائف، 1200 واط",
  keywords: "Ninja BN800EU محضرة طعام خلاط 1200 واط",
  icon: "🥤",
  image: null,
  link: "https://www.amazon.eg/dp/B08HSF4FY6?tag=" + encodeURIComponent(TAG),
  buttonText: "عرض المنتج على أمازون مصر",
  note: "تحقق من صورة الموديل الفعلية والسعر والمواصفات والتوافر على أمازون مصر."
});

// =========================================
// إضافة المنتج رقم 34
// Logitech G321 LIGHTSPEED
// =========================================

products.push({
  category: "electronics",

  title: "سماعة رأس لوجيتك Logitech G321 LIGHTSPEED لاسلكية للألعاب",

  keywords: "Logitech G321 LIGHTSPEED wireless gaming headset",

  icon: "🎧",

  // لا نستخدم صورة غير مؤكدة للموديل
  image: null,

  // رابط المنتج الذي أرسله صاحب الموقع
  link: "https://www.amazon.eg/dp/B0FFM18D66/ref=cm_sw_r_as_gl_apa_gl_i_J71R7GVHJ6EGFMS5ATB2?linkCode=ml1&tag=ashrafdealseg-21&linkId=f6f56426d57b2233de2b5608fb6a5e05",

  buttonText: "عرض السماعة على أمازون مصر",

  note: "سماعة ألعاب لاسلكية من لوجيتك، تدعم LIGHTSPEED والبلوتوث، بميكروفون قابل للتوجيه وبطارية تتجاوز 20 ساعة وفق وصف المنتج. تحقق من اللون والمواصفات والسعر والتوافر على أمازون مصر."
});

// =========================================
// عناصر الصفحة
// =========================================

const container = document.getElementById("offers");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const resultCount = document.getElementById("result-count");

// التحقق من وجود العناصر المطلوبة
if (!container || !searchInput || !categorySelect || !resultCount) {

  console.error(
    "تعذر تشغيل المنتجات. تحقق من وجود العناصر التالية في index.html: offers وsearch وcategory وresult-count."
  );

} else {

  // =========================================
  // توحيد الكتابة العربية لتحسين البحث
  // =========================================

  function normalizeArabic(value) {
    return String(value || "")
      .toLocaleLowerCase("ar")
      .normalize("NFD")
      .replace(/[\u064B-\u065F\u0670]/g, "")
      .replace(/[أإآٱ]/g, "ا")
      .replace(/ى/g, "ي")
      .replace(/ؤ/g, "و")
      .replace(/ئ/g, "ي")
      .replace(/ـ/g, "")
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  // =========================================
  // عرض رمز المنتج عند عدم وجود صورة
  // =========================================

  function showFallback(visual, product) {

    visual.classList.add("image-fallback");

    const fallback = document.createElement("span");

    fallback.className = "product-fallback-icon";
    fallback.textContent = product.icon || "🛍️";
    fallback.setAttribute("aria-hidden", "true");

    visual.replaceChildren(fallback);
  }

  // =========================================
  // إنشاء مساحة الصورة
  // =========================================

  function createProductVisual(product) {

    const visual = document.createElement("div");

    visual.className = "product-visual";

    if (!product.image) {
      showFallback(visual, product);
      return visual;
    }

    const img = document.createElement("img");

    img.className = "product-image";
    img.alt = "صورة توضيحية لفئة: " + product.title;
    img.loading = "lazy";
    img.decoding = "async";

    img.addEventListener("error", function () {
      showFallback(visual, product);
    }, { once: true });

    img.src = product.image;

    visual.appendChild(img);

    return visual;
  }

  // =========================================
  // إنشاء بطاقة المنتج
  // =========================================

  function createCard(product) {

    const card = document.createElement("article");

    card.className = "card";

    const visual = createProductVisual(product);

    const body = document.createElement("div");

    body.className = "product-body";

    const category = document.createElement("span");

    category.className = "category-label";
    category.textContent = CATEGORY_NAMES[product.category];

    const title = document.createElement("h3");

    title.textContent = product.title;

    const note = document.createElement("p");

    note.className = "product-note";
    note.textContent = product.note;

    const link = document.createElement("a");

    link.className = "btn";
    link.href = product.link;
    link.target = "_blank";

    link.rel = "nofollow sponsored noopener noreferrer";

    link.textContent = product.buttonText;

    link.setAttribute(
      "aria-label",
      product.buttonText + ": " + product.title
    );

    body.append(category, title, note, link);

    card.append(visual, body);

    return card;
  }

  // =========================================
  // البحث والتصفية
  // =========================================

  function render() {

    const query = normalizeArabic(searchInput.value);

    const selectedCategory = categorySelect.value;

    const searchTerms = query
      ? query.split(" ")
      : [];

    const filtered = products.filter(product => {

      const matchesCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      const searchableText = normalizeArabic([
        product.title,
        product.keywords,
        CATEGORY_NAMES[product.category]
      ].join(" "));

      const matchesSearch = searchTerms.every(term =>
        searchableText.includes(term)
      );

      return matchesCategory && matchesSearch;
    });

    const fragment = document.createDocumentFragment();

    if (filtered.length === 0) {

      const empty = document.createElement("p");

      empty.className = "empty-state";

      empty.textContent =
        "لم نعثر على منتجات مطابقة. جرّب كلمات أخرى أو اختر كل الأقسام.";

      fragment.appendChild(empty);

    } else {

      filtered.forEach(product => {
        fragment.appendChild(createCard(product));
      });
    }

    // تحديث المنتجات المعروضة
    container.replaceChildren(fragment);

    // تحديث عدد النتائج
    resultCount.textContent =
      `عدد النتائج: ${filtered.length} من ${products.length} منتج`;
  }

  // =========================================
  // تشغيل البحث والتصفية
  // =========================================

  searchInput.addEventListener("input", render);

  categorySelect.addEventListener("change", render);

  // إظهار عدد النتائج لقارئات الشاشة
  resultCount.setAttribute("aria-live", "polite");

  // العرض الأول عند فتح الصفحة
  render();
}
