const products = [
{ id: 1, name: "Apple iPad Pro 12.9 (M4)", price: 3299.00, image: "ipad-pro-12-m4.webp", category: "tablets" },
{ id: 2, name: "Samsung Galaxy Tab S9 Ultra", price: 2499.00, image: "galaxy-tab-s9-ultra.webp", category: "tablets" },
{ id: 3, name: "Microsoft Surface Pro 9", price: 5499.00, image: "surface-pro-9.webp", category: "tablets" },
{ id: 4, name: "Lenovo Tab Extreme", price: 1699.00, image: "lenovo-tab-extreme.webp", category: "tablets" },
{ id: 5, name: "Xiaomi Pad 6 Max", price: 1999.00, image: "xiaomi-pad-6-max.webp", category: "tablets" },
{ id: 6, name: "Huawei MatePad Pro 13.2", price: 5999.00, image: "matepad-pro-13-2.webp", category: "tablets" },
{ id: 7, name: "Asus ROG Flow Z13", price: 1499.00, image: "rog-flow-z13.webp", category: "tablets" },
{ id: 8, name: "Realme Pad X", price: 799.00, image: "realme-pad-x.webp", category: "tablets" },
{ id: 9, name: "Apple iPad Air (M2)", price: 999.00, image: "ipad-air-m2.webp", category: "tablets" },
{ id: 10, name: "Samsung Galaxy Tab S7 FE", price: 1099.00, image: "galaxy-tab-s7-fe.webp", category: "tablets" },
{ id: 11, name: "OnePlus Pad", price: 1299.00, image: "oneplus-pad.webp", category: "tablets" },
{ id: 12, name: "Amazon Fire Max 11", price: 1199.00, image: "fire-max-11.webp", category: "tablets" },
{ id: 13, name: "Apple iPad (10th Gen)", price: 699.00, image: "ipad-10th-gen.webp", category: "tablets" },
{ id: 14, name: "Xiaomi Pad 5 Pro", price: 1999.00, image: "xiaomi-pad-5-pro.webp", category: "tablets" },
{ id: 15, name: "Lenovo Yoga Tab 13", price: 4999.00, image: "yoga-tab-13.webp", category: "tablets" },
{ id: 16, name: "Samsung Galaxy Tab S8+", price: 1999.00, image: "galaxy-tab-s8-plus.webp", category: "tablets" },
{ id: 17, name: "Microsoft Surface Go 4", price: 6499.00, image: "surface-go-4.webp", category: "tablets" },
{ id: 18, name: "Apple iPad Mini (6th Gen)", price: 5999.00, image: "ipad-mini-6.webp", category: "tablets" },
{ id: 19, name: "Huawei MatePad 11.5 PaperMatte", price: 5999.00, image: "matepad-11-5-papermatte.webp", category: "tablets" },
{ id: 20, name: "Nokia T20 Tablet", price: 1199.00, image: "nokia-t20.webp", category: "tablets" },
{ id: 21, name: "TCL NXTPAPER 11", price: 749.00, image: "tcl-nxtpaper-11.webp", category: "tablets" },
{ id: 22, name: "Asus ZenPad 10", price: 3899.00, image: "zenpad-10.webp", category: "tablets" },
{ id: 23, name: "Teclast T50 Pro", price: 2999.00, image: "teclast-t50-pro.webp", category: "tablets" },
{ id: 24, name: "Blackview Tab 15", price: 749.00, image: "blackview-tab-15.webp", category: "tablets" },

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
