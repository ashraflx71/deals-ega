"use strict";

/* =========================================
   NOKHBA | نخبة
   عروض وخصومات مصر
   Amazon Egypt Affiliate
   ========================================= */

// معرّف العمولة الحالي — لا تغيّره
const TAG = "ashrafhassa03-21";

// أسماء الأقسام
const CATEGORY_NAMES = {
  electronics: "إلكترونيات",
  fashion: "أزياء",
  home: "المنزل",
  grocery: "سوبر ماركت"
};

// خلفيات الصور الاحتياطية
const CATEGORY_STYLES = {
  electronics: "linear-gradient(135deg,#e3f2fd,#bbdefb)",
  fashion: "linear-gradient(135deg,#fce4ec,#f8bbd0)",
  home: "linear-gradient(135deg,#e8f5e9,#c8e6c9)",
  grocery: "linear-gradient(135deg,#fff3e0,#ffe0b2)"
};

// صور توضيحية فقط وليست صور المنتجات الأصلية
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

// إنشاء رابط بحث أمازون بمعرّف العمولة
function buildAmazonSearch(keyword) {
  return (
    "https://www.amazon.eg/s?k=" +
    encodeURIComponent(keyword) +
    "&tag=" +
    encodeURIComponent(TAG)
  );
}

// الحصول على صورة توضيحية
function getProductImage(title) {
  const found = PRODUCT_IMAGES.find(
    item => item.match === title
  );

  return found ? found.url : "";
}

/* =========================================
   المنتجات العامة
   هذه روابط بحث وليست روابط لمنتجات محددة
   ========================================= */

const SEARCH_PRODUCTS = [
  {
    category: "electronics",
    title: "سماعات بلوتوث لاسلكية",
    keyword: "سماعات بلوتوث لاسلكية",
    icon: "🎧"
  },
  {
    category: "electronics",
    title: "باور بانك 20000 مللي أمبير",
    keyword: "باور بانك 20000",
    icon: "🔋"
  },
  {
    category: "electronics",
    title: "ساعة ذكية",
    keyword: "ساعة ذكية",
    icon: "⌚"
  },
  {
    category: "electronics",
    title: "شاحن موبايل سريع",
    keyword: "شاحن سريع تايب سي",
    icon: "🔌"
  },
  {
    category: "electronics",
    title: "سماعة جيمنج",
    keyword: "سماعة جيمنج",
    icon: "🎮"
  },
  {
    category: "electronics",
    title: "كشاف LED قابل للشحن",
    keyword: "كشاف LED قابل للشحن",
    icon: "🔦"
  },
  {
    category: "electronics",
    title: "كابل USB-C من أنكر",
    keyword: "كابل انكر USB-C",
    icon: "🔌"
  },
  {
    category: "electronics",
    title: "باور بانك 10000 مغناطيسي",
    keyword: "باور بانك مغناطيسي 10000",
    icon: "🔋"
  },
  {
    category: "electronics",
    title: "فلاش ميموري كينغستون 64 جيجا",
    keyword: "فلاش ميموري كينغستون 64 جيجا",
    icon: "💾"
  },
  {
    category: "electronics",
    title: "حامل لابتوب قابل للطي",
    keyword: "حامل لابتوب ألومنيوم قابل للطي",
    icon: "💻"
  },
  {
    category: "electronics",
    title: "جراب آيفون 17 برو",
    keyword: "جراب ايفون 17 برو سيليكون",
    icon: "📱"
  },
  {
    category: "electronics",
    title: "جراب سامسونج A52",
    keyword: "جراب سامسونج A52",
    icon: "📱"
  },
  {
    category: "electronics",
    title: "بطاريات AA كاميليون",
    keyword: "بطاريات AA كاميليون",
    icon: "🔋"
  },
  {
    category: "fashion",
    title: "حذاء رياضي رجالي",
    keyword: "حذاء رياضي رجالي",
    icon: "👟"
  },
  {
    category: "fashion",
    title: "حذاء رياضي حريمي",
    keyword: "حذاء رياضي نسائي",
    icon: "👟"
  },
  {
    category: "fashion",
    title: "شنطة ظهر",
    keyword: "شنطة ظهر",
    icon: "🎒"
  },
  {
    category: "fashion",
    title: "ساعة يد رجالي",
    keyword: "ساعة يد رجالي",
    icon: "⌚"
  },
  {
    category: "home",
    title: "خلاط كهربائي",
    keyword: "خلاط كهربائي",
    icon: "🥤"
  },
  {
    category: "home",
    title: "مكواة بخار",
    keyword: "مكواة بخار",
    icon: "👔"
  },
  {
    category: "home",
    title: "مروحة كهربائية",
    keyword: "مروحة كهربائية",
    icon: "🌀"
  },
  {
    category: "home",
    title: "طقم حلل",
    keyword: "طقم حلل مطبخ",
    icon: "🍳"
  },
  {
    category: "home",
    title: "شفاطات معدنية قابلة لإعادة الاستخدام",
    keyword: "شفاطات استانلس ستيل",
    icon: "🥤"
  },
  {
    category: "home",
    title: "شماعات ملابس معدنية 10 قطع",
    keyword: "شماعات ملابس معدنية 10 قطع",
    icon: "👔"
  },
  {
    category: "home",
    title: "سلال تخزين قماشية قابلة للطي",
    keyword: "سلال تخزين قماشية",
    icon: "🧺"
  },
  {
    category: "home",
    title: "طقم تنظيف أرضيات",
    keyword: "شرشوبة مسطحة ودلو",
    icon: "🧹"
  },
  {
    category: "home",
    title: "بخاخ زيت للطبخ",
    keyword: "بخاخ زيت للمطبخ",
    icon: "🫒"
  },
  {
    category: "home",
    title: "مضرب رغوة حليب قابل للشحن",
    keyword: "مضرب رغوة حليب قابل للشحن",
    icon: "☕"
  },
  {
    category: "home",
    title: "نبات صناعي للديكور",
    keyword: "نبات صناعي يوكاليبتوس",
    icon: "🌿"
  },
  {
    category: "grocery",
    title: "قهوة",
    keyword: "قهوة",
    icon: "☕"
  },
  {
    category: "grocery",
    title: "شوكولاتة",
    keyword: "شوكولاتة",
    icon: "🍫"
  }
];

/* =========================================
   المنتجات ذات الروابط المباشرة
   الروابط أرسلها صاحب الموقع
   ========================================= */

const DIRECT_PRODUCTS = [

  {
    category: "home",
    title: "محضرة طعام نينجا Ninja BN800EU",
    keyword: "Ninja BN800EU",
    icon: "🍲",
    link: "https://www.amazon.eg/dp/B08HSF4FY6?tag=" +
      encodeURIComponent(TAG)
  },

  {
    category: "electronics",
    title: "سماعة Logitech G321 LIGHTSPEED",
    keyword: "Logitech G321 LIGHTSPEED",
    icon: "🎧",
    link: "https://www.amazon.eg/dp/B0FFM18D66/ref=cm_sw_r_as_gl_apa_gl_i_J71R7GVHJ6EGFMS5ATB2?linkCode=ml1&tag=ashrafdealseg-21&linkId=f6f56426d57b2233de2b5608fb6a5e05"
  },

  {
    category: "electronics",
    title: "ساعة iQIBLA Q Watch S6 Lite",
    keyword: "iQIBLA Q Watch S6 Lite",
    icon: "⌚",
    link: "https://www.amazon.eg/dp/B0HMWZYRTC/ref=cm_sw_r_as_gl_apa_gl_i_JKP2ZF9VYXXHBWWZYW1P?linkCode=ml1&tag=ashrafdealseg-21&linkId=a795e187895a3cddb47afe9e309db6a2"
  },

  {
    category: "electronics",
    title: "سماعات TWS لاسلكية",
    keyword: "TWS",
    icon: "🎧",
    link: "https://www.amazon.eg/dp/B0HL6TGFS1/ref=cm_sw_r_as_gl_apa_gl_i_ZDZHHY0W04XEFCSYE9ZD?linkCode=ml1&tag=ashrafdealseg-21&linkId=5e8eb4fa05235ec8037facd07ac0d037"
  },

  {
    category: "electronics",
    title: "سماعات Pro 2+",
    keyword: "Pro 2+",
    icon: "🎧",
    link: "https://www.amazon.eg/dp/B0HL3XMYGW/ref=cm_sw_r_as_gl_apa_gl_i_TQ3EJSWSD2DHS2AJD0WA?linkCode=ml1&tag=ashrafdealseg-21&linkId=33e292754c25404d61bdbfed63d003ab"
  },

  {
    category: "electronics",
    title: "سماعة Sony WH-CH520 Cream",
    keyword: "Sony WH-CH520 Cream",
    icon: "🎧",
    link: "https://www.amazon.eg/dp/B0BSGQL41X/ref=cm_sw_r_as_gl_apa_gl_i_6X8BWQWPG82FH1J9N887?linkCode=ml1&tag=ashrafdealseg-21&linkId=1b7ed91d1b997c285158fd97ae8b7fcd"
  },

  {
    category: "electronics",
    title: "سماعة Soundcore Q20i",
    keyword: "Soundcore Q20i",
    icon: "🎧",
    link: "https://www.amazon.eg/dp/B0CCHTSFX1/ref=cm_sw_r_as_gl_apa_gl_i_XC3SY98M5HAPT5YX9JYG?linkCode=ml1&tag=ashrafdealseg-21&linkId=6391075ebbc41e169da82d784dde0e2c"
  },

  {
    category: "electronics",
    title: "سماعة SODO SD-1004",
    keyword: "SODO SD-1004",
    icon: "🎧",
    link: "https://www.amazon.eg/dp/B091J7JWT4/ref=cm_sw_r_as_gl_apa_gl_i_WZ5MPYSQCGW7CFGCB771?linkCode=ml1&tag=ashrafdealseg-21&linkId=7b46dae2357e899acff2a857f33388ff"
  },

  {
    category: "electronics",
    title: "شاحن CHOETECH B729",
    keyword: "CHOETECH B729",
    icon: "🔌",
    link: "https://www.amazon.eg/dp/B0HCH8Z5H3/ref=cm_sw_r_as_gl_apa_gl_i_DYTTBVAGAHBGN9WKNPBW?linkCode=ml1&tag=ashrafdealseg-21&linkId=50f61bb5f8616b8d3fcf9852026ad483"
  },

  {
    category: "electronics",
    title: "شاحن LENYES LW-218",
    keyword: "LENYES LW-218",
    icon: "🔌",
    link: "https://www.amazon.eg/dp/B0H5YHSD1L/ref=cm_sw_r_as_gl_apa_gl_i_1QDPHVJJB15VTJX1WZE3?linkCode=ml1&tag=ashrafdealseg-21&linkId=64fc1e40f4a60624f578b2ed1cf84ee5"
  },

  {
    category: "electronics",
    title: "سماعة M19 Series",
    keyword: "M19 Series",
    icon: "🎧",
    link: "https://www.amazon.eg/dp/B0HGPRY6CS/ref=cm_sw_r_as_gl_apa_gl_i_SWW5GNPYJG53J8GB8TVE?linkCode=ml1&tag=ashrafdealseg-21&linkId=7b29c95f129de5859aed11e01a5b4006"
  },

  {
    category: "electronics",
    title: "شاحن Anker Zolo USB-C 30W",
    keyword: "Anker Zolo USB-C 30W",
    icon: "🔌",
    link: "https://www.amazon.eg/dp/B0DXLBNG6K/ref=cm_sw_r_as_gl_apa_gl_i_FKTWAFRZDNF8BWE8C19R?linkCode=ml1&tag=ashrafdealseg-21&linkId=2aa4b34ebbe3a864eb5237b052314ad6"
  },

  {
    category: "electronics",
    title: "سماعة GM-T008",
    keyword: "GM-T008",
    icon: "🎧",
    link: "https://www.amazon.eg/dp/B0H5NDC2XK/ref=cm_sw_r_as_gl_apa_gl_i_Q191XGBCKS1X5DT4GRMP?linkCode=ml1&tag=ashrafdealseg-21&linkId=44e2382583e4e8bf632a85e2dc1ced24"
  },

  {
    category: "electronics",
    title: "بطاريات Camelion RT393",
    keyword: "Camelion RT393",
    icon: "🔋",
    link: "https://www.amazon.eg/dp/B0B9GFPFF4/ref=cm_sw_r_as_gl_apa_gl_i_G1HR98C9EBXDTJQRV5AT?linkCode=ml1&tag=ashrafdealseg-21&linkId=d5a351be144ea1dfd000504c25fb0d7f"
  },

  {
    category: "electronics",
    title: "ماوس لاسلكي قابل للشحن Kanmabpc",
    keyword: "Kanmabpc wireless mouse",
    icon: "🖱️",
    link: "https://www.amazon.eg/dp/B0BYD5H31D/ref=cm_sw_r_as_gl_apa_gl_i_7DN63ZEZT3DWEJQBH3MC?linkCode=ml1&tag=ashrafdealseg-21&linkId=a90f7ab939e50f9433644698d83ad69e"
  }

];

/* =========================================
   تجهيز قائمة المنتجات
   ========================================= */

// روابط البحث
const searchOffers = SEARCH_PRODUCTS.map(product => ({
  ...product,
  image: getProductImage(product.title),
  store: "أمازون مصر",
  link: buildAmazonSearch(product.keyword),
  linkType: "search"
}));

// المنتجات ذات الروابط المباشرة
const directOffers = DIRECT_PRODUCTS.map(product => ({
  ...product,
  image: getProductImage(product.title),
  store: "أمازون مصر",
  linkType: "direct"
}));

// القائمة النهائية
const offers = [...directOffers, ...searchOffers];

/* =========================================
   عناصر الصفحة
   ========================================= */

const container = document.getElementById("offers");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const resultCount = document.getElementById("result-count");

/* =========================================
   التحقق من عناصر الصفحة
   ========================================= */

if (!container || !searchInput || !categorySelect) {
  console.error(
    "تعذر العثور على عناصر الموقع: offers أو search أو category"
  );

} else {

  // تطبيع النص العربي لتسهيل البحث
  function normalizeArabic(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[أإآ]/g, "ا")
      .replace(/ى/g, "ي")
      .replace(/ة/g, "ه")
      .replace(/[ًٌٍَُِّْـ]/g, "")
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  // إنشاء صورة أو أيقونة احتياطية
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

    const category = document.createElement("span");
    category.className = "product-category";
    category.textContent =
      CATEGORY_NAMES[product.category] || "منتجات";

    const button = document.createElement("a");
    button.className = "btn";
    button.href = product.link;
    button.target = "_blank";
    button.rel = "nofollow sponsored noopener noreferrer";

    button.textContent =
      product.linkType === "direct"
        ? "عرض المنتج على أمازون"
        : "ابحث عن المنتج";

    body.appendChild(title);
    body.appendChild(category);
    body.appendChild(store);
    body.appendChild(button);

    card.appendChild(body);

    return card;
  }

  // تحديث عدد النتائج
  function updateCount(count) {
    if (resultCount) {
      resultCount.textContent = "عدد المنتجات: " + count;
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
        product.category + " " +
        (CATEGORY_NAMES[product.category] || "")
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

  // العرض الأول
  render();

  console.log(
    "NOKHBA: تم تحميل " +
    offers.length +
    " منتجًا بنجاح."
  );
}
