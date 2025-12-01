const products = [
  { id: 1, name: "Dell XPS 15", price: 1599.00, image: "Dell-XPS-15-9530-c.jpg", category: "laptop" },
  { id: 2, name: "Apple MacBook Pro 16", price: 2499.00, image: "OIP (12).webp", category: "laptops" },
  { id: 3, name: "HP Spectre x360", price: 1399.00, image: "hp-spectre.webp", category: "laptops" },
  { id: 4, name: "Lenovo ThinkPad X1 Carbon", price: 1799.00, image: "thinkpad-x1.webp", category: "laptops" },
  { id: 5, name: "Asus ROG Zephyrus G14", price: 1899.00, image: "rog-g14.webp", category: "laptops" },
  { id: 6, name: "Acer Predator Helios 300", price: 1499.00, image: "acer-predator.webp", category: "laptops" },
  { id: 7, name: "Microsoft Surface Laptop 5", price: 1299.00, image: "surface-laptop5.webp", category: "laptops" },
  { id: 8, name: "MSI Stealth 16 Studio", price: 1999.00, image: "msi-stealth16.webp", category: "laptops" },
  { id: 9, name: "Samsung Galaxy Book 4 Pro", price: 1399.00, image: "galaxy-book4.webp", category: "laptops" },
  { id: 10, name: "Razer Blade 15", price: 2499.00, image: "razer-blade15.webp", category: "laptops" },
  { id: 11, name: "Asus ZenBook Duo", price: 1799.00, image: "zenbook-duo.webp", category: "laptops" },
  { id: 12, name: "Apple MacBook Air M3", price: 1199.00, image: "macbook-air-m3.webp", category: "laptops" },
  { id: 13, name: "Dell Alienware m18", price: 2899.00, image: "alienware-m18.webp", category: "laptops" },
  { id: 14, name: "HP Omen 17", price: 1799.00, image: "hp-omen17.webp", category: "laptops" },
  { id: 15, name: "Lenovo Legion Pro 7i", price: 2299.00, image: "legion-pro7i.webp", category: "laptops" },
  { id: 16, name: "Acer Swift X 14", price: 1099.00, image: "acer-swiftx14.webp", category: "laptops" },
  { id: 17, name: "MSI Titan GT77 HX", price: 3499.00, image: "msi-titan77.webp", category: "laptops" },
  { id: 18, name: "Microsoft Surface Pro 9", price: 1399.00, image: "surface-pro9.webp", category: "laptops" },
  { id: 19, name: "Samsung Galaxy Book 4 Ultra", price: 1799.00, image: "galaxy-book4ultra.webp", category: "laptops" },
  { id: 20, name: "Asus TUF Gaming A17", price: 1399.00, image: "tuf-a17.webp", category: "laptops" },
  { id: 21, name: "Razer Blade Stealth 13", price: 1699.00, image: "razer-stealth13.webp", category: "laptops" },
  { id: 22, name: "LG Gram 17", price: 1599.00, image: "lg-gram17.webp", category: "laptops" },
  { id: 23, name: "Huawei MateBook X Pro", price: 1799.00, image: "matebook-xpro.webp", category: "laptops" },
  { id: 24, name: "Xiaomi Mi Notebook Pro X", price: 1399.00, image: "mi-notebook-prox.webp", category: "laptops" },
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
