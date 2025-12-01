const products = [
  { id: 1, name: "Amazfit Bip 5 Smartwatch", price: 4999.00, image: "Amazfit Bip 5 Smartwatch.webp", category: "smartwatches" },
  { id: 2, name: "Fire-Boltt Ninja Call Pro Plus", price: 1599.00, image: "Fire-Boltt Ninja Call Pro Plus.webp", category: "smartwatches" },
  { id: 3, name: "Noise ColorFit Pulse Grand", price: 1799.00, image: "Noise ColorFit Pulse Grand.webp", category: "smartwatches" },
  { id: 4, name: "boAt Wave Sigma", price: 1299.00, image: "boAt Wave Sigma.webp", category: "smartwatches" },
  { id: 5, name: "Samsung Galaxy Watch 6", price: 28999.00, image: "Samsung Galaxy Watch 6.webp", category: "smartwatches" },
  { id: 6, name: "Apple Watch SE (2nd Gen)", price: 29900.00, image: "Apple Watch SE (2nd Gen).webp", category: "smartwatches" },
  { id: 7, name: "Realme Watch 3 Pro", price: 3699.00, image: "Realme Watch 3 Pro.webp", category: "smartwatches" },
  { id: 8, name: "OnePlus Nord Watch", price: 3499.00, image: "OnePlus Nord Watch.webp", category: "smartwatches" },
  { id: 9, name: "Fastrack Reflex Vox", price: 1999.00, image: "Fastrack Reflex Vox.webp", category: "smartwatches" },
  { id: 10, name: "Fitbit Versa 4", price: 19990.00, image: "Fitbit Versa 4.webp", category: "smartwatches" },
  { id: 11, name: "Crossbeats Ignite S4 Max", price: 4499.00, image: "Crossbeats Ignite S4 Max.webp", category: "smartwatches" },
  { id: 12, name: "Fire-Boltt Phoenix AMOLED", price: 2999.00, image: "Fire-Boltt Phoenix AMOLED.webp", category: "smartwatches" },
  { id: 13, name: "NoiseFit Halo", price: 2999.00, image: "NoiseFit Halo.webp", category: "smartwatches" },
  { id: 14, name: "Zebronics Zeb-Fit7220CH", price: 2199.00, image: "Zebronics Zeb-Fit7220CH.webp", category: "smartwatches" },
  { id: 15, name: "TAGG Verve NEO", price: 1599.00, image: "TAGG Verve NEO.webp", category: "smartwatches" },
  { id: 16, name: "Fire-Boltt Invincible Plus", price: 3999.00, image: "Fire-Boltt Invincible Plus.webp", category: "smartwatches" },
  { id: 17, name: "boAt Xtend Smartwatch", price: 2299.00, image: "boAt Xtend Smartwatch.webp", category: "smartwatches" },
  { id: 18, name: "Samsung Galaxy Watch 4", price: 14999.00, image: "Samsung Galaxy Watch 4.webp", category: "smartwatches" },
  { id: 19, name: "Apple Watch Series 9", price: 41999.00, image: "Apple Watch Series 9.webp", category: "smartwatches" },
  { id: 20, name: "Garmin Venu Sq 2", price: 24999.00, image: "Garmin Venu Sq 2.webp", category: "smartwatches" },
  { id: 21, name: "Fossil Gen 6", price: 17999.00, image: "Fossil Gen 6.webp", category: "smartwatches" },
  { id: 22, name: "NoiseFit Evolve 3", price: 3499.00, image: "NoiseFit Evolve 3.webp", category: "smartwatches" },
  { id: 23, name: "Amazfit GTS 4 Mini", price: 6999.00, image: "Amazfit GTS 4 Mini.webp", category: "smartwatches" },
  { id: 24, name: "Crossbeats Orbit X", price: 5999.00, image: "Crossbeats Orbit X.webp", category: "smartwatches" }
];


let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render all products (no search, no filter)
function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(productId) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity++;
  } else {
    const product = products.find(p => p.id === productId);
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
}

function increaseQuantity(index) {
  cart[index].quantity++;
  saveCart();
  updateCart();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    removeFromCart(index);
    return;
  }
  saveCart();
  updateCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function clearCart() {
  cart = [];
  saveCart();
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  const cartCount = document.getElementById("cart-count");
  const totalDisplay = document.getElementById("total");

  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    totalDisplay.textContent = `Total: ₹0.00`;
    cartCount.textContent = `Cart: 0`;
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price.toFixed(2)} × ${item.quantity}
      <button class="increase-btn" onclick="increaseQuantity(${index})">+</button>
      <button class="decrease-btn" onclick="decreaseQuantity(${index})">-</button>
      <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartList.appendChild(li);
  });

  cartCount.textContent = `Cart: ${cart.length}`;
  totalDisplay.textContent = `Total: ₹${total.toFixed(2)}`;
}

// Event listener for clear cart button
document.getElementById("clear-cart").addEventListener("click", clearCart);

// Initialize
renderProducts();
updateCart();
