const products = [
  { id: 1, name: "Canon EOS R5", price: 3299.00, image: "canon-eos-r5.web.webp", category: "cameras" },
  { id: 2, name: "Sony Alpha A7 IV", price: 2499.00, image: "sony-a7iv.webp", category: "cameras" },
  { id: 3, name: "Nikon Z9", price: 5499.00, image: "nikon-z9.webp", category: "cameras" },
  { id: 4, name: "Fujifilm X-T5", price: 1699.00, image: "fujifilm-xt5.webp", category: "cameras" },
  { id: 5, name: "Panasonic Lumix S5II", price: 1999.00, image: "lumix-s5ii.webp", category: "cameras" },
  { id: 6, name: "Leica Q3", price: 5999.00, image: "leica-q3.webp", category: "cameras" },
  { id: 7, name: "Olympus OM-D E-M1 Mark III", price: 1499.00, image: "olympus-e1m3.webp", category: "cameras" },
  { id: 8, name: "Sony ZV-E10", price: 799.00, image: "sony-zve10.webp", category: "cameras" },
  { id: 9, name: "Canon EOS R10", price: 999.00, image: "canon-r10.webp", category: "cameras" },
  { id: 10, name: "Nikon Zfc", price: 1099.00, image: "nikon-zfc.webp", category: "cameras" },
  { id: 11, name: "Fujifilm X-S20", price: 1299.00, image: "fujifilm-xs20.webp", category: "cameras" },
  { id: 12, name: "Sony RX100 VII", price: 1199.00, image: "sony-rx100vii.webp", category: "cameras" },
  { id: 13, name: "Canon EOS M50 Mark II", price: 699.00, image: "canon-m50m2.webp", category: "cameras" },
  { id: 14, name: "Panasonic Lumix GH6", price: 1999.00, image: "lumix-gh6.webp", category: "cameras" },
  { id: 15, name: "Leica SL2-S", price: 4999.00, image: "leica-sl2s.webp", category: "cameras" },
  { id: 16, name: "Nikon Z6 II", price: 1999.00, image: "nikon-z6ii.webp", category: "cameras" },
  { id: 17, name: "Sony Alpha A1", price: 6499.00, image: "sony-a1.webp", category: "cameras" },
  { id: 18, name: "Canon EOS R3", price: 5999.00, image: "canon-r3.webp", category: "cameras" },
  { id: 19, name: "Fujifilm GFX100S", price: 5999.00, image: "fujifilm-gfx100s.webp", category: "cameras" },
  { id: 20, name: "Olympus PEN-F", price: 1199.00, image: "olympus-penf.webp", category: "cameras" },
  { id: 21, name: "Panasonic Lumix G100", price: 749.00, image: "lumix-g100.webp", category: "cameras" },
  { id: 22, name: "Sony FX3 Cinema Line", price: 3899.00, image: "sony-fx3.webp", category: "cameras" },
  { id: 23, name: "Nikon D850", price: 2999.00, image: "nikon-d850.webp", category: "cameras" },
  { id: 24, name: "Canon PowerShot G7 X Mark III", price: 749.00, image: "canon-g7xiii.webp", category: "cameras" },
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
