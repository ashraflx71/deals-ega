const TAG = "ashrafhassa03-21";

// القسم | العنوان | كلمة البحث (أو رابط) | أيقونة أو اسم صورة مرفوعة (اختياري)
const PRODUCTS = `
electronics | سماعات بلوتوث لاسلكية | سماعات بلوتوث لاسلكية | 🎧
electronics | باور بانك 20000 مللي أمبير | باور بانك 20000 | 🔋
electronics | ساعة ذكية | ساعة ذكية | ⌚
electronics | شاحن موبايل سريع | شاحن سريع تايب سي | 🔌
electronics | سماعة جيمنج | سماعة جيمنج | 🎮
electronics | كشاف LED قابل للشحن | كشاف LED قابل للشحن | 🔦
fashion | حذاء رياضي رجالي | حذاء رياضي رجالي | 👟
fashion | حذاء رياضي حريمي | حذاء رياضي حريمي | 👟
fashion | شنطة ظهر | شنطة ظهر | 🎒
fashion | ساعة يد رجالي | ساعة يد رجالي | ⌚
home | خلاط كهربائي | خلاط كهربائي | 🥤
home | مكواة بخار | مكواة بخار | 👔
home | مروحة | مروحة | 🌀
home | طقم حلل | طقم حلل | 🍳
grocery | قهوة | قهوة | ☕
grocery | شوكولاتة | شوكولاتة | 🍫
`;

const bg = {
  electronics: "linear-gradient(135deg,#e3f2fd,#bbdefb)",
  fashion: "linear-gradient(135deg,#fce4ec,#f8bbd0)",
  home: "linear-gradient(135deg,#e8f5e9,#c8e6c9)",
  grocery: "linear-gradient(135deg,#fff3e0,#ffe0b2)"
};

function buildLink(x) {
  if (x.startsWith("http")) return x;
  return "https://www.amazon.eg/s?k=" + encodeURIComponent(x) + "&tag=" + TAG;
}

function visual(o) {
  if (/\.(jpg|jpeg|png|webp)$/i.test(o.icon)) {
    return `<img src="${o.icon}" alt="${o.title}" style="width:100%;height:160px;object-fit:cover;">`;
  }
  return `<div style="height:160px;display:flex;align-items:center;justify-content:center;font-size:4rem;background:${bg[o.category] || bg.grocery};">${o.icon || "🛍️"}</div>`;
}

const offers = PRODUCTS.split("\n")
  .map(l => l.trim())
  .filter(l => l.includes("|"))
  .map(l => {
    const [category, title, x, icon] = l.split("|").map(s => s.trim());
    return { category, title, store: "أمازون مصر", link: buildLink(x), icon: icon || "" };
  });

const container = document.getElementById("offers");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

function render() {
  const q = searchInput.value.trim().toLowerCase();
  const cat = categorySelect.value;
  container.innerHTML = "";

  offers
    .filter(o => (cat === "all" || o.category === cat) &&
                 (o.title + o.store).toLowerCase().includes(q))
    .forEach(o => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        ${visual(o)}
        <div class="body">
          <h3>${o.title}</h3>
          <span class="store">${o.store}</span>
          <a class="btn" href="${o.link}" target="_blank" rel="nofollow sponsored noopener">شوف العروض</a>
        </div>`;
      container.appendChild(card);
    });

  if (!container.children.length) {
    container.innerHTML = "<p style='padding:20px'>مفيش عروض مطابقة للبحث.</p>";
  }
}

searchInput.addEventListener("input", render);
categorySelect.addEventListener("change", render);
render();
