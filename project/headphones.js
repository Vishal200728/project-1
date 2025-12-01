const products = [
{ id: 1, name: "Sony MDR-ZX110 On-Ear Stereo Headphones.", price: 5.000, image: "shopping (11).webp", category: "Headphones" },
{ id: 2, name: "Sony Pulse 3D Wireless Headset.", price: 49.99, image: "shopping (9).webp", category: "Headphones" },
{ id: 3, name: "Sony XB950B1 Extra Bass Wireless Headphones .", price: 14.99, image: "shopping (8).webp", category: "Headphones" },
{ id: 4, name: " Sony MDR-M1 Closed Back Headphones.", price: 59.99, image: "shopping (7).webp", category: "Headphones" },
{ id: 5, name: "Sony WH-1000XM4 Wireless Noise-Canceling Headphones.", price: 59.99, image: "shopping (6).webp", category: "Headphones" },
{ id: 6, name: "SONY Headphones.", price: 59.99, image: "shopping (5).webp", category: "Headphones" },
{ id: 7, name: "Sony WH-CH520 Wireless Bluetooth Headphones .", price: 59.99, image: "shopping (4).webp", category: "Headphones" },
{ id: 8, name: "Sony WH-CH720N Noise Canceling Wireless Headphones", price: 59.99, image: "shopping (3).webp", category: "Headphones" },
{ id: 9, name: "boAt Rockerz 551 ANC Pro Bluetooth Headphone.", price: 59.99, image: "shopping (2).webp", category: "Headphones" },
{ id: 10, name: "boAt Rockerz 430 Bluetooth Headphones.", price: 59.99, image: "shopping (1).webp", category: "Headphones" },
{ id: 11, name: "Best boAt Wireless Headphones with Mic .", price: 59.99, image: "download (12).jpg", category: "Headphones" },
{ id: 12, name: "Buy boAt Headphones Online at Best Prices in India.", price: 59.99, image: "download (11).jpg", category: "Headphones" },
{ id: 13, name: "Boat headphones with mic under 1000 hotsell.", price: 59.99, image: "download (10).jpg", category: "Headphones" },
{ id: 14, name: " Boat Company Headphone Price Wireless Boat Rockerz 510 Headphones.", price: 59.99, image: "Apple company headphone hot sell.webp", category: "Headphones" },
{ id: 15, name: " Boat Company Headphone Price BoAt Rockerz 450 Wireless Headphones.", price: 59.99, image: "download (8).jpg", category: "Headphones" },
{ id: 16, name: "boAt Rockerz 510 Specifications | FullSpecs.net." , price: 59.99, image: "download (7).jpg", category: "Headphones" },
{ id: 17, name: "Apple company headphone hotsell.", price: 59.99, image: "Apple company headphone hotsell.webp", category: "Headphones" },
{ id: 18, name: "Apple AirPods Max review: The iPhone 12 Pro Max of headphones", price: 59.99, image: "Apple company headphone hot sell.webp", category: "Headphones" },
{ id: 19, name: "Headphones & Speakers - All Accessories - Apple.", price: 59.99, image: "Headphones & Speakers - All Accessories - Apple.webp", category: "Headphones" },
{ id: 20, name: "AirPods Max - Blue - Apple.", price: 59.99, image: "AirPods Max - Blue - Apple.webp", category: "Headphones" },
{ id: 21, name: "Apple AirPods Max Wireless Over-Ear Headphones.", price: 59.99, image: "Apple AirPods Max Wireless Over-Ear Headphones.webp", category: "Headphones" },
{ id: 22, name: "Apple AirPods Max Wireless Over-Ear Closed-Back Headphones", price: 59.99, image: "Apple AirPods Max Wireless Over-Ear Closed-Back Headphones.webp", category: "Headphones" },
{ id: 23, name: "Apple introduces AirPods Max, the magic of AirPods.", price: 59.99, image: "Apple introduces AirPods Max, the magic of AirPods.webp", category: "Headphones" },
{ id: 24, name: "apple headphone 2.0 Over The Ear Wireless Bluetooth Headphones.", price: 59.99, image: "apple headphone 2.0 Over The Ear Wireless Bluetooth Headphones.webp", category: "Headphones" }

  
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