const TAG = "ashrafhassa03-21";

const offers = [
  {
    title: "اكتب اسم المنتج هنا",
    store: "أمازون مصر",
    category: "electronics",
    asin: "ضع_كود_المنتج"
  }
  // لإضافة منتج تاني: حط فاصلة بعد القوس اللي فوق، وانسخ نفس الشكل
];

const icons = { electronics: "📱", fashion: "👟", home: "🏠", grocery: "🛒" };

const container = document.getElementById("offers");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

function buildLink(o) {
  return "https://www.amazon.eg/dp/" + o.asin + "?tag=" + TAG;
}

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
          <a class="btn" href="${buildLink(o)}" target="_blank" rel="nofollow sponsored noopener">شوف السعر على أمازون</a>
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
