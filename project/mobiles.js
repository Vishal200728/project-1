const products = [
  
  { id: 1, name: "Samsung Galaxy S24 Ultra", price: 1299.00, image: "-original-imahyvntxfrpuw6g.webp", category: "mobiles" },
  { id: 2, name: "Apple iPhone 15 Pro Max", price: 1399.00, image: "-original-imagtc3h9h6kpbkc.webp", category: "mobiles" },
  { id: 3, name: "Google Pixel 9 Pro", price: 1099.00, image: "-original-imahegqhzpytd3kg.webp", category: "mobiles" },
  { id: 4, name: "OnePlus 12", price: 899.00, image: "12-5g-op12-5g-oneplus-original-imagxgt7uwerszh8.webp", category: "mobiles" },
  { id: 5, name: "Xiaomi 14 Pro", price: 799.00, image: "OIP.webp", category: "mobiles" },
  { id: 6, name: "Realme GT Neo 6", price: 499.00, image: "download.webp", category: "mobiles" },
  { id: 7, name: "Vivo X100 Pro", price: 999.00, image: "OIP.webp", category: "mobiles" },
  { id: 8, name: "Oppo Find X7 Ultra", price: 1099.00, image: "download (1).webp", category: "mobiles" },
  { id: 9, name: "Motorola Edge 50 Ultra", price: 899.00, image: "download (2).webp", category: "mobiles" },
  { id: 10, name: "Nothing Phone 2", price: 699.00, image: "download (3).webp", category: "mobiles" },
  { id: 11, name: "Asus ROG Phone 8", price: 1099.00, image: "OIP (1).webp", category: "mobiles" },
  { id: 12, name: "Sony Xperia 1 VI", price: 1199.00, image: "OIP (11).webp", category: "mobiles" },
  { id: 13, name: "Honor Magic6 Pro", price: 1099.00, image: "OIP (10).webp", category: "mobiles" },
  { id: 14, name: "Huawei Mate 60 Pro", price: 1299.00, image: "download (4).webp", category: "mobiles" },
  { id: 15, name: "Infinix Zero Ultra", price: 499.00, image: "OIP (2).webp", category: "mobiles" },
  { id: 16, name: "Poco F6 Pro", price: 599.00, image: "download (5).webp", category: "mobiles" },
  { id: 17, name: "Samsung Galaxy Z Fold6", price: 1799.00, image: "OIP (3).webp", category: "mobiles" },
  { id: 18, name: "Samsung Galaxy Z Flip6", price: 1099.00, image: "OIP (4).webp", category: "mobiles" },
  { id: 19, name: "Apple iPhone 15", price: 999.00, image: "download (6).webp", category: "mobiles" },
  { id: 20, name: "Apple iPhone 15 Plus", price: 1099.00, image: "OIP (5).webp", category: "mobiles" },
  { id: 21, name: "OnePlus Nord 4", price: 499.00, image: "OIP (6).webp", category: "mobiles" },
  { id: 22, name: "Xiaomi Redmi Note 14 Pro", price: 399.00, image: "OIP (7).webp", category: "mobiles" },
  { id: 23, name: "Realme Narzo 70 Pro", price: 349.00, image: "OIP (8).webp", category: "mobiles" },
  { id: 24, name: "Oppo Reno12 Pro", price: 699.00, image: "OIP (9).webp", category: "mobiles" },
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
