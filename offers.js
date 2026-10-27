
const TAG = "ashrafhassa03-21";

// القسم | اسم المنتج | كلمات البحث | رمز توضيحي
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

function buildAmazonSearch(query) {
  const url = new URL("https://www.amazon.eg/s");
  url.searchParams.set("k", query);
  url.searchParams.set("tag", TAG);
  return url.toString();
}

const products = PRODUCTS.trim()
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

const container = document.getElementById("offers");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const resultCount = document.getElementById("result-count");

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
  note.textContent = "تحقق من السعر والتوافر لدى البائع";

  const link = document.createElement("a");
  link.className = "btn";
  link.href = product.link;
  link.target = "_blank";
  link.rel = "nofollow sponsored noopener noreferrer";
  link.textContent = "ابحث في أمازون مصر";
  link.setAttribute("aria-label", `البحث عن ${product.title} في أمازون مصر`);

  body.append(category, title, note, link);
  card.append(visual, body);

  return card;
}

function render() {
  const query = searchInput.value.trim().toLocaleLowerCase("ar");
  const selectedCategory = categorySelect.value;

  const filtered = products.filter(product => {
    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const searchableText =
      `${product.title} ${product.keywords} ${CATEGORY_NAMES[product.category]}`
        .toLocaleLowerCase("ar");

    return matchesCategory && searchableText.includes(query);
  });

  container.replaceChildren();

  filtered.forEach(product => {
    container.appendChild(createCard(product));
  });

  resultCount.textContent = `${filtered.length} منتج`;

  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "لم نعثر على منتجات مطابقة. جرّب كلمة بحث أخرى.";
    container.appendChild(empty);
  }
}

searchInput.addEventListener("input", render);
categorySelect.addEventListener("change", render);

render();
