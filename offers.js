
"use strict";

/* =========================================
   عروض وخصومات مصر
   Amazon Egypt Affiliate
   ========================================= */

// معرّف العمولة الحالي — لا تغيّره
const TAG = "ashrafhassa03-21";

// المنتجات الأصلية — لا تحذف أي منتج
// الشكل: القسم | اسم المنتج | كلمة البحث | الأيقونة
const PRODUCTS = `
electronics | سماعات بلوتوث لاسلكية | سماعات بلوتوث لاسلكية | 🎧
electronics | باور بانك 20000 مللي أمبير | باور بانك 20000 | 🔋
electronics | ساعة ذكية | ساعة ذكية | ⌚
electronics | شاحن موبايل سريع | شاحن سريع تايب سي | 🔌
electronics | سماعة جيمنج | سماعة جيمنج | 🎮
electronics | كشاف LED قابل للشحن | كشاف LED قابل للشحن | 🔦
electronics | ماوس بلوتوث لاسلكي قابل للشحن | ماوس بلوتوث لاسلكي قابل لإعادة الشحن | 🖱️
electronics | ماوس M256 لاسلكي صامت | ماوس M256 لاسلكي بلوتوث | 🖱️
electronics | كابل USB-C من أنكر | كابل انكر USB-C | 🔌
electronics | باور بانك 10000 مغناطيسي | باور بانك جيه ار 10000 مغناطيسي | 🔋
electronics | فلاش ميموري كينغستون 64 جيجا | فلاش ميموري كينغستون 64 جيجا | 💾
electronics | حامل لابتوب قابل للطي | حامل لابتوب قابل للطي ألومنيوم | 💻
electronics | جراب آيفون 17 برو سيليكون | جراب ايفون 17 برو سيليكون | 📱
electronics | جراب سامسونج A52 | جراب سامسونج A52 | 📱
electronics | بطاريات AA كاميليون | بطاريات AA كاميليون | 🔋
fashion | حذاء رياضي رجالي | حذاء رياضي رجالي | 👟
fashion | حذاء رياضي حريمي | حذاء رياضي حريمي | 👟
fashion | شنطة ظهر | شنطة ظهر | 🎒
fashion | ساعة يد رجالي | ساعة يد رجالي | ⌚
home | خلاط كهربائي | خلاط كهربائي | 🥤
home | مكواة بخار | مكواة بخار | 👔
home | مروحة | مروحة | 🌀
home | طقم حلل | طقم حلل | 🍳
home | شفاطات معدنية قابلة لإعادة الاستخدام | شفاطات استانلس ستيل | 🥤
home | شماعات ملابس معدنية 10 قطع | شماعات ملابس 10 قطع | 👔
home | سلال تخزين قماشية قابلة للطي | سلال تخزين قماشية | 🧺
home | طقم تنظيف أرضيات شرشوبة ودلو | شرشوبة مسطحة ودلو | 🧹
home | بخاخ زيت للطبخ | بخاخ زيت زيتون للمطبخ | 🫒
home | مضرب رغوة حليب قابل للشحن | مضرب رغوة حليب قابل للشحن | ☕
home | نبات صناعي للديكور | نبات صناعي يوكاليبتوس | 🌿
grocery | قهوة | قهوة | ☕
grocery | شوكولاتة | شوكولاتة | 🍫
`;

// ألوان خلفيات الصور الاحتياطية
const CATEGORY_STYLES = {
  electronics: "linear-gradient(135deg,#e3f2fd,#bbdefb)",
  fashion: "linear-gradient(135deg,#fce4ec,#f8bbd0)",
  home: "linear-gradient(135deg,#e8f5e9,#c8e6c9)",
  grocery: "linear-gradient(135deg,#fff3e0,#ffe0b2)"
};

// صور توضيحية فقط، وليست صورًا مؤكدة لموديلات المنتجات
const PRODUCT_IMAGES = [
  {
    match: "سماعات بلوتوث لاسلكية",
    url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=75"
  },
  {
    match: "ساعة ذكية",
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=75"
  },
  {
    match: "حذاء رياضي رجالي",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=75"
  },
  {
    match: "قهوة",
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=75"
  }
];

// إضافة صورة توضيحية للمنتجات المحددة فقط
function getProductImage(title) {
  const item = PRODUCT_IMAGES.find(
    image => image.match === title
  );

  return item ? item.url : "";
}

// إنشاء رابط بحث أمازون مع معرّف العمولة
function buildAmazonSearch(query) {
  return (
    "https://www.amazon.eg/s?k=" +
    encodeURIComponent(query) +
    "&tag=" +
    encodeURIComponent(TAG)
  );
}

// قراءة المنتجات
const offers = PRODUCTS
  .split("\n")
  .map(line => line.trim())
  .filter(line => line.includes("|"))
  .map(line => {
    const [category, title, keyword, icon] =
      line.split("|").map(value => value.trim());

    return {
      category,
      title,
      keyword,
      icon: icon || "🛍️",
      image: getProductImage(title),
      store: "أمازون مصر",
      link: buildAmazonSearch(keyword)
    };
  });

// إضافة منتج نينجا برابطه المباشر
offers.push({
  category: "home",
  title: "محضرة طعام نينجا Ninja BN800EU ثلاثية الوظائف، 1200 واط",
  keyword: "Ninja BN800EU",
  icon: "🍲",
  image: "",
  store: "أمازون مصر",
  link: "https://www.amazon.eg/dp/B08HSF4FY6?tag=" +
    encodeURIComponent(TAG)
});

// عناصر الصفحة
const container = document.getElementById("offers");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const resultCount = document.getElementById("result-count");

// التحقق من وجود العناصر الأساسية
if (!container || !searchInput || !categorySelect) {
  console.error(
    "تعذر العثور على عناصر الموقع: offers أو search أو category"
  );
} else {

  // تطبيع النص العربي لتسهيل البحث
  function normalizeArabic(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[أإآ]/g, "ا")
      .replace(/ى/g, "ي")
      .replace(/ة/g, "ه")
      .replace(/[ًٌٍَُِّْـ]/g, "")
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  // إنشاء عنصر الصورة أو الأيقونة الاحتياطية
  function createVisual(product) {
    const visual = document.createElement("div");
    visual.className = "product-visual";

    if (product.image) {
      const img = document.createElement("img");

      img.className = "product-image";
      img.src = product.image;
      img.alt = "صورة توضيحية: " + product.title;
      img.loading = "lazy";
      img.decoding = "async";

      img.onerror = function () {
        visual.innerHTML = "";
        visual.classList.add("image-fallback");
        createFallbackIcon(visual, product);
      };

      visual.appendChild(img);

      const note = document.createElement("span");
      note.className = "image-note";
      note.textContent = "صورة توضيحية";
      visual.appendChild(note);

    } else {
      visual.classList.add("image-fallback");
      createFallbackIcon(visual, product);
    }

    return visual;
  }

  // الأيقونة الاحتياطية
  function createFallbackIcon(parent, product) {
    parent.style.background =
      CATEGORY_STYLES[product.category] ||
      CATEGORY_STYLES.grocery;

    const icon = document.createElement("div");
    icon.className = "product-fallback-icon";
    icon.textContent = product.icon || "🛍️";
    icon.setAttribute("aria-hidden", "true");

    parent.appendChild(icon);
  }

  // إنشاء بطاقة المنتج
  function createCard(product) {
    const card = document.createElement("article");
    card.className = "card";

    const visual = createVisual(product);
    card.appendChild(visual);

    const body = document.createElement("div");
    body.className = "body";

    const title = document.createElement("h3");
    title.textContent = product.title;

    const store = document.createElement("span");
    store.className = "store";
    store.textContent = product.store;

    const button = document.createElement("a");
    button.className = "btn";
    button.href = product.link;
    button.target = "_blank";
    button.rel = "nofollow sponsored noopener noreferrer";
    button.textContent = "شوف العروض";

    body.appendChild(title);
    body.appendChild(store);
    body.appendChild(button);

    card.appendChild(body);

    return card;
  }

  // تحديث عدد النتائج
  function updateCount(count) {
    if (resultCount) {
      resultCount.textContent =
        "عدد المنتجات: " + count;
    }
  }

  // عرض المنتجات
  function render() {
    const query = normalizeArabic(searchInput.value);
    const selectedCategory = categorySelect.value;

    container.innerHTML = "";

    const filtered = offers.filter(product => {
      const categoryMatch =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      const searchableText = normalizeArabic(
        product.title + " " +
        product.keyword + " " +
        product.store + " " +
        product.category
      );

      const searchMatch =
        !query ||
        query.split(" ").every(word =>
          searchableText.includes(word)
        );

      return categoryMatch && searchMatch;
    });

    const fragment = document.createDocumentFragment();

    filtered.forEach(product => {
      fragment.appendChild(createCard(product));
    });

    container.appendChild(fragment);

    if (filtered.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-results";
      empty.textContent =
        "لم نجد منتجات مطابقة للبحث. جرّب كلمة أخرى.";
      container.appendChild(empty);
    }

    updateCount(filtered.length);
  }

  // أحداث البحث والتصفية
  searchInput.addEventListener("input", render);
  categorySelect.addEventListener("change", render);

  // العرض الأول عند فتح الموقع
  render();

  console.log(
    "تم تحميل " + offers.length +
    " منتجًا بنجاح."
  );
}
