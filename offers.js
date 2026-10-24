const offers = [
  {
    title: "سماعة بلوتوث لاسلكية",
    store: "أمازون مصر",
    category: "electronics",
    oldPrice: 900,
    newPrice: 549,
    image: "https://via.placeholder.com/400x300?text=Offer+1",
    link: "#"
  },
  {
    title: "ساعة ذكية رياضية",
    store: "نون",
    category: "electronics",
    oldPrice: 1500,
    newPrice: 999,
    image: "https://via.placeholder.com/400x300?text=Offer+2",
    link: "#"
  },
  {
    title: "حذاء رياضي رجالي",
    store: "جوميا",
    category: "fashion",
    oldPrice: 800,
    newPrice: 450,
    image: "https://via.placeholder.com/400x300?text=Offer+3",
    link: "#"
  }
];

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
      const discount = Math.round((1 - o.newPrice / o.oldPrice) * 100);
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${o.image}" alt="${o.title}" loading="lazy">
        <div class="body">
          <span class="badge">خصم ${discount}%</span>
          <h3>${o.title}</h3>
          <span class="store">${o.store}</span>
          <div><span class="price-new">${o.newPrice} ج.م</span> <span class="price-old">${o.oldPrice} ج.م</span></div>
          <a class="btn" href="${o.link}" target="_blank" rel="nofollow sponsored noopener">اشتري الآن</a>
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
