const menuData = [
  { name: "Paneer Tikka", price: 180, category: "veg", image: "images/paneer_tikka.jpeg" },
  { name: "Veg Burger", price: 120, category: "veg", image: "images/veg_burger.jpeg" },
  { name: "Spring Roll", price: 100, category: "veg", image: "images/spring_roll.jpeg" },
  { name: "Chicken Curry", price: 220, category: "non-veg", image: "images/chicken_curry.jpeg" },
  { name: "Fish Fry", price: 180, category: "non-veg", image: "images/fish_fry.jpeg" },
  { name: "Mutton Biryani", price: 250, category: "non-veg", image: "images/mutton_biryani.jpeg" },
  { name: "Chicken Shawarma", price: 120, category: "non-veg", image: "images/chicken_shawarma.jpeg" },
  { name: "Tandoori Chicken", price: 200, category: "non-veg", image: "images/tandoori_chicken.jpeg" },
  { name: "Mushroom Rice", price: 150, category: "veg", image: "images/mushroom_rice.jpg" },
  { name: "Gobi 65", price: 100, category: "veg", image: "images/gobi_65.png" }
];

const menuSection = document.getElementById("menu");
const totalDisplay = document.getElementById("total");
const cartSection = document.getElementById("cart");

let total = 0;
let orderedItems = [];

function renderMenu(category = "all") {
  menuSection.innerHTML = "";

  const filteredItems = category === "all"
    ? menuData
    : menuData.filter(item => item.category === category);

  filteredItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button>Add to Cart</button>
    `;
    card.querySelector("button").onclick = () => addToCart(item.price, item.name);
    menuSection.appendChild(card);
  });
}

function addToCart(price, name) {
  total += price;
  totalDisplay.textContent = total;
  orderedItems.push({ name, price });
  updateOrderSummary();
}

function updateOrderSummary() {
  let summary = document.getElementById("orderSummary");
  if (!summary) {
    summary = document.createElement("div");
    summary.id = "orderSummary";
    summary.className = "order-items";
    cartSection.insertBefore(summary, document.getElementById("placeOrder"));
  }

  summary.innerHTML = orderedItems
    .map(item => `<p>${item.name} - ₹${item.price}</p>`)
    .join("");
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.category);
  });
});

document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

document.getElementById("placeOrder").addEventListener("click", () => {
  if (total === 0) {
    alert("😶Your cart is empty!");
  } else {
    alert(`✅Order placed! Total amount: ₹${total}`);

    setTimeout(() => {
      alert("🍽️Order ready for pick up!");
    }, 3500);

    total = 0;
    totalDisplay.textContent = total;
    orderedItems = [];
    updateOrderSummary();
  }
});

renderMenu();
