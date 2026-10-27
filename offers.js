
"use strict";

// معرّف الشريك في أمازون مصر
const TAG = "ashrafhassa03-21";

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

const CATEGORY_NAMES = {
  electronics: "إلكترونيات",
  fashion: "أزياء",
  home: "المنزل",
  grocery: "سوبر ماركت"
};

const CATEGORY_COLORS = {
  electronics: "#e8f2ff",
  fashion: "#fff0f5",
  home: "#eaf7ed",
  grocery: "#fff5e6"
};

// إنشاء رابط بحث في أمازون مصر مع معرّف الشريك
function buildAmazonSearch(query) {
  const url = new URL("https://www.amazon.eg/s");
  url.searchParams.set("k", query);
  url.searchParams.set("tag", TAG);
  return url.toString();
}

// تحويل قائمة النصوص إلى بيانات منتجات
const products = PRODUCTS
  .trim()
  .split("\n")
  .map(line => line.trim())
  .filter(Boolean)
  .map(line => {
    const parts = line.split("|").map(value => value.trim());

    const [category, title, keywords, icon] = parts;

    return {
      category,
      title,
      keywords: keywords || title,
      icon: icon || "🛍️",
      link: buildAmazonSearch(keywords || title)
    };
  })
  .filter(product =>
    Object.prototype.hasOwnProperty.call(
      CATEGORY_NAMES,
      product.category
    )
  );

// الوصول إلى عناصر الصفحة
const container = document.getElementById("offers");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const resultCount = document.getElementById("result-count");

// التأكد من وجود عناصر HTML المطلوبة
if (!container || !searchInput || !categorySelect || !resultCount) {
  console.error(
    "تعذر تشغيل المنتجات: تأكد من وجود العناصر offers وsearch وcategory وresult-count في index.html."
  );
} else {
  // تحسين البحث العربي وتوحيد اختلافات كتابة الكلمات
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

  // إنشاء بطاقة منتج بأمان
  function createCard(product) {
    const card = document.createElement("article");
    card.className = "card";

    const visual = document.createElement("div");
    visual.className = "product-visual";
    visual.style.backgroundColor =
      CATEGORY_COLORS[product.category] || "#f1f5f9";
    visual.textContent = product.icon;
    visual.setAttribute("aria-hidden", "true");

    const body = document.createElement("div");
    body.className = "product-body";

    const category = document.createElement("span");
    category.className = "category-label";
    category.textContent = CATEGORY_NAMES[product.category];

    const title = document.createElement("h3");
    title.textContent = product.title;

    const note = document.createElement("p");
    note.className = "product-note";
    note.textContent =
      "تحقق من السعر والتوافر وتكاليف الشحن على أمازون مصر.";

    const link = document.createElement("a");
    link.className = "btn";
    link.href = product.link;
    link.target = "_blank";
    link.rel = "nofollow sponsored noopener noreferrer";
    link.textContent = "ابحث في أمازون مصر";
    link.setAttribute(
      "aria-label",
      `البحث عن ${product.title} في أمازون مصر`
    );

    body.append(category, title, note, link);
    card.append(visual, body);

    return card;
  }

  // عرض المنتجات المطابقة للبحث والقسم
  function render() {
    const query = normalizeArabic(searchInput.value);
    const selectedCategory = categorySelect.value;

    const searchTerms = query ? query.split(" ") : [];

    const filtered = products.filter(product => {
      const matchesCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      const searchableText = normalizeArabic(
        [
          product.title,
          product.keywords,
          CATEGORY_NAMES[product.category]
        ].join(" ")
      );

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

    container.replaceChildren(fragment);

    resultCount.textContent =
      `عدد النتائج: ${filtered.length} من ${products.length} منتج`;
  }

  // تحديث النتائج أثناء الكتابة وتغيير القسم
  searchInput.addEventListener("input", render);
  categorySelect.addEventListener("change", render);

  // عرض المنتجات عند فتح الصفحة
  render();
}
