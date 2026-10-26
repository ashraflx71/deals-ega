const TAG = "ashrafhassa03-21";

// الشكل: القسم | العنوان | كلمة البحث على أمازون
const PRODUCTS = `
electronics | سماعات بلوتوث لاسلكية | سماعات بلوتوث لاسلكية
electronics | باور بانك 20000 مللي أمبير | باور بانك 20000
electronics | ساعة ذكية | ساعة ذكية
electronics | شاحن موبايل سريع | شاحن سريع تايب سي
electronics | سماعة جيمنج | سماعة جيمنج
electronics | كشاف ومصباح LED شحن | كشاف LED قابل للشحن
fashion | حذاء رياضي رجالي | حذاء رياضي رجالي
fashion | حذاء رياضي حريمي | حذاء رياضي حريمي
fashion | شنطة ظهر | شنطة ظهر
fashion | ساعة يد | ساعة يد رجالي
home | خلاط كهربائي | خلاط كهربائي
home | مكواة بخار | مكواة بخار
home | مروحة | مروحة
home | طقم أواني طبخ | طقم حلل
grocery | قهوة ونسكافيه | قهوة
grocery | شوكولاتة | شوكولاتة
`;

const icons = { electronics: "📱", fashion: "👟", home: "🏠", grocery: "🛒" };

function buildLink(x) {
  if (x.startsWith("http")) return x;
  return "https://www.amazon.eg/s?k=" + encodeURIComponent(x) + "&tag=" + TAG;
}

const offers = PRODUCTS.split("\n")
  .map(l => l.trim())
  .filter(l => l.includes("|"))
  .map(l => {
    const [category, title, x] = l.split("|").map(s => s.trim());
    return { category, title, store: "أمازون مصر", link: buildLink(x) };
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
        <div style="height:140px;display:flex;align-items:center;justify-content:center;font-size:3rem;background:#fff3e0;">${icons[o.category] || "🛍️"}</div>
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
