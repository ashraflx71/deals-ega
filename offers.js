
"use strict";

// معرّف الشريك الحالي — لا تغيّره
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

// أسماء الأقسام
const CATEGORY_NAMES = {
  electronics: "إلكترونيات",
  fashion: "أزياء",
  home: "المنزل",
  grocery: "سوبر ماركت"
};

// صور فوتوغرافية توضيحية مجانية من Unsplash.
// الصور تمثل فئات المنتجات ولا تؤكد مطابقة موديل بعينه.
const CATEGORY_IMAGES = {
  electronics:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
  fashion:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  home:
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80",
  grocery:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
};

// صور أقرب لبعض أنواع المنتجات عند توفر صورة مناسبة
const PRODUCT_IMAGES = [
  {
    match: /سماعات|جيمنج/,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
  },
  {
    match: /ساعة/,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80"
  },
  {
    match: /حذاء/,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
  },
  {
    match: /قهوة|رغوة حليب/,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
  },
  {
    match: /خلاط|محضرة طعام|طقم حلل/,
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80"
  },
  {
    match: /حامل لابتوب/,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=80"
  }
];

// إنشاء رابط بحث في أمازون مصر بمعرّف الشريك
function buildAmazonSearch(query) {
  const url = new URL("https://www.amazon.eg/s");
  url.searchParams.set("k", query);
  url.searchParams.set("tag", TAG);
  return url.toString();
}

// تحويل القائمة النصية إلى بيانات منتجات
const products = PRODUCTS
  .trim()
  .split("\n")
  .map(line => line.trim())
  .filter(Boolean)
  .map(line => {
    const parts = line.split("|").map(value => value.trim());
    const [category, title, keywords, icon] = parts;

    const imageEntry = PRODUCT_IMAGES.find(entry =>
      entry.match.test(title)
    );

    return {
      category,
      title,
      keywords: keywords || title,
      icon: icon || "🛍️",
      image: imageEntry
        ? imageEntry.image
        : CATEGORY_IMAGES[category],
      link: buildAmazonSearch(keywords || title),
      buttonText: "ابحث في أمازون مصر",
      note:
        "صورة توضيحية للفئة. تحقق من صورة المنتج الفعلية والسعر والتوافر والشحن على أمازون مصر."
    };
  })
  .filter(product =>
    Object.prototype.hasOwnProperty.call(
      CATEGORY_NAMES,
      product.category
    )
  );

// المنتج ذو الرابط المباشر الذي أضفته سابقًا
products.push({
  category: "home",
  title: "محضرة طعام نينجا Ninja BN800EU ثلاثية الوظائف، 1200 واط",
  keywords: "Ninja BN800EU محضرة طعام خلاط 1200 واط",
  icon: "🥤",
  image: CATEGORY_IMAGES.home,
  link: "https://www.amazon.eg/dp/B08HSF4FY6?tag=ashrafhassa03-21",
  buttonText: "عرض المنتج على أمازون مصر",
  note:
    "الصورة توضيحية وليست تأكيدًا لصورة الموديل. تحقق من السعر الحالي والمواصفات والتوافر لدى أمازون."
});

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
  // توحيد اختلافات الكتابة العربية لتحسين البحث
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

  // إنشاء بطاقة المنتج
  function createCard(product) {
    const card = document.createElement("article");
    card.className = "card";

    // مساحة الصورة
    const visual = document.createElement("div");
    visual.className = "product-visual";

    const img = document.createElement("img");
    img.className = "product-image";
    img.src = product.image || CATEGORY_IMAGES[product.category];
    img.alt = "صورة توضيحية لفئة: " + product.title;
    img.loading = "lazy";
    img.decoding = "async";

    // إذا فشلت الصورة، نعرض رمز المنتج بدل مساحة فارغة
    img.addEventListener("error", function () {
      visual.classList.add("image-fallback");
      img.remove();
      const fallback = document.createElement("span");
      fallback.className = "product-fallback-icon";
      fallback.textContent = product.icon;
      fallback.setAttribute("aria-hidden", "true");
      visual.appendChild(fallback);
    }, { once: true });

    visual.appendChild(img);

    // محتوى البطاقة
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

  // عرض المنتجات حسب البحث والقسم
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

  // التحديث عند الكتابة أو تغيير القسم
  searchInput.addEventListener("input", render);
  categorySelect.addEventListener("change", render);

  // عرض المنتجات عند فتح الصفحة
  render();
}
